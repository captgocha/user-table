<template>
  <div id="app">
    <div class="layout">
    
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
/* Пробовал сделать импорт единого файла scss 
  во все компоненты vue через vue-cli-plugin-style-resources-loader
  и style-resources-loader, ничего не вышло, потратил на это 2 дня.
  Подключил обычным ипортом в компонент App.
*/
@import './styles/main';

#app {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

.layout {
  width: 100%;
  min-height: 100vh;
  padding-top: 34px;
  background: #FEFDFD;
}
</style>
