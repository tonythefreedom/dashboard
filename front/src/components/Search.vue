<template>
  <div>
    <flamingo-head></flamingo-head>

    <!-- search-->
    <div class="search">

      <!-- search_bar-->
      <div class="search_bar">

        <!--<input type="text"/>-->
        <autocomplate
          url="https://maps.googleapis.com/maps/api/geocode/json?address="
          anchor="formatted_address"
          label="geometry.bounds"
          name="autocomplete"
          :customParams="{ token: 'dev' }"
          :classes="{ input: 'form-control', wrapper: 'input-wrapper'}"
          :process="processJSON"
          :onSelect="handleSelect"
        >
        </autocomplate>


        <input type="submit" class="search" value="Search" @click="searchClick"/>


        <!-- <input type="submit" @click="searchClick" value="Search" class="searched"/> -->

            </div>
            <!-- search_bar-->

            <!-- select_box-->
            <div class="select_box" >

                <!-- country before-->
                <!--<div class="select">-->
                    <!--<span class="default">Country</span>-->
                <!--</div>-->

                <dropdown :title="'Country'" :values="arrCountry"  @change-select="changePickCountry"></dropdown>
                <dropdown :title="'Category'" :values="arrCategory"  @change-select="changePickCategory"></dropdown>

                <calendar :year="2018" :month="3" :title_class="'default'" @change-date="changeDateFunc"></calendar>

            </div>
            <!-- select_box-->

            <!-- search_result-->
            <div class="search_result">

                <!-- state -->
                <div class="state">
                    <span>Scores</span>
                    <div class="fillter_result">
                        <span>{{ option }}</span>
                        <em class="time">{{ currentTime }}</em>
                    </div>
                </div>
                <!-- state -->

                <!-- result_view -->
                <div class="result_view">
                    <div class="top">
                        <span class="rank">Rank</span>
                        <div class="sort">
                            <span>Score</span>
                            <span>Change</span>
                        </div>
                    </div>
                    <!--<div v-for="item in result" v-bind:key="item.rank" class="list">-->
                        <!--<a :href="'/#/selected?itemid=' + item.itemid">-->
                            <!--<div class="row">-->
                                <!--<img :src="item.logourl">-->
                                <!--<span class="name">{{ item.name }}</span>-->
                                <!--<div class="sort">-->
                                    <!--<span>{{ item.score }}</span>-->
                                    <!--<span :class="getChangeClass(item.change)">{{ getChangeNumber(item.change) }}</span>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</a>-->
                    <!--</div>-->
                    <div v-model="arrRank" v-for="item in arrRank" class="list">
                      <a :href="uris + item.company">
                        <div class="row">
                          <span class="name">{{item.company}}</span>
                          <div class="sort">
                            <span>{{item.avg}}</span>
                            <span :class="getChangeClass(item.deviation)">{{getChangeNumber(item.deviation)}}</span>
                          </div>
                        </div>
                      </a>
                    </div>

                </div>
                <!-- result_view -->

            </div>
            <!-- search_result-->

        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Dropdown from './control/Dropdown.vue'
import Calendar from './control/Calendar.vue'
import Vue2Autocomplete from 'vue2-autocomplete-js'

