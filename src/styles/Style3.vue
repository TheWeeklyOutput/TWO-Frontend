<template>
    
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:500');
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,800');
    .style-3 * {
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
        --bg-color: white;
        --green: #34DB93;
        --grey-text: #9F9F9F
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
    
    .style-3 .loading-overlay {
        background-color: white;
        display: table;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
    }
    
    .loading-overlay>div {
        display: table-cell;
        width: 100%;
        height: 100%;
        background: white;
        text-align: center;
        vertical-align: middle;
    }
    
    .style-3 h1 {
        font-size: calc(1em * 1.250 * 1.250 * 1.250);
        font-weight: 600;
        margin-bottom: 9.6px;
        margin-bottom: 9.6px;
        margin-bottom: .6rem;
        padding-left: 12px;
    }
    
    .style-3 h2 {
        font-size: calc(1em * 1.250 * 1.250);
        font-weight: 800;
        font-family: "Fira Sans", sans-serif;
        padding-bottom: 10px
    }
    
    .style-3 h3 {
        font-size: .8125em;
        font-family: "Fira Sans", sans-serif;
    }
    
    .style-3 hr {
        background-color: #000;
        height: 0;
        margin-bottom: 18px
    }
    
    .style-3 .nav-categories {
        text-align: center;
        width: 100%;
        padding-top: 1%;
        padding-bottom: 1%;
    }
    
    .style-3 #nav-absolute {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: white;
    }
    
    .style-3 #navbar {}
    
    .style-3 .nav-categories li {
        display: inline-block;
        vertical-align: top;
        padding: 0.1% 1% 0.1% 1%;
    }
    
    .style-3 .nav-categories li:nth-child(n+2) {
        border-left: 2px solid var(--grey-stuff);
    }
    
    .style-3 .router-link-active {
        border-bottom: 2px solid var(--second-grey-stuff);
    }
    
    
    .style-3 .nav-categories li a {
        font-family: 'Roboto' !important;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: -0.2px;
        color: #333333
    }
    
    .style-3 .vue-affix {
        background-color: rgba(255, 255, 255, 1);
        z-index: 1030;
        width: 100%;
        right: 0;
        left: 0;
    }
    
    .style-3 #nav-logo-link {
        border-bottom: 0
    }
    
    .style-3 #settings-arrow {
        position: absolute;
        right: 0
    }
    
    .style-3 .theme-switcher-logo-wrapper {
        display: block
    }
    
    .style-3 #theme-switcher {
        position: absolute;
        background-color: #FCFCFC;
        width: 500%;
        overflow-y: visible;
        transition: all 0.3s ease-out;
        opacity: 0;
        display: none;
        padding: 50% 0%;
        left: 0;
        height: 0;
        border-radius: 5px;
        box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.75);
        display: none
    }
    
    .style-3 #theme-switcher::after {
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
    
    .style-3 .theme-switcher-logo-1 {
        height: 30px;
        width: auto;
        position: relative;
    }
    
    .style-3 .theme-switcher-logo-wrapper active {
        background-color: black
    }
    
    .style-3 .theme-switcher-logo {
        width: 65%;
        position: relative;
        height: auto;
    }
    
    .style-3 #theme-switcher-wrapper {
        width: 100%
    }
    
    .style-3 #theme-switcher-wrapper> :not(:last-child) {
        padding-bottom: 10%;
    }
    
    .style-3 .active {
        opacity: 1 !important;
        display: block !important;
        height: auto !important;
    }
    
    .style-3 .mobile-nav-container {
        width: 100%;
        background-color: white;
        overflow: hidden;
        position: fixed;
        z-index: 9999
    }
    
    .style-3 footer {
        background-color: #000;
        color: #fff;
        border-top: 1px solid var(--grey-stuff);
        max-width: 100%;
        margin-top: 40px;
        padding: 50px 20px;
        display: grid;
    }
    
    .style-3 p {
        font-size: .9em;
        margin-bottom: 16px;
        margin-bottom: 16px;
        margin-bottom: 1rem;
        font-weight: 400;
    }
    
    .style-3 .logo-style-1 {
        height: 50px;
        width: auto;
        max-width: 100%;
    }
    
    .style-3 .category-header {
        font-weight: 800
    }
    
    .style-3 .logo-style-1-mobile {
        height: 30px;
        width: auto;
        max-width: 100%;
    }
    
    .style-3 .desktop-only {
        display: none
    }
    
    .style-3 .mobile-only {
        display: block
    }
    
    .style-3 .component-wrapper {
        margin: 0 auto;
        max-width: 1300px;
    }
    
    .style-3 .article-component {
        max-width: unset !important;
        background-color: black
    }
    
    .style-3 #home>.affix {
        max-width: 1300px;
    }
    
    .style-3 .hr-logo {
        background-color: var(--grey-stuff);
        margin-bottom: 0.5%;
    }
    
    .style-3 .hr-categories {
        margin-bottom: 0;
        margin-top: 0.5%;
        background-color: var(--grey-stuff);
    }
    
    
    /* HOME GRID */
    
    .style-3 .topper {}
    
    .style-3 .topper-headline-text {
        font-size: 40px;
    }
    
    .style-3 .topper-headline-underline {
        background-color: var(--red);
        width: 8%;
        height: 5px
    }
    
    .style-3 .list-timestamp {
        font-size: 0.9em;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        font-size: 14px;
    }
    
    .style-3 .topper-author {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        color: var(--second-grey-stuff);
        font-size: 14px;
        display: none
    }
    
    .style-3 .topper-author a {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-weight: 600;
        text-decoration: none;
        color: var(--second-grey-stuff);
        font-size: 14px;
    }
    
    .style-3 .topper-text {
        text-overflow: ellipsis;
        display: inline-block;
        color: white !important;
    }
    
    .style-3 .topper-article-title {
        color: black;
        display: inline;
        font-size: 0.8em
    }
    
    .style-3 .topper-image-wrapper {
        display: block;
        overflow: hidden;
        display: inline-block;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#b3000000', GradientType=0);
    }
    
    .style-3 .topper-image {
        width: auto;
        height: 500px;
        margin: auto;
        display: block;
        position: relative;
        z-index: -1;
        max-height: 500px;
    }
    
    .style-3 .topper-image .progressive-image-main {
        width: auto;
        height: 100%;
        max-height: 100%;
    }
    
    .style-3 .image-above-article {
        display: block;
        width: 100%;
        height: auto;
    }
    
    .style-3 .list-author {
        font-size: 0.9em;
        text-decoration: none;
        font-weight: 400
    }
    
    .style-3 .list-author a {
        text-decoration: none
    }
    
    .style-3 .article-link {
        text-decoration: none;
        color: var(--main-text-color);
    }
    
    .style-3 .horizontal-list-description {
        text-align: justify
    }
    
    .style-3 .newest-list {
        grid-column: 1 / span 2;
    }
    
    .style-3 .horizontal-list-author {
        font-size: 0.9em
    }
    
    .style-3 .horizontal-list-description {
        text-align: justify
    }
    
    
    /* ARTICLE GRID */
    
    .style-3 .article-wrapper {
        display: grid;
    }
    
    .style-3 .article-image-full {
        display: block;
        width: 100%;
        height: auto;
        min-height: 500px;
        margin: -0 0;
    }
    
    .style-3 .article-sidebar-wrapper {
        grid-column: 3;
        grid-row: 1;
        padding-left: 20px;
        display: none !important
    }
    
    .style-3 .image-credit {
        padding-top: 10px;
        color: white;
        padding-left: 32px;
    }
    
    .style-3 .article-three-columns {
        grid-column: 3 / span 3;
        grid-row: 1 / span 7;
        padding: 50px;
        padding-bottom: 0;
        background-color: white
    }
    
    .style-3 .article-image-wrapper {
        display: inline-block;
        display: block;
        max-height: 1000px;
        overflow: hidden;
        grid-column: 1 / span 2;
        padding-top: 20px
    }
    
    .style-3 .article-headline-info {
        color: var(--grey-text) !important;
        grid-column: 2;
        
    }
    
    .style-3 .show-all-button {
        font-family: 'Roboto' !important;
        width: 130px;
        height: 30px;
        margin: 30px auto;
        display: block;
        text-decoration: none
    }
    
    .style-3 .show-all-container {
        position: relative;
    }
    
    .style-3 .show-all-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        z-index: -1;
        border-top: 1px solid var(--grey-stuff);
    }
    
    .style-3 .show-all-button {
        font-family: 'Roboto' !important;
        color: #333333;
        border: 1px solid var(--grey-stuff);
        text-decoration: none;
        background-color: #ebebeb;
        border-radius: 2px;
    }
    
    .style-3 .newest-list a {
        text-decoration: none
    }
    
    .style-3 .article-text {
        font-size: 22px;
        text-align: justify;
        padding-right: 30px;
        font-weight: 400;
    }
    
    .style-3 .article-heading {
        font-family: "Fira Sans", sans-serif;
        border-bottom: var(--grey-stuff)
    }
    
    .style-3 .list-no-image-wrapper {
        display: none;
    }
    
    .horizontal-list-article-list {
        display: grid;
        grid-gap: 1.5rem;
        font-size: 0.789em;
    }
    
    .style-3 .horizontal-list-no-image-wrapper {
        display: none;
    }
    
    .style-3 .article-bottombar-wrapper {
        grid-column: 1 / span 4
    }
    
    .style-3 .footer-logo {
        float: left;
        width: 100%
    }
    
    .style-3 .footer-logo path {
        fill: white
    }
    
    .stlye-1 .footer-ul {
        display: inline-block;
    }
    
    .style-3 .footer-li a {
        text-decoration: none;
        font-weight: 500;
        text-align: center;
        color: white
    }
    
    .style-3 .footer-li:after {
        content: "\2022";
        display: inline-block;
        margin: 0 8px;
    }
    
    .style-3 .footer-li:last-child:after {
        content: "";
        margin: 0;
    }
    
    .style-3 .footer-wrapper {
        max-width: 1300px;
        margin: auto auto
    }
    
    .style-3 .footer-li {
        display: inline-block;
        vertical-align: top;
        list-style-type: none;
        text-align: center;
    }
    
    .style-3 .footer-logo-link {
        display: inline-block;
    }
    
    #nav-spacer {
        width: 100%;
        height: 200px !important;
        display: block;
    }
    
    @media (min-width: 600px) {
        .style-3 .article-wrapper {
            grid-template-columns: repeat(1, 1fr);
            grid-row: 3;
        }
    }
    
    @media (min-width: 1300px) {
        .style-3 .component-wrapper {
            max-width: 1600px;
        }
        .style-3 #home>.affix {
            max-width: 1600px;
        }
    }
    
    @media (min-width: 880px) {
        .style-3 .article-wrapper {
            grid-template-columns: repeat(5, 1fr);
        }
        .style-3 .article-body {
            grid-column: 1/ span 3;
            grid-row: 3;
            padding-right: 20px;
        }
        .style-3 .article-heading {
            padding: 0
        }
        .style-3 .list-article-wrapper {
            padding-left: 10px;
        }
        .list-article {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .style-3 .site-wrapper {
            margin: 0 auto;
        }
        .style-3 .desktop-only {
            display: block;
        }
        .style-3 .mobile-only {
            display: none;
        }
        .style-3 .topper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
        .style-3 .topper-article-wrapper {
            font-size: 150%;
        }
        .ad-container {
            background-color: red;
            width: 100%;
            height: 100%
        }
        .style-3 .topper-ad-wrapper {
            padding: 20px 12px;
            padding-top: 0
        }
        .style-3 .topper-headline {
            grid-column: 1 /span 4;
        }
        .style-3 .topper-headline-text {
            padding-left: 12px;
            width: auto;
            height: 60px;
            padding-bottom: 10px;
        }
        .style-3 .topper-image-wrapper {
            max-height: 250px;
            width: 100%;
        }
        .style-3 .topper .topper-article-wrapper {}
        .style-3 .topper-single-container {
            display: grid;
        }
        .style-3 .topper .topper-single-container {
            padding-bottom: 20px;
            position: relative;
        }
        .style-3 .topper .topper-image-wrapper {}
        .style-3 .topper> :nth-child(2) {
            .topper-image-wrapper {
                max-height: 400px;
            }
        }
        .style-3 .topper> :nth-child(n+3) .topper-article-title {}
        .style-3 .topper .topper-text {
            display: grid;
            bottom: 40px;
        }
        .style-3 .topper> :nth-child(n+3) .topper-text {}
        .style-3 .topper> :nth-child(-n+3) {
            grid-row: span 2
        }
        .style-3 .topper> :nth-child(n+4):nth-child(-n+5) {
            .topper-author-timestap-wrapper {
                display: none
            }
            .topper-article-text {
                display: none
            }
            .topper-image-wrapper {
                height: 200px;
            }
            h2 {
                padding-top: 0
            }
            .topper-single-container {
                padding-bottom: 10px
            }
            .page-views-container {
                padding: 10px 0
            }
        }
        .style-3 .topper> :nth-child(3) {
            .topper-text {
                position: absolute;
                color: white !important;
                top: 0;
                padding: 30px
            }
            h2 {
                color: white;
                grid-row: 1 / 2;
                font-size: 1.3em;
                position: relative;
                z-index: 4;
                /*height: fit-content;*/
            }
            .topper-author-timestap-wrapper {
                display: none
            }
            .topper-article-text {
                display: none;
            }
            .topper-article-title:before {
                content: "";
                display: inline-block;
                position: absolute;
                width: 40px;
                height: 33px;
                left: -15px;
                right: -15px;
                top: -5px;
                bottom: -5px;
                margin-right: 5px;
                background-color: var(--green);
                z-index: -1;
                transition: all 0.2s ease-in-out;
                padding: 4px;
            }
            .topper-article-title:hover:before {
                width: 100%;
                height: 100%;
                padding: 0;
            }
            .topper-image-wrapper {
                max-height: none;
                /* FF3.6-15 */
                background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0.7) 100%);
                /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0.7) 100%);
                /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#b3000000', GradientType=0);
                /* IE6-9 */
            }
            .topper-image {
                height: 600px;
                max-height: none
            }
            .page-views {
                display: none
            }
        }
        .style-3 .topper> :nth-child(6) {
            grid-column: 4;
            grid-row: 3 / span 2;
            .topper-image-wrapper {
                max-height: 600px;
            }
            .topper-author-timestap-wrapper {
                display: none
            }
            .topper-article-text {
                display: none
            }
            .topper-image {
                height: 500px;
                max-height: none
            }
        }
        .style-3 .topper-article-wrapper {
            padding: 0 12px;
        }
        .style-3 .topper-single-container {
            display: grid;
        }
        .style-3 .topper-article-text {
            padding-top: 15px;
            grid-row: 3;
            color: var(--grey-text);
            font-weight: 400;
            font-size: 0.6em;
        }
        .style-3 .home-bottom {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        }
        .style-3 .list-article-list {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
        .style-3 .list-article-text-wrapper {
            padding: 20px;
            font-size: 150%;
        }
        .style-3 .sidebar .list-article-text {
            background-color: white;
            box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.75);
        }
        .style-3 .list-article-wrapper {
            grid-column: 1 / span 4;
        }
        .style-3 .topper-author-timestap-wrapper {
            padding-bottom: 10px;
        }
        .style-3 .list-timestamp {
            padding-left: 10%;
            font-weight: 400
        }
        .style-3 .headline-single-article {
            font-style: normal;
            font-size: calc(0.6em * 1.250 * 1.250 * 1.250);
            font-weight: 600;
            letter-spacing: normal;
            line-height: 1.2;
            text-transform: none;
            margin-bottom: .6rem;
            grid-column: 1 / span 2;
            grid-row: 1 / span 4;
            color: white;
            padding: 80px 32px 10px 32px;
        }
        .style-3 .list-next-to-article-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(125px, auto);
            padding-bottom: 10px;
            padding-top: 10px;
            position: relative;
            overflow: hidden;
        }
        .style-3 .list-next-to-article-image-wrapper {
            display: inline-block;
            grid-column: 4;
            grid-row: 1;
            max-height: 200px;
            max-width: 200px;
            grid-row: 1;
            overflow: hidden;
        }
        .style-3 .next-to-article-image-wrapper {
            height: auto;
            width: 25%;
            margin: 0;
            margin-right: 10px;
        }
        .style-3 .next-to-article {
            width: auto;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
            position: relative;
            z-index: -1;
        }
        .style-3 .next-to-article {
            .progressive-image-main {
                width: auto;
                height: 100%;
                margin: auto;
                position: absolute;
                left: 0;
                right: 0;
            }
        }
        .style-3 .list-text {
            display: inline-block;
            grid-column: 1/ span 3;
            padding: 20px;
            padding-top: 0
        }
        .style-3 .list-description {
            font-weight: 400;
            color: var(--grey-text);
            font-size: 1em;
            padding-bottom: 15px;
        }
        .style-3 .list-next-to-article-container .list-text {
            padding-left: 20px;
            z-index: 100;
            bottom: 20px;
        }
        .style-3 .list-title {
            padding-bottom: 20px
        }
        .style-3 .twitter-icon-container-article>.page-views {}
        .style-3 .article-heading-filler {
            grid-column: 1;
            grid-column: 1;
            padding-left: 32px
        }
        .style-3 .article-heading-filler .page-views-text {
            display: table;
            white-space: pre-wrap;
            /* css-3 */
            white-space: -moz-pre-wrap;
            /* Mozilla, since 1999 */
            white-space: -pre-wrap;
            /* Opera 4-6 */
            white-space: -o-pre-wrap;
            /* Opera 7 */
            word-wrap: break-word;
            /* Internet Explorer 5.5+ */
            position: absolute;
            top: 0;
        }
        .style-3 .article-heading-filler .page-views-number {
            font-size: 4em;
        }
        .style-3 .article-heading-filler .page-views-container {
            position: relative;
            padding: 10px 0
        }
    }
    
    @media only screen and (max-width: 880px) {
        .style-3 h1 {
            font-size: 1.5em;
        }
        .style-3 hr {
            background-color: #000;
            height: 0;
            margin-bottom: 0;
        }
        .style-3 #nav-spacer {
            width: 100%;
            height: 80px!important;
            display: block;
        }
        .style-3 .topper {
            display: grid;
            grid-template-columns: 100%;
        }
        .style-3 .list-article-list {
            display: grid;
            grid-template-columns: 100%;
            grid-auto-rows: minmax(125px, auto);
        }
        .style-3 .topper-article-wrapper {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .style-3 .topper-single-container {
            display: grid;
            position: relative;
        }
        .style-3 .topper-article-title {
            bottom: 20px;
        }
        .style-3 .topper-image-wrapper {
            grid-column: 1;
            grid-row: 1;
        }
        .style-3 .topper-text {
            grid-column: 1;
            grid-row: 1;
        }
        .style-3 .topper {
            grid-row: 1;
            padding-bottom: 20px;
            border-bottom: none;
        }
        .style-3 .topper-text {
            padding: 10px 25px 0 25px;
            position: relative;
        }
        .style-3 .topper .topper-article-title {
            padding-right: 10px;
        }
        .style-3 .topper> :nth-child(n+3) .topper-image-wrapper {
            display: block;
            margin: 20px;
            padding-bottom: 10px;
            grid-row: 1;
            grid-column: 1;
        }
        .style-3 .topper-headline-text {
            width: auto;
            height: 60px;
            padding-bottom: 20px;
            padding-left: 20px;
            max-width: 300px;
        }
        .style-3 .article-wrapper {
            grid-template-columns: 1fr;
        }
        .style-3 .headline-single-article {
            padding-bottom: 20px;
        }
        .style-3 .article-heading-filler {
            grid-column: 1;
        }
        .style-3 .article-three-columns {
            grid-template-columns: repeat(1, 1fr)
        }
        .style-3 .article-image-wrapper {
            padding-top: 20px;
        }
        .style-3 .list-next-to-article-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: minmax(125px, auto);
            overflow: hidden;
        }
        .style-3 .list-next-to-article-image-wrapper {
            display: inline-block;
            overflow: hidden;
        }
        .style-3 .next-to-article-image-wrapper {
            height: auto;
            width: 25%;
            margin: 0;
            margin-right: 10px;
        }
        .style-3 .next-to-article {
            display: block;
            width: 100%;
            height: auto;
        }
        .style-3 .list-text {
            grid-column: auto;
            padding: 18px 18px 0 18px;
        }
        .list-article-text {
            padding-bottom: 10px;
            padding-top: 10px;
        }
        .style-3 .article-heading-filler {
            grid-column: 2;
            grid-row: 2;
            margin-bottom: 0.6rem;
        }
        .style-3 .article-author {
            margin-bottom: 10px;
            font-weight: 400;
        }
        .style-3 .article-headline-info {
            padding-left: 0;
        }
        .style-3 .twitter-icon-container-article {
            padding-top: 0;
            padding-bottom: 10px;
        }
        .style-3 h1 {
            padding-left: 0;
        }
        .style-3 .article-text {
            padding-left: 0;
            font-weight: 400;
        }
        .style-3 .headline-single-article {
            grid-column: 1 / span 2;
        }
        .style-3 .list-article-wrapper {
            padding-top: 10px;
        }
        .style-3 .article-headline-info {}
    }
    
    @media (max-width: 1300px) and (min-width: 880px) {
        .style-3 .home {
            padding: 10px;
        }
        .style-3 .category {
            padding: 10px;
        }
    }
</style>
