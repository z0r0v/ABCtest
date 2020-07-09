<template>
  <h2 class="cong">{{text}}</h2>
</template>

<script>
    export default {
        name: "cong",
        data() {
            return {
                text: 'Поздравляем!',
            }
        }
    }
</script>

<style lang="scss">
  @import '../../varible.scss';
  .cong {
    margin-top: 89px;
    margin-bottom: 52px;
    font-size: 30px;
    line-height: 35px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: $main-color-white;
  }

</style>
