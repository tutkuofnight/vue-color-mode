import ColorMode from './components/ColorMode.vue'
export default {
  install: function(app , /* options */) {
    app.component('color-mode' , ColorMode)
    
    app.directive('theme' , (el , binding , vnode) => {
      console.log(el , binding , vnode)
    })

    app.mixin({
      created(){
        console.log('Component created')
      }
    })
  }
}