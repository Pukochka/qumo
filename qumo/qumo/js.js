
; /* Start:"a:4:{s:4:"full";s:62:"/local/templates/new/js/jquery.fancybox.min.js?163169909345539";s:6:"source";s:46:"/local/templates/new/js/jquery.fancybox.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// ==================================================
// fancyBox v3.0.47
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function s(t){var e=t.currentTarget,o=t.data?t.data.options:{},s=t.data?t.data.items:[],i="",a=0;t.preventDefault(),t.stopPropagation(),n(e).attr("data-fancybox")&&(i=n(e).data("fancybox")),i?(s=s.length?s.filter('[data-fancybox="'+i+'"]'):n("[data-fancybox="+i+"]"),a=s.index(e)):s=[e],n.fancybox.open(s,o,a)}if(!n)return o;var i={speed:330,loop:!0,opacity:"auto",margin:[44,0],gutter:30,infobar:!0,buttons:!0,slideShow:!0,fullScreen:!0,thumbs:!0,closeBtn:!0,smallBtn:"auto",image:{preload:"auto",protect:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,scrolling:"no",css:{}},baseClass:"",slideClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',closeTpl:'<button data-fancybox-close class="fancybox-close-small fancybox-button fancybox-button--close"></button>',parentEl:"body",touch:!0,keyboard:!0,focus:!0,closeClickOutside:!0,beforeLoad:n.noop,afterLoad:n.noop,beforeMove:n.noop,afterMove:n.noop,onComplete:n.noop,onInit:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop},a=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),d=function(o){var s;return"function"==typeof n&&o instanceof n&&(o=o[0]),s=o.getBoundingClientRect(),s.bottom>0&&s.right>0&&s.left<(t.innerWidth||e.documentElement.clientWidth)&&s.top<(t.innerHeight||e.documentElement.clientHeight)},p=function(t,o,s){var a=this;a.opts=n.extend(!0,{index:s},i,o||{}),a.id=a.opts.id||++c,a.group=[],a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=null,a.createGroup(t),a.group.length&&(a.$lastFocus=n(e.activeElement).blur(),a.slides={},a.init(t))};n.extend(p.prototype,{init:function(){var t,e,o=this,s=!1;o.scrollTop=r.scrollTop(),o.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||(t=n("body").width(),n("html").addClass("fancybox-enabled"),n.fancybox.isTouch?(n.each(o.group,function(t,e){if("image"!==e.type&&"iframe"!==e.type)return s=!0,!1}),s&&n("body").css({position:"fixed",width:t,top:o.scrollTop*-1})):(t=n("body").width()-t,t>1&&n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: "+t+"px; }").appendTo("head"))),e=n(o.opts.baseTpl).attr("id","fancybox-container-"+o.id).data("FancyBox",o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl),o.$refs={container:e,bg:e.find(".fancybox-bg"),controls:e.find(".fancybox-controls"),buttons:e.find(".fancybox-buttons"),slider_wrap:e.find(".fancybox-slider-wrap"),slider:e.find(".fancybox-slider"),caption:e.find(".fancybox-caption")},o.trigger("onInit"),o.activate(),o.current||o.jumpTo(o.currIndex)},createGroup:function(t){var e=this,s=n.makeArray(t);n.each(s,function(t,s){var i,a,r,c,l={},u={},d=[];n.isPlainObject(s)?(l=s,u=s.opts||{}):"object"===n.type(s)&&n(s).length?(i=n(s),d=i.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.type="type"in d?d.type:u.type,l.src="src"in d?d.src:u.src||i.attr("href"),u.width="width"in d?d.width:u.width,u.height="height"in d?d.height:u.height,u.thumb="thumb"in d?d.thumb:u.thumb,u.selector="selector"in d?d.selector:u.selector,"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=i):l={type:"html",content:s+""},l.opts=n.extend(!0,{},e.opts,u),a=l.type,r=l.src||"",a||(l.content?a="html":r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?a="pdf":"#"===r.charAt(0)&&(a="inline"),l.type=a),l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(s,[e,l]):"caption"in d?l.opts.caption=d.caption:u.$orig&&(l.opts.caption=i.attr("title")),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===a&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.selector=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(a,["html","inline","ajax"])>-1?(l.opts.buttons=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===a&&(l.type="iframe",l.opts.closeBtn=!0,l.opts.smallBtn=!1,l.opts.iframe.preload=!1),l.opts.modal&&n.extend(!0,l.opts,{infobar:0,buttons:0,keyboard:0,slideShow:0,fullScreen:0,closeClickOutside:0}),e.group.push(l)})},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("click.fb-previous","[data-fancybox-previous]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}),n(t).on("orientationchange.fb resize.fb",function(t){u(function(){t&&t.originalEvent&&"resize"===t.originalEvent.type?e.update():(e.$refs.slider_wrap.hide(),u(function(){e.$refs.slider_wrap.show(),e.update()}))})}),r.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;!o||n(t.target).hasClass("fancybox-container")||n.contains(o.$refs.container[0],t.target)||(t.stopPropagation(),o.focus(),a.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))}),r.on("keydown.fb",function(t){var o=e.current,s=t.keyCode||t.which;if(o&&o.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea")){if(8===s||27===s)return t.preventDefault(),void e.close(t);switch(s){case 37:case 38:t.preventDefault(),e.previous();break;case 39:case 40:t.preventDefault(),e.next();break;case 80:case 32:t.preventDefault(),e.SlideShow&&(t.preventDefault(),e.SlideShow.toggle());break;case 70:e.FullScreen&&(t.preventDefault(),e.FullScreen.toggle());break;case 71:e.Thumbs&&(t.preventDefault(),e.Thumbs.toggle())}}})},removeEvents:function(){a.off("scroll.fb resize.fb orientationchange.fb"),r.off("keydown.fb focusin.fb click.fb-close"),this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")},previous:function(t){this.jumpTo(this.currIndex-1,t)},next:function(t){this.jumpTo(this.currIndex+1,t)},jumpTo:function(t,e){var n,s,i,a,r=this;if(n=r.firstRun=null===r.firstRun,s=i=t=parseInt(t,10),a=!!r.current&&r.current.opts.loop,!r.isAnimating&&(s!=r.currIndex||n)){if(r.group.length>1&&a)s%=r.group.length,s=s<0?r.group.length+s:s,2==r.group.length?i=t-r.currIndex+r.currPos:(i=s-r.currIndex+r.currPos,Math.abs(r.currPos-(i+r.group.length))<Math.abs(r.currPos-i)?i+=r.group.length:Math.abs(r.currPos-(i-r.group.length))<Math.abs(r.currPos-i)&&(i-=r.group.length));else if(!r.group[s])return void r.update(!1,!1,e);r.current&&(r.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"),r.updateSlide(r.current,!0)),r.prevIndex=r.currIndex,r.prevPos=r.currPos,r.currIndex=s,r.currPos=i,r.current=r.createSlide(i),r.group.length>1&&((r.opts.loop||i-1>=0)&&r.createSlide(i-1),(r.opts.loop||i+1<r.group.length)&&r.createSlide(i+1)),r.current.isMoved=!1,r.current.isComplete=!1,e=parseInt(e===o?1.5*r.current.opts.speed:e,10),r.trigger("beforeMove"),r.updateControls(),n&&(r.current.$slide.addClass("fancybox-slide--current"),r.$refs.container.show(),u(function(){r.$refs.bg.css("transition-duration",r.current.opts.speed+"ms"),r.$refs.container.addClass("fancybox-container--ready")})),r.update(!0,!1,n?0:e,function(){r.afterMove()}),r.loadSlide(r.current),n&&r.current.$ghost||r.preload()}},createSlide:function(t){var e,o,s,i=this;if(o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]){if(i.opts.loop&&i.group.length>2)for(var a in i.slides)if(i.slides[a].index===o)return s=i.slides[a],s.pos=t,i.slides[t]=s,delete i.slides[a],i.updateSlide(s),s;e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.slider),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isMoved:!1,isLoaded:!1})}return i.slides[t]},zoomInOut:function(t,e,o){var s,i,a,r=this,c=r.current,l=c.$placeholder,u=c.opts.opacity,p=c.opts.$thumb,h=p?p.offset():0,f=c.$slide.offset();return!!(l&&c.isMoved&&h&&d(p))&&(!("In"===t&&!r.firstRun)&&(n.fancybox.stop(l),r.isAnimating=!0,s={top:h.top-f.top+parseFloat(p.css("border-top-width")||0),left:h.left-f.left+parseFloat(p.css("border-left-width")||0),width:p.width(),height:p.height(),scaleX:1,scaleY:1},"auto"==u&&(u=Math.abs(c.width/c.height-s.width/s.height)>.1),"In"===t?(i=s,a=r.getFitPos(c),a.scaleX=a.width/i.width,a.scaleY=a.height/i.height,u&&(i.opacity=.1,a.opacity=1)):(i=n.fancybox.getTranslate(l),a=s,c.$ghost&&(c.$ghost.show(),c.$image&&c.$image.remove()),i.scaleX=i.width/a.width,i.scaleY=i.height/a.height,i.width=a.width,i.height=a.height,u&&(a.opacity=0)),r.updateCursor(a.width,a.height),delete a.width,delete a.height,n.fancybox.setTranslate(l,i),l.show(),r.trigger("beforeZoom"+t),l.css("transition","all "+e+"ms"),n.fancybox.setTranslate(l,a),setTimeout(function(){var e;l.css("transition","none"),e=n.fancybox.getTranslate(l),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(l,e),r.trigger("afterZoom"+t),o.apply(r),r.isAnimating=!1},e),!0))},canPan:function(){var t=this,e=t.current,n=e.$placeholder,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},isScaledDown:function(){var t=this,e=t.current,o=e.$placeholder,s=!1;return o&&(s=n.fancybox.getTranslate(o),s=s.width<e.width||s.height<e.height),s},scaleToActual:function(t,e,s){var i,a,r,c,l,u=this,d=u.current,p=d.$placeholder,h=parseInt(d.$slide.width(),10),f=parseInt(d.$slide.height(),10),g=d.width,b=d.height;p&&(u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*f:e,i=n.fancybox.getTranslate(p),c=g/i.width,l=b/i.height,a=.5*h-.5*g,r=.5*f-.5*b,g>h&&(a=i.left*c-(t*c-t),a>0&&(a=0),a<h-g&&(a=h-g)),b>f&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<f-b&&(r=f-b)),u.updateCursor(g,b),n.fancybox.animate(p,null,{top:r,left:a,scaleX:c,scaleY:l},s||d.opts.speed,function(){u.isAnimating=!1}))},scaleToFit:function(t){var e,o=this,s=o.current,i=s.$placeholder;i&&(o.isAnimating=!0,e=o.getFitPos(s),o.updateCursor(e.width,e.height),n.fancybox.animate(i,null,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||s.opts.speed,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,s,i,r,c,l,u=t.$placeholder||t.$content,d=t.width,p=t.height,h=t.opts.margin;return!(!u||!u.length||!d&&!p)&&("number"===n.type(h)&&(h=[h,h]),2==h.length&&(h=[h[0],h[1],h[0],h[1]]),a.width()<800&&(h=[0,0,0,0]),e=parseInt(t.$slide.width(),10)-(h[1]+h[3]),o=parseInt(t.$slide.height(),10)-(h[0]+h[2]),s=Math.min(1,e/d,o/p),c=Math.floor(s*d),l=Math.floor(s*p),i=Math.floor(.5*(o-l))+h[0],r=Math.floor(.5*(e-c))+h[3],{top:i,left:r,width:c,height:l})},update:function(t,e,o,s){var i,a=this;a.isAnimating!==!0&&a.current&&(i=a.current.pos*Math.floor(a.current.$slide.width())*-1-a.current.pos*a.current.opts.gutter,o=parseInt(o,10)||0,n.fancybox.stop(a.$refs.slider),t===!1?a.updateSlide(a.current,e):n.each(a.slides,function(t,n){a.updateSlide(n,e)}),o?n.fancybox.animate(a.$refs.slider,null,{top:0,left:i},o,function(){a.current.isMoved=!0,"function"===n.type(s)&&s.apply(a)}):(n.fancybox.setTranslate(a.$refs.slider,{top:0,left:i}),a.current.isMoved=!0,"function"===n.type(s)&&s.apply(a)))},updateSlide:function(t,e){var o,s=this,i=t.$placeholder;t=t||s.current,t&&!s.isClosing&&(o=t.pos*Math.floor(t.$slide.width())+t.pos*t.opts.gutter,o!==t.leftPos&&(n.fancybox.setTranslate(t.$slide,{top:0,left:o}),t.leftPos=o),e!==!1&&i&&(n.fancybox.setTranslate(i,s.getFitPos(t)),t.pos===s.currPos&&s.updateCursor()),t.$slide.trigger("refresh"),s.trigger("onUpdate",t))},updateCursor:function(t,e){var n,s=this,i=s.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");!s.isClosing&&s.opts.touch&&(n=t!==o&&e!==o?t<s.current.width&&e<s.current.height:s.isScaledDown(),n?i.addClass("fancybox-controls--canzoomIn"):s.group.length<2?i.addClass("fancybox-controls--canzoomOut"):i.addClass("fancybox-controls--canGrab"))},loadSlide:function(t){var e,o,s,i=this;if(t&&!t.isLoaded&&!t.isLoading){switch(t.isLoading=!0,i.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.content);break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),s=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){s.abort()});break;default:i.setError(t)}return!0}},setImage:function(e){var o,s,i,a,r=this,c=e.opts.image.srcset;if(e.isLoaded&&!e.hasError)return void r.afterLoad(e);if(c){i=t.devicePixelRatio||1,a=t.innerWidth*i,s=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),s.sort(function(t,e){return t.value-e.value});for(var l=0;l<s.length;l++){var u=s[l];if("w"===u.postfix&&u.value>=a||"x"===u.postfix&&u.value>=i){o=u;break}}!o&&s.length&&(o=s[s.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$placeholder=n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("load error",function(){r.isClosing||(n("<img/>")[0].src=e.src,r.revealImage(e,function(){r.setBigImage(e),r.firstRun&&e.index===r.currIndex&&r.preload()}))}).addClass("fancybox-image").appendTo(e.$placeholder).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.afterLoad(t),t.$ghost&&(t.timouts=setTimeout(function(){t.$ghost.hide()},350)))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$placeholder),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},150),t.opts.image.protect&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0})},revealImage:function(t,e){var o=this;return e=e||n.noop,"image"!==t.type||t.hasError||t.isRevealed===!0?void e.apply(o):(t.isRevealed=!0,void(t.pos===o.currPos&&o.zoomInOut("In",t.opts.speed,e)||(t.$ghost&&!t.isLoaded&&o.updateSlide(t,!0),t.pos===o.currPos?n.fancybox.animate(t.$placeholder,{opacity:0},{opacity:1},300,e):t.$placeholder.show(),e.apply(o))))},setIframe:function(t){var e,s=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content"></div>').css(i.css).appendTo(a),e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",n.fancybox.isTouch?"auto":i.scrolling).appendTo(t.$content),i.preload?(t.$content.addClass("fancybox-tmp"),s.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),s.afterLoad(t)}),a.on("refresh.fb",function(){var n,s,a,r,c,l=t.$content;if(1===e[0].isReady){try{n=e.contents(),s=n.find("body")}catch(t){}s&&s.length&&(i.css.width===o||i.css.height===o)&&(a=e[0].contentWindow.document.documentElement.scrollWidth,r=Math.ceil(s.outerWidth(!0)+(l.width()-a)),c=Math.ceil(s.outerHeight(!0)),l.css({width:i.css.width===o?r+(l.outerWidth()-l.innerWidth()):i.css.width,height:i.css.height===o?c+(l.outerHeight()-l.innerHeight()):i.css.height})),l.removeClass("fancybox-tmp")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn&&t.$content.prepend(t.opts.closeTpl),a.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.data("placeholder")&&e.parents(".fancybox-slide").trigger("onReset"),e.data({placeholder:n("<div></div>").hide().insertAfter(e)}).css("display","inline-block")):("string"===n.type(e)&&(e=n("<div>").append(e).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.selector&&(e=n("<div>").html(e).find(t.opts.selector))),t.$slide.one("onReset",function(){var o=l(e)?e.data("placeholder"):0;o&&(e.hide().replaceAll(o),e.data("placeholder",null)),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn===!0&&t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl),this.afterLoad(t))},setError:function(t){t.hasError=!0,this.setContent(t,t.opts.errorTpl)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterMove:function(){var t=this,e=t.current,o={};e&&(e.$slide.siblings().trigger("onReset"),n.each(t.slides,function(e,n){n.pos>=t.currPos-1&&n.pos<=t.currPos+1?o[n.pos]=n:n&&n.$slide.remove()}),t.slides=o,t.trigger("afterMove"),e.isLoaded&&t.complete())},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.$ghost||e.updateSlide(t,!0),t.index===e.currIndex&&t.isMoved?e.complete():t.$ghost||e.revealImage(t))},complete:function(){var t=this,e=t.current;t.revealImage(e,function(){e.isComplete=!0,e.$slide.addClass("fancybox-slide--complete"),t.updateCursor(),t.trigger("onComplete"),e.opts.focus&&"image"!==e.type&&"iframe"!==e.type&&t.focus()})},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;t=e&&e.isComplete?e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first"):null,t&&t.length||(t=this.$refs.container),t.focus(),this.$refs.slider_wrap.scrollLeft(0),e&&e.$slide.scrollTop(0)},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t){var e=this,o=e.current,s=o.opts.speed,i=n.proxy(function(){e.cleanUp(t)},this);return!e.isAnimating&&!e.isClosing&&(e.trigger("beforeClose",t)===!1?(n.fancybox.stop(e.$refs.slider),void u(function(){e.update(!0,!0,150)})):(e.isClosing=!0,o.timouts&&clearTimeout(o.timouts),t!==!0&&n.fancybox.stop(e.$refs.slider),e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"),o.$slide.removeClass("fancybox-slide--complete").siblings().remove(),o.isMoved||o.$slide.css("overflow","visible"),e.removeEvents(),e.hideLoading(o),e.hideControls(),e.updateCursor(),e.$refs.bg.css("transition-duration",s+"ms"),this.$refs.container.removeClass("fancybox-container--ready"),void(t===!0?setTimeout(i,s):e.zoomInOut("Out",s,i)||n.fancybox.animate(e.$refs.container,null,{opacity:0},s,"easeInSine",i))))},cleanUp:function(t){var e,o=this;o.$refs.slider.children().trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(n("html").removeClass("fancybox-enabled"),n("body").removeAttr("style"),a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),n("#fancybox-noscroll").remove()),o.$lastFocus&&o.$lastFocus.focus()},trigger:function(t,o){var s,i=Array.prototype.slice.call(arguments,1),a=this,r=o&&o.opts?o:a.current;return r?i.unshift(r):r=a,i.unshift(a),n.isFunction(r.opts[t])&&(s=r.opts[t].apply(r,i)),s===!1?s:void("afterClose"===t?n(e).trigger(t+".fb",i):a.$refs.container.trigger(t+".fb",i))},toggleControls:function(t){this.isHiddenControls?this.updateControls(t):this.hideControls()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-controls"),this.$refs.container.removeClass("fancybox-show-caption")},updateControls:function(t){var e=this,o=e.$refs.container,s=e.$refs.caption,i=e.current,a=i.index,r=i.opts,c=r.caption;this.isHiddenControls&&t!==!0||(this.isHiddenControls=!1,o.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar",!!r.infobar&&e.group.length>1).toggleClass("fancybox-show-buttons",!!r.buttons).toggleClass("fancybox-is-modal",!!r.modal),n(".fancybox-button--left",o).toggleClass("fancybox-button--disabled",!r.loop&&a<=0),n(".fancybox-button--right",o).toggleClass("fancybox-button--disabled",!r.loop&&a>=e.group.length-1),n(".fancybox-button--play",o).toggle(!!(r.slideShow&&e.group.length>1)),n(".fancybox-button--close",o).toggle(!!r.closeBtn),n(".js-fancybox-count",o).html(e.group.length),n(".js-fancybox-index",o).html(a+1),i.$slide.trigger("refresh"),s&&s.empty(),c&&c.length?(s.html(c),this.$refs.container.addClass("fancybox-show-caption "),e.$caption=s):this.$refs.container.removeClass("fancybox-show-caption"))}}),n.fancybox={version:"3.0.47",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},isTouch:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<=11)}(),getTranslate:function(t){var e,n;return!(!t||!t.length)&&(e=t.get(0).getBoundingClientRect(),n=t.eq(0).css("transform"),n&&n.indexOf("matrix")!==-1?(n=n.split("(")[1],n=n.split(")")[0],n=n.split(",")):n=[],n.length?(n=n.length>10?[n[13],n[12],n[0],n[5]]:[n[5],n[4],n[0],n[3]],n=n.map(parseFloat)):n=[0,0,1,1],{top:n[0],left:n[1],scaleX:n[2],scaleY:n[3],opacity:parseFloat(t.css("opacity")),width:e.width,height:e.height})},setTranslate:function(t,e){var n="",s={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().top:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(s.transform=n),e.opacity!==o&&(s.opacity=e.opacity),e.width!==o&&(s.width=e.width),e.height!==o&&(s.height=e.height),t.css(s)},easing:{easeOutCubic:function(t,e,n,o){return n*((t=t/o-1)*t*t+1)+e},easeInCubic:function(t,e,n,o){return n*(t/=o)*t*t+e},easeOutSine:function(t,e,n,o){return n*Math.sin(t/o*(Math.PI/2))+e},easeInSine:function(t,e,n,o){return-n*Math.cos(t/o*(Math.PI/2))+n+e}},stop:function(t){t.removeData("animateID")},animate:function(t,e,s,i,a,r){var c,l,d,p=this,h=null,f=0,g=function(){s.scaleX!==o&&s.scaleY!==o&&e&&e.width!==o&&e.height!==o&&(s.width=e.width*s.scaleX,s.height=e.height*s.scaleY,s.scaleX=1,s.scaleY=1),p.setTranslate(t,s),r()},b=function(n){if(c=[],l=0,t.length&&t.data("animateID")===d){if(n=n||Date.now(),h&&(l=n-h),h=n,f+=l,f>=i)return void g();for(var r in s)s.hasOwnProperty(r)&&e[r]!==o&&(e[r]==s[r]?c[r]=s[r]:c[r]=p.easing[a](f,e[r],s[r]-e[r],i));p.setTranslate(t,c),u(b)}};p.animateID=d=p.animateID===o?1:p.animateID+1,t.data("animateID",d),r===o&&"function"==n.type(a)&&(r=a,a=o),a||(a="easeOutCubic"),r=r||n.noop,e?this.setTranslate(t,e):e=this.getTranslate(t),i?(t.show(),u(b)):g()}},n.fn.fancybox=function(t){return this.off("click.fb-start").on("click.fb-start",{items:this,options:t||{}},s),this},n(e).on("click.fb-start","[data-fancybox]",s)}(window,document,window.jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}}};t(document).on("onInit.fb",function(o,s){t.each(s.group,function(o,s){var i,a,r,c,l,u,d=s.src||"",p=!1;s.type||(t.each(n,function(n,o){if(a=d.match(o.matcher),l={},u=n,a){if(p=o.type,o.paramPlace&&a[o.paramPlace]){c=a[o.paramPlace],"?"==c[0]&&(c=c.substring(1)),c=c.split("&");for(var h=0;h<c.length;++h){var f=c[h].split("=",2);2==f.length&&(l[f[0]]=decodeURIComponent(f[1].replace(/\+/g," ")))}}return r=t.extend(!0,{},o.params,s.opts[n],l),d="function"===t.type(o.url)?o.url.call(this,a,r,s):e(o.url,a,r),i="function"===t.type(o.thumb)?o.thumb.call(this,a,r,s):e(o.thumb,a),"vimeo"===u&&(d=d.replace("&%23","#")),!1}}),p?(s.src=d,s.type=p,s.opts.thumb||s.opts.$thumb&&s.opts.$thumb.length||(s.opts.thumb=i),"iframe"===p&&(t.extend(!0,s.opts,{iframe:{preload:!1,scrolling:"no"},smallBtn:!1,closeBtn:!0,fullScreen:!1,slideShow:!1}),s.opts.slideClass+=" fancybox-slide--video")):s.type="iframe")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),s=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},i=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},a=function(t){return t.is("a")||t.is("button")||t.is("input")||t.is("select")||t.is("textarea")||n.isFunction(t.get(0).onclick)},r=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],s=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return s||i},c=function(t){for(var e=!1;;){if(e=r(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-slider")||t.is("body"))break}return e},l=function(t){var e=this;e.instance=t,e.$wrap=t.$refs.slider_wrap,e.$slider=t.$refs.slider,e.$container=t.$refs.container,e.destroy(),e.$wrap.on("touchstart.fb mousedown.fb",n.proxy(e,"ontouchstart"))};l.prototype.destroy=function(){this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")},l.prototype.ontouchstart=function(e){var o=this,r=n(e.target),l=o.instance,u=l.current,d=u.$content||u.$placeholder;return o.startPoints=s(e),o.$target=r,o.$content=d,o.canvasWidth=Math.round(u.$slide[0].clientWidth),o.canvasHeight=Math.round(u.$slide[0].clientHeight),o.startEvent=e,e.originalEvent.clientX>o.canvasWidth+u.$slide.offset().left||(a(r)||a(r.parent())||c(r)?void 0:u.opts.touch?void(e.originalEvent&&2==e.originalEvent.button||(e.stopPropagation(),e.preventDefault(),!u||o.instance.isAnimating||o.instance.isClosing||!o.startPoints||o.startPoints.length>1&&!u.isMoved||(o.$wrap.off("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove")),o.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend")),o.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend")),o.$wrap.on("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove")),o.startTime=(new Date).getTime(),o.distanceX=o.distanceY=o.distance=0,o.canTap=!1,o.isPanning=!1,o.isSwiping=!1,o.isZooming=!1,o.sliderStartPos=n.fancybox.getTranslate(o.$slider),o.contentStartPos=n.fancybox.getTranslate(o.$content),o.contentLastPos=null,1!==o.startPoints.length||o.isZooming||(o.canTap=u.isMoved,"image"===u.type&&(o.contentStartPos.width>o.canvasWidth+1||o.contentStartPos.height>o.canvasHeight+1)?(n.fancybox.stop(o.$content),o.isPanning=!0):(n.fancybox.stop(o.$slider),o.isSwiping=!0),o.$container.addClass("fancybox-controls--isGrabbing")),2===o.startPoints.length&&u.isMoved&&!u.hasError&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(o.isZooming=!0,o.isSwiping=!1,o.isPanning=!1,n.fancybox.stop(o.$content),o.centerPointStartX=.5*(o.startPoints[0].x+o.startPoints[1].x)-n(t).scrollLeft(),o.centerPointStartY=.5*(o.startPoints[0].y+o.startPoints[1].y)-n(t).scrollTop(),o.percentageOfImageAtPinchPointX=(o.centerPointStartX-o.contentStartPos.left)/o.contentStartPos.width,o.percentageOfImageAtPinchPointY=(o.centerPointStartY-o.contentStartPos.top)/o.contentStartPos.height,o.startDistanceBetweenFingers=i(o.startPoints[0],o.startPoints[1]))))):(o.endPoints=o.startPoints,o.ontap()))},l.prototype.ontouchmove=function(t){var e=this;t.preventDefault(),e.newPoints=s(t),e.newPoints&&e.newPoints.length&&(e.distanceX=i(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=i(e.newPoints[0],e.startPoints[0],"y"),e.distance=i(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()))},l.prototype.onSwipe=function(){var e,s=this,i=s.isSwiping,a=s.sliderStartPos.left;i===!0?Math.abs(s.distance)>10&&(s.instance.group.length<2?s.isSwiping="y":!s.instance.current.isMoved||s.instance.opts.touch.vertical===!1||"auto"===s.instance.opts.touch.vertical&&n(t).width()>800?s.isSwiping="x":(e=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),
s.isSwiping=e>45&&e<135?"y":"x"),s.canTap=!1,s.instance.current.isMoved=!1,s.startPoints=s.newPoints):("x"==i&&(!s.instance.current.opts.loop&&0===s.instance.current.index&&s.distanceX>0?a+=Math.pow(s.distanceX,.8):!s.instance.current.opts.loop&&s.instance.current.index===s.instance.group.length-1&&s.distanceX<0?a-=Math.pow(-s.distanceX,.8):a+=s.distanceX),s.sliderLastPos={top:"x"==i?0:s.sliderStartPos.top+s.distanceY,left:a},o(function(){n.fancybox.setTranslate(s.$slider,s.sliderLastPos)}))},l.prototype.onPan=function(){var t,e,s,i=this;i.canTap=!1,t=i.contentStartPos.width>i.canvasWidth?i.contentStartPos.left+i.distanceX:i.contentStartPos.left,e=i.contentStartPos.top+i.distanceY,s=i.limitMovement(t,e,i.contentStartPos.width,i.contentStartPos.height),s.scaleX=i.contentStartPos.scaleX,s.scaleY=i.contentStartPos.scaleY,i.contentLastPos=s,o(function(){n.fancybox.setTranslate(i.$content,i.contentLastPos)})},l.prototype.limitMovement=function(t,e,n,o){var s,i,a,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,p=c.contentStartPos.top,h=c.distanceX,f=c.distanceY;return s=Math.max(0,.5*l-.5*n),i=Math.max(0,.5*u-.5*o),a=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>s&&(t=s-1+Math.pow(-s+d+h,.8)||0),h<0&&t<a&&(t=a+1-Math.pow(a-d-h,.8)||0)),o>u&&(f>0&&e>i&&(e=i-1+Math.pow(-i+p+f,.8)||0),f<0&&e<r&&(e=r+1-Math.pow(r-p-f,.8)||0)),{top:e,left:t}},l.prototype.limitPosition=function(t,e,n,o){var s=this,i=s.canvasWidth,a=s.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>a?(e=e>0?0:e,e=e<a-o?a-o:e):e=Math.max(0,a/2-o/2),{top:e,left:t}},l.prototype.onZoom=function(){var e=this,s=e.contentStartPos.width,a=e.contentStartPos.height,r=e.contentStartPos.left,c=e.contentStartPos.top,l=i(e.newPoints[0],e.newPoints[1]),u=l/e.startDistanceBetweenFingers,d=Math.floor(s*u),p=Math.floor(a*u),h=(s-d)*e.percentageOfImageAtPinchPointX,f=(a-p)*e.percentageOfImageAtPinchPointY,g=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),b=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),m=g-e.centerPointStartX,y=b-e.centerPointStartY,v=r+(h+m),x=c+(f+y),w={top:x,left:v,scaleX:e.contentStartPos.scaleX*u,scaleY:e.contentStartPos.scaleY*u};e.canTap=!1,e.newWidth=d,e.newHeight=p,e.contentLastPos=w,o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},l.prototype.ontouchend=function(t){var e=this,o=e.instance.current,i=Math.max((new Date).getTime()-e.startTime,1),a=e.isSwiping,r=e.isPanning,c=e.isZooming;return e.endPoints=s(t),e.$container.removeClass("fancybox-controls--isGrabbing"),e.$wrap.off("touchmove.fb mousemove.fb",n.proxy(this,"ontouchmove")),e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(this,"ontouchend")),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.canTap?e.ontap():(e.velocityX=e.distanceX/i*.5,e.velocityY=e.distanceY/i*.5,e.speed=o.opts.speed||330,e.speedX=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityX)*e.speed)),e.speedY=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityY)*e.speed)),void(r?e.endPanning():c?e.endZooming():e.endSwiping(a)))},l.prototype.endSwiping=function(t){var e=this;"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.$slider,null,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,left:e.sliderStartPos.left,opacity:0},e.speedY),e.instance.close(!0)):"x"==t&&e.distanceX>50?e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50?e.instance.next(e.speedX):e.instance.update(!1,!0,150)},l.prototype.endPanning=function(){var t,e,o,s=this;s.contentLastPos&&(t=s.contentLastPos.left+s.velocityX*s.speed*2,e=s.contentLastPos.top+s.velocityY*s.speed*2,o=s.limitPosition(t,e,s.contentStartPos.width,s.contentStartPos.height),o.width=s.contentStartPos.width,o.height=s.contentStartPos.height,n.fancybox.animate(s.$content,null,o,s.speed,"easeOutSine"))},l.prototype.endZooming=function(){var t,e,o,s,i=this,a=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,s={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,s),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>a.width||c>a.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.animate(i.$content,null,o,i.speed,"easeOutSine")))},l.prototype.ontap=function(){var t=this,e=t.instance,o=e.current,s=t.endPoints[0].x,i=t.endPoints[0].y;if(s-=t.$wrap.offset().left,i-=t.$wrap.offset().top,e.SlideShow&&e.SlideShow.isActive&&e.SlideShow.stop(),!n.fancybox.isTouch)return o.opts.closeClickOutside&&t.$target.is(".fancybox-slide")?void e.close(t.startEvent):void("image"==o.type&&o.isMoved&&(e.canPan()?e.scaleToFit():e.isScaledDown()?e.scaleToActual(s,i):e.group.length<2&&e.close(t.startEvent)));if(t.tapped){if(clearTimeout(t.tapped),t.tapped=null,Math.abs(s-t.x)>50||Math.abs(i-t.y)>50||!o.isMoved)return this;"image"==o.type&&(o.isLoaded||o.$ghost)&&(e.canPan()?e.scaleToFit():e.isScaledDown()&&e.scaleToActual(s,i))}else t.x=s,t.y=i,t.tapped=setTimeout(function(){t.tapped=null,e.toggleControls(!0)},300);return this},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new l(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons),t.instance.$refs.container.on("click","[data-fancybox-play]",function(){t.toggle()})},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):t.stop()},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this;t.stop(),t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)&&(t.instance.$refs.container.on({"beforeLoad.fb.player":e.proxy(t,"clear"),"onComplete.fb.player":e.proxy(t,"set")}),t.isActive=!0,t.instance.current.isComplete&&t.set(),t.instance.$refs.container.trigger("onPlayStart"),t.$button.addClass("fancybox-button--pause"))},stop:function(){var t=this;t.clear(),t.instance.$refs.container.trigger("onPlayEnd").off(".player"),t.$button.removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on("onInit.fb",function(t,e){e&&e.group.length>1&&e.opts.slideShow&&!e.SlideShow&&(e.SlideShow=new n(e))}),e(t).on("beforeClose.fb onDeactivate.fb",function(t,e){e&&e.SlideShow&&e.SlideShow.stop()})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,o,s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i={};for(n=0;n<s.length;n++)if(e=s[n],e&&e[1]in t){for(o=0;o<e.length;o++)i[s[0][o]]=e[o];return i}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(t){this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,n){var s;n&&n.opts.fullScreen&&!n.FullScreen&&(s=n.$refs.container,n.$refs.button_fs=e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.$refs.buttons),s.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(s[0])}),n.opts.fullScreen.requestOnStart===!0&&o.request(s[0]))},"beforeMove.fb":function(t,e){e&&e.$refs.button_fs&&e.$refs.button_fs.toggle(!!e.current.opts.fullScreen)},"beforeClose.fb":function(){o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance(),n=t?t.current.$placeholder:null;n&&(n.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0))})}}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this;t.$button=e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click",function(e){e.stopPropagation(),e.preventDefault(),t.toggle()})},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click touchstart","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,s,i=e(this).parent().removeClass("fancybox-thumbs-loading"),a=i.outerWidth(),r=i.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/a,s=n/r,o>=1&&s>=1&&(o>s?(t/=s,n=r):(t=a,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*a-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-container--thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.$grid.show(),this.focus()):this.$grid&&this.$grid.hide(),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible?this.hide():this.show()}}),e(t).on("onInit.fb",function(t,e){var o=e.group[0],s=e.group[1];e.opts.thumbs&&!e.Thumbs&&e.group.length>1&&("image"==o.type||o.opts.thumb||o.opts.$thumb)&&("image"==s.type||s.opts.thumb||s.opts.$thumb)&&(e.Thumbs=new n(e))}),e(t).on("beforeMove.fb",function(t,e,n){var o=e&&e.Thumbs;o&&(n.modal?(o.$button.hide(),o.hide()):(e.opts.thumbs.showOnStart===!0&&e.firstRun&&o.show(),o.$button.show(),o.isVisible&&o.focus()))}),e(t).on("beforeClose.fb",function(t,e){e&&e.Thumbs&&(e.Thumbs.isVisible&&e.opts.thumbs.hideOnClosing!==!1&&e.Thumbs.close(),e.Thumbs=null)})}(document,window.jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,s=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:s}}function s(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length?e.trigger("click"):n("#"+n.escapeSelector(t.gallery)).trigger("click"))}function i(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.$orig?e.$orig.data("fancybox"):e.hash||"")}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"пїЅ":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var a=null;n(function(){setTimeout(function(){n.fancybox.defaults.hash!==!1&&(n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?a&&a!==t.gallery+"-"+t.index&&(a=null,n.fancybox.close()):""!==t.gallery&&s(t)}),n(t).on({"onInit.fb":function(t,e){var n=o(),s=i(e);s&&n.gallery&&s==n.gallery&&(e.currIndex=n.index-1)},"beforeMove.fb":function(n,o,s){var r=i(o);r&&""!==r&&(e.location.hash.indexOf(r)<0&&(o.opts.origHash=e.location.hash),a=r+(o.group.length>1?"-"+(s.index+1):""),"pushState"in history?history.pushState("",t.title,e.location.pathname+e.location.search+"#"+a):e.location.hash=a)},"beforeClose.fb":function(n,o,s){var r=i(o),c=o&&o.opts.origHash?o.opts.origHash:"";r&&""!==r&&("pushState"in history?history.pushState("",t.title,e.location.pathname+e.location.search+c):e.location.hash=c),a=null}}),s(o()))},50)})}(document,window,window.jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/local/templates/new/js/jquery.inputmask.bundle.min.js?163169909376313";s:6:"source";s:54:"/local/templates/new/js/jquery.inputmask.bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2016 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.4
*/
!function(a){function b(d,e){return this instanceof b?(a.isPlainObject(d)?e=d:(e=e||{},e.alias=d),this.el=void 0,this.opts=a.extend(!0,{},this.defaults,e),this.maskset=void 0,this.noMasksCache=e&&void 0!==e.definitions,this.userOptions=e||{},this.events={},this.dataAttribute="data-inputmask",this.isRTL=this.opts.numericInput,void c(this.opts.alias,e,this.opts)):new b(d,e)}function c(b,d,e){var f=e.aliases[b];return f?(f.alias&&c(f.alias,void 0,e),a.extend(!0,e,f),a.extend(!0,e,d),!0):(null===e.mask&&(e.mask=b),!1)}function d(c,d){function e(c,e,f){if(null!==c&&""!==c){if(1===c.length&&f.greedy===!1&&0!==f.repeat&&(f.placeholder=""),f.repeat>0||"*"===f.repeat||"+"===f.repeat){var g="*"===f.repeat?0:"+"===f.repeat?1:f.repeat;c=f.groupmarker.start+c+f.groupmarker.end+f.quantifiermarker.start+g+","+f.repeat+f.quantifiermarker.end}var h;return void 0===b.prototype.masksCache[c]||d===!0?(h={mask:c,maskToken:b.prototype.analyseMask(c,f),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:e,maskLength:void 0},d!==!0&&(b.prototype.masksCache[f.numericInput?c.split("").reverse().join(""):c]=h,h=a.extend(!0,{},b.prototype.masksCache[f.numericInput?c.split("").reverse().join(""):c]))):h=a.extend(!0,{},b.prototype.masksCache[f.numericInput?c.split("").reverse().join(""):c]),h}}var f;if(a.isFunction(c.mask)&&(c.mask=c.mask(c)),a.isArray(c.mask)){if(c.mask.length>1){c.keepStatic=null===c.keepStatic||c.keepStatic;var g=c.groupmarker.start;return a.each(c.numericInput?c.mask.reverse():c.mask,function(b,d){g.length>1&&(g+=c.groupmarker.end+c.alternatormarker+c.groupmarker.start),g+=void 0===d.mask||a.isFunction(d.mask)?d:d.mask}),g+=c.groupmarker.end,e(g,c.mask,c)}c.mask=c.mask.pop()}return c.mask&&(f=void 0===c.mask.mask||a.isFunction(c.mask.mask)?e(c.mask,c.mask,c):e(c.mask.mask,c.mask,c)),f}function e(c,d,f){function k(a,b,c){b=b||0;var d,e,g,h=[],i=0,j=n();S=void 0!==V?V.maxLength:void 0,S===-1&&(S=void 0);do a===!0&&l().validPositions[i]?(g=l().validPositions[i],e=g.match,d=g.locator.slice(),h.push(c===!0?g.input:c===!1?e.nativeDef:F(i,e))):(g=q(i,d,i-1),e=g.match,d=g.locator.slice(),(f.jitMasking===!1||i<j||"number"==typeof f.jitMasking&&isFinite(f.jitMasking)&&f.jitMasking>i)&&h.push(c===!1?e.nativeDef:F(i,e))),i++;while((void 0===S||i<S)&&(null!==e.fn||""!==e.def)||b>i);return""===h[h.length-1]&&h.pop(),l().maskLength=i+1,h}function l(){return d}function m(a){var b=l();b.buffer=void 0,a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=0)}function n(a,b,c){var d=-1,e=-1,f=c||l().validPositions;void 0===a&&(a=-1);for(var g in f){var h=parseInt(g);f[h]&&(b||null!==f[h].match.fn)&&(h<=a&&(d=h),h>=a&&(e=h))}return d!==-1&&a-d>1||e<a?d:e}function o(b,c,d,e){function g(a){var b=l().validPositions[a];if(void 0!==b&&null===b.match.fn){var c=l().validPositions[a-1],d=l().validPositions[a+1];return void 0!==c&&void 0!==d}return!1}var h,i=b,j=a.extend(!0,{},l().validPositions),k=!1;for(l().p=b,h=c-1;h>=i;h--)void 0!==l().validPositions[h]&&(d!==!0&&(!l().validPositions[h].match.optionality&&g(h)||f.canClearPosition(l(),h,n(),e,f)===!1)||delete l().validPositions[h]);for(m(!0),h=i+1;h<=n();){for(;void 0!==l().validPositions[i];)i++;if(h<i&&(h=i+1),void 0===l().validPositions[h]&&A(h))h++;else{var o=q(h);k===!1&&j[i]&&j[i].match.def===o.match.def?(l().validPositions[i]=a.extend(!0,{},j[i]),l().validPositions[i].input=o.input,delete l().validPositions[h],h++):s(i,o.match.def)?z(i,o.input||F(h),!0)!==!1&&(delete l().validPositions[h],h++,k=!0):A(h)||(h++,i--),i++}}m(!0)}function p(a,b){for(var c,d=a,e=n(),g=l().validPositions[e]||t(0)[0],h=void 0!==g.alternation?g.locator[g.alternation].toString().split(","):[],i=0;i<d.length&&(c=d[i],!(c.match&&(f.greedy&&c.match.optionalQuantifier!==!0||(c.match.optionality===!1||c.match.newBlockMarker===!1)&&c.match.optionalQuantifier!==!0)&&(void 0===g.alternation||g.alternation!==c.alternation||void 0!==c.locator[g.alternation]&&y(c.locator[g.alternation].toString().split(","),h)))||b===!0&&(null!==c.match.fn||/[0-9a-bA-Z]/.test(c.match.def)));i++);return c}function q(a,b,c){return l().validPositions[a]||p(t(a,b?b.slice():b,c))}function r(a){return l().validPositions[a]?l().validPositions[a]:t(a)[0]}function s(a,b){for(var c=!1,d=t(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function t(b,c,d){function e(c,d,g,h){function j(g,h,m){function p(b,c){var d=0===a.inArray(b,c.matches);return d||a.each(c.matches,function(a,e){if(e.isQuantifier===!0&&(d=p(b,c.matches[a-1])))return!1}),d}function r(b,c,d){var e,f;return(l().tests[b]||l().validPositions[b])&&a.each(l().tests[b]||[l().validPositions[b]],function(a,b){var g=void 0!==d?d:b.alternation,h=void 0!==b.locator[g]?b.locator[g].toString().indexOf(c):-1;(void 0===f||h<f)&&h!==-1&&(e=b,f=h)}),e?e.locator.slice((void 0!==d?d:e.alternation)+1):void 0!==d?r(b,c):void 0}function s(a,c){return null===a.match.fn&&null!==c.match.fn&&c.match.fn.test(a.match.def,l(),b,!1,f,!1)}if(k>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+l().mask;if(k===b&&void 0===g.matches)return n.push({match:g,locator:h.reverse(),cd:q}),!0;if(void 0!==g.matches){if(g.isGroup&&m!==g){if(g=j(c.matches[a.inArray(g,c.matches)+1],h))return!0}else if(g.isOptional){var t=g;if(g=e(g,d,h,m)){if(i=n[n.length-1].match,!p(i,t))return!0;o=!0,k=b}}else if(g.isAlternator){var u,v=g,w=[],x=n.slice(),y=h.length,z=d.length>0?d.shift():-1;if(z===-1||"string"==typeof z){var A,B=k,C=d.slice(),D=[];if("string"==typeof z)D=z.split(",");else for(A=0;A<v.matches.length;A++)D.push(A);for(var E=0;E<D.length;E++){if(A=parseInt(D[E]),n=[],d=r(k,A,y)||C.slice(),g=j(v.matches[A]||c.matches[A],[A].concat(h),m)||g,g!==!0&&void 0!==g&&D[D.length-1]<v.matches.length){var F=a.inArray(g,c.matches)+1;c.matches.length>F&&(g=j(c.matches[F],[F].concat(h.slice(1,h.length)),m),g&&(D.push(F.toString()),a.each(n,function(a,b){b.alternation=h.length-1})))}u=n.slice(),k=B,n=[];for(var G=0;G<u.length;G++){var H=u[G],I=!1;H.alternation=H.alternation||y;for(var J=0;J<w.length;J++){var K=w[J];if(("string"!=typeof z||a.inArray(H.locator[H.alternation].toString(),D)!==-1)&&(H.match.def===K.match.def||s(H,K))){I=H.match.nativeDef===K.match.nativeDef,H.alternation==K.alternation&&K.locator[K.alternation].toString().indexOf(H.locator[H.alternation])===-1&&(K.locator[K.alternation]=K.locator[K.alternation]+","+H.locator[H.alternation],K.alternation=H.alternation,null==H.match.fn&&(K.na=K.na||H.locator[H.alternation].toString(),K.na.indexOf(H.locator[H.alternation])===-1&&(K.na=K.na+","+H.locator[H.alternation])));break}}I||w.push(H)}}"string"==typeof z&&(w=a.map(w,function(b,c){if(isFinite(c)){var d,e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=void 0,b.alternation=void 0;for(var g=0;g<f.length;g++)d=a.inArray(f[g],D)!==-1,d&&(void 0!==b.locator[e]?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(void 0!==b.locator[e])return b}})),n=x.concat(w),k=b,o=n.length>0,d=C.slice()}else g=j(v.matches[z]||c.matches[z],[z].concat(h),m);if(g)return!0}else if(g.isQuantifier&&m!==c.matches[a.inArray(g,c.matches)-1])for(var L=g,M=d.length>0?d.shift():0;M<(isNaN(L.quantifier.max)?M+1:L.quantifier.max)&&k<=b;M++){var N=c.matches[a.inArray(L,c.matches)-1];if(g=j(N,[M].concat(h),N)){if(i=n[n.length-1].match,i.optionalQuantifier=M>L.quantifier.min-1,p(i,N)){if(M>L.quantifier.min-1){o=!0,k=b;break}return!0}return!0}}else if(g=e(g,d,h,m))return!0}else k++}for(var m=d.length>0?d.shift():0;m<c.matches.length;m++)if(c.matches[m].isQuantifier!==!0){var p=j(c.matches[m],[m].concat(g),h);if(p&&k===b)return p;if(k>b)break}}function g(b){var c=[];return a.isArray(b)||(b=[b]),b.length>0&&(void 0===b[0].alternation?(c=p(b.slice()).locator.slice(),0===c.length&&(c=b[0].locator.slice())):a.each(b,function(a,b){if(""!==b.def)if(0===c.length)c=b.locator.slice();else for(var d=0;d<c.length;d++)b.locator[d]&&c[d].toString().indexOf(b.locator[d])===-1&&(c[d]+=","+b.locator[d])})),c}function h(a){return f.keepStatic&&b>0&&a.length>1+(""===a[a.length-1].match.def?1:0)&&a[0].match.optionality!==!0&&a[0].match.optionalQuantifier!==!0&&null===a[0].match.fn&&!/[0-9a-bA-Z]/.test(a[0].match.def)?[p(a)]:a}var i,j=l().maskToken,k=c?d:0,m=c?c.slice():[0],n=[],o=!1,q=c?c.join(""):"";if(b>-1){if(void 0===c){for(var r,s=b-1;void 0===(r=l().validPositions[s]||l().tests[s])&&s>-1;)s--;void 0!==r&&s>-1&&(m=g(r),q=m.join(""),k=s)}if(l().tests[b]&&l().tests[b][0].cd===q)return h(l().tests[b]);for(var t=m.shift();t<j.length;t++){var u=e(j[t],m,[t]);if(u&&k===b||k>b)break}}return(0===n.length||o)&&n.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:q}),void 0!==c&&l().tests[b]?h(a.extend(!0,[],n)):(l().tests[b]=a.extend(!0,[],n),h(l().tests[b]))}function u(){return void 0===l()._buffer&&(l()._buffer=k(!1,1),void 0===l().buffer&&l()._buffer.slice()),l()._buffer}function v(a){return void 0!==l().buffer&&a!==!0||(l().buffer=k(!0,n(),!0)),l().buffer}function w(a,b,c){var d;if(a===!0)m(),a=0,b=c.length;else for(d=a;d<b;d++)delete l().validPositions[d];for(d=a;d<b;d++)m(!0),c[d]!==f.skipOptionalPartCharacter&&z(d,c[d],!0,!0)}function x(a,c,d){switch(f.casing||c.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase();break;case"title":var e=l().validPositions[d-1];a=0===d||e&&e.input===String.fromCharCode(b.keyCode.SPACE)?a.toUpperCase():a.toLowerCase()}return a}function y(b,c){for(var d=f.greedy?c:c.slice(0,1),e=!1,g=0;g<b.length;g++)if(a.inArray(b[g],d)!==-1){e=!0;break}return e}function z(c,d,e,g,h){function i(a){var b=W?a.begin-a.end>1||a.begin-a.end===1&&f.insertMode:a.end-a.begin>1||a.end-a.begin===1&&f.insertMode;return b&&0===a.begin&&a.end===l().maskLength?"full":b}function j(b,d,e){var h=!1;return a.each(t(b),function(j,k){for(var p=k.match,q=d?1:0,r="",s=p.cardinality;s>q;s--)r+=D(b-(s-1));if(d&&(r+=d),v(!0),h=null!=p.fn?p.fn.test(r,l(),b,e,f,i(c)):(d===p.def||d===f.skipOptionalPartCharacter)&&""!==p.def&&{c:p.placeholder||p.def,pos:b},h!==!1){var t=void 0!==h.c?h.c:d;t=t===f.skipOptionalPartCharacter&&null===p.fn?p.placeholder||p.def:t;var y=b,A=v();if(void 0!==h.remove&&(a.isArray(h.remove)||(h.remove=[h.remove]),a.each(h.remove.sort(function(a,b){return b-a}),function(a,b){o(b,b+1,!0)})),void 0!==h.insert&&(a.isArray(h.insert)||(h.insert=[h.insert]),a.each(h.insert.sort(function(a,b){return a-b}),function(a,b){z(b.pos,b.c,!0,g)})),h.refreshFromBuffer){var B=h.refreshFromBuffer;if(e=!0,w(B===!0?B:B.start,B.end,A),void 0===h.pos&&void 0===h.c)return h.pos=n(),!1;if(y=void 0!==h.pos?h.pos:b,y!==b)return h=a.extend(h,z(y,t,!0,g)),!1}else if(h!==!0&&void 0!==h.pos&&h.pos!==b&&(y=h.pos,w(b,y,v().slice()),y!==b))return h=a.extend(h,z(y,t,!0)),!1;return(h===!0||void 0!==h.pos||void 0!==h.c)&&(j>0&&m(!0),u(y,a.extend({},k,{input:x(t,p,y)}),g,i(c))||(h=!1),!1)}}),h}function k(b,c,d){var e,h,i,j,k,o,p,q,r=a.extend(!0,{},l().validPositions),s=!1,u=n();for(j=l().validPositions[u];u>=0;u--)if(i=l().validPositions[u],i&&void 0!==i.alternation){if(e=u,h=l().validPositions[e].alternation,j.locator[i.alternation]!==i.locator[i.alternation])break;j=i}if(void 0!==h){q=parseInt(e);var v=void 0!==j.locator[j.alternation||h]?j.locator[j.alternation||h]:p[0];v.length>0&&(v=v.split(",")[0]);var w=l().validPositions[q],x=l().validPositions[q-1];a.each(t(q,x?x.locator:void 0,q-1),function(e,i){p=i.locator[h]?i.locator[h].toString().split(","):[];for(var j=0;j<p.length;j++){var t=[],u=0,x=0,y=!1;if(v<p[j]&&(void 0===i.na||a.inArray(p[j],i.na.split(","))===-1)){l().validPositions[q]=a.extend(!0,{},i);var A=l().validPositions[q].locator;for(l().validPositions[q].locator[h]=parseInt(p[j]),null==i.match.fn?(w.input!==i.match.def&&(y=!0,w.generatedInput!==!0&&t.push(w.input)),x++,l().validPositions[q].generatedInput=!/[0-9a-bA-Z]/.test(i.match.def),l().validPositions[q].input=i.match.def):l().validPositions[q].input=w.input,k=q+1;k<n(void 0,!0)+1;k++)o=l().validPositions[k],o&&o.generatedInput!==!0&&/[0-9a-bA-Z]/.test(o.input)?t.push(o.input):k<b&&u++,delete l().validPositions[k];for(y&&t[0]===i.match.def&&t.shift(),m(!0),s=!0;t.length>0;){var B=t.shift();if(B!==f.skipOptionalPartCharacter&&!(s=z(n(void 0,!0)+1,B,!1,g,!0)))break}if(s){l().validPositions[q].locator=A;var C=n(b)+1;for(k=q+1;k<n()+1;k++)o=l().validPositions[k],(void 0===o||null==o.match.fn)&&k<b+(x-u)&&x++;b+=x-u,s=z(b>C?C:b,c,d,g,!0)}if(s)return!1;m(),l().validPositions=a.extend(!0,{},r)}}})}return s}function r(b,c){var d=l().validPositions[c];if(d)for(var e=d.locator,f=e.length,g=b;g<c;g++)if(void 0===l().validPositions[g]&&!A(g,!0)){var h=t(g),i=h[0],j=-1;a.each(h,function(a,b){for(var c=0;c<f&&(void 0!==b.locator[c]&&y(b.locator[c].toString().split(","),e[c].toString().split(",")));c++)j<c&&(j=c,i=b)}),u(g,a.extend({},i,{input:i.match.placeholder||i.match.def}),!0)}}function u(b,c,d,e){if(e||f.insertMode&&void 0!==l().validPositions[b]&&void 0===d){var g,h=a.extend(!0,{},l().validPositions),i=n(void 0,!0);for(g=b;g<=i;g++)delete l().validPositions[g];l().validPositions[b]=a.extend(!0,{},c);var j,k=!0,o=l().validPositions,p=!1,q=l().maskLength;for(g=j=b;g<=i;g++){var r=h[g];if(void 0!==r)for(var t=j;t<l().maskLength&&(null===r.match.fn&&o[g]&&(o[g].match.optionalQuantifier===!0||o[g].match.optionality===!0)||null!=r.match.fn);){if(t++,p===!1&&h[t]&&h[t].match.def===r.match.def)l().validPositions[t]=a.extend(!0,{},h[t]),l().validPositions[t].input=r.input,C(t),j=t,k=!0;else if(s(t,r.match.def)){var u=z(t,r.input,!0,!0);k=u!==!1,j=u.caret||u.insert?n():t,p=!0}else k=r.generatedInput===!0;if(l().maskLength<q&&(l().maskLength=q),k)break}if(!k)break}if(!k)return l().validPositions=a.extend(!0,{},h),m(!0),!1}else l().validPositions[b]=a.extend(!0,{},c);return m(!0),!0}function C(b){for(var c=b-1;c>-1&&!l().validPositions[c];c--);var d,e;for(c++;c<b;c++)void 0===l().validPositions[c]&&(f.jitMasking===!1||f.jitMasking>c)&&(e=t(c,q(c-1).locator,c-1).slice(),""===e[e.length-1].match.def&&e.pop(),d=p(e),d&&(d.match.def===f.radixPointDefinitionSymbol||!A(c,!0)||a.inArray(f.radixPoint,v())<c&&d.match.fn&&d.match.fn.test(F(c),l(),c,!1,f))&&(G=j(c,d.match.placeholder||(null==d.match.fn?d.match.def:""!==F(c)?F(c):v()[c]),!0),G!==!1&&(l().validPositions[G.pos||c].generatedInput=!0)))}e=e===!0;var E=c;void 0!==c.begin&&(E=W&&!i(c)?c.end:c.begin);var G=!1,H=a.extend(!0,{},l().validPositions);if(C(E),i(c)&&(M(void 0,b.keyCode.DELETE,c),E=l().p),E<l().maskLength&&(G=j(E,d,e),(!e||g===!0)&&G===!1)){var I=l().validPositions[E];if(!I||null!==I.match.fn||I.match.def!==d&&d!==f.skipOptionalPartCharacter){if((f.insertMode||void 0===l().validPositions[B(E)])&&!A(E,!0)){var J=t(E).slice();""===J[J.length-1].match.def&&J.pop();var K=p(J,!0);K&&null===K.match.fn&&(K=K.match.placeholder||K.match.def,j(E,K,e),l().validPositions[E].generatedInput=!0);for(var L=E+1,N=B(E);L<=N;L++)if(G=j(L,d,e),G!==!1){r(E,void 0!==G.pos?G.pos:L),E=L;break}}}else G={caret:B(E)}}return G===!1&&f.keepStatic&&!e&&h!==!0&&(G=k(E,d,e)),G===!0&&(G={pos:E}),a.isFunction(f.postValidation)&&G!==!1&&!e&&g!==!0&&(G=!!f.postValidation(v(!0),G,f)&&G),void 0===G.pos&&(G.pos=E),G===!1&&(m(!0),l().validPositions=a.extend(!0,{},H)),G}function A(a,b){var c;if(b?(c=q(a).match,""===c.def&&(c=r(a).match)):c=r(a).match,null!=c.fn)return c.fn;if(b!==!0&&a>-1){var d=t(a);return d.length>1+(""===d[d.length-1].match.def?1:0)}return!1}function B(a,b){var c=l().maskLength;if(a>=c)return c;for(var d=a;++d<c&&(b===!0&&(r(d).match.newBlockMarker!==!0||!A(d))||b!==!0&&!A(d)););return d}function C(a,b){var c,d=a;if(d<=0)return 0;for(;--d>0&&(b===!0&&r(d).match.newBlockMarker!==!0||b!==!0&&!A(d)&&(c=t(d),c.length<2||2===c.length&&""===c[1].match.def)););return d}function D(a){return void 0===l().validPositions[a]?F(a):l().validPositions[a].input}function E(b,c,d,e,g){if(e&&a.isFunction(f.onBeforeWrite)){var h=f.onBeforeWrite(e,c,d,f);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;w(i===!0?i:i.start,i.end,h.buffer||c),c=v(!0)}void 0!==d&&(d=void 0!==h.caret?h.caret:d)}}b.inputmask._valueSet(c.join("")),void 0===d||void 0!==e&&"blur"===e.type?O(b,c,d):I(b,d),g===!0&&(Y=!0,a(b).trigger("input"))}function F(a,b){if(b=b||r(a).match,void 0!==b.placeholder)return b.placeholder;if(null===b.fn){if(a>-1&&void 0===l().validPositions[a]){var c,d=t(a),e=[];if(d.length>1+(""===d[d.length-1].match.def?1:0))for(var g=0;g<d.length;g++)if(d[g].match.optionality!==!0&&d[g].match.optionalQuantifier!==!0&&(null===d[g].match.fn||void 0===c||d[g].match.fn.test(c.match.def,l(),a,!0,f)!==!1)&&(e.push(d[g]),null===d[g].match.fn&&(c=d[g]),e.length>1&&/[0-9a-bA-Z]/.test(e[0].match.def)))return f.placeholder.charAt(a%f.placeholder.length)}return b.def}return f.placeholder.charAt(a%f.placeholder.length)}function G(c,d,e,g,h,i){function j(){var a=!1,b=u().slice(p,B(p)).join("").indexOf(o);if(b!==-1&&!A(p)){a=!0;for(var c=u().slice(p,p+b),d=0;d<c.length;d++)if(" "!==c[d]){a=!1;break}}return a}var k=g.slice(),o="",p=0,r=void 0;if(m(),l().p=B(-1),!e)if(f.autoUnmask!==!0){var s=u().slice(0,B(-1)).join(""),t=k.join("").match(new RegExp("^"+b.escapeRegex(s),"g"));t&&t.length>0&&(k.splice(0,t.length*s.length),p=B(p))}else p=B(p);if(a.each(k,function(b,d){if(void 0!==d){var g=new a.Event("keypress");g.which=d.charCodeAt(0),o+=d;var h=n(void 0,!0),i=l().validPositions[h],k=q(h+1,i?i.locator.slice():void 0,h);if(!j()||e||f.autoUnmask){var s=e?b:null==k.match.fn&&k.match.optionality&&h+1<l().p?h+1:l().p;r=aa.keypressEvent.call(c,g,!0,!1,e,s),p=s+1,o=""}else r=aa.keypressEvent.call(c,g,!0,!1,!0,h+1);if(!e&&a.isFunction(f.onBeforeWrite)&&(r=f.onBeforeWrite(g,v(),r.forwardPosition,f),r&&r.refreshFromBuffer)){var t=r.refreshFromBuffer;w(t===!0?t:t.start,t.end,r.buffer),m(!0),r.caret&&(l().p=r.caret)}}}),d){var x=void 0,y=n();document.activeElement===c&&(h||r)&&(x=I(c).begin,h&&r===!1&&(x=B(n(x))),r&&i!==!0&&(x<y+1||y===-1)&&(x=f.numericInput&&void 0===r.caret?C(r.forwardPosition):r.forwardPosition)),E(c,v(),x,h||new a.Event("checkval"))}}function H(b){if(b&&void 0===b.inputmask)return b.value;var c=[],d=l().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var g=0===c.length?"":(W?c.reverse():c).join("");if(a.isFunction(f.onUnMask)){var h=(W?v().slice().reverse():v()).join("");g=f.onUnMask(h,g,f)||g}return g}function I(a,b,c,d){function e(a){if(d!==!0&&W&&"number"==typeof a&&(!f.greedy||""!==f.placeholder)){var b=v().join("").length;a=b-a}return a}var h;if("number"!=typeof b)return a.setSelectionRange?(b=a.selectionStart,c=a.selectionEnd):window.getSelection?(h=window.getSelection().getRangeAt(0),h.commonAncestorContainer.parentNode!==a&&h.commonAncestorContainer!==a||(b=h.startOffset,c=h.endOffset)):document.selection&&document.selection.createRange&&(h=document.selection.createRange(),b=0-h.duplicate().moveStart("character",-a.inputmask._valueGet().length),c=b+h.text.length),{begin:e(b),end:e(c)};b=e(b),c=e(c),c="number"==typeof c?c:b;var i=parseInt(((a.ownerDocument.defaultView||window).getComputedStyle?(a.ownerDocument.defaultView||window).getComputedStyle(a,null):a.currentStyle).fontSize)*c;if(a.scrollLeft=i>a.scrollWidth?i:0,g||f.insertMode!==!1||b!==c||c++,a.setSelectionRange)a.selectionStart=b,a.selectionEnd=c;else if(window.getSelection){if(h=document.createRange(),void 0===a.firstChild||null===a.firstChild){var j=document.createTextNode("");a.appendChild(j)}h.setStart(a.firstChild,b<a.inputmask._valueGet().length?b:a.inputmask._valueGet().length),h.setEnd(a.firstChild,c<a.inputmask._valueGet().length?c:a.inputmask._valueGet().length),h.collapse(!0);var k=window.getSelection();k.removeAllRanges(),k.addRange(h)}else a.createTextRange&&(h=a.createTextRange(),h.collapse(!0),h.moveEnd("character",c),h.moveStart("character",b),h.select());O(a,void 0,{begin:b,end:c})}function J(b){var c,d,e=v(),f=e.length,g=n(),h={},i=l().validPositions[g],j=void 0!==i?i.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=q(c,j,c-1),j=d.locator.slice(),h[c]=a.extend(!0,{},d);var k=i&&void 0!==i.alternation?i.locator[i.alternation]:void 0;for(c=f-1;c>g&&(d=h[c],(d.match.optionality||d.match.optionalQuantifier||k&&(k!==h[c].locator[i.alternation]&&null!=d.match.fn||null===d.match.fn&&d.locator[i.alternation]&&y(d.locator[i.alternation].toString().split(","),k.toString().split(","))&&""!==t(c)[0].def))&&e[c]===F(c,d.match));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function K(a){for(var b=J(),c=a.length-1;c>b&&!A(c);c--);return a.splice(b,c+1-b),a}function L(b){if(a.isFunction(f.isComplete))return f.isComplete(b,f);if("*"!==f.repeat){var c=!1,d=J(!0),e=C(d.l);if(void 0===d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){c=!0;for(var g=0;g<=e;g++){var h=q(g).match;if(null!==h.fn&&void 0===l().validPositions[g]&&h.optionality!==!0&&h.optionalQuantifier!==!0||null===h.fn&&b[g]!==F(g,h)){c=!1;break}}}return c}}function M(c,d,e,g){function h(){if(f.keepStatic){for(var b=[],d=n(-1,!0),e=a.extend(!0,{},l().validPositions),g=l().validPositions[d];d>=0;d--){var h=l().validPositions[d];if(h){if(h.generatedInput!==!0&&/[0-9a-bA-Z]/.test(h.input)&&b.push(h.input),delete l().validPositions[d],void 0!==h.alternation&&h.locator[h.alternation]!==g.locator[h.alternation])break;g=h}}if(d>-1)for(l().p=B(n(-1,!0));b.length>0;){var i=new a.Event("keypress");i.which=b.pop().charCodeAt(0),aa.keypressEvent.call(c,i,!0,!1,!1,l().p)}else l().validPositions=a.extend(!0,{},e)}}if((f.numericInput||W)&&(d===b.keyCode.BACKSPACE?d=b.keyCode.DELETE:d===b.keyCode.DELETE&&(d=b.keyCode.BACKSPACE),W)){var i=e.end;e.end=e.begin,e.begin=i}d===b.keyCode.BACKSPACE&&(e.end-e.begin<1||f.insertMode===!1)?(e.begin=C(e.begin),void 0===l().validPositions[e.begin]||l().validPositions[e.begin].input!==f.groupSeparator&&l().validPositions[e.begin].input!==f.radixPoint||e.begin--):d===b.keyCode.DELETE&&e.begin===e.end&&(e.end=A(e.end,!0)?e.end+1:B(e.end)+1,void 0===l().validPositions[e.begin]||l().validPositions[e.begin].input!==f.groupSeparator&&l().validPositions[e.begin].input!==f.radixPoint||e.end++),o(e.begin,e.end,!1,g),g!==!0&&h();var j=n(e.begin,!0);j<e.begin?l().p=B(j):g!==!0&&(l().p=e.begin)}function N(b){function c(a){var c,d=document.createElement("span");for(var e in g)isNaN(e)&&e.indexOf("font")!==-1&&(d.style[e]=g[e]);d.style.textTransform=g.textTransform,d.style.letterSpacing=g.letterSpacing,d.style.position="absolute",d.style.height="auto",d.style.width="auto",d.style.visibility="hidden",d.style.whiteSpace="nowrap",document.body.appendChild(d);var f,h=b.inputmask._valueGet(),i=0;for(c=0,f=h.length;c<=f;c++){if(d.innerHTML+=h.charAt(c)||"_",d.offsetWidth>=a){var j=a-i,k=d.offsetWidth-a;d.innerHTML=h.charAt(c),j-=d.offsetWidth/3,c=j<k?c-1:c;break}i=d.offsetWidth}return document.body.removeChild(d),c}function d(){T.style.position="absolute",T.style.top=e.top+"px",T.style.left=e.left+"px",T.style.width=parseInt(b.offsetWidth)-parseInt(g.paddingLeft)-parseInt(g.paddingRight)-parseInt(g.borderLeftWidth)-parseInt(g.borderRightWidth)+"px",T.style.height=parseInt(b.offsetHeight)-parseInt(g.paddingTop)-parseInt(g.paddingBottom)-parseInt(g.borderTopWidth)-parseInt(g.borderBottomWidth)+"px",T.style.lineHeight=T.style.height,T.style.zIndex=isNaN(g.zIndex)?-1:g.zIndex-1,T.style.webkitAppearance="textfield",T.style.mozAppearance="textfield",T.style.Appearance="textfield"}var e=a(b).position(),g=(b.ownerDocument.defaultView||window).getComputedStyle(b,null);b.parentNode;T=document.createElement("div"),document.body.appendChild(T);for(var h in g)isNaN(h)&&"cssText"!==h&&h.indexOf("webkit")==-1&&(T.style[h]=g[h]);b.style.backgroundColor="transparent",b.style.color="transparent",b.style.webkitAppearance="caret",b.style.mozAppearance="caret",b.style.Appearance="caret",d(),a(window).on("resize",function(c){e=a(b).position(),g=(b.ownerDocument.defaultView||window).getComputedStyle(b,null),d()}),a(b).on("click",function(a){return I(b,c(a.clientX)),aa.clickEvent.call(this,[a])}),a(b).on("keydown",function(a){a.shiftKey||f.insertMode===!1||setTimeout(function(){O(b)},0)})}function O(a,b,c){function d(){g||null!==i.fn&&void 0!==j.input?g&&null!==i.fn&&void 0!==j.input&&(g=!1,e+="</span>"):(g=!0,e+="<span class='im-static''>")}if(void 0!==T){b=b||v(),void 0===c?c=I(a):void 0===c.begin&&(c={begin:c,end:c});var e="",g=!1;if(""!=b){var h,i,j,k=0,m=n();do k===c.begin&&document.activeElement===a&&(e+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),l().validPositions[k]?(j=l().validPositions[k],i=j.match,h=j.locator.slice(),d(),e+=j.input):(j=q(k,h,k-1),i=j.match,h=j.locator.slice(),(f.jitMasking===!1||k<m||"number"==typeof f.jitMasking&&isFinite(f.jitMasking)&&f.jitMasking>k)&&(d(),e+=F(k,i))),k++;while((void 0===S||k<S)&&(null!==i.fn||""!==i.def)||m>k)}T.innerHTML=e}}function P(b){function c(b,c){function d(b){function d(b){if(a.valHooks&&(void 0===a.valHooks[b]||a.valHooks[b].inputmaskpatch!==!0)){var d=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},e=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var b=d(a);return n(void 0,void 0,a.inputmask.maskset.validPositions)!==-1||c.nullable!==!0?b:""}return d(a)},set:function(b,c){var d,f=a(b);return d=e(b,c),b.inputmask&&f.trigger("setvalue"),d},inputmaskpatch:!0}}}function e(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():n()!==-1||c.nullable!==!0?document.activeElement===this&&c.clearMaskOnLostFocus?(W?K(v().slice()).reverse():K(v().slice())).join(""):h.call(this):"":h.call(this)}function f(b){i.call(this,b),this.inputmask&&a(this).trigger("setvalue")}function g(b){_.on(b,"mouseenter",function(b){var c=a(this),d=this,e=d.inputmask._valueGet();e!==v().join("")&&c.trigger("setvalue")})}var h,i;if(!b.inputmask.__valueGet){if(c.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(a){return a.__proto__}:function(a){return a.constructor.prototype});var j=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),"value"):void 0;j&&j.get&&j.set?(h=j.get,i=j.set,Object.defineProperty(b,"value",{get:e,set:f,configurable:!0})):"INPUT"!==b.tagName&&(h=function(){return this.textContent},i=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:e,set:f,configurable:!0}))}else document.__lookupGetter__&&b.__lookupGetter__("value")&&(h=b.__lookupGetter__("value"),i=b.__lookupSetter__("value"),b.__defineGetter__("value",e),b.__defineSetter__("value",f));b.inputmask.__valueGet=h,b.inputmask.__valueSet=i}b.inputmask._valueGet=function(a){return W&&a!==!0?h.call(this.el).split("").reverse().join(""):h.call(this.el)},b.inputmask._valueSet=function(a,b){i.call(this.el,null===a||void 0===a?"":b!==!0&&W?a.split("").reverse().join(""):a)},void 0===h&&(h=function(){return this.value},i=function(a){this.value=a},d(b.type),g(b))}}var e=b.getAttribute("type"),f="INPUT"===b.tagName&&a.inArray(e,c.supportsInputType)!==-1||b.isContentEditable||"TEXTAREA"===b.tagName;if(!f)if("INPUT"===b.tagName){var g=document.createElement("input");g.setAttribute("type",e),f="text"===g.type,g=null}else f="partial";return f!==!1&&d(b),f}var d=c(b,f);if(d!==!1&&(V=b,R=a(V),("rtl"===V.dir||f.rightAlign)&&(V.style.textAlign="right"),("rtl"===V.dir||f.numericInput)&&(V.dir="ltr",V.removeAttribute("dir"),V.inputmask.isRTL=!0,W=!0),f.colorMask===!0&&N(V),j&&(V.hasOwnProperty("inputmode")&&(V.inputmode=f.inputmode,V.setAttribute("inputmode",f.inputmode)),"rtfm"===f.androidHack&&(f.colorMask!==!0&&N(V),V.type="password")),_.off(V),d===!0&&(_.on(V,"submit",aa.submitEvent),_.on(V,"reset",aa.resetEvent),_.on(V,"mouseenter",aa.mouseenterEvent),_.on(V,"blur",aa.blurEvent),_.on(V,"focus",aa.focusEvent),_.on(V,"mouseleave",aa.mouseleaveEvent),f.colorMask!==!0&&_.on(V,"click",aa.clickEvent),_.on(V,"dblclick",aa.dblclickEvent),_.on(V,"paste",aa.pasteEvent),_.on(V,"dragdrop",aa.pasteEvent),_.on(V,"drop",aa.pasteEvent),_.on(V,"cut",aa.cutEvent),_.on(V,"complete",f.oncomplete),_.on(V,"incomplete",f.onincomplete),_.on(V,"cleared",f.oncleared),f.inputEventOnly!==!0&&(_.on(V,"keydown",aa.keydownEvent),_.on(V,"keypress",aa.keypressEvent)),_.on(V,"compositionstart",a.noop),_.on(V,"compositionupdate",a.noop),_.on(V,"compositionend",a.noop),_.on(V,"keyup",a.noop),_.on(V,"input",aa.inputFallBackEvent)),_.on(V,"setvalue",aa.setValueEvent),u(),""!==V.inputmask._valueGet()||f.clearMaskOnLostFocus===!1||document.activeElement===V)){var e=a.isFunction(f.onBeforeMask)?f.onBeforeMask(V.inputmask._valueGet(),f)||V.inputmask._valueGet():V.inputmask._valueGet();G(V,!0,!1,e.split(""));var g=v().slice();Q=g.join(""),L(g)===!1&&f.clearIncomplete&&m(),f.clearMaskOnLostFocus&&document.activeElement!==V&&(n()===-1?g=[]:K(g)),E(V,g),document.activeElement===V&&I(V,B(n()))}}d=d||this.maskset,f=f||this.opts;var Q,R,S,T,U,V=this.el,W=this.isRTL,X=!1,Y=!1,Z=!1,$=!1,_={on:function(c,d,e){var g=function(c){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var d=a.data(this,"_inputmask_opts");d?new b(d).mask(this):_.off(this)}else{if("setvalue"===c.type||!(this.disabled||this.readOnly&&!("keydown"===c.type&&c.ctrlKey&&67===c.keyCode||f.tabThrough===!1&&c.keyCode===b.keyCode.TAB))){switch(c.type){case"input":if(Y===!0)return Y=!1,c.preventDefault();break;case"keydown":X=!1,Y=!1;break;case"keypress":if(X===!0)return c.preventDefault();X=!0;break;case"click":if(h||i){var g=this,j=arguments;return setTimeout(function(){e.apply(g,j)},0),!1}}var k=e.apply(this,arguments);return k===!1&&(c.preventDefault(),c.stopPropagation()),k}c.preventDefault()}};c.inputmask.events[d]=c.inputmask.events[d]||[],c.inputmask.events[d].push(g),a.inArray(d,["submit","reset"])!==-1?null!=c.form&&a(c.form).on(d,g):a(c).on(d,g)},off:function(b,c){if(b.inputmask&&b.inputmask.events){var d;c?(d=[],d[c]=b.inputmask.events[c]):d=b.inputmask.events,a.each(d,function(c,d){for(;d.length>0;){var e=d.pop();a.inArray(c,["submit","reset"])!==-1?null!=b.form&&a(b.form).off(c,e):a(b).off(c,e)}delete b.inputmask.events[c]})}}},aa={keydownEvent:function(c){function d(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}var e=this,g=a(e),h=c.keyCode,j=I(e);if(h===b.keyCode.BACKSPACE||h===b.keyCode.DELETE||i&&h===b.keyCode.BACKSPACE_SAFARI||c.ctrlKey&&h===b.keyCode.X&&!d("cut"))c.preventDefault(),M(e,h,j),E(e,v(!0),l().p,c,e.inputmask._valueGet()!==v().join("")),e.inputmask._valueGet()===u().join("")?g.trigger("cleared"):L(v())===!0&&g.trigger("complete");else if(h===b.keyCode.END||h===b.keyCode.PAGE_DOWN){c.preventDefault();var k=B(n());f.insertMode||k!==l().maskLength||c.shiftKey||k--,I(e,c.shiftKey?j.begin:k,k,!0)}else h===b.keyCode.HOME&&!c.shiftKey||h===b.keyCode.PAGE_UP?(c.preventDefault(),I(e,0,c.shiftKey?j.begin:0,!0)):(f.undoOnEscape&&h===b.keyCode.ESCAPE||90===h&&c.ctrlKey)&&c.altKey!==!0?(G(e,!0,!1,Q.split("")),g.trigger("click")):h!==b.keyCode.INSERT||c.shiftKey||c.ctrlKey?f.tabThrough===!0&&h===b.keyCode.TAB?(c.shiftKey===!0?(null===r(j.begin).match.fn&&(j.begin=B(j.begin)),j.end=C(j.begin,!0),j.begin=C(j.end,!0)):(j.begin=B(j.begin,!0),j.end=B(j.begin,!0),j.end<l().maskLength&&j.end--),j.begin<l().maskLength&&(c.preventDefault(),I(e,j.begin,j.end))):c.shiftKey||f.insertMode===!1&&(h===b.keyCode.RIGHT?setTimeout(function(){var a=I(e);I(e,a.begin)},0):h===b.keyCode.LEFT&&setTimeout(function(){var a=I(e);I(e,W?a.begin+1:a.begin-1)},0)):(f.insertMode=!f.insertMode,I(e,f.insertMode||j.begin!==l().maskLength?j.begin:j.begin-1));f.onKeyDown.call(this,c,v(),I(e).begin,f),Z=a.inArray(h,f.ignorables)!==-1},keypressEvent:function(c,d,e,g,h){var i=this,j=a(i),k=c.which||c.charCode||c.keyCode;if(!(d===!0||c.ctrlKey&&c.altKey)&&(c.ctrlKey||c.metaKey||Z))return k===b.keyCode.ENTER&&Q!==v().join("")&&(Q=v().join(""),
setTimeout(function(){j.trigger("change")},0)),!0;if(k){46===k&&c.shiftKey===!1&&","===f.radixPoint&&(k=44);var n,o=d?{begin:h,end:h}:I(i),p=String.fromCharCode(k);l().writeOutBuffer=!0;var q=z(o,p,g);if(q!==!1&&(m(!0),n=void 0!==q.caret?q.caret:d?q.pos+1:B(q.pos),l().p=n),e!==!1){var r=this;if(setTimeout(function(){f.onKeyValidation.call(r,k,q,f)},0),l().writeOutBuffer&&q!==!1){var s=v();E(i,s,f.numericInput&&void 0===q.caret?C(n):n,c,d!==!0),d!==!0&&setTimeout(function(){L(s)===!0&&j.trigger("complete")},0)}}if(c.preventDefault(),d)return q.forwardPosition=n,q}},pasteEvent:function(b){var c,d=this,e=b.originalEvent||b,g=a(d),h=d.inputmask._valueGet(!0),i=I(d);W&&(c=i.end,i.end=i.begin,i.begin=c);var j=h.substr(0,i.begin),k=h.substr(i.end,h.length);if(j===(W?u().reverse():u()).slice(0,i.begin).join("")&&(j=""),k===(W?u().reverse():u()).slice(i.end).join("")&&(k=""),W&&(c=j,j=k,k=c),window.clipboardData&&window.clipboardData.getData)h=j+window.clipboardData.getData("Text")+k;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;h=j+e.clipboardData.getData("text/plain")+k}var l=h;if(a.isFunction(f.onBeforePaste)){if(l=f.onBeforePaste(h,f),l===!1)return b.preventDefault();l||(l=h)}return G(d,!1,!1,W?l.split("").reverse():l.toString().split("")),E(d,v(),B(n()),b,Q!==v().join("")),L(v())===!0&&g.trigger("complete"),b.preventDefault()},inputFallBackEvent:function(c){var d=this,e=d.inputmask._valueGet();if(v().join("")!==e){var f=I(d);if(e=e.replace(new RegExp("("+b.escapeRegex(u().join(""))+")*"),""),h){var g=e.replace(v().join(""),"");if(1===g.length){var i=new a.Event("keypress");return i.which=g.charCodeAt(0),aa.keypressEvent.call(d,i,!0,!0,!1,l().validPositions[f.begin-1]?f.begin:f.begin-1),!1}}if(f.begin>e.length&&(I(d,e.length),f=I(d)),v().length-e.length!==1||e.charAt(f.begin)===v()[f.begin]||e.charAt(f.begin+1)===v()[f.begin]||A(f.begin)){for(var j=n()+1,k=u().join("");null===e.match(b.escapeRegex(k)+"$");)k=k.slice(1);e=e.replace(k,""),e=e.split(""),G(d,!0,!1,e,c,f.begin<j),L(v())===!0&&a(d).trigger("complete")}else c.keyCode=b.keyCode.BACKSPACE,aa.keydownEvent.call(d,c);c.preventDefault()}},setValueEvent:function(b){var c=this,d=c.inputmask._valueGet();G(c,!0,!1,(a.isFunction(f.onBeforeMask)?f.onBeforeMask(d,f)||d:d).split("")),Q=v().join(""),(f.clearMaskOnLostFocus||f.clearIncomplete)&&c.inputmask._valueGet()===u().join("")&&c.inputmask._valueSet("")},focusEvent:function(a){var b=this,c=b.inputmask._valueGet();f.showMaskOnFocus&&(!f.showMaskOnHover||f.showMaskOnHover&&""===c)&&(b.inputmask._valueGet()!==v().join("")?E(b,v(),B(n())):$===!1&&I(b,B(n()))),f.positionCaretOnTab===!0&&aa.clickEvent.apply(b,[a,!0]),Q=v().join("")},mouseleaveEvent:function(a){var b=this;if($=!1,f.clearMaskOnLostFocus&&document.activeElement!==b){var c=v().slice(),d=b.inputmask._valueGet();d!==b.getAttribute("placeholder")&&""!==d&&(n()===-1&&d===u().join("")?c=[]:K(c),E(b,c))}},clickEvent:function(b,c){function d(b){if(""!==f.radixPoint){var c=l().validPositions;if(void 0===c[b]||c[b].input===F(b)){if(b<B(-1))return!0;var d=a.inArray(f.radixPoint,v());if(d!==-1){for(var e in c)if(d<e&&c[e].input!==F(e))return!1;return!0}}}return!1}var e=this;setTimeout(function(){if(document.activeElement===e){var b=I(e);if(c&&(b.begin=b.end),b.begin===b.end)switch(f.positionCaretOnClick){case"none":break;case"radixFocus":if(d(b.begin)){var g=a.inArray(f.radixPoint,v().join(""));I(e,f.numericInput?B(g):g);break}default:var h=b.begin,i=n(h,!0),j=B(i);if(h<j)I(e,A(h)||A(h-1)?h:B(h));else{var k=F(j);(""!==k&&v()[j]!==k&&r(j).match.optionalQuantifier!==!0||!A(j)&&r(j).match.def===k)&&(j=B(j)),I(e,j)}}}},0)},dblclickEvent:function(a){var b=this;setTimeout(function(){I(b,0,B(n()))},0)},cutEvent:function(c){var d=this,e=a(d),f=I(d),g=c.originalEvent||c,h=window.clipboardData||g.clipboardData,i=W?v().slice(f.end,f.begin):v().slice(f.begin,f.end);h.setData("text",W?i.reverse().join(""):i.join("")),document.execCommand&&document.execCommand("copy"),M(d,b.keyCode.DELETE,f),E(d,v(),l().p,c,Q!==v().join("")),d.inputmask._valueGet()===u().join("")&&e.trigger("cleared")},blurEvent:function(b){var c=a(this),d=this;if(d.inputmask){var e=d.inputmask._valueGet(),g=v().slice();Q!==g.join("")&&setTimeout(function(){c.trigger("change"),Q=g.join("")},0),""!==e&&(f.clearMaskOnLostFocus&&(n()===-1&&e===u().join("")?g=[]:K(g)),L(g)===!1&&(setTimeout(function(){c.trigger("incomplete")},0),f.clearIncomplete&&(m(),g=f.clearMaskOnLostFocus?[]:u().slice())),E(d,g,void 0,b))}},mouseenterEvent:function(a){var b=this;$=!0,document.activeElement!==b&&f.showMaskOnHover&&b.inputmask._valueGet()!==v().join("")&&E(b,v())},submitEvent:function(a){Q!==v().join("")&&R.trigger("change"),f.clearMaskOnLostFocus&&n()===-1&&V.inputmask._valueGet&&V.inputmask._valueGet()===u().join("")&&V.inputmask._valueSet(""),f.removeMaskOnSubmit&&(V.inputmask._valueSet(V.inputmask.unmaskedvalue(),!0),setTimeout(function(){E(V,v())},0))},resetEvent:function(a){setTimeout(function(){R.trigger("setvalue")},0)}};if(void 0!==c)switch(c.action){case"isComplete":return V=c.el,L(v());case"unmaskedvalue":return void 0!==V&&void 0===c.value||(U=c.value,U=(a.isFunction(f.onBeforeMask)?f.onBeforeMask(U,f)||U:U).split(""),G(void 0,!1,!1,W?U.reverse():U),a.isFunction(f.onBeforeWrite)&&f.onBeforeWrite(void 0,v(),0,f)),H(V);case"mask":P(V);break;case"format":return U=(a.isFunction(f.onBeforeMask)?f.onBeforeMask(c.value,f)||c.value:c.value).split(""),G(void 0,!1,!1,W?U.reverse():U),a.isFunction(f.onBeforeWrite)&&f.onBeforeWrite(void 0,v(),0,f),c.metadata?{value:W?v().slice().reverse().join(""):v().join(""),metadata:e.call(this,{action:"getmetadata"},d,f)}:W?v().slice().reverse().join(""):v().join("");case"isValid":c.value?(U=c.value.split(""),G(void 0,!1,!0,W?U.reverse():U)):c.value=v().join("");for(var ba=v(),ca=J(),da=ba.length-1;da>ca&&!A(da);da--);return ba.splice(ca,da+1-ca),L(ba)&&c.value===v().join("");case"getemptymask":return u().join("");case"remove":if(V){R=a(V),V.inputmask._valueSet(H(V)),_.off(V);var ea;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(ea=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(V),"value"),ea&&V.inputmask.__valueGet&&Object.defineProperty(V,"value",{get:V.inputmask.__valueGet,set:V.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&V.__lookupGetter__("value")&&V.inputmask.__valueGet&&(V.__defineGetter__("value",V.inputmask.__valueGet),V.__defineSetter__("value",V.inputmask.__valueSet)),V.inputmask=void 0}return V;case"getmetadata":if(a.isArray(d.metadata)){var fa=k(!0,0,!1).join("");return a.each(d.metadata,function(a,b){if(b.mask===fa)return fa=b,!1}),fa}return d.metadata}}var f=navigator.userAgent,g=/mobile/i.test(f),h=/iemobile/i.test(f),i=/iphone/i.test(f)&&!h,j=/android/i.test(f)&&!h;return b.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:a.noop,onBeforeMask:null,onBeforePaste:function(b,c){return a.isFunction(c.onBeforeMask)?c.onBeforeMask(b,c):b},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:void 0,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:a.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1},masksCache:{},mask:function(f){function g(b,d,e,f){function g(a,c){c=void 0!==c?c:b.getAttribute(f+"-"+a),null!==c&&("string"==typeof c&&(0===a.indexOf("on")?c=window[c]:"false"===c?c=!1:"true"===c&&(c=!0)),e[a]=c)}var h,i,j,k,l=b.getAttribute(f);if(l&&""!==l&&(l=l.replace(new RegExp("'","g"),'"'),i=JSON.parse("{"+l+"}")),i){j=void 0;for(k in i)if("alias"===k.toLowerCase()){j=i[k];break}}g("alias",j),e.alias&&c(e.alias,e,d);for(h in d){if(i){j=void 0;for(k in i)if(k.toLowerCase()===h.toLowerCase()){j=i[k];break}}g(h,j)}return a.extend(!0,d,e),d}var h=this;return"string"==typeof f&&(f=document.getElementById(f)||document.querySelectorAll(f)),f=f.nodeName?[f]:f,a.each(f,function(c,f){var i=a.extend(!0,{},h.opts);g(f,i,a.extend(!0,{},h.userOptions),h.dataAttribute);var j=d(i,h.noMasksCache);void 0!==j&&(void 0!==f.inputmask&&f.inputmask.remove(),f.inputmask=new b,f.inputmask.opts=i,f.inputmask.noMasksCache=h.noMasksCache,f.inputmask.userOptions=a.extend(!0,{},h.userOptions),f.inputmask.el=f,f.inputmask.maskset=j,a.data(f,"_inputmask_opts",i),e.call(f.inputmask,{action:"mask"}))}),f&&f[0]?f[0].inputmask||this:this},option:function(b,c){return"string"==typeof b?this.opts[b]:"object"==typeof b?(a.extend(this.userOptions,b),this.el&&c!==!0&&this.mask(this.el),this):void 0},unmaskedvalue:function(a){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"unmaskedvalue",value:a})},remove:function(){return e.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"getmetadata"})},isValid:function(a){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"isValid",value:a})},format:function(a,b){return this.maskset=this.maskset||d(this.opts,this.noMasksCache),e.call(this,{action:"format",value:a,metadata:b})},analyseMask:function(b,c){function d(a,b,c,d){this.matches=[],this.openGroup=a||!1,this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(b,d,e){var f=c.definitions[d];e=void 0!==e?e:b.matches.length;var g=b.matches[e-1];if(f&&!q){f.placeholder=a.isFunction(f.placeholder)?f.placeholder(c):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,m=k.cardinality;b.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:m?m:1,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,nativeDef:d}),g=b.matches[e-1]}b.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,nativeDef:d})}else b.matches.splice(e++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==d,casing:null,def:c.staticDefinitionSymbol||d,placeholder:void 0!==c.staticDefinitionSymbol?d:void 0,nativeDef:d}),q=!1}function f(b){b&&b.matches&&a.each(b.matches,function(a,d){var g=b.matches[a+1];(void 0===g||void 0===g.matches||g.isQuantifier===!1)&&d&&d.isGroup&&(d.isGroup=!1,e(d,c.groupmarker.start,0),d.openGroup!==!0&&e(d,c.groupmarker.end)),f(d)})}function g(){if(s.length>0){if(l=s[s.length-1],e(l,j),l.isAlternator){m=s.pop();for(var a=0;a<m.matches.length;a++)m.matches[a].isGroup=!1;s.length>0?(l=s[s.length-1],l.matches.push(m)):r.matches.push(m)}}else e(r,j)}function h(a){function b(a){return a===c.optionalmarker.start?a=c.optionalmarker.end:a===c.optionalmarker.end?a=c.optionalmarker.start:a===c.groupmarker.start?a=c.groupmarker.end:a===c.groupmarker.end&&(a=c.groupmarker.start),a}a.matches=a.matches.reverse();for(var d in a.matches){var e=parseInt(d);if(a.matches[d].isQuantifier&&a.matches[e+1]&&a.matches[e+1].isGroup){var f=a.matches[d];a.matches.splice(d,1),a.matches.splice(e+1,0,f)}void 0!==a.matches[d].matches?a.matches[d]=h(a.matches[d]):a.matches[d]=b(a.matches[d])}return a}for(var i,j,k,l,m,n,o,p=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,q=!1,r=new d,s=[],t=[];i=p.exec(b);)if(j=i[0],q)g();else switch(j.charAt(0)){case c.escapeChar:q=!0;break;case c.optionalmarker.end:case c.groupmarker.end:if(k=s.pop(),k.openGroup=!1,void 0!==k)if(s.length>0){if(l=s[s.length-1],l.matches.push(k),l.isAlternator){m=s.pop();for(var u=0;u<m.matches.length;u++)m.matches[u].isGroup=!1;s.length>0?(l=s[s.length-1],l.matches.push(m)):r.matches.push(m)}}else r.matches.push(k);else g();break;case c.optionalmarker.start:s.push(new d((!1),(!0)));break;case c.groupmarker.start:s.push(new d((!0)));break;case c.quantifiermarker.start:var v=new d((!1),(!1),(!0));j=j.replace(/[{}]/g,"");var w=j.split(","),x=isNaN(w[0])?w[0]:parseInt(w[0]),y=1===w.length?x:isNaN(w[1])?w[1]:parseInt(w[1]);if("*"!==y&&"+"!==y||(x="*"===y?0:1),v.quantifier={min:x,max:y},s.length>0){var z=s[s.length-1].matches;i=z.pop(),i.isGroup||(o=new d((!0)),o.matches.push(i),i=o),z.push(i),z.push(v)}else i=r.matches.pop(),i.isGroup||(o=new d((!0)),o.matches.push(i),i=o),r.matches.push(i),r.matches.push(v);break;case c.alternatormarker:s.length>0?(l=s[s.length-1],n=l.matches.pop()):n=r.matches.pop(),n.isAlternator?s.push(n):(m=new d((!1),(!1),(!1),(!0)),m.matches.push(n),s.push(m));break;default:g()}for(;s.length>0;)k=s.pop(),r.matches.push(k);return r.matches.length>0&&(f(r),t.push(r)),c.numericInput&&h(t[0]),t}},b.extendDefaults=function(c){a.extend(!0,b.prototype.defaults,c)},b.extendDefinitions=function(c){a.extend(!0,b.prototype.defaults.definitions,c)},b.extendAliases=function(c){a.extend(!0,b.prototype.defaults.aliases,c)},b.format=function(a,c,d){return b(c).format(a,d)},b.unmask=function(a,c){return b(c).unmaskedvalue(a)},b.isValid=function(a,c){return b(c).isValid(a)},b.remove=function(b){a.each(b,function(a,b){b.inputmask&&b.inputmask.remove()})},b.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},b.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},window.Inputmask=b,b}(jQuery),function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f=this[0];if(void 0===d&&(d={}),"string"==typeof c)switch(c){case"unmaskedvalue":return f&&f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f&&f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return!(!f||!f.inputmask)&&f.inputmask.hasMaskedValue();case"isComplete":return!f||!f.inputmask||f.inputmask.isComplete();case"getmetadata":return f&&f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":a(f).val(d),f&&void 0===f.inputmask&&a(f).triggerHandler("setvalue");break;case"option":if("string"!=typeof d)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(d)});if(f&&void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==typeof c)return e=new b(c),void 0===c.mask&&void 0===c.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(c):void e.mask(this)}):this.each(function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask}(jQuery,Inputmask),function(a,b){}(jQuery,Inputmask),function(a,b){function c(a){return isNaN(a)||29===new Date(a,2,0).getDate()}return b.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return!isNaN(d)&&(b<=d&&d<=c)||!isNaN(e)&&(b<=e&&e<=c)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(b<d){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);b<e+c;)e--;var g=e+f;return a>g?a:g}if(a<=d&&d<=b){for(var h=d.toString().slice(0,2);b<h+c;)h--;var i=h+c;return i<a?a:i}return d},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getDate().toString()+(h.getMonth()+1).toString()+h.getFullYear().toString()),g.trigger("setvalue")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!==a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},postValidation:function(a,b,d){var e,f,g=a.join("");return 0===d.mask.indexOf("y")?(f=g.substr(0,4),e=g.substr(4,11)):(f=g.substr(6,11),e=g.substr(0,6)),b&&(e!==d.leapday||c(f))},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!==e.separator&&"-./".indexOf(a.charAt(1))===-1||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1===f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);f.indexOf(e.placeholder[0])!==-1&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);return d||g||a.charAt(1)!==e.separator&&"-./".indexOf(a.charAt(1))===-1||!(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0)))?g:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);f.indexOf(e.placeholder[0])!==-1&&(f="01"+e.separator);var g=1===a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getFullYear().toString()+(h.getMonth()+1).toString()+h.getDate().toString()),g.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"===e.hourFormat&&24===parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)===e.timeseparator||"-.:".indexOf(a.charAt(1))!==-1)&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24===g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,g<10?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),b}(jQuery,Inputmask),function(a,b){return b.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),b.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!==b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!==b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}},onUnMask:function(a,b,c){return a},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(a,b,c){return a},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({numeric:{mask:function(a){function c(b){for(var c="",d=0;d<b.length;d++)c+=a.definitions[b.charAt(d)]||a.optionalmarker.start===b.charAt(d)||a.optionalmarker.end===b.charAt(d)||a.quantifiermarker.start===b.charAt(d)||a.quantifiermarker.end===b.charAt(d)||a.groupmarker.start===b.charAt(d)||a.groupmarker.end===b.charAt(d)||a.alternatormarker===b.charAt(d)?"\\"+b.charAt(d):b.charAt(d);return c}if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator===a.radixPoint&&("."===a.radixPoint?a.groupSeparator=",":","===a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=void 0),a.autoGroup=a.autoGroup&&""!==a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var d=Math.floor(a.integerDigits/a.groupSize),e=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0===e?d-1:d),a.integerDigits<1&&(a.integerDigits="*")}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),"radixFocus"===a.positionCaretOnClick&&""===a.placeholder&&a.integerOptional===!1&&(a.positionCaretOnClick="lvp"),a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~",a.numericInput===!0&&(a.positionCaretOnClick="radixFocus"===a.positionCaretOnClick?"lvp":a.positionCaretOnClick,a.digitsOptional=!1,isNaN(a.digits)&&(a.digits=2),a.decimalProtect=!1);var f="[+]";if(f+=c(a.prefix),f+=a.integerOptional===!0?"~{1,"+a.integerDigits+"}":"~{"+a.integerDigits+"}",void 0!==a.digits){a.decimalProtect&&(a.radixPointDefinitionSymbol=":");var g=a.digits.toString().split(",");isFinite(g[0]&&g[1]&&isFinite(g[1]))?f+=(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}":(isNaN(a.digits)||parseInt(a.digits)>0)&&(f+=a.digitsOptional?"["+(a.decimalProtect?":":a.radixPoint)+";{1,"+a.digits+"}]":(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}")}return f+=c(a.suffix),f+="[-]",a.greedy=!1,null!==a.min&&(a.min=a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.min=a.min.replace(a.radixPoint,"."))),null!==a.max&&(a.max=a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.max=a.max.replace(a.radixPoint,"."))),f},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",postFormat:function(c,d,e){e.numericInput===!0&&(c=c.reverse(),isFinite(d)&&(d=c.join("").length-d-1));var f,g;d=d>=c.length?c.length-1:d<0?0:d;var h=c[d],i=c.slice();h===e.groupSeparator&&(i.splice(d--,1),h=i[d]);var j=i.join("").match(new RegExp("^"+b.escapeRegex(e.negationSymbol.front)));j=null!==j&&1===j.length,d>(j?e.negationSymbol.front.length:0)+e.prefix.length&&d<i.length-e.suffix.length&&(i[d]="!");var k=i.join(""),l=i.join();if(j&&(k=k.replace(new RegExp("^"+b.escapeRegex(e.negationSymbol.front)),""),k=k.replace(new RegExp(b.escapeRegex(e.negationSymbol.back)+"$"),"")),k=k.replace(new RegExp(b.escapeRegex(e.suffix)+"$"),""),k=k.replace(new RegExp("^"+b.escapeRegex(e.prefix)),""),k.length>0&&e.autoGroup||k.indexOf(e.groupSeparator)!==-1){var m=b.escapeRegex(e.groupSeparator);k=k.replace(new RegExp(m,"g"),"");var n=k.split(h===e.radixPoint?"!":e.radixPoint);if(k=""===e.radixPoint?k:n[0],h!==e.negationSymbol.front&&(k=k.replace("!","?")),k.length>e.groupSize)for(var o=new RegExp("([-+]?[\\d?]+)([\\d?]{"+e.groupSize+"})");o.test(k)&&""!==e.groupSeparator;)k=k.replace(o,"$1"+e.groupSeparator+"$2"),k=k.replace(e.groupSeparator+e.groupSeparator,e.groupSeparator);k=k.replace("?","!"),""!==e.radixPoint&&n.length>1&&(k+=(h===e.radixPoint?"!":e.radixPoint)+n[1])}k=e.prefix+k+e.suffix,j&&(k=e.negationSymbol.front+k+e.negationSymbol.back);var p=l!==k.split("").join(),q=a.inArray("!",k);if(q===-1&&(q=d),p){for(c.length=k.length,f=0,g=k.length;f<g;f++)c[f]=k.charAt(f);c[q]=h}return q=e.numericInput&&isFinite(d)?c.join("").length-q-1:q,e.numericInput&&(c=c.reverse(),a.inArray(e.radixPoint,c)<q&&c.join("").length-e.suffix.length!==q&&(q-=1)),{pos:q,refreshFromBuffer:p,buffer:c,isNegative:j}},onBeforeWrite:function(c,d,e,f){var g;if(c&&("blur"===c.type||"checkval"===c.type||"keydown"===c.type)){var h=f.numericInput?d.slice().reverse().join(""):d.join(""),i=h.replace(f.prefix,"");i=i.replace(f.suffix,""),i=i.replace(new RegExp(b.escapeRegex(f.groupSeparator),"g"),""),","===f.radixPoint&&(i=i.replace(f.radixPoint,"."));
var j=i.match(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"));if(j=null!==j&&1===j.length,i=i.replace(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"),""),i=i.replace(new RegExp(b.escapeRegex(f.negationSymbol.back)+"$"),""),isNaN(f.placeholder)&&(i=i.replace(new RegExp(b.escapeRegex(f.placeholder),"g"),"")),i=i===f.negationSymbol.front?i+"0":i,""!==i&&isFinite(i)){var k=parseFloat(i),l=j?k*-1:k;if(null!==f.min&&isFinite(f.min)&&l<parseFloat(f.min)?(k=Math.abs(f.min),j=f.min<0,h=void 0):null!==f.max&&isFinite(f.max)&&l>parseFloat(f.max)&&(k=Math.abs(f.max),j=f.max<0,h=void 0),i=k.toString().replace(".",f.radixPoint).split(""),isFinite(f.digits)){var m=a.inArray(f.radixPoint,i),n=a.inArray(f.radixPoint,h);m===-1&&(i.push(f.radixPoint),m=i.length-1);for(var o=1;o<=f.digits;o++)f.digitsOptional||void 0!==i[m+o]&&i[m+o]!==f.placeholder.charAt(0)?n!==-1&&void 0!==h[n+o]&&(i[m+o]=i[m+o]||h[n+o]):i[m+o]="0";i[i.length-1]===f.radixPoint&&delete i[i.length-1]}if(k.toString()!==i&&k.toString()+"."!==i||j)return i=(f.prefix+i.join("")).split(""),!j||0===k&&"blur"===c.type||(i.unshift(f.negationSymbol.front),i.push(f.negationSymbol.back)),f.numericInput&&(i=i.reverse()),g=f.postFormat(i,f.numericInput?e:e-1,f),g.buffer&&(g.refreshFromBuffer=g.buffer.join("")!==d.join("")),g}}if(f.autoGroup)return g=f.postFormat(d,f.numericInput?e:e-1,f),g.caret=e<(g.isNegative?f.negationSymbol.front.length:0)+f.prefix.length||e>g.buffer.length-(g.isNegative?f.negationSymbol.back.length:0)?g.pos:g.pos+1,g},regex:{integerPart:function(a){return new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+b.escapeRegex(a.groupSeparator)+b.escapeRegex(a.placeholder.charAt(0))+"]+")}},signHandler:function(a,b,c,d,e){if(!d&&e.allowMinus&&"-"===a||e.allowPlus&&"+"===a){var f=b.buffer.join("").match(e.regex.integerPart(e));if(f&&f[0].length>0)return b.buffer[f.index]===("-"===a?"+":e.negationSymbol.front)?"-"===a?""!==e.negationSymbol.back?{pos:0,c:e.negationSymbol.front,remove:0,caret:c,insert:{pos:b.buffer.length-1,c:e.negationSymbol.back}}:{pos:0,c:e.negationSymbol.front,remove:0,caret:c}:""!==e.negationSymbol.back?{pos:0,c:"+",remove:[0,b.buffer.length-1],caret:c}:{pos:0,c:"+",remove:0,caret:c}:b.buffer[0]===("-"===a?e.negationSymbol.front:"+")?"-"===a&&""!==e.negationSymbol.back?{remove:[0,b.buffer.length-1],caret:c-1}:{remove:0,caret:c-1}:"-"===a?""!==e.negationSymbol.back?{pos:0,c:e.negationSymbol.front,caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:0,c:e.negationSymbol.front,caret:c+1}:{pos:0,c:a,caret:c+1}}return!1},radixHandler:function(b,c,d,e,f){if(!e&&f.numericInput!==!0&&b===f.radixPoint&&void 0!==f.digits&&(isNaN(f.digits)||parseInt(f.digits)>0)){var g=a.inArray(f.radixPoint,c.buffer),h=c.buffer.join("").match(f.regex.integerPart(f));if(g!==-1&&c.validPositions[g])return c.validPositions[g-1]?{caret:g+1}:{pos:h.index,c:h[0],caret:g+1};if(!h||"0"===h[0]&&h.index+1!==d)return c.buffer[h?h.index:d]="0",{pos:(h?h.index:d)+1,c:f.radixPoint}}return!1},leadingZeroHandler:function(b,c,d,e,f,g){if(!e){var h=c.buffer.slice("");if(h.splice(0,f.prefix.length),h.splice(h.length-f.suffix.length,f.suffix.length),f.numericInput===!0){var h=h.reverse(),i=h[0];if("0"===i&&void 0===c.validPositions[d-1])return{pos:d,remove:h.length-1}}else{d-=f.prefix.length;var j=a.inArray(f.radixPoint,h),k=h.slice(0,j!==-1?j:void 0).join("").match(f.regex.integerNPart(f));if(k&&(j===-1||d<=j)){var l=j===-1?0:parseInt(h.slice(j+1).join(""));if(0===k[0].indexOf(""!==f.placeholder?f.placeholder.charAt(0):"0")&&(k.index+1===d||g!==!0&&0===l))return c.buffer.splice(k.index+f.prefix.length,1),{pos:k.index+f.prefix.length,remove:k.index+f.prefix.length};if("0"===b&&d<=k.index&&k[0]!==f.groupSeparator)return!1}}}return!0},definitions:{"~":{validator:function(c,d,e,f,g,h){var i=g.signHandler(c,d,e,f,g);if(!i&&(i=g.radixHandler(c,d,e,f,g),!i&&(i=f?new RegExp("[0-9"+b.escapeRegex(g.groupSeparator)+"]").test(c):new RegExp("[0-9]").test(c),i===!0&&(i=g.leadingZeroHandler(c,d,e,f,g,h),i===!0)))){var j=a.inArray(g.radixPoint,d.buffer);i=j!==-1&&(g.digitsOptional===!1||d.validPositions[e])&&g.numericInput!==!0&&e>j&&!f?{pos:e,remove:e}:{pos:e}}return i},cardinality:1},"+":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&(d&&e.allowMinus&&a===e.negationSymbol.front||e.allowMinus&&"-"===a||e.allowPlus&&"+"===a)&&(f=!(!d&&"-"===a)||(""!==e.negationSymbol.back?{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1})),f},cardinality:1,placeholder:""},"-":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&d&&e.allowMinus&&a===e.negationSymbol.back&&(f=!0),f},cardinality:1,placeholder:""},":":{validator:function(a,c,d,e,f){var g=f.signHandler(a,c,d,e,f);if(!g){var h="["+b.escapeRegex(f.radixPoint)+"]";g=new RegExp(h).test(a),g&&c.validPositions[d]&&c.validPositions[d].match.placeholder===f.radixPoint&&(g={caret:d+1})}return g},cardinality:1,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,c,d){if(""===c&&d.nullable===!0)return c;var e=a.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),d.unmaskAsNumber?(""!==d.radixPoint&&e.indexOf(d.radixPoint)!==-1&&(e=e.replace(b.escapeRegex.call(this,d.radixPoint),".")),Number(e)):e},isComplete:function(a,c){var d=a.join(""),e=a.slice();if(c.postFormat(e,0,c),e.join("")!==d)return!1;var f=d.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(b.escapeRegex(c.radixPoint),".")),isFinite(f)},onBeforeMask:function(a,c){if(c.numericInput===!0&&(a=a.split("").reverse().join("")),""!==c.radixPoint&&isFinite(a)){var d=a.split("."),e=""!==c.groupSeparator?parseInt(c.groupSize):0;2===d.length&&(d[0].length>e||d[1].length>e)&&(a=a.toString().replace(".",c.radixPoint))}var f=a.match(/,/g),g=a.match(/\./g);if(g&&f?g.length>f.length?(a=a.replace(/\./g,""),a=a.replace(",",c.radixPoint)):f.length>g.length?(a=a.replace(/,/g,""),a=a.replace(".",c.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),0===c.digits&&(a.indexOf(".")!==-1?a=a.substring(0,a.indexOf(".")):a.indexOf(",")!==-1&&(a=a.substring(0,a.indexOf(",")))),""!==c.radixPoint&&isFinite(c.digits)&&a.indexOf(c.radixPoint)!==-1){var h=a.split(c.radixPoint),i=h[1].match(new RegExp("\\d*"))[0];if(parseInt(c.digits)<i.toString().length){var j=Math.pow(10,parseInt(c.digits));a=a.replace(b.escapeRegex(c.radixPoint),"."),a=Math.round(parseFloat(a)*j)/j,a=a.toString().replace(".",c.radixPoint)}}return c.numericInput===!0&&(a=a.split("").reverse().join("")),a.toString()},canClearPosition:function(a,b,c,d,e){var f=a.validPositions[b].input,g=f!==e.radixPoint||null!==a.validPositions[b].match.fn&&e.decimalProtect===!1||isFinite(f)||b===c||f===e.groupSeparator||f===e.negationSymbol.front||f===e.negationSymbol.back;return g},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey)switch(c.keyCode){case b.keyCode.UP:g.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),g.trigger("setvalue");break;case b.keyCode.DOWN:g.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),g.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),b}(jQuery,Inputmask),function(a,b){function c(a,b){var c=(a.mask||a).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),d=(b.mask||b).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),e=(a.mask||a).split("#")[0],f=(b.mask||b).split("#")[0];return 0===f.indexOf(e)?-1:0===e.indexOf(f)?1:c.localeCompare(d)}var d=b.prototype.analyseMask;return b.prototype.analyseMask=function(b,c){function e(a,c,d){c=c||"",d=d||g,""!==c&&(d[c]={});for(var f="",h=d[c]||d,i=a.length-1;i>=0;i--)b=a[i].mask||a[i],f=b.substr(0,1),h[f]=h[f]||[],h[f].unshift(b.substr(1)),a.splice(i,1);for(var j in h)h[j].length>500&&e(h[j].slice(),j,h)}function f(b){var d="",e=[];for(var g in b)a.isArray(b[g])?1===b[g].length?e.push(g+b[g]):e.push(g+c.groupmarker.start+b[g].join(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)+c.groupmarker.end):e.push(g+f(b[g]));return d+=1===e.length?e[0]:c.groupmarker.start+e.join(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)+c.groupmarker.end}var g={};c.phoneCodes&&c.phoneCodes.length>1e3&&(b=b.substr(1,b.length-2),e(b.split(c.groupmarker.end+c.alternatormarker+c.groupmarker.start)),b=f(g));var h=d.call(this,b,c);return h},b.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(a){return a.definitions={"#":a.definitions[9]},a.phoneCodes.sort(c)},keepStatic:!0,onBeforeMask:function(a,b){var c=a.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(b.countrycode)>1||c.indexOf(b.countrycode)===-1)&&(c="+"+b.countrycode+c),c},onUnMask:function(a,b,c){return b},inputmode:"tel"}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex).test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g((!0)));break;case")":k=d.pop(),d.length>0?d[d.length-1].matches.push(k):c.matches.push(k);break;case"{":case"+":case"*":var e=new g((!1),(!0));b=b.replace(/[{}]/g,"");var h=b.split(","),i=isNaN(h[0])?h[0]:parseInt(h[0]),j=1===h.length?i:isNaN(h[1])?h[1]:parseInt(h[1]);if(e.quantifier={min:i,max:j},d.length>0){var l=d[d.length-1].matches;a=l.pop(),a.isGroup||(k=new g((!0)),k.matches.push(a),a=k),l.push(a),l.push(e)}else a=c.matches.pop(),a.isGroup||(k=new g((!0)),k.matches.push(a),a=k),c.matches.push(a),c.matches.push(e);break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(m+="(",o++);for(var e=0;e<b.matches.length;e++){var f=b.matches[e];if(f.isGroup===!0)d=i(f,!0);else if(f.isQuantifier===!0){var g=a.inArray(f,b.matches),h=b.matches[g-1],k=m;if(isNaN(f.quantifier.max)){for(;f.repeaterPart&&f.repeaterPart!==m&&f.repeaterPart.length>m.length&&!(d=i(h,!0)););d=d||i(h,!0),d&&(f.repeaterPart=m),m=k+f.quantifier.max}else{for(var l=0,n=f.quantifier.max-1;l<n&&!(d=i(h,!0));l++);m=k+"{"+f.quantifier.min+","+f.quantifier.max+"}"}}else if(void 0!==f.matches)for(var p=0;p<f.length&&!(d=i(f[p],c));p++);else{var q;if("["==f.charAt(0)){q=m,q+=f;for(var r=0;r<o;r++)q+=")";var s=new RegExp("^("+q+")$");d=s.test(j)}else for(var t=0,u=f.length;t<u;t++)if("\\"!==f.charAt(t)){q=m,q+=f.substr(0,t+1),q=q.replace(/\|$/,"");for(var r=0;r<o;r++)q+=")";var s=new RegExp("^("+q+")$");if(d=s.test(j))break}m+=f}if(d)break}return c&&(m+=")",o--),d}var j,k,l=c.buffer.slice(),m="",n=!1,o=0;null===f.regexTokens&&h(),l.splice(d,0,b),j=l.join("");for(var p=0;p<f.regexTokens.length;p++){var q=f.regexTokens[p];if(n=i(q,q.isGroup))break}return n},cardinality:1}}}}),b}(jQuery,Inputmask);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:52:"/local/templates/new/js/formSubmit.js?16329045288090";s:6:"source";s:37:"/local/templates/new/js/formSubmit.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function() {
    $('[data-form-recaptcha]').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var action = $(form).find('input[name="action"]').val();
        if (typeof action === 'undefined') {
            action = 'call';
        }
        console.log(action);

        grecaptcha.ready(function() {
            grecaptcha.execute('6LdjfPMZAAAAAFRAbzdWJztFWg88sJ6SVutOnY1h', {action: action})
                .then(function(token) {
                    console.log(form);
                    console.log(action);
                    console.log(token);

                    if ($(form).find('[name="token"]').length > 0) {
                        $(form).find('[name="token"]').val(token);
                        $(form).find('[name="action"]').val(action);
                    } else {
                        $(form).prepend('<input type="hidden" name="token" value="' + token + '">');
                        $(form).prepend('<input type="hidden" name="action" value="' + action + '">');
                    }
                    // $(form).unbind('submit').submit(); 
                })
                .then(function() {
                    sendFormAjax(form);
                });
        });
    });
});

