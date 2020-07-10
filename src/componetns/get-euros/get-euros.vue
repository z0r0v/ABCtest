<template>
  <h2 class="get-euros"><span>{{getText}}</span><span>{{getNextText}}</span></h2>
</template>

<script>
    export default {
        name: "get-euros",
        data() {
            return {
                getText: '"Получать 1000 евро',
                getNextText: 'каждую неделю!"',
            }
        }
    }
</script>


<style lang="scss">
  @import '../../varible.scss';
  .get-euros {
    margin-top: 33px;
    margin-bottom: 87px;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    color: $main-color-white;
    line-height: 28px;
    text-transform: uppercase;
    span {
      display: block;
    }
  }

</style>
