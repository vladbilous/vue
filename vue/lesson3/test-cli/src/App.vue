<template>
  <div data id="app" class="my-class">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <input type="checkbox" v-model="checkBoxBol" true-value="1" false-value="0">
    <br>
    <label>
        radio
        <input type="radio" v-model="radioTest" value="test">
    </label>
    <label>
        radio
        <input type="radio" v-model="radioTest" value="test1">
    </label>
    <br>

    <select v-model="selectTest">
      <option disabled value="">select it</option>
      <option v-for="(option, key) in selectOptions" :value="{[key]: option}" :key="key">{{ option }}</option>
    </select>
    <br>
    <c-input v-model="cInput"/>
    <p>{{ cInput }}</p>
    <br>
    <br>
    <br>

    <c-radio v-model="cRadio" :value="false"/>
    <br>
    <br>
    <c-check-box :check.sync="syncCustCheck" value="test sync checkbox" label="sync"/>

    <p>{{ syncCustCheck }}</p>
    <br>
    <br>
    <wrapper>
<!--      v-slot:header  === #header-->
      <template v-slot:header>
        custom header
      </template>
      <template v-slot:footer="dataFromSlot">
        {{ `${dataFromSlot.add.name}, age = ${dataFromSlot.add.age} `}}
      </template>
    </wrapper>

  </div>



</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CInput from "./components/CInput";
import CRadio from "./components/CRadio";
import CCheckBox from "./components/CCheckBox";
import Wrapper from "./components/Wrapper";

export default {
  name: 'App',
  components: {
    Wrapper,
    CCheckBox,
    CRadio,
    HelloWorld,
    CInput

  },
  data() {
    return{
      checkBoxBol: "1",
      radioTest: "1",
      selectTest: {},
      selectOptions: {
        ft: 'first',
        sc: 'second',
        th: 'third'
      },
      cInput: '',
      cRadio: false,
      syncCustCheck: false,

    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
