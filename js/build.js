/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
 // ----------------------------------------------------------------------------
 // Vegas - Fullscreen Backgrounds and Slideshows with jQuery.
 // v1.3.4 - released 2013-12-16 13:28
 // Licensed under the MIT license.
 // http://vegas.jaysalvat.com/
 // ----------------------------------------------------------------------------
 // Copyright (C) 2010-2013 Jay Salvat
 // http://jaysalvat.com/
 // ----------------------------------------------------------------------------

(function(e){function t(a,n){var o={align:"center",valign:"center"};if(e.extend(o,n),0===a.height())return a.load(function(){t(e(this),n)}),void 0;var i,s,g,d=r(),l=d.width,u=d.height,c=a.width(),v=a.height(),p=u/l,f=v/c;p>f?(i=u/f,s=u):(i=l,s=l*f),g={width:i+"px",height:s+"px",top:"auto",bottom:"auto",left:"auto",right:"auto"},isNaN(parseInt(o.valign,10))?"top"==o.valign?g.top=0:"bottom"==o.valign?g.bottom=0:g.top=(u-s)/2:g.top=0-(s-u)/100*parseInt(o.valign,10)+"px",isNaN(parseInt(o.align,10))?"left"==o.align?g.left=0:"right"==o.align?g.right=0:g.left=(l-i)/2:g.left=0-(i-l)/100*parseInt(o.align,10)+"px",a.css(g)}function a(){d.prependTo("body").fadeIn()}function n(){d.fadeOut("fast",function(){e(this).remove()})}function o(){return e("body").css("backgroundImage")?e("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i,"$1"):void 0}function r(){var e=window,t="inner";return"innerWidth"in window||(e=document.documentElement||document.body,t="client"),{width:e[t+"Width"],height:e[t+"Height"]}}var i,s=e("<img />").addClass("vegas-background"),g=e("<div />").addClass("vegas-overlay"),d=e("<div />").addClass("vegas-loading"),l=e(),u=null,c=[],v=0,p=5e3,f=function(){},h={init:function(r){var i={src:o(),align:"center",valign:"center",fade:0,loading:!0,load:function(){},complete:function(){}};e.extend(i,e.vegas.defaults.background,r),i.loading&&a();var g=s.clone();return g.css({position:"fixed",left:"0px",top:"0px"}).bind("load",function(){g!=l&&(e(window).bind("load resize.vegas",function(){t(g,i)}),l.is("img")?(l.stop(),g.hide().insertAfter(l).fadeIn(i.fade,function(){e(".vegas-background").not(this).remove(),e("body").trigger("vegascomplete",[this,v-1]),i.complete.apply(g,[v-1])})):g.hide().prependTo("body").fadeIn(i.fade,function(){e("body").trigger("vegascomplete",[this,v-1]),i.complete.apply(this,[v-1])}),l=g,t(l,i),i.loading&&n(),e("body").trigger("vegasload",[l.get(0),v-1]),i.load.apply(l.get(0),[v-1]),v&&(e("body").trigger("vegaswalk",[l.get(0),v-1]),i.walk.apply(l.get(0),[v-1])))}).attr("src",i.src),e.vegas},destroy:function(t){return t&&"background"!=t||(e(".vegas-background, .vegas-loading").remove(),e(window).unbind("*.vegas"),l=e()),t&&"overlay"!=t||e(".vegas-overlay").remove(),clearInterval(i),e.vegas},overlay:function(t){var a={src:null,opacity:null};return e.extend(a,e.vegas.defaults.overlay,t),g.remove(),g.css({margin:"0",padding:"0",position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"}),a.src===!1&&g.css("backgroundImage","none"),a.src&&g.css("backgroundImage","url("+a.src+")"),a.opacity&&g.css("opacity",a.opacity),g.prependTo("body"),e.vegas},slideshow:function(t,a){var n={step:v,delay:p,preload:!1,loading:!0,backgrounds:c,walk:f};if(e.extend(n,e.vegas.defaults.slideshow,t),n.backgrounds!=c&&(t.step||(n.step=0),t.walk||(n.walk=function(){}),n.preload&&e.vegas("preload",n.backgrounds)),c=n.backgrounds,p=n.delay,v=n.step,f=n.walk,clearInterval(i),!c.length)return e.vegas;var o=function(){0>v&&(v=c.length-1),(v>=c.length||!c[v-1])&&(v=0);var t=c[v++];t.walk=n.walk,t.loading=n.loading,t.fade===void 0&&(t.fade=n.fade),t.fade>n.delay&&(t.fade=n.delay),e.vegas(t)};return o(),a||(u=!1,e("body").trigger("vegasstart",[l.get(0),v-1])),u||(i=setInterval(o,n.delay)),e.vegas},next:function(){var t=v;return v&&(e.vegas("slideshow",{step:v},!0),e("body").trigger("vegasnext",[l.get(0),v-1,t-1])),e.vegas},previous:function(){var t=v;return v&&(e.vegas("slideshow",{step:v-2},!0),e("body").trigger("vegasprevious",[l.get(0),v-1,t-1])),e.vegas},jump:function(t){var a=v;return v&&(e.vegas("slideshow",{step:t},!0),e("body").trigger("vegasjump",[l.get(0),v-1,a-1])),e.vegas},stop:function(){var t=v;return v=0,u=null,clearInterval(i),e("body").trigger("vegasstop",[l.get(0),t-1]),e.vegas},pause:function(){return u=!0,clearInterval(i),e("body").trigger("vegaspause",[l.get(0),v-1]),e.vegas},get:function(e){return null===e||"background"==e?l.get(0):"overlay"==e?g.get(0):"step"==e?v-1:"paused"==e?u:void 0},preload:function(t){var a=[];for(var n in t)if(t[n].src){var o=document.createElement("img");o.src=t[n].src,a.push(o)}return e.vegas}};e.vegas=function(t){return h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist"),void 0):h.init.apply(this,arguments)},e.vegas.defaults={background:{},slideshow:{},overlay:{}}})(jQuery);/**
 * React v0.10.0
 *
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.React=e()}}(function(){return function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return r(n?n:e)},c,c.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t){"use strict";var n=e("./focusNode"),o={componentDidMount:function(){this.props.autoFocus&&n(this.getDOMNode())}};t.exports=o},{"./focusNode":98}],2:[function(e,t){"use strict";function n(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={columnCount:!0,fillOpacity:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},r=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){r.forEach(function(t){o[n(t,e)]=o[e]})});var i={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},a={isUnitlessNumber:o,shorthandPropertyExpansions:i};t.exports=a},{}],3:[function(e,t){"use strict";var n=e("./CSSProperty"),o=e("./dangerousStyleValue"),r=e("./escapeTextForBrowser"),i=e("./hyphenate"),a=e("./memoizeStringOnly"),s=a(function(e){return r(i(e))}),u={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=o(n,r)+";")}return t||null},setValueForStyles:function(e,t){var r=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=o(i,t[i]);if(a)r[i]=a;else{var s=n.shorthandPropertyExpansions[i];if(s)for(var u in s)r[u]="";else r[i]=""}}}};t.exports=u},{"./CSSProperty":2,"./dangerousStyleValue":93,"./escapeTextForBrowser":96,"./hyphenate":108,"./memoizeStringOnly":118}],4:[function(e,t){"use strict";function n(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=M.getPooled(O.change,T,e);y.accumulateTwoPhaseDispatches(t),R.batchedUpdates(r,t)}function r(e){C.enqueueEvents(e),C.processEventQueue()}function i(e,t){I=e,T=t,I.attachEvent("onchange",o)}function a(){I&&(I.detachEvent("onchange",o),I=null,T=null)}function s(e,t,n){return e===P.topChange?n:void 0}function u(e,t,n){e===P.topFocus?(a(),i(t,n)):e===P.topBlur&&a()}function c(e,t){I=e,T=t,N=e.value,S=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(I,"value",A),I.attachEvent("onpropertychange",p)}function l(){I&&(delete I.value,I.detachEvent("onpropertychange",p),I=null,T=null,N=null,S=null)}function p(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==N&&(N=t,o(e))}}function d(e,t,n){return e===P.topInput?n:void 0}function f(e,t,n){e===P.topFocus?(l(),c(t,n)):e===P.topBlur&&l()}function h(e){return e!==P.topSelectionChange&&e!==P.topKeyUp&&e!==P.topKeyDown||!I||I.value===N?void 0:(N=I.value,T)}function m(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function v(e,t,n){return e===P.topClick?n:void 0}var g=e("./EventConstants"),C=e("./EventPluginHub"),y=e("./EventPropagators"),E=e("./ExecutionEnvironment"),R=e("./ReactUpdates"),M=e("./SyntheticEvent"),D=e("./isEventSupported"),x=e("./isTextInputElement"),b=e("./keyOf"),P=g.topLevelTypes,O={change:{phasedRegistrationNames:{bubbled:b({onChange:null}),captured:b({onChangeCapture:null})},dependencies:[P.topBlur,P.topChange,P.topClick,P.topFocus,P.topInput,P.topKeyDown,P.topKeyUp,P.topSelectionChange]}},I=null,T=null,N=null,S=null,_=!1;E.canUseDOM&&(_=D("change")&&(!("documentMode"in document)||document.documentMode>8));var w=!1;E.canUseDOM&&(w=D("input")&&(!("documentMode"in document)||document.documentMode>9));var A={get:function(){return S.get.call(this)},set:function(e){N=""+e,S.set.call(this,e)}},k={eventTypes:O,extractEvents:function(e,t,o,r){var i,a;if(n(t)?_?i=s:a=u:x(t)?w?i=d:(i=h,a=f):m(t)&&(i=v),i){var c=i(e,t,o);if(c){var l=M.getPooled(O.change,c,r);return y.accumulateTwoPhaseDispatches(l),l}}a&&a(e,t,o)}};t.exports=k},{"./EventConstants":14,"./EventPluginHub":16,"./EventPropagators":19,"./ExecutionEnvironment":20,"./ReactUpdates":69,"./SyntheticEvent":76,"./isEventSupported":111,"./isTextInputElement":113,"./keyOf":117}],5:[function(e,t){"use strict";var n=0,o={createReactRootIndex:function(){return n++}};t.exports=o},{}],6:[function(e,t){"use strict";function n(e){switch(e){case g.topCompositionStart:return y.compositionStart;case g.topCompositionEnd:return y.compositionEnd;case g.topCompositionUpdate:return y.compositionUpdate}}function o(e,t){return e===g.topKeyDown&&t.keyCode===h}function r(e,t){switch(e){case g.topKeyUp:return-1!==f.indexOf(t.keyCode);case g.topKeyDown:return t.keyCode!==h;case g.topKeyPress:case g.topMouseDown:case g.topBlur:return!0;default:return!1}}function i(e){this.root=e,this.startSelection=c.getSelection(e),this.startValue=this.getText()}var a=e("./EventConstants"),s=e("./EventPropagators"),u=e("./ExecutionEnvironment"),c=e("./ReactInputSelection"),l=e("./SyntheticCompositionEvent"),p=e("./getTextContentAccessor"),d=e("./keyOf"),f=[9,13,27,32],h=229,m=u.canUseDOM&&"CompositionEvent"in window,v=!m||"documentMode"in document&&document.documentMode>8,g=a.topLevelTypes,C=null,y={compositionEnd:{phasedRegistrationNames:{bubbled:d({onCompositionEnd:null}),captured:d({onCompositionEndCapture:null})},dependencies:[g.topBlur,g.topCompositionEnd,g.topKeyDown,g.topKeyPress,g.topKeyUp,g.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:d({onCompositionStart:null}),captured:d({onCompositionStartCapture:null})},dependencies:[g.topBlur,g.topCompositionStart,g.topKeyDown,g.topKeyPress,g.topKeyUp,g.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:d({onCompositionUpdate:null}),captured:d({onCompositionUpdateCapture:null})},dependencies:[g.topBlur,g.topCompositionUpdate,g.topKeyDown,g.topKeyPress,g.topKeyUp,g.topMouseDown]}};i.prototype.getText=function(){return this.root.value||this.root[p()]},i.prototype.getData=function(){var e=this.getText(),t=this.startSelection.start,n=this.startValue.length-this.startSelection.end;return e.substr(t,e.length-n-t)};var E={eventTypes:y,extractEvents:function(e,t,a,u){var c,p;if(m?c=n(e):C?r(e,u)&&(c=y.compositionEnd):o(e,u)&&(c=y.compositionStart),v&&(C||c!==y.compositionStart?c===y.compositionEnd&&C&&(p=C.getData(),C=null):C=new i(t)),c){var d=l.getPooled(c,a,u);return p&&(d.data=p),s.accumulateTwoPhaseDispatches(d),d}}};t.exports=E},{"./EventConstants":14,"./EventPropagators":19,"./ExecutionEnvironment":20,"./ReactInputSelection":50,"./SyntheticCompositionEvent":74,"./getTextContentAccessor":106,"./keyOf":117}],7:[function(e,t){"use strict";function n(e,t,n){var o=e.childNodes;o[n]!==t&&(t.parentNode===e&&e.removeChild(t),n>=o.length?e.appendChild(t):e.insertBefore(t,o[n]))}var o,r=e("./Danger"),i=e("./ReactMultiChildUpdateTypes"),a=e("./getTextContentAccessor"),s=a();o="textContent"===s?function(e,t){e.textContent=t}:function(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);if(t){var n=e.ownerDocument||document;e.appendChild(n.createTextNode(t))}};var u={dangerouslyReplaceNodeWithMarkup:r.dangerouslyReplaceNodeWithMarkup,updateTextContent:o,processUpdates:function(e,t){for(var a,s=null,u=null,c=0;a=e[c];c++)if(a.type===i.MOVE_EXISTING||a.type===i.REMOVE_NODE){var l=a.fromIndex,p=a.parentNode.childNodes[l],d=a.parentID;s=s||{},s[d]=s[d]||[],s[d][l]=p,u=u||[],u.push(p)}var f=r.dangerouslyRenderMarkup(t);if(u)for(var h=0;h<u.length;h++)u[h].parentNode.removeChild(u[h]);for(var m=0;a=e[m];m++)switch(a.type){case i.INSERT_MARKUP:n(a.parentNode,f[a.markupIndex],a.toIndex);break;case i.MOVE_EXISTING:n(a.parentNode,s[a.parentID][a.fromIndex],a.toIndex);break;case i.TEXT_CONTENT:o(a.parentNode,a.textContent);break;case i.REMOVE_NODE:}}};t.exports=u},{"./Danger":10,"./ReactMultiChildUpdateTypes":56,"./getTextContentAccessor":106}],8:[function(e,t){"use strict";var n=e("./invariant"),o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:16,injectDOMPropertyConfig:function(e){var t=e.Properties||{},r=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},s=e.DOMMutationMethods||{};e.isCustomAttribute&&i._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var u in t){n(!i.isStandardName[u]),i.isStandardName[u]=!0;var c=u.toLowerCase();i.getPossibleStandardName[c]=u;var l=r[u];l&&(i.getPossibleStandardName[l]=u),i.getAttributeName[u]=l||c,i.getPropertyName[u]=a[u]||u;var p=s[u];p&&(i.getMutationMethod[u]=p);var d=t[u];i.mustUseAttribute[u]=d&o.MUST_USE_ATTRIBUTE,i.mustUseProperty[u]=d&o.MUST_USE_PROPERTY,i.hasSideEffects[u]=d&o.HAS_SIDE_EFFECTS,i.hasBooleanValue[u]=d&o.HAS_BOOLEAN_VALUE,i.hasPositiveNumericValue[u]=d&o.HAS_POSITIVE_NUMERIC_VALUE,n(!i.mustUseAttribute[u]||!i.mustUseProperty[u]),n(i.mustUseProperty[u]||!i.hasSideEffects[u]),n(!i.hasBooleanValue[u]||!i.hasPositiveNumericValue[u])}}},r={},i={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasPositiveNumericValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<i._isCustomAttributeFunctions.length;t++){var n=i._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,o=r[e];return o||(r[e]=o={}),t in o||(n=document.createElement(e),o[t]=n[t]),o[t]},injection:o};t.exports=i},{"./invariant":110}],9:[function(e,t){"use strict";function n(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasPositiveNumericValue[e]&&(isNaN(t)||1>t)}var o=e("./DOMProperty"),r=e("./escapeTextForBrowser"),i=e("./memoizeStringOnly"),a=(e("./warning"),i(function(e){return r(e)+'="'})),s={createMarkupForID:function(e){return a(o.ID_ATTRIBUTE_NAME)+r(e)+'"'},createMarkupForProperty:function(e,t){if(o.isStandardName[e]){if(n(e,t))return"";var i=o.getAttributeName[e];return o.hasBooleanValue[e]?r(i):a(i)+r(t)+'"'}return o.isCustomAttribute(e)?null==t?"":a(e)+r(t)+'"':null},setValueForProperty:function(e,t,r){if(o.isStandardName[t]){var i=o.getMutationMethod[t];if(i)i(e,r);else if(n(t,r))this.deleteValueForProperty(e,t);else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+r);else{var a=o.getPropertyName[t];o.hasSideEffects[t]&&e[a]===r||(e[a]=r)}}else o.isCustomAttribute(t)&&(null==r?e.removeAttribute(o.getAttributeName[t]):e.setAttribute(t,""+r))},deleteValueForProperty:function(e,t){if(o.isStandardName[t]){var n=o.getMutationMethod[t];if(n)n(e,void 0);else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t]);else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,r);o.hasSideEffects[t]&&e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}};t.exports=s},{"./DOMProperty":8,"./escapeTextForBrowser":96,"./memoizeStringOnly":118,"./warning":131}],10:[function(e,t){"use strict";function n(e){return e.substring(1,e.indexOf(" "))}var o=e("./ExecutionEnvironment"),r=e("./createNodesFromMarkup"),i=e("./emptyFunction"),a=e("./getMarkupWrap"),s=e("./invariant"),u=/^(<[^ \/>]+)/,c="data-danger-index",l={dangerouslyRenderMarkup:function(e){s(o.canUseDOM);for(var t,l={},p=0;p<e.length;p++)s(e[p]),t=n(e[p]),t=a(t)?t:"*",l[t]=l[t]||[],l[t][p]=e[p];var d=[],f=0;for(t in l)if(l.hasOwnProperty(t)){var h=l[t];for(var m in h)if(h.hasOwnProperty(m)){var v=h[m];h[m]=v.replace(u,"$1 "+c+'="'+m+'" ')}var g=r(h.join(""),i);for(p=0;p<g.length;++p){var C=g[p];C.hasAttribute&&C.hasAttribute(c)&&(m=+C.getAttribute(c),C.removeAttribute(c),s(!d.hasOwnProperty(m)),d[m]=C,f+=1)}}return s(f===d.length),s(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){s(o.canUseDOM),s(t),s("html"!==e.tagName.toLowerCase());var n=r(t,i)[0];e.parentNode.replaceChild(n,e)}};t.exports=l},{"./ExecutionEnvironment":20,"./createNodesFromMarkup":91,"./emptyFunction":94,"./getMarkupWrap":103,"./invariant":110}],11:[function(e,t){"use strict";var n=e("./DOMProperty"),o=n.injection.MUST_USE_ATTRIBUTE,r=n.injection.MUST_USE_PROPERTY,i=n.injection.HAS_BOOLEAN_VALUE,a=n.injection.HAS_SIDE_EFFECTS,s=n.injection.HAS_POSITIVE_NUMERIC_VALUE,u={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,accessKey:null,action:null,allowFullScreen:o|i,allowTransparency:o,alt:null,async:i,autoComplete:null,autoPlay:i,cellPadding:null,cellSpacing:null,charSet:o,checked:r|i,className:r,cols:o|s,colSpan:null,content:null,contentEditable:null,contextMenu:o,controls:r|i,crossOrigin:null,data:null,dateTime:o,defer:i,dir:null,disabled:o|i,download:null,draggable:null,encType:null,form:o,formNoValidate:i,frameBorder:o,height:o,hidden:o|i,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:r,label:null,lang:null,list:null,loop:r|i,max:null,maxLength:o,mediaGroup:null,method:null,min:null,multiple:r|i,muted:r|i,name:null,noValidate:i,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:r|i,rel:null,required:i,role:o,rows:o|s,rowSpan:null,sandbox:null,scope:null,scrollLeft:r,scrollTop:r,seamless:o|i,selected:r|i,size:o|s,span:s,spellCheck:null,src:null,srcDoc:r,srcSet:null,step:null,style:null,tabIndex:null,target:null,title:null,type:null,value:r|a,width:o,wmode:o,autoCapitalize:null,autoCorrect:null,property:null,cx:o,cy:o,d:o,fill:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,offset:o,points:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeLinecap:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{className:"class",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",htmlFor:"for",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeLinecap:"stroke-linecap",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=u},{"./DOMProperty":8}],12:[function(e,t){"use strict";var n=e("./keyOf"),o=[n({ResponderEventPlugin:null}),n({SimpleEventPlugin:null}),n({TapEventPlugin:null}),n({EnterLeaveEventPlugin:null}),n({ChangeEventPlugin:null}),n({SelectEventPlugin:null}),n({CompositionEventPlugin:null}),n({AnalyticsEventPlugin:null}),n({MobileSafariClickEventPlugin:null})];t.exports=o},{"./keyOf":117}],13:[function(e,t){"use strict";var n=e("./EventConstants"),o=e("./EventPropagators"),r=e("./SyntheticMouseEvent"),i=e("./ReactMount"),a=e("./keyOf"),s=n.topLevelTypes,u=i.getFirstReactDOM,c={mouseEnter:{registrationName:a({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:a({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},l=[null,null],p={eventTypes:c,extractEvents:function(e,t,n,a){if(e===s.topMouseOver&&(a.relatedTarget||a.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var p;if(t.window===t)p=t;else{var d=t.ownerDocument;p=d?d.defaultView||d.parentWindow:window}var f,h;if(e===s.topMouseOut?(f=t,h=u(a.relatedTarget||a.toElement)||p):(f=p,h=t),f===h)return null;var m=f?i.getID(f):"",v=h?i.getID(h):"",g=r.getPooled(c.mouseLeave,m,a);g.type="mouseleave",g.target=f,g.relatedTarget=h;var C=r.getPooled(c.mouseEnter,v,a);return C.type="mouseenter",C.target=h,C.relatedTarget=f,o.accumulateEnterLeaveDispatches(g,C,m,v),l[0]=g,l[1]=C,l}};t.exports=p},{"./EventConstants":14,"./EventPropagators":19,"./ReactMount":53,"./SyntheticMouseEvent":79,"./keyOf":117}],14:[function(e,t){"use strict";var n=e("./keyMirror"),o=n({bubbled:null,captured:null}),r=n({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),i={topLevelTypes:r,PropagationPhases:o};t.exports=i},{"./keyMirror":116}],15:[function(e,t){var n=e("./emptyFunction"),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent(t,n)}}):void 0},capture:function(e,t,o){return e.addEventListener?(e.addEventListener(t,o,!0),{remove:function(){e.removeEventListener(t,o,!0)}}):{remove:n}}};t.exports=o},{"./emptyFunction":94}],16:[function(e,t){"use strict";var n=e("./EventPluginRegistry"),o=e("./EventPluginUtils"),r=e("./ExecutionEnvironment"),i=e("./accumulate"),a=e("./forEachAccumulated"),s=e("./invariant"),u=(e("./isEventSupported"),e("./monitorCodeUse"),{}),c=null,l=function(e){if(e){var t=o.executeDispatch,r=n.getPluginModuleForEvent(e);r&&r.executeDispatch&&(t=r.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e},getInstanceHandle:function(){return p},injectEventPluginOrder:n.injectEventPluginOrder,injectEventPluginsByName:n.injectEventPluginsByName},eventNameDispatchConfigs:n.eventNameDispatchConfigs,registrationNameModules:n.registrationNameModules,putListener:function(e,t,n){s(r.canUseDOM),s(!n||"function"==typeof n);var o=u[t]||(u[t]={});o[e]=n},getListener:function(e,t){var n=u[t];return n&&n[e]},deleteListener:function(e,t){var n=u[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in u)delete u[t][e]},extractEvents:function(e,t,o,r){for(var a,s=n.plugins,u=0,c=s.length;c>u;u++){var l=s[u];if(l){var p=l.extractEvents(e,t,o,r);p&&(a=i(a,p))}}return a},enqueueEvents:function(e){e&&(c=i(c,e))},processEventQueue:function(){var e=c;c=null,a(e,l),s(!c)},__purge:function(){u={}},__getListenerBank:function(){return u}};t.exports=d},{"./EventPluginRegistry":17,"./EventPluginUtils":18,"./ExecutionEnvironment":20,"./accumulate":85,"./forEachAccumulated":99,"./invariant":110,"./isEventSupported":111,"./monitorCodeUse":123}],17:[function(e,t){"use strict";function n(){if(a)for(var e in s){var t=s[e],n=a.indexOf(e);if(i(n>-1),!u.plugins[n]){i(t.extractEvents),u.plugins[n]=t;var r=t.eventTypes;for(var c in r)i(o(r[c],t,c))}}}function o(e,t,n){i(!u.eventNameDispatchConfigs[n]),u.eventNameDispatchConfigs[n]=e;var o=e.phasedRegistrationNames;if(o){for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];r(s,t,n)}return!0}return e.registrationName?(r(e.registrationName,t,n),!0):!1}function r(e,t,n){i(!u.registrationNameModules[e]),u.registrationNameModules[e]=t,u.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var i=e("./invariant"),a=null,s={},u={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){i(!a),a=Array.prototype.slice.call(e),n()},injectEventPluginsByName:function(e){var t=!1;for(var o in e)if(e.hasOwnProperty(o)){var r=e[o];s[o]!==r&&(i(!s[o]),s[o]=r,t=!0)}t&&n()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return u.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var o=u.registrationNameModules[t.phasedRegistrationNames[n]];if(o)return o}return null},_resetEventPlugins:function(){a=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];u.plugins.length=0;var t=u.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var o=u.registrationNameModules;for(var r in o)o.hasOwnProperty(r)&&delete o[r]}};t.exports=u},{"./invariant":110}],18:[function(e,t){"use strict";function n(e){return e===h.topMouseUp||e===h.topTouchEnd||e===h.topTouchCancel}function o(e){return e===h.topMouseMove||e===h.topTouchMove}function r(e){return e===h.topMouseDown||e===h.topTouchStart}function i(e,t){var n=e._dispatchListeners,o=e._dispatchIDs;if(Array.isArray(n))for(var r=0;r<n.length&&!e.isPropagationStopped();r++)t(e,n[r],o[r]);else n&&t(e,n,o)}function a(e,t,n){e.currentTarget=f.Mount.getNode(n);var o=t(e,n);return e.currentTarget=null,o}function s(e,t){i(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function u(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var o=0;o<t.length&&!e.isPropagationStopped();o++)if(t[o](e,n[o]))return n[o]}else if(t&&t(e,n))return n;return null}function c(e){var t=e._dispatchListeners,n=e._dispatchIDs;d(!Array.isArray(t));var o=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,o}function l(e){return!!e._dispatchListeners}var p=e("./EventConstants"),d=e("./invariant"),f={Mount:null,injectMount:function(e){f.Mount=e}},h=p.topLevelTypes,m={isEndish:n,isMoveish:o,isStartish:r,executeDirectDispatch:c,executeDispatch:a,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:u,hasDispatches:l,injection:f,useTouchEvents:!1};t.exports=m},{"./EventConstants":14,"./invariant":110}],19:[function(e,t){"use strict";function n(e,t,n){var o=t.dispatchConfig.phasedRegistrationNames[n];return m(e,o)}function o(e,t,o){var r=t?h.bubbled:h.captured,i=n(e,o,r);i&&(o._dispatchListeners=d(o._dispatchListeners,i),o._dispatchIDs=d(o._dispatchIDs,e))}function r(e){e&&e.dispatchConfig.phasedRegistrationNames&&p.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function i(e,t,n){if(n&&n.dispatchConfig.registrationName){var o=n.dispatchConfig.registrationName,r=m(e,o);r&&(n._dispatchListeners=d(n._dispatchListeners,r),n._dispatchIDs=d(n._dispatchIDs,e))}}function a(e){e&&e.dispatchConfig.registrationName&&i(e.dispatchMarker,null,e)}function s(e){f(e,r)}function u(e,t,n,o){p.injection.getInstanceHandle().traverseEnterLeave(n,o,i,e,t)}function c(e){f(e,a)}var l=e("./EventConstants"),p=e("./EventPluginHub"),d=e("./accumulate"),f=e("./forEachAccumulated"),h=l.PropagationPhases,m=p.getListener,v={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:u};t.exports=v},{"./EventConstants":14,"./EventPluginHub":16,"./accumulate":85,"./forEachAccumulated":99}],20:[function(e,t){"use strict";var n="undefined"!=typeof window,o={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&(window.addEventListener||window.attachEvent),isInWorker:!n};t.exports=o},{}],21:[function(e,t){"use strict";function n(e){u(null==e.props.checkedLink||null==e.props.valueLink)}function o(e){n(e),u(null==e.props.value&&null==e.props.onChange)}function r(e){n(e),u(null==e.props.checked&&null==e.props.onChange)}function i(e){this.props.valueLink.requestChange(e.target.value)}function a(e){this.props.checkedLink.requestChange(e.target.checked)}var s=e("./ReactPropTypes"),u=e("./invariant"),c=(e("./warning"),{Mixin:{propTypes:{value:function(){},checked:function(){},onChange:s.func}},getValue:function(e){return e.props.valueLink?(o(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(r(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(o(e),i):e.props.checkedLink?(r(e),a):e.props.onChange}});t.exports=c},{"./ReactPropTypes":62,"./invariant":110,"./warning":131}],22:[function(e,t){"use strict";var n=e("./EventConstants"),o=e("./emptyFunction"),r=n.topLevelTypes,i={eventTypes:null,extractEvents:function(e,t,n,i){if(e===r.topTouchStart){var a=i.target;a&&!a.onclick&&(a.onclick=o)}}};t.exports=i},{"./EventConstants":14,"./emptyFunction":94}],23:[function(e,t){"use strict";var n=e("./invariant"),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},r=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},i=function(e,t,n){var o=this;if(o.instancePool.length){var r=o.instancePool.pop();return o.call(r,e,t,n),r}return new o(e,t,n)},a=function(e,t,n,o,r){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,o,r),a}return new i(e,t,n,o,r)},s=function(e){var t=this;n(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},u=10,c=o,l=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=u),n.release=s,n},p={addPoolingTo:l,oneArgumentPooler:o,twoArgumentPooler:r,threeArgumentPooler:i,fiveArgumentPooler:a};t.exports=p},{"./invariant":110}],24:[function(e,t){"use strict";var n=e("./DOMPropertyOperations"),o=e("./EventPluginUtils"),r=e("./ReactChildren"),i=e("./ReactComponent"),a=e("./ReactCompositeComponent"),s=e("./ReactContext"),u=e("./ReactCurrentOwner"),c=e("./ReactDOM"),l=e("./ReactDOMComponent"),p=e("./ReactDefaultInjection"),d=e("./ReactInstanceHandles"),f=e("./ReactMount"),h=e("./ReactMultiChild"),m=e("./ReactPerf"),v=e("./ReactPropTypes"),g=e("./ReactServerRendering"),C=e("./ReactTextComponent"),y=e("./onlyChild");p.inject();var E={Children:{map:r.map,forEach:r.forEach,only:y},DOM:c,PropTypes:v,initializeTouchEvents:function(e){o.useTouchEvents=e},createClass:a.createClass,constructAndRenderComponent:f.constructAndRenderComponent,constructAndRenderComponentByID:f.constructAndRenderComponentByID,renderComponent:m.measure("React","renderComponent",f.renderComponent),renderComponentToString:g.renderComponentToString,renderComponentToStaticMarkup:g.renderComponentToStaticMarkup,unmountComponentAtNode:f.unmountComponentAtNode,isValidClass:a.isValidClass,isValidComponent:i.isValidComponent,withContext:s.withContext,__internals:{Component:i,CurrentOwner:u,DOMComponent:l,DOMPropertyOperations:n,InstanceHandles:d,Mount:f,MultiChild:h,TextComponent:C}};E.version="0.10.0",t.exports=E},{"./DOMPropertyOperations":9,"./EventPluginUtils":18,"./ReactChildren":26,"./ReactComponent":27,"./ReactCompositeComponent":29,"./ReactContext":30,"./ReactCurrentOwner":31,"./ReactDOM":32,"./ReactDOMComponent":34,"./ReactDefaultInjection":44,"./ReactInstanceHandles":51,"./ReactMount":53,"./ReactMultiChild":55,"./ReactPerf":58,"./ReactPropTypes":62,"./ReactServerRendering":66,"./ReactTextComponent":68,"./onlyChild":126}],25:[function(e,t){"use strict";var n=e("./ReactMount"),o=e("./invariant"),r={getDOMNode:function(){return o(this.isMounted()),n.getNode(this._rootNodeID)}};t.exports=r},{"./ReactMount":53,"./invariant":110}],26:[function(e,t){"use strict";function n(e,t){this.forEachFunction=e,this.forEachContext=t}function o(e,t,n,o){var r=e;r.forEachFunction.call(r.forEachContext,t,o)}function r(e,t,r){if(null==e)return e;var i=n.getPooled(t,r);l(e,o,i),n.release(i)}function i(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function a(e,t,n,o){var r=e,i=r.mapResult,a=r.mapFunction.call(r.mapContext,t,o);c(!i.hasOwnProperty(n)),i[n]=a}function s(e,t,n){if(null==e)return e;var o={},r=i.getPooled(o,t,n);return l(e,a,r),i.release(r),o}var u=e("./PooledClass"),c=e("./invariant"),l=e("./traverseAllChildren"),p=u.twoArgumentPooler,d=u.threeArgumentPooler;u.addPoolingTo(n,p),u.addPoolingTo(i,d);var f={forEach:r,map:s};t.exports=f},{"./PooledClass":23,"./invariant":110,"./traverseAllChildren":130}],27:[function(e,t){"use strict";var n=e("./ReactCurrentOwner"),o=e("./ReactOwner"),r=e("./ReactUpdates"),i=e("./invariant"),a=e("./keyMirror"),s=e("./merge"),u=(e("./monitorCodeUse"),a({MOUNTED:null,UNMOUNTED:null})),c=!1,l=null,p=null,d={injection:{injectEnvironment:function(e){i(!c),p=e.mountImageIntoNode,l=e.unmountIDFromEnvironment,d.BackendIDOperations=e.BackendIDOperations,d.ReactReconcileTransaction=e.ReactReconcileTransaction,c=!0}},isValidComponent:function(e){if(!e||!e.type||!e.type.prototype)return!1;var t=e.type.prototype;return"function"==typeof t.mountComponentIntoNode&&"function"==typeof t.receiveComponent},LifeCycle:u,BackendIDOperations:null,ReactReconcileTransaction:null,Mixin:{isMounted:function(){return this._lifeCycleState===u.MOUNTED},setProps:function(e,t){this.replaceProps(s(this._pendingProps||this.props,e),t)},replaceProps:function(e,t){i(this.isMounted()),i(0===this._mountDepth),this._pendingProps=e,r.enqueueUpdate(this,t)},construct:function(e,t){this.props=e||{},this._owner=n.current,this._lifeCycleState=u.UNMOUNTED,this._pendingProps=null,this._pendingCallbacks=null,this._pendingOwner=this._owner;var o=arguments.length-1;if(1===o)this.props.children=t;else if(o>1){for(var r=Array(o),i=0;o>i;i++)r[i]=arguments[i+1];this.props.children=r}},mountComponent:function(e,t,n){i(!this.isMounted());var r=this.props;null!=r.ref&&o.addComponentAsRefTo(this,r.ref,this._owner),this._rootNodeID=e,this._lifeCycleState=u.MOUNTED,this._mountDepth=n},unmountComponent:function(){i(this.isMounted());var e=this.props;null!=e.ref&&o.removeComponentAsRefFrom(this,e.ref,this._owner),l(this._rootNodeID),this._rootNodeID=null,this._lifeCycleState=u.UNMOUNTED},receiveComponent:function(e,t){i(this.isMounted()),this._pendingOwner=e._owner,this._pendingProps=e.props,this._performUpdateIfNecessary(t)},performUpdateIfNecessary:function(){var e=d.ReactReconcileTransaction.getPooled();e.perform(this._performUpdateIfNecessary,this,e),d.ReactReconcileTransaction.release(e)},_performUpdateIfNecessary:function(e){if(null!=this._pendingProps){var t=this.props,n=this._owner;this.props=this._pendingProps,this._owner=this._pendingOwner,this._pendingProps=null,this.updateComponent(e,t,n)}},updateComponent:function(e,t,n){var r=this.props;(this._owner!==n||r.ref!==t.ref)&&(null!=t.ref&&o.removeComponentAsRefFrom(this,t.ref,n),null!=r.ref&&o.addComponentAsRefTo(this,r.ref,this._owner))},mountComponentIntoNode:function(e,t,n){var o=d.ReactReconcileTransaction.getPooled();o.perform(this._mountComponentIntoNode,this,e,t,o,n),d.ReactReconcileTransaction.release(o)},_mountComponentIntoNode:function(e,t,n,o){var r=this.mountComponent(e,n,0);p(r,t,o)},isOwnedBy:function(e){return this._owner===e},getSiblingByRef:function(e){var t=this._owner;return t&&t.refs?t.refs[e]:null}}};t.exports=d},{"./ReactCurrentOwner":31,"./ReactOwner":57,"./ReactUpdates":69,"./invariant":110,"./keyMirror":116,"./merge":119,"./monitorCodeUse":123}],28:[function(e,t){"use strict";var n=e("./ReactDOMIDOperations"),o=e("./ReactMarkupChecksum"),r=e("./ReactMount"),i=e("./ReactPerf"),a=e("./ReactReconcileTransaction"),s=e("./getReactRootElementInContainer"),u=e("./invariant"),c=1,l=9,p={ReactReconcileTransaction:a,BackendIDOperations:n,unmountIDFromEnvironment:function(e){r.purgeID(e)},mountImageIntoNode:i.measure("ReactComponentBrowserEnvironment","mountImageIntoNode",function(e,t,n){if(u(t&&(t.nodeType===c||t.nodeType===l)),n){if(o.canReuseMarkup(e,s(t)))return;u(t.nodeType!==l)}u(t.nodeType!==l),t.innerHTML=e})};t.exports=p},{"./ReactDOMIDOperations":36,"./ReactMarkupChecksum":52,"./ReactMount":53,"./ReactPerf":58,"./ReactReconcileTransaction":64,"./getReactRootElementInContainer":105,"./invariant":110}],29:[function(e,t){"use strict";
function n(e,t){for(var n in t)t.hasOwnProperty(n)&&R("function"==typeof t[n])}function o(e,t){var n=T[t];_.hasOwnProperty(t)&&R(n===O.OVERRIDE_BASE),e.hasOwnProperty(t)&&R(n===O.DEFINE_MANY||n===O.DEFINE_MANY_MERGED)}function r(e){var t=e._compositeLifeCycleState;R(e.isMounted()||t===S.MOUNTING),R(t!==S.RECEIVING_STATE),R(t!==S.UNMOUNTING)}function i(e,t){R(!l(t)),R(!p.isValidComponent(t));var n=e.componentConstructor,r=n.prototype;for(var i in t){var a=t[i];if(t.hasOwnProperty(i))if(o(r,i),N.hasOwnProperty(i))N[i](e,a);else{var s=i in T,d=i in r,f=a&&a.__reactDontBind,h="function"==typeof a,m=h&&!s&&!d&&!f;m?(r.__reactAutoBindMap||(r.__reactAutoBindMap={}),r.__reactAutoBindMap[i]=a,r[i]=a):r[i]=d?T[i]===O.DEFINE_MANY_MERGED?u(r[i],a):c(r[i],a):a}}}function a(e,t){if(t)for(var n in t){var o=t[n];if(!t.hasOwnProperty(n))return;var r=n in e,i=o;if(r){var a=e[n],s=typeof a,u=typeof o;R("function"===s&&"function"===u),i=c(a,o)}e[n]=i,e.componentConstructor[n]=i}}function s(e,t){return R(e&&t&&"object"==typeof e&&"object"==typeof t),b(t,function(t,n){R(void 0===e[n]),e[n]=t}),e}function u(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);return null==n?o:null==o?n:s(n,o)}}function c(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e){return e instanceof Function&&"componentConstructor"in e&&e.componentConstructor instanceof Function}var p=e("./ReactComponent"),d=e("./ReactContext"),f=e("./ReactCurrentOwner"),h=e("./ReactErrorUtils"),m=e("./ReactOwner"),v=e("./ReactPerf"),g=e("./ReactPropTransferer"),C=e("./ReactPropTypeLocations"),y=(e("./ReactPropTypeLocationNames"),e("./ReactUpdates")),E=e("./instantiateReactComponent"),R=e("./invariant"),M=e("./keyMirror"),D=e("./merge"),x=e("./mixInto"),b=(e("./monitorCodeUse"),e("./objMap")),P=e("./shouldUpdateReactComponent"),O=(e("./warning"),M({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null})),I=[],T={mixins:O.DEFINE_MANY,statics:O.DEFINE_MANY,propTypes:O.DEFINE_MANY,contextTypes:O.DEFINE_MANY,childContextTypes:O.DEFINE_MANY,getDefaultProps:O.DEFINE_MANY_MERGED,getInitialState:O.DEFINE_MANY_MERGED,getChildContext:O.DEFINE_MANY_MERGED,render:O.DEFINE_ONCE,componentWillMount:O.DEFINE_MANY,componentDidMount:O.DEFINE_MANY,componentWillReceiveProps:O.DEFINE_MANY,shouldComponentUpdate:O.DEFINE_ONCE,componentWillUpdate:O.DEFINE_MANY,componentDidUpdate:O.DEFINE_MANY,componentWillUnmount:O.DEFINE_MANY,updateComponent:O.OVERRIDE_BASE},N={displayName:function(e,t){e.componentConstructor.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)i(e,t[n])},childContextTypes:function(e,t){var o=e.componentConstructor;n(o,t,C.childContext),o.childContextTypes=D(o.childContextTypes,t)},contextTypes:function(e,t){var o=e.componentConstructor;n(o,t,C.context),o.contextTypes=D(o.contextTypes,t)},propTypes:function(e,t){var o=e.componentConstructor;n(o,t,C.prop),o.propTypes=D(o.propTypes,t)},statics:function(e,t){a(e,t)}},S=M({MOUNTING:null,UNMOUNTING:null,RECEIVING_PROPS:null,RECEIVING_STATE:null}),_={construct:function(){p.Mixin.construct.apply(this,arguments),m.Mixin.construct.apply(this,arguments),this.state=null,this._pendingState=null,this.context=null,this._currentContext=d.current,this._pendingContext=null,this._descriptor=null,this._compositeLifeCycleState=null},toJSON:function(){return{type:this.type,props:this.props}},isMounted:function(){return p.Mixin.isMounted.call(this)&&this._compositeLifeCycleState!==S.MOUNTING},mountComponent:v.measure("ReactCompositeComponent","mountComponent",function(e,t,n){p.Mixin.mountComponent.call(this,e,t,n),this._compositeLifeCycleState=S.MOUNTING,this.context=this._processContext(this._currentContext),this._defaultProps=this.getDefaultProps?this.getDefaultProps():null,this.props=this._processProps(this.props),this.__reactAutoBindMap&&this._bindAutoBindMethods(),this.state=this.getInitialState?this.getInitialState():null,R("object"==typeof this.state&&!Array.isArray(this.state)),this._pendingState=null,this._pendingForceUpdate=!1,this.componentWillMount&&(this.componentWillMount(),this._pendingState&&(this.state=this._pendingState,this._pendingState=null)),this._renderedComponent=E(this._renderValidatedComponent()),this._compositeLifeCycleState=null;var o=this._renderedComponent.mountComponent(e,t,n+1);return this.componentDidMount&&t.getReactMountReady().enqueue(this,this.componentDidMount),o}),unmountComponent:function(){this._compositeLifeCycleState=S.UNMOUNTING,this.componentWillUnmount&&this.componentWillUnmount(),this._compositeLifeCycleState=null,this._defaultProps=null,this._renderedComponent.unmountComponent(),this._renderedComponent=null,p.Mixin.unmountComponent.call(this)},setState:function(e,t){R("object"==typeof e||null==e),this.replaceState(D(this._pendingState||this.state,e),t)},replaceState:function(e,t){r(this),this._pendingState=e,y.enqueueUpdate(this,t)},_processContext:function(e){var t=null,n=this.constructor.contextTypes;if(n){t={};for(var o in n)t[o]=e[o]}return t},_processChildContext:function(e){var t=this.getChildContext&&this.getChildContext();if(this.constructor.displayName||"ReactCompositeComponent",t){R("object"==typeof this.constructor.childContextTypes);for(var n in t)R(n in this.constructor.childContextTypes);return D(e,t)}return e},_processProps:function(e){var t=D(e),n=this._defaultProps;for(var o in n)"undefined"==typeof t[o]&&(t[o]=n[o]);return t},_checkPropTypes:function(e,t,n){var o=this.constructor.displayName;for(var r in e)e.hasOwnProperty(r)&&e[r](t,r,o,n)},performUpdateIfNecessary:function(){var e=this._compositeLifeCycleState;e!==S.MOUNTING&&e!==S.RECEIVING_PROPS&&p.Mixin.performUpdateIfNecessary.call(this)},_performUpdateIfNecessary:function(e){if(null!=this._pendingProps||null!=this._pendingState||null!=this._pendingContext||this._pendingForceUpdate){var t=this._pendingContext||this._currentContext,n=this._processContext(t);this._pendingContext=null;var o=this.props;null!=this._pendingProps&&(o=this._processProps(this._pendingProps),this._pendingProps=null,this._compositeLifeCycleState=S.RECEIVING_PROPS,this.componentWillReceiveProps&&this.componentWillReceiveProps(o,n)),this._compositeLifeCycleState=S.RECEIVING_STATE;var r=this._pendingOwner,i=this._pendingState||this.state;this._pendingState=null;try{this._pendingForceUpdate||!this.shouldComponentUpdate||this.shouldComponentUpdate(o,i,n)?(this._pendingForceUpdate=!1,this._performComponentUpdate(o,r,i,t,n,e)):(this.props=o,this._owner=r,this.state=i,this._currentContext=t,this.context=n)}finally{this._compositeLifeCycleState=null}}},_performComponentUpdate:function(e,t,n,o,r,i){var a=this.props,s=this._owner,u=this.state,c=this.context;this.componentWillUpdate&&this.componentWillUpdate(e,n,r),this.props=e,this._owner=t,this.state=n,this._currentContext=o,this.context=r,this.updateComponent(i,a,s,u,c),this.componentDidUpdate&&i.getReactMountReady().enqueue(this,this.componentDidUpdate.bind(this,a,u,c))},receiveComponent:function(e,t){e!==this._descriptor&&(this._descriptor=e,this._pendingContext=e._currentContext,p.Mixin.receiveComponent.call(this,e,t))},updateComponent:v.measure("ReactCompositeComponent","updateComponent",function(e,t,n){p.Mixin.updateComponent.call(this,e,t,n);var o=this._renderedComponent,r=this._renderValidatedComponent();if(P(o,r))o.receiveComponent(r,e);else{var i=this._rootNodeID,a=o._rootNodeID;o.unmountComponent(),this._renderedComponent=E(r);var s=this._renderedComponent.mountComponent(i,e,this._mountDepth+1);p.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(a,s)}}),forceUpdate:function(e){var t=this._compositeLifeCycleState;R(this.isMounted()||t===S.MOUNTING),R(t!==S.RECEIVING_STATE&&t!==S.UNMOUNTING),this._pendingForceUpdate=!0,y.enqueueUpdate(this,e)},_renderValidatedComponent:v.measure("ReactCompositeComponent","_renderValidatedComponent",function(){var e,t=d.current;d.current=this._processChildContext(this._currentContext),f.current=this;try{e=this.render()}finally{d.current=t,f.current=null}return R(p.isValidComponent(e)),e}),_bindAutoBindMethods:function(){for(var e in this.__reactAutoBindMap)if(this.__reactAutoBindMap.hasOwnProperty(e)){var t=this.__reactAutoBindMap[e];this[e]=this._bindAutoBindMethod(h.guard(t,this.constructor.displayName+"."+e))}},_bindAutoBindMethod:function(e){var t=this,n=function(){return e.apply(t,arguments)};return n}},w=function(){};x(w,p.Mixin),x(w,m.Mixin),x(w,g.Mixin),x(w,_);var A={LifeCycle:S,Base:w,createClass:function(e){var t=function(){};t.prototype=new w,t.prototype.constructor=t;var n=t,o=function(){var e=new n;return e.construct.apply(e,arguments),e};o.componentConstructor=t,t.ConvenienceConstructor=o,o.originalSpec=e,I.forEach(i.bind(null,o)),i(o,e),R(t.prototype.render),o.type=t,t.prototype.type=t;for(var r in T)t.prototype[r]||(t.prototype[r]=null);return o},isValidClass:l,injection:{injectMixin:function(e){I.push(e)}}};t.exports=A},{"./ReactComponent":27,"./ReactContext":30,"./ReactCurrentOwner":31,"./ReactErrorUtils":45,"./ReactOwner":57,"./ReactPerf":58,"./ReactPropTransferer":59,"./ReactPropTypeLocationNames":60,"./ReactPropTypeLocations":61,"./ReactUpdates":69,"./instantiateReactComponent":109,"./invariant":110,"./keyMirror":116,"./merge":119,"./mixInto":122,"./monitorCodeUse":123,"./objMap":124,"./shouldUpdateReactComponent":128,"./warning":131}],30:[function(e,t){"use strict";var n=e("./merge"),o={current:{},withContext:function(e,t){var r,i=o.current;o.current=n(i,e);try{r=t()}finally{o.current=i}return r}};t.exports=o},{"./merge":119}],31:[function(e,t){"use strict";var n={current:null};t.exports=n},{}],32:[function(e,t){"use strict";function n(e,t){var n=function(){};n.prototype=new o(e,t),n.prototype.constructor=n,n.displayName=e;var r=function(){var e=new n;return e.construct.apply(e,arguments),e};return r.type=n,n.prototype.type=n,n.ConvenienceConstructor=r,r.componentConstructor=n,r}var o=e("./ReactDOMComponent"),r=e("./mergeInto"),i=e("./objMapKeyVal"),a=i({a:!1,abbr:!1,address:!1,area:!0,article:!1,aside:!1,audio:!1,b:!1,base:!0,bdi:!1,bdo:!1,big:!1,blockquote:!1,body:!1,br:!0,button:!1,canvas:!1,caption:!1,cite:!1,code:!1,col:!0,colgroup:!1,data:!1,datalist:!1,dd:!1,del:!1,details:!1,dfn:!1,div:!1,dl:!1,dt:!1,em:!1,embed:!0,fieldset:!1,figcaption:!1,figure:!1,footer:!1,form:!1,h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,head:!1,header:!1,hr:!0,html:!1,i:!1,iframe:!1,img:!0,input:!0,ins:!1,kbd:!1,keygen:!0,label:!1,legend:!1,li:!1,link:!0,main:!1,map:!1,mark:!1,menu:!1,menuitem:!1,meta:!0,meter:!1,nav:!1,noscript:!1,object:!1,ol:!1,optgroup:!1,option:!1,output:!1,p:!1,param:!0,pre:!1,progress:!1,q:!1,rp:!1,rt:!1,ruby:!1,s:!1,samp:!1,script:!1,section:!1,select:!1,small:!1,source:!0,span:!1,strong:!1,style:!1,sub:!1,summary:!1,sup:!1,table:!1,tbody:!1,td:!1,textarea:!1,tfoot:!1,th:!1,thead:!1,time:!1,title:!1,tr:!1,track:!0,u:!1,ul:!1,"var":!1,video:!1,wbr:!0,circle:!1,defs:!1,g:!1,line:!1,linearGradient:!1,path:!1,polygon:!1,polyline:!1,radialGradient:!1,rect:!1,stop:!1,svg:!1,text:!1},n),s={injectComponentClasses:function(e){r(a,e)}};a.injection=s,t.exports=a},{"./ReactDOMComponent":34,"./mergeInto":121,"./objMapKeyVal":125}],33:[function(e,t){"use strict";var n=e("./AutoFocusMixin"),o=e("./ReactBrowserComponentMixin"),r=e("./ReactCompositeComponent"),i=e("./ReactDOM"),a=e("./keyMirror"),s=i.button,u=a({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),c=r.createClass({displayName:"ReactDOMButton",mixins:[n,o],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&u[t]||(e[t]=this.props[t]);return s(e,this.props.children)}});t.exports=c},{"./AutoFocusMixin":1,"./ReactBrowserComponentMixin":25,"./ReactCompositeComponent":29,"./ReactDOM":32,"./keyMirror":116}],34:[function(e,t){"use strict";function n(e){e&&(m(null==e.children||null==e.dangerouslySetInnerHTML),m(null==e.style||"object"==typeof e.style))}function o(e,t,n,o){var r=p.findReactContainerForID(e);if(r){var i=r.nodeType===x?r.ownerDocument:r;E(t,i)}o.getPutListenerQueue().enqueuePutListener(e,t,n)}function r(e,t){this._tagOpen="<"+e,this._tagClose=t?"":"</"+e+">",this.tagName=e.toUpperCase()}var i=e("./CSSPropertyOperations"),a=e("./DOMProperty"),s=e("./DOMPropertyOperations"),u=e("./ReactBrowserComponentMixin"),c=e("./ReactComponent"),l=e("./ReactEventEmitter"),p=e("./ReactMount"),d=e("./ReactMultiChild"),f=e("./ReactPerf"),h=e("./escapeTextForBrowser"),m=e("./invariant"),v=e("./keyOf"),g=e("./merge"),C=e("./mixInto"),y=l.deleteListener,E=l.listenTo,R=l.registrationNameModules,M={string:!0,number:!0},D=v({style:null}),x=1;r.Mixin={mountComponent:f.measure("ReactDOMComponent","mountComponent",function(e,t,o){return c.Mixin.mountComponent.call(this,e,t,o),n(this.props),this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t)+this._tagClose}),_createOpenTagMarkupAndPutListeners:function(e){var t=this.props,n=this._tagOpen;for(var r in t)if(t.hasOwnProperty(r)){var a=t[r];if(null!=a)if(R[r])o(this._rootNodeID,r,a,e);else{r===D&&(a&&(a=t.style=g(t.style)),a=i.createMarkupForStyles(a));var u=s.createMarkupForProperty(r,a);u&&(n+=" "+u)}}if(e.renderToStaticMarkup)return n+">";var c=s.createMarkupForID(this._rootNodeID);return n+" "+c+">"},_createContentMarkup:function(e){var t=this.props.dangerouslySetInnerHTML;if(null!=t){if(null!=t.__html)return t.__html}else{var n=M[typeof this.props.children]?this.props.children:null,o=null!=n?null:this.props.children;if(null!=n)return h(n);if(null!=o){var r=this.mountChildren(o,e);return r.join("")}}return""},receiveComponent:function(e,t){e!==this&&(n(e.props),c.Mixin.receiveComponent.call(this,e,t))},updateComponent:f.measure("ReactDOMComponent","updateComponent",function(e,t,n){c.Mixin.updateComponent.call(this,e,t,n),this._updateDOMProperties(t,e),this._updateDOMChildren(t,e)}),_updateDOMProperties:function(e,t){var n,r,i,s=this.props;for(n in e)if(!s.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===D){var u=e[n];for(r in u)u.hasOwnProperty(r)&&(i=i||{},i[r]="")}else R[n]?y(this._rootNodeID,n):(a.isStandardName[n]||a.isCustomAttribute(n))&&c.BackendIDOperations.deletePropertyByID(this._rootNodeID,n);for(n in s){var l=s[n],p=e[n];if(s.hasOwnProperty(n)&&l!==p)if(n===D)if(l&&(l=s.style=g(l)),p){for(r in p)p.hasOwnProperty(r)&&!l.hasOwnProperty(r)&&(i=i||{},i[r]="");for(r in l)l.hasOwnProperty(r)&&p[r]!==l[r]&&(i=i||{},i[r]=l[r])}else i=l;else R[n]?o(this._rootNodeID,n,l,t):(a.isStandardName[n]||a.isCustomAttribute(n))&&c.BackendIDOperations.updatePropertyByID(this._rootNodeID,n,l)}i&&c.BackendIDOperations.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t){var n=this.props,o=M[typeof e.children]?e.children:null,r=M[typeof n.children]?n.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,a=n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,u=null!=r?null:n.children,l=null!=o||null!=i,p=null!=r||null!=a;null!=s&&null==u?this.updateChildren(null,t):l&&!p&&this.updateTextContent(""),null!=r?o!==r&&this.updateTextContent(""+r):null!=a?i!==a&&c.BackendIDOperations.updateInnerHTMLByID(this._rootNodeID,a):null!=u&&this.updateChildren(u,t)},unmountComponent:function(){this.unmountChildren(),l.deleteAllListeners(this._rootNodeID),c.Mixin.unmountComponent.call(this)}},C(r,c.Mixin),C(r,r.Mixin),C(r,d.Mixin),C(r,u),t.exports=r},{"./CSSPropertyOperations":3,"./DOMProperty":8,"./DOMPropertyOperations":9,"./ReactBrowserComponentMixin":25,"./ReactComponent":27,"./ReactEventEmitter":46,"./ReactMount":53,"./ReactMultiChild":55,"./ReactPerf":58,"./escapeTextForBrowser":96,"./invariant":110,"./keyOf":117,"./merge":119,"./mixInto":122}],35:[function(e,t){"use strict";var n=e("./ReactBrowserComponentMixin"),o=e("./ReactCompositeComponent"),r=e("./ReactDOM"),i=e("./ReactEventEmitter"),a=e("./EventConstants"),s=r.form,u=o.createClass({displayName:"ReactDOMForm",mixins:[n],render:function(){return this.transferPropsTo(s(null,this.props.children))},componentDidMount:function(){i.trapBubbledEvent(a.topLevelTypes.topReset,"reset",this.getDOMNode()),i.trapBubbledEvent(a.topLevelTypes.topSubmit,"submit",this.getDOMNode())}});t.exports=u},{"./EventConstants":14,"./ReactBrowserComponentMixin":25,"./ReactCompositeComponent":29,"./ReactDOM":32,"./ReactEventEmitter":46}],36:[function(e,t){"use strict";var n,o=e("./CSSPropertyOperations"),r=e("./DOMChildrenOperations"),i=e("./DOMPropertyOperations"),a=e("./ReactMount"),s=e("./ReactPerf"),u=e("./invariant"),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},l={updatePropertyByID:s.measure("ReactDOMIDOperations","updatePropertyByID",function(e,t,n){var o=a.getNode(e);u(!c.hasOwnProperty(t)),null!=n?i.setValueForProperty(o,t,n):i.deleteValueForProperty(o,t)}),deletePropertyByID:s.measure("ReactDOMIDOperations","deletePropertyByID",function(e,t,n){var o=a.getNode(e);u(!c.hasOwnProperty(t)),i.deleteValueForProperty(o,t,n)}),updateStylesByID:s.measure("ReactDOMIDOperations","updateStylesByID",function(e,t){var n=a.getNode(e);o.setValueForStyles(n,t)}),updateInnerHTMLByID:s.measure("ReactDOMIDOperations","updateInnerHTMLByID",function(e,t){var o=a.getNode(e);if(void 0===n){var r=document.createElement("div");r.innerHTML=" ",n=""===r.innerHTML}n&&o.parentNode.replaceChild(o,o),n&&t.match(/^[ \r\n\t\f]/)?(o.innerHTML=""+t,o.firstChild.deleteData(0,1)):o.innerHTML=t}),updateTextContentByID:s.measure("ReactDOMIDOperations","updateTextContentByID",function(e,t){var n=a.getNode(e);r.updateTextContent(n,t)}),dangerouslyReplaceNodeWithMarkupByID:s.measure("ReactDOMIDOperations","dangerouslyReplaceNodeWithMarkupByID",function(e,t){var n=a.getNode(e);r.dangerouslyReplaceNodeWithMarkup(n,t)}),dangerouslyProcessChildrenUpdates:s.measure("ReactDOMIDOperations","dangerouslyProcessChildrenUpdates",function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);r.processUpdates(e,t)})};t.exports=l},{"./CSSPropertyOperations":3,"./DOMChildrenOperations":7,"./DOMPropertyOperations":9,"./ReactMount":53,"./ReactPerf":58,"./invariant":110}],37:[function(e,t){"use strict";var n=e("./ReactBrowserComponentMixin"),o=e("./ReactCompositeComponent"),r=e("./ReactDOM"),i=e("./ReactEventEmitter"),a=e("./EventConstants"),s=r.img,u=o.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[n],render:function(){return s(this.props)},componentDidMount:function(){var e=this.getDOMNode();i.trapBubbledEvent(a.topLevelTypes.topLoad,"load",e),i.trapBubbledEvent(a.topLevelTypes.topError,"error",e)}});t.exports=u},{"./EventConstants":14,"./ReactBrowserComponentMixin":25,"./ReactCompositeComponent":29,"./ReactDOM":32,"./ReactEventEmitter":46}],38:[function(e,t){"use strict";var n=e("./AutoFocusMixin"),o=e("./DOMPropertyOperations"),r=e("./LinkedValueUtils"),i=e("./ReactBrowserComponentMixin"),a=e("./ReactCompositeComponent"),s=e("./ReactDOM"),u=e("./ReactMount"),c=e("./invariant"),l=e("./merge"),p=s.input,d={},f=a.createClass({displayName:"ReactDOMInput",mixins:[n,r.Mixin,i],getInitialState:function(){var e=this.props.defaultValue;return{checked:this.props.defaultChecked||!1,value:null!=e?e:null}},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=l(this.props);e.defaultChecked=null,e.defaultValue=null;var t=r.getValue(this);e.value=null!=t?t:this.state.value;var n=r.getChecked(this);return e.checked=null!=n?n:this.state.checked,e.onChange=this._handleChange,p(e,this.props.children)},componentDidMount:function(){var e=u.getID(this.getDOMNode());d[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=u.getID(e);delete d[t]},componentDidUpdate:function(){var e=this.getDOMNode();null!=this.props.checked&&o.setValueForProperty(e,"checked",this.props.checked||!1);var t=r.getValue(this);null!=t&&o.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,n=r.getOnChange(this);n&&(this._isChanging=!0,t=n.call(this,e),this._isChanging=!1),this.setState({checked:e.target.checked,value:e.target.value});var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),a=i;a.parentNode;)a=a.parentNode;for(var s=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),l=0,p=s.length;p>l;l++){var f=s[l];if(f!==i&&f.form===i.form){var h=u.getID(f);c(h);var m=d[h];c(m),m.setState({checked:!1})}}}return t}});t.exports=f},{"./AutoFocusMixin":1,"./DOMPropertyOperations":9,"./LinkedValueUtils":21,"./ReactBrowserComponentMixin":25,"./ReactCompositeComponent":29,"./ReactDOM":32,"./ReactMount":53,"./invariant":110,"./merge":119}],39:[function(e,t){"use strict";var n=e("./ReactBrowserComponentMixin"),o=e("./ReactCompositeComponent"),r=e("./ReactDOM"),i=(e("./warning"),r.option),a=o.createClass({displayName:"ReactDOMOption",mixins:[n],componentWillMount:function(){},render:function(){return i(this.props,this.props.children)}});t.exports=a},{"./ReactBrowserComponentMixin":25,"./ReactCompositeComponent":29,"./ReactDOM":32,"./warning":131}],40:[function(e,t){"use strict";function n(e,t){null!=e[t]&&c(e.multiple?Array.isArray(e[t]):!Array.isArray(e[t]))}function o(e,t){var n,o,r,i=e.props.multiple,a=null!=t?t:e.state.value,s=e.getDOMNode().options;if(i)for(n={},o=0,r=a.length;r>o;++o)n[""+a[o]]=!0;else n=""+a;for(o=0,r=s.length;r>o;o++){var u=i?n.hasOwnProperty(s[o].value):s[o].value===n;u!==s[o].selected&&(s[o].selected=u)}}var r=e("./AutoFocusMixin"),i=e("./LinkedValueUtils"),a=e("./ReactBrowserComponentMixin"),s=e("./ReactCompositeComponent"),u=e("./ReactDOM"),c=e("./invariant"),l=e("./merge"),p=u.select,d=s.createClass({displayName:"ReactDOMSelect",mixins:[r,i.Mixin,a],propTypes:{defaultValue:n,value:n},getInitialState:function(){return{value:this.props.defaultValue||(this.props.multiple?[]:"")}},componentWillReceiveProps:function(e){!this.props.multiple&&e.multiple?this.setState({value:[this.state.value]}):this.props.multiple&&!e.multiple&&this.setState({value:this.state.value[0]})},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=l(this.props);return e.onChange=this._handleChange,e.value=null,p(e,this.props.children)},componentDidMount:function(){o(this,i.getValue(this))},componentDidUpdate:function(){var e=i.getValue(this);null!=e&&o(this,e)},_handleChange:function(e){var t,n=i.getOnChange(this);n&&(this._isChanging=!0,t=n.call(this,e),this._isChanging=!1);var o;if(this.props.multiple){o=[];for(var r=e.target.options,a=0,s=r.length;s>a;a++)r[a].selected&&o.push(r[a].value)}else o=e.target.value;return this.setState({value:o}),t}});t.exports=d},{"./AutoFocusMixin":1,"./LinkedValueUtils":21,"./ReactBrowserComponentMixin":25,"./ReactCompositeComponent":29,"./ReactDOM":32,"./invariant":110,"./merge":119}],41:[function(e,t){"use strict";function n(e){var t=document.selection,n=t.createRange(),o=n.text.length,r=n.duplicate();r.moveToElementText(e),r.setEndPoint("EndToStart",n);var i=r.text.length,a=i+o;return{start:i,end:a}}function o(e){var t=window.getSelection();if(0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,r=t.focusNode,i=t.focusOffset,a=t.getRangeAt(0),s=a.toString().length,u=a.cloneRange();u.selectNodeContents(e),u.setEnd(a.startContainer,a.startOffset);var c=u.toString().length,l=c+s,p=document.createRange();p.setStart(n,o),p.setEnd(r,i);var d=p.collapsed;return p.detach(),{start:d?l:c,end:d?c:l}}function r(e,t){var n,o,r=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,o=n):t.start>t.end?(n=t.end,o=t.start):(n=t.start,o=t.end),r.moveToElementText(e),r.moveStart("character",n),r.setEndPoint("EndToStart",r),r.moveEnd("character",o-n),r.select()}function i(e,t){var n=window.getSelection(),o=e[s()].length,r=Math.min(t.start,o),i="undefined"==typeof t.end?r:Math.min(t.end,o);if(!n.extend&&r>i){var u=i;i=r,r=u}var c=a(e,r),l=a(e,i);if(c&&l){var p=document.createRange();p.setStart(c.node,c.offset),n.removeAllRanges(),r>i?(n.addRange(p),n.extend(l.node,l.offset)):(p.setEnd(l.node,l.offset),n.addRange(p)),p.detach()}}var a=e("./getNodeForCharacterOffset"),s=e("./getTextContentAccessor"),u={getOffsets:function(e){var t=document.selection?n:o;return t(e)},setOffsets:function(e,t){var n=document.selection?r:i;n(e,t)}};t.exports=u},{"./getNodeForCharacterOffset":104,"./getTextContentAccessor":106}],42:[function(e,t){"use strict";var n=e("./AutoFocusMixin"),o=e("./DOMPropertyOperations"),r=e("./LinkedValueUtils"),i=e("./ReactBrowserComponentMixin"),a=e("./ReactCompositeComponent"),s=e("./ReactDOM"),u=e("./invariant"),c=e("./merge"),l=(e("./warning"),s.textarea),p=a.createClass({displayName:"ReactDOMTextarea",mixins:[n,r.Mixin,i],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(u(null==e),Array.isArray(t)&&(u(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=r.getValue(this);return{initialValue:""+(null!=n?n:e),value:e}},shouldComponentUpdate:function(){return!this._isChanging},render:function(){var e=c(this.props),t=r.getValue(this);return u(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null!=t?t:this.state.value,e.onChange=this._handleChange,l(e,this.state.initialValue)},componentDidUpdate:function(){var e=r.getValue(this);if(null!=e){var t=this.getDOMNode();o.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,n=r.getOnChange(this);return n&&(this._isChanging=!0,t=n.call(this,e),this._isChanging=!1),this.setState({value:e.target.value}),t}});t.exports=p},{"./AutoFocusMixin":1,"./DOMPropertyOperations":9,"./LinkedValueUtils":21,"./ReactBrowserComponentMixin":25,"./ReactCompositeComponent":29,"./ReactDOM":32,"./invariant":110,"./merge":119,"./warning":131}],43:[function(e,t){"use strict";function n(){this.reinitializeTransaction()}var o=e("./ReactUpdates"),r=e("./Transaction"),i=e("./emptyFunction"),a=e("./mixInto"),s={initialize:i,close:function(){p.isBatchingUpdates=!1}},u={initialize:i,close:o.flushBatchedUpdates.bind(o)},c=[u,s];a(n,r.Mixin),a(n,{getTransactionWrappers:function(){return c}});var l=new n,p={isBatchingUpdates:!1,batchedUpdates:function(e,t){var n=p.isBatchingUpdates;p.isBatchingUpdates=!0,n?e(t):l.perform(e,null,t)}};t.exports=p},{"./ReactUpdates":69,"./Transaction":83,"./emptyFunction":94,"./mixInto":122}],44:[function(e,t){"use strict";function n(){o.EventEmitter.injectTopLevelCallbackCreator(h),o.EventPluginHub.injectEventPluginOrder(c),o.EventPluginHub.injectInstanceHandle(D),o.EventPluginHub.injectMount(x),o.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:O,EnterLeaveEventPlugin:l,ChangeEventPlugin:a,CompositionEventPlugin:u,MobileSafariClickEventPlugin:p,SelectEventPlugin:b}),o.DOM.injectComponentClasses({button:v,form:g,img:C,input:y,option:E,select:R,textarea:M,html:T(m.html),head:T(m.head),title:T(m.title),body:T(m.body)}),o.CompositeComponent.injectMixin(d),o.DOMProperty.injectDOMPropertyConfig(i),o.Updates.injectBatchingStrategy(I),o.RootIndex.injectCreateReactRootIndex(r.canUseDOM?s.createReactRootIndex:P.createReactRootIndex),o.Component.injectEnvironment(f)}var o=e("./ReactInjection"),r=e("./ExecutionEnvironment"),i=e("./DefaultDOMPropertyConfig"),a=e("./ChangeEventPlugin"),s=e("./ClientReactRootIndex"),u=e("./CompositionEventPlugin"),c=e("./DefaultEventPluginOrder"),l=e("./EnterLeaveEventPlugin"),p=e("./MobileSafariClickEventPlugin"),d=e("./ReactBrowserComponentMixin"),f=e("./ReactComponentBrowserEnvironment"),h=e("./ReactEventTopLevelCallback"),m=e("./ReactDOM"),v=e("./ReactDOMButton"),g=e("./ReactDOMForm"),C=e("./ReactDOMImg"),y=e("./ReactDOMInput"),E=e("./ReactDOMOption"),R=e("./ReactDOMSelect"),M=e("./ReactDOMTextarea"),D=e("./ReactInstanceHandles"),x=e("./ReactMount"),b=e("./SelectEventPlugin"),P=e("./ServerReactRootIndex"),O=e("./SimpleEventPlugin"),I=e("./ReactDefaultBatchingStrategy"),T=e("./createFullPageComponent");t.exports={inject:n}},{"./ChangeEventPlugin":4,"./ClientReactRootIndex":5,"./CompositionEventPlugin":6,"./DefaultDOMPropertyConfig":11,"./DefaultEventPluginOrder":12,"./EnterLeaveEventPlugin":13,"./ExecutionEnvironment":20,"./MobileSafariClickEventPlugin":22,"./ReactBrowserComponentMixin":25,"./ReactComponentBrowserEnvironment":28,"./ReactDOM":32,"./ReactDOMButton":33,"./ReactDOMForm":35,"./ReactDOMImg":37,"./ReactDOMInput":38,"./ReactDOMOption":39,"./ReactDOMSelect":40,"./ReactDOMTextarea":42,"./ReactDefaultBatchingStrategy":43,"./ReactEventTopLevelCallback":48,"./ReactInjection":49,"./ReactInstanceHandles":51,"./ReactMount":53,"./SelectEventPlugin":70,"./ServerReactRootIndex":71,"./SimpleEventPlugin":72,"./createFullPageComponent":90}],45:[function(e,t){"use strict";var n={guard:function(e){return e}};t.exports=n},{}],46:[function(e,t){"use strict";function n(e){return null==e[y]&&(e[y]=g++,m[e[y]]={}),m[e[y]]}function o(e,t,n){a.listen(n,t,E.TopLevelCallbackCreator.createTopLevelCallback(e))}function r(e,t,n){a.capture(n,t,E.TopLevelCallbackCreator.createTopLevelCallback(e))}var i=e("./EventConstants"),a=e("./EventListener"),s=e("./EventPluginHub"),u=e("./EventPluginRegistry"),c=e("./ExecutionEnvironment"),l=e("./ReactEventEmitterMixin"),p=e("./ViewportMetrics"),d=e("./invariant"),f=e("./isEventSupported"),h=e("./merge"),m={},v=!1,g=0,C={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},y="_reactListenersID"+String(Math.random()).slice(2),E=h(l,{TopLevelCallbackCreator:null,injection:{injectTopLevelCallbackCreator:function(e){E.TopLevelCallbackCreator=e}},setEnabled:function(e){d(c.canUseDOM),E.TopLevelCallbackCreator&&E.TopLevelCallbackCreator.setEnabled(e)},isEnabled:function(){return!(!E.TopLevelCallbackCreator||!E.TopLevelCallbackCreator.isEnabled())},listenTo:function(e,t){for(var a=t,s=n(a),c=u.registrationNameDependencies[e],l=i.topLevelTypes,p=0,d=c.length;d>p;p++){var h=c[p];if(!s[h]){var m=l[h];m===l.topWheel?f("wheel")?o(l.topWheel,"wheel",a):f("mousewheel")?o(l.topWheel,"mousewheel",a):o(l.topWheel,"DOMMouseScroll",a):m===l.topScroll?f("scroll",!0)?r(l.topScroll,"scroll",a):o(l.topScroll,"scroll",window):m===l.topFocus||m===l.topBlur?(f("focus",!0)?(r(l.topFocus,"focus",a),r(l.topBlur,"blur",a)):f("focusin")&&(o(l.topFocus,"focusin",a),o(l.topBlur,"focusout",a)),s[l.topBlur]=!0,s[l.topFocus]=!0):C[h]&&o(m,C[h],a),s[h]=!0}}},ensureScrollValueMonitoring:function(){if(!v){var e=p.refreshScrollValues;a.listen(window,"scroll",e),a.listen(window,"resize",e),v=!0}},eventNameDispatchConfigs:s.eventNameDispatchConfigs,registrationNameModules:s.registrationNameModules,putListener:s.putListener,getListener:s.getListener,deleteListener:s.deleteListener,deleteAllListeners:s.deleteAllListeners,trapBubbledEvent:o,trapCapturedEvent:r});t.exports=E},{"./EventConstants":14,"./EventListener":15,"./EventPluginHub":16,"./EventPluginRegistry":17,"./ExecutionEnvironment":20,"./ReactEventEmitterMixin":47,"./ViewportMetrics":84,"./invariant":110,"./isEventSupported":111,"./merge":119}],47:[function(e,t){"use strict";function n(e){o.enqueueEvents(e),o.processEventQueue()}var o=e("./EventPluginHub"),r=e("./ReactUpdates"),i={handleTopLevel:function(e,t,i,a){var s=o.extractEvents(e,t,i,a);
r.batchedUpdates(n,s)}};t.exports=i},{"./EventPluginHub":16,"./ReactUpdates":69}],48:[function(e,t){"use strict";function n(e){var t=u.getID(e),n=s.getReactRootIDFromNodeID(t),o=u.findReactContainerForID(n),r=u.getFirstReactDOM(o);return r}function o(e,t,o){for(var r=u.getFirstReactDOM(c(t))||window,i=r;i;)o.ancestors.push(i),i=n(i);for(var s=0,l=o.ancestors.length;l>s;s++){r=o.ancestors[s];var p=u.getID(r)||"";a.handleTopLevel(e,r,p,t)}}function r(){this.ancestors=[]}var i=e("./PooledClass"),a=e("./ReactEventEmitter"),s=e("./ReactInstanceHandles"),u=e("./ReactMount"),c=e("./getEventTarget"),l=e("./mixInto"),p=!0;l(r,{destructor:function(){this.ancestors.length=0}}),i.addPoolingTo(r);var d={setEnabled:function(e){p=!!e},isEnabled:function(){return p},createTopLevelCallback:function(e){return function(t){if(p){var n=r.getPooled();try{o(e,t,n)}finally{r.release(n)}}}}};t.exports=d},{"./PooledClass":23,"./ReactEventEmitter":46,"./ReactInstanceHandles":51,"./ReactMount":53,"./getEventTarget":102,"./mixInto":122}],49:[function(e,t){"use strict";var n=e("./DOMProperty"),o=e("./EventPluginHub"),r=e("./ReactComponent"),i=e("./ReactCompositeComponent"),a=e("./ReactDOM"),s=e("./ReactEventEmitter"),u=e("./ReactPerf"),c=e("./ReactRootIndex"),l=e("./ReactUpdates"),p={Component:r.injection,CompositeComponent:i.injection,DOMProperty:n.injection,EventPluginHub:o.injection,DOM:a.injection,EventEmitter:s.injection,Perf:u.injection,RootIndex:c.injection,Updates:l.injection};t.exports=p},{"./DOMProperty":8,"./EventPluginHub":16,"./ReactComponent":27,"./ReactCompositeComponent":29,"./ReactDOM":32,"./ReactEventEmitter":46,"./ReactPerf":58,"./ReactRootIndex":65,"./ReactUpdates":69}],50:[function(e,t){"use strict";function n(e){return r(document.documentElement,e)}var o=e("./ReactDOMSelection"),r=e("./containsNode"),i=e("./focusNode"),a=e("./getActiveElement"),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=a();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=a(),o=e.focusedElem,r=e.selectionRange;t!==o&&n(o)&&(s.hasSelectionCapabilities(o)&&s.setSelection(o,r),i(o))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=s},{"./ReactDOMSelection":41,"./containsNode":87,"./focusNode":98,"./getActiveElement":100}],51:[function(e,t){"use strict";function n(e){return d+e.toString(36)}function o(e,t){return e.charAt(t)===d||t===e.length}function r(e){return""===e||e.charAt(0)===d&&e.charAt(e.length-1)!==d}function i(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function a(e){return e?e.substr(0,e.lastIndexOf(d)):""}function s(e,t){if(p(r(e)&&r(t)),p(i(e,t)),e===t)return e;for(var n=e.length+f,a=n;a<t.length&&!o(t,a);a++);return t.substr(0,a)}function u(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var i=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))i=a;else if(e.charAt(a)!==t.charAt(a))break;var s=e.substr(0,i);return p(r(s)),s}function c(e,t,n,o,r,u){e=e||"",t=t||"",p(e!==t);var c=i(t,e);p(c||i(e,t));for(var l=0,d=c?a:s,f=e;;f=d(f,t)){var m;if(r&&f===e||u&&f===t||(m=n(f,c,o)),m===!1||f===t)break;p(l++<h)}}var l=e("./ReactRootIndex"),p=e("./invariant"),d=".",f=d.length,h=100,m={createReactRootID:function(){return n(l.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===d&&e.length>1){var t=e.indexOf(d,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,o,r){var i=u(e,t);i!==e&&c(e,i,n,o,!1,!0),i!==t&&c(i,t,n,r,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:u,_getNextDescendantID:s,isAncestorIDOf:i,SEPARATOR:d};t.exports=m},{"./ReactRootIndex":65,"./invariant":110}],52:[function(e,t){"use strict";var n=e("./adler32"),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=n(e);return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var r=t.getAttribute(o.CHECKSUM_ATTR_NAME);r=r&&parseInt(r,10);var i=n(e);return i===r}};t.exports=o},{"./adler32":86}],53:[function(e,t){"use strict";function n(e){var t=v(e);return t&&T.getID(t)}function o(e){var t=r(e);if(t)if(M.hasOwnProperty(t)){var n=M[t];n!==e&&(C(!s(n,t)),M[t]=e)}else M[t]=e;return t}function r(e){return e&&e.getAttribute&&e.getAttribute(R)||""}function i(e,t){var n=r(e);n!==t&&delete M[n],e.setAttribute(R,t),M[t]=e}function a(e){return M.hasOwnProperty(e)&&s(M[e],e)||(M[e]=T.findReactNodeByID(e)),M[e]}function s(e,t){if(e){C(r(e)===t);var n=T.findReactContainerForID(t);if(n&&m(n,e))return!0}return!1}function u(e){delete M[e]}function c(e){var t=M[e];return t&&s(t,e)?void(I=t):!1}function l(e){I=null,f.traverseAncestors(e,c);var t=I;return I=null,t}var p=e("./DOMProperty"),d=e("./ReactEventEmitter"),f=e("./ReactInstanceHandles"),h=e("./ReactPerf"),m=e("./containsNode"),v=e("./getReactRootElementInContainer"),g=e("./instantiateReactComponent"),C=e("./invariant"),y=e("./shouldUpdateReactComponent"),E=f.SEPARATOR,R=p.ID_ATTRIBUTE_NAME,M={},D=1,x=9,b={},P={},O=[],I=null,T={totalInstantiationTime:0,totalInjectionTime:0,useTouchEvents:!1,_instancesByReactRootID:b,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,o){var r=t.props;return T.scrollMonitor(n,function(){e.replaceProps(r,o)}),e},_registerComponent:function(e,t){C(t&&(t.nodeType===D||t.nodeType===x)),d.ensureScrollValueMonitoring();var n=T.registerContainer(t);return b[n]=e,n},_renderNewRootComponent:h.measure("ReactMount","_renderNewRootComponent",function(e,t,n){var o=g(e),r=T._registerComponent(o,t);return o.mountComponentIntoNode(r,t,n),o}),renderComponent:function(e,t,o){var r=b[n(t)];if(r){if(y(r,e))return T._updateRootComponent(r,e,t,o);T.unmountComponentAtNode(t)}var i=v(t),a=i&&T.isRenderedByReact(i),s=a&&!r,u=T._renderNewRootComponent(e,t,s);return o&&o.call(u),u},constructAndRenderComponent:function(e,t,n){return T.renderComponent(e(t),n)},constructAndRenderComponentByID:function(e,t,n){var o=document.getElementById(n);return C(o),T.constructAndRenderComponent(e,t,o)},registerContainer:function(e){var t=n(e);return t&&(t=f.getReactRootIDFromNodeID(t)),t||(t=f.createReactRootID()),P[t]=e,t},unmountComponentAtNode:function(e){var t=n(e),o=b[t];return o?(T.unmountComponentFromNode(o,e),delete b[t],delete P[t],!0):!1},unmountComponentFromNode:function(e,t){for(e.unmountComponent(),t.nodeType===x&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=f.getReactRootIDFromNodeID(e),n=P[t];return n},findReactNodeByID:function(e){var t=T.findReactContainerForID(e);return T.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=T.getID(e);return t?t.charAt(0)===E:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(T.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=O,o=0,r=l(t)||e;for(n[0]=r.firstChild,n.length=1;o<n.length;){for(var i,a=n[o++];a;){var s=T.getID(a);s?t===s?i=a:f.isAncestorIDOf(s,t)&&(n.length=o=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,C(!1)},getReactRootID:n,getID:o,setID:i,getNode:a,purgeID:u};t.exports=T},{"./DOMProperty":8,"./ReactEventEmitter":46,"./ReactInstanceHandles":51,"./ReactPerf":58,"./containsNode":87,"./getReactRootElementInContainer":105,"./instantiateReactComponent":109,"./invariant":110,"./shouldUpdateReactComponent":128}],54:[function(e,t){"use strict";function n(e){this._queue=e||null}var o=e("./PooledClass"),r=e("./mixInto");r(n,{enqueue:function(e,t){this._queue=this._queue||[],this._queue.push({component:e,callback:t})},notifyAll:function(){var e=this._queue;if(e){this._queue=null;for(var t=0,n=e.length;n>t;t++){var o=e[t].component,r=e[t].callback;r.call(o)}e.length=0}},reset:function(){this._queue=null},destructor:function(){this.reset()}}),o.addPoolingTo(n),t.exports=n},{"./PooledClass":23,"./mixInto":122}],55:[function(e,t){"use strict";function n(e,t,n){h.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:m.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function o(e,t,n){h.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function r(e,t){h.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function i(e,t){h.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function a(){h.length&&(u.BackendIDOperations.dangerouslyProcessChildrenUpdates(h,m),s())}function s(){h.length=0,m.length=0}var u=e("./ReactComponent"),c=e("./ReactMultiChildUpdateTypes"),l=e("./flattenChildren"),p=e("./instantiateReactComponent"),d=e("./shouldUpdateReactComponent"),f=0,h=[],m=[],v={Mixin:{mountChildren:function(e,t){var n=l(e),o=[],r=0;this._renderedChildren=n;for(var i in n){var a=n[i];if(n.hasOwnProperty(i)){var s=p(a);n[i]=s;var u=this._rootNodeID+i,c=s.mountComponent(u,t,this._mountDepth+1);s._mountIndex=r,o.push(c),r++}}return o},updateTextContent:function(e){f++;var t=!0;try{var n=this._renderedChildren;for(var o in n)n.hasOwnProperty(o)&&this._unmountChildByName(n[o],o);this.setTextContent(e),t=!1}finally{f--,f||(t?s():a())}},updateChildren:function(e,t){f++;var n=!0;try{this._updateChildren(e,t),n=!1}finally{f--,f||(n?s():a())}},_updateChildren:function(e,t){var n=l(e),o=this._renderedChildren;if(n||o){var r,i=0,a=0;for(r in n)if(n.hasOwnProperty(r)){var s=o&&o[r],u=n[r];if(d(s,u))this.moveChild(s,a,i),i=Math.max(s._mountIndex,i),s.receiveComponent(u,t),s._mountIndex=a;else{s&&(i=Math.max(s._mountIndex,i),this._unmountChildByName(s,r));var c=p(u);this._mountChildByNameAtIndex(c,r,a,t)}a++}for(r in o)!o.hasOwnProperty(r)||n&&n[r]||this._unmountChildByName(o[r],r)}},unmountChildren:function(){var e=this._renderedChildren;for(var t in e){var n=e[t];n.unmountComponent&&n.unmountComponent()}this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){n(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){r(this._rootNodeID,e._mountIndex)},setTextContent:function(e){i(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,o){var r=this._rootNodeID+t,i=e.mountComponent(r,o,this._mountDepth+1);e._mountIndex=n,this.createChild(e,i),this._renderedChildren=this._renderedChildren||{},this._renderedChildren[t]=e},_unmountChildByName:function(e,t){u.isValidComponent(e)&&(this.removeChild(e),e._mountIndex=null,e.unmountComponent(),delete this._renderedChildren[t])}}};t.exports=v},{"./ReactComponent":27,"./ReactMultiChildUpdateTypes":56,"./flattenChildren":97,"./instantiateReactComponent":109,"./shouldUpdateReactComponent":128}],56:[function(e,t){"use strict";var n=e("./keyMirror"),o=n({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=o},{"./keyMirror":116}],57:[function(e,t){"use strict";var n=e("./emptyObject"),o=e("./invariant"),r={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){o(r.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){o(r.isValidOwner(n)),n.refs[t]===e&&n.detachRef(t)},Mixin:{construct:function(){this.refs=n},attachRef:function(e,t){o(t.isOwnedBy(this));var r=this.refs===n?this.refs={}:this.refs;r[e]=t},detachRef:function(e){delete this.refs[e]}}};t.exports=r},{"./emptyObject":95,"./invariant":110}],58:[function(e,t){"use strict";function n(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:n,measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],59:[function(e,t){"use strict";function n(e){return function(t,n,o){t[n]=t.hasOwnProperty(n)?e(t[n],o):o}}var o=e("./emptyFunction"),r=e("./invariant"),i=e("./joinClasses"),a=e("./merge"),s={children:o,className:n(i),key:o,ref:o,style:n(a)},u={TransferStrategies:s,mergeProps:function(e,t){var n=a(e);for(var o in t)if(t.hasOwnProperty(o)){var r=s[o];r&&s.hasOwnProperty(o)?r(n,o,t[o]):n.hasOwnProperty(o)||(n[o]=t[o])}return n},Mixin:{transferPropsTo:function(e){return r(e._owner===this),e.props=u.mergeProps(e.props,this.props),e}}};t.exports=u},{"./emptyFunction":94,"./invariant":110,"./joinClasses":115,"./merge":119}],60:[function(e,t){"use strict";var n={};t.exports=n},{}],61:[function(e,t){"use strict";var n=e("./keyMirror"),o=n({prop:null,context:null,childContext:null});t.exports=o},{"./keyMirror":116}],62:[function(e,t){"use strict";function n(e){switch(typeof e){case"number":case"string":return!0;case"object":if(Array.isArray(e))return e.every(n);if(h.isValidComponent(e))return!0;for(var t in e)if(!n(e[t]))return!1;return!0;default:return!1}}function o(e){var t=typeof e;return"object"===t&&Array.isArray(e)?"array":t}function r(){function e(){return!0}return f(e)}function i(e){function t(t,n){var r=o(n),i=r===e;return i}return f(t)}function a(e){function t(e,t){var o=n[t];return o}var n=m(e);return f(t)}function s(e){function t(t,n,r,i,a){var s=o(n),u="object"===s;if(u)for(var c in e){var l=e[c];if(l&&!l(n,c,i,a))return!1}return u}return f(t)}function u(e){function t(t,n){var o=n instanceof e;return o}return f(t)}function c(e){function t(t,n,o,r,i){var a=Array.isArray(n);if(a)for(var s=0;s<n.length;s++)if(!e(n,s,r,i))return!1;return a}return f(t)}function l(){function e(e,t){var o=n(t);return o}return f(e)}function p(){function e(e,t){var n=h.isValidComponent(t);return n}return f(e)}function d(e){return function(t,n,o,r){for(var i=!1,a=0;a<e.length;a++){var s=e[a];if("function"==typeof s.weak&&(s=s.weak),s(t,n,o,r)){i=!0;break}}return i}}function f(e){function t(t,n,o,r,i,a){var s=o[r];if(null!=s)return e(n,s,r,i||g,a);var u=!t;return u}var n=t.bind(null,!1,!0);return n.weak=t.bind(null,!1,!1),n.isRequired=t.bind(null,!0,!0),n.weak.isRequired=t.bind(null,!0,!1),n.isRequired.weak=n.weak.isRequired,n}var h=e("./ReactComponent"),m=(e("./ReactPropTypeLocationNames"),e("./warning"),e("./createObjectFrom")),v={array:i("array"),bool:i("boolean"),func:i("function"),number:i("number"),object:i("object"),string:i("string"),shape:s,oneOf:a,oneOfType:d,arrayOf:c,instanceOf:u,renderable:l(),component:p(),any:r()},g="<<anonymous>>";t.exports=v},{"./ReactComponent":27,"./ReactPropTypeLocationNames":60,"./createObjectFrom":92,"./warning":131}],63:[function(e,t){"use strict";function n(){this.listenersToPut=[]}var o=e("./PooledClass"),r=e("./ReactEventEmitter"),i=e("./mixInto");i(n,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];r.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(n),t.exports=n},{"./PooledClass":23,"./ReactEventEmitter":46,"./mixInto":122}],64:[function(e,t){"use strict";function n(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=a.getPooled(null),this.putListenerQueue=s.getPooled()}var o=e("./PooledClass"),r=e("./ReactEventEmitter"),i=e("./ReactInputSelection"),a=e("./ReactMountReady"),s=e("./ReactPutListenerQueue"),u=e("./Transaction"),c=e("./mixInto"),l={initialize:i.getSelectionInformation,close:i.restoreSelection},p={initialize:function(){var e=r.isEnabled();return r.setEnabled(!1),e},close:function(e){r.setEnabled(e)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},h=[f,l,p,d],m={getTransactionWrappers:function(){return h},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){a.release(this.reactMountReady),this.reactMountReady=null,s.release(this.putListenerQueue),this.putListenerQueue=null}};c(n,u.Mixin),c(n,m),o.addPoolingTo(n),t.exports=n},{"./PooledClass":23,"./ReactEventEmitter":46,"./ReactInputSelection":50,"./ReactMountReady":54,"./ReactPutListenerQueue":63,"./Transaction":83,"./mixInto":122}],65:[function(e,t){"use strict";var n={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:n};t.exports=o},{}],66:[function(e,t){"use strict";function n(e){c(r.isValidComponent(e)),c(!(2===arguments.length&&"function"==typeof arguments[1]));var t;try{var n=i.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var o=u(e),r=o.mountComponent(n,t,0);return a.addChecksumToMarkup(r)},null)}finally{s.release(t)}}function o(e){c(r.isValidComponent(e));var t;try{var n=i.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var o=u(e);return o.mountComponent(n,t,0)},null)}finally{s.release(t)}}var r=e("./ReactComponent"),i=e("./ReactInstanceHandles"),a=e("./ReactMarkupChecksum"),s=e("./ReactServerRenderingTransaction"),u=e("./instantiateReactComponent"),c=e("./invariant");t.exports={renderComponentToString:n,renderComponentToStaticMarkup:o}},{"./ReactComponent":27,"./ReactInstanceHandles":51,"./ReactMarkupChecksum":52,"./ReactServerRenderingTransaction":67,"./instantiateReactComponent":109,"./invariant":110}],67:[function(e,t){"use strict";function n(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=r.getPooled(null),this.putListenerQueue=i.getPooled()}var o=e("./PooledClass"),r=e("./ReactMountReady"),i=e("./ReactPutListenerQueue"),a=e("./Transaction"),s=e("./emptyFunction"),u=e("./mixInto"),c={initialize:function(){this.reactMountReady.reset()},close:s},l={initialize:function(){this.putListenerQueue.reset()},close:s},p=[l,c],d={getTransactionWrappers:function(){return p},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){r.release(this.reactMountReady),this.reactMountReady=null,i.release(this.putListenerQueue),this.putListenerQueue=null}};u(n,a.Mixin),u(n,d),o.addPoolingTo(n),t.exports=n},{"./PooledClass":23,"./ReactMountReady":54,"./ReactPutListenerQueue":63,"./Transaction":83,"./emptyFunction":94,"./mixInto":122}],68:[function(e,t){"use strict";var n=e("./DOMPropertyOperations"),o=e("./ReactBrowserComponentMixin"),r=e("./ReactComponent"),i=e("./escapeTextForBrowser"),a=e("./mixInto"),s=function(e){this.construct({text:e})};s.ConvenienceConstructor=function(e){return new s(e.text)},a(s,r.Mixin),a(s,o),a(s,{mountComponent:function(e,t,o){r.Mixin.mountComponent.call(this,e,t,o);var a=i(this.props.text);return t.renderToStaticMarkup?a:"<span "+n.createMarkupForID(e)+">"+a+"</span>"},receiveComponent:function(e){var t=e.props;t.text!==this.props.text&&(this.props.text=t.text,r.BackendIDOperations.updateTextContentByID(this._rootNodeID,t.text))}}),s.type=s,s.prototype.type=s,t.exports=s},{"./DOMPropertyOperations":9,"./ReactBrowserComponentMixin":25,"./ReactComponent":27,"./escapeTextForBrowser":96,"./mixInto":122}],69:[function(e,t){"use strict";function n(){c(p)}function o(e,t){n(),p.batchedUpdates(e,t)}function r(e,t){return e._mountDepth-t._mountDepth}function i(){l.sort(r);for(var e=0;e<l.length;e++){var t=l[e];if(t.isMounted()){var n=t._pendingCallbacks;if(t._pendingCallbacks=null,t.performUpdateIfNecessary(),n)for(var o=0;o<n.length;o++)n[o].call(t)}}}function a(){l.length=0}function s(e,t){return c(!t||"function"==typeof t),n(),p.isBatchingUpdates?(l.push(e),void(t&&(e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t]))):(e.performUpdateIfNecessary(),void(t&&t.call(e)))}var u=e("./ReactPerf"),c=e("./invariant"),l=[],p=null,d=u.measure("ReactUpdates","flushBatchedUpdates",function(){try{i()}finally{a()}}),f={injectBatchingStrategy:function(e){c(e),c("function"==typeof e.batchedUpdates),c("boolean"==typeof e.isBatchingUpdates),p=e}},h={batchedUpdates:o,enqueueUpdate:s,flushBatchedUpdates:d,injection:f};t.exports=h},{"./ReactPerf":58,"./invariant":110}],70:[function(e,t){"use strict";function n(e){if("selectionStart"in e&&a.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(document.selection){var t=document.selection.createRange();return{parentElement:t.parentElement(),text:t.text,top:t.boundingTop,left:t.boundingLeft}}var n=window.getSelection();return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}function o(e){if(!g&&null!=h&&h==u()){var t=n(h);if(!v||!p(v,t)){v=t;var o=s.getPooled(f.select,m,e);return o.type="select",o.target=h,i.accumulateTwoPhaseDispatches(o),o}}}var r=e("./EventConstants"),i=e("./EventPropagators"),a=e("./ReactInputSelection"),s=e("./SyntheticEvent"),u=e("./getActiveElement"),c=e("./isTextInputElement"),l=e("./keyOf"),p=e("./shallowEqual"),d=r.topLevelTypes,f={select:{phasedRegistrationNames:{bubbled:l({onSelect:null}),captured:l({onSelectCapture:null})},dependencies:[d.topBlur,d.topContextMenu,d.topFocus,d.topKeyDown,d.topMouseDown,d.topMouseUp,d.topSelectionChange]}},h=null,m=null,v=null,g=!1,C={eventTypes:f,extractEvents:function(e,t,n,r){switch(e){case d.topFocus:(c(t)||"true"===t.contentEditable)&&(h=t,m=n,v=null);break;case d.topBlur:h=null,m=null,v=null;break;case d.topMouseDown:g=!0;break;case d.topContextMenu:case d.topMouseUp:return g=!1,o(r);case d.topSelectionChange:case d.topKeyDown:case d.topKeyUp:return o(r)}}};t.exports=C},{"./EventConstants":14,"./EventPropagators":19,"./ReactInputSelection":50,"./SyntheticEvent":76,"./getActiveElement":100,"./isTextInputElement":113,"./keyOf":117,"./shallowEqual":127}],71:[function(e,t){"use strict";var n=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*n)}};t.exports=o},{}],72:[function(e,t){"use strict";var n=e("./EventConstants"),o=e("./EventPluginUtils"),r=e("./EventPropagators"),i=e("./SyntheticClipboardEvent"),a=e("./SyntheticEvent"),s=e("./SyntheticFocusEvent"),u=e("./SyntheticKeyboardEvent"),c=e("./SyntheticMouseEvent"),l=e("./SyntheticDragEvent"),p=e("./SyntheticTouchEvent"),d=e("./SyntheticUIEvent"),f=e("./SyntheticWheelEvent"),h=e("./invariant"),m=e("./keyOf"),v=n.topLevelTypes,g={blur:{phasedRegistrationNames:{bubbled:m({onBlur:!0}),captured:m({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:m({onClick:!0}),captured:m({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:m({onContextMenu:!0}),captured:m({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:m({onCopy:!0}),captured:m({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:m({onCut:!0}),captured:m({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:m({onDoubleClick:!0}),captured:m({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:m({onDrag:!0}),captured:m({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:m({onDragEnd:!0}),captured:m({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:m({onDragEnter:!0}),captured:m({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:m({onDragExit:!0}),captured:m({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:m({onDragLeave:!0}),captured:m({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:m({onDragOver:!0}),captured:m({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:m({onDragStart:!0}),captured:m({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:m({onDrop:!0}),captured:m({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:m({onFocus:!0}),captured:m({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:m({onInput:!0}),captured:m({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:m({onKeyDown:!0}),captured:m({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:m({onKeyPress:!0}),captured:m({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:m({onKeyUp:!0}),captured:m({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:m({onLoad:!0}),captured:m({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:m({onError:!0}),captured:m({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:m({onMouseDown:!0}),captured:m({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:m({onMouseMove:!0}),captured:m({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:m({onMouseOut:!0}),captured:m({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:m({onMouseOver:!0}),captured:m({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:m({onMouseUp:!0}),captured:m({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:m({onPaste:!0}),captured:m({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:m({onReset:!0}),captured:m({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:m({onScroll:!0}),captured:m({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:m({onSubmit:!0}),captured:m({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:m({onTouchCancel:!0}),captured:m({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:m({onTouchEnd:!0}),captured:m({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:m({onTouchMove:!0}),captured:m({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:m({onTouchStart:!0}),captured:m({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:m({onWheel:!0}),captured:m({onWheelCapture:!0})}}},C={topBlur:g.blur,topClick:g.click,topContextMenu:g.contextMenu,topCopy:g.copy,topCut:g.cut,topDoubleClick:g.doubleClick,topDrag:g.drag,topDragEnd:g.dragEnd,topDragEnter:g.dragEnter,topDragExit:g.dragExit,topDragLeave:g.dragLeave,topDragOver:g.dragOver,topDragStart:g.dragStart,topDrop:g.drop,topError:g.error,topFocus:g.focus,topInput:g.input,topKeyDown:g.keyDown,topKeyPress:g.keyPress,topKeyUp:g.keyUp,topLoad:g.load,topMouseDown:g.mouseDown,topMouseMove:g.mouseMove,topMouseOut:g.mouseOut,topMouseOver:g.mouseOver,topMouseUp:g.mouseUp,topPaste:g.paste,topReset:g.reset,topScroll:g.scroll,topSubmit:g.submit,topTouchCancel:g.touchCancel,topTouchEnd:g.touchEnd,topTouchMove:g.touchMove,topTouchStart:g.touchStart,topWheel:g.wheel};for(var y in C)C[y].dependencies=[y];var E={eventTypes:g,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n);r===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,o){var m=C[e];if(!m)return null;var g;switch(e){case v.topInput:case v.topLoad:case v.topError:case v.topReset:case v.topSubmit:g=a;break;case v.topKeyDown:case v.topKeyPress:case v.topKeyUp:g=u;break;case v.topBlur:case v.topFocus:g=s;break;case v.topClick:if(2===o.button)return null;case v.topContextMenu:case v.topDoubleClick:case v.topMouseDown:case v.topMouseMove:case v.topMouseOut:case v.topMouseOver:case v.topMouseUp:g=c;break;case v.topDrag:case v.topDragEnd:case v.topDragEnter:case v.topDragExit:case v.topDragLeave:case v.topDragOver:case v.topDragStart:case v.topDrop:g=l;break;case v.topTouchCancel:case v.topTouchEnd:case v.topTouchMove:case v.topTouchStart:g=p;break;case v.topScroll:g=d;break;case v.topWheel:g=f;break;case v.topCopy:case v.topCut:case v.topPaste:g=i}h(g);var y=g.getPooled(m,n,o);return r.accumulateTwoPhaseDispatches(y),y}};t.exports=E},{"./EventConstants":14,"./EventPluginUtils":18,"./EventPropagators":19,"./SyntheticClipboardEvent":73,"./SyntheticDragEvent":75,"./SyntheticEvent":76,"./SyntheticFocusEvent":77,"./SyntheticKeyboardEvent":78,"./SyntheticMouseEvent":79,"./SyntheticTouchEvent":80,"./SyntheticUIEvent":81,"./SyntheticWheelEvent":82,"./invariant":110,"./keyOf":117}],73:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticEvent"),r={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(n,r),t.exports=n},{"./SyntheticEvent":76}],74:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticEvent"),r={data:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticEvent":76}],75:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticMouseEvent"),r={dataTransfer:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticMouseEvent":79}],76:[function(e,t){"use strict";function n(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var o=this.constructor.Interface;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];this[i]=a?a(n):n[i]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=s?r.thatReturnsTrue:r.thatReturnsFalse,this.isPropagationStopped=r.thatReturnsFalse}var o=e("./PooledClass"),r=e("./emptyFunction"),i=e("./getEventTarget"),a=e("./merge"),s=e("./mergeInto"),u={type:null,target:i,currentTarget:r.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};s(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=r.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=r.thatReturnsTrue},persist:function(){this.isPersistent=r.thatReturnsTrue},isPersistent:r.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),n.Interface=u,n.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);s(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=a(n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(n,o.threeArgumentPooler),t.exports=n},{"./PooledClass":23,"./emptyFunction":94,"./getEventTarget":102,"./merge":119,"./mergeInto":121}],77:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticUIEvent"),r={relatedTarget:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticUIEvent":81}],78:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticUIEvent"),r=e("./getEventKey"),i={key:r,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,"char":null,charCode:null,keyCode:null,which:null};o.augmentClass(n,i),t.exports=n},{"./SyntheticUIEvent":81,"./getEventKey":101}],79:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticUIEvent"),r=e("./ViewportMetrics"),i={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+r.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+r.currentScrollTop
}};o.augmentClass(n,i),t.exports=n},{"./SyntheticUIEvent":81,"./ViewportMetrics":84}],80:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticUIEvent"),r={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticUIEvent":81}],81:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticEvent"),r={view:null,detail:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticEvent":76}],82:[function(e,t){"use strict";function n(e,t,n){o.call(this,e,t,n)}var o=e("./SyntheticMouseEvent"),r={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(n,r),t.exports=n},{"./SyntheticMouseEvent":79}],83:[function(e,t){"use strict";var n=e("./invariant"),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this.timingMetrics||(this.timingMetrics={}),this.timingMetrics.methodInvocationTime=0,this.timingMetrics.wrapperInitTimes?this.timingMetrics.wrapperInitTimes.length=0:this.timingMetrics.wrapperInitTimes=[],this.timingMetrics.wrapperCloseTimes?this.timingMetrics.wrapperCloseTimes.length=0:this.timingMetrics.wrapperCloseTimes=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,o,r,i,a,s,u){n(!this.isInTransaction());var c,l,p=Date.now();try{this._isInTransaction=!0,c=!0,this.initializeAll(0),l=e.call(t,o,r,i,a,s,u),c=!1}finally{var d=Date.now();this.methodInvocationTime+=d-p;try{if(c)try{this.closeAll(0)}catch(f){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return l},initializeAll:function(e){for(var t=this.transactionWrappers,n=this.timingMetrics.wrapperInitTimes,o=e;o<t.length;o++){var i=Date.now(),a=t[o];try{this.wrapperInitData[o]=r.OBSERVED_ERROR,this.wrapperInitData[o]=a.initialize?a.initialize.call(this):null}finally{var s=n[o],u=Date.now();if(n[o]=(s||0)+(u-i),this.wrapperInitData[o]===r.OBSERVED_ERROR)try{this.initializeAll(o+1)}catch(c){}}}},closeAll:function(e){n(this.isInTransaction());for(var t=this.transactionWrappers,o=this.timingMetrics.wrapperCloseTimes,i=e;i<t.length;i++){var a,s=t[i],u=Date.now(),c=this.wrapperInitData[i];try{a=!0,c!==r.OBSERVED_ERROR&&s.close&&s.close.call(this,c),a=!1}finally{var l=Date.now(),p=o[i];if(o[i]=(p||0)+(l-u),a)try{this.closeAll(i+1)}catch(d){}}}this.wrapperInitData.length=0}},r={Mixin:o,OBSERVED_ERROR:{}};t.exports=r},{"./invariant":110}],84:[function(e,t){"use strict";var n=e("./getUnboundedScrollPosition"),o={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(){var e=n(window);o.currentScrollLeft=e.x,o.currentScrollTop=e.y}};t.exports=o},{"./getUnboundedScrollPosition":107}],85:[function(e,t){"use strict";function n(e,t){if(o(null!=t),null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n?e.concat(t):r?[e].concat(t):[e,t]}var o=e("./invariant");t.exports=n},{"./invariant":110}],86:[function(e,t){"use strict";function n(e){for(var t=1,n=0,r=0;r<e.length;r++)t=(t+e.charCodeAt(r))%o,n=(n+t)%o;return t|n<<16}var o=65521;t.exports=n},{}],87:[function(e,t){function n(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?n(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e("./isTextNode");t.exports=n},{"./isTextNode":114}],88:[function(e,t){function n(e,t,n,o,r,i){e=e||{};for(var a,s=[t,n,o,r,i],u=0;s[u];){a=s[u++];for(var c in a)e[c]=a[c];a.hasOwnProperty&&a.hasOwnProperty("toString")&&"undefined"!=typeof a.toString&&e.toString!==a.toString&&(e.toString=a.toString)}return e}t.exports=n},{}],89:[function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return n(e)?Array.isArray(e)?e.slice():r(e):[e]}var r=e("./toArray");t.exports=o},{"./toArray":129}],90:[function(e,t){"use strict";function n(e){var t=o.createClass({displayName:"ReactFullPageComponent"+(e.componentConstructor.displayName||""),componentWillUnmount:function(){r(!1)},render:function(){return this.transferPropsTo(e(null,this.props.children))}});return t}var o=e("./ReactCompositeComponent"),r=e("./invariant");t.exports=n},{"./ReactCompositeComponent":29,"./invariant":110}],91:[function(e,t){function n(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var o=u;s(!!u);var r=n(e),c=r&&a(r);if(c){o.innerHTML=c[1]+e+c[2];for(var l=c[0];l--;)o=o.lastChild}else o.innerHTML=e;var p=o.getElementsByTagName("script");p.length&&(s(t),i(p).forEach(t));for(var d=i(o.childNodes);o.lastChild;)o.removeChild(o.lastChild);return d}var r=e("./ExecutionEnvironment"),i=e("./createArrayFrom"),a=e("./getMarkupWrap"),s=e("./invariant"),u=r.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{"./ExecutionEnvironment":20,"./createArrayFrom":89,"./getMarkupWrap":103,"./invariant":110}],92:[function(e,t){function n(e,t){var n={},o=Array.isArray(t);"undefined"==typeof t&&(t=!0);for(var r=e.length;r--;)n[e[r]]=o?t[r]:t;return n}t.exports=n},{}],93:[function(e,t){"use strict";function n(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||o.isUnitlessNumber[e]?""+t:t+"px"}var o=e("./CSSProperty");t.exports=n},{"./CSSProperty":2}],94:[function(e,t){function n(e){return function(){return e}}function o(){}var r=e("./copyProperties");r(o,{thatReturns:n,thatReturnsFalse:n(!1),thatReturnsTrue:n(!0),thatReturnsNull:n(null),thatReturnsThis:function(){return this},thatReturnsArgument:function(e){return e}}),t.exports=o},{"./copyProperties":88}],95:[function(e,t){"use strict";var n={};t.exports=n},{}],96:[function(e,t){"use strict";function n(e){return r[e]}function o(e){return(""+e).replace(i,n)}var r={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},i=/[&><"'\/]/g;t.exports=o},{}],97:[function(e,t){"use strict";function n(e,t,n){var o=e;r(!o.hasOwnProperty(n)),null!=t&&(o[n]=t)}function o(e){if(null==e)return e;var t={};return i(e,n,t),t}var r=e("./invariant"),i=e("./traverseAllChildren");t.exports=o},{"./invariant":110,"./traverseAllChildren":130}],98:[function(e,t){"use strict";function n(e){e.disabled||e.focus()}t.exports=n},{}],99:[function(e,t){"use strict";var n=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=n},{}],100:[function(e,t){function n(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=n},{}],101:[function(e,t){"use strict";function n(e){return"key"in e?o[e.key]||e.key:r[e.which||e.keyCode]||"Unidentified"}var o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=n},{}],102:[function(e,t){"use strict";function n(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=n},{}],103:[function(e,t){function n(e){return r(!!i),p.hasOwnProperty(e)||(e="*"),a.hasOwnProperty(e)||(i.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",a[e]=!i.firstChild),a[e]?p[e]:null}var o=e("./ExecutionEnvironment"),r=e("./invariant"),i=o.canUseDOM?document.createElement("div"):null,a={circle:!0,defs:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],u=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],l=[1,"<svg>","</svg>"],p={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:u,colgroup:u,tbody:u,tfoot:u,thead:u,td:c,th:c,circle:l,defs:l,g:l,line:l,linearGradient:l,path:l,polygon:l,polyline:l,radialGradient:l,rect:l,stop:l,text:l};t.exports=n},{"./ExecutionEnvironment":20,"./invariant":110}],104:[function(e,t){"use strict";function n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function r(e,t){for(var r=n(e),i=0,a=0;r;){if(3==r.nodeType){if(a=i+r.textContent.length,t>=i&&a>=t)return{node:r,offset:t-i};i=a}r=n(o(r))}}t.exports=r},{}],105:[function(e,t){"use strict";function n(e){return e?e.nodeType===o?e.documentElement:e.firstChild:null}var o=9;t.exports=n},{}],106:[function(e,t){"use strict";function n(){return!r&&o.canUseDOM&&(r="textContent"in document.createElement("div")?"textContent":"innerText"),r}var o=e("./ExecutionEnvironment"),r=null;t.exports=n},{"./ExecutionEnvironment":20}],107:[function(e,t){"use strict";function n(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=n},{}],108:[function(e,t){function n(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=n},{}],109:[function(e,t){"use strict";function n(e){return e._descriptor=e,e}e("./warning");t.exports=n},{"./warning":131}],110:[function(e,t){"use strict";var n=function(e){if(!e){var t=new Error("Minified exception occured; use the non-minified dev environment for the full error message and additional helpful warnings.");throw t.framesToPop=1,t}};t.exports=n},{}],111:[function(e,t){"use strict";function n(e,t){if(!r.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,i=n in document;if(!i){var a=document.createElement("div");a.setAttribute(n,"return;"),i="function"==typeof a[n]}return!i&&o&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var o,r=e("./ExecutionEnvironment");r.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=n},{"./ExecutionEnvironment":20}],112:[function(e,t){function n(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=n},{}],113:[function(e,t){"use strict";function n(e){return e&&("INPUT"===e.nodeName&&o[e.type]||"TEXTAREA"===e.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=n},{}],114:[function(e,t){function n(e){return o(e)&&3==e.nodeType}var o=e("./isNode");t.exports=n},{"./isNode":112}],115:[function(e,t){"use strict";function n(e){e||(e="");var t,n=arguments.length;if(n>1)for(var o=1;n>o;o++)t=arguments[o],t&&(e+=" "+t);return e}t.exports=n},{}],116:[function(e,t){"use strict";var n=e("./invariant"),o=function(e){var t,o={};n(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(o[t]=t);return o};t.exports=o},{"./invariant":110}],117:[function(e,t){var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=n},{}],118:[function(e,t){"use strict";function n(e){var t={};return function(n){return t.hasOwnProperty(n)?t[n]:t[n]=e.call(this,n)}}t.exports=n},{}],119:[function(e,t){"use strict";var n=e("./mergeInto"),o=function(e,t){var o={};return n(o,e),n(o,t),o};t.exports=o},{"./mergeInto":121}],120:[function(e,t){"use strict";var n=e("./invariant"),o=e("./keyMirror"),r=36,i=function(e){return"object"!=typeof e||null===e},a={MAX_MERGE_DEPTH:r,isTerminal:i,normalizeMergeArg:function(e){return void 0===e||null===e?{}:e},checkMergeArrayArgs:function(e,t){n(Array.isArray(e)&&Array.isArray(t))},checkMergeObjectArgs:function(e,t){a.checkMergeObjectArg(e),a.checkMergeObjectArg(t)},checkMergeObjectArg:function(e){n(!i(e)&&!Array.isArray(e))},checkMergeLevel:function(e){n(r>e)},checkArrayStrategy:function(e){n(void 0===e||e in a.ArrayStrategies)},ArrayStrategies:o({Clobber:!0,IndexByIndex:!0})};t.exports=a},{"./invariant":110,"./keyMirror":116}],121:[function(e,t){"use strict";function n(e,t){if(r(e),null!=t){r(t);for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}}var o=e("./mergeHelpers"),r=o.checkMergeObjectArg;t.exports=n},{"./mergeHelpers":120}],122:[function(e,t){"use strict";var n=function(e,t){var n;for(n in t)t.hasOwnProperty(n)&&(e.prototype[n]=t[n])};t.exports=n},{}],123:[function(e,t){"use strict";function n(e){o(e&&!/[^a-z0-9_]/.test(e))}var o=e("./invariant");t.exports=n},{"./invariant":110}],124:[function(e,t){"use strict";function n(e,t,n){if(!e)return null;var o=0,r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.call(n,e[i],i,o++));return r}t.exports=n},{}],125:[function(e,t){"use strict";function n(e,t,n){if(!e)return null;var o=0,r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.call(n,i,e[i],o++));return r}t.exports=n},{}],126:[function(e,t){"use strict";function n(e){return r(o.isValidComponent(e)),e}var o=e("./ReactComponent"),r=e("./invariant");t.exports=n},{"./ReactComponent":27,"./invariant":110}],127:[function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=n},{}],128:[function(e,t){"use strict";function n(e,t){return e&&t&&e.constructor===t.constructor&&(e.props&&e.props.key)===(t.props&&t.props.key)&&e._owner===t._owner?!0:!1}t.exports=n},{}],129:[function(e,t){function n(e){var t=e.length;if(o(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),o("number"==typeof t),o(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),i=0;t>i;i++)r[i]=e[i];return r}var o=e("./invariant");t.exports=n},{"./invariant":110}],130:[function(e,t){"use strict";function n(e){return d[e]}function o(e,t){return e&&e.props&&null!=e.props.key?i(e.props.key):t.toString(36)}function r(e){return(""+e).replace(f,n)}function i(e){return"$"+r(e)}function a(e,t,n){null!==e&&void 0!==e&&h(e,"",0,t,n)}var s=e("./ReactInstanceHandles"),u=e("./ReactTextComponent"),c=e("./invariant"),l=s.SEPARATOR,p=":",d={"=":"=0",".":"=1",":":"=2"},f=/[=.:]/g,h=function(e,t,n,r,a){var s=0;if(Array.isArray(e))for(var d=0;d<e.length;d++){var f=e[d],m=t+(t?p:l)+o(f,d),v=n+s;s+=h(f,m,v,r,a)}else{var g=typeof e,C=""===t,y=C?l+o(e,0):t;if(null==e||"boolean"===g)r(a,null,y,n),s=1;else if(e.type&&e.type.prototype&&e.type.prototype.mountComponentIntoNode)r(a,e,y,n),s=1;else if("object"===g){c(!e||1!==e.nodeType);for(var E in e)e.hasOwnProperty(E)&&(s+=h(e[E],t+(t?p:l)+i(E)+p+o(e[E],0),n+s,r,a))}else if("string"===g){var R=new u(e);r(a,R,y,n),s+=1}else if("number"===g){var M=new u(""+e);r(a,M,y,n),s+=1}}return s};t.exports=a},{"./ReactInstanceHandles":51,"./ReactTextComponent":68,"./invariant":110}],131:[function(e,t){"use strict";var n=e("./emptyFunction"),o=n;t.exports=o},{"./emptyFunction":94}]},{},[24])(24)});/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20131201
 */

/*global window, SM2_DEFER, sm2Debugger, console, document, navigator, setTimeout, setInterval, clearInterval, Audio, opera */
/*jslint regexp: true, sloppy: true, white: true, nomen: true, plusplus: true, todo: true */

/**
 * About this file
 * -------------------------------------------------------------------------------------
 * This is the fully-commented source version of the SoundManager 2 API,
 * recommended for use during development and testing.
 *
 * See soundmanager2-nodebug-jsmin.js for an optimized build (~11KB with gzip.)
 * http://schillmania.com/projects/soundmanager2/doc/getstarted/#basic-inclusion
 * Alternately, serve this file with gzip for 75% compression savings (~30KB over HTTP.)
 *
 * You may notice <d> and </d> comments in this source; these are delimiters for
 * debug blocks which are removed in the -nodebug builds, further optimizing code size.
 *
 * Also, as you may note: Whoa, reliable cross-platform/device audio support is hard! ;)
 */

(function(window, _undefined) {

"use strict";

var soundManager = null;

/**
 * The SoundManager constructor.
 *
 * @constructor
 * @param {string} smURL Optional: Path to SWF files
 * @param {string} smID Optional: The ID to use for the SWF container element
 * @this {SoundManager}
 * @return {SoundManager} The new SoundManager instance
 */

function SoundManager(smURL, smID) {

  /**
   * soundManager configuration options list
   * defines top-level configuration properties to be applied to the soundManager instance (eg. soundManager.flashVersion)
   * to set these properties, use the setup() method - eg., soundManager.setup({url: '/swf/', flashVersion: 9})
   */

  this.setupOptions = {

    'url': (smURL || null),             // path (directory) where SoundManager 2 SWFs exist, eg., /path/to/swfs/
    'flashVersion': 8,                  // flash build to use (8 or 9.) Some API features require 9.
    'debugMode': true,                  // enable debugging output (console.log() with HTML fallback)
    'debugFlash': false,                // enable debugging output inside SWF, troubleshoot Flash/browser issues
    'useConsole': true,                 // use console.log() if available (otherwise, writes to #soundmanager-debug element)
    'consoleOnly': true,                // if console is being used, do not create/write to #soundmanager-debug
    'waitForWindowLoad': false,         // force SM2 to wait for window.onload() before trying to call soundManager.onload()
    'bgColor': '#ffffff',               // SWF background color. N/A when wmode = 'transparent'
    'useHighPerformance': false,        // position:fixed flash movie can help increase js/flash speed, minimize lag
    'flashPollingInterval': null,       // msec affecting whileplaying/loading callback frequency. If null, default of 50 msec is used.
    'html5PollingInterval': null,       // msec affecting whileplaying() for HTML5 audio, excluding mobile devices. If null, native HTML5 update events are used.
    'flashLoadTimeout': 1000,           // msec to wait for flash movie to load before failing (0 = infinity)
    'wmode': null,                      // flash rendering mode - null, 'transparent', or 'opaque' (last two allow z-index to work)
    'allowScriptAccess': 'always',      // for scripting the SWF (object/embed property), 'always' or 'sameDomain'
    'useFlashBlock': false,             // *requires flashblock.css, see demos* - allow recovery from flash blockers. Wait indefinitely and apply timeout CSS to SWF, if applicable.
    'useHTML5Audio': true,              // use HTML5 Audio() where API is supported (most Safari, Chrome versions), Firefox (no MP3/MP4.) Ideally, transparent vs. Flash API where possible.
    'html5Test': /^(probably|maybe)$/i, // HTML5 Audio() format support test. Use /^probably$/i; if you want to be more conservative.
    'preferFlash': false,               // overrides useHTML5audio, will use Flash for MP3/MP4/AAC if present. Potential option if HTML5 playback with these formats is quirky.
    'noSWFCache': false,                // if true, appends ?ts={date} to break aggressive SWF caching.
    'idPrefix': 'sound'                 // if an id is not provided to createSound(), this prefix is used for generated IDs - 'sound0', 'sound1' etc.

  };

  this.defaultOptions = {

    /**
     * the default configuration for sound objects made with createSound() and related methods
     * eg., volume, auto-load behaviour and so forth
     */

    'autoLoad': false,        // enable automatic loading (otherwise .load() will be called on demand with .play(), the latter being nicer on bandwidth - if you want to .load yourself, you also can)
    'autoPlay': false,        // enable playing of file as soon as possible (much faster if "stream" is true)
    'from': null,             // position to start playback within a sound (msec), default = beginning
    'loops': 1,               // how many times to repeat the sound (position will wrap around to 0, setPosition() will break out of loop when >0)
    'onid3': null,            // callback function for "ID3 data is added/available"
    'onload': null,           // callback function for "load finished"
    'whileloading': null,     // callback function for "download progress update" (X of Y bytes received)
    'onplay': null,           // callback for "play" start
    'onpause': null,          // callback for "pause"
    'onresume': null,         // callback for "resume" (pause toggle)
    'whileplaying': null,     // callback during play (position update)
    'onposition': null,       // object containing times and function callbacks for positions of interest
    'onstop': null,           // callback for "user stop"
    'onfailure': null,        // callback function for when playing fails
    'onfinish': null,         // callback function for "sound finished playing"
    'multiShot': true,        // let sounds "restart" or layer on top of each other when played multiple times, rather than one-shot/one at a time
    'multiShotEvents': false, // fire multiple sound events (currently onfinish() only) when multiShot is enabled
    'position': null,         // offset (milliseconds) to seek to within loaded sound data.
    'pan': 0,                 // "pan" settings, left-to-right, -100 to 100
    'stream': true,           // allows playing before entire file has loaded (recommended)
    'to': null,               // position to end playback within a sound (msec), default = end
    'type': null,             // MIME-like hint for file pattern / canPlay() tests, eg. audio/mp3
    'usePolicyFile': false,   // enable crossdomain.xml request for audio on remote domains (for ID3/waveform access)
    'volume': 100             // self-explanatory. 0-100, the latter being the max.

  };

  this.flash9Options = {

    /**
     * flash 9-only options,
     * merged into defaultOptions if flash 9 is being used
     */

    'isMovieStar': null,      // "MovieStar" MPEG4 audio mode. Null (default) = auto detect MP4, AAC etc. based on URL. true = force on, ignore URL
    'usePeakData': false,     // enable left/right channel peak (level) data
    'useWaveformData': false, // enable sound spectrum (raw waveform data) - NOTE: May increase CPU load.
    'useEQData': false,       // enable sound EQ (frequency spectrum data) - NOTE: May increase CPU load.
    'onbufferchange': null,   // callback for "isBuffering" property change
    'ondataerror': null       // callback for waveform/eq data access error (flash playing audio in other tabs/domains)

  };

  this.movieStarOptions = {

    /**
     * flash 9.0r115+ MPEG4 audio options,
     * merged into defaultOptions if flash 9+movieStar mode is enabled
     */

    'bufferTime': 3,          // seconds of data to buffer before playback begins (null = flash default of 0.1 seconds - if AAC playback is gappy, try increasing.)
    'serverURL': null,        // rtmp: FMS or FMIS server to connect to, required when requesting media via RTMP or one of its variants
    'onconnect': null,        // rtmp: callback for connection to flash media server
    'duration': null          // rtmp: song duration (msec)

  };

  this.audioFormats = {

    /**
     * determines HTML5 support + flash requirements.
     * if no support (via flash and/or HTML5) for a "required" format, SM2 will fail to start.
     * flash fallback is used for MP3 or MP4 if HTML5 can't play it (or if preferFlash = true)
     */

    'mp3': {
      'type': ['audio/mpeg; codecs="mp3"', 'audio/mpeg', 'audio/mp3', 'audio/MPA', 'audio/mpa-robust'],
      'required': true
    },

    'mp4': {
      'related': ['aac','m4a','m4b'], // additional formats under the MP4 container
      'type': ['audio/mp4; codecs="mp4a.40.2"', 'audio/aac', 'audio/x-m4a', 'audio/MP4A-LATM', 'audio/mpeg4-generic'],
      'required': false
    },

    'ogg': {
      'type': ['audio/ogg; codecs=vorbis'],
      'required': false
    },

    'opus': {
      'type': ['audio/ogg; codecs=opus', 'audio/opus'],
      'required': false
    },

    'wav': {
      'type': ['audio/wav; codecs="1"', 'audio/wav', 'audio/wave', 'audio/x-wav'],
      'required': false
    }

  };

  // HTML attributes (id + class names) for the SWF container

  this.movieID = 'sm2-container';
  this.id = (smID || 'sm2movie');

  this.debugID = 'soundmanager-debug';
  this.debugURLParam = /([#?&])debug=1/i;

  // dynamic attributes

  this.versionNumber = 'V2.97a.20131201';
  this.version = null;
  this.movieURL = null;
  this.altURL = null;
  this.swfLoaded = false;
  this.enabled = false;
  this.oMC = null;
  this.sounds = {};
  this.soundIDs = [];
  this.muted = false;
  this.didFlashBlock = false;
  this.filePattern = null;

  this.filePatterns = {

    'flash8': /\.mp3(\?.*)?$/i,
    'flash9': /\.mp3(\?.*)?$/i

  };

  // support indicators, set at init

  this.features = {

    'buffering': false,
    'peakData': false,
    'waveformData': false,
    'eqData': false,
    'movieStar': false

  };

  // flash sandbox info, used primarily in troubleshooting

  this.sandbox = {

    // <d>
    'type': null,
    'types': {
      'remote': 'remote (domain-based) rules',
      'localWithFile': 'local with file access (no internet access)',
      'localWithNetwork': 'local with network (internet access only, no local access)',
      'localTrusted': 'local, trusted (local+internet access)'
    },
    'description': null,
    'noRemote': null,
    'noLocal': null
    // </d>

  };

  /**
   * format support (html5/flash)
   * stores canPlayType() results based on audioFormats.
   * eg. { mp3: boolean, mp4: boolean }
   * treat as read-only.
   */

  this.html5 = {
    'usingFlash': null // set if/when flash fallback is needed
  };

  // file type support hash
  this.flash = {};

  // determined at init time
  this.html5Only = false;

  // used for special cases (eg. iPad/iPhone/palm OS?)
  this.ignoreFlash = false;

  /**
   * a few private internals (OK, a lot. :D)
   */

  var SMSound,
  sm2 = this, globalHTML5Audio = null, flash = null, sm = 'soundManager', smc = sm + ': ', h5 = 'HTML5::', id, ua = navigator.userAgent, wl = window.location.href.toString(), doc = document, doNothing, setProperties, init, fV, on_queue = [], debugOpen = true, debugTS, didAppend = false, appendSuccess = false, didInit = false, disabled = false, windowLoaded = false, _wDS, wdCount = 0, initComplete, mixin, assign, extraOptions, addOnEvent, processOnEvents, initUserOnload, delayWaitForEI, waitForEI, rebootIntoHTML5, setVersionInfo, handleFocus, strings, initMovie, preInit, domContentLoaded, winOnLoad, didDCLoaded, getDocument, createMovie, catchError, setPolling, initDebug, debugLevels = ['log', 'info', 'warn', 'error'], defaultFlashVersion = 8, disableObject, failSafely, normalizeMovieURL, oRemoved = null, oRemovedHTML = null, str, flashBlockHandler, getSWFCSS, swfCSS, toggleDebug, loopFix, policyFix, complain, idCheck, waitingForEI = false, initPending = false, startTimer, stopTimer, timerExecute, h5TimerCount = 0, h5IntervalTimer = null, parseURL, messages = [],
  canIgnoreFlash, needsFlash = null, featureCheck, html5OK, html5CanPlay, html5Ext, html5Unload, domContentLoadedIE, testHTML5, event, slice = Array.prototype.slice, useGlobalHTML5Audio = false, lastGlobalHTML5URL, hasFlash, detectFlash, badSafariFix, html5_events, showSupport, flushMessages, wrapCallback, idCounter = 0,
  is_iDevice = ua.match(/(ipad|iphone|ipod)/i), isAndroid = ua.match(/android/i), isIE = ua.match(/msie/i), isWebkit = ua.match(/webkit/i), isSafari = (ua.match(/safari/i) && !ua.match(/chrome/i)), isOpera = (ua.match(/opera/i)),
  mobileHTML5 = (ua.match(/(mobile|pre\/|xoom)/i) || is_iDevice || isAndroid),
  isBadSafari = (!wl.match(/usehtml5audio/i) && !wl.match(/sm2\-ignorebadua/i) && isSafari && !ua.match(/silk/i) && ua.match(/OS X 10_6_([3-7])/i)), // Safari 4 and 5 (excluding Kindle Fire, "Silk") occasionally fail to load/play HTML5 audio on Snow Leopard 10.6.3 through 10.6.7 due to bug(s) in QuickTime X and/or other underlying frameworks. :/ Confirmed bug. https://bugs.webkit.org/show_bug.cgi?id=32159
  hasConsole = (window.console !== _undefined && console.log !== _undefined), isFocused = (doc.hasFocus !== _undefined?doc.hasFocus():null), tryInitOnFocus = (isSafari && (doc.hasFocus === _undefined || !doc.hasFocus())), okToDisable = !tryInitOnFocus, flashMIME = /(mp3|mp4|mpa|m4a|m4b)/i, msecScale = 1000,
  emptyURL = 'about:blank', // safe URL to unload, or load nothing from (flash 8 + most HTML5 UAs)
  emptyWAV = 'data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==', // tiny WAV for HTML5 unloading
  overHTTP = (doc.location?doc.location.protocol.match(/http/i):null),
  http = (!overHTTP ? 'http:/'+'/' : ''),
  // mp3, mp4, aac etc.
  netStreamMimeTypes = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
  // Flash v9.0r115+ "moviestar" formats
  netStreamTypes = ['mpeg4', 'aac', 'flv', 'mov', 'mp4', 'm4v', 'f4v', 'm4a', 'm4b', 'mp4v', '3gp', '3g2'],
  netStreamPattern = new RegExp('\\.(' + netStreamTypes.join('|') + ')(\\?.*)?$', 'i');

  this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i; // default mp3 set

  // use altURL if not "online"
  this.useAltURL = !overHTTP;

  swfCSS = {

    'swfBox': 'sm2-object-box',
    'swfDefault': 'movieContainer',
    'swfError': 'swf_error', // SWF loaded, but SM2 couldn't start (other error)
    'swfTimedout': 'swf_timedout',
    'swfLoaded': 'swf_loaded',
    'swfUnblocked': 'swf_unblocked', // or loaded OK
    'sm2Debug': 'sm2_debug',
    'highPerf': 'high_performance',
    'flashDebug': 'flash_debug'

  };

  /**
   * basic HTML5 Audio() support test
   * try...catch because of IE 9 "not implemented" nonsense
   * https://github.com/Modernizr/Modernizr/issues/224
   */

  this.hasHTML5 = (function() {
    try {
      // new Audio(null) for stupid Opera 9.64 case, which throws not_enough_arguments exception otherwise.
      return (Audio !== _undefined && (isOpera && opera !== _undefined && opera.version() < 10 ? new Audio(null) : new Audio()).canPlayType !== _undefined);
    } catch(e) {
      return false;
    }
  }());

  /**
   * Public SoundManager API
   * -----------------------
   */

  /**
   * Configures top-level soundManager properties.
   *
   * @param {object} options Option parameters, eg. { flashVersion: 9, url: '/path/to/swfs/' }
   * onready and ontimeout are also accepted parameters. call soundManager.setup() to see the full list.
   */

  this.setup = function(options) {

    var noURL = (!sm2.url);

    // warn if flash options have already been applied

    if (options !== _undefined && didInit && needsFlash && sm2.ok() && (options.flashVersion !== _undefined || options.url !== _undefined || options.html5Test !== _undefined)) {
      complain(str('setupLate'));
    }

    // TODO: defer: true?

    assign(options);

    // special case 1: "Late setup". SM2 loaded normally, but user didn't assign flash URL eg., setup({url:...}) before SM2 init. Treat as delayed init.

    if (options) {

      if (noURL && didDCLoaded && options.url !== _undefined) {
        sm2.beginDelayedInit();
      }

      // special case 2: If lazy-loading SM2 (DOMContentLoaded has already happened) and user calls setup() with url: parameter, try to init ASAP.

      if (!didDCLoaded && options.url !== _undefined && doc.readyState === 'complete') {
        setTimeout(domContentLoaded, 1);
      }

    }

    return sm2;

  };

  this.ok = function() {

    return (needsFlash ? (didInit && !disabled) : (sm2.useHTML5Audio && sm2.hasHTML5));

  };

  this.supported = this.ok; // legacy

  this.getMovie = function(smID) {

    // safety net: some old browsers differ on SWF references, possibly related to ExternalInterface / flash version
    return id(smID) || doc[smID] || window[smID];

  };

  /**
   * Creates a SMSound sound object instance.
   *
   * @param {object} oOptions Sound options (at minimum, id and url parameters are required.)
   * @return {object} SMSound The new SMSound object.
   */

  this.createSound = function(oOptions, _url) {

    var cs, cs_string, options, oSound = null;

    // <d>
    cs = sm + '.createSound(): ';
    cs_string = cs + str(!didInit?'notReady':'notOK');
    // </d>

    if (!didInit || !sm2.ok()) {
      complain(cs_string);
      return false;
    }

    if (_url !== _undefined) {
      // function overloading in JS! :) ..assume simple createSound(id, url) use case
      oOptions = {
        'id': oOptions,
        'url': _url
      };
    }

    // inherit from defaultOptions
    options = mixin(oOptions);

    options.url = parseURL(options.url);

    // generate an id, if needed.
    if (options.id === undefined) {
      options.id = sm2.setupOptions.idPrefix + (idCounter++);
    }

    // <d>
    if (options.id.toString().charAt(0).match(/^[0-9]$/)) {
      sm2._wD(cs + str('badID', options.id), 2);
    }

    sm2._wD(cs + options.id + (options.url ? ' (' + options.url + ')' : ''), 1);
    // </d>

    if (idCheck(options.id, true)) {
      sm2._wD(cs + options.id + ' exists', 1);
      return sm2.sounds[options.id];
    }

    function make() {

      options = loopFix(options);
      sm2.sounds[options.id] = new SMSound(options);
      sm2.soundIDs.push(options.id);
      return sm2.sounds[options.id];

    }

    if (html5OK(options)) {

      oSound = make();
      sm2._wD(options.id + ': Using HTML5');
      oSound._setup_html5(options);

    } else {

      if (sm2.html5Only) {
        sm2._wD(options.id + ': No HTML5 support for this sound, and no Flash. Exiting.');
        return make();
      }

      // TODO: Move HTML5/flash checks into generic URL parsing/handling function.

      if (sm2.html5.usingFlash && options.url && options.url.match(/data\:/i)) {
        // data: URIs not supported by Flash, either.
        sm2._wD(options.id + ': data: URIs not supported via Flash. Exiting.');
        return make();
      }

      if (fV > 8) {
        if (options.isMovieStar === null) {
          // attempt to detect MPEG-4 formats
          options.isMovieStar = !!(options.serverURL || (options.type ? options.type.match(netStreamMimeTypes) : false) || (options.url && options.url.match(netStreamPattern)));
        }
        // <d>
        if (options.isMovieStar) {
          sm2._wD(cs + 'using MovieStar handling');
          if (options.loops > 1) {
            _wDS('noNSLoop');
          }
        }
        // </d>
      }

      options = policyFix(options, cs);
      oSound = make();

      if (fV === 8) {
        flash._createSound(options.id, options.loops||1, options.usePolicyFile);
      } else {
        flash._createSound(options.id, options.url, options.usePeakData, options.useWaveformData, options.useEQData, options.isMovieStar, (options.isMovieStar?options.bufferTime:false), options.loops||1, options.serverURL, options.duration||null, options.autoPlay, true, options.autoLoad, options.usePolicyFile);
        if (!options.serverURL) {
          // We are connected immediately
          oSound.connected = true;
          if (options.onconnect) {
            options.onconnect.apply(oSound);
          }
        }
      }

      if (!options.serverURL && (options.autoLoad || options.autoPlay)) {
        // call load for non-rtmp streams
        oSound.load(options);
      }

    }

    // rtmp will play in onconnect
    if (!options.serverURL && options.autoPlay) {
      oSound.play();
    }

    return oSound;

  };

  /**
   * Destroys a SMSound sound object instance.
   *
   * @param {string} sID The ID of the sound to destroy
   */

  this.destroySound = function(sID, _bFromSound) {

    // explicitly destroy a sound before normal page unload, etc.

    if (!idCheck(sID)) {
      return false;
    }

    var oS = sm2.sounds[sID], i;

    // Disable all callbacks while the sound is being destroyed
    oS._iO = {};

    oS.stop();
    oS.unload();

    for (i = 0; i < sm2.soundIDs.length; i++) {
      if (sm2.soundIDs[i] === sID) {
        sm2.soundIDs.splice(i, 1);
        break;
      }
    }

    if (!_bFromSound) {
      // ignore if being called from SMSound instance
      oS.destruct(true);
    }

    oS = null;
    delete sm2.sounds[sID];

    return true;

  };

  /**
   * Calls the load() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {object} oOptions Optional: Sound options
   */

  this.load = function(sID, oOptions) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].load(oOptions);

  };

  /**
   * Calls the unload() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   */

  this.unload = function(sID) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].unload();

  };

  /**
   * Calls the onPosition() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nPosition The position to watch for
   * @param {function} oMethod The relevant callback to fire
   * @param {object} oScope Optional: The scope to apply the callback to
   * @return {SMSound} The SMSound object
   */

  this.onPosition = function(sID, nPosition, oMethod, oScope) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].onposition(nPosition, oMethod, oScope);

  };

  // legacy/backwards-compability: lower-case method name
  this.onposition = this.onPosition;

  /**
   * Calls the clearOnPosition() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nPosition The position to watch for
   * @param {function} oMethod Optional: The relevant callback to fire
   * @return {SMSound} The SMSound object
   */

  this.clearOnPosition = function(sID, nPosition, oMethod) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].clearOnPosition(nPosition, oMethod);

  };

  /**
   * Calls the play() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {object} oOptions Optional: Sound options
   * @return {SMSound} The SMSound object
   */

  this.play = function(sID, oOptions) {

    var result = null,
        // legacy function-overloading use case: play('mySound', '/path/to/some.mp3');
        overloaded = (oOptions && !(oOptions instanceof Object));

    if (!didInit || !sm2.ok()) {
      complain(sm + '.play(): ' + str(!didInit?'notReady':'notOK'));
      return false;
    }

    if (!idCheck(sID, overloaded)) {

      if (!overloaded) {
        // no sound found for the given ID. Bail.
        return false;
      }

      if (overloaded) {
        oOptions = {
          url: oOptions
        };
      }

      if (oOptions && oOptions.url) {
        // overloading use case, create+play: .play('someID', {url:'/path/to.mp3'});
        sm2._wD(sm + '.play(): Attempting to create "' + sID + '"', 1);
        oOptions.id = sID;
        result = sm2.createSound(oOptions).play();
      }

    } else if (overloaded) {

      // existing sound object case
      oOptions = {
        url: oOptions
      };

    }

    if (result === null) {
      // default case
      result = sm2.sounds[sID].play(oOptions);
    }

    return result;

  };

  this.start = this.play; // just for convenience

  /**
   * Calls the setPosition() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nMsecOffset Position (milliseconds)
   * @return {SMSound} The SMSound object
   */

  this.setPosition = function(sID, nMsecOffset) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].setPosition(nMsecOffset);

  };

  /**
   * Calls the stop() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.stop = function(sID) {

    if (!idCheck(sID)) {
      return false;
    }

    sm2._wD(sm + '.stop(' + sID + ')', 1);
    return sm2.sounds[sID].stop();

  };

  /**
   * Stops all currently-playing sounds.
   */

  this.stopAll = function() {

    var oSound;
    sm2._wD(sm + '.stopAll()', 1);

    for (oSound in sm2.sounds) {
      if (sm2.sounds.hasOwnProperty(oSound)) {
        // apply only to sound objects
        sm2.sounds[oSound].stop();
      }
    }

  };

  /**
   * Calls the pause() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.pause = function(sID) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].pause();

  };

  /**
   * Pauses all currently-playing sounds.
   */

  this.pauseAll = function() {

    var i;
    for (i = sm2.soundIDs.length-1; i >= 0; i--) {
      sm2.sounds[sm2.soundIDs[i]].pause();
    }

  };

  /**
   * Calls the resume() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.resume = function(sID) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].resume();

  };

  /**
   * Resumes all currently-paused sounds.
   */

  this.resumeAll = function() {

    var i;
    for (i = sm2.soundIDs.length-1; i >= 0; i--) {
      sm2.sounds[sm2.soundIDs[i]].resume();
    }

  };

  /**
   * Calls the togglePause() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.togglePause = function(sID) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].togglePause();

  };

  /**
   * Calls the setPan() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nPan The pan value (-100 to 100)
   * @return {SMSound} The SMSound object
   */

  this.setPan = function(sID, nPan) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].setPan(nPan);

  };

  /**
   * Calls the setVolume() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nVol The volume value (0 to 100)
   * @return {SMSound} The SMSound object
   */

  this.setVolume = function(sID, nVol) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].setVolume(nVol);

  };

  /**
   * Calls the mute() method of either a single SMSound object by ID, or all sound objects.
   *
   * @param {string} sID Optional: The ID of the sound (if omitted, all sounds will be used.)
   */

  this.mute = function(sID) {

    var i = 0;

    if (sID instanceof String) {
      sID = null;
    }

    if (!sID) {

      sm2._wD(sm + '.mute(): Muting all sounds');
      for (i = sm2.soundIDs.length-1; i >= 0; i--) {
        sm2.sounds[sm2.soundIDs[i]].mute();
      }
      sm2.muted = true;

    } else {

      if (!idCheck(sID)) {
        return false;
      }
      sm2._wD(sm + '.mute(): Muting "' + sID + '"');
      return sm2.sounds[sID].mute();

    }

    return true;

  };

  /**
   * Mutes all sounds.
   */

  this.muteAll = function() {

    sm2.mute();

  };

  /**
   * Calls the unmute() method of either a single SMSound object by ID, or all sound objects.
   *
   * @param {string} sID Optional: The ID of the sound (if omitted, all sounds will be used.)
   */

  this.unmute = function(sID) {

    var i;

    if (sID instanceof String) {
      sID = null;
    }

    if (!sID) {

      sm2._wD(sm + '.unmute(): Unmuting all sounds');
      for (i = sm2.soundIDs.length-1; i >= 0; i--) {
        sm2.sounds[sm2.soundIDs[i]].unmute();
      }
      sm2.muted = false;

    } else {

      if (!idCheck(sID)) {
        return false;
      }
      sm2._wD(sm + '.unmute(): Unmuting "' + sID + '"');
      return sm2.sounds[sID].unmute();

    }

    return true;

  };

  /**
   * Unmutes all sounds.
   */

  this.unmuteAll = function() {

    sm2.unmute();

  };

  /**
   * Calls the toggleMute() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.toggleMute = function(sID) {

    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].toggleMute();

  };

  /**
   * Retrieves the memory used by the flash plugin.
   *
   * @return {number} The amount of memory in use
   */

  this.getMemoryUse = function() {

    // flash-only
    var ram = 0;

    if (flash && fV !== 8) {
      ram = parseInt(flash._getMemoryUse(), 10);
    }

    return ram;

  };

  /**
   * Undocumented: NOPs soundManager and all SMSound objects.
   */

  this.disable = function(bNoDisable) {

    // destroy all functions
    var i;

    if (bNoDisable === _undefined) {
      bNoDisable = false;
    }

    if (disabled) {
      return false;
    }

    disabled = true;
    _wDS('shutdown', 1);

    for (i = sm2.soundIDs.length-1; i >= 0; i--) {
      disableObject(sm2.sounds[sm2.soundIDs[i]]);
    }

    // fire "complete", despite fail
    initComplete(bNoDisable);
    event.remove(window, 'load', initUserOnload);

    return true;

  };

  /**
   * Determines playability of a MIME type, eg. 'audio/mp3'.
   */

  this.canPlayMIME = function(sMIME) {

    var result;

    if (sm2.hasHTML5) {
      result = html5CanPlay({type:sMIME});
    }

    if (!result && needsFlash) {
      // if flash 9, test netStream (movieStar) types as well.
      result = (sMIME && sm2.ok() ? !!((fV > 8 ? sMIME.match(netStreamMimeTypes) : null) || sMIME.match(sm2.mimePattern)) : null); // TODO: make less "weird" (per JSLint)
    }

    return result;

  };

  /**
   * Determines playability of a URL based on audio support.
   *
   * @param {string} sURL The URL to test
   * @return {boolean} URL playability
   */

  this.canPlayURL = function(sURL) {

    var result;

    if (sm2.hasHTML5) {
      result = html5CanPlay({url: sURL});
    }

    if (!result && needsFlash) {
      result = (sURL && sm2.ok() ? !!(sURL.match(sm2.filePattern)) : null);
    }

    return result;

  };

  /**
   * Determines playability of an HTML DOM &lt;a&gt; object (or similar object literal) based on audio support.
   *
   * @param {object} oLink an HTML DOM &lt;a&gt; object or object literal including href and/or type attributes
   * @return {boolean} URL playability
   */

  this.canPlayLink = function(oLink) {

    if (oLink.type !== _undefined && oLink.type) {
      if (sm2.canPlayMIME(oLink.type)) {
        return true;
      }
    }

    return sm2.canPlayURL(oLink.href);

  };

  /**
   * Retrieves a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.getSoundById = function(sID, _suppressDebug) {

    if (!sID) {
      return null;
    }

    var result = sm2.sounds[sID];

    // <d>
    if (!result && !_suppressDebug) {
      sm2._wD(sm + '.getSoundById(): Sound "' + sID + '" not found.', 2);
    }
    // </d>

    return result;

  };

  /**
   * Queues a callback for execution when SoundManager has successfully initialized.
   *
   * @param {function} oMethod The callback method to fire
   * @param {object} oScope Optional: The scope to apply to the callback
   */

  this.onready = function(oMethod, oScope) {

    var sType = 'onready',
        result = false;

    if (typeof oMethod === 'function') {

      // <d>
      if (didInit) {
        sm2._wD(str('queue', sType));
      }
      // </d>

      if (!oScope) {
        oScope = window;
      }

      addOnEvent(sType, oMethod, oScope);
      processOnEvents();

      result = true;

    } else {

      throw str('needFunction', sType);

    }

    return result;

  };

  /**
   * Queues a callback for execution when SoundManager has failed to initialize.
   *
   * @param {function} oMethod The callback method to fire
   * @param {object} oScope Optional: The scope to apply to the callback
   */

  this.ontimeout = function(oMethod, oScope) {

    var sType = 'ontimeout',
        result = false;

    if (typeof oMethod === 'function') {

      // <d>
      if (didInit) {
        sm2._wD(str('queue', sType));
      }
      // </d>

      if (!oScope) {
        oScope = window;
      }

      addOnEvent(sType, oMethod, oScope);
      processOnEvents({type:sType});

      result = true;

    } else {

      throw str('needFunction', sType);

    }

    return result;

  };

  /**
   * Writes console.log()-style debug output to a console or in-browser element.
   * Applies when debugMode = true
   *
   * @param {string} sText The console message
   * @param {object} nType Optional log level (number), or object. Number case: Log type/style where 0 = 'info', 1 = 'warn', 2 = 'error'. Object case: Object to be dumped.
   */

  this._writeDebug = function(sText, sTypeOrObject) {

    // pseudo-private console.log()-style output
    // <d>

    var sDID = 'soundmanager-debug', o, oItem;

    if (!sm2.debugMode) {
      return false;
    }

    if (hasConsole && sm2.useConsole) {
      if (sTypeOrObject && typeof sTypeOrObject === 'object') {
        // object passed; dump to console.
        console.log(sText, sTypeOrObject);
      } else if (debugLevels[sTypeOrObject] !== _undefined) {
        console[debugLevels[sTypeOrObject]](sText);
      } else {
        console.log(sText);
      }
      if (sm2.consoleOnly) {
        return true;
      }
    }

    o = id(sDID);

    if (!o) {
      return false;
    }

    oItem = doc.createElement('div');

    if (++wdCount % 2 === 0) {
      oItem.className = 'sm2-alt';
    }

    if (sTypeOrObject === _undefined) {
      sTypeOrObject = 0;
    } else {
      sTypeOrObject = parseInt(sTypeOrObject, 10);
    }

    oItem.appendChild(doc.createTextNode(sText));

    if (sTypeOrObject) {
      if (sTypeOrObject >= 2) {
        oItem.style.fontWeight = 'bold';
      }
      if (sTypeOrObject === 3) {
        oItem.style.color = '#ff3333';
      }
    }

    // top-to-bottom
    // o.appendChild(oItem);

    // bottom-to-top
    o.insertBefore(oItem, o.firstChild);

    o = null;
    // </d>

    return true;

  };

  // <d>
  // last-resort debugging option
  if (wl.indexOf('sm2-debug=alert') !== -1) {
    this._writeDebug = function(sText) {
      window.alert(sText);
    };
  }
  // </d>

  // alias
  this._wD = this._writeDebug;

  /**
   * Provides debug / state information on all SMSound objects.
   */

  this._debug = function() {

    // <d>
    var i, j;
    _wDS('currentObj', 1);

    for (i = 0, j = sm2.soundIDs.length; i < j; i++) {
      sm2.sounds[sm2.soundIDs[i]]._debug();
    }
    // </d>

  };

  /**
   * Restarts and re-initializes the SoundManager instance.
   *
   * @param {boolean} resetEvents Optional: When true, removes all registered onready and ontimeout event callbacks.
   * @param {boolean} excludeInit Options: When true, does not call beginDelayedInit() (which would restart SM2).
   * @return {object} soundManager The soundManager instance.
   */

  this.reboot = function(resetEvents, excludeInit) {

    // reset some (or all) state, and re-init unless otherwise specified.

    // <d>
    if (sm2.soundIDs.length) {
      sm2._wD('Destroying ' + sm2.soundIDs.length + ' SMSound object' + (sm2.soundIDs.length !== 1 ? 's' : '') + '...');
    }
    // </d>

    var i, j, k;

    for (i = sm2.soundIDs.length-1; i >= 0; i--) {
      sm2.sounds[sm2.soundIDs[i]].destruct();
    }

    // trash ze flash (remove from the DOM)

    if (flash) {

      try {

        if (isIE) {
          oRemovedHTML = flash.innerHTML;
        }

        oRemoved = flash.parentNode.removeChild(flash);

      } catch(e) {

        // Remove failed? May be due to flash blockers silently removing the SWF object/embed node from the DOM. Warn and continue.

        _wDS('badRemove', 2);

      }

    }

    // actually, force recreate of movie.

    oRemovedHTML = oRemoved = needsFlash = flash = null;

    sm2.enabled = didDCLoaded = didInit = waitingForEI = initPending = didAppend = appendSuccess = disabled = useGlobalHTML5Audio = sm2.swfLoaded = false;

    sm2.soundIDs = [];
    sm2.sounds = {};

    idCounter = 0;

    if (!resetEvents) {
      // reset callbacks for onready, ontimeout etc. so that they will fire again on re-init
      for (i in on_queue) {
        if (on_queue.hasOwnProperty(i)) {
          for (j = 0, k = on_queue[i].length; j < k; j++) {
            on_queue[i][j].fired = false;
          }
        }
      }
    } else {
      // remove all callbacks entirely
      on_queue = [];
    }

    // <d>
    if (!excludeInit) {
      sm2._wD(sm + ': Rebooting...');
    }
    // </d>

    // reset HTML5 and flash canPlay test results

    sm2.html5 = {
      'usingFlash': null
    };

    sm2.flash = {};

    // reset device-specific HTML/flash mode switches

    sm2.html5Only = false;
    sm2.ignoreFlash = false;

    window.setTimeout(function() {

      preInit();

      // by default, re-init

      if (!excludeInit) {
        sm2.beginDelayedInit();
      }

    }, 20);

    return sm2;

  };

  this.reset = function() {

    /**
     * Shuts down and restores the SoundManager instance to its original loaded state, without an explicit reboot. All onready/ontimeout handlers are removed.
     * After this call, SM2 may be re-initialized via soundManager.beginDelayedInit().
     * @return {object} soundManager The soundManager instance.
     */

    _wDS('reset');
    return sm2.reboot(true, true);

  };

  /**
   * Undocumented: Determines the SM2 flash movie's load progress.
   *
   * @return {number or null} Percent loaded, or if invalid/unsupported, null.
   */

  this.getMoviePercent = function() {

    /**
     * Interesting syntax notes...
     * Flash/ExternalInterface (ActiveX/NPAPI) bridge methods are not typeof "function" nor instanceof Function, but are still valid.
     * Additionally, JSLint dislikes ('PercentLoaded' in flash)-style syntax and recommends hasOwnProperty(), which does not work in this case.
     * Furthermore, using (flash && flash.PercentLoaded) causes IE to throw "object doesn't support this property or method".
     * Thus, 'in' syntax must be used.
     */

    return (flash && 'PercentLoaded' in flash ? flash.PercentLoaded() : null); // Yes, JSLint. See nearby comment in source for explanation.

  };

  /**
   * Additional helper for manually invoking SM2's init process after DOM Ready / window.onload().
   */

  this.beginDelayedInit = function() {

    windowLoaded = true;
    domContentLoaded();

    setTimeout(function() {

      if (initPending) {
        return false;
      }

      createMovie();
      initMovie();
      initPending = true;

      return true;

    }, 20);

    delayWaitForEI();

  };

  /**
   * Destroys the SoundManager instance and all SMSound instances.
   */

  this.destruct = function() {

    sm2._wD(sm + '.destruct()');
    sm2.disable(true);

  };

  /**
   * SMSound() (sound object) constructor
   * ------------------------------------
   *
   * @param {object} oOptions Sound options (id and url are required attributes)
   * @return {SMSound} The new SMSound object
   */

  SMSound = function(oOptions) {

    var s = this, resetProperties, add_html5_events, remove_html5_events, stop_html5_timer, start_html5_timer, attachOnPosition, onplay_called = false, onPositionItems = [], onPositionFired = 0, detachOnPosition, applyFromTo, lastURL = null, lastHTML5State, urlOmitted;

    lastHTML5State = {
      // tracks duration + position (time)
      duration: null,
      time: null
    };

    this.id = oOptions.id;

    // legacy
    this.sID = this.id;

    this.url = oOptions.url;
    this.options = mixin(oOptions);

    // per-play-instance-specific options
    this.instanceOptions = this.options;

    // short alias
    this._iO = this.instanceOptions;

    // assign property defaults
    this.pan = this.options.pan;
    this.volume = this.options.volume;

    // whether or not this object is using HTML5
    this.isHTML5 = false;

    // internal HTML5 Audio() object reference
    this._a = null;

    // for flash 8 special-case createSound() without url, followed by load/play with url case
    urlOmitted = (this.url ? false : true);

    /**
     * SMSound() public methods
     * ------------------------
     */

    this.id3 = {};

    /**
     * Writes SMSound object parameters to debug console
     */

    this._debug = function() {

      // <d>
      sm2._wD(s.id + ': Merged options:', s.options);
      // </d>

    };

    /**
     * Begins loading a sound per its *url*.
     *
     * @param {object} oOptions Optional: Sound options
     * @return {SMSound} The SMSound object
     */

    this.load = function(oOptions) {

      var oSound = null, instanceOptions;

      if (oOptions !== _undefined) {
        s._iO = mixin(oOptions, s.options);
      } else {
        oOptions = s.options;
        s._iO = oOptions;
        if (lastURL && lastURL !== s.url) {
          _wDS('manURL');
          s._iO.url = s.url;
          s.url = null;
        }
      }

      if (!s._iO.url) {
        s._iO.url = s.url;
      }

      s._iO.url = parseURL(s._iO.url);

      // ensure we're in sync
      s.instanceOptions = s._iO;

      // local shortcut
      instanceOptions = s._iO;

      sm2._wD(s.id + ': load (' + instanceOptions.url + ')');

      if (!instanceOptions.url && !s.url) {
        sm2._wD(s.id + ': load(): url is unassigned. Exiting.', 2);
        return s;
      }

      // <d>
      if (!s.isHTML5 && fV === 8 && !s.url && !instanceOptions.autoPlay) {
        // flash 8 load() -> play() won't work before onload has fired.
        sm2._wD(s.id + ': Flash 8 load() limitation: Wait for onload() before calling play().', 1);
      }
      // </d>

      if (instanceOptions.url === s.url && s.readyState !== 0 && s.readyState !== 2) {
        _wDS('onURL', 1);
        // if loaded and an onload() exists, fire immediately.
        if (s.readyState === 3 && instanceOptions.onload) {
          // assume success based on truthy duration.
          wrapCallback(s, function() {
            instanceOptions.onload.apply(s, [(!!s.duration)]);
          });
        }
        return s;
      }

      // reset a few state properties

      s.loaded = false;
      s.readyState = 1;
      s.playState = 0;
      s.id3 = {};

      // TODO: If switching from HTML5 -> flash (or vice versa), stop currently-playing audio.

      if (html5OK(instanceOptions)) {

        oSound = s._setup_html5(instanceOptions);

        if (!oSound._called_load) {

          s._html5_canplay = false;

          // TODO: review called_load / html5_canplay logic

          // if url provided directly to load(), assign it here.

          if (s.url !== instanceOptions.url) {

            sm2._wD(_wDS('manURL') + ': ' + instanceOptions.url);

            s._a.src = instanceOptions.url;

            // TODO: review / re-apply all relevant options (volume, loop, onposition etc.)

            // reset position for new URL
            s.setPosition(0);

          }

          // given explicit load call, try to preload.

          // early HTML5 implementation (non-standard)
          s._a.autobuffer = 'auto';

          // standard property, values: none / metadata / auto
          // reference: http://msdn.microsoft.com/en-us/library/ie/ff974759%28v=vs.85%29.aspx
          s._a.preload = 'auto';

          s._a._called_load = true;

        } else {

          sm2._wD(s.id + ': Ignoring request to load again');

        }

      } else {

        if (sm2.html5Only) {
          sm2._wD(s.id + ': No flash support. Exiting.');
          return s;
        }

        if (s._iO.url && s._iO.url.match(/data\:/i)) {
          // data: URIs not supported by Flash, either.
          sm2._wD(s.id + ': data: URIs not supported via Flash. Exiting.');
          return s;
        }

        try {
          s.isHTML5 = false;
          s._iO = policyFix(loopFix(instanceOptions));
          // re-assign local shortcut
          instanceOptions = s._iO;
          if (fV === 8) {
            flash._load(s.id, instanceOptions.url, instanceOptions.stream, instanceOptions.autoPlay, instanceOptions.usePolicyFile);
          } else {
            flash._load(s.id, instanceOptions.url, !!(instanceOptions.stream), !!(instanceOptions.autoPlay), instanceOptions.loops||1, !!(instanceOptions.autoLoad), instanceOptions.usePolicyFile);
          }
        } catch(e) {
          _wDS('smError', 2);
          debugTS('onload', false);
          catchError({type:'SMSOUND_LOAD_JS_EXCEPTION', fatal:true});
        }

      }

      // after all of this, ensure sound url is up to date.
      s.url = instanceOptions.url;

      return s;

    };

    /**
     * Unloads a sound, canceling any open HTTP requests.
     *
     * @return {SMSound} The SMSound object
     */

    this.unload = function() {

      // Flash 8/AS2 can't "close" a stream - fake it by loading an empty URL
      // Flash 9/AS3: Close stream, preventing further load
      // HTML5: Most UAs will use empty URL

      if (s.readyState !== 0) {

        sm2._wD(s.id + ': unload()');

        if (!s.isHTML5) {

          if (fV === 8) {
            flash._unload(s.id, emptyURL);
          } else {
            flash._unload(s.id);
          }

        } else {

          stop_html5_timer();

          if (s._a) {

            s._a.pause();

            // update empty URL, too
            lastURL = html5Unload(s._a);

          }

        }

        // reset load/status flags
        resetProperties();

      }

      return s;

    };

    /**
     * Unloads and destroys a sound.
     */

    this.destruct = function(_bFromSM) {

      sm2._wD(s.id + ': Destruct');

      if (!s.isHTML5) {

        // kill sound within Flash
        // Disable the onfailure handler
        s._iO.onfailure = null;
        flash._destroySound(s.id);

      } else {

        stop_html5_timer();

        if (s._a) {
          s._a.pause();
          html5Unload(s._a);
          if (!useGlobalHTML5Audio) {
            remove_html5_events();
          }
          // break obvious circular reference
          s._a._s = null;
          s._a = null;
        }

      }

      if (!_bFromSM) {
        // ensure deletion from controller
        sm2.destroySound(s.id, true);
      }

    };

    /**
     * Begins playing a sound.
     *
     * @param {object} oOptions Optional: Sound options
     * @return {SMSound} The SMSound object
     */

    this.play = function(oOptions, _updatePlayState) {

      var fN, allowMulti, a, onready,
          audioClone, onended, oncanplay,
          startOK = true,
          exit = null;

      // <d>
      fN = s.id + ': play(): ';
      // </d>

      // default to true
      _updatePlayState = (_updatePlayState === _undefined ? true : _updatePlayState);

      if (!oOptions) {
        oOptions = {};
      }

      // first, use local URL (if specified)
      if (s.url) {
        s._iO.url = s.url;
      }

      // mix in any options defined at createSound()
      s._iO = mixin(s._iO, s.options);

      // mix in any options specific to this method
      s._iO = mixin(oOptions, s._iO);

      s._iO.url = parseURL(s._iO.url);

      s.instanceOptions = s._iO;

      // RTMP-only
      if (!s.isHTML5 && s._iO.serverURL && !s.connected) {
        if (!s.getAutoPlay()) {
          sm2._wD(fN +' Netstream not connected yet - setting autoPlay');
          s.setAutoPlay(true);
        }
        // play will be called in onconnect()
        return s;
      }

      if (html5OK(s._iO)) {
        s._setup_html5(s._iO);
        start_html5_timer();
      }

      if (s.playState === 1 && !s.paused) {
        allowMulti = s._iO.multiShot;
        if (!allowMulti) {
          sm2._wD(fN + 'Already playing (one-shot)', 1);
          if (s.isHTML5) {
            // go back to original position.
            s.setPosition(s._iO.position);
          }
          exit = s;
        } else {
          sm2._wD(fN + 'Already playing (multi-shot)', 1);
        }
      }

      if (exit !== null) {
        return exit;
      }

      // edge case: play() with explicit URL parameter
      if (oOptions.url && oOptions.url !== s.url) {

        // special case for createSound() followed by load() / play() with url; avoid double-load case.
        if (!s.readyState && !s.isHTML5 && fV === 8 && urlOmitted) {

          urlOmitted = false;

        } else {

          // load using merged options
          s.load(s._iO);

        }

      }

      if (!s.loaded) {

        if (s.readyState === 0) {

          sm2._wD(fN + 'Attempting to load');

          // try to get this sound playing ASAP
          if (!s.isHTML5 && !sm2.html5Only) {

            // flash: assign directly because setAutoPlay() increments the instanceCount
            s._iO.autoPlay = true;
            s.load(s._iO);

          } else if (s.isHTML5) {

            // iOS needs this when recycling sounds, loading a new URL on an existing object.
            s.load(s._iO);

          } else {

            sm2._wD(fN + 'Unsupported type. Exiting.');
            exit = s;

          }

          // HTML5 hack - re-set instanceOptions?
          s.instanceOptions = s._iO;

        } else if (s.readyState === 2) {

          sm2._wD(fN + 'Could not load - exiting', 2);
          exit = s;

        } else {

          sm2._wD(fN + 'Loading - attempting to play...');

        }

      } else {

        // "play()"
        sm2._wD(fN.substr(0, fN.lastIndexOf(':')));

      }

      if (exit !== null) {
        return exit;
      }

      if (!s.isHTML5 && fV === 9 && s.position > 0 && s.position === s.duration) {
        // flash 9 needs a position reset if play() is called while at the end of a sound.
        sm2._wD(fN + 'Sound at end, resetting to position:0');
        oOptions.position = 0;
      }

      /**
       * Streams will pause when their buffer is full if they are being loaded.
       * In this case paused is true, but the song hasn't started playing yet.
       * If we just call resume() the onplay() callback will never be called.
       * So only call resume() if the position is > 0.
       * Another reason is because options like volume won't have been applied yet.
       * For normal sounds, just resume.
       */

      if (s.paused && s.position >= 0 && (!s._iO.serverURL || s.position > 0)) {

        // https://gist.github.com/37b17df75cc4d7a90bf6
        sm2._wD(fN + 'Resuming from paused state', 1);
        s.resume();

      } else {

        s._iO = mixin(oOptions, s._iO);

        // apply from/to parameters, if they exist (and not using RTMP)
        if (s._iO.from !== null && s._iO.to !== null && s.instanceCount === 0 && s.playState === 0 && !s._iO.serverURL) {

          onready = function() {
            // sound "canplay" or onload()
            // re-apply from/to to instance options, and start playback
            s._iO = mixin(oOptions, s._iO);
            s.play(s._iO);
          };

          // HTML5 needs to at least have "canplay" fired before seeking.
          if (s.isHTML5 && !s._html5_canplay) {

            // this hasn't been loaded yet. load it first, and then do this again.
            sm2._wD(fN + 'Beginning load for from/to case');

            s.load({
              // note: custom HTML5-only event added for from/to implementation.
              _oncanplay: onready
            });

            exit = false;

          } else if (!s.isHTML5 && !s.loaded && (!s.readyState || s.readyState !== 2)) {

            // to be safe, preload the whole thing in Flash.

            sm2._wD(fN + 'Preloading for from/to case');

            s.load({
              onload: onready
            });

            exit = false;

          }

          if (exit !== null) {
            return exit;
          }

          // otherwise, we're ready to go. re-apply local options, and continue

          s._iO = applyFromTo();

        }

        // sm2._wD(fN + 'Starting to play');

        // increment instance counter, where enabled + supported
        if (!s.instanceCount || s._iO.multiShotEvents || (s.isHTML5 && s._iO.multiShot && !useGlobalHTML5Audio) || (!s.isHTML5 && fV > 8 && !s.getAutoPlay())) {
          s.instanceCount++;
        }

        // if first play and onposition parameters exist, apply them now
        if (s._iO.onposition && s.playState === 0) {
          attachOnPosition(s);
        }

        s.playState = 1;
        s.paused = false;

        s.position = (s._iO.position !== _undefined && !isNaN(s._iO.position) ? s._iO.position : 0);

        if (!s.isHTML5) {
          s._iO = policyFix(loopFix(s._iO));
        }

        if (s._iO.onplay && _updatePlayState) {
          s._iO.onplay.apply(s);
          onplay_called = true;
        }

        s.setVolume(s._iO.volume, true);
        s.setPan(s._iO.pan, true);

        if (!s.isHTML5) {

          startOK = flash._start(s.id, s._iO.loops || 1, (fV === 9 ? s.position : s.position / msecScale), s._iO.multiShot || false);

          if (fV === 9 && !startOK) {
            // edge case: no sound hardware, or 32-channel flash ceiling hit.
            // applies only to Flash 9, non-NetStream/MovieStar sounds.
            // http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/media/Sound.html#play%28%29
            sm2._wD(fN + 'No sound hardware, or 32-sound ceiling hit', 2);
            if (s._iO.onplayerror) {
              s._iO.onplayerror.apply(s);
            }

          }

        } else {

          if (s.instanceCount < 2) {

            // HTML5 single-instance case

            start_html5_timer();

            a = s._setup_html5();

            s.setPosition(s._iO.position);

            a.play();

          } else {

            // HTML5 multi-shot case

            sm2._wD(s.id + ': Cloning Audio() for instance #' + s.instanceCount + '...');

            audioClone = new Audio(s._iO.url);

            onended = function() {
              event.remove(audioClone, 'ended', onended);
              s._onfinish(s);
              // cleanup
              html5Unload(audioClone);
              audioClone = null;
            };

            oncanplay = function() {
              event.remove(audioClone, 'canplay', oncanplay);
              try {
                audioClone.currentTime = s._iO.position/msecScale;
              } catch(err) {
                complain(s.id + ': multiShot play() failed to apply position of ' + (s._iO.position/msecScale));
              }
              audioClone.play();
            };

            event.add(audioClone, 'ended', onended);

            // apply volume to clones, too
            if (s._iO.volume !== undefined) {
              audioClone.volume = Math.max(0, Math.min(1, s._iO.volume/100));
            }

            // playing multiple muted sounds? if you do this, you're weird ;) - but let's cover it.
            if (s.muted) {
              audioClone.muted = true;
            }

            if (s._iO.position) {
              // HTML5 audio can't seek before onplay() event has fired.
              // wait for canplay, then seek to position and start playback.
              event.add(audioClone, 'canplay', oncanplay);
            } else {
              // begin playback at currentTime: 0
              audioClone.play();
            }

          }

        }

      }

      return s;

    };

    // just for convenience
    this.start = this.play;

    /**
     * Stops playing a sound (and optionally, all sounds)
     *
     * @param {boolean} bAll Optional: Whether to stop all sounds
     * @return {SMSound} The SMSound object
     */

    this.stop = function(bAll) {

      var instanceOptions = s._iO,
          originalPosition;

      if (s.playState === 1) {

        sm2._wD(s.id + ': stop()');

        s._onbufferchange(0);
        s._resetOnPosition(0);
        s.paused = false;

        if (!s.isHTML5) {
          s.playState = 0;
        }

        // remove onPosition listeners, if any
        detachOnPosition();

        // and "to" position, if set
        if (instanceOptions.to) {
          s.clearOnPosition(instanceOptions.to);
        }

        if (!s.isHTML5) {

          flash._stop(s.id, bAll);

          // hack for netStream: just unload
          if (instanceOptions.serverURL) {
            s.unload();
          }

        } else {

          if (s._a) {

            originalPosition = s.position;

            // act like Flash, though
            s.setPosition(0);

            // hack: reflect old position for onstop() (also like Flash)
            s.position = originalPosition;

            // html5 has no stop()
            // NOTE: pausing means iOS requires interaction to resume.
            s._a.pause();

            s.playState = 0;

            // and update UI
            s._onTimer();

            stop_html5_timer();

          }

        }

        s.instanceCount = 0;
        s._iO = {};

        if (instanceOptions.onstop) {
          instanceOptions.onstop.apply(s);
        }

      }

      return s;

    };

    /**
     * Undocumented/internal: Sets autoPlay for RTMP.
     *
     * @param {boolean} autoPlay state
     */

    this.setAutoPlay = function(autoPlay) {

      sm2._wD(s.id + ': Autoplay turned ' + (autoPlay ? 'on' : 'off'));
      s._iO.autoPlay = autoPlay;

      if (!s.isHTML5) {
        flash._setAutoPlay(s.id, autoPlay);
        if (autoPlay) {
          // only increment the instanceCount if the sound isn't loaded (TODO: verify RTMP)
          if (!s.instanceCount && s.readyState === 1) {
            s.instanceCount++;
            sm2._wD(s.id + ': Incremented instance count to '+s.instanceCount);
          }
        }
      }

    };

    /**
     * Undocumented/internal: Returns the autoPlay boolean.
     *
     * @return {boolean} The current autoPlay value
     */

    this.getAutoPlay = function() {

      return s._iO.autoPlay;

    };

    /**
     * Sets the position of a sound.
     *
     * @param {number} nMsecOffset Position (milliseconds)
     * @return {SMSound} The SMSound object
     */

    this.setPosition = function(nMsecOffset) {

      if (nMsecOffset === _undefined) {
        nMsecOffset = 0;
      }

      var position, position1K,
          // Use the duration from the instance options, if we don't have a track duration yet.
          // position >= 0 and <= current available (loaded) duration
          offset = (s.isHTML5 ? Math.max(nMsecOffset, 0) : Math.min(s.duration || s._iO.duration, Math.max(nMsecOffset, 0)));

      s.position = offset;
      position1K = s.position/msecScale;
      s._resetOnPosition(s.position);
      s._iO.position = offset;

      if (!s.isHTML5) {

        position = (fV === 9 ? s.position : position1K);

        if (s.readyState && s.readyState !== 2) {
          // if paused or not playing, will not resume (by playing)
          flash._setPosition(s.id, position, (s.paused || !s.playState), s._iO.multiShot);
        }

      } else if (s._a) {

        // Set the position in the canplay handler if the sound is not ready yet
        if (s._html5_canplay) {

          if (s._a.currentTime !== position1K) {

            /**
             * DOM/JS errors/exceptions to watch out for:
             * if seek is beyond (loaded?) position, "DOM exception 11"
             * "INDEX_SIZE_ERR": DOM exception 1
             */
            sm2._wD(s.id + ': setPosition('+position1K+')');

            try {
              s._a.currentTime = position1K;
              if (s.playState === 0 || s.paused) {
                // allow seek without auto-play/resume
                s._a.pause();
              }
            } catch(e) {
              sm2._wD(s.id + ': setPosition(' + position1K + ') failed: ' + e.message, 2);
            }

          }

        } else if (position1K) {

          // warn on non-zero seek attempts
          sm2._wD(s.id + ': setPosition(' + position1K + '): Cannot seek yet, sound not ready', 2);
          return s;

        }

        if (s.paused) {

          // if paused, refresh UI right away
          // force update
          s._onTimer(true);

        }

      }

      return s;

    };

    /**
     * Pauses sound playback.
     *
     * @return {SMSound} The SMSound object
     */

    this.pause = function(_bCallFlash) {

      if (s.paused || (s.playState === 0 && s.readyState !== 1)) {
        return s;
      }

      sm2._wD(s.id + ': pause()');
      s.paused = true;

      if (!s.isHTML5) {
        if (_bCallFlash || _bCallFlash === _undefined) {
          flash._pause(s.id, s._iO.multiShot);
        }
      } else {
        s._setup_html5().pause();
        stop_html5_timer();
      }

      if (s._iO.onpause) {
        s._iO.onpause.apply(s);
      }

      return s;

    };

    /**
     * Resumes sound playback.
     *
     * @return {SMSound} The SMSound object
     */

    /**
     * When auto-loaded streams pause on buffer full they have a playState of 0.
     * We need to make sure that the playState is set to 1 when these streams "resume".
     * When a paused stream is resumed, we need to trigger the onplay() callback if it
     * hasn't been called already. In this case since the sound is being played for the
     * first time, I think it's more appropriate to call onplay() rather than onresume().
     */

    this.resume = function() {

      var instanceOptions = s._iO;

      if (!s.paused) {
        return s;
      }

      sm2._wD(s.id + ': resume()');
      s.paused = false;
      s.playState = 1;

      if (!s.isHTML5) {
        if (instanceOptions.isMovieStar && !instanceOptions.serverURL) {
          // Bizarre Webkit bug (Chrome reported via 8tracks.com dudes): AAC content paused for 30+ seconds(?) will not resume without a reposition.
          s.setPosition(s.position);
        }
        // flash method is toggle-based (pause/resume)
        flash._pause(s.id, instanceOptions.multiShot);
      } else {
        s._setup_html5().play();
        start_html5_timer();
      }

      if (!onplay_called && instanceOptions.onplay) {
        instanceOptions.onplay.apply(s);
        onplay_called = true;
      } else if (instanceOptions.onresume) {
        instanceOptions.onresume.apply(s);
      }

      return s;

    };

    /**
     * Toggles sound playback.
     *
     * @return {SMSound} The SMSound object
     */

    this.togglePause = function() {

      sm2._wD(s.id + ': togglePause()');

      if (s.playState === 0) {
        s.play({
          position: (fV === 9 && !s.isHTML5 ? s.position : s.position / msecScale)
        });
        return s;
      }

      if (s.paused) {
        s.resume();
      } else {
        s.pause();
      }

      return s;

    };

    /**
     * Sets the panning (L-R) effect.
     *
     * @param {number} nPan The pan value (-100 to 100)
     * @return {SMSound} The SMSound object
     */

    this.setPan = function(nPan, bInstanceOnly) {

      if (nPan === _undefined) {
        nPan = 0;
      }

      if (bInstanceOnly === _undefined) {
        bInstanceOnly = false;
      }

      if (!s.isHTML5) {
        flash._setPan(s.id, nPan);
      } // else { no HTML5 pan? }

      s._iO.pan = nPan;

      if (!bInstanceOnly) {
        s.pan = nPan;
        s.options.pan = nPan;
      }

      return s;

    };

    /**
     * Sets the volume.
     *
     * @param {number} nVol The volume value (0 to 100)
     * @return {SMSound} The SMSound object
     */

    this.setVolume = function(nVol, _bInstanceOnly) {

      /**
       * Note: Setting volume has no effect on iOS "special snowflake" devices.
       * Hardware volume control overrides software, and volume
       * will always return 1 per Apple docs. (iOS 4 + 5.)
       * http://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/AddingSoundtoCanvasAnimations/AddingSoundtoCanvasAnimations.html
       */

      if (nVol === _undefined) {
        nVol = 100;
      }

      if (_bInstanceOnly === _undefined) {
        _bInstanceOnly = false;
      }

      if (!s.isHTML5) {
        flash._setVolume(s.id, (sm2.muted && !s.muted) || s.muted?0:nVol);
      } else if (s._a) {
        if (sm2.muted && !s.muted) {
          s.muted = true;
          s._a.muted = true;
        }
        // valid range: 0-1
        s._a.volume = Math.max(0, Math.min(1, nVol/100));
      }

      s._iO.volume = nVol;

      if (!_bInstanceOnly) {
        s.volume = nVol;
        s.options.volume = nVol;
      }

      return s;

    };

    /**
     * Mutes the sound.
     *
     * @return {SMSound} The SMSound object
     */

    this.mute = function() {

      s.muted = true;

      if (!s.isHTML5) {
        flash._setVolume(s.id, 0);
      } else if (s._a) {
        s._a.muted = true;
      }

      return s;

    };

    /**
     * Unmutes the sound.
     *
     * @return {SMSound} The SMSound object
     */

    this.unmute = function() {

      s.muted = false;
      var hasIO = (s._iO.volume !== _undefined);

      if (!s.isHTML5) {
        flash._setVolume(s.id, hasIO?s._iO.volume:s.options.volume);
      } else if (s._a) {
        s._a.muted = false;
      }

      return s;

    };

    /**
     * Toggles the muted state of a sound.
     *
     * @return {SMSound} The SMSound object
     */

    this.toggleMute = function() {

      return (s.muted?s.unmute():s.mute());

    };

    /**
     * Registers a callback to be fired when a sound reaches a given position during playback.
     *
     * @param {number} nPosition The position to watch for
     * @param {function} oMethod The relevant callback to fire
     * @param {object} oScope Optional: The scope to apply the callback to
     * @return {SMSound} The SMSound object
     */

    this.onPosition = function(nPosition, oMethod, oScope) {

      // TODO: basic dupe checking?

      onPositionItems.push({
        position: parseInt(nPosition, 10),
        method: oMethod,
        scope: (oScope !== _undefined ? oScope : s),
        fired: false
      });

      return s;

    };

    // legacy/backwards-compability: lower-case method name
    this.onposition = this.onPosition;

    /**
     * Removes registered callback(s) from a sound, by position and/or callback.
     *
     * @param {number} nPosition The position to clear callback(s) for
     * @param {function} oMethod Optional: Identify one callback to be removed when multiple listeners exist for one position
     * @return {SMSound} The SMSound object
     */

    this.clearOnPosition = function(nPosition, oMethod) {

      var i;

      nPosition = parseInt(nPosition, 10);

      if (isNaN(nPosition)) {
        // safety check
        return false;
      }

      for (i=0; i < onPositionItems.length; i++) {

        if (nPosition === onPositionItems[i].position) {
          // remove this item if no method was specified, or, if the method matches
          if (!oMethod || (oMethod === onPositionItems[i].method)) {
            if (onPositionItems[i].fired) {
              // decrement "fired" counter, too
              onPositionFired--;
            }
            onPositionItems.splice(i, 1);
          }
        }

      }

    };

    this._processOnPosition = function() {

      var i, item, j = onPositionItems.length;
		
      if (!j || !s.playState || onPositionFired >= j) {
        return false;
      }

      for (i=j-1; i >= 0; i--) {
        item = onPositionItems[i];
        if (!item.fired && s.position >= item.position) {
          item.fired = true;
          onPositionFired++;
          item.method.apply(item.scope, [item.position]);
		  j = onPositionItems.length; //  reset j -- onPositionItems.length can be changed in the item callback above... occasionally breaking the loop.
        }
      }
	
      return true;

    };

    this._resetOnPosition = function(nPosition) {

      // reset "fired" for items interested in this position
      var i, item, j = onPositionItems.length;

      if (!j) {
        return false;
      }

      for (i=j-1; i >= 0; i--) {
        item = onPositionItems[i];
        if (item.fired && nPosition <= item.position) {
          item.fired = false;
          onPositionFired--;
        }
      }

      return true;

    };

    /**
     * SMSound() private internals
     * --------------------------------
     */

    applyFromTo = function() {

      var instanceOptions = s._iO,
          f = instanceOptions.from,
          t = instanceOptions.to,
          start, end;

      end = function() {

        // end has been reached.
        sm2._wD(s.id + ': "To" time of ' + t + ' reached.');

        // detach listener
        s.clearOnPosition(t, end);

        // stop should clear this, too
        s.stop();

      };

      start = function() {

        sm2._wD(s.id + ': Playing "from" ' + f);

        // add listener for end
        if (t !== null && !isNaN(t)) {
          s.onPosition(t, end);
        }

      };

      if (f !== null && !isNaN(f)) {

        // apply to instance options, guaranteeing correct start position.
        instanceOptions.position = f;

        // multiShot timing can't be tracked, so prevent that.
        instanceOptions.multiShot = false;

        start();

      }

      // return updated instanceOptions including starting position
      return instanceOptions;

    };

    attachOnPosition = function() {

      var item,
          op = s._iO.onposition;

      // attach onposition things, if any, now.

      if (op) {

        for (item in op) {
          if (op.hasOwnProperty(item)) {
            s.onPosition(parseInt(item, 10), op[item]);
          }
        }

      }

    };

    detachOnPosition = function() {

      var item,
          op = s._iO.onposition;

      // detach any onposition()-style listeners.

      if (op) {

        for (item in op) {
          if (op.hasOwnProperty(item)) {
            s.clearOnPosition(parseInt(item, 10));
          }
        }

      }

    };

    start_html5_timer = function() {

      if (s.isHTML5) {
        startTimer(s);
      }

    };

    stop_html5_timer = function() {

      if (s.isHTML5) {
        stopTimer(s);
      }

    };

    resetProperties = function(retainPosition) {

      if (!retainPosition) {
        onPositionItems = [];
        onPositionFired = 0;
      }

      onplay_called = false;

      s._hasTimer = null;
      s._a = null;
      s._html5_canplay = false;
      s.bytesLoaded = null;
      s.bytesTotal = null;
      s.duration = (s._iO && s._iO.duration ? s._iO.duration : null);
      s.durationEstimate = null;
      s.buffered = [];

      // legacy: 1D array
      s.eqData = [];

      s.eqData.left = [];
      s.eqData.right = [];

      s.failures = 0;
      s.isBuffering = false;
      s.instanceOptions = {};
      s.instanceCount = 0;
      s.loaded = false;
      s.metadata = {};

      // 0 = uninitialised, 1 = loading, 2 = failed/error, 3 = loaded/success
      s.readyState = 0;

      s.muted = false;
      s.paused = false;

      s.peakData = {
        left: 0,
        right: 0
      };

      s.waveformData = {
        left: [],
        right: []
      };

      s.playState = 0;
      s.position = null;

      s.id3 = {};

    };

    resetProperties();

    /**
     * Pseudo-private SMSound internals
     * --------------------------------
     */

    this._onTimer = function(bForce) {

      /**
       * HTML5-only _whileplaying() etc.
       * called from both HTML5 native events, and polling/interval-based timers
       * mimics flash and fires only when time/duration change, so as to be polling-friendly
       */

      var duration, isNew = false, time, x = {};

      if (s._hasTimer || bForce) {

        // TODO: May not need to track readyState (1 = loading)

        if (s._a && (bForce || ((s.playState > 0 || s.readyState === 1) && !s.paused))) {

          duration = s._get_html5_duration();

          if (duration !== lastHTML5State.duration) {

            lastHTML5State.duration = duration;
            s.duration = duration;
            isNew = true;

          }

          // TODO: investigate why this goes wack if not set/re-set each time.
          s.durationEstimate = s.duration;

          time = (s._a.currentTime * msecScale || 0);

          if (time !== lastHTML5State.time) {

            lastHTML5State.time = time;
            isNew = true;

          }

          if (isNew || bForce) {

            s._whileplaying(time,x,x,x,x);

          }

        }/* else {

          // sm2._wD('_onTimer: Warn for "'+s.id+'": '+(!s._a?'Could not find element. ':'')+(s.playState === 0?'playState bad, 0?':'playState = '+s.playState+', OK'));

          return false;

        }*/

        return isNew;

      }

    };

    this._get_html5_duration = function() {

      var instanceOptions = s._iO,
          // if audio object exists, use its duration - else, instance option duration (if provided - it's a hack, really, and should be retired) OR null
          d = (s._a && s._a.duration ? s._a.duration*msecScale : (instanceOptions && instanceOptions.duration ? instanceOptions.duration : null)),
          result = (d && !isNaN(d) && d !== Infinity ? d : null);

      return result;

    };

    this._apply_loop = function(a, nLoops) {

      /**
       * boolean instead of "loop", for webkit? - spec says string. http://www.w3.org/TR/html-markup/audio.html#audio.attrs.loop
       * note that loop is either off or infinite under HTML5, unlike Flash which allows arbitrary loop counts to be specified.
       */

      // <d>
      if (!a.loop && nLoops > 1) {
        sm2._wD('Note: Native HTML5 looping is infinite.', 1);
      }
      // </d>

      a.loop = (nLoops > 1 ? 'loop' : '');

    };

    this._setup_html5 = function(oOptions) {

      var instanceOptions = mixin(s._iO, oOptions),
          a = useGlobalHTML5Audio ? globalHTML5Audio : s._a,
          dURL = decodeURI(instanceOptions.url),
          sameURL;

      /**
       * "First things first, I, Poppa..." (reset the previous state of the old sound, if playing)
       * Fixes case with devices that can only play one sound at a time
       * Otherwise, other sounds in mid-play will be terminated without warning and in a stuck state
       */

      if (useGlobalHTML5Audio) {

        if (dURL === decodeURI(lastGlobalHTML5URL)) {
          // global HTML5 audio: re-use of URL
          sameURL = true;
        }

      } else if (dURL === decodeURI(lastURL)) {

        // options URL is the same as the "last" URL, and we used (loaded) it
        sameURL = true;

      }

      if (a) {

        if (a._s) {

          if (useGlobalHTML5Audio) {

            if (a._s && a._s.playState && !sameURL) {

              // global HTML5 audio case, and loading a new URL. stop the currently-playing one.
              a._s.stop();

            }

          } else if (!useGlobalHTML5Audio && dURL === decodeURI(lastURL)) {

            // non-global HTML5 reuse case: same url, ignore request
            s._apply_loop(a, instanceOptions.loops);

            return a;

          }

        }

        if (!sameURL) {

          // don't retain onPosition() stuff with new URLs.

          if (lastURL) {
            resetProperties(false);
          }

          // assign new HTML5 URL

          a.src = instanceOptions.url;

          s.url = instanceOptions.url;

          lastURL = instanceOptions.url;

          lastGlobalHTML5URL = instanceOptions.url;

          a._called_load = false;

        }

      } else {

        if (instanceOptions.autoLoad || instanceOptions.autoPlay) {

          s._a = new Audio(instanceOptions.url);
          s._a.load();

        } else {

          // null for stupid Opera 9.64 case
          s._a = (isOpera && opera.version() < 10 ? new Audio(null) : new Audio());

        }

        // assign local reference
        a = s._a;

        a._called_load = false;

        if (useGlobalHTML5Audio) {

          globalHTML5Audio = a;

        }

      }

      s.isHTML5 = true;

      // store a ref on the track
      s._a = a;

      // store a ref on the audio
      a._s = s;

      add_html5_events();

      s._apply_loop(a, instanceOptions.loops);

      if (instanceOptions.autoLoad || instanceOptions.autoPlay) {

        s.load();

      } else {

        // early HTML5 implementation (non-standard)
        a.autobuffer = false;

        // standard ('none' is also an option.)
        a.preload = 'auto';

      }

      return a;

    };

    add_html5_events = function() {

      if (s._a._added_events) {
        return false;
      }

      var f;

      function add(oEvt, oFn, bCapture) {
        return s._a ? s._a.addEventListener(oEvt, oFn, bCapture||false) : null;
      }

      s._a._added_events = true;

      for (f in html5_events) {
        if (html5_events.hasOwnProperty(f)) {
          add(f, html5_events[f]);
        }
      }

      return true;

    };

    remove_html5_events = function() {

      // Remove event listeners

      var f;

      function remove(oEvt, oFn, bCapture) {
        return (s._a ? s._a.removeEventListener(oEvt, oFn, bCapture||false) : null);
      }

      sm2._wD(s.id + ': Removing event listeners');
      s._a._added_events = false;

      for (f in html5_events) {
        if (html5_events.hasOwnProperty(f)) {
          remove(f, html5_events[f]);
        }
      }

    };

    /**
     * Pseudo-private event internals
     * ------------------------------
     */

    this._onload = function(nSuccess) {

      var fN,
          // check for duration to prevent false positives from flash 8 when loading from cache.
          loadOK = !!nSuccess || (!s.isHTML5 && fV === 8 && s.duration);

      // <d>
      fN = s.id + ': ';
      sm2._wD(fN + (loadOK ? 'onload()' : 'Failed to load / invalid sound?' + (!s.duration ? ' Zero-length duration reported.' : ' -') + ' (' + s.url + ')'), (loadOK ? 1 : 2));
      if (!loadOK && !s.isHTML5) {
        if (sm2.sandbox.noRemote === true) {
          sm2._wD(fN + str('noNet'), 1);
        }
        if (sm2.sandbox.noLocal === true) {
          sm2._wD(fN + str('noLocal'), 1);
        }
      }
      // </d>

      s.loaded = loadOK;
      s.readyState = loadOK?3:2;
      s._onbufferchange(0);

      if (s._iO.onload) {
        wrapCallback(s, function() {
          s._iO.onload.apply(s, [loadOK]);
        });
      }

      return true;

    };

    this._onbufferchange = function(nIsBuffering) {

      if (s.playState === 0) {
        // ignore if not playing
        return false;
      }

      if ((nIsBuffering && s.isBuffering) || (!nIsBuffering && !s.isBuffering)) {
        return false;
      }

      s.isBuffering = (nIsBuffering === 1);
      if (s._iO.onbufferchange) {
        sm2._wD(s.id + ': Buffer state change: ' + nIsBuffering);
        s._iO.onbufferchange.apply(s);
      }

      return true;

    };

    /**
     * Playback may have stopped due to buffering, or related reason.
     * This state can be encountered on iOS < 6 when auto-play is blocked.
     */

    this._onsuspend = function() {

      if (s._iO.onsuspend) {
        sm2._wD(s.id + ': Playback suspended');
        s._iO.onsuspend.apply(s);
      }

      return true;

    };

    /**
     * flash 9/movieStar + RTMP-only method, should fire only once at most
     * at this point we just recreate failed sounds rather than trying to reconnect
     */

    this._onfailure = function(msg, level, code) {

      s.failures++;
      sm2._wD(s.id + ': Failures = ' + s.failures);

      if (s._iO.onfailure && s.failures === 1) {
        s._iO.onfailure(s, msg, level, code);
      } else {
        sm2._wD(s.id + ': Ignoring failure');
      }

    };

    this._onfinish = function() {

      // store local copy before it gets trashed...
      var io_onfinish = s._iO.onfinish;

      s._onbufferchange(0);
      s._resetOnPosition(0);

      // reset some state items
      if (s.instanceCount) {

        s.instanceCount--;

        if (!s.instanceCount) {

          // remove onPosition listeners, if any
          detachOnPosition();

          // reset instance options
          s.playState = 0;
          s.paused = false;
          s.instanceCount = 0;
          s.instanceOptions = {};
          s._iO = {};
          stop_html5_timer();

          // reset position, too
          if (s.isHTML5) {
            s.position = 0;
          }

        }

        if (!s.instanceCount || s._iO.multiShotEvents) {
          // fire onfinish for last, or every instance
          if (io_onfinish) {
            sm2._wD(s.id + ': onfinish()');
            wrapCallback(s, function() {
              io_onfinish.apply(s);
            });
          }
        }

      }

    };

    this._whileloading = function(nBytesLoaded, nBytesTotal, nDuration, nBufferLength) {

      var instanceOptions = s._iO;

      s.bytesLoaded = nBytesLoaded;
      s.bytesTotal = nBytesTotal;
      s.duration = Math.floor(nDuration);
      s.bufferLength = nBufferLength;

      if (!s.isHTML5 && !instanceOptions.isMovieStar) {

        if (instanceOptions.duration) {
          // use duration from options, if specified and larger. nobody should be specifying duration in options, actually, and it should be retired.
          s.durationEstimate = (s.duration > instanceOptions.duration) ? s.duration : instanceOptions.duration;
        } else {
          s.durationEstimate = parseInt((s.bytesTotal / s.bytesLoaded) * s.duration, 10);
        }

      } else {

        s.durationEstimate = s.duration;

      }

      // for flash, reflect sequential-load-style buffering
      if (!s.isHTML5) {
        s.buffered = [{
          'start': 0,
          'end': s.duration
        }];
      }

      // allow whileloading to fire even if "load" fired under HTML5, due to HTTP range/partials
      if ((s.readyState !== 3 || s.isHTML5) && instanceOptions.whileloading) {
        instanceOptions.whileloading.apply(s);
      }

    };

    this._whileplaying = function(nPosition, oPeakData, oWaveformDataLeft, oWaveformDataRight, oEQData) {

      var instanceOptions = s._iO,
          eqLeft;

      if (isNaN(nPosition) || nPosition === null) {
        // flash safety net
        return false;
      }

      // Safari HTML5 play() may return small -ve values when starting from position: 0, eg. -50.120396875. Unexpected/invalid per W3, I think. Normalize to 0.
      s.position = Math.max(0, nPosition);

      s._processOnPosition();

      if (!s.isHTML5 && fV > 8) {

        if (instanceOptions.usePeakData && oPeakData !== _undefined && oPeakData) {
          s.peakData = {
            left: oPeakData.leftPeak,
            right: oPeakData.rightPeak
          };
        }

        if (instanceOptions.useWaveformData && oWaveformDataLeft !== _undefined && oWaveformDataLeft) {
          s.waveformData = {
            left: oWaveformDataLeft.split(','),
            right: oWaveformDataRight.split(',')
          };
        }

        if (instanceOptions.useEQData) {
          if (oEQData !== _undefined && oEQData && oEQData.leftEQ) {
            eqLeft = oEQData.leftEQ.split(',');
            s.eqData = eqLeft;
            s.eqData.left = eqLeft;
            if (oEQData.rightEQ !== _undefined && oEQData.rightEQ) {
              s.eqData.right = oEQData.rightEQ.split(',');
            }
          }
        }

      }

      if (s.playState === 1) {

        // special case/hack: ensure buffering is false if loading from cache (and not yet started)
        if (!s.isHTML5 && fV === 8 && !s.position && s.isBuffering) {
          s._onbufferchange(0);
        }

        if (instanceOptions.whileplaying) {
          // flash may call after actual finish
          instanceOptions.whileplaying.apply(s);
        }

      }

      return true;

    };

    this._oncaptiondata = function(oData) {

      /**
       * internal: flash 9 + NetStream (MovieStar/RTMP-only) feature
       *
       * @param {object} oData
       */

      sm2._wD(s.id + ': Caption data received.');

      s.captiondata = oData;

      if (s._iO.oncaptiondata) {
        s._iO.oncaptiondata.apply(s, [oData]);
      }

    };

    this._onmetadata = function(oMDProps, oMDData) {

      /**
       * internal: flash 9 + NetStream (MovieStar/RTMP-only) feature
       * RTMP may include song title, MovieStar content may include encoding info
       *
       * @param {array} oMDProps (names)
       * @param {array} oMDData (values)
       */

      sm2._wD(s.id + ': Metadata received.');

      var oData = {}, i, j;

      for (i = 0, j = oMDProps.length; i < j; i++) {
        oData[oMDProps[i]] = oMDData[i];
      }
      s.metadata = oData;

      if (s._iO.onmetadata) {
        s._iO.onmetadata.apply(s);
      }

    };

    this._onid3 = function(oID3Props, oID3Data) {

      /**
       * internal: flash 8 + flash 9 ID3 feature
       * may include artist, song title etc.
       *
       * @param {array} oID3Props (names)
       * @param {array} oID3Data (values)
       */

      sm2._wD(s.id + ': ID3 data received.');

      var oData = [], i, j;

      for (i = 0, j = oID3Props.length; i < j; i++) {
        oData[oID3Props[i]] = oID3Data[i];
      }
      s.id3 = mixin(s.id3, oData);

      if (s._iO.onid3) {
        s._iO.onid3.apply(s);
      }

    };

    // flash/RTMP-only

    this._onconnect = function(bSuccess) {

      bSuccess = (bSuccess === 1);
      sm2._wD(s.id + ': ' + (bSuccess ? 'Connected.' : 'Failed to connect? - ' + s.url), (bSuccess ? 1 : 2));
      s.connected = bSuccess;

      if (bSuccess) {

        s.failures = 0;

        if (idCheck(s.id)) {
          if (s.getAutoPlay()) {
            // only update the play state if auto playing
            s.play(_undefined, s.getAutoPlay());
          } else if (s._iO.autoLoad) {
            s.load();
          }
        }

        if (s._iO.onconnect) {
          s._iO.onconnect.apply(s, [bSuccess]);
        }

      }

    };

    this._ondataerror = function(sError) {

      // flash 9 wave/eq data handler
      // hack: called at start, and end from flash at/after onfinish()
      if (s.playState > 0) {
        sm2._wD(s.id + ': Data error: ' + sError);
        if (s._iO.ondataerror) {
          s._iO.ondataerror.apply(s);
        }
      }

    };

    // <d>
    this._debug();
    // </d>

  }; // SMSound()

  /**
   * Private SoundManager internals
   * ------------------------------
   */

  getDocument = function() {

    return (doc.body || doc.getElementsByTagName('div')[0]);

  };

  id = function(sID) {

    return doc.getElementById(sID);

  };

  mixin = function(oMain, oAdd) {

    // non-destructive merge
    var o1 = (oMain || {}), o2, o;

    // if unspecified, o2 is the default options object
    o2 = (oAdd === _undefined ? sm2.defaultOptions : oAdd);

    for (o in o2) {

      if (o2.hasOwnProperty(o) && o1[o] === _undefined) {

        if (typeof o2[o] !== 'object' || o2[o] === null) {

          // assign directly
          o1[o] = o2[o];

        } else {

          // recurse through o2
          o1[o] = mixin(o1[o], o2[o]);

        }

      }

    }

    return o1;

  };

  wrapCallback = function(oSound, callback) {

    /**
     * 03/03/2013: Fix for Flash Player 11.6.602.171 + Flash 8 (flashVersion = 8) SWF issue
     * setTimeout() fix for certain SMSound callbacks like onload() and onfinish(), where subsequent calls like play() and load() fail when Flash Player 11.6.602.171 is installed, and using soundManager with flashVersion = 8 (which is the default).
     * Not sure of exact cause. Suspect race condition and/or invalid (NaN-style) position argument trickling down to the next JS -> Flash _start() call, in the play() case.
     * Fix: setTimeout() to yield, plus safer null / NaN checking on position argument provided to Flash.
     * https://getsatisfaction.com/schillmania/topics/recent_chrome_update_seems_to_have_broken_my_sm2_audio_player
     */
    if (!oSound.isHTML5 && fV === 8) {
      window.setTimeout(callback, 0);
    } else {
      callback();
    }

  };

  // additional soundManager properties that soundManager.setup() will accept

  extraOptions = {
    'onready': 1,
    'ontimeout': 1,
    'defaultOptions': 1,
    'flash9Options': 1,
    'movieStarOptions': 1
  };

  assign = function(o, oParent) {

    /**
     * recursive assignment of properties, soundManager.setup() helper
     * allows property assignment based on whitelist
     */

    var i,
        result = true,
        hasParent = (oParent !== _undefined),
        setupOptions = sm2.setupOptions,
        bonusOptions = extraOptions;

    // <d>

    // if soundManager.setup() called, show accepted parameters.

    if (o === _undefined) {

      result = [];

      for (i in setupOptions) {

        if (setupOptions.hasOwnProperty(i)) {
          result.push(i);
        }

      }

      for (i in bonusOptions) {

        if (bonusOptions.hasOwnProperty(i)) {

          if (typeof sm2[i] === 'object') {

            result.push(i+': {...}');

          } else if (sm2[i] instanceof Function) {

            result.push(i+': function() {...}');

          } else {

            result.push(i);

          }

        }

      }

      sm2._wD(str('setup', result.join(', ')));

      return false;

    }

    // </d>

    for (i in o) {

      if (o.hasOwnProperty(i)) {

        // if not an {object} we want to recurse through...

        if (typeof o[i] !== 'object' || o[i] === null || o[i] instanceof Array || o[i] instanceof RegExp) {

          // check "allowed" options

          if (hasParent && bonusOptions[oParent] !== _undefined) {

            // valid recursive / nested object option, eg., { defaultOptions: { volume: 50 } }
            sm2[oParent][i] = o[i];

          } else if (setupOptions[i] !== _undefined) {

            // special case: assign to setupOptions object, which soundManager property references
            sm2.setupOptions[i] = o[i];

            // assign directly to soundManager, too
            sm2[i] = o[i];

          } else if (bonusOptions[i] === _undefined) {

            // invalid or disallowed parameter. complain.
            complain(str((sm2[i] === _undefined ? 'setupUndef' : 'setupError'), i), 2);

            result = false;

          } else {

            /**
             * valid extraOptions (bonusOptions) parameter.
             * is it a method, like onready/ontimeout? call it.
             * multiple parameters should be in an array, eg. soundManager.setup({onready: [myHandler, myScope]});
             */

            if (sm2[i] instanceof Function) {

              sm2[i].apply(sm2, (o[i] instanceof Array? o[i] : [o[i]]));

            } else {

              // good old-fashioned direct assignment
              sm2[i] = o[i];

            }

          }

        } else {

          // recursion case, eg., { defaultOptions: { ... } }

          if (bonusOptions[i] === _undefined) {

            // invalid or disallowed parameter. complain.
            complain(str((sm2[i] === _undefined ? 'setupUndef' : 'setupError'), i), 2);

            result = false;

          } else {

            // recurse through object
            return assign(o[i], i);

          }

        }

      }

    }

    return result;

  };

  function preferFlashCheck(kind) {

    // whether flash should play a given type
    return (sm2.preferFlash && hasFlash && !sm2.ignoreFlash && (sm2.flash[kind] !== _undefined && sm2.flash[kind]));

  }

  /**
   * Internal DOM2-level event helpers
   * ---------------------------------
   */

  event = (function() {

    // normalize event methods
    var old = (window.attachEvent),
    evt = {
      add: (old?'attachEvent':'addEventListener'),
      remove: (old?'detachEvent':'removeEventListener')
    };

    // normalize "on" event prefix, optional capture argument
    function getArgs(oArgs) {

      var args = slice.call(oArgs),
          len = args.length;

      if (old) {
        // prefix
        args[1] = 'on' + args[1];
        if (len > 3) {
          // no capture
          args.pop();
        }
      } else if (len === 3) {
        args.push(false);
      }

      return args;

    }

    function apply(args, sType) {

      // normalize and call the event method, with the proper arguments
      var element = args.shift(),
          method = [evt[sType]];

      if (old) {
        // old IE can't do apply().
        element[method](args[0], args[1]);
      } else {
        element[method].apply(element, args);
      }

    }

    function add() {

      apply(getArgs(arguments), 'add');

    }

    function remove() {

      apply(getArgs(arguments), 'remove');

    }

    return {
      'add': add,
      'remove': remove
    };

  }());

  /**
   * Internal HTML5 event handling
   * -----------------------------
   */

  function html5_event(oFn) {

    // wrap html5 event handlers so we don't call them on destroyed and/or unloaded sounds

    return function(e) {

      var s = this._s,
          result;

      if (!s || !s._a) {
        // <d>
        if (s && s.id) {
          sm2._wD(s.id + ': Ignoring ' + e.type);
        } else {
          sm2._wD(h5 + 'Ignoring ' + e.type);
        }
        // </d>
        result = null;
      } else {
        result = oFn.call(this, e);
      }

      return result;

    };

  }

  html5_events = {

    // HTML5 event-name-to-handler map

    abort: html5_event(function() {

      sm2._wD(this._s.id + ': abort');

    }),

    // enough has loaded to play

    canplay: html5_event(function() {

      var s = this._s,
          position1K;

      if (s._html5_canplay) {
        // this event has already fired. ignore.
        return true;
      }

      s._html5_canplay = true;
      sm2._wD(s.id + ': canplay');
      s._onbufferchange(0);

      // position according to instance options
      position1K = (s._iO.position !== _undefined && !isNaN(s._iO.position)?s._iO.position/msecScale:null);

      // set the position if position was set before the sound loaded
      if (s.position && this.currentTime !== position1K) {
        sm2._wD(s.id + ': canplay: Setting position to ' + position1K);
        try {
          this.currentTime = position1K;
        } catch(ee) {
          sm2._wD(s.id + ': canplay: Setting position of ' + position1K + ' failed: ' + ee.message, 2);
        }
      }

      // hack for HTML5 from/to case
      if (s._iO._oncanplay) {
        s._iO._oncanplay();
      }

    }),

    canplaythrough: html5_event(function() {

      var s = this._s;

      if (!s.loaded) {
        s._onbufferchange(0);
        s._whileloading(s.bytesLoaded, s.bytesTotal, s._get_html5_duration());
        s._onload(true);
      }

    }),

    // TODO: Reserved for potential use
    /*
    emptied: html5_event(function() {

      sm2._wD(this._s.id + ': emptied');

    }),
    */

    ended: html5_event(function() {

      var s = this._s;

      sm2._wD(s.id + ': ended');

      s._onfinish();

    }),

    error: html5_event(function() {

      sm2._wD(this._s.id + ': HTML5 error, code ' + this.error.code);
      /**
       * HTML5 error codes, per W3C
       * Error 1: Client aborted download at user's request.
       * Error 2: Network error after load started.
       * Error 3: Decoding issue.
       * Error 4: Media (audio file) not supported.
       * Reference: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#error-codes
       */
      // call load with error state?
      this._s._onload(false);

    }),

    loadeddata: html5_event(function() {

      var s = this._s;

      sm2._wD(s.id + ': loadeddata');

      // safari seems to nicely report progress events, eventually totalling 100%
      if (!s._loaded && !isSafari) {
        s.duration = s._get_html5_duration();
      }

    }),

    loadedmetadata: html5_event(function() {

      sm2._wD(this._s.id + ': loadedmetadata');

    }),

    loadstart: html5_event(function() {

      sm2._wD(this._s.id + ': loadstart');
      // assume buffering at first
      this._s._onbufferchange(1);

    }),

    play: html5_event(function() {

      // sm2._wD(this._s.id + ': play()');
      // once play starts, no buffering
      this._s._onbufferchange(0);

    }),

    playing: html5_event(function() {

      sm2._wD(this._s.id + ': playing');
      // once play starts, no buffering
      this._s._onbufferchange(0);

    }),

    progress: html5_event(function(e) {

      // note: can fire repeatedly after "loaded" event, due to use of HTTP range/partials

      var s = this._s,
          i, j, progStr, buffered = 0,
          isProgress = (e.type === 'progress'),
          ranges = e.target.buffered,
          // firefox 3.6 implements e.loaded/total (bytes)
          loaded = (e.loaded||0),
          total = (e.total||1);

      // reset the "buffered" (loaded byte ranges) array
      s.buffered = [];

      if (ranges && ranges.length) {

        // if loaded is 0, try TimeRanges implementation as % of load
        // https://developer.mozilla.org/en/DOM/TimeRanges

        // re-build "buffered" array
        // HTML5 returns seconds. SM2 API uses msec for setPosition() etc., whether Flash or HTML5.
        for (i=0, j=ranges.length; i<j; i++) {
          s.buffered.push({
            'start': ranges.start(i) * msecScale,
            'end': ranges.end(i) * msecScale
          });
        }

        // use the last value locally
        buffered = (ranges.end(0) - ranges.start(0)) * msecScale;

        // linear case, buffer sum; does not account for seeking and HTTP partials / byte ranges
        loaded = Math.min(1, buffered/(e.target.duration*msecScale));

        // <d>
        if (isProgress && ranges.length > 1) {
          progStr = [];
          j = ranges.length;
          for (i=0; i<j; i++) {
            progStr.push(e.target.buffered.start(i)*msecScale +'-'+ e.target.buffered.end(i)*msecScale);
          }
          sm2._wD(this._s.id + ': progress, timeRanges: ' + progStr.join(', '));
        }

        if (isProgress && !isNaN(loaded)) {
          sm2._wD(this._s.id + ': progress, ' + Math.floor(loaded*100) + '% loaded');
        }
        // </d>

      }

      if (!isNaN(loaded)) {

        // if progress, likely not buffering
        s._onbufferchange(0);
        // TODO: prevent calls with duplicate values.
        s._whileloading(loaded, total, s._get_html5_duration());
        if (loaded && total && loaded === total) {
          // in case "onload" doesn't fire (eg. gecko 1.9.2)
          html5_events.canplaythrough.call(this, e);
        }

      }

    }),

    ratechange: html5_event(function() {

      sm2._wD(this._s.id + ': ratechange');

    }),

    suspend: html5_event(function(e) {

      // download paused/stopped, may have finished (eg. onload)
      var s = this._s;

      sm2._wD(this._s.id + ': suspend');
      html5_events.progress.call(this, e);
      s._onsuspend();

    }),

    stalled: html5_event(function() {

      sm2._wD(this._s.id + ': stalled');

    }),

    timeupdate: html5_event(function() {

      this._s._onTimer();

    }),

    waiting: html5_event(function() {

      var s = this._s;

      // see also: seeking
      sm2._wD(this._s.id + ': waiting');

      // playback faster than download rate, etc.
      s._onbufferchange(1);

    })

  };

  html5OK = function(iO) {

    // playability test based on URL or MIME type

    var result;

    if (!iO || (!iO.type && !iO.url && !iO.serverURL)) {

      // nothing to check
      result = false;

    } else if (iO.serverURL || (iO.type && preferFlashCheck(iO.type))) {

      // RTMP, or preferring flash
      result = false;

    } else {

      // Use type, if specified. Pass data: URIs to HTML5. If HTML5-only mode, no other options, so just give 'er
      result = ((iO.type ? html5CanPlay({type:iO.type}) : html5CanPlay({url:iO.url}) || sm2.html5Only || iO.url.match(/data\:/i)));

    }

    return result;

  };

  html5Unload = function(oAudio) {

    /**
     * Internal method: Unload media, and cancel any current/pending network requests.
     * Firefox can load an empty URL, which allegedly destroys the decoder and stops the download.
     * https://developer.mozilla.org/En/Using_audio_and_video_in_Firefox#Stopping_the_download_of_media
     * However, Firefox has been seen loading a relative URL from '' and thus requesting the hosting page on unload.
     * Other UA behaviour is unclear, so everyone else gets an about:blank-style URL.
     */

    var url;

    if (oAudio) {

      // Firefox and Chrome accept short WAVe data: URIs. Chome dislikes audio/wav, but accepts audio/wav for data: MIME.
      // Desktop Safari complains / fails on data: URI, so it gets about:blank.
      url = (isSafari ? emptyURL : (sm2.html5.canPlayType('audio/wav') ? emptyWAV : emptyURL));

      oAudio.src = url;

      // reset some state, too
      if (oAudio._called_unload !== undefined) {
        oAudio._called_load = false;
      }

    }

    if (useGlobalHTML5Audio) {

      // ensure URL state is trashed, also
      lastGlobalHTML5URL = null;

    }

    return url;

  };

  html5CanPlay = function(o) {

    /**
     * Try to find MIME, test and return truthiness
     * o = {
     *  url: '/path/to/an.mp3',
     *  type: 'audio/mp3'
     * }
     */

    if (!sm2.useHTML5Audio || !sm2.hasHTML5) {
      return false;
    }

    var url = (o.url || null),
        mime = (o.type || null),
        aF = sm2.audioFormats,
        result,
        offset,
        fileExt,
        item;

    // account for known cases like audio/mp3

    if (mime && sm2.html5[mime] !== _undefined) {
      return (sm2.html5[mime] && !preferFlashCheck(mime));
    }

    if (!html5Ext) {
      html5Ext = [];
      for (item in aF) {
        if (aF.hasOwnProperty(item)) {
          html5Ext.push(item);
          if (aF[item].related) {
            html5Ext = html5Ext.concat(aF[item].related);
          }
        }
      }
      html5Ext = new RegExp('\\.('+html5Ext.join('|')+')(\\?.*)?$','i');
    }

    // TODO: Strip URL queries, etc.
    fileExt = (url ? url.toLowerCase().match(html5Ext) : null);

    if (!fileExt || !fileExt.length) {
      if (!mime) {
        result = false;
      } else {
        // audio/mp3 -> mp3, result should be known
        offset = mime.indexOf(';');
        // strip "audio/X; codecs..."
        fileExt = (offset !== -1?mime.substr(0,offset):mime).substr(6);
      }
    } else {
      // match the raw extension name - "mp3", for example
      fileExt = fileExt[1];
    }

    if (fileExt && sm2.html5[fileExt] !== _undefined) {
      // result known
      result = (sm2.html5[fileExt] && !preferFlashCheck(fileExt));
    } else {
      mime = 'audio/'+fileExt;
      result = sm2.html5.canPlayType({type:mime});
      sm2.html5[fileExt] = result;
      // sm2._wD('canPlayType, found result: ' + result);
      result = (result && sm2.html5[mime] && !preferFlashCheck(mime));
    }

    return result;

  };

  testHTML5 = function() {

    /**
     * Internal: Iterates over audioFormats, determining support eg. audio/mp3, audio/mpeg and so on
     * assigns results to html5[] and flash[].
     */

    if (!sm2.useHTML5Audio || !sm2.hasHTML5) {
      // without HTML5, we need Flash.
      sm2.html5.usingFlash = true;
      needsFlash = true;
      return false;
    }

    // double-whammy: Opera 9.64 throws WRONG_ARGUMENTS_ERR if no parameter passed to Audio(), and Webkit + iOS happily tries to load "null" as a URL. :/
    var a = (Audio !== _undefined ? (isOpera && opera.version() < 10 ? new Audio(null) : new Audio()) : null),
        item, lookup, support = {}, aF, i;

    function cp(m) {

      var canPlay, j,
          result = false,
          isOK = false;

      if (!a || typeof a.canPlayType !== 'function') {
        return result;
      }

      if (m instanceof Array) {
        // iterate through all mime types, return any successes
        for (i=0, j=m.length; i<j; i++) {
          if (sm2.html5[m[i]] || a.canPlayType(m[i]).match(sm2.html5Test)) {
            isOK = true;
            sm2.html5[m[i]] = true;
            // note flash support, too
            sm2.flash[m[i]] = !!(m[i].match(flashMIME));
          }
        }
        result = isOK;
      } else {
        canPlay = (a && typeof a.canPlayType === 'function' ? a.canPlayType(m) : false);
        result = !!(canPlay && (canPlay.match(sm2.html5Test)));
      }

      return result;

    }

    // test all registered formats + codecs

    aF = sm2.audioFormats;

    for (item in aF) {

      if (aF.hasOwnProperty(item)) {

        lookup = 'audio/' + item;

        support[item] = cp(aF[item].type);

        // write back generic type too, eg. audio/mp3
        support[lookup] = support[item];

        // assign flash
        if (item.match(flashMIME)) {

          sm2.flash[item] = true;
          sm2.flash[lookup] = true;

        } else {

          sm2.flash[item] = false;
          sm2.flash[lookup] = false;

        }

        // assign result to related formats, too

        if (aF[item] && aF[item].related) {

          for (i=aF[item].related.length-1; i >= 0; i--) {

            // eg. audio/m4a
            support['audio/'+aF[item].related[i]] = support[item];
            sm2.html5[aF[item].related[i]] = support[item];
            sm2.flash[aF[item].related[i]] = support[item];

          }

        }

      }

    }

    support.canPlayType = (a?cp:null);
    sm2.html5 = mixin(sm2.html5, support);

    sm2.html5.usingFlash = featureCheck();
    needsFlash = sm2.html5.usingFlash;

    return true;

  };

  strings = {

    // <d>
    notReady: 'Unavailable - wait until onready() has fired.',
    notOK: 'Audio support is not available.',
    domError: sm + 'exception caught while appending SWF to DOM.',
    spcWmode: 'Removing wmode, preventing known SWF loading issue(s)',
    swf404: smc + 'Verify that %s is a valid path.',
    tryDebug: 'Try ' + sm + '.debugFlash = true for more security details (output goes to SWF.)',
    checkSWF: 'See SWF output for more debug info.',
    localFail: smc + 'Non-HTTP page (' + doc.location.protocol + ' URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/',
    waitFocus: smc + 'Special case: Waiting for SWF to load with window focus...',
    waitForever: smc + 'Waiting indefinitely for Flash (will recover if unblocked)...',
    waitSWF: smc + 'Waiting for 100% SWF load...',
    needFunction: smc + 'Function object expected for %s',
    badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
    currentObj: smc + '_debug(): Current sound objects',
    waitOnload: smc + 'Waiting for window.onload()',
    docLoaded: smc + 'Document already loaded',
    onload: smc + 'initComplete(): calling soundManager.onload()',
    onloadOK: sm + '.onload() complete',
    didInit: smc + 'init(): Already called?',
    secNote: 'Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html',
    badRemove: smc + 'Failed to remove Flash node.',
    shutdown: sm + '.disable(): Shutting down',
    queue: smc + 'Queueing %s handler',
    smError: 'SMSound.load(): Exception: JS-Flash communication failed, or JS error.',
    fbTimeout: 'No flash response, applying .'+swfCSS.swfTimedout+' CSS...',
    fbLoaded: 'Flash loaded',
    fbHandler: smc + 'flashBlockHandler()',
    manURL: 'SMSound.load(): Using manually-assigned URL',
    onURL: sm + '.load(): current URL already assigned.',
    badFV: sm + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
    as2loop: 'Note: Setting stream:false so looping can work (flash 8 limitation)',
    noNSLoop: 'Note: Looping not implemented for MovieStar formats',
    needfl9: 'Note: Switching to flash 9, required for MP4 formats.',
    mfTimeout: 'Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case',
    needFlash: smc + 'Fatal error: Flash is needed to play some required formats, but is not available.',
    gotFocus: smc + 'Got window focus.',
    policy: 'Enabling usePolicyFile for data access',
    setup: sm + '.setup(): allowed parameters: %s',
    setupError: sm + '.setup(): "%s" cannot be assigned with this method.',
    setupUndef: sm + '.setup(): Could not find option "%s"',
    setupLate: sm + '.setup(): url, flashVersion and html5Test property changes will not take effect until reboot().',
    noURL: smc + 'Flash URL required. Call soundManager.setup({url:...}) to get started.',
    sm2Loaded: 'SoundManager 2: Ready.',
    reset: sm + '.reset(): Removing event callbacks',
    mobileUA: 'Mobile UA detected, preferring HTML5 by default.',
    globalHTML5: 'Using singleton HTML5 Audio() pattern for this device.'
    // </d>

  };

  str = function() {

    // internal string replace helper.
    // arguments: o [,items to replace]
    // <d>

    var args,
        i, j, o,
        sstr;

    // real array, please
    args = slice.call(arguments);

    // first argument
    o = args.shift();

    sstr = (strings && strings[o] ? strings[o] : '');

    if (sstr && args && args.length) {
      for (i = 0, j = args.length; i < j; i++) {
        sstr = sstr.replace('%s', args[i]);
      }
    }

    return sstr;
    // </d>

  };

  loopFix = function(sOpt) {

    // flash 8 requires stream = false for looping to work
    if (fV === 8 && sOpt.loops > 1 && sOpt.stream) {
      _wDS('as2loop');
      sOpt.stream = false;
    }

    return sOpt;

  };

  policyFix = function(sOpt, sPre) {

    if (sOpt && !sOpt.usePolicyFile && (sOpt.onid3 || sOpt.usePeakData || sOpt.useWaveformData || sOpt.useEQData)) {
      sm2._wD((sPre || '') + str('policy'));
      sOpt.usePolicyFile = true;
    }

    return sOpt;

  };

  complain = function(sMsg) {

    // <d>
    if (hasConsole && console.warn !== _undefined) {
      console.warn(sMsg);
    } else {
      sm2._wD(sMsg);
    }
    // </d>

  };

  doNothing = function() {

    return false;

  };

  disableObject = function(o) {

    var oProp;

    for (oProp in o) {
      if (o.hasOwnProperty(oProp) && typeof o[oProp] === 'function') {
        o[oProp] = doNothing;
      }
    }

    oProp = null;

  };

  failSafely = function(bNoDisable) {

    // general failure exception handler

    if (bNoDisable === _undefined) {
      bNoDisable = false;
    }

    if (disabled || bNoDisable) {
      sm2.disable(bNoDisable);
    }

  };

  normalizeMovieURL = function(smURL) {

    var urlParams = null, url;

    if (smURL) {
      if (smURL.match(/\.swf(\?.*)?$/i)) {
        urlParams = smURL.substr(smURL.toLowerCase().lastIndexOf('.swf?') + 4);
        if (urlParams) {
          // assume user knows what they're doing
          return smURL;
        }
      } else if (smURL.lastIndexOf('/') !== smURL.length - 1) {
        // append trailing slash, if needed
        smURL += '/';
      }
    }

    url = (smURL && smURL.lastIndexOf('/') !== - 1 ? smURL.substr(0, smURL.lastIndexOf('/') + 1) : './') + sm2.movieURL;

    if (sm2.noSWFCache) {
      url += ('?ts=' + new Date().getTime());
    }

    return url;

  };

  setVersionInfo = function() {

    // short-hand for internal use

    fV = parseInt(sm2.flashVersion, 10);

    if (fV !== 8 && fV !== 9) {
      sm2._wD(str('badFV', fV, defaultFlashVersion));
      sm2.flashVersion = fV = defaultFlashVersion;
    }

    // debug flash movie, if applicable

    var isDebug = (sm2.debugMode || sm2.debugFlash?'_debug.swf':'.swf');

    if (sm2.useHTML5Audio && !sm2.html5Only && sm2.audioFormats.mp4.required && fV < 9) {
      sm2._wD(str('needfl9'));
      sm2.flashVersion = fV = 9;
    }

    sm2.version = sm2.versionNumber + (sm2.html5Only?' (HTML5-only mode)':(fV === 9?' (AS3/Flash 9)':' (AS2/Flash 8)'));

    // set up default options
    if (fV > 8) {
      // +flash 9 base options
      sm2.defaultOptions = mixin(sm2.defaultOptions, sm2.flash9Options);
      sm2.features.buffering = true;
      // +moviestar support
      sm2.defaultOptions = mixin(sm2.defaultOptions, sm2.movieStarOptions);
      sm2.filePatterns.flash9 = new RegExp('\\.(mp3|' + netStreamTypes.join('|') + ')(\\?.*)?$', 'i');
      sm2.features.movieStar = true;
    } else {
      sm2.features.movieStar = false;
    }

    // regExp for flash canPlay(), etc.
    sm2.filePattern = sm2.filePatterns[(fV !== 8?'flash9':'flash8')];

    // if applicable, use _debug versions of SWFs
    sm2.movieURL = (fV === 8?'soundmanager2.swf':'soundmanager2_flash9.swf').replace('.swf', isDebug);

    sm2.features.peakData = sm2.features.waveformData = sm2.features.eqData = (fV > 8);

  };

  setPolling = function(bPolling, bHighPerformance) {

    if (!flash) {
      return false;
    }

    flash._setPolling(bPolling, bHighPerformance);

  };

  initDebug = function() {

    // starts debug mode, creating output <div> for UAs without console object

    // allow force of debug mode via URL
    // <d>
    if (sm2.debugURLParam.test(wl)) {
      sm2.debugMode = true;
    }

    if (id(sm2.debugID)) {
      return false;
    }

    var oD, oDebug, oTarget, oToggle, tmp;

    if (sm2.debugMode && !id(sm2.debugID) && (!hasConsole || !sm2.useConsole || !sm2.consoleOnly)) {

      oD = doc.createElement('div');
      oD.id = sm2.debugID + '-toggle';

      oToggle = {
        'position': 'fixed',
        'bottom': '0px',
        'right': '0px',
        'width': '1.2em',
        'height': '1.2em',
        'lineHeight': '1.2em',
        'margin': '2px',
        'textAlign': 'center',
        'border': '1px solid #999',
        'cursor': 'pointer',
        'background': '#fff',
        'color': '#333',
        'zIndex': 10001
      };

      oD.appendChild(doc.createTextNode('-'));
      oD.onclick = toggleDebug;
      oD.title = 'Toggle SM2 debug console';

      if (ua.match(/msie 6/i)) {
        oD.style.position = 'absolute';
        oD.style.cursor = 'hand';
      }

      for (tmp in oToggle) {
        if (oToggle.hasOwnProperty(tmp)) {
          oD.style[tmp] = oToggle[tmp];
        }
      }

      oDebug = doc.createElement('div');
      oDebug.id = sm2.debugID;
      oDebug.style.display = (sm2.debugMode?'block':'none');

      if (sm2.debugMode && !id(oD.id)) {
        try {
          oTarget = getDocument();
          oTarget.appendChild(oD);
        } catch(e2) {
          throw new Error(str('domError')+' \n'+e2.toString());
        }
        oTarget.appendChild(oDebug);
      }

    }

    oTarget = null;
    // </d>

  };

  idCheck = this.getSoundById;

  // <d>
  _wDS = function(o, errorLevel) {

    return (!o ? '' : sm2._wD(str(o), errorLevel));

  };

  toggleDebug = function() {

    var o = id(sm2.debugID),
    oT = id(sm2.debugID + '-toggle');

    if (!o) {
      return false;
    }

    if (debugOpen) {
      // minimize
      oT.innerHTML = '+';
      o.style.display = 'none';
    } else {
      oT.innerHTML = '-';
      o.style.display = 'block';
    }

    debugOpen = !debugOpen;

  };

  debugTS = function(sEventType, bSuccess, sMessage) {

    // troubleshooter debug hooks

    if (window.sm2Debugger !== _undefined) {
      try {
        sm2Debugger.handleEvent(sEventType, bSuccess, sMessage);
      } catch(e) {
        // oh well
        return false;
      }
    }

    return true;

  };
  // </d>

  getSWFCSS = function() {

    var css = [];

    if (sm2.debugMode) {
      css.push(swfCSS.sm2Debug);
    }

    if (sm2.debugFlash) {
      css.push(swfCSS.flashDebug);
    }

    if (sm2.useHighPerformance) {
      css.push(swfCSS.highPerf);
    }

    return css.join(' ');

  };

  flashBlockHandler = function() {

    // *possible* flash block situation.

    var name = str('fbHandler'),
        p = sm2.getMoviePercent(),
        css = swfCSS,
        error = {type:'FLASHBLOCK'};

    if (sm2.html5Only) {
      // no flash, or unused
      return false;
    }

    if (!sm2.ok()) {

      if (needsFlash) {
        // make the movie more visible, so user can fix
        sm2.oMC.className = getSWFCSS() + ' ' + css.swfDefault + ' ' + (p === null?css.swfTimedout:css.swfError);
        sm2._wD(name + ': ' + str('fbTimeout') + (p ? ' (' + str('fbLoaded') + ')' : ''));
      }

      sm2.didFlashBlock = true;

      // fire onready(), complain lightly
      processOnEvents({type:'ontimeout', ignoreInit:true, error:error});
      catchError(error);

    } else {

      // SM2 loaded OK (or recovered)

      // <d>
      if (sm2.didFlashBlock) {
        sm2._wD(name + ': Unblocked');
      }
      // </d>

      if (sm2.oMC) {
        sm2.oMC.className = [getSWFCSS(), css.swfDefault, css.swfLoaded + (sm2.didFlashBlock?' '+css.swfUnblocked:'')].join(' ');
      }

    }

  };

  addOnEvent = function(sType, oMethod, oScope) {

    if (on_queue[sType] === _undefined) {
      on_queue[sType] = [];
    }

    on_queue[sType].push({
      'method': oMethod,
      'scope': (oScope || null),
      'fired': false
    });

  };

  processOnEvents = function(oOptions) {

    // if unspecified, assume OK/error

    if (!oOptions) {
      oOptions = {
        type: (sm2.ok() ? 'onready' : 'ontimeout')
      };
    }

    if (!didInit && oOptions && !oOptions.ignoreInit) {
      // not ready yet.
      return false;
    }

    if (oOptions.type === 'ontimeout' && (sm2.ok() || (disabled && !oOptions.ignoreInit))) {
      // invalid case
      return false;
    }

    var status = {
          success: (oOptions && oOptions.ignoreInit?sm2.ok():!disabled)
        },

        // queue specified by type, or none
        srcQueue = (oOptions && oOptions.type?on_queue[oOptions.type]||[]:[]),

        queue = [], i, j,
        args = [status],
        canRetry = (needsFlash && !sm2.ok());

    if (oOptions.error) {
      args[0].error = oOptions.error;
    }

    for (i = 0, j = srcQueue.length; i < j; i++) {
      if (srcQueue[i].fired !== true) {
        queue.push(srcQueue[i]);
      }
    }

    if (queue.length) {
      // sm2._wD(sm + ': Firing ' + queue.length + ' ' + oOptions.type + '() item' + (queue.length === 1 ? '' : 's'));
      for (i = 0, j = queue.length; i < j; i++) {
        if (queue[i].scope) {
          queue[i].method.apply(queue[i].scope, args);
        } else {
          queue[i].method.apply(this, args);
        }
        if (!canRetry) {
          // useFlashBlock and SWF timeout case doesn't count here.
          queue[i].fired = true;
        }
      }
    }

    return true;

  };

  initUserOnload = function() {

    window.setTimeout(function() {

      if (sm2.useFlashBlock) {
        flashBlockHandler();
      }

      processOnEvents();

      // call user-defined "onload", scoped to window

      if (typeof sm2.onload === 'function') {
        _wDS('onload', 1);
        sm2.onload.apply(window);
        _wDS('onloadOK', 1);
      }

      if (sm2.waitForWindowLoad) {
        event.add(window, 'load', initUserOnload);
      }

    },1);

  };

  detectFlash = function() {

    // hat tip: Flash Detect library (BSD, (C) 2007) by Carl "DocYes" S. Yestrau - http://featureblend.com/javascript-flash-detection-library.html / http://featureblend.com/license.txt

    if (hasFlash !== _undefined) {
      // this work has already been done.
      return hasFlash;
    }

    var hasPlugin = false, n = navigator, nP = n.plugins, obj, type, types, AX = window.ActiveXObject;

    if (nP && nP.length) {
      type = 'application/x-shockwave-flash';
      types = n.mimeTypes;
      if (types && types[type] && types[type].enabledPlugin && types[type].enabledPlugin.description) {
        hasPlugin = true;
      }
    } else if (AX !== _undefined && !ua.match(/MSAppHost/i)) {
      // Windows 8 Store Apps (MSAppHost) are weird (compatibility?) and won't complain here, but will barf if Flash/ActiveX object is appended to the DOM.
      try {
        obj = new AX('ShockwaveFlash.ShockwaveFlash');
      } catch(e) {
        // oh well
        obj = null;
      }
      hasPlugin = (!!obj);
      // cleanup, because it is ActiveX after all
      obj = null;
    }

    hasFlash = hasPlugin;

    return hasPlugin;

  };

  featureCheck = function() {

    var flashNeeded,
        item,
        formats = sm2.audioFormats,
        // iPhone <= 3.1 has broken HTML5 audio(), but firmware 3.2 (original iPad) + iOS4 works.
        isSpecial = (is_iDevice && !!(ua.match(/os (1|2|3_0|3_1)/i)));

    if (isSpecial) {

      // has Audio(), but is broken; let it load links directly.
      sm2.hasHTML5 = false;

      // ignore flash case, however
      sm2.html5Only = true;

      // hide the SWF, if present
      if (sm2.oMC) {
        sm2.oMC.style.display = 'none';
      }

    } else {

      if (sm2.useHTML5Audio) {

        if (!sm2.html5 || !sm2.html5.canPlayType) {
          sm2._wD('SoundManager: No HTML5 Audio() support detected.');
          sm2.hasHTML5 = false;
        }

        // <d>
        if (isBadSafari) {
          sm2._wD(smc + 'Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - ' + (!hasFlash ?' would use flash fallback for MP3/MP4, but none detected.' : 'will use flash fallback for MP3/MP4, if available'), 1);
        }
        // </d>

      }

    }

    if (sm2.useHTML5Audio && sm2.hasHTML5) {

      // sort out whether flash is optional, required or can be ignored.

      // innocent until proven guilty.
      canIgnoreFlash = true;

      for (item in formats) {
        if (formats.hasOwnProperty(item)) {
          if (formats[item].required) {
            if (!sm2.html5.canPlayType(formats[item].type)) {
              // 100% HTML5 mode is not possible.
              canIgnoreFlash = false;
              flashNeeded = true;
            } else if (sm2.preferFlash && (sm2.flash[item] || sm2.flash[formats[item].type])) {
              // flash may be required, or preferred for this format.
              flashNeeded = true;
            }
          }
        }
      }

    }

    // sanity check...
    if (sm2.ignoreFlash) {
      flashNeeded = false;
      canIgnoreFlash = true;
    }

    sm2.html5Only = (sm2.hasHTML5 && sm2.useHTML5Audio && !flashNeeded);

    return (!sm2.html5Only);

  };

  parseURL = function(url) {

    /**
     * Internal: Finds and returns the first playable URL (or failing that, the first URL.)
     * @param {string or array} url A single URL string, OR, an array of URL strings or {url:'/path/to/resource', type:'audio/mp3'} objects.
     */

    var i, j, urlResult = 0, result;

    if (url instanceof Array) {

      // find the first good one
      for (i=0, j=url.length; i<j; i++) {

        if (url[i] instanceof Object) {
          // MIME check
          if (sm2.canPlayMIME(url[i].type)) {
            urlResult = i;
            break;
          }

        } else if (sm2.canPlayURL(url[i])) {
          // URL string check
          urlResult = i;
          break;
        }

      }

      // normalize to string
      if (url[urlResult].url) {
        url[urlResult] = url[urlResult].url;
      }

      result = url[urlResult];

    } else {

      // single URL case
      result = url;

    }

    return result;

  };


  startTimer = function(oSound) {

    /**
     * attach a timer to this sound, and start an interval if needed
     */

    if (!oSound._hasTimer) {

      oSound._hasTimer = true;

      if (!mobileHTML5 && sm2.html5PollingInterval) {

        if (h5IntervalTimer === null && h5TimerCount === 0) {

          h5IntervalTimer = setInterval(timerExecute, sm2.html5PollingInterval);

        }

        h5TimerCount++;

      }

    }

  };

  stopTimer = function(oSound) {

    /**
     * detach a timer
     */

    if (oSound._hasTimer) {

      oSound._hasTimer = false;

      if (!mobileHTML5 && sm2.html5PollingInterval) {

        // interval will stop itself at next execution.

        h5TimerCount--;

      }

    }

  };

  timerExecute = function() {

    /**
     * manual polling for HTML5 progress events, ie., whileplaying() (can achieve greater precision than conservative default HTML5 interval)
     */

    var i;

    if (h5IntervalTimer !== null && !h5TimerCount) {

      // no active timers, stop polling interval.

      clearInterval(h5IntervalTimer);

      h5IntervalTimer = null;

      return false;

    }

    // check all HTML5 sounds with timers

    for (i = sm2.soundIDs.length-1; i >= 0; i--) {

      if (sm2.sounds[sm2.soundIDs[i]].isHTML5 && sm2.sounds[sm2.soundIDs[i]]._hasTimer) {

        sm2.sounds[sm2.soundIDs[i]]._onTimer();

      }

    }

  };

  catchError = function(options) {

    options = (options !== _undefined ? options : {});

    if (typeof sm2.onerror === 'function') {
      sm2.onerror.apply(window, [{type:(options.type !== _undefined ? options.type : null)}]);
    }

    if (options.fatal !== _undefined && options.fatal) {
      sm2.disable();
    }

  };

  badSafariFix = function() {

    // special case: "bad" Safari (OS X 10.3 - 10.7) must fall back to flash for MP3/MP4
    if (!isBadSafari || !detectFlash()) {
      // doesn't apply
      return false;
    }

    var aF = sm2.audioFormats, i, item;

    for (item in aF) {
      if (aF.hasOwnProperty(item)) {
        if (item === 'mp3' || item === 'mp4') {
          sm2._wD(sm + ': Using flash fallback for ' + item + ' format');
          sm2.html5[item] = false;
          // assign result to related formats, too
          if (aF[item] && aF[item].related) {
            for (i = aF[item].related.length-1; i >= 0; i--) {
              sm2.html5[aF[item].related[i]] = false;
            }
          }
        }
      }
    }

  };

  /**
   * Pseudo-private flash/ExternalInterface methods
   * ----------------------------------------------
   */

  this._setSandboxType = function(sandboxType) {

    // <d>
    var sb = sm2.sandbox;

    sb.type = sandboxType;
    sb.description = sb.types[(sb.types[sandboxType] !== _undefined?sandboxType:'unknown')];

    if (sb.type === 'localWithFile') {

      sb.noRemote = true;
      sb.noLocal = false;
      _wDS('secNote', 2);

    } else if (sb.type === 'localWithNetwork') {

      sb.noRemote = false;
      sb.noLocal = true;

    } else if (sb.type === 'localTrusted') {

      sb.noRemote = false;
      sb.noLocal = false;

    }
    // </d>

  };

  this._externalInterfaceOK = function(swfVersion) {

    // flash callback confirming flash loaded, EI working etc.
    // swfVersion: SWF build string

    if (sm2.swfLoaded) {
      return false;
    }

    var e;

    debugTS('swf', true);
    debugTS('flashtojs', true);
    sm2.swfLoaded = true;
    tryInitOnFocus = false;

    if (isBadSafari) {
      badSafariFix();
    }

    // complain if JS + SWF build/version strings don't match, excluding +DEV builds
    // <d>
    if (!swfVersion || swfVersion.replace(/\+dev/i,'') !== sm2.versionNumber.replace(/\+dev/i, '')) {

      e = sm + ': Fatal: JavaScript file build "' + sm2.versionNumber + '" does not match Flash SWF build "' + swfVersion + '" at ' + sm2.url + '. Ensure both are up-to-date.';

      // escape flash -> JS stack so this error fires in window.
      setTimeout(function versionMismatch() {
        throw new Error(e);
      }, 0);

      // exit, init will fail with timeout
      return false;

    }
    // </d>

    // IE needs a larger timeout
    setTimeout(init, isIE ? 100 : 1);

  };

  /**
   * Private initialization helpers
   * ------------------------------
   */

  createMovie = function(smID, smURL) {

    if (didAppend && appendSuccess) {
      // ignore if already succeeded
      return false;
    }

    function initMsg() {

      // <d>

      var options = [],
          title,
          msg = [],
          delimiter = ' + ';

      title = 'SoundManager ' + sm2.version + (!sm2.html5Only && sm2.useHTML5Audio ? (sm2.hasHTML5 ? ' + HTML5 audio' : ', no HTML5 audio support') : '');

      if (!sm2.html5Only) {

        if (sm2.preferFlash) {
          options.push('preferFlash');
        }

        if (sm2.useHighPerformance) {
          options.push('useHighPerformance');
        }

        if (sm2.flashPollingInterval) {
          options.push('flashPollingInterval (' + sm2.flashPollingInterval + 'ms)');
        }

        if (sm2.html5PollingInterval) {
          options.push('html5PollingInterval (' + sm2.html5PollingInterval + 'ms)');
        }

        if (sm2.wmode) {
          options.push('wmode (' + sm2.wmode + ')');
        }

        if (sm2.debugFlash) {
          options.push('debugFlash');
        }

        if (sm2.useFlashBlock) {
          options.push('flashBlock');
        }

      } else {

        if (sm2.html5PollingInterval) {
          options.push('html5PollingInterval (' + sm2.html5PollingInterval + 'ms)');
        }

      }

      if (options.length) {
        msg = msg.concat([options.join(delimiter)]);
      }

      sm2._wD(title + (msg.length ? delimiter + msg.join(', ') : ''), 1);

      showSupport();

      // </d>

    }

    if (sm2.html5Only) {

      // 100% HTML5 mode
      setVersionInfo();

      initMsg();
      sm2.oMC = id(sm2.movieID);
      init();

      // prevent multiple init attempts
      didAppend = true;

      appendSuccess = true;

      return false;

    }

    // flash path
    var remoteURL = (smURL || sm2.url),
    localURL = (sm2.altURL || remoteURL),
    swfTitle = 'JS/Flash audio component (SoundManager 2)',
    oTarget = getDocument(),
    extraClass = getSWFCSS(),
    isRTL = null,
    html = doc.getElementsByTagName('html')[0],
    oEmbed, oMovie, tmp, movieHTML, oEl, s, x, sClass;

    isRTL = (html && html.dir && html.dir.match(/rtl/i));
    smID = (smID === _undefined?sm2.id:smID);

    function param(name, value) {
      return '<param name="'+name+'" value="'+value+'" />';
    }

    // safety check for legacy (change to Flash 9 URL)
    setVersionInfo();
    sm2.url = normalizeMovieURL(overHTTP?remoteURL:localURL);
    smURL = sm2.url;

    sm2.wmode = (!sm2.wmode && sm2.useHighPerformance ? 'transparent' : sm2.wmode);

    if (sm2.wmode !== null && (ua.match(/msie 8/i) || (!isIE && !sm2.useHighPerformance)) && navigator.platform.match(/win32|win64/i)) {
      /**
       * extra-special case: movie doesn't load until scrolled into view when using wmode = anything but 'window' here
       * does not apply when using high performance (position:fixed means on-screen), OR infinite flash load timeout
       * wmode breaks IE 8 on Vista + Win7 too in some cases, as of January 2011 (?)
       */
       messages.push(strings.spcWmode);
      sm2.wmode = null;
    }

    oEmbed = {
      'name': smID,
      'id': smID,
      'src': smURL,
      'quality': 'high',
      'allowScriptAccess': sm2.allowScriptAccess,
      'bgcolor': sm2.bgColor,
      'pluginspage': http+'www.macromedia.com/go/getflashplayer',
      'title': swfTitle,
      'type': 'application/x-shockwave-flash',
      'wmode': sm2.wmode,
      // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
      'hasPriority': 'true'
    };

    if (sm2.debugFlash) {
      oEmbed.FlashVars = 'debug=1';
    }

    if (!sm2.wmode) {
      // don't write empty attribute
      delete oEmbed.wmode;
    }

    if (isIE) {

      // IE is "special".
      oMovie = doc.createElement('div');
      movieHTML = [
        '<object id="' + smID + '" data="' + smURL + '" type="' + oEmbed.type + '" title="' + oEmbed.title +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + http+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',
        param('movie', smURL),
        param('AllowScriptAccess', sm2.allowScriptAccess),
        param('quality', oEmbed.quality),
        (sm2.wmode? param('wmode', sm2.wmode): ''),
        param('bgcolor', sm2.bgColor),
        param('hasPriority', 'true'),
        (sm2.debugFlash ? param('FlashVars', oEmbed.FlashVars) : ''),
        '</object>'
      ].join('');

    } else {

      oMovie = doc.createElement('embed');
      for (tmp in oEmbed) {
        if (oEmbed.hasOwnProperty(tmp)) {
          oMovie.setAttribute(tmp, oEmbed[tmp]);
        }
      }

    }

    initDebug();
    extraClass = getSWFCSS();
    oTarget = getDocument();

    if (oTarget) {

      sm2.oMC = (id(sm2.movieID) || doc.createElement('div'));

      if (!sm2.oMC.id) {

        sm2.oMC.id = sm2.movieID;
        sm2.oMC.className = swfCSS.swfDefault + ' ' + extraClass;
        s = null;
        oEl = null;

        if (!sm2.useFlashBlock) {
          if (sm2.useHighPerformance) {
            // on-screen at all times
            s = {
              'position': 'fixed',
              'width': '8px',
              'height': '8px',
              // >= 6px for flash to run fast, >= 8px to start up under Firefox/win32 in some cases. odd? yes.
              'bottom': '0px',
              'left': '0px',
              'overflow': 'hidden'
            };
          } else {
            // hide off-screen, lower priority
            s = {
              'position': 'absolute',
              'width': '6px',
              'height': '6px',
              'top': '-9999px',
              'left': '-9999px'
            };
            if (isRTL) {
              s.left = Math.abs(parseInt(s.left,10))+'px';
            }
          }
        }

        if (isWebkit) {
          // soundcloud-reported render/crash fix, safari 5
          sm2.oMC.style.zIndex = 10000;
        }

        if (!sm2.debugFlash) {
          for (x in s) {
            if (s.hasOwnProperty(x)) {
              sm2.oMC.style[x] = s[x];
            }
          }
        }

        try {
          if (!isIE) {
            sm2.oMC.appendChild(oMovie);
          }
          oTarget.appendChild(sm2.oMC);
          if (isIE) {
            oEl = sm2.oMC.appendChild(doc.createElement('div'));
            oEl.className = swfCSS.swfBox;
            oEl.innerHTML = movieHTML;
          }
          appendSuccess = true;
        } catch(e) {
          throw new Error(str('domError')+' \n'+e.toString());
        }

      } else {

        // SM2 container is already in the document (eg. flashblock use case)
        sClass = sm2.oMC.className;
        sm2.oMC.className = (sClass?sClass+' ':swfCSS.swfDefault) + (extraClass?' '+extraClass:'');
        sm2.oMC.appendChild(oMovie);
        if (isIE) {
          oEl = sm2.oMC.appendChild(doc.createElement('div'));
          oEl.className = swfCSS.swfBox;
          oEl.innerHTML = movieHTML;
        }
        appendSuccess = true;

      }

    }

    didAppend = true;
    initMsg();
    // sm2._wD(sm + ': Trying to load ' + smURL + (!overHTTP && sm2.altURL ? ' (alternate URL)' : ''), 1);

    return true;

  };

  initMovie = function() {

    if (sm2.html5Only) {
      createMovie();
      return false;
    }

    // attempt to get, or create, movie (may already exist)
    if (flash) {
      return false;
    }

    if (!sm2.url) {

      /**
       * Something isn't right - we've reached init, but the soundManager url property has not been set.
       * User has not called setup({url: ...}), or has not set soundManager.url (legacy use case) directly before init time.
       * Notify and exit. If user calls setup() with a url: property, init will be restarted as in the deferred loading case.
       */

       _wDS('noURL');
       return false;

    }

    // inline markup case
    flash = sm2.getMovie(sm2.id);

    if (!flash) {
      if (!oRemoved) {
        // try to create
        createMovie(sm2.id, sm2.url);
      } else {
        // try to re-append removed movie after reboot()
        if (!isIE) {
          sm2.oMC.appendChild(oRemoved);
        } else {
          sm2.oMC.innerHTML = oRemovedHTML;
        }
        oRemoved = null;
        didAppend = true;
      }
      flash = sm2.getMovie(sm2.id);
    }

    if (typeof sm2.oninitmovie === 'function') {
      setTimeout(sm2.oninitmovie, 1);
    }

    // <d>
    flushMessages();
    // </d>

    return true;

  };

  delayWaitForEI = function() {

    setTimeout(waitForEI, 1000);

  };

  rebootIntoHTML5 = function() {

    // special case: try for a reboot with preferFlash: false, if 100% HTML5 mode is possible and useFlashBlock is not enabled.

    window.setTimeout(function() {

      complain(smc + 'useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...');

      sm2.setup({
        preferFlash: false
      }).reboot();

      // if for some reason you want to detect this case, use an ontimeout() callback and look for html5Only and didFlashBlock == true.
      sm2.didFlashBlock = true;

      sm2.beginDelayedInit();

    }, 1);

  };

  waitForEI = function() {

    var p,
        loadIncomplete = false;

    if (!sm2.url) {
      // No SWF url to load (noURL case) - exit for now. Will be retried when url is set.
      return false;
    }

    if (waitingForEI) {
      return false;
    }

    waitingForEI = true;
    event.remove(window, 'load', delayWaitForEI);

    if (hasFlash && tryInitOnFocus && !isFocused) {
      // Safari won't load flash in background tabs, only when focused.
      _wDS('waitFocus');
      return false;
    }

    if (!didInit) {
      p = sm2.getMoviePercent();
      if (p > 0 && p < 100) {
        loadIncomplete = true;
      }
    }

    setTimeout(function() {

      p = sm2.getMoviePercent();

      if (loadIncomplete) {
        // special case: if movie *partially* loaded, retry until it's 100% before assuming failure.
        waitingForEI = false;
        sm2._wD(str('waitSWF'));
        window.setTimeout(delayWaitForEI, 1);
        return false;
      }

      // <d>
      if (!didInit) {

        sm2._wD(sm + ': No Flash response within expected time. Likely causes: ' + (p === 0 ? 'SWF load failed, ':'') + 'Flash blocked or JS-Flash security error.' + (sm2.debugFlash?' ' + str('checkSWF'):''), 2);

        if (!overHTTP && p) {

          _wDS('localFail', 2);

          if (!sm2.debugFlash) {
            _wDS('tryDebug', 2);
          }

        }

        if (p === 0) {

          // if 0 (not null), probably a 404.
          sm2._wD(str('swf404', sm2.url), 1);

        }

        debugTS('flashtojs', false, ': Timed out' + overHTTP?' (Check flash security or flash blockers)':' (No plugin/missing SWF?)');

      }
      // </d>

      // give up / time-out, depending

      if (!didInit && okToDisable) {

        if (p === null) {

          // SWF failed to report load progress. Possibly blocked.

          if (sm2.useFlashBlock || sm2.flashLoadTimeout === 0) {

            if (sm2.useFlashBlock) {

              flashBlockHandler();

            }

            _wDS('waitForever');

          } else {

            // no custom flash block handling, but SWF has timed out. Will recover if user unblocks / allows SWF load.

            if (!sm2.useFlashBlock && canIgnoreFlash) {

              rebootIntoHTML5();

            } else {

              _wDS('waitForever');

              // fire any regular registered ontimeout() listeners.
              processOnEvents({type:'ontimeout', ignoreInit: true, error: {type: 'INIT_FLASHBLOCK'}});

            }

          }

        } else {

          // SWF loaded? Shouldn't be a blocking issue, then.

          if (sm2.flashLoadTimeout === 0) {

            _wDS('waitForever');

          } else {

            if (!sm2.useFlashBlock && canIgnoreFlash) {

              rebootIntoHTML5();

            } else {

              failSafely(true);

            }

          }

        }

      }

    }, sm2.flashLoadTimeout);

  };

  handleFocus = function() {

    function cleanup() {
      event.remove(window, 'focus', handleFocus);
    }

    if (isFocused || !tryInitOnFocus) {
      // already focused, or not special Safari background tab case
      cleanup();
      return true;
    }

    okToDisable = true;
    isFocused = true;
    _wDS('gotFocus');

    // allow init to restart
    waitingForEI = false;

    // kick off ExternalInterface timeout, now that the SWF has started
    delayWaitForEI();

    cleanup();
    return true;

  };

  flushMessages = function() {

    // <d>

    // SM2 pre-init debug messages
    if (messages.length) {
      sm2._wD('SoundManager 2: ' + messages.join(' '), 1);
      messages = [];
    }

    // </d>

  };

  showSupport = function() {

    // <d>

    flushMessages();

    var item, tests = [];

    if (sm2.useHTML5Audio && sm2.hasHTML5) {
      for (item in sm2.audioFormats) {
        if (sm2.audioFormats.hasOwnProperty(item)) {
          tests.push(item + ' = ' + sm2.html5[item] + (!sm2.html5[item] && needsFlash && sm2.flash[item] ? ' (using flash)' : (sm2.preferFlash && sm2.flash[item] && needsFlash ? ' (preferring flash)': (!sm2.html5[item] ? ' (' + (sm2.audioFormats[item].required ? 'required, ':'') + 'and no flash support)' : ''))));
        }
      }
      sm2._wD('SoundManager 2 HTML5 support: ' + tests.join(', '), 1);
    }

    // </d>

  };

  initComplete = function(bNoDisable) {

    if (didInit) {
      return false;
    }

    if (sm2.html5Only) {
      // all good.
      _wDS('sm2Loaded');
      didInit = true;
      initUserOnload();
      debugTS('onload', true);
      return true;
    }

    var wasTimeout = (sm2.useFlashBlock && sm2.flashLoadTimeout && !sm2.getMoviePercent()),
        result = true,
        error;

    if (!wasTimeout) {
      didInit = true;
    }

    error = {type: (!hasFlash && needsFlash ? 'NO_FLASH' : 'INIT_TIMEOUT')};

    sm2._wD('SoundManager 2 ' + (disabled ? 'failed to load' : 'loaded') + ' (' + (disabled ? 'Flash security/load error' : 'OK') + ')', disabled ? 2: 1);

    if (disabled || bNoDisable) {
      if (sm2.useFlashBlock && sm2.oMC) {
        sm2.oMC.className = getSWFCSS() + ' ' + (sm2.getMoviePercent() === null?swfCSS.swfTimedout:swfCSS.swfError);
      }
      processOnEvents({type:'ontimeout', error:error, ignoreInit: true});
      debugTS('onload', false);
      catchError(error);
      result = false;
    } else {
      debugTS('onload', true);
    }

    if (!disabled) {
      if (sm2.waitForWindowLoad && !windowLoaded) {
        _wDS('waitOnload');
        event.add(window, 'load', initUserOnload);
      } else {
        // <d>
        if (sm2.waitForWindowLoad && windowLoaded) {
          _wDS('docLoaded');
        }
        // </d>
        initUserOnload();
      }
    }

    return result;

  };

  /**
   * apply top-level setupOptions object as local properties, eg., this.setupOptions.flashVersion -> this.flashVersion (soundManager.flashVersion)
   * this maintains backward compatibility, and allows properties to be defined separately for use by soundManager.setup().
   */

  setProperties = function() {

    var i,
        o = sm2.setupOptions;

    for (i in o) {

      if (o.hasOwnProperty(i)) {

        // assign local property if not already defined

        if (sm2[i] === _undefined) {

          sm2[i] = o[i];

        } else if (sm2[i] !== o[i]) {

          // legacy support: write manually-assigned property (eg., soundManager.url) back to setupOptions to keep things in sync
          sm2.setupOptions[i] = sm2[i];

        }

      }

    }

  };


  init = function() {

    // called after onload()

    if (didInit) {
      _wDS('didInit');
      return false;
    }

    function cleanup() {
      event.remove(window, 'load', sm2.beginDelayedInit);
    }

    if (sm2.html5Only) {
      if (!didInit) {
        // we don't need no steenking flash!
        cleanup();
        sm2.enabled = true;
        initComplete();
      }
      return true;
    }

    // flash path
    initMovie();

    try {

      // attempt to talk to Flash
      flash._externalInterfaceTest(false);

      // apply user-specified polling interval, OR, if "high performance" set, faster vs. default polling
      // (determines frequency of whileloading/whileplaying callbacks, effectively driving UI framerates)
      setPolling(true, (sm2.flashPollingInterval || (sm2.useHighPerformance ? 10 : 50)));

      if (!sm2.debugMode) {
        // stop the SWF from making debug output calls to JS
        flash._disableDebug();
      }

      sm2.enabled = true;
      debugTS('jstoflash', true);

      if (!sm2.html5Only) {
        // prevent browser from showing cached page state (or rather, restoring "suspended" page state) via back button, because flash may be dead
        // http://www.webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/
        event.add(window, 'unload', doNothing);
      }

    } catch(e) {

      sm2._wD('js/flash exception: ' + e.toString());
      debugTS('jstoflash', false);
      catchError({type:'JS_TO_FLASH_EXCEPTION', fatal:true});
      // don't disable, for reboot()
      failSafely(true);
      initComplete();

      return false;

    }

    initComplete();

    // disconnect events
    cleanup();

    return true;

  };

  domContentLoaded = function() {

    if (didDCLoaded) {
      return false;
    }

    didDCLoaded = true;

    // assign top-level soundManager properties eg. soundManager.url
    setProperties();

    initDebug();

    /**
     * Temporary feature: allow force of HTML5 via URL params: sm2-usehtml5audio=0 or 1
     * Ditto for sm2-preferFlash, too.
     */
    // <d>
    (function(){

      var a = 'sm2-usehtml5audio=',
          a2 = 'sm2-preferflash=',
          b = null,
          b2 = null,
          l = wl.toLowerCase();

      if (l.indexOf(a) !== -1) {
        b = (l.charAt(l.indexOf(a)+a.length) === '1');
        if (hasConsole) {
          console.log((b?'Enabling ':'Disabling ')+'useHTML5Audio via URL parameter');
        }
        sm2.setup({
          'useHTML5Audio': b
        });
      }

      if (l.indexOf(a2) !== -1) {
        b2 = (l.charAt(l.indexOf(a2)+a2.length) === '1');
        if (hasConsole) {
          console.log((b2?'Enabling ':'Disabling ')+'preferFlash via URL parameter');
        }
        sm2.setup({
          'preferFlash': b2
        });
      }

    }());
    // </d>

    if (!hasFlash && sm2.hasHTML5) {
      sm2._wD('SoundManager 2: No Flash detected' + (!sm2.useHTML5Audio ? ', enabling HTML5.' : '. Trying HTML5-only mode.'), 1);
      sm2.setup({
        'useHTML5Audio': true,
        // make sure we aren't preferring flash, either
        // TODO: preferFlash should not matter if flash is not installed. Currently, stuff breaks without the below tweak.
        'preferFlash': false
      });
    }

    testHTML5();

    if (!hasFlash && needsFlash) {
      messages.push(strings.needFlash);
      // TODO: Fatal here vs. timeout approach, etc.
      // hack: fail sooner.
      sm2.setup({
        'flashLoadTimeout': 1
      });
    }

    if (doc.removeEventListener) {
      doc.removeEventListener('DOMContentLoaded', domContentLoaded, false);
    }

    initMovie();

    return true;

  };

  domContentLoadedIE = function() {

    if (doc.readyState === 'complete') {
      domContentLoaded();
      doc.detachEvent('onreadystatechange', domContentLoadedIE);
    }

    return true;

  };

  winOnLoad = function() {

    // catch edge case of initComplete() firing after window.load()
    windowLoaded = true;
    event.remove(window, 'load', winOnLoad);

  };

  /**
   * miscellaneous run-time, pre-init stuff
   */

  preInit = function() {

    if (mobileHTML5) {

      // prefer HTML5 for mobile + tablet-like devices, probably more reliable vs. flash at this point.

      // <d>
      if (!sm2.setupOptions.useHTML5Audio || sm2.setupOptions.preferFlash) {
        // notify that defaults are being changed.
        messages.push(strings.mobileUA);
      }
      // </d>

      sm2.setupOptions.useHTML5Audio = true;
      sm2.setupOptions.preferFlash = false;

      if (is_iDevice || (isAndroid && !ua.match(/android\s2\.3/i))) {
        // iOS and Android devices tend to work better with a single audio instance, specifically for chained playback of sounds in sequence.
        // common use case: exiting sound onfinish() -> createSound() -> play()
        // <d>
        messages.push(strings.globalHTML5);
        // </d>
        if (is_iDevice) {
          sm2.ignoreFlash = true;
        }
        useGlobalHTML5Audio = true;
      }

    }

  };

  preInit();

  // sniff up-front
  detectFlash();

  // focus and window load, init (primarily flash-driven)
  event.add(window, 'focus', handleFocus);
  event.add(window, 'load', delayWaitForEI);
  event.add(window, 'load', winOnLoad);

  if (doc.addEventListener) {

    doc.addEventListener('DOMContentLoaded', domContentLoaded, false);

  } else if (doc.attachEvent) {

    doc.attachEvent('onreadystatechange', domContentLoadedIE);

  } else {

    // no add/attachevent support - safe to assume no JS -> Flash either
    debugTS('onload', false);
    catchError({type:'NO_DOM2_EVENTS', fatal:true});

  }

} // SoundManager()

// SM2_DEFER details: http://www.schillmania.com/projects/soundmanager2/doc/getstarted/#lazy-loading

if (window.SM2_DEFER === undefined || !SM2_DEFER) {
  soundManager = new SoundManager();
}

/**
 * SoundManager public interfaces
 * ------------------------------
 */

window.SoundManager = SoundManager; // constructor
window.soundManager = soundManager; // public API, flash callbacks etc.

}(window));
;(function(){
var h;
function s(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function aa(a){return a[ba]||(a[ba]=++ca)}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ea(a,b){null!=a&&this.append.apply(this,arguments)}ea.prototype.Ya="";ea.prototype.append=function(a,b,c){this.Ya+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Ya+=arguments[d];return this};ea.prototype.toString=function(){return this.Ya};var fa=null;function ga(){return new u(null,5,[ha,!0,ia,!0,ja,!1,ka,!1,la,null],null)}function x(a){return null!=a&&!1!==a}function ma(a){return x(a)?!1:!0}function y(a,b){return a[s(null==b?null:b)]?!0:a._?!0:z?!1:null}function na(a){return null==a?null:a.constructor}function A(a,b){var c=na(b),c=x(x(c)?c.Ka:c)?c.Ja:s(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function oa(a){var b=a.Ja;return x(b)?b:""+B.e(a)}
function qa(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}var ra={},sa={};function ta(a){if(a?a.fa:a)return a.fa(a);var b;b=ta[s(null==a?null:a)];if(!b&&(b=ta._,!b))throw A("ICloneable.-clone",a);return b.call(null,a)}var ua={};function va(a){if(a?a.T:a)return a.T(a);var b;b=va[s(null==a?null:a)];if(!b&&(b=va._,!b))throw A("ICounted.-count",a);return b.call(null,a)}
function wa(a){if(a?a.U:a)return a.U(a);var b;b=wa[s(null==a?null:a)];if(!b&&(b=wa._,!b))throw A("IEmptyableCollection.-empty",a);return b.call(null,a)}var xa={};function ya(a,b){if(a?a.S:a)return a.S(a,b);var c;c=ya[s(null==a?null:a)];if(!c&&(c=ya._,!c))throw A("ICollection.-conj",a);return c.call(null,a,b)}
var za={},C=function(){function a(a,b,c){if(a?a.ga:a)return a.ga(a,b,c);var g;g=C[s(null==a?null:a)];if(!g&&(g=C._,!g))throw A("IIndexed.-nth",a);return g.call(null,a,b,c)}function b(a,b){if(a?a.R:a)return a.R(a,b);var c;c=C[s(null==a?null:a)];if(!c&&(c=C._,!c))throw A("IIndexed.-nth",a);return c.call(null,a,b)}var c=null,c=function(d,c,f){switch(arguments.length){case 2:return b.call(this,d,c);case 3:return a.call(this,d,c,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}(),
Aa={};function D(a){if(a?a.ca:a)return a.ca(a);var b;b=D[s(null==a?null:a)];if(!b&&(b=D._,!b))throw A("ISeq.-first",a);return b.call(null,a)}function E(a){if(a?a.da:a)return a.da(a);var b;b=E[s(null==a?null:a)];if(!b&&(b=E._,!b))throw A("ISeq.-rest",a);return b.call(null,a)}
var Ba={},Ca={},F=function(){function a(a,b,c){if(a?a.M:a)return a.M(a,b,c);var g;g=F[s(null==a?null:a)];if(!g&&(g=F._,!g))throw A("ILookup.-lookup",a);return g.call(null,a,b,c)}function b(a,b){if(a?a.L:a)return a.L(a,b);var c;c=F[s(null==a?null:a)];if(!c&&(c=F._,!c))throw A("ILookup.-lookup",a);return c.call(null,a,b)}var c=null,c=function(d,c,f){switch(arguments.length){case 2:return b.call(this,d,c);case 3:return a.call(this,d,c,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;
return c}();function Da(a,b){if(a?a.Za:a)return a.Za(a,b);var c;c=Da[s(null==a?null:a)];if(!c&&(c=Da._,!c))throw A("IAssociative.-contains-key?",a);return c.call(null,a,b)}function Ea(a,b,c){if(a?a.Qa:a)return a.Qa(a,b,c);var d;d=Ea[s(null==a?null:a)];if(!d&&(d=Ea._,!d))throw A("IAssociative.-assoc",a);return d.call(null,a,b,c)}var Fa={};function Ga(a,b){if(a?a.lb:a)return a.lb(a,b);var c;c=Ga[s(null==a?null:a)];if(!c&&(c=Ga._,!c))throw A("IMap.-dissoc",a);return c.call(null,a,b)}var Ha={};
function Ia(a){if(a?a.ub:a)return a.ub();var b;b=Ia[s(null==a?null:a)];if(!b&&(b=Ia._,!b))throw A("IMapEntry.-key",a);return b.call(null,a)}function Ja(a){if(a?a.Ib:a)return a.Ib();var b;b=Ja[s(null==a?null:a)];if(!b&&(b=Ja._,!b))throw A("IMapEntry.-val",a);return b.call(null,a)}var Ka={};function La(a,b){if(a?a.Kb:a)return a.Kb(0,b);var c;c=La[s(null==a?null:a)];if(!c&&(c=La._,!c))throw A("ISet.-disjoin",a);return c.call(null,a,b)}var Ma={};
function Na(a,b,c){if(a?a.vb:a)return a.vb(a,b,c);var d;d=Na[s(null==a?null:a)];if(!d&&(d=Na._,!d))throw A("IVector.-assoc-n",a);return d.call(null,a,b,c)}function H(a){if(a?a.Ua:a)return a.Ua(a);var b;b=H[s(null==a?null:a)];if(!b&&(b=H._,!b))throw A("IDeref.-deref",a);return b.call(null,a)}var Oa={};function Pa(a){if(a?a.F:a)return a.F(a);var b;b=Pa[s(null==a?null:a)];if(!b&&(b=Pa._,!b))throw A("IMeta.-meta",a);return b.call(null,a)}var Qa={};
function Ra(a,b){if(a?a.G:a)return a.G(a,b);var c;c=Ra[s(null==a?null:a)];if(!c&&(c=Ra._,!c))throw A("IWithMeta.-with-meta",a);return c.call(null,a,b)}
var Sa={},Ta=function(){function a(a,b,c){if(a?a.X:a)return a.X(a,b,c);var g;g=Ta[s(null==a?null:a)];if(!g&&(g=Ta._,!g))throw A("IReduce.-reduce",a);return g.call(null,a,b,c)}function b(a,b){if(a?a.W:a)return a.W(a,b);var c;c=Ta[s(null==a?null:a)];if(!c&&(c=Ta._,!c))throw A("IReduce.-reduce",a);return c.call(null,a,b)}var c=null,c=function(d,c,f){switch(arguments.length){case 2:return b.call(this,d,c);case 3:return a.call(this,d,c,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}();
function Ua(a,b){if(a?a.J:a)return a.J(a,b);var c;c=Ua[s(null==a?null:a)];if(!c&&(c=Ua._,!c))throw A("IEquiv.-equiv",a);return c.call(null,a,b)}function Va(a){if(a?a.Q:a)return a.Q(a);var b;b=Va[s(null==a?null:a)];if(!b&&(b=Va._,!b))throw A("IHash.-hash",a);return b.call(null,a)}var Wa={};function Xa(a){if(a?a.O:a)return a.O(a);var b;b=Xa[s(null==a?null:a)];if(!b&&(b=Xa._,!b))throw A("ISeqable.-seq",a);return b.call(null,a)}var Ya={};
function I(a,b){if(a?a.Pb:a)return a.Pb(0,b);var c;c=I[s(null==a?null:a)];if(!c&&(c=I._,!c))throw A("IWriter.-write",a);return c.call(null,a,b)}var $a={};function ab(a,b,c){if(a?a.H:a)return a.H(a,b,c);var d;d=ab[s(null==a?null:a)];if(!d&&(d=ab._,!d))throw A("IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)}function bb(a,b,c){if(a?a.Nb:a)return a.Nb(0,b,c);var d;d=bb[s(null==a?null:a)];if(!d&&(d=bb._,!d))throw A("IWatchable.-notify-watches",a);return d.call(null,a,b,c)}
function cb(a,b,c){if(a?a.Mb:a)return a.Mb(0,b,c);var d;d=cb[s(null==a?null:a)];if(!d&&(d=cb._,!d))throw A("IWatchable.-add-watch",a);return d.call(null,a,b,c)}function db(a,b){if(a?a.Ob:a)return a.Ob(0,b);var c;c=db[s(null==a?null:a)];if(!c&&(c=db._,!c))throw A("IWatchable.-remove-watch",a);return c.call(null,a,b)}function eb(a){if(a?a.$a:a)return a.$a(a);var b;b=eb[s(null==a?null:a)];if(!b&&(b=eb._,!b))throw A("IEditableCollection.-as-transient",a);return b.call(null,a)}
function fb(a,b){if(a?a.cb:a)return a.cb(a,b);var c;c=fb[s(null==a?null:a)];if(!c&&(c=fb._,!c))throw A("ITransientCollection.-conj!",a);return c.call(null,a,b)}function gb(a){if(a?a.eb:a)return a.eb(a);var b;b=gb[s(null==a?null:a)];if(!b&&(b=gb._,!b))throw A("ITransientCollection.-persistent!",a);return b.call(null,a)}function hb(a,b,c){if(a?a.bb:a)return a.bb(a,b,c);var d;d=hb[s(null==a?null:a)];if(!d&&(d=hb._,!d))throw A("ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)}
function ib(a,b,c){if(a?a.Lb:a)return a.Lb(0,b,c);var d;d=ib[s(null==a?null:a)];if(!d&&(d=ib._,!d))throw A("ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)}function jb(a){if(a?a.Fb:a)return a.Fb();var b;b=jb[s(null==a?null:a)];if(!b&&(b=jb._,!b))throw A("IChunk.-drop-first",a);return b.call(null,a)}function kb(a){if(a?a.sb:a)return a.sb(a);var b;b=kb[s(null==a?null:a)];if(!b&&(b=kb._,!b))throw A("IChunkedSeq.-chunked-first",a);return b.call(null,a)}
function lb(a){if(a?a.tb:a)return a.tb(a);var b;b=lb[s(null==a?null:a)];if(!b&&(b=lb._,!b))throw A("IChunkedSeq.-chunked-rest",a);return b.call(null,a)}function mb(a){if(a?a.rb:a)return a.rb(a);var b;b=mb[s(null==a?null:a)];if(!b&&(b=mb._,!b))throw A("IChunkedNext.-chunked-next",a);return b.call(null,a)}function nb(a){this.$c=a;this.w=0;this.k=1073741824}nb.prototype.Pb=function(a,b){return this.$c.append(b)};function ob(a){var b=new ea;a.H(null,new nb(b),ga());return""+B.e(b)}
var pb="undefined"!==typeof Math.imul&&0!==(Math.imul.c?Math.imul.c(4294967295,5):Math.imul.call(null,4294967295,5))?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function qb(a){a=pb(a,3432918353);return pb(a<<15|a>>>-15,461845907)}function rb(a,b){var c=a^b;return pb(c<<13|c>>>-13,5)+3864292196}function sb(a,b){var c=a^b,c=pb(c^c>>>16,2246822507),c=pb(c^c>>>13,3266489909);return c^c>>>16}var tb={},ub=0;
function vb(a){255<ub&&(tb={},ub=0);var b=tb[a];if("number"!==typeof b){a:if(null!=a)if(b=a.length,0<b){for(var c=0,d=0;;)if(c<b)var e=c+1,d=pb(31,d)+a.charCodeAt(c),c=e;else{b=d;break a}b=void 0}else b=0;else b=0;tb[a]=b;ub+=1}return a=b}function wb(a){a&&(a.k&4194304||a.jd)?a=a.Q(null):"number"===typeof a?a=Math.floor(a)%2147483647:!0===a?a=1:!1===a?a=0:"string"===typeof a?(a=vb(a),0!==a&&(a=qb(a),a=rb(0,a),a=sb(a,4))):a=null==a?0:z?Va(a):null;return a}
function xb(a){var b;b=a.name;var c;a:{c=1;for(var d=0;;)if(c<b.length){var e=c+2,d=rb(d,qb(b.charCodeAt(c-1)|b.charCodeAt(c)<<16));c=e}else{c=d;break a}c=void 0}c=1===(b.length&1)?c^qb(b.charCodeAt(b.length-1)):c;b=sb(c,pb(2,b.length));a=vb(a.ka);return b^a+2654435769+(b<<6)+(b>>2)}
function yb(a,b){if(x(zb.c?zb.c(a,b):zb.call(null,a,b)))return 0;var c=ma(a.ka);if(x(c?b.ka:c))return-1;if(x(a.ka)){if(ma(b.ka))return 1;c=Ab.c?Ab.c(a.ka,b.ka):Ab.call(null,a.ka,b.ka);return 0===c?Ab.c?Ab.c(a.name,b.name):Ab.call(null,a.name,b.name):c}return Bb?Ab.c?Ab.c(a.name,b.name):Ab.call(null,a.name,b.name):null}function K(a,b,c,d,e){this.ka=a;this.name=b;this.Pa=c;this.Ta=d;this.la=e;this.k=2154168321;this.w=4096}h=K.prototype;h.H=function(a,b){return I(b,this.Pa)};
h.Q=function(){var a=this.Ta;return null!=a?a:this.Ta=a=xb(this)};h.G=function(a,b){return new K(this.ka,this.name,this.Pa,this.Ta,b)};h.F=function(){return this.la};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return F.f(c,this,null);case 3:return F.f(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return F.f(a,this,null)};
h.c=function(a,b){return F.f(a,this,b)};h.J=function(a,b){return b instanceof K?this.Pa===b.Pa:!1};h.toString=function(){return this.Pa};var Cb=function(){function a(a,b){var c=null!=a?""+B.e(a)+"/"+B.e(b):b;return new K(a,b,c,null,null)}function b(a){return a instanceof K?a:c.c(null,a)}var c=null,c=function(d,c){switch(arguments.length){case 1:return b.call(this,d);case 2:return a.call(this,d,c)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.c=a;return c}();
function L(a){if(null==a)return null;if(a&&(a.k&8388608||a.ld))return a.O(null);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new Db(a,0);if(y(Wa,a))return Xa(a);if(z)throw Error(""+B.e(a)+" is not ISeqable");return null}function M(a){if(null==a)return null;if(a&&(a.k&64||a.ab))return a.ca(null);a=L(a);return null==a?null:D(a)}function N(a){return null!=a?a&&(a.k&64||a.ab)?a.da(null):(a=L(a))?E(a):O:O}function P(a){return null==a?null:a&&(a.k&128||a.Jb)?a.ha(null):L(N(a))}
var zb=function(){function a(a,b){return null==a?null==b:a===b||Ua(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=Q(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;)if(b.c(a,d))if(P(e))a=d,d=M(e),e=P(e);else return b.c(d,M(e));else return!1}a.A=2;a.o=function(a){var b=M(a);a=P(a);var d=M(a);a=N(a);return c(b,d,a)};a.l=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return!0;case 2:return a.call(this,b,
e);default:return c.l(b,e,Q(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.A=2;b.o=c.o;b.e=function(){return!0};b.c=a;b.l=c.l;return b}();function Eb(a,b){var c=qb(a),c=rb(0,c);return sb(c,b)}function Fb(a){var b=0,c=1;for(a=L(a);;)if(null!=a)b+=1,c=pb(31,c)+wb(M(a))|0,a=P(a);else return Eb(c,b)}function Gb(a){var b=0,c=0;for(a=L(a);;)if(null!=a)b+=1,c=c+wb(M(a))|0,a=P(a);else return Eb(c,b)}ua["null"]=!0;va["null"]=function(){return 0};Date.prototype.pc=!0;
Date.prototype.J=function(a,b){return b instanceof Date&&this.toString()===b.toString()};Ua.number=function(a,b){return a===b};Oa["function"]=!0;Pa["function"]=function(){return null};ra["function"]=!0;Va._=function(a){return aa(a)};function Hb(a){return a+1}
var Ib=function(){function a(a,b,d,c){for(var l=va(a);;)if(c<l)d=b.c?b.c(d,C.c(a,c)):b.call(null,d,C.c(a,c)),c+=1;else return d}function b(a,b,d){for(var c=va(a),l=0;;)if(l<c)d=b.c?b.c(d,C.c(a,l)):b.call(null,d,C.c(a,l)),l+=1;else return d}function c(a,b){var d=va(a);if(0===d)return b.v?b.v():b.call(null);for(var c=C.c(a,0),l=1;;)if(l<d)c=b.c?b.c(c,C.c(a,l)):b.call(null,c,C.c(a,l)),l+=1;else return c}var d=null,d=function(d,f,g,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,
d,f,g);case 4:return a.call(this,d,f,g,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.f=b;d.n=a;return d}(),Jb=function(){function a(a,b,d,c){for(var l=a.length;;)if(c<l)d=b.c?b.c(d,a[c]):b.call(null,d,a[c]),c+=1;else return d}function b(a,b,d){for(var c=a.length,l=0;;)if(l<c)d=b.c?b.c(d,a[l]):b.call(null,d,a[l]),l+=1;else return d}function c(a,b){var d=a.length;if(0===a.length)return b.v?b.v():b.call(null);for(var c=a[0],l=1;;)if(l<d)c=b.c?b.c(c,a[l]):b.call(null,c,a[l]),l+=1;else return c}
var d=null,d=function(d,f,g,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,g);case 4:return a.call(this,d,f,g,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.f=b;d.n=a;return d}();function Kb(a){return a?a.k&2||a.mc?!0:a.k?!1:y(ua,a):y(ua,a)}function Lb(a){return a?a.k&16||a.Gb?!0:a.k?!1:y(za,a):y(za,a)}function Db(a,b){this.h=a;this.i=b;this.k=166199550;this.w=8192}h=Db.prototype;h.toString=function(){return ob(this)};
h.R=function(a,b){var c=b+this.i;return c<this.h.length?this.h[c]:null};h.ga=function(a,b,c){a=b+this.i;return a<this.h.length?this.h[a]:c};h.fa=function(){return new Db(this.h,this.i)};h.ha=function(){return this.i+1<this.h.length?new Db(this.h,this.i+1):null};h.T=function(){return this.h.length-this.i};h.Q=function(){return Fb(this)};h.J=function(a,b){return Mb.c?Mb.c(this,b):Mb.call(null,this,b)};h.U=function(){return O};h.W=function(a,b){return Jb.n(this.h,b,this.h[this.i],this.i+1)};
h.X=function(a,b,c){return Jb.n(this.h,b,c,this.i)};h.ca=function(){return this.h[this.i]};h.da=function(){return this.i+1<this.h.length?new Db(this.h,this.i+1):O};h.O=function(){return this};h.S=function(a,b){return S.c?S.c(b,this):S.call(null,b,this)};
var Nb=function(){function a(a,b){return b<a.length?new Db(a,b):null}function b(a){return c.c(a,0)}var c=null,c=function(d,c){switch(arguments.length){case 1:return b.call(this,d);case 2:return a.call(this,d,c)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.c=a;return c}(),Q=function(){function a(a,b){return Nb.c(a,b)}function b(a){return Nb.c(a,0)}var c=null,c=function(d,c){switch(arguments.length){case 1:return b.call(this,d);case 2:return a.call(this,d,c)}throw Error("Invalid arity: "+
arguments.length);};c.e=b;c.c=a;return c}();Ua._=function(a,b){return a===b};
var Ob=function(){function a(a,b){return null!=a?ya(a,b):ya(O,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=Q(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;)if(x(e))a=b.c(a,d),d=M(e),e=P(e);else return b.c(a,d)}a.A=2;a.o=function(a){var b=M(a);a=P(a);var d=M(a);a=N(a);return c(b,d,a)};a.l=c;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.l(b,e,Q(arguments,2))}throw Error("Invalid arity: "+
arguments.length);};b.A=2;b.o=c.o;b.c=a;b.l=c.l;return b}();function Pb(a){return null==a?null:wa(a)}function T(a){if(null!=a)if(a&&(a.k&2||a.mc))a=a.T(null);else if(a instanceof Array)a=a.length;else if("string"===typeof a)a=a.length;else if(y(ua,a))a=va(a);else if(z)a:{a=L(a);for(var b=0;;){if(Kb(a)){a=b+va(a);break a}a=P(a);b+=1}a=void 0}else a=null;else a=0;return a}
var Qb=function(){function a(a,b,c){for(;;){if(null==a)return c;if(0===b)return L(a)?M(a):c;if(Lb(a))return C.f(a,b,c);if(L(a))a=P(a),b-=1;else return z?c:null}}function b(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(L(a))return M(a);throw Error("Index out of bounds");}if(Lb(a))return C.c(a,b);if(L(a)){var c=P(a),g=b-1;a=c;b=g}else{if(z)throw Error("Index out of bounds");return null}}}var c=null,c=function(d,c,f){switch(arguments.length){case 2:return b.call(this,d,c);case 3:return a.call(this,
d,c,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}(),Rb=function(){function a(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return c;if(a&&(a.k&16||a.Gb))return a.ga(null,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(y(za,a))return C.c(a,b);if(a?a.k&64||a.ab||(a.k?0:y(Aa,a)):y(Aa,a))return Qb.f(a,b,c);if(z)throw Error("nth not supported on this type "+B.e(oa(na(a))));return null}function b(a,
b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(a&&(a.k&16||a.Gb))return a.R(null,b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(y(za,a))return C.c(a,b);if(a?a.k&64||a.ab||(a.k?0:y(Aa,a)):y(Aa,a))return Qb.c(a,b);if(z)throw Error("nth not supported on this type "+B.e(oa(na(a))));return null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+
arguments.length);};c.c=b;c.f=a;return c}(),U=function(){function a(a,b,c){return null!=a?a&&(a.k&256||a.Hb)?a.M(null,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:y(Ca,a)?F.f(a,b,c):z?c:null:c}function b(a,b){return null==a?null:a&&(a.k&256||a.Hb)?a.L(null,b):a instanceof Array?b<a.length?a[b]:null:"string"===typeof a?b<a.length?a[b]:null:y(Ca,a)?F.c(a,b):null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}(),V=function(){function a(a,b,c){return null!=a?Ea(a,b,c):Sb.c?Sb.c([b],[c]):Sb.call(null,[b],[c])}var b=null,c=function(){function a(b,d,k,l){var m=null;3<arguments.length&&(m=Q(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,k,m)}function c(a,d,e,l){for(;;)if(a=b.f(a,d,e),x(l))d=M(l),e=M(P(l)),l=P(P(l));else return a}a.A=3;a.o=function(a){var b=M(a);a=P(a);var d=M(a);a=P(a);var l=M(a);a=N(a);return c(b,
d,l,a)};a.l=c;return a}(),b=function(b,e,f,g){switch(arguments.length){case 3:return a.call(this,b,e,f);default:return c.l(b,e,f,Q(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.A=3;b.o=c.o;b.f=a;b.l=c.l;return b}(),Tb=function(){function a(a,b){return null==a?null:Ga(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=Q(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);
if(x(e))d=M(e),e=P(e);else return a}}a.A=2;a.o=function(a){var b=M(a);a=P(a);var d=M(a);a=N(a);return c(b,d,a)};a.l=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.l(b,e,Q(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.A=2;b.o=c.o;b.e=function(a){return a};b.c=a;b.l=c.l;return b}();function Ub(a){var b="function"==s(a);return b?b:a?x(x(null)?null:a.lc)?!0:a.Y?!1:y(ra,a):y(ra,a)}
function Vb(a,b){this.j=a;this.meta=b;this.w=0;this.k=393217}h=Vb.prototype;
h.call=function(){var a=null;return a=function(a,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa,Za,bc){switch(arguments.length){case 1:var r=a,r=this;return r.j.v?r.j.v():r.j.call(null);case 2:return r=a,r=this,r.j.e?r.j.e(c):r.j.call(null,c);case 3:return r=a,r=this,r.j.c?r.j.c(c,d):r.j.call(null,c,d);case 4:return r=a,r=this,r.j.f?r.j.f(c,d,e):r.j.call(null,c,d,e);case 5:return r=a,r=this,r.j.n?r.j.n(c,d,e,f):r.j.call(null,c,d,e,f);case 6:return r=a,r=this,r.j.K?r.j.K(c,d,e,f,g):r.j.call(null,c,d,e,f,g);
case 7:return r=a,r=this,r.j.ba?r.j.ba(c,d,e,f,g,k):r.j.call(null,c,d,e,f,g,k);case 8:return r=a,r=this,r.j.ma?r.j.ma(c,d,e,f,g,k,l):r.j.call(null,c,d,e,f,g,k,l);case 9:return r=a,r=this,r.j.Ha?r.j.Ha(c,d,e,f,g,k,l,m):r.j.call(null,c,d,e,f,g,k,l,m);case 10:return r=a,r=this,r.j.Ia?r.j.Ia(c,d,e,f,g,k,l,m,p):r.j.call(null,c,d,e,f,g,k,l,m,p);case 11:return r=a,r=this,r.j.wa?r.j.wa(c,d,e,f,g,k,l,m,p,n):r.j.call(null,c,d,e,f,g,k,l,m,p,n);case 12:return r=a,r=this,r.j.xa?r.j.xa(c,d,e,f,g,k,l,m,p,n,q):r.j.call(null,
c,d,e,f,g,k,l,m,p,n,q);case 13:return r=a,r=this,r.j.ya?r.j.ya(c,d,e,f,g,k,l,m,p,n,q,t):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t);case 14:return r=a,r=this,r.j.za?r.j.za(c,d,e,f,g,k,l,m,p,n,q,t,v):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v);case 15:return r=a,r=this,r.j.Aa?r.j.Aa(c,d,e,f,g,k,l,m,p,n,q,t,v,w):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w);case 16:return r=a,r=this,r.j.Ba?r.j.Ba(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G);case 17:return r=a,r=this,r.j.Ca?r.j.Ca(c,
d,e,f,g,k,l,m,p,n,q,t,v,w,G,J):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J);case 18:return r=a,r=this,r.j.Da?r.j.Da(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R);case 19:return r=a,r=this,r.j.Ea?r.j.Ea(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X);case 20:return r=a,r=this,r.j.Fa?r.j.Fa(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa);case 21:return r=a,r=this,r.j.Ga?r.j.Ga(c,
d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa,Za):r.j.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa,Za);case 22:return r=a,r=this,Wb.qc?Wb.qc(r.j,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa,Za,bc):Wb.call(null,r.j,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa,Za,bc)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.v=function(){return this.j.v?this.j.v():this.j.call(null)};h.e=function(a){return this.j.e?this.j.e(a):this.j.call(null,a)};
h.c=function(a,b){return this.j.c?this.j.c(a,b):this.j.call(null,a,b)};h.f=function(a,b,c){return this.j.f?this.j.f(a,b,c):this.j.call(null,a,b,c)};h.n=function(a,b,c,d){return this.j.n?this.j.n(a,b,c,d):this.j.call(null,a,b,c,d)};h.K=function(a,b,c,d,e){return this.j.K?this.j.K(a,b,c,d,e):this.j.call(null,a,b,c,d,e)};h.ba=function(a,b,c,d,e,f){return this.j.ba?this.j.ba(a,b,c,d,e,f):this.j.call(null,a,b,c,d,e,f)};
h.ma=function(a,b,c,d,e,f,g){return this.j.ma?this.j.ma(a,b,c,d,e,f,g):this.j.call(null,a,b,c,d,e,f,g)};h.Ha=function(a,b,c,d,e,f,g,k){return this.j.Ha?this.j.Ha(a,b,c,d,e,f,g,k):this.j.call(null,a,b,c,d,e,f,g,k)};h.Ia=function(a,b,c,d,e,f,g,k,l){return this.j.Ia?this.j.Ia(a,b,c,d,e,f,g,k,l):this.j.call(null,a,b,c,d,e,f,g,k,l)};h.wa=function(a,b,c,d,e,f,g,k,l,m){return this.j.wa?this.j.wa(a,b,c,d,e,f,g,k,l,m):this.j.call(null,a,b,c,d,e,f,g,k,l,m)};
h.xa=function(a,b,c,d,e,f,g,k,l,m,p){return this.j.xa?this.j.xa(a,b,c,d,e,f,g,k,l,m,p):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p)};h.ya=function(a,b,c,d,e,f,g,k,l,m,p,n){return this.j.ya?this.j.ya(a,b,c,d,e,f,g,k,l,m,p,n):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n)};h.za=function(a,b,c,d,e,f,g,k,l,m,p,n,q){return this.j.za?this.j.za(a,b,c,d,e,f,g,k,l,m,p,n,q):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n,q)};
h.Aa=function(a,b,c,d,e,f,g,k,l,m,p,n,q,t){return this.j.Aa?this.j.Aa(a,b,c,d,e,f,g,k,l,m,p,n,q,t):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n,q,t)};h.Ba=function(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v){return this.j.Ba?this.j.Ba(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n,q,t,v)};h.Ca=function(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w){return this.j.Ca?this.j.Ca(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w)};
h.Da=function(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G){return this.j.Da?this.j.Da(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G)};h.Ea=function(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J){return this.j.Ea?this.j.Ea(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J)};
h.Fa=function(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R){return this.j.Fa?this.j.Fa(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R)};h.Ga=function(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X){return this.j.Ga?this.j.Ga(a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X):this.j.call(null,a,b,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X)};h.lc=!0;h.G=function(a,b){return new Vb(this.j,b)};h.F=function(){return this.meta};
function Xb(a,b){return Ub(a)&&!(a?a.k&262144||a.pd||(a.k?0:y(Qa,a)):y(Qa,a))?new Vb(a,b):null==a?null:Ra(a,b)}function Yb(a){var b=null!=a;return(b?a?a.k&131072||a.sc||(a.k?0:y(Oa,a)):y(Oa,a):b)?Pa(a):null}
var Zb=function(){function a(a,b){return null==a?null:La(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=Q(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);if(x(e))d=M(e),e=P(e);else return a}}a.A=2;a.o=function(a){var b=M(a);a=P(a);var d=M(a);a=N(a);return c(b,d,a)};a.l=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.l(b,
e,Q(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.A=2;b.o=c.o;b.e=function(a){return a};b.c=a;b.l=c.l;return b}();function $b(a){return null==a||ma(L(a))}function ac(a){return null==a?!1:a?a.k&4096||a.nd?!0:a.k?!1:y(Ka,a):y(Ka,a)}function cc(a){return a?a.k&16777216||a.md?!0:a.k?!1:y(Ya,a):y(Ya,a)}function dc(a){return null==a?!1:a?a.k&1024||a.kd?!0:a.k?!1:y(Fa,a):y(Fa,a)}function ec(a){return a?a.k&16384||a.od?!0:a.k?!1:y(Ma,a):y(Ma,a)}
function fc(a){return a?a.w&512||a.cd?!0:!1:!1}function gc(a){var b=[];da(a,function(a){return function(b,e){return a.push(e)}}(b));return b}function hc(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,e-=1,b+=1}var ic={};function jc(a){return null==a?!1:a?a.k&64||a.ab?!0:a.k?!1:y(Aa,a):y(Aa,a)}function kc(a){return x(a)?!0:!1}function lc(a,b){return U.f(a,b,ic)===ic?!1:!0}
function Ab(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(na(a)===na(b))return a&&(a.w&2048||a.jb)?a.kb(null,b):a>b?1:a<b?-1:0;if(z)throw Error("compare on non-nil objects of different types");return null}
var mc=function(){function a(a,b,c,g){for(;;){var k=Ab(Rb.c(a,g),Rb.c(b,g));if(0===k&&g+1<c)g+=1;else return k}}function b(a,b){var f=T(a),g=T(b);return f<g?-1:f>g?1:z?c.n(a,b,f,0):null}var c=null,c=function(c,e,f,g){switch(arguments.length){case 2:return b.call(this,c,e);case 4:return a.call(this,c,e,f,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.n=a;return c}(),oc=function(){function a(a,b,c){for(c=L(c);;)if(c)b=a.c?a.c(b,M(c)):a.call(null,b,M(c)),c=P(c);else return b}function b(a,
b){var c=L(b);return c?nc.f?nc.f(a,M(c),P(c)):nc.call(null,a,M(c),P(c)):a.v?a.v():a.call(null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}(),nc=function(){function a(a,b,c){return c&&(c.k&524288||c.uc)?c.X(null,a,b):c instanceof Array?Jb.f(c,a,b):"string"===typeof c?Jb.f(c,a,b):y(Sa,c)?Ta.f(c,a,b):z?oc.f(a,b,c):null}function b(a,b){return b&&(b.k&524288||
b.uc)?b.W(null,a):b instanceof Array?Jb.c(b,a):"string"===typeof b?Jb.c(b,a):y(Sa,b)?Ta.c(b,a):z?oc.c(a,b):null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}();function pc(a){a=(a-a%2)/2;return 0<=a?Math.floor.e?Math.floor.e(a):Math.floor.call(null,a):Math.ceil.e?Math.ceil.e(a):Math.ceil.call(null,a)}
function qc(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function rc(a){var b=1;for(a=L(a);;)if(a&&0<b)b-=1,a=P(a);else return a}
var B=function(){function a(a){return null==a?"":a.toString()}var b=null,c=function(){function a(b,d){var k=null;1<arguments.length&&(k=Q(Array.prototype.slice.call(arguments,1),0));return c.call(this,b,k)}function c(a,d){for(var e=new ea(b.e(a)),l=d;;)if(x(l))e=e.append(b.e(M(l))),l=P(l);else return e.toString()}a.A=1;a.o=function(a){var b=M(a);a=N(a);return c(b,a)};a.l=c;return a}(),b=function(b,e){switch(arguments.length){case 0:return"";case 1:return a.call(this,b);default:return c.l(b,Q(arguments,
1))}throw Error("Invalid arity: "+arguments.length);};b.A=1;b.o=c.o;b.v=function(){return""};b.e=a;b.l=c.l;return b}();function Mb(a,b){return kc(cc(b)?function(){for(var c=L(a),d=L(b);;){if(null==c)return null==d;if(null==d)return!1;if(zb.c(M(c),M(d)))c=P(c),d=P(d);else return z?!1:null}}():null)}function sc(a,b,c,d,e){this.meta=a;this.first=b;this.qa=c;this.count=d;this.t=e;this.k=65937646;this.w=8192}h=sc.prototype;h.toString=function(){return ob(this)};h.F=function(){return this.meta};
h.fa=function(){return new sc(this.meta,this.first,this.qa,this.count,this.t)};h.ha=function(){return 1===this.count?null:this.qa};h.T=function(){return this.count};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return O};h.W=function(a,b){return oc.c(b,this)};h.X=function(a,b,c){return oc.f(b,c,this)};h.ca=function(){return this.first};h.da=function(){return 1===this.count?O:this.qa};h.O=function(){return this};
h.G=function(a,b){return new sc(b,this.first,this.qa,this.count,this.t)};h.S=function(a,b){return new sc(this.meta,b,this,this.count+1,null)};function tc(a){this.meta=a;this.k=65937614;this.w=8192}h=tc.prototype;h.toString=function(){return ob(this)};h.F=function(){return this.meta};h.fa=function(){return new tc(this.meta)};h.ha=function(){return null};h.T=function(){return 0};h.Q=function(){return 0};h.J=function(a,b){return Mb(this,b)};h.U=function(){return this};
h.W=function(a,b){return oc.c(b,this)};h.X=function(a,b,c){return oc.f(b,c,this)};h.ca=function(){return null};h.da=function(){return O};h.O=function(){return null};h.G=function(a,b){return new tc(b)};h.S=function(a,b){return new sc(this.meta,b,null,1,null)};
var O=new tc(null),uc=function(){function a(a){var d=null;0<arguments.length&&(d=Q(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(a instanceof Db&&0===a.i)b=a.h;else a:{for(b=[];;)if(null!=a)b.push(a.ca(null)),a=a.ha(null);else break a;b=void 0}a=b.length;for(var e=O;;)if(0<a){var f=a-1,e=e.S(null,b[a-1]);a=f}else return e}a.A=0;a.o=function(a){a=L(a);return b(a)};a.l=b;return a}();
function wc(a,b,c,d){this.meta=a;this.first=b;this.qa=c;this.t=d;this.k=65929452;this.w=8192}h=wc.prototype;h.toString=function(){return ob(this)};h.F=function(){return this.meta};h.fa=function(){return new wc(this.meta,this.first,this.qa,this.t)};h.ha=function(){return null==this.qa?null:L(this.qa)};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return Xb(O,this.meta)};h.W=function(a,b){return oc.c(b,this)};
h.X=function(a,b,c){return oc.f(b,c,this)};h.ca=function(){return this.first};h.da=function(){return null==this.qa?O:this.qa};h.O=function(){return this};h.G=function(a,b){return new wc(b,this.first,this.qa,this.t)};h.S=function(a,b){return new wc(null,b,this,this.t)};function S(a,b){var c=null==b;return(c?c:b&&(b.k&64||b.ab))?new wc(null,a,b,null):new wc(null,a,L(b),null)}function W(a,b,c,d){this.ka=a;this.name=b;this.La=c;this.Ta=d;this.k=2153775105;this.w=4096}h=W.prototype;
h.H=function(a,b){return I(b,":"+B.e(this.La))};h.Q=function(){var a=this.Ta;return null!=a?a:this.Ta=a=xb(this)+2654435769};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return U.c(c,this);case 3:return U.f(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return U.c(a,this)};h.c=function(a,b){return U.f(a,this,b)};
h.J=function(a,b){return b instanceof W?this.La===b.La:!1};h.toString=function(){return":"+B.e(this.La)};function xc(a,b){return a===b?!0:a instanceof W&&b instanceof W?a.La===b.La:!1}
var zc=function(){function a(a,b){return new W(a,b,""+B.e(x(a)?""+B.e(a)+"/":null)+B.e(b),null)}function b(a){if(a instanceof W)return a;if(a instanceof K){var b;if(a&&(a.w&4096||a.tc))b=a.ka;else throw Error("Doesn't support namespace: "+B.e(a));return new W(b,yc.e?yc.e(a):yc.call(null,a),a.Pa,null)}return"string"===typeof a?(b=a.split("/"),2===b.length?new W(b[0],b[1],a,null):new W(null,b[0],a,null)):null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,
c,e)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.c=a;return c}();function Ac(a,b,c,d){this.meta=a;this.fn=b;this.s=c;this.t=d;this.w=0;this.k=32374988}h=Ac.prototype;h.toString=function(){return ob(this)};function Bc(a){null!=a.fn&&(a.s=a.fn.v?a.fn.v():a.fn.call(null),a.fn=null);return a.s}h.F=function(){return this.meta};h.ha=function(){Xa(this);return null==this.s?null:P(this.s)};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};
h.U=function(){return Xb(O,this.meta)};h.W=function(a,b){return oc.c(b,this)};h.X=function(a,b,c){return oc.f(b,c,this)};h.ca=function(){Xa(this);return null==this.s?null:M(this.s)};h.da=function(){Xa(this);return null!=this.s?N(this.s):O};h.O=function(){Bc(this);if(null==this.s)return null;for(var a=this.s;;)if(a instanceof Ac)a=Bc(a);else return this.s=a,L(this.s)};h.G=function(a,b){return new Ac(b,this.fn,this.s,this.t)};h.S=function(a,b){return S(b,this)};
function Cc(a,b){this.aa=a;this.end=b;this.w=0;this.k=2}Cc.prototype.T=function(){return this.end};Cc.prototype.add=function(a){this.aa[this.end]=a;return this.end+=1};Cc.prototype.ta=function(){var a=new Dc(this.aa,0,this.end);this.aa=null;return a};function Dc(a,b,c){this.h=a;this.off=b;this.end=c;this.w=0;this.k=524306}h=Dc.prototype;h.W=function(a,b){return Jb.n(this.h,b,this.h[this.off],this.off+1)};h.X=function(a,b,c){return Jb.n(this.h,b,c,this.off)};
h.Fb=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new Dc(this.h,this.off+1,this.end)};h.R=function(a,b){return this.h[this.off+b]};h.ga=function(a,b,c){return 0<=b&&b<this.end-this.off?this.h[this.off+b]:c};h.T=function(){return this.end-this.off};
var Ec=function(){function a(a,b,c){return new Dc(a,b,c)}function b(a,b){return new Dc(a,b,a.length)}function c(a){return new Dc(a,0,a.length)}var d=null,d=function(d,f,g){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,f);case 3:return a.call(this,d,f,g)}throw Error("Invalid arity: "+arguments.length);};d.e=c;d.c=b;d.f=a;return d}();function Fc(a,b,c,d){this.ta=a;this.sa=b;this.meta=c;this.t=d;this.k=31850732;this.w=1536}h=Fc.prototype;h.toString=function(){return ob(this)};
h.F=function(){return this.meta};h.ha=function(){if(1<va(this.ta))return new Fc(jb(this.ta),this.sa,this.meta,null);var a=Xa(this.sa);return null==a?null:a};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return Xb(O,this.meta)};h.ca=function(){return C.c(this.ta,0)};h.da=function(){return 1<va(this.ta)?new Fc(jb(this.ta),this.sa,this.meta,null):null==this.sa?O:this.sa};h.O=function(){return this};h.sb=function(){return this.ta};
h.tb=function(){return null==this.sa?O:this.sa};h.G=function(a,b){return new Fc(this.ta,this.sa,b,this.t)};h.S=function(a,b){return S(b,this)};h.rb=function(){return null==this.sa?null:this.sa};function Gc(a,b){return 0===va(a)?b:new Fc(a,b,null,null)}function Hc(a){for(var b=[];;)if(L(a))b.push(M(a)),a=P(a);else return b}function Ic(a,b){if(Kb(a))return T(a);for(var c=a,d=b,e=0;;)if(0<d&&L(c))c=P(c),d-=1,e+=1;else return e}
var Kc=function Jc(b){return null==b?null:null==P(b)?L(M(b)):z?S(M(b),Jc(P(b))):null},Lc=function(){function a(a,b){return new Ac(null,function(){var c=L(a);return c?fc(c)?Gc(kb(c),d.c(lb(c),b)):S(M(c),d.c(N(c),b)):b},null,null)}function b(a){return new Ac(null,function(){return a},null,null)}function c(){return new Ac(null,function(){return null},null,null)}var d=null,e=function(){function a(c,d,e){var f=null;2<arguments.length&&(f=Q(Array.prototype.slice.call(arguments,2),0));return b.call(this,
c,d,f)}function b(a,c,e){return function n(a,b){return new Ac(null,function(){var c=L(a);return c?fc(c)?Gc(kb(c),n(lb(c),b)):S(M(c),n(N(c),b)):x(b)?n(M(b),P(b)):null},null,null)}(d.c(a,c),e)}a.A=2;a.o=function(a){var c=M(a);a=P(a);var d=M(a);a=N(a);return b(c,d,a)};a.l=b;return a}(),d=function(d,g,k){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d);case 2:return a.call(this,d,g);default:return e.l(d,g,Q(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};d.A=2;d.o=e.o;d.v=c;d.e=b;d.c=a;d.l=e.l;return d}(),Mc=function(){function a(a,b,c,d){return S(a,S(b,S(c,d)))}function b(a,b,c){return S(a,S(b,c))}var c=null,d=function(){function a(c,d,e,m,p){var n=null;4<arguments.length&&(n=Q(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,m,n)}function b(a,c,d,e,f){return S(a,S(c,S(d,S(e,Kc(f)))))}a.A=4;a.o=function(a){var c=M(a);a=P(a);var d=M(a);a=P(a);var e=M(a);a=P(a);var p=M(a);a=N(a);return b(c,d,e,p,a)};a.l=b;return a}(),c=function(c,
f,g,k,l){switch(arguments.length){case 1:return L(c);case 2:return S(c,f);case 3:return b.call(this,c,f,g);case 4:return a.call(this,c,f,g,k);default:return d.l(c,f,g,k,Q(arguments,4))}throw Error("Invalid arity: "+arguments.length);};c.A=4;c.o=d.o;c.e=function(a){return L(a)};c.c=function(a,b){return S(a,b)};c.f=b;c.n=a;c.l=d.l;return c}(),Nc=function(){var a=null,b=function(){function a(c,f,g,k){var l=null;3<arguments.length&&(l=Q(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,
f,g,l)}function b(a,c,d,k){for(;;)if(a=hb(a,c,d),x(k))c=M(k),d=M(P(k)),k=P(P(k));else return a}a.A=3;a.o=function(a){var c=M(a);a=P(a);var g=M(a);a=P(a);var k=M(a);a=N(a);return b(c,g,k,a)};a.l=b;return a}(),a=function(a,d,e,f){switch(arguments.length){case 3:return hb(a,d,e);default:return b.l(a,d,e,Q(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.A=3;a.o=b.o;a.f=function(a,b,e){return hb(a,b,e)};a.l=b.l;return a}();
function Oc(a,b,c){var d=L(c);if(0===b)return a.v?a.v():a.call(null);c=D(d);var e=E(d);if(1===b)return a.e?a.e(c):a.e?a.e(c):a.call(null,c);var d=D(e),f=E(e);if(2===b)return a.c?a.c(c,d):a.c?a.c(c,d):a.call(null,c,d);var e=D(f),g=E(f);if(3===b)return a.f?a.f(c,d,e):a.f?a.f(c,d,e):a.call(null,c,d,e);var f=D(g),k=E(g);if(4===b)return a.n?a.n(c,d,e,f):a.n?a.n(c,d,e,f):a.call(null,c,d,e,f);var g=D(k),l=E(k);if(5===b)return a.K?a.K(c,d,e,f,g):a.K?a.K(c,d,e,f,g):a.call(null,c,d,e,f,g);var k=D(l),m=E(l);
if(6===b)return a.ba?a.ba(c,d,e,f,g,k):a.ba?a.ba(c,d,e,f,g,k):a.call(null,c,d,e,f,g,k);var l=D(m),p=E(m);if(7===b)return a.ma?a.ma(c,d,e,f,g,k,l):a.ma?a.ma(c,d,e,f,g,k,l):a.call(null,c,d,e,f,g,k,l);var m=D(p),n=E(p);if(8===b)return a.Ha?a.Ha(c,d,e,f,g,k,l,m):a.Ha?a.Ha(c,d,e,f,g,k,l,m):a.call(null,c,d,e,f,g,k,l,m);var p=D(n),q=E(n);if(9===b)return a.Ia?a.Ia(c,d,e,f,g,k,l,m,p):a.Ia?a.Ia(c,d,e,f,g,k,l,m,p):a.call(null,c,d,e,f,g,k,l,m,p);var n=D(q),t=E(q);if(10===b)return a.wa?a.wa(c,d,e,f,g,k,l,m,p,
n):a.wa?a.wa(c,d,e,f,g,k,l,m,p,n):a.call(null,c,d,e,f,g,k,l,m,p,n);var q=D(t),v=E(t);if(11===b)return a.xa?a.xa(c,d,e,f,g,k,l,m,p,n,q):a.xa?a.xa(c,d,e,f,g,k,l,m,p,n,q):a.call(null,c,d,e,f,g,k,l,m,p,n,q);var t=D(v),w=E(v);if(12===b)return a.ya?a.ya(c,d,e,f,g,k,l,m,p,n,q,t):a.ya?a.ya(c,d,e,f,g,k,l,m,p,n,q,t):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t);var v=D(w),G=E(w);if(13===b)return a.za?a.za(c,d,e,f,g,k,l,m,p,n,q,t,v):a.za?a.za(c,d,e,f,g,k,l,m,p,n,q,t,v):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v);var w=D(G),
J=E(G);if(14===b)return a.Aa?a.Aa(c,d,e,f,g,k,l,m,p,n,q,t,v,w):a.Aa?a.Aa(c,d,e,f,g,k,l,m,p,n,q,t,v,w):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w);var G=D(J),R=E(J);if(15===b)return a.Ba?a.Ba(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G):a.Ba?a.Ba(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G);var J=D(R),X=E(R);if(16===b)return a.Ca?a.Ca(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J):a.Ca?a.Ca(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J);var R=D(X),pa=E(X);if(17===b)return a.Da?
a.Da(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R):a.Da?a.Da(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R);var X=D(pa),Za=E(pa);if(18===b)return a.Ea?a.Ea(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X):a.Ea?a.Ea(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X);pa=D(Za);Za=E(Za);if(19===b)return a.Fa?a.Fa(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa):a.Fa?a.Fa(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa);var bc=
D(Za);E(Za);if(20===b)return a.Ga?a.Ga(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa,bc):a.Ga?a.Ga(c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa,bc):a.call(null,c,d,e,f,g,k,l,m,p,n,q,t,v,w,G,J,R,X,pa,bc);throw Error("Only up to 20 arguments supported on functions");}
var Wb=function(){function a(a,b,c,d,e){b=Mc.n(b,c,d,e);c=a.A;return a.o?(d=Ic(b,c+1),d<=c?Oc(a,d,b):a.o(b)):a.apply(a,Hc(b))}function b(a,b,c,d){b=Mc.f(b,c,d);c=a.A;return a.o?(d=Ic(b,c+1),d<=c?Oc(a,d,b):a.o(b)):a.apply(a,Hc(b))}function c(a,b,c){b=Mc.c(b,c);c=a.A;if(a.o){var d=Ic(b,c+1);return d<=c?Oc(a,d,b):a.o(b)}return a.apply(a,Hc(b))}function d(a,b){var c=a.A;if(a.o){var d=Ic(b,c+1);return d<=c?Oc(a,d,b):a.o(b)}return a.apply(a,Hc(b))}var e=null,f=function(){function a(c,d,e,f,g,t){var v=null;
5<arguments.length&&(v=Q(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,f,g,v)}function b(a,c,d,e,f,g){c=S(c,S(d,S(e,S(f,Kc(g)))));d=a.A;return a.o?(e=Ic(c,d+1),e<=d?Oc(a,e,c):a.o(c)):a.apply(a,Hc(c))}a.A=5;a.o=function(a){var c=M(a);a=P(a);var d=M(a);a=P(a);var e=M(a);a=P(a);var f=M(a);a=P(a);var g=M(a);a=N(a);return b(c,d,e,f,g,a)};a.l=b;return a}(),e=function(e,k,l,m,p,n){switch(arguments.length){case 2:return d.call(this,e,k);case 3:return c.call(this,e,k,l);case 4:return b.call(this,
e,k,l,m);case 5:return a.call(this,e,k,l,m,p);default:return f.l(e,k,l,m,p,Q(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.A=5;e.o=f.o;e.c=d;e.f=c;e.n=b;e.K=a;e.l=f.l;return e}(),Pc=function(){function a(a,b){return!zb.c(a,b)}var b=null,c=function(){function a(c,d,k){var l=null;2<arguments.length&&(l=Q(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,l)}function b(a,c,d){return ma(Wb.n(zb,a,c,d))}a.A=2;a.o=function(a){var c=M(a);a=P(a);var d=M(a);a=N(a);return b(c,
d,a)};a.l=b;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return!1;case 2:return a.call(this,b,e);default:return c.l(b,e,Q(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.A=2;b.o=c.o;b.e=function(){return!1};b.c=a;b.l=c.l;return b}();function Qc(a,b){for(;;){if(null==L(b))return!0;if(x(a.e?a.e(M(b)):a.call(null,M(b)))){var c=a,d=P(b);a=c;b=d}else return z?!1:null}}
function Rc(a){for(var b=Sc;;)if(L(a)){var c=b.e?b.e(M(a)):b.call(null,M(a));if(x(c))return c;a=P(a)}else return null}function Sc(a){return a}
var Tc=function(){function a(a,b,c,e){return new Ac(null,function(){var m=L(b),p=L(c),n=L(e);return m&&p&&n?S(a.f?a.f(M(m),M(p),M(n)):a.call(null,M(m),M(p),M(n)),d.n(a,N(m),N(p),N(n))):null},null,null)}function b(a,b,c){return new Ac(null,function(){var e=L(b),m=L(c);return e&&m?S(a.c?a.c(M(e),M(m)):a.call(null,M(e),M(m)),d.f(a,N(e),N(m))):null},null,null)}function c(a,b){return new Ac(null,function(){var c=L(b);if(c){if(fc(c)){for(var e=kb(c),m=T(e),p=new Cc(Array(m),0),n=0;;)if(n<m){var q=a.e?a.e(C.c(e,
n)):a.call(null,C.c(e,n));p.add(q);n+=1}else break;return Gc(p.ta(),d.c(a,lb(c)))}return S(a.e?a.e(M(c)):a.call(null,M(c)),d.c(a,N(c)))}return null},null,null)}var d=null,e=function(){function a(c,d,e,f,n){var q=null;4<arguments.length&&(q=Q(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,f,q)}function b(a,c,e,f,g){var q=function v(a){return new Ac(null,function(){var b=d.c(L,a);return Qc(Sc,b)?S(d.c(M,b),v(d.c(N,b))):null},null,null)};return d.c(function(){return function(b){return Wb.c(a,
b)}}(q),q(Ob.l(g,f,Q([e,c],0))))}a.A=4;a.o=function(a){var c=M(a);a=P(a);var d=M(a);a=P(a);var e=M(a);a=P(a);var f=M(a);a=N(a);return b(c,d,e,f,a)};a.l=b;return a}(),d=function(d,g,k,l,m){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,k);case 4:return a.call(this,d,g,k,l);default:return e.l(d,g,k,l,Q(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.A=4;d.o=e.o;d.c=c;d.f=b;d.n=a;d.l=e.l;return d}(),Vc=function Uc(b,c){return new Ac(null,function(){if(0<
b){var d=L(c);return d?S(M(d),Uc(b-1,N(d))):null}return null},null,null)};function Wc(a){return new Ac(null,function(b){return function(){return b(1,a)}}(function(a,c){for(;;){var d=L(c);if(0<a&&d){var e=a-1,d=N(d);a=e;c=d}else return d}}),null,null)}
var Xc=function(){function a(a,b){return Vc(a,c.e(b))}function b(a){return new Ac(null,function(){return S(a,c.e(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.c=a;return c}(),Yc=function(){function a(a,c){return new Ac(null,function(){var f=L(a),g=L(c);return f&&g?S(M(f),S(M(g),b.c(N(f),N(g)))):null},null,null)}var b=null,c=function(){function a(b,d,k){var l=
null;2<arguments.length&&(l=Q(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){return new Ac(null,function(){var c=Tc.c(L,Ob.l(e,d,Q([a],0)));return Qc(Sc,c)?Lc.c(Tc.c(M,c),Wb.c(b,Tc.c(N,c))):null},null,null)}a.A=2;a.o=function(a){var b=M(a);a=P(a);var d=M(a);a=N(a);return c(b,d,a)};a.l=c;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.l(b,e,Q(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.A=2;b.o=c.o;b.c=a;b.l=c.l;return b}();function Zc(a){return Wc(Yc.c(Xc.e(", "),a))}function $c(a,b){var c;null!=a?a&&(a.w&4||a.hd)?(c=nc.f(fb,eb(a),b),c=gb(c)):c=nc.f(ya,a,b):c=nc.f(Ob,O,b);return c}
var ad=function(){function a(a,b,c){var g=ic;for(b=L(b);;)if(b){var k=a;if(k?k.k&256||k.Hb||(k.k?0:y(Ca,k)):y(Ca,k)){a=U.f(a,M(b),g);if(g===a)return c;b=P(b)}else return c}else return a}function b(a,b){return c.f(a,b,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}(),cd=function bd(b,c,d){var e=Rb.f(c,0,null);return(c=rc(c))?V.f(b,e,bd(U.c(b,e),c,d)):V.f(b,
e,d)},dd=function(){function a(a,b,c,d,f,n){var q=Rb.f(b,0,null);return(b=rc(b))?V.f(a,q,e.ba(U.c(a,q),b,c,d,f,n)):V.f(a,q,c.n?c.n(U.c(a,q),d,f,n):c.call(null,U.c(a,q),d,f,n))}function b(a,b,c,d,f){var n=Rb.f(b,0,null);return(b=rc(b))?V.f(a,n,e.K(U.c(a,n),b,c,d,f)):V.f(a,n,c.f?c.f(U.c(a,n),d,f):c.call(null,U.c(a,n),d,f))}function c(a,b,c,d){var f=Rb.f(b,0,null);return(b=rc(b))?V.f(a,f,e.n(U.c(a,f),b,c,d)):V.f(a,f,c.c?c.c(U.c(a,f),d):c.call(null,U.c(a,f),d))}function d(a,b,c){var d=Rb.f(b,0,null);
return(b=rc(b))?V.f(a,d,e.f(U.c(a,d),b,c)):V.f(a,d,c.e?c.e(U.c(a,d)):c.call(null,U.c(a,d)))}var e=null,f=function(){function a(c,d,e,f,g,t,v){var w=null;6<arguments.length&&(w=Q(Array.prototype.slice.call(arguments,6),0));return b.call(this,c,d,e,f,g,t,w)}function b(a,c,d,f,g,k,v){var w=Rb.f(c,0,null);return(c=rc(c))?V.f(a,w,Wb.l(e,U.c(a,w),c,d,f,Q([g,k,v],0))):V.f(a,w,Wb.l(d,U.c(a,w),f,g,k,Q([v],0)))}a.A=6;a.o=function(a){var c=M(a);a=P(a);var d=M(a);a=P(a);var e=M(a);a=P(a);var f=M(a);a=P(a);var g=
M(a);a=P(a);var v=M(a);a=N(a);return b(c,d,e,f,g,v,a)};a.l=b;return a}(),e=function(e,k,l,m,p,n,q){switch(arguments.length){case 3:return d.call(this,e,k,l);case 4:return c.call(this,e,k,l,m);case 5:return b.call(this,e,k,l,m,p);case 6:return a.call(this,e,k,l,m,p,n);default:return f.l(e,k,l,m,p,n,Q(arguments,6))}throw Error("Invalid arity: "+arguments.length);};e.A=6;e.o=f.o;e.f=d;e.n=c;e.K=b;e.ba=a;e.l=f.l;return e}();function ed(a,b){this.D=a;this.h=b}
function fd(a){return new ed(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function gd(a){a=a.m;return 32>a?0:a-1>>>5<<5}function hd(a,b,c){for(;;){if(0===b)return c;var d=fd(a);d.h[0]=c;c=d;b-=5}}var jd=function id(b,c,d,e){var f=new ed(d.D,qa(d.h)),g=b.m-1>>>c&31;5===c?f.h[g]=e:(d=d.h[g],b=null!=d?id(b,c-5,d,e):hd(null,c-5,e),f.h[g]=b);return f};
function kd(a,b){throw Error("No item "+B.e(a)+" in vector of length "+B.e(b));}function ld(a){var b=a.root;for(a=a.shift;;)if(0<a)a-=5,b=b.h[0];else return b.h}function md(a,b){if(b>=gd(a))return a.C;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.h[b>>>d&31],d=e;else return c.h}function nd(a,b){return 0<=b&&b<a.m?md(a,b):kd(b,a.m)}var pd=function od(b,c,d,e,f){var g=new ed(d.D,qa(d.h));if(0===c)g.h[e&31]=f;else{var k=e>>>c&31;b=od(b,c-5,d.h[k],e,f);g.h[k]=b}return g};
function Y(a,b,c,d,e,f){this.meta=a;this.m=b;this.shift=c;this.root=d;this.C=e;this.t=f;this.k=167668511;this.w=8196}h=Y.prototype;h.toString=function(){return ob(this)};h.L=function(a,b){return F.f(this,b,null)};h.M=function(a,b,c){return"number"===typeof b?C.f(this,b,c):c};h.R=function(a,b){return nd(this,b)[b&31]};h.ga=function(a,b,c){return 0<=b&&b<this.m?md(this,b)[b&31]:c};
h.vb=function(a,b,c){if(0<=b&&b<this.m)return gd(this)<=b?(a=qa(this.C),a[b&31]=c,new Y(this.meta,this.m,this.shift,this.root,a,null)):new Y(this.meta,this.m,this.shift,pd(this,this.shift,this.root,b,c),this.C,null);if(b===this.m)return ya(this,c);if(z)throw Error("Index "+B.e(b)+" out of bounds  [0,"+B.e(this.m)+"]");return null};h.F=function(){return this.meta};h.fa=function(){return new Y(this.meta,this.m,this.shift,this.root,this.C,this.t)};h.T=function(){return this.m};
h.ub=function(){return C.c(this,0)};h.Ib=function(){return C.c(this,1)};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};h.$a=function(){return new qd(this.m,this.shift,rd.e?rd.e(this.root):rd.call(null,this.root),sd.e?sd.e(this.C):sd.call(null,this.C))};h.U=function(){return Xb(td,this.meta)};h.W=function(a,b){return Ib.c(this,b)};h.X=function(a,b,c){return Ib.f(this,b,c)};
h.Qa=function(a,b,c){if("number"===typeof b)return Na(this,b,c);throw Error("Vector's key for assoc must be a number.");};h.O=function(){return 0===this.m?null:32>=this.m?new Db(this.C,0):z?ud.n?ud.n(this,ld(this),0,0):ud.call(null,this,ld(this),0,0):null};h.G=function(a,b){return new Y(b,this.m,this.shift,this.root,this.C,this.t)};
h.S=function(a,b){if(32>this.m-gd(this)){for(var c=this.C.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.C[e],e+=1;else break;d[c]=b;return new Y(this.meta,this.m+1,this.shift,this.root,d,null)}c=(d=this.m>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=fd(null),d.h[0]=this.root,e=hd(null,this.shift,new ed(null,this.C)),d.h[1]=e):d=jd(this,this.shift,this.root,new ed(null,this.C));return new Y(this.meta,this.m+1,c,d,[b],null)};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.ga(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return this.R(null,a)};h.c=function(a,b){return this.ga(null,a,b)};
var vd=new ed(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),td=new Y(null,0,5,vd,[],0);function wd(a,b,c,d,e,f){this.N=a;this.node=b;this.i=c;this.off=d;this.meta=e;this.t=f;this.k=32243948;this.w=1536}h=wd.prototype;h.toString=function(){return ob(this)};
h.ha=function(){if(this.off+1<this.node.length){var a=ud.n?ud.n(this.N,this.node,this.i,this.off+1):ud.call(null,this.N,this.node,this.i,this.off+1);return null==a?null:a}return mb(this)};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return Xb(td,this.meta)};h.W=function(a,b){return Ib.c(xd.f?xd.f(this.N,this.i+this.off,T(this.N)):xd.call(null,this.N,this.i+this.off,T(this.N)),b)};
h.X=function(a,b,c){return Ib.f(xd.f?xd.f(this.N,this.i+this.off,T(this.N)):xd.call(null,this.N,this.i+this.off,T(this.N)),b,c)};h.ca=function(){return this.node[this.off]};h.da=function(){if(this.off+1<this.node.length){var a=ud.n?ud.n(this.N,this.node,this.i,this.off+1):ud.call(null,this.N,this.node,this.i,this.off+1);return null==a?O:a}return lb(this)};h.O=function(){return this};h.sb=function(){return Ec.c(this.node,this.off)};
h.tb=function(){var a=this.i+this.node.length;return a<va(this.N)?ud.n?ud.n(this.N,md(this.N,a),a,0):ud.call(null,this.N,md(this.N,a),a,0):O};h.G=function(a,b){return ud.K?ud.K(this.N,this.node,this.i,this.off,b):ud.call(null,this.N,this.node,this.i,this.off,b)};h.S=function(a,b){return S(b,this)};h.rb=function(){var a=this.i+this.node.length;return a<va(this.N)?ud.n?ud.n(this.N,md(this.N,a),a,0):ud.call(null,this.N,md(this.N,a),a,0):null};
var ud=function(){function a(a,b,c,d,l){return new wd(a,b,c,d,l,null)}function b(a,b,c,d){return new wd(a,b,c,d,null,null)}function c(a,b,c){return new wd(a,nd(a,b),b,c,null,null)}var d=null,d=function(d,f,g,k,l){switch(arguments.length){case 3:return c.call(this,d,f,g);case 4:return b.call(this,d,f,g,k);case 5:return a.call(this,d,f,g,k,l)}throw Error("Invalid arity: "+arguments.length);};d.f=c;d.n=b;d.K=a;return d}();
function yd(a,b,c,d,e){this.meta=a;this.ra=b;this.start=c;this.end=d;this.t=e;this.k=166617887;this.w=8192}h=yd.prototype;h.toString=function(){return ob(this)};h.L=function(a,b){return F.f(this,b,null)};h.M=function(a,b,c){return"number"===typeof b?C.f(this,b,c):c};h.R=function(a,b){return 0>b||this.end<=this.start+b?kd(b,this.end-this.start):C.c(this.ra,this.start+b)};h.ga=function(a,b,c){return 0>b||this.end<=this.start+b?c:C.f(this.ra,this.start+b,c)};
h.vb=function(a,b,c){var d=this,e=d.start+b;return zd.K?zd.K(d.meta,V.f(d.ra,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null):zd.call(null,d.meta,V.f(d.ra,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};h.F=function(){return this.meta};h.fa=function(){return new yd(this.meta,this.ra,this.start,this.end,this.t)};h.T=function(){return this.end-this.start};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};
h.U=function(){return Xb(td,this.meta)};h.W=function(a,b){return Ib.c(this,b)};h.X=function(a,b,c){return Ib.f(this,b,c)};h.Qa=function(a,b,c){if("number"===typeof b)return Na(this,b,c);throw Error("Subvec's key for assoc must be a number.");};h.O=function(){var a=this;return function(b){return function d(e){return e===a.end?null:S(C.c(a.ra,e),new Ac(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};
h.G=function(a,b){return zd.K?zd.K(b,this.ra,this.start,this.end,this.t):zd.call(null,b,this.ra,this.start,this.end,this.t)};h.S=function(a,b){return zd.K?zd.K(this.meta,Na(this.ra,this.end,b),this.start,this.end+1,null):zd.call(null,this.meta,Na(this.ra,this.end,b),this.start,this.end+1,null)};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.ga(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();
h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return this.R(null,a)};h.c=function(a,b){return this.ga(null,a,b)};function zd(a,b,c,d,e){for(;;)if(b instanceof yd)c=b.start+c,d=b.start+d,b=b.ra;else{var f=T(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new yd(a,b,c,d,e)}}
var xd=function(){function a(a,b,c){return zd(null,a,b,c,null)}function b(a,b){return c.f(a,b,T(a))}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}();function Ad(a,b){return a===b.D?b:new ed(a,qa(b.h))}function rd(a){return new ed({},qa(a.h))}
function sd(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];hc(a,0,b,0,a.length);return b}var Cd=function Bd(b,c,d,e){d=Ad(b.root.D,d);var f=b.m-1>>>c&31;if(5===c)b=e;else{var g=d.h[f];b=null!=g?Bd(b,c-5,g,e):hd(b.root.D,c-5,e)}d.h[f]=b;return d};function qd(a,b,c,d){this.m=a;this.shift=b;this.root=c;this.C=d;this.k=275;this.w=88}h=qd.prototype;
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.L(null,c);case 3:return this.M(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return this.L(null,a)};h.c=function(a,b){return this.M(null,a,b)};h.L=function(a,b){return F.f(this,b,null)};h.M=function(a,b,c){return"number"===typeof b?C.f(this,b,c):c};
h.R=function(a,b){if(this.root.D)return nd(this,b)[b&31];throw Error("nth after persistent!");};h.ga=function(a,b,c){return 0<=b&&b<this.m?C.c(this,b):c};h.T=function(){if(this.root.D)return this.m;throw Error("count after persistent!");};
h.Lb=function(a,b,c){var d=this;if(d.root.D){if(0<=b&&b<d.m)return gd(this)<=b?d.C[b&31]=c:(a=function(){return function f(a,k){var l=Ad(d.root.D,k);if(0===a)l.h[b&31]=c;else{var m=b>>>a&31,p=f(a-5,l.h[m]);l.h[m]=p}return l}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.m)return fb(this,c);if(z)throw Error("Index "+B.e(b)+" out of bounds for TransientVector of length"+B.e(d.m));return null}throw Error("assoc! after persistent!");};
h.bb=function(a,b,c){if("number"===typeof b)return ib(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
h.cb=function(a,b){if(this.root.D){if(32>this.m-gd(this))this.C[this.m&31]=b;else{var c=new ed(this.root.D,this.C),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.C=d;if(this.m>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=hd(this.root.D,this.shift,c);this.root=new ed(this.root.D,d);this.shift=e}else this.root=Cd(this,this.shift,this.root,c)}this.m+=1;return this}throw Error("conj! after persistent!");};h.eb=function(){if(this.root.D){this.root.D=null;var a=this.m-gd(this),b=Array(a);hc(this.C,0,b,0,a);return new Y(null,this.m,this.shift,this.root,b,null)}throw Error("persistent! called twice");};function Dd(){this.w=0;this.k=2097152}Dd.prototype.J=function(){return!1};var Ed=new Dd;
function Fd(a,b){return kc(dc(b)?T(a)===T(b)?Qc(Sc,Tc.c(function(a){return zb.c(U.f(b,M(a),Ed),M(P(a)))},a)):null:null)}
function Gd(a,b){var c=a.h;if(b instanceof W)a:{for(var d=c.length,e=b.La,f=0;;){if(d<=f){c=-1;break a}var g=c[f];if(g instanceof W&&e===g.La){c=f;break a}if(z)f+=2;else{c=null;break a}}c=void 0}else if("string"==typeof b||"number"===typeof b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(b===c[e]){c=e;break a}if(z)e+=2;else{c=null;break a}}c=void 0}else if(b instanceof K)a:{d=c.length;e=b.Pa;for(f=0;;){if(d<=f){c=-1;break a}g=c[f];if(g instanceof K&&e===g.Pa){c=f;break a}if(z)f+=2;else{c=null;
break a}}c=void 0}else if(null==b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(null==c[e]){c=e;break a}if(z)e+=2;else{c=null;break a}}c=void 0}else if(z)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(zb.c(b,c[e])){c=e;break a}if(z)e+=2;else{c=null;break a}}c=void 0}else c=null;return c}function Hd(a,b,c){this.h=a;this.i=b;this.la=c;this.w=0;this.k=32374990}h=Hd.prototype;h.toString=function(){return ob(this)};h.F=function(){return this.la};
h.ha=function(){return this.i<this.h.length-2?new Hd(this.h,this.i+2,this.la):null};h.T=function(){return(this.h.length-this.i)/2};h.Q=function(){return Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return Xb(O,this.la)};h.W=function(a,b){return oc.c(b,this)};h.X=function(a,b,c){return oc.f(b,c,this)};h.ca=function(){return new Y(null,2,5,vd,[this.h[this.i],this.h[this.i+1]],null)};h.da=function(){return this.i<this.h.length-2?new Hd(this.h,this.i+2,this.la):O};h.O=function(){return this};
h.G=function(a,b){return new Hd(this.h,this.i,b)};h.S=function(a,b){return S(b,this)};function u(a,b,c,d){this.meta=a;this.m=b;this.h=c;this.t=d;this.k=16647951;this.w=8196}h=u.prototype;h.toString=function(){return ob(this)};h.L=function(a,b){return F.f(this,b,null)};h.M=function(a,b,c){a=Gd(this,b);return-1===a?c:this.h[a+1]};h.F=function(){return this.meta};h.fa=function(){return new u(this.meta,this.m,this.h,this.t)};h.T=function(){return this.m};
h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Gb(this)};h.J=function(a,b){return Fd(this,b)};h.$a=function(){return new Id({},this.h.length,qa(this.h))};h.U=function(){return Ra(Jd,this.meta)};h.W=function(a,b){return oc.c(b,this)};h.X=function(a,b,c){return oc.f(b,c,this)};
h.lb=function(a,b){if(0<=Gd(this,b)){var c=this.h.length,d=c-2;if(0===d)return wa(this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new u(this.meta,this.m-1,d,null);if(zb.c(b,this.h[e]))e+=2;else if(z)d[f]=this.h[e],d[f+1]=this.h[e+1],f+=2,e+=2;else return null}}else return this};
h.Qa=function(a,b,c){a=Gd(this,b);if(-1===a){if(this.m<Kd){a=this.h;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new u(this.meta,this.m+1,e,null)}return Ra(Ea($c(Ld,this),b,c),this.meta)}return c===this.h[a+1]?this:z?(b=qa(this.h),b[a+1]=c,new u(this.meta,this.m,b,null)):null};h.Za=function(a,b){return-1!==Gd(this,b)};h.O=function(){var a=this.h;return 0<=a.length-2?new Hd(a,0,null):null};h.G=function(a,b){return new u(b,this.m,this.h,this.t)};
h.S=function(a,b){if(ec(b))return Ea(this,C.c(b,0),C.c(b,1));for(var c=this,d=L(b);;){if(null==d)return c;var e=M(d);if(ec(e))c=Ea(c,C.c(e,0),C.c(e,1)),d=P(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.L(null,c);case 3:return this.M(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};
h.e=function(a){return this.L(null,a)};h.c=function(a,b){return this.M(null,a,b)};var Jd=new u(null,0,[],null),Kd=8;function Id(a,b,c){this.Va=a;this.Sa=b;this.h=c;this.w=56;this.k=258}h=Id.prototype;h.bb=function(a,b,c){if(x(this.Va)){a=Gd(this,b);if(-1===a)return this.Sa+2<=2*Kd?(this.Sa+=2,this.h.push(b),this.h.push(c),this):Nc.f(Md.c?Md.c(this.Sa,this.h):Md.call(null,this.Sa,this.h),b,c);c!==this.h[a+1]&&(this.h[a+1]=c);return this}throw Error("assoc! after persistent!");};
h.cb=function(a,b){if(x(this.Va)){if(b?b.k&2048||b.rc||(b.k?0:y(Ha,b)):y(Ha,b))return hb(this,Nd.e?Nd.e(b):Nd.call(null,b),Pd.e?Pd.e(b):Pd.call(null,b));for(var c=L(b),d=this;;){var e=M(c);if(x(e))c=P(c),d=hb(d,Nd.e?Nd.e(e):Nd.call(null,e),Pd.e?Pd.e(e):Pd.call(null,e));else return d}}else throw Error("conj! after persistent!");};h.eb=function(){if(x(this.Va))return this.Va=!1,new u(null,pc(this.Sa),this.h,null);throw Error("persistent! called twice");};h.L=function(a,b){return F.f(this,b,null)};
h.M=function(a,b,c){if(x(this.Va))return a=Gd(this,b),-1===a?c:this.h[a+1];throw Error("lookup after persistent!");};h.T=function(){if(x(this.Va))return pc(this.Sa);throw Error("count after persistent!");};function Md(a,b){for(var c=eb(Ld),d=0;;)if(d<a)c=Nc.f(c,b[d],b[d+1]),d+=2;else return c}function Qd(){this.val=!1}function Rd(a,b){return a===b?!0:xc(a,b)?!0:z?zb.c(a,b):null}
var Sd=function(){function a(a,b,c,g,k){a=qa(a);a[b]=c;a[g]=k;return a}function b(a,b,c){a=qa(a);a[b]=c;return a}var c=null,c=function(c,e,f,g,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,g,k)}throw Error("Invalid arity: "+arguments.length);};c.f=b;c.K=a;return c}();function Td(a,b){var c=Array(a.length-2);hc(a,0,c,0,2*b);hc(a,2*(b+1),c,2*b,c.length-2*b);return c}
var Ud=function(){function a(a,b,c,g,k,l){a=a.Wa(b);a.h[c]=g;a.h[k]=l;return a}function b(a,b,c,g){a=a.Wa(b);a.h[c]=g;return a}var c=null,c=function(c,e,f,g,k,l){switch(arguments.length){case 4:return b.call(this,c,e,f,g);case 6:return a.call(this,c,e,f,g,k,l)}throw Error("Invalid arity: "+arguments.length);};c.n=b;c.ba=a;return c}();function Vd(a,b,c){this.D=a;this.I=b;this.h=c}h=Vd.prototype;
h.Wa=function(a){if(a===this.D)return this;var b=qc(this.I),c=Array(0>b?4:2*(b+1));hc(this.h,0,c,0,2*b);return new Vd(a,this.I,c)};h.fb=function(){return Wd.e?Wd.e(this.h):Wd.call(null,this.h)};h.Na=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.I&e))return d;var f=qc(this.I&e-1),e=this.h[2*f],f=this.h[2*f+1];return null==e?f.Na(a+5,b,c,d):Rd(c,e)?f:z?d:null};
h.oa=function(a,b,c,d,e,f){var g=1<<(c>>>b&31),k=qc(this.I&g-1);if(0===(this.I&g)){var l=qc(this.I);if(2*l<this.h.length){a=this.Wa(a);b=a.h;f.val=!0;a:for(c=2*(l-k),f=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[f];l-=1;c-=1;f-=1}b[2*k]=d;b[2*k+1]=e;a.I|=g;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=Xd.oa(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.I>>>d&1)&&(k[d]=null!=this.h[e]?Xd.oa(a,b+5,wb(this.h[e]),this.h[e],this.h[e+1],f):this.h[e+1],e+=2),d+=1;else break;return new Yd(a,l+1,k)}return z?(b=Array(2*(l+4)),hc(this.h,0,b,0,2*k),b[2*k]=d,b[2*k+1]=e,hc(this.h,2*k,b,2*(k+1),2*(l-k)),f.val=!0,a=this.Wa(a),a.h=b,a.I|=g,a):null}l=this.h[2*k];g=this.h[2*k+1];return null==l?(l=g.oa(a,b+5,c,d,e,f),l===g?this:Ud.n(this,a,2*k+1,l)):Rd(d,l)?e===g?this:Ud.n(this,a,2*k+1,e):z?(f.val=!0,Ud.ba(this,a,2*k,null,2*k+1,Zd.ma?Zd.ma(a,b+5,l,g,c,d,e):Zd.call(null,
a,b+5,l,g,c,d,e))):null};
h.na=function(a,b,c,d,e){var f=1<<(b>>>a&31),g=qc(this.I&f-1);if(0===(this.I&f)){var k=qc(this.I);if(16<=k){g=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];g[b>>>a&31]=Xd.na(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.I>>>c&1)&&(g[c]=null!=this.h[d]?Xd.na(a+5,wb(this.h[d]),this.h[d],this.h[d+1],e):this.h[d+1],d+=2),c+=1;else break;return new Yd(null,k+1,g)}a=Array(2*(k+1));hc(this.h,
0,a,0,2*g);a[2*g]=c;a[2*g+1]=d;hc(this.h,2*g,a,2*(g+1),2*(k-g));e.val=!0;return new Vd(null,this.I|f,a)}k=this.h[2*g];f=this.h[2*g+1];return null==k?(k=f.na(a+5,b,c,d,e),k===f?this:new Vd(null,this.I,Sd.f(this.h,2*g+1,k))):Rd(c,k)?d===f?this:new Vd(null,this.I,Sd.f(this.h,2*g+1,d)):z?(e.val=!0,new Vd(null,this.I,Sd.K(this.h,2*g,null,2*g+1,Zd.ba?Zd.ba(a+5,k,f,b,c,d):Zd.call(null,a+5,k,f,b,c,d)))):null};
h.gb=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.I&d))return this;var e=qc(this.I&d-1),f=this.h[2*e],g=this.h[2*e+1];return null==f?(a=g.gb(a+5,b,c),a===g?this:null!=a?new Vd(null,this.I,Sd.f(this.h,2*e+1,a)):this.I===d?null:z?new Vd(null,this.I^d,Td(this.h,e)):null):Rd(c,f)?new Vd(null,this.I^d,Td(this.h,e)):z?this:null};var Xd=new Vd(null,0,[]);function Yd(a,b,c){this.D=a;this.m=b;this.h=c}h=Yd.prototype;h.Wa=function(a){return a===this.D?this:new Yd(a,this.m,qa(this.h))};
h.fb=function(){return $d.e?$d.e(this.h):$d.call(null,this.h)};h.Na=function(a,b,c,d){var e=this.h[b>>>a&31];return null!=e?e.Na(a+5,b,c,d):d};h.oa=function(a,b,c,d,e,f){var g=c>>>b&31,k=this.h[g];if(null==k)return a=Ud.n(this,a,g,Xd.oa(a,b+5,c,d,e,f)),a.m+=1,a;b=k.oa(a,b+5,c,d,e,f);return b===k?this:Ud.n(this,a,g,b)};
h.na=function(a,b,c,d,e){var f=b>>>a&31,g=this.h[f];if(null==g)return new Yd(null,this.m+1,Sd.f(this.h,f,Xd.na(a+5,b,c,d,e)));a=g.na(a+5,b,c,d,e);return a===g?this:new Yd(null,this.m,Sd.f(this.h,f,a))};
h.gb=function(a,b,c){var d=b>>>a&31,e=this.h[d];if(null!=e){a=e.gb(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.m)a:{e=this.h;a=2*(this.m-1);b=Array(a);c=0;for(var f=1,g=0;;)if(c<a)c!==d&&null!=e[c]&&(b[f]=e[c],f+=2,g|=1<<c),c+=1;else{d=new Vd(null,g,b);break a}d=void 0}else d=new Yd(null,this.m-1,Sd.f(this.h,d,a));else d=z?new Yd(null,this.m,Sd.f(this.h,d,a)):null;return d}return this};function ae(a,b,c){b*=2;for(var d=0;;)if(d<b){if(Rd(c,a[d]))return d;d+=2}else return-1}
function be(a,b,c,d){this.D=a;this.ua=b;this.m=c;this.h=d}h=be.prototype;h.Wa=function(a){if(a===this.D)return this;var b=Array(2*(this.m+1));hc(this.h,0,b,0,2*this.m);return new be(a,this.ua,this.m,b)};h.fb=function(){return Wd.e?Wd.e(this.h):Wd.call(null,this.h)};h.Na=function(a,b,c,d){a=ae(this.h,this.m,c);return 0>a?d:Rd(c,this.h[a])?this.h[a+1]:z?d:null};
h.oa=function(a,b,c,d,e,f){if(c===this.ua){b=ae(this.h,this.m,d);if(-1===b){if(this.h.length>2*this.m)return a=Ud.ba(this,a,2*this.m,d,2*this.m+1,e),f.val=!0,a.m+=1,a;c=this.h.length;b=Array(c+2);hc(this.h,0,b,0,c);b[c]=d;b[c+1]=e;f.val=!0;f=this.m+1;a===this.D?(this.h=b,this.m=f,a=this):a=new be(this.D,this.ua,f,b);return a}return this.h[b+1]===e?this:Ud.n(this,a,b+1,e)}return(new Vd(a,1<<(this.ua>>>b&31),[null,this,null,null])).oa(a,b,c,d,e,f)};
h.na=function(a,b,c,d,e){return b===this.ua?(a=ae(this.h,this.m,c),-1===a?(a=2*this.m,b=Array(a+2),hc(this.h,0,b,0,a),b[a]=c,b[a+1]=d,e.val=!0,new be(null,this.ua,this.m+1,b)):zb.c(this.h[a],d)?this:new be(null,this.ua,this.m,Sd.f(this.h,a+1,d))):(new Vd(null,1<<(this.ua>>>a&31),[null,this])).na(a,b,c,d,e)};h.gb=function(a,b,c){a=ae(this.h,this.m,c);return-1===a?this:1===this.m?null:z?new be(null,this.ua,this.m-1,Td(this.h,pc(a))):null};
var Zd=function(){function a(a,b,c,g,k,l,m){var p=wb(c);if(p===k)return new be(null,p,2,[c,g,l,m]);var n=new Qd;return Xd.oa(a,b,p,c,g,n).oa(a,b,k,l,m,n)}function b(a,b,c,g,k,l){var m=wb(b);if(m===g)return new be(null,m,2,[b,c,k,l]);var p=new Qd;return Xd.na(a,m,b,c,p).na(a,g,k,l,p)}var c=null,c=function(c,e,f,g,k,l,m){switch(arguments.length){case 6:return b.call(this,c,e,f,g,k,l);case 7:return a.call(this,c,e,f,g,k,l,m)}throw Error("Invalid arity: "+arguments.length);};c.ba=b;c.ma=a;return c}();
function ce(a,b,c,d,e){this.meta=a;this.pa=b;this.i=c;this.s=d;this.t=e;this.w=0;this.k=32374860}h=ce.prototype;h.toString=function(){return ob(this)};h.F=function(){return this.meta};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return Xb(O,this.meta)};h.W=function(a,b){return oc.c(b,this)};h.X=function(a,b,c){return oc.f(b,c,this)};
h.ca=function(){return null==this.s?new Y(null,2,5,vd,[this.pa[this.i],this.pa[this.i+1]],null):M(this.s)};h.da=function(){return null==this.s?Wd.f?Wd.f(this.pa,this.i+2,null):Wd.call(null,this.pa,this.i+2,null):Wd.f?Wd.f(this.pa,this.i,P(this.s)):Wd.call(null,this.pa,this.i,P(this.s))};h.O=function(){return this};h.G=function(a,b){return new ce(b,this.pa,this.i,this.s,this.t)};h.S=function(a,b){return S(b,this)};
var Wd=function(){function a(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new ce(null,a,b,null,null);var g=a[b+1];if(x(g)&&(g=g.fb(),x(g)))return new ce(null,a,b+2,g,null);b+=2}else return null;else return new ce(null,a,b,c,null)}function b(a){return c.f(a,0,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.f=a;return c}();
function de(a,b,c,d,e){this.meta=a;this.pa=b;this.i=c;this.s=d;this.t=e;this.w=0;this.k=32374860}h=de.prototype;h.toString=function(){return ob(this)};h.F=function(){return this.meta};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return Xb(O,this.meta)};h.W=function(a,b){return oc.c(b,this)};h.X=function(a,b,c){return oc.f(b,c,this)};h.ca=function(){return M(this.s)};
h.da=function(){return $d.n?$d.n(null,this.pa,this.i,P(this.s)):$d.call(null,null,this.pa,this.i,P(this.s))};h.O=function(){return this};h.G=function(a,b){return new de(b,this.pa,this.i,this.s,this.t)};h.S=function(a,b){return S(b,this)};
var $d=function(){function a(a,b,c,g){if(null==g)for(g=b.length;;)if(c<g){var k=b[c];if(x(k)&&(k=k.fb(),x(k)))return new de(a,b,c+1,k,null);c+=1}else return null;else return new de(a,b,c,g,null)}function b(a){return c.n(null,a,0,null)}var c=null,c=function(c,e,f,g){switch(arguments.length){case 1:return b.call(this,c);case 4:return a.call(this,c,e,f,g)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.n=a;return c}();
function ee(a,b,c,d,e,f){this.meta=a;this.m=b;this.root=c;this.Z=d;this.ea=e;this.t=f;this.k=16123663;this.w=8196}h=ee.prototype;h.toString=function(){return ob(this)};h.L=function(a,b){return F.f(this,b,null)};h.M=function(a,b,c){return null==b?this.Z?this.ea:c:null==this.root?c:z?this.root.Na(0,wb(b),b,c):null};h.F=function(){return this.meta};h.fa=function(){return new ee(this.meta,this.m,this.root,this.Z,this.ea,this.t)};h.T=function(){return this.m};
h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Gb(this)};h.J=function(a,b){return Fd(this,b)};h.$a=function(){return new fe({},this.root,this.m,this.Z,this.ea)};h.U=function(){return Ra(Ld,this.meta)};h.lb=function(a,b){if(null==b)return this.Z?new ee(this.meta,this.m-1,this.root,!1,null,null):this;if(null==this.root)return this;if(z){var c=this.root.gb(0,wb(b),b);return c===this.root?this:new ee(this.meta,this.m-1,c,this.Z,this.ea,null)}return null};
h.Qa=function(a,b,c){if(null==b)return this.Z&&c===this.ea?this:new ee(this.meta,this.Z?this.m:this.m+1,this.root,!0,c,null);a=new Qd;b=(null==this.root?Xd:this.root).na(0,wb(b),b,c,a);return b===this.root?this:new ee(this.meta,a.val?this.m+1:this.m,b,this.Z,this.ea,null)};h.Za=function(a,b){return null==b?this.Z:null==this.root?!1:z?this.root.Na(0,wb(b),b,ic)!==ic:null};
h.O=function(){if(0<this.m){var a=null!=this.root?this.root.fb():null;return this.Z?S(new Y(null,2,5,vd,[null,this.ea],null),a):a}return null};h.G=function(a,b){return new ee(b,this.m,this.root,this.Z,this.ea,this.t)};h.S=function(a,b){if(ec(b))return Ea(this,C.c(b,0),C.c(b,1));for(var c=this,d=L(b);;){if(null==d)return c;var e=M(d);if(ec(e))c=Ea(c,C.c(e,0),C.c(e,1)),d=P(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.L(null,c);case 3:return this.M(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return this.L(null,a)};h.c=function(a,b){return this.M(null,a,b)};var Ld=new ee(null,0,null,!1,null,0);function Sb(a,b){for(var c=a.length,d=0,e=eb(Ld);;)if(d<c)var f=d+1,e=e.bb(null,a[d],b[d]),d=f;else return gb(e)}
function fe(a,b,c,d,e){this.D=a;this.root=b;this.count=c;this.Z=d;this.ea=e;this.w=56;this.k=258}h=fe.prototype;h.bb=function(a,b,c){return ge(this,b,c)};h.cb=function(a,b){var c;a:{if(this.D){if(b?b.k&2048||b.rc||(b.k?0:y(Ha,b)):y(Ha,b)){c=ge(this,Nd.e?Nd.e(b):Nd.call(null,b),Pd.e?Pd.e(b):Pd.call(null,b));break a}c=L(b);for(var d=this;;){var e=M(c);if(x(e))c=P(c),d=ge(d,Nd.e?Nd.e(e):Nd.call(null,e),Pd.e?Pd.e(e):Pd.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");c=void 0}return c};
h.eb=function(){var a;if(this.D)this.D=null,a=new ee(null,this.count,this.root,this.Z,this.ea,null);else throw Error("persistent! called twice");return a};h.L=function(a,b){return null==b?this.Z?this.ea:null:null==this.root?null:this.root.Na(0,wb(b),b)};h.M=function(a,b,c){return null==b?this.Z?this.ea:c:null==this.root?c:this.root.Na(0,wb(b),b,c)};h.T=function(){if(this.D)return this.count;throw Error("count after persistent!");};
function ge(a,b,c){if(a.D){if(null==b)a.ea!==c&&(a.ea=c),a.Z||(a.count+=1,a.Z=!0);else{var d=new Qd;b=(null==a.root?Xd:a.root).oa(a.D,0,wb(b),b,c,d);b!==a.root&&(a.root=b);d.val&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}
var he=function(){function a(a){var d=null;0<arguments.length&&(d=Q(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=L(a);for(var b=eb(Ld);;)if(a){var e=P(P(a)),b=Nc.f(b,M(a),M(P(a)));a=e}else return gb(b)}a.A=0;a.o=function(a){a=L(a);return b(a)};a.l=b;return a}();function ie(a,b){this.Oa=a;this.la=b;this.w=0;this.k=32374988}h=ie.prototype;h.toString=function(){return ob(this)};h.F=function(){return this.la};
h.ha=function(){var a=this.Oa,a=(a?a.k&128||a.Jb||(a.k?0:y(Ba,a)):y(Ba,a))?this.Oa.ha(null):P(this.Oa);return null==a?null:new ie(a,this.la)};h.Q=function(){return Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return Xb(O,this.la)};h.W=function(a,b){return oc.c(b,this)};h.X=function(a,b,c){return oc.f(b,c,this)};h.ca=function(){return this.Oa.ca(null).ub()};
h.da=function(){var a=this.Oa,a=(a?a.k&128||a.Jb||(a.k?0:y(Ba,a)):y(Ba,a))?this.Oa.ha(null):P(this.Oa);return null!=a?new ie(a,this.la):O};h.O=function(){return this};h.G=function(a,b){return new ie(this.Oa,b)};h.S=function(a,b){return S(b,this)};function je(a){return(a=L(a))?new ie(a,null):null}function Nd(a){return Ia(a)}function Pd(a){return Ja(a)}
var ke=function(){function a(a){var d=null;0<arguments.length&&(d=Q(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return x(Rc(a))?nc.c(function(a,b){return Ob.c(x(a)?a:Jd,b)},a):null}a.A=0;a.o=function(a){a=L(a);return b(a)};a.l=b;return a}();function le(a,b,c){this.meta=a;this.Ma=b;this.t=c;this.k=15077647;this.w=8196}h=le.prototype;h.toString=function(){return ob(this)};h.L=function(a,b){return F.f(this,b,null)};h.M=function(a,b,c){return Da(this.Ma,b)?b:c};
h.F=function(){return this.meta};h.fa=function(){return new le(this.meta,this.Ma,this.t)};h.T=function(){return va(this.Ma)};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Gb(this)};h.J=function(a,b){return ac(b)&&T(this)===T(b)&&Qc(function(a){return function(b){return lc(a,b)}}(this),b)};h.$a=function(){return new me(eb(this.Ma))};h.U=function(){return Xb(ne,this.meta)};h.Kb=function(a,b){return new le(this.meta,Ga(this.Ma,b),null)};h.O=function(){return je(this.Ma)};
h.G=function(a,b){return new le(b,this.Ma,this.t)};h.S=function(a,b){return new le(this.meta,V.f(this.Ma,b,null),null)};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.L(null,c);case 3:return this.M(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return this.L(null,a)};h.c=function(a,b){return this.M(null,a,b)};var ne=new le(null,Jd,0);
function me(a){this.va=a;this.k=259;this.w=136}h=me.prototype;h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return F.f(this.va,c,ic)===ic?null:c;case 3:return F.f(this.va,c,ic)===ic?d:c}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return F.f(this.va,a,ic)===ic?null:a};h.c=function(a,b){return F.f(this.va,a,ic)===ic?b:a};h.L=function(a,b){return F.f(this,b,null)};
h.M=function(a,b,c){return F.f(this.va,b,ic)===ic?c:b};h.T=function(){return T(this.va)};h.cb=function(a,b){this.va=Nc.f(this.va,b,null);return this};h.eb=function(){return new le(null,gb(this.va),null)};function yc(a){if(a&&(a.w&4096||a.tc))return a.name;if("string"===typeof a)return a;throw Error("Doesn't support name: "+B.e(a));}function oe(a,b,c,d,e){this.meta=a;this.start=b;this.end=c;this.step=d;this.t=e;this.k=32375006;this.w=8192}h=oe.prototype;h.toString=function(){return ob(this)};
h.R=function(a,b){if(b<va(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};h.ga=function(a,b,c){return b<va(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};h.F=function(){return this.meta};h.fa=function(){return new oe(this.meta,this.start,this.end,this.step,this.t)};
h.ha=function(){return 0<this.step?this.start+this.step<this.end?new oe(this.meta,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new oe(this.meta,this.start+this.step,this.end,this.step,null):null};h.T=function(){return ma(Xa(this))?0:Math.ceil((this.end-this.start)/this.step)};h.Q=function(){var a=this.t;return null!=a?a:this.t=a=Fb(this)};h.J=function(a,b){return Mb(this,b)};h.U=function(){return Xb(O,this.meta)};h.W=function(a,b){return Ib.c(this,b)};
h.X=function(a,b,c){return Ib.f(this,b,c)};h.ca=function(){return null==Xa(this)?null:this.start};h.da=function(){return null!=Xa(this)?new oe(this.meta,this.start+this.step,this.end,this.step,null):O};h.O=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};h.G=function(a,b){return new oe(b,this.start,this.end,this.step,this.t)};h.S=function(a,b){return S(b,this)};
var pe=function(){function a(a,b,c){return new oe(null,a,b,c,null)}function b(a,b){return e.f(a,b,1)}function c(a){return e.f(0,a,1)}function d(){return e.f(0,Number.MAX_VALUE,1)}var e=null,e=function(e,g,k){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,g);case 3:return a.call(this,e,g,k)}throw Error("Invalid arity: "+arguments.length);};e.v=d;e.e=c;e.c=b;e.f=a;return e}();
function qe(a,b,c,d,e,f,g){var k=fa;try{fa=null==fa?null:fa-1;if(null!=fa&&0>fa)return I(a,"#");I(a,c);L(g)&&(b.f?b.f(M(g),a,f):b.call(null,M(g),a,f));for(var l=P(g),m=la.e(f)-1;;)if(!l||null!=m&&0===m){L(l)&&0===m&&(I(a,d),I(a,"..."));break}else{I(a,d);b.f?b.f(M(l),a,f):b.call(null,M(l),a,f);var p=P(l);c=m-1;l=p;m=c}return I(a,e)}finally{fa=k}}
var re=function(){function a(a,d){var e=null;1<arguments.length&&(e=Q(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){for(var e=L(b),f=null,g=0,k=0;;)if(k<g){var l=f.R(null,k);I(a,l);k+=1}else if(e=L(e))f=e,fc(f)?(e=kb(f),g=lb(f),f=e,l=T(e),e=g,g=l):(l=M(f),I(a,l),e=P(f),f=null,g=0),k=0;else return null}a.A=1;a.o=function(a){var d=M(a);a=N(a);return b(d,a)};a.l=b;return a}(),se={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function te(a){return'"'+B.e(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return se[a]}))+'"'}
var we=function ue(b,c,d){if(null==b)return I(c,"nil");if(void 0===b)return I(c,"#\x3cundefined\x3e");if(z){x(function(){var c=U.c(d,ja);return x(c)?(c=b?b.k&131072||b.sc?!0:b.k?!1:y(Oa,b):y(Oa,b))?Yb(b):c:c}())&&(I(c,"^"),ue(Yb(b),c,d),I(c," "));if(null==b)return I(c,"nil");if(b.Ka)return b.Ra(b,c,d);if(b&&(b.k&2147483648||b.V))return b.H(null,c,d);if(na(b)===Boolean||"number"===typeof b)return I(c,""+B.e(b));if(null!=b&&b.constructor===Object)return I(c,"#js "),ve.n?ve.n(Tc.c(function(c){return new Y(null,
2,5,vd,[zc.e(c),b[c]],null)},gc(b)),ue,c,d):ve.call(null,Tc.c(function(c){return new Y(null,2,5,vd,[zc.e(c),b[c]],null)},gc(b)),ue,c,d);if(b instanceof Array)return qe(c,ue,"#js ["," ","]",d,b);if("string"==typeof b)return x(ia.e(d))?I(c,te(b)):I(c,b);if(Ub(b))return re.l(c,Q(["#\x3c",""+B.e(b),"\x3e"],0));if(b instanceof Date){var e=function(b,c){for(var d=""+B.e(b);;)if(T(d)<c)d="0"+B.e(d);else return d};return re.l(c,Q(['#inst "',""+B.e(b.getUTCFullYear()),"-",e(b.getUTCMonth()+1,2),"-",e(b.getUTCDate(),
2),"T",e(b.getUTCHours(),2),":",e(b.getUTCMinutes(),2),":",e(b.getUTCSeconds(),2),".",e(b.getUTCMilliseconds(),3),"-",'00:00"'],0))}return b instanceof RegExp?re.l(c,Q(['#"',b.source,'"'],0)):(b?b.k&2147483648||b.V||(b.k?0:y($a,b)):y($a,b))?ab(b,c,d):z?re.l(c,Q(["#\x3c",""+B.e(b),"\x3e"],0)):null}return null};
function xe(a,b){var c=new ea;a:{var d=new nb(c);we(M(a),d,b);for(var e=L(P(a)),f=null,g=0,k=0;;)if(k<g){var l=f.R(null,k);I(d," ");we(l,d,b);k+=1}else if(e=L(e))f=e,fc(f)?(e=kb(f),g=lb(f),f=e,l=T(e),e=g,g=l):(l=M(f),I(d," "),we(l,d,b),e=P(f),f=null,g=0),k=0;else break a}return c}
var ye=function(){function a(a){var d=null;0<arguments.length&&(d=Q(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=ga();return $b(a)?"":""+B.e(xe(a,b))}a.A=0;a.o=function(a){a=L(a);return b(a)};a.l=b;return a}();function ve(a,b,c,d){return qe(c,function(a,c,d){b.f?b.f(Ia(a),c,d):b.call(null,Ia(a),c,d);I(c," ");return b.f?b.f(Ja(a),c,d):b.call(null,Ja(a),c,d)},"{",", ","}",d,L(a))}Db.prototype.V=!0;Db.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};
Ac.prototype.V=!0;Ac.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};ce.prototype.V=!0;ce.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};Hd.prototype.V=!0;Hd.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};wd.prototype.V=!0;wd.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};wc.prototype.V=!0;wc.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};ee.prototype.V=!0;ee.prototype.H=function(a,b,c){return ve(this,we,b,c)};
de.prototype.V=!0;de.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};yd.prototype.V=!0;yd.prototype.H=function(a,b,c){return qe(b,we,"["," ","]",c,this)};le.prototype.V=!0;le.prototype.H=function(a,b,c){return qe(b,we,"#{"," ","}",c,this)};Fc.prototype.V=!0;Fc.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};Y.prototype.V=!0;Y.prototype.H=function(a,b,c){return qe(b,we,"["," ","]",c,this)};tc.prototype.V=!0;tc.prototype.H=function(a,b){return I(b,"()")};
u.prototype.V=!0;u.prototype.H=function(a,b,c){return ve(this,we,b,c)};oe.prototype.V=!0;oe.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};ie.prototype.V=!0;ie.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};sc.prototype.V=!0;sc.prototype.H=function(a,b,c){return qe(b,we,"("," ",")",c,this)};Y.prototype.jb=!0;Y.prototype.kb=function(a,b){return mc.c(this,b)};yd.prototype.jb=!0;yd.prototype.kb=function(a,b){return mc.c(this,b)};W.prototype.jb=!0;
W.prototype.kb=function(a,b){return yb(this,b)};K.prototype.jb=!0;K.prototype.kb=function(a,b){return yb(this,b)};var ze={};function Ae(a,b){if(a?a.vc:a)return a.vc(a,b);var c;c=Ae[s(null==a?null:a)];if(!c&&(c=Ae._,!c))throw A("IReset.-reset!",a);return c.call(null,a,b)}
var Be=function(){function a(a,b,c,d,e){if(a?a.zc:a)return a.zc(a,b,c,d,e);var p;p=Be[s(null==a?null:a)];if(!p&&(p=Be._,!p))throw A("ISwap.-swap!",a);return p.call(null,a,b,c,d,e)}function b(a,b,c,d){if(a?a.yc:a)return a.yc(a,b,c,d);var e;e=Be[s(null==a?null:a)];if(!e&&(e=Be._,!e))throw A("ISwap.-swap!",a);return e.call(null,a,b,c,d)}function c(a,b,c){if(a?a.xc:a)return a.xc(a,b,c);var d;d=Be[s(null==a?null:a)];if(!d&&(d=Be._,!d))throw A("ISwap.-swap!",a);return d.call(null,a,b,c)}function d(a,b){if(a?
a.wc:a)return a.wc(a,b);var c;c=Be[s(null==a?null:a)];if(!c&&(c=Be._,!c))throw A("ISwap.-swap!",a);return c.call(null,a,b)}var e=null,e=function(e,g,k,l,m){switch(arguments.length){case 2:return d.call(this,e,g);case 3:return c.call(this,e,g,k);case 4:return b.call(this,e,g,k,l);case 5:return a.call(this,e,g,k,l,m)}throw Error("Invalid arity: "+arguments.length);};e.c=d;e.f=c;e.n=b;e.K=a;return e}();function Ce(a,b,c,d){this.state=a;this.meta=b;this.ad=c;this.Xa=d;this.k=2153938944;this.w=16386}
h=Ce.prototype;h.Q=function(){return aa(this)};h.Nb=function(a,b,c){a=L(this.Xa);for(var d=null,e=0,f=0;;)if(f<e){var g=d.R(null,f),k=Rb.f(g,0,null),g=Rb.f(g,1,null);g.n?g.n(k,this,b,c):g.call(null,k,this,b,c);f+=1}else if(a=L(a))fc(a)?(d=kb(a),a=lb(a),k=d,e=T(d),d=k):(d=M(a),k=Rb.f(d,0,null),g=Rb.f(d,1,null),g.n?g.n(k,this,b,c):g.call(null,k,this,b,c),a=P(a),d=null,e=0),f=0;else return null};h.Mb=function(a,b,c){this.Xa=V.f(this.Xa,b,c);return this};
h.Ob=function(a,b){return this.Xa=Tb.c(this.Xa,b)};h.H=function(a,b,c){I(b,"#\x3cAtom: ");we(this.state,b,c);return I(b,"\x3e")};h.F=function(){return this.meta};h.Ua=function(){return this.state};h.J=function(a,b){return this===b};
var Ee=function(){function a(a){return new Ce(a,null,null,null)}var b=null,c=function(){function a(c,d){var k=null;1<arguments.length&&(k=Q(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,k)}function b(a,c){var d=jc(c)?Wb.c(he,c):c,e=U.c(d,De),d=U.c(d,ja);return new Ce(a,d,e,null)}a.A=1;a.o=function(a){var c=M(a);a=N(a);return b(c,a)};a.l=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.l(b,Q(arguments,1))}throw Error("Invalid arity: "+
arguments.length);};b.A=1;b.o=c.o;b.e=a;b.l=c.l;return b}();function Fe(a,b){if(a instanceof Ce){var c=a.ad;if(null!=c&&!x(c.e?c.e(b):c.call(null,b)))throw Error("Assert failed: Validator rejected reference state\n"+B.e(ye.l(Q([uc(new K(null,"validate","validate",1439230700,null),new K(null,"new-value","new-value",-1567397401,null))],0))));c=a.state;a.state=b;null!=a.Xa&&bb(a,c,b);return b}return Ae(a,b)}
var Ge=function(){function a(a,b,c,d){return a instanceof Ce?Fe(a,b.f?b.f(a.state,c,d):b.call(null,a.state,c,d)):Be.n(a,b,c,d)}function b(a,b,c){return a instanceof Ce?Fe(a,b.c?b.c(a.state,c):b.call(null,a.state,c)):Be.f(a,b,c)}function c(a,b){return a instanceof Ce?Fe(a,b.e?b.e(a.state):b.call(null,a.state)):Be.c(a,b)}var d=null,e=function(){function a(c,d,e,f,n){var q=null;4<arguments.length&&(q=Q(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,f,q)}function b(a,c,d,e,f){return a instanceof
Ce?Fe(a,Wb.K(c,a.state,d,e,f)):Be.K(a,c,d,e,f)}a.A=4;a.o=function(a){var c=M(a);a=P(a);var d=M(a);a=P(a);var e=M(a);a=P(a);var f=M(a);a=N(a);return b(c,d,e,f,a)};a.l=b;return a}(),d=function(d,g,k,l,m){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,k);case 4:return a.call(this,d,g,k,l);default:return e.l(d,g,k,l,Q(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.A=4;d.o=e.o;d.c=c;d.f=b;d.n=a;d.l=e.l;return d}();function He(a,b,c){cb(a,b,c)}
var Ie=null,Je=function(){function a(a){null==Ie&&(Ie=Ee.e(0));return Cb.e(""+B.e(a)+B.e(Ge.c(Ie,Hb)))}function b(){return c.e("G__")}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.v=b;c.e=a;return c}(),Ke={};function Le(a){if(a?a.oc:a)return a.oc(a);var b;b=Le[s(null==a?null:a)];if(!b&&(b=Le._,!b))throw A("IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)}
function Me(a){return(a?x(x(null)?null:a.nc)||(a.Y?0:y(Ke,a)):y(Ke,a))?Le(a):"string"===typeof a||"number"===typeof a||a instanceof W||a instanceof K?Ne.e?Ne.e(a):Ne.call(null,a):ye.l(Q([a],0))}
var Ne=function Oe(b){if(null==b)return null;if(b?x(x(null)?null:b.nc)||(b.Y?0:y(Ke,b)):y(Ke,b))return Le(b);if(b instanceof W)return yc(b);if(b instanceof K)return""+B.e(b);if(dc(b)){var c={};b=L(b);for(var d=null,e=0,f=0;;)if(f<e){var g=d.R(null,f),k=Rb.f(g,0,null),g=Rb.f(g,1,null);c[Me(k)]=Oe(g);f+=1}else if(b=L(b))fc(b)?(e=kb(b),b=lb(b),d=e,e=T(e)):(e=M(b),d=Rb.f(e,0,null),e=Rb.f(e,1,null),c[Me(d)]=Oe(e),b=P(b),d=null,e=0),f=0;else break;return c}if(null==b?0:b?b.k&8||b.fd||(b.k?0:y(xa,b)):y(xa,
b)){c=[];b=L(Tc.c(Oe,b));d=null;for(f=e=0;;)if(f<e)k=d.R(null,f),c.push(k),f+=1;else if(b=L(b))d=b,fc(d)?(b=kb(d),f=lb(d),d=b,e=T(b),b=f):(b=M(d),c.push(b),b=P(d),d=null,e=0),f=0;else break;return c}return z?b:null};var Pe=new W(null,"old-state","old-state"),Qe=new W(null,"path","path"),Re=new W(null,"new-value","new-value"),Se=new W(null,"paused","paused"),Te=new W(null,"ctor","ctor"),Ue=new W(null,"ready","ready"),Ve=new W(null,"componentDidUpdate","componentDidUpdate"),We=new W(null,"idle","idle"),Xe=new W(null,"fn","fn"),Ye=new W(null,"new-state","new-state"),Ze=new W(null,"instrument","instrument"),ja=new W(null,"meta","meta"),$e=new W(null,"react-key","react-key"),af=new W(null,"walk","walk"),bf=new W("om.core",
"id","om.core/id"),ka=new W(null,"dup","dup"),cf=new W(null,"key","key"),z=new W(null,"else","else"),df=new W(null,"backgrounds","backgrounds"),ef=new W(null,"ref","ref"),De=new W(null,"validator","validator"),Bb=new W(null,"default","default"),ff=new W(null,"finally-block","finally-block"),gf=new W(null,"initialing","initialing"),hf=new W(null,"css","css"),jf=new W(null,"old-value","old-value"),kf=new W("om.core","pass","om.core/pass"),lf=new W(null,"cursor","cursor"),mf=new W(null,"recur","recur"),
nf=new W(null,"init-state","init-state"),of=new W(null,"catch-block","catch-block"),pf=new W(null,"src","src"),qf=new W(null,"state","state"),rf=new W(null,"fade","fade"),sf=new W(null,"nth-slide","nth-slide"),ha=new W(null,"flush-on-newline","flush-on-newline"),tf=new W(null,"componentWillUnmount","componentWillUnmount"),uf=new W(null,"componentWillReceiveProps","componentWillReceiveProps"),vf=new W(null,"ch","ch"),wf=new W(null,"shouldComponentUpdate","shouldComponentUpdate"),ia=new W(null,"readably",
"readably"),xf=new W(null,"preload","preload"),yf=new W(null,"render","render"),zf=new W(null,"loading","loading"),Af=new W(null,"slide","slide"),la=new W(null,"print-length","print-length"),Bf=new W(null,"componentWillUpdate","componentWillUpdate"),Cf=new W(null,"id","id"),Df=new W(null,"getInitialState","getInitialState"),Ef=new W(null,"catch-exception","catch-exception"),Ff=new W(null,"opts","opts"),Gf=new W(null,"prev","prev"),Hf=new W(null,"url","url"),If=new W(null,"continue-block","continue-block"),
Jf=new W("om.core","index","om.core/index"),Kf=new W(null,"playing","playing"),Lf=new W(null,"shared","shared"),Mf=new W(null,"componentDidMount","componentDidMount"),Nf=new W(null,"audio","audio"),Of=new W(null,"tag","tag"),Pf=new W(null,"player-css","player-css"),Qf=new W(null,"target","target"),Rf=new W(null,"getDisplayName","getDisplayName"),Sf=new W(null,"icon-css","icon-css"),Tf=new W(null,"delay","delay"),Uf=new W(null,"componentWillMount","componentWillMount"),Vf=new W("om.core","defer","om.core/defer"),
Wf=new W(null,"tx-listen","tx-listen"),Xf=new W(null,"text","text");function Yf(a,b){React.createClass({render:function(){return this.transferPropsTo(a.e?a.e({children:this.props.children,onChange:this.onChange,value:this.state.value}):a.call(null,{children:this.props.children,onChange:this.onChange,value:this.state.value}))},componentWillReceiveProps:function(a){return this.setState({value:a.value})},onChange:function(a){var b=this.props.onChange;if(null==b)return null;b.e?b.e(a):b.call(null,a);return this.setState({value:a.target.value})},getInitialState:function(){return{value:this.props.value}},
getDisplayName:function(){return b}})}Yf(React.DOM.input,"input");Yf(React.DOM.textarea,"textarea");Yf(React.DOM.option,"option");var Zf;function $f(a,b,c){if(a?a.yb:a)return a.yb(0,b,c);var d;d=$f[s(null==a?null:a)];if(!d&&(d=$f._,!d))throw A("WritePort.put!",a);return d.call(null,a,b,c)}function ag(a){if(a?a.Qb:a)return!0;var b;b=ag[s(null==a?null:a)];if(!b&&(b=ag._,!b))throw A("Handler.active?",a);return b.call(null,a)}function bg(a){if(a?a.wb:a)return a.wb();var b;b=bg[s(null==a?null:a)];if(!b&&(b=bg._,!b))throw A("Buffer.full?",a);return b.call(null,a)};function cg(a,b,c,d,e){for(var f=0;;)if(f<e)c[d+f]=a[b+f],f+=1;else break}function dg(a,b,c,d){this.head=a;this.C=b;this.length=c;this.h=d}dg.prototype.pop=function(){if(0===this.length)return null;var a=this.h[this.C];this.h[this.C]=null;this.C=(this.C+1)%this.h.length;this.length-=1;return a};dg.prototype.unshift=function(a){this.h[this.head]=a;this.head=(this.head+1)%this.h.length;this.length+=1;return null};function eg(a,b){a.length+1===a.h.length&&a.resize();a.unshift(b)}
dg.prototype.resize=function(){var a=Array(2*this.h.length);return this.C<this.head?(cg(this.h,this.C,a,0,this.length),this.C=0,this.head=this.length,this.h=a):this.C>this.head?(cg(this.h,this.C,a,0,this.h.length-this.C),cg(this.h,0,a,this.h.length-this.C,this.head),this.C=0,this.head=this.length,this.h=a):this.C===this.head?(this.head=this.C=0,this.h=a):null};function fg(a,b){for(var c=a.length,d=0;;)if(d<c){var e=a.pop();(b.e?b.e(e):b.call(null,e))&&a.unshift(e);d+=1}else break}
function gg(a){if(!(0<a))throw Error("Assert failed: Can't create a ring buffer of size 0\n"+B.e(ye.l(Q([uc(new K(null,"\x3e","\x3e",1085014381,null),new K(null,"n","n",-2092305744,null),0)],0))));return new dg(0,0,0,Array(a))}function hg(a,b){this.aa=a;this.Lc=b;this.w=0;this.k=2}hg.prototype.T=function(){return this.aa.length};hg.prototype.wb=function(){return this.aa.length===this.Lc};hg.prototype.Ac=function(){return this.aa.pop()};
function ig(a,b){if(!ma(bg(a)))throw Error("Assert failed: Can't add to a full buffer\n"+B.e(ye.l(Q([uc(new K(null,"not","not",1044554643,null),uc(new K("impl","full?","impl/full?",-97582774,null),new K(null,"this","this",1028897902,null)))],0))));a.aa.unshift(b)};var jg=null,kg=gg(32),lg=!1,mg=!1;function ng(){lg=!0;mg=!1;for(var a=0;;){var b=kg.pop();if(null!=b&&(b.v?b.v():b.call(null),1024>a)){a+=1;continue}break}lg=!1;return 0<kg.length?og.v?og.v():og.call(null):null}"undefined"!==typeof MessageChannel&&(jg=new MessageChannel,jg.port1.onmessage=function(){return ng()});
function og(){var a=mg;if(x(a?lg:a))return null;mg=!0;return"undefined"!==typeof MessageChannel?jg.port2.postMessage(0):"undefined"!==typeof setImmediate?setImmediate(ng):z?setTimeout(ng,0):null}function pg(a){eg(kg,a);og()}function qg(a,b){setTimeout(a,b)};var rg,tg=function sg(b){"undefined"===typeof rg&&(rg=function(b,d,e){this.val=b;this.kc=d;this.Gc=e;this.w=0;this.k=425984},rg.Ka=!0,rg.Ja="cljs.core.async.impl.channels/t13759",rg.Ra=function(b,d){return I(d,"cljs.core.async.impl.channels/t13759")},rg.prototype.Ua=function(){return this.val},rg.prototype.F=function(){return this.Gc},rg.prototype.G=function(b,d){return new rg(this.val,this.kc,d)});return new rg(b,sg,null)};function ug(a,b){this.handler=a;this.val=b}
function vg(a){return ag(a.handler)}function wg(a,b,c,d,e,f){this.ib=a;this.nb=b;this.hb=c;this.mb=d;this.aa=e;this.closed=f}wg.prototype.xb=function(){if(!this.closed)for(this.closed=!0;;){var a=this.ib.pop();if(null!=a)pg(function(a){return function(){return a.e?a.e(null):a.call(null,null)}}(a.ia,a,this));else break}return null};
wg.prototype.Bc=function(a){if(null!=this.aa&&0<T(this.aa)){for(var b=a.ia,c=tg(this.aa.Ac());;){var d=this.hb.pop();if(null!=d){var e=d.handler,f=d.val;pg(function(a){return function(){return a.e?a.e(!0):a.call(null,!0)}}(e.ia,a.ia,e,f,d,b,c,this));ig(this.aa,f)}break}return c}for(;;){c=this.hb.pop();if(null!=c)return d=c.handler,e=c.val,f=d.ia,b=a.ia,pg(function(a){return function(){return a.e?a.e(!0):a.call(null,!0)}}(f,b,d,e,c,this)),tg(e);if(this.closed)return b=a.ia,tg(null);64<this.nb?(this.nb=
0,fg(this.ib,ag)):this.nb+=1;if(!(1024>this.ib.length))throw Error("Assert failed: "+B.e("No more than "+B.e(1024)+" pending takes are allowed on a single channel.")+"\n"+B.e(ye.l(Q([uc(new K(null,"\x3c","\x3c",993667236,null),uc(new K(null,".-length",".-length",-280799999,null),new K(null,"takes","takes",298247964,null)),new K("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))],0))));eg(this.ib,a);return null}};
wg.prototype.yb=function(a,b,c){if(null==b)throw Error("Assert failed: Can't put nil in on a channel\n"+B.e(ye.l(Q([uc(new K(null,"not","not",1044554643,null),uc(new K(null,"nil?","nil?",1612038930,null),new K(null,"val","val",1769233139,null)))],0))));if(a=this.closed)return tg(!a);for(;;){var d=this.ib.pop();if(null!=d)c=c.ia,pg(function(a){return function(){return a.e?a.e(b):a.call(null,b)}}(d.ia,c,d,a,this));else{if(null==this.aa||this.aa.wb()){64<this.mb?(this.mb=0,fg(this.hb,vg)):this.mb+=1;
if(!(1024>this.hb.length))throw Error("Assert failed: "+B.e("No more than "+B.e(1024)+" pending puts are allowed on a single channel. Consider using a windowed buffer.")+"\n"+B.e(ye.l(Q([uc(new K(null,"\x3c","\x3c",993667236,null),uc(new K(null,".-length",".-length",-280799999,null),new K(null,"puts","puts",-1883877054,null)),new K("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))],0))));eg(this.hb,new ug(c,b));return null}c=c.ia;ig(this.aa,b)}return tg(!0)}};
function xg(a){return new wg(gg(32),0,gg(32),0,a,!1)};var yg,Ag=function zg(b){"undefined"===typeof yg&&(yg=function(b,d,e){this.ia=b;this.zb=d;this.Fc=e;this.w=0;this.k=393216},yg.Ka=!0,yg.Ja="cljs.core.async.impl.ioc-helpers/t13686",yg.Ra=function(b,d){return I(d,"cljs.core.async.impl.ioc-helpers/t13686")},yg.prototype.Qb=function(){return!0},yg.prototype.F=function(){return this.Fc},yg.prototype.G=function(b,d){return new yg(this.ia,this.zb,d)});return new yg(b,zg,null)};
function Bg(a){try{return a[0].call(null,a)}catch(b){if(b instanceof Object)throw a[6].xb(),b;if(z)throw b;return null}}function Cg(a,b,c){c=c.Bc(Ag(function(c){a[2]=c;a[1]=b;return Bg(a)}));return x(c)?(a[2]=H(c),a[1]=b,mf):null}function Dg(a,b){var c=a[6];null!=b&&c.yb(0,b,Ag(function(){return function(){return null}}(c)));c.xb();return c}
function Eg(a){for(;;){var b=a[4],c=of.e(b),d=Ef.e(b),e=a[5];if(x(function(){var a=e;return x(a)?ma(b):a}()))throw e;if(x(function(){var a=e;return x(a)?(a=c,x(a)?e instanceof d:a):a}())){a[1]=c;a[2]=e;a[5]=null;a[4]=V.l(b,of,null,Q([Ef,null],0));break}if(x(function(){var a=e;return x(a)?ma(c)&&ma(ff.e(b)):a}()))a[4]=Gf.e(b);else{if(x(function(){var a=e;return x(a)?(a=ma(c))?ff.e(b):a:a}())){a[1]=ff.e(b);a[4]=V.f(b,ff,null);break}if(x(function(){var a=ma(e);return a?ff.e(b):a}())){a[1]=ff.e(b);a[4]=
V.f(b,ff,null);break}if(ma(e)&&ma(ff.e(b))){a[1]=If.e(b);a[4]=Gf.e(b);break}if(z)throw Error("Assert failed: No matching clause\n"+B.e(ye.l(Q([!1],0))));break}}};var Fg=function(){function a(a){for(;;)if(.5>Math.random()&&15>a)a+=1;else return a}function b(){return c.e(0)}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.v=b;c.e=a;return c}();function Gg(a,b,c){this.key=a;this.val=b;this.forward=c;this.w=0;this.k=2155872256}Gg.prototype.H=function(a,b,c){return qe(b,we,"["," ","]",c,this)};Gg.prototype.O=function(){return ya(ya(O,this.val),this.key)};
var Hg=function(){function a(a,b,c){c=Array(c+1);for(var g=0;;)if(g<c.length)c[g]=null,g+=1;else break;return new Gg(a,b,c)}function b(a){return c.f(null,null,a)}var c=null,c=function(c,e,f){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.f=a;return c}(),Ig=function(){function a(a,b,c,g){for(;;){if(0>c)return a;a:{for(;;){var k=a.forward[c];if(x(k))if(k.key<b)a=k;else break a;else break a}a=void 0}null!=
g&&(g[c]=a);c-=1}}function b(a,b,f){return c.n(a,b,f,null)}var c=null,c=function(c,e,f,g){switch(arguments.length){case 3:return b.call(this,c,e,f);case 4:return a.call(this,c,e,f,g)}throw Error("Invalid arity: "+arguments.length);};c.f=b;c.n=a;return c}();function Jg(a,b){this.header=a;this.ja=b;this.w=0;this.k=2155872256}Jg.prototype.H=function(a,b,c){return qe(b,function(){return function(a){return qe(b,we,""," ","",c,a)}}(this),"{",", ","}",c,this)};
Jg.prototype.O=function(){return function(a){return function c(d){return new Ac(null,function(){return function(){return null==d?null:S(new Y(null,2,5,vd,[d.key,d.val],null),c(d.forward[0]))}}(a),null,null)}}(this)(this.header.forward[0])};
Jg.prototype.put=function(a,b){var c=Array(15),d=Ig.n(this.header,a,this.ja,c).forward[0];if(null!=d&&d.key===a)return d.val=b;d=Fg.v();if(d>this.ja){for(var e=this.ja+1;;)if(e<=d+1)c[e]=this.header,e+=1;else break;this.ja=d}for(d=Hg.f(a,b,Array(d));;)return 0<=this.ja?(c=c[0].forward,d.forward[0]=c[0],c[0]=d):null};
Jg.prototype.remove=function(a){var b=Array(15),c=Ig.n(this.header,a,this.ja,b).forward[0];if(null!=c&&c.key===a){for(a=0;;)if(a<=this.ja){var d=b[a].forward;d[a]===c&&(d[a]=c.forward[a]);a+=1}else break;for(;;)if(0<this.ja&&null==this.header.forward[this.ja])this.ja-=1;else return null}else return null};
function Kg(a){for(var b=Lg,c=b.header,d=b.ja;;){if(0>d)return c===b.header?null:c;var e;a:{for(e=c;;){e=e.forward[d];if(null==e){e=null;break a}if(e.key>=a)break a}e=void 0}null!=e?(d-=1,c=e):d-=1}}var Lg=new Jg(Hg.e(0),0);function Mg(a){var b=(new Date).valueOf()+a,c=Kg(b),d=x(x(c)?c.key<b+10:c)?c.val:null;if(x(d))return d;var e=xg(null);Lg.put(b,e);qg(function(a,b,c){return function(){Lg.remove(c);return a.xb()}}(e,d,b,c),a);return e};var Og=function Ng(b){"undefined"===typeof Zf&&(Zf=function(b,d,e){this.ia=b;this.zb=d;this.Ec=e;this.w=0;this.k=393216},Zf.Ka=!0,Zf.Ja="cljs.core.async/t11010",Zf.Ra=function(b,d){return I(d,"cljs.core.async/t11010")},Zf.prototype.Qb=function(){return!0},Zf.prototype.F=function(){return this.Ec},Zf.prototype.G=function(b,d){return new Zf(this.ia,this.zb,d)});return new Zf(b,Ng,null)},Pg=function(){function a(a){a=zb.c(a,0)?null:a;a="number"===typeof a?new hg(gg(a),a):a;return xg(a)}function b(){return c.e(null)}
var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.v=b;c.e=a;return c}(),Qg=Og(function(){return null}),Rg=function(){function a(a,b,c,d){a=$f(a,b,Og(c));return x(a)?(b=H(a),x(d)?c.e?c.e(b):c.call(null,b):pg(function(a){return function(){return c.e?c.e(a):c.call(null,a)}}(b,a,a)),b):!0}function b(a,b,c){return d.n(a,b,c,!0)}function c(a,b){var c=$f(a,b,Qg);return x(c)?H(c):!0}var d=null,d=function(d,
f,g,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,g);case 4:return a.call(this,d,f,g,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.f=b;d.n=a;return d}();function Sg(){}Sg.Cc=function(){return Sg.Rb?Sg.Rb:Sg.Rb=new Sg};Sg.prototype.Mc=0;var Z=!1,Tg=null,Ug=null,Vg=null,Wg={};function Xg(a){if(a?a.Qc:a)return a.Qc(a);var b;b=Xg[s(null==a?null:a)];if(!b&&(b=Xg._,!b))throw A("IDisplayName.display-name",a);return b.call(null,a)}var Yg={};function Zg(a){if(a?a.Bb:a)return a.Bb(a);var b;b=Zg[s(null==a?null:a)];if(!b&&(b=Zg._,!b))throw A("IInitState.init-state",a);return b.call(null,a)}var $g={};
function ah(a,b,c){if(a?a.Tc:a)return a.Tc(a,b,c);var d;d=ah[s(null==a?null:a)];if(!d&&(d=ah._,!d))throw A("IShouldUpdate.should-update",a);return d.call(null,a,b,c)}var bh={};function ch(a){if(a?a.Eb:a)return a.Eb(a);var b;b=ch[s(null==a?null:a)];if(!b&&(b=ch._,!b))throw A("IWillMount.will-mount",a);return b.call(null,a)}var dh={};function eh(a){if(a?a.Oc:a)return a.Oc(a);var b;b=eh[s(null==a?null:a)];if(!b&&(b=eh._,!b))throw A("IDidMount.did-mount",a);return b.call(null,a)}var fh={};
function gh(a){if(a?a.Xc:a)return a.Xc(a);var b;b=gh[s(null==a?null:a)];if(!b&&(b=gh._,!b))throw A("IWillUnmount.will-unmount",a);return b.call(null,a)}var hh={};function ih(a,b,c){if(a?a.Yc:a)return a.Yc(a,b,c);var d;d=ih[s(null==a?null:a)];if(!d&&(d=ih._,!d))throw A("IWillUpdate.will-update",a);return d.call(null,a,b,c)}var jh={};function kh(a,b,c){if(a?a.Pc:a)return a.Pc(a,b,c);var d;d=kh[s(null==a?null:a)];if(!d&&(d=kh._,!d))throw A("IDidUpdate.did-update",a);return d.call(null,a,b,c)}
var lh={};function mh(a,b){if(a?a.Wc:a)return a.Wc(a,b);var c;c=mh[s(null==a?null:a)];if(!c&&(c=mh._,!c))throw A("IWillReceiveProps.will-receive-props",a);return c.call(null,a,b)}var nh={};function oh(a){if(a?a.Cb:a)return a.Cb(a);var b;b=oh[s(null==a?null:a)];if(!b&&(b=oh._,!b))throw A("IRender.render",a);return b.call(null,a)}var ph={};function qh(a,b){if(a?a.Db:a)return a.Db(a,b);var c;c=qh[s(null==a?null:a)];if(!c&&(c=qh._,!c))throw A("IRenderState.render-state",a);return c.call(null,a,b)}
var rh={};function sh(a,b,c,d,e){if(a?a.Sc:a)return a.Sc(a,b,c,d,e);var f;f=sh[s(null==a?null:a)];if(!f&&(f=sh._,!f))throw A("IOmSwap.-om-swap!",a);return f.call(null,a,b,c,d,e)}
var th=function(){function a(a,b){if(a?a.Vb:a)return a.Vb(a,b);var c;c=th[s(null==a?null:a)];if(!c&&(c=th._,!c))throw A("IGetState.-get-state",a);return c.call(null,a,b)}function b(a){if(a?a.Ub:a)return a.Ub(a);var b;b=th[s(null==a?null:a)];if(!b&&(b=th._,!b))throw A("IGetState.-get-state",a);return b.call(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.c=a;return c}(),
uh=function(){function a(a,b){if(a?a.Tb:a)return a.Tb(a,b);var c;c=uh[s(null==a?null:a)];if(!c&&(c=uh._,!c))throw A("IGetRenderState.-get-render-state",a);return c.call(null,a,b)}function b(a){if(a?a.Sb:a)return a.Sb(a);var b;b=uh[s(null==a?null:a)];if(!b&&(b=uh._,!b))throw A("IGetRenderState.-get-render-state",a);return b.call(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.e=
b;c.c=a;return c}(),vh=function(){function a(a,b,c){if(a?a.fc:a)return a.fc(a,b,c);var g;g=vh[s(null==a?null:a)];if(!g&&(g=vh._,!g))throw A("ISetState.-set-state!",a);return g.call(null,a,b,c)}function b(a,b){if(a?a.ec:a)return a.ec(a,b);var c;c=vh[s(null==a?null:a)];if(!c&&(c=vh._,!c))throw A("ISetState.-set-state!",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);
};c.c=b;c.f=a;return c}();function wh(a){if(a?a.bc:a)return a.bc(a);var b;b=wh[s(null==a?null:a)];if(!b&&(b=wh._,!b))throw A("IRenderQueue.-get-queue",a);return b.call(null,a)}function xh(a,b){if(a?a.cc:a)return a.cc(a,b);var c;c=xh[s(null==a?null:a)];if(!c&&(c=xh._,!c))throw A("IRenderQueue.-queue-render!",a);return c.call(null,a,b)}function yh(a){if(a?a.ac:a)return a.ac(a);var b;b=yh[s(null==a?null:a)];if(!b&&(b=yh._,!b))throw A("IRenderQueue.-empty-queue!",a);return b.call(null,a)}
function zh(a){if(a?a.hc:a)return a.value;var b;b=zh[s(null==a?null:a)];if(!b&&(b=zh._,!b))throw A("IValue.-value",a);return b.call(null,a)}zh._=function(a){return a};var Ah={};function Bh(a){if(a?a.ob:a)return a.ob(a);var b;b=Bh[s(null==a?null:a)];if(!b&&(b=Bh._,!b))throw A("ICursor.-path",a);return b.call(null,a)}function Ch(a){if(a?a.pb:a)return a.pb(a);var b;b=Ch[s(null==a?null:a)];if(!b&&(b=Ch._,!b))throw A("ICursor.-state",a);return b.call(null,a)}
var Dh={},Eh=function(){function a(a,b,c){if(a?a.Vc:a)return a.Vc(a,b,c);var g;g=Eh[s(null==a?null:a)];if(!g&&(g=Eh._,!g))throw A("IToCursor.-to-cursor",a);return g.call(null,a,b,c)}function b(a,b){if(a?a.Uc:a)return a.Uc(a,b);var c;c=Eh[s(null==a?null:a)];if(!c&&(c=Eh._,!c))throw A("IToCursor.-to-cursor",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};
c.c=b;c.f=a;return c}();function Fh(a,b,c,d){if(a?a.Nc:a)return a.Nc(a,b,c,d);var e;e=Fh[s(null==a?null:a)];if(!e&&(e=Fh._,!e))throw A("ICursorDerive.-derive",a);return e.call(null,a,b,c,d)}Fh._=function(a,b,c,d){return Gh.f?Gh.f(b,c,d):Gh.call(null,b,c,d)};function Hh(a){return Bh(a)}function Ih(a,b,c,d){if(a?a.qb:a)return a.qb(a,b,c,d);var e;e=Ih[s(null==a?null:a)];if(!e&&(e=Ih._,!e))throw A("ITransact.-transact!",a);return e.call(null,a,b,c,d)}var Jh={};
function Kh(a,b,c){if(a?a.Xb:a)return a.Xb(a,b,c);var d;d=Kh[s(null==a?null:a)];if(!d&&(d=Kh._,!d))throw A("INotify.-listen!",a);return d.call(null,a,b,c)}function Lh(a,b){if(a?a.Zb:a)return a.Zb(a,b);var c;c=Lh[s(null==a?null:a)];if(!c&&(c=Lh._,!c))throw A("INotify.-unlisten!",a);return c.call(null,a,b)}function Mh(a,b,c){if(a?a.Yb:a)return a.Yb(a,b,c);var d;d=Mh[s(null==a?null:a)];if(!d&&(d=Mh._,!d))throw A("INotify.-notify!",a);return d.call(null,a,b,c)}
function Nh(a,b,c,d,e){var f=H(a),g=$c(Hh.e?Hh.e(b):Hh.call(null,b),c);c=(a?x(x(null)?null:a.wd)||(a.Y?0:y(rh,a)):y(rh,a))?sh(a,b,c,d,e):$b(g)?Ge.c(a,d):z?Ge.n(a,dd,g,d):null;if(zb.c(c,Vf))return null;a=new u(null,5,[Qe,g,jf,ad.c(f,g),Re,ad.c(H(a),g),Pe,f,Ye,H(a)],null);return null!=e?Oh.c?Oh.c(b,V.f(a,Of,e)):Oh.call(null,b,V.f(a,Of,e)):Oh.c?Oh.c(b,a):Oh.call(null,b,a)}function Ph(a){return a?x(x(null)?null:a.Ab)?!0:a.Y?!1:y(Ah,a):y(Ah,a)}
function Qh(a){var b=a.props.children;if(Ub(b)){var c=a.props,d;a:{var e=Z;try{Z=!0;d=b.e?b.e(a):b.call(null,a);break a}finally{Z=e}d=void 0}a=c.children=d}else a=b;return a}function Rh(a){return a.props.__om_cursor}
var Sh=function(){function a(a,b){var c=cc(b)?b:new Y(null,1,5,vd,[b],null);return th.c(a,c)}function b(a){return th.e(a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.c=a;return c}(),Th=function(){function a(a,b){return cc(b)?$b(b)?c.e(a):z?ad.c(c.e(a),b):null:U.c(c.e(a),b)}function b(a){return null==a?null:a.props.__om_shared}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,
c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.c=a;return c}();function Uh(a){a=a.state;var b=a.__om_pending_state;return x(b)?(a.__om_prev_state=a.__om_state,a.__om_state=b,a.__om_pending_state=null,a):null}
var Vh=function(){function a(a,b){var c=x(b)?b:a.props,g=c.__om_state;if(x(g)){var k=a.state,l=k.__om_pending_state;k.__om_pending_state=ke.l(Q([x(l)?l:k.__om_state,g],0));return c.__om_state=null}return null}function b(a){return c.c(a,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.e=b;c.c=a;return c}(),Wh=Sb([Ve,tf,uf,wf,yf,Bf,Df,Mf,Rf,Uf],[function(a){var b=Qh(this);if(b?x(x(null)?
null:b.rd)||(b.Y?0:y(jh,b)):y(jh,b)){var c=this.state,d=Z;try{Z=!0;var e=c.__om_prev_state;kh(b,Rh({props:a}),x(e)?e:c.__om_state)}finally{Z=d}}return this.state.__om_prev_state=null},function(){var a=Qh(this);if(a?x(x(null)?null:a.Cd)||(a.Y?0:y(fh,a)):y(fh,a)){var b=Z;try{return Z=!0,gh(a)}finally{Z=b}}else return null},function(a){var b=Qh(this);if(b?x(x(null)?null:b.Bd)||(b.Y?0:y(lh,b)):y(lh,b)){var c=Z;try{return Z=!0,mh(b,Rh({props:a}))}finally{Z=c}}else return null},function(a){var b=Z;try{Z=
!0;var c=this.props,d=this.state,e=Qh(this);Vh.c(this,a);return(e?x(x(null)?null:e.zd)||(e.Y?0:y($g,e)):y($g,e))?ah(e,Rh({props:a}),th.e(this)):Pc.c(zh(c.__om_cursor),zh(a.__om_cursor))?!0:null!=d.__om_pending_state?!0:c.__om_index!==a.__om_index?!0:z?!1:null}finally{Z=b}},function(){var a=Qh(this),b=this.props,c=Z;try{if(Z=!0,a?x(x(null)?null:a.$b)||(a.Y?0:y(nh,a)):y(nh,a)){var d=Tg,e=Vg,f=Ug;try{return Tg=this,Vg=b.__om_app_state,Ug=b.__om_instrument,oh(a)}finally{Ug=f,Vg=e,Tg=d}}else if(a?x(x(null)?
null:a.dc)||(a.Y?0:y(ph,a)):y(ph,a)){d=Tg;e=Vg;f=Ug;try{return Tg=this,Vg=b.__om_app_state,Ug=b.__om_instrument,qh(a,Sh.e(this))}finally{Ug=f,Vg=e,Tg=d}}else return z?a:null}finally{Z=c}},function(a){var b=Qh(this);if(b?x(x(null)?null:b.Dd)||(b.Y?0:y(hh,b)):y(hh,b)){var c=Z;try{Z=!0,ih(b,Rh({props:a}),th.e(this))}finally{Z=c}}return Uh(this)},function(){var a=Qh(this),b=this.props,c=function(){var a=b.__om_init_state;return x(a)?a:Jd}(),d=bf.e(c),c={__om_state:ke.l(Q([Tb.c(c,bf),(a?x(x(null)?null:
a.Wb)||(a.Y?0:y(Yg,a)):y(Yg,a))?function(){var b=Z;try{return Z=!0,Zg(a)}finally{Z=b}}():null],0)),__om_id:x(d)?d:":"+(Sg.Cc().Mc++).toString(36)};b.__om_init_state=null;return c},function(){var a=Qh(this);if(a?x(x(null)?null:a.qd)||(a.Y?0:y(dh,a)):y(dh,a)){var b=Z;try{return Z=!0,eh(a)}finally{Z=b}}else return null},function(){var a=Qh(this);if(a?x(x(null)?null:a.sd)||(a.Y?0:y(Wg,a)):y(Wg,a)){var b=Z;try{return Z=!0,Xg(a)}finally{Z=b}}else return null},function(){Vh.e(this);var a=Qh(this);if(a?x(x(null)?
null:a.ic)||(a.Y?0:y(bh,a)):y(bh,a)){var b=Z;try{Z=!0,ch(a)}finally{Z=b}}return Uh(this)}]),Xh=React.createClass(function(a){a.vd=!0;a.Ub=function(){return function(){var a=this.state,c=a.__om_pending_state;return x(c)?c:a.__om_state}}(a);a.Vb=function(){return function(a,c){return ad.c(th.e(this),c)}}(a);a.ud=!0;a.Sb=function(){return function(){return this.state.__om_state}}(a);a.Tb=function(){return function(a,c){return ad.c(uh.e(this),c)}}(a);a.yd=!0;a.ec=function(){return function(a,c){var d=
Z;try{Z=!0;var e=this.props.__om_app_state;this.state.__om_pending_state=c;return null==e?null:xh(e,this)}finally{Z=d}}}(a);a.fc=function(){return function(a,c,d){a=Z;try{Z=!0;var e=this.props,f=this.state,g=th.e(this),k=e.__om_app_state;f.__om_pending_state=cd(g,c,d);return null==k?null:xh(k,this)}finally{Z=a}}}(a);return a}(Ne(Wh)));function Yh(a){return new Xh(a)}function Zh(a,b,c){this.value=a;this.state=b;this.path=c;this.k=2158397195;this.w=8192}h=Zh.prototype;
h.L=function(a,b){return F.f(this,b,null)};h.M=function(a,b,c){if(Z)return a=F.f(this.value,b,c),zb.c(a,c)?c:Fh(this,a,this.state,Ob.c(this.path,b));throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.H=function(a,b,c){if(Z)return ab(this.value,b,c);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.Ab=!0;
h.ob=function(){return this.path};h.pb=function(){return this.state};h.F=function(){if(Z)return Yb(this.value);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.fa=function(){return new Zh(this.value,this.state,this.path)};
h.T=function(){if(Z)return va(this.value);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.J=function(a,b){if(Z)return Ph(b)?zb.c(this.value,zh(b)):zb.c(this.value,b);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.hc=function(){return this.value};
h.lb=function(a,b){if(Z)return new Zh(Ga(this.value,b),this.state,this.path);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.gc=!0;h.qb=function(a,b,c,d){return Nh(this.state,this,b,c,d)};h.Za=function(a,b){if(Z)return Da(this.value,b);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.Qa=function(a,b,c){if(Z)return new Zh(Ea(this.value,b,c),this.state,this.path);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.O=function(){var a=this;if(Z)return 0<T(a.value)?Tc.c(function(b){return function(c){var d=Rb.f(c,0,null);c=Rb.f(c,1,null);return new Y(null,2,5,vd,[d,Fh(b,c,a.state,Ob.c(a.path,d))],null)}}(this),a.value):null;throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.G=function(a,b){if(Z)return new Zh(Xb(this.value,b),this.state,this.path);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.S=function(a,b){if(Z)return new Zh(ya(this.value,b),this.state,this.path);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.L(null,c);case 3:return this.M(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return this.L(null,a)};h.c=function(a,b){return this.M(null,a,b)};h.Ua=function(){if(Z)throw Error("Cannot deref cursor during render phase: "+B.e(this));return ad.c(H(this.state),this.path)};
function $h(a,b,c){this.value=a;this.state=b;this.path=c;this.k=2175181595;this.w=8192}h=$h.prototype;h.L=function(a,b){if(Z)return C.f(this,b,null);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.M=function(a,b,c){if(Z)return C.f(this,b,c);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.R=function(a,b){if(Z)return Fh(this,C.c(this.value,b),this.state,Ob.c(this.path,b));throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.ga=function(a,b,c){if(Z)return b<va(this.value)?Fh(this,C.c(this.value,b),this.state,Ob.c(this.path,b)):c;throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.H=function(a,b,c){if(Z)return ab(this.value,b,c);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.Ab=!0;h.ob=function(){return this.path};h.pb=function(){return this.state};h.F=function(){if(Z)return Yb(this.value);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.fa=function(){return new $h(this.value,this.state,this.path)};h.T=function(){if(Z)return va(this.value);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.J=function(a,b){if(Z)return Ph(b)?zb.c(this.value,zh(b)):zb.c(this.value,b);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.hc=function(){return this.value};
h.gc=!0;h.qb=function(a,b,c,d){return Nh(this.state,this,b,c,d)};h.Za=function(a,b){if(Z)return Da(this.value,b);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.Qa=function(a,b,c){if(Z)return Fh(this,Na(this.value,b,c),this.state,this.path);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.O=function(){var a=this;if(Z)return 0<T(a.value)?Tc.f(function(b){return function(c,d){return Fh(b,c,a.state,Ob.c(a.path,d))}}(this),a.value,pe.v()):null;throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.G=function(a,b){if(Z)return new $h(Xb(this.value,b),this.state,this.path);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};h.S=function(a,b){if(Z)return new $h(ya(this.value,b),this.state,this.path);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.L(null,c);case 3:return this.M(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(qa(b)))};h.e=function(a){return this.L(null,a)};h.c=function(a,b){return this.M(null,a,b)};h.Ua=function(){if(Z)throw Error("Cannot deref cursor during render phase: "+B.e(this));return ad.c(H(this.state),this.path)};
function ai(a,b,c){var d=ta(a);d.pc=!0;d.J=function(){return function(b,c){if(Z)return Ph(c)?zb.c(a,zh(c)):zb.c(a,c);throw Error("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed");}}(d);d.gc=!0;d.qb=function(){return function(a,c,d,k){return Nh(b,this,c,d,k)}}(d);d.Ab=!0;d.ob=function(){return function(){return c}}(d);d.pb=function(){return function(){return b}}(d);d.gd=!0;d.Ua=function(){return function(){if(Z)throw Error("Cannot deref cursor during render phase: "+
B.e(this));return ad.c(H(b),c)}}(d);return d}
var Gh=function(){function a(a,b,c){return Ph(a)?a:(a?x(x(null)?null:a.Ad)||(a.Y?0:y(Dh,a)):y(Dh,a))?Eh.f(a,b,c):Lb(a)?new $h(a,b,c):dc(a)?new Zh(a,b,c):(a?a.w&8192||a.ed||(a.w?0:y(sa,a)):y(sa,a))?ai(a,b,c):z?a:null}function b(a,b){return d.f(a,b,td)}function c(a){return d.f(a,null,td)}var d=null,d=function(d,f,g){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,f);case 3:return a.call(this,d,f,g)}throw Error("Invalid arity: "+arguments.length);};d.e=c;d.c=b;d.f=a;
return d}();function Oh(a,b){var c=Ch(a);return Mh(c,b,Gh.c(H(c),c))}var bi=!1,ci=Ee.e(ne);function di(){bi=!1;for(var a=L(H(ci)),b=null,c=0,d=0;;)if(d<c){var e=b.R(null,d);e.v?e.v():e.call(null);d+=1}else if(a=L(a))b=a,fc(b)?(a=kb(b),c=lb(b),b=a,e=T(a),a=c,c=e):(e=M(b),e.v?e.v():e.call(null),a=P(b),b=null,c=0),d=0;else return null}
var ei=Ee.e(Jd),fi=function(){function a(a,b,c){if(!Qc(new le(null,new u(null,10,[Te,null,Xe,null,Ze,null,$e,null,cf,null,nf,null,qf,null,Ff,null,Jf,null,Lf,null],null),null),je(c)))throw Error("Assert failed: "+B.e(Wb.n(B,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",Zc(je(c))))+"\n"+B.e(ye.l(Q([uc(new K(null,"valid?","valid?",1428119148,null),new K(null,"m","m",-1021758608,null))],0))));if(null==c){var g=function(){var a=Lf.e(c);
return x(a)?a:Th.e(Tg)}(),k=function(){var a=Te.e(c);return x(a)?a:Yh}(),g=k.e?k.e({children:function(){return function(c){var f=Z;try{return Z=!0,a.c?a.c(b,c):a.call(null,b,c)}finally{Z=f}}}(g,k),__om_instrument:Ug,__om_app_state:Vg,__om_shared:g,__om_cursor:b}):k.call(null,{children:function(){return function(c){var f=Z;try{return Z=!0,a.c?a.c(b,c):a.call(null,b,c)}finally{Z=f}}}(g,k),__om_instrument:Ug,__om_app_state:Vg,__om_shared:g,__om_cursor:b});g.constructor=aa(a);return g}if(z){var l=jc(c)?
Wb.c(he,c):c,m=U.c(l,Ff),p=U.c(l,nf),n=U.c(l,qf),q=U.c(l,cf),t=U.c(c,Xe),v=null!=t?function(){var a=Jf.e(c);return x(a)?t.c?t.c(b,a):t.call(null,b,a):t.e?t.e(b):t.call(null,b)}():b,w=null!=q?U.c(v,q):U.c(c,$e),g=function(){var a=Lf.e(c);return x(a)?a:Th.e(Tg)}(),k=function(){var a=Te.e(c);return x(a)?a:Yh}(),g=k.e?k.e({__om_shared:g,__om_index:Jf.e(c),__om_cursor:v,__om_app_state:Vg,key:w,__om_init_state:p,children:null==m?function(b,c,e,f,g,k,l,m){return function(b){var c=Z;try{return Z=!0,a.c?a.c(m,
b):a.call(null,m,b)}finally{Z=c}}}(c,l,m,p,n,q,t,v,w,g,k):function(b,c,e,f,g,k,l,m){return function(b){var c=Z;try{return Z=!0,a.f?a.f(m,b,e):a.call(null,m,b,e)}finally{Z=c}}}(c,l,m,p,n,q,t,v,w,g,k),__om_instrument:Ug,__om_state:n}):k.call(null,{__om_shared:g,__om_index:Jf.e(c),__om_cursor:v,__om_app_state:Vg,key:w,__om_init_state:p,children:null==m?function(b,c,e,f,g,k,l,m){return function(b){var c=Z;try{return Z=!0,a.c?a.c(m,b):a.call(null,m,b)}finally{Z=c}}}(c,l,m,p,n,q,t,v,w,g,k):function(b,c,
e,f,g,k,l,m){return function(b){var c=Z;try{return Z=!0,a.f?a.f(m,b,e):a.call(null,m,b,e)}finally{Z=c}}}(c,l,m,p,n,q,t,v,w,g,k),__om_instrument:Ug,__om_state:n});g.constructor=aa(a);return g}return null}function b(a,b){return c.f(a,b,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}(),gi=function(){function a(a,b,c){if(null!=Ug){var g;a:{var k=Z;try{Z=!0;
g=Ug.f?Ug.f(a,b,c):Ug.call(null,a,b,c);break a}finally{Z=k}g=void 0}return zb.c(g,kf)?fi.f(a,b,c):g}return fi.f(a,b,c)}function b(a,b){return c.f(a,b,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}();
function hi(a,b,c){if(!(a?x(x(null)?null:a.Rc)||(a.Y?0:y(Jh,a)):y(Jh,a))){var d=Ee.e(Jd),e=Ee.e(ne);a.xd=!0;a.bc=function(a,b,c){return function(){return H(c)}}(a,d,e);a.cc=function(a,b,c){return function(a,b){if(lc(H(c),b))return null;Ge.f(c,Ob,b);return Ge.c(this,Sc)}}(a,d,e);a.ac=function(a,b,c){return function(){return Ge.c(c,Pb)}}(a,d,e);a.Rc=!0;a.Xb=function(a,b){return function(a,c,d){null!=d&&Ge.n(b,V,c,d);return this}}(a,d,e);a.Zb=function(a,b){return function(a,c){Ge.f(b,Tb,c);return this}}(a,
d,e);a.Yb=function(a,b){return function(a,d,e){if(null!=c){a=L(H(b));for(var f=null,n=0,q=0;;)if(q<n){var t=f.R(null,q);Rb.f(t,0,null);t=Rb.f(t,1,null);t.c?t.c(d,e):t.call(null,d,e);q+=1}else if(a=L(a))fc(a)?(n=kb(a),a=lb(a),f=n,n=T(n)):(f=M(a),Rb.f(f,0,null),f=Rb.f(f,1,null),f.c?f.c(d,e):f.call(null,d,e),a=P(a),f=null,n=0),q=0;else break}return this}}(a,d,e)}return Kh(a,b,c)}
var ii=function(){function a(a,b,c,d){b=null==b?td:cc(b)?b:z?new Y(null,1,5,vd,[b],null):null;return Ih(a,b,c,d)}function b(a,b,c){return d.n(a,b,c,null)}function c(a,b){return d.n(a,td,b,null)}var d=null,d=function(d,f,g,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,g);case 4:return a.call(this,d,f,g,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.f=b;d.n=a;return d}(),ji=function(){function a(a,b,c){b=cc(b)?b:new Y(null,1,5,vd,[b],null);return vh.f(a,
b,c)}function b(a,b){return vh.c(a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.f=a;return c}();var ki,li,mi,ni,oi=Ee.e(new u(null,5,[Af,new Y(null,15,5,vd,[new u(null,4,[pf,"/img/solid/Solid Aqua Blue.png",rf,800,Of,"",Xf,""],null),new u(null,4,[pf,"/img/background/sky2.jpg",rf,700,Of,"",Xf,""],null),new u(null,4,[pf,"/img/background/Ducks on a Misty Pond.jpg",rf,700,Of,"Ducks on a Misty Pond",Xf,""],null),new u(null,4,[pf,"/img/background/wallpaper-1660505.jpg",rf,700,Of,"",Xf,""],null),new u(null,4,[pf,"/img/background/Sky.jpg",rf,700,Of,"Sky",Xf,""],null),new u(null,4,[pf,"/img/background/wallpaper-2822770.jpg",
rf,700,Of,"",Xf,""],null),new u(null,4,[pf,"/img/background/Lake.jpg",rf,700,Of,"Lake",Xf,""],null),new u(null,4,[pf,"/img/background/Beach.jpg",rf,700,Of,"Beach",Xf,""],null),new u(null,4,[pf,"/img/background/IMG_0275.JPG",rf,700,Of,"On Campus",Xf,""],null),new u(null,4,[pf,"/img/background/Bahamas Aerial.jpg",rf,700,Of,"On Campus",Xf,""],null),new u(null,4,[pf,"/img/background/Isles.jpg",rf,700,Of,"Isles",Xf,""],null),new u(null,4,[pf,"/img/background/wallpaper-185258.jpg",rf,700,Of,"",Xf,""],null),
new u(null,4,[pf,"/img/background/Mt. Fuji.jpg",rf,700,Of,"Mt. Fuji",Xf,""],null),new u(null,4,[pf,"/img/background/Milky Way.jpg",rf,700,Of,"Milky Way",Xf,""],null),new u(null,4,[pf,"/img/background/sky1.jpg",rf,700,Of,"",Xf,""],null)],null),Nf,new Y(null,2,5,vd,[new u(null,3,[Hf,"http://freshly-ground.com/data/audio/sm2/Adrian Glynn - Seven Or Eight Days.mp3",Cf,"Seven Or Eight Days - Adrian Glynn",ef,"#"],null),new u(null,3,[Hf,"/audio/dan_che.mp3",Cf,"Dan Che - Eason Chan",ef,"#"],null)],null),
lf,0,sf,0,qf,"initialing"],null)),pi=new u(null,5,[We,"fa fa-play",Kf,"fa fa-pause",zf,"fa fa-spinner fa-spin",gf,"fa fa-spinner fa-spin",Se,"fa fa-play"],null);function qi(){return U.c(Nf.e(H(oi)),lf.e(H(oi)))}function ri(a,b){return ii.f(a,qf,function(){return b})}function si(a){soundManager.play(Cf.e(qi()));return ri(a,"playing")}
var ui=function ti(b,c){"undefined"===typeof ki&&(ki=function(b,c,f,g){this.P=b;this.B=c;this.Zc=f;this.Hc=g;this.w=0;this.k=393216},ki.Ka=!0,ki.Ja="indexp.core/t9522",ki.Ra=function(b,c){return I(c,"indexp.core/t9522")},ki.prototype.dc=!0,ki.prototype.Db=function(b,c){var f=this;return React.DOM.div({onMouseOut:function(){return function(){return ji.f(f.P,Pf,"animated fadeOut")}}(this),onMouseOver:function(){return function(){return ji.f(f.P,Pf,"")}}(this),className:"player "+B.e(Pf.e(c))},React.DOM.p(null,
React.DOM.i({onClick:function(b){return function(){var c=qf.e(H(f.B));switch(c){case "idle":ri(f.B,"loading");si(f.B);var d=Pg.e(1);pg(function(b,c,d){return function(){var e=function(){return function(b){return function(){function c(d){for(;;){var e=function(){try{for(;;){var c=b(d);if(!xc(c,mf))return c}}catch(e){if(e instanceof Object)return d[5]=e,Eg(d),mf;if(z)throw e;return null}}();if(!xc(e,mf))return e}}function d(){var b=[null,null,null,null,null,null,null,null,null];b[0]=e;b[1]=1;return b}
var e=null,e=function(b){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,b)}throw Error("Invalid arity: "+arguments.length);};e.v=d;e.e=c;return e}()}(function(){return function(b){var c=b[1];if(2===c){var c=b[2],d=ji.f(f.P,Pf,"animated bounceOut");b[7]=c;return Dg(b,d)}return 1===c?(c=ji.f(f.P,Pf,"animated pulse"),d=Mg(1E3),b[8]=c,Cg(b,2,d)):null}}(b,c,d),b,c,d)}(),g=function(){var c=e.v?e.v():e.call(null);c[6]=b;return c}();return Bg(g)}}(d,c,b));return d;case "playing":return ri(f.B,
"paused"),soundManager.pause(Cf.e(qi()));case "paused":return ri(f.B,"playing"),soundManager.play(Cf.e(qi()));default:return null}}}(this),className:Sf.e(c)}),React.DOM.span(null,Cf.e(qi()))))},ki.prototype.ic=!0,ki.prototype.Eb=function(){var b=this,c=Pg.e(1);pg(function(c,e){return function(){var k=function(){return function(b){return function(){function c(d){for(;;){var e=function(){try{for(;;){var c=b(d);if(!xc(c,mf))return c}}catch(e){if(e instanceof Object)return d[5]=e,Eg(d),mf;if(z)throw e;
return null}}();if(!xc(e,mf))return e}}function d(){var b=[null,null,null,null,null,null,null];b[0]=e;b[1]=1;return b}var e=null,e=function(b){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,b)}throw Error("Invalid arity: "+arguments.length);};e.v=d;e.e=c;return e}()}(function(c,e){return function(f){var g=f[1];return 1===g?(g=soundManager.setup({onready:function(c,e,f){return function(){Ge.n(oi,V,qf,"idle");for(var g=L(Nf.e(H(b.B))),k=null,l=0,m=0;;)if(m<l){var n=k.R(null,
m),p=jc(n)?Wb.c(he,n):n,q=U.c(p,Hf),r=U.c(p,Cf);soundManager.createSound({onfinish:function(c,e,f,g,k,l,m,n,p,q,r){return function(){ri(b.B,"idle");ii.f(b.B,lf,function(){return function(){var c=1+lf.e(H(b.B)),e=T(Nf.e(H(b.B)));return(c%e+e)%e}}(c,e,f,g,k,l,m,n,p,q,r));console.log(lf.e(H(b.B)));return si(b.B)}}(g,k,l,m,n,p,q,r,c,e,f),onpause:function(){return function(){return ri(b.B,"paused")}}(g,k,l,m,n,p,q,r,c,e,f),onplay:function(c,e,f,g,k,l,m,n,p,q,r){return function(){ri(b.B,"playing");var t=
Pg.e(1);pg(function(c,e,f,g,k,l,m,n,p,q,r,t){return function(){var v=function(){return function(b,c,d,e,f){return function(){function b(c){for(;;){var d=function(){try{for(;;){var b=f(c);if(!xc(b,mf))return b}}catch(d){if(d instanceof Object)return c[5]=d,Eg(c),mf;if(z)throw d;return null}}();if(!xc(d,mf))return d}}function c(){var b=[null,null,null,null,null,null,null,null,null];b[0]=d;b[1]=1;return b}var d=null,d=function(d){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,
d)}throw Error("Invalid arity: "+arguments.length);};d.v=c;d.e=b;return d}()}(c,e,f,g,function(){return function(c){var e=c[1];if(2===e){var e=c[2],f=ji.f(b.P,Pf,"animated fadeOut");c[7]=e;return Dg(c,f)}return 1===e?(e=ji.f(b.P,Pf,"animated pulse"),f=Mg(2500),c[8]=e,Cg(c,2,f)):null}}(c,e,f,g,k,l,m,n,p,q,r,t),k,l,m,n,p,q,r,t)}(),w=function(){var b=v.v?v.v():v.call(null);b[6]=k;return b}();return Bg(w)}}(c,e,f,g,t,k,l,m,n,p,q,r));return t}}(g,k,l,m,n,p,q,r,c,e,f),autoLoad:!0,id:r,url:q});m+=1}else if(p=
L(g)){n=p;if(fc(n))g=kb(n),m=lb(n),k=g,l=T(g),g=m;else{var q=M(n),r=jc(q)?Wb.c(he,q):q,vc=U.c(r,Hf),Od=U.c(r,Cf);soundManager.createSound({onfinish:function(c,e,f,g,k,l,m,n,p,q,r,t,v){return function(){ri(b.B,"idle");ii.f(b.B,lf,function(){return function(){var c=1+lf.e(H(b.B)),e=T(Nf.e(H(b.B)));return(c%e+e)%e}}(c,e,f,g,k,l,m,n,p,q,r,t,v));console.log(lf.e(H(b.B)));return si(b.B)}}(g,k,l,m,q,r,vc,Od,n,p,c,e,f),onpause:function(){return function(){return ri(b.B,"paused")}}(g,k,l,m,q,r,vc,Od,n,p,c,
e,f),onplay:function(c,e,f,g,k,l,m,n,p,q,r,t,v){return function(){ri(b.B,"playing");var w=Pg.e(1);pg(function(c,e,f,g,k,l,m,n,p,q,r,t,v,w){return function(){var G=function(){return function(b,c,d,e,f){return function(){function b(c){for(;;){var d=function(){try{for(;;){var b=f(c);if(!xc(b,mf))return b}}catch(d){if(d instanceof Object)return c[5]=d,Eg(c),mf;if(z)throw d;return null}}();if(!xc(d,mf))return d}}function c(){var b=[null,null,null,null,null,null,null,null,null];b[0]=d;b[1]=1;return b}var d=
null,d=function(d){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d)}throw Error("Invalid arity: "+arguments.length);};d.v=c;d.e=b;return d}()}(c,e,f,g,function(){return function(c){var e=c[1];if(2===e){var e=c[2],f=ji.f(b.P,Pf,"animated fadeOut");c[7]=e;return Dg(c,f)}return 1===e?(e=ji.f(b.P,Pf,"animated pulse"),f=Mg(2500),c[8]=e,Cg(c,2,f)):null}}(c,e,f,g,k,l,m,n,p,q,r,t,v,w),k,l,m,n,p,q,r,t,v,w)}(),J=function(){var b=G.v?G.v():G.call(null);b[6]=k;return b}();return Bg(J)}}(c,
e,f,g,w,k,l,m,n,p,q,r,t,v));return w}}(g,k,l,m,q,r,vc,Od,n,p,c,e,f),autoLoad:!0,id:Od,url:vc});g=P(n);k=null;l=0}m=0}else break;ji.f(b.P,Ue,!0);return ji.f(b.P,Pf,"animated fadeOut")}}(g,c,e),url:"/js/sm/swf/"}),Dg(f,g)):null}}(c,e),c,e)}(),l=function(){var b=k.v?k.v():k.call(null);b[6]=c;return b}();return Bg(l)}}(c,this));c=Pg.e(1);pg(function(c,e){return function(){var k=function(){return function(b){return function(){function c(d){for(;;){var e=function(){try{for(;;){var c=b(d);if(!xc(c,mf))return c}}catch(e){if(e instanceof
Object)return d[5]=e,Eg(d),mf;if(z)throw e;return null}}();if(!xc(e,mf))return e}}function d(){var b=[null,null,null,null,null,null,null,null,null];b[0]=e;b[1]=1;return b}var e=null,e=function(b){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,b)}throw Error("Invalid arity: "+arguments.length);};e.v=d;e.e=c;return e}()}(function(){return function(c){var e=c[1];if(4===e){var e=c[2],f=H(b.B),f=qf.e(f),f=zc.e(f),f=U.c(pi,f),f=ji.f(b.P,Sf,f);c[7]=f;c[8]=e;c[2]=null;c[1]=
2;return mf}return 3===e?(e=c[2],Dg(c,e)):2===e?(e=Mg(300),Cg(c,4,e)):1===e?(c[2]=null,c[1]=2,mf):null}}(c,e),c,e)}(),l=function(){var b=k.v?k.v():k.call(null);b[6]=c;return b}();return Bg(l)}}(c,this));return c},ki.prototype.Wb=!0,ki.prototype.Bb=function(){return new u(null,3,[Sf,"",Pf,"",Ue,!1],null)},ki.prototype.F=function(){return this.Hc},ki.prototype.G=function(b,c){return new ki(this.P,this.B,this.Zc,c)});return new ki(c,b,ti,null)},wi=function vi(b,c){"undefined"===typeof li&&(li=function(b,
c,f,g){this.P=b;this.B=c;this.Dc=f;this.Ic=g;this.w=0;this.k=393216},li.Ka=!0,li.Ja="indexp.core/t9663",li.Ra=function(b,c){return I(c,"indexp.core/t9663")},li.prototype.$b=!0,li.prototype.Cb=function(){return React.DOM.div({className:"container "+B.e(U.f(U.c(Af.e(this.B),sf.e(this.B)),hf,"white")),id:"container"},React.DOM.section(null,React.DOM.header(null,React.DOM.h1(null,"Engineer"),React.DOM.h2(null,"Univ of Ottawa, born in China, since 1991")),React.DOM.div({className:"in-slide-content"},React.DOM.nav({id:"cl-effect-14",
className:"cl-effect-14"},React.DOM.a({href:"http://about.me/zackguo"},"About.Me"),React.DOM.a({href:"/blog/"},"Blog"),React.DOM.a({href:"https://github.com/gizak"},"GitHub"),React.DOM.a({href:"http://gizak-tsuite.appspot.com"},"Appspot")))))},li.prototype.F=function(){return this.Ic},li.prototype.G=function(b,c){return new li(this.P,this.B,this.Dc,c)});return new li(c,b,vi,null)},yi=function xi(b,c){"undefined"===typeof mi&&(mi=function(b,c,f,g){this.P=b;this.B=c;this.jc=f;this.Jc=g;this.w=0;this.k=
393216},mi.Ka=!0,mi.Ja="indexp.core/t9702",mi.Ra=function(b,c){return I(c,"indexp.core/t9702")},mi.prototype.dc=!0,mi.prototype.Db=function(b,c){return React.DOM.p({className:"bg-info "+B.e(hf.e(c))},"\x3e "+B.e(Xf.e(c)))},mi.prototype.ic=!0,mi.prototype.Eb=function(){var b=this;$(function(c){return function(){return $.vegas("slideshow",Ne(new u(null,5,[Tf,5500,df,Af.e(H(oi)),xf,!0,zf,!1,af,function(){return function(c){return Rg.c(Sh.c(b.P,vf),c)}}(c)],null)))}}(this));var c=Pg.e(1);pg(function(c,
e){return function(){var k=function(){return function(b){return function(){function c(d){for(;;){var e=function(){try{for(;;){var c=b(d);if(!xc(c,mf))return c}}catch(e){if(e instanceof Object)return d[5]=e,Eg(d),mf;if(z)throw e;return null}}();if(!xc(e,mf))return e}}function d(){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null];b[0]=e;b[1]=1;return b}var e=null,e=function(b){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,b)}throw Error("Invalid arity: "+
arguments.length);};e.v=d;e.e=c;return e}()}(function(c,e){return function(f){var g=f[1];if(5===g){var k=f[7],l=f[2],w=H(b.B),w=Af.e(w),w=U.c(w,k),w=Of.e(w),w=ji.f(b.P,Xf,w),G=ji.f(b.P,hf,"animated fadeInLeft");f[8]=G;f[9]=l;f[10]=w;f[2]=null;f[1]=2;return mf}if(4===g){var k=f[7],J=f[2],l=ii.f(b.B,sf,function(){return function(b){return function(){return b}}(J,k,J,g,c,e)}()),w=ji.f(b.P,hf,"animated fadeOutLeft"),G=Mg(100);f[7]=J;f[11]=l;f[12]=w;return Cg(f,5,G)}return 3===g?(l=f[2],Dg(f,l)):2===g?
(l=Sh.c(b.P,vf),Cg(f,4,l)):1===g?(f[2]=null,f[1]=2,mf):null}}(c,e),c,e)}(),l=function(){var b=k.v?k.v():k.call(null);b[6]=c;return b}();return Bg(l)}}(c,this));return c},mi.prototype.Wb=!0,mi.prototype.Bb=function(){return new u(null,3,[Xf,"",vf,Pg.v(),hf,""],null)},mi.prototype.F=function(){return this.Jc},mi.prototype.G=function(b,c){return new mi(this.P,this.B,this.jc,c)});return new mi(c,b,xi,null)};
(function(a,b,c){var d=jc(c)?Wb.c(he,c):c,e=U.c(d,Ze),f=U.c(d,Qe),g=U.c(d,Wf),k=U.c(d,Qf);if(null==k)throw Error("Assert failed: No target specified to om.core/root\n"+B.e(ye.l(Q([uc(new K(null,"not","not",1044554643,null),uc(new K(null,"nil?","nil?",1612038930,null),new K(null,"target","target",1893533248,null)))],0))));var l=H(ei);lc(l,k)&&U.c(l,k).call(null);l=Je.v();b=(b?b.w&16384||b.bd||(b.w?0:y(ze,b)):y(ze,b))?b:Ee.e(b);var m=hi(b,l,g),p=Tb.l(d,Qf,Q([Wf,Qe],0)),n=function(b,c,d,e,f,g,k,l,m,
n,p){return function vc(){Ge.f(ci,Zb,vc);var b=H(d),b=null==m?Gh.f(b,d,td):Gh.f(ad.c(b,m),d,m),c;a:{var f=Ug,g=Vg;try{Ug=l;Vg=d;c=gi.f(a,b,e);break a}finally{Vg=g,Ug=f}c=void 0}React.renderComponent(c,p);c=wh(d);if($b(c))return null;c=L(c);b=null;for(g=f=0;;)if(g<f){var k=b.R(null,g);x(k.isMounted())&&k.forceUpdate();g+=1}else if(c=L(c))b=c,fc(b)?(c=kb(b),g=lb(b),b=c,f=T(c),c=g):(c=M(b),x(c.isMounted())&&c.forceUpdate(),c=P(b),b=null,f=0),g=0;else break;return yh(d)}}(l,b,m,p,c,d,d,e,f,g,k);He(m,
l,function(a,b,c,d,e){return function(){lc(H(ci),e)||Ge.f(ci,Ob,e);if(x(bi))return null;bi=!0;return"undefined"!==typeof requestAnimationFrame?requestAnimationFrame(di):setTimeout(di,16)}}(l,b,m,p,n,c,d,d,e,f,g,k));Ge.n(ei,V,k,function(a,b,c,d,e,f,g,k,l,m,n,p){return function(){db(c,a);Lh(c,a);Ge.f(ei,Tb,p);return React.unmountComponentAtNode(p)}}(l,b,m,p,n,c,d,d,e,f,g,k));return n()})(function(a,b){"undefined"===typeof ni&&(ni=function(a,b,e){this.P=a;this.B=b;this.Kc=e;this.w=0;this.k=393216},ni.Ka=
!0,ni.Ja="indexp.core/t9742",ni.Ra=function(a,b){return I(b,"indexp.core/t9742")},ni.prototype.$b=!0,ni.prototype.Cb=function(){return React.DOM.div({className:"content"},gi.c(ui,this.B),gi.c(wi,this.B),gi.c(yi,this.B))},ni.prototype.F=function(){return this.Kc},ni.prototype.G=function(a,b){return new ni(this.P,this.B,b)});return new ni(b,a,null)},oi,new u(null,1,[Qf,document.getElementById("app")],null));
})();
