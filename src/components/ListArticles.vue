<template>
    <div :class="mode + 'article-list'" v-if="api.articles && api.loaded && articleList.length >= 1">
        <div v-for="article in articleList" :key="article.slug" :class="mode + 'article'">
            <div :class="mode + 'article-text'">
                <router-link :to="{ name: 'article', params: {  category: categoryToRender, slug: article.slug }}" :class="'article-link'" transition="fade" v-on:click="changeArticle(article.slug)">
                    <div :class="mode + imageStyle + '-container'" v-on:click="changeArticle(article.slug)">
                        <span :class="mode + imageStyle + '-image-wrapper'">
                                    <progressive-img :src="article.image_url" :class="imageStyle + ' ' + getOrientation(article.image_url)" v-if="(imageStyle === 'no-image') == false" />
                                </span>
                        <span :class="mode + 'text'">
                                <span> <h2 :class="mode + 'title'">{{ article.title }}</h2> </span>
                        <span v-if="showText"><h3 :class="mode + 'description'">{{ article.description.substring(0, 200) }}...</h3></span>
                        <span :class="mode + 'author'" v-if="showAuthor">By {{ article.author.name }}</span>
                        <span class="list-timestamp" v-if="showAuthor && api.loaded"> <timeago :since="article.date"></timeago> </span>
                        <page-views :views="article.views" v-if="showShares"></page-views>
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
        <infinite-loading v-if="$route.path.endsWith('/articles/' + categoryToRender) && !stopLoading" @infinite="changePage($event)"></infinite-loading>
        <div style="width: 100%; text-align: center" v-else-if="$route.path.endsWith('/articles/' + categoryToRender) && stopLoading">No more articles</div>
    </div>
</template>

<script>
    import apiMixin from '../mixins/api.js'
    import {
        mapState
    } from 'vuex'
    import * as muts from '../store/mutation-types.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import PageViews from './PageViews'
    import InfiniteLoading from 'vue-infinite-loading'
    import infiniteScroll from 'vue-infinite-scroll'
    import uniq from 'lodash/uniq'
    import {
        SET_UP
    } from '../api/action-types.js';
    
    
    export default {
    
        mixins: [apiMixin],
        components: {
            PageViews,
            InfiniteLoading
        },
        props: {
            categoryToRender: String,
            imageStyle: String,
            showText: Boolean,
            showAuthor: Boolean,
            showShares: Boolean,
            mode: String,
            isInfinite: false
        },
        data: function() {
            return {
                timestamp: String,
                articleList: [],
                articlePage: 1,
                stopLoading: false
            }
        },
        computed: {
            ...mapState({
                categoryCount: state => state.api.categoryCount
            })
    
        },
        mounted() {
            if (this.api.articles.hasOwnProperty(this.categoryToRender)) {
                this.articleList = this.api.articles[this.categoryToRender]
            }
    
        },
        watch: {
            categoryToRender() {
                if (this.api.articles.hasOwnProperty(this.categoryToRender)) {
                    this.articleList = this.api.articles[this.categoryToRender]
                    this.api.currentCategoryPage = 1
                    this.stopLoading = false
                }
    
            },
            categoryCount: {
                handler: function(val) {
                    if (this.api.articles.hasOwnProperty(this.categoryToRender)) {
                        this.articleList = this.api.articles[this.categoryToRender]
                        this.articlePage = 1
                        const ctx = this
                        setTimeout(
                            function() {
                                ctx.$store.commit(apiMuts.SET_LOADED, {
                                    status: true
                                })
                            }, 2000)
                    }
    
                },
                deep: true
            }
        },
        methods: {
            changeArticle(slug) {
                this.api.currentArticle = null
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
            changePage($state) {
                this.api.currentCategoryPage += 1
                let context = this
                this.$store.dispatch(apiActs.GET_CATEGORY_PAGE, {
                    category: this.categoryToRender,
                    page: this.api.currentCategoryPage,
                    context: this
                }).then(() => {
                    setTimeout(() => {
                        if (this.api.articles[this.categoryToRender].length > 1) {
                            let tempList = [...this.articleList, ...this.api.articles[this.categoryToRender]]
                            this.articleList = null
                            this.articleList = uniq(tempList)
                            $state.loaded()
                        } else {
                            this.stopLoading = true
                        }
                    }, 100)
    
    
                })
    
    
            }
        }
    
    }
</script>

<style>
    
</style>
