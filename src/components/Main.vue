<template>
  <div class="main">
    <h1 class="main__header">Это приложение создано для пробы VueJS</h1>
    <div class="description">
      На данный момент реализован <router-link to='todo' class="description__link">ToDo</router-link> с возможностями:
      <ul class="description__list">
        <li class="description__link">Добавить задачу</li>
        <li class="description__link">Удалить задачу</li>
        <li class="description__link">Отредактировать задачу</li>
      </ul>
      Задача состоит из:
      <ul class="description__list">
        <li class="description__link">Текста</li>
        <li class="description__link">Приоритета</li>
      </ul>
      Хранение списка задач организованно в localStorage
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  width: fit-content;
  margin: 20px auto 0;
  &__header {
    font-family: 'Open Sans';
    color: #006175;
    text-shadow: 0 1px 0 #ccc;
    padding-bottom: 10px;
    margin-bottom: 25px;
    border-bottom: 1px solid #006175;
    font-size: 26px
  }
}
.description {
  font-family: 'Roboto';
  font-size: 16px;
  color: #222;
  &__link {
    color: #006175;
  }
  &__list {
    background-color: #ffffff;
    margin: 15px 0;
    border-left: 5px solid #00a5bf;
    padding: 15px;
  }
}
</style>
