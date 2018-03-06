<template>
    <div v-if="currentArticle" class="component-wrapper article-wrapper">
        <span class="headline-single-article">
                <h1 class="article-heading">{{ currentArticle.title }}</h1>
            </span>
        <span class="article-heading-filler">
                <page-views :views="currentArticle.views" :showShares="false" class="twitter-icon-container-article"></page-views>
            </span>
        <span class="article-headline-info">
                <p class="article-author">
                    By {{ currentArticle.author.name.toUpperCase() }} | <span class="article-timestamp"> <timeago :since="currentArticle.date"></timeago> </span>
    
        </p>
        </span>
        <span class="article-image-wrapper">
                <progressive-img :src="currentArticle.image_url" class="article-image-full" />
                <h3 class="image-credit">photo by {{ currentArticle.image_credit }}</h3>
            </span>
        <div class="article-three-columns">
            <div class="article-text">
                <p v-for="paragraph in currentArticle.paragraphs"> {{ paragraph.content }} </p>
            </div>
            <div class="article-sidebar-wrapper desktop-only">
                <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="themeSwitcher.styleSettings[themeSwitcher.currentStyle].article.sidebarDescriptionShown" :showAuthor="false" :mode="'list-'" :imageStyle="themeSwitcher.styleSettings[themeSwitcher.currentStyle].article.sidebarImageStyle">
                </TopArticles>
            </div>
            <div class="article-bottombar-wrapper mobile-only">
                <p>You might also enjoy:</p>
                <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="true" :showAuthor="false" :mode="'horizontal-list-'" :imageStyle="'no'">
                </TopArticles>
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
    
    export default {
        components: {
            TopArticles,
            PageViews
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
