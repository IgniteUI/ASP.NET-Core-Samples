/*!@license
 * Infragistics.Web.ClientUI ShapeChart 20.1.20201.45
 *
 * Copyright (c) 2011-2020 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * jquery.js
 * jquery-ui.js
 * infragistics.util.js
 * infragistics.util.jquery.js
 * infragistics.datasource.js
 * infragistics.templating.js
 * infragistics.ext_core.js
 * infragistics.ext_collections.js
 * infragistics.ext_ui.js
 * infragistics.dv_core.js
 * infragistics.dv_datasource.js
 * infragistics.dv_dataseriesadapter.js
 * infragistics.dv_geometry.js
 * infragistics.dv_jquerydom.js
 * infragistics.dv_interactivity.js
 * infragistics.dv_geo.js  
 * infragistics.datachart_core.js
 * infragistics.datachart_interactivity.js
 * infragistics.datachart_extendedaxes.js
 * infragistics.dvcommonwidget.js
 * infragistics.ui.basechart.js
 * infragistics.datachart_scatter.js
 * infragistics.datachart_shape.js
 * infragistics.shapechart.js
 * infragistics.ui.widget.js
 * infragistics.ui.shapechart.js 
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.util.jquery","./infragistics.datasource","./infragistics.templating","./infragistics.dv_dataseriesadapter","./infragistics.dv_jquerydom","./infragistics.shapechart","./infragistics.dvcommonwidget","./infragistics.ui.basechart"],factory)}else{factory(jQuery)}})(function($){var _aNull=function(v,nan){return v===null||v===undefined||nan&&typeof v==="number"&&isNaN(v)};$.widget("ui.igShapeChart",$.ui.igBaseChart,{localeWidgetName:"ShapeChartWidget",css:{chart:"ui-category ui-corner-all ui-widget-content ui-shapechart-container",tooltip:"ui-category-tooltip ui-widget-content ui-corner-all"},options:{shapeDataSource:null,databaseSource:null,triangulationDataSource:null,tooltipTemplate:null,tooltipTemplates:null,pixelScalingRatio:NaN,titleLeftMargin:0,titleRightMargin:0,titleTopMargin:0,titleBottomMargin:0,subtitleLeftMargin:0,subtitleTopMargin:0,subtitleRightMargin:0,subtitleBottomMargin:0,subtitleTextColor:null,titleTextColor:null,leftMargin:NaN,topMargin:NaN,rightMargin:NaN,bottomMargin:NaN,transitionDuration:0,transitionEasingFunction:null,createWrappedTooltip:null,widget:null,subtitleTextStyle:null,titleTextStyle:null,itemsSource:null,includedProperties:null,excludedProperties:null,brushes:null,outlines:null,legend:null,isHorizontalZoomEnabled:true,isVerticalZoomEnabled:true,isSeriesHighlightingEnabled:false,windowRect:null,title:null,subtitle:null,titleAlignment:"center",subtitleAlignment:"center",unknownValuePlotting:null,resolution:1,thickness:1,markerTypes:null,markerBrushes:null,markerOutlines:null,markerMaxCount:400,animateSeriesWhenAxisRangeChanges:false,trendLineBrushes:null,trendLineType:null,trendLineThickness:1.5,alignsGridLinesToPixels:true,trendLinePeriod:7,toolTipType:null,crosshairsDisplayMode:null,crosshairsSnapToData:false,crosshairsAnnotationEnabled:false,finalValueAnnotationsVisible:false,calloutsVisible:false,calloutStyleUpdatingEventEnabled:false,calloutsItemsSource:null,calloutsXMemberPath:null,calloutsYMemberPath:null,calloutsLabelMemberPath:null,calloutsContentMemberPath:null,xAxisFormatLabel:null,yAxisFormatLabel:null,xAxisLabelLeftMargin:0,xAxisLabelTopMargin:5,xAxisLabelRightMargin:0,xAxisLabelBottomMargin:5,yAxisLabelLeftMargin:5,yAxisLabelTopMargin:0,yAxisLabelRightMargin:5,yAxisLabelBottomMargin:0,xAxisLabelTextColor:null,yAxisLabelTextColor:null,xAxisTitleMargin:0,yAxisTitleMargin:0,xAxisTitleLeftMargin:NaN,yAxisTitleLeftMargin:NaN,xAxisTitleTopMargin:NaN,yAxisTitleTopMargin:NaN,xAxisTitleRightMargin:NaN,yAxisTitleRightMargin:NaN,xAxisTitleBottomMargin:NaN,yAxisTitleBottomMargin:NaN,xAxisTitleTextColor:null,yAxisTitleTextColor:null,xAxisLabelTextStyle:null,yAxisLabelTextStyle:null,xAxisTitleTextStyle:null,yAxisTitleTextStyle:null,xAxisLabel:null,yAxisLabel:null,xAxisMajorStroke:null,yAxisMajorStroke:null,xAxisMajorStrokeThickness:1,yAxisMajorStrokeThickness:1,xAxisMinorStrokeThickness:1,yAxisMinorStrokeThickness:0,xAxisStrip:null,yAxisStrip:null,xAxisStroke:null,yAxisStroke:null,xAxisStrokeThickness:1,yAxisStrokeThickness:1,xAxisTickLength:5,yAxisTickLength:0,xAxisTickStroke:null,yAxisTickStroke:null,xAxisTickStrokeThickness:2,yAxisTickStrokeThickness:2,xAxisTitle:null,yAxisTitle:null,xAxisMinorStroke:null,yAxisMinorStroke:null,xAxisLabelAngle:0,yAxisLabelAngle:0,xAxisExtent:NaN,yAxisExtent:NaN,xAxisTitleAngle:0,yAxisTitleAngle:-90,xAxisInverted:false,yAxisInverted:false,xAxisTitleAlignment:"center",yAxisTitleAlignment:"center",xAxisLabelHorizontalAlignment:"center",yAxisLabelHorizontalAlignment:"right",xAxisLabelVerticalAlignment:"top",yAxisLabelVerticalAlignment:"center",xAxisLabelVisibility:null,yAxisLabelVisibility:null,yAxisLabelLocation:"outsideLeft",xAxisInterval:0,xAxisMinorInterval:0,yAxisInterval:0,yAxisIsLogarithmic:false,yAxisLogarithmBase:10,yAxisMinimumValue:NaN,yAxisMaximumValue:NaN,yAxisMinorInterval:0,xAxisIsLogarithmic:false,xAxisLogarithmBase:10,xAxisMinimumValue:NaN,xAxisMaximumValue:NaN,xAxisAbbreviateLargeNumbers:true,yAxisAbbreviateLargeNumbers:true,markerCollision:null,chartType:null},events:{propertyChanged:null,seriesAdded:null,seriesRemoved:null,seriesPointerEnter:null,seriesPointerLeave:null,seriesPointerMove:null,seriesPointerDown:null,seriesPointerUp:null,calloutStyleUpdating:null},_create:function(){this._tooltip={};this._tooltipTemplates={};this._seriesOpt={};$.ui.igBaseChart.prototype._create.apply(this);this._getChartEvt=$.proxy($.ig.dvCommonWidget.prototype._getChartEvt,this);this._widget=this.widget;this.widget=this;var shapeChart=this._chart;if(shapeChart){shapeChart.propertyChanged=$.ig.Delegate.prototype.combine(shapeChart.propertyChanged,$.proxy(this._fireShapeChart_propertyChanged,this));shapeChart.seriesAdded=$.ig.Delegate.prototype.combine(shapeChart.seriesAdded,$.proxy(this._fireShapeChart_seriesAdded,this));shapeChart.seriesRemoved=$.ig.Delegate.prototype.combine(shapeChart.seriesRemoved,$.proxy(this._fireShapeChart_seriesRemoved,this));shapeChart.seriesPointerEnter=$.ig.Delegate.prototype.combine(shapeChart.seriesPointerEnter,$.proxy(this._fireShapeChart_seriesPointerEnter,this));shapeChart.seriesPointerLeave=$.ig.Delegate.prototype.combine(shapeChart.seriesPointerLeave,$.proxy(this._fireShapeChart_seriesPointerLeave,this));shapeChart.seriesPointerMove=$.ig.Delegate.prototype.combine(shapeChart.seriesPointerMove,$.proxy(this._fireShapeChart_seriesPointerMove,this));shapeChart.seriesPointerDown=$.ig.Delegate.prototype.combine(shapeChart.seriesPointerDown,$.proxy(this._fireShapeChart_seriesPointerDown,this));shapeChart.seriesPointerUp=$.ig.Delegate.prototype.combine(shapeChart.seriesPointerUp,$.proxy(this._fireShapeChart_seriesPointerUp,this));shapeChart.calloutStyleUpdating=$.ig.Delegate.prototype.combine(shapeChart.calloutStyleUpdating,$.proxy(this._fireShapeChart_calloutStyleUpdating,this))}},_maskSeriesOptions:function(seriesOpt,options){for(var i=0;i<seriesOpt;i++){if(seriesOpt[options[i]]!==undefined){delete seriesOpt[options[i]]}}},_fireShapeChart_seriesAdded:function(chart,args){var seriesOpt=null;var beforeOpt=null;var opt={};var series=args.series();if(args.series()!==null){seriesOpt=$.ig.dvCommonWidget.prototype._flattenCommonSeriesOptions(series);beforeOpt=$.ig.dvCommonWidget.prototype._flattenCommonSeriesOptions(series);opt.series=seriesOpt}this._trigger("seriesAdded",null,opt);var mustSet=false;for(var p in seriesOpt){if(seriesOpt.hasOwnProperty(p)){if(beforeOpt[p]===undefined){mustSet=true;continue}if(seriesOpt[p]===beforeOpt[p]){delete seriesOpt[p]}else{mustSet=true}}}this._maskSeriesOptions(seriesOpt,["legend","showTooltip","tooltipTemplate","tileImagery","targetSeries","targetAxis","xAxis","yAxis","series","name"]);$.each(seriesOpt,function(key,value){if(!$.ig.dvCommonWidget.prototype._setCoreSeriesOption(series,key,value)){$.ig.dvCommonWidget.prototype._seriesSetOption(series,key,value)}})},_fireShapeChart_seriesRemoved:function(chart,args){var seriesOpt=null;var opt={};if(args.series()!==null){seriesOpt=$.ig.dvCommonWidget.prototype._flattenCommonSeriesOptions(args.series());opt.series=seriesOpt}this._trigger("seriesRemoved",null,opt)},_setLegend:function(chart,value){var legend=this._legend;if(legend&&legend.data("igChartLegend")!==undefined){legend.igChartLegend("destroy");if(legend[0]._remove){legend.remove()}delete this._legend;chart.legend(null)}if(!value){return}if(typeof value==="string"){value={element:value}}legend=value.element;if(legend){legend=$("#"+legend)}value.owner=this;if(!legend||legend.length!==1){legend=$("<div />").insertAfter(this.element);legend[0]._remove=true}this._legend=legend;chart.legend(legend.igChartLegend(value).data("igChartLegend").legend)},_set_option:function(shapeChart,key,value){var result=false;switch(key){case"propertyChanged":case"seriesAdded":case"seriesRemoved":case"seriesPointerEnter":case"seriesPointerLeave":case"seriesPointerMove":case"seriesPointerDown":case"seriesPointerUp":case"calloutStyleUpdating":break;default:result=$.ui.igBaseChart.prototype._set_option.apply(this,arguments);break}switch(key){case"yAxisMinimumValue":case"yAxisMaximumValue":case"xAxisMinimumValue":case"xAxisMaximumValue":case"xAxisExtent":case"yAxisExtent":shapeChart[key](value);return true;case"legend":this._setLegend(shapeChart,value);return true;case"tooltipTemplate":result=false;break;case"markerTypes":var markerTypes=new $.ig.MarkerTypeCollection;for(i=0;i<value.length;i++){var markerType=$.ig.util.getValue($.ig.Enum.prototype.parse($.ig.MarkerType.prototype.$type,value[i],true));markerTypes.add(markerType)}shapeChart.markerTypes(markerTypes);return true;case"transitionEasingFunction":value=$.ig.util.getEasingFunction(value);break;case"shapeDataSource":case"triangulationDataSource":this._setupConverterDataSource(value,this.options,$.proxy(this._converterCallback,this))}if(result){return true}switch(key){case"tooltipTemplate":shapeChart.tooltipTemplate(value);return true;case"tooltipTemplates":shapeChart.tooltipTemplates(value);return true;case"pixelScalingRatio":shapeChart.pixelScalingRatio(value);return true;case"titleLeftMargin":shapeChart.titleLeftMargin(value);return true;case"titleRightMargin":shapeChart.titleRightMargin(value);return true;case"titleTopMargin":shapeChart.titleTopMargin(value);return true;case"titleBottomMargin":shapeChart.titleBottomMargin(value);return true;case"subtitleLeftMargin":shapeChart.subtitleLeftMargin(value);return true;case"subtitleTopMargin":shapeChart.subtitleTopMargin(value);return true;case"subtitleRightMargin":shapeChart.subtitleRightMargin(value);return true;case"subtitleBottomMargin":shapeChart.subtitleBottomMargin(value);return true;case"subtitleTextColor":if(value==null){shapeChart.subtitleTextColor(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.subtitleTextColor($tempBrush)}return true;case"titleTextColor":if(value==null){shapeChart.titleTextColor(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.titleTextColor($tempBrush)}return true;case"leftMargin":shapeChart.leftMargin(value);return true;case"topMargin":shapeChart.topMargin(value);return true;case"rightMargin":shapeChart.rightMargin(value);return true;case"bottomMargin":shapeChart.bottomMargin(value);return true;case"transitionDuration":shapeChart.transitionDuration(value);return true;case"transitionEasingFunction":shapeChart.transitionEasingFunction(value);return true;case"createWrappedTooltip":shapeChart.createWrappedTooltip(value);return true;case"widget":shapeChart.widget(value);return true;case"subtitleTextStyle":shapeChart.subtitleTextStyle(value);return true;case"titleTextStyle":shapeChart.titleTextStyle(value);return true;case"itemsSource":shapeChart.itemsSource(value);return true;case"includedProperties":shapeChart.includedProperties(value);return true;case"excludedProperties":shapeChart.excludedProperties(value);return true;case"brushes":var isRGB=true,val=value?value[0]:null;if(typeof val=="string"&&val=="HSV"||val=="RGB"){if(value[0]=="HSV"){isRGB=false}value=value.slice(1)}var $tempBrushCollection=new $.ig.BrushCollection;for(var i=0;value&&i<value.length;i++){var $tempBrush=$.ig.Brush.prototype.create(value[i]);$tempBrushCollection.add($tempBrush)}shapeChart.brushes($tempBrushCollection);return true;case"outlines":var isRGB=true,val=value?value[0]:null;if(typeof val=="string"&&val=="HSV"||val=="RGB"){if(value[0]=="HSV"){isRGB=false}value=value.slice(1)}var $tempBrushCollection=new $.ig.BrushCollection;for(var i=0;value&&i<value.length;i++){var $tempBrush=$.ig.Brush.prototype.create(value[i]);$tempBrushCollection.add($tempBrush)}shapeChart.outlines($tempBrushCollection);return true;case"legend":shapeChart.legend(value);return true;case"isHorizontalZoomEnabled":shapeChart.isHorizontalZoomEnabled(value);return true;case"isVerticalZoomEnabled":shapeChart.isVerticalZoomEnabled(value);return true;case"isSeriesHighlightingEnabled":shapeChart.isSeriesHighlightingEnabled(value);return true;case"windowRect":shapeChart.windowRect(new $.ig.Rect(0,value.left,value.top,value.width,value.height));return true;case"title":shapeChart.title(value);return true;case"subtitle":shapeChart.subtitle(value);return true;case"titleAlignment":switch(value){case"left":shapeChart.titleAlignment(0);break;case"center":shapeChart.titleAlignment(1);break;case"right":shapeChart.titleAlignment(2);break;case"stretch":shapeChart.titleAlignment(3);break}return true;case"subtitleAlignment":switch(value){case"left":shapeChart.subtitleAlignment(0);break;case"center":shapeChart.subtitleAlignment(1);break;case"right":shapeChart.subtitleAlignment(2);break;case"stretch":shapeChart.subtitleAlignment(3);break}return true;case"unknownValuePlotting":switch(value){case"linearInterpolate":shapeChart.unknownValuePlotting(0);break;case"dontPlot":shapeChart.unknownValuePlotting(1);break}return true;case"resolution":shapeChart.resolution(value);return true;case"thickness":shapeChart.thickness(value);return true;case"markerTypes":shapeChart.markerTypes(value);return true;case"markerBrushes":var isRGB=true,val=value?value[0]:null;if(typeof val=="string"&&val=="HSV"||val=="RGB"){if(value[0]=="HSV"){isRGB=false}value=value.slice(1)}var $tempBrushCollection=new $.ig.BrushCollection;for(var i=0;value&&i<value.length;i++){var $tempBrush=$.ig.Brush.prototype.create(value[i]);$tempBrushCollection.add($tempBrush)}shapeChart.markerBrushes($tempBrushCollection);return true;case"markerOutlines":var isRGB=true,val=value?value[0]:null;if(typeof val=="string"&&val=="HSV"||val=="RGB"){if(value[0]=="HSV"){isRGB=false}value=value.slice(1)}var $tempBrushCollection=new $.ig.BrushCollection;for(var i=0;value&&i<value.length;i++){var $tempBrush=$.ig.Brush.prototype.create(value[i]);$tempBrushCollection.add($tempBrush)}shapeChart.markerOutlines($tempBrushCollection);return true;case"markerMaxCount":shapeChart.markerMaxCount(value);return true;case"animateSeriesWhenAxisRangeChanges":shapeChart.animateSeriesWhenAxisRangeChanges(value);return true;case"trendLineBrushes":var isRGB=true,val=value?value[0]:null;if(typeof val=="string"&&val=="HSV"||val=="RGB"){if(value[0]=="HSV"){isRGB=false}value=value.slice(1)}var $tempBrushCollection=new $.ig.BrushCollection;for(var i=0;value&&i<value.length;i++){var $tempBrush=$.ig.Brush.prototype.create(value[i]);$tempBrushCollection.add($tempBrush)}shapeChart.trendLineBrushes($tempBrushCollection);return true;case"trendLineType":switch(value){case"none":shapeChart.trendLineType(0);break;case"linearFit":shapeChart.trendLineType(1);break;case"quadraticFit":shapeChart.trendLineType(2);break;case"cubicFit":shapeChart.trendLineType(3);break;case"quarticFit":shapeChart.trendLineType(4);break;case"quinticFit":shapeChart.trendLineType(5);break;case"logarithmicFit":shapeChart.trendLineType(6);break;case"exponentialFit":shapeChart.trendLineType(7);break;case"powerLawFit":shapeChart.trendLineType(8);break;case"simpleAverage":shapeChart.trendLineType(9);break;case"exponentialAverage":shapeChart.trendLineType(10);break;case"modifiedAverage":shapeChart.trendLineType(11);break;case"cumulativeAverage":shapeChart.trendLineType(12);break;case"weightedAverage":shapeChart.trendLineType(13);break}return true;case"trendLineThickness":shapeChart.trendLineThickness(value);return true;case"alignsGridLinesToPixels":shapeChart.alignsGridLinesToPixels(value);return true;case"trendLinePeriod":shapeChart.trendLinePeriod(value);return true;case"toolTipType":switch(value){case"default":shapeChart.toolTipType(0);break;case"item":shapeChart.toolTipType(1);break;case"category":shapeChart.toolTipType(2);break;case"none":shapeChart.toolTipType(3);break}return true;case"crosshairsDisplayMode":switch(value){case"default":shapeChart.crosshairsDisplayMode(0);break;case"none":shapeChart.crosshairsDisplayMode(1);break;case"horizontal":shapeChart.crosshairsDisplayMode(2);break;case"vertical":shapeChart.crosshairsDisplayMode(3);break;case"both":shapeChart.crosshairsDisplayMode(4);break}return true;case"crosshairsSnapToData":shapeChart.crosshairsSnapToData(value);return true;case"crosshairsAnnotationEnabled":shapeChart.crosshairsAnnotationEnabled(value);return true;case"finalValueAnnotationsVisible":shapeChart.finalValueAnnotationsVisible(value);return true;case"calloutsVisible":shapeChart.calloutsVisible(value);return true;case"calloutStyleUpdatingEventEnabled":shapeChart.calloutStyleUpdatingEventEnabled(value);return true;case"calloutsItemsSource":shapeChart.calloutsItemsSource(value);return true;case"calloutsXMemberPath":shapeChart.calloutsXMemberPath(value);return true;case"calloutsYMemberPath":shapeChart.calloutsYMemberPath(value);return true;case"calloutsLabelMemberPath":shapeChart.calloutsLabelMemberPath(value);return true;case"calloutsContentMemberPath":shapeChart.calloutsContentMemberPath(value);return true;case"xAxisFormatLabel":shapeChart.xAxisFormatLabel(value);return true;case"yAxisFormatLabel":shapeChart.yAxisFormatLabel(value);return true;case"xAxisLabelLeftMargin":shapeChart.xAxisLabelLeftMargin(value);return true;case"xAxisLabelTopMargin":shapeChart.xAxisLabelTopMargin(value);return true;case"xAxisLabelRightMargin":shapeChart.xAxisLabelRightMargin(value);return true;case"xAxisLabelBottomMargin":shapeChart.xAxisLabelBottomMargin(value);return true;case"yAxisLabelLeftMargin":shapeChart.yAxisLabelLeftMargin(value);return true;case"yAxisLabelTopMargin":shapeChart.yAxisLabelTopMargin(value);return true;case"yAxisLabelRightMargin":shapeChart.yAxisLabelRightMargin(value);return true;case"yAxisLabelBottomMargin":shapeChart.yAxisLabelBottomMargin(value);return true;case"xAxisLabelTextColor":if(value==null){shapeChart.xAxisLabelTextColor(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.xAxisLabelTextColor($tempBrush)}return true;case"yAxisLabelTextColor":if(value==null){shapeChart.yAxisLabelTextColor(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.yAxisLabelTextColor($tempBrush)}return true;case"xAxisTitleMargin":shapeChart.xAxisTitleMargin(value);return true;case"yAxisTitleMargin":shapeChart.yAxisTitleMargin(value);return true;case"xAxisTitleLeftMargin":shapeChart.xAxisTitleLeftMargin(value);return true;case"yAxisTitleLeftMargin":shapeChart.yAxisTitleLeftMargin(value);return true;case"xAxisTitleTopMargin":shapeChart.xAxisTitleTopMargin(value);return true;case"yAxisTitleTopMargin":shapeChart.yAxisTitleTopMargin(value);return true;case"xAxisTitleRightMargin":shapeChart.xAxisTitleRightMargin(value);return true;case"yAxisTitleRightMargin":shapeChart.yAxisTitleRightMargin(value);return true;case"xAxisTitleBottomMargin":shapeChart.xAxisTitleBottomMargin(value);return true;case"yAxisTitleBottomMargin":shapeChart.yAxisTitleBottomMargin(value);return true;case"xAxisTitleTextColor":if(value==null){shapeChart.xAxisTitleTextColor(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.xAxisTitleTextColor($tempBrush)}return true;case"yAxisTitleTextColor":if(value==null){shapeChart.yAxisTitleTextColor(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.yAxisTitleTextColor($tempBrush)}return true;case"xAxisLabelTextStyle":shapeChart.xAxisLabelTextStyle(value);return true;case"yAxisLabelTextStyle":shapeChart.yAxisLabelTextStyle(value);return true;case"xAxisTitleTextStyle":shapeChart.xAxisTitleTextStyle(value);return true;case"yAxisTitleTextStyle":shapeChart.yAxisTitleTextStyle(value);return true;case"xAxisLabel":shapeChart.xAxisLabel(value);return true;case"yAxisLabel":shapeChart.yAxisLabel(value);return true;case"xAxisMajorStroke":if(value==null){shapeChart.xAxisMajorStroke(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.xAxisMajorStroke($tempBrush)}return true;case"yAxisMajorStroke":if(value==null){shapeChart.yAxisMajorStroke(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.yAxisMajorStroke($tempBrush)}return true;case"xAxisMajorStrokeThickness":shapeChart.xAxisMajorStrokeThickness(value);return true;case"yAxisMajorStrokeThickness":shapeChart.yAxisMajorStrokeThickness(value);return true;case"xAxisMinorStrokeThickness":shapeChart.xAxisMinorStrokeThickness(value);return true;case"yAxisMinorStrokeThickness":shapeChart.yAxisMinorStrokeThickness(value);return true;case"xAxisStrip":if(value==null){shapeChart.xAxisStrip(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.xAxisStrip($tempBrush)}return true;case"yAxisStrip":if(value==null){shapeChart.yAxisStrip(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.yAxisStrip($tempBrush)}return true;case"xAxisStroke":if(value==null){shapeChart.xAxisStroke(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.xAxisStroke($tempBrush)}return true;case"yAxisStroke":if(value==null){shapeChart.yAxisStroke(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.yAxisStroke($tempBrush)}return true;case"xAxisStrokeThickness":shapeChart.xAxisStrokeThickness(value);return true;case"yAxisStrokeThickness":shapeChart.yAxisStrokeThickness(value);return true;case"xAxisTickLength":shapeChart.xAxisTickLength(value);return true;case"yAxisTickLength":shapeChart.yAxisTickLength(value);return true;case"xAxisTickStroke":if(value==null){shapeChart.xAxisTickStroke(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.xAxisTickStroke($tempBrush)}return true;case"yAxisTickStroke":if(value==null){shapeChart.yAxisTickStroke(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.yAxisTickStroke($tempBrush)}return true;case"xAxisTickStrokeThickness":shapeChart.xAxisTickStrokeThickness(value);return true;case"yAxisTickStrokeThickness":shapeChart.yAxisTickStrokeThickness(value);return true;case"xAxisTitle":shapeChart.xAxisTitle(value);return true;case"yAxisTitle":shapeChart.yAxisTitle(value);return true;case"xAxisMinorStroke":if(value==null){shapeChart.xAxisMinorStroke(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.xAxisMinorStroke($tempBrush)}return true;case"yAxisMinorStroke":if(value==null){shapeChart.yAxisMinorStroke(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);shapeChart.yAxisMinorStroke($tempBrush)}return true;case"xAxisLabelAngle":shapeChart.xAxisLabelAngle(value);return true;case"yAxisLabelAngle":shapeChart.yAxisLabelAngle(value);return true;case"xAxisExtent":shapeChart.xAxisExtent(value);return true;case"yAxisExtent":shapeChart.yAxisExtent(value);return true;case"xAxisTitleAngle":shapeChart.xAxisTitleAngle(value);return true;case"yAxisTitleAngle":shapeChart.yAxisTitleAngle(value);return true;case"xAxisInverted":shapeChart.xAxisInverted(value);return true;case"yAxisInverted":shapeChart.yAxisInverted(value);return true;case"xAxisTitleAlignment":switch(value){case"left":shapeChart.xAxisTitleAlignment(0);break;case"center":shapeChart.xAxisTitleAlignment(1);break;case"right":shapeChart.xAxisTitleAlignment(2);break;case"stretch":shapeChart.xAxisTitleAlignment(3);break}return true;case"yAxisTitleAlignment":switch(value){case"top":shapeChart.yAxisTitleAlignment(0);break;case"center":shapeChart.yAxisTitleAlignment(1);break;case"bottom":shapeChart.yAxisTitleAlignment(2);break;case"stretch":shapeChart.yAxisTitleAlignment(3);break}return true;case"xAxisLabelHorizontalAlignment":switch(value){case"left":shapeChart.xAxisLabelHorizontalAlignment(0);break;case"center":shapeChart.xAxisLabelHorizontalAlignment(1);break;case"right":shapeChart.xAxisLabelHorizontalAlignment(2);break;case"stretch":shapeChart.xAxisLabelHorizontalAlignment(3);break}return true;case"yAxisLabelHorizontalAlignment":switch(value){case"left":shapeChart.yAxisLabelHorizontalAlignment(0);break;case"center":shapeChart.yAxisLabelHorizontalAlignment(1);break;case"right":shapeChart.yAxisLabelHorizontalAlignment(2);break;case"stretch":shapeChart.yAxisLabelHorizontalAlignment(3);break}return true;case"xAxisLabelVerticalAlignment":switch(value){case"top":shapeChart.xAxisLabelVerticalAlignment(0);break;case"center":shapeChart.xAxisLabelVerticalAlignment(1);break;case"bottom":shapeChart.xAxisLabelVerticalAlignment(2);break;case"stretch":shapeChart.xAxisLabelVerticalAlignment(3);break}return true;case"yAxisLabelVerticalAlignment":switch(value){case"top":shapeChart.yAxisLabelVerticalAlignment(0);break;case"center":shapeChart.yAxisLabelVerticalAlignment(1);break;case"bottom":shapeChart.yAxisLabelVerticalAlignment(2);break;case"stretch":shapeChart.yAxisLabelVerticalAlignment(3);break}return true;case"xAxisLabelVisibility":switch(value){case"visible":shapeChart.xAxisLabelVisibility(0);break;case"collapsed":shapeChart.xAxisLabelVisibility(1);break}return true;case"yAxisLabelVisibility":switch(value){case"visible":shapeChart.yAxisLabelVisibility(0);break;case"collapsed":shapeChart.yAxisLabelVisibility(1);break}return true;case"yAxisLabelLocation":switch(value){case"outsideTop":shapeChart.yAxisLabelLocation(0);break;case"outsideBottom":shapeChart.yAxisLabelLocation(1);break;case"outsideLeft":shapeChart.yAxisLabelLocation(2);break;case"outsideRight":shapeChart.yAxisLabelLocation(3);break;case"insideTop":shapeChart.yAxisLabelLocation(4);break;case"insideBottom":shapeChart.yAxisLabelLocation(5);break;case"insideLeft":shapeChart.yAxisLabelLocation(6);break;case"insideRight":shapeChart.yAxisLabelLocation(7);break}return true;case"xAxisInterval":shapeChart.xAxisInterval(value);return true;case"xAxisMinorInterval":shapeChart.xAxisMinorInterval(value);return true;case"yAxisInterval":shapeChart.yAxisInterval(value);return true;case"yAxisIsLogarithmic":shapeChart.yAxisIsLogarithmic(value);return true;case"yAxisLogarithmBase":shapeChart.yAxisLogarithmBase(value);return true;case"yAxisMinimumValue":shapeChart.yAxisMinimumValue(value);return true;case"yAxisMaximumValue":shapeChart.yAxisMaximumValue(value);return true;case"yAxisMinorInterval":shapeChart.yAxisMinorInterval(value);return true;case"xAxisIsLogarithmic":shapeChart.xAxisIsLogarithmic(value);return true;case"xAxisLogarithmBase":shapeChart.xAxisLogarithmBase(value);return true;case"xAxisMinimumValue":shapeChart.xAxisMinimumValue(value);return true;case"xAxisMaximumValue":shapeChart.xAxisMaximumValue(value);return true;case"xAxisAbbreviateLargeNumbers":shapeChart.xAxisAbbreviateLargeNumbers(value);return true;case"yAxisAbbreviateLargeNumbers":shapeChart.yAxisAbbreviateLargeNumbers(value);return true;case"markerCollision":switch(value){case"none":shapeChart.markerCollision(0);break;case"omit":shapeChart.markerCollision(1);break;case"fade":shapeChart.markerCollision(2);break;case"omitAndShift":shapeChart.markerCollision(3);break;case"fadeAndShift":shapeChart.markerCollision(4);break}return true;case"chartType":switch(value){case"auto":shapeChart.chartType(0);break;case"point":shapeChart.chartType(1);break;case"line":shapeChart.chartType(2);break;case"spline":shapeChart.chartType(3);break;case"bubble":shapeChart.chartType(4);break;case"highDensity":shapeChart.chartType(5);break;case"area":shapeChart.chartType(6);break;case"contour":shapeChart.chartType(7);break;case"polygon":shapeChart.chartType(8);break;case"polyline":shapeChart.chartType(9);break}return true}},_converterCallback:function(){if(this._dataSource&&this._dataSource!=null&&this._dataSource.converter&&this._dataSource.converter()!=null&&this._dataSource.converter().records){this._chart.itemsSource(this._dataSource.converter().records())}else{this._chart.itemsSource(null)}},_setupConverterDataSource:function(convDataSource,options,callback){if(convDataSource instanceof $.ig.TriangulationDataSource||convDataSource instanceof $.ig.ShapeDataSource){this._dataSource=convDataSource;if(convDataSource.isBound()){callback.call(this)}else{convDataSource.settings.id=this.id();convDataSource.settings.callee=this;convDataSource.settings.callback=callback}}else{if(options.triangulationDataSource){this._dataSource=new $.ig.TriangulationDataSource({id:this.id(),source:options.triangulationDataSource,callback:callback,callee:this}).dataBind()}else{this._dataSource=new $.ig.ShapeDataSource({id:this.id(),shapefileSource:options.shapeDataSource,databaseSource:options.databaseSource,callback:callback,callee:this}).dataBind()}}},_setOption:function(key,val){var chart=this._chart,o=this.options;if(o[key]===val){return this}$.Widget.prototype._setOption.apply(this,arguments);this._set_option(chart,key,val);return this},_getValueKeyName:function(){return"valueMemberPath"},_getRemoteDataKeys:function(){var o=this.options;return[o.valueMemberPath]},_getNotifyResizeName:function(){return"notifyResized"},_createChart:function(){var result=new $.ig.ShapeChart;result.createWrappedTooltip(function(ele){var jEle=$(ele);var wrap=new $.ig.JQueryDomWrapper(jEle[0],jEle);return[wrap,jEle]});result.widget(this);return result},destroy:function(){this.widget=this._widget;$.ui.igBaseChart.prototype.destroy.apply(this);if(this._renderer!=null){this._renderer.destroy();this._renderer=null}},_getWidgetName:function(){return""},id:function(){return this.element.length>0?this.element[0].id:""},_beforeInitialOptions:function(chart,elem){var elemWrapper=new $.ig.JQueryDomWrapper(elem[0],elem);var renderer=new $.ig.JQueryDomRenderer(elemWrapper,$.proxy(this._getLocaleValue,this));this._renderer=renderer;if(this.css.chart){elem.addClass(this.css.chart)}chart.provideContainer(renderer)},_provideContainer:function(chart,elem){},exportVisualData:function(){return this._chart.exportVisualData()},_getSeriesOpt:function(evtArgs){var result=$.extend(true,{},evtArgs._series);if(typeof result.name=="function")result.name=result.name();return result}});$.extend($.ui.igShapeChart,{version:"20.1.20201.45"});return $.ui.igShapeChart});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});