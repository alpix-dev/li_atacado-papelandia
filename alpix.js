!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this.options.asNavFor;return e&&null!==e&&(e=i(e).not(this.$slider)),e},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){for(o in s=null,r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n=this,r=i(e.currentTarget);switch(r.is("a")&&e.preventDefault(),r.is("li")||(r=r.closest("li")),o=n.slideCount%n.options.slidesToScroll!=0?0:(n.slideCount-n.currentSlide)%n.options.slidesToScroll,e.data.message){case"previous":s=0===o?n.options.slidesToScroll:n.options.slidesToShow-o,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide-s,!1,t);break;case"next":s=0===o?n.options.slidesToScroll:o,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide+s,!1,t);break;case"index":var l=0===e.data.index?0:e.data.index||r.index()*n.options.slidesToScroll;n.slideHandler(n.checkNavigable(l),!1,t),r.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(t=0,i>(e=this.getNavigableIndexes())[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){for(e in s.respondTo=s.options.respondTo||"window",n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){i||this.autoPlay(),this.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.apx_slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

const theme = [];

theme.info = {};
theme.info.icon = '<svg style="height:22px;width:47px;box-sizing: content-box;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320.23 150.05"><defs><style>.cls-1{fill:#fc5656;}.cls-2{fill:#b32fd3;}.cls-3{fill:url(#Gradiente_sem_nome_49);}</style><linearGradient id="Gradiente_sem_nome_49" x1="-1021.91" y1="912.64" x2="-898.84" y2="912.64" gradientTransform="translate(1114.16 -837.62)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fc5656"/><stop offset="1" stop-color="#b32fd3"/></linearGradient></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><rect x="215.32" y="40.9" width="19.21" height="70.65"/><rect x="92.25" width="19.11" height="111.55"/><path d="M167.15,39.84a36.48,36.48,0,0,0-17.37,4.38V41.07H130.59V150h19.19V108.58a36.56,36.56,0,1,0,17.37-68.74Zm0,53.87A17.32,17.32,0,1,1,184.47,76.4,17.31,17.31,0,0,1,167.15,93.71Z"/><path d="M53.83,111.37H73l0-70.48H53.87v3.3a36.76,36.76,0,0,0-17.31-4.36,36,36,0,0,0-11.7,1.93,36.55,36.55,0,0,0,0,69.26,36.43,36.43,0,0,0,23.4,0,34.82,34.82,0,0,0,5.61-2.43M36.56,94.13A17.32,17.32,0,1,1,53.87,76.81,17.31,17.31,0,0,1,36.56,94.13Z"/><polygon points="318.51 41.07 305.89 58.94 282.36 58.94 294.97 41.07 318.51 41.07"/><polygon points="320.23 111.55 296.55 111.55 282.36 92.17 268.77 111.55 245.22 111.55 270.5 75.69 270.6 75.55 258.79 58.94 246.09 41.07 269.77 41.07 282.36 58.94 282.38 58.94 294.19 75.69 294.24 75.69 320.23 111.55"/><rect class="cls-1" x="92.25" y="130.94" width="19.11" height="19.11"/><rect class="cls-2" x="196.11" width="19.21" height="19.21"/><rect class="cls-3" x="92.25" y="130.94" width="19.11" height="19.11"/><rect class="cls-3" x="196.11" width="19.21" height="19.21"/></g></g></svg>';
theme.info.external = "https://www.alpix.dev?utm_source=" + window.location.host;
theme.info.ref = "https://www.alpix.dev/criar-sua-loja-integrada";
theme.isMobile = window.innerWidth < 990;

theme.extra = {};
theme.extra.whatsapp = "(11) 98049-4350";
theme.extra.email = "sac@atacadopapelandia.com.br";
theme.extra.telefone = "";
theme.extra.atendimento = "Segunda à Sexta, das 9h às 18h";

theme.lang = {};
theme.lang.productListDetail = "Ver Mais";
theme.lang.productListAdd = "Comprar Agora";
theme.lang.sideCartTitle = "Meu Carrinho";
theme.lang.footerTitle1 = "Institucional";
theme.lang.footerTitle2 = "Categorias";
theme.lang.footerTitle3 = "Pagamento e Segurança";
theme.lang.footerTitle4 = "Newsletter";
theme.lang.searchTitle = "Pesquisar";
theme.lang.searchPlaceholder = "Digite o que procura...";
theme.lang.searchButtonText = "Buscar";
theme.lang.accountTitle = "Minha Conta";
theme.lang.filtersTitle = "Filtrar por";
theme.lang.menuTitle = "Menu";
theme.lang.avisoEstoque = "Aproveite! Apenas [qtde] itens em estoque!";
theme.lang.brandTitle = "Compre por Marca";
theme.lang.testimonialsTitle = "Quem provou, gostou!";
theme.lang.categoriesTitle = "O que você procura?";
theme.lang.categoriesSubtitle = "Compre sua refeição de acordo com nossas sugestões";


theme.settings = {};
theme.settings.agendamento = true;
theme.settings.sideCheckout = true;
theme.settings.whatsappButton = false;
theme.settings.extraPagination = true;
theme.settings.instagramFeed = false;
theme.settings.productListImageFill = true;
theme.settings.imageSize = 1;
theme.settings.productExcerpt = false;
theme.settings.avisoEstoque = 999;
theme.settings.sliders = [];
theme.settings.sliders.config = [];
theme.settings.sliders.config.prevArrow = '<span class="arrow-l"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-1" x2="12.7279" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 2 8)" stroke="#F21154" stroke-width="2"/><line x1="1.29289" y1="10.2929" x2="10.2929" y2="1.29289" stroke="#F21154" stroke-width="2"/></svg></span>';            
theme.settings.sliders.config.nextArrow   = '<span class="arrow-r"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-1" x2="12.7279" y2="-1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 9 11)" stroke="#F21154" stroke-width="2"/><line x1="9.70711" y1="8.70711" x2="0.707107" y2="17.7071" stroke="#F21154" stroke-width="2"/></svg></span>';
theme.settings.productGallery = false;

theme.settings.tabela = [];
theme.settings.tabela.kcal = 2000;
theme.settings.tabela.carb = 150;
theme.settings.tabela.prot = 100;
theme.settings.tabela.gord = 50;
theme.settings.tabela.gord_t = 10;
theme.settings.tabela.sod_mg = 500;

theme.settings.invertHeader = false;

theme.settings.sliders.benefitsStripe = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 9999,
        settings: "unslick"
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
}

theme.settings.sliders.miniSlider = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint:1000,
            settings:"unslick"
        }
    ]    
}
theme.settings.sliders["theme_customBanners-lancamento"] = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    autoplaySpeed: 5000,
    dots:false,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint:1000,
            settings:{
                slidesToShow:2,
                arrows:false,
                dots:true
            }
        },
        {
            breakpoint:1000,
            settings:{
                slidesToShow:1,
                arrows:false,
                dots:true
            }
        }
    ]    
}

theme.settings.sliders.fullbanner = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    autoplaySpeed: 5000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint:1000,
            settings:{
                arrows:false,
                dots:true
            }
        }
    ]    
}

theme.settings.sliders.brands = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows : false,
                centerMode: true
            }
        }
    ]
}

theme.settings.sliders.categorySlider = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1                
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:true
            }
        }
    ] 
}

theme.settings.sliders.testimonials = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,            
            centerMode:true
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true
        }
        }
    ]  
}

theme.settings.sliders.products = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            centerMode:false,
            dots:true
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            dots:true
        }
        }
    ]  
}

theme.settings.sliders.relateds = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint:1000,
            settings:"unslick"
        }
    ] 
}

theme.settings.sliders.verticalProductGallery = {
    vertical:true,
    infinite: true,
    centerMode:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,    
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    arrows:false,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            vertical:false,
            centerMode:false,
            arrows:false
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode:false,
            vertical:false,
            arrows:false
        }
        }
    ]    
}
theme.settings.sliders.horizontalProductGallery = {
    infinite: true,
    centerMode:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,    
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            centerMode:false
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode:false,
            dots:false
        }
        }
    ]
}
theme.settings.sliders.premiumProductGallery = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
}
theme.settings.sliders.premiumProductGalleryNav = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
}

theme.settings.footer = [];
theme.settings.footer.social = false;
theme.settings.footer.payments = true;
theme.settings.footer.categories = true;
theme.settings.footer.pages = true;
theme.settings.footer.institutional = false;
theme.settings.footer.logo = false;
theme.settings.footer.newsletter = true;

theme.stripe = [];
theme.stripe.color = '#fff';
theme.stripe.background = '#000';
theme.stripe.content = "";
theme.stripe.position = 2;
theme.stripe.fixed = false;

theme.benefitsStripe = [];
theme.benefitsStripe.active = 0;
theme.benefitsStripe.list = [];
//theme.benefitsStripe.list.push({img:'',title:'',subtitle:'',link:''})




theme.build = [];
theme.build.header = function(template){
    $('#cabecalho').html(theme.templates.header);
    $('#theme_header-logo').append(theme.logo);
    $('#theme_header-menu').html(theme.headerMenu);

    $('#theme_header-menu .nivel-um').prepend('<li class="categoria-start borda-principal"><a href="javascript:;"><strong class="titulo">Comece por aqui</strong></a></li>')
    
    
    $('#theme_header-functions').append('<li class="p_cart">' + theme.headerCart + '<span>Sacola</span></li>');
    $('#theme_header-functions').prepend('<li class="p_account function-watch-dropdown"><button type="button" class="account-trigger"><span class="ico_svg">'+ theme.icon.account +'</span><div>Olá, <span>'+ theme.userFirstname+ '</span><b>Minha Conta</b></div></button></li>');
    $('#theme_header-functions').prepend('<li class="p_wishlist"><a class="" href=""><span class="ico_svg">'+ theme.icon.wishlist +'</span></a></li>');
    $('#theme_header-functions').prepend('<li class="p_contact function-watch-dropdown"><span class="ico_svg">'+ theme.icon.contact +'</span><ul class="function-dropdown"></ul></li>');
    
        
    $('.carrinho .icon-shopping-cart').before(theme.icon.cart);
    $('.carrinho .icon-shopping-cart').remove();



    theme.functions.contact();
    
    
    $('.barra-inicial').remove();
};
theme.build.headerApp = function(){
    $('#cabecalho').html(theme.templates.headerApp).addClass('no-sticky');
    $('#theme_header-logo').append(theme.logo);
    $('#theme_header-back').html('<a href="/"><i></i><span class="hidden-phone">Continuar Comprando</a>');
    
    $('#theme_header-functions-app ul').append('<li><a href="https://wa.me/5511950806282"><i class="fa fa-whatsapp"></i> (11) 95080-6282</li>');
    $('#theme_header-functions-app ul').append('<li><i class="fa fa-lock"></i> Compra Segura</li>');
    

    
};
theme.build.footer = function(template){
    $('#barraNewsletter, .pagamento-selos').remove();
    $('#rodape .institucional').html('<div id="p_footer"> <div class="conteiner"> <div class="row-flex"> <div class="col footer-content-1"> <h4><span>Fale com</span>a gente</h4> </div><div class="col footer-content-2"> <h4><span>Chega</span>mais</h4> </div><div class="col footer-content-3"> <h4><span>Precisa de</span>ajuda?</h4> </div><div class="col footer-content-4"> <h4><span>Pagamento e</span>segurança</h4> </div></div></div></div>');
    $('.footer-content-1').append('<div class="contact whatsapp"><b>WhatsApp</b><span>' + theme.extra.whatsapp + '</span></div>');
    $('.footer-content-1').append('<div class="contact email"><b>E-mail</b><span>' + theme.extra.email + '</span></div>');
    $('.footer-content-1').append('<div class="contact atendimento"><b>Atendimento</b><span>' + theme.extra.atendimento + '</span></div>');
    $('.footer-content-1').append('<div class="social">' + theme.socialIcons + '</div>');
    $('.footer-content-2').append(theme.footerPages);
    $('.footer-content-4').append(theme.footerPayments);
    $('.footer-content-4').append(theme.footerGateways);
    $('.footer-content-4').append(theme.footerSeals);    


    //$('[theme-content="newsletter"]').html(theme.newsletter);
    
    $('#rodape .selos').find('.titulo').remove();
    $('#rodape .selos').attr('class','selos');
};
theme.build.asideMenu = function(template){
    $('body').append(theme.templates.asideMenu);
    $('#theme_menu-aside').append(theme.headerMenu);
    $('#theme_menu-aside .com-filho > a').each(function(){
        let url = $(this).attr('href');
        let submenu = $(this).closest('.com-filho').find('.nivel-dois');
        $('<li><a href="'+ url +'">Ver Todos</a></li>').appendTo(submenu);
        $('<li class="theme_menu-closeSub"><button type="button">Voltar</button></li>').prependTo(submenu);
    });
    $('#theme_menu-aside .com-filho > a').click(function(e){
        e.preventDefault();
        $(this).closest('.com-filho').addClass('open');
    });
    $('.theme_menu-closeSub').click(function(){
        $(this).closest('.com-filho').removeClass('open');
    });
    $('body').on('click','#theme_header-menu-trigger, .theme_menu-trigger',function(){   
        $('body').toggleClass('asideMenu-visible');         
    });
};

