<template>
    <div>
        <div class="topper-headline">
            <h1 class="topper-headline-text">{{ categoryToRender.name }}</h1>
            <hr>
        </div>
        <div v-for="article in articles.articleArray" :class="'topper-article-wrapper'">
            <router-link :to="{ name: 'article', params: {  category: categoryToRender.label, id: article.id }}" :class="'article-link'">
                <div :class="'topper-single-container'">
                    <span :class="'topper-image-wrapper'">
                        <img :src="article.image" :class="'topper-image'">
                    </span>
                    <span :class="'topper-text'">
                        <h2 :class="'topper-article-title'">{{ article.title }}</h2>
                        <span class="topper-author-timestap-wrapper">
                            <span :class="'topper-author'" >By <router-link :to="{ name: 'author', params: {  name: article.authorid }}" >{{ article.author }}</router-link></span>
                            <span class="list-timestamp"> {{ article.timestamp }}</span>
                        </span>
                    <h3 :class="'topper-article-text'">{{ article.text.substring(0, 200) }}...</h3>
                    </span>
                </div>
            </router-link>
        </div>
        <TweetFeed class="twitter-sidebar desktop-only">
        </TweetFeed>
    </div>
</template>

<script>
    import ListArticles from './ListArticles'
    import apiMixin from '../mixins/api.js'
    import TweetFeed from './TweetFeed'
    
    export default {
        mixins: [apiMixin],
    
        components: {
            ListArticles,
            TweetFeed
        },
        computed: {
            articles() {
    
                let articleArray = this.api.articles[this.categoryToRender.label]
    
                return {
                    articleArray: articleArray,
                    category: this.categoryToRender.label
                }
            }
    
        },
        props: {
            'categoryToRender': Object,
    
    
        }
    }
</script>

<style>
    
</style>
