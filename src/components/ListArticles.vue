<<template>
    <div id="article-list">
        <div v-for="article in articles" class="article">
            <img :src="article.thumbnail">
            <div class="article-text">
                <a :href="'/' + article.slur" class="article-link">
                    <p><span class="list-title">{{ article.title }}</span></p>
                    <p><span class="list-text">{{ article.text }}</span></p>
                </a>
                <p><span class="list-author">by <a :href="'/' + article.authorSlur">{{ article.author }}</a></span> <span class="list-timestamp"> - {{ article.timestamp }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                articles: [{
                    title: 'This is the title #1',
                    text: 'This is the texttexttexttexttexttexttexttexttexttexttexttexttexttexttext #1',
                    author: 'Jack Williams',
                    timestamp: '1h ago',
                    slur: 'text1',
                    authorSlur: 'jackwilliams'
                }, {
                    title: 'This is the title #2',
                    text: 'This is the texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext #2',
                    author: 'Bob McBotington',
                    timestamp: '2h ago',
                    slur: 'text2',
                    authorSlur: 'bobmcbotington'
    
                }, {
                    title: 'This is the title #3',
                    text: 'This is the texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext #3',
                    author: 'Bing O.',
                    timestamp: '3h ago',
                    slur: 'text3',
                    authorSlur: 'bingo'
    
                }, {
                    title: 'This is the title #4',
                    text: 'This is the texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext #4',
                    author: 'Kevin Gaycy',
                    timestamp: '4h ago',
                    slur: 'text4',
                    authorSlur: 'kevingaycy'
    
                }]
            }
        }
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
