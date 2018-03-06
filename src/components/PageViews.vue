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
        font-size: 18px;
        font-weight: 600;
        font-family: 'Georgia', serif;
        padding-left: 1.5%;
        width: 100%;
        text-align: center
    }
    
    .style-2 .page-views {
        font-size: 18px;
        font-weight: 600;
        font-family: 'Fira Sans', sans-serif;
        padding-left: 1.5%;
        width: auto;
        background-color: red;
        padding: 5px 8px;
    }
    
    .style-2 .twitter-icon-container-article {
        height: 100%;
        padding-top: 0;
        margin-top: -10px;
        white-space: nowrap;
        color: white;
    }
    
    .page-views-container {
        display: -webkit-flex;
        -webkit-align-items: center;
        display: flex;
        align-items: center;
        padding-top: 20px;
    }
</style>
