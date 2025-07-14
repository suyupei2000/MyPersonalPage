import { PropType } from 'vue'

export const createProps = (props: Record<string, any>) => {
  return props
}

/**
 * 定义属性类型
 * @param val
 * @returns
 */
export const definePropType = <T>(val: any): PropType<T> => val
