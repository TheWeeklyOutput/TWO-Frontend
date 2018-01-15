<template>
    <div id="navbar" class="component-wrapper">
        <div class="mobile-nav-container mobile-only">
            <div>
                <router-link :to="'/'">
                    <div id="logo-mobile">
                        <logo-style1 class="logo-style-1" alt="Weekly Output"></logo-style1>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="desktop-nav-container desktop-only">
            <router-link :to="'/'">
                <div id="logo">
                    <logo-style1 class="logo-style-1" alt="Weekly Output"></logo-style1>
                </div>
            </router-link>
            <span id="theme-switcher-dropdown">
                <select v-model="themeSwitcher.currentStyle">
                    <option disabled value=""> {{ themeSwitcher.CurrentStlye }}</option>
                    <option value="1">Business</option>
                    <option value="2">Pop</option>
                    <option value="3">Tech</option>
                </select>
            </span>
            <hr class="hr-logo">
            <ul class="nav-categories">
                <li v-for="category in categories">
                    <router-link :to="{ name: 'category', params: {  category:  category.label}}" :class="'category-link'" v-if="!(category.label === '-')">
                        {{ category.name }}
                    </router-link>
                    <span v-else> {{ category.name}} </span>
                </li>
            </ul>
            <hr class="hr-categories">
        </div>
    
    </div>
</template>

<script>
    import LogoStyle1 from '../assets/svg/logo_style_1.svg'
    import apiMixin from '../mixins/api.js'
    import themeswitcherMixin from '../mixins/themeswitcher.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    
    export default {
        mixins: [apiMixin, themeswitcherMixin],
    
        components: {
            LogoStyle1
        },
        computed: {
            categories() {
                let categoriesArray = []
    
                for (let i = 0; i < this.api.categories.length; i++) {
                    categoriesArray.push({
                        label: this.api.categories[i].label,
                        name: this.api.categories[i].name
                    })
                    if (this.api.categories.length > i + 1) {
                        categoriesArray.push({
                            label: '-',
                            name: ' - '
                        })
                    }
                }
    
                return categoriesArray
            }
        },
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
</style>