function getSuccessMag() {
    var d = new Date();
    var n = d.getDay();
    var h = d.getHours();
    var successMsg;
    if (d == 7) {
        successMsg = 'Р‘Р»Р°РіРѕРґР°СЂРёРј Р’Р°СЃ Р·Р° РѕР±СЂР°С‰РµРЅРёРµ! Р’ РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ СЂР°Р±РѕС‡РёР№ РґРµРЅСЊ Р·Р°РєРѕРЅС‡РµРЅ Рё РЅР°С€Рё РѕС„РёСЃС‹ РїСЂРѕРґР°Р¶ Р·Р°РєСЂС‹С‚С‹. РњС‹ СЃ СѓРґРѕРІРѕР»СЊСЃС‚РІРёРµРј РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј Рё РѕС‚РІРµС‚РёРј РЅР° Р’Р°С€ РІРѕРїСЂРѕСЃ РІ СЂР°Р±РѕС‡РµРµ РІСЂРµРјСЏ.';
    } else if (d == 6) {
        if (h > 8 || h < 16) {
            successMsg = 'Р”РѕСЂРѕРіРѕР№ РєР»РёРµРЅС‚! РЎРїР°СЃРёР±Рѕ Р·Р° РёРЅС‚РµСЂРµСЃ Рє РЅР°С€РёРј РїСЂРѕРµРєС‚Р°Рј. РњС‹ РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј РІ С‚РµС‡РµРЅРёРµ 24 С‡Р°СЃРѕРІ. Р“СЂСѓРїРїР° РєРѕРјРїР°РЅРёР№ "Р­РќРљРћ".';
        } else {
            successMsg = 'Р‘Р»Р°РіРѕРґР°СЂРёРј Р’Р°СЃ Р·Р° РѕР±СЂР°С‰РµРЅРёРµ! Р’ РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ СЂР°Р±РѕС‡РёР№ РґРµРЅСЊ Р·Р°РєРѕРЅС‡РµРЅ Рё РЅР°С€Рё РѕС„РёСЃС‹ РїСЂРѕРґР°Р¶ Р·Р°РєСЂС‹С‚С‹. РњС‹ СЃ СѓРґРѕРІРѕР»СЊСЃС‚РІРёРµРј РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј Рё РѕС‚РІРµС‚РёРј РЅР° Р’Р°С€ РІРѕРїСЂРѕСЃ РІ СЂР°Р±РѕС‡РµРµ РІСЂРµРјСЏ.';
        }
    } else {
        if (h > 8 || h < 20) {
            successMsg = 'Р”РѕСЂРѕРіРѕР№ РєР»РёРµРЅС‚! РЎРїР°СЃРёР±Рѕ Р·Р° РёРЅС‚РµСЂРµСЃ Рє РЅР°С€РёРј РїСЂРѕРµРєС‚Р°Рј. РњС‹ РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј РІ С‚РµС‡РµРЅРёРµ 24 С‡Р°СЃРѕРІ. Р“СЂСѓРїРїР° РєРѕРјРїР°РЅРёР№ "Р­РќРљРћ".';
        } else {
            successMsg = 'Р‘Р»Р°РіРѕРґР°СЂРёРј Р’Р°СЃ Р·Р° РѕР±СЂР°С‰РµРЅРёРµ! Р’ РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ СЂР°Р±РѕС‡РёР№ РґРµРЅСЊ Р·Р°РєРѕРЅС‡РµРЅ Рё РЅР°С€Рё РѕС„РёСЃС‹ РїСЂРѕРґР°Р¶ Р·Р°РєСЂС‹С‚С‹. РњС‹ СЃ СѓРґРѕРІРѕР»СЊСЃС‚РІРёРµРј РїРµСЂРµР·РІРѕРЅРёРј Р’Р°Рј Рё РѕС‚РІРµС‚РёРј РЅР° Р’Р°С€ РІРѕРїСЂРѕСЃ РІ СЂР°Р±РѕС‡РµРµ РІСЂРµРјСЏ.';
        }
    }

    return successMsg;
}

