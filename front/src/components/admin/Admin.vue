<template>
    <!-- dashboard -->
        <div class="dashboard">
            
            <!-- dashboard_header -->
            <div class="dashboard_header">
                
                <!-- logo -->
                <h1>
                    <a href="">
                        <img src="../../assets/img/dashboard_logo.png" />
                    </a>
                </h1>
                <!-- logo -->
                
                
                <!-- product -->
                <div class="product_name">
                    <img src="../../assets/img/selected_logo.png" />
                    <p>BurgerKing</p>
                </div>
                <!-- product -->
                
                <!-- mail -->
                <div class="mail">
                    <img src="../../assets/img/mail.png"/>
                    <span>2</span>
                </div>
                <!-- mail -->
                
                <!-- btn -->
                <div class="btn">
                    <span>Language</span>
                    <span>Log out</span>
                </div>
                <!-- btn -->
                
            </div>
            <!-- dashboard_header -->
            
            <!-- dashboard_menu --> <!--svg로 변경 요망..-->
            <nav class="dashboard_menu">
                <a href="">
                    <img src="../../assets/img/menu1.svg" />
                </a>
                <a href="">
                    <img src="../../assets/img/menu2.svg" /> 
                </a>
                <a href="">
                    <img src="../../assets/img/menu3.svg" /> 
                </a>
                <a href="">
                    <img src="../../assets/img/menu4.svg" /> 
                </a>
            </nav>
            <!-- dashboard_menu -->
            
            <!-- dashboard_content -->
            <div class="dashboard_content">
                <div class="top">
                    <div class="state">
                        <div class="title">Forecast revenue</div>
                        <div>
                            <dl>
                                <dt>Today</dt>
                                <dd>1.333.078</dd>
                            </dl>
                            <dl>
                                <dt>This week</dt>
                                <dd>1.333.078</dd>
                            </dl>
                            <dl>
                                <dt>This month</dt>
                                <dd>1.333.078</dd>
                            </dl>
                            <dl>
                                <dt>This year</dt>
                                <dd>1.333.078</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="state">
                        <div class="title">Menu item</div>
                        <div>
                            <dl>
                                <dt>Today</dt>
                                <dd>890</dd>
                            </dl>
                            <dl>
                                <dt>This week</dt>
                                <dd>3.078</dd>
                            </dl>
                            <dl>
                                <dt>This month</dt>
                                <dd>133.078</dd>
                            </dl>
                            <dl>
                                <dt>This year</dt>
                                <dd>7.333.078</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="variation">
                        <div class="head">
                            <span>Variation</span>
                            <span>Revenue</span>
                            <span>Menu item</span>
                        </div>
                        <div>
                            <span>Yesterday</span>
                            <span class="down">23%</span>
                            <span class="down">10%</span>
                        </div>
                        <div>
                            <span>Last week</span>
                            <span class="up">23%</span>
                            <span class="down">10%</span>
                        </div>
                        <div>
                            <span>Last month</span>
                            <span class="up">23%</span>
                            <span class="down">10%</span>
                        </div>
                        <div>
                            <span>Last year</span>
                            <span class="up">23%</span>
                            <span class="down">10%</span>
                        </div>
                    </div>
                </div>
                <div class="middle">
                    <div>
                        <div class="Realtimestats">
                            <h5>Real time stats</h5>
                            <p>
                                <span>20, FEB, 2018</span>
                                <span>15:47</span>
                            </p>
                            <div>
                                <span class="active">Weekly</span>
                                <span>Month</span>
                                <span>1yr</span>
                            </div>
                        </div>
                        <img src="../../assets/img/graph_board.png" />
                    </div>
                    <div class="revenue">
                        <h5>Revenue</h5>
                        <dl>
                            <dt>In store</dt>
                            <dd>$10,000</dd>
                        </dl>
                        <dl>
                            <dt>Delivery</dt>
                            <dd>$10,000</dd>
                        </dl>
                        <dl>
                            <dt>Take out</dt>
                            <dd>$10,000</dd>
                        </dl>
                    </div>
                </div>
                <div class="bottom">
                    <div class="best_selling">
                        <h5>Best selling</h5>
                        <table>
                            <colgroup>
                                <col width="33%" />
                                <col width="33%" />
                                <col width="33%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Number of quantity</th>
                                    <th>Occupancy rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bacon croissant</td>
                                    <td>700.000</td>
                                    <td>75%</td>
                                </tr>
                                <tr>
                                    <td>Whopper</td>
                                    <td>700.000</td>
                                    <td>75%</td>
                                </tr>
                                <tr>
                                    <td>Garlic steak</td>
                                    <td>700.000</td>
                                    <td>75%</td>
                                </tr>
                                <tr>
                                    <td>Beef &amp; Chicken</td>
                                    <td>700.000</td>
                                    <td>75%</td>
                                </tr>
                                <tr>
                                    <td>Snack King</td>
                                    <td>700.000</td>
                                    <td>75%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="regional_franchisee">
                        <h5>Regional franchisee</h5>
                        <img src="../../assets/img/franchisee.png" />
                    </div>
                </div>
            </div>
            <!-- dashboard_content -->
            
        </div>
        <!-- dashboard -->
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/admin.css';
</style>
