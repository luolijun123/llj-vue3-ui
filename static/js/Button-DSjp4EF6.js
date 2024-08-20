import{M as i}from"./MainWrap-BooNQ17e.js";import{C as p}from"./index-CjYNXds0.js";import{d as u,J as d,o as l,v as y,z as t,f as s,g as e,I as n,j as c,k as g}from"./chunks/@vue-ClYERPLE.js";import{_ as B}from"./index-Cqb7IHIv.js";import"./chunks/prismjs-q4AeMOAZ.js";import"./chunks/nprogress-BoRHhhMm.js";import"./chunks/vue-router-B6zIzvyw.js";const o=r=>(c("data-v-0fb5e45a"),r=r(),g(),r),_={class:"Block",id:"Button-Type"},f=o(()=>s("p",{class:"Title"},"按钮类型",-1)),L=o(()=>s("span",{class:"Desc"}," 使用 type、bgtype、gradient、radius 属性定义按钮样式 ",-1)),b={class:"Preview-Block"},m={class:"Preview-Block"},h={class:"Preview-Block"},v={class:"Preview-Block"},w={class:"Preview-Block"},k={class:"Block",id:"Button-Size"},z=o(()=>s("p",{class:"Title"},"按钮尺寸",-1)),P=o(()=>s("span",{class:"Desc"}," 使用 size 属性定义按钮尺寸 ",-1)),T={class:"Preview-Block"},D={class:"Block",id:"Button-Disabled"},S=o(()=>s("p",{class:"Title"},"按钮禁用",-1)),x=o(()=>s("span",{class:"Desc"}," 使用 disabled 属性定义按钮尺寸 ",-1)),C={class:"Preview-Block"},I={class:"Block",id:"Button-Attr"},N=o(()=>s("p",{class:"Title"},"按钮属性",-1)),V=o(()=>s("span",{class:"Desc"}," 按钮props属性 ",-1)),A=u({__name:"Button",setup(r){return(M,j)=>{const a=d("LButton");return l(),y(i,{list:[{id:"Button-Type",label:"类型"},{id:"Button-Size",label:"尺寸"},{id:"Button-Disabled",label:"禁用"},{id:"Button-Attr",label:"属性"}]},{default:t(()=>[s("div",_,[f,L,e(p,{codes:`    <!-- 纯色背景 -->
    <LButton type='primary'>主要按钮</LButton>
    <LButton type='success'>成功按钮</LButton>
    <LButton type='warning'>警告按钮</LButton>
    <LButton type='danger'>危险按钮</LButton>
    <LButton type='info'>提示按钮</LButton>

    <!-- 渐变背景  gradient -->
    <LButton gradient type='primary'>主要按钮</LButton>
    <LButton gradient type='success'>成功按钮</LButton>
    <LButton gradient type='warning'>警告按钮</LButton>
    <LButton gradient type='danger'>危险按钮</LButton>
    <LButton gradient type='info'>提示按钮</LButton>

    <!-- 淡色背景  bgtype='light' -->
    <LButton bgtype='light' type='primary'>主要按钮</LButton>
    <LButton bgtype='light' type='success'>成功按钮</LButton>
    <LButton bgtype='light' type='warning'>警告按钮</LButton>
    <LButton bgtype='light' type='danger'>危险按钮</LButton>
    <LButton bgtype='light' type='info'>提示按钮</LButton>

    <!-- 白色背景 bgtype='transparent' -->
    <LButton bgtype='transparent' type='primary'>主要按钮</LButton>
    <LButton bgtype='transparent' type='success'>成功按钮</LButton>
    <LButton bgtype='transparent' type='warning'>警告按钮</LButton>
    <LButton bgtype='transparent' type='danger'>危险按钮</LButton>
    <LButton bgtype='transparent' type='info'>提示按钮</LButton>

    <!-- 圆角 radius -->
    <LButton radius bgtype='transparent' type='primary'>主要按钮</LButton>
    <LButton radius bgtype='transparent' type='success'>成功按钮</LButton>
    <LButton radius bgtype='transparent' type='warning'>警告按钮</LButton>
    <LButton radius bgtype='transparent' type='danger'>危险按钮</LButton>
    <LButton radius bgtype='transparent' type='info'>提示按钮</LButton>
      `},{default:t(()=>[s("div",b,[e(a,{type:"primary"},{default:t(()=>[n("主要按钮")]),_:1}),e(a,{type:"success"},{default:t(()=>[n("成功按钮")]),_:1}),e(a,{type:"warning"},{default:t(()=>[n("警告按钮")]),_:1}),e(a,{type:"danger"},{default:t(()=>[n("危险按钮")]),_:1}),e(a,{type:"info"},{default:t(()=>[n("提示按钮")]),_:1})]),s("div",m,[e(a,{gradient:"",type:"primary"},{default:t(()=>[n("主要按钮")]),_:1}),e(a,{gradient:"",type:"success"},{default:t(()=>[n("成功按钮")]),_:1}),e(a,{gradient:"",type:"warning"},{default:t(()=>[n("警告按钮")]),_:1}),e(a,{gradient:"",type:"danger"},{default:t(()=>[n("危险按钮")]),_:1}),e(a,{gradient:"",type:"info"},{default:t(()=>[n("提示按钮")]),_:1})]),s("div",h,[e(a,{bgtype:"light",type:"primary"},{default:t(()=>[n("主要按钮")]),_:1}),e(a,{bgtype:"light",type:"success"},{default:t(()=>[n("成功按钮")]),_:1}),e(a,{bgtype:"light",type:"warning"},{default:t(()=>[n("警告按钮")]),_:1}),e(a,{bgtype:"light",type:"danger"},{default:t(()=>[n("危险按钮")]),_:1}),e(a,{bgtype:"light",type:"info"},{default:t(()=>[n("提示按钮")]),_:1})]),s("div",v,[e(a,{bgtype:"transparent",type:"primary"},{default:t(()=>[n("主要按钮")]),_:1}),e(a,{bgtype:"transparent",type:"success"},{default:t(()=>[n("成功按钮")]),_:1}),e(a,{bgtype:"transparent",type:"warning"},{default:t(()=>[n("警告按钮")]),_:1}),e(a,{bgtype:"transparent",type:"danger"},{default:t(()=>[n("危险按钮")]),_:1}),e(a,{bgtype:"transparent",type:"info"},{default:t(()=>[n("提示按钮")]),_:1})]),s("div",w,[e(a,{radius:"",bgtype:"transparent",type:"primary"},{default:t(()=>[n("主要按钮")]),_:1}),e(a,{radius:"",bgtype:"transparent",type:"success"},{default:t(()=>[n("成功按钮")]),_:1}),e(a,{radius:"",bgtype:"transparent",type:"warning"},{default:t(()=>[n("警告按钮")]),_:1}),e(a,{radius:"",bgtype:"transparent",type:"danger"},{default:t(()=>[n("危险按钮")]),_:1}),e(a,{radius:"",bgtype:"transparent",type:"info"},{default:t(()=>[n("提示按钮")]),_:1})])]),_:1})]),s("div",k,[z,P,e(p,{codes:`    <!-- 按钮尺寸 size -->
    <LButton size='large' type='primary'>主要按钮</LButton>
    <LButton size='default' type='success'>成功按钮</LButton>
    <LButton size='small' type='warning'>警告按钮</LButton>
    <LButton size='mini' type='danger'>危险按钮</LButton>
      `},{default:t(()=>[s("div",T,[e(a,{size:"large",type:"primary"},{default:t(()=>[n("主要按钮")]),_:1}),e(a,{size:"default",type:"success"},{default:t(()=>[n("成功按钮")]),_:1}),e(a,{size:"small",type:"warning"},{default:t(()=>[n("警告按钮")]),_:1}),e(a,{size:"mini",type:"danger"},{default:t(()=>[n("危险按钮")]),_:1})])]),_:1})]),s("div",D,[S,x,e(p,{codes:`    <!-- 按钮禁用 disabled -->
    <LButton disabled type='primary'>主要按钮</LButton>
    <LButton disabled bgtype='light' type='primary'>主要按钮</LButton>
    <LButton disabled bgtype='transparent' type='primary'>主要按钮</LButton>
      `},{default:t(()=>[s("div",C,[e(a,{disabled:"",type:"primary"},{default:t(()=>[n("主要按钮")]),_:1}),e(a,{disabled:"",bgtype:"light",type:"primary"},{default:t(()=>[n("主要按钮")]),_:1}),e(a,{disabled:"",bgtype:"transparent",type:"primary"},{default:t(()=>[n("主要按钮")]),_:1})])]),_:1})]),s("div",I,[N,V,e(p,{codes:`    const props = defineProps({
        // 按钮类型
        type: {
          default: 'primary',
          validator: function (value) {
            return ['info', 'primary', 'success', 'warning', 'danger'].includes(value as string)
          },
        },
        // 背景类型
        bgtype: {
          type: String,
          validator: function (value) {
            return ['transparent', 'light'].includes(value as string)
          },
        },
        // 按钮大小
        size: {
          default: 'default',
          validator: function (value) {
            return ['large', 'default', 'small', 'mini'].includes(value as string)
          },
        },
        // 是否渐变
        gradient: {
          type: Boolean,
          default: false,
        },
        // 是否圆角显示
        radius: {
          type: Boolean,
          default: false,
        },
        // 是否禁用
        disabled: {
          type: Boolean,
          default: false,
        },
        // 点击节流
        throttle: {
          type: Boolean,
          default: true,
        },
      })`})])]),_:1})}}}),K=B(A,[["__scopeId","data-v-0fb5e45a"]]);export{K as default};
