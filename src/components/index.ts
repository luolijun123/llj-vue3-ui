import LButton from './button'
import LMessage from './message'
import useLMessage from './message/create'

const install = (app: any) => {
  app.component('LButton', LButton)
  app.component('LMessage', LMessage)
  app.config.globalProperties.$lmessage = useLMessage
}

export default install

export { LButton, LMessage, useLMessage }
