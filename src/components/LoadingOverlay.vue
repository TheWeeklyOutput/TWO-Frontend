<template>
    <div class="loading-overlay">
        <transition appear name="fade">
            <div class="loading-text">
                <LogoStyle1 class="loading-logo"></LogoStyle1>
                Loading your {{ type }}
            </div>
        </transition>
    </div>
</template>

<script>
    import LogoStyle1 from '../assets/svg/logo_style_1.svg'
    export default {
        components: {
            LogoStyle1
        },
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
