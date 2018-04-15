<template>
  <div class="todo__list">
    <AppTodoItem
      v-show="list.length > 0"
      v-for="item in list"
      :key="item.id"
      :item="item"
      :onDelete="onDelete"
      :changeItemDone="changeItemDone"
      :changeItemPriority="changeItemPriority"
      :editItem="editItem"
    />
    <div v-show="list.length == 0" class="empty-list">
      <p class="empty-list__text">
        Здесь пусто!
      </p>
      <p class="empty-list__text">
        Добавь задачу
      </p>
      <img src="../assets/chii.gif" class="empty-list__img">
    </div>
  </div>
</template>

<script>
import AppTodoItem from './AppTodoItem'
export default {
  name: 'AppTodoList',
  props: ['list', 'onDelete','changeItemDone','changeItemPriority','editItem'],
  data () {
    return {

    }
  },
  methods: {
  },
  components: {
    AppTodoItem
  }
}
</script>

<style scoped lang="scss">
  .todo {
    &__list {
      min-width: 320px;
      max-width: 500px;
      margin: 0 auto;
      padding: 0 10px;
      background-color: #fff;
      box-shadow: 0 1px 8px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    }
  }
  .empty-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    &__img {
      margin-top: 15px;
      width: 350px;
    }
    &__text {
      font-family: 'Roboto';
      font-size: 16px;
    }
  }
</style>
