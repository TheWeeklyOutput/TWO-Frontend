<template>
    <div id="ticker">
        <BreakingNewsLogo style="position: absolute; z-index: 90; height: 60px; left: 0; width: auto"></BreakingNewsLogo>
        <p class="marquee">
            <span class="marquee-text"> 
                    <span v-for="item in tickerString()">
                        <router-link :to="{ name: 'article', params: {  category: 'highlights', slug: item.slug }}">
                            {{ item.title.toUpperCase() }}
                        </router-link>
                    </span>
            </span>
        </p>
    </div>
</template>

<script>
    import apiMixin from '../mixins/api.js'
    import BreakingNewsLogo from '../assets/svg/Breaking_News_design2.svg'
    export default {
        mixins: [apiMixin],
        components: {
            BreakingNewsLogo
        },
        methods: {
            tickerString(val) {
                /*let start = null
                            let finish = null
                            if (val === 1) {
                                start = 0
                                finish = this.api.articles.highlights.length / 2
                            }
                    
                            if (val === 2) {
                                start = this.api.articles.highlights.length / 2
                                finish = this.api.articles.highlights.length
                            }
                            let string = this.api.articles.highlights.splice(start, finish)
                            console.log(string)*/
                let string = this.api.articles.highlights
                return string
            }
        }
    }
</script>

<style>
    .bg-1 {
        fill: red
    }
    
    .fg-1 {
        fill: white
    }
    
    #ticker {
        position: relative;
        display: block;
        padding-bottom: 10px;
        height: 60px
    }
    
    .marquee {
        width: 100%;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        position: absolute;
        background-color: #261F1F;
        height: 60px;
        line-height: 65px;
    }
    
    .marquee .marquee-text {
        display: inline-block;
        padding-left: 100%;
        animation: marquee 60s linear infinite;
        font-size: 25px;
        font-weight: 400 !important
    }
    
    .marquee a {
        color: white !important;
    }
    
    .marquee .marquee-text:hover {
        animation-play-state: paused;
    }
    
    .marquee .marquee-text a :hover  {
        text-decoration: underline
    }
    
    .marquee-text span::after {
        content: "  \2215  ";
        padding: 0 10px;
        color: red;
        font-weight: 800
    }
    
    @keyframes marquee {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-100%, 0);
        }
    }
</style>
