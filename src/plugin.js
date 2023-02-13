class ColorMode {
  constructor(){
    this.el = document.body
    this.mode = localStorage.getItem("theme") || ""
  }
  clear(){
    const classes = Array.from(document.body.classList)
    if(classes)
      this.el.classList.remove(classes.find(name => name.endsWith("-mode")))
  }
  load(){
    if(this.mode)
      this.el.classList.add(this.mode)
  }
  set(type){
    this.clear()
    if(!type) return localStorage.removeItem("theme")
    const mode = type ? `${type}-mode` : ""
    this.el.classList.add(mode)
    localStorage.setItem("theme" , mode)
  }
}
export default {
  install(Vue){
    const colorMode = new ColorMode()
    colorMode.load()
    Vue.prototype.$setColorMode = (type) => colorMode.set(type)
  }
}