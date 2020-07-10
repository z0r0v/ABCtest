<template>
  <p class="you-are-selected">
    {{selected}}
  </p>
</template>

<script>
    export default {
        name: "you-are-selected",
        data() {
            return {
                selected: 'Вы были отобраны для участия в финансовом эксперименте:',
            }
        }
    }
</script>

<style lang="scss">
  @import '../../varible.scss';
  .you-are-selected {
    width: 311px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: $text-color-plum;
  }
</style>
