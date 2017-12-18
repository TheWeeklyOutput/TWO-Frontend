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
                            <span v-if="showText"><h3 :class="mode + 'text'">{{ article.text.substring(0, 200) }}...</h3></span>
                            <span :class="mode + 'author'" v-if="showAuthor">By <router-link :to="{ name: 'author', params: {  name: article.authorid }}"  transition="fade">{{ article.author }}</router-link></span> 
                            <span class="list-timestamp" v-if="showAuthor"> {{ article.timestamp }}</span>
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import {
        mapState
    } from 'vuex'
    import * as muts from '../store/mutation-types.js'
    
    
    export default {
        mixins: [apiMixin],
    
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
                    articleArray: this.api.articles[this.categoryToRender],
                    category: this.categoryToRender,
                }
            }
    
        },
        methods: {
        }
    
    }
</script>

<style>
    
</style>
