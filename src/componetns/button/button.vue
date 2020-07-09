<template>
  <button class="button">
    {{buttonText}}
  </button>
</template>

<script>
    export default {
        name: "button",
        data() {
            return {
                buttonText: 'Принять участие',
            }
        }
    }
</script>

<style lang="scss">
  @import '../../varible.scss';
  .button {
    position: relative;
    display: block;
    width:  276px;
    height: 48px;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0 2px 0 0 $button-color-shadow;
    background: $button-color-green;
    color: $main-color-white;

    &::after {
      position: absolute;
      content: ' ';
      width: 24px;
      height: 16px;
      top: 36%;
      right: 0;
      transform: translate(-50%, 0);
      background: url("../../assets/img/icon_ arrow.svg");
    }

  }

</style>
