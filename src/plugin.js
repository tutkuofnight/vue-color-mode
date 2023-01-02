import Vue from 'vue'
export const ColorMode = (/*{...options} */) => {
  return new Vue({
    data(){
      return {
        el: document.getElementById('app')
      }
    },
    created(){
      this.el.classList.add(this.$theme)
    },
    methods: {
      setTheme(){
        this.el.classList.add(this.$theme)
      }
    },
    watch: {
      '$theme': {
        handler: function(val){
          this.setTheme()
          console.log(val)
        }
      }
    }
  })
}

export const plugin = {
  install(Vue){
    Vue.prototype.$theme = ""
  }
}