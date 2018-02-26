<template>
    <div class="category component-wrapper">
        <!--<h1>{{ articleHandler.categories.find(art => art.slug === (category)).name }}</h1>-->
        <Titles :category="api.categories.find(art => art.slug === (category)).name" />
    
        <hr>
        <CategoryList class="" :categoryToRender="category" :showText="true" :showAuthor="true" :mode="'list-'" :showShares="true" :imageStyle="'next-to-article'">
        </CategoryList>
    </div>
</template>

<script>
    import apiMixin from '../mixins/api.js'
    import CategoryList from '../components/ListArticles'
    import Titles from '../components/Titles'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    
    export default {
        components: {
            CategoryList,
            Titles
        },
        mixins: [apiMixin],
        props: {
            category: {
                type: String,
                default: 'Default Category'
            }
        },
        mounted() {
            this.$store.dispatch(apiActs.CHANGE_PAGE_TITLE, {
                title: this.api.categories.find(art => art.slug === (this.category)).name + ' | The Weekly Output'
            })
        },
        watch: {
            category() {
                this.$store.dispatch(apiActs.CHANGE_PAGE_TITLE, {
                    title: this.api.categories.find(art => art.slug === (this.category)).name + ' | The Weekly Output'
                })
    
            }
        }
    
    }
</script>

<style>
    
</style>
