import { defineComponent, computed, ref, watch, onMounted, nextTick, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createElementBlock, resolveDynamicComponent, renderSlot, toDisplayString, withModifiers, createVNode, createCommentVNode, vShow } from "vue";
import _imports_0 from "./icons/loading.png.mjs";
import InfoIcon from "./icons/InfoIcon.vue.mjs";
import SuccessIcon from "./icons/SuccessIcon.vue.mjs";
import WarningIcon from "./icons/WarningIcon.vue.mjs";
import ImportantIcon from "./icons/ImportantIcon.vue.mjs";
import QuestionIcon from "./icons/QuestionIcon.vue.mjs";
import CloseIcon from "./icons/CloseIcon.vue.mjs";
import { messageTypes, getLastOffset, getOffsetOrSpace } from "./instance.mjs";
import { joinClassName } from "../variable.mjs";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        return messageTypes.includes(value);
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
      return joinClassName("message", ...list);
    };
    const IconMap = {
      info: InfoIcon,
      success: SuccessIcon,
      warning: WarningIcon,
      question: QuestionIcon,
      danger: ImportantIcon
    };
    const props = __props;
    const rootClass = computed(() => {
      const classArr = [jc("root"), jc("type", props.type), jc("placement", props.placement)];
      if (props.closeable) classArr.push(jc("isclose"));
      return classArr;
    });
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const messageStyle = computed(() => {
      return {
        top: `${offset.value}px`,
        zIndex: props.zindex
      };
    });
    const visible = ref(false);
    const height = ref(0);
    const messageRef = ref();
    watch(() => props.modelValue, () => {
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
    watch(() => props.duration, () => {
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
    onMounted(() => {
      if (props.id) {
        startTimer();
        visible.value = true;
      }
      nextTick(() => {
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
      return openBlock(), createBlock(Transition, {
        name: jc("fade"),
        onBeforeLeave: __props.onClose,
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("destroy"))
      }, {
        default: withCtx(() => [withDirectives(createElementVNode("div", {
          ref_key: "messageRef",
          ref: messageRef,
          class: normalizeClass(rootClass.value),
          style: normalizeStyle(messageStyle.value),
          onMouseenter: clearTimer,
          onMouseleave: startTimer
        }, [createElementVNode("i", {
          class: normalizeClass(jc("icon"))
        }, [__props.type === "loading" ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _imports_0,
          class: normalizeClass(jc("loading", "img")),
          alt: "加载"
        }, null, 2)) : (openBlock(), createBlock(resolveDynamicComponent(IconMap[__props.type]), {
          key: 1
        }))], 2), renderSlot(_ctx.$slots, "default", {}, () => [!__props.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: normalizeClass(jc("content"))
        }, toDisplayString(__props.message), 3)) : (openBlock(), createElementBlock("p", {
          key: 1,
          class: normalizeClass(jc("content")),
          innerHTML: __props.message
        }, null, 10, _hoisted_1))]), __props.closeable ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(jc("close")),
          onClick: withModifiers(close, ["stop"])
        }, [createVNode(CloseIcon)], 2)) : createCommentVNode("", true)], 38), [[vShow, visible.value]])]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});
export {
  _sfc_main as default
};
