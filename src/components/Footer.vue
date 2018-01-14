<template>
    <div id="footer">
        <footer>
            <div class="footer-wrapper">
                <router-link :to="'/'" class="footer-logo-link">
                    <LogoStyle1 class="footer-logo"></LogoStyle1>
                </router-link>
                <div>
                    <ul class="footer-ul">
                        <li class="footer-li">
                            <router-link :to="'/'" class="footer-li-link">
                                Terms of Use
                            </router-link>
                        </li>
                        <li class="footer-li">
                            <router-link :to="'/'" class="footer-li-link">
                                Privacy Policy
                            </router-link>
                        </li>
                        <li class="footer-li">
                            <router-link :to="'/'" class="footer-li-link">
                                Contact
                            </router-link>
                        </li>
    
                    </ul>
                    <ul class="footer-ul">
                        <li class="footer-li">
                            <router-link :to="'/'" class="footer-li-link">
                                Tip Us
                            </router-link>
                        </li>
                        <li class="footer-li">
                            <router-link :to="'/'" class="footer-li-link">
                                About Us
                            </router-link>
                        </li>
                        <li class="footer-li">
                            <router-link :to="'/'" class="footer-li-link">
                                Source Code
                            </router-link>
                        </li>
    
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import LogoStyle1 from '../assets/svg/logo_style_1.svg'
    
    export default {
        components: {
            LogoStyle1
        }
    }
</script>
