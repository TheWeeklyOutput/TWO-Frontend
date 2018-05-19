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
    
        <div style="max-height: 500px; overflow: auto">
            <Timeline class="twitter-timeline" :id="'theweeklyoutput'" :sourceType="'profile'" :options="{ tweetLimit: '10' }"/>
        </div>
    </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import {
        Tweet,
        Moment,
        Timeline
    } from 'vue-tweet-embed'
    
    import {
        faTwitter,
        faGithub,
        faFacebookF
    } from '@fortawesome/fontawesome-free-brands'
    
    
    export default {
        components: {
            FontAwesomeIcon,
            Timeline,
            Tweet
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
    :root {
        --main-text-color: black;
        --grey-stuff: #e3e3e3;
        --second-grey-stuff: #333333;
        --bg-color: #f8f6f7;
        --red: #ed2c24;
        --green: #34DB93;
        --second-grey-stuff: #333333;
        --bg-color: #F9F9F9;
        --grey-text: #9F9F9F

    }

    .social-icons {
        width: 100%;
        display: flex;
    }
    
    .social-icons a {
        flex-grow: 1;
        flex-basis: 0;
        transition: color 0.2s ease-out;
        color: black
    }
    
    .fa-icon {
        width: 100% !important
    }
    
    .social-icons a :hover {
        color: var(--grey-text);
        transition: color 0.2s ease-out
    }
</style>