function sendFormAjax(form) {
    // let formDataExtra = $('#calc-flat').serializeArray();
    // var formData = $(this).serializeArray().concat(formDataExtra);
    var formData = $(form).serializeArray();
    console.log(formData);
    
    $.ajax({
        url: $(form).attr('action'),
        method: 'post',
        data: formData,
        // dataType: 'json',
        beforeSend: function() {
            $(form).find('button[type="submit"]').addClass("loading");
            $(form).find('button[type="submit"]').addClass("hold");
        },
        success: function(responseText) {
            $(form).find('button[type="submit"]').removeClass("loading");
            $(form).find('button[type="submit"]').removeClass("hold");
            // console.log(responseText);
            data = JSON.parse(responseText);
            // console.log(data);
            if (data.response.result == "success") {
                $(form).html('<div class="large_back_call_info">' + getSuccessMag() + '</div>');
                ym(26247744,'reachGoal','all_forms');
                gtag('event', 'forms', { 'event_category': 'all', 'event_label': 'forms' });
            } else {
                $(form).find('.error').removeClass('error__show');
                $.each(data.response.error, function(index, error_name) {
                    console.log(index);
                    console.log(error_name);
                    $(form).find('input[name="'+error_name+'"]').siblings('.error').addClass('error__show');
                });
                // $(form).find("button[type=submit]").html("<span>РћС€РёР±РєР°!</span><div class='loading_enco color-fff'><div><div></div><div></div><div></div></div></div>");
            }
        }
    });
    
}

