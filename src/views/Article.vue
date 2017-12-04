<template>
    <div class="site-wrapper">
        <div class="article-wrapper">
            <div class="article-text-wrapper">
                <p class="headline-single-article">
                    <h1>{{ currentArticle.title }}</h1>
                </p>
                <p>
                    by {{ currentArticle.author }}
                </p>
    
                <img :srcset="currentArticle.image" class="article-image-full">
    
                <p>
                    {{ currentArticle.text }}
                </p>
            </div>
            <div class="article-sidebar-wrapper">
                <h2>Top Stories</h2>
    
                <TopArticles class="sidebar" :categoryToRender="'topArticles'">
                </TopArticles>
            </div>
    
        </div>
    
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import RecentArticles from '../components/ListArticles'
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import TopArticles from '../components/ListArticles'
    
    
    
    export default {
        components: {
            RecentArticles,
            TopArticles
        },
        props: {
            category: {
                type: String,
                default: 'Default Category'
            },
            id: {
                type: String,
                default: 'Default Id'
            }
        },
        mounted() {},
    
        computed: {
            currentArticle() {
                this.$store.dispatch(apiActs.GET_ARTICLE_BY_ID, {
                    category: this.category,
                    id: this.id
                })
                return this.api.articles.currentArticle
    
            },
    
            ...mapState({
                api: state => state.api
            }),
        },
    
    
    }
</script>

<style>
    
</style>
