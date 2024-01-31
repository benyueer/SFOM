import type { Plugin } from 'vue'
import { StarPort } from "./components/StarPort"
import { StarPortProvider } from "./components/StarPortProvider"

export const StarportPlugin = (): Plugin => ({
  install(app) {
    app.component('StarPort', StarPort)
    app.component('StarPortProvider', StarPortProvider)
  }
})