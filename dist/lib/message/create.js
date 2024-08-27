"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const message_vue_vue_type_script_setup_true_lang = require("./message.vue.js");
;/* empty css              */
const instance = require("./instance.js");
let seed = 1;
const closeMessage = (instance$1) => {
  const idx = instance.instances.indexOf(instance$1);
  if (idx === -1) return;
  instance.instances.splice(idx, 1);
  const {
    handler
  } = instance$1;
  handler.close();
};
const keepSingleMessage = (options) => {
  const placement = options.placement || "center";
  if (options && options.isSingle === false) return;
  for (const instance$1 of instance.instances) {
    if (instance$1.props.isSingle && instance$1.props.placement === placement) {
      instance$1.handler.close();
    }
  }
};
const createMessage = (options) => {
  keepSingleMessage(options);
  const id = `lmessage_${seed++}`;
  const userOnClose = options.onClose;
  const container = document.createElement("div");
  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose == null ? void 0 : userOnClose();
      closeMessage(instance2);
    },
    onDestroy: () => {
      vue.render(null, container);
    }
  };
  const vnode = vue.createVNode(message_vue_vue_type_script_setup_true_lang.default, props, props.message && typeof props.message === "function" ? props.message() : null);
  vue.render(vnode, container);
  document.body.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposed.visible.value = false;
    }
  };
  const instance2 = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance2;
};
const message = (options = {}) => {
  const instance$1 = createMessage(options);
  instance.instances.push(instance$1);
  return instance$1.handler;
};
instance.messageTypes.forEach((type) => {
  message[type] = (options = {}) => {
    if (typeof options === "string") options = {
      message: options
    };
    return message({
      ...options,
      type
    });
  };
});
function closeAll(type) {
  for (const instance$1 of instance.instances) {
    if (!type || type === instance$1.props.type) {
      instance$1.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;
exports.closeAll = closeAll;
exports.default = message;
