<template>
    <div class="component-wrapper article-wrapper">
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
            <img :srcset="currentArticle.image_url" class="article-image-full">
            <h3 class="image-credit">photo by {{ currentArticle.image_credit }}</h3>
        </span>
        <p class="article-text">
            {{ currentArticle.content }}
        </p>
        <div class="article-sidebar-wrapper desktop-only">
            <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="true" :showAuthor="false" :mode="'list-'" :imageStyle="'no'">
            </TopArticles>
        </div>
        <div class="article-bottombar-wrapper mobile-only">
            <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="true" :showAuthor="false" :mode="'horizontal-list-'" :imageStyle="'no'">
            </TopArticles>
        </div>
    </div>
</template>

<script>
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
            currentArticle() {
                this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, {
                    category: this.category,
                    slug: this.slug
                })
                this.$store.dispatch(apiActs.CHANGE_PAGE_TITLE, this.api.articles.currentArticle)
                return this.api.articles.currentArticle
            }
        }
    }
</script>

<style>
    
</style>
