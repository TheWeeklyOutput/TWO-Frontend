<template>
    
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:500');
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,800');
    @import url('https://fonts.googleapis.com/css?family=Merriweather');
     :root {
        --main-text-color: black;
        --grey-stuff: #e3e3e3;
        --second-grey-stuff: #333333;
        --green: #34DB93;
        --grey-text: #9F9F9F
    }
    
    .style-3 {
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
        * ::selection {
            background: var(--green);
            color: white
        }
        * ::-moz-selection {
            background: var(--green);
            color: white
        }
        body {
            font-size: 1em;
            background-color: white;
            min-height: 100%
        }
        .overflow-hidden {
            overflow: hidden;
            height: 100vh;
        }
        .loading-overlay {
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
        h1 {
            font-size: calc(1em * 1.250 * 1.250 * 1.250);
            font-weight: 600;
            margin-bottom: 9.6px;
            margin-bottom: 9.6px;
            margin-bottom: .6rem;
            padding-left: 12px;
        }
        h2 {
            font-size: calc(1em * 1.250 * 1.250);
            font-weight: 800;
            font-family: "Fira Sans", sans-serif;
            padding-bottom: 10px
        }
        h3 {
            font-size: .8125em;
            font-weight: 400;
            font-family: "Fira Sans", sans-serif;
        }
        hr {
            background-color: #000;
            height: 0;
            margin-bottom: 18px
        }
        .nav-categories {
            text-align: center;
            width: 100%;
            padding-top: 1.2%;
            padding-bottom: 1.2%;
            border-top: 3px solid var(--green);
        }
        #nav-absolute {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            background-color: white;
        }
        #navbar {}
        .nav-categories li {
            display: inline-block;
            vertical-align: top;
            padding: 0.1% 1% 0.1% 1%;
        }
        .nav-categories li:nth-child(n+2) {}
        .router-link-active {
            border-bottom: 2px solid white;
        }
        .nav-categories li a {
            font-family: "Fira Sans", sans-serif !important;
            font-size: 1.2em;
            text-decoration: none;
            font-weight: 800;
            letter-spacing: -0.2px;
            color: #333333
        }
        .affix ul {}
        .desktop-nav-container>.vue-affix {
            background-color: black;
            color: white;
            z-index: 1030;
            width: 100%;
            right: 0;
            left: 0;
            top: 0 !important
        }
        .vue-affix li a {
            color: white
        }
        .vue-affix li {
            fill: white
        }
        #nav-logo-link {
            border-bottom: 0
        }
        #settings-arrow {
            position: absolute;
            right: 0
        }
        .theme-switcher-logo-wrapper {
            display: block
        }
        #theme-switcher {
            position: absolute;
            background-color: black;
            width: 500%;
            overflow-y: visible;
            transition: all 0.3s ease-out;
            padding: 50% 0%;
            left: 0;
            /* border-radius: 5px; */
            box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.75);
            overflow: hidden;
            border: 3px solid var(--green);
        }
        .active {
            opacity: 1 !important;
            display: block !important;
            height: auto !important;
        }
        #theme-switcher::after {}
        .theme-switcher-logo-1 {
            height: 30px;
            width: auto;
            position: relative;
        }
        .theme-switcher-logo-wrapper active {
            background-color: black
        }
        .theme-switcher-logo {
            width: 65%;
            position: relative;
            height: auto;
        }
        #theme-switcher-wrapper {
            width: 100%
        }
        #theme-switcher-wrapper> :not(:last-child) {
            padding-bottom: 10%;
        }
        .mobile-nav-container {
            width: 100%;
            background-color: white;
            overflow: hidden;
            position: fixed;
            z-index: 9999
        }
        footer {
            background-color: #000;
            color: #fff;
            border-top: 1px solid var(--grey-stuff);
            max-width: 100%;
            margin-top: 40px;
            padding: 50px 20px;
            display: grid;
        }
        a {
            text-decoration: none
        }
        p {
            font-size: .8em;
            margin-bottom: 16px;
            margin-bottom: 16px;
            margin-bottom: 1rem;
            font-weight: 400;
            font-family: 'Merriweather', serif;
            line-height: 1.4
        }
        .logo-style-1 {
            height: 150px;
            width: auto;
            max-width: 100%;
        }
        .category-header {
            font-weight: 800
        }
        .logo-style-1-mobile {
            height: 30px;
            width: auto;
            max-width: 100%;
        }
        .desktop-only {
            display: none
        }
        .mobile-only {
            display: block
        }
        .component-wrapper {
            margin: 0 auto;
            max-width: 1300px;
        }
        .article-component {
            max-width: unset !important;
            background-color: black
        }
        #home>.affix {
            max-width: 1300px;
        }
        .hr-logo {
            background-color: var(--grey-stuff);
            margin-bottom: 0.5%;
        }
        .hr-categories {
            margin-bottom: 0;
            margin-top: 0.5%;
            background-color: var(--grey-stuff);
            display: none
        }
        /* HOME GRID */
        .topper {}
        .topper-headline-text {
            font-size: 40px;
        }
        .topper-headline-underline {
            background-color: var(--red);
            width: 8%;
            height: 5px
        }
        .list-timestamp {
            font-size: 0.9em;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 600;
            font-size: 14px;
        }
        .topper-author {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 600;
            color: var(--second-grey-stuff);
            font-size: 14px;
            display: none
        }
        .topper-author a {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 600;
            text-decoration: none;
            color: var(--second-grey-stuff);
            font-size: 14px;
        }
        .topper-text {
            text-overflow: ellipsis;
            display: inline-block;
            color: white !important;
        }
        .topper-article-title {
            color: black;
            display: inline;
            font-size: 0.8em
        }
        .topper-image-wrapper {
            display: block;
            overflow: hidden;
            display: inline-block;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#b3000000', GradientType=0);
        }
        .topper-image {
            width: auto;
            height: 500px;
            margin: auto;
            display: block;
            position: relative;
            z-index: -1;
            max-height: 500px;
        }
        .topper-image .progressive-image-main {
            width: auto;
            height: 100%;
            max-height: 100%;
        }
        .image-above-article {
            display: block;
            width: 100%;
            height: auto;
        }
        .list-author {
            font-size: 0.9em;
            text-decoration: none;
            font-weight: 400
        }
        .list-author a {
            text-decoration: none
        }
        .article-link {
            text-decoration: none;
            color: var(--main-text-color);
        }
        .horizontal-list-description {
            text-align: justify
        }
        .newest-list {
            grid-column: 1 / span 2;
        }
        .horizontal-list-author {
            font-size: 0.9em
        }
        .horizontal-list-description {
            text-align: justify
        }
        /* ARTICLE GRID */
        .article-wrapper {
            display: grid;
        }
        .article-author {
            margin-bottom: 10px;
            font-weight: 400;
            font-family: "Fira Sans", sans-serif;
        }
        .show-all-button {
            font-family: 'Roboto' !important;
            width: 130px;
            height: 30px;
            margin: 30px auto;
            display: block;
            text-decoration: none
        }
        .show-all-container {
            position: relative;
        }
        .show-all-bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50%;
            z-index: -1;
            border-top: 1px solid var(--grey-stuff);
        }
        .show-all-button {
            font-family: 'Roboto' !important;
            color: #333333;
            border: 1px solid var(--grey-stuff);
            text-decoration: none;
            background-color: #ebebeb;
            border-radius: 2px;
        }
        .newest-list a {
            text-decoration: none
        }
        .article-text>article {}
        .article-heading {
            font-family: "Fira Sans", sans-serif;
            border-bottom: var(--grey-stuff)
        }
        .list-no-image-wrapper {
            display: none;
        }
        .horizontal-list-article-list {
            display: grid;
            grid-gap: 1.5rem;
            font-size: 0.789em;
        }
        .horizontal-list-no-image-wrapper {
            display: none;
        }
        .article-bottombar-wrapper {
            grid-column: 1 / span 4;
            padding: 10px;
        }
        .footer-logo {
            float: left;
            width: 100%
        }
        .footer-logo path {
            fill: white
        }
        .stlye-1 .footer-ul {
            display: inline-block;
        }
        .footer-li a {
            text-decoration: none;
            font-weight: 800;
            text-align: center;
            color: white
        }
        .footer-li:after {
            content: "\2022";
            display: inline-block;
            margin: 0 8px;
        }
        .footer-li:last-child:after {
            content: "";
            margin: 0;
        }
        .footer-wrapper {
            max-width: 1300px;
            margin: auto auto
        }
        .footer-li {
            display: inline-block;
            vertical-align: top;
            list-style-type: none;
            text-align: center;
        }
        .footer-logo-link {
            display: inline-block;
        }
        #nav-spacer {
            width: 100%;
            height: 340px !important;
            display: block;
        }
        .facebook-icon {
            background-color: white;
            -moz-border-radius: 6px;
            border-radius: 300px;
            background-size: 70%;
        }
        .twitter-icon {
            background-color: white;
            -moz-border-radius: 6px;
            border-radius: 300px;
            background-size: 70%;
        }
        @media (min-width: 600px) {
            .article-wrapper {
                grid-template-columns: repeat(1, 1fr);
                grid-row: 3;
            }
        }
        @media (min-width: 1300px) {
            .component-wrapper {
                max-width: 1600px;
            }
            #home>.affix {
                max-width: 1600px;
            }
        }
        @media (min-width: 880px) {
            .category {
                padding: 4%
            }
            #home {
                padding-top: 4%
            }
            .article-wrapper {
                grid-template-columns: repeat(5, 1fr);
                height: fit-content;
            }
            .article-body {
                grid-column: 1/ span 3;
                grid-row: 3;
                padding-right: 20px;
            }
            .article-heading {
                padding: 0
            }
            .social-sharing-wrapper {
                grid-column: span 2
            }
            .list-article-wrapper {
                padding-left: 10px;
            }
            .list-article {
                padding-top: 10px;
                padding-bottom: 10px;
            }
            .site-wrapper {
                margin: 0 auto;
            }
            .desktop-only {
                display: block;
            }
            .mobile-only {
                display: none;
            }
            .topper {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
            }
            .topper-article-wrapper {
                font-size: 150%;
            }
            .ad-container {
                background-color: red;
                width: 100%;
                height: 100%
            }
            .topper-ad-wrapper {
                padding: 20px 12px;
                padding-top: 0
            }
            .topper-headline {
                grid-column: 1 /span 4;
            }
            .topper-headline-text {
                padding-left: 12px;
                width: auto;
                height: 60px;
                padding-bottom: 10px;
            }
            .topper-image-wrapper {
                width: 100%;
            }
            .topper .topper-article-wrapper {}
            .topper-single-container {
                display: grid;
            }
            .topper .topper-single-container {
                padding-bottom: 20px;
                position: relative;
            }
            .topper .topper-image-wrapper {}
            .topper> :nth-child(2) {
                .topper-image-wrapper {
                    max-height: 400px;
                }
            }
            .topper> :nth-child(n+3) .topper-article-title {}
            .topper .topper-text {
                display: grid;
                bottom: 40px;
            }
            .topper> :nth-child(n+3) .topper-text {}
            .topper> :nth-child(-n+3) {
                grid-row: span 2
            }
            .topper> :nth-child(n+4):nth-child(-n+5) {
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
            .topper> :nth-child(3) {
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
                .topper-text:hover .topper-article-title:before {
                    width: 100%;
                    height: 100%;
                    top: -10px;
                    left: -10px;
                    bottom: 0;
                    padding: 10px;
                }
                .topper-article-text {
                    display: block;
                    opacity: 0;
                    position: absolute;
                    bottom: 50px;
                    padding: 30px;
                    z-index: 100;
                    transform: translate(0, 30px);
                    transition: all 0.2s ease-in-out;
                    transition-delay: 0.2s;
                    color: white;
                    line-height: 1.2
                }
                .topper-text:hover .topper-article-text {
                    transform: translate(0, 0);
                    opacity: 1;
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
            .topper> :nth-child(6) {
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
            .topper-article-wrapper {
                padding: 0 12px;
            }
            .topper-single-container {
                display: grid;
            }
            .topper-article-text {
                padding-top: 15px;
                grid-row: 3;
                color: var(--grey-text);
                font-weight: 400;
                font-size: 0.6em;
            }
            .home-bottom {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
            }
            .list-article-list {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
            }
            .list-article-text-wrapper {
                padding: 20px;
                font-size: 150%;
            }
            .sidebar .list-article-text {
                background-color: white;
                box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.75);
            }
            .list-article-wrapper {
                grid-column: 1 / span 4;
            }
            .topper-author-timestap-wrapper {
                padding-bottom: 10px;
            }
            .list-timestamp {
                padding-left: 10%;
                font-weight: 400
            }
            .headline-single-article {
                font-style: normal;
                font-size: calc(0.6em * 1.250 * 1.250 * 1.250);
                font-weight: 600;
                letter-spacing: normal;
                line-height: 1.2;
                text-transform: none;
                margin-bottom: .6rem;
                grid-column: 1 / span 2;
                grid-row: 1 / span 3;
                color: white;
                padding: 80px 32px 10px 32px;
            }
            .list-next-to-article-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-auto-rows: minmax(125px, auto);
                padding-bottom: 10px;
                padding-top: 10px;
                position: relative;
                overflow: hidden;
            }
            .list-next-to-article-image-wrapper {
                display: inline-block;
                grid-column: 4;
                grid-row: 1;
                max-height: 200px;
                max-width: 200px;
                grid-row: 1;
                overflow: hidden;
            }
            .next-to-article-image-wrapper {
                height: auto;
                width: 25%;
                margin: 0;
                margin-right: 10px;
            }
            .next-to-article {
                width: auto;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
                position: relative;
                z-index: -1;
            }
            .next-to-article {
                .progressive-image-main {
                    width: auto;
                    height: 100%;
                    margin: auto;
                    position: absolute;
                    left: 0;
                    right: 0;
                }
            }
            .list-text {
                display: inline-block;
                grid-column: 1/ span 3;
                padding: 20px;
                padding-top: 0
            }
            .list-description {
                font-weight: 400;
                color: var(--grey-text);
                font-size: 1em;
                padding-bottom: 15px;
            }
            .list-next-to-article-container .list-text {
                padding-left: 20px;
                z-index: 100;
                bottom: 20px;
            }
            .list-title {
                padding-bottom: 20px
            }
            .twitter-icon-container-article>.page-views {}
            .article-heading-filler {
                grid-column: 1;
                grid-column: 1;
                padding-left: 32px
            }
            .article-heading-filler .page-views-text {
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
            .article-heading-filler .page-views-number {
                font-size: 4em;
            }
            .article-heading-filler .page-views-container {
                position: relative;
                padding: 10px 0
            }
            .article-sidebar-wrapper {
                grid-column: 3;
                grid-row: 1;
                padding-left: 20px;
                display: none !important
            }
            .image-credit {
                padding-top: 10px;
                color: white;
                padding-left: 32px;
            }
            .article-three-columns {
                grid-column: 3 / span 3;
                grid-row: 1 / span 7;
                padding: 50px;
                background-color: white;
                height: fit-content;
                min-height: 100vh;
            }
            .article-image-wrapper {
                display: inline-block;
                display: block;
                max-height: 1000px;
                overflow: hidden;
                grid-column: 1 / span 2;
                padding-top: 20px
            }
            .article-text {
                font-size: 22px;
                text-align: justify;
                padding-right: 30px;
                font-weight: 400;
                position: relative;
            }
            .article-image-full {
                display: block;
                width: 100%;
                height: auto;
                min-height: 500px;
                margin: -0 0;
            }
            .article-headline-info {
                color: var(--grey-text) !important;
                grid-column: 2;
            }
        }
        @media only screen and (max-width: 880px) {
            h1 {
                font-size: 1.5em;
            }
            hr {
                background-color: #000;
                height: 0;
                margin-bottom: 0;
            }
            #nav-spacer {
                width: 100%;
                height: 80px!important;
                display: block;
            }
            .topper {
                display: grid;
                grid-template-columns: 100%;
            }
            .list-article-list {
                display: grid;
                grid-template-columns: 100%;
                grid-auto-rows: minmax(125px, auto);
            }
            .topper-article-wrapper {
                padding-top: 10px;
                padding-bottom: 10px;
            }
            .topper-single-container {
                display: grid;
                position: relative;
            }
            .topper-article-title {}
            .topper-image-wrapper {
                grid-column: 1;
                grid-row: 1;
            }
            .topper-text {
                grid-column: 1;
                grid-row: 1;
            }
            .topper {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
            .topper-article-wrapper {
                font-size: 150%;
            }
            .ad-container {
                background-color: red;
                width: 100%;
                height: 100%
            }
            .topper-ad-wrapper {
                padding: 20px 12px;
                padding-top: 0
            }
            .topper-headline {
                display: none
            }
            .topper-headline-text {
                padding-left: 12px;
                width: auto;
                height: 60px;
                padding-bottom: 10px;
            }
            .topper-image-wrapper {
                max-height: 250px;
                grid-row: 1;
                width: 100%;
            }
            .topper .topper-article-wrapper {}
            .topper-single-container {
                display: grid;
            }
            .topper .topper-single-container {
                padding-bottom: 20px;
                position: relative;
                height: 100%
            }
            .topper-image {
                height: auto;
            }
            .topper .topper-image-wrapper {}
            .topper> :nth-child(2) {
                .topper-image-wrapper {
                    max-height: 200px;
                }
                .topper-text {
                    grid-row: auto;
                    font-size: 0.7em
                }
                .page-views {
                    font-size: 0.5em;
                }
                .page-views-container {
                    padding: 10px 0
                }
                .topper-article-text {
                    display: none
                }
            }
            .topper> :nth-child(n+3) .topper-article-title {}
            .topper .topper-text {
                display: grid;
                bottom: 40px;
            }
            .topper> :nth-child(n+3) .topper-text {}
            .topper> :nth-child(-n+3) {
                grid-row: span 2
            }
            .topper> :nth-child(3) {
                .topper-text {
                    color: white !important;
                    top: 0;
                    padding: 10px
                }
                h2 {
                    color: white;
                    grid-row: 1 / 2;
                    font-size: 0.9em;
                    position: relative;
                    z-index: 4;
                    /*height: fit-content;*/
                }
                .topper-author-timestap-wrapper {
                    display: none
                }
                .topper-article-text {
                    display: none
                }
                .topper-article-title:before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    width: 40px;
                    height: 25px;
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
                    top: -10px;
                    left: -10px;
                    bottom: 0;
                    padding: 10px;
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
                    height: 300px;
                    max-height: none
                }
                .page-views {
                    display: none
                }
            }
            .topper> :nth-child(4) {
                grid-column: 1 / span 2;
                .topper-text {
                    color: white !important;
                    top: 0;
                    padding: 50px
                }
                h2 {
                    color: white;
                    grid-row: 1 / 2;
                    font-size: 0.9em;
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
                    height: 25px;
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
                    top: -10px;
                    left: -10px;
                    bottom: 0;
                    padding: 10px;
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
                    height: 300px;
                    max-height: none
                }
                .page-views {
                    display: none
                }
            }
            .topper> :nth-child(5) {
                .topper-image-wrapper {
                    max-height: 200px;
                }
                .topper-text {
                    grid-row: auto;
                    font-size: 0.7em
                }
                .page-views {
                    font-size: 0.5em;
                }
                .page-views-container {
                    padding: 10px 0
                }
                .topper-article-text {
                    display: none
                }
            }
            .topper> :nth-child(6) {
                .topper-image-wrapper {
                    max-height: 200px;
                }
                .topper-text {
                    grid-row: auto;
                    font-size: 0.7em
                }
                .page-views {
                    font-size: 0.5em;
                }
                .page-views-container {
                    padding: 10px 0
                }
                .topper-article-text {
                    display: none
                }
            }
            .topper-article-wrapper {
                padding: 0 10px;
            }
            .topper-single-container {
                display: grid;
            }
            .topper-article-text {
                padding-top: 15px;
                grid-row: 3;
                color: var(--grey-text);
                font-weight: 400;
                font-size: 0.6em;
            }
            .article-wrapper {
                grid-template-columns: 1fr;
            }
            .headline-single-article {
                z-index: 2;
                padding: 32px
            }
            .article-heading-filler {
                grid-column: 1;
            }
            .article-three-columns {
                grid-template-columns: repeat(1, 1fr);
                background-color: white;
                grid-column: 1;
                padding: 0;
                font-size: 1.2em;
            }
            .article-image-wrapper {
                grid-row: 1;
                max-height: 300px;
                overflow: hidden;
            }
            .headline-single-article {
                color: white
            }
            .article-heading {
                position: relative;
            }
            .article-heading:before {
                content: "";
                display: inline-block;
                position: absolute;
                width: 40px;
                height: 30px;
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
            .list-next-to-article-container {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-auto-rows: minmax(125px, auto);
                overflow: hidden;
            }
            .list-next-to-article-image-wrapper {
                display: inline-block;
                overflow: hidden;
            }
            .next-to-article-image-wrapper {
                height: auto;
                width: 25%;
                margin: 0;
                margin-right: 10px;
            }
            .next-to-article {
                display: block;
                width: 100%;
                height: auto;
            }
            .list-text {
                grid-column: auto;
                padding: 18px 18px 0 18px;
            }
            .list-article-text {
                padding-bottom: 10px;
                padding-top: 10px;
            }
            .article-heading-filler {
                grid-column: 2;
                grid-row: 2;
                position: relative;
                z-index: 100;
            }
            .article-headline-info {
                padding-left: 0;
                color: white;
                display: none;
            }
            .twitter-icon-container-article {
                padding-top: 0;
                padding-bottom: 10px;
            }
            h1 {
                padding-left: 0;
            }
            .article-text {
                padding: 20px;
                font-weight: 400;
            }
            .social-sharing-wrapper {
                display: none;
            }
            .headline-single-article {
                grid-column: 1 / span 2;
            }
            .list-article-wrapper {
                padding-top: 10px;
            }
            .article-wrapper>* {
                grid-column: 1
            }
            .headline-single-article {
                grid-row: 1
            }
            .article-component .page-views-container {
                position: absolute;
                bottom: 0;
                padding: 20px;
                left: 20px
            }
        }
        @media (max-width: 1300px) and (min-width: 880px) {
            .home {
                padding: 10px;
            }
            .category {
                padding: 10px;
            }
        }
    }
</style>
