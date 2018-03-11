<template>
    
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:500');
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,800');
    * {
        font-family: "Fira Sans", sans-serif;
        font-weight: 800;
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
        --red: #f11133;
        --second-grey-stuff: #333333;
        --bg-color: #F9F9F9;
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
    
    .style-2 .loading-overlay {
        background-color: white;
        display: table;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        -webkit-transition: all ease 2.5s;
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
    
    .style-2 h1 {
        font-size: calc(1em * 1.250 * 1.250 * 1.250);
        font-weight: 600;
        margin-bottom: 9.6px;
        margin-bottom: 9.6px;
        margin-bottom: .6rem;
        padding-left: 12px;
    }
    
    .style-2 h2 {
        font-size: calc(1em * 1.250 * 1.250);
        font-weight: 800;
        font-family: "Fira Sans", sans-serif;
        padding-bottom: 10px
    }
    
    .style-2 h3 {
        font-size: .8125em;
        font-family: "Fira Sans", sans-serif;
    }
    
    .style-2 hr {
        background-color: #000;
        height: 0;
        margin-bottom: 18px
    }
    
    .style-2 .nav-categories {
        text-align: center;
        width: 100%;
        padding-top: 1%;
        padding-bottom: 1%;
    }
    
    .style-2 #nav-absolute {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: white;
    }
    
    .style-2 #navbar {}
    
    .style-2 .nav-categories li {
        display: inline-block;
        vertical-align: top;
        padding: 0.1% 1% 0.1% 1%;
    }
    
    .style-2 .nav-categories li:nth-child(n+2) {
        border-left: 2px solid var(--grey-stuff);
    }
    
    .style-2 .router-link-active {
        border-bottom: 2px solid var(--second-grey-stuff);
    }
    
    .style-2 #router-link {
        padding-top: 2%
    }
    
    .style-2 .nav-categories li a {
        font-family: 'Roboto' !important;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: -0.2px;
        color: #333333
    }
    
    .style-2 .vue-affix {
        background-color: rgba(255, 255, 255, 1);
        z-index: 1030;
        width: 100%;
        right: 0;
        left: 0;
    }
    
    .style-2 #nav-logo-link {
        border-bottom: 0
    }
    
    .style-2 #settings-arrow {
        position: absolute;
        right: 0
    }
    
    .style-2 .theme-switcher-logo-wrapper {
        display: block
    }
    
    .style-2 #theme-switcher {
        position: absolute;
        background-color: #FCFCFC;
        width: 500%;
        overflow-y: visible;
        border-right: 1px solid var(--grey-stuff);
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
        opacity: 0;
        padding: 50% 0%;
        left: 0;
        height: 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.75);
    }
    
    .style-2 #theme-switcher::after {
        content: " ";
        position: absolute;
        bottom: 100%;
        /* At the top of the tooltip */
        left: 10%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent var(--grey-stuff) transparent;
    }
    
    .style-2 .theme-switcher-logo-1 {
        height: 30px;
        width: auto;
        position: relative;
    }
    
    .style-2 .theme-switcher-logo-wrapper active {
        background-color: black
    }
    
    .style-2 .theme-switcher-logo {
        width: 65%;
        position: relative;
        height: auto;
    }
    
    .style-2 #theme-switcher-wrapper {
        width: 100%
    }
    
    .style-2 #theme-switcher-wrapper> :first-child {
        padding-bottom: 10%;
    }
    
    .style-2 .active {
        opacity: 1 !important;
        height: auto !important;
    }
    
    .style-2 .mobile-nav-container {
        width: 100%;
        background-color: white;
        overflow: hidden;
        position: fixed;
        z-index: 9999
    }
    
    .style-2 footer {
        background-color: #000;
        color: #fff;
        border-top: 1px solid var(--grey-stuff);
        max-width: 100%;
        margin-top: 40px;
        padding: 50px 20px;
        display: grid;
    }
    
    .style-2 p {
        font-size: 1em;
        margin-bottom: 16px;
        margin-bottom: 16px;
        margin-bottom: 1rem;
        font-weight: 400;
    }
    
    .style-2 .logo-style-1 {
        height: 50px;
        width: auto;
        max-width: 100%;
    }
    
    .style-2 .category-header {
        font-weight: 800
    }
    
    .style-2 .logo.style-2-mobile {
        height: 30px;
        width: auto;
        max-width: 100%;
    }
    
    .style-2 .desktop-only {
        display: none
    }
    
    .style-2 .mobile-only {
        display: block
    }
    
    .style-2 .component-wrapper {
        margin: 0 auto;
        max-width: 1000px;
    }
    
    .style-2 .hr-logo {
        background-color: var(--grey-stuff);
        margin-bottom: 0.5%;
    }
    
    .style-2 .hr-categories {
        margin-bottom: 0;
        margin-top: 0.5%;
        background-color: var(--grey-stuff);
    }
    
    
    /* HOME GRID */
    
    .style-2 .topper {
        padding-bottom: 50px
    }
    
    .style-2 .topper-headline-text {
        font-size: 40px;
    }
    
    .style-2 .topper-headline-underline {
        background-color: var(--red);
        width: 8%;
        height: 5px
    }
    
    .style-2 .list-timestamp {
        font-size: 0.9em;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        color: white;
        font-size: 14px;
    }
    
    .style-2 .topper-author {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        color: var(--second-grey-stuff);
        font-size: 14px;
    }
    
    .style-2 .topper-author a {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: var(--second-grey-stuff);
        font-size: 14px;
    }
    
    .style-2 .topper-text {
        text-overflow: ellipsis;
        display: inline-block;
        color: white !important;
    }
    
    .style-2 .topper-article-title {
        color: white
    }
    
    .style-2 .topper-image-wrapper {
        display: block;
        overflow: hidden;
        display: inline-block;
        /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7) 100%);
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7) 100%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#b3000000', GradientType=0);
        /* IE6-9 */
    }
    
    .style-2 .topper-image {
        width: 100%;
        height: auto;
        margin: auto;
        display: block;
        position: relative;
        z-index: -1;
    }
    
    .style-2 .image-above-article {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .style-2 .list-author {
        font-size: 0.9em;
        color: white;
        text-decoration: none
    }
    
    .style-2 .list-author a {
        color: white;
        text-decoration: none
    }
    
    .style-2 .article-link {
        text-decoration: none;
        color: var(--main-text-color);
    }
    
    .style-2 .horizontal-list-description {
        text-align: justify
    }
    
    .style-2 .newest-list {
        grid-column: 1 / span 2;
    }
    
    .style-2 .horizontal-list-author {
        font-size: 0.9em
    }
    
    .style-2 .horizontal-list-description {
        text-align: justify
    }
    
    
    /* ARTICLE GRID */
    
    .style-2 .article-wrapper {
        display: grid;
        margin: 16px 0 0;
        padding: 16px 16px 0;
    }
    
    .style-2 .article-image-full {
        display: block;
        width: 100%;
        height: auto;
        margin: -0 0;
    }
    
    .style-2 .article-sidebar-wrapper {
        grid-column: 3;
        grid-row: 1;
        padding-left: 20px;
    }
    
    .style-2 .image-credit {
        padding-top: 10px;
    }
    
    .style-2 .article-three-columns {
        grid-column: 1 / span 4;
        display: grid;
        grid-template-columns: repeat(3, 1fr)
    }
    
    .style-2 .article-image-wrapper {
        display: inline-block;
        margin-bottom: 32px;
        grid-column: 1 / span 4;
        display: block;
        max-height: 1000px;
        overflow: hidden;
        padding-top: 60px;
    }
    
    .style-2 .article-headline-info {
        grid-column: 2;
        grid-row: 2 / auto;
        color: red
    }
    
    .style-2 .show-all-button {
        font-family: 'Roboto' !important;
        width: 130px;
        height: 30px;
        margin: 30px auto;
        display: block;
        text-decoration: none
    }
    
    .style-2 .show-all-container {
        position: relative;
    }
    
    .style-2 .show-all-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        z-index: -1;
        border-top: 1px solid var(--grey-stuff);
    }
    
    .style-2 .show-all-button {
        font-family: 'Roboto' !important;
        color: #333333;
        border: 1px solid var(--grey-stuff);
        text-decoration: none;
        background-color: #ebebeb;
        border-radius: 2px;
    }
    
    .style-2 .newest-list a {
        text-decoration: none
    }
    
    .style-2 .article-text {
        font-size: 22px;
        text-align: justify;
        grid-column: 1 / span 2;
        padding-right: 30px;
        font-weight: 400;
    }
    
    .style-2 .article-heading {
        font-family: "Fira Sans", sans-serif;
        border-bottom: var(--grey-stuff)
    }
    
    .style-2 .list-no-image-wrapper {
        display: none;
    }
    
    .horizontal-list-article-list {
        display: grid;
        grid-gap: 1.5rem;
        font-size: 0.789em;
    }
    
    .style-2 .horizontal-list-no-image-wrapper {
        display: none;
    }
    
    .style-2 .article-bottombar-wrapper {
        grid-column: 1 / span 4
    }
    
    .style-2 .footer-logo {
        float: left;
        width: 100%
    }
    
    .style-2 .footer-logo path {
        fill: white
    }
    
    .stlye-1 .footer-ul {
        display: inline-block;
    }
    
    .style-2 .footer-li a {
        text-decoration: none;
        font-weight: 500;
        text-align: center;
        color: white
    }
    
    .style-2 .footer-li:after {
        content: "\2022";
        display: inline-block;
        margin: 0 8px;
    }
    
    .style-2 .footer-li:last-child:after {
        content: "";
        margin: 0;
    }
    
    .style-2 .footer-wrapper {
        max-width: 1300px;
        margin: auto auto
    }
    
    .style-2 .footer-li {
        display: inline-block;
        vertical-align: top;
        list-style-type: none;
        text-align: center;
    }
    
    .style-2 .footer-logo-link {
        display: inline-block;
    }
    
    #nav-spacer {
        width: 100%;
        height: 200px !important;
        display: block;
    }
    
    @media (min-width: 600px) {
        .style-2 .article-wrapper {
            grid-template-columns: repeat(1, 1fr);
            margin: 16px auto 0;
            padding: 16px 16px 0;
            grid-row: 3;
        }
    }
    
    @media (min-width: 880px) {
        .style-2 .article-wrapper {
            grid-template-columns: repeat(4, 1fr);
        }
        .style-2 .article-body {
            grid-column: 1/ span 3;
            grid-row: 3;
            padding-right: 20px;
        }
        .style-2 .article-heading {
            padding: 0
        }
        .style-2 .list-article-wrapper {
            padding-left: 10px;
        }
        .list-article {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .style-2 .site-wrapper {
            margin: 0 auto;
        }
        .style-2 .desktop-only {
            display: block;
        }
        .style-2 .mobile-only {
            display: none;
        }
        .style-2 .topper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
        .style-2 .topper-article-wrapper {
            font-size: 150%;
        }
        .ad-container {
            background-color: red;
            width: 100%;
            height: 100%
        }
        .style-2 .topper-ad-wrapper {
            grid-column: 4;
            grid-row: 3;
            padding: 20px 12px
        }
        .style-2 .topper-headline {
            grid-column: 1 /span 4;
        }
        .style-2 .topper-headline-text {
            padding-left: 12px;
            width: auto;
            height: 60px;
            padding-bottom: 10px;
        }
        .style-2 .topper-image-wrapper {
            max-height: 500px;
            width: 100%;
        }
        .style-2 .topper .topper-article-wrapper {
            grid-column: 1 / span 4;
        }
        .style-2 .topper-single-container {
            display: grid;
        }
        .style-2 .topper .topper-single-container {
            grid-template-columns: repeat(4, 1fr);
            padding-bottom: 20px;
            border-bottom: 1px solid var(--grey-stuff);
            position: relative;
        }
        .style-2 .topper .topper-image-wrapper {
            grid-column: 1 / span 4;
            grid-row: 1;
        }
        .style-2 .topper> :nth-child(n+3) {
            padding-top: 20px;
        }
        .style-2 .topper> :nth-child(n+3) .topper-article-title {
            padding-top: 20px;
        }
        .style-2 .topper .topper-text {
            grid-column: 1 / span 3;
            grid-row: 1;
            padding-left: 20px;
            position: absolute;
            bottom: 40px;
        }
        .style-2 .topper> :nth-child(n+3) .topper-text {
            grid-column: 1 / span 4;
            grid-row: 1;
            padding-left: 20px;
            position: absolute;
            bottom: 40px;
        }
        .style-2 .topper> :nth-child(3) {
            grid-column: 1 / span 3;
        }
        .style-2 .topper-article-wrapper {
            padding: 0 12px;
        }
        .style-2 .topper-single-container {
            display: grid;
        }
        .style-2 .topper-article-text {
            padding-top: 10px;
        }
        .style-2 .home-bottom {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        }
        .style-2 .twitter-sidebar {
            grid-column: 4 / 5;
            grid-row: 1 / span 2;
            padding-left: 12px;
            overflow: auto;
        }
        .style-2 .list-article-list {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
        .style-2 .list-article-text-wrapper {
            padding: 20px;
            font-size: 150%;
        }
        .style-2 .sidebar .list-article-text {
            background-color: white;
            box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.75);
        }
        .style-2 .list-article-wrapper {
            grid-column: 1 / span 4;
        }
        .style-2 .topper-author-timestap-wrapper {
            padding-bottom: 10px;
        }
        .style-2 .list-timestamp {
            padding-left: 10%;
        }
        .style-2 .headline-single-article {
            font-style: normal;
            font-size: 1.8em;
            font-weight: 600;
            letter-spacing: normal;
            line-height: 1.2;
            text-transform: none;
            margin-bottom: .6rem;
            grid-row: 1;
            grid-column: 1 / span 4;
        }
        .style-2 .list-next-to-article-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(125px, auto);
            padding-bottom: 10px;
            padding-top: 10px;
            position: relative;
            overflow: hidden;
        }
        .style-2 .list-next-to-article-image-wrapper {
            display: inline-block;
            grid-column: 1 / span 4;
            grid-row: 1;
            max-height: 400px;
            grid-row: 1;
            /* FF3.6-15 */
            background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0.7) 100%);
            /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0.7) 100%);
            /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#b3000000', GradientType=0);
            /* IE6-9 */
            overflow: hidden;
        }
        .style-2 .next-to-article-image-wrapper {
            height: auto;
            width: 25%;
            margin: 0;
            margin-right: 10px;
        }
        .style-2 .next-to-article {
            width: 100%;
            -o-object-fit: cover;
            object-fit: cover;
            position: relative;
            z-index: -1;
        }
        .style-2 .list-text {
            display: inline-block;
            grid-column: 1/ span 3;
            padding: 20px;
        }
        .style-2 .list-next-to-article-container .list-text {
            padding-left: 20px;
            z-index: 100;
            color: white;
            position: absolute;
            bottom: 20px;
        }
        .style-2 .twitter-icon-container-article>.page-views {}
    }
    
    @media only screen and (max-width: 880px) {
        .style-2 h1 {
            font-size: 1.5em;
        }
        .style-2 hr {
            background-color: #000;
            height: 0;
            margin-bottom: 0;
        }
        .style-2 #nav-spacer {
            width: 100%;
            height: 80px!important;
            display: block;
        }
        .style-2 .topper {
            display: grid;
            grid-template-columns: 100%;
        }
        .style-2 .list-article-list {
            display: grid;
            grid-template-columns: 100%;
            grid-auto-rows: minmax(125px, auto);
        }
        .style-2 .topper-article-wrapper {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .style-2 .topper-single-container {
            display: grid;
            position: relative;
        }
        .style-2 .topper-article-title {
            position: absolute;
            bottom: 20px;
        }
        .style-2 .topper-image-wrapper {
            grid-column: 1;
            grid-row: 1;
        }
        .style-2 .topper-text {
            grid-column: 1;
            grid-row: 1;
        }
        .style-2 .topper {
            grid-row: 1;
            padding-bottom: 20px;
            border-bottom: none;
        }
        .style-2 .topper-text {
            padding: 10px 25px 0 25px;
            position: relative;
        }
        .style-2 .topper .topper-article-title {
            padding-right: 10px;
        }
        .style-2 .topper> :nth-child(n+3) .topper-image-wrapper {
            display: block;
            margin: 20px;
            padding-bottom: 10px;
            grid-row: 1;
            grid-column: 1;
        }
        .style-2 .topper-headline-text {
            width: auto;
            height: 60px;
            padding-bottom: 20px;
            padding-left: 20px;
            max-width: 300px;
        }
        .style-2 .article-wrapper {
            grid-template-columns: 1fr;
        }
        .style-2 .headline-single-article {
            padding-bottom: 20px;
        }
        .style-2 .article-heading-filler {
            grid-column: auto !important
        }
        .style-2 .article-three-columns {
            grid-template-columns: repeat(1, 1fr)
        }
        .style-2 .article-image-wrapper {
            padding-top: 20px;
        }
        .style-2 .list-next-to-article-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: minmax(125px, auto);
            overflow: hidden;
        }
        .style-2 .list-next-to-article-image-wrapper {
            display: inline-block;
            overflow: hidden;
        }
        .style-2 .next-to-article-image-wrapper {
            height: auto;
            width: 25%;
            margin: 0;
            margin-right: 10px;
        }
        .style-2 .next-to-article {
            display: block;
            width: 100%;
            height: auto;
        }
        .style-2 .list-text {
            grid-column: auto;
            padding: 18px 18px 0 18px;
        }
        .list-article-text {
            padding-bottom: 10px;
            padding-top: 10px;
        }
        .style-2 .article-heading-filler {
            grid-column: 2;
            grid-row: 2;
            margin-bottom: 0.6rem;
        }
        .style-2 .article-author {
            margin-bottom: 10px;
            font-weight: 400;
        }
        .style-2 .article-headline-info {
            padding-left: 0;
        }
        .style-2 .twitter-icon-container-article {
            padding-top: 0;
            padding-bottom: 10px;
        }
        .style-2 h1 {
            padding-left: 0;
        }
        .style-2 .article-text {
            padding-left: 0;
            font-weight: 400;
        }
        .style-2 .headline-single-article {
            grid-column: 1 / span 2;
        }
        .style-2 .list-article-wrapper {
            padding-top: 10px;
        }
        .style-2 .article-headline-info {
            grid-column: 1;
            grid-row: 3 / auto;
            color: red;
        }
    }
    
    @media (max-width: 1300px) and (min-width: 880px) {
        .style-2 .home {
            padding: 10px;
        }
        .style-2 .category {
            padding: 10px;
        }
    }
</style>
