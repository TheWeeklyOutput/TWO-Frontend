<template>
    <div class="component-wrapper">
        <!--<h1>{{ articleHandler.categories.find(art => art.label === (category)).name }}</h1>-->
        <component :is="$store.state.TitleList[api.categories.find(art => art.label === (category)).name]" class="topper-headline-text"></component>
    
        <hr>
        <CategoryList class="" :categoryToRender="category" :showText="true" :showAuthor="true" :mode="'list-'" :imageStyle="'next-to-article'">
        </CategoryList>
    </div>
</template>

<script>
    import apiMixin from '../mixins/api.js'
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
    
        computed: {}
    }
</script>

<style>
    
</style>
