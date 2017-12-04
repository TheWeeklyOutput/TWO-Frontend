<<template>
    <div id="article-list">
        <div v-for="article in api.articles.topArticles" class="article">
            <img :src="article.thumbnail">
            <div class="article-text">
                <router-link :to="{ name: 'article', params: {  id: article.id }}" class="article-link">
                    <p><span class="list-title">{{ article.title }}</span></p>
                    <p><span class="list-text">{{ article.text }}</span></p>
                </router-link>
                <p><span class="list-author">by <a :href="'/' + article.authorSlur">{{ article.author }}</a></span> <span class="list-timestamp"> - {{ article.timestamp }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        data: function() {
            return {}
        },
        computed: {
            ...mapState({
                api: state => state.api
            }),
        },
    
    }
</script>

<style>
    .list-title {
        font-size: 1.2em;
        margin-bottom: .3rem;
    }
    
    .list-text {
        font-size: 1em;
    }
    
    .list-author {
        font-size: 0.9em
    }
    
    .list-timestamp {
        font-size: 0.9em
    }
    
    .article {
        background-color: #ffffff;
        border-top: 1px solid #e7e7e8;
        margin-bottom: 8px;
    }
    
    .article-text {
        padding: 16px;
    }
    
    .article-link {
        text-decoration: none;
        color: black
    }
</style>
