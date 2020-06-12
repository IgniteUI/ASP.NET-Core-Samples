/*!@license
 * Infragistics.Web.ClientUI Tree Grid 20.1.8
 *
 * Copyright (c) 2011-2020 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.dataSource.js
 *	infragistics.ui.shared.js
 *	infragistics.ui.treegrid.js
 *	infragistics.util.js
 *	infragistics.ui.grid.framework.js
 *	infragistics.ui.grid.sorting.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.ui.treegrid","./infragistics.ui.grid.sorting"],factory)}else{return factory(jQuery)}})(function($){$.widget("ui.igTreeGridSorting",$.ui.igGridSorting,{css:{},options:{fromLevel:0,toLevel:-1,inherit:false},_create:function(){this.element.data($.ui.igGridSorting.prototype.widgetName,this.element.data($.ui.igTreeGridSorting.prototype.widgetName));$.ui.igGridSorting.prototype._create.apply(this,arguments)},changeLocale:function(){this._superApply(arguments)},isColumnSorted:function(columnKey){var i,se=this.grid.dataSource.settings.sorting.expressions;if(!se||!columnKey||!se.length){return false}for(i=0;i<se.length;i++){if(se[i].fieldName===columnKey){return se[i].isSorting}}return false},destroy:function(){this._superApply(arguments);this.element.removeData($.ui.igGridSorting.prototype.widgetName)},_injectGrid:function(gridInstance,isRebind){var ds;$.ui.igGridSorting.prototype._injectGrid.apply(this,arguments);ds=this.grid.dataSource;if(ds&&ds.settings&&ds.settings.treeDS){ds.settings.treeDS.sorting.fromLevel=this.options.fromLevel;ds.settings.treeDS.sorting.toLevel=this.options.toLevel}if(!isRebind&&!this._cellStyleSubscriberAdded){this._cellStyleSubscriberAdded=true;this.grid._cellStyleSubscribers.push($.proxy(this._applyActiveSortCellStyle,this))}}});$.extend($.ui.igTreeGridSorting,{version:"20.1.8"});return $});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});