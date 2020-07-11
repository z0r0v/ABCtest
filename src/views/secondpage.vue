<template>
  <div class="second-content">
    <div class="circle-box">
      <div class="circle-box__circle blue">1</div>
      <hr>
      <div class="circle-box__circle gray">2</div>
      <hr>
      <div class="circle-box__circle gray">3</div>
    </div>
    <h2>{{text}}</h2>
    <form class="buttons-box" action="/thirdpage">
      <button class="buttons-box__button" type="submit">
        {{buttonYes}}
      </button>
      <button class="buttons-box__button" type="submit">
        {{buttonNo}}
      </button>
      <button class="buttons-box__button" type="submit">
        {{buttonAll}}
      </button>
    </form>
  </div>
</template>

<script>
    export default {
        name: "secondpage",
        data() {
            return {
                text: 'Нуждаетесь ли Вы в дополнительных деньгах?',
                buttonYes: 'Да',
                buttonNo: 'Нет',
                buttonAll: 'Затрудняюсь ответить',

            }
        },
    }
</script>

<style lang="scss">
  @import "../varible.scss";
  body {
    background: $main-color-white;
  }
  .second-content {
    hr {
      height: 4px;
      width: 100px;
      margin: 9px auto;
      background-color: $bg-color-hr-grey;
      border: none;
    }
    h2 {
      width: 279px;
      margin: 0 auto 61px auto;
      @include textLine(18px, 21px, center, $main-color-black);
      font-weight: normal;
    }
  }
  .circle-box {
    width: 270px;
    margin: 51px auto 71px auto;
    display: flex;
    justify-content: space-between;
    .circle-box__circle {
      @extend %flex-centered;
      width: 22.22px;
      height: 22.22px;
      border-radius: 50% 50%;
      border: 1px solid $border-color-grey;
      color: $main-color-white;
    }
    .blue {
      background: $bg-gradient-blue;
    }
    .gray {
      background: $bg-gradient-grey;
    }
  }
  .buttons-box {
    @extend %flex-centered;
    flex-direction: column;

    &__button {
      width: 259px;
      height: 48px;
      margin-bottom: 22px;
      border-radius: 6px;
      background-color: $bg-color-button-grey;
    }
  }

</style>
