/*!@license
* Infragistics.Web.ClientUI Spreadsheet 20.1.20201.45
*
* Copyright (c) 2015-2020 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
* jquery.js
* jquery-ui.js
* infragistics.util.js
* infragistics.util.jquery.js
* infragistics.ui.widget.js
* infragistics.ui.combo.js
* infragistics.ui.dialog.js
* infragistics.ui.editors.js
* infragistics.ui.popover.js
* infragistics.ui.colorpicker.js
* infragistics.dv_jquerydom.js
* infragistics.ext_core.js
* infragistics.ext_collections.js
* infragistics.ext_collectionsExtended.js
* infragistics.ext_io.js
* infragistics.ext_text.js
* infragistics.ext_web.js
* infragistics.xml.js
* infragistics.dv_interactivity.js
* infragistics.dv_core.js
* infragistics.documents.core_core.js
* infragistics.excel_core.js
* infragistics.ext_ui.js
* infragistics.undo.js
* infragistics.spreadsheet.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery.js","jquery-ui.js","./infragistics.util.js","./infragistics.util.jquery.js","./infragistics.ui.widget.js","./infragistics.ui.combo.js","./infragistics.ui.dialog.js","./infragistics.ui.editors.js","./infragistics.ui.popover.js","./infragistics.ui.colorpicker.js","./infragistics.dv_jquerydom.js","./infragistics.ext_core.js","./infragistics.ext_collections.js","./infragistics.ext_collectionsExtended.js","./infragistics.ext_io.js","./infragistics.ext_text.js","./infragistics.ext_web.js","./infragistics.xml.js","./infragistics.dv_interactivity.js","./infragistics.dv_core.js","./infragistics.documents.core_core.js","./infragistics.excel_core.js","./infragistics.ext_ui.js","./infragistics.undo.js","./infragistics.spreadsheet.js"],factory)}else{factory(jQuery)}})(function($){$.widget("ui.igSpreadsheet",$.ui.igWidget,{localeWidgetName:"spreadsheet",css:{unsupportedBrowserClass:"ui-html5-non-html5-supported-message ui-helper-clearfix ui-html5-non-html5",spreadsheet:"ui-igspreadsheet",tooltip:"ui-igspreadsheet-tooltip ui-tooltip ui-widget-content ui-corner-all",tooltipBody:"ui-igspreadsheet-tooltip-body",tooltipTitle:"ui-igspreadsheet-tooltip-title",selectAll:"ui-igspreadsheet-selectall",rowSplitter:"ui-igspreadsheet-rowsplitter",columnSplitter:"ui-igspreadsheet-columnsplitter",rowSplitterPreview:"ui-igspreadsheet-rowsplitterpreview",columnSplitterPreview:"ui-igspreadsheet-columnsplitterpreview",splitterIntersection:"ui-igspreadsheet-splitterintersection",rowHeaderArea:"ui-igspreadsheet-rowheaderarea",columnHeaderArea:"ui-igspreadsheet-columnheaderarea",tabAreaSplitter:"ui-igspreadsheet-tabareasplitter",tabAreaBackground:"ui-igspreadsheet-tabareabackground",tabAreaBorder:"ui-igspreadsheet-tabareaborder",tabItem:"ui-igspreadsheet-tabitem",tabItemActive:"ui-igspreadsheet-tabitem-active",tabItemSelected:"ui-igspreadsheet-tabitem-selected",tabItemProtected:"ui-igspreadsheet-tabitem-protected",tabItemContent:"ui-igspreadsheet-tabitemcontent",tabItemDark:"ui-igspreadsheet-tabitem-dark",tabItemLight:"ui-igspreadsheet-tabitem-light",tabItemArea:"ui-igspreadsheet-tabitemarea",tabDropIndicator:"ui-igspreadsheet-tabDropIndicator",scrollFirstTabButton:"ui-igspreadsheet-scrollfirsttab",scrollPreviousTabButton:"ui-igspreadsheet-scrollprevioustab",scrollLastTabButton:"ui-igspreadsheet-scrolllasttab",scrollNextTabButton:"ui-igspreadsheet-scrollnexttab",activateNextHiddenTabButton:"ui-igspreadsheet-activatenexthiddentab",activatePreviousHiddenTabButton:"ui-igspreadsheet-activateprevioushiddentab",addNewWorksheetButton:"ui-igspreadsheet-addnewworksheet",inputMessage:"ui-igspreadsheet-inputmessage",inputMessageContent:"ui-igspreadsheet-inputmessage-content",inputMessageTitle:"ui-igspreadsheet-inputmessage-title",scrollBarVertical:"ui-igspreadsheet-scrollbar-vertical",scrollBarHorizontal:"ui-igspreadsheet-scrollbar-horizontal",scrollBarArrowLeft:"ui-igspreadsheet-scrollbar-button-left",scrollBarArrowRight:"ui-igspreadsheet-scrollbar-button-right",scrollBarArrowUp:"ui-igspreadsheet-scrollbar-button-up",scrollBarArrowDown:"ui-igspreadsheet-scrollbar-button-down",scrollBarTrackLeft:"ui-igspreadsheet-scrollbar-track-left",scrollBarTrackRight:"ui-igspreadsheet-scrollbar-track-right",scrollBarTrackUp:"ui-igspreadsheet-scrollbar-track-up",scrollBarTrackDown:"ui-igspreadsheet-scrollbar-track-down",scrollBarThumbVertical:"ui-igspreadsheet-scrollbar-thumb-vertical",scrollBarThumbHorizontal:"ui-igspreadsheet-scrollbar-thumb-horizontal",columnHeader:"ui-igspreadsheet-columnheader",columnHeaderSelected:"ui-igspreadsheet-columnheader-selected",columnHeaderSelectedCells:"ui-igspreadsheet-columnheader-selectedcells",columnHeaderHover:"ui-igspreadsheet-columnheader-hover",rowHeader:"ui-igspreadsheet-rowheader",rowHeaderSelected:"ui-igspreadsheet-rowheader-selected",rowHeaderSelectedCells:"ui-igspreadsheet-rowheader-selectedcells",rowHeaderHover:"ui-igspreadsheet-rowheader-hover",automaticGridline:"ui-igspreadsheet-automaticgridline",invalidData:"ui-igspreadsheet-invaliddata",headerResizeLine:"ui-igspreadsheet-header-resizeline",cellSelection:"ui-igspreadsheet-cellselection",cellSelectionHandle:"ui-igspreadsheet-cellselectionhandle",formulaBar:"ui-igspreadsheet-formulabar",nameBoxContainer:"ui-igspreadsheet-nameboxcontainer",nameBoxSplitter:"ui-igspreadsheet-nameboxsplitter",formulaBarTextAreaContainer:"ui-igspreadsheet-formulabartextareacontainer",formulaBarTextAreaSplitter:"ui-igspreadsheet-formulabartextareasplitter",formulaBarButtonContainer:"ui-igspreadsheet-formulabarbuttoncontainer",formulaBarEnterButton:"ui-igspreadsheet-formulabarenterbutton",formulaBarCancelButton:"ui-igspreadsheet-formulabarcancelbutton",formulaBarExpandButton:"ui-igspreadsheet-formulabarexpandbutton",formulaBarExpandButtonOpen:"ui-igspreadsheet-formulabarexpandbutton-open",dropDownButton:"ui-igspreadsheet-dropdownbutton",dropDownButtonOpen:"ui-igspreadsheet-dropdownbutton-open",filterDialog:"ui-igspreadsheet-filter-dialog",filterDialogShowRowsWhere:"ui-igspreadsheet-filter-dialog-show-rows-where",filterDialogColumnName:"ui-igspreadsheet-filter-dialog-column-name",filterDialogCondition1:"ui-igspreadsheet-filter-dialog-condition1",filterDialogConditionalOperator:"ui-igspreadsheet-filter-dialog-conditional-operator",filterDialogCondition2:"ui-igspreadsheet-filter-dialog-condition2",filterDialogHintText:"ui-igspreadsheet-filter-dialog-hint-text",filterDialogButtons:"ui-igspreadsheet-filter-buttons",topOrBottomDialog:"ui-igspreadsheet-topOrBottom-dialog",topOrBottomDialogShow:"ui-igspreadsheet-topOrBottom-dialog-show",topOrBottomDialogInputArea:"ui-igspreadsheet-topOrBottom-dialog-input-area",topOrBottomDialogButtons:"ui-igspreadsheet-topOrBottom-buttons",formatCellsDialog:"ui-igspreadsheet-formatcells-dialog",formatCellsDialogButtons:"ui-igspreadsheet-formatcells-dialog-buttons",formatCellsDialogTabs:"ui-igspreadsheet-formatcells-dialog-tabs",formatCellsDialogTab:"ui-igspreadsheet-formatcells-dialog-tab",formatCellsDialogTable:"ui-igspreadsheet-formatcells-dialog-table",formatCellsDialogNumericSpinner:"ui-igspreadsheet-formatcells-dialog-numericspinner",formatCellsDialogColorPickerDropdownButton:"ui-igspreadsheet-formatcells-dialog-colorpickerdropdownbutton",sortDialog:"ui-igspreadsheet-sort-dialog",sortDialogTopButtonsArea:"ui-igspreadsheet-sort-dialog-top-buttons-area",sortDialogAddLevelButton:"ui-igspreadsheet-sort-dialog-add-level-button",sortDialogDeleteLevelButton:"ui-igspreadsheet-sort-dialog-delete-level-button",sortDialogCopyLevelButton:"ui-igspreadsheet-sort-dialog-copy-level-button",sortDialogMoveUpButton:"ui-igspreadsheet-sort-dialog-move-up-button",sortDialogMoveDownButton:"ui-igspreadsheet-sort-dialog-move-down-button",sortDialogOptionsButton:"ui-igspreadsheet-sort-dialog-options-button",sortDialogMyDataHasHeaderCheckBox:"ui-igspreadsheet-sort-dialog-my-data-has-headers-checkbox",sortDialogSortConditionsGridArea:"ui-igspreadsheet-sort-dialog-sort-conditions-area",sortDialogSortConditionActiveRow:"ui-igspreadsheet-sort-dialog-sort-condition-active-row",sortDialogSortConditionRow:"ui-igspreadsheet-sort-dialog-sort-condition-row",sortDialogSortConditionsGridHeader:"ui-igspreadsheet-sort-dialog-column-header",sortDialogOkCancelButtonsArea:"ui-igspreadsheet-sort-dialog-ok-cancel-buttons-area",sortOptionsDialogCaseSensitiveCheckboxArea:"ui-igspreadsheet-sort-options-dialog-case-sensitive-checkbox-area",sortOptionsDialogOrientationArea:"ui-igspreadsheet-sort-optins-dialog-orienation-area",sortOptionsDialogOkCancelButtonsArea:"ui-igspreadsheet-sort-options-dialog-ok-cancel-buttons-area"},events:{contextMenuOpening:null,actionExecuted:null,actionExecuting:null,activeCellChanged:null,activePaneChanged:null,activeTableChanged:null,activeWorksheetChanged:null,editModeExiting:null,editModeExited:null,editModeEntering:null,editModeEntered:null,editModeValidationError:null,editRangePasswordNeeded:null,hyperlinkExecuting:null,selectionChanged:null,userPromptDisplaying:null,workbookDirtied:null},options:{width:null,height:null,activeCell:"A1",brushes:{},isScrollLocked:false,activeWorksheet:null,allowAddWorksheet:true,allowDeleteWorksheet:true,areGridlinesVisible:true,areHeadersVisible:true,enterKeyNavigationDirection:"down",fixedDecimalPlaceCount:2,isEnterKeyNavigationEnabled:true,isFixedDecimalEnabled:false,isFormulaBarVisible:true,isInEndMode:false,isUndoEnabled:true,nameBoxWidth:102,selectionMode:"normal",selectedWorksheets:null,validationInputMessagePosition:null,workbook:null,zoomLevel:100},_setOption:function(key,value,checkPrev){var spreadsheet=this._spreadsheet,o=this.options;if(checkPrev&&o[key]===value){return}this._superApply(arguments);if(this._set_option(spreadsheet,key,value)){return this}return this},_set_generated_option:function(spreadsheet,key,value){switch(key){case"isScrollLocked":spreadsheet.isScrollLocked(value);return true;case"activeWorksheet":spreadsheet.activeWorksheet(value);return true;case"allowAddWorksheet":spreadsheet.allowAddWorksheet(value);return true;case"allowDeleteWorksheet":spreadsheet.allowDeleteWorksheet(value);return true;case"areGridlinesVisible":spreadsheet.areGridlinesVisible(value);return true;case"areHeadersVisible":spreadsheet.areHeadersVisible(value);return true;case"enterKeyNavigationDirection":switch(value){case"down":spreadsheet.enterKeyNavigationDirection(0);break;case"right":spreadsheet.enterKeyNavigationDirection(1);break;case"up":spreadsheet.enterKeyNavigationDirection(2);break;case"left":spreadsheet.enterKeyNavigationDirection(3);break}return true;case"fixedDecimalPlaceCount":spreadsheet.fixedDecimalPlaceCount(value);return true;case"isEnterKeyNavigationEnabled":spreadsheet.isEnterKeyNavigationEnabled(value);return true;case"isFixedDecimalEnabled":spreadsheet.isFixedDecimalEnabled(value);return true;case"isFormulaBarVisible":spreadsheet.isFormulaBarVisible(value);return true;case"isInEndMode":spreadsheet.isInEndMode(value);return true;case"isUndoEnabled":spreadsheet.isUndoEnabled(value);return true;case"nameBoxWidth":spreadsheet.nameBoxWidth(value);return true;case"selectionMode":switch(value){case"normal":spreadsheet.selectionMode(0);break;case"extendSelection":spreadsheet.selectionMode(1);break;case"addToSelection":spreadsheet.selectionMode(2);break}return true;case"selectedWorksheets":spreadsheet.selectedWorksheets(value);return true;case"workbook":spreadsheet.workbook(value);return true;case"zoomLevel":spreadsheet.zoomLevel(value);return true}},_set_option:function(spreadsheet,key,value){var self=this;var currentKey;switch(key){case"width":this._setSize(spreadsheet,"width",value);return true;case"height":this._setSize(spreadsheet,"height",value);return true;case"validationInputMessagePosition":if(value===null)spreadsheet.validationInputMessagePosition(null);else spreadsheet.validationInputMessagePosition($.ig.APIFactory.prototype.createPoint(value.x,value.y));return true;case"activeCell":value=typeof value==="object"?value.toString():value+"";spreadsheet.activeCellAddress(value);return true;case"brushes":var brushes=new $.ig.Dictionary$2($.ig.spreadsheet.SpreadsheetResourceId.prototype.$type,$.ig.Brush.prototype.$type,0);for(key in value){if(value.hasOwnProperty(key)){var v=value[key];brushes.item($.ig.Enum.prototype.parse($.ig.spreadsheet.SpreadsheetResourceId.prototype.$type,key,true),v==null?null:$.ig.Brush.prototype.create(v))}}spreadsheet.brushes(brushes);return true;case"disabled":this._setOptionDisabledImpl(value);return true;default:if(this._set_generated_option(spreadsheet,key,value))return true;return false}},_setOptionDisabled:function(value){this._superApply(arguments);this._setOptionDisabledImpl(value)},_setOptionDisabledImpl:function(value){if(this._spreadsheet)this._spreadsheet.isDisabled(!!value)},_creationOptions:null,_spreadsheet:null,_menuPropertyChangeHandlers:null,_createWidget:function(options,element,widget){this._creationOptions=options;this._superApply([options,element])},_create:function(){var key,v,size,spreadsheet,width,height,i=-1,self=this,elem=self.element,style=elem[0].style,o=this._creationOptions;self._old_state={style:{position:style.position,width:style.width,height:style.height,visibility:style.visibility},css:elem[0].className,elems:elem.find("*")};if(!$.ig.util._isCanvasSupported()){$.ig.util._renderUnsupportedBrowser(this);return}spreadsheet=this._createSpreadsheet();self._spreadsheet=spreadsheet;this.element.data("impl",spreadsheet);self._spreadsheetPropertyChangeHandlers={};self._spreadsheetPropertyChangeHandlers["ActiveCell"]=function(spreadsheet){this.options.activeCell=spreadsheet.activeCellAddress()};self._spreadsheetPropertyChangeHandlers["ActiveWorksheet"]=function(spreadsheet){this.options.activeWorksheet=spreadsheet.activeWorksheet()};self._spreadsheetPropertyChangeHandlers["AreGridlinesVisible"]=function(spreadsheet){this.options.areGridlinesVisible=spreadsheet.areGridlinesVisible()};self._spreadsheetPropertyChangeHandlers["AreHeadersVisible"]=function(spreadsheet){this.options.areHeadersVisible=spreadsheet.areHeadersVisible()};self._spreadsheetPropertyChangeHandlers["IsFormulaBarVisible"]=function(spreadsheet){this.options.isFormulaBarVisible=spreadsheet.isFormulaBarVisible()};self._spreadsheetPropertyChangeHandlers["IsInEndMode"]=function(spreadsheet){this.options.isInEndMode=spreadsheet.isInEndMode()};self._spreadsheetPropertyChangeHandlers["NameBoxWidth"]=function(spreadsheet){this.options.nameBoxWidth=spreadsheet.nameBoxWidth()};self._spreadsheetPropertyChangeHandlers["SelectedWorksheets"]=function(spreadsheet){this.options.selectedWorksheets=spreadsheet.selectedWorksheets()};self._spreadsheetPropertyChangeHandlers["SelectionMode"]=function(spreadsheet){this.options.selectionMode=spreadsheet.selectionMode()};self._spreadsheetPropertyChangeHandlers["ValidationInputMessagePosition"]=function(spreadsheet){var point=spreadsheet.validationInputMessagePosition();var newValue=null;if(point!==null){newValue={x:point.__x,y:point.__y}}this.options.validationInputMessagePosition=newValue};self._spreadsheetPropertyChangeHandlers["Workbook"]=function(spreadsheet){this.options.workbook=spreadsheet.workbook()};self._spreadsheetPropertyChangeHandlers["ZoomLevel"]=function(spreadsheet){this.options.zoomLevel=spreadsheet.zoomLevel()};spreadsheet.propertyChanged=$.ig.Delegate.prototype.combine(spreadsheet.propertyChanged,jQuery.proxy(this._onSpreadsheetPropChanged,this));spreadsheet.contextMenuOpening=$.ig.Delegate.prototype.combine(spreadsheet.contextMenuOpening,$.proxy(this._fireSpreadsheet_contextMenuOpening,this));spreadsheet.actionExecuted=$.ig.Delegate.prototype.combine(spreadsheet.actionExecuted,$.proxy(this._fireSpreadsheet_actionExecuted,this));spreadsheet.actionExecuting=$.ig.Delegate.prototype.combine(spreadsheet.actionExecuting,$.proxy(this._fireSpreadsheet_actionExecuting,this));spreadsheet.activeCellChanged=$.ig.Delegate.prototype.combine(spreadsheet.activeCellChanged,$.proxy(this._fireSpreadsheet_activeCellChanged,this));spreadsheet.activePaneChanged=$.ig.Delegate.prototype.combine(spreadsheet.activePaneChanged,$.proxy(this._fireSpreadsheet_activePaneChanged,this));spreadsheet.activeTableChanged=$.ig.Delegate.prototype.combine(spreadsheet.activeTableChanged,$.proxy(this._fireSpreadsheet_activeTableChanged,this));spreadsheet.activeWorksheetChanged=$.ig.Delegate.prototype.combine(spreadsheet.activeWorksheetChanged,$.proxy(this._fireSpreadsheet_activeWorksheetChanged,this));spreadsheet.editModeExiting=$.ig.Delegate.prototype.combine(spreadsheet.editModeExiting,$.proxy(this._fireSpreadsheet_editModeExiting,this));spreadsheet.editModeExited=$.ig.Delegate.prototype.combine(spreadsheet.editModeExited,$.proxy(this._fireSpreadsheet_editModeExited,this));spreadsheet.editModeEntering=$.ig.Delegate.prototype.combine(spreadsheet.editModeEntering,$.proxy(this._fireSpreadsheet_editModeEntering,this));spreadsheet.editModeEntered=$.ig.Delegate.prototype.combine(spreadsheet.editModeEntered,$.proxy(this._fireSpreadsheet_editModeEntered,this));spreadsheet.editModeValidationError=$.ig.Delegate.prototype.combine(spreadsheet.editModeValidationError,$.proxy(this._fireSpreadsheet_editModeValidationError,this));spreadsheet.editRangePasswordNeeded=$.ig.Delegate.prototype.combine(spreadsheet.editRangePasswordNeeded,$.proxy(this._fireSpreadsheet_editRangePasswordNeeded,this));spreadsheet.hyperlinkExecuting=$.ig.Delegate.prototype.combine(spreadsheet.hyperlinkExecuting,$.proxy(this._fireSpreadsheet_hyperlinkExecuting,this));spreadsheet.selectionChanged=$.ig.Delegate.prototype.combine(spreadsheet.selectionChanged,$.proxy(this._fireSpreadsheet_selectionChanged,this));spreadsheet.userPromptDisplaying=$.ig.Delegate.prototype.combine(spreadsheet.userPromptDisplaying,$.proxy(this._fireSpreadsheet_userPromptDisplaying,this));spreadsheet.workbookDirtied=$.ig.Delegate.prototype.combine(spreadsheet.workbookDirtied,$.proxy(this._fireSpreadsheet_workbookDirtied,this));if(o.hasOwnProperty("width"))elem[0].style.width=o["width"];if(o.hasOwnProperty("height"))elem[0].style.height=o["height"];var elemWrapper=new $.ig.JQueryDomWrapper(elem[0],elem);var renderer=new $.ig.JQueryDomRenderer(elemWrapper,$.proxy(this._getLocaleValue,this));this._renderer=renderer;spreadsheet.css=this.css;for(key in o){if(o.hasOwnProperty(key)){v=o[key];if(v!==null){this._setOption(key,v,false)}}}while(i++<1){key=i===0?"width":"height";if(o[key]){size=key;v=o[key]}else{v=elem[0].style[key]}if(v&&v.indexOf("%")>0){self._setSize(spreadsheet,size=key,v)}}if(!size){self._setSize(spreadsheet,"width")}if(self.css&&self.css.spreadsheet){elem.addClass(self.css.spreadsheet)}if(!o.hasOwnProperty("activeWorksheet"))self._spreadsheetPropertyChangeHandlers["ActiveWorksheet"].call(this,spreadsheet);if(!o.hasOwnProperty("selectedWorksheets"))self._spreadsheetPropertyChangeHandlers["SelectedWorksheets"].call(this,spreadsheet);if(!o.hasOwnProperty("workbook"))self._spreadsheetPropertyChangeHandlers["Workbook"].call(this,spreadsheet);spreadsheet._language(this.options.language);spreadsheet.provideContainer(renderer);spreadsheet.onInitialized()},_createSpreadsheet:function(){return new $.ig.Spreadsheet},_onSpreadsheetPropChanged:function(spreadsheet,evt){var handler=this._spreadsheetPropertyChangeHandlers[evt._propertyName];if(handler)handler.call(this,spreadsheet)},_fireSpreadsheet_actionExecuted:function(spreadsheet,evt){var opts={};opts.owner=this;opts.action=$.ig.spreadsheet.SpreadsheetAction.prototype.$getName(evt.command());this._trigger("actionExecuted",null,opts)},_fireSpreadsheet_actionExecuting:function(spreadsheet,evt){var opts={};opts.owner=this;opts.action=$.ig.spreadsheet.SpreadsheetAction.prototype.$getName(evt.command());if(!this._trigger("actionExecuting",null,opts)){evt.cancel(true)}},_fireSpreadsheet_activeCellChanged:function(spreadsheet,evt){var opts={};opts.owner=this;opts.oldValue=evt.oldValue().toString();opts.newValue=evt.newValue().toString();this._trigger("activeCellChanged",null,opts)},_fireSpreadsheet_activePaneChanged:function(spreadsheet,evt){var opts={};opts.owner=this;opts.oldActivePane=evt.oldValue();opts.newActivePane=evt.newValue();opts.activeCell=opts.newActivePane!=null?opts.newActivePane.selection().activeCell().toString():null;opts.visibleRange=opts.newActivePane!=null?opts.newActivePane.visibleRange().toString():null;this._trigger("activePaneChanged",null,opts)},_fireSpreadsheet_activeTableChanged:function(spreadsheet,evt){var opts={};opts.owner=this;opts.oldActiveTable=evt.oldValue();opts.newActiveTable=evt.newValue();this._trigger("activeTableChanged",null,opts)},_fireSpreadsheet_activeWorksheetChanged:function(spreadsheet,evt){var opts={};opts.owner=this;opts.oldActiveWorksheet=evt.oldValue();opts.oldActiveWorksheetName=opts.oldActiveWorksheet!=null?opts.oldActiveWorksheet.name():null;opts.newActiveWorksheet=evt.newValue();opts.newActiveWorksheetName=opts.newActiveWorksheet!=null?opts.newActiveWorksheet.name():null;this._trigger("activeWorksheetChanged",null,opts)},_fireSpreadsheet_contextMenuOpening:function(spreadsheet,evt){var noCancel,opts={};opts.owner=this;opts.menuArea=$.ig.spreadsheet.SpreadsheetContextMenuArea.prototype.$getName(evt.menuArea());noCancel=this._trigger("contextMenuOpening",null,opts);if(noCancel!==undefined&&!noCancel){evt.cancel(true)}},_fireSpreadsheet_editModeExiting:function(spreadsheet,evt){var noCancel,opts={};opts.owner=this;opts.acceptChanges=evt.acceptChanges();opts.canCancel=evt.canCancel();opts.cell=evt.cell().toString();opts.editText=evt.editText();noCancel=this._trigger("editModeExiting",null,opts);evt.acceptChanges(opts.acceptChanges);if(!noCancel){evt.cancel(true)}},_fireSpreadsheet_editModeExited:function(spreadsheet,evt){var opts={};opts.owner=this;opts.cell=evt.cell().toString();this._trigger("editModeExited",null,opts)},_fireSpreadsheet_editModeEntering:function(spreadsheet,evt){var opts={};opts.owner=this;opts.cell=evt.cell().toString();if(!this._trigger("editModeEntering",null,opts)){evt.cancel(true)}},_fireSpreadsheet_editModeEntered:function(spreadsheet,evt){var opts={};opts.owner=this;opts.cell=evt.cell().toString();this._trigger("editModeEntered",null,opts)},_fireSpreadsheet_editModeValidationError:function(spreadsheet,evt){var opts={};opts.owner=this;opts.action=$.ig.spreadsheet.SpreadsheetEditModeValidationErrorAction.prototype.$getName(evt.action());opts.canStayInEditMode=evt.canStayInEditMode();opts.cell=evt.cell().toString();opts.validationRule=evt.validationRule();this._trigger("editModeValidationError",null,opts);var newAction=opts.action;if(typeof newAction==="string")newAction=$.ig.util.getEnumValue($.ig.Enum.prototype.parse($.ig.spreadsheet.SpreadsheetEditModeValidationErrorAction.prototype.$type,newAction,true));evt.action(newAction)},_fireSpreadsheet_editRangePasswordNeeded:function(spreadsheet,evt){var opts={};opts.owner=this;opts.ranges=evt._getRangesArray();opts.unprotect=evt.unprotect();if(!this._trigger("editRangePasswordNeeded",null,opts)){evt.cancel(true)}},_fireSpreadsheet_hyperlinkExecuting:function(spreadsheet,evt){var noCancel,opts={};opts.owner=this;opts.hyperlink=evt.hyperlink();noCancel=this._trigger("hyperlinkExecuting",null,opts);if(!noCancel){evt.cancel(true)}},_fireSpreadsheet_selectionChanged:function(spreadsheet,evt){var opts={};opts.owner=this;opts.pane=evt.pane();this._trigger("selectionChanged",null,opts)},_fireSpreadsheet_userPromptDisplaying:function(spreadsheet,evt){var noCancel,opts={};opts.owner=this;opts.canCancel=evt.canCancel();opts.displayMessage=evt.displayMessage();opts.exception=evt.exception();opts.message=evt.message();opts.trigger=$.ig.spreadsheet.SpreadsheetUserPromptTrigger.prototype.$getName(evt.trigger());noCancel=this._trigger("userPromptDisplaying",null,opts);evt.displayMessage(opts.displayMessage);evt.message(opts.message);if(!noCancel){evt.cancel(true)}},_fireSpreadsheet_workbookDirtied:function(spreadsheet,evt){var opts={};opts.owner=this;this._trigger("workbookDirtied",null,opts)},_setSize:function(spreadsheet,key,val){$.ig.util.setSize(this.element,key,val,spreadsheet,this._getNotifyResizeName())},_getNotifyResizeName:function(){return"containerResized"},getActivePane:function(){if(this._spreadsheet)return this._spreadsheet.activePane();return null},getActiveTable:function(){if(this._spreadsheet)return this._spreadsheet.activeTable();return null},getActiveSelection:function(){if(this._spreadsheet)return this._spreadsheet.activeSelection();return null},getActiveSelectionCellRangeFormat:function(){if(this._spreadsheet)return this._spreadsheet.activeSelectionCellRangeFormat();return null},getCellEditMode:function(){if(this._spreadsheet)return $.ig.spreadsheet.SpreadsheetCellEditMode.prototype.$getName(this._spreadsheet.cellEditMode());return null},getIsInEditMode:function(){if(this._spreadsheet)return this._spreadsheet.isInEditMode();return null},getIsRenamingWorksheet:function(){if(this._spreadsheet)return this._spreadsheet.isRenamingWorksheet();return null},getPanes:function(){if(this._spreadsheet)return this._spreadsheet._getPanesAsArray();return null},executeAction:function(action){if(this._spreadsheet){var cmd=action;if(typeof cmd==="string")cmd=$.ig.util.getEnumValue($.ig.Enum.prototype.parse($.ig.spreadsheet.SpreadsheetAction.prototype.$type,cmd,true));return this._spreadsheet.executeCommand(cmd)}return false},exportVisualData:function(){if(this._spreadsheet)return this._spreadsheet.exportVisualData()},showFilterDialogForWorksheet:function(relativeColumnIndex,spreadsheetFilterDialogOption){var option=spreadsheetFilterDialogOption;if(option===undefined)option=$.ig.spreadsheet.SpreadsheetFilterDialogOption.Custom;else if(typeof option==="string")option=$.ig.util.getEnumValue($.ig.Enum.prototype.parse($.ig.spreadsheet.SpreadsheetFilterDialogOption.prototype.$type,option,true));if(this._spreadsheet){this._spreadsheet.showFilterDialogForWorksheet(relativeColumnIndex,option);return true}return false},showFilterDialogForTable:function(worksheetTableColumn,spreadsheetFilterDialogOption){var option=spreadsheetFilterDialogOption;if(option===undefined)option=$.ig.spreadsheet.SpreadsheetFilterDialogOption.Custom;else if(typeof option==="string")option=$.ig.util.getEnumValue($.ig.Enum.prototype.parse($.ig.spreadsheet.SpreadsheetFilterDialogOption.prototype.$type,option,true));if(this._spreadsheet){this._spreadsheet.showFilterDialogForTable(worksheetTableColumn,option);return true}return false},showTopOrBottomDialogForWorksheet:function(relativeColumnIndex){if(this._spreadsheet){this._spreadsheet.showTopOrBottomDialogForWorksheet(relativeColumnIndex);return true}return false},showTopOrBottomDialogForTable:function(worksheetTableColumn){if(this._spreadsheet){this._spreadsheet.showTopOrBottomDialogForTable(worksheetTableColumn);return true}return false},flush:function(){if(this._spreadsheet&&this._spreadsheet.flush)this._spreadsheet.flush()},destroy:function(){var key,style,spreadsheet=this._spreadsheet,old=this._old_state,elem=this.element;if(!old){return}elem.find("*").not(old.elems).remove();if(this.css.spreadsheet){elem.removeClass(this.css.spreadsheet)}old=old.style;style=elem[0].style;for(key in old){if(old.hasOwnProperty(key)){if(style[key]!==old[key]){style[key]=old[key]}}}if(spreadsheet){this._setSize(spreadsheet)}this._superApply(arguments);if(spreadsheet&&spreadsheet.destroy){spreadsheet.destroy()}delete this._spreadsheet;delete this._old_state;if(this._renderer!=null){this._renderer.destroy();this._renderer=null}},changeLocale:function($container){this._super($container);if(this._spreadsheet)return this._spreadsheet._language(this.options.language)},styleUpdated:function(){if(this._spreadsheet){this._spreadsheet.styleUpdated()}}});$.extend($.ui.igSpreadsheet,{version:"20.1.20201.45"});return $.ui.igSpreadsheet});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});