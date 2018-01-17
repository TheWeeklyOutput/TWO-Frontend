<template>
    <div>
        <h1>Dev Tools</h1>
        <br>
        <textarea
            placeholder="Slug" 
            rows="1" 
            v-model="slug"
            autocomplete="off" 
            required="" maxlength="200">
        </textarea>
        <button v-on:click="getText()">Get Text</button>
        <span>{{ currentArticle }}</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import * as apiActs from '../api/action-types.js'

export default {
    data() {
      return {
        slug: ''
      }
    },
    computed: {
        ...mapState({
            currentArticle: state => state.api.currentArticle
        })
    },
    methods: {
        getText() {
            this.$store.dispatch(apiActs.GET_ARTICLE_BY_SLUG, { 
                context: this, 
                slug: this.slug
            })  
        }
    }
}
</script>

<style>
</style>
