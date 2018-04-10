<template>
    <social-sharing :url="'https://weekly-output.com'+ $route.fullPath" :title="currentArticle.title" :description="currentArticle.description" quote="Whoah! I just read an Article" :hashtags="'theweeklyoutput,' + category" twitter-user="theweeklyoutput"
        inline-template>
        <div class="social-sharing-wrapper">
            <network network="email">
                <i class="fas fa-envelope fa-icon-social"></i> Email
            </network>
            <network network="twitter">
                <i class="fab fa-twitter fa-icon-social"></i> Twitter
            </network>
    
            <network network="facebook">
                <i class="fab fa-facebook fa-icon-social"></i> Facebook
            </network>
            <!--<network network="googleplus">
                    <i class="fab fa-google-plus fa-icon-social"></i> Google +
                </network>-->
            <network network="reddit">
                <i class="fab fa-reddit fa-icon-social"></i> Reddit
            </network>
        </div>
    </social-sharing>
</template>

<script>
    export default {
        props: {
            currentArticle: null,
            category: null
        }
    }
</script>

<style>
    .fa,
    .fas {
        font-weight: 900 !important;
    }
    
    .fab,
    .far,
    .fas {
        font-family: "Font Awesome\ 5 Brands" !important;
    }
    
    .fas {
        font-family: "Font Awesome 5 Free" !important;
    }
    
    .fa,
    .fab,
    .fal,
    .far,
    .fas {
        -moz-osx-font-smoothing: grayscale !important;
        -webkit-font-smoothing: antialiased !important;
        display: inline-block !important;
        font-style: normal !important;
        font-variant: normal !important;
        text-rendering: auto !important;
        line-height: 1 !important;
    }
    
    user agent stylesheet i,
    cite,
    em,
    var,
    address,
    dfn {
        font-style: italic;
    }
    
    .social-sharing-wrapper {
        display: flex;
        text-align: center;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    
    .social-sharing-wrapper span {
        display: block;
    }
    
    .fa-icon-social {
        width: 100%
    }
    
    .fa-icon-social {
        text-align: center
    }
</style>
