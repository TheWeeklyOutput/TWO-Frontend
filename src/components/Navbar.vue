<template>
    <div id="navbar">
        <router-link :to="'/'">
            <div id="logo">
                <logo-style1 class="logo-style-1" alt="Weekly Output"></logo-style1> 
            </div>
            <div id="theme-switcher-dropdown">
            </div>
        </router-link>
    </div>
</template>

<script>
    import LogoStyle1 from '../assets/svg/logo_style_1.svg'
    export default {
        components: {
            LogoStyle1
        }
    }
</script>

<style>
    #logo {
        text-align: center;
        display: block;
        padding: 64px 16px;
        font-size: 3em
    }
</style>
