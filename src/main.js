import { createApp } from 'vue'
import App from './App.vue'
import './style-dark.css'
import translatePlugin from './translatePlugin'

const app = createApp(App)

const ru = {
  app: {
    title: "Работа смены языков во vue 3",
    changeBtn: "Переключить язык",
    text: 'Передача параметров',
  }
}
const en = {
  app: {
    title: "works cange language in vue 3",
    changeBtn: "Change langugage",
    text: 'Passing parameters',
  }
}
const fr = {
  app: {
    title: "France works cange language in vue 3",
    changeBtn: "Changenguo langugua",
    text: 'Passiego parameteanto',
  }
}
const ch = {
  app: {
    title: "Vue 3 中的工作語言更改 ",
    changeBtn: "切換語言",
    text: '傳遞參數',
  }
}

app.use(translatePlugin, {ru, en, fr, ch})
app.mount('#app')
