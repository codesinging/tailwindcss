(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"57Mr":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".border-solid":{"border-style":"solid"},".border-dashed":{"border-style":"dashed"},".border-dotted":{"border-style":"dotted"},".border-double":{"border-style":"double"},".border-none":{"border-style":"none"}},t("borderStyle"))}}},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n.n(a),r=n("98BF"),o=n("Zb5r"),c=n("AOjV"),i=s.a.createElement;function l(e){var{plugin:t,name:n}=e,a=r.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(n," \u529f\u80fd\u7c7b\uff0c").concat(a.length?"\u53ea\u751f\u6210 ".concat(Object(o.a)(a).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",i("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",i("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",i("code",null,t)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",n," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),i("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",a.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(o.a)(s)," \u53d8\u4f53:"),i(c.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),s=n.n(a),r=(n("Btb4"),n("AI3G")),o=n("iuhU"),c=s.a.createElement;function i(e){var{value:t}=e;return"string"===typeof t?c("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?c(s.a.Fragment,null,c("span",{className:"token punctuation"},"["),t.map((e,n)=>c(a.Fragment,{key:n},c(i,{value:e}),n===t.length-1?null:c("span",{className:"token punctuation"},", "))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof t?c("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var{edits:t,indent:n="",type:s="inserted"}=e;return c("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,r)=>{return c(a.Fragment,{key:r},c("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(l=e)?l:"'".concat(l,"'"),c("span",{className:"token operator"},":")," ",c(i,{value:t[e]}),c("span",{className:"token punctuation"},","),"\n");var l}))}function p(e){var{path:t,add:n,remove:s,before:o,after:i}=e;return t="string"===typeof t?t.split("."):t,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>c(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")),o&&Object(r.a)(o).map((e,n)=>c(a.Fragment,{key:n},"  ".repeat(t.length+2),c("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&c(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&c(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),c("span",{className:"token unchanged"},i&&Object(r.a)(i).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,n)=>c(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),r=n("GAX2").default;e.exports=(e,t,n)=>{const o=[];return function e(t,n,c){let i;(n=n||{}).indent=n.indent||"\t",c=c||"",i=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),c).replace(new RegExp(i.indent,"g"),c+n.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+i.newLine+t.map((a,s)=>{const r=t.length-1===s?i.newLine:","+i.newLineOrSpace;let o=e(a,n,c+n.indent);return n.transform&&(o=n.transform(t,s,o)),i.indent+o+r}).join("")+i.pad+"]";return o.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(r(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";o.push(t);const s="{"+i.newLine+a.map((s,r)=>{const o=a.length-1===r?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),d=l||p?s:e(s,n);let u=e(t[s],n,c+n.indent);return n.transform&&(u=n.transform(t,s,u)),i.indent+String(d)+": "+u+o}).join("")+i.pad+"}";return o.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},KJ57:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-style",function(){return n("URl4")}])},URl4:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("wx14"),s=n("Ff2n"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),i=n("YFqc"),l=n.n(i),p=n("tc9R"),d=n("pOT7"),u=n("vRWG"),b=n("I6Nb"),g=n("57Mr"),m=n.n(g),f=n("8C7G"),h=n("wH44"),v=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:m()},meta:{title:"\u8fb9\u6846\u6837\u5f0f",description:"\u7528\u4e8e\u63a7\u5236\u5143\u7d20\u8fb9\u6846\u6837\u5f0f\u7684\u529f\u80fd\u7c7b\u3002",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u4f7f\u7528",slug:"",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"-1",children:[]},{title:"\u81ea\u5b9a\u4e49",slug:"-2",children:[{title:"\u53d8\u4f53",slug:"-3"},{title:"\u7981\u7528",slug:"-4"}]}]}),O=b.ContentsLayout;function j(e){var{components:t}=e,n=Object(s.a)(e,["components"]);return Object(c.a)(O,Object(a.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"",toc:!0},"\u4f7f\u7528"),Object(c.a)("p",null,"\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"border-{style}")," \u6765\u63a7\u5236\u5143\u7d20\u7684\u8fb9\u6846\u6837\u5f0f\u3002")),Object(c.a)(d.a,{preview:'\n  <div class="grid grid-cols-2 gap-2 lg:grid-cols-3">\n    <div class="border-solid h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-solid\n    </div>\n    <div class="border-dashed h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-dashed\n    </div>\n    <div class="border-dotted h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-dotted\n    </div>\n    <div class="border-double h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-double\n    </div>\n    <div class="border-none h-16 flex-1 rounded-md border-4 border-indigo-500 border-opacity-100 font-extrabold text-indigo-600 flex justify-center items-center">\n      .border-none\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-solid</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-dashed</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-dotted</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-double</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-none</span> border-4 border-light-blue-500 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"-1",toc:!0},"\u54cd\u5e94\u5f0f"),Object(c.a)("p",null,"\u8981\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236\u5143\u7d20\u7684\u8fb9\u6846\u6837\u5f0f\uff0c\u8bf7\u5728\u4efb\u4f55\u73b0\u6709\u7684\u8fb9\u6846\u6837\u5f0f\u529f\u80fd\u7c7b\u4e2d\u6dfb\u52a0 ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"md:border-dotted")," \u6765\u5e94\u7528 ",Object(c.a)("inlineCode",{parentName:"p"},"border-dotted")," \u529f\u80fd\uff0c\u53ea\u5728\u4e2d\u7b49\u5927\u5c0f\u7684\u5c4f\u5e55\u4e0a\u4f7f\u7528\u3002"),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"border-solid ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:border-dotted")," ...",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1")),"\u6587\u6863\u3002"),Object(c.a)(p.a,{level:2,id:"-2",toc:!0},"\u81ea\u5b9a\u4e49"),Object(c.a)(p.a,{level:3,id:"-3",toc:!0},"\u53d8\u4f53")),Object(c.a)(f.a,{plugin:"borderStyle",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:3,id:"-4",toc:!0},"\u7981\u7528")),Object(c.a)(h.a,{plugin:"borderStyle",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=v},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((t,n,a)=>0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),s=n.n(a),r=n("8Kt/"),o=n.n(r),c=s.a.createElement;function i(e){var{suffix:t,children:n}=e,a=n+(t?" - ".concat(t):"");return c(o.a,null,c("title",{key:"title"},a),c("meta",{key:"twitter:title",name:"twitter:title",content:a}),c("meta",{key:"og:title",property:"og:title",content:a}))}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("wx14"),s=n("q1tI"),r=n.n(s),o=n("iuhU"),c=n("ZMKu"),i=r.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},d={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},u={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){var t=Object(s.useRef)(),{0:n,1:r}=Object(s.useState)(!1),{0:o,1:c}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function a(){c({height:t.current.contentDocument.body.scrollHeight})}},[n]),i("iframe",Object(a.a)({},e,{ref:t,onLoad:()=>r(!0),style:o}))}function g(e){var{color:t,snippet:n}=e;return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(e){var{preview:t,src:n,snippet:a,previewClassName:s,color:r="gray"}=e;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):i(b,{src:n,className:Object(o.a)("w-full rounded-t-xl",p[r])}),i(g,{color:r,snippet:a}))}function f(e){var{preview:t,src:n,previewClassName:a,snippet:r,color:l="gray",min:m=!1}=e,f=Object(s.useRef)(),h=Object(c.h)(0),v=Object(s.useRef)(),{0:O,1:j}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{h.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:f,className:"relative rounded-t-xl ".concat(d[l])},i("div",{className:m?"md:w-88":void 0},i(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(h,e=>-e)}},t?i("div",{className:Object(o.a)("rounded-t-xl",a,p[l],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):i(b,{src:n,className:Object(o.a)("w-full rounded-t-xl",p[l],{"pointer-events-none":O})}))),i("div",{ref:v,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(c.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:v,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(m?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(u[l]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:l,snippet:r}))}},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return b}));var a=n("wx14"),s=n("q1tI"),r=n.n(s),o=n("ekQu"),c=n("8Kt/"),i=n.n(c),l=n("nOHt"),p=n("ap0H"),d=n("1Q1k"),u=r.a.createElement;function b(e){var t=Object(l.useRouter)();return u(r.a.Fragment,null,u(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),u(i.a,null,u("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),u("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),u(o.b,Object(a.a)({nav:d.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("rePB"),s=n("q1tI"),r=n.n(s),o=n("AOjV"),c=n("AI3G"),i=n("Zb5r"),l=r.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var{plugin:t,name:n}=e,a=Object(c.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase())),l("div",{className:"prose"},l("p",null,"\u5982\u679c\u60a8\u4e0d\u6253\u7b97\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",n," \u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",l("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",l("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),l(o.a,{path:"corePlugins",before:"...",add:a.reduce((e,t)=>d(d({},e),{},{[t]:!1}),{})}))}}},[["KJ57",0,2,6,1,3,4,5,7]]]);