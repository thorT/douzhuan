<template>
  <div id="app">
    <router-view></router-view>
    <Service></Service>
  </div>
</template>

<script>
  import Service from "@/components/public/service";
  export  default{
    components:{
      Service
    }
  }
</script>
