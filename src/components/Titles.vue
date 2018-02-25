<template>
    <div>
        <div v-if="themeSwitcher.currentStyle === 1">
            <component v-if="title() !== 'No Title'" :is="title()" class="topper-headline-text"></component>
        </div>
    
        <div v-if="themeSwitcher.currentStyle === 2" class="topper-headline-text">
            {{ category.toUpperCase() }}
            <hr class="topper-headline-underline">
        </div>
    
    </div>
</template>

<script>
    import themeSwitcherMixin from '../mixins/themeswitcher.js'
    export default {
        mixins: [
            themeSwitcherMixin
        ],
        props: {
            category: String
        },
        methods: {
            title() {
                return this.$store.state.TitleList[this.category] || "No Title"
            }
    
        }
    }
</script>

<style>
    
</style>
