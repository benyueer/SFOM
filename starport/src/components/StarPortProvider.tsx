import { defineComponent, watch, h, provide, getCurrentInstance } from 'vue'
import { InjectState } from '../constances'
import { createInstanceState } from '../state'
import StarportOuter from './StarportOuter'

export const StarPortProvider = defineComponent({
  setup(props, ctx) {
    const state = createInstanceState()
    const app = getCurrentInstance()?.appContext.app
    app?.provide(InjectState, state)

    return () => {
      return [
        ctx.slots.default?.(),
        Array.from(state.portMap.entries()).map(([port, {component}]) => h(
          StarportOuter,
          {
            key: port,
            port,
            component
          }
        ))
      ]
    }
  },
})