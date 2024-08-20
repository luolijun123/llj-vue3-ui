import { render, createVNode } from "vue";
import _sfc_main from "./message.vue.mjs";
/* empty css              */
import { instances, messageTypes } from "./instance.mjs";
let seed = 1;
const closeMessage = (instance) => {
  const idx = instances.indexOf(instance);
  if (idx === -1) return;
  instances.splice(idx, 1);
  const {
    handler
  } = instance;
  handler.close();
};
const keepSingleMessage = (options) => {
  const placement = options.placement || "center";
  if (options && options.isSingle === false) return;
  for (const instance of instances) {
    if (instance.props.isSingle && instance.props.placement === placement) {
      instance.handler.close();
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
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(_sfc_main, props, props.message && typeof props.message === "function" ? props.message() : null);
  render(vnode, container);
  document.body.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposed.visible.value = false;
    }
  };
  const instance = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance;
};
const message = (options = {}) => {
  console.log(options, "---");
  const instance = createMessage(options);
  instances.push(instance);
  return instance.handler;
};
messageTypes.forEach((type) => {
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
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;
export {
  closeAll,
  message as default
};
