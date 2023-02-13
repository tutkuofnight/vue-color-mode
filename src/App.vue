<template>
  <div id="app">
    <main>
      <div class="content">
        <h1>vue-color-mode</h1>
        <p>Simple and easy to integration theme mode plugin for Vue</p>
        <a href="https://github.com/tutkuofnight/vue-color-mode#vue-color-mode" target="_blank">Read docs</a>
        <div>
          <button @click="$setColorMode('dark')">Dark Mode</button>
          <button @click="$setColorMode('sepia')">Sepia Mode</button>
          <button @click="$setColorMode()">Default</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'vue-color-mode',
  methods: {
    swtichDarkMode(){
      const app = document.getElementById('app')
      app.style.background = 'black'
      let sw = !sw
      this.$theme = sw 
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
:root {
  --bgColor: white;
  --color: black;
}
body {
  background: var(--bgColor);
  color: var(--color);
  transition: 300ms all;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.dark-mode {
  --bgColor: black;
  --color: whitesmoke;
}
.sepia-mode {
  --bgColor: #f1e7d0;
  --color: #433422;
}

main {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
main .content {
  text-align: center;
  border: 4px solid var(--color);
  border-radius: 4px;
  padding: 30px 60px;
}
main .content  h1 , p {
  margin: 10px 0px;
}
button {
  border: 2px solid var(--color);
  border-radius: 4px;
  color: var(--color);
  background: var(--bgColor);
  transition: 250ms all;
  padding: 6px 12px;
  margin: 30px 5px;
  cursor: pointer;
  font-weight: 500;
}
button:hover {
  color: var(--bgColor);
  background: var(--color);
}
</style>
