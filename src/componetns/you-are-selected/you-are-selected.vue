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
    @include textLine(16px, 19px, center, $text-color-plum);
  }
</style>
