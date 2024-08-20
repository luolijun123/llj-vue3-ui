<script setup>
/**
 * @Description nav
 * @Author llj
 * @Date 2024-08-05 16:18:10
 */
import { routeNavs } from '@/router'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currantPath = computed(() => route.path)

// 跳转
const onRouteChange = (data) => {
  if (data.fullPath === currantPath.value) return
  router.push({ path: data.fullPath })
}

</script>

<template>
  <nav class="Nav">
    <div v-for="item in routeNavs" :key="item.path" class="group">
      <h2 @click="onRouteChange(item)">{{ item.title }}</h2>
      <div class="list" v-if="item.children">
        <div v-for="iitem in item.children" :class="`item ${iitem.fullPath === currantPath ? 'is-active' : ''}`"
          @click="onRouteChange(iitem)">
          <span>{{ iitem.title }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang='scss'>
.Nav {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 10px 20px;
  border-right: 1px solid var(--layout-border-color);
  font-size: 14px;
  color: #333;
  user-select: none;

  >.group {
    padding-top: 16px;

    h2 {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }

    .list {
      padding-top: 4px;
    }

    .item {
      height: 26px;
      line-height: 26px;
      cursor: pointer;
      opacity: .8;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;

      &:hover {
        opacity: 1;
      }


      &.is-active {
        color: #42b883;
        font-weight: 600;
        opacity: 1;
      }
    }

  }
}
</style>