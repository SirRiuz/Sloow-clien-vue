
<template>

    <div class="profile-container">
        <div class="container">
            <profileComponent/>
        </div>
    </div>

</template>


<script>

    import profileComponent from '../components/ProfileComponent'

    export default {
        name:'profileView' , 
        components:{
            profileComponent
        }
    }

</script>