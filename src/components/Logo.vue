<template>
    <component :is="'LogoStyle' + logoStyle"></component>
</template>

<script>
    import LogoStyle1 from '../assets/svg/logo_style_1.svg'
    import LogoStyle2 from '../assets/svg/logo_style_2.svg'
    import LogoStyle3 from '../assets/svg/logo_style_3.svg'

    export default {
        props: {
            logoStyle: Number
        },
        components: {
            LogoStyle1,
            LogoStyle2,
            LogoStyle3
        }
    }
</script>

<style>
    
</style>
