<template>
    <div id="navbar">
        <div id="nav-absolute">
            <div class="mobile-nav-container mobile-only">
                <div>
                    <router-link :to="'/'">
                        <div id="logo-mobile">
                            <logo-style1 class="logo-style-1-mobile" alt="The Weekly Output"></logo-style1>
                        </div>
                    </router-link>
    
                </div>
            </div>
            <div id="desktop-nav-container" class="desktop-nav-container desktop-only">
                <router-link :to="'/'">
                    <div id="logo">
                        <logo-style1 class="logo-style-1" alt="The Weekly Output"></logo-style1>
                    </div>
                </router-link>
                <affix v-if="api.loaded" relative-element-selector="#router-link" :scroll-affix="false" :offset="{ top: 80, bottom: 200 }" v-on:affixtop="scrollHandler(false)" v-on:affix="scrollHandler(true)" id="desktop-navbar">
                    <div>
                        <span id="theme-switcher" v-bind:class="{ active: expandedSwitcher}">
                        <div id="theme-switcher-wrapper">                
                            <span class="theme-switcher-logo-wrapper" @click="selectTheme(1)" v-bind:class="{ active: themeSwitcher.currentStyle === 1}">
                                <logo-style1 class="theme-switcher-logo" alt="The Weekly Output Style 1"></logo-style1>
                            </span>
                            <span class="theme-switcher-logo-wrapper" @click="selectTheme(2)" v-bind:class="{ active: themeSwitcher.currentStyle === 2}">
                                <logo-style1 class="theme-switcher-logo" alt="The Weekly Output Style 2"></logo-style1>
                            </span>
                            <!--<span class="theme-switcher-logo-wrapper" @click="selectTheme(3)" v-bind:class="{ active: themeSwitcher.currentStyle === 3}">
                                <logo-style1 class="theme-switcher-logo" alt="The Weekly Output 3"></logo-style1>
                            </span>-->
                        </div>
                    </span>
                    <ul class="nav-categories">
                        <router-link :to="'/'" id="nav-logo-link">
                            <li class="theme-switcher-logo-wrapper" v-if="scrolling == true">
                                <logo-style1 class="theme-switcher-logo-1" alt="The Weekly Output Style 1"></logo-style1>
                            </li>
                        </router-link>
    
                        <li @click="toggleActiveExpand()">
                            <settings-wheel style="height: 20px; cursor: pointer;"></settings-wheel>
                        </li>
                        <li v-for="category in categories">
                            <router-link :to="{ name: 'category', params: {  category:  category.slug}}" :class="'category-link'">
                                {{ category.name }}
                            </router-link>
                        </li>
                    </ul>
            </div>
            </affix>
            <hr class="hr-categories" id="directly-below">
        </div>
    </div>
    <div id="nav-spacer"></div>
    </div>
</template>

<script>
    import LogoStyle1 from '../assets/svg/logo_style_1.svg'
    import SettingsWheel from '../assets/svg/settings_wheel.svg'
    import SettingsArrow from '../assets/svg/arrow.svg'
    import apiMixin from '../mixins/api.js'
    import themeswitcherMixin from '../mixins/themeswitcher.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import * as themeMuts from '../themeswitcher/mutation-types.js'
    import VueAffix from 'vue-affix'
    import Slideout from 'vue-slideout'
    
    export default {
        mixins: [apiMixin, themeswitcherMixin],
    
        components: {
            LogoStyle1,
            SettingsWheel,
            SettingsArrow,
            Slideout
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
            }
        },
        methods: {
            toggleActiveExpand() {
                this.expandedSwitcher = !this.expandedSwitcher
            },
            selectTheme(themeNumber) {
                //if (this.expandedSwitcher) {
                this.$store.commit(themeMuts.SET_STYLE, {
                    payload: themeNumber
                })
    
                // }
            },
            scrollHandler(state) {
                this.scrolling = state
            },
            open() {
    
            }
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
</style>
