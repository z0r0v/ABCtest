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
                this.checkedDate(item);
                return item;
            },
            getMonth: function () {
                let item = this.startDay.getMonth();
                item = this.checkedDate(item);
                return item;

            },
            getYear: function () {
                let item = this.startDay.getFullYear();
                item = this.checkedDate(item);
                return item;
            },

            getEndDate: function () {
                const d = this.calcDate();
                let item = d.getDate();
                item = this.checkedDate(item);
                return item;
            },
            getEndMonth: function () {
                const d = this.calcDate();
                let item = d.getMonth();
                item = this.checkedDate(item);
                return item;
            },
            getEndYear: function () {
                const d = this.calcDate();
                let item = d.getFullYear();
                item = this.checkedDate(item);
                return item;
            },

        },
        methods: {
            checkedDate(item) {
                console.log(item);
                if (item < 10) {
                    return `0${item}`;
                }
                return item;
            },
            calcDate() {
                let d = new Date();
                d.setDate(d.getDate() + 5);
                return d
            }
        }

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
