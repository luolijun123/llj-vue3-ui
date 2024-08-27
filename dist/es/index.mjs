import _sfc_main from "./button/button.vue.mjs";
/* empty css                    */
import _sfc_main$1 from "./message/message.vue.mjs";
/* empty css                      */
import message from "./message/create.mjs";
const install = (app) => {
  app.component("LButton", _sfc_main);
  app.component("LMessage", _sfc_main$1);
  app.config.globalProperties.$lmessage = message;
};
export {
  _sfc_main as LButton,
  _sfc_main$1 as LMessage,
  install as default,
  message as useLMessage
};
