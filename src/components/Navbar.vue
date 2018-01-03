<template>
    <div id="navbar" class="component-wrapper">
    
        <router-link :to="'/'">
            <div id="logo">
                <logo-style1 class="logo-style-1" alt="Weekly Output"></logo-style1>
            </div>
        </router-link>
        <hr class="hr-logo">
    
    
        <span id="theme-switcher-dropdown">
                                                        
                    </span>
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
</template>

<script>
    import LogoStyle1 from '../assets/svg/logo_style_1.svg'
    import apiMixin from '../mixins/api.js'
    
    export default {
        mixins: [apiMixin],
    
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
</style>
