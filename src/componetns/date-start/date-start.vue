<template>
 <div class="date-start">
  <h3>{{allText}} по <span>{{this.dateEnd}}</span> </h3>
 </div>
</template>

<script>
    export default {
        name: "date-start",
        data() {
            return {
                text: 'Дата проведения: c ',
                dateStart: new Date('2019.10.24').toLocaleDateString().replace(/[/]/g, "."),
                dateEnd: new Date("2019 10 31").toLocaleDateString().replace(/[/]/g, "."),
            }
        },
        computed: {
            allText: function () {
                return `${this.text} ${this.dateStart}`
            },
        },
    }



</script>

<style lang="scss">
  @import '../../varible.scss';

  .date-start{
    background-color: $main-color-white;
    h3 {
      text-align: center;
      padding: 3px 0;
      font-size: 12px;
      font-weight: bold;
      color: $text-color-blue;
      span {
        color: $text-color-green;
      }
    }
  }


</style>
