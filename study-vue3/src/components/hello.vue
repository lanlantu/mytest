<template>
  <div>Hello</div>
</template>

<script setup lang="ts">
import {ref,reactive} from'vue' 

const name=ref('张三');
const person=reactive({
    name:'lisi',
    age:12
})

const car=ref({
    name:'lisi',
    age:12
})
console.log(name.value);
console.log(person);

</script>


<style scoped lang='scss'>

</style>