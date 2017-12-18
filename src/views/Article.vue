<template>
    <div class="component-wrapper article-wrapper">
        <span class="headline-single-article">
            <h1 class="article-heading">{{ currentArticle.title }}</h1>
        </span>
        <span class="article-heading-filler">
        </span>

        <span class="article-headline-info">
            <p class="article-author">
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
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import TopArticles from '../components/ListArticles'
    
    
    
    export default {
        components: {
            RecentArticles,
            TopArticles
        },
        mixins: [apiMixin],
    
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
    
            }
        }
    
    
    }
</script>

<style>
    
</style>
