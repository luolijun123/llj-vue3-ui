"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const variable = require("../variable.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "button",
  props: {
    // 按钮类型
    type: {
      default: "primary",
      validator: function(value) {
        return ["info", "primary", "success", "warning", "danger"].includes(value);
      }
    },
    // 背景类型
    bgtype: {
      type: String,
      validator: function(value) {
        return ["transparent", "light"].includes(value);
      }
    },
    // 按钮大小
    size: {
      default: "default",
      validator: function(value) {
        return ["large", "default", "small", "mini"].includes(value);
      }
    },
    // 是否渐变
    gradient: {
      type: Boolean,
      default: false
    },
    // 是否圆角显示
    radius: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 点击节流
    throttle: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click"],
  setup(__props, {
    emit: __emit
  }) {
    const jc = (...list) => {
      return variable.joinClassName("button", ...list);
    };
    const props = __props;
    const emit = __emit;
    const btnClass = vue.computed(() => {
      const classArr = [jc("root")];
      if (props.type) classArr.push(jc("type", props.type));
      if (props.bgtype) classArr.push(jc("bgtype", props.bgtype));
      if (props.size) classArr.push(jc("size", props.size));
      if (props.gradient) classArr.push(jc("gradient"));
      if (props.radius) classArr.push(jc("radius"));
      if (props.disabled) classArr.push(jc("disabled"));
      return classArr;
    });
    let isClickAble = true;
    function bindClick(e) {
      if (props.disabled) return;
      if (props.throttle) {
        if (!isClickAble) return;
        emit("click", e);
        isClickAble = false;
        setTimeout(() => {
          isClickAble = true;
        }, 1500);
      } else {
        emit("click", e);
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(btnClass.value),
        onClick: bindClick
      }, [vue.createElementVNode("span", null, [vue.renderSlot(_ctx.$slots, "default")])], 2);
    };
  }
});
exports.default = _sfc_main;
