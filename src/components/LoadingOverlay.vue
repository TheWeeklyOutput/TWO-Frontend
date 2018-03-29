<template>
    <div class="loading-overlay">
        <transition appear name="fade">
            <div class="loading-text">
                <Logo :logoStyle="Number(themeSwitcher.currentStyle)" class="loading-logo"></Logo>
                Loading your {{ type }}
            </div>
        </transition>
    </div>
</template>

<script>
    import Logo from './Logo'
    import themeSwitcherMixin from '../mixins/themeswitcher.js'
    
    export default {
        components: {
            Logo
        },
        mixins: [themeSwitcherMixin],
    
        props: {
            type: String
        }
    }
</script>

<style>
    .loading-logo {
        width: 100%;
        margin-bottom: 20px;
    }
</style>
