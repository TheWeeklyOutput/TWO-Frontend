<template>
    <div :class="mode + 'article-list'">
        <div v-for="article in articles.articleArray" :class="mode + 'article'">
            <div :class="mode + 'article-text'">
                <router-link :to="{ name: 'article', params: {  category: categoryToRender, id: article.id }}" :class="'article-link'" transition="fade">
                    <div :class="mode + imageStyle + '-container'">
                        <span :class="mode + imageStyle + '-image-wrapper'">
                                        <img :srcset="article.image" :class="imageStyle" v-if="(imageStyle === 'no-image') == false">
                                    </span>
                        <span :class="mode + 'text'">
                                        <span><h2 :class="mode + 'title'">{{ article.title }}</h2></span>
                        <span v-if="showText"><h3 :class="mode + 'description'">{{ article.text.substring(0, 200) }}...</h3></span>
                        <span :class="mode + 'author'" v-if="showAuthor">By <router-link :to="{ name: 'author', params: {  name: article.authorid }}"  transition="fade">{{ article.author }}</router-link></span>
                        <span class="list-timestamp" v-if="showAuthor"> {{ article.timestamp }}</span>
                        <twitter-shares :shares="0"></twitter-shares>
    
                        </span>
    
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import articleHandlerMixin from '../mixins/articlehandler.js'
    import {
        mapState
    } from 'vuex'
    import * as muts from '../store/mutation-types.js'
    import * as articleHandlerMuts from '../api/articlehandler/mutation-types.js'
    import * as articleHandlerActs from '../api/articlehandler/action-types.js'
    import TwitterShares from './TwitterShares'
    
    
    export default {
        mixins: [articleHandlerMixin],
        components: {
            TwitterShares
        },
        props: {
            categoryToRender: String,
            imageStyle: String,
            showText: Boolean,
            showAuthor: Boolean,
            mode: String
        },
        data: function() {
            return {}
        },
        computed: {
            articles() {
                return {
                    articleArray: this.articleHandler.articles[this.categoryToRender],
                    category: this.categoryToRender,
                }
            }
    
        },
        methods: {}
    
    }
</script>

<style>
    
</style>
