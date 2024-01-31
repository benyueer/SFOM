import { Component, reactive, Ref, ref } from 'vue'

export function createStarportInstance(
  port: string,
  component: Component
) {
  const el: Ref<HTMLElement | undefined> = ref()
  const props: Ref<any> = ref()

  return reactive({
    el,
    component,
    props
  })
}