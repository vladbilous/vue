<template>
  <label>
    <span>{{ label }}</span>
    <br>
    <input
        type="radio"
        v-bind="$attrs"
        :value="value"
        @input="$emit('change', $event.target.value)"
    >
<!--    :checked="isChecked"-->

  </label>
</template>

<script>
export default {
  name: "CRadio",
  inheritAttrs: false,
  model: {
    // prop: 'nValue',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      default: 'label'
    },
    value: null,
    // value: {
    //   type: Boolean,
    //   default: true
    // },
    // nValue: {
    //   type: Boolean,
    //   default: true,
    // }
  },
  // computed: {
  //   isChecked() {
  //     return this.nValue === this.value
  //   }
  // }
}
</script>

<style scoped>

</style>