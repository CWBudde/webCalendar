!function t(e,n,i){function o(a,s){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var n=e[a][1][t];return o(n?n:t)},c,c.exports,t,e,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,e,n){!function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof e&&"undefined"!=typeof e.exports?e.exports=t():"undefined"!=typeof Package?Sortable=t():window.Sortable=t()}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=m({},e),t[M]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1};for(var i in n)!(i in e)&&(e[i]=n[i]);z(e);for(var r in this)"_"===r.charAt(0)&&(this[r]=this[r].bind(this));this.nativeDraggable=e.forceFallback?!1:H,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),F.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){y&&y.state!==t&&(s(y,"display",t?"none":""),!t&&y.state&&T.insertBefore(y,b),y.state=t)}function n(t,e,n){if(t){n=n||U,e=e.split(".");var i=e.shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");do if(">*"===i&&t.parentNode===n||(""===i||t.nodeName.toUpperCase()==i)&&(!e.length||((" "+t.className+" ").match(o)||[]).length==e.length))return t;while(t!==n&&(t=t.parentNode))}return null}function i(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function o(t,e,n){t.addEventListener(e,n,!1)}function r(t,e,n){t.removeEventListener(e,n,!1)}function a(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(k," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(k," ")}}function s(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return U.defaultView&&U.defaultView.getComputedStyle?n=U.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;r>o;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,r,a){var s=U.createEvent("Event"),l=(t||e[M]).options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=y,s.oldIndex=r,s.newIndex=a,e.dispatchEvent(s),l[d]&&l[d].call(t,s)}function c(t,e,n,i,o,r){var a,s,l=t[M],d=l.options.onMove;return a=U.createEvent("Event"),a.initEvent("move",!0,!0),a.to=e,a.from=t,a.dragged=n,a.draggedRect=i,a.related=o||e,a.relatedRect=r||e.getBoundingClientRect(),t.dispatchEvent(a),d&&(s=d.call(l,a)),s}function h(t){t.draggable=!1}function u(){W=!1}function f(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return(e.clientY-(i.top+i.height)>5||e.clientX-(i.right+i.width)>5)&&n}function p(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function g(t){var e=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&e++;return e}function v(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function m(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var b,D,_,y,T,S,w,C,E,x,N,B,O,X,Y,A,I,R={},k=/\s+/g,M="Sortable"+(new Date).getTime(),L=window,U=L.document,j=L.parseInt,H=!!("draggable"in U.createElement("div")),P=function(t){return t=U.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),W=!1,q=Math.abs,F=([].slice,[]),V=v(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s=e.scrollSensitivity,l=e.scrollSpeed,d=t.clientX,c=t.clientY,h=window.innerWidth,u=window.innerHeight;if(C!==n&&(w=e.scroll,C=n,w===!0)){w=n;do if(w.offsetWidth<w.scrollWidth||w.offsetHeight<w.scrollHeight)break;while(w=w.parentNode)}w&&(i=w,o=w.getBoundingClientRect(),r=(q(o.right-d)<=s)-(q(o.left-d)<=s),a=(q(o.bottom-c)<=s)-(q(o.top-c)<=s)),r||a||(r=(s>=h-d)-(s>=d),a=(s>=u-c)-(s>=c),(r||a)&&(i=L)),(R.vx!==r||R.vy!==a||R.el!==i)&&(R.el=i,R.vx=r,R.vy=a,clearInterval(R.pid),i&&(R.pid=setInterval(function(){i===L?L.scrollTo(L.pageXOffset+r*l,L.pageYOffset+a*l):(a&&(i.scrollTop+=a*l),r&&(i.scrollLeft+=r*l))},24)))}},30),z=function(t){var e=t.group;e&&"object"==typeof e||(e=t.group={name:e}),["pull","put"].forEach(function(t){t in e||(e[t]=!0)}),t.groups=" "+e.name+(e.put.join?" "+e.put.join(" "):"")+" "};return t.prototype={constructor:t,_onTapStart:function(t){var e=this,i=this.el,o=this.options,r=t.type,a=t.touches&&t.touches[0],s=(a||t).target,l=s,c=o.filter;if(!("mousedown"===r&&0!==t.button||o.disabled)&&(s=n(s,o.draggable,i))){if(B=g(s),"function"==typeof c){if(c.call(this,t,s,this))return d(e,l,"filter",s,i,B),void t.preventDefault()}else if(c&&(c=c.split(",").some(function(t){return t=n(l,t.trim(),i),t?(d(e,t,"filter",s,i,B),!0):void 0})))return void t.preventDefault();(!o.handle||n(l,o.handle,i))&&this._prepareDragStart(t,a,s)}},_prepareDragStart:function(t,e,n){var i,r=this,s=r.el,d=r.options,c=s.ownerDocument;n&&!b&&n.parentNode===s&&(Y=t,T=s,b=n,D=b.parentNode,S=b.nextSibling,X=d.group,i=function(){r._disableDelayedDrag(),b.draggable=!0,a(b,r.options.chosenClass,!0),r._triggerDragStart(e)},d.ignore.split(",").forEach(function(t){l(b,t.trim(),h)}),o(c,"mouseup",r._onDrop),o(c,"touchend",r._onDrop),o(c,"touchcancel",r._onDrop),d.delay?(o(c,"mouseup",r._disableDelayedDrag),o(c,"touchend",r._disableDelayedDrag),o(c,"touchcancel",r._disableDelayedDrag),o(c,"mousemove",r._disableDelayedDrag),o(c,"touchmove",r._disableDelayedDrag),r._dragStartTimer=setTimeout(i,d.delay)):i())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),r(t,"mouseup",this._disableDelayedDrag),r(t,"touchend",this._disableDelayedDrag),r(t,"touchcancel",this._disableDelayedDrag),r(t,"mousemove",this._disableDelayedDrag),r(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(Y={target:b,clientX:t.clientX,clientY:t.clientY},this._onDragStart(Y,"touch")):this.nativeDraggable?(o(b,"dragend",this),o(T,"dragstart",this._onDragStart)):this._onDragStart(Y,!0);try{U.selection?U.selection.empty():window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){T&&b&&(a(b,this.options.ghostClass,!0),t.active=this,d(this,T,"start",b,T,B))},_emulateDragOver:function(){if(A){if(this._lastX===A.clientX&&this._lastY===A.clientY)return;this._lastX=A.clientX,this._lastY=A.clientY,P||s(_,"display","none");var t=U.elementFromPoint(A.clientX,A.clientY),e=t,n=" "+this.options.group.name,i=F.length;if(e)do{if(e[M]&&e[M].options.groups.indexOf(n)>-1){for(;i--;)F[i]({clientX:A.clientX,clientY:A.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);P||s(_,"display","")}},_onTouchMove:function(e){if(Y){t.active||this._dragStarted(),this._appendGhost();var n=e.touches?e.touches[0]:e,i=n.clientX-Y.clientX,o=n.clientY-Y.clientY,r=e.touches?"translate3d("+i+"px,"+o+"px,0)":"translate("+i+"px,"+o+"px)";I=!0,A=n,s(_,"webkitTransform",r),s(_,"mozTransform",r),s(_,"msTransform",r),s(_,"transform",r),e.preventDefault()}},_appendGhost:function(){if(!_){var t,e=b.getBoundingClientRect(),n=s(b),i=this.options;_=b.cloneNode(!0),a(_,i.ghostClass,!1),a(_,i.fallbackClass,!0),s(_,"top",e.top-j(n.marginTop,10)),s(_,"left",e.left-j(n.marginLeft,10)),s(_,"width",e.width),s(_,"height",e.height),s(_,"opacity","0.8"),s(_,"position","fixed"),s(_,"zIndex","100000"),s(_,"pointerEvents","none"),i.fallbackOnBody&&U.body.appendChild(_)||T.appendChild(_),t=_.getBoundingClientRect(),s(_,"width",2*e.width-t.width),s(_,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),"clone"==X.pull&&(y=b.cloneNode(!0),s(y,"display","none"),T.insertBefore(y,b)),e?("touch"===e?(o(U,"touchmove",this._onTouchMove),o(U,"touchend",this._onDrop),o(U,"touchcancel",this._onDrop)):(o(U,"mousemove",this._onTouchMove),o(U,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,b)),o(U,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(t){var i,o,r,a=this.el,l=this.options,d=l.group,h=d.put,p=X===d,g=l.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!l.dragoverBubble&&t.stopPropagation()),I=!0,X&&!l.disabled&&(p?g||(r=!T.contains(b)):X.pull&&h&&(X.name===d.name||h.indexOf&&~h.indexOf(X.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(V(t,l,this.el),W)return;if(i=n(t.target,l.draggable,a),o=b.getBoundingClientRect(),r)return e(!0),void(y||S?T.insertBefore(b,y||S):g||T.appendChild(b));if(0===a.children.length||a.children[0]===_||a===t.target&&(i=f(a,t))){if(i){if(i.animated)return;m=i.getBoundingClientRect()}e(p),c(T,a,b,o,i,m)!==!1&&(b.contains(a)||(a.appendChild(b),D=a),this._animate(o,b),i&&this._animate(m,i))}else if(i&&!i.animated&&i!==b&&void 0!==i.parentNode[M]){E!==i&&(E=i,x=s(i),N=s(i.parentNode));var v,m=i.getBoundingClientRect(),w=m.right-m.left,C=m.bottom-m.top,B=/left|right|inline/.test(x.cssFloat+x.display)||"flex"==N.display&&0===N["flex-direction"].indexOf("row"),O=i.offsetWidth>b.offsetWidth,Y=i.offsetHeight>b.offsetHeight,A=(B?(t.clientX-m.left)/w:(t.clientY-m.top)/C)>.5,R=i.nextElementSibling,k=c(T,a,b,o,i,m);if(k!==!1){if(W=!0,setTimeout(u,30),e(p),1===k||-1===k)v=1===k;else if(B){var L=b.offsetTop,U=i.offsetTop;v=L===U?i.previousElementSibling===b&&!O||A&&O:U>L}else v=R!==b&&!Y||A&&Y;b.contains(a)||(v&&!R?a.appendChild(b):i.parentNode.insertBefore(b,v?R:i)),D=b.parentNode,this._animate(o,b),this._animate(m,i)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();s(e,"transition","none"),s(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,s(e,"transition","all "+n+"ms"),s(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){s(e,"transition",""),s(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;r(U,"touchmove",this._onTouchMove),r(t,"mouseup",this._onDrop),r(t,"touchend",this._onDrop),r(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(R.pid),clearTimeout(this._dragStartTimer),r(U,"mousemove",this._onTouchMove),this.nativeDraggable&&(r(U,"drop",this),r(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(I&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),_&&_.parentNode.removeChild(_),b&&(this.nativeDraggable&&r(b,"dragend",this),h(b),a(b,this.options.ghostClass,!1),a(b,this.options.chosenClass,!1),T!==D?(O=g(b),O>=0&&(d(null,D,"sort",b,T,B,O),d(this,T,"sort",b,T,B,O),d(null,D,"add",b,T,B,O),d(this,T,"remove",b,T,B,O))):(y&&y.parentNode.removeChild(y),b.nextSibling!==S&&(O=g(b),O>=0&&(d(this,T,"update",b,T,B,O),d(this,T,"sort",b,T,B,O)))),t.active&&((null===O||-1===O)&&(O=B),d(this,T,"end",b,T,B,O),this.save())),T=b=D=_=S=y=w=C=Y=A=I=O=E=x=X=t.active=null)},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?b&&(this._onDragOver(t),i(t)):("drop"===e||"dragend"===e)&&this._onDrop(t)},toArray:function(){for(var t,e=[],i=this.el.children,o=0,r=i.length,a=this.options;r>o;o++)t=i[o],n(t,a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||p(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var r=i.children[o];n(r,this.options.draggable,i)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:(n[t]=e,void("group"===t&&z(n)))},destroy:function(){var t=this.el;t[M]=null,r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),this.nativeDraggable&&(r(t,"dragover",this),r(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),F.splice(F.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:o,off:r,css:s,find:l,is:function(t,e){return!!n(t,e,t)},extend:m,throttle:v,closest:n,toggleClass:a,index:g},t.create=function(e,n){return new t(e,n)},t.version="1.4.2",t})},{}],2:[function(t,e,n){"use strict";var i,o=t("sortablejs");i=document.getElementById("modules-list"),null!=i&&o.create(i),$(".calendar-type").on("change","select",function(){var t=$(this),e=t.val(),n=t.siblings(".calendar-type-input");n.prop("hidden","hidden"),-1!==e.indexOf("-file")?n.filter(".file").prop("hidden",!1):n.filter(":not(.file)").prop("hidden",!1)}).find("select").trigger("change")},{sortablejs:1}]},{},[2]);