/*
$(function() {
    $(document).on('submit', '#back_call_header', function() {
        console.log('focus');

        var check_cookie;
        check_cookie = getCookie('recaptcha_token');
        console.log(check_cookie);

        if (!check_cookie) {
            grecaptcha.ready(function() {
                grecaptcha.execute('6LdjfPMZAAAAAFRAbzdWJztFWg88sJ6SVutOnY1h', {action: 'formId'}).then(function(token) {
                    var now = new Date(),
                        cookie_live = new Date(now);
                    cookie_live.setMinutes(now.getMinutes() + 2);            
                    document.cookie = "recaptcha_token="+token+"; path=/; expires=" + cookie_live.toUTCString();
                });
            });
        }
    });
});
*/

/*

// 'use strict';

function httpGet(form) {
    return new Promise(function(resolve, reject) {
		$.ajax({
			url: $(form).attr('action'),
			data: $(form).serializeArray(),
            type: $(form).attr('method'),
			success: function(response) {
				response = JSON.parse(response);
                resolve(response);
			},
            error: function(jqXHR, exception) {
                var error = new Error(jqXHR.statusText);
                error.code = this.status;
                reject(error);
            }
		});
    });
}

function getRecaptchaToken() {
    return new Promise(function(resolve, reject) {
        grecaptcha.ready(function() {
            grecaptcha.execute('6LdjfPMZAAAAAFRAbzdWJztFWg88sJ6SVutOnY1h', {action: 'formId'}).then(function(token) {
                resolve(token);
            });
        });
    });
}

$(function() {
    $('[data-form-recaptcha]').on('submit', function(e) {
        e.preventDefault();
        var form = this;
        var error;

        getRecaptchaToken()
        // 1. РїРѕР»СѓС‡РµРЅРёРµ С‚РѕРєРµРЅР°
            .then(token => {
                // $(form).prepend('<input type="hidden" name="token" value="' + token + '">');
                // $(form).prepend('<input type="hidden" name="action" value="' +$(form).attr('id')+ '">');
                $(form).find('[name="token"]').val(token);
                return token;
            })
            // 2. РѕС‚РїСЂР°РІРєР° С„РѕСЂРјС‹
            .then(token => {
                httpGet(form)
                    // 3. РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ РІ html
                    .then(
                        response => {
                            console.log(response);
                            response = response.response;
                            $(form).find('input').removeClass('error');
                            if (response.result=='success') {
                                $(form).html('<div class="large_back_call_info success">'+getSuccessMag()+'</div>');
                                $(form).parent().addClass('success');
                            } else {
                                for (const [key, value] of Object.entries(response.error)) {
                                    $(form).find('[name="'+value+'"]').addClass('error');
                                }
                            }
                            
                        },
                        error => alert(`Rejected: ${error}`)
                    );
            })
    });
});

*/
/* End */
;
; /* Start:"a:4:{s:4:"full";s:47:"/local/templates/new/js/main.js?163169909323802";s:6:"source";s:31:"/local/templates/new/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

const BannerTop = {
    bannerBlock: null,
    closeBtn: null,
    logoNew: null,
    logoOld: null,
    init () {
        this.bannerBlock = document.querySelector('.banner-top');
        this.closeBtn = this.bannerBlock.querySelector('.banner-top-close');
        this.logoOld = this.bannerBlock.querySelector('#logo-old');
        this.logoNew = this.bannerBlock.querySelector('#logo-new')
        this.logoNew.classList.add('active')
        this.closeBtn.addEventListener('click', () => {
            this.bannerBlock.remove();
        });
        setInterval(() => {
          this.toggleLogo()
        }, 3000)
    },
    toggleLogo() {
        if (this.logoNew.classList.contains('active')) {
            this.logoNew.classList.remove('active')
            this.logoOld.classList.add('active')
        } else {
            this.logoNew.classList.add('active')
            this.logoOld.classList.remove('active')
        }
    }
}
/**
 * Class of custom select, based on checkbox.
 * params: { selector } - HTML element (select block)
 * if you want to init but not use, add too your select class - 'disable'
 */