theme.build.productFilter = function(template){
    if($('.coluna .filtro-coluna').length > 0){
        $('body').append(theme.templates.filters);
        $('body').on('click','.filter-trigger', function(){   
            $('body').toggleClass('asideFilter-visible');         
        });
        if($('.coluna .atributo-cor').length > 0 ){
            $('.coluna .atributo-cor a > span').wrap("<i class='color-bg'></i>")
            // $('.filtro-coluna .atributo-cor span').each(function(){
            //     let css = $(this).attr('style').replace('border-color','background-color');
            //     $(this).attr('style', css);
            // })
        }
        $('.coluna .filtro-coluna').each(function(){
            let filterName = $(this).find('h4.titulo').text().replace('Filtrar por','').replace('Limpar','').trim();
            $('#theme_filter').append('<h4>' + filterName + '</h4>');
            $('#theme_filter').append($(this).find('h4.titulo').next());
        });        
    }
};

theme.build.search = function(template){
    $('body').append(theme.templates.search);
    $('#theme_search').append(theme.searchForm);
        $(this).closest('.com-filho').removeClass('open');
        $('#theme_search #form-buscar').prepend('<button type="button" class="theme_menu-trigger hidden-desktop"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.000244141 17.2471V17.2516C0.000244141 17.98 0.289958 18.6795 0.805909 19.1952C1.32087 19.7102 2.0203 19.9999 2.74879 19.9999H17.235C17.9634 19.9999 18.6629 19.7102 19.1786 19.1952C19.6936 18.6793 19.9833 17.98 19.9833 17.2516V17.2471C19.9833 16.5179 19.6936 15.8184 19.1786 15.3035C18.6627 14.7875 17.9634 14.4978 17.235 14.4978H2.74879C2.02035 14.4978 1.32088 14.7875 0.805909 15.3035C0.289937 15.8184 0.000244141 16.5179 0.000244141 17.2471ZM1.81679 17.2516V17.2471C1.81679 16.9992 1.91492 16.7622 2.09009 16.5878C2.26444 16.4135 2.50145 16.3145 2.74861 16.3145H17.2348C17.482 16.3145 17.719 16.4135 17.8933 16.5878C18.0687 16.7622 18.1666 16.9992 18.1666 17.2471V17.2516C18.1666 17.4987 18.0685 17.7357 17.8933 17.9101C17.719 18.0855 17.482 18.1834 17.2348 18.1834H2.74861C2.50147 18.1834 2.26447 18.0853 2.09009 17.9101C1.91472 17.7358 1.81679 17.4987 1.81679 17.2516Z" fill="#999ACC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9833 2.75218V2.75036C19.9833 2.02109 19.6936 1.32167 19.1776 0.805666C18.6616 0.289693 17.9624 0 17.2329 0H2.75036C2.02109 0 1.32167 0.289714 0.805665 0.805666C0.289693 1.32164 0 2.02088 0 2.75036V2.75218C0 3.48145 0.289713 4.18087 0.805665 4.69688C1.32162 5.21288 2.02089 5.50254 2.75036 5.50254H17.2329C18.7517 5.50254 19.9831 4.27092 19.9831 2.75239L19.9833 2.75218ZM18.1667 2.75218C18.1667 3.26816 17.7489 3.68579 17.2331 3.68579H2.75057C2.50343 3.68579 2.26561 3.58766 2.09023 3.4125C1.91587 3.23713 1.81693 3.00012 1.81693 2.75215V2.75033C1.81693 2.50319 1.91587 2.26537 2.09023 2.09103C2.26559 1.91566 2.50341 1.81672 2.75057 1.81672H17.2331C17.4811 1.81672 17.7181 1.91565 17.8935 2.09103C18.0688 2.26538 18.1668 2.5034 18.1668 2.75033L18.1667 2.75218Z" fill="#999ACC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.16923 12.6779H16.1385C17.6162 12.6779 18.8142 11.4799 18.8142 10.0021V9.99951C18.8142 9.28929 18.5318 8.60891 18.0304 8.10755C17.5282 7.60536 16.8478 7.32373 16.1385 7.32373H3.84509C3.1357 7.32373 2.45553 7.60534 1.95313 8.10755C1.45175 8.60892 1.16931 9.28913 1.16931 9.99951V10.0021C1.16931 10.7115 1.45173 11.3927 1.95313 11.8941C2.45531 12.3963 3.1357 12.6779 3.84509 12.6779H6.16929H6.16923ZM16.1385 10.8614H3.84509C3.61721 10.8614 3.39906 10.7705 3.23748 10.6098C3.0767 10.449 2.98588 10.23 2.98588 10.0022V9.99952C2.98588 9.77164 3.0767 9.55268 3.23748 9.39191C3.39906 9.23033 3.61721 9.14031 3.84509 9.14031H16.1385C16.3663 9.14031 16.5845 9.23033 16.7461 9.39191C16.9068 9.55269 16.9977 9.77164 16.9977 9.99952V10.0022C16.9977 10.4772 16.6125 10.8614 16.1385 10.8614Z" fill="#999ACC"/></svg></button>'); 
    
    

    $('#theme_search #auto-complete').attr('placeholder',theme.lang.searchPlaceholder);
    $('#theme_search .botao').html('<span class="ico_svg">'+ theme.icon.search +'</span>');
    $('#theme_search .botao.icon-search').removeClass('icon-search');


    $('.search-trigger').click(function(){   
        $('body').toggleClass('asideSearch-visible');         
        $('#theme_search input').val('');
        $('#theme_search input').autocomplete('destroy');
    });

    $("#theme_search input").autocomplete({
        delay: 300,
        minLength: 5,
        source: function(o, n) {
            $.ajax({
                url: "//api.awsli.com.br/v2/autocomplete/" + LOJA_ID,
                dataType: "json",
                data: {
                    q: o.term,
                    size: 3,
                    ttl: 300
                },
                success: function(p) {
                    n($.map(p.hits, function(q) {
                        console.log(q);
                        if (q.imagens) {
                            return {
                                label: '<span class="img"><img src="' + MEDIA_URL + "80x80/" + q.imagens[0].caminho + '?type=trim" /></span><span>' + q.nome + '</span>',
                                value: q.nome,
                                url: q.canonical_path
                            }
                        } else {
                            return {
                                label: '<span class="img"></span><span>' + q.nome + '</span>',
                                value: q.nome,
                                url: q.canonical_path
                            }
                        }
                    }))
                }
            })
        },
        open: function(n, o) {
            $(this).autocomplete("widget").css("z-index", 100000);
            $(this).autocomplete("widget").width($(this).parent().width())
        },
        select: function(n, o) {
            console.log(o);
            window.location = o.item.url
        }
    });
    $("#theme_search input").each(function() {
        $(this).data("ui-autocomplete")._renderItem = function(n, o) {
            return $("<li></li>").data("item.autocomplete", o).append("<a>" + o.label + "</a>").appendTo(n)
        }
    });
};

theme.build.account = function(template){
    $('body').append(theme.templates.account);
    let menu = $('<ul></ul>');
    if(theme.isLogged){
        menu.append('<li><a href="/conta/index">Meus dados</a></li>');
        menu.append('<li><a href="/conta/pedido/listar">Meus pedidos</a></li>');
        menu.append('<li><a href="/conta/logout">Sair</a></li>');
    }else{
        //menu.append('<li><a href="">Login</a></li>');
        menu.append('<li><form id="apx_sideLogin" action="/conta/login" method="post"><label>E-mail<input id="id_email" maxlength="128" name="email" type="text"></label><label>Senha<input id="id_senha" maxlength="32" name="senha" type="password"></label><div><button type="submit" class="botao principal">Entrar</button><button id="recoverPassword" data-toggle="modal"> <i class="icon-lock cor-secundaria"></i> Esqueceu a senha? </button></div></form></li>');
        menu.append('<li><a href="/conta/criar?next=conta_index&email=_">Cliente novo? Cadastre-se</a></li>');
    }
    menu.append('<li class="divider"></li>');
    // menu.append('<li><a href="">Meus dados</a></li>');
    // menu.append('<li><a href="">Meus pedidos</a></li>');
    // menu.append('<li><a href="">Rastrear pedidos</a></li>');
    
    //menu.append('<li><a href="">Fale com a gente</a></li>');
    $('#theme_account').append(menu);
    $('.account-trigger').click(function(){   
        $('body').toggleClass('asideAccount-visible');         
    });

    $('#recoverPassword').click(function(){
        let mail = $('#apx_sideLogin #id_email');
        $.get('/conta/recuperar_senha?email=' + mail.val(), function(data){
            let res = JSON.parse(data);
            console.log(res.mensagem);
            if(res.status == "erro"){
                mail.focus()
            }
            alert(res.mensagem);
        })
    });



}






var WS_PAPELANDIA = JSON.parse(sessionStorage.getItem('WS_PAPELANDIA'))
theme.functions = [];
theme.functions.WS_PAPELANDIA = function(){    
    if(WS_PAPELANDIA == undefined){
        $.getJSON('https://script.google.com/macros/s/AKfycbxlqi9JC8Z3PNzDFqjKENjioQsfRd7vzxFF5QyZ2m21hjjjtOgfdgDmiLkiz7QbMdg2dA/exec?action=read', function( data ) {
            var items = [];
            sessionStorage.setItem('WS_PAPELANDIA',JSON.stringify(data.records));
            WS_PAPELANDIA = JSON.stringify(data.records);
            theme.functions.WS_LOAD();
        });
    }else{
        theme.functions.WS_LOAD();
    }
};

