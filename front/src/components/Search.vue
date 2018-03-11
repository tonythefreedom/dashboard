<template>
    <div>
        <flamingo-head></flamingo-head>
        
        <!-- search-->
        <div class="search">
            
            <!-- search_bar-->
            <div class="search_bar">
                
                <input type="text"/>
                <input type="submit" class="search" value="Search" @click="searchClick"/>
                <!-- <input type="submit" @click="searchClick" value="Search" class="searched"/> -->
                
            </div>
            <!-- search_bar-->
            
            <!-- select_box-->
            <div class="select_box" >
                
                <!-- country before-->
                <div class="select">
                    <span class="default">Country</span>
                </div>
                
                <dropdown :title="'Category'" :values="['Cafe', 'Restaurant']"  @change-select="changeSelect"></dropdown>
              
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
                    <div v-for="item in result" v-bind:key="item.rank" class="list">
                        <a :href="'/#/selected?itemid=' + item.itemid">
                            <div class="row">
                                <img :src="item.logourl">
                                <span class="name">{{ item.name }}</span>
                                <div class="sort">
                                    <span>{{ item.score }}</span>
                                    <span :class="getChangeClass(item.change)">{{ getChangeNumber(item.change) }}</span>
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

export default {
  name: 'Search',
  components: {
    'flamingo-head': Header,
    Dropdown,
    Calendar
  },
  data: function() {
    return {
        result:  [],
        country: '',
        region: '',
        cagetory: '',
        date: null,
        
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
    changeDateFunc: function(date) {
        var year = date / 10000
        var month = date % 10000 / 100
        var day = date % 100
        this.date = new Date(year, month, day)
    },
    changeSelect: function(value) {
        this.cagetory = value.toUpperCase()
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
    searchClick: function() {
        this.search()
    }
    
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
