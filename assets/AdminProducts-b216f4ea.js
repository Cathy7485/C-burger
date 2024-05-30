import{_ as y,o as l,c as a,a as t,D as i,H as n,F as b,B as w,C as M,K as k,m as x,M as v,r as P,b as f,t as m}from"./index-44048b3b.js";import{d as C,p as V}from"./productPagination-2d7e8b15.js";const B={props:["tempProduct","updateProduct","isNew"],data(){return{product:{}}},methods:{},watch:{tempProduct(){this.product=this.tempProduct}}},N={id:"product-modal-template"},E={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},D={class:"modal-header bg-dark text-white"},L={id:"productModalLabel",class:"modal-title"},T={key:0},S={key:1},I=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-body"},H={class:"row"},F={class:"col-sm-4"},O={class:"mb-2"},K={class:"mb-2"},j=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),q=["src"],z=t("h4",null,"多圖設置",-1),G={key:0},J=["onUpdate:modelValue"],Q=["src","alt"],W={class:"col-sm-8"},X={class:"mb-3"},Y=t("label",{for:"title",class:"form-label"},"標題",-1),Z={class:"row"},$={class:"mb-3 col-md-6"},tt=t("label",{for:"category",class:"form-label"},"分類",-1),et={class:"mb-3 col-md-6"},ot=t("label",{for:"price",class:"form-label"},"單位",-1),st={class:"row"},dt={class:"mb-3 col-md-6"},lt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),at={class:"mb-3 col-md-6"},it=t("label",{for:"price",class:"form-label"},"售價",-1),nt=t("hr",null,null,-1),ct={class:"mb-3"},rt=t("label",{for:"description",class:"form-label"},"產品描述",-1),ut={class:"mb-3"},mt=t("label",{for:"content",class:"form-label"},"說明內容",-1),pt={class:"mb-3"},ht={class:"form-check"},_t=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),bt={class:"modal-footer"},gt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Pt(d,o,e,U,p,c){return l(),a("div",N,[t("div",E,[t("div",A,[t("div",D,[t("h5",L,[e.isNew?(l(),a("span",T,"新增產品")):(l(),a("span",S,"編輯產品"))]),I]),t("div",R,[t("div",H,[t("div",F,[t("div",O,[t("div",K,[j,i(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[n,e.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:"tempProduct.title"},null,8,q)]),t("div",null,[z,Array.isArray(e.tempProduct.imagesUrl)?(l(),a("div",G,[(l(!0),a(b,null,w(e.tempProduct.imagesUrl,(s,u)=>(l(),a(b,{key:u+d.A2},[i(t("input",{type:"text",class:"form-control mt-2 mb-3","onUpdate:modelValue":g=>e.tempProduct.imagesUrl[u]=g},null,8,J),[[n,e.tempProduct.imagesUrl[u]]]),t("img",{src:e.tempProduct.imagesUrl[u],alt:e.tempProduct.title,class:"img-fluid"},null,8,Q)],64))),128)),!e.tempProduct.imagesUrl.length||e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]?(l(),a("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=()=>e.tempProduct.imagesUrl.push("")),type:"button"}," 新增圖片 ")):(l(),a("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[2]||(o[2]=()=>e.tempProduct.imagesUrl.pop())}," 刪除圖片 "))])):M("",!0)])]),t("div",W,[t("div",X,[Y,i(t("input",{id:"title","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.title=s),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[n,e.tempProduct.title]])]),t("div",Z,[t("div",$,[tt,i(t("input",{id:"category","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category=s),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[n,e.tempProduct.category]])]),t("div",et,[ot,i(t("input",{id:"unit","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[n,e.tempProduct.unit]])])]),t("div",st,[t("div",dt,[lt,i(t("input",{id:"origin_price","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[n,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",at,[it,i(t("input",{id:"price","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[n,e.tempProduct.price,void 0,{number:!0}]])])]),nt,t("div",ct,[rt,i(t("textarea",{id:"description","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.description=s),type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
                `,512),[[n,e.tempProduct.description]])]),t("div",ut,[mt,i(t("textarea",{id:"description","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.content=s),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
                `,512),[[n,e.tempProduct.content]])]),t("div",pt,[t("div",ht,[i(t("input",{id:"is_enabled","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[k,e.tempProduct.is_enabled]]),_t])])])])]),t("div",bt,[gt,t("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=(...s)=>e.updateProduct&&e.updateProduct(...s))}," 確認 ")])])])])}const ft=y(B,[["render",Pt]]),{VITE_URL:h,VITE_PATH:_}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"kc777",BASE_URL:"/Burger/",MODE:"production",DEV:!1,PROD:!0},vt={data(){return{tempProduct:{imagesUrl:[]},isNew:!1,page:{},deleteModal:"",productModal:""}},components:{productStore,productModal:ft,deleteModal:C,productPagination:V},computed:{...x(productStore,["products","pages"])},methods:{getProducts(d=1){const o=`${h}api/${_}/admin/products/?page=${d}`;axios.get(o).then(e=>{this.productsData=e.data.products,this.pagination=e.data.pagination}).catch(e=>{swal.fire({icon:"error",title:`${e.response.data.message}`,showConfirmButton:!1})})},updateProduct(){let d=`${h}api/${_}/admin/product`,o="post";this.isNew||(d=`${h}api/${_}/admin/product/${this.tempProduct.id}`,o="put"),this.$http[o](d,{data:this.tempProduct}).then(()=>{this.getProducts(),this.productModal.hide()}).catch(e=>{this.$swal({title:e.response.data.message,icon:"error",showConfirmButton:!1})})},deleteProduct(){const d=`${h}api/${_}/admin/product/${this.tempProduct.id}`;this.$http.delete(d).then(()=>{this.getProducts(),this.deleteModal.hide(),this.$swal({title:"刪除成功！",icon:"success",showConfirmButton:!1})}).catch(o=>{this.$swal({title:o.response.data.message,icon:"error",showConfirmButton:!1})})},openModal(d,o){d==="add"?(this.productModal.show(),this.isNew=!0,this.tempProduct={imagesUrl:[]}):d==="edit"?(this.productModal.show(),this.isNew=!1,this.tempProduct={...o}):d==="del"&&(this.deleteModal.show(),this.tempProduct={...o})}},mounted(){this.getProducts(),this.productModal=new v("#productModal"),this.deleteModal=new v("#deleteModal")}},yt={id:"main",class:"container"},wt={class:"text-end mt-4"},Ut={class:"table mt-4"},Mt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),kt={class:"badge bg-secondary"},xt={class:"text-start"},Ct={class:"text-start"},Vt={class:"text-success"},Bt={class:"btn-group"},Nt=["onClick"],Et=["onClick"],At={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Dt={id:"deleteModal",ref:"deleteModal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"};function Lt(d,o,e,U,p,c){const s=P("productPagination"),u=P("product-modal"),g=P("delete-modal");return l(),a(b,null,[t("div",yt,[t("div",wt,[t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=()=>c.openModal("add"))}," 建立新的產品 ")]),t("table",Ut,[Mt,(l(!0),a(b,null,w(d.products,r=>(l(),a("tbody",{key:r.id},[t("tr",null,[t("td",null,[t("span",kt,m(r.category),1)]),t("td",null,m(r.title),1),t("td",xt,m(r.origin_price),1),t("td",Ct,m(r.price),1),t("td",null,[t("span",Vt,m(r.is_enabled?"啟用":"未啟用"),1)]),t("td",null,[t("div",Bt,[t("button",{type:"button",id:"editBtn",class:"btn btn-outline-primary btn-sm",onClick:()=>c.openModal("edit",r)}," 編輯 ",8,Nt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>c.openModal("del",r)}," 刪除 ",8,Et)])])])]))),128))]),f(s,{pages:d.pages,"get-data":c.getProducts,onChangePage:c.getProducts},null,8,["pages","get-data","onChangePage"])]),t("div",At,[f(u,{"temp-product":p.tempProduct,"is-new":p.isNew,"update-product":c.updateProduct},null,8,["temp-product","is-new","update-product"])],512),t("div",Dt,[f(g,{"temp-product":p.tempProduct,"delete-product":c.deleteProduct},null,8,["temp-product","delete-product"])],512)],64)}const It=y(vt,[["render",Lt]]);export{It as default};
