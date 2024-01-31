<template>
    <p>home</p>
    <button @click="() => router.push({name: 'detail'})">go</button>
    <div class="wrap">
      <div>qweqwe</div>
      <StarPort
        :id="1"
        style="transition: all .5s;"
      >
        <MyComp style="transition: all .5s;"></MyComp>
      </StarPort>
    </div>
    
</template>

<script setup lang="ts">
import { StarPort } from '../../../src/components/StarPort';
import { useRouter } from 'vue-router'
import MyComp from '../components/MyComp.vue';

const router = useRouter()
</script>

<style>
a {
    position: absolute;
    transition: all .3s;
    width: 200px;
}

.wrap {
  display: flex;
}
</style>