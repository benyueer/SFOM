<template>
  <div class="wrap">
    <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19dd19cfaaa44e01ae812b57dd7a249c~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp" alt="" srcset="" style="width: 100%">
    <p class="count" @click="() => state.count++">{{ state.count }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  count: 0
})
</script>
<style lang="less">
.wrap {
  width: 200px;
  height: 200px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .count {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
}
</style>
