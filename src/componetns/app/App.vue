<template>
  <div id="app">
    <start></start>
    <date-start></date-start>
    <cong></cong>
    <selected></selected>
    <getEuros></getEuros>
    <div class="footer-box">
      <attention></attention>
      <buttons></buttons>
    </div>
  </div>
</template>
<script>
import start from '../start/start.vue'
import dateStart from '../date-start/date-start.vue'
import cong from '../congr/cong.vue'
import selected from '../you-are-selected/you-are-selected.vue'
import  getEuros from '../get-euros/get-euros.vue'
import attention from "../attention/attention.vue";
import buttons from "../button/button.vue";
    export default {
        data() {
            return {

            }
        },
        components: {
            start: start,
            dateStart: dateStart,
            cong: cong,
            selected: selected,
            getEuros:getEuros,
            attention: attention,
            buttons:buttons,
        }
    }
</script>
<style lang="scss">
  @import '../../varible.scss';

  #app {
    width: $mobile;
    margin: 0 auto;
  }

  body {
    margin: 0;
    background-color:  $bg-color-master;
    font-family: $app-font;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
  }
  .footer-box {
    padding-top: 42px;
    padding-bottom: 46px;
    border-radius:  30px 30px 0 0;
    background-color: $main-color-white;

  }




</style>
