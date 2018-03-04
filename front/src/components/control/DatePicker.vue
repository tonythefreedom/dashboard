<template>
    <div :class="[
        'v2-date-wrap',
        {
            'is-disabled': disabled
        }
    ]" @mouseover="shownClear=true" @mouseout="shownClear=false">
        <span ref="trigger" :class="['v2-picker-trigger', {'empty-text': !selectedDate}]" @click="handleTriggerClick">{{selectedDate ? selectedDate : _placeholder}}</span>
        <transition name="zoom-in-top">
            <div class="v2-picker-panel-wrap" v-show="shown" :style="{minWidth: minWidth + 'px'}">
                <short-cuts v-if="shownSideBar" :shortcuts="pickerOptions.shortcuts" @pick="handleShortcutPick"></short-cuts>
                <div class="v2-picker-panel" :style="{marginLeft: shownSideBar ? '110px' : '0'}">
                    <div class="v2-picker-panel__header">
                        <div class="v2-picker-header__label">
                            <span class="v2-picker-header__label-text" v-html="formatYearMonthText()"></span>
                        </div>
                        <div class="v2-picker-header__toggle v2-picker-header__toggle-prev">
                            <i class="v2-toggle-icon v2-toggle-icon__prev-year" @click="changeYear(-1)"></i>
                            <i class="v2-toggle-icon v2-toggle-icon__prev-month" @click="changeMonth(-1)"></i>
                        </div>
                        <div class="v2-picker-header__toggle v2-picker-header__toggle-next">
                            <i class="v2-toggle-icon v2-toggle-icon__next-month" @click="changeMonth(1)"></i>
                            <i class="v2-toggle-icon v2-toggle-icon__next-year" @click="changeYear(1)"></i>
                        </div>
                    </div>
                    <div class="v2-picker-panel__content v2-picker-panel__table v2-picker-panel__days-table" @click="selectdCurDate">
                        <div class="v2-picker-panel__table-row v2-picker-panel__week-label">
                            <span v-for="day in weekDaysLabel" :key="day" v-text="day"></span>
                        </div>
                        <div class="v2-picker-panel__table-row" v-for="(row, index) in rows" :key="index">
                            <span v-for="cell in row" :key="cell.index"
                                    :class="getCellClasses(cell)"
                                    :data-index="cell.index"
                                >
                                <span v-text="cell.text" :data-index="cell.index"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import locals from './locals';
    import { 
        nextDate, daysOfMonth, isDate, nextYear, nextMonth,
        getDaysOfMonth, getFirstDateOfMonth, getLastDateOfMonth,
        getClearHoursTime, formatDate, contains
    } from './utils';
    import ShortCuts from './shortcuts.vue';
    export default {
        name: 'datepicker',
        props: {
            value: {},
            lang: {
                type: String,
                default: 'en',
                validator: val => ['cn', 'en'].includes(val)
            },
            format: {
                type: String,
                default: 'yyyy/MM/dd'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: '' 
            },
            trigger: {
                type: Boolean,
                default: true
            },
            pickerOptions: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },
        data () {
            return {
                view: 'day',
                selectedDate: '',
                curDate: new Date(),
                shown: true,
                shownClear: false,
                rows: [[], [], [], [], [], [], []],
                minWidth: 270,
                shownSideBar: false
            };
        },
        computed: {
            _placeholder () {
                return this.placeholder ? this.placeholder : this.lang === 'cn' ? '选择日期' : 'Choosing date...';
            },
            weekDaysLabel () {
                return locals[this.lang] ? locals[this.lang].days : locals['cn'].days;
            }
        },
        watch: {
            curDate (val) {
                this.initDays();
            },
            value (val) {
                if (isDate(val)) {
                    this.setDefDate();
                }
            }
        },
        methods: {
            setDefDate () {
                this.curDate = new Date(this.value);
                this.selectedDate = formatDate(this.curDate, this.format);
            },
            clearDate () {
                this.selectedDate = ''; 
                this.$emit('input', this.selectedDate);
                this.$emit('change', this.selectedDate);
                this.initDays();
            },
            initDays () {
                const date = this.curDate;
                const curYear = date.getFullYear();
                const curMonth = date.getMonth();
                const curDate = date.getDate();
                const curDay = date.getDay();
                const firstDateOfMonth = getFirstDateOfMonth(date);
                const firstWeekDay = firstDateOfMonth.getDay();
                const daysOfMonth = getDaysOfMonth(curYear, curMonth + 1);
                const lastDateOfMonth = getLastDateOfMonth(date);
                const mod = (firstWeekDay + 7) % 7;
                
                const panelStartDate = new Date(curYear, curMonth, firstDateOfMonth.getDate() - (mod + 7));
                // const daysOfPreMonth = getDaysOfMonth(panelStartDate.getFullYear(), panelStartDate.getMonth() + 1);
                // firstWeekDay = (firstWeekDay === 0 ? 7 : firstWeekDay);
         
                const rows = [[], [], [], [], [], [], []];
                const minTime = firstDateOfMonth.getTime();
                const maxTime = lastDateOfMonth.getTime();
                let index = 0;
                for (let i = 0, l = rows.length; i < l; i++) {
                    const row = rows[i];
                    for (let j = 0; j < 7; j++) {
                        const cell = {};
                        index = i * 7 + j;
                        const d = nextDate(panelStartDate, index);
                        const time = d.getTime();
                        cell.index = index;
                        cell.text = d.getDate();
                        cell.type = time < minTime ? 'prev-month' : time > maxTime ? 'next-month' : 'normal';
                        cell.isToday = time === getClearHoursTime(Date.now());
                        cell.isSelected = isDate(this.selectedDate) ? time === getClearHoursTime(new Date(this.selectedDate).getTime()) : false;
                        cell.date = d;
                        // disable date
                        if (this.pickerOptions && typeof this.pickerOptions.disabledDate === 'function') {
                            cell.disabled = this.pickerOptions.disabledDate(cell.date);
                        }
                        row.push(cell);
                    }
                    rows[i] = row;
                }
                this.rows = [].concat(rows);
            },
            getCellClasses (cell) {
                const classes = ['v2-picker-panel__table-cell', 'v2-picker-panel__day'];
                classes.push(cell.type);
                if (cell.isToday) {
                    classes.push('today');
                }
                if (cell.isSelected) {
                    classes.push('selected');
                }
                if (cell.disabled) {
                    classes.push('disabled');
                }
                return classes.join(' ');
            },
            formatYearMonthText () {
                // 2018&nbsp;年&nbsp;&nbsp;1&nbsp;月
                const d = this.curDate;
                if (this.lang === 'cn') {
                    return `${d.getFullYear()}&nbsp;年&nbsp;&nbsp;${d.getMonth() + 1}&nbsp;月`;
                } else if (this.lang === 'en') {
                    return `${d.getFullYear()}&nbsp;&nbsp;${locals[this.lang].months.original[d.getMonth()]}`;
                }
            },
            changeMonth (delta) {
                const d = this.curDate;
                this.curDate = nextMonth(d, delta);
            },
            changeYear (delta) {
                const d = this.curDate;
                this.curDate = nextYear(d, delta);
            },
            getCellInfoByIndex (index) {
                const rowIndex = Math.floor(index / 7);
                const cellIndex = index % 7;
                return this.rows[rowIndex][cellIndex];
            },
            selectdCurDate (e) {
                // Compatible IE9 ~ IE10
                const index = e.target.dataset ? e.target.dataset.index : e.target.getAttribute('data-index');
                if (index) {
                    const cell = this.getCellInfoByIndex(index);
                    if (cell.disabled) {
                        return;
                    }
                    this.selectedDate = formatDate(cell.date, this.format);
                    this.curDate = cell.date;
                    this.$emit('input', this.curDate);
                    this.$emit('change', this.curDate);
                    this.shown = false;
                }
            },
            handleDocClick (e) {
                const target = e.target;
                if (!contains(this.$el, target) && this.shown) {
                    this.shown = false;
                }
            },
            handleTriggerClick () {
                if (this.disabled) {
                    return;
                }
                this.shown = !this.shown;
            },
            handleShortcutPick (date) {
                if (isDate(date)) {
                    this.selectedDate = formatDate(date, this.format);
                    this.curDate = date;
                    this.$emit('input', this.curDate);
                    this.$emit('change', this.curDate);
                    this.shown = false;
                }
            }
        },
        created () {
            if (this.value && isDate(this.value)) {
                this.setDefDate();
            }
            this.initDays();
            if (this.pickerOptions.shortcuts && Array.isArray(this.pickerOptions.shortcuts) && this.pickerOptions.shortcuts.length) {
                this.minWidth = 380;
                this.shownSideBar = true;
            }
        },
        mounted () {
            window.document.addEventListener('click', this.handleDocClick, false);
        },
        beforeDestroy () {
            window.document.removeEventListener('click', this.handleDocClick);
        },
        components: {
            ShortCuts
        }
    };
</script>