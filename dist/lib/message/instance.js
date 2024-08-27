"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const instances = vue.shallowReactive([]);
const getInstance = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) {
    for (let i = idx - 1; i >= 0; i--) {
      const instance = instances[i];
      if (instance.props.placement == current.props.placement) {
        prev = instance;
        break;
      }
    }
  }
  return {
    current,
    prev
  };
};
const getLastOffset = (id) => {
  const {
    prev
  } = getInstance(id);
  if (!prev) return 0;
  return prev.vm.exposed.bottom.value;
};
const getOffsetOrSpace = (id, offset) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  return idx > 0 ? 20 : offset;
};
const messageTypes = ["question", "warning", "success", "info", "loading", "danger"];
exports.getInstance = getInstance;
exports.getLastOffset = getLastOffset;
exports.getOffsetOrSpace = getOffsetOrSpace;
exports.instances = instances;
exports.messageTypes = messageTypes;
