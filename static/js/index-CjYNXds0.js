import{P as c}from"./chunks/prismjs-q4AeMOAZ.js";import{d as i,y as r,K as u,o,e as t,f as s,t as l,b as g,x as _,g as h,I as m,m as p,j as f,k as v}from"./chunks/@vue-ClYERPLE.js";import{_ as w}from"./index-Cqb7IHIv.js";const C={key:0},k={class:"language-html line-numbers"},x={key:1},P={class:"language-html line-numbers"},$=i({__name:"PrismView",props:{codes:{default:""},language:{default:"html"}},setup(e){return r(()=>{c.highlightAll()}),u(()=>{c.highlightAll()}),(a,d)=>e.language==="js"?(o(),t("pre",C,[s("code",k,l(e.codes),1)])):(o(),t("pre",x,[s("code",P,l(e.codes),1)]))}}),b=e=>(f("data-v-37d6345b"),e=e(),v(),e),I={class:"Preview"},S={class:"Code"},y=b(()=>s("i",null,null,-1)),V=i({__name:"index",props:{codes:{default:""},language:{default:"html"}},setup(e){const a=g(!1);return(d,n)=>(o(),t("section",{class:p(`CodePreview ${a.value?"is-show":"is-hidden"}`)},[s("div",I,[_(d.$slots,"default",{},void 0,!0)]),s("div",S,[s("div",null,[h($,{codes:e.codes,language:e.language},null,8,["codes","language"])])]),s("div",{class:"Toggle",onClick:n[0]||(n[0]=()=>{a.value=!a.value})},[y,m(l(a.value?"隐藏代码":"显示代码"),1)])],2))}}),A=w(V,[["__scopeId","data-v-37d6345b"]]);export{A as C};