function sessionStorageSize(){
    var _lsTotal = 0,
    _xLen, _x;
    for (_x in sessionStorage) {
        if (!sessionStorage.hasOwnProperty(_x)) {
            continue;
        }
        _xLen = ((sessionStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen;
    };
    if((_lsTotal / 1024).toFixed(2) > 5000){
        console.log('----- AVISO ------');
        console.log('Armazenamento de sessão ultrapassou o limite. Pode existir falha ao armazenar alguma informação. Contate o suporte');
        console.log('------------------');
    }
}

theme.functions.WS_LOAD = function(){
    sessionStorageSize();
    $('.listagem-item').each(function(){
        let me = $(this);
        let id = $(this).find('[data-trustvox-product-code]').attr('data-trustvox-product-code');
        let info = WS_PAPELANDIA.find(el => el.product_id == id);
        if(info){
            if(info.brand.length > 0){
                me.find('.info-produto').prepend('<b theme-content="brand">'+ info.brand +'</b>');
            }
            if(info.excerpt.length > 0){
                me.find('.info-produto').append('<p theme-content="excerpt">'+ info.excerpt +'</p>');
            }
            if(info.labels.length > 0){
                me.find('.info-produto').before('<div theme-content="labels"></div>');
                if(info.labels.includes(';')){
                    $.each(info.labels.split(';'), function(k, i){
                        me.find('[theme-content="labels"]').append('<div data-name="'+ i +'">'+ i +'</div>');    
                    })
                }else{
                    me.find('[theme-content="labels"]').append('<div  data-name="'+ info.labels +'">'+ info.labels +'</div>');
                }
            }
        }
    });

    if(theme.currentPage == "pagina-produto"){
        let info = WS_PAPELANDIA.find(el => el.product_id == window.PRODUTO_ID);
        if(info){
            if(info.labels.length > 0){
                $('.info-principal-produto').after('<div theme-content="labels"></div>'); 
                if(info.labels.includes(';')){
                    $.each(info.labels.split(';'), function(k, i){
                        $('.principal').find('[theme-content="labels"]').append('<div  data-name="'+ i +'">'+ i +'</div>');    
                    })
                }else{
                    $('.principal').find('[theme-content="labels"]').append('<div  data-name="'+ info.labels +'">'+ info.labels +'</div>');
                }
            }
        }
    }
    
    
};

theme.functions.contact = function(){
    if(theme.extra.telefone){
        $('.p_contact > ul').append('<li><b>Telefone</b><a href="tel:'+theme.extra.telefone+'" target="_blank"><span>' + theme.extra.telefone + '</span></a></li>');
    }

    if(theme.extra.whatsapp){
        $('.p_contact > ul').append('<li><b>WhatsApp</b><a href="https://wa.me/55'+theme.extra.whatsapp.replace('Whatsapp: ','').replace('(','').replace(')','').replace('-','').replaceAll(' ','').trim() +'" target="_blank"><span>' + theme.extra.whatsapp + '</span></a></li>');
    }
    if(theme.extra.email){
        $('.p_contact > ul').append('<li><b>E-mail</b><a href="mailto:'+theme.extra.email+'" target="_blank"><span>' + theme.extra.email + '</span></a></li>');
    }
    if(theme.extra.atendimento){
        $('.p_contact > ul').append('<li><b>Atendimento</b><span>' + theme.extra.atendimento + '</span></li>');
    }

    $('.p_contact > ul').append('<li><a href="#modalContato" data-toggle="modal" data-target="#modalContato"><i class="fa fa-comment-o"></i>Fale Conosco</a></li>');
};

theme.functions.productListItemEqualSize = function(){
    $(window).load(function(){
        if(theme.currentPage == "pagina-inicial"){
            $('[class*=vitrine]').each(function(){
                let className = $(this).attr('class').split('vitrine-');
                className = '.vitrine-' + className[1];
                if($(className + ' + [class^=theme_customBanners]').length > 0){
                    className = className + ' + div'    ;
                }
                $(className + ' + ul .listagem-item .info-produto .nome-produto').equalHeights();
                $(className + ' + ul .listagem-item .info-produto div:last-child').equalHeights();
                
            });
        }else{
            $('.listagem-item .info-produto .nome-produto').equalHeights();
            $('.listagem-item .info-produto div:last-child').equalHeights();
        }
        
    });
};
theme.functions.responsiveLogo = function(src){
    let logo_md = $('#cabecalho .logo img').attr('src');
    let logo_sm = src;
    $('#cabecalho .logo img').wrap('<picture id="theme_responsive-logo"></picture');
    $('#theme_responsive-logo').prepend('<source media="(max-width:1000px)" srcset="'+ logo_sm +'">');
    $('#theme_responsive-logo').prepend('<source media="(min-width:1001px)" srcset="'+ logo_md +'">');    
};
theme.functions.dateFormatNormalToISO = function(date_){
    let dateString = date_.split("/");
    let date = new Date(dateString[2], dateString[1] - 1, dateString[0]);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date = date.toISOString();
    return date;
}
theme.functions.dateFormaISOtoNormal = function(date_){
    let isoDateString = date_;
    let date = new Date(isoDateString);
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();
    let formattedDate = day + "/" + month + "/" + year;
    return formattedDate;
}
theme.functions.orderDetailsUpdate = function(){
    let txt = "";
    if($('#dt_entrega').length > 0){
        txt = txt + "Data da entrega: " + $('#dt_entrega').val() + '\n';
    }
    if($('#hr_entrega').length > 0){
        txt = txt +  "Período da entrega: " + $('#hr_entrega').val() + '\n';
        txt = txt +  "Horário da entrega: " + $('#hr_entrega').find('option:selected').attr('period_open') + '\n';
    }
    if($('#formularioObservacoes_2').length > 0){
        txt = txt +  "Observações: " + $('#formularioObservacoes_2').val() + '\n';
    }
    $('[name="cliente_obs"]').val(txt);

}
theme.functions.datepicker = function(){
    $('body').append('<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">');
    $('body').append('<script src="https://cdn.jsdelivr.net/gh/jquery/jquery-ui/ui/i18n/datepicker-pt-BR.js"></script>');
    $('#formularioObservacao').closest('.caixa-sombreada').hide();
    $('<div class="caixa-sombreada borda-principal" id="apx_schedule"><legend class="titulo cor-secundaria">Agendamento</legend> <div class="row-fluid"> <div class="span6 control-group"> <label class="control-label font-bold" for="">Data da entrega</label> <div class="controls"> <input type="text" id="dt_entrega" required placeholder="Selecione..."> </div></div><div class="span6 control-group"> <label class="control-label font-bold" for="">Período da entrega</label> <div class="controls"> <select id="hr_entrega" required> <option value="">Escolha a data...</option> </select> </div></div></div><div class="row-fluid"> <div class="span12 control-group"> <label class="control-label font-bold" for="">Observações do pedido</label> <div class="controls"> <textarea id="formularioObservacoes_2" rows="5"> </textarea> </div></div></div></div>').insertBefore($('#formularioObservacao').closest('.caixa-sombreada'));
    
    let db_controle_agendamento;
    if(db_controle_agendamento == undefined){
        $.getJSON(ws_url+ '&sheetName=db_controle_agendamento', function( data ) {
            var items = [];
            sessionStorage.setItem('db_controle_agendamento',JSON.stringify(data.records));
            db_controle_agendamento = data.records;
        });
    }

    
    $('#dt_entrega, #hr_entrega, #formularioObservacoes_2').change(function(){
        theme.functions.orderDetailsUpdate();
    });

    $('#dt_entrega').datepicker({
        beforeShowDay: function(date){
            let day = date.getUTCDay();
            let validDate = new Date();
            validDate.setDate(validDate.getDate() + 2)
            let available_days = schedule_config.filter(el => el.active == true && el.periods.length > 0).map(function(item){return item.weekday})
            let disabled_days =  schedule_details.filter(el => el.active == false).map(function(item){
                let disabledDateString = item.date;
                let disabledDateParts = disabledDateString.split("/");
                let disabledDate = new Date(disabledDateParts[2], disabledDateParts[1] - 1, disabledDateParts[0]);
                return disabledDate
            });
            if (date < validDate) {
                return [false, ""];
            }else{
                if(available_days.includes(day)){
                    if(disabled_days.find(el => el.getDate() == date.getDate() && el.getMonth() == date.getMonth() && el.getFullYear() == date.getFullYear())){
                        return [false,""];
                    }else{
                        return [true,""];
                    }
                }else{
                    return [false, ""]
                }
            }
            
        },
        onSelect: function(dateText, dateObj){
            let dateString = dateText;
            let dateParts = dateString.split("/");
            let _date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
            let day = _date.getUTCDay();
            
            
            let rules = schedule_details.find(el => el.date == dateText);
            if(!rules){
                rules = schedule_config.find(el => el.weekday == day);
            }
            let schedule_db = db_controle_agendamento.find(el => el.date == theme.functions.dateFormatNormalToISO(dateText));
            $('#hr_entrega').html('<option value="">Escolha a data...</option>');
            $.each(rules.periods, function(k, period){                
                if(schedule_db && schedule_db['delivery_count["'+ period.title +'"]']){
                    if(schedule_db['delivery_count["'+ period.title +'"]'] < period.delivery_limit){
                        $('#hr_entrega').append('<option value="'+ period.title +'" period_open="'+ period.open +'" period_close="'+ period.close +'">'+ period.title +' - '+ period.open+ ' às ' + period.close + '</option>');
                    }
                }else{
                    $('#hr_entrega').append('<option value="'+ period.title +'" period_open="'+ period.open +'" period_close="'+ period.close +'">'+ period.title +' - '+ period.open+ ' às ' + period.close + '</option>');                    
                }                
            });
        }
    });
};
theme.destaquesMenu = [];
// theme.destaquesMenu.push({
//     textoAlvo: 'Super Atacado',
//     textoDestaque: 'TOP 📦',
//     corHexa: '#F21154'
// });

theme.titulos = [];
theme.titulos.push({
    alvo: '.vitrine-lancamento',
    titulo: 'Lançamentos',
    subtitulo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
});
theme.titulos.push({
    alvo: '.vitrine-19373389',
    titulo: 'Super Atacado',
    subtitulo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
});
theme.titulos.push({
    alvo: '.marcas',
    titulo: 'Marcas',
    subtitulo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
});
theme.titulos.push({
    alvo: '.vitrine-19373387',
    titulo: 'Oferta Relâmpago',
    subtitulo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
});
theme.titulos.push({
    alvo: '.vitrine-19373402',
    titulo: 'Mais Vendidos',
    subtitulo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
});
theme.titulos.push({
    alvo: '.aproveite-tambem',
    titulo: 'Queridinhos dos PAPERBOSS',
    subtitulo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
});

theme.functions.destaquesMenu = function(){
    $.each(theme.destaquesMenu,function(k,item){
        if($('.menu a[title="'+ item.textoAlvo +'"]').length > 0){
            $('.menu a[title="'+ item.textoAlvo +'"] strong').css('color',item.corHexa);
            $('.menu a[title="'+ item.textoAlvo +'"]').append('<span class="flag-destaque" style="color:'+ item.corHexa +'; border-color:'+ item.corHexa +'">'+ item.textoDestaque +'</span>');
        }
    })
};

theme.functions.titulos = function(){
    $.each(theme.titulos,function(k,item){
        if($(item.alvo).length > 0){
            if($(item.alvo).children('strong,h4').length == 0){
                $(item.alvo).prepend('<div class="titulo-categoria"><strong>'+ item.titulo +'</strong><small>'+ item.subtitulo +'</small></div>');
            }else{
                $(item.alvo).children('strong,h4').text(item.titulo);
                $(item.alvo).children('strong,h4').after('<small>' + item.subtitulo + '</small>');
            }
        }
    })
};
theme.functions.unflexBanners = function(){
    $('.secao-banners .cheio .flexslider,.banner.vitrine .flexslider').each(function(){
        theme.functions.flexDestroy($(this).closest('.flexslider'));
    })
};
theme.functions.slickBanners = function(){
    $('.secao-banners .banner.cheio .slides').each(function(){
        let slickThis = $(this);
        slickThis.apx_slick(theme.settings.sliders.fullbanner);
    });

    $('[class^=theme_customBanners-]').each(function(){
        let class_ = $(this).attr('class');
        class_ = class_.includes(" ") ? class_.split(' ')[0] : class_;
        
        
        if(theme.settings.sliders[class_]){
            $(this).wrapInner('<ul class="slides"></ul>');
            $(this).find('ul.slides').apx_slick(theme.settings.sliders[class_]);
        }
    });
    
    $('.theme_tarja-full').apx_slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:false,
        dots:false        
    });

    $('#theme_categorySlider li').wrap('<div class="item"/>').contents().unwrap();
    $('#theme_categorySlider > .slides').apx_slick(theme.settings.sliders.categorySlider);
};

// theme.functions.lateralBannerFromPanelFunctions = function(ref){
//     flag = $('.banner.lateral img').length;
//     $('.banner.lateral img').each(function(k, i){
//         let trigger = $(this).attr('alt');   
//         //ITEM FUNDO MARCAS
//         if(trigger.includes('[marca:')){
//             let regExp;
//             regExp = /\[marca:(.*?)\]/;
//             let marca = regExp.exec(trigger)[1];
//             let marcaObj = $('.marcas img[alt="'+ marca +'"]');
//             if(marcaObj.length > 0){
//                 marcaObj.closest('a').css('background-image','url('+ marcaObj.attr('src') +')');
//                 marcaObj.next('<strong>'+ marcaObj.attr('alt') +'</strong>');
//             }
//             $(this).closest('li').length > 0 ? $(this).closest('li').remove() : $(this).parent().remove();
//         } 
//     });
// };

