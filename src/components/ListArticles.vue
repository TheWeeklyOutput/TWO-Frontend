<template>
    <div class="article-list">
        <div v-for="article in articles.articleArray" class="article">
            <img :src="article.thumbnail">
            <div class="article-text">
                <router-link :to="{ name: 'article', params: {  category: categoryToRender, id: article.id }}" class="article-link">
                    <p><span class="list-title">{{ article.title }}</span></p>
                    <p><span class="list-text">{{ article.text }}</span></p>
                </router-link>
                <p><span class="list-author">by <a :href="'/' + article.authorSlur">{{ article.author }}</a></span> <span class="list-timestamp"> - {{ article.timestamp }}</span></p>
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
            categoryToRender: String
        },
        data: function() {
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
    
    }
</script>

<style>
    .list-title {
        font-size: 1.2em;
        margin-bottom: .3rem;
    }
    
    .list-text {
        font-size: 1em;
    }
    
    .list-author {
        font-size: 0.9em
    }
    
    .list-timestamp {
        font-size: 0.9em
    }
    
    .article {
        background-color: #ffffff;
        border-top: 1px solid #e7e7e8;
        margin-bottom: 8px;
    }
    
    .article-text {
        padding: 16px;
    }
    
    .article-link {
        text-decoration: none;
        color: black
    }
</style>
