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
.select {
    position: relative;
    width: 150px;
    height: 35px;
    display: block;
    margin-right: 12px;
    float: left;
}

.select:after {
    content: "▼";
    color: #fff;
    position: absolute;
    font-size: 14px;
    right: 10px;
    top: 8px;
}

.select.on:after {
    content: "▲";
    color: #f38385;
    top: 7px;
}

.select.on .default {
    height: 33px;
    width: 148px;
    border: 1px solid #f38385;
    background-color: #fff;
    color: #f38385;
}

.select .default {
    position: absolute;
    width: 150px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: #f38385;
    font-size: 20px;
    font-weight: 200;
    color: #fff;
}

.select > ul {
    position: absolute;
    top: 34px;
    border: 1px solid #f38385;
    width: 150px;
    box-sizing: border-box;
}

.select > ul.country > li.more {
    height: 24px;
    line-height: 24px;
}

.select > ul.country > li.more:hover {
    background-color: #fff;
}

.select > ul > li {
    height: 39px;
    line-height: 39px;
    padding: 0px 22px;
    box-sizing: border-box;
    font-size: 14px;
}

.select > ul > li.active, .select > ul > li:hover {
    background-color: #f38385;
    color: #fff;
}

.select .date_picker {
    border: 1px solid #f38385;
    display: none;
    top: 34px;
}

.select.on .date_picker {
    display: block;
}

</style>
