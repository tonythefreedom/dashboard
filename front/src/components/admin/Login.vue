<template>
    <!-- dashboard -->
        <div class="dashboard">
            
            <!-- dashboard_header -->
            <div class="dashboard_header">
                
                <!-- logo -->
                <h1>
                    <a href="">
                        <img src="/static/img/dashboard_logo.png" />
                    </a>
                </h1>
                <!-- logo -->
                
            </div>
            <!-- dashboard_header -->
            
            <!-- dashboard_menu --> <!--svg로 변경 요망..-->
            <nav class="dashboard_menu">
                <a href="">
                    <img src="/static/img/menu1.svg" />
                </a>
                <a href="">
                    <img src="/static/img/menu2.svg" /> 
                </a>
                <a href="">
                    <img src="/static/img/menu3.svg" /> 
                </a>
                <a href="">
                    <img src="/static/img/menu4.svg" /> 
                </a>
            </nav>
            <!-- dashboard_menu -->
            
            <!-- login -->
            <div class="login">
                <p>Login</p>
                <form>
                    <div>
                        <span class="name"><img src="/static/img/name_icon.png" /></span>
                        <input type="text" placeholder="Shop name" />
                    </div>
                    <div>
                        <span class="pw"><img src="/static/img/pw_icon.png" /></span>
                        <input type="password" placeholder="Pass word" />
                    </div>
                </form>
            </div>
            <!-- login -->
            
        </div>
        <!-- dashboard -->
</template>

<script>
export default {
  name: 'Login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/css/login.css';
</style>
