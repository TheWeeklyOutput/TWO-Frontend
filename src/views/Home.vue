<template>
    <div>
        <div class="component-wrapper home" id="home">
            <Topper class="topper" :categoryToRender="highlights">
            </Topper>
    
            <div class="home-bottom">
                <div class="newest-list" v-for="category in categoriesToRender">
                    <Titles :category="category.name"></Titles>
                    <hr>
                    <div class="list-article-wrapper">
                        <ListArticles :categoryToRender="category.slug" :showText="false" :showAuthor="true" :imageStyle="'next-to-article'" :showShares="true" :mode="'list-'"></ListArticles>
                    </div>
                    <div class="show-all-container">
                        <div class="show-all-bottom"></div>
                        <router-link :to="{ style: themeSwitcher.currentStyle, name: 'category', params: {  category: category.slug }}" transition="fade">
                            <button class="show-all-button">SHOW MORE</button>
                        </router-link>
                    </div>
                </div>
                <TweetFeed class="twitter-sidebar desktop-only">
                </TweetFeed>
            </div>
        </div>
    </div>
</template>

<script>
    import themeSwitcherMixin from '../mixins/themeswitcher.js'
    
    
    import Topper from '../components/Topper'
    import apiMixin from '../mixins/api.js'
    import ListArticles from '../components/ListArticles'
    import TweetFeed from '../components/TweetFeed'
    import Titles from '../components/Titles'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    
    
    export default {
        mixins: [apiMixin, themeSwitcherMixin],
        components: {
            Topper,
            ListArticles,
            TweetFeed,
            Titles
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
                    slug: 'sport',
                    name: 'Sports'
                }, {
                    slug: 'technology',
                    name: 'Tech'
                }, {
                    slug: 'world',
                    name: 'World'
                }]
            }
        },
        mounted() {
            this.$store.dispatch(apiActs.CHANGE_PAGE_TITLE, {
                title: 'Home | The Weekly Output'
            })
        }
    
    }
</script>

<style>
    
</style>