theme.currentBanners = [];
theme.functions.bannerFromPanelFunctions = function(ref){
    //CONTENT FROM "FULLBANNERS" ON LI PANEL
    
    theme.currentBanners.full = $('.secao-banners .cheio img').map(function(i){
        return {
            src : $(this).attr('src'),
            alt : $(this).attr('alt'),
            url : $(this).closest('a') ? $(this).closest('a').attr('href') : false,
            title : $(this).closest('li').text().trim()
        };
    });

    theme.currentBanners.lateral = $('.banner.lateral img').map(function(i){
        return {
            src : $(this).attr('src'),
            alt : $(this).attr('alt'),
            url : $(this).closest('a') ? $(this).closest('a').attr('href') : false,
            title : $(this).closest('li').text().trim()
        };
    });

    theme.currentBanners.vitrine = $('.banner.vitrine img').map(function(i){
        return {
            src : $(this).attr('src'),
            alt : $(this).attr('alt'),
            url : $(this).closest('a') ? $(this).closest('a').attr('href') : false,
            title : $(this).closest('li').text().trim()
        };
    });


    theme.currentBanners.tarja = $('.secao-banners .tarja img').map(function(i){
        return {
            src : $(this).attr('src'),
            alt : $(this).attr('alt'),
            url : $(this).closest('a') ? $(this).closest('a').attr('href') : false,
            title : $(this).closest('li').text().trim()
        };
    });


    $('.secao-banners .banner.cheio img,  .banner.vitrine img, .banner.lateral img, .banner.tarja img').each(function(){
        let trigger = $(this).attr('alt');   
        
        //CATEGORY SLIDER
        if(trigger.includes('[item-categoria]')){
            if($('#theme_categorySlider').length == 0){
                $('<div id="theme_categorySlider"><div class="slides"></div></div>').appendTo('#corpo .listagem');
            }
            $(this).closest('li').appendTo('#theme_categorySlider > .slides'); 
            return true;
        }

        //BENEFITS SLIDER
        // if(trigger.includes('[item-vantagem]')){
        //     if($('#theme_benefitsSlider').length == 0){
        //         $('<div id="theme_benefitsSlider"><div class="slides"></div></div>').insertAfter('.secao-banners .banner.cheio');
        //     }
        //     $(this).closest('li').appendTo('#theme_benefitsSlider > .slides'); 
        //     return true;
        // }

        //TESTIMONIALS SLIDER
        // if(trigger.includes('[item-depoimento]')){
        //     if($('#theme_testimonialSlider').length == 0){
        //         $('<div id="theme_testimonialSlider" class="listagem"><div class="titulo-categoria cor-principal"><i class="svg-ico cor-principal">'+ theme.icon.testimonials +'</i><strong>'+ theme.lang.testimonialsTitle +'</strong></div><div class="slides"></div></div>').prependTo('#corpo > .conteiner');
        //     }
        //     $(this).closest('li').appendTo('#theme_testimonialSlider > .slides'); 
        //     return true;
        // }

        //trigger ICONS
        if(trigger.includes('[icone-menu:')){
            let regExp = /\[iconeMenu:(.*?)\]/;
            let target = regExp.exec(trigger);
            let regExp2 = /\[posicao:(.*?)\]/;
            let position = regExp2.exec(trigger);
            if($('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').length == 1){
                let removeAfter = $(this).closest('li');
                $('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').closest('li').addClass('theme_icon theme_icon-' + (theme.isMobile ? 'Esquerda' : position[1]));
                $('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').prepend('<div class="theme_icon-item"></div>');
                $(this).appendTo('.menu.superior .nivel-um > li > a[title="' + target[1] +'"] .theme_icon-item');
                removeAfter.remove();    
            }
            return true;
        }

        //THEME ICONS
        // if(trigger.includes('[icone-tema:')){
        //     let regExp = /\[iconeTema:(.*?)\]/;
        //     let target = regExp.exec(trigger);
        //     //terminar aqui
        //     return true;
        // }

        //BANNERS WITH COUNTDOWN
        // if(trigger.includes('[timer:')){
        //     let regExp = /\[timer:(.*?)\]/;
        //     let info = regExp.exec(trigger);
        //     let removeAfter = $(this).closest('li');
            
        //     $(this).closest('li').contents().wrapAll('<div class="item apx_timer apx_timer-onBanner" data-end="'+ info[1] +'"/>');
        //     $(this).closest('li').find('.apx_timer').append('<div class="apx_timer-Timer"><span class="d"></span><span class="h"></span><span class="m"></span><span class="s"></span></div>')
        // }
        
        //SET LABEL ON PRODUCT WITH SPECIFIC CATEGORY ID
        // if(trigger.includes('[selo-produto:')){
        //     let regExp = /\[selo-produto:(.*?)\]/;
        //     let target = regExp.exec(trigger);
        //     let removeAfter = $(this).closest('li');
        //     if(target[1]){
        //         $(this).addClass('theme_seals');
        //         if($('.prod-cat-' + target[1]).length > 0){
        //             $(this).appendTo('.prod-cat-' + target[1] + ' .bandeiras-produto');
        //         }
        //         removeAfter.remove();    
        //     }
        // }

        //COVER MARCA
        // if(trigger.includes('[marca:')){
        //     let regExp = /\[marca:(.*?)\]/;
        //     let target = regExp.exec(trigger);
        //     let removeAfter = $(this).closest('li');
        //     if(target[1]){
        //         if($('img[alt="' + target[1] + '"]').length > 0){
        //             $(this).addClass('brand-cover');
        //             $(this).insertBefore('img[alt="' + target[1] + '"]');
        //             $('img[alt="' + target[1] + '"]').after('<strong>'+ target[1].toLowerCase() +'</strong>');
        //         }
        //         removeAfter.remove();    
        //     }
        // }
        console.log(trigger)
        //REDUCE IMAGES WHEN HAS A MOBILE VIEW
        if(!trigger.includes('[mobile]') && theme.isMobile){
            $(this).closest('li').remove();       
            console.log('a')                 
        }
        if(trigger.includes('[mobile]') && !theme.isMobile){
            $(this).closest('li').remove();  
            console.log('b')                                       
        }


        //SOBRE NOS
        
        if(trigger.includes('[item-sobre-nos]')){
            let removeAfter = $(this).closest('li');
            $('.secao-secundaria').append('<div class="container" id="sobre-nos"></div>')
            let sobre = $('<div class="'+ (trigger.includes('[mobile]') ? 'hidden-desktop' : 'hidden-phone') +'"></div>');
            sobre.append('<p>'+ $(this).next('.info-banner').text() +'</p>')
            sobre.append($(this));            
            sobre.appendTo('#sobre-nos');
            
            removeAfter.remove();  
            return true;
        }


        //SET TOPBAR SLIDER
        if(trigger.includes('[tarja-texto]')){
            let regExp;
            regExp = /\[fundo:(.*?)\]/;
            let fundo = regExp.exec(trigger)[1];
            regExp = /\[texto:(.*?)\]/;
            let texto = regExp.exec(trigger)[1];
            
            let style = "";
            style = style +"color:" + texto + ';';
            style = style + "background:" + fundo + ';';
            let description = $(this).next('.info-banner').length > 0 ? $(this).next('.info-banner').text().trim() : false;
            let link = $(this).closest('li').find('a') ? $(this).closest('li').find('a').attr('href') : false;
            console.log(link);
            if($('.theme_tarja-full').length == 0){
                $('<div class="theme_tarja-full"></div>').prependTo('body');
            }
            if(link){
                console.log('tem link');
                $('<div class="theme_tarja-full-item" style="'+ style +'"><a style="'+ style +'" href="'+ link +'"><p>'+ description +'</p></a></div>').appendTo('.theme_tarja-full');
            }else{
                console.log('nao tem link');
                $('<div class="theme_tarja-full-item" style="'+ style +'"><p>'+ description +'</p></div>').appendTo('.theme_tarja-full');
            }
            
            $(this).next('.info-banner').remove();
            $(this).closest('li').remove();
        }

        //SET BANNERS BETWEEN SECTIONS
        if(trigger.includes('[vitrine-')){
            let regExp = /\[vitrine-(.*?)\]/;
            let match = regExp.exec(trigger);
            let above = trigger.includes('[acima]') ? true : false
            if($('.vitrine-' + match[1]).length == 1){
                if(above){
                    if($('.theme_customBanners-' + match[1] + '.before').length == 0){
                        $('.vitrine-' + match[1]).after('<div class="theme_customBanners-' + match[1] +' before "></div>');
                    }
                }else{
                    if($('.theme_customBanners-' + match[1] + '.after').length == 0){
                        $('.vitrine-' + match[1] + ' + ul').after('<div class="theme_customBanners-' + match[1] +' after "></div>');
                    }    
                }                
                $(this).closest('li').appendTo('.theme_customBanners-' + match[1] + (above ? '.before' : '.after'));               
            }
        }           
    });

    $('.secao-banners, .banner.lateral, .banner.vitrine, .banner-tarja').each(function(){
        $(this).find('img').length == 0 ? $(this).remove() : false;
    });

    
    
 };
 
theme.functions.createField = function (oObj){
    let field = $('<div class="theme-customInputElement"></div>');    
    field.append('<label>'+oObj.label+'</label>');
    
    if("text,number,password,tel,email,date,color".split(',').includes(oObj.type)){
        field.append('<input type="'+ oObj.type +'" name="theme_field-'+ oObj.id +'"/>');
    }
    if(oObj.type == "textarea"){
        field.append('<textarea rows="4" name="theme_field-'+ oObj.id +'"></textarea>');
    }
    if(oObj.type == "select"){
        let select = $('<select name="theme_field-'+ oObj.id +'"></select>');
        $.each(oObj.list, function(list_, list_value){
            select.append('<option value="'+list_value+'">'+list_value+'</option>');
        });
        field.append(select);
    }
    if(oObj.type == "boolean"){
        let select = $('<select name="theme_field-'+ oObj.id +'"></select>');
        select.append('<option value="true">Sim</option>');
        select.append('<option value="false">Não</option>');
        field.append(select);
    }
    return field;

};

theme.functions.beforeInit = function(){
//custom content
};

theme.templates = [];

