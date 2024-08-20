<script setup>
/**
 * @Description 
 * @Author llj
 * @Date 2024-08-05 20:03:35
 */

const props = defineProps({
  list: Array
})

const currentId = ref('Button-Type')

const markStyle = computed(() => {
  const ms = { top: 0 }
  if (currentId.value && props.list.findIndex(i => i.id === currentId.value) !== -1) {
    ms.top = `${props.list.findIndex(i => i.id === currentId.value) * 28}px`
  }
  return ms;
})

const onClick = (item) => {
  if (!item.id || item.id === currentId.value) return
  currentId.value = item.id
  const itemEl = document.getElementById(item.id)
  itemEl && (itemEl.scrollIntoView({ behavior: "smooth" }))
}

let scrollTimer = null; // 防抖
const bindScroll = (e) => {
  if (!props.list?.length) return
  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    const { top: wTop, bottom: wBottom } = wrapRef.value.getBoundingClientRect()
    props.list.some(i => {
      const el = document.getElementById(i.id)
      if (el) {
        const { top: eTop } = el.getBoundingClientRect()
        if (eTop >= wTop && eTop < wBottom) {
          currentId.value = i.id
          return true
        }
      }
      return false
    })
  }, 300)
}
const wrapRef = ref()
onMounted(() => {
  wrapRef.value && (wrapRef.value.onscroll = bindScroll);
})

onUnmounted(() => {
  wrapRef.value && (wrapRef.value.onscroll = null)
})

</script>

<template>
  <div class="MainWrap" ref="wrapRef">
    <div class="Content">
      <slot></slot>
    </div>
    <div v-if="list && list.length" class="Directory">
      <div class="Box">
        <div class="Title">目录</div>
        <ul>
          <li :class="item.id === currentId ? 'is-active' : ''" v-for="item in list" @click="onClick(item)">{{
              item.label
          }}</li>
          <div class="Mark" :style="markStyle"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.MainWrap {
  padding: 40px 0 50px 40px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  position: relative;

  .Content {
    flex: 1;
    padding-right: 40px;
  }

  .Directory {
    width: 160px;
    position: sticky;
    top: 0;
    overflow-y: auto;
    font-size: 14px;

    .Box {
      padding-left: 20px;
      padding-right: 8px;
      border-left: 1px solid #e1e1e1;

      color: #888;

      .Title {
        color: #333;
        font-weight: 600;
        padding-bottom: 4px;
      }

      ul {
        position: relative;

        li {
          position: relative;
          line-height: 28px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          cursor: pointer;

          &:hover {
            opacity: .85;
          }

          &.is-active {
            color: #333;
          }
        }

        >.Mark {
          position: absolute;
          top: 0;
          left: -21px;
          width: 2px;
          height: 28px;
          display: flex;
          align-items: center;
          transition: .3s;

          &::before {
            background-color: #42b883;
            width: 2px;
            height: 16px;
            content: '';
          }

        }
      }
    }
  }
}
</style>
<style lang='scss'>
.MainWrap {
  .Content {

    .Block {
      padding-bottom: 30px;
    }

    .Title {
      font-size: 16px;
      font-weight: 600;
      padding-bottom: 8px;
    }

    .Desc {
      display: inline-flex;
      padding-bottom: 8px;
    }
  }

}
</style>