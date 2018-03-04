<template>
    <div class="bp-dropdown" :class="{ className, 'bp-dropdown--sub': role }">
        <span :class="{ [`bp-dropdown__${(role) ? 'sub' : 'btn'}`]: true, [`bp-dropdown__${(role) ? 'sub' : 'btn'}--active`]: !isHidden, [`${className}-bp__btn`]: className, [`${className}-bp__btn--active`]: !isHidden }"
            @click="_onToggle"
            @mouseenter="_onBtnEnter"
            @mouseleave="_onBtnLeave">
            <slot name="btn"></slot>
        </span>
        <transition name="fade">
            <div v-if="!isHidden"
                 class="bp-dropdown__body"
                 :id="id"
                 :style="{ minWidth: `${width}px`, top: `${top}px`, left: `${left}px` }"
                 :class="{ [`${className}-bp__body`]: className }"
                 @click="_onBodyClick"
                 @mouseenter="_onBodyEnter"
                 @mouseleave="_onBodyLeave">
                <slot name="body"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'bp-vuejs-dropdown',

        props: {
            role: {
                type: String,
                required: false,
                default: ''
            },

            unscroll: {
                type: [HTMLElement, String],
                required: false,
                default: null
            },

            align: {
                type: String,
                required: false,
                default: 'bottom'
            },

            x: {
                type: Number,
                required: false,
                default: 0
            },

            y: {
                type: Number,
                required: false,
                default: 0
            },

            beforeOpen: {
                type: Function,
                required: false,
                default: resolve => resolve()
            },

            trigger: {
                type: String,
                required: false,
                default: 'click'
            },

            closeOnClick: {
                type: Boolean,
                required: false,
                default: false
            },

            isIcon: {
                type: Boolean,
                required: false,
                default: true
            },

            className: {
                type: String,
                required: false,
                default: ''
            },
        },

        data() {
            return {
                isHidden: true,
                isLoading: false,

                id: null,
                timeout: null,

                top: undefined,
                right: undefined,
                bottom: undefined,
                left: undefined,
                width: undefined
            }
        },

        watch: {
            isHidden(isHidden) {
                if (this.unscroll) {
                    const el = (this.unscroll instanceof HTMLElement) ?
                        this.unscroll : document.querySelector(this.unscroll);

                    if (el) {
                        el.style.overflow = (!isHidden) ? 'hidden' : '';
                    }
                }
            }
        },

        created() {
            const $root = this.$root;

            // --- hide dropdown if other dropdowns show
            // --- or document clicked
            $root.$on('bp-dropdown:open', () => this.isHidden = true);
            $root.$on('bp-dropdown:hide', () => this.isHidden = true);

            // --- hide dropdown on document click event
            if (this.trigger === 'click' && !$root['is-bp-dropdown']) {
                Object.defineProperty($root, 'is-bp-dropdown', {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value: true
                });

                document.onmousedown = (e) => {
                    const target = e.target;
                    const dropdown = target.closest('.bp-dropdown__btn') || target.closest('.bp-dropdown__body');

                    if (!dropdown) {
                        $root.$emit('bp-dropdown:hide');
                    }
                }
            }

            this.id = 'bp-dropdown-' + this.generateRandomId();
        },

        methods: {
            // --- generate random id for query selector
            generateRandomId() {
                return Math.random().toString(36).substr(2, 10);
            },

            _onToggle(e) {
                if (this.trigger !== 'click') {
                    return;
                }

                this.checkCustomCallback(e);
            },

            _onBtnEnter(e) {
                if (this.trigger !== 'hover' || !this.isHidden) {
                    return;
                }

                this.checkCustomCallback(e);
            },

            _onBtnLeave(e) {
                if (this.trigger !== 'hover') {
                    return;
                }

                if (this.role) {
                    this.timeout = setTimeout(() => this.isHidden = true, 100);
                }

                const to = e.toElement;
                if (!to) {
                    return;
                }

                const isDropdown = to.closest('.bp-dropdown__btn') || to.closest('.bp-dropdown__body');
                if (isDropdown) {
                    return;
                }

                this.prepare();
            },

            _onBodyClick() {
                if (this.closeOnClick) {
                    this.isHidden = true;
                }
            },

            _onBodyEnter() {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }
            },

            _onBodyLeave(e) {
                if (this.trigger !== 'hover') {
                    return;
                }

                const to = e.toElement;
                if (!to) {
                    return;
                }

                if (to.closest('.bp-dropdown__btn') || to.closest('.bp-dropdown__sub')) {
                    return;
                }

                this.prepare();
            },

            checkCustomCallback(e) {
                if (!this.isHidden) {
                    this.prepare();
                    return;
                }

                // --- custom callback before open
                const promise = new Promise(resolve => {
                    this.isLoading = true;
                    this.beforeOpen.call(this, resolve);
                });

                promise.then(() => {
                    this.isLoading = false;
                    if (!e.target.closest('.bp-dropdown__body')) {
                        // --- hide dropdown if other dropdowns show
                        this.$root.$emit('bp-dropdown:open');
                    }

                    setTimeout(this.prepare, 0);
                });

                promise.catch(() => { throw Error('bp-dropdown promise error') });
            },

            prepare() {
                this.isHidden = !this.isHidden;
                if (!this.isHidden) {
                    this.$nextTick(() => {
                        const button = this.$el.firstElementChild;
                        const container = document.getElementById(this.id);

                        this.setWidth(button.offsetWidth);
                        this.setPosition(button, container);
                    });
                }
            },

            setWidth(width) {
                this.width = width;
            },

            setPosition(btn, body) {
                if (!btn || !body) {
                    return;
                }

                const coords = this.getCoords(btn);

                // --- current position
                const currentTop = coords.top;
                const currentLeft = coords.left;

                // --- btn size
                const btnWidth = btn.offsetWidth;
                const btnHeight = btn.offsetHeight;

                // --- body size
                const bodyWidth = body.offsetWidth;
                const bodyHeight = body.offsetHeight;

                switch(this.align) {
                    case 'top':
                        this.top = (currentTop + pageYOffset - bodyHeight);
                        this.left = (currentLeft + pageXOffset);
                        break;
                    case 'right':
                        this.top = (currentTop + pageYOffset);
                        this.left = (currentLeft + pageXOffset + btnWidth);
                        break;
                    case 'bottom':
                        this.top = (currentTop + pageYOffset + btnHeight);
                        this.left = (currentLeft + pageXOffset);
                        break;
                    case 'left':
                        this.top = (currentTop + pageYOffset);
                        this.left = (currentLeft + pageXOffset - bodyWidth);
                        break;
                    default:
                        this.top = (currentTop + pageYOffset + btnHeight);
                        this.left = (currentLeft + pageXOffset);
                        break;
                }

                this.top += this.y;
                this.left += this.x;
            },

            getCoords(el) {
                el = el.getBoundingClientRect();
                return {
                    top: el.top - pageYOffset,
                    left: el.left - pageXOffset
                };
            }
        }
    }
