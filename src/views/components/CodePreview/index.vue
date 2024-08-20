<script setup lang='ts'>
/**
 * @Description 
 * @Author llj
 * @Date 2024-08-07 14:59:10
 */
import PrismView from './PrismView.vue'
import { ref } from 'vue'
const props = defineProps({
  codes: {
    default: ''
  },
  language: {
    default: 'html'
  }
})

const show = ref(false)

</script>

<template>
  <section :class="`CodePreview ${show ? 'is-show' : 'is-hidden'}`">
    <div class="Preview">
      <slot></slot>
    </div>
    <div class="Code">
      <div>
        <PrismView :codes="codes" :language="language"></PrismView>
      </div>
    </div>
    <div class="Toggle" @click="() => {
      show = show ? false : true
    }">
      <i></i>{{ show ? '隐藏代码' : '显示代码' }}
    </div>
  </section>
</template>

<style scoped lang='scss'>
.CodePreview {
  border: 1px solid #e1e1e1;
  border-radius: 3px;

  .Preview {
    padding: 20px 30px;
  }

  .Code {
    display: grid;
    grid-template-rows: 0fr;
    transition: .3s;
    overflow: hidden;

    >div {
      min-height: 0;
    }


    pre[class*="language-"] {
      margin: 0;
    }
  }

  .Toggle {
    border-top: 1px solid #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    cursor: pointer;
    user-select: none;
    color: #09f;

    >i {
      border: 8px solid transparent;
      border-top-color: #09f;
      transform: translateY(5px);
      margin-right: 2px;
    }

    &:hover {
      background-color: #f5f5f5;
    }
  }

  &.is-show {
    .Code {
      grid-template-rows: 1fr;
    }

    .Toggle>i {
      transform: rotate(180deg) translateY(4px);
    }
  }
}
</style>
<style lang="scss">
.CodePreview {
  .Preview {
    display: flex;
    flex-direction: column;

    &-Block {
      display: flex;
      padding: 5px 0;
      align-items: flex-end;
    }
  }
}
</style>