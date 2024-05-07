<script setup>
defineProps({
    inputType: String,
    message: String
})

const model = defineModel();

</script>

<template>
    <input :class="inputType == 'text'? 'w-full border border-gray-300 rounded px-4 py-3 mb-6 bg-primary': 'mr-2'" :type="inputType" v-model="model" :placeholder="message" />
</template>

<style scoped>
</style>