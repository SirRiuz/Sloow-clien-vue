<template>
        <v-dialog v-model="dialog" width="30%">
            <div class="dialog_container">
                <h3 id="title-messege">Error en el servidor</h3>
                <p>Lo sentimos , estamos tenido problemas con nestros servidores. Disculpe las molestias</p>
            </div>
        </v-dialog>
</template>


<script>
    export default {
        name:'dialog-server-error',
        data(){
            return { 
                dialog:true
            }
        }
    }
</script>


<style>



    .dialog_container {
        background: white;
        padding: 20px;
        border-radius: 20px;
        text-align: center;
    }

    .button-accept{
        color: white;
    }

    #title-messege {
        margin-bottom: 10px;
    }

</style>