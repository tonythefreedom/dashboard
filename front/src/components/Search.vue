<template>
    <div>
        <flamingo-head></flamingo-head>
        
        <!-- search-->
        <div class="search">
            
            <!-- search_bar-->
            <div class="search_bar">
                <form>
                    <input type="text"/>
                    <input type="submit" value="Search"/>
                    <!-- searched_submit_btn
                    <input type="submit" value="Search" class="searched"/>
                    -->
                </form>
            </div>
            <!-- search_bar-->
            
            <!-- select_box-->
            <div class="select_box" >
                
                <!-- country before-->
                <div class="select">
                    <span class="default">Country</span>
                </div>
                <!-- country-->
                
                <!-- Category before-->
                <div class="select">
                    <span class="default">Category</span>
                </div>
                <!-- Category-->                
                
                <!-- date before-->
                <div class="select">
                    <span class="default">Date</span>
                </div>
                <!-- date-->
                
            </div>
            <!-- select_box-->
            
            <!-- search_result-->
            <div class="search_result">
                
                <!-- state -->
                <div class="state">
                    <span>Scores</span>
                    <div class="fillter_result">
                        <span>Fab.12.2018, UK</span>
                        <em class="time">12:13:23</em>
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
                    <div class="list">
                        <div class="row">
                            <img src="/static/img/sample.logo.png" alt="샘플로고">
                            <span class="name">Mcdonalds</span>
                            <div class="sort">
                                <span>98</span>
                                <span class="up">3</span>
                            </div>
                        </div>
                        <div class="row">
                            <img src="/static/img/sample.logo.png" alt="샘플로고">
                            <span class="name">Mcdonalds</span>
                            <div class="sort">
                                <span>98</span>
                                <span class="down">3</span>
                            </div>
                        </div>
                        <div class="row">
                            <img src="/static/img/sample.logo.png" alt="샘플로고">
                            <span class="name">Mcdonalds</span>
                            <div class="sort">
                                <span>98</span>
                                <span>-</span>
                            </div>
                        </div>
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

export default {
  name: 'Search',
  components: {
    'flamingo-head': Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/search.css';
</style>
