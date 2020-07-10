<template>
  <div class="footer-box__items">
    <div class="footer-box__items--item first">
      <h3>{{attentionText}}</h3>
      <p>{{attentionTextNext}}</p>
    </div>
    <div class="footer-box__items--item second">
      <p>{{importantInformation}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "attention",
        data() {
            return {
                attentionText: 'Внимание:',
                attentionTextNext: 'Сегодня последний день, когда Вам доступна свободная регистрация!:',
                importantInformation: 'Для получения важной информации, просим ответить Вас всего на 3 простых вопроса:',
            }
        }
    }
</script>

<style lang="scss">
  @import '../../varible.scss';
  .footer-box {
    margin: 0 auto;
    width: 320px;
  }
  .footer-box__items {
    margin: 0 auto;
    width: 300px;
    .footer-box__items--item {
      position: relative;
      margin-bottom: 22px;
      padding-left: 43px;
      border: 1px solid $border-color-grey;
      border-radius: 10px;
      &::before {
        position: absolute;
        content: ' ';
        top: 6px;
        left: 7px;
        width: 29px;
        height: 29px;
      }
      h3, p {
        font-size: 14px;
        line-height: 16px;
      }
      h3 {
        font-weight: bold;
      }
    }
    .first {
      &::before {
        background: url("../../assets/img/icon_attantion.svg");
      }
    }
    .second {
      &::before {
        background: url("../../assets/img/icon_ money.svg");
      }
    }
  }


</style>
