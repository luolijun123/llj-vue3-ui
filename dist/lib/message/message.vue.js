"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const loading = require("./icons/loading.png.js");
const InfoIcon = require("./icons/InfoIcon.vue.js");
const SuccessIcon = require("./icons/SuccessIcon.vue.js");
const WarningIcon = require("./icons/WarningIcon.vue.js");
const ImportantIcon = require("./icons/ImportantIcon.vue.js");
const QuestionIcon = require("./icons/QuestionIcon.vue.js");
const CloseIcon = require("./icons/CloseIcon.vue.js");
const instance = require("./instance.js");
const variable = require("../variable.js");
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "message",
  props: {
    // 是否显示 - 组件引用时使用
    modelValue: {
      default: false,
      type: Boolean
    },
    // 颜色类型
    type: {
      type: String,
      default: "primary",
      validator: function(value) {
        return instance.messageTypes.includes(value);
      }
    },
    // 显示位置
    placement: {
      type: String,
      default: "center",
      validator: function(value) {
        return ["center", "right"].includes(value);
      }
    },
    // 文本内容
    message: {
      type: String,
      default: ""
    },
    // 停留时间
    duration: {
      type: Number,
      default: 3e3
    },
    // 是否显示关闭
    closeable: {
      type: Boolean,
      default: false
    },
    // js调用唯一值 不用传
    id: {
      type: String,
      default: ""
    },
    // 层叠值
    zindex: {
      type: Number,
      default: 1e4
    },
    offset: {
      type: Number,
      default: 16
    },
    // 是否插入html字符串
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    },
    // 同一时间是否只显示一个
    isSingle: {
      type: Boolean,
      default: true
    },
    onClose: Function,
    onDestroy: Function
  },
  emits: ["update:modelValue", "destroy"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const jc = (...list) => {
      return variable.joinClassName("message", ...list);
    };
    const IconMap = {
      info: InfoIcon.default,
      success: SuccessIcon.default,
      warning: WarningIcon.default,
      question: QuestionIcon.default,
      danger: ImportantIcon.default
    };
    const props = __props;
    const rootClass = vue.computed(() => {
      const classArr = [jc("root"), jc("type", props.type), jc("placement", props.placement)];
      if (props.closeable) classArr.push(jc("isclose"));
      return classArr;
    });
    const lastOffset = vue.computed(() => instance.getLastOffset(props.id));
    const offset = vue.computed(() => instance.getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
    const bottom = vue.computed(() => height.value + offset.value);
    const messageStyle = vue.computed(() => {
      return {
        top: `${offset.value}px`,
        zIndex: props.zindex
      };
    });
    const visible = vue.ref(false);
    const height = vue.ref(0);
    const messageRef = vue.ref();
    vue.watch(() => props.modelValue, () => {
      if (!props.id) {
        visible.value = props.modelValue;
        if (visible.value) {
          clearTimer();
          startTimer();
        }
      }
    }, {
      immediate: true
    });
    vue.watch(() => props.duration, () => {
      if (!props.id) {
        if (visible.value) {
          clearTimer();
          startTimer();
        }
      }
    }, {
      immediate: true
    });
    let stopTimer;
    function startTimer() {
      if (props.duration === 0) return;
      const closeTimer = setTimeout(() => {
        close();
      }, props.duration);
      stopTimer = () => {
        clearTimeout(closeTimer);
      };
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    vue.onMounted(() => {
      if (props.id) {
        startTimer();
        visible.value = true;
      }
      vue.nextTick(() => {
        height.value = messageRef.value.getBoundingClientRect().height;
      });
    });
    const emit = __emit;
    function close() {
      visible.value = false;
      if (!props.id) {
        emit("update:modelValue", false);
      }
    }
    __expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: jc("fade"),
        onBeforeLeave: __props.onClose,
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("destroy"))
      }, {
        default: vue.withCtx(() => [vue.withDirectives(vue.createElementVNode("div", {
          ref_key: "messageRef",
          ref: messageRef,
          class: vue.normalizeClass(rootClass.value),
          style: vue.normalizeStyle(messageStyle.value),
          onMouseenter: clearTimer,
          onMouseleave: startTimer
        }, [vue.createElementVNode("i", {
          class: vue.normalizeClass(jc("icon"))
        }, [__props.type === "loading" ? (vue.openBlock(), vue.createElementBlock("img", {
          key: 0,
          src: loading.default,
          class: vue.normalizeClass(jc("loading", "img")),
          alt: "加载"
        }, null, 2)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(IconMap[__props.type]), {
          key: 1
        }))], 2), vue.renderSlot(_ctx.$slots, "default", {}, () => [!__props.dangerouslyUseHTMLString ? (vue.openBlock(), vue.createElementBlock("p", {
          key: 0,
          class: vue.normalizeClass(jc("content"))
        }, vue.toDisplayString(__props.message), 3)) : (vue.openBlock(), vue.createElementBlock("p", {
          key: 1,
          class: vue.normalizeClass(jc("content")),
          innerHTML: __props.message
        }, null, 10, _hoisted_1))]), __props.closeable ? (vue.openBlock(), vue.createElementBlock("i", {
          key: 0,
          class: vue.normalizeClass(jc("close")),
          onClick: vue.withModifiers(close, ["stop"])
        }, [vue.createVNode(CloseIcon.default)], 2)) : vue.createCommentVNode("", true)], 38), [[vue.vShow, visible.value]])]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});
exports.default = _sfc_main;
