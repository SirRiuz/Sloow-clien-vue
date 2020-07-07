<template>
    <div class="home-container">
        <div class="contenedor-root">
            <navHome/>
            <postView/>
        </div>
    </div>
</template>


<script>

    import cookies from '../scripts/cookieManager'
    import navHome from '../components/navHome'
    import postView from '../components/HomeComponent'

    export default {
        components:{
            navHome,
            postView
        } , beforeCreate () {
            if (!cookies.getCookie('session')) {
                 this.$router.push('/accounts/login/')
            }
        }
    }
</script>