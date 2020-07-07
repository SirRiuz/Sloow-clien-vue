<template>
    <div class="profile-component">
        <h1>Profile component</h1>
        <div class="error-contend" v-if="error">

            <div class="errorBan" v-if="error=='123'">
                <h1>Esta cuenta esta suspendida ...</h1>
            </div>

            <div class="errorPrivateProfile" v-if="error=='323'">
                <h1>El perfil al que estas tratando de acceder es privado</h1>
            </div>

            <div class="errorProfileNoExits" v-if="error=='13129'">
                <h1>El perfil al que estas tratando de acceder no existe ...</h1>
            </div>

        </div>

        <div class="profileContent" v-else>
            <h1>Profile </h1>
        </div>
    </div>
</template>


<script>

    import cookie from '../scripts/cookieManager'

    export default {
        name:'profileComponent',
        data() {
            return {
                nickName:this.$route.params.UserNickName,
                error:''
            }
        } , methods:{
            getDataProfile () {
                fetch('http://localhost:5000/api/v1/profile/' , {
                    method:'POST',
                    body:new URLSearchParams({
                        'nickName':this.nickName,
                        'userId':cookie.getCookie('session')
                    })
                }).then(response=>{
                    return response.json().then(jsonResponse=>{
                        if (jsonResponse.session) {
                            console.log(jsonResponse)
                        } else {
                            console.log(jsonResponse)
                            this.error = jsonResponse.error.code
                        }
                    })
                })
            }
        } , created (){ 
            this.getDataProfile()
        }
    }
</script>