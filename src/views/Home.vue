<template>
    <div>
        <div class="component-wrapper">
            <Topper class="topper" :categoryToRender="categoriesToRender[0]">
            </Topper>
                
            <div class="newest-list">
                <h1>{{ categoriesToRender[1].name }}</h1>
                <hr>
                <div class="list-article-wrapper">
                    <ListArticles :categoryToRender="categoriesToRender[1].label" :showText="false" :showAuthor="true" :imageStyle="'next-to-article'" :mode="'list-'"></ListArticles>
                </div>
            </div>
    
    
        </div>
    
    </div>
</template>

<script>
    import Topper from '../components/Topper'
    import apiMixin from '../mixins/api.js'
    import * as apiMuts from '../api/mutation-types.js'
    import * as apiActs from '../api/action-types.js'
    import ListArticles from '../components/ListArticles'

    export default {
        mixins: [apiMixin],
        components: {
            Topper,
            ListArticles
            
        },
        props: {},
        data() {
            return {
                categoriesToRender: [{
                    label: 'highlights',
                    name: 'Highlights'
                }, {
                    label: 'trending',
                    name: 'Trending'
                }]
            }
        }
    
    }
</script>

<style>
    
</style>
