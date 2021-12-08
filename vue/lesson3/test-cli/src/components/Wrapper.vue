<template>
  <div>
    <header>
      <slot name="header">
        <h1>header</h1>
      </slot>
    </header>
    <main>
      <slot name="content">
        <h2>content</h2>
      </slot>
    </main>
    <footer>
      <slot name="footer" :add="addData">
        <h3>footer</h3>
      </slot>
    </footer>
    <slot>default</slot>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  data(){
    return{
      addData: {
        name: 'Serhii',
        age: 100
      }
    }
  }
}
</script>

<style scoped>

</style>