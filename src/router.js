import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "./components/HelloWorld"
import DragAndDrop from "./components/DragAndDrop";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/draganddrop', component: DragAndDrop}
  ]
})
