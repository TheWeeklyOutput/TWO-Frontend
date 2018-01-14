<template>
    <div>
        <div class="topper-headline desktop-only">
            <!--<h1 class="topper-headline-text">{{ categoryToRender.name }}</h1>-->
            <component :is="$store.state.TitleList[categoryToRender.name]" class="topper-headline-text"></component>
            <hr>
        </div>
        <div v-for="article in articles.articleArray" :class="'topper-article-wrapper'">
            <router-link :to="{ name: 'article', params: {  category: categoryToRender.label, id: article.id }}" :class="'article-link'" transition="fade">
    
                <div :class="'topper-single-container'">
                    <span :class="'topper-image-wrapper'">
                                        <img :src="article.image" :class="'topper-image'">
                                    </span>
                    <span :class="'topper-text'">
                                        <h2 :class="'topper-article-title'">{{ article.title }}</h2>
                                        <span class="topper-author-timestap-wrapper desktop-only">
                                            <span :class="'topper-author'" >By 
                                                <router-link :to="{ name: 'author', params: {  name: article.authorid }}" transition="fade">
                                                    {{ article.author }}
                                                </router-link>
                                            </span>
                    <span class="list-timestamp"> {{ article.timestamp }}</span>
                    </span>
                    <h3 :class="'topper-article-text'">{{ article.text.substring(0, 200) }}...</h3>
                    <twitter-shares :shares="0"></twitter-shares>
    
                    </span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ListArticles from './ListArticles'
    import TwitterShares from './TwitterShares'
    import articleHandlerMixin from '../mixins/articlehandler.js'
    import * as articleHandlerMuts from '../api/articlehandler/mutation-types.js'
    import * as articleHandlerActs from '../api/articlehandler/action-types.js'
    
    export default {
        mixins: [articleHandlerMixin],
    
        components: {
            ListArticles,
            TwitterShares
        },
        computed: {
            articles() {
    
                let articleArray = this.articleHandler.articles[this.categoryToRender.label]
    
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
