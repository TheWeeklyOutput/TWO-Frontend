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
        <button v-on:click="sendText()" href="javascript:void(0);">Submit Text</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
        text: {
          headline: '',
          content: '',
          content_type: '',
          category: '',
          outlet: '',
        }
      }
    },
    methods: {
    }
}
</script>

<style>
</style>
