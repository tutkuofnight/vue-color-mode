<template>
  <div id="app">
    <button @click="swtichDarkMode()">Switch Dark Mode</button>
  </div>
</template>

<script>

export default {
  name: 'vue-color-mode',
  methods: {
    swtichDarkMode(){
      const app = document.getElementById('app')
      app.style.background = 'black'
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
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
