<template>
  <div class="select" v-bind:class="{ on: show }" >
    <span @click="toggle" class="">Date</span>
    <div class="date_picker" v-show="show">
        <!-- month-->
        <div class="month">
            <a v-on:click.stop="prev();"><span>&lt;</span></a>
            <span>{{ this.cal_title }}</span>
            <a v-on:click.stop="next();"><span>&gt;</span></a>
        </div>
        <!-- month-->

        <div class="day">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
        </div>
        <!-- days-->
        <div class="day">
            <span v-for="(cal, index) in cals" v-bind:key="index">
                <a @click="onDateClick(cal)">
            {{ cal }}
                </a>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data () {
    return {
        monDesc: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        show: false
    }
  },
  props: {
    year: {
      type: Number,
      required: true,
      default: 2018
    },

    month: {
      type: Number,
      required: true,
      default: 3
    }
  },
  computed: {
    cal_title: function() {
        return this.monDesc[this.month-1]
    },
    cals: function() {
      var cal = [];

      var monthStart = new Date(this.year, this.month-1, 1)
      var monthEnd = new Date(this.year, this.month, 0)

      for (var i=0; i<monthStart.getDay(); i++) {
        cal.push("")
      }

      for(i=1; i<=monthEnd.getDate(); i++) {
        cal.push(i.toString())
      }

      return cal
    }
  },
  methods: {
    next: function(event) {
        if (this.month >= 12) {
            this.month = 1
            this.year++
        } else {
            this.month++
        }
    }, 
    prev: function(event) {
        if (this.month <= 1) {
            this.month = 12
            this.year--
        } else {
            this.month--
        }
    },
    onDateClick: function(cal) {
        this.$emit('change-date', cal)
        this.show = false
    },
    toggle: function() {
      this.show = !this.show
    }
  }
}

</script>

<style scoped>

</style>
