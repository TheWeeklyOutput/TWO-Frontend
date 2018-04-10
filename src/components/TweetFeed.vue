<template>
    <div>
        <div class="social-icons">
            <a href="https://twitter.com/theweeklyoutput" target="_blank">
                <font-awesome-icon size="2x" class="fa-icon" :icon="twitterIcon" />
            </a>
            <a href="https://www.facebook.com/The-Weekly-Output-517738711959934" target="_blank">
                <font-awesome-icon size="2x" class="fa-icon" :icon="facebookIcon" />
            </a>
            <a href="https://github.com/TheWeeklyOutput" target="_blank">
                <font-awesome-icon size="2x" class="fa-icon" :icon="githubIcon" />
            </a>
    
        </div>
    
        <h1 style="font-size: 20px">Recent tweets</h1>
        <div>
            <a class="twitter-timeline" data-dnt="true" target="_blank" href="https://twitter.com/theWeeklyOutput?ref_src=twsrc%5Etfw">Tweets by TheWeeklyOutput</a>
        </div>
    </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import {
        faTwitter,
        faGithub,
        faFacebookF
    } from '@fortawesome/fontawesome-free-brands'
    
    
    export default {
        components: {
            FontAwesomeIcon
        },
        data() {
            return {
    
            }
        },
        computed: {
            twitterIcon() {
                return faTwitter
            },
            githubIcon() {
                return faGithub
            },
            facebookIcon() {
                return faFacebookF
            },
        }
    }
</script>

<style>
    .social-icons {
        width: 100%;
        display: flex;
    }
    
    .social-icons a {
        flex-grow: 1;
        flex-basis: 0;
        transition: color 0.2s ease-out
    }
    
    .fa-icon {
        width: 100% !important
    }
    
    .social-icons a :hover {
        color: var(--grey-text);
        transition: color 0.2s ease-out
    }
</style>
