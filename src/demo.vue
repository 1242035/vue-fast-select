<template>
  <div>
    <vue-fast-select v-model="selectIndex" :items="items" value-field="name" key-field="id"></vue-fast-select>
  </div>
</template>

<script>
import VueFastSelect from './VueFastSelect.vue'
export default {
  components: {
    VueFastSelect
  },
  data () {
    return {
      selectIndex: 0,
      items: []
    }
  },
  mounted () {
    for (let i = 0; i < 10000; i++) {
      this.items.push({
        id: i, name: 'test' + i
      })
    }
  }
}
</script>

<style>

</style>
