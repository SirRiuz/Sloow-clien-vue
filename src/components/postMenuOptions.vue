

<template>

    <div class="menu-container">
        <v-dialog v-model="value">
            <div class="dialog-options-menu">
                <h1> {{ showDialog }} </h1>
                <h1> El valor es {{ Boolean(Number(parseInt(this.showDialog))) }} </h1>
                <h1> {{ value }} </h1>
                <h1> Post id {{ postId }} </h1>
            </div>
        </v-dialog>
    </div>


</template>



<script>
    export default {
        name:'menu_options',
        props:{
            posteador:String,
            showDialog:Boolean,
            postId:String
        },
        data(){
            return {
                value:Boolean(Number(parseInt(this.showDialog))),
                dialog:true
            }
        }
    }
</script>