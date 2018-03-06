<template>
    <div v-if="api.articles && api.loaded && articleList.length >= 1">
        <div class="topper-headline">
            <Titles :category="categoryToRender.name"></Titles>
            <hr>
        </div>
        <div v-for="article in articleList" :class="'topper-article-wrapper'">
            <router-link :to="{ name: 'article', params: {  category: categoryToRender.slug, slug: article.slug }}" :class="'article-link'" transition="fade">
                <div :class="'topper-single-container'">
                    <span :class="'topper-image-wrapper'">
                            <progressive-img :src="article.image_url" :class="'topper-image'" />
                        </span>
                    <span :class="'topper-text'">
                                        <h2 :class="'topper-article-title'">{{ article.title }}</h2>
                                        <span class="topper-author-timestap-wrapper desktop-only" v-if="themeSwitcher.currentStyle != 2">
                                            <span :class="'topper-author'" >By 
                                                <router-link :to="{ name: 'author', params: {  name: article.author.slug }}" transition="fade">
                                                    {{ article.author.name }}
                                                </router-link>
                                            </span>
                    <span class="list-timestamp"> <timeago :since="article.date" v-if="themeSwitcher.currentStyle != 2"></timeago></span>
                    </span>
                    <h3 :class="'topper-article-text'" v-if="themeSwitcher.currentStyle != 2">{{ article.description.substring(0, 200) }}...</h3>
                    <page-views :views="Math.ceil(Math.random()*100)" v-if="themeSwitcher.currentStyle != 2"></page-views>
                    </span>
                </div>
            </router-link>
        </div>
        <AdComponent class="topper-ad-wrapper"></AdComponent>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    
    import ListArticles from './ListArticles'
    import PageViews from './PageViews'
    import Titles from './Titles'
    import AdComponent from './AdComponent'
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import themeSwitcherMixin from '../mixins/themeswitcher.js'
    
    export default {
        mixins: [apiMixin, themeSwitcherMixin],
    
        components: {
            ListArticles,
            PageViews,
            Titles,
            AdComponent
        },
        data: function() {
            return {
                timestamp: String,
                articleList: []
            }
        },
        computed: {
            ...mapState({
                categoryCount: state => state.api.categoryCount
            })
    
        },
        mounted() {
            if (this.api.articles.hasOwnProperty(this.categoryToRender.slug)) {
                this.articleList = this.api.articles[this.categoryToRender.slug]
            }
        },
        watch: {
            categoryToRender() {
                if (this.api.articles.hasOwnProperty(this.categoryToRender.slug)) {
                    this.articleList = this.api.articles[this.categoryToRender.slug]
                }
    
            },
            categoryCount: {
                handler: function(val) {
                    if (this.api.articles.hasOwnProperty(this.categoryToRender.slug)) {
                        this.articleList = this.api.articles[this.categoryToRender.slug]
                    }
    
                },
                deep: true
            }
        },
        methods: {
            changeArticle(slug) {
                this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, {
                    context: this,
                    slug: slug
                })
            },
            getOrientation(image) {
                let orientation
                let img = new Image()
                img.onload = function() {
                    if (img.naturalWidth > img.naturalHeight) {
                        orientation = 'landscape'
                    } else if (img.naturalWidth < img.naturalHeight) {
                        orientation = 'portrait'
                    } else {
                        orientation = 'even'
                    }
                    return orientation
                }
                img.src = image
            },
            changeArticle(slug) {
                this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, {
                    context: this,
                    slug: slug
                })
            }
    
        },
    
        props: {
            'categoryToRender': Object
        }
    }
</script>

<style>
    
</style>
