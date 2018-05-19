<template>
    <social-sharing :url="'https://weekly-output.com'+ $route.fullPath" :title="currentArticle.title" :description="currentArticle.description" quote="Whoah! I just read an Article" :hashtags="'theweeklyoutput,' + category" twitter-user="theweeklyoutput"
        inline-template>
        <div class="social-sharing-wrapper">
            <network network="twitter">
                <img class="twitter-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxNi4xcHgiIGhlaWdodD0iMTYuMXB4IiB2aWV3Qm94PSIwIDAgMTYuMSAxNi4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4xIDE2LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnR3aXR0ZXItZmlsbHtmaWxsOiM0MjQyNDI7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJ0d2l0dGVyLWZpbGwiIGQ9Ik04LDBDMy42LDAsMCwzLjYsMCw4YzAsNC40LDMuNiw4LDgsOGM0LjQsMCw4LTMuNiw4LThDMTYuMSwzLjYsMTIuNSwwLDgsMHogTTExLjEsNi40bDAsMC4yDQoJYzAsMi4xLTEuNiw0LjUtNC41LDQuNWMtMC45LDAtMS43LTAuMy0yLjQtMC43YzAuMSwwLDAuMywwLDAuNCwwYzAuNywwLDEuNC0wLjMsMi0wLjdDNS44LDkuOCw1LjIsOS4zLDUsOC43YzAuMSwwLDAuMiwwLDAuMywwDQoJYzAuMSwwLDAuMywwLDAuNC0wLjFDNSw4LjUsNC41LDcuOSw0LjUsNy4xdjBjMC4yLDAuMSwwLjUsMC4yLDAuNywwLjJDNC44LDcsNC41LDYuNSw0LjUsNmMwLTAuMywwLjEtMC42LDAuMi0wLjgNCgljMC44LDEsMiwxLjYsMy4zLDEuN2MwLTAuMSwwLTAuMiwwLTAuNGMwLTAuOSwwLjctMS42LDEuNi0xLjZjMC41LDAsMC45LDAuMiwxLjIsMC41YzAuNC0wLjEsMC43LTAuMiwxLTAuNA0KCWMtMC4xLDAuNC0wLjQsMC43LTAuNywwLjljMC4zLDAsMC42LTAuMSwwLjktMC4zQzExLjcsNS45LDExLjQsNi4yLDExLjEsNi40eiIvPg0KPC9zdmc+DQo=">
            </network>
            <network network="facebook">
                <img class="facebook-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxNi4xcHgiIGhlaWdodD0iMTYuMXB4IiB2aWV3Qm94PSIwIDAgMTYuMSAxNi4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4xIDE2LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLmZhY2Vib29rLWZpbGx7ZmlsbDojNDI0MjQyO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0iZmFjZWJvb2stZmlsbCIgZD0iTTgsMEMzLjYsMCwwLDMuNiwwLDhzMy42LDgsOCw4YzQuNCwwLDgtMy42LDgtOFMxMi41LDAsOCwweiBNOS44LDhIOC42YzAsMS45LDAsNC4xLDAsNC4xSDYuOWMwLDAsMC0yLjMsMC00LjENCglINi4xVjYuNmgwLjhWNS42YzAtMC43LDAuMy0xLjcsMS43LTEuN2wxLjMsMHYxLjRjMCwwLTAuOCwwLTAuOSwwYy0wLjIsMC0wLjQsMC4xLTAuNCwwLjR2MC45SDEwTDkuOCw4eiIvPg0KPC9zdmc+DQo=">
            </network>
            <network network="reddit">
    
            </network>
        </div>
    </social-sharing>
</template>

<script>
    export default {
        props: {
            currentArticle: null,
            category: null
        }
    }
</script>

<style>
    .twitter-icon {
        width: 30px;
        height: 30px;
        margin: 0 10px;
        background-size: cover;
    }    
    .facebook-icon {
        width: 30px;
        height: 30px;
        margin: 0 10px;
        background-size: cover;
    }

    .social-sharing-wrapper {
        display: inline;
        text-align: center;
    }
</style>
