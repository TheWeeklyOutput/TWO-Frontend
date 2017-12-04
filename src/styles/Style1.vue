<template>
    
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    * {
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        margin: 0;
        padding: 0;
        border: 0;
    }
    
     :root {
        --main-text-color: black;
    }
    
    body {
        font-size: 1em;
    }
    
    h1 {
        font-size: calc(1em * 1.250 * 1.250 * 1.250);
        font-weight: 500
    }
    
    h2 {
        font-size: .9375em;
    }
    
    h3 {
        font-size: .8125em;
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
    
    .list-title {
        font-size: 1.2em;
        margin-bottom: .3rem;
    }
    
    .list-text {
        font-size: 1em;
        height: 20px;
        text-overflow: ellipsis;
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
        padding: 16px 0
    }
    
    .article-link {
        text-decoration: none;
        color: var(--main-text-color)
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
    }
    
    .sidebar {
        float: right;
        overflow: hidden;
    }
    
    footer {
        width: 100vw;
        height: 8em;
    }
    
    .list-article-wrapper {
        margin: 0 auto;
        max-width: 1100px;
    }
    
    .headline-single-article {
        font-style: normal;
        font-weight: 600;
        letter-spacing: normal;
        line-height: 1.2;
        text-transform: none;
        margin-bottom: .6rem;
    }
    
    .article-wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    
    .article-text-wrapper {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-flex-shrink: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
        -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        min-width: 0;
        float: left;
        margin-right: 20px
    }
    
    .site-wrapper {
        margin: 0 auto;
        max-width: 1100px;
    }
    
    .article-sidebar-wrapper {
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-flex-basis: 300px;
        -ms-flex-preferred-size: 300px;
        flex-basis: 300px;
        min-width: 0;
        margin-left: 20px;
    }
    
    p {
        font-size: 1.2em;
    }
    
    footer {
        width: 100vw;
        height: 8em;
    }
    
    .recent-articles {
        margin: 0 auto;
        max-width: 1300px;
    }
    
    .desktop-only {
        display: none
    }
    
    @media (min-width: 600px) {
        h1 {
            font-size: calc(1em * 1.250 * 1.250 * 1.250 * 1.250);
        }
    }
    
    @media (min-width: 880px) {
        .desktop-only {
            display: block;
        }
    }
    
    .list-article-wrapper {
        margin: 0 auto;
        max-width: 1100px;
    }
    
    .article-image-full {
        width: 100%;
        height: auto;
    }
    
    p {
        margin: 10px 0
    }
    
    .image-credit {
        margin-top: 0;
        font-size: 0.9em;
    }
    
    .article-sidebar-wrapper .list-title {
        font-size: 0.9em;
        font-weight: 500
    }
    
    .image-above-article {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .logo-style-1 {
        height: 50px;
        width: auto;
        max-width: 100%;
    }
    
    .next-to-article {
        float: left;
        width: auto;
        height: 10px;
    }

    .recent-articles .article-text {
        padding: 16px
    }
</style>
