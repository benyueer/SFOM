<template>
  <p>detail</p>
  <button @click="() => router.back()">back</button>
  <div class="wrap">
    <StarPort
      :id="1"
      style="transition: all .5s;"
    >
      <MyComp style="width: 100px; height: 100px;transition: all .5s;"></MyComp>
    </StarPort>
  </div>

</template>

<script setup lang="ts">
import { StarPort } from '../../../src/components/StarPort';
import { useRouter } from 'vue-router';
import MyComp from '../components/MyComp.vue';
const router = useRouter()
</script>
<style>
.wrap {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>