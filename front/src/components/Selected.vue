<template>
    <div>
        <flamingo-head></flamingo-head>
        <!-- selected -->
        <div class="selected">

            <!-- overview -->
            <div class="overview">
                <div class="bg"></div>
                <div class="view_port">
                    <div class="logo">
                        <img :src="logoImage" />
                        <div class="categorize">
                            <span>{{ country }}</span>
                            <span>{{ region }}</span>
                            <span>{{ menu }}</span>
                        </div>
                    </div>
                    <div class="selected_company">
                        <div class="top">
                            <h3>BURGER KING</h3>
                            <div class="menu">

                                <span id="country" class="func" v-on:click.stop="countryClick">Country</span>
                                <ul id="country-popup" class="country" style="display:none">
                                    <li class="active">
                                        United States
                                        <ul>
                                            <li>Glasgow</li>
                                            <li>Glasgow</li>
                                            <li>Glasgow</li>
                                            <li class="more"><img src="/static/img/more_country.png" alt="more"/></li>
                                        </ul>
                                    </li>
                                    <li >
                                        United Kingdom
                                        <ul>
                                            <li>null</li>
                                            <li>null</li>
                                            <li>null</li>
                                            <li class="more"><img src="/static/img/more_country.png" alt="more"/></li>
                                        </ul>
                                    </li>
                                    <li>Germany</li>
                                    <li>France</li>
                                    <li>Italy</li>
                                    <li>Brazil</li>
                                    <li>Canada</li>
                                    <li>Spain</li>
                                    <li class="more"><img src="/static/img/more_country.png" alt="more"/></li>
                                </ul>
                                <calendar :title_class="'func'" :year="2018" :month="3"  @change-date="changeDateFunc"></calendar>
                            </div>


                        </div>
                        <div class="bot">
                            <div class="keyword">
                                <span><a href="#ps">Performance Sector</a></span>
                                <span><a href="#s">Sentiment</a></span>
                                <span><a href="#kst">Keyword search trend</a></span>
                                <span><a href="#bs">Best seller</a></span>
                                <span><a href="#smt">Social media trend</a></span>
                            </div>
                            <p>{{ desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- overview -->

            <!-- content -->
            <section class="content">
                <div id="ps" class="block">
                    <h4>Performance Sector</h4>
                    <div class="graph_wrap">
                        <div class="graph">
                            <vue-highcharts :options="ps1ChartOptions" ref="ps1Chart" :classname="'chart'"></vue-highcharts>
                        </div>
                        <div class="graph">
                            <vue-highcharts :options="ps2ChartOptions" ref="ps2Chart" :classname="'chart'"></vue-highcharts>
                        </div>
                    </div>
                </div>

                <div id="s" class="block">
                    <h4>Sentiment</h4>
                    <div class="graph_wrap">
                        <div class="graph">
                            <vue-highcharts :options="senti1ChartOptions" ref="senti1Chart" :classname="'chart'"></vue-highcharts>
                        </div>
                        <div class="graph">
                            <vue-highcharts :options="senti2ChartOptions" ref="senti2Chart" :classname="'chart'"></vue-highcharts>
                        </div>
                    </div>
                </div>

                <div id="kst" class="block half">
                    <h4>Keyword search trend</h4>
                    <div class="graph_wrap">
                        <div class="graph">
                            <vue-highcharts :options="keywordChartOptions" ref="keywordChart" :classname="'chart'"></vue-highcharts>
                        </div>
                    </div>
                </div>

                <div id="bs" class="block half best">
                    <h4>Best seller</h4>
                    <div class="graph_wrap">
                        <div class="graph best_seller">
                            <div class="menu" v-for="i in arrMenus">
                              <span @click="pickMenuCategory(i)">{{Object.keys(i)}}</span>
                            </div>
                            <table>
                                <colgroup>
                                    <col width="" />
                                    <col width="" />
                                    <col width="" />
                                    <col width="" />
                                    <col width="" />

                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Taste</th>
                                        <th>Service</th>
                                        <th>Ambience</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody v-for="menu in arrShowScore" v-model="arrShowScore">
                                    <tr>
                                      <td>{{menu.menu}}</td>
                                      <td>{{menu.price_score}}</td>
                                      <td>{{menu.taste_score}}</td>
                                      <td>{{menu.service_score}}</td>
                                      <td>{{menu.ambience_score}}</td>
                                      <td>{{menu.avg_score}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div id="smt" class="block">
                    <h4>Performance Sector</h4>
                    <div class="social_wrap">
                        <div v-show="!instaShow" @click="instaClick" class="social state insta">
                            <img src="/static/img/insta.png"/>
                            <p>29K</p>
                        </div>
                        <social v-show="instaShow" ref="instaChart" :title="'insta'"></social>
                        <div class="social state yutube">
                            <img src="/static/img/yutube.png"/>
                            <p class="small">SUBSCRIBERS</p>
                            <p>29K</p>
                        </div>
                        <div class="social state twiter">
                            <img src="/static/img/twwiter.png"/>
                            <p>29K</p>
                        </div>
                        <div class="social state yutube">
                            <img src="/static/img/yutube.png"/>
                            <p class="small">view</p>
                            <p>29K</p>
                        </div>
                        <div class="social state w">
                            <img src="/static/img/w.png"/>
                            <p>29K</p>
                        </div>
                        <div class="social state fb">
                            <img src="/static/img/facebook.png"/>
                            <p>29K</p>
                        </div>
                    </div>
                </div>
                <div class="question">
                    <dl>
                        <dt>Adding a new Francchise?</dt>
                        <dd>
                            <p>We don't have franchisee you are looking for? </p>
                            <p>You can search for the franchisee in the Google database, and we will add it to our database for tracking.</p>
                            <div>
                                <span>SEARCH FOR AN Franchisee</span>
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Missing Data</dt>
                        <dd>
                            <p>In case we are missing a company or franchisee profile, you can add to our database directly. </p>
                            <p>Just paste URL or URI below. It doesn't matter which one you use. We will take care of the rest. </p>
                            <div>
                                <span>Company or Link, URI/URL</span>
                            </div>
                        </dd>

                    </dl>
                </div>
            </section>
            <!-- content -->

        </div>
        <!-- selected -->
    </div>
</template>

<script>
import Header from "@/components/Header";
import Calendar from "./control/Calendar.vue";
import Dropdown from "./control/Dropdown.vue";
import Social from "./control/Social.vue";
import VueHighcharts from "vue2-highcharts";
import googleTrends from "google-trends-api";
import axios from "axios";

export default {
  name: "Selected",
  data: function() {
    return {
      itemId: 0,
      instaShow: false,
      region: "London",
      arrScore: [],
      arrShowScore: [],
      arrMenus: [],
      arrPickMenuCategory: [],
      // using trends api params
      country: "GB",
      keyword: "burger king",
      startTime: "2017-9-1",
      endTime: "2018-3-1",
      property: "",
      // using trends api params

      menu: "Hamburger",
      logoImage: "/static/img/selected_logo.png",
      desc:
        "Burger King is an American global chain of hamburger fast food restaurants.",
      ps1ChartOptions: {
        chart: { type: "area" },
        title: { text: "" },
        credits: { enabled: false },
        legend: { enabled: false },
        xAxis: {
          type: 'datetime',
          },
        yAxis: { title: { text: null } },
        series: []
      },
      ps2ChartOptions: {
        chart: { type: "line" },
        title: { text: "" },
        credits: { enabled: false },
        legend: { enabled: true, verticalAlign: "top" },
        xAxis: { type: "datetime" },
        yAxis: { title: { text: null } },
        series: []
      },
      senti1ChartOptions: {
        chart: { type: "column" },
        title: { text: "" },
        credits: { enabled: false },
        legend: { enabled: true, verticalAlign: "top" },
        xAxis: { type: "datetime" },
        yAxis: { title: { text: null } },
        series: []
      },
      senti2ChartOptions: {
        chart: { type: "line" },
        title: { text: "Number of franshises exposed on Google and in the news" },
        credits: { enabled: false },
        legend: { enabled: false },
        xAxis: { type: "datetime" },
        yAxis: { title: { text: null } },
        series: []
      },
      keywordChartOptions: {
        chart: { type: "column" },
        title: { text: "" },
        credits: { enabled: false },
        legend: { enabled: false },
        xAxis: { type: "category" },
        yAxis: { title: { text: null } },
        plotOptions: { series: { dataLabels: { enabled: true, format: '{point.y}'}}},
        series: []
      }
    };
  },
  components: {
    "flamingo-head": Header,
    Calendar,
    Dropdown,
    VueHighcharts,
    Social
  },
  computed: {
  },
  methods: {
    initParams: function() {
      var params = this.$route.query;
      this.country = (params.country == 'UK') ? 'GB' : params.country;
      this.keyword = params.company;
      this.startTime = params.startDate;
      this.endTime = params.endDate;
      this.property = "";
      console.log("[INIT][PARAMS] : " + JSON.stringify(params));
    },
    initStauts: function(){
      var params = this.$route.query;
      var _isSettingOn = false;
      this.$http.get("/static/action/menusFranchises.json")
        .then((result) => {
          for(var k in result.data) {

            var tmpCtr = (this.country == 'GB' ) ? 'UK' : this.country;

            if( result.data[k].Company_Name == this.keyword && result.data[k].Country == tmpCtr ) {
              console.log("FIND! : " + result.data[k].Company_Name + result.data[k].Country );
              //el.Menu_Category.getKey();
              //Object.keys(el.Menu_Category);
              var keys=[];
              for( var i=0; i<result.data[k].Menu_Category.length; i++) {
                console.log("--RESU! : "+ i + Object.keys(result.data[k].Menu_Category[i]));

                this.arrMenus.push(result.data[k].Menu_Category[i]);
              }
              // for(var i of result.data[k].Menu_Category) {
              //   //console.log("--RESU! : " + result.data[k].Menu_Category[i]);
              //     this.obMenus.push(result.data[k].Menu_Category[i]);
              //     console.log("[INIT][MEMUS] : " + Object.keys(this.obMenus[i]));
              // }

              this.arrMenus.forEach(el=>{
                //console.log(el[Object.keys(el)]);
                var _ct = Object.keys(el).join();
                var _mc = {"MenuCategory":_ct, "value":0};
                if( _isSettingOn == false) {
                  _isSettingOn = true;
                  _mc.value = 1;
                }
                this.arrPickMenuCategory.push(_mc);
                this.findMenusScore(el);
                el[Object.keys(el)].forEach(el=>{
                  console.log(el);
                })
              })
      }
      }
      })
      //this.arrStatusOnBsMenus[]
    },
    pickMenuCategory: function(_menus){
      var k = Object.keys(_menus).join();
      for(var i=0; i<this.arrPickMenuCategory.length;i++) {
        if( this.arrPickMenuCategory[i].MenuCategory == k ) {
          this.arrPickMenuCategory[i].value = 1;
      } else {
          this.arrPickMenuCategory[i].value = 0;
        }
      };
      console.log("picked MC Status : " + this.arrPickMenuCategory);
      this.changeMenus();
    },
    changeMenus: function(){
      this.arrShowScore = [];
      var _MenuCategory = '';
      this.arrPickMenuCategory.forEach(el=>{
        if( el.value == 1 ) {
        _MenuCategory = el.MenuCategory;
      }
      })
      console.log("MC : " + _MenuCategory);
      this.arrScore.forEach(elem=>{
        if( elem.Category == _MenuCategory ) {
        this.arrShowScore.push(elem);
        console.log("Show El : " + elem);
      }
      })
      console.log("ShowScore : " + this.arrShowScore);
    },
    findMenusScore: function(_menus){
      console.log("FIND MENU : " + Object.keys(_menus));
      var k = Object.keys(_menus).join();
      var m = Object.values(_menus).join(",");
      console.log("LOAD MENU : " + m);
      var arr = [];
      this.$http.get('http://35.227.93.162/api/',{
        params: {
          id: 'nlp2',
          menu_list: m,
        }
      }).then(res=>{
        //var ob = JSON.parse(res);
        //console.log("****NLP1***   : "  + ob);
        //console.log("GET MENU SORE : " + Object.values(res.data));
        //console.log("****NLP2***]]]]]]]]   : "  + res.data[1].avg_score);
        //console.log("****NLP3***]]]]]]]]   : " + res.data[1].menu);

        for(var i=0; i<res.data.length;i++) {
          console.log("GET OB : " + Object.values(res.data[i]));
          var tmp = res.data[i];
          tmp["Category"] = k;

          this.arrScore.push(tmp);
          console.log(this.arrScore);
        }
        //this.setScore(arr);
      }).catch(function(error){
        console.log(error);
      })


    },
    countryClick: function() {
        if ($("#country").hasClass("on")) {
            $("#country").removeClass("on");
            $("#country-popup").hide();
        } else {
            $("#country").addClass("on");
            $("#country-popup").show();
        }
        console.log("contry CLK : " + this.instaShow);
    },
    instaClick: function() {
        this.instaShow = !this.instaShow
        //this.showSocialChart(this.$refs.instaChart, 'insta')
        this.$refs.instaChart.drawChart()
    },

    loadBasicInfo: function(itemId) {
      this.$http
        .get("/static/action/detail.json?itemid=" + itemId)
        .then(result => {
          if (result.status == 200) {
            this.itemId = result.data.data.itemid;
            this.logoImage = result.data.data.logourl;
            this.country = result.data.data.country;
            this.region = result.data.data.region;
            this.menu = result.data.data.menu;
            this.desc = result.data.data.desc;
          }
        });
    },
    loadPS1Chart: function() {
        var chart = this.$refs.ps1Chart;

        chart.delegateMethod("showLoading", "Loading...");
        chart.hideLoading();

      // this.$http.get("/static/action/test_interestOverTime.json").then(result => {
      //   if(result.status == 200) {
      //     chart.hideLoading();
      //     console.log(result);
      //
      //     var series = [];
      //
      //     // var prevDate=0;
      //     // var allValues=0;
      //     // var cntDay=0;
      //     // var pointStartDate;
      //     // for(var i=1; i < result.data.default.timelineData.length; i++)
      //     // {
      //     //   var date = new Date(result.data.default.timelineData[i].formattedTime);
      //     //   // changed month
      //     //   if( prevDate != date.getMonth()+1 || i == result.data.default.timelineData.length-1) {
      //     //     prevDate = date.getMonth()+1;
      //     //     console.log("month is changed, " + prevDate + "alVal and cnt is " + allValues + "구분 " + cntDay);
      //     //     if( cntDay != 0 ){
      //     //       var eResult = allValues/cntDay;
      //     //       series.push(Math.round(eResult));
      //     //     }
      //     //     allValues=0;
      //     //     cntDay=0;
      //     //   }
      //     //   // getting values during month;
      //     //   allValues= allValues + result.data.default.timelineData[i].value[0];
      //     //   cntDay++;
      //     // }
      //
      //     for(var i=1; i < result.data.default.timelineData.length; i++){
      //       series.push(result.data.default.timelineData[i].value[0]);
      //     }
      //
      //     console.log(series);
      //     var date1 = new Date(result.data.default.timelineData[1].formattedTime);
      //     var start = date1.getMonth()+1;
      //     console.log(start);
      //     var data = {
      //       name: "Trend",
      //       data: series,
      //       pointStart: start,
      //       pointInterval: 24 * 3600 * 1000 // one day
      //     };
      //      chart.addSeries(data);
      //   }
      // });



        // googleTrends.interestOverTime({
        //   keyword: 'burger king',
        //   startTime: new Date('2017-9-1'),
        //   endTime: new Date('2018-3-1'),
        //   geo: 'GB'
        // })
        //   .then((result) => {
        //   if(result.status == 200) {
        // chart.hideLoading();
        // console.log(result);

      var _company = this.keyword;
      this.$http.get('/api/trends',{
          params: {
            keyword: this.keyword,
            startTime: this.startTime,
            endTime: this.endTime,
            geo: this.country,
            property: this.property
          }
        }).then(function(res){

          console.log(res);
          var series = [];
          for(var i=1; i < res.data.default.timelineData.length; i++){
            series.push(res.data.default.timelineData[i].value[0]);
          }

          console.log(series);
          var date1 = new Date(res.data.default.timelineData[1].formattedTime);
          console.log("Show the formattedTime : "+ date1.getMonth());
          var start = Date.UTC(date1.getFullYear(),date1.getMonth(),date1.getDate());
          console.log(start);
          var data = {
            name: _company,
            data: series,
            pointStart: start,
            pointInterval: 24 * 3600 * 1000 // one day
          };
          chart.addSeries(data);
        }).catch(function(error){
          console.log(error);
        })


        // var prevDate=0;
        // var allValues=0;
        // var cntDay=0;
        // var pointStartDate;
        // for(var i=1; i < result.data.default.timelineData.length; i++)
        // {
        //   var date = new Date(result.data.default.timelineData[i].formattedTime);
        //   // changed month
        //   if( prevDate != date.getMonth()+1 || i == result.data.default.timelineData.length-1) {
        //     prevDate = date.getMonth()+1;
        //     console.log("month is changed, " + prevDate + "alVal and cnt is " + allValues + "구분 " + cntDay);
        //     if( cntDay != 0 ){
        //       var eResult = allValues/cntDay;
        //       series.push(Math.round(eResult));
        //     }
        //     allValues=0;
        //     cntDay=0;
        //   }
        //   // getting values during month;
        //   allValues= allValues + result.data.default.timelineData[i].value[0];
        //   cntDay++;
        // }



      // })
      // .catch((err) => {
      //     console.log(err);
      // });
    },
    loadPS2Chart: function() {
        var chart = this.$refs.ps2Chart;

        chart.delegateMethod("showLoading", "Loading...");

        // this.$http.get("/static/action/performance2.json").then(result => {
        //     if (result.status == 200) {
        //         chart.hideLoading();
        //
        //         var start = this.getUTCDate(result.data.data.startdate);
        //         console.log("loadPS2Chart :" + start);
        //         result.data.data.series.forEach(element => {
        //             var temp = {
        //                 name: element.name,
        //                 data: element.score,
        //                 pointStart: start,
        //                 pointInterval: 24 * 3600 * 1000 // one day
        //             };
        //             chart.addSeries(temp);
        //         });
        //     }
        // });

        // using google trends api

        var _property = ['', 'images', 'youtube', 'froogle'];
        for(var i=0; i<_property.length; i++) {

          this.$http.get("/api/trends", {
            params: {
              keyword: this.keyword,
              startTime: this.startTime,
              endTime: this.endTime,
              geo: this.country,
              property: _property[i]
            }
          }).then(function(res){
            console.log(res);
            if(res.status == 200){
              chart.hideLoading();
              var series = [];
              for(var i=1; i < res.data.default.timelineData.length; i++){
                series.push(res.data.default.timelineData[i].value[0]);
              }

              var date1 = new Date(res.data.default.timelineData[1].formattedTime);
              console.log("Show the formattedTime : "+ date1.getMonth());
              var start = Date.UTC(date1.getFullYear(),date1.getMonth(),date1.getDate());
              console.log(start);
              console.log("-----PS2-----" + _property[i]);
              var data = {
                name: (res.data.about == '') ? "information" : res.data.about,
                data: series,
                pointStart: start,
                pointInterval: 24 * 3600 * 1000 // one day
              };
              chart.addSeries(data);
            }
          }).catch(function(err){
            console.log(err);
          })

        }


    },
    loadSenti1Chart: function() {
        var chart = this.$refs.senti1Chart;

        chart.delegateMethod("showLoading", "Loading...");

        this.$http.get("/static/action/sentiment1.json").then(result => {
            if (result.status == 200) {
                chart.hideLoading();

                var start = this.getUTCDate(result.data.data.startdate);
                result.data.data.series.forEach(element => {
                var temp = {
                    name: element.name,
                    data: element.score,
                    pointStart: start,
                    pointInterval: 24 * 3600 * 1000 // one day
                };

                chart.addSeries(temp);
        chart.plot
                });
            }
        });
    },
    loadSenti2Chart: function() {
        var chart = this.$refs.senti2Chart;

        chart.delegateMethod("showLoading", "Loading...");
        chart.hideLoading();

        // this.$http.get("/static/action/sentiment2.json").then(result => {
        //     if (result.status == 200) {
        //         chart.hideLoading();
        //         var start = this.getUTCDate(result.data.data.startdate)
        //         var data = {
        //         data: result.data.data.score,
        //         pointStart: start,
        //         pointInterval: 24 * 3600 * 1000 // one day
        //         };
        //         chart.addSeries(data);
        //     }
        // });
      var _company = this.keyword;
      var _propt = 'news';
      this.$http.get('/api/trends',{
        params: {
          keyword: this.keyword,
          startTime: this.startTime,
          endTime: this.endTime,
          geo: this.country,
          property: _propt
        }
      }).then(function(res){
        console.log(res);
        var series = [];
        for(var i=1; i < res.data.default.timelineData.length; i++){
          series.push(res.data.default.timelineData[i].value[0]);
        }

        console.log(series);
        var date1 = new Date(res.data.default.timelineData[1].formattedTime);
        console.log("Show the formattedTime : "+ date1.getMonth());
        var start = Date.UTC(date1.getFullYear(),date1.getMonth(),date1.getDate());
        console.log(start);
        var data = {
          name: _company,
          data: series,
          pointStart: start,
          pointInterval: 24 * 3600 * 1000 // one day
        };
        chart.addSeries(data);
      }).catch(function(error){
        console.log(error);
      })


    },
    loadKeywordChart: function() {
        var chart = this.$refs.keywordChart;

        chart.delegateMethod("showLoading", "Loading...");
        chart.hideLoading();
        // this.$http.get("/static/action/keyword.json").then(result => {
        //     if (result.status == 200) {
        //         chart.hideLoading();
        //
        //         var series = {
        //             name: "keyword",
        //             colorByPoint: true,
        //             data: []
        //         }
        //
        //         result.data.data.forEach(element => {
        //             var temp = {
        //                 name: element.name,
        //                 y: element.score,
        //             };
        //             series.data.push(temp);
        //         });
        //
        //         chart.addSeries(series);
        //     }
        // });

      console.log("[Start][Keyword] : "+ this.keyword.replace(/(\s*)/g, ""));
      //var _company = this.keyword;

      this.$http.get('http://35.227.93.162/api/',{
        params: {
          id: 'nlp1',
          keyword: this.keyword.replace(/(\s*)/g, "").toLowerCase(),
        }
      }).then(function(res){
        //var ob = JSON.parse(res);
        console.log("****NLP1***   : "  + res.data.length);
        console.log("****NLP1***   : "  + res.data[0].frequency);
        console.log("****NLP1***   : " + res.data[0].name);

        var series = {
          name: "keyword",
          colorByPoint: true,
          data: []
        };

        res.data.forEach(el => {
          var tmp = {
            name: el.name,
            y: el.frequency,
          };
          series.data.push(tmp);
        });
        console.log("****NLP1***   : " + series);
        chart.addSeries(series);

      }).catch(function(error){
        console.log(error);
      })
    },
    loadBestSeller: function(_menus) {
      //var _company = this.keyword;
      var m = Object.values(_menus).join(",");
      console.log("LOAD MENU : " + m);
      var arr = [];
      this.$http.get('http://35.227.93.162/api/',{
        params: {
          id: 'nlp2',
          menu_list: "whopper,cheeseburger",
        }
      }).then(function(res){
        //var ob = JSON.parse(res);
        //console.log("****NLP1***   : "  + ob);
        console.log("GET MENU SORE : " + Object.values(res.data));
        console.log("****NLP2***]]]]]]]]   : "  + res.data[1].avg_score);
        console.log("****NLP3***]]]]]]]]   : " + res.data[1].menu);
        for(var i of res.data ) {
          console.log("GET OB : " + Object.values(i));
          arr.push(i);
        }
        this.setScore(arr);
      }).catch(function(error){
        console.log(error);
      })

      console.log(this.arrScoreMenu);
    },
    setScore: function(_arr){
      this.arrScoreMenu = _arr.slice();
    },
    changeDateFunc: function(date) {
      console.log("parent changedate:" + date);
    },
    getUTCDate: function(date) {
      var year = date / 10000;
      var month = (date % 10000) / 100;
      var day = date % 100;
      return Date.UTC(year, month - 1, day);
    }
  },
  created() {
    this.initParams();
    this.initStauts();
  },
  mounted() {
    this.loadBasicInfo(11223);
    this.loadPS1Chart();
    this.loadPS2Chart();
    this.loadSenti1Chart();
    this.loadSenti2Chart();
    this.loadKeywordChart();
    //this.loadBestSeller();
    //this.pickMenuCategory(this.arrPickMenuCategory[0].MenuCategory);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/selected.css";
</style>
