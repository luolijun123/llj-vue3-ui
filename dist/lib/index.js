"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const button_vue_vue_type_script_setup_true_lang = require("./button/button.vue.js");
;/* empty css                    */
const message_vue_vue_type_script_setup_true_lang = require("./message/message.vue.js");
;/* empty css                      */
const create = require("./message/create.js");
const install = (app) => {
  app.component("LButton", button_vue_vue_type_script_setup_true_lang.default);
  app.component("LMessage", message_vue_vue_type_script_setup_true_lang.default);
  app.config.globalProperties.$lmessage = create.default;
};
exports.LButton = button_vue_vue_type_script_setup_true_lang.default;
exports.LMessage = message_vue_vue_type_script_setup_true_lang.default;
exports.useLMessage = create.default;
exports.default = install;
