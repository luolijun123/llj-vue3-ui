import Message from './message.vue'
import createMessage from './create'

export const install = (app: any) => {
  app.component('LMessage', Message)
}

export const useLMessage = createMessage

export default Message
