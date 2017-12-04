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
    
                <p>
                    {{ currentArticle.text }}
                </p>
            </div>
            <div class="article-sidebar-wrapper">
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
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }
    
    p {
        font-size: 1.2em;
    }
    
    .sidebar {
        float: right;
        overflow: hidden;
        width: 20vw
    }
    
    footer {
        width: 100vw;
        height: 8em;
    }
    
    .list-article-wrapper {
        margin: 0 auto;
        max-width: 1100px;
    }
    
    .headline-single-article {
        font-style: normal;
        font-weight: 600;
        letter-spacing: normal;
        line-height: 1.2;
        text-transform: none;
        margin-bottom: .6rem;
    }
    
    .article-wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    
    .article-text-wrapper {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-flex-shrink: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
        -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        min-width: 0;
        float: left
    }
    
    .site-wrapper {
        margin: 0 auto;
        max-width: 1100px;
    }
    
    .article-sidebar-wrapper {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-flex-basis: 300px;
        -ms-flex-preferred-size: 300px;
        flex-basis: 300px;
        min-width: 0;
    }
</style>
