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
                        <img src="../assets/img/selected_logo.png" />
                        <div class="categorize">
                            <span>UK</span>
                            <span>London</span>
                            <span>Hamburger</span>
                        </div>
                    </div>
                    <div class="selected_company">
                        <div class="top">
                            <h3>BURGER KING</h3>
                            <div class="menu">
                                <a v-on:click.stop="countryClick"><span id="country">Country</span></a>
                                <span id="date">Date</span>
                            </div>
                            <ul class="country">
                                <li >
                                    United States
                                    <ul>
                                        <li>Glasgow</li>
                                        <li>Glasgow</li>
                                        <li>Glasgow</li>
                                        <li class="more"><img src="../assets/img/more_country.png" alt="more"/></li>
                                    </ul>
                                </li>
                                <li class="active">
                                    United Kingdom
                                    <ul>
                                        <li>null</li>
                                        <li>null</li>
                                        <li>null</li>
                                        <li class="more"><img src="../assets/img/more_country.png" alt="more"/></li>
                                    </ul>
                                </li>
                                <li>Germany</li>
                                <li>France</li>
                                <li>Italy</li>
                                <li>Brazil</li>
                                <li>Canada</li>
                                <li>Spain</li>
                                <li class="more"><img src="../assets/img/more_country.png" alt="more"/></li>
                            </ul>
                        </div>
                        <div class="bot">
                            <div class="keyword">
                                <span>Performance Sector</span>
                                <span>Sentiment</span>
                                <span>Keyword search trend</span>
                                <span>Best seller</span>
                                <span>Social media trend</span>
                            </div>
                            <p>Burger King is an American global chain of hamburger fast food restaurants.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- overview -->
            
            <!-- content -->
            <section class="content">
                <div class="block">
                    <h4>Performance Sector</h4>
                    <div class="graph_wrap">
                        <div class="graph">
                            <img src="../assets/img/sector_img1.png" style="width: 100%" />
                        </div>
                        <div class="graph">
                            <img src="../assets/img/sector_img2.png" style="width: 100%" />
                        </div>
                    </div>
                </div>
                
                <div class="block">
                    <h4>Sentiment</h4>
                    <div class="graph_wrap">
                        <div class="graph">
                            <img src="../assets/img/sentiment_img1.png"  style="width: 100%"/>
                        </div>
                        <div class="graph">
                            <img src="../assets/img/sentiment_img2.png"  style="width: 100%"/>
                        </div>
                    </div>
                </div>
                
                <div class="block half">
                    <h4>Keyword search trend</h4>
                    <div class="graph_wrap">
                        <div class="graph">
                            <img src="../assets/img/Keyword search trend.png"  style="width: 100%"/>
                        </div>
                    </div>
                </div>
                
                <div class="block half best">
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
                
                <div class="block">
                    <h4>Performance Sector</h4>
                    <div class="social_wrap">
                        <div class="social state insta">
                            <img src="../assets/img/insta.png"/>
                            <p>29K</p>
                        </div>
                        <div class="social state yutube">
                            <img src="../assets/img/yutube.png"/>
                            <p class="small">SUBSCRIBERS</p>
                            <p>29K</p>
                        </div>
                        <div class="social state twiter">
                            <img src="../assets/img/twwiter.png"/>                            
                            <p>29K</p>
                        </div>
                        <div class="social state yutube">
                            <img src="../assets/img/yutube.png"/>
                            <p class="small">view</p>
                            <p>29K</p>
                        </div>
                        <div class="social state w">
                            <img src="../assets/img/w.png"/>
                            <p>29K</p>
                        </div>
                        <div class="social state fb">
                            <img src="../assets/img/facebook.png"/>
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

export default {
  name: 'Selected',
  components: {
    'flamingo-head': Header
  },
  methods: {
      countryClick : function() {
          if ($('#country').hasClass('on')) {
              $('#country').removeClass('on');
          } else {
              $('#country').addClass('on');
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/selected.css';
</style>
