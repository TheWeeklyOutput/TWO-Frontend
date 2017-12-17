<template>
    
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Lora');
    @import url('https://fonts.googleapis.com/css?family=Ramaraja');
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
        --grey-stuff: #ecf0f1;
        --second-grey-stuff: grey
    }
    
    body {
        font-size: 1em;
    }
    
    h1 {
        font-size: calc(1em * 1.250 * 1.250 * 1.250);
        font-weight: 600;
        margin-bottom: .6rem;
    }
    
    h2 {
        font-size: calc(1em * 1.250 * 1.250);
        font-weight: 600;
        font-family: 'Lora', serif;
    }
    
    h3 {
        font-size: .8125em;
        font-family: 'Lora', serif;
    }
    
    hr {
        background-color: #000;
        height: 2px;
        margin-bottom: 3%;
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
    
    .nav-categories {
        text-align: center;
        width: 100%;
    }
    
    .nav-categories li {
        display: inline-block;
        vertical-align: top;
        padding: 1%;
    }
    
    .nav-categories li a {
        font-family: 'Lora', serif !important;
        text-decoration: none;
        font-weight: 500
    }
    
    footer {
        background-color: #000;
        color: #fff;
        border-top: 1px solid var(--grey-stuff);
        max-width: 100%;
        margin-top: 40px;
    }
    
    p {
        font-size: 1.2em;
        margin-bottom: 32px;
    }
    
    footer {
        width: 100vw;
        height: 8em;
    }
    
    .headline-single-article {
        font-style: normal;
        font-weight: 600;
        letter-spacing: normal;
        line-height: 1.2;
        text-transform: none;
        margin-bottom: .6rem;
        grid-row: 1;
        grid-column: 1 / 5;
    }
    
    .logo-style-1 {
        height: 40px;
        width: auto;
        max-width: 100%;
    }
    
    .desktop-only {
        display: none
    }
    
    .site-wrapper {
        margin: 0 auto;
        max-width: 1600px;
        border-top: 0px solid var(--grey-stuff);
        border-right: 2px solid var(--grey-stuff);
        border-bottom: 0px solid var(--grey-stuff);
        border-left: 2px solid var(--grey-stuff);
    }
    
    .component-wrapper {
        margin: 0 auto;
        max-width: 1300px;
        ;
    }
    
    .hr-logo {
        background-color: #bdc3c7;
        margin-bottom: 0.5%;
    }
    
    .hr-categories {
        margin-bottom: 3%;
        margin-top: 0.5%;
    }
    
    
    /* HOME GRID */
    .topper {
        padding-bottom: 50px
    }

    @media (min-width: 600px) {
        h1 {
            font-size: calc(1em * 1.250 * 1.250 * 1.250 * 1.250);
        }
        .topper {
            display: grid;
            grid-template-columns: 100%;
            grid-auto-rows: minmax(125px, auto);
        }
        .list-article-list {
            display: grid;
            grid-template-columns: 100%;
            grid-auto-rows: minmax(125px, auto);
        }
    }
    
    @media (min-width: 880px) {
        .desktop-only {
            display: block;
        }
        .topper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
        .topper-article-wrapper {
            font-size: 150%;
        }
        .topper-headline {
            grid-column: 1 /span 4;
        }
        .topper-headline-text {
            padding-left: 12px
        }
        .topper> :nth-child(2) {
            grid-column: 1 / span 4;
        }
        .topper-single-container {
            display: grid;
        }
        .topper> :nth-child(2) .topper-single-container {
            grid-template-columns: repeat(4, 1fr);
            padding-bottom: 20px;
            border-bottom: 1px solid var(--grey-stuff);
        }
        .topper> :nth-child(2) .topper-image-wrapper {
            grid-column: 3 / span 2;
            grid-row: 1;
            padding-left: 12px;
        }
        .topper> :nth-child(n+3) {
            padding-top: 20px;
        }
        .topper> :nth-child(n+3) .topper-article-title {
            font-size: 1em;
            padding-top: 10px
        }

        .topper> :nth-child(2) .topper-text {
            grid-column: 1 / span 2;
            grid-row: 1;
            border-right: 1px solid var(--grey-stuff);
            padding-right: 12px;
        }
        .topper> :nth-child(3) {
            -ms-grid-column: 3;
            grid-column: 1 / span 2;
            -ms-grid-row-span: 2;
            -ms-grid-row: 2;
        }
        .topper-article-wrapper {
            padding: 0 12px;
            border-right: 1px solid var(--grey-stuff);
        }
        .topper-single-container {
            display: grid
        }

        .topper-article-text {
            padding-top: 20px
        }

        .twitter-sidebar {
            grid-column: 4 / 5;
            grid-row: 3 / 4;
            padding-left: 12px;
            border-left: 1px solid var(--grey-stuff);
            width: 300px;
            max-height: 500px;
            overflow: auto;
        }
        .list-article-list {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 1.5rem;
        }
        .list-article-text-wrapper {
            padding: 20px;
            font-size: 150%;
        }
        .list-article-wrapper {
            grid-column: 1 / span 4;
        }
    }
    
    .topper-author-timestap-wrapper {
        padding-bottom: 10px
    }
    
    .topper-author {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        color: var(--second-grey-stuff);
        font-size: 14px;
    }
    
    .topper-author a {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: var(--second-grey-stuff);
        font-size: 14px;
    }
    
    .list-timestamp {
        font-size: 0.9em;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        color: var(--second-grey-stuff);
        font-size: 14px;
        padding-left: 10%
    }
    
    .topper-article-title {
        margin-bottom: .3rem;
    }
    
    .topper-text {
        text-overflow: ellipsis;
        display: inline-block;
    }
    
    .topper-article-wrapper:after {
        content: "\a0";
        display: block;
        padding: 2px 2px;
        line-height: 1px;
    }
    
    .topper-image {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .list-next-to-article-image-wrapper {
        display: inline-block;
    }
    
    .next-to-article-image-wrapper {
        height: auto;
        width: 25%;
        margin: 0;
        margin-right: 10px
    }
    
    .next-to-article {
        width: 100%;
        object-fit: cover;
    }
    
    .image-above-article {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .list-author {
        font-size: 0.9em
    }
    
    .article-link {
        text-decoration: none;
        color: var(--main-text-color);
    }
    
    .list-next-to-article-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.5rem;
        grid-auto-rows: minmax(125px, auto);
        border-top: 1px solid var(--grey-stuff);
    }
    
    .list-text {
        display: inline-block;
        grid-column: 2/ span 3;
    }
    
    
    /* ARTICLE GRID */
    
    .article-wrapper {
        display: grid;
        margin: 16px 0 0;
        padding: 16px 16px 0;
    }
    
    .article-image-full {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .article-sidebar-wrapper {
        grid-column: 4 / 5;
        grid-row: 3 / 4;
        padding-left: 20px;
        border-left: 1px solid var(--grey-stuff);
    }
    
    .article-image-wrapper {
        display: inline-block;
        margin-bottom: 32px
    }
    
    .article-author {
        grid-column: 1 / span 3;
        grid-row: 2 / auto;
    }
    
    .article-text {
        font-size: 18px;
        text-align: justify
    }
    
    @media (min-width: 600px) {
        .article-wrapper {
            grid-template-columns: repeat(1, 1fr);
            margin: 16px auto 0;
            padding: 16px 16px 0;
            grid-row: 3
        }
    }
    
    @media (min-width: 880px) {
        .article-wrapper {
            grid-template-columns: repeat(4, 1fr);
        }
        .article-body {
            -ms-grid-column: 1;
            grid-column: 1/ span 3;
            -ms-grid-row-span: 3;
            -ms-grid-row: 3;
            grid-row: 3;
            padding-right: 20px;
        }
    }
</style>
