<template>
    <div id="navbar">
        <div id="nav-absolute">
            <div class="mobile-nav-container mobile-only">
                <div class="nav-toggle-wrapper">
                    <div class="nav-toggle">
                        <div class="nav-toggle-bar"></div>
                    </div>
                </div>
                <nav class="nav">
                    <ul>
                        <li v-for="category in categories">
                            <router-link :to="{ name: 'category', params: {  category:  category.slug}}" :class="'category-link'">
                                {{ category.name }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
    
                <router-link :to="'/'">
                    <div id="logo-mobile">
                        <Logo :logoStyle="Number(themeSwitcher.currentStyle)" class="logo-style-1-mobile" alt="The Weekly Output"></Logo>
                    </div>
                </router-link>
    
                <div class="theme-toggle-wrapper">
                    <div class="theme-toggle">
                        <div class="theme-toggle-bar">
                            <settings-wheel style="height: 20px; cursor: pointer;"></settings-wheel>
                        </div>
                    </div>
                </div>
                <nav class="themeswitcher-mobile">
                    <div class="themeswitcher-mobile-wrapper">
                        <span class="theme-switcher-logo-wrapper" @click="selectTheme(1)" v-bind:class="{ active: themeSwitcher.currentStyle === 1}">
                                                                                                    <Logo :logoStyle="1" class="theme-switcher-logo theme-switcher-logo-mobile" alt="The Weekly Output Style 1"></Logo>
                                                                                                </span>
                        <span class="theme-switcher-logo-wrapper" @click="selectTheme(2)" v-bind:class="{ active: themeSwitcher.currentStyle === 2}">
                                                                                                    <Logo :logoStyle="2" class="theme-switcher-logo theme-switcher-logo-mobile" alt="The Weekly Output Style 2"></Logo>
                                                                                                </span>
                        <span class="theme-switcher-logo-wrapper" @click="selectTheme(3)" v-bind:class="{ active: themeSwitcher.currentStyle === 3}">
                                                                                                    <Logo :logoStyle="3" class="theme-switcher-logo theme-switcher-logo-mobile" alt="The Weekly Output 3"></Logo>
                                                                                                </span>
                    </div>
                </nav>
            </div>
            <div id="desktop-nav-container" class="desktop-nav-container desktop-only">
                <router-link :to="'/'">
                    <div id="logo">
                        <div v-if="themeSwitcher.currentStyle == 3" id="top-illustration-wrapper" class="top-illustration-wrapper">
                            <top-illstration class="top-illustration" id="top-illustration" v-bind:style="{ top: topOffset + 'px', left: leftOffset + 'px', zoom: zoomFactor}"></top-illstration>
                        </div>
    
                        <Logo :logoStyle="Number(themeSwitcher.currentStyle)" class="logo-style-1" alt="The Weekly Output"></Logo>
                    </div>
                </router-link>
                <affix v-if="api.loaded" relative-element-selector="#router-link" :scroll-affix="true" v-on:affixtop="scrollHandler(false)" v-on:affix="scrollHandler(true)" :offset="themeSwitcher.styleSettings[themeSwitcher.currentStyle].affix.offset" id="desktop-navbar">
                    <ul class="nav-categories">
                        <router-link :to="'/'" id="nav-logo-link">
                            <li class="theme-switcher-logo-wrapper" v-if="scrolling == true">
                                <Logo :logoStyle="Number(themeSwitcher.currentStyle)" class="theme-switcher-logo-1" alt="The Weekly Output Style 1"></Logo>
                            </li>
                        </router-link>
    
                        <li class="position-relative" @click="toggleActiveExpand()">
                            <settings-wheel style="height: 20px; cursor: pointer;"></settings-wheel>
                            <transition name="themeswitcher-transition">
                                <span id="theme-switcher" v-if="expandedSwitcher">
                                                        <div id="theme-switcher-wrapper">                
                                                            <span class="theme-switcher-logo-wrapper" @click="selectTheme(1)" v-bind:class="{ active: themeSwitcher.currentStyle === 1}">
                                                                <Logo :logoStyle="1" class="theme-switcher-logo" alt="The Weekly Output Style 1"></Logo>
                                                            </span>
                                <span class="theme-switcher-logo-wrapper" @click="selectTheme(2)" v-bind:class="{ active: themeSwitcher.currentStyle === 2}">
                                                                <Logo :logoStyle="2" class="theme-switcher-logo" alt="The Weekly Output Style 2"></Logo>
                                                            </span>
                                <span class="theme-switcher-logo-wrapper" @click="selectTheme(3)" v-bind:class="{ active: themeSwitcher.currentStyle === 3}">
                                                                <Logo :logoStyle="3" class="theme-switcher-logo" alt="The Weekly Output 3"></Logo>
                                                            </span>
            </div>
            </span>
            </transition>
            </li>
            <li v-for="category in categories">
                <router-link :to="{ name: 'category', params: {  category:  category.slug}}" :class="'category-link'">
                    {{ category.name }}
                </router-link>
            </li>
            </ul>
            </affix>
            <hr class="hr-categories" id="directly-below">
        </div>
    </div>
    <div id="nav-spacer"></div>
    </div>
</template>

<script>
    import SettingsWheel from '../assets/svg/settings_wheel.svg'
    import SettingsArrow from '../assets/svg/arrow.svg'
    import TopIllstration from '../assets/svg/Design3_Top-Illustration.svg'
    import apiMixin from '../mixins/api.js'
    import themeswitcherMixin from '../mixins/themeswitcher.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import * as themeMuts from '../themeswitcher/mutation-types.js'
    import VueAffix from 'vue-affix'
    import Slideout from 'vue-slideout'
    import {
        mapState
    } from 'vuex';
    import Logo from './Logo'
    
    export default {
        mixins: [apiMixin, themeswitcherMixin],
    
        components: {
            SettingsWheel,
            SettingsArrow,
            Slideout,
            Logo,
            TopIllstration
        },
        data() {
            return {
                expandedSwitcher: false,
                navDimensions: {
                    height: 0,
                    width: 0
                },
                loadAffix: false,
                scrolling: false,
                topOffset: 0,
                leftOffset: 0,
                zoomFactor: '100%'
            }
        },
        computed: {
            categories() {
                let categoriesArray = []
    
                for (let i = 0; i < this.api.categories.length; i++) {
                    categoriesArray.push({
                        slug: this.api.categories[i].slug,
                        name: this.api.categories[i].name.toUpperCase()
                    })
                }
    
                return categoriesArray
            },
            ...mapState({
                currentStyle: state => state.themeSwitcher.currentStyle,
            })
        },
        methods: {
            toggleActiveExpand() {
                this.expandedSwitcher = !this.expandedSwitcher
            },
    
            selectTheme(themeNumber) {
                this.$store.commit(themeMuts.SET_STYLE, {
                    payload: themeNumber
                })
    
            },
            scrollHandler(state) {
                this.scrolling = state
            },
            pushDesignMatomo() {
                _paq.push(['setCustomDimension', 1, this.currentStyle])
                _paq.push(['trackPageView'])
            },
            generateSeed() {
                Date.prototype.getWeekNumber = function() {
                    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
                    var dayNum = d.getUTCDay() || 7;
                    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
                    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
                    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
                };
    
                let date = Math.floor(new Date().getTime() / 1000 / 60 / 24 / 7 / 52)
    
                let mathSeedRandom = new Math.seedrandom(date)
                return {
                    first: mathSeedRandom(),
                    second: mathSeedRandom(),
                    third: mathSeedRandom(),
                    fourth: mathSeedRandom()
                }
            },
            generateImagePosition() {
                let number = this.generateSeed()
                console.log()
    
                this.topOffset = number.first * 1000 * -1
                this.leftOffset = number.second * 1000 * -1
    
                this.zoomFactor = (80 + number.third * 100 * number.fourth).toString() + '%'
    
                /*this.topIllHeight = height * (number.third * wrapper.height)
                this.topIllWidth = width * (number.third * wrapper.width)*/
    
                let image = document.getElementById('top-illustration')
                let wrapper = document.getElementById('top-illustration-wrapper')
                let height = image.clientHeight
                let width = image.clientWidth
    
                let imageRect = image.getBoundingClientRect()
                let wrapperRect = wrapper.getBoundingClientRect()
                let offset = imageRect.bottom - wrapperRect.bottom
                let offset2 = imageRect.right - wrapperRect.right
    
                if (imageRect.right < wrapperRect.width) {
                    alert(imageRect.right)
                } else {
                    console.log('its good')
                }
                if (imageRect.bottom < wrapperRect.height) {
                    this.topOffset += imageRect.bottom
    
                } else {
                    console.log('its good')
                }
                if (imageRect.top > 0) {
                    this.topOffset = 0
                }
                if (imageRect.left > 0) {
                    this.leftOffset = 0
                }
            }
        },
        watch: {
            currentStyle() {
                if (Object.keys(this.$route.query) !== this.currentStyle.toString) {
                    this.$router.replace({
                        query: {
                            [this.currentStyle]: null
                        }
                    })
                }
                if (this.currentStyle == 3) {
                    setTimeout(() => {
                        this.generateImagePosition()
                    }, 500)
    
                }
                this.pushDesignMatomo()
            },
            $route(to, from) {
                // with same router query on change
                if (from.query === to.query) {
                    console.log('didn\'t change a thing')
                    return
                }
    
                // with valid design number
    
                if (Object.keys(to.query) == '1' || Object.keys(to.query) == '2' || Object.keys(to.query) == '3') {
                    this.selectTheme(Object.keys(to.query))
                } else {
                    // with invalid design number
                    console.log('hm')
                    this.$router.replace({
                        query: {
                            [this.currentStyle]: null
                        }
                    })
                }
    
    
            }
        },
        mounted() {
            this.pushDesignMatomo()
            let hamburger = {
                navToggle: document.querySelector('.nav-toggle'),
                nav: document.querySelector('nav'),
    
                doToggle: function(e) {
                    e.preventDefault();
                    this.navToggle.classList.toggle('expanded');
                    this.nav.classList.toggle('expanded');
                }
            };
    
            hamburger.navToggle.addEventListener('click', function(e) {
                hamburger.doToggle(e);
            })
            let thememobile = {
                navToggle: document.querySelector('.theme-toggle'),
                nav: document.querySelector('.themeswitcher-mobile'),
    
                doToggle: function(e) {
                    e.preventDefault();
                    this.navToggle.classList.toggle('expanded');
                    this.nav.classList.toggle('expanded');
                }
            };
    
            thememobile.navToggle.addEventListener('click', function(e) {
                thememobile.doToggle(e);
            })
    
    
    
        }
    }
</script>

<style>
    #logo {
        text-align: center;
        display: block;
        padding: 32px 16px 24px 16px;
        font-size: 3em;
    }
    
    .style-3 #logo {
        z-index: 2;
        position: relative;
        fill: white;
        padding: 64px 16px
    }
    
    #logo-mobile {
        text-align: center;
        display: block;
        padding: 0;
        font-size: 3em;
        padding: 1%;
    }
    
    .nav-toggle {
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        cursor: pointer;
        height: 1rem;
        left: 6%;
        position: fixed;
        top: 1.5rem;
        width: 1rem;
        z-index: 2;
    }
    
    .nav-toggle:hover {
        opacity: 0.8;
    }
    
    .nav-toggle .nav-toggle-bar,
    .nav-toggle .nav-toggle-bar::after,
    .nav-toggle .nav-toggle-bar::before {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
        background: black;
        content: '';
        height: 0.1rem;
        width: 100%;
    }
    
    .nav-toggle .nav-toggle-bar {
        margin-top: 0;
    }
    
    .nav-toggle .nav-toggle-bar::after {
        margin-top: 0.2rem;
    }
    
    .nav-toggle .nav-toggle-bar::before {
        margin-top: -0.2rem;
    }
    
    .nav-toggle.expanded .nav-toggle-bar {
        background: transparent;
    }
    
    .nav-toggle.expanded .nav-toggle-bar::after,
    .nav-toggle.expanded .nav-toggle-bar::before {
        background: black;
        margin-top: 0;
    }
    
    .nav-toggle.expanded .nav-toggle-bar::after {
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    
    .nav-toggle.expanded .nav-toggle-bar::before {
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    
    .nav {
        -webkit-transition: left 0.5s ease;
        -moz-transition: left 0.5s ease;
        -ms-transition: left 0.5s ease;
        -o-transition: left 0.5s ease;
        transition: left 0.5s ease;
        background: white;
        color: black;
        cursor: pointer;
        font-size: 2rem;
        line-height: 2;
        height: 100vh;
        left: -20rem;
        padding: 6rem 2rem 2rem 2rem;
        position: fixed;
        top: 0;
        width: 20rem;
        z-index: 1;
    }
    
    .nav.expanded {
        left: 0;
    }
    
    .nav ul {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    
    /* themeswitcher-mobile */
    
    .themeswitcher-mobile {
        -webkit-transition: right 0.5s ease;
        -moz-transition: right 0.5s ease;
        -ms-transition: right 0.5s ease;
        -o-transition: right 0.5s ease;
        transition: right 0.5s ease;
        background: white;
        color: black;
        cursor: pointer;
        font-size: 2rem;
        line-height: 2;
        height: 100vh;
        right: -20rem;
        padding: 6rem 2rem 2rem 2rem;
        position: fixed;
        top: 0;
        width: 20rem;
        z-index: 1;
    }
    
    .themeswitcher-mobile.expanded {
        right: 0;
    }
    
    .themeswitcher-mobile-wrapper {
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
    }
    
    .themeswitcher-mobile ul {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .themeswitcher-mobile {
        -webkit-transition: right 0.5s ease;
        -moz-transition: right 0.5s ease;
        -ms-transition: right 0.5s ease;
        -o-transition: right 0.5s ease;
        transition: right 0.5s ease;
        background: white;
        color: black;
        cursor: pointer;
        font-size: 2rem;
        line-height: 2;
        height: 100vh;
        right: -20rem;
        padding: 6rem 2rem 2rem 2rem;
        position: fixed;
        top: 0;
        width: 20rem;
        z-index: 1;
    }
    
    .themeswitcher-mobile.expanded {
        right: 0;
    }
    
    .theme-toggle-wrapper {
        position: absolute;
        right: 0;
        top: 1.4em;
        z-index: 2;
    }
    
    .theme-switcher-logo-mobile {
        width: 80% !important;
        padding: 10px !important;
        margin: auto !important;
        display: block !important;
        padding: 20px !important
    }
    
    .position-relative {
        position: relative;
    }
    
    .themeswitcher-transition-enter-active,
    .themeswitcher-transition-leave-active {
        transition-property: opacity;
        transition-duration: .10s;
    }
    
    .themeswitcher-transition-enter-active {
        transition-delay: .10s;
    }
    
    .themeswitcher-transition-enter,
    .themeswitcher-transition-leave-active {
        opacity: 0;
    }
    
    .top-illustration-wrapper {
        position: absolute;
        width: inherit;
        height: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    
    .top-illustration {
        position: absolute;
    }
</style>
