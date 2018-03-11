<template>
    <div class="page-views-container">
        <!--<twitter-icon class="twitter-icon"></twitter-icon>-->
        <span class="page-views">{{ views }} PAGE VIEWS</span>
    </div>
</template>

<script>
    import TwitterIcon from '../assets/svg/twitter_icon.svg'
    export default {
        props: {
            views: 0
        },
        components: {
            TwitterIcon
        }
    }
</script>

<style>
    .twitter-circle {
        fill: #00ACED
    }
    
    
    .style-1 .page-views {
        font-size: 0.7em;
        font-weight: 600;
        font-family: 'Helvetica', sans-serif;
        text-align: center;
        color: white;
        background: black;
        padding: 8px 5px;
    }
    
    .style-1 .article-heading-filler .page-views {
        font-size: 18px;
        font-weight: 600;
        font-family: 'Helvetica', sans-serif;
        padding-left: 1.5%;
        width: 100%;
        color: black;
        text-align: center;
        background: none
    }


    .style-2 .page-views {
        font-size: 18px;
        font-weight: 600;
        font-family: 'Fira Sans', sans-serif;
        padding-left: 1.5%;
        width: auto;
        background-color: red;
        padding: 5px 8px;
        color: white;
    }
    
    .style-2 .twitter-icon-container-article {
        height: 100%;
        padding-top: 0;
        margin-top: -10px;
        white-space: nowrap;
    }
    
    .page-views-container {
        display: -webkit-flex;
        -webkit-align-items: center;
        display: flex;
        align-items: center;
        padding-top: 20px;
    }
</style>
