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
                                    <span id="country" v-on:click.stop="countryClick">Country</span>
                                    
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
                               
                                
                                <span id="date">Date</span>
                                
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
                            <vue-highcharts :options="chartOptions" ref="ps1Chart"  class="social state"></vue-highcharts>
                        </div>
                        <div class="graph">
                            <img src="/static/img/sector_img2.png" style="width: 100%" />
                        </div>
                    </div>
                </div>
                
                <div id="s" class="block">
                    <h4>Sentiment</h4>
                    <div class="graph_wrap">
                        <div class="graph">
                            <img src="/static/img/sentiment_img1.png"  style="width: 100%"/>
                        </div>
                        <div class="graph">
                            <img src="/static/img/sentiment_img2.png"  style="width: 100%"/>
                        </div>
                    </div>
                </div>
                
                <div id="kst" class="block half">
                    <h4>Keyword search trend</h4>
                    <div class="graph_wrap">
                        <div class="graph">
                            <img src="/static/img/Keyword search trend.png"  style="width: 100%"/>
                        </div>
                    </div>
                </div>
                
                <div id="bs" class="block half best">
                    <h4>Best seller</h4>
                    <div class="graph_wrap">
                        <div class="graph best_seller">
                            <div class="menu">
                                <span class="on">Burger</span>
                                <span>Drink</span>
                                <span>Appetizer</span>
                                <span>Set menu</span>
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
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Grilled chichken burger</td>
                                        <td>88</td>
                                        <td>86</td>
                                        <td>87</td>
                                        <td>87</td>
                                    </tr>
                                    <tr>
                                        <td>Bacon &amp; egg burger</td>
                                        <td>89</td>
                                        <td>88</td>
                                        <td>85</td>
                                        <td>86</td>
                                    </tr>
                                    <tr>
                                        <td>Cheese burger</td>
                                        <td>89</td>
                                        <td>88</td>
                                        <td>85</td>
                                        <td>86</td>
                                    </tr>
                                    <tr>
                                        <td>Whopper</td>
                                        <td>89</td>
                                        <td>88</td>
                                        <td>85</td>
                                        <td>86</td>
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
                        <vue-highcharts v-show="instaShow" :options="chartOptions" ref="instaChart"  class="social state"></vue-highcharts>
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
import Header from '@/components/Header'
import VueHighcharts from 'vue2-highcharts'

export default {
  name: 'Selected',
  data: function() {
      return {
        itemId: 0,  
        instaShow: false,
        country: 'UK',
        region: 'London',
        menu: 'Hamburger',
        logoImage: '/static/img/selected_logo.png',
        desc: 'Burger King is an American global chain of hamburger fast food restaurants.',
        chartOptions: {
          chart: {
            type: 'line'
          },
          title: {
            text: ''
          },
          credits: {
            enabled: false
          },
          legend: {
              enabled: false
          },
          xAxis: {
              type: 'datetime'
          },
          yAxis: {
              title: {
                text: null
              }              
          },
          series: []
        }
      }
  },
  components: {
    'flamingo-head': Header,
    VueHighcharts
  },
  methods: {
    countryClick : function() {
        if ($('#country').hasClass('on')) {
            $('#country').removeClass('on');
            $('#country-popup').hide();
        } else {
            $('#country').addClass('on');
            $('#country-popup').show();
        }
    },
    instaClick: function() {
        this.instaShow = !this.instaShow
    },
    loadBasicInfo: function(itemId) {
        this.$http.get('/static/action/detail.json?itemid=' + itemId)
        .then((result) => {
            if (result.status == 200) {
                this.itemId = result.data.data.itemid
                this.logoImage = result.data.data.logourl
                this.country = result.data.data.country
                this.region = result.data.data.region
                this.menu = result.data.data.menu
                this.desc = result.data.data.desc
            }
        })
    },
    loadChart: function(chart, dataUrl) {
        chart.delegateMethod('showLoading', 'Loading...');

        this.$http.get(dataUrl)
        .then((result) => {
            if (result.status == 200) {
                chart.hideLoading();
                var data = {
                    name: 'Trend',
                    data: result.data.data.score,
                    pointStart: Date.UTC(2010, 0, 1),
                    pointInterval: 24 * 3600 * 1000 // one day
                }
                chart.addSeries(data);
            }
        })
    }
  },
    mounted(){
        this.loadBasicInfo(11223)
        this.loadChart(this.$refs.ps1Chart, '/static/action/performance_trend.json')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/selected.css';
</style>
