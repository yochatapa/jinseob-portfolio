import{d as x,u as b,c as d,o as t,a as s,b as u,t as l,e,f as a,F as p,r as h,g as I,_ as P}from"./index-BRtUZKiY.js";const j={class:"project-detail-view"},D={class:"container"},B={class:"details"},N={key:0},S={key:1},T={key:2},V={key:3},C={key:4},F={key:5,class:"tags"},L={class:"tag"},w={key:6},E={key:7},M={key:8},O={key:9},R={class:"problem-solving"},U={key:10},W={key:11},q=x({__name:"ProjectDetail",setup(z){const m=b(),o=m.getters.getLang,c=m.getters["modal/parameter"],r=d(()=>c.cardInfo.description),i=d(()=>c.cardInfo.role),g=d(()=>c.cardInfo.skills),k=d(()=>c.cardInfo.tasks),f=d(()=>c.cardInfo.problemSolvings),y=d(()=>c.cardInfo.impressions);return(A,_)=>(t(),s("div",j,[u("div",D,[u("h1",null,l(e(c).cardInfo.name[e(o)]),1),u("h2",null,l(e(c).cardInfo.name[e(o)==="ko"?"en":"ko"]),1),_[1]||(_[1]=u("div",{class:"slider"},[u("div",{class:"slides"}),u("button",{class:"prev",onclick:"prevSlide()"},"❮"),u("button",{class:"next",onclick:"nextSlide()"},"❯")],-1)),u("div",B,[(typeof r.value.value=="string"?r.value.value:r.value[e(o)])?(t(),s("h3",N,l(e(o)==="ko"?"프로젝트 설명":"Project Description")+":",1)):a("",!0),(typeof r.value.value=="string"?r.value.value:r.value[e(o)])?(t(),s("p",S,l(typeof r.value.value=="string"?r.value.value:r.value[e(o)]),1)):a("",!0),(typeof i.value.value=="string"?i.value.value:i.value[e(o)])?(t(),s("h3",T,l(e(o)==="ko"?"내 역할":"My Role")+":",1)):a("",!0),(typeof i.value.value=="string"?i.value.value:i.value[e(o)])?(t(),s("p",V,l(typeof i.value.value=="string"?i.value.value:i.value[e(o)]),1)):a("",!0),g.value.length>0?(t(),s("h3",C,l(e(o)==="ko"?"사용한 기술":"Technologies Used")+":",1)):a("",!0),g.value.length>0?(t(),s("div",F,[(t(!0),s(p,null,h(g.value,(n,v)=>(t(),s("span",L,l(n),1))),256))])):a("",!0),k.value.length>0?(t(),s("h3",w,l(e(o)==="ko"?"작업한 업무":"Tasks I Worked On")+":",1)):a("",!0),k.value.length>0?(t(),s("ul",E,[(t(!0),s(p,null,h(k.value,(n,v)=>(t(),s("li",null,l(typeof n=="string"?n:n[e(o)]),1))),256))])):a("",!0),f.value.length>0?(t(),s("h3",M,l(e(o)==="ko"?"문제 해결":"Problem Solving")+":",1)):a("",!0),f.value.length>0?(t(),s("ul",O,[(t(!0),s(p,null,h(f.value,(n,v)=>(t(),s("li",R,[u("strong",null,l(e(o)==="ko"?"문제":"Problem")+" "+l(v+1),1),I(" : "+l(typeof n.problem=="string"?n.problem:n.problem[e(o)])+" ",1),_[0]||(_[0]=u("br",null,null,-1)),u("strong",null,l(e(o)==="ko"?"해결 방법":"Solution")+" "+l(v+1),1),I(" : "+l(typeof n.solution=="string"?n.solution:n.solution[e(o)]),1)]))),256))])):a("",!0),y.value.length>0?(t(),s("h3",U,l(e(o)==="ko"?"느낀 점":"Impressions")+":",1)):a("",!0),y.value.length>0?(t(),s("ul",W,[(t(!0),s(p,null,h(y.value,(n,v)=>(t(),s("li",null,l(typeof n=="string"?n:n[e(o)]),1))),256))])):a("",!0)])])]))}}),H=P(q,[["__scopeId","data-v-9294a18e"]]);export{H as default};