<template>
  <select @change="change" :title="title">
    <option>{{defaultText}}</option>
  </select>
</template>

<script>

function isDictionary (obj) {
  return typeof obj === 'object' && obj !== null && !(obj instanceof Array) && !(obj instanceof Date)
}

export default {
  name: 'vueFastSelect',
  props: {
    value: [Number, String],
    items: {
      required: true
    },
    defaultText: {
      type: String,
      default: 'Please select'
    },
    keyField: {
      type: String,
      default: 'key'
    },
    valueField: {
      type: String,
      default: 'value'
    }
  },
  data () {
    return {
      title: undefined
    }
  },
  methods: {
    change (e) {
      this.$emit('input', +e.target.value)
      this.$emit('change')
      if (isDictionary(this.items)) {
        this.title = e.target.options[e.target.selectedIndex].text
      } else {
        this.title = this.items.filter(x => x[this.keyField] === +e.target.value)[0][this.valueField]
      }
    },
    insertOptions () {
      let options = `<option>${this.defaultText}</option>`
      if (this.items) {
        if (isDictionary(this.items)) {
          for (const key in this.items) {
            if (this.items.hasOwnProperty(key)) {
              const value = this.items[key]
              options += +key === +this.value ? `<option value="${key}" selected="true">${value}</option>` : `<option value="${key}">${value}</option>`
              this.$el.innerHTML = options
            }
          }
          return false
        }
        options += this.items.map(x => x[this.keyField] === this.value ? `<option value="${x[this.keyField]}" selected="true">${x[this.valueField]}</option>` : `<option value="${x[this.keyField]}">${x[this.valueField]}</option>`)
      }
      this.$el.innerHTML = options
    }
  },
  watch: {
    value (newValue) {
      if (!newValue) this.title = this.defaultText
      this.$emit('change')
      this.$emit('input', +newValue)
      this.insertOptions()
    },
    items (newValue) {
      this.insertOptions()
    }
  },
  mounted () {
    this.insertOptions()
    this.title = this.defaultText
  }
}
</script>

<style>

</style>
