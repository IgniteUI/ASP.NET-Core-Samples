/*!@license
* Infragistics.Web.ClientUI infragistics.datachart_visualdata.js 20.1.20201.45
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
*     infragistics.dv_geometry.js
*     infragistics.dv_visualdata.js
*     infragistics.datachart_core.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.dv_geometry","./infragistics.dv_visualdata","./infragistics.datachart_core","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$aq=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$1=$.ig.globalDefs.$$1;$$w=$.ig.globalDefs.$$w;$$r=$.ig.globalDefs.$$r;$$ap=$.ig.globalDefs.$$ap;$$j=$.ig.globalDefs.$$j;$$6=$.ig.globalDefs.$$6;$$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine([]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compareSimple,$x=$.ig.util.tryParseNumber,$y=$.ig.util.tryParseNumber1,$z=$.ig.util.numberToString,$0=$.ig.util.numberToString1,$1=$.ig.util.parseNumber,$2=$.ig.util.compare,$3=$.ig.util.replace,$4=$.ig.util.stringFormat,$5=$.ig.util.stringFormat1,$6=$.ig.util.stringFormat2,$7=$.ig.util.stringCompare1,$8=$.ig.util.stringCompare2,$9=$.ig.util.stringCompare3;$c("SeriesVisualDataManager:a","Object",{init:function(){$.ig.$op.init.call(this)},addSubSeriesVisualData:function(a,b){var c=a;var d=b;c.fragmentSeries().add(d)},copyVisualData:function(a,b){var c=a;var d=b;var f=d.shapes().getEnumerator();while(f.moveNext()){var e=f.current();c.shapes().add(e)}var h=d.markerShapes().getEnumerator();while(h.moveNext()){var g=h.current();c.markerShapes().add(g)}c.pixels(d.pixels());c.pixelWidth(d.pixelWidth())},createFragmentVisualData:function(a,b,c,d){var e=new $$t.i;e.viewport($.ig.RectData.prototype.b(b));e.type(c);e.name(d);return e},exportMarkerVisualData:function(a,b){var $self=this;var c=b;a._l0.cc(function(d){var e=$self.getMarkerVisualData(a,d,a.mj);c.markerShapes().add($b($$t.$k.$type,e))})},getMarkerVisualData:function(a,b,c){var d=new $$t.k;var e=new $.ig.PrimitiveAppearanceData;d.x(b._n);d.y(b._o);d.bounds(new $.ig.RectData(b._n-b._m/2,b._o-b._l/2,b._m,b._l));e.fill($.ig.ColorData.prototype.a_1($$a.$ax.u(0,0,0,0)));e.stroke($.ig.ColorData.prototype.a_1($$a.$ax.u(0,0,0,0)));d.index(-1);d.contentTemplate(b._ah);if(b.content()!=null&&$b($.ig.DataContext.prototype.$type,b.content())!==null&&b.__visibility==0){var f=b.content();e.fill($.ig.AppearanceHelper.prototype.b(f.actualItemBrush()));e.fillExtended($.ig.AppearanceHelper.prototype.a(f.actualItemBrush()));e.stroke($.ig.AppearanceHelper.prototype.b(f.outline()));e.strokeExtended($.ig.AppearanceHelper.prototype.a(f.outline()));e.strokeThickness(a.thickness());if(f.item()!=null){d.index(a.bz().indexOf(f.item()))}}e.isVisible(b.__visibility==0);d.isVisible(b.__visibility==0);d.markerAppearance(e);d.markerType(this.getMarkerType(a,c));return d},getMarkerType:function(a,b){if(b==a.seriesViewer().circleMarkerTemplate()){return"Circle"}else if(b==a.seriesViewer().diamondMarkerTemplate()){return"Diamond"}else if(b==a.seriesViewer().hexagonMarkerTemplate()){return"Hexagon"}else if(b==a.seriesViewer().hexagramMarkerTemplate()){return"Hexagram"}else if(b==a.seriesViewer().pentagonMarkerTemplate()){return"Pentagon"}else if(b==a.seriesViewer().pentagramMarkerTemplate()){return"Pentagram"}else if(b==a.seriesViewer().pyramidMarkerTemplate()){return"Pyramid"}else if(b==a.seriesViewer().squareMarkerTemplate()){return"Square"}else if(b==a.seriesViewer().tetragramMarkerTemplate()){return"Tetragram"}else if(b==a.seriesViewer().triangleMarkerTemplate()){return"Triangle"}else{return"None"}},exportMarkerVisualDataFromMarker:function(a,b,c){var d=b;var e=new $$t.k;var f=new $.ig.PrimitiveAppearanceData;e.x(c._n);e.y(c._o);e.bounds(new $.ig.RectData(c._n-c._m/2,c._o-c._l/2,c._m,c._l));e.index(-1);e.contentTemplate(c._ah);if($b($.ig.DataContext.prototype.$type,c.content())!==null){var g=c.content();f.fill($.ig.AppearanceHelper.prototype.b(g.actualItemBrush()));f.stroke($.ig.AppearanceHelper.prototype.b(g.outline()))}e.isVisible(c.__visibility==0);e.markerAppearance(f);if(c._ah==a.seriesViewer().circleMarkerTemplate()){e.markerType("Circle")}else if(c._ah==a.seriesViewer().diamondMarkerTemplate()){e.markerType("Diamond")}else if(c._ah==a.seriesViewer().hexagonMarkerTemplate()){e.markerType("Hexagon")}else if(c._ah==a.seriesViewer().hexagramMarkerTemplate()){e.markerType("Hexagram")}else if(c._ah==a.seriesViewer().pentagonMarkerTemplate()){e.markerType("Pentagon")}else if(c._ah==a.seriesViewer().pentagramMarkerTemplate()){e.markerType("Pentagram")}else if(c._ah==a.seriesViewer().pyramidMarkerTemplate()){e.markerType("Pyramid")}else if(c._ah==a.seriesViewer().squareMarkerTemplate()){e.markerType("Square")}else if(c._ah==a.seriesViewer().tetragramMarkerTemplate()){e.markerType("Tetragram")}else if(c._ah==a.seriesViewer().triangleMarkerTemplate()){e.markerType("Triangle")}else{e.markerType("None")}d.markerShapes().add(e)},exportPathData:function(a,b,c,d){var e=a;var f=new $.ig.PathVisualData(1,c,b);if(d!=null){for(var g=0;g<d.length;g++){f.tags().add(d[g])}}e.shapes().add(f)},exportPolygonData:function(a,b,c,d){var e=a;var f=new $.ig.PolygonVisualData(1,c,b);if(d!=null){for(var g=0;g<d.length;g++){f.tags().add(d[g])}}e.shapes().add(f)},exportPolylineData:function(a,b,c,d){var e=a;var f=new $.ig.PolyLineVisualData(1,c,b);if(d!=null){for(var g=0;g<d.length;g++){f.tags().add(d[g])}}e.shapes().add(f)},exportRectangleData:function(a,b,c,d){var e=a;var f=new $.ig.RectangleVisualData(1,c,b);if(d!=null){for(var g=0;g<d.length;g++){f.tags().add(d[g])}}e.shapes().add(f)},exportStackedVisualData:function(a,b){var c=new $$t.t;c.viewport($.ig.RectData.prototype.b(b));c.type(a.getType().typeName());c.name(a.name());return c},exportTrendlineData:function(a,b,c){var d=b;var e=new $.ig.PolyLineVisualData(1,"trendLine",c);e.tags().add("Trend");d.shapes().add(e)},exportVisualData:function(a,b){var c=new $$t.i;c.viewport($.ig.RectData.prototype.b(b));c.type(this.b(a.getType().typeName()));c.name(a.name());c.opacity(a.__opacity);return c},exportSeriesPixelsData:function(a,b,c,d){var e=a;e.pixels(b);e.pixelWidth(c);e.pixelHeight(d)},b:function(a){return a},addPointerTooltipData:function(a,b,c,d,e){if(b==null){return}var f=a;var g=b;g.offsetX(c);g.offsetY(d);g.categoryNames(e);f.pointerTooltips().add(g)},exportPointerTooltipData:function(a,b,c,d){var e=new $$t.s;e.pointerFillShape(new $.ig.PolygonVisualData(1,"fillShape",a));e.pointerOutlineShape(new $.ig.PolyLineVisualData(1,"outlineShape",b));e.boxShape(new $.ig.RectangleVisualData(1,"boxShape",c));e.viewport($.ig.RectData.prototype.b(d));return e},exportCalloutData:function(a,b,c,d,e,f,g,h,i,j,k){var l=new $$t.r;l.left(a);l.top(b);l.marginLeft(c);l.marginTop(d);l.background(new $.ig.RectangleVisualData(1,"calloutBackground",f));l.text($.ig.AppearanceHelper.prototype.c(g,h));l.line(new $.ig.LineVisualData(1,"calloutLeaderLine",i));e.calloutShapes().add(l)},$type:new $.ig.Type("SeriesVisualDataManager",$.ig.$ot,[$.ig.ISeriesVisualDataManager.prototype.$type])},true);$c("AxisVisualDataManager:b","Object",{init:function(){$.ig.$op.init.call(this)},c:function(a){return a},d:function(a,b){var c=$$t.$u.a(b);return c},a:function(a,b,c,d){var e=new $$t.g;var f=a._a2;var g=f.exportLabelsPanelViewport();e.viewport($.ig.RectData.prototype.b(g));var h=this.d(a,d);e.textPlotArea($.ig.RectData.prototype.b(h));var i=d.__visibility==0&&d._x!=null;var j=a._at._ae.d();var k=f.exportTitleMargin(d);var l=this.b(a,d,j);var m=$.ig.AppearanceHelper.prototype.c(d,l);m.marginLeft(k._c);m.marginRight(k._d);m.marginTop(k._e);m.marginBottom(k._b);m.fontStretch("Normal");m.textWrapping("Wrap");m.visibility(i);if(a.titleSettings()!=null){m.horizontalAlignment($$a.$w.$getName(a.titleSettings().horizontalAlignment()));m.verticalAlignment($$a.$ai.$getName(a.titleSettings().verticalAlignment()));m.textPosition($.ig.AxisTitlePosition.prototype.$getName(a.titleSettings().position()))}else{m.horizontalAlignment($$a.$w.$getName(0));m.verticalAlignment($$a.$ai.$getName(1));m.textPosition($.ig.AxisTitlePosition.prototype.$getName(0))}e.appearance(m);return e},exportVisualData:function(a){var b=new $$t.m;b.viewport($.ig.RectData.prototype.b(a.i1()));b.labelsViewport($.ig.RectData.prototype.b(a._a2.exportLabelsPanelViewport()));b.type(this.c(a.getType().typeName()));b.name(a.name());var c=new $.ig.PathVisualData(1,"axisLine",a._a2._a7);b.axisLine(c);b.tickMarks(new $.ig.PathVisualData(1,"tickMarks",a._at._ae._av));if(!a._at._ab.contains(a._at._ae._av)){b.tickMarks().data().clear()}b.minorLines(new $.ig.PathVisualData(1,"minorLines",a._a2._a9));b.majorLines(new $.ig.PathVisualData(1,"majorLines",a._a2._a8));b.strips(new $.ig.PathVisualData(1,"strips",a._a2._ba));if(a.title()!=null){var d=this.a(a,a.seriesViewer(),b.type(),a._hk);b.title(d)}else{b.title(null)}var e=a.seriesViewer().getFontInfo();if(a.labelSettings()!=null&&a.labelSettings().textStyle()!=null){e=a.labelSettings().g(a.seriesViewer()._bn._i._ae)}var f,g,h,i;var j=a._at._ae._av._ak._d;for(var k=1;k<j.count();k++){var l=j.__inner[k];var m=j.__inner[k-1];f=l._d.__x-l._c.__x;g=l._d.__y-l._c.__y;h=m._d.__x-m._c.__x;i=m._d.__y-m._c.__y;if(1==k){b.tickMarksLength(Math.sqrt(Math.pow(f,2)+Math.pow(g,2)))}}var n=a._at._a2;var o=a._at._ae.g();for(var p=0;p<n.count();p++){var q=a._at._a2.__inner[p];var r=a._at.a1().__inner[p];var s=function(){var $ret=new $$t.o;$ret.labelPosition(q._c);$ret.labelValue(r);$ret.panelPosition($.ig.PointData.prototype.b(a._a2.exportLabelsPanelPosition()));return $ret}();var t=new $$4.x($$a.$an.$type,0);var v=o.getEnumerator();while(v.moveNext()){var u=v.current();t.add(u)}if(p<t.count()){var w=this.b(a,t.__inner[p],e);s.appearance($.ig.AppearanceHelper.prototype.c(t.__inner[p],w));s.position($.ig.PointData.prototype.b(a._a2.a2(t.__inner[p])));s.size($.ig.SizeData.prototype.b(new $$a.af(1,t.__inner[p]._m,t.__inner[p]._l)))}b.labels().add(s)}var x=null;for(var y=0;y<a._bm.active().count();y++){if(x==null){x=new $$4.x($.ig.RectangleVisualData.prototype.$type,0)}var z=new $.ig.RectangleVisualData(1,"annotationBacking_"+y,a._bm.item(y));z.appearance().canvasLeft(a._bm.item(y)._n);z.appearance().canvasTop(a._bm.item(y)._o);x.add(z)}b.annotationBackings(x);return b},b:function(a,b,c){return $.ig.FontUtil.prototype.getFontInfo(a.seriesViewer()._bn._i._ae,b,c)},$type:new $.ig.Type("AxisVisualDataManager",$.ig.$ot,[$.ig.IAxisVisualDataManager.prototype.$type])},true);$c("DataChartVisualDataManager:c","Object",{init:function(){$.ig.$op.init.call(this)},exportVisualData:function(a){var b=new $$t.e;for(var c=0;c<a.axes().count();c++){var d=a.axes().__inner[c].exportVisualData();b.axes().add1(d)}for(var e=0;e<a.series().count();e++){var f=a.series().__inner[e].exportVisualData();b.series().add1(f)}b.name(a.name());this.b(a,b);this.c(a,b);return b},c:function(a,b){var c=a._bn;b.width(c._a6);b.height(c._a5);b.contentArea($.ig.RectData.prototype.b(c.e3()));b.centralArea(new $.ig.RectData(c.a2(),0,c._a6-(c.a2()+c.a3()),c._a5-(c.a4()+c.a1())));b.plotArea($.ig.RectData.prototype.b(a.viewportRect()))},exportTitleBounds:function(a,b){var c=$$t.$u.a(a);return c},b:function(a,b){var c=a._bn;var d=null;b.title(null);b.subtitle(null);var e=c.getTitleMargin();var f=0;var g=0;if(c.en()!=null){d=c.t();var h=this.a(c,c.en(),d);var i={__x:0,__y:0,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};g=c.en()._l+e._b+e._e;var j=new $$t.g;var k=c.e3();j.viewport(new $.ig.RectData(k.left(),k.top(),k.width(),g));j.textPlotArea($.ig.RectData.prototype.b(this.exportTitleBounds(c.en(),a)));j.textPlotArea(new $.ig.RectData(c.en()._n,c.en()._o,c.en()._m,c.en()._l));f=j.height();j.appearance($.ig.AppearanceHelper.prototype.c(c.en(),h));var l=c.getTitleMargin();j.appearance().marginTop(l._e);j.appearance().marginLeft(l._c);j.appearance().marginRight(l._d);j.appearance().marginBottom(l._b);var m=c.ep();j.appearance().horizontalAlignment($$a.$w.$getName(m));b.title(j)}if(c.em()!=null){d=c.s();var n=this.a(c,c.em(),d);var o={__x:0,__y:f,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};var p=c.getSubtitleMargin();var q=c.em()._l+p._b+p._e;var r=new $$t.g;var s=c.e3();r.viewport(new $.ig.RectData(s.left(),s.top()+g,s.width(),q));r.textPlotArea($.ig.RectData.prototype.b(this.exportTitleBounds(c.em(),a)));r.appearance($.ig.AppearanceHelper.prototype.c(c.em(),n));var t=c.getSubtitleMargin();r.appearance().marginTop(t._e);r.appearance().marginLeft(t._c);r.appearance().marginRight(t._d);r.appearance().marginBottom(t._b);var u=c.eo();r.appearance().horizontalAlignment($$a.$w.$getName(u));b.subtitle(r)}},a:function(a,b,c){return $.ig.FontUtil.prototype.getFontInfo(a._i._ae,b,c)},$type:new $.ig.Type("DataChartVisualDataManager",$.ig.$ot,[$.ig.IDataChartVisualDataManager.prototype.$type])},true);$c("VisualDataFactoryManager:d","Object",{init:function(){$.ig.$op.init.call(this)},register:function(){if(!$$t.$d.a){$.ig.DVContainer.prototype.instance().registerFactory($.ig.IDataChartVisualDataManager.prototype.$type,function(){return new $$t.c});$.ig.DVContainer.prototype.instance().registerFactory($.ig.IAxisVisualDataManager.prototype.$type,function(){return new $$t.b});$.ig.DVContainer.prototype.instance().registerFactory($.ig.ISeriesVisualDataManager.prototype.$type,function(){return new $$t.a});$$t.$d.a=true}},$type:new $.ig.Type("VisualDataFactoryManager",$.ig.$ot)},true);$c("ChartVisualData:e","Object",{init:function(){$.ig.$op.init.call(this);this.dipScalingRatio(1);this.axes(new $$t.l);this.series(new $$t.h)},_axes:null,axes:function(a){if(arguments.length===1){this._axes=a;return a}else{return this._axes}},_series:null,series:function(a){if(arguments.length===1){this._series=a;return a}else{return this._series}},_title:null,title:function(a){if(arguments.length===1){this._title=a;return a}else{return this._title}},_subtitle:null,subtitle:function(a){if(arguments.length===1){this._subtitle=a;return a}else{return this._subtitle}},_width:0,width:function(a){if(arguments.length===1){this._width=a;return a}else{return this._width}},_height:0,height:function(a){if(arguments.length===1){this._height=a;return a}else{return this._height}},_contentArea:null,contentArea:function(a){if(arguments.length===1){this._contentArea=a;return a}else{return this._contentArea}},_centralArea:null,centralArea:function(a){if(arguments.length===1){this._centralArea=a;return a}else{return this._centralArea}},_plotArea:null,plotArea:function(a){if(arguments.length===1){this._plotArea=a;return a}else{return this._plotArea}},_name:null,name:function(a){if(arguments.length===1){this._name=a;return a}else{return this._name}},_isViewportScaled:false,isViewportScaled:function(a){if(arguments.length===1){this._isViewportScaled=a;return a}else{return this._isViewportScaled}},scaleByViewport:function(){var b=this.axes().getEnumerator();while(b.moveNext()){var a=b.current();a.p()}var d=this.series().getEnumerator();while(d.moveNext()){var c=d.current();c.m()}if(this.title()!=null){this.title().g()}if(this.subtitle()!=null){this.subtitle().g()}},getBounds:function(){return new $.ig.RectData(0,0,this.width(),this.height())},serialize:function(){var a=new $$6.aj(0);a.u("{");a.u("name: '"+this.name()+"',");a.u("width: "+this.width()+",");a.u("height: "+this.height()+",");a.u("plotArea: { left: "+this.plotArea().left()+", top: "+this.plotArea().top()+", width: "+this.plotArea().width()+", height: "+this.plotArea().height()+"}, ");a.u("contentArea: { left: "+this.contentArea().left()+", top: "+this.contentArea().top()+", width: "+this.contentArea().width()+", height: "+this.contentArea().height()+"}, ");a.u("centralArea: { left: "+this.centralArea().left()+", top: "+this.centralArea().top()+", width: "+this.centralArea().width()+", height: "+this.centralArea().height()+"}, ");a.u("isViewportScaled: "+(this.isViewportScaled()?"true":"false")+", ");a.u("axes: [");for(var b=0;b<this.axes().count();b++){if(b!=0){a.l(", ")}a.l(this.axes().__inner[b].serialize())}a.u("],");a.u("series: [");for(var c=0;c<this.series().count();c++){if(c!=0){a.l(", ")}a.l(this.series().__inner[c].serialize())}a.u("]");if(this.title()!=null){a.u(", title: "+this.title().serialize())}if(this.subtitle()!=null){a.u(", subtitle: "+this.subtitle().serialize())}a.l(", dipScalingRatio: "+this.dipScalingRatio().toString());a.u("}");return a.toString()},getSerializedSeriesPoints:function(a,b,c){var d=new $$4.x($$4.$x.$type.specialize($.ig.PointData.prototype.$type),0);for(var e=0;e<this.series().count();e++){if(this.series().__inner[e].name()==a){var f=this.series().__inner[e].shapes().containingTag(b);for(var g=0;g<f.count();g++){var h=f.__inner[e];h.getPointsOverride(d,c)}}}var i=new $$6.aj(0);i.u("[");for(var j=0;j<d.count();j++){var k=d.__inner[j];i.u("[");for(var l=0;l<k.count();l++){if(l!=0){i.l(", ")}i.l("{ x: "+k.__inner[l].x()+", y: "+k.__inner[l].y()+"}")}i.u("]")}i.u("]");return i.toString()},_dipScalingRatio:0,dipScalingRatio:function(a){if(arguments.length===1){this._dipScalingRatio=a;return a}else{return this._dipScalingRatio}},$type:new $.ig.Type("ChartVisualData",$.ig.$ot)},true);$c("ChartTitleVisualData:g","Object",{init:function(){$.ig.$op.init.call(this);this.appearance(new $.ig.LabelAppearanceData)},width:function(){return this.viewport().width()},height:function(){return this.viewport().height()},_viewport:null,viewport:function(a){if(arguments.length===1){this._viewport=a;return a}else{return this._viewport}},_textPlotArea:null,textPlotArea:function(a){if(arguments.length===1){this._textPlotArea=a;return a}else{return this._textPlotArea}},_appearance:null,appearance:function(a){if(arguments.length===1){this._appearance=a;return a}else{return this._appearance}},serialize:function(){var a=new $$6.aj(0);a.u("{");a.u("viewport: "+this.viewport().serialize()+", ");a.u("textPlotArea: "+this.textPlotArea().serialize()+", ");a.u("appearance: "+this.appearance().serialize());a.u("}");return a.toString()},h:function(a){var b=(this.textPlotArea().left()-a.left())/a.width();var c=(this.textPlotArea().top()-a.top())/a.height();var d=this.textPlotArea().width()/a.width();var e=this.textPlotArea().height()/a.height();this.textPlotArea(new $.ig.RectData(b,c,d,e))},g:function(){var a=(this.textPlotArea().left()-this.viewport().left())/this.viewport().width();var b=(this.textPlotArea().top()-this.viewport().top())/this.viewport().height();var c=this.textPlotArea().width()/this.viewport().width();var d=this.textPlotArea().height()/this.viewport().height();this.textPlotArea(new $.ig.RectData(a,b,c,d))},j:function(a){var b=this.textPlotArea().left()*a.width();var c=this.textPlotArea().top()*a.height();var d=this.textPlotArea().width()*a.width();var e=this.textPlotArea().height()*a.height();this.textPlotArea(new $.ig.RectData(b,c,d,e))},i:function(){var a=this.textPlotArea().left()*this.viewport().width();var b=this.textPlotArea().top()*this.viewport().height();var c=this.textPlotArea().width()*this.viewport().width();var d=this.textPlotArea().height()*this.viewport().height();this.textPlotArea(new $.ig.RectData(a,b,c,d))},$type:new $.ig.Type("ChartTitleVisualData",$.ig.$ot)},true);$c("ChartTitleVisualDataList:f","List$1",{init:function(){$$4.$x.init.call(this,$$t.$g.$type,0)},$type:new $.ig.Type("ChartTitleVisualDataList",$$4.$x.$type.specialize($$t.$g.$type))},true);$c("SeriesVisualData:i","Object",{init:function(){$.ig.$op.init.call(this);this.shapes(new $.ig.PrimitiveVisualDataList);this.markerShapes(new $$t.j);this.pointerTooltips(new $$t.p);this.calloutShapes(new $$t.q)},_name:null,name:function(a){if(arguments.length===1){this._name=a;return a}else{return this._name}},_type:null,type:function(a){if(arguments.length===1){this._type=a;return a}else{return this._type}},_viewport:null,viewport:function(a){if(arguments.length===1){this._viewport=a;return a}else{return this._viewport}},_opacity:0,opacity:function(a){if(arguments.length===1){this._opacity=a;return a}else{return this._opacity}},_shapes:null,shapes:function(a){if(arguments.length===1){this._shapes=a;return a}else{return this._shapes}},_pointerTooltips:null,pointerTooltips:function(a){if(arguments.length===1){this._pointerTooltips=a;return a}else{return this._pointerTooltips}},_markerShapes:null,markerShapes:function(a){if(arguments.length===1){this._markerShapes=a;return a}else{return this._markerShapes}},_calloutShapes:null,calloutShapes:function(a){if(arguments.length===1){this._calloutShapes=a;return a}else{return this._calloutShapes}},_pixels:null,pixels:function(a){if(arguments.length===1){this._pixels=a;return a}else{return this._pixels}},_pixelWidth:0,pixelWidth:function(a){if(arguments.length===1){this._pixelWidth=a;return a}else{return this._pixelWidth}},_pixelHeight:0,pixelHeight:function(a){if(arguments.length===1){this._pixelHeight=a;return a}else{return this._pixelHeight}},m:function(){var b=this.shapes().getEnumerator();while(b.moveNext()){var a=b.current();a.scaleByViewport(this.viewport())}var d=this.markerShapes().getEnumerator();while(d.moveNext()){var c=d.current();c.i(this.viewport())}var f=this.pointerTooltips().getEnumerator();while(f.moveNext()){var e=f.current();e.scaleByViewport(this.viewport())}},serialize:function(){var a=new $$6.aj(0);a.u("{");a.u('name: "'+this.name()+'",');a.u('type: "'+this.type()+'", ');a.u("opacity: "+this.opacity()+", ");a.u("viewport: { left: "+this.viewport().left()+", top: "+this.viewport().top()+", width: "+this.viewport().width()+", height: "+this.viewport().height()+"}, ");a.u("shapes: [");for(var b=0;b<this.shapes().count();b++){if(b!=0){a.l(", ")}a.l(this.shapes().__inner[b].serialize())}a.u("],");a.u("pointerTooltips: [");for(var c=0;c<this.pointerTooltips().count();c++){if(c!=0){a.l(", ")}a.l(this.pointerTooltips().__inner[c].serialize())}a.u("],");if(this.calloutShapes()!=null&&this.calloutShapes().count()>0){a.u("calloutshapes: [");for(var d=0;d<this.calloutShapes().count();d++){if(d!=0){a.l(", ")}a.l(this.calloutShapes().__inner[d].serialize())}a.u("],")}a.u("markerShapes: [");for(var e=0;e<this.markerShapes().count();e++){if(e!=0){a.l(", ")}a.l(this.markerShapes().__inner[e].serialize())}a.u("]");if(this.pixels()!=null){a.u(", pixels: [");for(var f=0;f<this.pixels().length;f++){if(f!=0){a.l(", ")}a.l(this.pixels()[f].toString())}a.u("], ");a.u("pixelWidth: "+this.pixelWidth()+", ")}a.u("}");return a.toString()},$type:new $.ig.Type("SeriesVisualData",$.ig.$ot)},true);$c("SeriesVisualDataList:h","List$1",{init:function(){$$4.$x.init.call(this,$$t.$i.$type,0)},$type:new $.ig.Type("SeriesVisualDataList",$$4.$x.$type.specialize($$t.$i.$type))},true);$c("MarkerVisualData:k","Object",{init:function(){$.ig.$op.init.call(this)},_x:0,x:function(a){if(arguments.length===1){this._x=a;return a}else{return this._x}},_y:0,y:function(a){if(arguments.length===1){this._y=a;return a}else{return this._y}},_index:0,index:function(a){if(arguments.length===1){this._index=a;return a}else{return this._index}},_markerAppearance:null,markerAppearance:function(a){if(arguments.length===1){this._markerAppearance=a;return a}else{return this._markerAppearance}},_markerType:null,markerType:function(a){if(arguments.length===1){this._markerType=a;return a}else{return this._markerType}},_contentTemplate:null,contentTemplate:function(a){if(arguments.length===1){this._contentTemplate=a;return a}else{return this._contentTemplate}},_isVisible:false,isVisible:function(a){if(arguments.length===1){this._isVisible=a;return a}else{return this._isVisible}},serialize:function(){return"{ x: "+this.x()+", y: "+this.y()+", index: "+this.index()+", markerAppearance: "+(this.markerAppearance()!=null?this.markerAppearance().serialize():"null")+', markerType: "'+this.markerType()+'", isVisible: '+(this.isVisible()?"true":"false")+", "+"bounds: { left: "+this.bounds().left()+", top:"+this.bounds().top()+", width:"+this.bounds().width()+", height: "+this.bounds().height()+"} }"},i:function(a){this.x((this.x()-a.left())/a.width());this.y((this.y()-a.top())/a.height());if(this.bounds()!=null){var b=(this.bounds().left()-a.left())/a.width();var c=(this.bounds().top()-a.top())/a.height();var d=(this.bounds().left()+this.bounds().width()-a.left())/a.width();var e=(this.bounds().top()+this.bounds().height()-a.top())/a.height();this.bounds(new $.ig.RectData(b,c,d-b,e-c))}},_bounds:null,bounds:function(a){if(arguments.length===1){this._bounds=a;return a}else{return this._bounds}},$type:new $.ig.Type("MarkerVisualData",$.ig.$ot)},true);$c("MarkerVisualDataList:j","List$1",{init:function(){$$4.$x.init.call(this,$$t.$k.$type,0)},$type:new $.ig.Type("MarkerVisualDataList",$$4.$x.$type.specialize($$t.$k.$type))},true);$c("AxisVisualData:m","Object",{init:function(){$.ig.$op.init.call(this);this.tickMarksLength(0);this.labels(new $$t.n);this.title(new $$t.g)},_name:null,name:function(a){if(arguments.length===1){this._name=a;return a}else{return this._name}},_type:null,type:function(a){if(arguments.length===1){this._type=a;return a}else{return this._type}},_viewport:null,viewport:function(a){if(arguments.length===1){this._viewport=a;return a}else{return this._viewport}},_tickMarksLength:0,tickMarksLength:function(a){if(arguments.length===1){this._tickMarksLength=a;return a}else{return this._tickMarksLength}},_tickMarks:null,tickMarks:function(a){if(arguments.length===1){this._tickMarks=a;return a}else{return this._tickMarks}},_labels:null,labels:function(a){if(arguments.length===1){this._labels=a;return a}else{return this._labels}},_axisLine:null,axisLine:function(a){if(arguments.length===1){this._axisLine=a;return a}else{return this._axisLine}},_majorLines:null,majorLines:function(a){if(arguments.length===1){this._majorLines=a;return a}else{return this._majorLines}},_minorLines:null,minorLines:function(a){if(arguments.length===1){this._minorLines=a;return a}else{return this._minorLines}},_strips:null,strips:function(a){if(arguments.length===1){this._strips=a;return a}else{return this._strips}},_labelsPlotArea:null,labelsPlotArea:function(a){if(arguments.length===1){this._labelsPlotArea=a;return a}else{return this._labelsPlotArea}},_labelsViewport:null,labelsViewport:function(a){if(arguments.length===1){this._labelsViewport=a;return a}else{return this._labelsViewport}},_title:null,title:function(a){if(arguments.length===1){this._title=a;return a}else{return this._title}},_annotationBackings:null,annotationBackings:function(a){if(arguments.length===1){this._annotationBackings=a;return a}else{return this._annotationBackings}},p:function(){var a=true;if(this.type().equals("NumericYAxis")||this.type().equals("CategoryYAxis")||this.type().equals("PercentChangeYAxis")){a=false}var c=this.labels().getEnumerator();while(c.moveNext()){var b=c.current();b.h(this.labelsViewport(),a)}this.tickMarks().scaleByViewport(this.labelsViewport());this.axisLine().scaleByViewport(this.labelsViewport());if(this.title()!=null){this.title().h(this.labelsViewport())}this.majorLines().scaleByViewport(this.viewport());this.minorLines().scaleByViewport(this.viewport());this.strips().scaleByViewport(this.viewport());if(this.annotationBackings()!=null){var e=this.annotationBackings().getEnumerator();while(e.moveNext()){var d=e.current();d.scaleByViewport(this.labelsViewport())}}},serialize:function(){var a=new $$6.aj(0);a.u("{");a.u('name: "'+this.name()+'",');a.u('type: "'+this.type()+'", ');a.u('tickMarksLength: "'+this.tickMarksLength().toString()+'", ');a.u("viewport: "+this.viewport().serialize()+", ");a.u("labelsViewport: "+this.labelsViewport().serialize()+", ");if(this.labelsPlotArea()!=null){a.u("labelsPlotArea: "+this.labelsPlotArea().serialize()+", ")}a.u("labels: [");for(var b=0;b<this.labels().count();b++){if(b!=0){a.l(", ")}a.l(this.labels().__inner[b].serialize())}a.u("],");if(this.title()!=null){a.u("title: "+(this.title()!=null?this.title().serialize():"null")+", ")}a.u("axisLine: "+(this.axisLine()!=null?this.axisLine().serialize():"null")+", ");a.u("tickMarks: "+(this.tickMarks()!=null?this.tickMarks().serialize():"null")+", ");if(this.annotationBackings()!=null){a.u("annotationBackings: [");for(var c=0;c<this.annotationBackings().count();c++){if(c!=0){a.l(", ")}a.l(this.annotationBackings().__inner[c].serialize())}a.u("],")}if(this.axisLine()!=null){a.u("majorLines: "+(this.majorLines()!=null?this.majorLines().serialize():"null")+", ");a.u("minorLines: "+(this.minorLines()!=null?this.minorLines().serialize():"null")+", ");a.u("strips: "+(this.strips()!=null?this.strips().serialize():"null"))}a.u("}");return a.toString()},$type:new $.ig.Type("AxisVisualData",$.ig.$ot)},true);$c("AxisVisualDataList:l","List$1",{init:function(){$$4.$x.init.call(this,$$t.$m.$type,0)},$type:new $.ig.Type("AxisVisualDataList",$$4.$x.$type.specialize($$t.$m.$type))},true);$c("AxisLabelVisualData:o","Object",{_labelValue:null,labelValue:function(a){if(arguments.length===1){this._labelValue=a;return a}else{return this._labelValue}},_labelPosition:0,labelPosition:function(a){if(arguments.length===1){this._labelPosition=a;return a}else{return this._labelPosition}},_position:null,position:function(a){if(arguments.length===1){this._position=a;return a}else{return this._position}},_panelPosition:null,panelPosition:function(a){if(arguments.length===1){this._panelPosition=a;return a}else{return this._panelPosition}},_appearance:null,appearance:function(a){if(arguments.length===1){this._appearance=a;return a}else{return this._appearance}},_size:null,size:function(a){if(arguments.length===1){this._size=a;return a}else{return this._size}},init:function(){$.ig.$op.init.call(this);this.position(new $.ig.PointData(NaN,NaN));this.size(new $.ig.SizeData(NaN,NaN));this.panelPosition(new $.ig.PointData(NaN,NaN))},serialize:function(){var a=new $$6.aj(0);a.u("{");a.u("position: "+"{ x: "+this.position().x()+", y: "+this.position().y()+"},");a.u("size: "+"{ width: "+this.size().width()+", height: "+this.size().height()+"},");a.u("labelPosition: "+this.labelPosition()+",");a.u("appearance: "+(this.appearance()!=null?this.appearance().serialize():"null"));a.u("}");return a.toString()},h:function(a,b){if(b){this.labelPosition((this.labelPosition()-a.left())/a.width())}else{this.labelPosition((this.labelPosition()-a.top())/a.height())}var c=(this.position().x()-a.left())/a.width();var d=(this.position().y()-a.top())/a.height();this.position(new $.ig.PointData(c,d));var e=this.size().width()/a.width();var f=this.size().height()/a.height();this.size(new $.ig.SizeData(e,f))},$type:new $.ig.Type("AxisLabelVisualData",$.ig.$ot)},true);$c("AxisLabelVisualDataList:n","List$1",{init:function(){$$4.$x.init.call(this,$$t.$o.$type,0)},$type:new $.ig.Type("AxisLabelVisualDataList",$$4.$x.$type.specialize($$t.$o.$type))},true);$c("PointerTooltipVisualData:s","Object",{init:function(){$.ig.$op.init.call(this)},_boxShape:null,boxShape:function(a){if(arguments.length===1){this._boxShape=a;return a}else{return this._boxShape}},_pointerFillShape:null,pointerFillShape:function(a){if(arguments.length===1){this._pointerFillShape=a;return a}else{return this._pointerFillShape}},_pointerOutlineShape:null,pointerOutlineShape:function(a){if(arguments.length===1){this._pointerOutlineShape=a;return a}else{return this._pointerOutlineShape}},_offsetX:0,offsetX:function(a){if(arguments.length===1){this._offsetX=a;return a}else{return this._offsetX}},_offsetY:0,offsetY:function(a){if(arguments.length===1){this._offsetY=a;return a}else{return this._offsetY}},_categoryNames:null,categoryNames:function(a){if(arguments.length===1){
this._categoryNames=a;return a}else{return this._categoryNames}},serialize:function(){var a="";if(this.categoryNames()!=null){var c=this.categoryNames().getEnumerator();while(c.moveNext()){var b=c.current();a+='"'+b+'",'}if(a!=""){a=a.substr(0,a.length-1)}}var d=new $$6.aj(0);d.u("{");d.u("offsetX: "+this.offsetX()+", ");d.u("offsetY: "+this.offsetY()+", ");d.u("boxShape: "+this.boxShape().serialize()+", ");d.u("pointerFillShape: "+this.pointerFillShape().serialize()+", ");d.u("viewport: { left: "+this.viewport().left()+", top: "+this.viewport().top()+", width: "+this.viewport().width()+", height: "+this.viewport().height()+"}, ");d.u("pointerOutlineShape: "+this.pointerOutlineShape().serialize()+", ");d.u("categoryNames: ["+a+"]");d.u("}");return d.toString()},scaleByViewport:function(a){this.boxShape().scaleByViewport(this.viewport());this.pointerFillShape().scaleByViewport(this.viewport());this.pointerOutlineShape().scaleByViewport(this.viewport());this.offsetX((this.offsetX()-a.left())/a.width());this.offsetY((this.offsetY()-a.top())/a.height())},_viewport:null,viewport:function(a){if(arguments.length===1){this._viewport=a;return a}else{return this._viewport}},$type:new $.ig.Type("PointerTooltipVisualData",$.ig.$ot)},true);$c("PointerTooltipVisualDataList:p","List$1",{init:function(){$$4.$x.init.call(this,$$t.$s.$type,0)},$type:new $.ig.Type("PointerTooltipVisualDataList",$$4.$x.$type.specialize($$t.$s.$type))},true);$c("CalloutVisualData:r","Object",{init:function(){$.ig.$op.init.call(this)},_background:null,background:function(a){if(arguments.length===1){this._background=a;return a}else{return this._background}},_text:null,text:function(a){if(arguments.length===1){this._text=a;return a}else{return this._text}},_line:null,line:function(a){if(arguments.length===1){this._line=a;return a}else{return this._line}},_left:0,left:function(a){if(arguments.length===1){this._left=a;return a}else{return this._left}},_top:0,top:function(a){if(arguments.length===1){this._top=a;return a}else{return this._top}},_marginLeft:0,marginLeft:function(a){if(arguments.length===1){this._marginLeft=a;return a}else{return this._marginLeft}},_marginTop:0,marginTop:function(a){if(arguments.length===1){this._marginTop=a;return a}else{return this._marginTop}},serialize:function(){var a=new $$6.aj(0);a.u("{");a.u("left: "+this.left().toString()+",");a.u("top: "+this.top().toString()+",");a.u("marginLeft: "+this.marginLeft().toString()+",");a.u("marginTop: "+this.marginTop().toString()+",");a.u("background: "+this.background().serialize()+",");a.u("text: "+this.text().serialize()+",");a.u("line: "+this.line().serialize());a.u("}");return a.toString()},scaleByViewport:function(a){this.left((this.left()-a.left())/a.width());this.top((this.top()-a.top())/a.height());this.marginLeft(this.marginLeft()/a.width());this.marginTop(this.marginTop()/a.height());this.background().scaleByViewport(a);this.line().scaleByViewport(a)},$type:new $.ig.Type("CalloutVisualData",$.ig.$ot)},true);$c("CalloutVisualDataList:q","List$1",{init:function(){$$4.$x.init.call(this,$$t.$r.$type,0)},$type:new $.ig.Type("CalloutVisualDataList",$$4.$x.$type.specialize($$t.$r.$type))},true);$c("StackedSeriesVisualData:t","SeriesVisualData",{init:function(){$$t.$i.init.call(this);this.fragmentSeries(new $$t.h)},_fragmentSeries:null,fragmentSeries:function(a){if(arguments.length===1){this._fragmentSeries=a;return a}else{return this._fragmentSeries}},$type:new $.ig.Type("StackedSeriesVisualData",$$t.$i.$type)},true);$c("VisualExportHelper:u","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a){var b={__x:a._n,__y:a._o,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};var c=new $$a.ae(0,b.__x,b.__y,a._m,a._l);var d=a._j;if(d==null){return c}var e=0;var f=0;var g=0;var h=null;if($b($$a.$bq.$type,d)!==null){h=$b($$a.$bq.$type,d);e=h._j}else if($b($$a.$bv.$type,d)!==null){var i=$b($$a.$bv.$type,d);var k=i._j.getEnumerator();while(k.moveNext()){var j=k.current();if($b($$a.$bq.$type,j)!==null){h=$b($$a.$bq.$type,j);e=h._j}if($b($$a.$br.$type,j)!==null){var l=$b($$a.$br.$type,j);f=l._j;g=l._k}}}if(h!=null){c=$.ig.RectUtil.prototype.x(c,h._k,h._l,e)}c.x(c.x()+f);c.y(c.y()+g);return c},$type:new $.ig.Type("VisualExportHelper",$.ig.$ot)},true);$c("VisualDataSerializer:v","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a){var b="{ left: "+a.left()+", top: "+a.top()+", width: "+a.width()+", height: "+a.height()+" }";return b},$type:new $.ig.Type("VisualDataSerializer",$.ig.$ot)},true);$$t.$d.a=false});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});