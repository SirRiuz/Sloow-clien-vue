<template>
    <div class="container">
        <div class="row center-xs">
            <div class="col-xs-12 col-lg-7 post-padre-contend">
                <div class="box post">
                    <div class="post-contend" v-for="(video , index) in jsonVideos" :key="index">
                        <div class="heder-post">
                            <div class="row around-xs">
                                <div class="col-xs-12">
                                    <div class="row">
                                        <div class="col-xs">
                                            <div class="box z">
                                                <div class="row">
                                                    <div class="profile-contend-profile">
                                                        <a href="">
                                                            <img id="img-profile" src="https://instagram.fctg2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/102932141_333791450942161_9113871269020489420_n.jpg?_nc_ht=instagram.fctg2-1.fna.fbcdn.net&_nc_ohc=INPhRBKvtFYAX-uN4xQ&oh=8839a68c269da0309c5af8c422c9fe05&oe=5F290314" width="50px" height="50px" alt="">
                                                        </a>
                                                    </div>
                                                    <div class="col-xs-8 col-lg-10 col-sm-10">

                                                        <div class="box x">
                                                            <a style="text-decorator:none;" @click="redirectProfile(video.video.User)">
                                                                <span id="name-title"> {{ video.video.posteador.name }} </span>
                                                            </a>
                                                            <br><span id="nickName"> @{{ video.video.posteador.nickName }} </span> 
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-0 col-lg-0">

                                                        <div class="box post-options">
                                                            <span class="material-icons" @click="showPostOptions(video.video.posteador.nickName)">
                                                                <img src="../assets/more-vertical.svg" alt="" srcset="">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="post-body">
                            <video v-bind:src="video.video.videoDir" width="100%" height="100%"></video>
                        </div>
                            <div class="post-messege">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="box messege">
                                            <p id="post-mensaje-text">{{ video.video.messege }}</p>
                                            <span id="post-data">23 de Junio</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="likes-post-manager">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="box messege">

                                            <div class="row">
                                                <div class="col-xs-0">
                                                    <div class="box like-buttom">
                                                        <img src="../assets/heart.svg" alt="" srcset="">
                                                    </div>
                                                </div>
                                                <div class="col-xs-0">
                                                    <div class="box">
                                                        <img src="../assets/message-circle.svg" alt="" srcset="">
                                                        234K
                                                    </div>
                                                </div>
                                                <div class="col-xs-2">
                                                    <div class="box">
                                                        around
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-3">
                <div class="box after-post">
                    <div class="profile-data">
                        <h1>Hola</h1>
                    </div>
                    <div class="profile-data">
                        <h1>Hola</h1>
                    </div>
                </div>
            </div>
        </div>

        <v-dialog v-model="dialog"  width="50%">
            <div class="dialog-options-menu">
                <h1> {{ postId }} </h1>
                <h1> {{ Boolean(Number(1))}} </h1>
            </div>
        </v-dialog>
    </div>
</template>


<script>

    import cookies from '../scripts/cookieManager'

    export default {
        name:'vidoContainer',
        data(){
            return {
                jsonVideos:'',
                dialog:false,
                postId:'',
            }
        },methods:{
            showPostOptions(postId) {
                console.log(postId)
                this.dialog = true
            },
            redirectProfile(profileName){
                this.$router.push(`/${profileName}/`)
            },
            getJsonVideos () {
                fetch('http://localhost:5000/api/v1/videos/',{
                    method:'POST',
                    body:new URLSearchParams({
                        'userId':cookies.getCookie('session')
                    })
                }).then(response=>{
                    return response.json().then(jsonRespose=>{
                        this.jsonVideos = jsonRespose
                        console.log(jsonRespose[0].video.User)
                    })
                }).catch(()=>{
                })
            }
        } , created () {
            this.getJsonVideos()
        }
    }
</script>


<style>

    .post-padre-contend{
        border-radius: 10px;
        box-shadow: 1px 1px 50px rgba(232, 232, 232 , 0.50);

    }

    .post-options{
        cursor: pointer;
    }

    #post-data{
        font-weight: bold;
        font-size: 13px;
        color: #5C5E5F;
    }

    .like-buttom{
        padding: 1px;
    }

    .row{
        text-align: start;
    }

    .video-container {
        border-radius: 20px;
        margin: 5% auto;
        width: 45%;
        padding: 10px;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.005);
    }

    .messege{
        padding: 5px;
        color: #5C5E5F;
        font-size: 15px;
    }

    .post-contend{
        margin-bottom: 25px;
        border-radius: 10px;
        padding: 0px;
    }

    .post{
        background: white;
        border-radius: 10px;
    }

    .after-post{
        background: white;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 1px 1px 50px rgba(232, 232, 232 , 0.50);
    }

    @media only screen and (max-width: 1000px) {

        .after-post{
            display: none;
        }
    }

    video{
        border-radius: 5px;
    }

    .profile-data{
        background: white;
        margin-bottom: 10px;
    }

    #img-profile{
        border-radius: 100%;
        width: 55px;
        height: 55px;
    }

    .profile-contend-profile{
        padding-right: 5px;

    }

    .pos-master{
        line-height: 0px;
    }

    .poster-in{
        width: 10%;
        margin: 0px auto;
    }


    #name-title{
        font-weight: bold;
        font-size: 17px;
        color: #14171a;
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }


    .y{
        padding: 5px;
    }

    #nickName{
        color: #9e9e9e;
        font-size: 13px;
    }

    .x{
        padding: 5px;
    }

    .post-messege , .likes-post-manager{
        margin: auto;
        padding: 10px;
    }

    #date-post{
        font-size: 12px;
    }

    .heder-post{
        padding: 5px;
    }

</style>