<template>

    <!-- Category ing..-->
    <div class="select" v-bind:class="{ on: show }">
        <span @click="toggle" class="default">{{ title }}</span>
        <ul v-show="show">
            <li v-for="(value,index) in values" v-bind:key="index" @click="liclick(value)">{{ value }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'dropdown',
  data () {
    return {
        show: false
    }
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'title'
    },
    values: {
        type: Array,
        required: true,
        default: []
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show
    },
    liclick: function(value) {
        this.$emit('change-select', value)
        this.show = false
    }
  }
}
</script>

<style>

</style>
