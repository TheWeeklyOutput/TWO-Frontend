<template>
    <div>
        <navbar></navbar>
        <div class="recent-articles">
            <div class="list-article-wrapper">
                {{ currentArticle.title }}
            </div>
        </div>
        <FooterBar></FooterBar>
    
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import Navbar from '../components/Navbar'
    import FooterBar from '../components/Footer'
    import RecentArticles from '../components/ListArticles'
    import apiActs from '../api/action-types.js'
    export default {
        components: {
            Navbar,
            FooterBar,
            RecentArticles
        },
        props: {
            'id': String,
        },
        created () {
            this.$store.dispatch('GET_CURRENT_ARTICLE', { id: this.id });
        },

        computed: {
            currentArticle () {
                return this.api.currentArticle

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
    
    footer {
        width: 100vw;
        height: 8em;
    }
    
    .recent-articles {
        margin: 0 auto;
        max-width: 1300px;
    }
    
    .list-article-wrapper {
        margin: 0 auto;
        max-width: 1100px;
    }
</style>