</script>

<style>
    .bp-dropdown--sub {
        width: 100%;
    }

    .bp-dropdown--sub .bp-dropdown__btn,
    .bp-dropdown--sub .bp-dropdown__sub {
        width: 100%;
    }

    .bp-dropdown--sub .bp-dropdown__icon {
        margin-left: auto;
    }

    .bp-dropdown__btn {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        transition: background-color .1s ease;
    }

    .bp-dropdown__sub {
        display: inline-flex;
        align-items: center;
    }

    .bp-dropdown__btn--active {
        background-color: #eee;
    }

    .bp-dropdown__icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        overflow: visible;
        transition: transform .1s ease;
    }

    .bp-dropdown__icon--spin {
        width: 12px;
        height: 12px;
        animation: spin 2s infinite linear;
    }

    .bp-dropdown__icon--top {
        transform: rotate(-180deg);
    }

    .bp-dropdown__icon--right {
        transform: rotate(-90deg);
    }

    .bp-dropdown__icon--bottom {
        transform: rotate(0);
    }

    .bp-dropdown__icon--left {
        transform: rotate(-270deg);
    }

    .bp-dropdown__btn--active .bp-dropdown__icon--top,
    .bp-dropdown__sub--active .bp-dropdown__icon--top {
        transform: rotate(0);
    }

    .bp-dropdown__btn--active .bp-dropdown__icon--right,
    .bp-dropdown__sub--active .bp-dropdown__icon--right {
        transform: rotate(-270deg);
    }

    .bp-dropdown__btn--active .bp-dropdown__icon--bottom,
    .bp-dropdown__sub--active .bp-dropdown__icon--bottom {
        transform: rotate(-180deg);
    }

    .bp-dropdown__btn--active .bp-dropdown__icon--left,
    .bp-dropdown__sub--active .bp-dropdown__icon--left {
        transform: rotate(-90deg);
    }

    .bp-dropdown__body {
        position: fixed;
        top: 0;
        left: 0;
        padding: 6px 8px;
        background-color: #fff;
        box-shadow: 0 5px 15px -5px rgba(0, 0, 0, .5);
        z-index: 9999;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    @keyframes spin {
        0% {
            transform:rotate(0)
        }
        100% {
            transform:rotate(360deg)
        }
    }
</style>