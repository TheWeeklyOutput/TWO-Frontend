<template>
    <div class="component-wrapper">
        <h1>{{ category }}</h1>
        <hr>
        <CategoryList class="" :categoryToRender="category" :showText="true" :showAuthor="true" :mode="'list-'" :imageStyle="'next-to-article'">
        </CategoryList>
    
    </div>
    
</template>

<script>
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import CategoryList from '../components/ListArticles'
    
    export default {
        components: {
            CategoryList
        },
        mixins: [apiMixin],
    
        props: {
            category: {
                type: String,
                default: 'Default Category'
            }
        },
        mounted() {},
    
        computed: {
        }
    
    
    }
</script>

<style>
    
</style>
