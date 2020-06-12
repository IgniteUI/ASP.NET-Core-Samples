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
 *	infragistics.ui.grid.resizing.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.ui.treegrid","./infragistics.ui.grid.resizing"],factory)}else{return factory(jQuery)}})(function($){$.widget("ui.igTreeGridResizing",$.ui.igGridResizing,{options:{inherit:false},css:{},_create:function(){this.element.data($.ui.igGridResizing.prototype.widgetName,this.element.data($.ui.igTreeGridResizing.prototype.widgetName));$.ui.igGridResizing.prototype._create.apply(this,arguments)},destroy:function(){this._superApply(arguments);this.element.removeData($.ui.igGridResizing.prototype.widgetName)}});$.extend($.ui.igTreeGridResizing,{version:"20.1.8"});return $});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});