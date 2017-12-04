<template>
    <div id="navbar">
        <router-link :to="'/'">
            <div id="logo">
                The Weekly Output
            </div>
            <div id="theme-switcher-dropdown">
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
    
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
