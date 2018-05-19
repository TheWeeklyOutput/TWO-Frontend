<template>
    
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:500');
        :root {
        --main-text-color: black;
        --grey-stuff: #e3e3e3;
        --second-grey-stuff: #333333;
        --bg-color: #f8f6f7;
        --red: #ed2c24;
        --green: #34DB93;
        --second-grey-stuff: #333333;
        --bg-color: #F9F9F9;
        --grey-text: #9F9F9F

    }

    .style-1 {
        * {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            border: 0;
            line-height: 1.2;
            letter-spacing: normal;
            word-wrap: break-word;
            text-decoration: none;
        }
        body {
            font-size: 1em;
            background-color: var(--bg-color);
            min-height: 100%
        }
        a {
            color: black
        }
        .placeholder {
            width: 100%;
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
            margin-bottom: .6rem;
            padding-left: 12px;
        }
        h2 {
            font-size: calc(1em * 1.250 * 1.250);
            font-weight: 600;
            font-family: 'Georgia', serif;
            padding-bottom: 10px
        }
        h3 {
            font-size: .8125em;
            font-family: 'Georgia', serif;
            font-weight: 400
        }
        hr {
            background-color: #000;
            height: 2px;
            margin-bottom: 18px
        }
        .nav-categories {
            text-align: center;
            width: 100%;
            padding-top: 1%;
            padding-bottom: 1%;
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
        .nav-categories li:nth-child(n+2) {
            border-left: 2px solid var(--grey-stuff);
        }
        .router-link-active {
            border-bottom: 2px solid var(--second-grey-stuff);
        }
        #router-link {
            padding-top: 2%
        }
        .nav-categories li a {
            font-family: 'Roboto' !important;
            text-decoration: none;
            font-weight: 500;
            letter-spacing: -0.2px;
            color: #333333
        }
        .desktop-nav-container>.vue-affix {
            background-color: rgba(255, 255, 255, 1);
            z-index: 1030;
            width: 100%;
            right: 0;
            left: 0;
            top: 0 !important
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
        .theme-switcher-logo-wrapper {
            display: block
        }
        #theme-switcher {
            position: absolute;
            background-color: #FCFCFC;
            width: 500%;
            overflow-y: visible;
            transition: all 0.3s ease-out;
            padding: 50% 0%;
            left: 0;
            border-radius: 5px;
            box-shadow: 0px 0px 8px -4px rgba(0, 0, 0, 0.75);
        }
        #theme-switcher::after {
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
        .active {
            opacity: 1 !important;
            display: block !important;
            height: auto !important;
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
        p {
            font-size: 1.2em;
            margin-bottom: 1em;
            font-family: 'Helvetica', 'sans-serif';
            font-weight: 300;
            line-height: 1.6
        }
        article:first-child:first-letter {
            font-style: normal;
            font-weight: normal;
            line-height: 0.8;
            font-size: 3.6em;
            display: block;
            float: left;
            margin: 0 .1em -.2em 0;
        }
        .logo-style-1-mobile {
            height: 30px;
            width: auto;
            max-width: 100%;
        }
        .logo-style-1 {
            height: 50px;
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
            max-width: 1000px;
        }
        #home>.affix {
            max-width: 1000px;
        }
        .hr-logo {
            background-color: var(--grey-stuff);
            margin-bottom: 0.5%;
        }
        .hr-categories {
            margin-bottom: 0;
            margin-top: 0.5%;
            background-color: var(--grey-stuff);
        }
        /* HOME GRID */
        .topper {
            padding-bottom: 50px
        }
        .topper-headline-text {
            width: 100%;
            height: auto;
        }
        .list-timestamp {
            font-size: 0.9em;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 600;
            color: var(--second-grey-stuff);
            font-size: 14px;
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
        .topper-image-wrapper {
            display: block;
            height: 500px;
            width: 100%;
            max-height: 300px;
            overflow: hidden;
        }
        .topper-image {
            height: 100%;
            margin: auto;
            display: block;
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
        .horizontal-list-description {
            text-align: justify
        }
        .newest-list {
            grid-column: 1 / span 3;
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
            margin: 16px 0 0;
            padding: 16px 16px 0;
            border-left: 2px solid var(--grey-stuff)
        }
        .article-image-full {
            display: block;
            width: 100%;
            height: auto;
            margin: -0 0;
        }
        .article-sidebar-wrapper {
            padding-left: 20px;
            border-left: 1px solid var(--grey-stuff);
        }
        .article-image-wrapper {
            display: inline-block;
            margin-bottom: 32px;
            grid-column: 1 / span 4;
            display: block;
            max-height: 1000px;
            overflow: hidden;
        }
        .article-headline-info {
            grid-column: 1 / span 2;
            grid-row: 2 / auto;
            padding-left: 32px;
            font-family: 'Helvetica', sans-serif;
            font-weight: 400;
            padding-top: 10px;
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
        .article-text {
            font-size: 14px;
            text-align: justify;
            grid-column: 1 / span 2;
            padding-right: 20px;
            padding-left: 20px;
        }
        .article-heading {
            font-family: 'Georgia', 'serif';
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
            grid-column: 1 / span 4
        }
        .footer-logo {
            float: left;
            width: 300px
        }
        .footer-logo path {
            fill: white
        }
        .stlye-1 .footer-ul {
            display: inline-block;
        }
        .footer-li a {
            text-decoration: none;
            font-weight: 500;
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
        @media (min-width: 600px) {
            .article-wrapper {
                grid-template-columns: repeat(1, 1fr);
                margin: 16px auto 0;
                padding: 16px 16px 0;
                grid-row: 3
            }
        }
        @media (min-width: 1300px) {
            .component-wrapper {
                max-width: 1200px;
            }
            #home>.affix {
                max-width: 1200px;
            }
        }
        @media (min-width: 880px) {
            .article-three-columns {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-column: 1 / span 4;
            }
            #nav-spacer {
                width: 100%;
                height: 200px!important;
                display: block;
            }
            .article-wrapper {
                grid-template-columns: repeat(4, 1fr);
            }
            .article-body {
                grid-column: 1/ span 3;
                grid-row: 3;
                padding-right: 20px;
            }
            .social-sharing-wrapper {
                grid-column: span 2;
                padding: 10px;
            }
        }
        @media only screen and (max-width: 880px) {
            h1 {
                font-size: 1.5em
            }
            hr {
                background-color: #000;
                height: 0px;
                margin-bottom: 0
            }
            #nav-spacer {
                width: 100%;
                height: 60px!important;
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
                border-bottom: 1px solid var(--grey-stuff);
            }
            .topper> :nth-child(2) {
                grid-row: 1;
                padding-bottom: 20px;
                border-bottom: none
            }
            .topper-text {
                padding: 10px 25px 0 25px;
            }
            .topper> :nth-child(2) .topper-article-title {
                font-size: 2em;
            }
            .topper> :nth-child(n+3) .topper-image-wrapper {
                display: block;
                padding-bottom: 10px
            }
            .topper-headline-text {
                width: auto;
                height: 60px;
                padding-bottom: 20px;
                padding-left: 20px;
                max-width: 300px
            }
            .article-wrapper {
                grid-template-columns: 1fr
            }
            .list-next-to-article-container {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-auto-rows: minmax(125px, auto);
                border-top: 1px solid var(--grey-stuff);
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
                grid-row: 3;
                text-align: left;
                margin-bottom: 0.6rem;
            }
            .article-author {
                margin-bottom: 10px;
            }
            .article-headline-info {
                padding-left: 0;
                grid-column: auto
            }
            .social-sharing-wrapper {
                grid-column: 1;
                padding-bottom: 10px
            }
            .twitter-icon-container-article {
                padding-top: 0;
            }
            h1 {
                padding-left: 0;
                margin-bottom: 30px;
            }
            .article-text {
                padding-left: 0
            }
            .headline-single-article {
                grid-column: 1 / span 2
            }
            .list-article-wrapper {
                padding-top: 10px
            }
        }
        @media (min-width: 880px) {
            .list-article-wrapper {
                padding-left: 10px
            }
            .list-article {
                padding-top: 10px;
                padding-bottom: 10px;
            }
            .site-wrapper {
                margin: 0 auto;
                border-top: 0px solid var(--grey-stuff);
                border-right: 2px solid var(--grey-stuff);
                border-bottom: 0px solid var(--grey-stuff);
                border-left: 2px solid var(--grey-stuff);
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
            .topper-headline {
                grid-column: 1 /span 4;
            }
            .topper-headline-text {
                padding-left: 12px;
                width: auto;
                height: 60px;
                padding-bottom: 10px;
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
            .topper> :nth-child(6) {
                grid-column: 1 / span 4
            }
            .topper> :nth-child(n+3) .topper-article-title {
                font-size: 1em;
                padding-top: 20px
            }

            .topper> :nth-child(4) {
                font-size: 1em;
            }
            .topper> :nth-child(5) {
                font-size: 1em;
            }

            .topper> :nth-child(2) .topper-text {
                grid-column: 1 / span 2;
                grid-row: 1;
                border-right: 1px solid var(--grey-stuff);
                padding-right: 12px;
            }
            .topper> :nth-child(3) {
                grid-column: 1 / span 2;
            }
            .topper-article-wrapper {
                padding: 20px 12px;
                border-right: 1px solid var(--grey-stuff);
            }
            .topper-single-container {
                display: grid
            }
            .topper-article-text {
                padding-top: 10px
            }
            .home-bottom {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
            }
            .twitter-sidebar {
                border-left: 1px solid var(--grey-stuff);
            }
            .list-article-list {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                padding-left: 12px;
                padding-right: 12px;
            }
            .list-article-text-wrapper {
                padding: 20px;
                font-size: 150%;
            }
            .list-article-wrapper {
                grid-column: 1 / span 4;
            }
            .topper-author-timestap-wrapper {
                padding-bottom: 10px
            }
            .list-timestamp {
                padding-left: 2%
            }
            .headline-single-article {
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
            .list-next-to-article-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-auto-rows: minmax(125px, auto);
                border-top: 0px solid var(--grey-stuff);
                padding-bottom: 10px;
                padding-top: 10px
            }
            .list-next-to-article-image-wrapper {
                display: inline-block;
                grid-column: 4;
                grid-row: 1;
                max-height: 150px;
                overflow: hidden;
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
            .list-text {
                display: inline-block;
                grid-column: 1/ span 3;
            }
            .list-description {
                padding-bottom: 10px;
            }
            .list-next-to-article-container .list-text {
                padding-right: 20px
            }
            .twitter-icon-container-article {
                justify-content: center;
                height: 100%;
                padding-top: 0;
                margin-top: -10px;
                white-space: nowrap
            }
            .twitter-icon-container-article>.twitter-shares {
                width: auto
            }
        }
        @media (max-width: 1300px) and (min-width: 880px) {
            .home {
                padding: 10px
            }
            .category {
                padding: 10px
            }
        }
    }
</style>
