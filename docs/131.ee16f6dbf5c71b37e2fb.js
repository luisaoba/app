(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{m22C:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",function(){return p});var o=n("kk3N"),r="$ionRelocated";function i(t,e,n,o){void 0===o&&(o=0),t[r]!==n&&(n?(function(t,e){var n,o,r=t.parentElement,i=t.ownerDocument;if(t&&r){var a=t.offsetTop,s=t.offsetLeft,u=t.offsetWidth,c=t.offsetHeight,l=i.createElement("div"),f=l.style;(n=l.classList).add.apply(n,Array.from(t.classList)),l.classList.add("cloned-input"),l.setAttribute("aria-hidden","true"),f.pointerEvents="none",f.position="absolute",f.top=a+"px",f.left=s+"px",f.width=u+"px",f.height=c+"px";var d=i.createElement("input");(o=d.classList).add.apply(o,Array.from(e.classList)),d.value=e.value,d.type=e.type,d.placeholder=e.placeholder,d.tabIndex=-1,l.appendChild(d),r.appendChild(l),t.style.pointerEvents="none"}e.style.transform="scale(0)"}(t,e),e.style.transform="translate3d("+("rtl"===t.ownerDocument.dir?9999:-9999)+"px,"+o+"px,0)"):function(t,e){t&&t.parentElement&&(Array.from(t.parentElement.querySelectorAll(".cloned-input")).forEach(function(t){return t.remove()}),t.style.pointerEvents=""),e.style.transform="",e.style.opacity=""}(t,e),t[r]=n)}function a(t){return t===t.ownerDocument.activeElement}var s="input, textarea, [no-blur]",u=.3;var c="$ionPaddingTimer";function l(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var n=t.closest("ion-content");if(n){var o=n[c];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[c]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}var f=!0,d=!0;function p(t,e){var n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),p=e.getBoolean("inputBlurring",!0),v=e.getBoolean("scrollPadding",!0),m=new WeakMap,h=new WeakMap;function E(t){var e=(t.shadowRoot||t).querySelector("input"),s=t.closest("ion-content");if(e){if(s&&c&&!m.has(t)){var l=function(t,e,n){if(!n||!e)return function(){};var o=function(n){a(e)&&i(t,e,n)},r=function(){return i(t,e,!1)},s=function(){return o(!0)},u=function(){return o(!1)};return n&&(n.addEventListener("ionScrollStart",s),n.addEventListener("ionScrollEnd",u)),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",s),n.removeEventListener("ionScrollEnd",u),e.addEventListener("ionBlur",r)}}(t,e,s);m.set(t,l)}if(s&&r&&!h.has(t)){var f=function(t,e,n,r){var s,c=function(t){s=Object(o.i)(t)},l=function(c){if(s){var l=Object(o.i)(c);(function(t,e,n){if(e&&l){var o=e.x-l.x,r=e.y-l.y;return o*o+r*r>36}return!1})(0,s)||a(e)||(c.preventDefault(),c.stopPropagation(),function(t,e,n,o){var r=function(t,e,n){return e?function(t,e,n,o){var r=t.top,i=t.bottom,a=e.top+10,s=Math.min(e.bottom,o-n)/2-i,c=a-r,l=Math.round(s<0?-s:c>0?-c:0),f=Math.abs(l)/u;return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-a)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,window.innerHeight):{scrollAmount:0,scrollPadding:0,scrollDuration:0,inputSafeY:0}}(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(i(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){i(t,e,!1,r.inputSafeY),e.focus()}))}(t,e,n,r))}};return t.addEventListener("touchstart",c,!0),t.addEventListener("touchend",l,!0),function(){t.removeEventListener("touchstart",c,!0),t.removeEventListener("touchend",l,!0)}}(t,e,s,n);h.set(t,f)}}}p&&f&&function(t){var e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)n=!1;else{var r=t.activeElement;if(r&&!r.matches(s)){var i=o.target;i!==r&&(i.matches(s)||i.closest(s)||i.classList.contains("input-cover")||(e=!1,setTimeout(function(){e||r.blur()},50)))}}},!1)}(t),v&&d&&function(t,e){t.addEventListener("focusin",function(t){l(t.target,e)}),t.addEventListener("focusout",function(t){l(t.target,0)})}(t,n);for(var y=0,g=Array.from(t.querySelectorAll("ion-input"));y<g.length;y++)E(g[y]);t.body.addEventListener("ionInputDidLoad",function(t){E(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){!function(t){if(c){var e=m.get(t);e&&e(),m.delete(t)}if(r){var n=h.get(t);n&&n(),h.delete(t)}}(t.target)})}}}]);