theme.functions.saveBrands = function(){
    $('[itemprop="brand"]').each(function(){
        let name = $(this).find('a').text();
        let src = $(this).find('a').attr('href');
        if(!localStorage.getItem('brand_' + name)){
            $.get(src,function(data){
                let brand = {
                    img: MEDIA_URL + window.LOJA_ID.toString().slice(0,4) + '/' + window.LOJA_ID + '/arquivos/marca_' + name.toLowerCase() + '.png',
                    description: $(data).find('.marca-info p').text()
                }                
                localStorage.setItem('brand_' + name, JSON.stringify(brand));                
                theme.functions.brandLoaded();
            })
        }else{
            theme.functions.brandLoaded();
        }
    });
}
theme.functions.init = function(){
    theme.isLogged = $('.bem-vindo > span').text() != "identifique-se" ? true : false;
    theme.userFirstname = theme.isLogged ? $('#cabecalho .pequeno.dropdown-toggle[href$="/conta/login"]').text().trim().split(' ')[1] : 'Visitante';
    $('#cabecalho .logo').find('img').attr('src',MEDIA_URL + window.LOJA_ID.toString().slice(0,4) + '/' + window.LOJA_ID + '/arquivos/logo_papelandia.svg');
    theme.logo = $('<div></div>').append($('#cabecalho .logo').clone()).html();
    //theme.logo = $('<div></div>').append($('#cabecalho .logo').clone()).html();
    //theme.logo = $(theme.logo).find('img').attr('src',MEDIA_URL + window.LOJA_ID.toString().slice(0,4) + '/' + window.LOJA_ID + '/arquivos/logo_papelandia.svg')
    theme.storePhone = $('.barra-inicial .canais-contato .icon-phone').parent().text().replace('Telefone: ','').trim();
    theme.storeSkype = $('.barra-inicial .canais-contato .fa-skype').parent().text().replace('Skype: ','').trim();
    theme.storeWhatsapp = $('.barra-inicial .canais-contato .fa-whatsapp').parent().text().replace('Whatsapp: ','').trim();
    theme.storeMail = "";
    theme.storePeriod = "";
    theme.storeDescription = $('.sobre-loja-rodape > p').text();

    theme.primaryColor = $('[name="theme-color"]').attr('content');
    if(theme.primaryColor){document.documentElement.style.setProperty('--primaryColor', theme.primaryColor);}
    //try{theme.buttonColor = getComputedStyle(document.querySelector('.botao.principal.botao-comprar')).backgroundColor;}catch(e){console.log(e)}

    theme.currentPage = $('body').attr('class').split(' ')[0].trim();
    theme.searchForm = $('<div></div>').append($('#cabecalho .busca #form-buscar').first().clone()).html();
    theme.socialIcons = $('<div></div>').append($('.barra-inicial .lista-redes a').clone()).html();

    theme.headerMenu = $('<div></div>').append($('.menu.superior').clone()).html();
    theme.footerCategories = $('<div></div>').append($('.links-rodape-categorias > ul').clone()).html();
    theme.footerPages = $('<div></div>').append($('.links-rodape-paginas > ul').clone()).html();

    theme.footerSeals = $('<div></div>').append($('#rodape .selos').clone()).html();
    theme.footerPayments = $('<div></div>').append($('#rodape .bandeiras-pagamento').clone()).html();
    theme.footerGateways = $('<div></div>').append($('#rodape .gateways-rodape').clone()).html();
    theme.headerCart = $('<div></div>').append($('#cabecalho .carrinho').clone()).html();
    theme.newsletter = $('<div></div>').append($('#barraNewsletter').clone()).html();

    theme.icon = {};
    theme.icon.sideCartClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>';
    theme.icon.cart = '<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6939 9.04691V9.04601C19.6279 7.21884 18.1274 5.77031 16.2982 5.77145C13.1055 5.76855 7.34103 5.76855 4.13458 5.76855C2.28737 5.76855 0.77907 7.24117 0.73403 9.0873V9.08819C0.646171 12.7724 0.792005 16.2238 1.34946 19.2607C1.35147 19.2676 1.35236 19.2748 1.35348 19.2817C1.67815 20.86 3.06671 21.9919 4.67798 21.9919C7.536 21.9999 12.8845 21.9999 15.7388 21.9999C17.3541 21.9999 18.7466 20.864 19.0713 19.2817C19.0722 19.2777 19.0733 19.2737 19.0742 19.2688C19.7255 15.8602 19.8165 12.4534 19.6937 9.04716L19.6939 9.04691ZM17.6979 9.11893C17.8138 12.3737 17.7349 15.6295 17.1135 18.8862C16.9777 19.5355 16.4041 20.002 15.739 20.002C12.8869 20.002 7.54043 20.002 4.68105 19.994H4.67815C4.02282 19.994 3.45642 19.5384 3.31548 18.9C2.78008 15.9759 2.64719 12.6675 2.73104 9.13505C2.75 8.37376 3.37233 7.76632 4.13453 7.76632C7.34133 7.76632 13.1043 7.76633 16.297 7.76833C16.297 7.76833 16.297 7.76922 16.2979 7.76922C17.0512 7.76833 17.6695 8.3657 17.6974 9.11877L17.6979 9.11893Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.71324 13.7999L5.7652 13.8008L5.80712 13.7967C5.99599 13.7758 6.75125 13.638 6.76421 12.8047C6.7651 12.7326 6.77112 12.3232 6.78026 11.3702C6.78517 10.8187 6.34276 10.3663 5.79132 10.3612C5.23987 10.3551 4.78834 10.7987 4.78229 11.3501C4.77337 12.2971 4.76624 12.7745 4.76624 12.7745V12.8015C4.76624 13.336 5.1859 13.7726 5.71327 13.7996L5.71324 13.7999ZM13.6429 12.8049L13.6438 12.8528L13.6478 12.9037L13.6518 12.9335C13.6857 13.2303 13.8226 13.425 13.9845 13.5539C14.1602 13.7077 14.3901 13.8007 14.6419 13.8007C14.6419 13.8007 15.6549 13.7407 15.64 12.7747C15.6391 12.7027 15.6331 12.2973 15.6239 11.3503C15.619 10.7989 15.1664 10.3553 14.6149 10.3614C14.0646 10.3663 13.6208 10.8189 13.626 11.3704C13.636 12.3234 13.642 12.7331 13.6429 12.8049ZM15.5969 8.49429C15.5789 7.0288 15.5579 5.59124 15.5349 4.91398C15.4451 2.15672 13.2863 0 10.6899 0H9.71587C7.11942 0 4.96178 2.15672 4.87079 4.91398C4.84871 5.59118 4.82686 7.0288 4.8088 8.49429C4.80189 9.04574 5.2443 9.49927 5.79574 9.50532C6.34719 9.51223 6.79964 9.07071 6.80677 8.51929C6.82484 7.06985 6.84579 5.64923 6.86765 4.97889C6.92161 3.33147 8.16433 1.99797 9.71567 1.99797H10.6897C12.241 1.99797 13.4839 3.33165 13.5377 4.97889C13.5598 5.64918 13.5816 7.06985 13.5985 8.51929C13.6055 9.07074 14.0581 9.51228 14.6096 9.50532C15.161 9.4993 15.6037 9.04574 15.5965 8.49429H15.5969Z" fill="black"/></svg>';
    theme.icon.wishlist = '<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4044 2.34364C9.68656 -0.685058 5.46541 -0.681774 2.61757 1.79711C-0.47198 4.48675 -0.659152 8.96017 1.18097 12.6895C4.70442 19.8319 12.1177 21.956 12.1177 21.956C12.3217 22.0147 12.537 22.0147 12.7407 21.956C12.7407 21.956 20.144 19.832 23.6679 12.6895C25.5079 8.95978 25.3198 4.48655 22.2302 1.79711C19.4055 -0.66267 14.9513 -0.503699 12.4048 2.34364H12.4044ZM12.427 19.6882C11.0998 19.2252 5.87244 17.1067 3.20102 11.6926C1.82069 8.8938 1.77896 5.51574 4.0969 3.49746C6.29185 1.58523 9.6734 1.87497 11.4344 4.81463C11.6699 5.20799 12.0564 5.37349 12.4158 5.37701C12.8024 5.37927 13.2046 5.20246 13.4377 4.77086C14.9408 1.9831 18.5645 1.59452 20.7502 3.49774C23.0691 5.51588 23.0264 8.89395 21.646 11.6929C18.9745 17.107 13.7561 19.2256 12.429 19.6885H12.4268L12.427 19.6882Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4236 15.8307C13.4236 15.8307 17.8507 14.6318 18.8288 10.1011C18.9606 9.49265 18.573 8.89302 17.9657 8.76122C17.3573 8.63044 16.7576 9.01802 16.6258 9.62542C15.9384 12.8096 12.8331 13.6559 12.8331 13.6559C12.2324 13.8194 11.8776 14.4391 12.041 15.0385C12.2033 15.6391 12.823 15.994 13.4236 15.8305V15.8307Z" fill="black"/></svg>';
    theme.icon.contact = '<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99451 17.2229C4.7501 18.1187 4.8405 19.0905 5.27944 19.9455C5.92643 21.2066 7.22607 22 8.64462 22H9.29601C9.61853 22 9.92336 21.8593 10.1324 21.6158L13.8948 17.223H19.5224C22.1448 17.223 24.2708 15.097 24.2708 12.4746V4.74834C24.2708 3.48825 23.7702 2.28123 22.8798 1.39101C21.9896 0.500854 20.7813 0 19.5224 0H4.74834C3.48944 0 2.28123 0.500596 1.39101 1.39101C0.500854 2.28117 0 3.48843 0 4.74834V12.4746C0 13.7335 0.500596 14.9417 1.39101 15.832C2.28117 16.7221 3.48944 17.223 4.74834 17.223H4.99495L4.99451 17.2229ZM8.78999 19.7991H8.64482C8.05162 19.7991 7.50804 19.468 7.23734 18.9397C6.96542 18.4125 7.01283 17.7776 7.35844 17.2944C7.5687 17.0016 7.73475 16.7695 7.73475 16.7695C8.18155 16.0662 8.05063 15.0221 6.84459 15.0221H4.74836C4.07263 15.0221 3.42463 14.7536 2.94692 14.2761C2.46941 13.7986 2.20095 13.1504 2.20095 12.4747V4.74838C2.20095 4.07265 2.46943 3.42465 2.94692 2.94694C3.42443 2.46943 4.07263 2.20097 4.74836 2.20097H19.5225C20.1982 2.20097 20.8462 2.46945 21.3239 2.94694C21.8014 3.42445 22.0699 4.07265 22.0699 4.74838V12.4747C22.0699 13.8809 20.9287 15.0211 19.5224 15.0221H13.3885C13.0672 15.0221 12.7611 15.1619 12.5521 15.4063L8.78999 19.7991Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.44394 7.24432H17.8513C18.4576 7.24432 18.9518 6.75134 18.9518 6.14389C18.9518 5.53644 18.4576 5.04346 17.8513 5.04346H6.44394C5.83772 5.04346 5.34351 5.53644 5.34351 6.14389C5.34351 6.75134 5.83772 7.24432 6.44394 7.24432Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.44394 12.017H11.2033C11.8108 12.017 12.3038 11.524 12.3038 10.9166C12.3038 10.3091 11.8108 9.81616 11.2033 9.81616H6.44394C5.83772 9.81616 5.34351 10.3091 5.34351 10.9166C5.34351 11.524 5.83772 12.017 6.44394 12.017Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9789 12.017H17.851C18.4573 12.017 18.9515 11.524 18.9515 10.9166C18.9515 10.3091 18.4573 9.81616 17.851 9.81616H14.9789C14.3714 9.81616 13.8784 10.3091 13.8784 10.9166C13.8784 11.524 14.3714 12.017 14.9789 12.017Z" fill="black"/></svg>';
    theme.icon.search = '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3957 22L15.5833 17.1876C13.9504 18.4766 11.8881 19.2501 9.625 19.2501C4.32552 19.2787 0 14.9532 0 9.62504C0 4.32554 4.32547 0 9.625 0C14.9245 0 19.2786 4.32549 19.2786 9.62504C19.2786 11.8594 18.5052 13.9219 17.2161 15.5834L22 20.3958L20.3957 22ZM9.6249 2.29157C5.58578 2.29157 2.29156 5.58596 2.29156 9.62494C2.29156 13.6641 5.58573 16.9583 9.6249 16.9583C13.664 16.9583 16.9869 13.6927 16.9869 9.62494C16.9869 5.58581 13.6927 2.29157 9.6249 2.29157Z" fill="#F21154"/></svg>';
    theme.icon.account = '<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9038 5.10348C14.9038 3.75031 14.3655 2.45198 13.4087 1.49516C12.4519 0.538335 11.1535 0 9.80036 0H7.95274C6.59957 0 5.30215 0.538369 4.34442 1.49516C3.38759 2.45198 2.85034 3.75031 2.85034 5.10348V6.50767C2.85034 9.69956 5.43809 12.2882 8.6309 12.2882H9.12334C12.3152 12.2882 14.9039 9.69962 14.9039 6.50767L14.9038 5.10348ZM12.9064 5.10348V6.50767C12.9064 8.59692 11.2126 10.2907 9.12335 10.2907H8.6309C6.54165 10.2907 4.84783 8.59692 4.84783 6.50767V5.10348C4.84783 4.27952 5.17442 3.4895 5.75672 2.90723C6.33991 2.32495 7.12992 1.99748 7.95297 1.99748H9.80059C10.6246 1.99748 11.4146 2.32496 11.9968 2.90723C12.5791 3.48949 12.9066 4.27957 12.9066 5.10348H12.9064Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.000171549 18.2089C0.000171549 19.0768 0.47545 19.8628 1.40927 20.4701C2.92429 21.4558 5.88453 22 8.85568 22C11.8268 22 14.7869 21.4556 16.3021 20.4701C17.2359 19.8628 17.7103 19.0768 17.7103 18.2089C17.7103 13.9784 13.7814 10.4629 8.85545 10.4629C3.92985 10.4629 0 13.9785 0 18.2089H0.000171549ZM1.9976 18.2089C1.9976 14.9909 5.10856 12.4603 8.85562 12.4603C12.6017 12.4603 15.7131 14.991 15.7131 18.2089C15.7131 18.3768 15.5891 18.5016 15.4393 18.6285C15.2387 18.8003 14.977 18.9481 14.6722 19.0839C13.2631 19.7101 11.0579 20.0028 8.85574 20.0028C6.65366 20.0028 4.44845 19.7101 3.03923 19.0839C2.73472 18.9481 2.473 18.8003 2.27216 18.6285C2.12236 18.5016 1.99752 18.3768 1.99752 18.2089H1.9976Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.50137 16.8735L7.50939 16.8715C7.50939 16.8715 6.90725 16.9054 6.43866 16.7805C6.06325 16.6815 5.64859 16.4909 5.43104 16.0475C5.18827 15.5522 4.59018 15.3475 4.09482 15.5901C3.60036 15.8328 3.39572 16.4309 3.63737 16.9263C4.1967 18.0659 5.24422 18.5791 6.18809 18.773C7.13687 18.9678 7.95992 18.818 8.00786 18.8009C8.53129 18.627 8.81373 18.0607 8.63899 17.5384C8.47915 17.0571 7.98691 16.7787 7.50137 16.8735Z" fill="black"/></svg>';
    theme.icon.newsletter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g></svg>';
    theme.icon.filter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z"/></g></g></svg>';
    theme.icon.seeMore = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g></svg>';
    theme.icon.close = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>';
    theme.icon.menu = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 22.9998C7.44772 22.9998 7 23.4475 7 23.9998C7 24.552 7.44772 24.9998 8 24.9998V22.9998ZM40 24.9998C40.5523 24.9998 41 24.552 41 23.9998C41 23.4475 40.5523 22.9998 40 22.9998V24.9998ZM8 10.9998C7.44772 10.9998 7 11.4475 7 11.9998C7 12.552 7.44772 12.9998 8 12.9998V10.9998ZM40 12.9998C40.5523 12.9998 41 12.552 41 11.9998C41 11.4475 40.5523 10.9998 40 10.9998V12.9998ZM8 34.9998C7.44772 34.9998 7 35.4475 7 35.9998C7 36.552 7.44772 36.9998 8 36.9998V34.9998ZM40 36.9998C40.5523 36.9998 41 36.552 41 35.9998C41 35.4475 40.5523 34.9998 40 34.9998V36.9998ZM8 24.9998H40V22.9998H8V24.9998ZM8 12.9998H40V10.9998H8V12.9998ZM8 36.9998H40V34.9998H8V36.9998Z" fill="#231F20"/></svg>';
    
    theme.templates.headerApp = '<div id="f_header"> <div class="conteiner-fluid"> <div class="row-flex align-items-center"> <div class="col justify-content-center" id="theme_header-back"></div><div class="col justify-content-center" id="theme_header-logo"></div><div class="col" id="theme_header-functions-app"> <ul></ul> </div></div></div></div>';
    
    theme.templates.header = '<div id="p_header"> <div class="conteiner-fluid"> <div class="row-flex align-items-center"> <div class="col-auto justify-content-center" id="theme_header-logo"></div><div class="col justify-content-center" id="theme_search"></div><div class="col-auto justify-content-center" id="theme_header-functions-block"> <ul id="theme_header-functions"></ul> </div></div><div class="row-flex align-items-center"> <div class="col justify-content-center" id="theme_header-menu"></div></div></div></div></div></div>';
    if (!theme.templates.header) theme.templates.header = '<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="col" id="theme_header-logo"><button type="button" id="theme_header-menu-trigger"></button></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col"><ul id="theme_header-functions"></ul></div></div></div></div>';
    if (!theme.templates.search) theme.templates.search = '<div class="theme_aside theme_search right"><div class="theme_aside-header"><button type="button" class="search-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.searchTitle +'</span></div><div class="theme_aside-content" id="theme_search"></div></div>';
    if (!theme.templates.account) theme.templates.account = '<div class="theme_aside theme_account right"><div class="theme_aside-header"><button type="button" class="account-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.accountTitle +'</span></div><div class="theme_aside-content" id="theme_account"></div></div>';
    if (!theme.templates.filters) theme.templates.filters = '<div class="theme_aside theme_filter right"><div class="theme_aside-header"><button type="button" class="filter-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.filtersTitle +'</span></div><div class="theme_aside-content" id="theme_filter"></div></div>';
    if (!theme.templates.footer){
        theme.templates.footer = '<div class="row-flex justify-content-between">' + 
        (theme.settings.footer.institutional == true ? '<div class="col-auto"><div id="theme_footer-content-institutional"></div></div>' : '') +
        (theme.settings.footer.pages == true ? '<div class="col-auto"><h4>'+ theme.lang.footerTitle1 +'</h4><div id="theme_footer-content1"></div></div>' : '') +
        (theme.settings.footer.categories == true ?  '<div class="col-auto"><h4>'+ theme.lang.footerTitle2 +'</h4><div id="theme_footer-content2"></div></div>' : '') +
        (theme.settings.footer.payments == true ? '<div class="col-auto"><h4>'+ theme.lang.footerTitle3 +'</h4><div id="theme_footer-content3"></div></div>' : '' ) +
        (theme.settings.footer.newsletter == true ? '<div class="col-auto"><h4>'+ theme.lang.footerTitle4 +'</h4><div id="theme_footer-content4"></div></div>' : '') +
        '</div>';  
    } 
    if (!theme.templates.asideMenu) theme.templates.asideMenu = '<div class="theme_aside theme_menu left"><div class="theme_aside-header"><span>'+ theme.lang.menuTitle +'</span><button type="button" class="theme_menu-trigger" >'+ theme.icon.sideCartClose +'</button></div><div class="theme_aside-content" id="theme_menu-aside"></div></div>';
    // console.log(theme.templates.header);
    // console.log(theme.templates.search);
    // console.log(theme.templates.account);
    // console.log(theme.templates.filters);
    try{
        $('html').attr('alpix-theme',window.LOJA_ID);
        try{
            $(document).ready(function(){
                try{
                    console.log('load functions - ' + theme.currentPage)
                    theme.functions[theme.currentPage]();
                }catch(e){
                    console.log(e)
                }
                theme.functions.productListActions();    
            });
        }catch(e){}

        $('body').append('<div class="theme_aside-shadow"></div>');
        
        if($('.pagina-carrinho').length == 0){theme.build.header(2);theme.build.asideMenu();}else{
            theme.build.headerApp();
        }
        theme.functions.saveBrands();
        theme.build.footer(1);
        theme.build.search(1);    
        theme.build.account(1);    
        theme.functions.sideCartSet();
        theme.functions.sideCartActions();
        theme.functions.resizeBanners();
        theme.functions.unwrapProductList();
        theme.functions.flags();    
        theme.functions.productListImageSize(theme.settings.imageSize);
        theme.functions.unflexBanners();
        //theme.functions.lateralBannerFromPanelFunctions();
        $('.listagem > .titulo-categoria').each(function(k, i){
            $(this).next('ul').addBack().wrapAll('<div id="lista_'+ k + '" class="lista_'+ k + '"></div>');
        });
        theme.functions.bannerFromPanelFunctions();        
        theme.functions.slickBanners();
        theme.functions.productListItemEqualSize();
        theme.watch();
        
        const el = document.querySelector("#cabecalho")
        const observerMenu = new IntersectionObserver( 
        ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
        { threshold: [1] }
        );    
        observerMenu.observe(el);    
        $('body').css('opacity','1');
        $('.theme_aside-shadow').click(function(){
            $('body').removeClass('sideCart-visible').removeClass('asideSearch-visible').removeClass('asideMenu-visible').removeClass('asideAccount-visible');
        })
    }catch(e){
        $('body').css('opacity','1')
    }
};
theme.functions.unwrapProductList = function(){
    $('.listagem > ul > li > ul > li').attr('class','');
    $('.listagem-item').unwrap().unwrap().unwrap().wrap('<li/>');
    if($('.listagem-linha.flexslider').length){
        $('.listagem-linha.flexslider').each(function(){
            let listagemUL = $(this).parent('ul');
            let listagemQtdLinhas = $(this).parent('ul').attr('data-produtos-linha');
            //theme.settings.sliders.products.slidesToShow = parseInt(listagemQtdLinhas);
            theme.functions.flexDestroy($(this));
            listagemUL.find('.listagem-linha').apx_slick(theme.settings.sliders.products);
            $(this).removeClass('flexslider');

            listagemUL.find('[data-imagem-caminho]').each(function(){
                $(this).after('<img src="'+ $(this).attr('data-imagem-caminho')+'" class="imagem-zoom"/>');
            })
        })   
    }
};
theme.functions.resizeBanners = function(){
    $('.secao-banners img').each(function(){
        let url = $(this).attr('src').replace('400x400/','700x700/').replace('1140x1140/','1920x1920/');
        $(this).attr('src',url);

    })
};

