<template>
    <div>
        <div class="recent-articles">
            <div class="list-article-wrapper">
                <h1>Top Stories of the week</h1>
                <RecentArticles :categoryToRender="categoriesToRender[0]" :showText="false" :showAuthor="true" :imageStyle="'next-to-article'"></RecentArticles>
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
        data() {
            return {
                categoriesToRender: ['topArticles']
            }
        }
    
    }
</script>

<style>
</style>
