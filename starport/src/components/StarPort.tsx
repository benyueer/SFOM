import { defineComponent, h, isVNode, markRaw } from 'vue'
import StarportProxy from './StarportProxy'

export const StarPort = defineComponent({
  props: ['id'],
  setup(props, ctx) {

    return () => {
      const slots = ctx.slots.default?.()

      console.log(slots)

      if (!slots || slots.length !== 1) {
        throw new Error('must has a slot')
      }

      const slot = slots[0]

      let component = slot.type as any

      if (typeof(component) != 'object' || isVNode(component)) {
        component = {
          render() {
            return slots
          }
        }
      }

      return h(StarportProxy, {
        ...props,
        key: props.id,
        component: markRaw(component),
        props: slot.props
      })
    }
  },
})