class CustomSelect {
    constructor(selector) {
        this.select = selector
        this.optionsBlock = this.select.querySelector('.custom-select-options')
        this.visibleBlock = this.select.querySelector('.custom-select-title')
        this.checkedValues = []
        this.options = this.optionsBlock.querySelectorAll('input')
        this._init()
    }
    _init() {
        this.options.forEach(el => {
            if (el.checked) {
                this.checkedValues.push(el.value)
            }
        });
        this.select.addEventListener('click', () => {
            if (!this.select.classList.contains('disable')) {
                this.toggleOptions()
            }
        });
        this.optionsBlock.style.maxHeight = null
        this.showSelected()
        this.options.forEach(el => {
            el.addEventListener('change', (e) => {this.changeValues(e)})
        })
    }
    showSelected() {
        this.visibleBlock.innerHTML = this.checkedValues.join(', ')
        this.visibleBlock.dataset.values = this.checkedValues.join(', ')
    }
    changeValues(e) {
        if (e.target.checked) {
            this.checkedValues.push(e.target.dataset.value)
            this.showSelected()
        } else {
            this.checkedValues = this.checkedValues.filter(el => el !== e.target.dataset.value)
            this.showSelected()
        }
    }
    toggleOptions() {
        this.select.classList.toggle('open')
        if (!this.optionsBlock.style.maxHeight) {
            this.optionsBlock.style.maxHeight = `${this.optionsBlock.scrollHeight}px`
        } else {
            this.optionsBlock.style.maxHeight = null
        }
    }
}
const HiddenFilters = {
    hiddenBlock: null,
    buttonInitiator: null,
    currentText: '',
    init() {
        this.hiddenBlock = document.querySelector('.filter-hidden');
        this.buttonInitiator = document.querySelector('.filter-visible-more');
        this.useDefaultParams();
    },
    useDefaultParams() {
        this.hiddenBlock.style.maxHeight = null
        this.buttonInitiator.addEventListener('click', () => {
            this.toggleHiddenBlock();
        });
        this.currentText = this.buttonInitiator.textContent
    },
    toggleHiddenBlock() {
        if (this.hiddenBlock.style.maxHeight) {
            this.buttonInitiator.classList.remove('open')
            this.hiddenBlock.style.maxHeight = null
            this.toggleButtonInfo()
        } else {
            this.buttonInitiator.classList.add('open')
            this.hiddenBlock.style.maxHeight = `${this.hiddenBlock.scrollHeight}px`
            this.toggleButtonInfo()
        }
    },
    toggleButtonInfo() {
        this.currentText = this.buttonInitiator.textContent
        this.buttonInitiator.innerHTML = this.buttonInitiator.dataset.dinamic
        this.buttonInitiator.dataset.dinamic = this.currentText
    }
}
const Accordions = {
    officeBlocks: null,
    init() {
        this.officeBlocks = document.querySelectorAll('.accordion');
        this.officeBlocks.forEach(el => {
            el.addEventListener('click', (el) => {
                if (el.currentTarget.classList.contains('active')) {
                    this.hideContent(el.currentTarget)
                } else {
                    this.showContent(el.currentTarget)
                }

            });
        })
    },
    showContent(element) {
        this.officeBlocks.forEach(el => {
            if (el.classList.contains('active')) {
                el.querySelector('.accordion-block').style.maxHeight = null
                el.classList.remove('active')
            }
        });
        const content = element.querySelector('.accordion-block');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = `${content.scrollHeight}px`
            element.classList.add('active')
        }
    },
    hideContent(element) {
        element.classList.remove('active');
        element.querySelector('.accordion-block').style.maxHeight = null
    }
}
const SliderMobile = {
    slides: [],
    next: null,
    prev: null,
    init() {
        document.querySelectorAll('.inner-slide').forEach((el, indx) => {
           this.slides.push(el);
           if (indx !== 0) {
               el.classList.add('next');
           } else el.classList.add('active');
        });
        this.next = document.querySelector('.btn-right');
        this.prev = document.querySelector('.btn-left');
        this.updateBtns(0)
        this.next.addEventListener('click', () => {
            this.showNextSlide();
        });
        this.prev.addEventListener('click', () => {
            this.showPrevSlide();
        });
    },
    showNextSlide() {
        const current = this.slides.find(el => el.classList.contains('active'));
        const currentIndex = this.slides.indexOf(current);
        if (currentIndex + 1 < this.slides.length) {
            current.classList.remove('active');
            current.classList.add('prev');
            this.slides[this.slides.indexOf(current) + 1].classList.remove('next');
            this.slides[this.slides.indexOf(current) + 1].classList.add('active');
            this.updateBtns(currentIndex+1)
        }
    },
    showPrevSlide() {
        const current = this.slides.find(el => el.classList.contains('active'));
        const currentIndex = this.slides.indexOf(current);
        if (currentIndex > 0) {
            current.classList.remove('active');
            current.classList.add('next');
            this.slides[this.slides.indexOf(current) - 1].classList.remove('prev');
            this.slides[this.slides.indexOf(current) - 1].classList.add('active');
            this.updateBtns(currentIndex-1)
        }
    },
    updateBtns(index) {
        if (index === 0) {
            this.prev.classList.add('disable');
        } else this.prev.classList.remove('disable');
        if (index === this.slides.length - 1) {
            this.next.classList.add('disable');
        } else this.next.classList.remove('disable');
    }
}
class Carousel {
    constructor(innerBlock, movedBlock) {
        this.visibleBlock = document.querySelector(innerBlock);
        this.movedBlock = document.querySelector(movedBlock);
        this.margin = null;
        this.slides = null;
        this.slideWidth = null;
        this.startX = null;
        this.currentPos = null;
        this.event = (e) => {this.liveMoving(e)}
    }
    init() {
        this.slides = Array.from(this.movedBlock.children);
        this.slideWidth = this.slides[1].clientWidth;
        this.margin = (this.movedBlock.clientWidth - this.slides.length * this.slideWidth) / (this.movedBlock.children.length - 1);
        this.movedBlock.addEventListener('transitionend', () => {
            this.hideSlides();
        });
        this.movedBlock.addEventListener('mousedown', (e) => this.createMovingStructure(e));
        this.hideSlides();
    }
    hideSlides() {
        this.slides.forEach((el) => {
            if (el.getBoundingClientRect().left >= this.visibleBlock.getBoundingClientRect().right ||
                el.getBoundingClientRect().right <= this.visibleBlock.getBoundingClientRect().left) {
                el.classList.add('invisible');
            } else {
                el.classList.remove('invisible');
            }
        });
    }
    liveMoving(e) {

        if (this.slides[0].getBoundingClientRect().left >= this.visibleBlock.getBoundingClientRect().left + 1) {
            this.movedBlock.style.left = '0px';
        }
        if (this.slides[this.slides.length-1].getBoundingClientRect().right <= this.visibleBlock.getBoundingClientRect().right + 1){
            this.movedBlock.style.left = `-${this.movedBlock.clientWidth - this.visibleBlock.clientWidth}px`;
        }
        this.hideSlides();
    }
    createMovingStructure(e) {
        e.preventDefault()
        this.startX = e.pageX;
        this.currentPos = this.movedBlock.offsetLeft;
        this.movedBlock.style.transition = 'none';
        this.movedBlock.addEventListener('mousemove', this.event);
        this.clear();
    }
    clear() {
        this.movedBlock.addEventListener('mouseleave', () => {
            this.movedBlock.removeEventListener('mousemove', this.event);
            this.movedBlock.style.transition = '';
            this.movedBlock.style.left = `-${Math.abs(Math.round(this.movedBlock.offsetLeft / (this.slideWidth + this.margin))) * (this.slideWidth + this.margin)}px`
        }, {once: true});
    }
}
class CarouselTouchScreenNoBtn extends Carousel{
    constructor(innerBlock, movedBlock) {
        super(innerBlock, movedBlock);
    }
    init() {
        super.init();
        this.movedBlock.addEventListener('touchstart', (e) => this.createMovingStructure(e));
        this.hideSlides();
    }
    createMovingStructure(e) {
        this.startX = e.touches[0].pageX;
        this.currentPos = this.movedBlock.offsetLeft;
        this.movedBlock.style.transition = 'none';
        this.movedBlock.addEventListener('touchmove', this.event);
        this.clear();
    }
    clear() {
        this.movedBlock.addEventListener('touchend', () => {
            this.movedBlock.removeEventListener('touchmove', this.event);
            this.movedBlock.style.left = `-${Math.abs(Math.round(this.movedBlock.offsetLeft / (this.slideWidth + this.margin))) * (this.slideWidth + this.margin)}px`
        }, {once: true});
        super.clear();
    }
    liveMoving(e) {
        this.movedBlock.style.left = `${this.currentPos + (e.touches[0].pageX - this.startX)}px`;
        super.liveMoving(e);
        this.hideSlides();
    }
}


