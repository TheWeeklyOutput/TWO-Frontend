<template>
    <div>
        <navbar></navbar>
        <div class="recent-articles">
            <div class="article-wrapper">
                <RecentArticles></RecentArticles>
            </div>
        </div>
        <FooterBar></FooterBar>
    
    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import FooterBar from '../components/Footer'
    import RecentArticles from '../components/ListArticles'
    export default {
        components: {
            Navbar,
            FooterBar,
            RecentArticles
        }
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
    
    .article-wrapper {
        margin: 0 auto;
        max-width: 1100px;
    }
</style>