theme.functions.blockPage = function (status){
    if(status){
        $('body').append('<div id="apx_loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
    }else{
        $('#apx_loader').remove();
    }   
};

theme.watch = function(){
    $(window).resize(function(){
        theme.functions.sideCartScroll();
        theme.functions.productListImageSize(theme.settings.imageSize);
    });
    $(window).scroll(function(){
        theme.functions.sideCartScroll();
    })
    $('#rodape > div:last-child a').attr('href',theme.info.ref);
    $('#rodape > div:last-child a').before('<a href="'+ theme.info.external +'" target="_blank">'+ theme.info.icon +'</a>');        
}

theme.functions.productListImageSize = function(param){
    if(theme.settings.productListImageFill){
        $('.listagem-item').addClass('theme-imageFill');
    }
    
    let h = $('.listagem-item').first().find('.imagem-produto').innerWidth() * param;
    $('.listagem-item .imagem-produto').css('height',h + 'px');
    


    $('.listagem-item .imagem-produto').each(function(){
        $(this).find('img').each(function(){
            let url = $(this).attr('src').replace('300x300/','500x500/').replace('400x400/','600x600/');
            $(this).attr('src',url);
        })
    })

    //$('.listagem-item .imagem-produto').css('max-height','unset');
}

theme.functions.flags = function(){
    $('.bandeira-promocao').each(function(){
        let i = $(this).text().replace('Desconto','').trim();
        $(this).text(i);
    });
}

theme.functions.productListActions = function(){
    $('.listagem-item').each(function(){
        let hasVariants = $(this).find('.botao-comprar-ajax').length > 0 ? true : false;
        let id = $(this).attr('class').split(' ')[1].replace('prod-id-','').trim();
        let url = $(this).find('.info-produto > a:first-child').attr('href');       
        $(this) .find('.imagem-produto').wrap('<a href="'+ url +'"></a>');
        let block = $('<div id="theme_list-functions"></div>');
        // if(hasVariants && id && $('.pagina-produto').length == 0){
        //     block.append($('<a href="/carrinho/produto/'+ id +'/adicionar" class="theme_buttonBuy-ajax">'+ theme.icon.cart +'<span>'+ theme.lang.productListAdd +'</span></a>'));
        // }else{
            block.append($('<a href="'+ url +'"><span>'+ theme.lang.productListAdd +' <i class="fa fa-chevron-right"></i></span></a>'));
        // }        
        $(this).append(block);        
    });
    $('.listagem-item .acoes-produto, .listagem-item .acoes-produto-responsiva').remove();    

    
}
theme.functions.sideCartScroll = function(){
    if($("#theme_sideCart-content .scroll").length){
        let h = $('#theme_sideCart-header').innerHeight() + $('#theme_sideCart-content .table-footer').innerHeight() + $('#theme_sideCart-footer').innerHeight();
        let maxheight = $('#theme_sideCart').innerHeight();
        $('#theme_sideCart-content .scroll').css('height','calc('+ maxheight +'px - ' + h + 'px');
    }
}
theme.functions.sideCartActions = function(html){
    $(document).on("click", "#theme_sideCart .table-body .excluir a, #theme_sideCart .table-body .quantidade a:not(.atualizar-quantidade), #theme_sideCart .cupom-sucesso a", function(p) {
        p.preventDefault();
        theme.functions.blockPage(true);
        var n = $(this);
        var o = $(this).attr("href");
        let hasZero = false;
        if(o.includes('atualizar')){
            hasZero = parseInt(o.split('atualizar/')[1]) == 0 ? true : false;
        }
        if(hasZero == true){
            theme.functions.blockPage(false);
            return false;
        }else{
            $.ajax({
                url: $(this).attr("href").replace("https:", ""),
                dataType: "json"
            }).done(function(q) {
                if (q.status !== "sucesso") {
                    alert(q.mensagem);
                } else {
                    $("#theme_sideCart-content").load("/carrinho/mini", function() {
                        theme.functions.sideCart()
                    })
                }
            }).fail(function(q) {
                window.location = o
            }).always(function() { theme.functions.blockPage(false); })
        }
        
    });

    $('#theme_header-functions > li > .carrinho > a').click(function(e){
        e.preventDefault();
        if($('#theme_sideCart #theme_sideCart-content').is(':empty')){
            $("#theme_sideCart-content").load("/carrinho/mini", function() {
                theme.functions.sideCart()
            })
        }else{
            theme.functions.sideCartToggle();
        }
    })

    $('body').on('click','#theme_sideCart [for="usarCupom"]',function(){
        $(this).next('.controls').toggle();
        theme.functions.sideCartScroll();
    });
}
theme.functions.sideCartSet = function(){
    $(document).on("click", ".theme_buttonBuy-ajax", function(o) {
        o.preventDefault();
        var n = $(this);
        let previousText = n.attr('text');
        n.addClass("loading");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(p) {
            if (p.status !== "sucesso") {
                alert(p.mensagem);
            } else {
                $("#theme_sideCart-content").load("/carrinho/mini", function() {
                    theme.functions.sideCart()
                })
            }
        }).fail(function(p) {
            window.location = n.attr("href")
        }).always(function() {            
            n.text(previousText).removeClass("loading");
        })
    });
    //$('body').append('<div id="theme_sideCart-shadow"></div><div id="theme_sideCart"><div id="theme_sideCart-header"><button type="button" onclick="theme.functions.sideCartToggle()">'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.sideCartTitle +'</span></div><div id="theme_sideCart-content"></div><div id="theme_sideCart-footer"><a href="/carrinho/index" class="botao">Finalizar Compra</div></div></div>');    
    $('body').append('<div id="theme_sideCart" class="theme_aside right"><div class="theme_aside-header" id="theme_sideCart-header"><button type="button" onclick="theme.functions.sideCartToggle()">'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.sideCartTitle +'</span></div><div id="theme_sideCart-content"></div><div id="theme_sideCart-footer"><a href="/carrinho/index" class="botao principal botao-comprar">Finalizar Compra</div></div></div>');    
}
theme.functions.sideCart = function(){
    //$('#theme_sideCart-content').html(html);
    $('body').addClass('sideCart-visible');  
    theme.functions.sideCartScroll();  
}

theme.functions.sideCartToggle = function(){
    if($('#theme_sideCart-content:empty').length){
        $("#theme_sideCart-content").load("/carrinho/mini", function() {
            theme.functions.sideCart()
        })
    }
    $('body').toggleClass('sideCart-visible');
}

theme.functions['pagina-cadastro'] = function(){
    $('#id_email').val() == "_" ? $('#id_email').val('') : false;
};

theme.functions['pagina-pedido-finalizado'] = function(){
    var order = [];
    order.num_pedido = $('.numero-pedido').first().text().trim();
    $('.caixa-info li b').each(function(){
        let txt = $(this).text();
        if(txt == "Seu nome:"){
            order.cliente = $(this).next('span').text().trim();
        }
        if(txt == "Endereço:"){
            order.endereco = $(this).next('span').text().trim();
        }
        if(txt == "Bairro:"){
            order.bairro = $(this).next('span').text().trim();
        }
        if(txt == "CEP:"){
            order.cep = $(this).next('span').text().trim();
        }  
    });
    $('legend').each(function(){
        let txt = $(this).text();
        if(txt == "Pagamento"){
            order.pagamento = $(this).next('ul').find('img').attr('alt').trim();
        }
        if(txt == "Entrega"){
            order.entrega = $(this).next('ul').find('img').attr('alt').trim();
        }
        if(txt == "Mensagem"){
            let info = $(this).next('ul').html().replace('<li>','').replace('</li>','').split('<br>');
            $.each(info,function(k_, item_){
                if(item_.trim().split(':')[0] == "Data da entrega"){
                    order.data_agendamento = item_.trim().split(':')[1].trim();
                } 
                if(item_.trim().split(':')[0] == "Período da entrega"){
                    order.periodo_agendamento = item_.trim().split(':')[1].trim();
                } 
                if(item_.trim().split(':')[0] == "Horário da entrega"){
                    order.schedule_open = item_.trim().split(':')[1].trim() + ':' + item_.trim().split(':')[2].trim();
                } 
            });
        }        
    });
    console.log(order);    

    if(!sessionStorage.getItem('order_' + order.num_pedido)){
        sessionStorage.setItem('order_' + order.num_pedido, true);
        $.post(ws_url.replace('?action=read',''), {
            sheetName: 'db_agendamentos',
            action: 'insertAgendamento', 
            cliente: order.cliente,
            num_pedido : order.num_pedido,
            data_agendamento : order.data_agendamento,
            periodo_agendamento : order.periodo_agendamento,
            schedule_open : order.schedule_open
        }, function(data){
            console.log(data)
        }, "json"); 

    }
};

theme.functions['pagina-inicial'] = function(){
    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .conteudo').toggleClass('span9 span12');
        //$('.secao-principal > .coluna').remove();
        $('.secao-principal > .coluna').hide();
    }
    if($('.marcas').length){
        theme.functions.flexDestroy($('.marcas .flexslider'));
        $('.marcas img').each(function(){
            let name = $(this).attr('alt');
            name = name ? name.toLowerCase().replaceAll(' ','-') : name;
            let img = MEDIA_URL + window.LOJA_ID.toString().slice(0,4) + '/' + window.LOJA_ID + '/arquivos/capa_' + name + '.png';
            
            $(this).closest('a').addClass('brand-cover');
            $(this).closest('a').css('background-image','url('+ img +')');            
            $(this).after('<strong>'+ name +'</strong>');
            
            img = MEDIA_URL + window.LOJA_ID.toString().slice(0,4) + '/' + window.LOJA_ID + '/arquivos/marca_' + name + '.png';
            $(this).attr('src', img);            
        });

        $('.marcas .slides').apx_slick(theme.settings.sliders.brands);
        //$('<div class="titulo-categoria cor-principal"><strong>'+ theme.lang.brandTitle +'</strong></div>').prependTo('.marcas');
        //theme.functions.titulos();
        $('.marcas').prependTo('#listagemProdutos');
    }    
};

