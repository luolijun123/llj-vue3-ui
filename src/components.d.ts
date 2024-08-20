import LButton from '@/components/button'
import LMessage from '@/components/message'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LButton: typeof LButton
    LMessage: typeof LMessage
  }
}

export { LButton, LMessage }
