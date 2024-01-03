import{P as h}from"./PageBanner-374b1571.js";import{_ as g,r as t,o as w,c as V,b as o,a as s,w as b,F as v,G as p}from"./index-a1ec8525.js";const{VITE_URL:B}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"kc777",BASE_URL:"/Burger/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{pageTitle:{title:"後台管理"},user:{username:"",password:""}}},components:{PageBanner:h},methods:{login(){const l=`${B}admin/signin`;this.$http.post(l,this.user).then(e=>{const{token:r,expired:i}=e.data;document.cookie=`hexToken=${r}; expires=${new Date(i)};`,this.$router.push("/admin/products"),this.$swal({title:e.data.message,icon:"success",showConfirmButton:!1})}).catch(e=>{this.$swal({title:e.response.data.message,icon:"error",showConfirmButton:!1})})}}},x={id:"page-content",class:"container"},T={class:"row"},k=s("div",{class:"page-title"},"管理登入",-1),P={class:"form-floating mb-3"},F=s("label",{for:"email"},"Email address",-1),C={class:"form-floating"},U=s("label",{for:"password"},"Password",-1),$=s("button",{class:"btn btn-lg btn-primary w-100 mt-5",type:"submit"}," 登入 ",-1);function y(l,e,r,i,a,u){const _=t("PageBanner"),c=t("VField"),d=t("ErrorMessage"),f=t("VForm");return w(),V(v,null,[o(_,{pageTitle:a.pageTitle},null,8,["pageTitle"]),s("section",x,[s("div",T,[k,o(f,{class:"form-signin col-8 m-auto",onSubmit:u.login},{default:b(({errors:m})=>[s("div",P,[o(c,{id:"email",name:"email",type:"email",modelValue:a.user.username,"onUpdate:modelValue":e[0]||(e[0]=n=>a.user.username=n),class:p(["form-control",{"is-invalid":m.email}]),placeholder:"name@example.com",rules:"email|required"},null,8,["modelValue","class"]),o(d,{name:"email",class:"invalid-feedback"}),F]),s("div",C,[o(c,{id:"password",name:"password",type:"password",modelValue:a.user.password,"onUpdate:modelValue":e[1]||(e[1]=n=>a.user.password=n),class:p(["form-control",{"is-invalid":m.password}]),placeholder:"Password",rules:"required"},null,8,["modelValue","class"]),o(d,{name:"password",class:"invalid-feedback"}),U]),$]),_:1},8,["onSubmit"])])])],64)}const R=g(E,[["render",y]]);export{R as default};
