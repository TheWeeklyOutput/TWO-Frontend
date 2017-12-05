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
          content: 'President Donald Trump\'s legal defense against Robert Mueller\'s unrelenting special counsel investigation is beginning to look as chaotic as his early days in the White House. A sequence of reflexive tweets and comments about the Russia probe from the White House and Trump\'s legal team has spectacularly backfired, suggesting that the administration was knocked off balance by news of Michael Flynn\'s plea deal. The fallout from Friday\'s bombshell consumed several days when Trump should have been highlighting his biggest political win yet after the Senate passed a tax reform bill, and may well have deepened his legal and political jeopardy. Comparisons to the chaos, confusion and disinformation that raged in the first weeks and months of Trump\'s presidency -- before Chief of Staff John Kelly began to impose comparative discipline on the White House staff, if not the mercurial President -- are appropriate for another reason. Key events from those days, including the decisions by Trump to hire and fire Flynn as his national security adviser and his fateful decision to oust FBI Director James Comey, are haunting the President to this day and are the heart of his exposure to the Mueller probe. The dysfunction should also concern Trump\'s supporters, since he is up against the most revered prosecutor of his generation, in Mueller and a team of crack lawyers picked from top blue chip law firms. Mueller\'s team is far more expert and experienced than the band of lawyers under special counsel Kenneth Starr who drove the impeachment of President Bill Clinton in the 1990s for instance. The competency of Trump\'s team came into focus after a weekend of ill-advised tweets and an explosive interview with Axios by Trump\'s personal attorney John Dowd on Monday. One now notorious tweet issued from the President\'s account said that he had no choice but to fire Flynn because he had lied to Vice President Mike Pence and the FBI. Trump critics pounced, arguing that if he knew that Flynn had lied, and subsequently leaned on Comey to go easy on Flynn as the former FBI director reported under oath, he may have obstructed justice. CNN on Monday reported that White House counsel Donald McGahn told Trump he believed Flynn had not told the truth in his interview with the FBI or to Pence. McGahn did not tell the President that Flynn had violated the law in his FBI interview or was under criminal investigation, a source said. Dowd eventually copped to the tweet that set off the firestorm, but suspicions lingered that Trump played a bigger role in the episode than has so far been revealed. Then on Monday, Dowd told Axios in an interview that the President, by dint of his Constitutional authority, could not by definition obstruct justice. An arcane legal argument turned into a political disaster, as news shows recalled disgraced President Richard Nixon\'s comment: \"When the President does it, that means that it is not illegal.\" It was also pointed out that both Nixon and President Bill Clinton were accused of obstruction in Articles of Impeachment framed against them. Dowd\'s contemporaries vouched for his legal acumen. But most argued that he had made a mistake, or what CNN\'s senior legal analyst Jeffrey Toobin, coining a non-legal term, called \"a big mess.\" RELATED: Trump lawyer says a president can\'t \'obstruct justice.\' Can that be true? Dowd\'s comments begged a damaging question that drove a day of bad headlines: Was his argument motivated by a conclusion that Trump had indeed obstructed justice? Most legal scholars concede that the law is inconclusive on whether a sitting president can be indicted on a criminal charge. But the idea that a President cannot face obstruction of justice charges in an impeachment proceeding run by Congress defies precedent. Dowd\'s defenders also point out that in Trump, he hardly has the ideal client, given the President\'s propensity to stoke political firestorms in a way that could undermine the work of even the most diligent legal team. Late Monday night, another White House lawyer, Ty Cobb, sought to clean up the apparent disarray inside Trump\'s legal braintrust, downplaying the idea that questioning whether the president could obstruct justice would be at the center of the team\'s strategy. \"It\'s interesting as a technical legal issue, but the president\'s lawyers intend to present a fact-based defense, not a mere legal defense,\" Cobb told The Washington Post. \"That should resolve things, but we all shall see.\" In many ways, the President is responding to a legal challenge with an unrestrained political strategy -- as evidenced by his assaults on the credibility of the FBI and Mueller and his unsubstantiated claim that Hillary Clinton had told far more lies to the FBI than Flynn. Such an approach may represent an eventual hedge against possible impeachment proceedings and an attempt to bolster support among GOP lawmakers. But it makes Dowd\'s job much harder and may explain his missteps. \"I think that\'s what happens when you conflate being a defense lawyer with being a PR flack,\" former Watergate prosecutor Richard Ben-Veniste told CNN\'s Wolf Blitzer on Monday. Another explanation for Trump\'s tactics is that they are designed to give ammunition to his media cheerleaders who want to discredit the Mueller probe. A better legal strategy however, would be to keep quiet. With that in mind, Ben-Veniste told Blitzer that there was a big fish mounted on the wall of his rec room. \"If he had kept his mouth shut, he wouldn\'t be there,\" he quipped.',
          content_type: 'news',
          category: 'politics',
          outlet: 'www.cnn.com',
        },
        slug: 'trumps-russia-defense-in-disarray'
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
        }
    }
}
</script>

<style>
</style>