// initialisation
if (window.innerWidth < 768) {
    SliderMobile.init()
    const car1 = new CarouselTouchScreenNoBtn('.stocks-inner', '.stocks-flex')
    car1.init()
    document.querySelector('.news-info').remove()
    const car2 = new CarouselTouchScreenNoBtn('.news-inner', '.news-items')
    car2.init()
}
Accordions.init()
document.querySelectorAll('.custom-select').forEach(el => {
    new CustomSelect(el)
});
if (document.querySelector('.banner-top')) {
    BannerTop.init()
}
function topAnimate() {
    if (pageYOffset > 1) {
        document.querySelector('.header-desktop').classList.add('scrolled');
        if (document.querySelector('.banner-top')) {
            BannerTop.bannerBlock.remove();
        }
        document.querySelector('main').classList.add('scrolled');
    } else {
        document.querySelector('.header-desktop').classList.remove('scrolled');
        document.querySelector('main').classList.remove('scrolled');
    }
}
window.addEventListener('scroll',topAnimate)
if (document.querySelector('.filter-hidden')) {
    if (window.innerWidth > 768) {
        HiddenFilters.init()
    } else {
        document.querySelector('.filter-visible-more').addEventListener('click', () => {
            document.body.classList.add('overflow');
            document.querySelector('.filter').classList.add('active');
        });
        document.querySelector('.filter-mobile-close').addEventListener('click', () => {
            document.body.classList.remove('overflow');
            document.querySelector('.filter').classList.remove('active');
        })
    }

}

