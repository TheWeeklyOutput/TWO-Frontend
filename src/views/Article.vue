<template>
    <div class="component-wrapper article-wrapper">
        <span class="headline-single-article">
            <h1 class="article-heading">{{ currentArticle.title }}</h1>
        </span>
        <span class="article-heading-filler">
        </span>

        <span class="article-headline-info">
            <p class="article-author">1
                By {{ currentArticle.author }}
            </p>
        </span>
        <span class="article-image-wrapper">
            <img :srcset="currentArticle.image" class="article-image-full">
            <h3 class="image-credit">photo by {{ currentArticle.imageCredit }}</h3>
        </span>
        <p class="article-text">
            {{ currentArticle.text }}
        </p>
        <!--</div>
                    </div>-->
        <div class="article-sidebar-wrapper desktop-only">
            <TopArticles class="sidebar" :categoryToRender="'highlights'" :showText="true" :showAuthor="false" :mode="'list-'" :imageStyle="'no'">
            </TopArticles>
        </div>
    </div>
</template>

<script>
    import RecentArticles from '../components/ListArticles'
    import articleHandlerMixin from '../mixins/articlehandler.js'
    import TopArticles from '../components/ListArticles'
    import * as articleHandlerMuts from '../api/articlehandler/mutation-types.js'
    import * as articleHandlerActs from '../api/articlehandler/action-types.js'    
    
    export default {
        components: {
            RecentArticles,
            TopArticles
        },
        mixins: [articleHandlerMixin],
    
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
                this.$store.dispatch(articleHandlerActs.GET_ARTICLE_BY_ID, {
                    category: this.category,
                    id: this.id
                })
                return this.articleHandler.articles.currentArticle
    
            }
        }
    
    
    }
</script>

<style>
    
</style>
