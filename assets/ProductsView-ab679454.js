import{P as _}from"./PageBanner-374b1571.js";import{_ as p,A as h,r as c,o,c as n,b as i,a as t,F as l,B as m,t as g,w as f,f as P}from"./index-a1ec8525.js";const{VITE_URL:T,VITE_PATH:B}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"kc777",BASE_URL:"/Burger/",MODE:"production",DEV:!1,PROD:!0},V={data(){return{products:[],pageTitle:{title:"餐點菜單"},fullPage:!1}},components:{RouterLink:h,PageBanner:_},methods:{getProducts(){const a=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,onCancel:this.onCancel});this.$http.get(`${T}api/${B}/products/all`).then(s=>{this.products=s.data.products,a.hide()}).catch(s=>{this.$swal({title:s.response.data.message,icon:"error",showConfirmButton:!1})})}},mounted(){this.getProducts()}},$={id:"page-content",class:"container vl-parent",ref:"formContainer"},w={id:"product-list",class:"row"},C={class:"img"},E=["src","alt"],k={class:"title"},v={class:"mb-2"},L=t("br",null,null,-1),R={class:""};function x(a,s,b,A,r,D){const d=c("PageBanner"),u=c("RouterLink");return o(),n(l,null,[i(d,{pageTitle:r.pageTitle},null,8,["pageTitle"]),t("section",$,[t("ul",w,[(o(!0),n(l,null,m(r.products,e=>(o(),n("li",{class:"product-item col-lg-4 col-md-6",key:e.id},[t("div",C,[t("img",{src:e.imageUrl,width:"200",alt:e.title},null,8,E)]),t("div",k,[t("span",v,g(e.title),1),L]),t("div",R,[i(u,{to:`/product/${e.id}`,class:"btn"},{default:f(()=>[P("more")]),_:2},1032,["to"])])]))),128))])],512)],64)}const N=p(V,[["render",x]]);export{N as default};
