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
        letter-spacing: normal
    }
    
     :root {
        --main-text-color: black;
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
        height: 1.5px;
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
    }
    
    footer {
        background-color: #000;
        color: #fff;
        border-top: 1px solid #343434;
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
        border-top: 0px solid #ecf0f1;
        border-right: 2px solid #ecf0f1;
        border-bottom: 0px solid #ecf0f1;
        border-left: 2px solid #ecf0f1;
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
    
    @media (min-width: 600px) {
        h1 {
            font-size: calc(1em * 1.250 * 1.250 * 1.250 * 1.250);
        }
        .topper-article-list {
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
        .topper-article-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
        .topper-article-text-wrapper {
            padding: 20px;
            font-size: 150%;
        }
        .topper-headline {
            grid-column: 1 /span 4;
        }
        .topper-headline-text {
            padding-left: 12px
        }
        .topper-article-list> :first-child {
            -ms-grid-column: 1;
            -ms-grid-column-span: 2;
            -ms-grid-row-span: 2;
            -ms-grid-row: 1;
            grid-column: 1 / span 3;
            grid-row: 1;
        }
        .topper-article-list> :nth-child(2) {
            -ms-grid-column: 3;
            grid-column: 1 / span 2;
            -ms-grid-row-span: 2;
            -ms-grid-row: 2;
            grid-row: span 2;
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
        .topper-article {
            padding: 0 12px;
            border-right: 1px solid #ecf0f1;
        }
        .twitter-sidebar {
            grid-column: 4 / 5;
            grid-row: 3 / 4;
            padding-left: 12px;
            border-left: 1px solid #ecf0f1;
            width: 300px;
            max-height: 500px;
            overflow: auto;
        }
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
    
    .topper-list-title {
        margin-bottom: .3rem;
    }
    
    .topper-list-text {
        font-size: 1em;
        text-overflow: ellipsis;
    }
    
    .topper-article:after {
        content: "\a0";
        display: block;
        padding: 2px 2px;
        line-height: 1px;
        border-top: 1px solid #ecf0f1;
    }
    
    .list-author {
        font-size: 0.9em
    }
    
    .list-timestamp {
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
        border-top: 1px solid #e7e7e8;
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
        width: 100%;
        height: auto;
    }
    
    .article-sidebar-wrapper {
        grid-column: 4 / 5;
        grid-row: 3 / 4;
        padding-left: 20px;
        border-left: 1px solid #ecf0f1;
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
    }
    
    @media (min-width: 600px) {
        .article-wrapper {
            grid-template-columns: repeat(1, 1fr);
            margin: 16px 0 0;
            padding: 16px 16px 0;
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
