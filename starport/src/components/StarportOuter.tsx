import { computed, defineComponent, h, inject, mergeProps, Teleport } from 'vue';
import { InjectState } from '../constances';
export default defineComponent({
  props: ['port', 'component'],
  components: {},
  setup(props) {
    const state: any = inject(InjectState)
    const sp = computed(() => state.getInstance(props.port, props.component))
    const id = computed(() => sp.value.el?.id || sp.value.id)





    return () => {
      const teleport = !!sp.value.el

      return h(
        'div',
        {
          style: {
            transitionProperty: 'all',
            transitionDuration: '800ms',
          }
        },
        h(
          Teleport,
          {
            to: teleport ? sp.value.el : 'body',
          },
          h(
            sp.value.component,
            sp.value.props
          )
        )
      )
    }
  }
})