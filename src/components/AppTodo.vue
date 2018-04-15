<template>
  <div class="app-todo">
    <AppTodoAddItem :onAddItem="addItem"/>
    <AppTodoList
      :list="todoListFilter"
      :onDelete="deleteItem"
      :changeItemDone="changeItemDone"
      :changeItemPriority="changeItemPriority"
      :editItem="editItem"
    />
  </div>
</template>

<script>
import {TODO_LIST} from '../assets/data.js'
import AppTodoList from './AppTodoList'
import AppTodoAddItem from './AppTodoAddItem'

export default {
  name: 'AppTodo',
  components: {
    AppTodoList,
    AppTodoAddItem
  },
  data () {
    return {
      todoListFilter: TODO_LIST
    }
  },
  methods: {
    addItem: function (newItem) {
      this.todoListFilter.push(newItem)
    },
    deleteItem: function (id) {
      this.todoListFilter = this.todoListFilter.filter(el => {
        return el.id != id;
      })
    },
    changeItemDone(isDone, id) {
      this.todoListFilter = this.todoListFilter.map(el => {
        if(el.id == id) {
          el.done = isDone;
        }
        return el
      })
    },
    changeItemPriority(newPriority, id) {
      // this.todoListFilter = this.todoListFilter.map(el => {
      //   if(el.id == id) {
      //     el.priority = newPriority;
      //   }
      //   return el
      // })
    },
    editItem(newItem, id) {
      this.todoListFilter = this.todoListFilter.map(el => {
        if(el.id == id) {
          el = newItem
        }
        return el
      })
    }
  },
  updated() {
    let myStorage = localStorage;
    myStorage.setItem('todo-list-vuejs', JSON.stringify(this.todoListFilter));
  }
}
</script>

<style scoped lang="scss">
  .app-todo {
    padding-top: 40px;
    background-color: #f0efe9;
    flex: 1;
  }
</style>
