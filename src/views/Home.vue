<template>
    <div>
        <div class="component-wrapper">
            <Topper class="topper" :categoryToRender="categoriesToRender[0]">
            </Topper>
    
            <div class="home-bottom">
                <div class="newest-list">
                    <component :is="$store.state.TitleList[categoriesToRender[1].name]" class="topper-headline-text"></component>
                    <hr>
                    <div class="list-article-wrapper">
                        <ListArticles :categoryToRender="categoriesToRender[1].label" :showText="false" :showAuthor="true" :imageStyle="'next-to-article'" :mode="'list-'"></ListArticles>
                    </div>
                </div>
                <TweetFeed class="twitter-sidebar desktop-only">
                </TweetFeed>
    
            </div>
    
    
    
        </div>
    
    </div>
</template>

<script>
    import Topper from '../components/Topper'
    import articleHandlerMixin from '../mixins/articlehandler.js'
    import ListArticles from '../components/ListArticles'
    import TweetFeed from '../components/TweetFeed'
    
    export default {
        mixins: [articleHandlerMixin],
        components: {
            Topper,
            ListArticles,
            TweetFeed
    
        },
        props: {},
        data() {
            return {
                categoriesToRender: [{
                    label: 'highlights',
                    name: 'Highlights'
                }, {
                    label: 'politics',
                    name: 'Politics'
                }]
            }
        }
    
    }
</script>

<style>
    
</style>
