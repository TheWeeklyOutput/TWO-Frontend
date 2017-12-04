<template>
    <div>
        <div class="recent-articles">
            <div class="list-article-wrapper">
                <RecentArticles :categoryToRender="categoriesToRender[0]"></RecentArticles>
            </div>
        </div>
    
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import RecentArticles from '../components/ListArticles'
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    
    
    export default {
        mixins: [apiMixin],
        components: {
            RecentArticles
        },
        props: {},
        created() {
            this.$store.dispatch(apiActs.GET_ARTICLES_BY_CATEGORIES, {
                categories: this.categoriesToRender
            })
        },
        data() {
            return {
                categoriesToRender: ['topArticles']
            }
        }
    
    }
</script>

<style>
</style>
