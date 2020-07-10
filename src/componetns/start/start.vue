<template>
  <div class="head">
    <div class="start">
      <img class="start__img" src="../../assets/img/Logo.svg" alt="logo">
      <p class="start__p">{{textNormal}}<span class="start__p--bold">{{textBold}}</span>
        <span class="start__p--country">
        {{countryName}}
      <img src="../../assets/img/roman.png" alt="Румыния">
    </span>
      </p>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'start',
        data() {
            return {

                textNormal: 'Революционная финансовая программа, разработанная ',
                textBold: 'Международной организацией бизнес-ангелов и меценатов.',
                countryName: 'Румыния',
                countryImg: 'roman.png',
                countryAlt: 'Румыния',
            }
        }
    }
</script>

<style lang="scss">
  @import '../../varible.scss';
  .start {
    display: flex;
    justify-content: center;
    background-color: $bg-color-master;
    &__img {
      max-width: 30px;
    }
    &__p {
      width: 250px;
      margin-left: 10px;
      font-size: 11px;
      line-height: 13px;
      color: $text-color-plum;
      &--bold {
        font-weight: bold;
      }
      &--country {
        color: $text-color-green;
      }
      span img {
        width: 16px;
        height: 11px;
      }
    }
  }

</style>
