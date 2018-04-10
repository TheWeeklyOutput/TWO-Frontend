<template>
    <div class="component-wrapper article-component">
        <Ticker v-if="currentArticle && themeSwitcher.currentStyle == 2"></Ticker>
    
        <div class="article-wrapper">
            <span class="headline-single-article">
                <h1 class="article-heading" v-if="currentArticle">{{ currentArticle.title }}</h1>
                <div v-else class="article-heading placeholder"></div>
            </span>
            <span class="article-heading-filler">
                <page-views :views="currentArticle.views" :showShares="false" class="twitter-icon-container-article" v-if="currentArticle"></page-views>
            </span>
            <span class="article-headline-info">
                <p class="article-author" v-if="currentArticle">
                    By {{ currentArticle.author.name.toUpperCase() }} | <span class="article-timestamp"> <timeago :since="currentArticle.date"></timeago> </span>
                </p>
            <div v-else class="article-author placeholder"></div>
    
            </span>
            <span class="article-image-wrapper">
                <progressive-background :src="currentArticle.image_url" class="article-image-full" v-if="currentArticle" />
                <div v-else class="article-image-full placeholder"></div>
                <h3 class="image-credit" v-if="currentArticle">photo by {{ currentArticle.image_credit }}</h3>
                <div v-else class="image-credit placeholder"></div>
            </span>
            <div class="article-three-columns">
                <div class="article-text" v-if="currentArticle">
                    <div v-html="currentArticle.html_content"></div>
                </div>
                <div v-else class="article-text placeholder"></div>
                <div class="article-sidebar-wrapper desktop-only" v-if="currentArticle">
                    <ArticleSocialSharing :currentArticle="currentArticle" :category="category"></ArticleSocialSharing>
    
                    <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="themeSwitcher.styleSettings[themeSwitcher.currentStyle].article.sidebarDescriptionShown" :showAuthor="false" :mode="'list-'" :imageStyle="themeSwitcher.styleSettings[themeSwitcher.currentStyle].article.sidebarImageStyle">
                    </TopArticles>
                </div>
                <div v-else class="article-sidebar-wrapper desktop-only placeholder"></div>
    
    
                <div class="article-bottombar-wrapper mobile-only" v-if="currentArticle">
                    <ArticleSocialSharing style="padding: 20px; padding-bottom: 32px" :currentArticle="currentArticle" :category="category"></ArticleSocialSharing>
    
                    <h1>You might also enjoy:</h1>
                    <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="false" :showAuthor="false" :mode="'horizontal-list-'" :imageStyle="'next-to-article'">
                    </TopArticles>
                </div>
    
                <div v-else class="article-bottombar-wrapper mobile-only placeholder"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import apiMixin from '../mixins/api.js'
    import themeSwitcherMixin from '../mixins/themeswitcher.js'
    import TopArticles from '../components/ListArticles'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import PageViews from '../components/PageViews'
    import Ticker from '../components/Ticker'
    import ArticleSocialSharing from '../components/SocialSharing'
    
    export default {
        components: {
            TopArticles,
            PageViews,
            Ticker,
            ArticleSocialSharing
        },
        mixins: [apiMixin, themeSwitcherMixin],
    
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
            console.log(this.$route)
            this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, {
                context: this,
                slug: this.slug
            })
        },
        watch: {
            currentArticle() {
                this.$store.dispatch(apiActs.CHANGE_PAGE_TITLE, {
                    title: this.currentArticle.title.substring(0, 30) + '... | The Weekly Output'
                })
            },
            slug() {
                console.log('slug changed to ' + this.slug)
                this.currentArticle = null
                this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, {
                    context: this,
                    slug: this.slug
                })
                this.$store.commit(apiMuts.SET_LOADED, {
                    status: false
                })
    
            }
        }
    }
</script>

<style>
    .horizontal-list-next-to-article-container {
        display: grid;
    }
    
    .horizontal-list-text {
        grid-row: 1;
    }
    
    .horizontal-list-title {
        font-size: 18px !important;
        padding: 20px;
    }
    
    .horizontal-list-next-to-article-image-wrapper {
        grid-row: 1;
        height: 90px;
        width: 90px;
    }

    .horizontal-list-next-to-article-image-wrapper .next-to-article {
        width: 90px;
        height: 90px;
        margin-top: 20px;
        margin-bottom: 20px
    }

    .article-bottombar-wrapper span {
        font-size: 14px !important
    }
</style>
