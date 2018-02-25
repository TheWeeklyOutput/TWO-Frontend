<template>
    
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:500');

    * {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 500;
        margin: 0;
        padding: 0;
        border: 0;
        line-height: 1.2;
        letter-spacing: normal;
        word-wrap: break-word;
    }
    
     :root {
        --main-text-color: black;
        --grey-stuff: #e3e3e3;
        --second-grey-stuff: #333333;
        --bg-color: #f8f6f7;
    }
    
    body {
        font-size: 1em;
        background-color: var(--bg-color);
        min-height: 100%
    }
    
    .overflow-hidden {
        overflow: hidden;
        height: 100vh;
    }
    
    .style-1 .loading-overlay {
        background-color: white;
        display: table;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        transition: all ease 2.5s;
    }
    
    .loading-overlay>div {
        display: table-cell;
        width: 100%;
        height: 100%;
        background: white;
        text-align: center;
        vertical-align: middle;
    }
    
    .style-1 h1 {
        font-size: calc(1em * 1.250 * 1.250 * 1.250);
        font-weight: 600;
        margin-bottom: .6rem;
        padding-left: 12px;
    }
    
    .style-1 h2 {
        font-size: calc(1em * 1.250 * 1.250);
        font-weight: 600;
        font-family: 'Georgia', serif;
        padding-bottom: 10px
    }
    
    .style-1 h3 {
        font-size: .8125em;
        font-family: 'Georgia', serif;
    }
    
    .style-1 hr {
        background-color: #000;
        height: 1px;
        margin-bottom: 18px
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }
    
    .fade-enter-active {
        transition-delay: .25s;
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
    
    .style-1 .nav-categories {
        text-align: center;
        width: 100%;
        padding-top: 1%;
        padding-bottom: 1%;
    }
    
    .style-1 #nav-absolute {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: white;
    }
    
    .style-1 #nav-spacer {
        width: 100%;
        height: 200px!important;
        display: block;
    }
    
    .style-1 #navbar {}
    
    .style-1 .nav-categories li {
        display: inline-block;
        vertical-align: top;
        padding: 0.1% 1% 0.1% 1%;
    }
    
    .style-1 .nav-categories li:nth-child(n+2) {
        border-left: 2px solid var(--grey-stuff);
    }
    
    .style-1 .router-link-active {
        border-bottom: 2px solid var(--second-grey-stuff);
    }
    
    .style-1 #router-link {
        padding-top: 2%
    }
    
    .style-1 .nav-categories li a {
        font-family: 'Roboto' !important;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: -0.2px;
        color: #333333
    }
    
    .style-1 .vue-affix {
        background-color: rgba(255, 255, 255, 1);
        z-index: 1030;
        width: 100%;
        right: 0;
        left: 0;
    }
    
    .style-1 #nav-logo-link {
        border-bottom: 0
    }
    
    .style-1 #settings-arrow {
        position: absolute;
        right: 0
    }
    
    .style-1 .theme-switcher-logo-wrapper {}
    
    .style-1 #theme-switcher {
        position: absolute;
        background-color: rgba(255, 255, 255, 1);
        width: 0;
        height: 100vh;
        overflow-y: visible;
        border-right: 1px solid var(--grey-stuff);
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
        opacity: 0;
        margin-top: 63px;
        padding-top: 1%;
    }
    
    .style-1 .active {
        opacity: 1 !important;
        width: 30% !important;
    }
    
    .style-1 .theme-switcher-logo-1 {
        height: 30px;
        width: auto;
        position: relative;
    }
    
    .style-1 .theme-switcher-logo-wrapper active {
        background-color: black
    }
    
    .style-1 .theme-switcher-logo {
        width: 65%;
        display: block;
        position: relative;
        height: auto;
        padding-bottom: 50px;
        padding-left: 10%;
    }
    
    .style-1 #theme-switcher-wrapper {
        width: 100%
    }
    
    .style-1 .mobile-nav-container {
        width: 100%;
        background-color: white;
        overflow: hidden;
    }
    
    .style-1 footer {
        background-color: #000;
        color: #fff;
        border-top: 1px solid var(--grey-stuff);
        max-width: 100%;
        margin-top: 40px;
        padding: 50px 20px;
        display: grid;
    }
    
    .style-1 p {
        font-size: 1.2em;
        margin-bottom: 32px;
    }
    
    .style-1 .logo-style-1 {
        height: 50px;
        width: auto;
        max-width: 100%;
    }
    
    .style-1 .desktop-only {
        display: none
    }
    
    .style-1 .mobile-only {
        display: block
    }
    
    .style-1 .component-wrapper {
        margin: 0 auto;
        max-width: 1300px;
    }
    
    .style-1 .hr-logo {
        background-color: var(--grey-stuff);
        margin-bottom: 0.5%;
    }
    
    .style-1 .hr-categories {
        margin-bottom: 0;
        margin-top: 0.5%;
        background-color: var(--grey-stuff);
    }
    
    
    /* HOME GRID */
    
    .style-1 .topper {
        padding-bottom: 50px
    }
    
    .style-1 .topper-headline-text {
        width: 100%;
        height: auto;
    }
    
    .style-1 .list-timestamp {
        font-size: 0.9em;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        color: var(--second-grey-stuff);
        font-size: 14px;
    }
    
    .style-1 .topper-author {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        color: var(--second-grey-stuff);
        font-size: 14px;
    }
    
    .style-1 .topper-author a {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: var(--second-grey-stuff);
        font-size: 14px;
    }
    
    .style-1 .topper-text {
        text-overflow: ellipsis;
        display: inline-block;
    }
    
    .style-1 .topper-article-wrapper:after {
        content: "\a0";
        display: block;
        padding: 2px 2px;
        line-height: 1px;
    }
    
    .style-1 .topper-image-wrapper {
        display: block;
        height: 500px;
        width: 100%;
        max-height: 300px;
        overflow: hidden;
    }
    
    .style-1 .topper-image {
        height: 100%;
        margin: auto;
        display: block;
    }
    
    .style-1 .image-above-article {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .style-1 .list-author {
        font-size: 0.9em
    }
    
    .style-1 .article-link {
        text-decoration: none;
        color: var(--main-text-color);
    }
    
    .style-1 .horizontal-list-description {
        text-align: justify
    }
    
    .style-1 .newest-list {
        grid-column: 1 / span 3;
    }
    
    .style-1 .horizontal-list-author {
        font-size: 0.9em
    }
    
    .style-1 .horizontal-list-description {
        text-align: justify
    }
    
    
    /* ARTICLE GRID */
    
    .style-1 .article-wrapper {
        display: grid;
        margin: 16px 0 0;
        padding: 16px 16px 0;
        border-left: 2px solid var(--grey-stuff)
    }
    
    .style-1 .article-image-full {
        display: block;
        width: 100%;
        height: auto;
        margin: -0 0;
    }
    
    .style-1 .article-sidebar-wrapper {
        grid-column: 4 / 5;
        grid-row: 4;
        padding-left: 20px;
        border-left: 1px solid var(--grey-stuff);
    }
    
    .style-1 .article-image-wrapper {
        display: inline-block;
        margin-bottom: 32px;
        grid-column: 1 / span 4;
        display: block;
        max-height: 1000px;
        overflow: hidden;
    }
    
    .style-1 .article-headline-info {
        grid-column: 1;
        grid-row: 2 / auto;
        padding-left: 20px
    }
    
    .style-1 .show-all-button {
        width: 50%;
        height: 50px;
        margin: 30px auto;
        display: block;
    }
    
    .style-1 .show-all-button {
        text-decoration: none
    }
    
    .style-1 .article-text {
        font-size: 18px;
        text-align: justify;
        grid-column: 1 / span 3;
        padding-right: 20px;
        padding-left: 20px
    }
    
    .style-1 .article-heading {
        font-family: 'Georgia', 'serif';
        border-bottom: var(--grey-stuff)
    }
    
    .style-1 .list-no-image-wrapper {
        display: none;
    }
    
    .horizontal-list-article-list {
        display: grid;
        grid-gap: 1.5rem;
        font-size: 0.789em;
    }
    
    .style-1 .horizontal-list-no-image-wrapper {
        display: none;
    }
    
    .style-1 .article-bottombar-wrapper {
        grid-column: 1 / span 4
    }
    
    .style-1 .footer-logo {
        float: left;
        width: 300px
    }
    
    .style-1 .footer-logo path {
        fill: white
    }
    
    .stlye-1 .footer-ul {
        display: inline-block;
    }
    
    .style-1 .footer-li a {
        text-decoration: none;
        font-weight: 500;
        text-align: center;
        color: white
    }
    
    .style-1 .footer-li:after {
        content: "\2022";
        display: inline-block;
        margin: 0 8px;
    }
    
    .style-1 .footer-li:last-child:after {
        content: "";
        margin: 0;
    }
    
    .style-1 .footer-wrapper {
        max-width: 1300px;
        margin: auto auto
    }
    
    .style-1 .footer-li {
        display: inline-block;
        vertical-align: top;
        list-style-type: none;
        text-align: center;
    }
    
    .style-1 .footer-logo-link {
        display: inline-block;
    }
    
    @media (min-width: 600px) {
        .style-1 .article-wrapper {
            grid-template-columns: repeat(1, 1fr);
            margin: 16px auto 0;
            padding: 16px 16px 0;
            grid-row: 3
        }
    }
    
    @media (min-width: 880px) {
        .style-1 .article-wrapper {
            grid-template-columns: repeat(4, 1fr);
        }
        .style-1 .article-body {
            -ms-grid-column: 1;
            grid-column: 1/ span 3;
            -ms-grid-row-span: 3;
            -ms-grid-row: 3;
            grid-row: 3;
            padding-right: 20px;
        }
    }
    
    @media only screen and (max-width: 880px) {
        .style-1 h1 {
            font-size: 1.5em
        }
        .style-1 hr {
            background-color: #000;
            height: 1px;
            margin-bottom: 0
        }
        .style-1 .topper {
            display: grid;
            grid-template-columns: 100%;
        }
        .style-1 .list-article-list {
            display: grid;
            grid-template-columns: 100%;
            grid-auto-rows: minmax(125px, auto);
        }
        .style-1 .topper-article-wrapper {
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--grey-stuff);
        }
        .style-1 .topper> :nth-child(2) {
            grid-row: 1;
            padding-bottom: 20px;
            border-bottom: none
        }
        .style-1 .topper-text {
            padding: 10px 25px 0 25px;
        }
        .style-1 .topper> :nth-child(2) .topper-article-title {
            font-size: 2em;
        }
        .style-1 .topper> :nth-child(n+3) .topper-image-wrapper {
            display: block;
            padding: 20px;
            padding-bottom: 10px
        }
        .style-1 .topper-headline-text {
            width: auto;
            height: 60px;
            padding-bottom: 20px;
            padding-left: 20px;
            max-width: 300px
        }
        .style-1 .article-wrapper {
            grid-template-columns: 1fr
        }
        .style-1 .list-next-to-article-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: minmax(125px, auto);
            border-top: 1px solid var(--grey-stuff);
        }
        .style-1 .list-next-to-article-image-wrapper {
            display: inline-block;
        }
        .style-1 .next-to-article-image-wrapper {
            height: auto;
            width: 25%;
            margin: 0;
            margin-right: 10px
        }
        .style-1 .next-to-article {
            display: block;
            width: 100%;
            height: auto;
        }
        .style-1 .list-text {
            grid-column: auto;
            padding: 18px 18px 0 18px;
        }
        .list-article-text {
            padding-bottom: 10px;
            padding-top: 10px;
        }
        .style-1 .article-heading-filler {
            grid-column: 2;
            grid-row: 2;
            border-bottom: 2px solid var(--grey-stuff);
            margin-bottom: 0.6rem;
        }
        .style-1 .article-author {
            margin-bottom: 10px;
        }
        .style-1 .article-headline-info {
            padding-left: 0
        }
        .style-1 .twitter-icon-container-article {
            padding-top: 0;
            padding-bottom: 10px;
        }
        .style-1 h1 {
            padding-left: 0
        }
        .style-1 .article-text {
            padding-left: 0
        }
        .style-1 .headline-single-article {
            grid-column: 1 / span 2
        }
        .style-1 .list-article-wrapper {
            padding-top: 10px
        }
    }
    
    @media (min-width: 880px) {
        .style-1 .list-article-wrapper {
            padding-left: 10px
        }
        .list-article {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .style-1 .site-wrapper {
            margin: 0 auto;
            border-top: 0px solid var(--grey-stuff);
            border-right: 2px solid var(--grey-stuff);
            border-bottom: 0px solid var(--grey-stuff);
            border-left: 2px solid var(--grey-stuff);
        }
        .style-1 .desktop-only {
            display: block;
        }
        .style-1 .mobile-only {
            display: none;
        }
        .style-1 .topper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
        .style-1 .topper-article-wrapper {
            font-size: 150%;
        }
        .style-1 .topper-headline {
            grid-column: 1 /span 4;
        }
        .style-1 .topper-headline-text {
            padding-left: 12px;
            width: auto;
            height: 60px;
            padding-bottom: 10px;
        }
        .style-1 .topper> :nth-child(2) {
            grid-column: 1 / span 4;
        }
        .style-1 .topper-single-container {
            display: grid;
        }
        .style-1 .topper> :nth-child(2) .topper-single-container {
            grid-template-columns: repeat(4, 1fr);
            padding-bottom: 20px;
            border-bottom: 1px solid var(--grey-stuff);
        }
        .style-1 .topper> :nth-child(2) .topper-image-wrapper {
            grid-column: 3 / span 2;
            grid-row: 1;
            padding-left: 12px;
        }
        .style-1 .topper> :nth-child(n+3) {
            padding-top: 20px;
        }
        .style-1 .topper> :nth-child(n+3) .topper-article-title {
            font-size: 1em;
            padding-top: 20px
        }
        .style-1 .topper> :nth-child(2) .topper-text {
            grid-column: 1 / span 2;
            grid-row: 1;
            border-right: 1px solid var(--grey-stuff);
            padding-right: 12px;
        }
        .style-1 .topper> :nth-child(3) {
            -ms-grid-column: 3;
            grid-column: 1 / span 2;
            -ms-grid-row-span: 2;
            -ms-grid-row: 2;
        }
        .style-1 .topper-article-wrapper {
            padding: 0 12px;
            border-right: 1px solid var(--grey-stuff);
        }
        .style-1 .topper-single-container {
            display: grid
        }
        .style-1 .topper-article-text {
            padding-top: 10px
        }
        .style-1 .home-bottom {
            display: grid;
        }
        .style-1 .twitter-sidebar {
            grid-column: 4 / 5;
            grid-row: 1 / span 6;
            padding-left: 12px;
            border-left: 1px solid var(--grey-stuff);
            width: 300px;
            overflow: auto;
        }
        .style-1 .list-article-list {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            padding-left: 12px;
            padding-right: 12px;
        }
        .style-1 .list-article-text-wrapper {
            padding: 20px;
            font-size: 150%;
        }
        .style-1 .list-article-wrapper {
            grid-column: 1 / span 4;
        }
        .style-1 .topper-author-timestap-wrapper {
            padding-bottom: 10px
        }
        .style-1 .list-timestamp {
            padding-left: 10%
        }
        .style-1 .headline-single-article {
            font-style: normal;
            font-weight: 600;
            letter-spacing: normal;
            line-height: 1.2;
            text-transform: none;
            margin-bottom: .6rem;
            grid-row: 1;
            grid-column: 1 / 4;
            padding-left: 20px;
            border-right: 2px solid var(--grey-stuff);
            border-bottom: 2px solid var(--grey-stuff)
        }
        .style-1 .list-next-to-article-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(125px, auto);
            border-top: 1px solid var(--grey-stuff);
            padding-bottom: 10px;
            padding-top: 10px
        }
        .style-1 .list-next-to-article-image-wrapper {
            display: inline-block;
            grid-column: 4;
            grid-row: 1
        }
        .style-1 .next-to-article-image-wrapper {
            height: auto;
            width: 25%;
            margin: 0;
            margin-right: 10px
        }
        .style-1 .next-to-article {
            width: 100%;
            object-fit: cover;
        }
        .style-1 .list-text {
            display: inline-block;
            grid-column: 1/ span 3;
        }
        .style-1 .list-next-to-article-container .list-text {
            padding-right: 20px
        }
        .style-1 .twitter-icon-container-article {
            justify-content: center;
            height: 100%;
            padding-top: 0;
            margin-top: -10px;
            white-space: nowrap
        }
        .style-1 .twitter-icon-container-article>.twitter-shares {
            width: auto
        }
    }
    
    @media (max-width: 1300px) and (min-width: 880px) {
        .style-1 .home {
            padding: 10px
        }
        .style-1 .category {
            padding: 10px
        }
    }
</style>
