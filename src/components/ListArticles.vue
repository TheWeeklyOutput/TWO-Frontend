<template>
    <div class="article-list">
        <div v-for="article in articles.articleArray" class="article">
            <div class="article-text">
                <router-link :to="{ name: 'article', params: {  category: categoryToRender, id: article.id }}" class="article-link">
                    <span>
                                    <img :srcset="article.image" :class="imageStyle" v-if="(imageStyle === 'no-image') == false">
                                </span>
                    <span class="list-text">
                                    <p><span class="list-title">{{ article.title }}</span></p>
                    <p v-if="showText"><span class="list-text">{{ article.text }}</span></p>
                    </span>
                </router-link>
                <p v-if="showAuthor"><span class="list-author">by <a :href="'/' + article.authorSlur">{{ article.author }}</a></span> <span class="list-timestamp"> - {{ article.timestamp }}</span></p>
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
        props: {
            categoryToRender: String,
            imageStyle: String,
            showText: Boolean,
            showAuthor: Boolean
        },
        data: function() {
            console.log(this.imageStyle)
    
            return {}
        },
        computed: {
            articles() {
                return {
                    articleArray: this.api.articles[this.categoryToRender],
                    category: this.categoryToRenders
                }
            },
            ...mapState({
                api: state => state.api
            })
    
        },
        methods: {
            range: function(min, max, array) {
                let j = 0;
                for (var i = min; i <= max; i++) {
                    array[j] = i;
                    j++;
                }
                return array;
            }
        }
    
    }
</script>

<style>
    
</style>
