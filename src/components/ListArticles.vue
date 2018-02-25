<template>
    <div :class="mode + 'article-list'" v-if="api.articles && api.loaded">
        <div v-for="article in articles" :class="mode + 'article'">
            <div :class="mode + 'article-text'">
                <router-link :to="{ name: 'article', params: {  category: categoryToRender, slug: article.slug }}" :class="'article-link'" transition="fade" v-on:click="changeArticle(article.slug)">
                    <div :class="mode + imageStyle + '-container'" v-on:click="changeArticle(article.slug)">
                        <span :class="mode + imageStyle + '-image-wrapper'">
                            <img :srcset="article.image_url" :class="imageStyle" v-if="(imageStyle === 'no-image') == false">
                        </span>
                        <span :class="mode + 'text'">
                            <span> <h2 :class="mode + 'title'">{{ article.title }}</h2> </span>
                            <span v-if="showText"><h3 :class="mode + 'description'">{{ article.description.substring(0, 200) }}...</h3></span>
                            <span :class="mode + 'author'" v-if="showAuthor">By <router-link :to="{ name: 'author', params: {  name: article.author.name }}"  transition="fade">{{ article.author.name }}</router-link></span>
                            <span class="list-timestamp" v-if="showAuthor"> {{timestamp | moment('from', 'Jan. 11th, 1985') }}</span>
                            <twitter-shares :shares="Math.ceil(Math.random()*10)" v-if="showShares"></twitter-shares>
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
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
    import TwitterShares from './TwitterShares'
    import {
        SET_UP
    } from '../api/action-types.js';
    
    
    export default {
        mixins: [apiMixin],
        components: {
            TwitterShares
        },
        props: {
            categoryToRender: String,
            imageStyle: String,
            showText: Boolean,
            showAuthor: Boolean,
            showShares: Boolean,
            mode: String
        },
        data: function() {
            return {
                timestamp: null
            }
        },
        computed: {
            articles() {
                if (this.api.articles.hasOwnProperty(this.categoryToRender)) {
                    let articleArray = this.api.articles[this.categoryToRender]
                    return articleArray
                }
                return [{
                    name: 'loading',
                    slug: 'loading',
                    description: 'loading',
                    author: 'loading'
                }]
    
    
            },
            ...mapState({
                articleState: state => state.api.article
            })
        },
        watch: {
            categoryToRender() {
                console.log('PROPS CHANGED TO ' + this.categoryToRender)
            },
            articleState() {
                console.log('next tick')
            }
        },
        methods: {
            changeArticle(slug) {
                this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, {
                    context: this,
                    slug: slug
                })
            }
    
        }
    
    }
</script>

<style>
    
</style>
