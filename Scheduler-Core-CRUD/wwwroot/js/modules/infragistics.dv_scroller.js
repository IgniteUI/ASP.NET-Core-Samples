/*!@license
* Infragistics.Web.ClientUI infragistics.dv_scroller.js 20.1.20201.45
*
* Copyright (c) 2011-2020 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.dv_core.js
*     infragistics.dv_datasource.js
*     infragistics.dv_interactivity.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.dv_datasource","./infragistics.dv_interactivity","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$bq=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$1=$.ig.globalDefs.$$1;$$w=$.ig.globalDefs.$$w;$$y=$.ig.globalDefs.$$y;$$al=$.ig.globalDefs.$$al;$$6=$.ig.globalDefs.$$6;$$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["ScrollerView:a","Scroller:c","ScrollerScrollingEventHandler:d","IScrollerKeyboardListener:f"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compareSimple,$x=$.ig.util.tryParseNumber,$y=$.ig.util.tryParseNumber1,$z=$.ig.util.numberToString,$0=$.ig.util.numberToString1,$1=$.ig.util.parseNumber;$d("ScrollbarStyle:b",false,false,{"Default:$default":0,Fading:1,Thin:2});$c("ScrollerView:a","Object",{init:function(a){this.e=false;this.d=null;this.i=false;this.h=false;this.w=0;this.t=0;this.x=-1;this.u=-1;$.ig.$op.init.call(this);this._c=a},_c:null,_ad:null,_ah:null,_b:null,a8:function(){return function(){var $ret=new $$a.at;$ret.fill("#666666");return $ret}()},_ac:null,_a:null,_ag:null,_ae:null,_af:null,_ai:null,a0:function(a){var $self=this;if(a==null){if(this._ad!=null){this._ad=null}if(this._a!=null){this._a._ak=null;this._a.aq()}return}this._ad=a;this._c.executionContext(new $.ig.DOMExecutionContext(this._ad));var b=Math.round(this._ad.rootWrapper().width());var c=Math.round(this._ad.rootWrapper().height());this._ag=this._ad.rootWrapper();this._ag.setStyleProperty("position","relative");this._ah=this._ad.createElement("div");this._ah.setStyleProperty("position","relative");this._ah.setStyleProperty("width","100%");this._ah.setStyleProperty("height","100%");this._ah.setStyleProperty("overflow","hidden");this._ag.append(this._ah);this._af=this._ad.createElement("div");this._af.setStyleProperty("position","absolute");this._af.setStyleProperty("height",this._c.scrollbarSpan()+"px");this._af.setStyleProperty("width",this._c.minScrollbarSize()+"px");this._af.setStyleProperty("background-color",this._c.scrollbarBrush().__fill);this._af.setStyleProperty("display","none");this._af.setStyleProperty("border-radius","5px");this._af.setStyleProperty("z-index","10000");this._af.setStyleProperty("bottom","0px");this._ag.append(this._af);this._ai=this._ad.createElement("div");this._ai.setStyleProperty("position","absolute");this._ai.setStyleProperty("width",this._c.scrollbarSpan()+"px");this._ai.setStyleProperty("height",this._c.minScrollbarSize()+"px");this._ai.setStyleProperty("background-color",this._c.scrollbarBrush().__fill);this._ai.setStyleProperty("display","none");this._ai.setStyleProperty("border-radius","5px");this._ai.setStyleProperty("z-index","10000");this._ai.setStyleProperty("right","0px");this._ag.append(this._ai);this.a4(false);this._ac=this._ah.getNativeElement();this._a=new $.ig.CanvasGestureDOMEventProxy(this._ad.rootWrapper(),this._ad,true);this._ad.rootWrapper().setProperty("tabIndex",1e3);this._ad.rootWrapper().setRawStyleProperty("outline","none");this._a._c1=true;var d=this._a;d.onMouseWheel=$.ig.Delegate.prototype.combine(d.onMouseWheel,this.l.runOn(this));var e=this._a;e.onMouseWheelHorizontal=$.ig.Delegate.prototype.combine(e.onMouseWheelHorizontal,this.m.runOn(this));var f=this._a;f.onMouseLeave=$.ig.Delegate.prototype.combine(f.onMouseLeave,this.aq.runOn(this));var g=this._a;g.onDragStarted=$.ig.Delegate.prototype.combine(g.onDragStarted,this.ap.runOn(this));var h=this._a;h.onDragDelta=$.ig.Delegate.prototype.combine(h.onDragDelta,this.ao.runOn(this));var i=this._a;i.onDragCompleted=$.ig.Delegate.prototype.combine(i.onDragCompleted,this.an.runOn(this));var j=this._a;j.onFlingStarted=$.ig.Delegate.prototype.combine(j.onFlingStarted,this.j.runOn(this));var k=this._a;k.onContactStarted=$.ig.Delegate.prototype.combine(k.onContactStarted,this.am.runOn(this));var l=this._a;l.onContactMoved=$.ig.Delegate.prototype.combine(l.onContactMoved,this.al.runOn(this));var m=this._a;m.onContactCompleted=$.ig.Delegate.prototype.combine(m.onContactCompleted,this.ak.runOn(this));this._a._aa=true;this._a._am=this.r.runOn(this);var n=this._a;n.onKeyDown=$.ig.Delegate.prototype.combine(n.onKeyDown,this.k.runOn(this));this._a._an=function(o){var e_=o.originalEvent;var p=e_.type;if(p=="pointerdown"&&!$self._a.bl(o)){return false}return true};this._c.da(b,c,false);this._c.horizontalAnimation().provideRenderer(this._ad);this._c.verticalAnimation().provideRenderer(this._ad)},k:function(a){return this._c.ai(a,(this._a._bc&4)!=0,(this._a._bc&2)!=0)},r:function(a,b,c){if(this.f||this.g){return true}if(c||b){return true}if(this.n(a,b)){this._c.cv();if(this.p(a,b)){return true}}else if(this._c.isHorizontalActive()){this._c.cz()}if(this.o(a,b)){this._c.cw();if(this.q(a,b)){return true}}else if(this._c.isVerticalActive()){this._c.c0()}return false},ak:function(a,b){this.f=false;this.g=false;this._c.isDraggingVBar(false);this._c.isDraggingHBar(false)},al:function(a,b){if(this.g){var c=a.__y-this.v;this.v=a.__y;this._c.c9(c)}else if(this.f){var d=a.__x-this.s;this.s=a.__x;this._c.c7(d)}},am:function(a,b){this.e=false;this.aj();var c=this.q(a,b);var d=this.p(a,b);if(c){this._c.isDraggingVBar(true);this.g=true;this.v=a.__y;this.ar()}else if(d){this._c.isDraggingHBar(true);this.f=true;this.s=a.__x;this.ar()}},p:function(a,b){if(!this.h){return false}if(a.__y>=this._c.viewportHeight()-this._c.scrollbarSpan()&&a.__y<=this._c.viewportHeight()&&a.__x>=this.u-this.t/2&&a.__x<=this.u+this.t/2){return true}return false},q:function(a,b){if(!this.i){return false}if(a.__x>=this._c.viewportWidth()-this._c.scrollbarSpan()&&a.__x<=this._c.viewportWidth()&&a.__y>=this.x-this.w/2&&a.__y<=this.x+this.w/2){return true}return false},n:function(a,b){if(!this.h){return false}return a.__y>=this._c.viewportHeight()-this._c.scrollbarSpan()-40&&a.__y<=this._c.viewportHeight()},o:function(a,b){if(!this.i){return false}return a.__x>=this._c.viewportWidth()-this._c.scrollbarSpan()-40&&a.__x<=this._c.viewportWidth()},e:false,j:function(a,b,c){this.e=true;return true},ay:function(a){this._a._bf=new $$a.ae(0,0,0,this._c.viewportWidth(),this._c.viewportHeight())},az:function(a){this._a._bf=new $$a.ae(0,0,0,this._c.viewportWidth(),this._c.viewportHeight())},av:function(a){if(this._ae!=null){this._ae.setStyleProperty("height",a+"px")}},aw:function(a){if(this._ae!=null){this._ae.setStyleProperty("width",a+"px")}},aj:function(){},an:function(a){if(this.f||this.g){return}this.e=false;this._c.c4(a)},ao:function(a){if(this.f||this.g){return}this._c.c5(a)},a6:function(a){this._ac.scrollTop=$.ig.truncate(a)},ap:function(a){if(this.f||this.g){return}this.e=false;this._c.c6(a)},z:function(){return this._ac.scrollLeft},aa:function(){return this._ac.scrollTop},l:function(a,b){this.e=false;this.aj();return this._c.ak(a,0,b)},m:function(a,b){this.e=false;this.aj();return this._c.ak(a,b,0)},aq:function(a){if(this._c.horizontalScrollbarStatus()>0){this._c.cz()}if(this._c.verticalScrollbarStatus()>0){this._c.c0()}},a5:function(a){this._ac.scrollLeft=$.ig.truncate(a)},a1:function(a){this._ae=a;this._ah.append(this._ae)},d:null,a2:function(a){if(this._ad==null){return}if(this.d==null){this.d=this._ad.getRequestAnimationFrame()}if(this.e){a()}else{this.d(function(){a()})}},i:false,h:false,w:0,t:0,x:0,u:0,g:false,f:false,v:0,s:0,at:function(){if(this.i){this.i=false;this._ai.setStyleProperty("display","none")}},as:function(){if(this.h){this.h=false;this._af.setStyleProperty("display","none")}},a7:function(a,b){var c=false;if(!this.i){c=true;this.i=true;this._ai.setStyleProperty("display","block")}if(a!=this.x||c){this.x=a;if(this.i){this._ai.setRawYPosition(a-b/2)}}if(b!=this.w||c){this.w=b;if(this.i){this._ai.setRawSize(this.ab(),b)}}},a3:function(a,b){var c=false;if(!this.h){c=true;this.h=true;this._af.setStyleProperty("display","block")}if(a!=this.u||c){this.u=a;if(this.h){this._af.setRawXPosition(a-b/2)}}if(b!=this.t||c){this.t=b;if(this.h){this._af.setRawSize(b,this.y())}}},a4:function(a){if(this._af!=null&&this._ai!=null){switch(this._c.scrollbarStyle()){case 0:if(a){this._af.setStyleProperty("opacity","1");this._ai.setStyleProperty("opacity","1");this._af.setRawSize(this.t,this.y());this._ai.setRawSize(this.ab(),this.w)}break;case 1:if(a){this._af.setRawSize(this.t,this.y());this._ai.setRawSize(this.ab(),this.w)}this._af.setStyleProperty("opacity",this._c.horizontalScrollbarStatus().toString());this._ai.setStyleProperty("opacity",this._c.verticalScrollbarStatus().toString());break;case 2:if(a){this._af.setStyleProperty("opacity","1");this._ai.setStyleProperty("opacity","1")}this._af.setRawSize(this.t,this.y());this._ai.setRawSize(this.ab(),this.w);break}}},y:function(){if(this._c.scrollbarStyle()==2){return this._c.horizontalScrollbarStatus()*(this._c.scrollbarSpan()-2)+2}return this._c.scrollbarSpan()},ab:function(){if(this._c.scrollbarStyle()==2){return this._c.verticalScrollbarStatus()*(this._c.scrollbarSpan()-2)+2}return this._c.scrollbarSpan()},ar:function(){this._ad.rootWrapper().focus()},ax:function(){if(this._a!=null){this._a.bb(this._ad.rootWrapper(),"")}},au:function(){if(this._a!=null){this._a.ap(this._ad.rootWrapper(),"")}},$type:new $.ig.Type("ScrollerView",$.ig.$ot)},true);$c("Scroller:c","Object",{init:function(){this.a9=49;this.a1=NaN;this.av=49;this.at=NaN;this.a8=48;this.a0=NaN;this.au=48;this.as=NaN;this.ay=0;this.a2=20;this.a5=8;this.bb=0;this.dp=null;this.v=false;this.ax=0;this.bd=0;this.bc=0;this.a7=0;this.a6=0;this.f=null;this.t=true;this.aw=0;this.ar=0;this.c=0;this.az=0;this.ba=0;this.q=false;this.o=false;this.p=false;this.n=false;this.a3=0;this.a4=0;this.u=false;this.b3=1e3;this.m=false;this.x=false;this.l=false;this.w=false;this.r=true;this.s=true;$.ig.$op.init.call(this);this.dp=this.view().a8();this.h=new $.ig.DoubleAnimator(0,1,400);this.i=new $.ig.DoubleAnimator(0,1,400);this.h.easingFunction($.ig.EasingFunctions.prototype.cubicEase);this.i.easingFunction($.ig.EasingFunctions.prototype.cubicEase);var a=this.h;a.propertyChanged=$.ig.Delegate.prototype.combine(a.propertyChanged,this.ct.runOn(this));var b=this.i;b.propertyChanged=$.ig.Delegate.prototype.combine(b.propertyChanged,this.cu.runOn(this))},a9:0,smallVerticalChange:function(a){if(arguments.length===1){var b=this.a9;this.a9=a;if(b!=this.a9){this.c8("SmallVerticalChange",b,this.a9)}return a}else{return this.a9}},_keyboardListener:null,keyboardListener:function(a){if(arguments.length===1){this._keyboardListener=a;return a}else{return this._keyboardListener}},a1:0,largeVerticalChange:function(a){if(arguments.length===1){var b=this.a1;this.a1=a;if(b!=this.a1){this.c8("LargeVerticalChange",b,this.a1)}return a}else{return this.a1}},av:0,bi:function(a){if(arguments.length===1){var b=this.av;this.av=a;if(b!=this.av){this.c8("ActualSmallVerticalChange",b,this.av)}return a}else{return this.av}},at:0,bg:function(a){if(arguments.length===1){var b=this.at;this.at=a;if(b!=this.at){this.c8("ActualLargeVerticalChange",b,this.at)}return a}else{return this.at}},a8:0,smallHorizontalChange:function(a){if(arguments.length===1){var b=this.a8;this.a8=a;if(b!=this.a8){this.c8("SmallHorizontalChange",b,this.a8)}return a}else{return this.a8}},a0:0,largeHorizontalChange:function(a){if(arguments.length===1){var b=this.a0;this.a0=a;if(b!=this.a0){this.c8("LargeHorizontalChange",b,this.a0)}return a}else{return this.a0}},au:0,bh:function(a){if(arguments.length===1){var b=this.au;this.au=a;if(b!=this.au){this.c8("ActualSmallHorizontalChange",b,this.au)}return a}else{return this.au}},as:0,bf:function(a){if(arguments.length===1){var b=this.as;this.as=a;if(b!=this.as){this.c8("ActualLargeHorizontalChange",b,this.as)}return a}else{return this.as}},ay:0,contentWidth:function(a){if(arguments.length===1){var b=this.ay;this.ay=a;if(b!=this.ay){this.c8("ContentWidth",b,this.ay)}return a}else{return this.ay}},a2:0,minScrollbarSize:function(a){if(arguments.length===1){var b=this.a2;this.a2=a;if(b!=this.a2){this.c8("MinScrollbarSize",b,this.a2)}return a}else{return this.a2}},a5:0,scrollbarSpan:function(a){if(arguments.length===1){var b=this.a5;this.a5=a;if(b!=this.a5){this.c8("ScrollbarSpan",b,this.a5)}return a}else{return this.a5}},ai:function(a,b,c){switch(a){case 11:return this.al(b,c);case 10:return this.am(b,c);case 17:return this.ae(b,c);case 15:return this.ap(b,c);case 14:return this.aj(b,c);case 16:return this.an(b,c);case 13:return this.ah(b,c);case 12:return this.af(b,c);case 2:return this.ao(b,c);case 3:return this.ag(b,c)}return false},ao:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onTab(a,b)){return true}}return false},af:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onEnd(a,b)){return true}}return false},ah:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onHome(a,b)){return true}}return false},an:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onRightArrow(a,b)){return true}}if(this.scrollLeft()+this.viewportWidth()>=this.contentWidth()){return false}this.df(this.bh(),0);return true},aj:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onLeftArrow(a,b)){return true}}if(this.scrollLeft()<=0){return false}this.df(this.bh()*-1,0);return true},ap:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onUpArrow(a,b)){return true}}if(this.scrollTop()<=0){return false}this.df(0,this.bi()*-1);return true},ae:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onDownArrow(a,b)){return true}}if(this.scrollTop()+this.viewportHeight()>=this.contentHeight()){return false}this.df(0,this.bi());return true},am:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onPageUp(a,b)){return true}}if(this.scrollTop()<0){return false}this.df(0,this.bg()*-1);return true},al:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onPageDown(a,b)){return true}}if(this.scrollTop()+this.viewportHeight()>=this.contentHeight()){return false}this.df(0,this.bg());return true},ag:function(a,b){if(this.keyboardListener()!=null){if(this.keyboardListener().onEnter(a,b)){return true}}return false},bb:0,verticalTrackStartInset:function(a){if(arguments.length===1){var b=this.bb;this.bb=a;if(b!=this.bb){this.c8("VerticalTrackStartInset",b,this.bb)}return a}else{return this.bb}},dp:null,scrollbarBrush:function(a){if(arguments.length===1){var b=this.dp;this.dp=a;if(b!=this.dp){this.c8("ScrollbarBrush",b,this.dp)}return a}else{return this.dp}},c8:function(a,b,c){if(this.propertyChanged!=null){this.propertyChanged(this,new $$0.b7(a))}this.db(a,b,c)},v:false,aq:function(a){if(arguments.length===1){this.v=a;if(!this.v){this.view().a6(this.scrollTop());this.view().a5(this.scrollLeft())}return a}else{return this.v}},db:function(a,b,c){switch(a){case"ContentWidth":this.view().aw(this.contentWidth());var d=c;var e=b;if(d<e&&this.scrollLeft()+this.viewportWidth()>=d){this.dg(d-(this.scrollLeft()+this.viewportWidth()),0)}else{this.dl()}break;case"ContentHeight":this.view().av(this.contentHeight());var f=c;var g=b;if(f<g&&this.scrollTop()+this.viewportHeight()>=f){this.dg(0,f-(this.scrollTop()+this.viewportHeight()))}else{this.dn()}break;case"ScrollTop":if(!this.aq()){this.view().a6(this.scrollTop())}break;case"ScrollLeft":if(!this.aq()){this.view().a5(this.scrollLeft())}break;case"ViewportWidth":this.view().az(this.viewportWidth());if($.ig.util.isNaN(this.largeVerticalChange())){this.bf(this.viewportWidth())}this.dl();break;case"ViewportHeight":this.view().ay(this.viewportHeight());if($.ig.util.isNaN(this.largeVerticalChange())){this.bg(this.viewportHeight())}this.dn();break;case"ScrollbarBrush":case"ScrollbarSpan":case"MinScrollbarSize":case"VerticalTrackStartInset":this.dn();this.dl();break;case"HorizontalScrollbarStatus":case"VerticalOpacity":this.view().a4(false);break;case"ScrollbarStyle":this.view().a4(true);break}},ax:0,contentHeight:function(a){if(arguments.length===1){var b=this.ax;this.ax=a;if(b!=this.ax){this.c8("ContentHeight",b,this.ax)}return a}else{return this.ax}},c9:function(a){var b=Math.max(this.minScrollbarSize(),this.actualVerticalScrollbarHeight());var c=this.verticalTrackStartInset()+b/2;var d=this.viewportHeight()-b/2;var e=a/(d-c);var f=e*(this.contentHeight()-this.viewportHeight());this.df(0,f)},c7:function(a){var b=Math.max(this.minScrollbarSize(),this.actualHorizontalScrollbarWidth());var c=0+b/2;var d=this.viewportWidth()-b/2;var e=a/(d-c);var f=e*(this.contentWidth()-this.viewportWidth());this.df(f,0)},da:function(a,b,c){var d=this.bd;var e=this.bc;this.bd=a;this.bc=b;if(c&&(d!=a||e!=b)){this.c8("ViewportWidth",d,a);this.c8("ViewportHeight",e,b)}},bd:0,viewportWidth:function(a){if(arguments.length===1){var b=this.bd;this.bd=a;if(b!=this.bd){this.c8("ViewportWidth",b,this.bd)}return a}else{return this.bd}},bc:0,viewportHeight:function(a){if(arguments.length===1){var b=this.bc;this.bc=a;if(b!=this.bc){this.c8("ViewportHeight",b,this.bc)}return a}else{return this.bc}},a7:0,scrollTop:function(a){if(arguments.length===1){var b=this.a7;this.a7=a;if(b!=this.a7){this.c8("ScrollTop",b,this.a7)}return a}else{return this.a7}},a6:0,scrollLeft:function(a){if(arguments.length===1){var b=this.a6;this.a6=a;if(b!=this.a6){this.c8("ScrollLeft",b,this.a6)}return a}else{return this.a6}},f:null,view:function(){if(this.f==null){this.f=new $$t.a(this)}return this.f},provideContainer:function(a){this.view().a0(a);this.a7=this.view().aa();this.a6=this.view().z();this.dl();this.dn()},onDetachedFromUI:function(){this.view().ax()},onAttachedToUI:function(){this.view().au()},provideContent:function(a){this.view().a1(a)},ak:function(a,b,c){this.p=false;this.o=false;this.q=false;this.view().aj();if(this.keyboardListener()!=null){this.keyboardListener().onWheel()}this.df(b,c);return true},t:false,lockScrollDirection:function(a){if(arguments.length===1){this.t=true;return a}else{return this.t}},_y:false,aw:0,actualVerticalScrollbarHeight:function(a){if(arguments.length===1){var b=this.aw;this.aw=a;if(b!=this.aw){this.c8("ActualVerticalScrollbarHeight",b,this.aw)}return a}else{return this.aw}},ar:0,actualHorizontalScrollbarWidth:function(a){if(arguments.length===1){var b=this.ar;this.ar=a;if(b!=this.ar){this.c8("ActualHorizontalScrollbarWidth",b,this.ar)}return a}else{return this.ar}},c:0,scrollbarStyle:function(a){if(arguments.length===1){var b=this.c;this.c=a;if(b!=this.c){this.c8("ScrollbarStyle",$$t.$b.getBox(b),$$t.$b.getBox(this.c))}return a}else{return this.c}},az:0,horizontalScrollbarStatus:function(a){if(arguments.length===1){var b=this.az;this.az=a;if(b!=this.az){this.c8("HorizontalScrollbarStatus",b,this.az)}return a}else{return this.az}},ba:0,verticalScrollbarStatus:function(a){if(arguments.length===1){var b=this.ba;this.ba=a;if(b!=this.ba){this.c8("VerticalOpacity",b,this.ba)}return a}else{return this.ba}},h:null,horizontalAnimation:function(){return this.h},i:null,verticalAnimation:function(){return this.i},_bm:0,_bx:0,_bn:0,_by:0,_executionContext:null,executionContext:function(a){if(arguments.length===1){this._executionContext=a;return a}else{return this._executionContext}},isVerticalActive:function(){return this.w},isHorizontalActive:function(){return this.l},_isDraggingVBar:false,isDraggingVBar:function(a){if(arguments.length===1){this._isDraggingVBar=a;return a}else{return this._isDraggingVBar}},_isDraggingHBar:false,isDraggingHBar:function(a){if(arguments.length===1){this._isDraggingHBar=a;return a}else{return this._isDraggingHBar}},q:false,o:false,p:false,dr:null,n:false,propertyChanged:null,focus:function(){this.view().ar()},c6:function(a){this.view().ar();this.q=false;this.o=false;this.p=false;this.n=true;this.dr={__x:a.__x,__y:a.__y,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName}},c5:function(a){if(this.n){var b=a.__y-this.dr.__y;var c=a.__x-this.dr.__x;if(this.lockScrollDirection()&&!this.p){this.p=true;if(b>0||c>0){if(b>c){this.q=true}else{this.q=true}}}this.dr={__x:a.__x,__y:a.__y,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};this.df(-c,-b)}},onScrolling:null,scrollTo:function(a,b){this.a3=a-this.scrollLeft();this.a4=b-this.scrollTop();this.de()},a3:0,a4:0,df:function(a,b){this.a3+=a;this.a4+=b;this.de()},dg:function(a,b){this.a3+=a;this.a4+=b;this.dk()},u:false,de:function(){if(this.u){return}this.u=true;this.view().a2(this.dk.runOn(this))},dk:function(){this.u=false;var a=this.a3;var b=this.a4;this.a3=0;this.a4=0;if(this.p){if(this.q){a=0}if(this.o){b=0}}if(a!=0){this.r=false;this.cv();this.cz();this.r=true}if(b!=0){this.s=false;this.cw();this.c0();this.s=true}var c=Math.round(this.scrollTop()+b);var d=Math.round(this.scrollLeft()+a);if(c<0){c=0;this.view().aj()}if(d<0){d=0;this.view().aj()}if(c+this.viewportHeight()>this.contentHeight()){c=this.contentHeight()-this.viewportHeight();if(c<0){c=0}this.view().aj()}if(d+this.viewportWidth()>this.contentWidth()){d=this.contentWidth()-this.viewportWidth();if(d<0){d=0}this.view().aj()}b=c-this.scrollTop();a=d-this.scrollLeft();if(b!=0||a!=0){try{this.aq(true);this._y=true;this.scrollTop(c);this.scrollLeft(d);this.dn();this.dl();this._y=false;if(this.onScrolling!=null){this.onScrolling(this,function(){var $ret=new $$t.e;$ret.deltaX(a);$ret.deltaY(b);return $ret}())}}finally{this.aq(false)}}},dn:function(){this.dm(this.contentHeight(),this.viewportHeight(),this.scrollTop(),true)},dl:function(){this.dm(this.contentWidth(),this.viewportWidth(),this.scrollLeft(),false)},dm:function(a,b,c,d){var e=Math.round(b/a*b);var f=d?this.verticalTrackStartInset():0;e=e-f;if(e<this.minScrollbarSize()){e=this.minScrollbarSize()}if(e>=b-f){if(d){this.view().at()}else{this.view().as()}return}var g=f+e/2;var h=b-e/2;var i=c/(a-b);var j=Math.round(g+(h-g)*i);if(d){this.actualVerticalScrollbarHeight(e);this.view().a7(j,e)}else{this.actualHorizontalScrollbarWidth(e);this.view().a3(j,e)}},c4:function(a){this.p=false;this.o=false;this.q=false;this.n=false},ct:function(a,b){this.horizontalScrollbarStatus(this._bm+this.h.transitionProgress()*(this._bx-this._bm))},cu:function(a,b){this.verticalScrollbarStatus(this._bn+this.i.transitionProgress()*(this._by-this._bn))},cv:function(){if(this.l){return}if(this.scrollbarStyle()==1||this.scrollbarStyle()==2){if(this.h.animationActive()){this.h.stop()}this.horizontalScrollbarStatus(1);if(this.m&&this.r){this.m=false}}this.l=true},cw:function(){if(this.w){return}if(this.scrollbarStyle()==1||this.scrollbarStyle()==2){if(this.i.animationActive()){this.i.stop()}this.verticalScrollbarStatus(1);if(this.x&&this.s){this.x=false}}this.w=true},cz:function(){if(!this.l||this.isDraggingHBar()){return}if(this.scrollbarStyle()==1||this.scrollbarStyle()==2){this.di()}this.l=false},c0:function(){if(!this.w||this.isDraggingVBar()){return}if(this.scrollbarStyle()==1||this.scrollbarStyle()==2){this.dj()}this.w=false},b3:0,b4:0,b5:0,m:false,x:false,l:false,w:false,r:false,s:false,di:function(){if(!this.m){this.m=true;this.b4=this.executionContext().getCurrentRelativeTime();this.executionContext().executeDelayed(this.cx.runOn(this),this.b3)}else{this.b4=this.executionContext().getCurrentRelativeTime()}},dj:function(){if(!this.x){this.x=true;this.b5=this.executionContext().getCurrentRelativeTime();this.executionContext().executeDelayed(this.cy.runOn(this),this.b3)}else{this.b5=this.executionContext().getCurrentRelativeTime()}},cx:function(){if(!this.m){return}var a=this.executionContext().getCurrentRelativeTime();if(a-this.b4>=this.b3){if(!this.h.animationActive()&&this.horizontalScrollbarStatus()!=0){this._bm=this.horizontalScrollbarStatus();this._bx=0;this.h.start()}this.m=false}else{this.executionContext().executeDelayed(this.cx.runOn(this),this.b3-(a-this.b4))}},cy:function(){if(!this.x){return}var a=this.executionContext().getCurrentRelativeTime();if(a-this.b5>=this.b3){if(!this.i.animationActive()&&this.verticalScrollbarStatus()!=0){this._bn=this.verticalScrollbarStatus();this._by=0;this.i.start()}this.x=false}else{this.executionContext().executeDelayed(this.cy.runOn(this),this.b3-(a-this.b5))}},$type:new $.ig.Type("Scroller",$.ig.$ot,[$$0.$b6.$type])},true);$c("ScrollerScrollingEventArgs:e","EventArgs",{init:function(){$$0.$w.init.call(this)},_deltaX:0,deltaX:function(a){if(arguments.length===1){this._deltaX=a;return a}else{return this._deltaX}},_deltaY:0,deltaY:function(a){if(arguments.length===1){this._deltaY=a;return a}else{return this._deltaY}},$type:new $.ig.Type("ScrollerScrollingEventArgs",$$0.$w.$type)},true);$c("IScrollerKeyboardListener:f","Object",{$type:new $.ig.Type("IScrollerKeyboardListener",null)},true)});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});