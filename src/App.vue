<template>
  <div class="app">
    <header class="app__header">
      <ul class="navbar">
        <li v-for="link in nav" :key="link.url" class="navbar__item">
          <router-link :to=link.url class="navbar__link">{{link.name}}</router-link>
        </li>
      </ul>
    </header>
    <div class="app__body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nav: [
        {
          url: '/',
          name: 'Главная'
        },
        {
          url: 'todo',
          name: 'Список задач'
        },
        {
          url: 'calendar',
          name: 'Календарь'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  input:focus,button:focus,textarea:focus {
    outline: none;
  }
  @font-face {
    font-family: "Roboto";
    src: url("./assets/Roboto/Roboto-Regular.ttf");
  }
</style>
<style lang="scss" scoped>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &__header {
      width: 100%;
      background-color: #00a5bf;
      padding: 15px 30px 10px;
    }
    &__body {
      background-color: #f0efe9;
      flex-grow: 1;
      width: 100%;
      padding: 0 20px;
    }
  }
  .navbar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: -25px;
    &__item {
      margin-bottom: 5px;
    }
    &__link {
      margin-right: 25px;
      padding-bottom: 3px;
      font-family: 'Roboto';
      letter-spacing: 0.4px;
      font-size: 18px;
      color: #eef4f6;
      border-bottom: 1px solid transparent;
      transition: color 0.3s, border-color 0.3s;
      &:hover {
        color: #fff;
        /*border-color: #dad725;*/
        border-color: #fff;
      }
      &.router-link-exact-active {
        color: #eeee3d;
        &:hover {
          border-color: #eeee3d;
        }
      }
    }
  }
</style>
