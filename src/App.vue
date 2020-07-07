<template>

  <v-app>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" >
      <router-view/>
  </v-app>

</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    dialog:true
  }),
};
</script>



<style>








</style>
