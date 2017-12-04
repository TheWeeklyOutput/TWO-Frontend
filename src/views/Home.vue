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
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }
    
    p {
        font-size: 1.2em;
    }
    
    footer {
        width: 100vw;
        height: 8em;
    }
    
    .recent-articles {
        margin: 0 auto;
        max-width: 1300px;
    }
    
    @media (min-width: 600px) {
        h1 {
            font-size: calc(1em * 1.250 * 1.250 * 1.250 * 1.250);
        }
    }
    
    .list-article-wrapper {
        margin: 0 auto;
        max-width: 1100px;
    }
</style>
