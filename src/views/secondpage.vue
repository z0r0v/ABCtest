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
        {{button1}}
      </button>
      <button class="buttons-box__button" type="submit">
        {{button2}}
      </button>
      <button class="buttons-box__button" type="submit">
        {{button3}}
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
                button1: 'Да',
                button2: 'Нет',
                button3: 'Затрудняюсь ответить',

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
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      font-weight: normal;
    }
  }
  .circle-box {
    display: flex;
    width: 270px;
    margin: 51px auto 71px auto;
    justify-content: space-between;
    .circle-box__circle {
      display: flex;
      justify-content: center;
      align-items: center;
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &__button {
      width: 259px;
      height: 48px;
      margin-bottom: 22px;
      border-radius: 6px;
      background-color: $bg-color-button-grey;
    }
  }

</style>
