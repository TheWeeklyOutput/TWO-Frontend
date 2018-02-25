<template>
    <div v-if="currentArticle" class="component-wrapper article-wrapper">
        <span class="headline-single-article">
            <h1 class="article-heading">{{ currentArticle.title }}</h1>
        </span>
        <span class="article-heading-filler">
            <twitter-shares :shares="Math.ceil(Math.random()*100)" :showShares="false" class="twitter-icon-container-article"></twitter-shares>
        </span>
        <span class="article-headline-info">
            <p class="article-author">
                By {{ currentArticle.author.name }}
            </p>
        </span>
        <span class="article-image-wrapper">
            <progressive-img :src="currentArticle.image_url" class="article-image-full" />
            <h3 class="image-credit">photo by {{ currentArticle.image_credit }}</h3>
        </span>
        <p class="article-text" v-html="currentArticle.content">
        </p>
        <div class="article-sidebar-wrapper desktop-only">
            <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="true" :showAuthor="false" :mode="'list-'" :imageStyle="'no'">
            </TopArticles>
        </div>
        <div class="article-bottombar-wrapper mobile-only">
            <p>You might also enjoy:</p>
            <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="true" :showAuthor="false" :mode="'horizontal-list-'" :imageStyle="'no'">
            </TopArticles>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import apiMixin from '../mixins/api.js'
    import TopArticles from '../components/ListArticles'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import TwitterShares from '../components/TwitterShares'
    
    export default {
        components: {
            TopArticles,
            TwitterShares
        },
        mixins: [apiMixin],
    
        props: {
            category: {
                type: String,
                default: 'Default Category'
            },
            slug: {
                type: String,
                default: '404'
            }
        },
        computed: {
            ...mapState({
                currentArticle: state => state.api.currentArticle,
            })
        },
        mounted() {
            this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, {
                context: this,
                slug: this.slug
            })
        },
        watch: {
            currentArticle() {
                this.$store.dispatch(apiActs.CHANGE_PAGE_TITLE, {
                    title: this.currentArticle.title
                })
            },
            slug() {
                console.log('slug changed to ' + this.slug)
                this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, {
                    context: this,
                    slug: this.slug
                })
            }
        }
    }
</script>

<style>
    
</style>
