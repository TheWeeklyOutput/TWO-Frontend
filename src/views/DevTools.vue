<template>
    <div>
        <h1>Dev Tools</h1>
        <br>
        <h2>Analyse Text</h2>

        <textarea
            placeholder="Headline" 
            rows="1" 
            v-model="text.headline"
            autocomplete="off" 
            required="" maxlength="200">
        </textarea>
        <textarea 
            placeholder="Content" 
            rows="15" 
            v-model="text.content"
            autocomplete="off" 
            required="">
        </textarea>
        <textarea 
            placeholder="Content Type" 
            rows="1" 
            v-model="text.content_type"
            autocomplete="off" 
            required="" maxlength="20">
        </textarea>
        <textarea 
            placeholder="Category" 
            rows="1" 
            v-model="text.category"
            autocomplete="off" 
            required="" maxlength="20">
        </textarea>
        <textarea 
            placeholder="Outlet" 
            rows="1" 
            v-model="text.outlet"
            autocomplete="off" 
            required="" maxlength="20">
        </textarea>
        <button v-on:click="sendText()">Submit Text</button>
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
        <br>
        <textarea
            placeholder="Category" 
            rows="1" 
            v-model="genertation_category"
            autocomplete="off" 
            required="" maxlength="200">
        </textarea>
        <button v-on:click="generateText()">Generate</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import * as apiActs from '../api/action-types.js'

export default {
    data() {
      return {
        text: {
          headline: 'Trump\'s Russia defense in disarray',
          content: 'President Donald Trump\'s legal defense against Robert Mueller\'s unrelenting special counsel investigation is beginning to look as chaotic as his early days in the White House. A sequence of reflexive tweets and comments about the Russia probe from the White House and Trump\'s legal team has spectacularly backfired, suggesting that the administration was knocked off balance by news of Michael Flynn\'s plea deal.',
          content_type: 'news',
          category: 'politics',
          outlet: 'www.cnn.com',
        },
        slug: 'trumps-russia-defense-in-disarray',
        genertation_category: 'politics'
      }
    },
    computed: {
        ...mapState({
            currentArticle: state => state.api.currentArticle
        })
    },
    methods: {
        sendText() {
            this.$store.dispatch(apiActs.SEND_TEXT, { 
                context: this, 
                text: this.text
            }) 
        },
        getText() {
           this.$store.dispatch(apiActs.GET_TEXT, { 
                context: this, 
                slug: this.slug
            })  
        },
        generateText() {
           this.$store.dispatch(apiActs.GENERATE_TEXT, { 
                context: this, 
                category: this.category
            })  
        }
    }
}
</script>

<style>
</style>
