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
            
            <!-- calender -->
            <div class="calender">
                <div class="state">
                    <p>FEB, 2018</p>
                    <div>
                        <span>Today</span>
                        <span>&lt;</span>
                        <span>&gt;</span>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td class="select">20</td>
                            <td class="select">21</td>
                            <td class="select">22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- calender -->
            
        </div>
        <!-- dashboard -->
</template>

<script>
export default {
  name: 'Date'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/date.css';
</style>