// Rages

var $priceRange = $(".price-range-slider"),
    $priceInputFrom = $("#price-input-from"),
    $priceInputTo = $("#price-input-to"),
    priceInstance,
    priceMin = parseInt($priceInputFrom.data('min').replace( /\s/g, "")),
    priceMax = parseInt($priceInputTo.data('max').replace( /\s/g, "")),
    priceFrom = parseInt($priceInputFrom.data('start').replace( /\s/g, "")),
    priceTo = parseInt($priceInputTo.data('end').replace( /\s/g, ""));
$priceRange.ionRangeSlider({
    skin: "round",
    type: "double",
    min: priceMin,
    max: priceMax,
    from: priceFrom,
    to: priceTo,
    onStart: updatePriceInputs,
    onChange: updatePriceInputs
});
priceInstance = $priceRange.data("ionRangeSlider");
function updatePriceInputs (data) {
    from = splitNumber(data.from)
    to = splitNumber(data.to)
    $priceInputFrom.prop("value", from);
    $priceInputTo.prop("value", to);
}
$priceInputFrom.on("input", function () {
    $(this).val($(this).val().replace(/[A-Za-zРђ-РЇР°-СЏРЃС‘]/, ''));
    $(this).val(splitNumber($(this).val()));
    var val = $(this).prop("value").replace( /\s/g, "");
    if (val < priceMin) {
        val = priceMin;
    } else if (val >  priceTo) {
        val =  priceTo;
        console.log(val)
    }
    priceInstance.update({
        from: val
    });
});

