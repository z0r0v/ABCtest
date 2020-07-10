<template>
  <div class="date-start">
    <h3>{{text}}{{getDate}}.{{getMonth}}.{{getYear}} по <span>{{getEndDate}}.{{getEndMonth}}.{{getEndYear}}</span></h3>
  </div>
</template>

<script>
    export default {
        name: "date-start",
        data() {
            return {
                text: 'Дата проведения: c ',
                startDay: new Date(),
            }
        },
        computed: {
            getDate: function () {
                let item = this.startDay.getDate();
                if (item < 10) {
                    return `0${item}`;
                }
                return item;
            },
            getMonth: function () {
                let item = this.startDay.getMonth();
                if (item < 10) {
                    return `0${item}`;
                }
                return item;
            },
            getYear: function () {
                let item = this.startDay.getFullYear();
                if (item < 10) {
                    return `0${item}`;
                }
                return item;
            },

            getEndDate: function () {
                let d = new Date();
                d.setDate(d.getDate() + 5);
                const item = d.getDate();
                console.log('item:', item);
                if (item < 10) {
                    return `0${item}`;
                }
                return item;
            },
            getEndMonth: function () {
                let d = new Date();
                d.setDate(d.getDate() + 5);
                const item = d.getMonth();
                console.log('item:', item);
                if (item < 10) {
                    return `0${item}`;
                }
                return item;
            },
            getEndYear: function () {
                let d = new Date();
                d.setDate(d.getDate() + 5);
                const item = d.getFullYear();
                console.log('item:', item);
                if (item < 10) {
                    return `0${item}`;
                }
                return item;
            },

        },
    }
</script>

<style lang="scss">
  @import '../../varible.scss';
  .date-start {
    width: 320px;
    margin: 0 auto;
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
