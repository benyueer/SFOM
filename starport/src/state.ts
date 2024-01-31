import { Component, reactive } from "vue";
import { createStarportInstance } from "./instance";


export function createInstanceState() {
  const portMap = reactive(new Map())

  function getInstance(port: string, component: Component) {
    let context = portMap.get(port)
    if (!context) {
      context = createStarportInstance(port, component)
      portMap.set(port, context)
    }

    context.component = component

    return context
  }

  function dispose(port: string) {
    portMap.delete(port)
  }

  return {
    portMap,
    getInstance,
    dispose
  }
}