$priceInputTo.on("input", function () {
    $(this).val($(this).val().replace(/[A-Za-zРђ-РЇР°-СЏРЃС‘]/, ''));
    $(this).val(splitNumber($(this).val()));
    var val = $(this).prop("value").replace( /\s/g, "");
    if (val < from) {
        val = from;
    } else if (val > priceMax) {
        val = priceMax;
    }
    priceInstance.update({
        to: val
    });
});

function splitNumber(val) {
    let num = val.toString();
    num = num.replace(/ /g,"");
    num = num.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return num;
}

//floor range

var $floorRange = $(".floor-range-slider");
var $floorInputFrom = $("#floor-input-from");
var $floorInputTo = $("#floor-input-to");
var floorInstance;
var floorMin = $floorInputFrom.data('min');
var floorMax = $floorInputTo.data('max');
var floorFrom = $floorInputFrom.data('start');
var floorTo = $floorInputTo.data('end');
$floorRange.ionRangeSlider({
    skin: "round",
    type: "double",
    min: floorMin,
    max: floorMax,
    from: floorFrom,
    to: floorTo ,
    onStart: updateFloorInputs,
    onChange: updateFloorInputs,
    onFinish: updateFloorInputs
});
floorInstance = $floorRange.data("ionRangeSlider");
function updateFloorInputs (data) {
    from = data.from;
    to = data.to;

    $floorInputFrom.prop("value", from);
    $floorInputTo.prop("value", to);
}
$floorInputFrom.on("change", function () {
    var val = $(this).prop("value");
    if (val < floorMin) {
        val = floorMin;
    } else if (val > to) {
        val = to;
    }
    floorInstance.update({
        from: val
    });
    $(this).prop("value", val);

});
$floorInputTo.on("change", function () {
    var val = $(this).prop("value");
    if (val < from) {
        val = from;
    } else if (val > floorMax) {
        val = floorMax;
    }
    floorInstance.update({
        to: val
    });
    $(this).prop("value", val);
});

var $squareRange = $(".square-range-slider");
var $squareInputFrom = $("#square-input-from");
var $squareInputTo = $("#square-input-to");
var squareInstance;
var squareMin = $squareInputFrom.data('min');
var squareMax = $squareInputTo.data('max');
var squareFrom = $squareInputFrom.data('start');
var squareTo = $squareInputTo.data('end');

$squareRange.ionRangeSlider({
    skin: "round",
    type: "double",
    min: squareMin,
    max: squareMax,
    from: squareFrom,
    to: squareTo,
    step: 0.5,
    onStart: updateSquareInputs,
    onChange: updateSquareInputs,
    onFinish: updateSquareInputs
});
squareInstance = $squareRange.data("ionRangeSlider");
function updateSquareInputs (data) {
    from = data.from;
    to = data.to;

    $squareInputFrom.prop("value", from);
    $squareInputTo.prop("value", to);
}
$squareInputFrom.on("change", function () {
    var val = $(this).prop("value");
    if (val < squareMin) {
        val = squareMin;
    } else if (val > to) {
        val = to;
    }
    squareInstance.update({
        from: val
    });
    $(this).prop("value", val);
});
$squareInputTo.on("change", function () {
    var val = $(this).prop("value");
    if (val < from) {
        val = from;
    } else if (val > squareMax) {
        val = squareMax;
    }
    squareInstance.update({
        to: val
    });
    $(this).prop("value", val);
});
document.querySelector('.mobile-burger').addEventListener('click', () => {
    document.querySelector('.mobile-burger').classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.body.classList.toggle('overflow');
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [57.165705, 65.598890],
        zoom: 11
    }, {
        searchControlProvider: 'yandex#search'
    });
    const iconsPath = [
        {
            passive: 'local/templates/new/images/icon/aivazovski-map.svg',
            active: 'local/templates/new/images/icon/aivazovski-map-active.svg'
        },
        {
            passive: 'local/templates/new/images/icon/peobraghensk-map.svg',
            active: 'local/templates/new/images/icon/peobraghensk-map-active.svg'
        },
        {
            passive: 'local/templates/new/images/icon/peobraghensk-mosk-map.svg',
            active: 'local/templates/new/images/icon/peobraghensk-mosk-map-active.svg'
        },
        {
            passive: 'local/templates/new/images/icon/nikolski-map.svg',
            active: 'local/templates/new/images/icon/nikolski-map-active.svg'
        },
    ];
    const icons = [];
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map-icon">$[properties.iconContent]</div>'
    );
    const aivazovsky = new ymaps.Placemark([57.165705, 65.598890], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'local/templates/new/images/icon/aivazovski-map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const peobraghensk = new ymaps.Placemark([57.117535, 65.501678], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'local/templates/new/images/icon/peobraghensk-map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const peobraghenskMosk = new ymaps.Placemark([57.123623, 65.470245], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'local/templates/new/images/icon/peobraghensk-mosk-map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    const nikolski = new ymaps.Placemark([57.088936, 65.515488], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'local/templates/new/images/icon/nikolski-map.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-5, -38]
    });
    icons.push(aivazovsky, peobraghensk, peobraghenskMosk, nikolski)
    document.querySelector('#aivazovskiMap').addEventListener('click', (e) => {
        const address = e.currentTarget
        clearIcons()
        setTimeout(() => {
            if (address.classList.contains('active')) {
                aivazovsky.options.set('iconImageHref', 'local/templates/new/images/icon/aivazovski-map-active.svg' )
            }
        }, 0)
    })
    document.querySelector('#peobraghenskMap').addEventListener('click', (e) => {
        const address = e.currentTarget
        clearIcons()
        setTimeout(() => {
            if (address.classList.contains('active')) {
                peobraghensk.options.set('iconImageHref', 'local/templates/new/images/icon/peobraghensk-map-active.svg' )
            }
        }, 0)
    })
    document.querySelector('#peobraghenskMoskMap').addEventListener('click', (e) => {
        const address = e.currentTarget
        clearIcons()
        setTimeout(() => {
            if (address.classList.contains('active')) {
                peobraghenskMosk.options.set('iconImageHref', 'local/templates/new/images/icon/peobraghensk-mosk-map-active.svg' )
            }
        }, 0)
    })
    document.querySelector('#nikolskiMap').addEventListener('click', (e) => {
        const address = e.currentTarget
        clearIcons()
        setTimeout(() => {
            if (address.classList.contains('active')) {
                nikolski.options.set('iconImageHref', 'local/templates/new/images/icon/nikolski-map-active.svg' )
            }
        }, 0)
    })
    document.querySelector('#clearMap').addEventListener('click', () => {
        clearIcons()
    })
    aivazovsky.events.add('click', () => {
        clearIcons();
        if (!document.querySelector('#aivazovskiMap').classList.contains('active')) {
            Accordions.showContent(document.querySelector('#aivazovskiMap'))
            aivazovsky.options.set('iconImageHref', 'local/templates/new/images/icon/aivazovski-map-active.svg' )
        } else {
            Accordions.hideContent(document.querySelector('#aivazovskiMap'))
        }
    })
    peobraghensk.events.add('click', () => {
        clearIcons();
        if (!document.querySelector('#peobraghenskMap').classList.contains('active')) {
            Accordions.showContent(document.querySelector('#peobraghenskMap'))
            peobraghensk.options.set('iconImageHref', 'local/templates/new/images/icon/peobraghensk-map-active.svg' )
        } else {
            Accordions.hideContent(document.querySelector('#peobraghenskMap'))
        }
    })
    peobraghenskMosk.events.add('click', () => {
        clearIcons();
        if (!document.querySelector('#peobraghenskMoskMap').classList.contains('active')) {
            Accordions.showContent(document.querySelector('#peobraghenskMoskMap'))
            peobraghenskMosk.options.set('iconImageHref', 'local/templates/new/images/icon/peobraghensk-mosk-map-active.svg' )
        } else {
            Accordions.hideContent(document.querySelector('#peobraghenskMoskMap'))
        }
    })
    nikolski.events.add('click', () => {
        clearIcons();
        if (!document.querySelector('#nikolskiMap').classList.contains('active')) {
            Accordions.showContent(document.querySelector('#nikolskiMap'))
            nikolski.options.set('iconImageHref', 'local/templates/new/images/icon/nikolski-map-active.svg' )
        } else {
            Accordions.hideContent(document.querySelector('#nikolskiMap'))
        }
    })
    function clearIcons() {
        icons.forEach((el, index) => {
            el.options.set('iconImageHref', iconsPath[index].passive)
        })
    }
    myMap.geoObjects
        .add(aivazovsky)
        .add(peobraghensk)
        .add(peobraghenskMosk)
        .add(nikolski)
    myMap.behaviors.disable('scrollZoom')
});

jQuery(function($){
    $(document).mouseup(function (e){
        const arr = [$('.view-form'), $('.plan-form'), $('.frame-form'), $(".deadline-form")]
        arr.forEach(el => {
            if (!el.is(e.target)
                && el.has(e.target).length === 0) {
                const block = document.querySelector(`.${$(el).attr("class")}`);
                block.querySelector('.custom-select').classList.remove('open')
                block.querySelector('.custom-select-options').style.maxHeight = null;
            }
        })
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:49:"/local/templates/new/js/general.js?16316990931304";s:6:"source";s:34:"/local/templates/new/js/general.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {

  let inputmask_option = {
    placeholder: 'вЂ“',
    clearMaskOnLostFocus: !1,
    undoOnEscape: !1,
    oncomplete: function() {
      $('#' + $(this).data('buttonSend')).removeClass('hold')
    },
    onBeforeMask: function(a, b) {
      return a.replace(/^1/, '')
    },
    onKeyDown: function() {
      $(this).inputmask('isComplete') || $('#' + $(this).data('buttonSend')).addClass('hold')
    }
  };
  $('.large_back_call_input[name="phone"]').inputmask('+7 (999) 999 99 99', inputmask_option);

  $(document).on('keyup change', '.js-filter-flat-form input', function() {
    flat_search_serialize()
  })

});

let xhr_filter = false;
function flat_search_serialize() {
  let form = $('.js-filter-flat-form');

  console.log(form.serialize());

  // if (!$('.filter_standart_show_results').hasClass('loading')){
  $('.filter_standart_show_results').addClass('loading');

  if (xhr_filter) {
    xhr_filter.abort();
    console.log('abort');
  }

  xhr_filter = $.ajax({
    url: '/ajax/filter_new_main.php',
    data: form.serialize(),
    success: function(data){
      $('.filter_standart_show_results').html(data);
      $('.filter_standart_show_results').removeClass('loading');
    },
    complete: function() {
      xhr_filter = false
    }
  });
  // }
}

/* End */
;; /* /local/templates/new/js/jquery.fancybox.min.js?163169909345539*/
; /* /local/templates/new/js/jquery.inputmask.bundle.min.js?163169909376313*/
; /* /local/templates/new/js/formSubmit.js?16329045288090*/
; /* /local/templates/new/js/main.js?163169909323802*/
; /* /local/templates/new/js/general.js?16316990931304*/