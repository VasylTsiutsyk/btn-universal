<template>
<div class="btn-container">
  <button
    class="btn"
    :class='[computedSize, computedColor]'
    :disabled="disabled"
    @click="callback($event)"

  >
    <font-awesome-icon :icon="['fas', icon]" />
    <slot></slot>
  </button>
</div>

</template>

<script>
export default {
  name: 'BtnUniversal',
  props: {
    size: String,
    icon: String,
    color: String,
    disabled: Boolean,
  },
  computed: {
    computedSize() {
      return `btn-${this.size}`;
    },
    computedColor() {
      return this.color;
    },
  },
  methods: {
    callback(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped lang="scss">
  .btn-container {
    margin: 10px;
  }
</style>
