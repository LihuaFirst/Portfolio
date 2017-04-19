window._skel_config = {
	prefix: '../css/mobile',
	resetCSS: true,
	boxModel: 'border',
	useOrientation: true,	
	breakpoints: {
		wide:  { range: '1024-', containers: 'fluid'},
		small: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true }}
	}
};
/* skelJS v0.3.62 | (c) n33 | skeljs.org | MIT licensed */
var skel=function(){var a={config:{prefix:null,preloadStyleSheets:!1,pollOnce:!1,resetCSS:!1,normalizeCSS:!1,boxModel:null,useOrientation:!1,containers:960,containerUnits:!1,debug:!1,grid:{collapse:!1,gutters:40,gutterUnits:!1},breakpoints:{all:{range:"*",hasStyleSheet:!1}},events:{}},isConfigured:!1,isInit:!1,isLegacyIE:!1,stateId:"",breakpoints:[],breakpointList:[],events:[],plugins:{},cache:{elements:{},states:{}},locations:{html:null,head:null,body:null},values:[],sd:" ",css:{r:"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}",n:'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{background:#fff;color:#000;font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"\u0081C" "\u0081D" "\u00818" "\u00819"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',g:".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\31 u,.\\32 u,.\\33 u,.\\34 u,.\\35 u,.\\36 u,.\\37 u,.\\38 u,.\\39 u,.\\31 0u,.\\31 1u,.\\31 2u{float:left;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}",gF:".row.flush{margin-left:0}.row.flush>*{padding:0!important}",gR:".row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0}.row>*{padding-top:0}",gC:".row@{overflow-x:hidden;margin-left:0}.row@>*{float:none!important;width:100%!important;padding:10px 0 10px 0!important;margin-left:0!important}",d:".row>*{box-shadow:inset 0 0 0 1px red}"},presets:{"default":{},standard:{breakpoints:{mobile:{range:"-480",lockViewport:!0,containers:"fluid",grid:{collapse:1}},desktop:{range:"481-",containers:1200},"1000px":{range:"481-1200",containers:960}}}},defaults:{breakpoint:{test:null,config:null,elements:null},config_breakpoint:{range:"",containers:960,containerUnits:!1,lockViewport:!1,viewportWidth:!1,hasStyleSheet:!0,grid:{}}},DOMReady:null,getElementsByClassName:null,indexOf:null,iterate:null,extend:function(b,d){a.iterate(d,function(c){"object"==typeof d[c]?("object"!=typeof b[c]&&(b[c]={}),a.extend(b[c],d[c])):b[c]=d[c]})},parseMeasurement:function(a){var d;"string"!==typeof a?a=[a,"px"]:"fluid"==a?a=[100,"%"]:(d=a.match(/([0-9\.]+)([^\s]*)/),a=3>d.length||!d[2]?[parseFloat(a),"px"]:[parseFloat(d[1]),d[2]]);return a},getDevicePixelRatio:function(){if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/))return 1;if(void 0!==window.devicePixelRatio&&!navigator.userAgent.match(/(Firefox)/))return window.devicePixelRatio;if(window.matchMedia){if(window.matchMedia("(-webkit-min-device-pixel-ratio: 2),(min--moz-device-pixel-ratio: 2),(-o-min-device-pixel-ratio: 2/1),(min-resolution: 2dppx)").matches)return 2;if(window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches)return 1.5}return 1},getViewportWidth:function(){var b,d,c;b=document.documentElement.clientWidth;d=window.orientation?Math.abs(window.orientation):!1;c=a.getDevicePixelRatio();screen.width<b&&(b=screen.width);!1!==d&&(b=a.config.useOrientation?90===d?screen.height:screen.width:screen.width>screen.height?screen.height:screen.width);b/=c;a.values.viewportWidth=b;a.values.devicePixelRatio=c;return b},isActive:function(b){return-1!==a.indexOf(a.stateId,a.sd+b)},getValue:function(b){return b in a.values?a.values[b]:null},bind:function(b,d){a.events[b]||(a.events[b]=[]);a.events[b].push(d)},trigger:function(b){a.events[b]&&0!=a.events[b].length&&a.iterate(a.events[b],function(d){a.events[b][d]()})},onStateChange:function(b){a.bind("stateChange",b);a.isInit&&b()},registerLocation:function(b,d){a.locations[b]=d},cacheElement:function(b,d,c,e){return a.cache.elements[b]={id:b,object:d,location:c,priority:e}},cacheBreakpointElement:function(b,d,c,e,h){var f=a.getCachedElement(d);f||(f=a.cacheElement(d,c,e,h));a.breakpoints[b]&&a.breakpoints[b].elements.push(f);return f},getCachedElement:function(b){return a.cache.elements[b]?a.cache.elements[b]:null},detachAllElements:function(){var b;a.iterate(a.cache.elements,function(d){b=a.cache.elements[d].object;if(b.parentNode&&(!b.parentNode||b.parentNode.tagName))if(b.parentNode.removeChild(b),a.cache.elements[d].onDetach)a.cache.elements[d].onDetach()})},attachElements:function(b){var d=[],c=[],e;a.iterate(b,function(a){d[b[a].priority]||(d[b[a].priority]=[]);d[b[a].priority].push(b[a])});a.iterate(d,function(b){0!=d[b].length&&a.iterate(d[b],function(f){if(e=a.locations[d[b][f].location]){if(e.appendChild(d[b][f].object),d[b][f].onAttach)d[b][f].onAttach()}else c.push(d[b][f])})});0<c.length&&a.DOMReady(function(){a.iterate(c,function(b){if(e=a.locations[c[b].location])if(e.appendChild(c[b].object),c[b].onAttach)c[b].onAttach()})})},poll:function(){var b,d="";b=a.getViewportWidth();a.iterate(a.breakpoints,function(c){a.breakpoints[c].test(b)&&(d+=a.sd+c)});""===d&&(d=a.sd);d!==a.stateId&&(a.locations.html.className=a.locations.html.className.replace(a.stateId,""),a.changeState(d),a.locations.html.className+=a.stateId)},updateState:function(){var b,d=[],c=a.stateId.substring(1).split(a.sd);a.iterate(c,function(e){b=a.breakpoints[c[e]];0!=b.elements.length&&a.iterate(b.elements,function(c){a.cache.states[a.stateId].elements.push(b.elements[c]);d.push(b.elements[c])})});0<d.length&&a.attachElements(d)},changeState:function(b){var d,c,e,h,f,k,l,m,g;a.stateId=b;if(a.cache.states[a.stateId])g=a.cache.states[a.stateId];else{a.cache.states[a.stateId]={config:{},elements:[]};g=a.cache.states[a.stateId];d=a.stateId===a.sd?[]:a.stateId.substring(1).split(a.sd);a.extend(g.config,a.defaults.config_breakpoint);a.iterate(d,function(b){a.extend(g.config,a.breakpoints[d[b]].config)});if(a.config.boxModel){if(!(c=a.getCachedElement("iBM")))c=a.cacheElement("iBM",a.newInline("*,*:before,*:after{-moz-@;-webkit-@;-o-@;-ms-@;@}".replace(/@/g,"box-sizing:"+a.config.boxModel+"-box")),"head",3);g.elements.push(c)}if(a.config.resetCSS){if(!(c=a.getCachedElement("iR")))c=a.cacheElement("iR",a.newInline(a.css.r),"head",2);g.elements.push(c)}else if(a.config.normalizeCSS){if(!(c=a.getCachedElement("iN")))c=a.cacheElement("iN",a.newInline(a.css.n),"head",2);g.elements.push(c)}if(a.config.prefix){if(!(c=a.getCachedElement("ssB")))c=a.cacheElement("ssB",a.newStyleSheet(a.config.prefix+".css"),"head",4);g.elements.push(c)}if(g.config.lockViewport){if(!(c=a.getCachedElement("mVL"+a.stateId)))c=a.cacheElement("mVL"+a.stateId,a.newMeta("viewport","width="+(g.config.viewportWidth?g.config.viewportWidth:"device-width")+",initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"),"head",1);g.elements.push(c)}else if(g.config.viewportWidth){if(!(c=a.getCachedElement("mV"+a.stateId)))c=a.cacheElement("mV"+a.stateId,a.newMeta("viewport","width="+g.config.viewportWidth),"head",1);g.elements.push(c)}b=parseInt(g.config.containers);g.config.containerUnits?(b=g.config.containers,u=g.config.containerUnits):(f=a.parseMeasurement(g.config.containers),b=f[0],u=f[1]);if(!(c=a.getCachedElement("iC"+b+u)))c=a.cacheElement("iC"+b+u,a.newInline(".container{width:"+b+u+" !important;margin: 0 auto}"),"head",3);g.elements.push(c);if(!(c=a.getCachedElement("iG")))c=a.cacheElement("iG",a.newInline(a.css.g+a.css.gF),"head",3);g.elements.push(c);g.config.grid.gutterUnits?(b=g.config.grid.gutters,u=g.config.grid.gutterUnits):(f=a.parseMeasurement(g.config.grid.gutters),b=f[0],u=f[1]);k=b/2;f=b/4;l=1.5*b;m=2*b;b+=u;k+=u;f+=u;l+=u;m+=u;if(!(c=a.getCachedElement("iGG"+g.config.grid.gutters)))c=a.cacheElement("iGG"+g.config.grid.gutters,a.newInline(".row>*{padding:"+b+" 0 0 "+b+"}.row+.row>*{padding-top:"+b+"}.row{margin-left:-"+b+"}.row.half>*{padding:"+k+" 0 0 "+k+"}.row.half+.row.half>*{padding-top:"+k+"}.row.half{margin-left:-"+k+"}.row.quarter>*{padding:"+f+" 0 0 "+f+"}.row.quarter+.row.quarter>*{padding-top:"+f+"}.row.quarter{margin-left:-"+f+"}.row.oneandhalf>*{padding:"+l+" 0 0 "+l+"}.row.oneandhalf+.row.oneandhalf>*{padding-top:"+l+"}.row.oneandhalf{margin-left:-"+l+"}.row.double>*{padding:"+m+" 0 0 "+m+"}.row.double+.row.double>*{padding-top:"+m+"}.row.double{margin-left:-"+m+"}"),"head",3);g.elements.push(c);if(g.config.grid.collapse){if(k=parseInt(g.config.grid.collapse),isNaN(k)&&(k=1),!(c=a.getCachedElement("iGC"+k))){b=a.css.gR+a.css.gC;f=":not(.persistent):not(.no-collapse)";switch(k){case 4:break;case 3:f+=":not(.no-collapse-3)";break;case 2:f+=":not(.no-collapse-2):not(.no-collapse-3)";break;default:f+=":not(.no-collapse-1):not(.no-collapse-2):not(.no-collapse-3)"}b=b.replace(/@/g,f);c=a.cacheElement("iGC"+k,a.newInline(b),"head",3)}}else if(!(c=a.getCachedElement("iGNoCo")))c=a.cacheElement("iGNoCo",a.newInline(a.css.gR),"head",3);g.elements.push(c);if(!(c=a.getCachedElement("iCd"+a.stateId)))e=[],h=[],a.iterate(a.breakpoints,function(b){-1!==a.indexOf(d,b)?e.push(".not-"+b):h.push(".only-"+b)}),b=(0<e.length?e.join(",")+"{display:none!important}":"")+(0<h.length?h.join(",")+"{display:none!important}":""),c=a.cacheElement("icD"+a.stateId,a.newInline(b.replace(/\.([0-9])/,".\\3$1 ")),"head",3),g.elements.push(c);a.iterate(d,function(b){if(a.breakpoints[d[b]].config.hasStyleSheet&&a.config.prefix){if(!(c=a.getCachedElement("ss"+d[b])))c=a.cacheElement("ss"+d[b],a.newStyleSheet(a.config.prefix+"-"+d[b]+".css"),"head",5);g.elements.push(c)}0<a.breakpoints[d[b]].elements.length&&a.iterate(a.breakpoints[d[b]].elements,function(c){g.elements.push(a.breakpoints[d[b]].elements[c])})});if(a.config.debug){if(!(c=a.getCachedElement("d")))c=a.cacheElement("d",a.newInline(a.css.d),"head",3);g.elements.push(c)}}a.detachAllElements();a.attachElements(g.elements);a.DOMReady(function(){var b,c;if((b=a.getElementsByClassName("skel-cell-mainContent"))&&0<b.length)if(b=b[0],g.config.grid.collapse)c=document.createElement("div"),c.innerHTML="",c.id="skel-cell-mainContent-placeholder",b.parentNode.insertBefore(c,b.nextSibling),b.parentNode.insertBefore(b,b.parentNode.firstChild);else if(c=document.getElementById("skel-cell-mainContent-placeholder"))b.parentNode.insertBefore(b,c),b.parentNode.removeChild(c)});a.trigger("stateChange")},newMeta:function(a,d){var c=document.createElement("meta");c.name=a;c.content=d;return c},newStyleSheet:function(a){var d=document.createElement("link");d.rel="stylesheet";d.type="text/css";d.href=a;return d},newInline:function(b){var d;a.isLegacyIE?(d=document.createElement("span"),d.innerHTML='&nbsp;<style type="text/css">'+b+"</style>"):(d=document.createElement("style"),d.type="text/css",d.innerHTML=b);return d},newDiv:function(a){var d=document.createElement("div");d.innerHTML=a;return d},registerPlugin:function(b,d){a.plugins[b]=d;d._=this;a.isConfigured&&(a.initPluginConfig(b,a.plugins[b]),d.init())},initPluginConfig:function(b,d){var c;c="_skel_"+b+"_config";window[c]?c=window[c]:(c=document.getElementsByTagName("script"),(c=c[c.length-1].innerHTML.replace(/^\s+|\s+$/g,""))&&(c=eval("("+c+")")));"object"==typeof c&&(c.preset&&d.presets[c.preset]&&a.extend(d.config,d.presets[c.preset]),a.extend(d.config,c))},initConfig:function(){function b(b,c){var d;"string"!=typeof c&&(d=function(a){return!1});"*"==c?d=function(a){return!0}:"-"==c.charAt(0)?(h[b]=parseInt(c.substring(1)),d=function(a){return a<=h[b]}):"-"==c.charAt(c.length-1)?(h[b]=parseInt(c.substring(0,c.length-1)),d=function(a){return a>=h[b]}):-1!=a.indexOf(c,"-")?(c=c.split("-"),h[b]=[parseInt(c[0]),parseInt(c[1])],d=function(a){return a>=h[b][0]&&a<=h[b][1]}):(h[b]=parseInt(c),d=function(a){return a==h[b]});return d}var d,c,e,h=[],f=[];window._skel_config?e=window._skel_config:(e=document.getElementsByTagName("script"),(e=e[e.length-1].innerHTML.replace(/^\s+|\s+$/g,""))&&(e=eval("("+e+")")));"object"==typeof e&&(e.preset&&a.presets[e.preset]?(a.config.breakpoints={},a.extend(a.config,a.presets[e.preset])):e.breakpoints&&(a.config.breakpoints={}),a.extend(a.config,e));a.extend(a.defaults.config_breakpoint.grid,a.config.grid);a.defaults.config_breakpoint.containers=a.config.containers;a.iterate(a.config.breakpoints,function(e){"object"!=typeof a.config.breakpoints[e]&&(a.config.breakpoints[e]={range:a.config.breakpoints[e]});d={};a.extend(d,a.defaults.config_breakpoint);a.extend(d,a.config.breakpoints[e]);a.config.breakpoints[e]=d;c={};a.extend(c,a.defaults.breakpoint);c.config=a.config.breakpoints[e];c.test=b(e,c.config.range);c.elements=[];a.breakpoints[e]=c;a.config.preloadStyleSheets&&c.config.hasStyleSheet&&f.push(a.config.prefix+"-"+e+".css");a.breakpointList.push(e)});a.iterate(a.config.events,function(b){a.bind(b,a.config.events[b])});0<f.length&&"file:"!=window.location.protocol&&a.DOMReady(function(){document.getElementsByTagName("head");var b=new XMLHttpRequest;a.iterate(f,function(a){b.open("GET",f[a],!1);b.send("")})})},initEvents:function(){a.config.pollOnce||(window.onresize=function(){a.poll()},a.config.useOrientation&&(window.onorientationchange=function(){a.poll()}))},initUtilityMethods:function(){(function(){var b=window,d=function(a){e=!1;d.isReady=!1;"function"===typeof a&&h.push(a);a=!1;if(!e)if(e=!0,"loading"!==c.readyState&&k(),c.addEventListener)c.addEventListener("DOMContentLoaded",f,!1),b.addEventListener("load",f,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",f);b.attachEvent("onload",f);try{a=null==b.frameElement}catch(g){}c.documentElement.doScroll&&a&&l()}},c=b.document,e=!1,h=[],f=function(){c.addEventListener?c.removeEventListener("DOMContentLoaded",f,!1):c.detachEvent("onreadystatechange",f);k()},k=function(){if(!d.isReady){if(!c.body)return setTimeout(k,1);d.isReady=!0;a.iterate(h,function(a){h[a]()});h=[]}},l=function(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(l,1);return}k()}};d.isReady=!1;a.DOMReady=d})();a.getElementsByClassName=document.getElementsByClassName?function(a){return document.getElementsByClassName(a)}:function(a){var d=document;return d.querySelectorAll?d.querySelectorAll(("."+a.replace(" "," .")).replace(/\.([0-9])/,".\\3$1 ")):[]};a.indexOf=Array.prototype.indexOf?function(a,d){return a.indexOf(d)}:function(a,d){"string"==typeof a&&(a=a.split(""));var c=a.length>>>0,e=Number(d)||0,e=0>e?Math.ceil(e):Math.floor(e);for(0>e&&(e+=c);e<c;e++)if(a instanceof Array&&e in a&&a[e]===d)return e;return-1};a.iterate=Object.keys?function(a,d){if(!a)return[];var c,e=Object.keys(a);for(c=0;e[c];c++)d(e[c])}:function(a,d){if(!a)return[];for(var c in a)a.hasOwnProperty(c)&&d(c)}},init:function(b,d){a.isLegacyIE=navigator.userAgent.match(/MSIE ([0-9]+)\./)&&8>=RegExp.$1?!0:!1;a.initUtilityMethods();b&&(window._skel_config=b);d&&a.iterate(d,function(a){window["_skel_"+a+"_config"]=d[a]});a.initConfig();a.registerLocation("html",document.getElementsByTagName("html")[0]);a.registerLocation("head",document.getElementsByTagName("head")[0]);a.DOMReady(function(){a.registerLocation("body",document.getElementsByTagName("body")[0])});a.initEvents();a.poll();a.iterate(a.plugins,function(b){a.initPluginConfig(b,a.plugins[b]);a.plugins[b].init()});a.isInit=!0},preInit:function(){if(window._skel_config)a.isConfigured=!0;else if(s=document.getElementsByTagName("script"),s=s[s.length-1].innerHTML.replace(/^\s+|\s+$/g,""))a.isConfigured=!0;a.isConfigured&&a.init()}};a.preInit();return a}();
/* my script */
$(document).ready( function() {
	// Normal Menu style
	$(".menu ul li").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});
	$(".menu ul li").click(function() {
		$(".menu ul li").removeClass("selected");		
		$(this).addClass("selected");
	});
	// Mini Menu: dropdown 
	// prepend menu icon 
	$('#menu_wrap').prepend('<div id="menu-icon">Menu</div>');
	// toggle nav 
	$("#menu-icon").on("click", function(){
		if($(this).hasClass('active')) {
			$('#nav').css({'left': -300});
		} else {
		    $('#nav').css({'left': 0});
		}
		$(this).toggleClass("active");
	});	
});