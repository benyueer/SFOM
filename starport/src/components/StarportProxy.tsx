import { computed, defineComponent, getCurrentInstance, h, inject, nextTick, onMounted, ref, watch } from 'vue'
import { InjectState } from '../constances'
export default defineComponent({
  props: ['id', 'component', 'props'],
  components: {},
  setup(props) {
    const state: any = inject(InjectState)
    const sp = computed(() => state.getInstance(props.id, props.component))
    const el = ref()
    // sp.value.props = 

    onMounted(() => {
      sp.value.el = el
    })

    watch(
      () => props,
      async () => {
        await nextTick()
        sp.value.props = props.props
      },
      {
        deep: true,
        immediate: true
      }
    )

    return () => h('div', {
      ref: el,
      ...props.props
    })
  }
})