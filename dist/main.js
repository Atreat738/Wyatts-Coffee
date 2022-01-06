(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>g});var o=t(81),a=t.n(o),r=t(645),c=t.n(r),i=t(667),d=t.n(i),s=new URL(t(559),t.b),l=new URL(t(186),t.b),u=new URL(t(913),t.b),p=new URL(t(390),t.b),m=new URL(t(702),t.b),f=c()(a()),h=d()(s),b=d()(l),v=d()(u),C=d()(p),y=d()(m);f.push([e.id,":root {\n    --fs-800: 2.5rem;\n    --fs-600: 2rem;\n    --fs-500: 1.75rem;\n    --fs-400: 1.5rem;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n}\n\nh5, p {\n    margin-top: 0;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #d3d3d3;\n    border-bottom: 2px solid black;\n    font-family: 'Lobster', cursive;\n    \n}\n\nheader ul {\n    display: flex;\n    justify-content: space-around;\n    list-style-type: none;\n    font-size: var(--fs-400);\n}\n\nheader ul li {\n    margin: 0 1em;\n}\n\n .menuLink:hover, .aboutLink:hover, .contactLink:hover, h1:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.homeBackground {\n    background: url("+h+") no-repeat center center; \n    background-size: cover;\n}\n\n.homeDesc {\n    font-size: var(--fs-600);\n    font-family: 'Teko', sans-serif;\n}\n\n/* END HOME stylings \n   BEGIN MENU stylings */\n.menuBackground {\n    background: url("+b+") no-repeat center center;\n    background-size: cover;\n    overflow: scroll;\n}\n\n.menuContainerDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.menuBoard {\n    font-family: 'Teko', sans-serif;\n    margin-top: 2.5em;\n    border: 2px solid black;\n    background-color: #fff8e7;\n    opacity: 0.75;\n    color: #a0522d; \n    padding: 15px;\n}\n\n.drinkH2 {\n    font-family: 'Lobster', cursive;\n    font-size: var(--fs-500);\n    text-decoration: underline;\n}\n\n.foodH2 {\n    font-family: 'Lobster', cursive;\n    font-size: var(--fs-500);\n    text-decoration: underline;\n}\n\n.menuLi {\n    list-style: none;\n    opacity: 0.85;\n    font-size: var(--fs-400);\n    margin: 5px;\n}\n\n/* END MENU stylings \n   BEGIN ABOUT stylings */\n\n .aboutBackground {\n    background: url("+v+") no-repeat center center;\n    background-size: cover;\n    overflow: scroll;\n }\n\n /* Need to create an aboutBoard that hosts the info/wyatt picture, place inside aboutcontainerdiv*/\n .aboutContainerDiv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n }\n\n .aboutBoard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: 'Teko', sans-serif;\n    margin-top: 2.5em;\n    font-size: var(--fs-400);\n    background-color: #008b8b;\n    color: white;\n    opacity: 0.8;\n    max-width: 35%;\n    padding: 1.25em;\n    border: 2px solid black;\n }\n\n @media (max-width: 650px) {\n     .aboutBoard {\n         max-width: 50%;\n     }\n }\n\n .aboutImageDiv {\n     opacity: 1.0 !important;\n     width: 12.5em;\n     height: 12.5em;\n     background: url("+C+") no-repeat center center;\n     background-size: contain;\n } \n\n .aboutImageCaption {\n     text-align: center;\n }\n\n .aboutText {\n     opacity: 0.85;\n }\n\n /* END ABOUT stylings \n   BEGIN CONTACT stylings */\n\n .contactUsBackground {\n    background: url("+y+") no-repeat center center;\n    background-size: cover;\n    overflow: scroll;\n }\n\n .contactContainerDiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n }\n\n .contactBoard {\n    border: 4px solid white;   \n    border-radius: 10px;\n    min-width: 30%;\n    margin-top: 4em;\n    padding: 1.75em;\n    background-color: #008b8b;\n    opacity: 0.8;\n    color: white;\n }\n\n .contactH2 {\n    font-family: 'Lobster', cursive;\n    font-size: var(--fs-800);\n    text-decoration: underline;\n }\n \n .contactInfo {\n    font-family: 'Teko', sans-serif;\n    font-size: var(--fs-500);\n    letter-spacing: 0.15em;\n }\n\n#content {\n    width: 100%;\n    height: 100%;\n    margin-top: 0;\n}\n\n\n",""]);const g=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=t(r[c]);n[i].references--}for(var d=o(e,a),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},559:(e,n,t)=>{e.exports=t.p+"1d8f5be5e89a74210bc9.png"},913:(e,n,t)=>{e.exports=t.p+"1580775bb26e93ad51c6.png"},390:(e,n,t)=>{e.exports=t.p+"54df0836cd5a5a788b60.png"},186:(e,n,t)=>{e.exports=t.p+"eeb2fa53bd529627f620.png"},702:(e,n,t)=>{e.exports=t.p+"fee84beafbe074b08644.png"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),c=t.n(r),i=t(565),d=t.n(i),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};function h(){const e=document.createElement("div");e.classList.add("homeBackground"),e.id="content",document.body.appendChild(e);const n=document.createElement("p");return n.textContent="Wyatt's Coffee provides super fast caffeinated services! We are dedicated to customer service, quality products, and delicious drinks! Come on in today for the boost you need!",n.classList.add("homeDesc"),e.appendChild(n),e}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var b=t(559);(new Image).src=b,document.body.appendChild(function(){const e=document.createElement("header");e.classList.add("header"),document.body.appendChild(e);const n=document.createElement("h1");n.textContent="Wyatt's Coffee",e.appendChild(n),n.addEventListener("click",(()=>{let e=document.querySelector("#content");document.body.removeChild(e),document.body.appendChild(h())}));const t=document.createElement("ul");e.appendChild(t);const o=document.createElement("li"),a=document.createElement("li"),r=document.createElement("li");return o.textContent="Menu",o.classList.add("menuLink"),o.addEventListener("click",(()=>{let e=document.querySelector("#content");document.body.removeChild(e),document.body.appendChild(function(){const e=document.createElement("div");e.classList.add("menuBackground"),e.id="content",document.body.appendChild(e);const n=document.createElement("div");n.classList.add("menuContainerDiv"),e.appendChild(n);const t=document.createElement("div");t.classList.add("menuBoard"),n.appendChild(t);const o=document.createElement("h2");o.textContent="Beverages",o.classList.add("drinkH2"),t.appendChild(o);const a=document.createElement("ul");a.classList.add("drinkList"),t.appendChild(a);const r=document.createElement("li");r.textContent="Medium Roast",r.classList.add("menuLi"),a.appendChild(r);const c=document.createElement("li");c.textContent="Dark Roast",c.classList.add("menuLi"),a.appendChild(c);const i=document.createElement("li");i.textContent="Mocha (Hot/Cold)",i.classList.add("menuLi"),a.appendChild(i);const d=document.createElement("li");d.textContent="White Mocha (Hot/Cold)",d.classList.add("menuLi"),a.appendChild(d);const s=document.createElement("li");s.textContent="Caramel Espresso Latte",s.classList.add("menuLi"),a.appendChild(s);const l=document.createElement("h2");l.textContent="Pastries",l.classList.add("foodH2"),t.appendChild(l);const u=document.createElement("ul");u.classList.add("foodList"),t.appendChild(u);const p=document.createElement("li");p.textContent="Scone (Blueberry/Orange/Cinnamon)",p.classList.add("menuLi"),u.appendChild(p);const m=document.createElement("li");m.textContent="Muffin (Chocolate/Blueberry/Caramel)",m.classList.add("menuLi"),u.appendChild(m);const f=document.createElement("li");f.textContent="Cookie (Chocolate Chip/Snickerdoodle/Sugar)",f.classList.add("menuLi"),u.appendChild(f);const h=document.createElement("li");return h.textContent="Cake Pop (Vanilla/Chocolate/Strawberry)",h.classList.add("menuLi"),u.appendChild(h),e}())})),a.textContent="About",a.classList.add("aboutLink"),a.addEventListener("click",(()=>{let e=document.querySelector("#content");document.body.removeChild(e),document.body.appendChild(function(){const e=document.createElement("div");e.classList.add("aboutBackground"),e.id="content",document.body.appendChild(e);const n=document.createElement("div");n.classList.add("aboutContainerDiv"),e.appendChild(n);const t=document.createElement("div");t.classList.add("aboutBoard"),n.appendChild(t);const o=document.createElement("div");o.classList.add("aboutImageDiv"),t.appendChild(o);const a=document.createElement("p");a.classList.add("aboutImageCaption"),a.textContent="The Doctor Professor of Coffee: Wyatt",t.appendChild(a);const r=document.createElement("p");return r.classList.add("aboutText"),r.textContent="Wyatt's Coffee was established in 2017 when an ambitious little furball came across a radioactive coffee bean. What followed was only natural. The little furball ate the bean, and was gifted a supreme knowledge over coffee and coffee accessories. This naturally lead Wyatt(the furball) to start a coffee shop catering to humans. As you may have seen on our menu, there are no prices. Please offer appeasement gifts toward the sentient feline and enjoy your drink!",t.appendChild(r),e}())})),r.textContent="Contact Us",r.classList.add("contactLink"),r.addEventListener("click",(()=>{let e=document.querySelector("#content");document.body.removeChild(e),document.body.appendChild(function(){const e=document.createElement("div");e.classList.add("contactUsBackground"),e.id="content",document.body.appendChild(e);const n=document.createElement("div");n.classList.add("contactContainerDiv"),e.appendChild(n);const t=document.createElement("div");t.classList.add("contactBoard"),n.appendChild(t);const o=document.createElement("h2");o.classList.add("contactH2"),o.textContent="Contact Us",t.appendChild(o);const a=document.createElement("p");a.classList.add("contactInfo"),a.textContent="Phone Number: 555-555-5555",t.appendChild(a);const r=document.createElement("p");r.classList.add("contactInfo"),r.textContent="Email: DrProfessorCoffee@EspressoPaws.com",t.appendChild(r);const c=document.createElement("p");return c.classList.add("contactInfo"),c.textContent="Mailing Address: 1234 Oak Drive, Madison, Wisconsin, 53558",t.appendChild(c),e}())})),t.appendChild(o),t.appendChild(a),t.appendChild(r),e}()),document.body.appendChild(h())})()})();