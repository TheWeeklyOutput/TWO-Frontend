<template>
    <div id="navbar">
        <div id="nav-absolute">
            <div class="mobile-nav-container mobile-only">
                <div>
                    <router-link :to="'/'">
                        <div id="logo-mobile">
                            <Logo :logoStyle="Number(themeSwitcher.currentStyle)" class="logo-style-1-mobile" alt="The Weekly Output"></Logo>
                        </div>
                    </router-link>
    
                </div>
            </div>
            <div id="desktop-nav-container" class="desktop-nav-container desktop-only">
                <router-link :to="'/'">
                    <div id="logo">
                        <Logo :logoStyle="Number(themeSwitcher.currentStyle)" class="logo-style-1" alt="The Weekly Output"></Logo>
                    </div>
                </router-link>
                <affix v-if="api.loaded" relative-element-selector="#router-link" :scroll-affix="false" :offset="{ top: 80, bottom: 200 }" v-on:affixtop="scrollHandler(false)" v-on:affix="scrollHandler(true)" id="desktop-navbar">
                        <ul class="nav-categories">
                            <router-link :to="'/'" id="nav-logo-link">
                                <li class="theme-switcher-logo-wrapper" v-if="scrolling == true">
                                    <Logo :logoStyle="Number(themeSwitcher.currentStyle)" class="theme-switcher-logo-1" alt="The Weekly Output Style 1"></Logo>
                                </li>
                            </router-link>

                            <li class="position-relative" @click="toggleActiveExpand()">
                                <settings-wheel style="height: 20px; cursor: pointer;"></settings-wheel>
                                <span id="theme-switcher" v-bind:class="{ active: expandedSwitcher}">
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
            Logo
        },
        data() {
            return {
                expandedSwitcher: false,
                navDimensions: {
                    height: 0,
                    width: 0
                },
                loadAffix: false,
                scrolling: false
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
                this.$router.push({
                    query: {
                        design: this.currentStyle
                    }
                })
    
            },
            scrollHandler(state) {
                this.scrolling = state
            },
            pushDesignMatomo() {
                _paq.push(['setCustomDimension', 1, this.currentStyle])
                _paq.push(['trackPageView'])
            }
        },
        watch: {
            currentStyle() {
                if (this.$route.query.design !== this.currentStyle && this.$route.query.design !== undefined) {
                    this.$router.replace({
                        query: {
                            design: this.currentStyle
                        }
                    })
                }
                this.pushDesignMatomo()
            },
            $route(to, from) {
                if (from.query.design === undefined || (from.query.design != 1 || from.query.design != 2 || from.query.design != 3)) {
                    this.$router.push({
                        query: {
                            design: this.currentStyle
                        }
    
                    })
                }
    
                const IS_VALID = to.query.design == 1 || to.query.design == 2 || to.query.design == 3
                if (to.query.design !== this.currentStyle && to.query.design !== undefined && IS_VALID) {
                    this.selectTheme(to.query.design)
                    if (to.path != from.path) {
                        this.$router.replace({
                            query: from.query
                        })
                    }
                }
    
            }
        },
        mounted() {
            this.pushDesignMatomo()
        }
    }
</script>

<style>
    #logo {
        text-align: center;
        display: block;
        padding: 32px 16px 24px 16px;
        font-size: 3em
    }
    
    #logo-mobile {
        text-align: center;
        display: block;
        padding: 0;
        font-size: 3em;
        padding: 1%;
    }
    
    .slideout-menu {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 256px;
        height: 100vh;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        z-index: 0;
        display: none;
        background-color: #1D1F20;
        color: white;
    }
    
    .slideout-menu-left {
        left: 0;
    }
    
    .slideout-menu-right {
        right: 0;
    }
    
    .slideout-panel {
        color: white;
        position: relative;
        z-index: 1;
        will-change: transform;
    }
    
    .slideout-open,
    .slideout-open body,
    .slideout-open .slideout-panel {
        overflow: hidden;
    }
    
    .slideout-open .slideout-menu {
        display: block;
    }
    
    .position-relative {
        position: relative;
    }
</style>
