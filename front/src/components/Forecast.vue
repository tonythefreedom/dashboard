<template>
    <div>
        <flamingo-head :active="'forecast'"></flamingo-head>
        
        <!-- forecast-->
        <div class="forecast">
            <div class="coming_soon">
                <h4>COMING SOON</h4>
                <p>Get early Access</p>
                <h5>YOU GET 50%<span>DISCOUNT COUPON</span></h5>
            </div>
            <div class="get_early_access">
                <form>
                    <input type="text" placeholder="Email"/>
                    <input type="submit" value="Get early Access"/>
                    <!-- searched_submit_btn
                    <input type="submit" value="Search" class="searched"/>
                    -->
                </form>
            </div>
        </div>
        <!-- forecast-->       
    </div>
</template>


<script>
import Header from '@/components/Header'

export default {
  name: 'Forecast',
  components: {
    'flamingo-head': Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/forecast.css';
</style>
