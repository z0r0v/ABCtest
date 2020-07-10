<template>
  <div id="app">
    <start></start>
    <router-view></router-view>
  </div>
</template>
<script>
    import start from '../start/start.vue'
    export default {
        data() {
            return {}
        },
        components: {
            start: start,
        }
    }
</script>
<style lang="scss">
  @import '../../varible.scss';
  body {
    margin: 0;
    background-color: $bg-color-master;
    font-family: $app-font;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
  }
</style>
