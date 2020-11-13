(function(t){function e(e){for(var n,a,r=e[0],u=e[1],l=e[2],p=0,m=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var u=i[r];0!==s[u]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-horizontal-list/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=u;o.push(["0864","chunk-vendors"]),i()})({"0864":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("h1",[t._v("Vue Horizontal List")]),t._m(0),i("simple"),i("position-start"),i("full-width"),i("responsive"),i("left-right-slot"),i("auto-play"),i("image-two"),i("image-three"),i("image-four"),i("image-five"),i("nav-prev-next-slot"),i("item-customization")],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v(" You can find all examples here "),i("a",{attrs:{href:"https://github.com/fuxingloh/vue-horizontal-list/tree/master/examples",target:"_blank"}},[t._v("in this folder")]),t._v(". ")])}],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"vue-horizontal-list"},[t.width.window>t._options.navigation.start?i("div",{staticClass:"vhl-navigation"},[t._hasPrev?i("div",{staticClass:"vhl-btn-left",on:{click:t.prev}},[t._t("nav-prev",[i("svg",{attrs:{fill:t._options.navigation.color,width:"32px",height:"32px",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10.757 12l4.95 4.95a1 1 0 1 1-1.414 1.414l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 1.414L10.757 12z"}})])])],2):t._e(),t._hasNext?i("div",{staticClass:"vhl-btn-right",on:{click:t.next}},[t._t("nav-next",[i("svg",{attrs:{fill:t._options.navigation.color,width:"32px",height:"32px",viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M13.314 12.071l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"}})])])],2):t._e()]):t._e(),i("div",{staticClass:"vhl-container",style:t._style.container},[i("div",{ref:"list",staticClass:"vhl-list",class:t._options.list.class,style:t._style.list,on:{scroll:t.scrollHandler}},[t._l(t._items,(function(e){return i("div",{ref:"item",refInFor:!0,staticClass:"vhl-item",class:t._options.item.class,style:t._style.item},["start"===e.type?t._t("start"):"end"===e.type?t._t("end"):"item"===e.type?t._t("default",[t._v(t._s(e))],{item:e.item}):t._e()],2)})),i("div",{style:t._style.tail})],2)])])},r=[];function u(t){return m(t)||p(t)||c(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(t,e):void 0}}function p(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function m(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var v={name:"VueHorizontalList",props:{items:{type:Array,required:!0},options:{type:Object,required:!1}},data:function(){return{position:0,width:{container:0,window:576},scrollTimer:null,autoPlayInterval:null}},mounted:function(){var t=this;this.$resize=function(){t.width.window=window.innerWidth,t.width.container=t.$refs.container.clientWidth},i("7707").polyfill(),this.$resize(),window.addEventListener("resize",this.$resize),this._options.position.start&&this.$nextTick((function(){t.go(t._options.position.start)})),this._options.autoplay.play&&this.runAutoPlay()},beforeDestroy:function(){window.removeEventListener("resize",this.$resize)},computed:{_items:function(){return[].concat(u(this.$slots["start"]?[{type:"start"}]:[]),u(this.items.map((function(t){return{type:"item",item:t}}))),u(this.$slots["end"]?[{type:"end"}]:[]))},_length:function(){return this._items.length},_options:function(){var t,e,i,n,s,o,a,r,l,c,p,m,d,v,h,f,g,_,b,y,z,w,x,L=this.options;return{navigation:{start:null!==(t=null===L||void 0===L||null===(e=L.navigation)||void 0===e?void 0:e.start)&&void 0!==t?t:992,color:null!==(i=null===L||void 0===L||null===(n=L.navigation)||void 0===n?void 0:n.color)&&void 0!==i?i:"#000"},item:{class:null!==(s=null===L||void 0===L||null===(o=L.item)||void 0===o?void 0:o.class)&&void 0!==s?s:"",padding:null!==(a=null===L||void 0===L||null===(r=L.item)||void 0===r?void 0:r.padding)&&void 0!==a?a:16},list:{class:null!==(l=null===L||void 0===L||null===(c=L.list)||void 0===c?void 0:c.class)&&void 0!==l?l:"",windowed:null!==(p=null===L||void 0===L||null===(m=L.list)||void 0===m?void 0:m.windowed)&&void 0!==p?p:1200,padding:null!==(d=null===L||void 0===L||null===(v=L.list)||void 0===v?void 0:v.padding)&&void 0!==d?d:24},responsive:[].concat(u(null!==(h=null===L||void 0===L?void 0:L.responsive)&&void 0!==h?h:[]),[{end:576,size:1},{start:576,end:768,size:2},{start:768,end:992,size:3},{start:992,end:1200,size:4},{start:1200,size:5}]),position:{start:null!==(f=null===L||void 0===L||null===(g=L.position)||void 0===g?void 0:g.start)&&void 0!==f?f:0},autoplay:{play:null!==(_=null===L||void 0===L||null===(b=L.autoplay)||void 0===b?void 0:b.play)&&void 0!==_&&_,speed:null!==(y=null===L||void 0===L||null===(z=L.autoplay)||void 0===z?void 0:z.speed)&&void 0!==y?y:2e3,repeat:null!==(w=null===L||void 0===L||null===(x=L.autoplay)||void 0===x?void 0:x.repeat)&&void 0!==w&&w}}},_style:function(){var t={container:{},list:{},item:{},tail:{}},e=this._workingWidth,i=this._size;return this.width.window<this._options.list.windowed?(t.container.marginLeft="-".concat(this._options.list.padding,"px"),t.container.marginRight="-".concat(this._options.list.padding,"px"),t.item.width="".concat((e-(i-1)*this._options.item.padding)/i,"px"),t.item.paddingLeft="".concat(this._options.list.padding,"px"),t.item.paddingRight="".concat(this._options.item.padding,"px"),t.item.marginRight="-".concat(this._options.list.padding,"px")):(t.item.paddingLeft="".concat(this._options.item.padding/2,"px"),t.item.paddingRight="".concat(this._options.item.padding/2,"px"),t.container.marginLeft="-".concat(this._options.item.padding/2,"px"),t.container.marginRight="-".concat(this._options.item.padding/2,"px"),t.item.width="".concat((e-(i-1)*this._options.item.padding)/i,"px")),t},_itemWidth:function(){return(this._workingWidth-(this._size-1)*this._options.item.padding)/this._size},_workingWidth:function(){return this.width.window<this._options.list.windowed?this.width.window-2*this._options.list.padding:this.width.container},_size:function(){var t=this._workingWidth;return this._options.responsive.find((function(e){return(!e.start||e.start<=t)&&(!e.end||e.end>=t)})).size},_hasNext:function(){return this._length>this.position+this._size},_hasPrev:function(){return this.position>0}},methods:{go:function(t){var e=this._length-this._size;this.position=t>e?e:t;var i=this._itemWidth*this.position+this.position*this._options.item.padding;this.$refs.list.scrollTo({top:0,left:i,behavior:"smooth"})},runAutoPlay:function(){this.autoPlayInterval=setInterval(function(){this._options.autoplay.repeat&&this.position===this._length-this._size?(this.position=0,this.go(this.position)):(this.position+=1,this.go(this.position))}.bind(this),this._options.autoplay.speed)},stopAutoPlay:function(){clearInterval(this.autoPlayInterval)},prev:function(){this.go(this.position-this._size)},next:function(){this.go(this.position+this._size)},scrollHandler:function(){clearTimeout(this.scrollTimer),this.scrollTimer=setTimeout(function(){var t=this,e=this.$refs["list"].getBoundingClientRect().left,i=this._items.map((function(i,n){var s=t.$refs.item[n].getBoundingClientRect().left;return Math.abs(s-e)}));this.position=i.indexOf(Math.min.apply(Math,u(i)))}.bind(this),50)}},watch:{"options.autoplay.play":function(t,e){t?this.runAutoPlay():this.stopAutoPlay()}}},h=v,f=(i("9701"),i("2877")),g=Object(f["a"])(h,a,r,!1,null,"0b70d80d",null),_=g.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Simple")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},y=[],z={name:"simple",components:{VueHorizontalList:_},data:function(){return{items:[0,1,2,3,4,5,6,7,8,9].map((function(t){return{title:"Item ".concat(t),content:"🚀 Simple content ".concat(t)}})),options:{}}}},w=z,x=(i("c880"),Object(f["a"])(w,b,y,!1,null,"9d137566",null)),L=x.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Position Start From 2")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},C=[],P={name:"position-start",components:{VueHorizontalList:_},data:function(){return{items:[0,1,2,3,4,5,6,7,8,9].map((function(t){return{title:"Item ".concat(t),content:"Position Start From 2 - ".concat(t)}})),options:{position:{start:1}}}}},S=P,I=(i("e741"),Object(f["a"])(S,q,C,!1,null,"c29c3c04",null)),O=I.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Responsive: simple full width carousel")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},$=[],M={name:"full-width",components:{VueHorizontalList:_},data:function(){return{items:[0,1,2,3,4,5,6,7,8,9].map((function(t){return{title:"Full Width Item ".concat(t),content:"A simple full width carousel!"}})),options:{responsive:[{size:1}]}}}},k=M,j=(i("0a8e"),Object(f["a"])(k,A,$,!1,null,"38a0ed2e",null)),E=j.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Responsive: 4, 3, 2, 1")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},T=[],N={name:"responsive",components:{VueHorizontalList:_},data:function(){return{items:[0,1,2,3,4,5,6,7,8,9,10,11,12].map((function(t){return{title:"Responsive 4-3-2-1",content:"Responsive Content ".concat(t,"!")}})),options:{responsive:[{end:576,size:1},{start:576,end:768,size:2},{start:768,end:992,size:3},{size:4}]}}}},H=N,R=(i("db84"),Object(f["a"])(H,V,T,!1,null,"7d9ba0a8",null)),D=R.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Item Customization")]),i("p",[t._v("Remove padding and add a css class 'item-custom-name' to item.")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},U=[],W={name:"item-customization",components:{VueHorizontalList:_},data:function(){return{items:[0,1,2,3,4,5,6,7,8,9].map((function(t){return{title:"Item Customization ".concat(t),content:"Customized Item"}})),options:{item:{class:"item-custom-name",padding:0}}}}},B=W,Q=(i("3726"),i("d3e7"),Object(f["a"])(B,F,U,!1,null,"b8e9d002",null)),J=Q.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Autoplay")]),t._m(0),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v(" Contributed by "),i("a",{attrs:{href:"https://github.com/Draccano",target:"_blank"}},[t._v("@Draccano")])])}],K={name:"auto-play",components:{VueHorizontalList:_},data:function(){return{items:[0,1,2,3,4,5,6,7,8,9].map((function(t){return{title:"Auto play ".concat(t),content:"Auto play, 3000ms."}})),options:{autoplay:{play:!0,repeat:!0,speed:3e3}}}}},X=K,Z=(i("2131"),Object(f["a"])(X,Y,G,!1,null,"4e0b567a",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Slots: Left & Right")]),t._m(0),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"start",fn:function(){return[i("div",{staticClass:"item item-start-end"},[i("div",[i("h3",[t._v("START")]),i("p",[t._v("-")])])])]},proxy:!0},{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}},{key:"end",fn:function(){return[i("div",{staticClass:"item item-start-end"},[i("div",[i("h3",[t._v("END")]),i("p",[t._v("-")])])])]},proxy:!0}])})],1)},it=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v(" Contributed by "),i("a",{attrs:{href:"https://github.com/Draccano",target:"_blank"}},[t._v("@Draccano")])])}],nt={name:"left-right-slot",components:{VueHorizontalList:_},data:function(){return{items:[0,1,2,3,4,5].map((function(t){return{title:"Left Right Slot ".concat(t),content:"3 slots"}})),options:{}}}},st=nt,ot=(i("12fa"),Object(f["a"])(st,et,it,!1,null,"259ad81c",null)),at=ot.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Custom Prev & Next Nav Icon")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"nav-prev",fn:function(){return[i("div",[t._v("👈")])]},proxy:!0},{key:"nav-next",fn:function(){return[i("div",[t._v("👉")])]},proxy:!0},{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},ut=[],lt={name:"nav-prev-next-slot",components:{VueHorizontalList:_},data:function(){return{items:[0,1,2,3,4,5,6,7,8,9].map((function(t){return{title:"Item ".concat(t),content:"Content ".concat(t)}})),options:{}}}},ct=lt,pt=(i("b203"),Object(f["a"])(ct,rt,ut,!1,null,"7dbd1978",null)),mt=pt.exports,dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Image Two")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",{staticClass:"item"},[i("div",{staticClass:"image-boxed"},[i("img",{attrs:{src:n.image}})]),i("div",{staticClass:"content"},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])])]}}])})],1)},vt=[],ht={name:"image-two",components:{VueHorizontalList:_},data:function(){return{items:[{title:"Sed non ante non cras amet",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.",image:"https://picsum.photos/id/1015/600/600"},{title:"Curabitur sit amet nunc",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.",image:"https://picsum.photos/id/1019/600/600"},{title:"Proin pharetra, ante metus",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.",image:"https://picsum.photos/id/1039/600/600"},{title:"Cras pharetra non enim a",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.",image:"https://picsum.photos/id/1042/600/600"},{title:"Proin vulputate, augue eu accumsan",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.",image:"https://picsum.photos/id/1044/600/600"},{title:"Maecenas feugiat magna sapien in",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.",image:"https://picsum.photos/id/1057/600/600"},{title:"Donec commodo sed enim at",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.",image:"https://picsum.photos/id/1063/600/600"},{title:"In bibendum urna et turpis",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.",image:"https://picsum.photos/id/1076/600/600"},{title:"Phasellus iaculis dignissim erat at",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.",image:"https://picsum.photos/id/1083/600/600"}],options:{responsive:[{end:576,size:1},{size:2}]}}}},ft=ht,gt=(i("9f04"),Object(f["a"])(ft,dt,vt,!1,null,"5f191eff",null)),_t=gt.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Image Three")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",[i("div",{staticClass:"image-container"},[i("img",{attrs:{src:n.image}})]),i("div",{staticClass:"subtitle"},[t._v("SUBTITLE • FOCUS")]),i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},yt=[],zt={name:"image-three",components:{VueHorizontalList:_},data:function(){return{items:[{title:"Sed non ante non cras amet",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.",image:"https://picsum.photos/id/1015/600/600"},{title:"Curabitur sit amet nunc",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.",image:"https://picsum.photos/id/1019/600/600"},{title:"Proin pharetra, ante metus",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.",image:"https://picsum.photos/id/1039/600/600"},{title:"Cras pharetra non enim a",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.",image:"https://picsum.photos/id/1042/600/600"},{title:"Proin vulputate, augue eu accumsan",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.",image:"https://picsum.photos/id/1044/600/600"},{title:"Maecenas feugiat magna sapien in",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.",image:"https://picsum.photos/id/1057/600/600"},{title:"Donec commodo sed enim at",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.",image:"https://picsum.photos/id/1063/600/600"},{title:"In bibendum urna et turpis",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.",image:"https://picsum.photos/id/1076/600/600"},{title:"Phasellus iaculis dignissim erat at",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.",image:"https://picsum.photos/id/1083/600/600"}],options:{responsive:[{end:576,size:1},{start:576,end:768,size:2},{size:3}]}}}},wt=zt,xt=(i("25e4"),Object(f["a"])(wt,bt,yt,!1,null,"2c8db498",null)),Lt=xt.exports,qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Image Four")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",[i("div",{staticClass:"image-container"},[i("img",{attrs:{src:n.image}})]),i("div",{staticClass:"subtitle"},[i("div",[t._v("BEST")]),i("div",[t._v("3/5")])]),i("h4",[t._v(t._s(n.title))]),i("p",[i("b",[t._v("$200 USD")]),t._v(" / night")])])]}}])})],1)},Ct=[],Pt={name:"image-four",components:{VueHorizontalList:_},data:function(){return{items:[{title:"Sed non ante non cras amet",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.",image:"https://picsum.photos/id/1015/600/600"},{title:"Curabitur sit amet nunc",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.",image:"https://picsum.photos/id/1019/600/600"},{title:"Proin pharetra, ante metus",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.",image:"https://picsum.photos/id/1039/600/600"},{title:"Cras pharetra non enim a",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.",image:"https://picsum.photos/id/1042/600/600"},{title:"Proin vulputate, augue eu accumsan",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.",image:"https://picsum.photos/id/1044/600/600"},{title:"Maecenas feugiat magna sapien in",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.",image:"https://picsum.photos/id/1057/600/600"},{title:"Donec commodo sed enim at",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.",image:"https://picsum.photos/id/1063/600/600"},{title:"In bibendum urna et turpis",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.",image:"https://picsum.photos/id/1076/600/600"},{title:"Phasellus iaculis dignissim erat at",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.",image:"https://picsum.photos/id/1083/600/600"}],options:{responsive:[{end:576,size:1},{start:576,end:768,size:2},{start:768,end:992,size:3},{size:4}]}}}},St=Pt,It=(i("3ea0"),Object(f["a"])(St,qt,Ct,!1,null,"2cc86a53",null)),Ot=It.exports,At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("Image Five")]),i("vue-horizontal-list",{attrs:{items:t.items,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("div",[i("div",{staticClass:"image-container"},[i("div",{staticClass:"image-content"},[i("img",{attrs:{src:n.image}}),i("div",{staticClass:"image-text"},[i("h2",[t._v(t._s(n.title))])])])]),i("div",{staticClass:"subtitle"},[t._v("SUBTITLE • FOCUS")]),i("p",[t._v(t._s(n.content))])])]}}])})],1)},$t=[],Mt={name:"image-five",components:{VueHorizontalList:_},data:function(){return{items:[{title:"Sed non ante non cras amet",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.",image:"https://picsum.photos/id/1015/600/600"},{title:"Curabitur sit amet nunc",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.",image:"https://picsum.photos/id/1019/600/600"},{title:"Proin pharetra, ante metus",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.",image:"https://picsum.photos/id/1039/600/600"},{title:"Cras pharetra non enim a",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.",image:"https://picsum.photos/id/1042/600/600"},{title:"Proin vulputate, augue eu accumsan",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.",image:"https://picsum.photos/id/1044/600/600"},{title:"Maecenas feugiat magna sapien in",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.",image:"https://picsum.photos/id/1057/600/600"},{title:"Donec commodo sed enim at",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.",image:"https://picsum.photos/id/1063/600/600"},{title:"In bibendum urna et turpis",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.",image:"https://picsum.photos/id/1076/600/600"},{title:"Phasellus iaculis dignissim erat at",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.",image:"https://picsum.photos/id/1083/600/600"}],options:{}}}},kt=Mt,jt=(i("b963"),Object(f["a"])(kt,At,$t,!1,null,"ebd6e4ee",null)),Et=jt.exports,Vt=n["a"].extend({name:"Index",components:{ImageFive:Et,ImageFour:Ot,ImageThree:Lt,ImageTwo:_t,NavPrevNextSlot:mt,LeftRightSlot:at,AutoPlay:tt,ItemCustomization:J,Responsive:D,FullWidth:E,PositionStart:O,Simple:L,VueHorizontalList:_}}),Tt=Vt,Nt=(i("feeb"),i("4529"),Object(f["a"])(Tt,s,o,!1,null,"07d04510",null)),Ht=Nt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Ht)}}).$mount("#app")},"0a8e":function(t,e,i){"use strict";var n=i("2c32"),s=i.n(n);s.a},"0df3":function(t,e,i){},"12fa":function(t,e,i){"use strict";var n=i("f02f"),s=i.n(n);s.a},2131:function(t,e,i){"use strict";var n=i("b633"),s=i.n(n);s.a},"25e4":function(t,e,i){"use strict";var n=i("bdba"),s=i.n(n);s.a},"2c32":function(t,e,i){},3726:function(t,e,i){"use strict";var n=i("9aa0"),s=i.n(n);s.a},"3ea0":function(t,e,i){"use strict";var n=i("5fdf"),s=i.n(n);s.a},4529:function(t,e,i){"use strict";var n=i("6b21"),s=i.n(n);s.a},"5fdf":function(t,e,i){},"6b21":function(t,e,i){},"7a1b":function(t,e,i){},"7cbb":function(t,e,i){},"7d66":function(t,e,i){},8753:function(t,e,i){},9701:function(t,e,i){"use strict";var n=i("0df3"),s=i.n(n);s.a},"9aa0":function(t,e,i){},"9f04":function(t,e,i){"use strict";var n=i("ff68"),s=i.n(n);s.a},a0ec:function(t,e,i){},b203:function(t,e,i){"use strict";var n=i("a0ec"),s=i.n(n);s.a},b633:function(t,e,i){},b963:function(t,e,i){"use strict";var n=i("8753"),s=i.n(n);s.a},bdba:function(t,e,i){},c880:function(t,e,i){"use strict";var n=i("d0e1"),s=i.n(n);s.a},d0e1:function(t,e,i){},d240:function(t,e,i){},d3e7:function(t,e,i){"use strict";var n=i("7a1b"),s=i.n(n);s.a},db84:function(t,e,i){"use strict";var n=i("d240"),s=i.n(n);s.a},e741:function(t,e,i){"use strict";var n=i("7cbb"),s=i.n(n);s.a},f02f:function(t,e,i){},feeb:function(t,e,i){"use strict";var n=i("7d66"),s=i.n(n);s.a},ff68:function(t,e,i){}});
//# sourceMappingURL=app.420d3dcc.js.map