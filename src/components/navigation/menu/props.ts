import { definePropType } from '@/utils'

const props = {
  mode: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'vertical',
  },
  defaultActive: {
    type: String,
    default: '',
  },
  defaultOpeneds: {
    type: definePropType<string[]>(Array),
    default: () => [],
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  closeOnClickOutside: Boolean,
  collapseTransition: {
    type: Boolean,
    default: true,
  },
  ellipsis: {
    type: Boolean,
    default: true,
  },
  popperOffset: {
    type: Number,
    default: 6,
  },
  // ellipsisIcon: {
  //   type: iconPropType,
  //   default: () => More,
  // },
  popperEffect: {
    type: String,
    values: ['dark', 'light'],
    default: 'dark',
  },
  popperClass: String,
  showTimeout: {
    type: Number,
    default: 300,
  },
  hideTimeout: {
    type: Number,
    default: 300,
  },
}

export default props
