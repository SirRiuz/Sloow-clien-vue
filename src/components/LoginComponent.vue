
<template>

    <div class="container">
        <div class="row center-xs">
            <div class="col-xs-11 col-lg-4 col-sm-6">
                <div class="box box-container">

                    <div class="container-box-login">
                        <form>
                            <h1 id="title_login"> Inicia sesion</h1>
                            <v-text-field type="email" label="Correo electronico" color="#5691F6" outlined v-model="email"></v-text-field>
                            <v-text-field type="password" label="Contraseña" color="#5691F6" outlined v-model="password"></v-text-field>
                            <button id="buttom" type="submit" @click.prevent="loginManager"> Iniciar sesion </button>
                        </form>
                    </div>


                    <div class="row center-xs" v-if="serverError">
                        <server_dialog_error dialogManager="true"/>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>


<script>

    import cookies from '../scripts/cookieManager'
    import server_dialog_error from '../components/errors/serverError'

    export default {
        name:'loginComponent',
        data(){
            return {
                email:'',
                password:'',
                serverError:false,
            }
        },
        components:{
            server_dialog_error
        },
        methods:{
            loginManager() {
                if (this.email != '' && this.password != '') {
                    this.getSessionLogin()
                } else {
                    alert('Los campos usuarios y contraseña deven de estar llenos')
                }
            } , getSessionLogin () {
                fetch('http://localhost:5000/api/v1/login/' , {
                    method:'POST',
                    body:new URLSearchParams({
                        'email':this.email,
                        'password':this.password
                    })
                }).then(response=>{
                    return response.json().then(jsonResponse=>{
                        this.createSession(jsonResponse)
                    })
                }).catch(()=>{
                    this.serverError = true
                    console.log({
                        'error':{
                            'messege':'El servidor esta teniendo fallos',
                            'type-error':'error-server'
                        }
                    })
                })
            } , createSession (jsonResponse) {
                if (jsonResponse.session) {
                    cookies.setCookie('session' , jsonResponse.session.id)
                    this.$router.push('/')
                } else {
                    console.error('Error de autenticacion')
                }
            } , isLogin () {
                if (cookies.getCookie('session')) {
                    this.$router.push('/')
                }
            }
        } , created () {
            this.isLogin()
        }
    }
</script>



<style>

    .row{
        padding: 10px;
    }

    .server-messege{
        background: red;
        border-radius: 5;
    }

    .box-container{
        border-radius: 10px;
        margin: 20% auto;
        padding: 20px;
        padding-top: 35px;
        background: white;
    }

    #title_login {
        font-size: 22px;
        margin-bottom: 15px;
        color: #3c3c3c;
    }

    #inputEmail::placeholder{
        color:#A8A8A8;
    }

    #inputPassword::placeholder{
        color:#A8A8A8
    }

    #inputEmail{
        background-color:white;
        background: #fcfcfc;
        padding: 15px;
        width: 80%;
        margin-bottom: 20px;
        border-radius: 5px;
        border: solid 1px rgba(168, 168, 168 , 0.50);
        font-family: 'Varela Round', sans-serif;
        font-weight: bold;
        font-size: 13px;
        color: #3C3C3C;

    }

    .container-box-login{
        width: 100%;
        margin: 0px auto;
    }

    #inputPassword {
        width: 80%;
        background-color:white;
        padding: 15px;
        background: #fcfcfc;
        margin-bottom: 30px;
        border-radius: 5px;
        border: solid 1px rgba(168, 168, 168 , 0.50);
        font-family: 'Varela Round', sans-serif;
        font-weight: bold;
        font-size: 13px;    

    }

    #inputPassword:focus , #inputEmail:focus , #buttom:focus{
        outline: none !important;
    }


    #buttom{
        width: 60%;
        padding: 15px;
        background: #5691F6;
        border-radius: 5px;
        border: solid 1px #5691F6;
        margin-bottom: 55px;
        font-family: proxima-soft, sans-serif;
        font-weight: bold;
        font-size: 15px;
        color: white;
    }
    
</style>