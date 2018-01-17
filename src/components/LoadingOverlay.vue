<template>
    <div class="loading-overlay">
        <div class="loading-text">
            Loading your {{ type }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: String
        }
    }
</script>

<style>
    
</style>
