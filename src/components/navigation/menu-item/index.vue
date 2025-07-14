<template>
  <li class="menu-item" :class="{ 'is-active': active }" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MenuItem',
  props: {
    index: {
      type: String,
      required: true,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const active = ref(false)

    const handleClick = () => {
      active.value = true
      emit('select', props.index)
    }

    return {
      active,
      handleClick,
    }
  },
})
</script>

<style scoped>
.menu-item {
  padding: 10px;
  cursor: pointer;
}

.menu-item.is-active {
  background-color: #ecf5ff;
  color: #409eff;
}
</style>
