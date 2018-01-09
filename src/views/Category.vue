<template>
    <div class="component-wrapper">
        <h1>{{ articleHandler.categories.find(art => art.label === (category)).name }}</h1>
        <hr>
        <CategoryList class="" :categoryToRender="category" :showText="true" :showAuthor="true" :mode="'list-'" :imageStyle="'next-to-article'">
        </CategoryList>
    </div>
</template>

<script>
    import articleHandlerMixin from '../mixins/articlehandler.js'
    import CategoryList from '../components/ListArticles'
    
    export default {
        components: {
            CategoryList
        },
        mixins: [articleHandlerMixin],
    
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
