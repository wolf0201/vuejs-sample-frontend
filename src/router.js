import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "./components/HelloWorld"
import DragAndDrop from "./components/DragAndDrop"
import Bootstrap from "./components/Bootstrap"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/draganddrop', component: DragAndDrop},
    { path: '/bootstrap', component: Bootstrap },
  ]
})
