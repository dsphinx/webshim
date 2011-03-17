(function(b,l,k,s){k.createElement("datalist");var o=b.event.special,r=Modernizr.input||{},z=Modernizr.inputtypes||{},t=parseFloat(b.browser.version,10);(function(){var a=Modernizr.addTest,c=b('<form action="#"><input name="a" required /><select><option>y</option></select><input required id="date-input-test" type="date" /></form>');a("formvalidation",function(){return!!("checkValidity"in c[0])});a("datalist",function(){return!!(r.list&&l.HTMLDataListElement)});a("validationmessage",function(){if(!Modernizr.formvalidation)return false;
c.appendTo("head");return!!b("input",c).attr("validationMessage")});a("output",function(){return Modernizr.formvalidation&&"value"in k.createElement("output")});Modernizr.genericDOM=!!b("<video><div></div></video>")[0].innerHTML;Modernizr.requiredSelect=!!(Modernizr.formvalidation&&"required"in b("select",c)[0]);Modernizr.bugfreeformvalidation=Modernizr.formvalidation&&Modernizr.requiredSelect&&Modernizr.validationmessage&&(!b.browser.webkit||t>534.19);r.valueAsNumber=false;r.valueAsDate=false;if(Modernizr.formvalidation){a=
b("#date-input-test",c)[0];r.valueAsNumber="valueAsNumber"in a;r.valueAsDate="valueAsDate"in a;a=null}Modernizr.formvalidation&&c.remove();c=null;Modernizr.ES5base=!!(String.prototype.trim&&Date.now&&Date.prototype.toISOString);Modernizr.ES5extras=!!(Array.isArray&&Object.keys&&Object.create&&Function.prototype.bind&&Object.defineProperties);Modernizr.ES5base&&b.each(["filter","map","every","reduce","reduceRight","lastIndexOf"],function(f,d){if(!Array.prototype[d])return Modernizr.ES5base=false});
var e=!!(Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor);!b.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var f=k.createElement("foo");Object.defineProperty(f,"bar",{get:function(){return true}});e=!!f.bar}catch(d){e=false}f=null}();Modernizr.ES5=Modernizr.ES5base&&Modernizr.ES5extras&&e;Modernizr.objectAccessor=!!((e||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__)&&(!b.browser.opera||t>=11));Modernizr.domAccessor=
!!(Modernizr.objectAccessor||Object.defineProperty&&Object.getOwnPropertyDescriptor);Modernizr.advancedObjectProperties=e})();b.webshims=b.sub();b.extend(b.webshims,{version:"1.5.0",cfg:{useImportantStyles:true,removeFOUC:false,waitReady:true,extendNative:true,addCacheBuster:false},modules:{},features:{},featureList:[],profiles:{lightweight:["es5","canvas","geolocation","forms","json-storage"],xlightweight:["es5","canvas","geolocation","json-storage"]},setOptions:function(a,c){if(typeof a=="string"&&
c!==s&&a in u)if(typeof c!="object")u[a]=c;else b.extend(true,u[a],c);else typeof a=="object"&&b.extend(true,u,a)},addPolyfill:function(a,c){c=c||{};var e=c.feature||a;if(!h.features[e]){h.features[e]=[];h.featureList.push(e);h.cfg[e]={}}h.features[e].push(a);c.options=b.extend(h.cfg[e],c.options);x(a,c);if(c.methodNames){if(!b.isArray(c.methodNames))c.methodNames=[c.methodNames];b.each(c.methodNames,function(f,d){h.addMethodName(d)})}},polyfill:function(){var a=function(c){var e,f=[],d=c,g=function(){b("html").removeClass("loading-polyfills long-loading-polyfills polyfill-remove-fouc");
b(l).unbind(".loadingPolyfills");clearTimeout(e)};if(b.isReady)h.warn("You should call $.webshims.polyfill before DOM-Ready");else{if(h.cfg.removeFOUC){if(h.cfg.waitReady)d=d.concat(["DOM"]);f.push("polyfill-remove-fouc")}f.push("loading-polyfills");b(l).bind("load.loadingPolyfills polyfillloaderror.loadingPolyfills  error.loadingPolyfills",g);e=setTimeout(function(){b("html").addClass("long-loading-polyfills")},600)}v(c,g);h.cfg.useImportantStyles&&f.push("polyfill-important");f[0]&&b("html").addClass(f.join(" "));
b(function(){m.loadList(["html5a11y","html5shiv"])});m.loadCSS("shim.css");a=b.noop};return function(c){var e=[];c=c||h.featureList;if(typeof c=="string")c=h.profiles[c]||c.split(" ");if(h.cfg.waitReady){b.readyWait++;v(c,function(){b.ready(true)})}b.each(c,function(f,d){d!==h.features[d][0]&&v(h.features[d],function(){p(d,true)});e=e.concat(h.features[d])});a(c);m.loadList(e)}}(),isReady:function(a,c){a+="Ready";if(c){if(o[a]&&o[a].add)return true;o[a]=b.extend(o[a]||{},{add:function(e){e.handler.call(this,
b.Event(a))}});b.event.trigger(a)}return!!(o[a]&&o[a].add)||false},ready:function(a,c,e){if(typeof a=="string")a=a.split(" ");e||(a=b.map(b.grep(a,function(f){return!p(f)}),function(f){return f+"Ready"}));if(a.length){e=a.shift();b(k).one(e,function(){v(a,c,true)})}else c(b,h,l,k)},addMethodName:function(a){b.fn[a]&&"shim"in b.fn[a]||(b.fn[a]=function(){var c=arguments,e;this.each(function(){var f=b.attr(this,a);if(f&&f.apply){e=f.apply(this,c);if(e!==s)return false}});return e!==s?e:this})},fixHTML5:function(a){return a},
capturingEvents:function(a,c){if(k.addEventListener){if(typeof a=="string")a=[a];b.each(a,function(e,f){var d=function(g){g=b.event.fix(g);if(c&&!g._isPolyfilled){var i=g.isDefaultPrevented,j=g.preventDefault;g.preventDefault=function(){clearTimeout(b.data(g.target,g.type+"-defaultPrevented"));b.data(g.target,g.type+"-defaultPrevented",setTimeout(function(){b.removeData(g.target,g.type+"-defaultPrevented")},30));return j.apply(this,arguments)};g.isDefaultPrevented=function(){return!!(i.apply(this,
arguments)||b.data(g.target,g.type+"-defaultPrevented")||false)};g._isPolyfilled=true}return b.event.handle.call(this,g)};o[f]=o[f]||{};o[f].setup||o[f].teardown||b.extend(o[f],{setup:function(){this.addEventListener(f,d,true)},teardown:function(){this.removeEventListener(f,d,true)}})})}},register:function(a,c){var e=q[a];if(e){if(e.noAutoCallback){var f=function(){c(b,h,l,k,s,e.options);p(a,true)};e.dependencies?v(e.dependencies,f):f()}}else h.warn("can't find module: "+a)},loader:{basePath:function(){var a=
b('meta[name="polyfill-path"]').attr("content");if(!a){a=b("script");a=a[a.length-1];a=(!b.browser.msie||k.documentMode>=8?a.src:a.getAttribute("src",4)).split("?")[0];a=a.slice(0,a.lastIndexOf("/")+1)+"shims/"}return a}(),addModule:function(a,c){q[a]=c;c.name=c.name||a},loadList:function(){var a=[],c=function(f,d){if(p(f)||b.inArray(f,a)!=-1)return true;var g=q[f];if(g)if(g=g.test&&b.isFunction(g.test)?g.test(d):g.test){p(f,true);return true}else return false;return true},e=function(f,d){if(f.dependencies&&
f.dependencies.length){var g=function(i,j){!c(j,d)&&b.inArray(j,d)==-1&&d.push(j)};b.each(f.dependencies,function(i,j){if(q[j])g(i,j);else if(h.features[j]){b.each(h.features[j],g);v(h.features[j],function(){p(j,true)})}});if(!f.noAutoCallback)f.noAutoCallback=true}};return function(f){for(var d,g=0;g<f.length;g++){d=q[f[g]];if(!c(d.name,f)){d.css&&m.loadCSS(d.css);d.loadInit&&d.loadInit();e(d,f,f);var i=d.src||d.name;d=d.name;if(typeof d=="string")d=[d];b.merge(a,d);m.loadScript(i,false,d)}}}}(),
makePath:function(a){if(a.indexOf("//")!=-1||a.indexOf("/")===0)return a;if(a.indexOf(".")==-1)a+=".js";if(u.addCacheBuster)a+=u.addCacheBuster;return m.basePath+a},loadCSS:function(){var a,c=[];return function(e){e=this.makePath(e);if(b.inArray(e,c)==-1){a=a||k.getElementsByTagName("script")[0];c.push(e);b('<link rel="stylesheet" />').insertBefore(a).attr({href:e})}}}(),loadScript:function(){var a,c=[];return function(e,f,d){e=m.makePath(e);if(b.inArray(e,c)==-1){a=a||k.getElementsByTagName("script")[0];
var g=k.createElement("script"),i,j=function(y){if(y&&y.type==="error"){b(l).triggerHandler("polyfillloaderror");h.warn("Error: could not find script @"+e+'| configure polyfill-path: $.webshims.loader.basePath = "path/to/shims-folder" or by using markup: <meta name="polyfill-path" content="path/to/shims-folder/" />')}if(this)if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){g.onload=null;g.onreadystatechange=null;f&&f(y,this);if(d){if(typeof d=="string")d=d.split(" ");b.each(d,
function(C,w){if(q[w]){q[w].afterLoad&&q[w].afterLoad();p(!q[w].noAutoCallback?w:w+"FileLoaded",true)}})}b(g).unbind("error.polyfillerror",j);g=null;clearTimeout(i)}};g.setAttribute("async","async");i=setTimeout(function(){j({type:"error"})},2E4);g.onload=j;b(g).one("error.polyfillerror",j);g.onreadystatechange=j;g.src=e;a.parentNode.insertBefore(g,a);g.async=true;c.push(e)}}}()}});var h=b.webshims,u=h.cfg,p=h.isReady,v=h.ready,n=h.addPolyfill,q=h.modules,m=h.loader,x=m.addModule,A={warn:1,error:1},
B={cache:true,dataType:"text",error:function(a,c){h.warn("error with: "+this.url+" | "+c)}};b.each(["log","error","warn","info"],function(a,c){h[c]=function(e){if((A[c]||h.debug)&&l.console&&console.log)return console[console[c]?c:"log"](e)}});(function(){b.isDOMReady=b.isReady;if(b.isDOMReady)p("DOM",true);else{var a=b.ready;b.ready=function(c){if(c!==true&&!b.isDOMReady&&k.body){b.isDOMReady=true;p("DOM",true);b.ready=a}return a.apply(this,arguments)}}})();(function(){var a=[],c=b([]);b.extend(h,
{addReady:function(e){var f=function(d,g){h.ready("DOM",function(){e(d,g)})};a.push(f);f(k,c)},triggerDomUpdate:function(e){if(e&&e.nodeType){var f=e.nodeType;if(!(f!=1&&f!=9)){var d=e!==k?b(e):c;b.each(a,function(g,i){i(e,d)})}}}});b.fn.htmlWebshim=function(e){e=b.fn.html.call(this,e?h.fixHTML5(e):e);e===this&&b.isDOMReady&&this.each(function(){this.nodeType==1&&h.triggerDomUpdate(this)});return e};h.fn.html=b.fn.htmlWebshim;b.each(["after","before","append","prepend","replaceWith"],function(e,f){b.fn[f+
"Webshim"]=function(d){d=b(h.fixHTML5(d));b.fn[f].call(this,d);b.isDOMReady&&d.each(function(){this.nodeType==1&&h.triggerDomUpdate(this)});return this};h.fn[f]=b.fn[f+"Webshim"]})})();(function(){var a=Object.prototype.hasOwnProperty,c=["configurable","enumerable","writable"],e=function(d){for(var g=0;g<3;g++)if(d[c[g]]===s&&(c[g]!=="writable"||d.value!==s))d[c[g]]=true},f=function(d){if(d)for(var g in d)a.call(d,g)&&e(d[g])};if(Object.create)h.objectCreate=function(d,g,i){f(g);d=Object.create(d,
g);if(i){d.options=b.extend(true,{},d.options||{},i);i=d.options}d._create&&b.isFunction(d._create)&&d._create(i);return d};if(Object.defineProperty)h.defineProperty=function(d,g,i){e(i);return Object.defineProperty(d,g,i)};if(Object.defineProperties)h.defineProperties=function(d,g){f(g);return Object.defineProperties(d,g)};h.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;h.getPrototypeOf=Object.getPrototypeOf})();x("html5a11y",{src:"html5a11y",test:!(b.browser.msie&&t<9&&t>7||b.browser.mozilla&&
t<2||b.browser.webkit&&t<535)});x("jquery-ui",{src:"//ajax.googleapis.com/ajax/libs/jqueryui/1.8.10/jquery-ui.min.js",test:function(){return!!(b.widget&&b.Widget)}});x("input-widgets",{src:"",test:function(){var a=!(b.widget&&!(b.fn.datepicker||b.fn.slider));if(!this.src){a||h.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src');return true}return a}});x("swfobject",{src:"//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",
test:function(){return"swfobject"in l}});n("es5",{test:Modernizr.ES5});n("dom-extend",{feature:"dom-support",noAutoCallback:true,dependencies:["es5"]});n("html5shiv",{feature:"dom-support",test:Modernizr.genericDOM});n("geolocation",{test:Modernizr.geolocation,options:{destroyWrite:true,confirmText:""},dependencies:["json-storage"]});(function(){var a;n("canvas",{src:"excanvas",test:Modernizr.canvas,options:{type:"excanvas"},noAutoCallback:true,loadInit:function(){var c=this.options.type;if(c&&c.indexOf("flash")!==
-1&&(!l.swfobject||swfobject.hasFlashPlayerVersion("9.0.0"))){l.FlashCanvasOptions=l.FlashCanvasOptions||{};a=l.FlashCanvasOptions;if(c=="flash"){b.extend(a,{swfPath:m.basePath+"FlashCanvas/"});this.src="FlashCanvas/flashcanvas";c=a.swfPath+"flashcanvas.swf"}else{b.extend(a,{swfPath:m.basePath+"FlashCanvasPro/"});this.src="FlashCanvasPro/flashcanvas";c=a.swfPath+"flash10canvas.swf"}c&&b.ajax(c,B)}},afterLoad:function(){h.ready("dom-extend",function(c,e){e.addReady(function(f,d){c("canvas",f).add(d.filter("canvas")).each(function(){this.getContext||
G_vmlCanvasManager.initElement(this)})});p("canvas",true)})},methodNames:["getContext"],dependencies:["es5","dom-support"]})})();h.validityMessages=[];h.validationMessages=h.validityMessages;h.inputTypes={};n("form-core",{feature:"forms",dependencies:["es5"],loadInit:function(){if(this.options.customMessages||!Modernizr.validationmessage)m.loadList(["dom-extend"])},options:{placeholderType:"value",customMessages:false,overrideMessages:false}});if(Modernizr.formvalidation){h.capturingEvents(["input"]);
h.capturingEvents(["invalid"],true);n("form-extend",{feature:"forms",src:"form-native-extend",test:function(a){return Modernizr.requiredSelect&&Modernizr.validationmessage&&(r.valueAsNumber&&r.valueAsDate||b.inArray("forms-ext",a)==-1)&&!this.options.overrideMessages},dependencies:["form-core","dom-support"],methodNames:["setCustomValidity","checkValidity"]});n("form-native-fix",{feature:"forms",test:Modernizr.bugfreeformvalidation,dependencies:["dom-support"],combination:["combined-webkit"]})}else n("form-extend",
{feature:"forms",src:"form-shim-extend",methodNames:["setCustomValidity","checkValidity"],dependencies:["form-core","dom-extend"]});n("form-output-datalist",{feature:"forms",test:function(){var a=Modernizr.datalist&&r.list;if(a&&b(k.createElement("input")).attr("list")===null){var c=b.attr;b.attr=function(e,f,d){if(f=="list"&&e&&(e.nodeName||"").toLowerCase()=="input")if(d!==s)e.setAttribute(f,d);else return e.getAttribute(f);return c.apply(this,arguments)}}return Modernizr.output&&a},dependencies:["dom-support",
"json-storage"]});n("forms-ext",{src:"form-number-date",test:function(){return z.range&&z.date&&!this.options.replaceUI},noAutoCallback:true,dependencies:["form-extend"],loadInit:function(){m.loadList(["jquery-ui"]);q["input-widgets"].src&&m.loadList(["input-widgets"])},options:{stepArrows:{number:1,time:1},calculateWidth:true,slider:{},datepicker:{},langSrc:"//ajax.googleapis.com/ajax/libs/jqueryui/1.8.10/i18n/jquery.ui.datepicker-",availabeLangs:"af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" "),
recalcWidth:true,replaceUI:false}});n("json-storage",{test:Modernizr.localstorage&&"sessionStorage"in l&&"JSON"in l,loadInit:function(){m.loadList(["swfobject"])},noAutoCallback:true})})(jQuery,this,this.document);
