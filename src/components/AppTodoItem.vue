<template>
  <div :class="'todo__item--pr' + item.priority" class="todo__item" v-click-outside="editDisable">
    <div class="item-container">
      <button class="done__button" @click="changeItemDone(!item.done, item.id)">
        <font-awesome-icon
          :icon="faCheck"
          v-show="item.done"
          class="done__icon"/>
      </button>
      <textarea
        class="item__text"
        v-model="item.text"
        @click="edit = true"
        @input="changeItem"
        @keyup.esc="edit = false"
        :class="{item__done: item.done}"
        rows="1"
        :readonly = "!edit"
        style="font-family: 'Open Sans';"
      ></textarea>
      <button class="delete__button" @click="onDelete(item.id)">
        ×
      </button>
      <!--<span class="item__date">-->
        <!--{{`${item.date.getDate()} ${item.date.toLocaleString('ru', { month: "long" })} ${item.date.getFullYear()}`}}-->
      <!--</span>-->
    </div>
    <div v-show="edit" class="panel-edit">
      <AppTodoItemColorSelect :itemID="item.id" :priority="item.priority" :changePriority="changePriority"/>
      <button class="save" @click="onEditItem">Сохранить</button>
    </div>
  </div>
</template>

<script>
import AppTodoItemColorSelect from './AppTodoItemColorSelect'
import Vue from 'vue'
import vClickOutside from 'v-click-outside'
Vue.use(vClickOutside)
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'

export default {
  name: 'AppTodoItem',
  props: ['item','onDelete','changeItemDone','changeItemPriority','editItem'],
  data () {
    return {
      edit: false,
      priority: 0
    }
  },
  watch: {
    edit: function (value) {
      this.edit = value
    },

  },
  methods: {
    changeItem: function (el) {
      el.target.style.cssText = 'height:auto; padding:0'
      el.target.style.cssText = 'height:' + el.target.scrollHeight + 'px'
    },
    editDisable: function () {
      this.edit = false
    },
    changePriority: function (val) {
      this.priority = val
    },
    onEditItem: function () {
      if(this.item.text == 0) return
      let newItem = {
        id: this.item.id,
        text: this.item.text,
        priority: this.priority,
        done: this.item.done,
        date: this.item.date
      }

      this.editItem(newItem, this.item.id)
    }
  },
  mounted () {
    let el = this.$el.querySelector('.item__text')
    el.style.height = 'auto'
    el.style.padding = 0
    el.style.height = el.scrollHeight + 'px'
  },
  computed: {
    faCheck () {
      return faCheck
    }
  },
  components: {
    AppTodoItemColorSelect,
    FontAwesomeIcon
  }
}
</script>

<style scoped lang="scss">
  .todo__item {
    padding: 10px;
    border-bottom: 1px solid #e2e2e2;
    min-width: 100%;
    position: relative;
    &:last-child {
      border: none;
    }
    &:hover {
      .delete__button {
        visibility: visible;
      }
    }
    &::before {
      position: absolute;
      top: 1px;
      bottom: 1px;
      left: -10px;
      content: '';
      display: inline-block;
    }
    &--pr1:before{
      border-left: 3px solid red;
    }
    &--pr2:before{
      border-left: 3px solid yellow;
    }
    &--pr3:before{
      border-left: 3px solid green;
    }
  }
  .item {
    &-container {
      display: flex;
      align-items: flex-start;
    }
    &__text {
      flex-grow: 1;
      font-family: 'Open Sans';
      min-height: 19px;
      font-size: 16px;
      color: #333;
      border: none;
      resize: none;
      height: auto;
      background-color: #fff;
    }
    &__date {
      font-family: 'Roboto';
      font-size: 10px;
      color: #777;
      margin-left: 20px;
    }
    &__done {
      text-decoration: line-through;
    }
  }
  .panel-edit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 35px;
  }
  .save {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 3px 6px;
    border-radius: 3px;
    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
  .done {
    &__button {
      background: none;
      border: 1px solid #999;
      border-radius: 3px;
      padding: 2px;
      width: 22px;
      height: 23px;
      margin-right: 15px;
      &:hover {
        cursor: pointer;
      }
    }
    &__icon {
      font-size: 16px;
      color: #999;
    }
  }
  .delete {
    &__button {
      visibility: hidden;
      background: none;
      border: none;
      font-size: 25px;
      line-height: 25px;
      color: #999;
      margin-left: 10px;
      &:hover {
        cursor: pointer;
        color: #555;
      }
    }
  }
</style>
