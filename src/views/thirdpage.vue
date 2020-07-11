<template>
  <div class="thirdpage-content">
    <cong></cong>
    <p class="thirdpage-content__number-text">{{numberRegestrText}}</p>
    <p class="thirdpage-content__cal-text">{{calMobText}}</p>
    <getEuros></getEuros>
    <p class="thirdpage-content__timer">{{timerText}}<span>{{paseTime}}</span></p>
    <div class="thirdpage-content__qyt-lim-box">
      <h3 class="thirdpage-content__qyt-lim-box--h3">{{qytLimH}}</h3>
      <p class="thirdpage-content__qyt-lim-box--p">{{qytLimP}}</p>
    </div>
    <div class="thirdpage-content__button">
      <button>
        {{buttText}}
      </button>
    </div>
  </div>
</template>
<script>
    import getEuros from '../componetns/get-euros/get-euros'
    import cong from "../componetns/congr/cong";
    export default {
        name: "thirdpage",
        data() {
            return {
                numberRegestrText: 'Ваш номер телефона успешно зарегистрирован!',
                calMobText: 'Позвонив со своего мобильного телефона, вы получите доступ к персональному аудиосообщению:',
                timerText: 'Запись будет удалена через: ',
                qytLimH: 'Количество участников строго ограничено.',
                qytLimP: 'Звоните прямо сейчас, не упустите свой шанс!',
                buttText: 'Звонить и слушать',
                currentTime: 10800,
                timer: null,
                paseTime: '03:00:00',
            }
        },
        components: {
            getEuros: getEuros,
            cong: cong,

        },
        mounted() {
            this.startTimer()
        },
        destroyed() {
            this.stopTimer()
        },
        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                    this.currentTime--;
                    let sec = this.currentTime;
                    let h = sec / 3600 ^ 0;
                    let m = (sec - h * 3600) / 60 ^ 0;
                    let s = sec - h * 3600 - m * 60;
                    this.paseTime = `${h}:${m}:${s}`;
                }, 1000)
            },
            stopTimer() {
                clearTimeout(this.timer)
            },
        },
        watch: {
            currentTime(time) {
                if (time === 0) {
                    this.stopTimer()
                }
            }
        },
    }
</script>

<style lang="scss">
  @import "../varible.scss";
  body {
    background: $main-color-white;
  }
  .thirdpage-content {
    .cong.cong {
      color: $button-color-green;
      margin: 75px auto 38px auto;
    }
    .get-euros.get-euros {
      color: $main-color-black;
      margin: 36px auto 40px auto;
    }
    &__number-text {
      width: 279px;
      margin: 0 auto 33px auto;
      font-weight: bold;
      @include textLine(14px, 16px, center, $button-color-green);
    }
    &__cal-text {
      width: 279px;
      margin: 0 auto;
      @include textLine(16px, 19px, center, $main-color-black);
    }
    &__timer {
      width: 279px;
      margin: 0 auto;
      @include textLine(12px, 14px, center, $main-color-red);
    }
    &__qyt-lim-box {
      width: 300px;
      margin: 41px auto 50px auto;
      background-color: $bg-color-lite-brown;
      border: 1px solid $border-color-lite-brown;
      border-radius: 10px;
      &--h3 {
        font-weight: bold;
        @include textLine(16px, 19px, center, $main-color-black);
      }
      &--p {
        @include textLine(16px, 19px, center, $main-color-black);
      }
    }
    &__button {
      display: flex;
      justify-content: center;
      margin-bottom: 52px;
      button {
        position: relative;
        display: block;
        width: 229.19px;
        height: 63.53px;
        margin-left: 25px;
        background: $bg-gradient-green;
        color: $main-color-white;
        border-radius: 10px;
        &::before {
          position: absolute;
          width: 50px;
          height: 50px;
          top: -3px;
          left: -33px;
          content: ' ';
          background: url("../assets/img/icon_call.svg") no-repeat center, $bg-gradient-green;
          border: 11px solid #278c29;
          border-radius: 50% 50%;
        }
      }
    }
  }
</style>
