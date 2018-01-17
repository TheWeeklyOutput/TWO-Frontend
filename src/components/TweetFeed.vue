<<template>
    <div>
        <h1 style="font-size: 20px">Recent tweets</h1>
        <div v-for="tweet in tweets">
            <Tweet :id="tweet"></Tweet>
        </div>
    </div>
</template>

<script>
    import {
        Tweet,
        Moment
    } from 'vue-tweet-embed'
    
    export default {
        components: {
            Tweet
        },
        data() {
            return {
                tweets: [
                    '865986101437247490',
                    '865986101437247490',
                    '865986101437247490',
                    '865986101437247490',
                    '865986101437247490',
                    '865986101437247490',
                    '865986101437247490',
                ]
            }
        }
    }
</script>

<style>
    
</style>
