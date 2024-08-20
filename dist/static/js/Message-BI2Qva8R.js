var B=Object.defineProperty;var d=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(p,s,t)=>s in p?B(p,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[s]=t,g=(p,s)=>{for(var t in s||(s={}))L.call(s,t)&&m(p,t,s[t]);if(d)for(var t of d(s))_.call(s,t)&&m(p,t,s[t]);return p};import{M as v}from"./MainWrap-BooNQ17e.js";import{C as y}from"./index-CjYNXds0.js";import{m as b}from"./index-Cqb7IHIv.js";import{r as P,J as w,o as S,v as C,z as o,f as i,g as n,I as a,t as h,u as r}from"./chunks/@vue-ClYERPLE.js";import"./chunks/prismjs-q4AeMOAZ.js";import"./chunks/nprogress-BoRHhhMm.js";import"./chunks/vue-router-B6zIzvyw.js";const M={class:"Block",id:"Messsage-Type"},F=i("p",{class:"Title"},"组件使用",-1),j=i("span",{class:"Desc"}," 引入组件的方式使用 ",-1),V=i("div",{class:"Preview-Block"}," 类型 ",-1),T={class:"Preview-Block"},q=i("div",{class:"Preview-Block"}," 停留时间 ",-1),x={class:"Preview-Block"},D=i("div",{class:"Preview-Block"}," 加载 ",-1),N={class:"Preview-Block"},E={class:"Block",id:"Messsage-Fn"},O=i("p",{class:"Title"},"函数调用",-1),z=i("span",{class:"Desc"}," 使用函数的形式调用 ",-1),I=i("div",{class:"Preview-Block"}," 类型 ",-1),J={class:"Preview-Block"},X={__name:"Message",setup(p){const s=P({show:!1,type:"info",closeable:!1,duration:3e3,message:"操作成功！"}),t=u=>{s.show=!0,s.closeable=!1,s.duration=3e3,Object.keys(u).forEach(e=>{s[e]=u[e]})},c=u=>{s.show=!1,b(g({type:"info",closeable:!1,duration:3e3,message:"操作成功！"},u))};return(u,e)=>{const l=w("LButton"),f=w("LMessage");return S(),C(v,{list:[{id:"Messsage-Type",label:"组件使用"},{id:"Messsage-Fn",label:"函数调用"}]},{default:o(()=>[i("div",M,[F,j,n(y,{codes:`    <!-- script -->
    <script setup>
      const messageProps = reactive({
        show: false,
        type: 'info',
        closeable: false,
        duration: 3000,
        message: '操作成功！'
      })
      const onShow = (obj) => {
        messageProps.show = true
        Object.keys(obj).forEach(k => {
          messageProps[k] = obj[k]
        })
      }
    <\/script>

    <!-- template -->
    <template>
      <!-- 类型 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'info', message: '操作提示！' })
      }'>操作提示</LButton>
      <LButton type='success' @click='() => {
        onShow({ type: 'success', message: '操作成功！' })
      }'>操作成功</LButton>
      <LButton type='warning' @click='() => {
        onShow({ type: 'warning', message: '操作警告！' })
      }'>操作警告</LButton>
      <LButton type='warning' @click='() => {
        onShow({ type: 'question', message: '操作帮助！' })
      }'>操作帮助</LButton>
      <LButton type='danger' @click='() => {
        onShow({ type: 'danger', message: '操作严重后果！' })
      }'>操作严重后果</LButton>

      <!-- 停留时间 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'info', message: '操作提示！', duration: 0 })
      }'>提示保持停留</LButton>
      <LButton type='success' @click='() => {
        onShow({ type: 'success', message: '操作成功！', duration: 5000 })
      }'>提示停留5s</LButton>

      <!-- 加载 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'loading', message: '加载中...', duration: 0, closeable: true })
      }'>加载中</LButton>

      <!-- Message组件实例 -->
      <LMessage 
        v-model='messageProps.show' 
        :duration='messageProps.duration' 
        :type='messageProps.type'
        :closeable='messageProps.closeable'
      >{{ messageProps.message }}</LMessage>
    </template>
      `},{default:o(()=>[V,i("div",T,[n(l,{type:"primary",onClick:e[0]||(e[0]=()=>{t({type:"info",message:"操作提示！"})})},{default:o(()=>[a("操作提示")]),_:1}),n(l,{type:"success",onClick:e[1]||(e[1]=()=>{t({type:"success",message:"操作成功！"})})},{default:o(()=>[a("操作成功")]),_:1}),n(l,{type:"warning",onClick:e[2]||(e[2]=()=>{t({type:"warning",message:"操作警告！"})})},{default:o(()=>[a("操作警告")]),_:1}),n(l,{type:"warning",onClick:e[3]||(e[3]=()=>{t({type:"question",message:"操作帮助！"})})},{default:o(()=>[a("操作帮助")]),_:1}),n(l,{type:"danger",onClick:e[4]||(e[4]=()=>{t({type:"danger",message:"操作严重后果！"})})},{default:o(()=>[a("操作严重后果")]),_:1})]),q,i("div",x,[n(l,{type:"primary",onClick:e[5]||(e[5]=()=>{t({type:"info",message:"操作提示！",duration:0})})},{default:o(()=>[a("提示保持停留")]),_:1}),n(l,{type:"success",onClick:e[6]||(e[6]=()=>{t({type:"success",message:"操作成功！",duration:5e3})})},{default:o(()=>[a("提示停留5s")]),_:1})]),D,i("div",N,[n(l,{type:"primary",onClick:e[7]||(e[7]=()=>{t({type:"loading",message:"加载中...",duration:0,closeable:!0})})},{default:o(()=>[a("加载中")]),_:1})])]),_:1})]),i("div",E,[O,z,n(y,{codes:`    <!-- script -->
    <script setup>
      import { useLMessage } from '@/components'

      const onShowFn = (obj) => {
        useLMessage({
          type: 'info',
          closeable: false,
          duration: 3000,
          message: '操作成功！',
          ...obj
        })
      }

    <\/script>

    <!-- template -->
    <template>
      <LButton type='primary' @click='() => {
        onShowFn({ type: 'info', message: '操作提示！' })
      }'>操作提示</LButton>
      <LButton type='success' @click='() => {
        onShowFn({ type: 'success', message: '操作成功！' })
      }'>操作成功</LButton>
      <LButton type='warning' @click='() => {
        onShowFn({ type: 'warning', message: '操作警告！' })
      }'>操作警告</LButton>
      <LButton type='warning' @click='() => {
        onShowFn({ type: 'question', message: '操作帮助！' })
      }'>操作帮助</LButton>
      <LButton type='danger' @click='() => {
        onShowFn({ type: 'danger', message: '操作严重后果！' })
      }'>操作严重后果</LButton>
    </template>
      `},{default:o(()=>[I,i("div",J,[n(l,{type:"primary",onClick:e[8]||(e[8]=()=>{c({type:"info",message:"操作提示！"})})},{default:o(()=>[a("操作提示")]),_:1}),n(l,{type:"success",onClick:e[9]||(e[9]=()=>{c({type:"success",message:"操作成功！"})})},{default:o(()=>[a("操作成功")]),_:1}),n(l,{type:"warning",onClick:e[10]||(e[10]=()=>{c({type:"warning",message:"操作警告！"})})},{default:o(()=>[a("操作警告")]),_:1}),n(l,{type:"warning",onClick:e[11]||(e[11]=()=>{c({type:"question",message:"操作帮助！"})})},{default:o(()=>[a("操作帮助")]),_:1}),n(l,{type:"danger",onClick:e[12]||(e[12]=()=>{c({type:"danger",message:"操作严重后果！"})})},{default:o(()=>[a("操作严重后果")]),_:1})])]),_:1})]),n(f,{modelValue:r(s).show,"onUpdate:modelValue":e[13]||(e[13]=k=>r(s).show=k),duration:r(s).duration,type:r(s).type,closeable:r(s).closeable},{default:o(()=>[a(h(r(s).message),1)]),_:1},8,["modelValue","duration","type","closeable"])]),_:1})}}};export{X as default};
