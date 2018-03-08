<template>
    <div>
        <header class="header">
            <a href="/"><img class="logo" src="/static/img/logo.png" alt="flamingo"/></a>
            <span>BETA</span>
            <nav>
                <a href="">Products</a>
                <a href="" class="contactUs">Contact Us</a>
            </nav>
        </header>

            <!-- sub_menu-->
        <div class="sub_menu">
            <nav>
                <a href="">DATA</a>
                <a class="active" href="">FORECAST</a>
            </nav>
        </div>
        <!-- sub_menu-->
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
