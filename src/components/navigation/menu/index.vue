<template>
  <ul class="s-menu">
    <slot />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, ref } from 'vue'
import menuProps from './props'

export default defineComponent({
  name: 'SMenu',
  props: menuProps,
  emits: ['open', 'close'],
  setup(props, { emit }) {
    const openedMenus = ref<string[]>(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : [])

    const items = ref<Record<string, { index: string; indexPath: string[]; active: boolean }>>({})

    const subMenus = ref<Record<string, { index: string; indexPath: string[]; active: boolean }>>({})

    const activeIndex = ref<string | undefined>(props.defaultActive)

    const isMenuPopup = computed<boolean>(() => {
      return props.mode === 'horizontal' || (props.mode === 'vertical' && props.collapse)
    })

    // #region methods
    const openMenu: (index: string, indexPath: string[]) => void = (index, indexPath) => {
      if (openedMenus.value.includes(index)) return
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index: string) => indexPath.includes(index))
      }
      openedMenus.value.push(index)
      emit('open', index, indexPath)
    }

    const close = (index: string) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }
    // #endregion

    const closeMenu: (index: string, indexPath: string[]) => void = (index, indexPath) => {
      close(index)
      emit('close', index, indexPath)
    }

    const rootMenu = reactive({
      props,
      openedMenus,
      items,
      subMenus,
      activeIndex,
      isMenuPopup,

      // addMenuItem,
      // removeMenuItem,
      // addSubMenu,
      // removeSubMenu,
      openMenu,
      closeMenu,
      // handleMenuItemClick,
      // handleSubMenuClick,
    })

    provide('rootMenu', rootMenu)
    return {}
  },
})
</script>
