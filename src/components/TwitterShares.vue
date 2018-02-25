<template>
    <div class="twitter-icon-container">
        <twitter-icon class="twitter-icon"></twitter-icon>
        <span class="twitter-shares">{{ shares }} Shares</span>
    </div>
</template>

<script>
    import TwitterIcon from '../assets/svg/twitter_icon.svg'
    export default {
        props: {
            shares: 0
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
    
    .twitter-icon-svg {
        fill: #FFFFFF
    }
    
    .twitter-icon {
        width: 30px;
        height: auto
    }
    
    .style-1 .twitter-shares {
        font-size: 18px;
        font-weight: 600;
        font-family: 'Georgia', serif;
        padding-left: 1.5%;
        width: 100%
    }
    
    .style-2 .twitter-shares {
        font-size: 18px;
        font-weight: 600;
        font-family: 'Fira Sans', sans-serif;
        padding-left: 1.5%;
        width: 100%
    }
    
    .twitter-icon-container {
        display: -webkit-flex;
        -webkit-align-items: center;
        display: flex;
        align-items: center;
        padding-top: 20px;
    }
</style>
