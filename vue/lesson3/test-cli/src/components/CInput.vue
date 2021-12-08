<template>
  <label>
    <span>{{ label }}</span>
    <br>
    <input type="text" v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)">
  </label>
</template>

<script>
export default {
  name: "CInput",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: 'label'
    },
    value: String
  }
}
</script>

<style scoped>

</style>