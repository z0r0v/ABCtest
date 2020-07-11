<template>
  <div class="first-content">
    <date-start></date-start>
    <cong></cong>
    <selected></selected>
    <getEuros></getEuros>
    <div class="footer-box">
      <attention></attention>
      <buttonComponent></buttonComponent>
    </div>
  </div>
</template>

<script>
    import dateStart from '../componetns/date-start/date-start.vue'
    import cong from '../componetns/congr/cong.vue'
    import selected from '../componetns/you-are-selected/you-are-selected.vue'
    import getEuros from '../componetns/get-euros/get-euros.vue'
    import attention from "../componetns/attention/attention.vue";
    import buttonComponent from "../componetns/buttonComponent/buttonComponent.vue";

    export default {
        name: "firtspage",
        components: {
            dateStart: dateStart,
            cong: cong,
            selected: selected,
            getEuros: getEuros,
            attention: attention,
            buttonComponent: buttonComponent,
        }
    }
</script>

<style lang="scss">
  @import '../varible.scss';
  .footer-box {
    padding-top: 42px;
    padding-bottom: 46px;
    border-radius: 30px 30px 0 0;
    background-color: $main-color-white;
  }
</style>
