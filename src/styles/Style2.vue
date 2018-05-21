<template>
    
</template>

<style>
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

    .style-2 {
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
            background: var(--red);
            color: white
        }
        .style-3 * ::-moz-selection {
            background: var(--red);
            color: white
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
            font-family: Impact, sans-serif !important;
            text-decoration: none;
            font-weight: 400;
            letter-spacing: -0.2px;
            color: #333333;
            font-size: 1em
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
        #topper-ticker {
            grid-column: span 4;
            height: 30px;
            /* width: 500px; */
            position: relative
        }
        #topper-ticker .breakingnewslogo {
            height: 65px !important
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
            font-size: .8em;
            margin-bottom: 16px;
            margin-bottom: 16px;
            margin-bottom: 1rem;
            font-weight: 400;
            line-height: 1.6
        }
        .logo-style-1 {
            height: 80px;
            width: auto;
            max-width: 100%;
            fill: var(--red)
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
            color: white;
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
            color: white !important;
        }
        .topper-article-title {
            color: white;
            display: inline;
            background: var(--red);
            line-height: 1.8;
            padding: 0 5px;
            font-size: 2em
        }
        .topper-image-wrapper {
            display: block;
            overflow: hidden;
            display: inline-block;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7) 100%);
        }
        .topper-image {
            width: 100%;
            height: auto;
            margin: auto;
            display: block;
            position: relative;
            z-index: -1;
        }
        .image-above-article {
            display: block;
            width: 100%;
            height: auto;
        }
        .list-author {
            font-size: 0.9em;
            color: white;
            text-decoration: none
        }
        .list-author a {
            color: white;
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
            margin: 16px 0 0;
            padding: 16px 16px 0;
        }
        .article-image-full {
            display: block;
            width: 100%;
            height: auto;
            min-height: 500px;
            margin: -0 0;
        }
        .article-sidebar-wrapper {
            grid-column: 3;
            grid-row: 1;
            padding-left: 20px;
        }
        .image-credit {
            padding-top: 10px;
        }
        .article-three-columns {
            grid-column: 1 / span 4;
            display: grid;
            grid-template-columns: repeat(3, 1fr)
        }
        .article-image-wrapper {
            display: inline-block;
            margin-bottom: 32px;
            grid-column: 1 / span 4;
            display: block;
            max-height: 1000px;
            overflow: hidden;
            padding-top: 40px;
        }
        .article-headline-info {
            grid-column: 2;
            grid-row: 2 / auto;
            color: red
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
        .article-text {
            font-size: 22px;
            text-align: justify;
            grid-column: 1 / span 2;
            padding-right: 30px;
            font-weight: 400;
        }
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
            grid-column: 1 / span 4
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
        #nav-spacer {
            width: 100%;
            height: 200px !important;
            display: block;
        }
        @media (min-width: 600px) {
            .article-wrapper {
                grid-template-columns: repeat(1, 1fr);
                margin: 16px auto 0;
                padding: 16px 16px 0;
                grid-row: 3;
            }
        }
        @media (max-width: 340px) {
            .topper-article-title {
                font-size: 1.6em
            }
        }
        @media (max-width: 280px) {
            .topper-article-title {
                font-size: 1.3em
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
            .article-wrapper {
                grid-template-columns: repeat(4, 1fr);
            }
            .article-body {
                grid-column: 1/ span 3;
                grid-row: 3;
                padding-right: 20px;
            }
            .social-sharing-wrapper {
                grid-column: 3 / span 2;
                margin: -10px;
            }
            .article-heading {
                padding: 0
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
                grid-column: 4;
                grid-row: 3;
                padding: 20px 12px
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
                max-height: 500px;
                width: 100%;
            }
            .topper .topper-article-wrapper {
                grid-column: 1 / span 4;
            }
            .topper-single-container {
                display: grid;
            }
            .topper .topper-single-container {
                grid-template-columns: repeat(4, 1fr);
                padding-bottom: 20px;
                border-bottom: 1px solid var(--grey-stuff);
                position: relative;
            }
            .topper .topper-image-wrapper {
                grid-column: 1 / span 4;
                grid-row: 1;
            }
            .topper> :nth-child(n+3) {
                padding-top: 0;
            }
            .topper> :nth-child(n+3) .topper-article-title {}
            .topper .topper-text {
                grid-column: 1 / span 3;
                grid-row: 1;
                padding-left: 20px;
                position: absolute;
                top: 20%;
            }
            .topper> :nth-child(n+3) .topper-text {
                grid-column: 1 / span 4;
                grid-row: 1;
                padding-left: 20px;
                position: absolute;
                top: 20%;
            }
            .topper> :nth-child(3) {
                grid-column: 1 / span 3;
            }
            .topper-article-wrapper {
                padding: 0 12px;
            }
            .topper-single-container {
                display: grid;
            }
            .topper-article-text {
                padding-top: 10px;
            }
            .home-bottom {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
            }
            .twitter-sidebar {}
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
            }
            .headline-single-article {
                font-style: normal;
                font-size: 1.6em;
                font-weight: 600;
                letter-spacing: normal;
                line-height: 1.2;
                text-transform: none;
                margin-bottom: .6rem;
                grid-row: 1;
                grid-column: 1 / span 4;
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
                grid-column: 1 / span 4;
                grid-row: 1;
                max-height: 400px;
                grid-row: 1;
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.42) 60%, rgba(0, 0, 0, 0.7) 100%);
                overflow: hidden;
            }
            .next-to-article-image-wrapper {
                height: auto;
                width: 25%;
                margin: 0;
                margin-right: 10px;
            }
            .next-to-article {
                width: 100%;
                -o-object-fit: cover;
                object-fit: cover;
                position: relative;
                z-index: -1;
            }
            .list-text {
                display: inline-block;
                grid-column: 1/ span 3;
                padding: 20px;
            }
            .list-next-to-article-container .list-text {
                padding-left: 20px;
                z-index: 100;
                color: white;
                position: absolute;
                bottom: 20px;
            }
            .twitter-icon-container-article>.page-views {}
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
            .topper-article-title {
                line-height: 1.4
            }
            .topper-image-wrapper {
                grid-column: 1;
                grid-row: 1;
            }
            .topper {
                grid-row: 1;
                padding-bottom: 20px;
                border-bottom: none;
            }
            .topper-text {
                padding: 10px 25px 0 25px;
                position: relative;
                grid-column: 1;
                grid-row: 1;
                position: absolute;
                bottom: 40px
            }
            .topper .topper-article-title {
                padding-right: 10px;
            }
            .topper> :nth-child(n+3) .topper-image-wrapper {
                display: block;
                margin: 10px;
                padding-bottom: 10px;
                grid-row: 1;
                grid-column: 1;
                max-height: 400px;
            }
            .topper-headline-text {
                width: auto;
                height: 60px;
                padding-bottom: 20px;
                padding-left: 20px;
                max-width: 300px;
            }
            .article-wrapper {
                grid-template-columns: 1fr;
            }
            .headline-single-article {
                padding-bottom: 20px;
            }
            .article-heading-filler {
                grid-column: auto !important
            }
            .article-three-columns {
                grid-template-columns: repeat(1, 1fr)
            }
            .article-image-wrapper {
                padding-top: 20px;
            }
            .social-sharing-wrapper {
                grid-row: 2;
                margin-top: -10px
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
            .list-author {
                display: none;
            }
            .list-timestamp {
                color: black
            }
            .list-article-text {
                padding-bottom: 10px;
                padding-top: 10px;
            }
            .article-heading-filler {
                grid-column: 2;
                grid-row: 2;
                margin-bottom: 0.6rem;
            }
            .article-author {
                margin-bottom: 10px;
                font-weight: 400;
            }
            .article-headline-info {
                padding-left: 0;
            }
            .twitter-icon-container-article {
                padding-top: 0;
                padding-bottom: 10px;
            }
            h1 {
                padding-left: 0;
            }
            .article-text {
                padding-left: 0;
                font-weight: 400;
            }
            .headline-single-article {
                grid-column: 1 / span 2;
            }
            .list-article-wrapper {
                padding-top: 10px;
            }
            .article-headline-info {
                grid-column: 1;
                grid-row: 3 / auto;
                color: red;
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
