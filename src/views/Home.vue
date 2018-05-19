<template>
    <div>
        <div class="component-wrapper home" id="home">
            <Topper class="topper" :categoryToRender="highlights">
            </Topper>
    
            <div class="home-bottom" id="home-bottom">
                <div class="newest-list" v-for="category in categoriesToRender">
                    <Titles :category="category.name"></Titles>
                    <hr>
                    <div class="list-article-wrapper">
                        <ListArticles :categoryToRender="category.slug" :showText="themeSwitcher.styleSettings[themeSwitcher.currentStyle].home.descriptionShown" :showAuthor="true" :imageStyle="'next-to-article'" :showShares="true" :mode="'list-'"></ListArticles>
                    </div>
                    <div class="show-all-container">
                        <div class="show-all-bottom"></div>
                        <router-link :to="{ style: themeSwitcher.currentStyle, name: 'category', params: {  category: category.slug }}" transition="fade">
                            <button class="show-all-button">SHOW MORE</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <affix v-if="api.articles && api.loaded" relative-element-selector="#home-bottom" id="twitter-affix" :offset="{ top: 100, bottom: 100 }" :scroll-affix="true" class="desktop-only">
                <TweetFeed class="twitter-sidebar " />
            </affix>
    
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
    import VueAffix from 'vue-affix'
    
    
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

    :root {
        --main-text-color: black;
        --grey-stuff: #e3e3e3;
        --second-grey-stuff: #333333;
        --bg-color: #f8f6f7;
        --red: #ed2c24;
        --green: #34DB93;
        --second-grey-stuff: #333333;
        --bg-color: #F9F9F9;
        --grey-text: #9F9F9F

    }

    @media (min-width: 880px) {
        #home-bottom {
            width: 75%;
            float: left;
        }
        #home>.affix {
            width: 100% !important;
            margin: auto;
            background-color: transparent;
            z-index: -1
        }
       .affix-top#twitter-affix {
            width: 24% !important;
            float: right;
        }
       .affix-top#twitter-affix {
            width: 24% !important;
            float: right;
        }
       .vue-affix#twitter-affix {
            width: 24%;
            float: right;
        }
       .affix#twitter-affix {
            width: unset;
            float: right;
        }
        .affix .twitter-sidebar {
            float: right;
            width: 24%
        }
        .twitter-sidebar h1 {
            padding: 20px
        }

        .twitter-sidebar div {
            padding: 10px 0
        }

    }
</style>
