
# vue input number

>Works for Vue2. This is focus to fast init select value.If you feel larg data to binding on the select so slow.This is for you.

[Demo](https://kinanson.github.io/#/fastselect)

### install

npm install vue-fast-select --save

If you not signle file vue.You can download dist file include it in html
``` shell
<script src='dist/vue-fast-select.min.js'>
```
Above file can find in the [here](https://github.com/kinanson/vue-fast-select/tree/master/dist)
### usage
You can import in the vue file like what do you usally do.
``` html
<template>
  <div>
     <vue-fast-select v-if="isFastSelect" v-model="selectIndex" :items="items" key-field="id" value-field="name"></vue-fast-select>
  </div>
</template>

<script>
import VueFastSelect from 'vue-fast-select'
export default {
  components: {
    VueFastSelect
  },
  data () {
    return {
      items: [],
      selectIndex: 0
    }
  },
  mounted () {
       setTimeout(() => {
      for (let i = 0; i < 10000; i++) {
        this.items.push({
          id: i, name: 'test' + i
        })
      }
    }, 1)
  }
}
</script>

<style>
</style>

```

### props
- items:whole datas(required)
- key-field:binding key(default is key)
- value-field:binding value(default is value)
- default-text:default option text(default is please select)

### events
- change:when change v-model value

