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
                <a :class="{active: 'data'==this.active}" href="/#/">DATA</a>
                <a :class="{active: 'forecast'==this.active}" href="/#/forecast">FORECAST</a>
            </nav>
        </div>
        <!-- sub_menu-->
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    active: {
      type: String,
      required: false,
      default: 'data'
    }
  }
}
</script>

<style scoped>
</style>
