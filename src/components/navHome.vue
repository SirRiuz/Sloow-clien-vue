<template>
  <div>
    <v-app-bar
      class="nav-container"
      height="60"
      elevation="50"
      dense
      dark
      hide-on-scroll="true"
      scroll-threshold="2"
    >

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>


                  <v-btn icon>
        <img id="icon-profile-id" width="35px" height="35px" src="https://instagram.fctg2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/102932141_333791450942161_9113871269020489420_n.jpg?_nc_ht=instagram.fctg2-1.fna.fbcdn.net&_nc_ohc=INPhRBKvtFYAX-uN4xQ&oh=8839a68c269da0309c5af8c422c9fe05&oe=5F290314" alt="" srcset="">
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      

    </v-app-bar>
  </div>
</template>
<script>
    export default {
        name:'nav_home'
    }
</script>



<style>

    #icon-profile-id{
        border-radius: 100px;
    }

    v-app-bar {
        box-shadow: 0px 0px 10px white;
    }

</style>