theme.functions['pagina-categoria'] = function(){
    theme.build.productFilter(1);

    if(theme.settings.extraPagination){
        let pagination = $('.pagination').first().clone();
        pagination.insertAfter('#listagemProdutos');
    }

    let category_description = ""
    if($('h4.titulo .icon-file-text').length > 0){
        category_description = $('h4.titulo .icon-file-text').closest('div').find('p').html()
    }

    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .conteudo').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }
    
    

    $('<div id="theme_listing"></div>').insertAfter('h1.titulo');
    $('<div id="theme_listing-info"></div>').appendTo('#theme_listing');
    $('<div id="theme_listing-filters"></div>').appendTo('#theme_listing');
    $('#botaoOrdenar + ul').find('a').find('i').remove();
    $('#botaoOrdenar + ul').find('a').appendTo('#theme_listing-filters');
    let currentPage = parseInt($('.pagination').first().find('.active > a').text().replaceAll('.',''));    
    let lastPage = parseInt($('.pagination').first().find('li').eq(-2).text().replaceAll('.',''));
    $('.ordenar-listagem').remove();
    
    if($('.listagem-item').length > 1 ||  $('#theme_filter li.active').length > 0){
        $('<button type="button" class="filter-trigger btn-icon">'+ theme.icon.filter +'<span>Filtrar Resultados</span></button>').appendTo('#theme_listing-filters');        
    }else{
        $('#theme_listing-filters > a:last-child').css('margin-right','0');
    }
    let selector = $('<select name="changePage"></select>');
    for(i = 1; i <= lastPage; i ++){
        let cleanUrl = '';
        if(window.location.search == ''){
            cleanUrl = window.location.pathname + '?pagina=' + i;    
        }
        if(window.location.search != '' && !window.location.search.includes('pagina')){
            cleanUrl = window.location.pathname + window.location.search + '&pagina=' + i;        
        }
        if(window.location.search.includes('pagina')){
            cleanUrl = window.location.pathname + window.location.search.split('&pagina')[0] + '&pagina=' + i;
        }
       
        selector.append('<option value="'+ cleanUrl +'" '+ (i == currentPage ? 'selected' : '') +'>'+ i +'</option>');
    }

    let listing = $('<span>Página <span class="selectorContainer"></span> de '+ lastPage + '. Exibindo ' + $('.listagem-item').length  + ' produtos.</span>');
    
    if(isNaN(currentPage)){
        listing = $('<span>Exibindo ' + $('.listagem-item').length  + ' produtos.</span>');
    }
    
    listing.find('.selectorContainer').append(selector);
    $('#theme_listing-info').append(listing);        

    if($('#theme_filter li.active').length > 0){
        $('.filter-trigger > span').append('<i>'+ $('#theme_filter li.active').length +'</i>');
        if(window.location.search.includes('&q=')){
            $('<a id="theme_filter-clean" href="'+ window.location.pathname + '?q='+window.location.search.split('&q=')[1]+'"><i class="icon-undo"></i>&nbsp;&nbsp;<span>Limpar Filtros</span></a>').prependTo('#theme_filter.theme_aside-content');
        }else if(window.location.search.includes('?q=')){
            $('<a id="theme_filter-clean" href="'+ window.location.pathname + '?q='+window.location.search.split('?q=')[1]+'"><i class="icon-undo"></i>&nbsp;&nbsp;<span>Limpar Filtros</span></a>').prependTo('#theme_filter.theme_aside-content');
        }
        else{
            $('<a id="theme_filter-clean" href="'+ window.location.pathname +'"><i class="icon-undo"></i>&nbsp;&nbsp;<span>Limpar Filtros</span></a>').prependTo('#theme_filter.theme_aside-content');
        }
    }


    if(!theme.isMobile){        
        // document.addEventListener("DOMContentLoaded", function() {
        //     let h = $('#cabecalho').innerHeight() - 1;
        //     $('#theme_listing').addClass('sticky_this');
        //     $('#theme_listing').css('top', h + 'px');
        // });
        // window.addEventListener('resize', function(event) {
        //     let h = $('#cabecalho').innerHeight() - 1;
        //     $('#theme_listing').addClass('sticky_this');
        //     $('#theme_listing').css('top', h + 'px');
        // });
        // window.addEventListener('load', function(event) {
        //     let h = $('#cabecalho').innerHeight() - 1;
        //     $('#theme_listing').addClass('sticky_this');
        //     $('#theme_listing').css('top', h + 'px');
        // });
    }
    $('#theme_listing-filters a').each(function(){
        if(window.location.href.indexOf($(this).attr('href')) >= 0){
            $(this).css('font-weight','bold');
        }
    });

    $('#theme_listing [name="changePage"]').change(function(){
        window.location.href = $(this).val();
    });

    if(category_description != ""){
        $('<p>'+ category_description +'</p>').insertAfter('h1.titulo')
    }

    $('#corpo').css('overflow-x','unset');
    // if($('.listagem-item').length <= 1){
    //     $('#theme_listing-filters').hide();
    // }

    if($('.apx_categoryCover').length == 0){
        $('#corpo .conteudo > img:first-child, #corpo .conteudo > img:first-child + h1, #corpo .conteudo > img:first-child + h1 + p').wrapAll('<div class="apx_categoryCover"></div>');
        $('.apx_categoryCover h1, .apx_categoryCover h1 + p').wrapAll('<div class="apx_categoryCover-content"></div>');
    }

    if($('.secao-banners')){
        $('.secao-banners').insertAfter('h1.titulo');
        $('h1.titulo').addClass('withBanner')
    }
};
theme.functions['pagina-busca'] = theme.functions['pagina-categoria'];
theme.functions['pagina-marca'] = theme.functions['pagina-categoria'];
theme.functions['pagina-produto'] = function(){
    $('<div class="conteiner theme-bc"></div>').prependTo('#corpo');
    $('.breadcrumbs').appendTo('.theme-bc');
    $('.breadcrumbs > ul > li:first-child > a').html('Página Inicial');
    $('.breadcrumbs > ul').append('<li><strong class="cor-secundaria">'+ $('.info-principal-produto h1.nome-produto.titulo').text() +'</strong></li>');
    $('.parcelas-produto').remove();

    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .produto').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }

    $('.secao-principal .produto > div > .span7').toggleClass('span7 span8');
    $('.secao-principal .produto > div > .span5').toggleClass('span5 span4');

    $('.secao-principal .produto > div > .span8').wrapInner('<div class="clearFloat"></div>');
    !theme.isMobile ? $('.abas-custom').appendTo('.secao-principal .produto > div > .span8') : false;

    // if($('.atributo-cor').length > 0 ){
    //     $('.atributo-cor a span').each(function(){
    //         let css = $(this).attr('style').replace('border-color','background-color');
    //         $(this).attr('style', css);
    //     });
    // }     

    if($('meta[name="description"]').attr('content').length > 0 && theme.settings.productExcerpt){
        $('<p class="theme_excerpt">'+ $('meta[name="description"]').attr('content') +'</p>').insertAfter('.codigo-produto');
    }
    

    $('.produto-thumbs img').each(function(){
        let crop = $(this).attr('src').split('/')[3];
        let removeCrop = $(this).attr('src').replace(crop,'150x150');
        $(this).attr('src',removeCrop);
    });

    let h = $('.thumbs-vertical .produto-thumbs .miniaturas a').first().innerWidth() * theme.settings.imageSize;
    $('.thumbs-vertical .produto-thumbs .miniaturas a').css('height', h + 'px!important');
    
    $('.comprar .icon-shopping-cart').remove();

    $('.lista-favoritos').appendTo('.codigo-produto').attr('class','lista-favoritos adicionar-favorito')
    $('.lista-favoritos .icon-plus').before(theme.icon.wishlist);
    $('.lista-favoritos .icon-plus').remove();

    if($('.thumbs-vertical').length > 0){
        theme.functions.flexDestroy($('.thumbs-vertical #carouselImagem'));
        
        // if(theme.isMobile){
        //     if($('.thumbs-vertical #carouselImagem .miniaturas a').length > theme.settings.sliders.verticalProductGallery.slidesToShow){
        //         $('.thumbs-vertical #carouselImagem .miniaturas').apx_slick(theme.settings.sliders.verticalProductGallery);
        //     }
        // }
    }
    if($('.thumbs-horizontal').length > 0){
        theme.functions.flexDestroy($('.thumbs-horizontal'));
        $('.thumbs-horizontal #carouselImagem .miniaturas').apx_slick(theme.settings.sliders.horizontalProductGallery);
        $(".produto-thumbs").on("click", ".miniaturas li a", function(d) {
            d.preventDefault();
            $(this).parent().siblings().removeClass("active");
            $(this).parent().addClass("active");
            var c = $("#imagemProduto").data("imagezoom");
            if (c) {
                c.changeImage($(this).find("img").attr("data-mediumimg"), $(this).find("img").attr("data-largeimg"))
            }
        })
    }
    $('.produto-compartilhar').remove();

    if(theme.settings.avisoEstoque != undefined){
        $('.qtde_estoque').each(function(){
            let estoque = parseInt($(this).text());
            if(theme.settings.avisoEstoque >= estoque){
                let aviso = theme.lang.avisoEstoque.replace('[qtde]',estoque);
                $('<p class="theme-avisoEstoque">'+ aviso +'</p>').insertBefore($(this).closest('.comprar'))
            }
        })
        theme.settings.avisoEstoque != undefined
    }

    $('.qtde-adicionar-carrinho').append('<button type="button"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Add</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg></button>');
    $('.qtde-adicionar-carrinho').prepend('<button class="minus" type="button"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Remove</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"/></svg></button>');

    $('.qtde-adicionar-carrinho button').click(function(){
        let me = $(this).closest('.qtde-adicionar-carrinho');
        let input = me.find('input');
        let qtd = parseInt(input.val());

        if($(this).hasClass('minus')){
            qtd = qtd - 1
        }else{
            qtd = qtd + 1
        }

        if(qtd < 1){qtd = 1}

        input.val(qtd);
        input.trigger('change');
    });


    $('.produto-thumbs img').each(function(){
        let crop = $(this).attr('data-mediumimg').replace('600x700','1000x1000');
        $(this).attr('data-mediumimg', crop);
    });
    
    $('[data-imagem-grande]').each(function(){
        let url = $(this).attr('data-imagem-grande').replace('1000x1000','1500x1500')
        $(this).attr('data-imagem-grande', url);
    });
    $('[data-mediumimg]').each(function(){
        let url = $(this).attr('data-mediumimg').replace('600x1000','1500x1500')
        $(this).attr('data-mediumimg', url);
    })
    
    $('.produto .conteiner-imagem img').each(function(){
        let url = $(this).attr('src').replace('600x1000','1500x1500')
        $(this).attr('src', url);
    })
        
    $('.thumbs-vertical #carouselImagem .miniaturas li.slick-slide.slick-center a').click();
    
    $(window).load(function(){
        $('.thumbs-vertical #carouselImagem .miniaturas li.slick-slide.slick-center a').click();
    })

    $('.botao-comprar-ajax').unbind();
    $('.botao-comprar-ajax').removeAttr('data-loading-text');
    $('.botao-comprar-ajax').addClass('theme_buttonBuy-ajax').removeClass('botao-comprar-ajax');


    //$('.atributos, .acoes-produto').wrapAll('<div class="p_productBox"></div>');
    

    //$('.info-principal-produto').after('<div theme-content="labels"></div>'); 

    $('.avise-me .avise-descr').text('De tão bom, vendeu tudo. Deixe seu e-mail que avisaremos quando chegar.');


    
};
theme.functions.brandLoaded = function(){
    if($('.codigo-produto [itemprop="brand"]')){
        let brand = $('.codigo-produto [itemprop="brand"] a').text();
        let brand_link = $('.codigo-produto [itemprop="brand"] a').clone();
        brand_link.empty()
        if(localStorage.getItem('brand_' + brand)){
            let brand_data = JSON.parse(localStorage.getItem('brand_' + brand));
            if(brand_data.img){
                brand_link.append('<img src="'+ brand_data.img +'"/>');
                brand_link.insertAfter('.codigo-produto');    
            }
            if(brand_data.description){
                $('.abas-custom').first().after('<p class="p_brand_description">'+ brand_data.description +'</p>');
                $('.abas-custom').first().after('<strong class="p_brand_about">Sobre a marca</strong>');
            }
        }
    }
}
theme.functions['pagina-carrinho'] = function(){
    if($('.carrinho-checkout').length > 0){
        //OPEN FORM
            $('#login-content, .checkout-alerta-seguro').hide();
            $('#formularioCheckout .row-fluid').show();
        
            $('.fazer-login-btn').click(function(){
                $('#login-content, .checkout-alerta-seguro').show();
                $('#formularioCheckout .row-fluid').hide();
            });
            $('.fazer-cadastro').click(function(){
                $('#login-content, .checkout-alerta-seguro').hide();
                $('#formularioCheckout .row-fluid').show();
            });
            $('#tipoFisica').addClass('in')
        // END OPEN FORM
        $('#formularioCheckout').before('<div class="cabecalho-interno row-fluid"> <div class="span12"> <h1 class="titulo cor-secundaria"> Finalizar Pedido<small> Preencha seus dados, escolha a modalidade de envio e efetue seu pedido.</small> </h1> </div></div>');
        $('.tabela-carrinho').clone().insertBefore('#formas-pagamento-wrapper');
        $('.tabela-carrinho').wrap('<div class="caixa-sombreada theme_order-resume"></div>');
        $('.resumo-compra').first().hide();
        $('<legend class="titulo cor-secundaria"><i class="icon-archive"></i>Itens do pedido</legend>').insertBefore('.tabela-carrinho');

        
        if(theme.settings.agendamento == true){
            theme.functions.datepicker();
        }

        $('input,textarea,select').focus(function(){
            if(!$(this).closest('.caixa-sombreada').hasClass('caixa-ativa')){
                $('.caixa-ativa').removeClass('caixa-ativa');
                $(this).closest('.caixa-sombreada').addClass('caixa-ativa');
            }        
        });

    }    
};