export default {
  name: 'Search',
  components: {
    'flamingo-head': Header,
    Dropdown,
    Calendar,
    'autocomplate': Vue2Autocomplete
  },
  data: function() {
    return {
        result:  [],
        country: '',
        region: '',
        cagetory: '',
        date: null,
        preContent: {},
        arrCategory: [],
        arrCountry: [],
        arrNowMenu: [],
        pickCategory: '',
        pickCountry: '',
        pickDate: null,
        arrRank: [],
        cntRank: 0,
        uris:'',


    }
  },
  computed: {
      option: function() {
          var result = ''
        if (this.date != null) {
            var dates = this.date.toString().split(' ')
            result = dates[1] + '.' + dates[2] + '.' + dates[3]
        }

        if (this.country != '') {
            if (result.length != 0)
                result += ', '
            result += this.country
        }

        if (this.region != '') {
            if (result.length != 0)
                result += ', '
            result += this.region
        }

        if (this.cagetory != '') {
            if (result.length != 0)
                result += ', '
            result += this.cagetory
        }

        return result
      },
      currentTime: function() {
        var now = new Date()
        return now.toTimeString().split(' ')[0]
      }
  },
  methods: {
    getURIs: function(){
      return "/#/selected?country=" + this.pickCountry + "&startDate=" + this.getGoogleTrendsApiTime(this.getPreMonthDate2(this.pickDate, 6)) + "&endDate=" + this.getGoogleTrendsApiTime(this.pickDate) + "&company=";
    },
    changeDateFunc: function(date) {
        var year = date / 10000
        var month = date % 10000 / 100
        var day = date % 100
        this.pickDate = new Date(year, month, day)
        //console.log(_date.getFullYear() + "-"+_date.getMonth()+"-"+_date.getDate())
        //this.pickDate = _date.getFullYear() + "-" + _date.getMonth() + '-' + _date.getDate();
        console.log(this.pickDate);
        this.findCompany().then(this.makeListRank);
        this.uris = this.getURIs();
    },
    changePickCategory: function(value) {
        //this.cagetory = value.toUpperCase()
      console.log("Value : " + value + ", type : " + typeof(value));
      this.pickCategory = value.toUpperCase();
      this.findCompany().then(this.makeListRank);
      this.uris = this.getURIs();

    },
    changePickCountry: function(value) {
      this.pickCountry = value.toUpperCase();
      this.findCompany().then(this.makeListRank);
      this.uris = this.getURIs();
    },
    getChangeNumber: function(change) {
        if (change != 0)
            return Math.abs(change)
        else
            return '-'
    },
    getChangeClass: function(change) {
        if (change > 0)
            return 'up'
        else if (change < 0)
            return 'down'
        else
            return ''
    },
    search: function() {

         this.$http
        .get("/static/action/search.json")
        .then(result => {
          if (result.status == 200) {
            this.result = result.data.data;
          }
        });
    },
    loadMenusFranchises: function(){
      var _arrCategory=[];
      var _arrCountry=[];
      this.$http.get("/static/action/menusFranchises.json")
        .then(result => {
          if(result.status == 200) {
            //console.log(result.data);
            for(var i=0; i < result.data.length; i++) {
              _arrCategory.push(result.data[i].Category);
              _arrCountry.push(result.data[i].Country);
              //console.log(result.data[i].Category);
            };
            this.arrCategory = _arrCategory.filter(function(item,i){
              return _arrCategory.indexOf(item) == i;
            });
            this.arrCountry = _arrCountry.filter(function(item,i){
              return _arrCountry.indexOf(item) == i;
            });
            console.log(this.arrCategory + "___Size is : " + this.arrCategory.length);
            console.log(this.arrCountry + "___Size is : " + this.arrCountry.length);
      }
      }).catch(function(err){
        console.log("[ERROR][getMenusFranchises] : " + err);
      });
    },
    initOptions: function(){
      this.loadMenusFranchises();
      this.pickCategory = 'fast food restaurant';
      this.pickCountry = 'UK';
      //var tmp = Date.now();
      this.pickDate = new Date('2018','03','01');
      console.log("INI : " + this.pickCategory + this.pickCountry + this.pickDate);


    },
    searchClick: function() {
        this.search()
    },
    processJSON(json) {
      return json.results;
    },
    handleSelect(data) {
      console.log(typeof(data));
      this.preContent = JSON.stringify(data, null, 4)
      console.log(this.preContent);
    },
    findCompany: function(){
      return new Promise((resolve, reject) => {
          var arrCompany = [];
          console.log("Now Picks : " + this.pickCountry +" and "+ this.pickCategory);
          this.$http.get("/static/action/menusFranchises.json")
            .then(result => {
            if( result.status == 200 ){
            for(var i=0; i<result.data.length; i++){
              //console.log("for_Category : " + result.data[i].Category + ", and type : " + typeof(result.data[i].Category));
              //console.log("this_Category : " + this.pickCategory + ", and type : " + typeof(this.pickCategory));
                if( result.data[i].Category.toUpperCase() == this.pickCategory && result.data[i].Country.toUpperCase() == this.pickCountry ) {
                  arrCompany.push(result.data[i].Company_Name);
                }
            }
            console.log("[findCompany]" + arrCompany);
            resolve(arrCompany);
          }
        }).catch((err) => {
            console.log("[ERROR][getMenusFranchises] : " + err);
            reject("[ERROR][getMenusFranchises] : " + err);
        });
      });
    },
    queryCompanyRank: function(_arrCompany, _cnt) {
      console.log("queryCompanyRank-----------------------------");
        this.$http.get('/api/trends/rank', {
        params: {
          keyword: _arrCompany[_cnt],
          startTime: this.getGoogleTrendsApiTime(this.getPreMonDate(this.pickDate)),
          endTime: this.getGoogleTrendsApiTime(this.pickDate),
          preStartTime: this.getGoogleTrendsApiTime(this.getPreMonDate(this.getPreMonDate(this.pickDate))),
          preEndTime: this.getGoogleTrendsApiTime(this.getPreMonDate(this.pickDate)),
          period: "1",
          geo: this.pickCountry
        }}).then((result)=>{
        this.arrRank.push(result.data);
        }).catch((err)=>{
          console.log(err);
        });

      },
    addCntRank: function(){
      this.cntRank++;
    },
    makeListRank : function(_arrCompany) {
      this.arrRank = [];
      for(var i=0; i<_arrCompany.length; i++) {
        this.queryCompanyRank(_arrCompany, i);
      }
      console.log("-----------------------------------makeListRank-----------------------------");
    },
    getPreMonDate: function(_date) {
      var ret = null;
      if( _date.getMonth() == "01" ) {
        ret = new Date(_date.getFullYear() - 1, "12", _date.getDate());
      } else {
        ret = new Date(_date.getFullYear(), _date.getMonth()-1, _date.getDate());
      }
      //console.log("[getPreMonDate] : " + ret);
      return ret;
    },
    getPreMonthDate2: function(_date, _prevCnt) {
      var _pickMonth = _date.getMonth();
      var _year = _date.getFullYear();
      console.log("getPreMonthDate2******* : " + _pickMonth + _year);

      for( var i=1; i<=_prevCnt; i++ ) {
        if( _pickMonth == "1") {
          --_year;
          _pickMonth = "12";
        } else {
          --_pickMonth;
        }
      }
      var _d = new Date(_year, _pickMonth, _date.getDate());
      console.log("getPreMonthDate2******* : " +_d);
      return _d;
    },
    getGoogleTrendsApiTime: function(_date){
      //console.log("------------getGoogleTrendsApiTime");
      var ret = _date.getFullYear() + "-"+_date.getMonth()+"-"+_date.getDate();
      //console.log("[getGoogleTrendsApiTime] : " + ret);
      return ret;
    },
    getUTCDate: function(date) {
      var year = date / 10000;
      var month = (date % 10000) / 100;
      var day = date % 100;
      return Date.UTC(year, month - 1, day);
    }

  },
  created() {
    this.initOptions();
  },
  mounted() {

      this.search()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import '../assets/css/search.css';
</style>
