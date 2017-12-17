<template>
    <div>
        <div class="component-wrapper">
            <div class="topper">
                <div class="topper-headline">
                    <h1 class="topper-headline-text">{{ categoriesToRender[1].name }}</h1>
                    <hr>
                </div>
                <div class="list-article-wrapper">
                    <RecentArticles :categoryToRender="categoriesToRender[1].label" :showText="true" :showAuthor="false" :imageStyle="'image-above-article'" :mode="'topper-'"></RecentArticles>
                </div>
                <TweetFeed :id="''" class="twitter-sidebar desktop-only" />
    
            </div>
            <div class="newest-list">
                <h1>{{ categoriesToRender[0].name }}</h1>
                <hr>
                <div class="list-article-wrapper">
                    <RecentArticles :categoryToRender="categoriesToRender[0].label" :showText="false" :showAuthor="true" :imageStyle="'next-to-article'" :mode="'list-'"></RecentArticles>
                </div>
            </div>
    
    
        </div>
    
    </div>
</template>

<script>
    import RecentArticles from '../components/ListArticles'
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import TweetFeed from '../components/TweetFeed'
    
    
    export default {
        mixins: [apiMixin],
        components: {
            RecentArticles,
            TweetFeed
        },
        props: {},
        data() {
            return {
                categoriesToRender: [{
                    label: 'topArticles',
                    name: 'Top Articles'
                }, {
                    label: 'highlights',
                    name: 'Highlights'
                }]
            }
        }
    
    }
</script>

<style>
    
</style>