theme.functions['pagina-pagina'] = function(){
    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .produto').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }
};

theme.functions.flexDestroy = function(oObj){
    var $els = $(oObj);
    $els.each(function() {
        var $el = $(this);
        var $elClean = $el.clone();
    
        $elClean.find('.flex-viewport').children().unwrap();
        $elClean
        .removeClass('flexslider')
        .find('.clone, .flex-direction-nav, .flex-control-nav')
            .remove()
            .end()
        .find('*').removeAttr('style').removeClass(function (index, css) {
            // If element is SVG css has an Object inside (?)
            if (typeof css === 'string') {
            return (css.match(/\bflex\S+/g) || []).join(' ');
            }
        });
    
        $elClean.insertBefore($el);
        $el.remove();
    });
}

theme.functions.flexDestroy_withStyle = function(oObj){
    var $els = $(oObj);
    $els.each(function() {
        var $el = $(this);
        var $elClean = $el.clone();
    
        $elClean.find('.flex-viewport').children().unwrap();
        $elClean
        .removeClass('flexslider')
        .find('.clone, .flex-direction-nav, .flex-control-nav')
            .remove()
            .end()
        .find('li').removeAttr('style').removeClass(function (index, css) {
        //.find('*').removeClass(function (index, css) {
            // If element is SVG css has an Object inside (?)
            if (typeof css === 'string') {
            return (css.match(/\bflex\S+/g) || []).join(' ');
            }
        });
    
        $elClean.insertBefore($el);
        $el.remove();
    });
}
theme.worker = {};
theme.worker.run = function(){
    $(window).load(function(){
        $.each(theme.worker, function(k, item){
            if(k != "run"){
                if(theme.worker[k].style !== undefined){
                    $('head').append(theme.worker[k].style);
                }
                if(theme.worker[k].list.length > 0 && theme.worker[k].match){
                    theme.worker[k].run();
                }            
            }        
        })
    });
};

theme.worker.floatingWhatsapp = {};
theme.worker.floatingWhatsapp.list = [{}];
theme.worker.floatingWhatsapp.config = {icon:'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"/></svg>', text:"Precisa de ajuda?<br><strong>Fale Conosco</strong>", textColor: "#666", textBackground: "#f8f8f8", target: "body"};
theme.worker.floatingWhatsapp.run = function(el){
    var themeFloatingWhatsapp = $('<div class="theme_worker-floatingWhatsapp"></div>');    
    themeFloatingWhatsapp.append('<a target="_blank" href="http://wa.me/'+ theme.worker.floatingWhatsapp.config.number+'"><span style="color:'+ theme.worker.floatingWhatsapp.config.textColor +';background-color:'+ theme.worker.floatingWhatsapp.config.textBackground +';">'+ theme.worker.floatingWhatsapp.config.text +'</span>'+ theme.worker.floatingWhatsapp.config.icon +'</a>');    
    themeFloatingWhatsapp.appendTo(theme.worker.floatingWhatsapp.config.target);
    console.log('theme.worker.floatingWhatsapp OK');
};

$(document).ready(function(){
    theme.worker.floatingWhatsapp.match = theme.settings.whatsappButton;
    // theme.worker.testimonials.match = $('.pagina-inicial').length > 0;
    theme.worker.floatingWhatsapp.config.number =  "55" + $('.barra-inicial .canais-contato .fa-whatsapp').parent().text().replace('Whatsapp: ','').replace('(','').replace(')','').replace('-','').replaceAll(' ','').trim();

    
    theme.functions.beforeInit();
    theme.functions.init();
    theme.functions.titulos();
    theme.functions.destaquesMenu();
    theme.worker.run();

    theme.functions.productListImageSize(theme.settings.imageSize);

    /* 2.6 */
    //funcao ocultar categorias no menu
    $('.menu.superior > .nivel-um > li > a > strong:contains(Ocultar)').closest('li').prev('li').nextAll().remove();

    //funcao ocultar paginas no menu
    let menuAjuda = $('<ul></ul>').append($('.footer-content-2 > ul > li > a:contains(Precisa de ajuda?)').closest('li').nextAll());
    $('.footer-content-2 > ul > li > a:contains(Precisa de ajuda?)').closest('li').remove();
    menuAjuda.appendTo('.footer-content-3');
    $('#theme_footer-content1 > ul > li > a:contains(Ocultar)').closest('li').prev('li').nextAll().remove();

    $('#p_header .menu.superior > .nivel-um > li > a > strong:contains(Categorias)').closest('li').prev('li').nextAll().wrapAll('<ul class="nivel-dois borda-alpha" id="p_categories-group"></ul>');
    $('#p_categories-group').wrap('<li class="categoria-categorias com-filho borda-principal"></li>');
    $('.categoria-categorias').prepend('<a href="javascript:;"><strong class="titulo">+Categorias</strong><i class="icon-chevron-down fundo-secundario"></i></a>')
    

    //theme.benefitsStripe
    // if(theme.benefitsStripe.active == 1 && theme.benefitsStripe.list.length > 0 && $('.pagina-inicial').length > 0){
    //     $('.secao-principal').prepend('<div class="theme_benefitsStripe"></div>');
    //     $.each(theme.benefitsStripe.list, function(key, item){
    //         let block = $('<div class="item"></div>');
    //         if(item.img){ block.append('<img src="'+ item.img +'"/>') }
    //         block.append('<div class="text"></div>');
    //         if(item.title){ block.find('.text').append('<strong>'+ item.title +'</strong>') }
    //         if(item.subtitle){ block.find('.text').append('<p>'+ item.subtitle +'</p>') }            
    //         if(item.link){ block.wrapInner('<a href="'+ item.link +'"></a>') }
    //         block.appendTo('.theme_benefitsStripe');
    //     });
    //     $('.theme_benefitsStripe').apx_slick(theme.settings.sliders.benefitsStripe);
    // }

    

    //cep no carrinho nativo
    $('.pagina-carrinho #formCalcularFrete').closest('tr').attr('id','cep-wrapper');
    $('.pagina-carrinho .bg-dark').each(function(){
        if($(this).html().trim().length == 0){
            $(this).remove();
        }
    })
});
$(window).load(function(){
    theme.functions.productListImageSize(theme.settings.imageSize);
});

(function(a) {
    a.ProdutoOpcoes = function(b, c) {
        this.$el = a(c);
        this._init(b)
    };
    a.ProdutoOpcoes.defaults = {
        atributos: ".atributos",
        item_atributo: ".atributo-item",
        item_acao: ".acoes-produto",
        class_ativo: ".active",
        class_indisponivel: "indisponivel"
    };
    a.ProdutoOpcoes.prototype = {
        _init: function(b) {
            this.options = a.extend(true, {}, a.ProdutoOpcoes.defaults, b);
            this.options.class_ativo_sem_ponto = this.options.class_ativo.replace(".", "");
            if (!a(this.options.atributos).length) {
                return false
            }
            this.total_grades = 0;
            this._verificar_total_grades();
            this._bind_click_opcoes();
            this._marcar_variacoes_indisponiveis()
        },
        _verificar_total_grades: function() {
            this.total_grades = a(this.options.atributos).children().length
        },
        _deselecionar_opcoes_mesmo_nivel: function(b) {
            a(b).parents("ul").children(this.options.class_ativo).removeClass(this.options.class_ativo_sem_ponto)
        },
        _selecionar_imagem_atributo: function(b) {
            var c = produto_grades_imagens[b];
            if (c) {
                a.each(c, function(d, e) {
                    a(".miniaturas li a[data-imagem-id=" + e + "]").click()
                });
                if (a(".acoes-flutuante").length && a(".produto .conteiner-imagem img").length) {
                    a(".acoes-flutuante .image img").attr("src", a(".produto .conteiner-imagem img").attr("src").replace("380x380", "210x210"))
                }
            }
        },
        _selecionar_opcao: function(b) {
            a(b).parents("li").addClass(this.options.class_ativo_sem_ponto);
            this._esconder_variacoes_inexistentes(b);
            if (this.total_grades > 1) {
                this._marcar_variacoes_indisponiveis(b)
            }
            if (a(b).attr("data-pode-ter-imagens") == "true") {
                this._selecionar_imagem_atributo(a(b).attr("data-variacao-id"))
            }
        },
        _marcar_variacoes_indisponiveis: function(b) {
            var j = this.options.item_atributo;
            var h = this.options.class_indisponivel;
            var k = this.options.atributos;
            if (this.total_grades == 1) {
                a(this.options.item_acao).each(function() {
                    var l = a(this);
                    var m = parseInt(getdata(l, "variacao-id"), 10);
                    if (l.hasClass("indisponivel")) {
                        a(j + "[data-variacao-id=" + m + "]").addClass(h)
                    }
                })
            } else {
                if (this.total_grades == 2) {
                    var d = parseInt(a(b).attr("data-variacao-id"), 10);
                    var f = [];
                    a(k + " > div:last-child").find("a").each(function(l, m) {
                        var n = a(m);
                        if (n.hasClass(h)) {
                            n.removeClass(h)
                        }
                        f.push(d + "-" + a(n).attr("data-variacao-id"))
                    });
                    for (var g = 0; g < f.length; g++) {
                        var c = a(this.options.item_acao + '[data-variacao-id="' + f[g] + '"]');
                        if (c.length) {
                            if (c.hasClass("indisponivel")) {
                                var e = f[g];
                                e = e.split("-")[1];
                                a(j + "[data-variacao-id=" + e + "]").addClass(h)
                            }
                        }
                    }
                }
            }
        },
        _esconder_variacoes_inexistentes: function(c) {
            var h = this.options.class_indisponivel;
            var g = this.options.class_ativo.replace(".", "");
            var l = parseInt(getdata(a(c), "grade-id"), 10);
            var e = parseInt(getdata(a(c), "variacao-id"), 10);
            var b = grades.indexOf(l);
            var f = [];
            var d;
            var m;
            for (var k in variacoes) {
                m = variacoes[k];
                variacoes_ids = variacoes[k][Object.keys(m)[0]];
                if (typeof(variacoes_ids) == "object" && variacoes_ids[b] == e) {
                    for (var j in variacoes_ids) {
                        variacao_id = variacoes_ids[j];
                        if (f.indexOf(variacao_id) == -1) {
                            f.push(variacao_id)
                        }
                    }
                }
            }
            a(this.options.item_atributo).each(function() {
                var n = a(this);
                var o = parseInt(getdata(n, "variacao-id"), 10);
                var p = parseInt(getdata(n, "grade-id"), 10);
                
                if (f.indexOf(o) == -1 && p != l) {
                    n.addClass(h);
                    n.find(".icon-remove").css(`display`,`block`);
                    n.parent("li").removeClass(g)
                } else {
                    if (a(".atributos > div").length > 1) {
                        n.removeClass(h);
                        n.find(".icon-remove").hide()
                    }
                }
            })
        },
        _esconder_acoes_produto: function() {
            a(".acoes-produto[data-produto-id]").hide();
            a(".parcelas-produto[data-produto-id]").hide()
        },
        _mostrar_acao_produto: function(f) {
            var d;
            var c;
            var e = false;
            for (var b in variacoes) {
                c = variacoes[b];
                d = Object.keys(c)[0];
                if (JSON.stringify(c[d]) == JSON.stringify(f)) {
                    e = true;
                    break
                }
            }
            if (e) {
                a(".acoes-produto[data-produto-id=" + d + "]").show();
                a("[name=produto_id]").val(d);
                a(".parcelas-produto[data-produto-id=" + d + "]").show()
            } else {
                a(".parcelas-produto.padrao").show()
            }
        },
        _verificar_selecao_opcoes: function() {
            var b = this;
            var d = a(b.options.atributos + " " + b.options.class_ativo);
            if (d.length == b.total_grades) {
                var c = [];
                d.each(function(h, j) {
                    var f = a(j).find(b.options.item_atributo);
                    var g = parseInt(getdata(f, "variacao-id"), 10);
                    c.push(g)
                });
                b._esconder_acoes_produto();
                b._mostrar_acao_produto(c)
            }
        },
        _bind_click_opcoes: function() {
            var b = this;
            a(b.options.item_atributo).click(function() {
                b._esconder_acoes_produto();
                a('.acoes-produto[data-variacao-id=""]').show();
                b._deselecionar_opcoes_mesmo_nivel(this);
                b._selecionar_opcao(this);
                b._verificar_selecao_opcoes()
            })
        }
    };
    a.fn.produto_opcoes = function(b) {
        return new a.ProdutoOpcoes(b, this)
    }
}(jQuery));

$(window).load(function(){
    $('#p_header .menu.superior > ul > li.com-filho').mouseover(function(){
        !$('.conteiner-principal').hasClass('menu-shadow') ? $('.conteiner-principal').addClass('menu-shadow') : false;        
    });
    $('#p_header .menu.superior > ul > li.com-filho').mouseout(function(){
        $('.conteiner-principal').hasClass('menu-shadow') ? $('.conteiner-principal').removeClass('menu-shadow') : false;
    });
    theme.functions.WS_PAPELANDIA();
});


$(document).ready(function() {
    $('.theme_tarja-full a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var offset = $(target).offset().top - 175;
        $('html, body').animate({
            scrollTop: offset
        }, 1000);
    });
});
