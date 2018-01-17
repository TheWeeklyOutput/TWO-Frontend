<template>
    <div>
        <div class="topper-headline desktop-only">
            <component :is="title" class="topper-headline-text"></component>
            <hr>
        </div>
        <div v-for="article in articles.articleArray" :class="'topper-article-wrapper'">
            <router-link :to="{ name: 'article', params: {  category: categoryToRender.slug, slug: article.slug }}" :class="'article-link'" transition="fade">
                <div :class="'topper-single-container'">
                    <span :class="'topper-image-wrapper'">
                        <img :src="article.image_url" :class="'topper-image'">
                    </span>
                    <span :class="'topper-text'">
                        <h2 :class="'topper-article-title'">{{ article.title }}</h2>
                        <span class="topper-author-timestap-wrapper desktop-only">
                            <span :class="'topper-author'" >By 
                                <router-link :to="{ name: 'author', params: {  name: article.author.slug }}" transition="fade">
                                    {{ article.author.name }}
                                </router-link>
                            </span>
                            <span class="list-timestamp"> {{ article.date }}</span>
                        </span>
                        <h3 :class="'topper-article-text'">{{ article.content.substring(0, 200) }}...</h3>
                        <twitter-shares :shares="Math.ceil(Math.random()*100)"></twitter-shares>
                    </span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ListArticles from './ListArticles'
    import TwitterShares from './TwitterShares'
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    
    export default {
        mixins: [apiMixin],
    
        components: {
            ListArticles,
            TwitterShares
        },
        computed: {
            articles() {
    
                let articleArray = this.api.articles[this.categoryToRender.slug]
    
                return {
                    articleArray: articleArray,
                    category: this.categoryToRender.slug
                }
            },
            title() {
                return this.$store.state.TitleList[this.categoryToRender.name] || "No Title"
            }
        },
        props: {
            'categoryToRender': Object
        }
    }
</script>

<style>
    
</style>
