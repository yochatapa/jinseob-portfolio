import{d as x,u as P,c as d,o as e,a as t,b as r,t as o,e as s,f as a,F as p,r as k,g as b,_ as j}from"./index-C_887-oG.js";const D={class:"project-detail-view"},B={class:"container"},L={class:"details"},N={key:0},S=["href"],T={key:2},V={key:3},C={key:4},F={key:5},R={key:6},U={key:7,class:"tags"},w={class:"tag"},E={key:8},M={key:9},O={key:10},W={key:11},q={class:"problem-solving"},z={key:12},A={key:13},G=x({__name:"ProjectDetail",setup(H){const I=P(),l=I.getters.getLang,u=I.getters["modal/parameter"],c=d(()=>u.cardInfo.description),i=d(()=>u.cardInfo.role),g=d(()=>u.cardInfo.skills),f=d(()=>u.cardInfo.tasks),y=d(()=>u.cardInfo.problemSolvings),m=d(()=>u.cardInfo.impressions),_=d(()=>u.cardInfo.url);return d(()=>u.cardInfo.date),(J,h)=>(e(),t("div",D,[r("div",B,[r("h1",null,o(s(u).cardInfo.name[s(l)]),1),r("h2",null,o(s(u).cardInfo.date),1),h[1]||(h[1]=r("div",{class:"slider"},[r("div",{class:"slides"}),r("button",{class:"prev",onclick:"prevSlide()"},"❮"),r("button",{class:"next",onclick:"nextSlide()"},"❯")],-1)),r("div",L,[_.value?(e(),t("h3",N,o(s(l)==="ko"?"프로젝트 링크":"Project URL")+":",1)):a("",!0),_.value?(e(),t("a",{key:1,href:_.value},o(_.value),9,S)):a("",!0),(typeof c.value.value=="string"?c.value.value:c.value[s(l)])?(e(),t("h3",T,o(s(l)==="ko"?"프로젝트 설명":"Project Description")+":",1)):a("",!0),(typeof c.value.value=="string"?c.value.value:c.value[s(l)])?(e(),t("p",V,o(typeof c.value.value=="string"?c.value.value:c.value[s(l)]),1)):a("",!0),(typeof i.value.value=="string"?i.value.value:i.value[s(l)])?(e(),t("h3",C,o(s(l)==="ko"?"내 역할":"My Role")+":",1)):a("",!0),(typeof i.value.value=="string"?i.value.value:i.value[s(l)])?(e(),t("p",F,o(typeof i.value.value=="string"?i.value.value:i.value[s(l)]),1)):a("",!0),g.value.length>0?(e(),t("h3",R,o(s(l)==="ko"?"사용한 기술":"Technologies Used")+":",1)):a("",!0),g.value.length>0?(e(),t("div",U,[(e(!0),t(p,null,k(g.value,(n,v)=>(e(),t("span",w,o(n),1))),256))])):a("",!0),f.value.length>0?(e(),t("h3",E,o(s(l)==="ko"?"작업한 업무":"Tasks I Worked On")+":",1)):a("",!0),f.value.length>0?(e(),t("ul",M,[(e(!0),t(p,null,k(f.value,(n,v)=>(e(),t("li",null,o(typeof n=="string"?n:n[s(l)]),1))),256))])):a("",!0),y.value.length>0?(e(),t("h3",O,o(s(l)==="ko"?"문제 해결":"Problem Solving")+":",1)):a("",!0),y.value.length>0?(e(),t("ul",W,[(e(!0),t(p,null,k(y.value,(n,v)=>(e(),t("li",q,[r("strong",null,o(s(l)==="ko"?"문제":"Problem")+" "+o(v+1),1),b(" : "+o(typeof n.problem=="string"?n.problem:n.problem[s(l)])+" ",1),h[0]||(h[0]=r("br",null,null,-1)),r("strong",null,o(s(l)==="ko"?"해결 방법":"Solution")+" "+o(v+1),1),b(" : "+o(typeof n.solution=="string"?n.solution:n.solution[s(l)]),1)]))),256))])):a("",!0),m.value.length>0?(e(),t("h3",z,o(s(l)==="ko"?"느낀 점":"Impressions")+":",1)):a("",!0),m.value.length>0?(e(),t("ul",A,[(e(!0),t(p,null,k(m.value,(n,v)=>(e(),t("li",null,o(typeof n=="string"?n:n[s(l)]),1))),256))])):a("",!0)])])]))}}),Q=j(G,[["__scopeId","data-v-1b43b6a8"]]);export{Q as default};
