<template>
  <div class="add-item">
    <textarea
      class="add-item__text"
      @input="changeItem"
      v-model="textItem"
      placeholder="Добавить задачу"></textarea>
    <div class="add-item__panel">
      <AppTodoItemColorSelect :itemID="0" :priority="1" :changePriority="changePriority" />
      <button class="add-item__add" @click="addItem">Добавить</button>
    </div>
  </div>
</template>

<script>
import AppTodoItemColorSelect from './AppTodoItemColorSelect'
export default {
  name: 'AppTodoAddItem',
  props: ['onAddItem'],
  data () {
    return {
      textItem: '',
      priorityItem: 1
    }
  },
  methods: {
    changeItem: function (el) {
      el.target.style.cssText = 'height:auto; padding:0'
      el.target.style.cssText = 'height:' + el.target.scrollHeight + 'px'

    },
    changePriority: function (val) {
      this.priorityItem = val
    },
    addItem: function () {
      if(this.textItem.length == 0) return;
      let newItem = {
        id: (new Date()).getMilliseconds(),
        text: this.textItem,
        priority: this.priorityItem,
        done: false,
        date: new Date()
      }
      this.textItem = ''
      this.onAddItem(newItem)
    }
  },
  components: {
    AppTodoItemColorSelect
  }
}
</script>

<style scoped lang="scss">
  .add-item {
    min-width: 320px;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 10px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 0 1px 8px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    padding: 15px;
    &__text {
      width: 100%;
      font-family: 'Open Sans';
      min-height: 19px;
      font-size: 16px;
      color: #333;
      border: none;
      resize: none;
      height: auto;
      background-color: #fff;
      &::placeholder {
        color: #888;
      }
    }
    &__panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__add {
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 3px 6px;
      border-radius: 3px;
      &:hover {
        background-color: #eee;
        cursor: pointer;
      }
    }
  }
</style>
