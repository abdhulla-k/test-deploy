import{r as h,q as g,j as b,C as v,o as c,c as p,a as n,n as x,l as a,b as u,w as k,d as j,t as M,e as w,B as L,m as S,f as B,F as N,k as R,g as V,x as q,h as z,i as A}from"./DgvtTsqe.js";import{_ as U}from"./DLay_i10.js";import"./qHLfKKtd.js";const E={class:"px-4 flex justify-center"},F={__name:"nav-elements",props:{link:{type:String,required:!0},name:{type:String,required:!0}},setup(_){const s=_,e=h(!1),t=h(!1),r=g();b(()=>{i(r.path),v(()=>r.path,l=>{i(l)})});function i(l){e.value=r.path===s.link,s.link!=="/"&&(e.value=l.includes(s.link))}return(l,m)=>{const o=w;return c(),p("li",{class:"relative",onMouseover:m[0]||(m[0]=f=>t.value=!0),onMouseleave:m[1]||(m[1]=f=>t.value=!1)},[n("div",E,[n("div",{class:x(["absolute left-0 top-[-300%] h-[450px] min-h-[1em] w-[1px] self-stretch bg-gradient-to-b from-gray-300 to-transparent shrink",{"animate-shrink":!a(t)&&!a(e),"animate-grow":a(t)||a(e)}])},null,2),u(o,{to:s.link,class:x({"font-bold":a(e)})},{default:k(()=>[j(M(s.name),1)]),_:1},8,["to","class"]),n("div",{class:x(["absolute right-0 top-[-300%] h-[450px] min-h-[1em] w-[1px] self-stretch bg-gradient-to-b from-gray-300 to-transparent",{"animate-shrink":!a(t)&&!a(e),"animate-grow":a(t)||a(e)}])},null,2)])],32)}}},H={__name:"menue-button",emits:["click"],setup(_,{emit:s}){return(e,t)=>(c(),p("button",{class:"flex justify-center items-center gap-2 font-bold font-Manrope rounded-full bg-lightgray border-black border-[1px] px-3 sm:px-5 py-1 sm:py-2 text-sm sm:text-xl",onClick:t[0]||(t[0]=r=>e.$emit("click"))}," Menu "))}},O=L("/img/Logo.png"),D={class:"max-w-max-limit flex justify-center flex-wrap w-[100vw] md:w-full md:px-0 pt-3 md:pt-12"},I={class:"w-full flex justify-between items-center flex-1"},P={class:"hidden header-nav-show:block"},T={class:"font-Manrope flex gap-0 lg:gap-2 lg-xl:gap-14 text-xl"},G={class:"hidden header-nav-show:block"},J={class:"header-nav-show:hidden"},K={__name:"header",setup(_){const{isMenueOpen:s,updateMenueOpen:e}=S("controlaMenue"),t=B(),r=[{name:"Home",link:"/"},{name:"Solutions",link:"/solutions"},{name:"Projects",link:"/projects"},{name:"Library",link:"/library"},{name:"Careers",link:"/careers"},{name:"About Us",link:"/about"}];function i(){e(!0)}function l(){t.push("/contact")}return(m,o)=>{const f=w,y=F,$=V,C=H;return c(),p("header",D,[n("div",I,[n("div",null,[u(f,{to:"/"},{default:k(()=>o[2]||(o[2]=[n("img",{src:O,alt:"logo",class:"mb-2 w-[65%] xs:w-[80%] sm:w-full"},null,-1)])),_:1})]),n("div",P,[n("ul",T,[(c(),p(N,null,R(r,d=>u(y,{key:d.name,name:d.name,link:d.link},null,8,["name","link"])),64))])]),n("div",G,[u($,{"font-size":"md:text-xl lg:text-base",text:"Contact Us",border:"border-[1px]",onClick:o[0]||(o[0]=d=>l())})]),n("div",J,[u(C,{onClick:o[1]||(o[1]=d=>i())})])]),o[3]||(o[3]=n("div",{class:"h-[1px] w-full bg-gradient-to-r from-gray-300 to-transparent"},null,-1))])}}},Q={class:"flex flex-col absolute items-center w-full bg-white overflow-x-hidden",ref:"mouseRef"},W={class:"flex justify-center w-full fixed top-0 z-10 bg-white px-5 lg:px-20"},X={class:"flex flex-col justify-center items-center w-full bg-white px-5 lg:px-20"},te={__name:"default",setup(_){const s=g(),e=h(!1);return b(()=>{s.path==="/"&&(e.value=!0)}),v(()=>s.path,t=>{e.value=t==="/"},{immediate:!0}),(t,r)=>{const i=K,l=U;return c(),p("div",Q,[n("div",W,[u(i)]),n("div",X,[q(t.$slots,"default")]),a(e)?A("",!0):(c(),z(l,{key:0}))],512)}}};export{te as default};
