<template>
  <div class="color__list">
    <div v-for="color in colors" :key="'color' + itemID + color" class="color__item">
      <input
        :id="'color-' + itemID + '-' + color"
        :name="'color' + itemID"
        :value="color"
        v-model="selectedColor"
        class="color__input"
        type="radio"
      >
      <label
        :for="'color-' + itemID + '-' + color"
        :style="'background-color: ' + color"
        @click="onChange(color)"
        class="color__label"
      >
        <font-awesome-icon :icon="icon" class="icon"/>
      </label>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
export default {
  name: 'AppTodoItemColorSelect',
  props: ['itemID', 'priority','changePriority'],
  data () {
    return {
      colors: ['red', 'yellow', 'green'],
      selectedColor: ''
    }
  },
  watch: {
    selectedColor: function (priority) {
      switch (priority) {
        case 1: this.selectedColor = 'red'; break;
        case 2: this.selectedColor = 'yellow'; break;
        case 3: this.selectedColor = 'green'; break;
      }
    }
  },
  methods: {
    onChange: function (color) {
      let priority = 0;
      switch (color) {
        case 'red': priority = 1; break;
        case 'yellow': priority = 2; break;
        case 'green': priority = 3; break;
      }
      this.changePriority(priority)
    }
  },
  computed: {
    icon () {
      return faCheck
    }
  },
  mounted () {
    this.selectedColor = this.priority;
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.color {
  &__list {
    margin-top: 10px;
    display: flex;
  }
  &__label {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 3px;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }
  &__input{
    display: none;
    &:not(:checked) + label .icon {
      display: none;
    }
  }
}
.icon {
  font-size: 13px;
  color: #333;
  position: absolute;
  top: 4px;
  left: 4px;
}
</style>
