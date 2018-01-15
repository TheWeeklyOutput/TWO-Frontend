<template>
    <div>
        <div class="component-wrapper">
            <Topper class="topper" :categoryToRender="highlights">
            </Topper>
    
            <div class="home-bottom">
                <div class="newest-list" v-for="category in categoriesToRender">
                    <component :is="$store.state.TitleList[category.name]" class="topper-headline-text"></component>
                    <hr>
                    <div class="list-article-wrapper">
                        <ListArticles :categoryToRender="category.slug" :showText="false" :showAuthor="true" :imageStyle="'next-to-article'" :showShares="true" :mode="'list-'"></ListArticles>
                    </div>
                    <router-link :to="{ name: 'category', params: {  category: category.slug }}" transition="fade">
                        <button class="show-all-button">Show All</button>
                    </router-link>
                </div>
                <TweetFeed class="twitter-sidebar desktop-only">
                </TweetFeed>
    
            </div>
    
    
    
        </div>
    
    </div>
</template>

<script>
    import Topper from '../components/Topper'
    import apiMixin from '../mixins/api.js'
    import ListArticles from '../components/ListArticles'
    import TweetFeed from '../components/TweetFeed'
    
    export default {
        mixins: [apiMixin],
        components: {
            Topper,
            ListArticles,
            TweetFeed
        },
        props: {},
        data() {
            return {
                highlights: {
                    slug: 'highlights',
                    name: 'Highlights'
                },
                categoriesToRender: [{
                    slug: 'politics',
                    name: 'Politics'
                }, {
                    slug: 'health',
                    name: 'Health'
                }, {
                    slug: 'entertainment',
                    name: 'Entertainment'
                }, {
                    slug: 'sports',
                    name: 'Sports'
                }, {
                    slug: 'tech',
                    name: 'Tech'
                }, {
                    slug: 'world',
                    name: 'World'
                }]
            }
        }
    
    }
</script>

<style>
    
</style>
