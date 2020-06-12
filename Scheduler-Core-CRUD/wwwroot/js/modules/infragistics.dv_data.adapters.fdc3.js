/*!@license
* Infragistics.Web.ClientUI infragistics.dv_data.adapters.fdc3.js 20.1.20201.45
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
*     infragistics.dv_data.adapters.financial.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.dv_data.adapters.financial","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$x=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$1=$.ig.globalDefs.$$1;$$w=$.ig.globalDefs.$$w;$$z=$.ig.globalDefs.$$z;$$6=$.ig.globalDefs.$$6;$$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["Fdc3Serializer:b","Fdc3Context:d","Fdc3Instrument:e","Fdc3InstrumentList:f","Fdc3Position:g","Fdc3Portfolio:h","Fdc3Organization:i","Fdc3OrganizationList:j","Fdc3Contact:k","Fdc3ContactList:l","Fdc3MessageEventHandler:n"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compare,$x=$.ig.util.replace,$y=$.ig.util.stringFormat,$z=$.ig.util.stringFormat1,$0=$.ig.util.stringFormat2,$1=$.ig.util.stringCompare1,$2=$.ig.util.stringCompare2,$3=$.ig.util.stringCompare3,$4=$.ig.util.compareSimple,$5=$.ig.util.tryParseNumber,$6=$.ig.util.tryParseNumber1,$7=$.ig.util.numberToString,$8=$.ig.util.numberToString1,$9=$.ig.util.parseNumber;$d("Fdc3ContextType:q",false,false,{Unknown:0,Instrument:1,InstrumentList:2,Position:3,Portfolio:4,Contact:5,ContactList:6,Organization:7,OrganizationList:8});$d("Fdc3IntentType:p",false,false,{None:0,All:1,Unknown:2,ViewChart:3,ViewInstrument:4,StartCall:5,StartChat:6,ViewAnalysis:7,ViewContact:8,ViewNews:9,ViewQuote:10});$c("Fdc3Converter:a","Object",{init:function(){$.ig.$op.init.call(this)},log:function(message_){},toInstrument:function(context_){var instrument_=new $$t.e;if(context_==null){return instrument_}var propNames=Object.getOwnPropertyNames(context_);for(var i=0;i<propNames.length;i++){var prop=propNames[i];if(prop==="id"){var propIDs=Object.getOwnPropertyNames(context_[prop]);for(var ii=0;ii<propIDs.length;ii++){var id=propIDs[ii];instrument_.id.set(id,context_[prop][id])}}else{instrument_.set(prop,context_[prop])}}return instrument_},toInstrumentList:function(context_){var list_=new $$t.f;if(context_==null){return list_}var propNames=Object.getOwnPropertyNames(context_);for(var i=0;i<propNames.length;i++){var prop=propNames[i];if(context_[prop]instanceof Array){var array=context_[prop];for(var ii=0;ii<array.length;ii++){var item=array[ii];if(item["type"]==="fdc3.instrument"){var instrument=this.toInstrument(item);list_.instruments.push(instrument)}}}else{list_.set(prop,context_[prop])}}return list_},toPosition:function(context_){var position_=new $$t.g;if(context_==null){return position_}var propNames=Object.getOwnPropertyNames(context_);for(var i=0;i<propNames.length;i++){var prop=propNames[i];if(prop==="instrument"){var inst=Fdc3Converter.toInstrument(context_[prop]);position_.instrument=inst}else{position_.set(prop,context_[prop])}}return position_},toPortfolio:function(context_){var portfolio_=new $$t.h;if(context_==null){return portfolio_}var propNames=Object.getOwnPropertyNames(context_);for(var i=0;i<propNames.length;i++){var prop=propNames[i];if(context_[prop]instanceof Array){var array=context_[prop];for(var ii=0;ii<array.length;ii++){var item=array[ii];if(item["type"]==="fdc3.position"){var position_=Fdc3Converter.toPosition(item);portfolio_.positions.push(position_)}}}else{portfolio_.set(prop,context_[prop])}}return portfolio_},fromPortfolio:function(portfolio_){var context_=null;if(portfolio_==null){return context_}context_={};var propNames=portfolio_.getKeys();for(var i=0;i<propNames.length;i++){var prop=propNames[i];context_[prop]=portfolio_.item(prop)}context_.positions=[];for(var i=0;i<portfolio_.positions.length;i++){var position_=portfolio_.positions[i];var item=Fdc3Converter.fromPosition(position_);context_.positions.push(item)}return context_},fromPosition:function(position_){var context_=null;if(position_==null){return context_}context_={};var propNames=position_.getKeys();for(var i=0;i<propNames.length;i++){var prop=propNames[i];context_[prop]=position_.item(prop)}context_.instrument=Fdc3Converter.fromInstrument(position_.instrument);return context_},fromInstrumentList:function(list_){var context_=null;if(list_==null){return context_}context_={};var propNames=list_.getKeys();for(var i=0;i<propNames.length;i++){var prop=propNames[i];context_[prop]=list_.item(prop)}context_.instruments=[];for(var i=0;i<list_.instruments.length;i++){var instrument=list_.instruments[i];var item=Fdc3Converter.fromInstrument(instrument);context_.instruments.push(item)}return context_},fromInstrument:function(instrument_){var context_=null;if(instrument_==null){return context_}context_={};var propNames=instrument_.getKeys();for(var i=0;i<propNames.length;i++){var prop=propNames[i];context_[prop]=instrument_.item(prop)}context_.id={};var propIDs=instrument_.id.getKeys();for(var i=0;i<propIDs.length;i++){var prop=propIDs[i];context_.id[prop]=instrument_.id.item(prop)}return context_},$type:new $.ig.Type("Fdc3Converter",$.ig.$ot)},true);$c("Fdc3Serializer:b","Object",{init:function(){this.m=0;$.ig.$op.init.call(this);this.__sb=new $$6.aj(0)},toString:function(){return this.__sb.toString()},__sb:null,m:0,l:false,toJson:function(a){this.__sb.v();if($b($$t.$e.$type,a)!==null){this.add4($b($$t.$e.$type,a),"")}else if($b($$t.$f.$type,a)!==null){this.add5($b($$t.$f.$type,a))}else if($b($$t.$g.$type,a)!==null){this.add9($b($$t.$g.$type,a),"")}else if($b($$t.$h.$type,a)!==null){this.add8($b($$t.$h.$type,a))}else if($b($$t.$k.$type,a)!==null){this.add1($b($$t.$k.$type,a),"")}else if($b($$t.$l.$type,a)!==null){this.add2($b($$t.$l.$type,a))}else if($b($$t.$i.$type,a)!==null){this.add6($b($$t.$i.$type,a),"")}else if($b($$t.$j.$type,a)!==null){this.add7($b($$t.$j.$type,a))}else{this.add3($b($$t.$d.$type,a),"")}return this.toString()},add4:function(a,b){this.z("serializing Fdc3Instrument");this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var e=a.getKeys();for(var d=0;d<e.length;d++){var c=e[d];if(c=="type"){continue}if(c=="name"){continue}if(c=="target"){continue}if(c=="intent"){continue}if(c=="ticker"){continue}if(c!="id"){this.addProp1(c,a.item(c),"")}}if(a.id()==null){this.addProp1("id","null","")}else{this.addProp("id");this.addObjectOpen();this.addProp1("ticker",a.ticker(),"");var h=a.id().getKeys();for(var g=0;g<h.length;g++){var f=h[g];if(f=="ticker"){continue}this.addProp1(f,a.id().item(f),"")}this.addObjectClose("")}this.addObjectClose(b)},add5:function(a){this.z("serializing Fdc3InstrumentList");this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var d=a.getKeys();for(var c=0;c<d.length;c++){var b=d[c];if(b=="type"){continue}if(b=="name"){continue}if(b=="target"){continue}if(b=="intent"){continue}if(b=="id"){continue}if(b!="instruments"){this.addProp1(b,a.item(b),"")}}if(a.instruments()==null){this.addProp1("instruments","null","")}else{this.addProp("instruments");this.addArrayOpen();var g=a.instruments();for(var f=0;f<g.length;f++){var e=g[f];this.add4(e,",")}this.addArrayClose("")}this.addObjectClose("")},add8:function(a){this.z("serializing Fdc3Portfolio");this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var d=a.getKeys();for(var c=0;c<d.length;c++){var b=d[c];if(b=="type"){continue}if(b=="name"){continue}if(b=="target"){continue}if(b=="intent"){continue}if(b=="id"){continue}if(b!="positions"){this.addProp1(b,a.item(b),"")}}if(a.positions()==null){this.addProp1("positions","null","")}else{this.addProp("positions");this.addArrayOpen();var g=a.positions();for(var f=0;f<g.length;f++){var e=g[f];this.add9(e,",")}this.addArrayClose("")}this.addObjectClose("")},add9:function(a,b){this.z("serializing Fdc3Position");this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var e=a.getKeys();for(var d=0;d<e.length;d++){var c=e[d];if(c=="type"){continue}if(c=="name"){continue}if(c=="target"){continue}if(c=="intent"){continue}if(c=="id"){continue}if(c!="instrument"){this.addProp1(c,a.item(c),"")}}if(a.instrument()==null){this.addProp1("instrument","null","")}else{this.addProp("instrument");this.add4(a.instrument(),",")}this.addObjectClose(b)},add1:function(a,b){this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var e=a.getKeys();for(var d=0;d<e.length;d++){var c=e[d];if(c=="type"){continue}if(c=="name"){continue}if(c=="target"){continue}if(c=="intent"){continue}if(c=="email"){continue}if(c=="phone"){continue}if(c!="id"){this.addProp1(c,a.item(c),"")}}if(a.id()==null){this.addProp1("id","null","")}else{this.addProp("id");this.addObjectOpen();var h=a.id().getKeys();for(var g=0;g<h.length;g++){var f=h[g];this.addProp1(f,a.id().item(f),"")}this.addObjectClose("")}this.addObjectClose(b)},z:function(message_){},add2:function(a){this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var d=a.getKeys();for(var c=0;c<d.length;c++){var b=d[c];if(b=="type"){continue}if(b=="name"){continue}if(b=="target"){continue}if(b=="intent"){continue}if(b=="id"){continue}if(b!="contacts"){this.addProp1(b,a.item(b),"")}}if(a.contacts()==null){this.addProp1("contacts","null","")}else{this.addProp("contacts");this.addArrayOpen();var g=a.contacts();for(var f=0;f<g.length;f++){var e=g[f];this.add1(e,",")}this.addArrayClose("")}this.addObjectClose("")},add6:function(a,b){this.z("serializing Fdc3Organization");this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var e=a.getKeys();for(var d=0;d<e.length;d++){var c=e[d];if(c=="type"){continue}if(c=="name"){continue}if(c=="target"){continue}if(c=="intent"){continue}if(c=="email"){continue}if(c=="phone"){continue}if(c!="id"){this.addProp1(c,a.item(c),"")}}if(a.id()==null){this.addProp1("id","null","")}else{this.addProp("id");this.addObjectOpen();var h=a.id().getKeys();for(var g=0;g<h.length;g++){var f=h[g];this.addProp1(f,a.id().item(f),"")}this.addObjectClose("")}this.addObjectClose(b)},add7:function(a){this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var d=a.getKeys();for(var c=0;c<d.length;c++){var b=d[c];if(b=="type"){continue}if(b=="name"){continue}if(b=="target"){continue}if(b=="intent"){continue}if(b=="id"){continue}if(b!="organizations"){this.addProp1(b,a.item(b),"")}}if(a.organizations()==null){this.addProp1("organizations","null","")}else{this.addProp("organizations");this.addArrayOpen();var g=a.organizations();for(var f=0;f<g.length;f++){var e=g[f];this.add4(e,",")}this.addArrayClose("")}this.addObjectClose("")},add3:function(a,b){this.z("serializing Fdc3Context");this.addObjectOpen();this.addProp1("type",a.type(),"");if(!String.isNullOrEmpty(a.target())){this.addProp1("target",a.target(),"")}if(a.intent()!=2){this.addProp1("intent",$$t.$p.$getName(a.intent()),"")}if(!String.isNullOrEmpty(a.name())){this.addProp1("name",a.name(),"")}var e=a.getKeys();for(var d=0;d<e.length;d++){var c=e[d];if(c=="type"){continue}if(c=="name"){continue}if(c=="target"){continue}if(c=="intent"){continue}if(c!="id"){this.addProp1(c,a.item(c),"")}}if(a.id()==null){this.addProp1("id","null","")}else{this.addProp("id");this.addObjectOpen();var h=a.id().getKeys();for(var g=0;g<h.length;g++){var f=h[g];this.addProp1(f,a.id().item(f),"")}this.addObjectClose("")}this.addObjectClose(b)},addArrayOpen:function(){this.addLine("[");this.tabIncrease();return this},addArrayClose:function(a){this.tabDecrease();this.addLine("]"+a);return this},addObjectOpen:function(){this.addLine("{");this.tabIncrease();return this},addObjectClose:function(a){this.tabDecrease();this.addLine("}"+a);return this},add:function(a){this.i();this.__sb.l(a);return this},addLine:function(a){this.i();this.__sb.u(a);this.l=true;return this},addProp:function(a){this.i();this.__sb.u('"'+a+'": ');this.l=true;return this},addProp1:function(a,b,c){this.i();if(!String.isNullOrEmpty(c)){c=" // "+c}var d=b==null?"null":b;if(typeof b==="string"){this.__sb.u('"'+a+'": "'+d+'",'+c)}else if($b($$0.$aq.$type,b)!==null){var e=d.toString().toLowerCase();this.__sb.u('"'+a+'": '+e+","+c)}else{this.__sb.u('"'+a+'": '+d+","+c)}this.l=true;return this},i:function(){if(this.l){for(var a=0;a<this.m;a++){this.__sb.l("    ")}this.l=false}return this},tabIncrease:function(){this.m++;return this},tabDecrease:function(){this.m--;return this},$type:new $.ig.Type("Fdc3Serializer",$.ig.$ot)},true);$c("Fdc3Dictionary:c","Object",{init:function(){$.ig.$op.init.call(this);this.d=new $$4.h(String,$.ig.$op.$type,0)},d:null,getKeys:function(){var a=new $$4.x(String,0);var c=this.d.getEnumerator();while(c.moveNext()){var b=c.current();a.add(b.key())}return a.toArray()},getValues:function(){var a=new $$4.x($.ig.$op.$type,0);var c=this.d.getEnumerator();while(c.moveNext()){var b=c.current();a.add1(b.value())}return a.toArray()},item:function(a,b){if(arguments.length===2){this.set(a,b);return b}else{return this.get(a)}},get:function(a){if(!this.d.containsKey(a)){this.set(a,"")}if(this.d.item(a)==null){return""}return this.d.item(a)},h:function(a){return this.get(a).toString()},e:function(a){if(!this.d.containsKey(a)){this.set(a,0);return 0}if(this.d.item(a)==null){return 0}return parseFloat(this.d.item(a).toString())},set:function(a,b){if(this.d.containsKey(a)){this.d.item(a,b)}else{this.d.add(a,b)}},remove:function(a){if(this.d.containsKey(a)){this.d.remove(a)}},contains:function(a){return this.d.containsKey(a)},$type:new $.ig.Type("Fdc3Dictionary",$.ig.$ot)},true);$c("Fdc3Context:d","Fdc3Dictionary",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$d.init1.call(this,1,0)},init1:function(a,b){$$t.$c.init.call(this);this.type($$t.$s.getString(b));this.id(new $$t.c)},intent:function(a){if(arguments.length===1){this.item("intent",$$t.$p.getBox(a));return a}else{return $$t.$s.b(this.item("intent").toString())}},type:function(a){if(arguments.length===1){this.item("type",a);return a}else{return this.item("type").toString()}},target:function(a){if(arguments.length===1){this.item("target",a);return a}else{return this.h("target")}},name:function(a){if(arguments.length===1){this.item("name",a);return a}else{return this.h("name")}},_id:null,id:function(a){if(arguments.length===1){this._id=a;return a}else{return this._id}},toJson:function(){var a=new $$t.b;var b=a.toJson(this);return b},$type:new $.ig.Type("Fdc3Context",$$t.$c.$type)},true);$c("Fdc3Instrument:e","Fdc3Context",{init:function(){$$t.$d.init1.call(this,1,1)},ticker:function(a){if(arguments.length===1){this.id().item("ticker",a);return a}else{return this.id().item("ticker").toString()}},$type:new $.ig.Type("Fdc3Instrument",$$t.$d.$type)},true);$c("Fdc3InstrumentList:f","Fdc3Context",{init:function(){$$t.$d.init.call(this,0);this.type($$t.$s.getString(2));this.instruments(new Array(0))},_instruments:null,instruments:function(a){if(arguments.length===1){this._instruments=a;return a}else{return this._instruments}},$type:new $.ig.Type("Fdc3InstrumentList",$$t.$d.$type)},true);$c("Fdc3Position:g","Fdc3Context",{init:function(){$$t.$d.init1.call(this,1,3);this.instrument(new $$t.e)},instrument:function(a){if(arguments.length===1){this.item("instrument",a);return a}else{return $b($$t.$e.$type,this.item("instrument"))}},shares:function(a){if(arguments.length===1){this.item("shares",a);return a}else{return this.e("shares")}},cost:function(a){if(arguments.length===1){this.item("cost",a);return a}else{return this.e("cost")}},price:function(a){if(arguments.length===1){this.item("price",a);return a}else{return this.e("price")}},$type:new $.ig.Type("Fdc3Position",$$t.$d.$type)},true);$c("Fdc3Portfolio:h","Fdc3Context",{init:function(){$$t.$d.init1.call(this,1,4);this.positions(new Array(0))},_positions:null,positions:function(a){if(arguments.length===1){this._positions=a;return a}else{return this._positions}},$type:new $.ig.Type("Fdc3Portfolio",$$t.$d.$type)},true);$c("Fdc3Organization:i","Fdc3Context",{init:function(){$$t.$d.init1.call(this,1,7)},$type:new $.ig.Type("Fdc3Organization",$$t.$d.$type)},true);$c("Fdc3OrganizationList:j","Fdc3Context",{init:function(){$$t.$d.init1.call(this,1,8)},_organizations:null,organizations:function(a){if(arguments.length===1){this._organizations=a;return a}else{return this._organizations}},$type:new $.ig.Type("Fdc3OrganizationList",$$t.$d.$type)},true);$c("Fdc3Contact:k","Fdc3Context",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$k.init1.call(this,1,"","","","")},init1:function(a,b,c,d,e){$$t.$d.init1.call(this,1,5);this.name(b);this.email(c);this.phone(d);this.twitter(e)},email:function(a){if(arguments.length===1){this.id().item("email",a);return a}else{return this.id().item("email").toString()}},phone:function(a){if(arguments.length===1){this.id().item("phone",a);return a}else{return this.id().item("phone").toString()}},twitter:function(a){if(arguments.length===1){this.id().item("twitter",a);return a}else{return this.id().item("twitter").toString()}},$type:new $.ig.Type("Fdc3Contact",$$t.$d.$type)},true);$c("Fdc3ContactList:l","Fdc3Context",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$d.init1.call(this,1,6);this.contacts(new Array(0))},init1:function(a,b){$$t.$l.init.call(this,0);this.contacts(b)},_contacts:null,contacts:function(a){if(arguments.length===1){this._contacts=a;return a}else{return this._contacts}},$type:new $.ig.Type("Fdc3ContactList",$$t.$d.$type)},true);$c("Fdc3DataAdapter:m","FinancialDataAdapter",{aq:function(a,b,c){$.ig.FinancialDataAdapter.prototype.aq.call(this,a,b,c)},messageReceived:null,ba:function(a){if(a==null){return}if(a.context()!=null&&String.isNullOrEmpty(a.json())){a.json(a.context().toJson());this.log("received '"+a.intentType()+"' intent '"+a.contextType()+"' context with JSON:\n"+a.json())}if(this.messageReceived!=null&&a!=null){this.messageReceived(a)}},a5:function(){var isRunning_=true;if(!window.hasOwnProperty("fin")){isRunning_=false}return isRunning_},subscribe:function(intentType_,contextType_){if(!this.a5()){return}if(String.isNullOrEmpty(intentType_)){intentType_="ViewChart"}this.log("Subscribing to '"+intentType_+"' intent and '"+contextType_+"' context");var addIntentListener_=this._openFin.addIntentListener},handleIntent:function(context_,contextType_,intentType_){var msg_=new $$t.r;this.log("HandleIntent '"+intentType_+"' intent with '"+contextType_+"' context");msg_.intentType(intentType_);msg_.contextType(contextType_);this.log("HandleIntent");if(contextType_==="fdc3.instrument"){var instrument=Fdc3Converter.toInstrument(context_);msg_.context=instrument}else if(contextType_==="fdc3.instrumentList"){var list=Fdc3Converter.toInstrumentList(context_);msg_.context=list}else if(contextType_==="fdc3.position"){var position=Fdc3Converter.toPosition(context_);msg_.context=position}else if(contextType_==="fdc3.portfolio"){var portfolio=Fdc3Converter.toPortfolio(context_);msg_.context=portfolio}else{}var a=new $$4.x($$t.$g.$type,0);var b=new $$4.x($$t.$e.$type,0);var c=new $$4.x(String,0);var d=new $$4.x(String,0);if(contextType_=="fdc3.instrument"){this.v.clear();this.stockPrices().clear();var e=$b($$t.$e.$type,msg_.context());b.add(e);var f=e.ticker();if(!c.contains(f)){c.add(f)}var g=e.name();if(!d.contains(g)){d.add(g)}}else if(contextType_=="fdc3.instrumentList"){this.v.clear();this.stockPrices().clear();var h=$b($$t.$f.$type,msg_.context());b.addRange(h.instruments());var k=h.instruments();for(var j=0;j<k.length;j++){var i=k[j];var l=i.ticker();if(!c.contains(l)){c.add(l)}var m=i.name();if(!d.contains(m)){d.add(m)}}}else if(contextType_=="fdc3.position"){var n=$b($$t.$g.$type,msg_.context());a.add(n);var o=n.instrument().ticker();if(!c.contains(o)){c.add(n.instrument().ticker())}var p=n.instrument().name();if(!d.contains(p)){d.add(p)}}else if(contextType_=="fdc3.portfolio"){this.x.clear();this.stockPositions().clear();var q=$b($$t.$h.$type,msg_.context());a.addRange(q.positions());var t=q.positions();for(var s=0;s<t.length;s++){var r=t[s];var u=r.instrument().ticker();if(!c.contains(u)){c.add(r.instrument().ticker())}var v=r.instrument().name();if(!d.contains(v)){d.add(v)}}}msg_.tickerSymbols(this.f(String,c));msg_.tickerNames(this.f(String,d));this.log("HandleIntent tickerSymbols "+msg_.tickerSymbols());this.log("HandleIntent instrumentList "+b.count());this.log("HandleIntent positionList "+a.count());var x=b.getEnumerator();while(x.moveNext()){var w=x.current();var y=w.ticker();if(String.isNullOrEmpty(y)){continue}var z=this.q(y);this.ao(y,z)}var ab=a.getEnumerator();while(ab.moveNext()){var aa=ab.current();var ac=aa.instrument().ticker();if(String.isNullOrEmpty(ac)){continue}var ad=this.p(ac);if(aa.cost()>0){ad.costPerShare(aa.cost())}if(aa.shares()>0){ad.shares(aa.shares())}if(aa.price()>0){ad.marketPrice(aa.price())}this.an(ac,ad)}this.ba(msg_)},sendInstrument:function(a,b,c){if(b==null){return}var d=$$t.$a.fromInstrument(b);this.bb(a,d,c)},sendInstrumentList:function(a,b,c){if(b==null){return}var d=$$t.$a.fromInstrumentList(b);this.bb(a,d,c)},sendPosition:function(a,b,c){if(b==null){return}var d=$$t.$a.fromPosition(b);this.bb(a,d,c)},sendPortfolio:function(a,b,c){if(b==null){return}var d=$$t.$a.fromPortfolio(b);this.bb(a,d,c)},bb:function(intent_,context_,target_){if(!this.a5()){return}var raiseIntent_=this._openFin.raiseIntent;this.log("Sending '"+intent_+"' intent to '"+target_+"' target");if(target_==null||target_===""){raiseIntent_(intent_,context_)}else{raiseIntent_(intent_,context_,target_)}},__openFin:null,init:function(a){$.ig.FinancialDataAdapter.prototype.init.call(this);this.__openFin=a},a3:false,a4:function(a){if(arguments.length===1){this.a3=a;return a}else{return this.a3}},a7:function(a){this.a4(true)},dispose:function(){this.a7(true)},$type:new $.ig.Type("Fdc3DataAdapter",$.ig.FinancialDataAdapter.prototype.$type,[$$0.$au.$type])},true);$c("Randomizer:o","Object",{init:function(){$.ig.$op.init.call(this)},d:function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";var c="";for(var d=0;d<a;d++){var e=$$t.$o.c.next1(b.length);c+=b.charAt(e)}return c},b:function(a,b){return $$t.$o.c.next2(a,b)},a:function(a){var b=Math.pow(10,a-1);var c=9*b;return $$t.$o.c.next2($.ig.truncate(b),$.ig.truncate(c))},$type:new $.ig.Type("Randomizer",$.ig.$ot)},true);$c("Fdc3Message:r","Object",{init:function(){$.ig.$op.init.call(this);this.tickerNames(new Array(0));this.tickerSymbols(new Array(0))},_tickerSymbols:null,tickerSymbols:function(a){if(arguments.length===1){this._tickerSymbols=a;return a}else{return this._tickerSymbols}},_tickerNames:null,tickerNames:function(a){if(arguments.length===1){this._tickerNames=a;return a}else{return this._tickerNames}},_json:null,json:function(a){if(arguments.length===1){this._json=a;return a}else{return this._json}},_context:null,context:function(a){if(arguments.length===1){this._context=a;return a}else{return this._context}},_intentType:null,intentType:function(a){if(arguments.length===1){this._intentType=a;return a}else{return this._intentType}},_contextType:null,contextType:function(a){if(arguments.length===1){this._contextType=a;return a}else{return this._contextType}},$type:new $.ig.Type("Fdc3Message",$.ig.$ot)},true);$c("Fdc3Util:s","Object",{init:function(){$.ig.$op.init.call(this)},staticInit:function(){$$t.$s.c=new $$4.h(String,$$t.$q.$type,0);$$t.$s.f(0);$$t.$s.f(1);$$t.$s.f(2);$$t.$s.f(3);$$t.$s.f(4);$$t.$s.f(7);$$t.$s.f(8);$$t.$s.f(5);$$t.$s.f(6);$$t.$s.d=new $$4.h(String,$$t.$p.$type,0);$$t.$s.g(2);$$t.$s.g(3);$$t.$s.g(4);$$t.$s.g(7);$$t.$s.g(5);$$t.$s.g(6);$$t.$s.g(8);$$t.$s.g(10);$$t.$s.g(9)},getString:function(a){var b=$$t.$q.$getName(a);return"fdc3."+b.substr(0,1).toLowerCase()+b.substr(1)},a:function(a){if($$t.$s.c.containsKey(a)){return $$t.$s.c.item(a)}else{return 0}},b:function(a){if($$t.$s.d.containsKey(a)){return $$t.$s.d.item(a)}else{return 2}},f:function(a){var b=$$t.$s.getString(a);if(!$$t.$s.c.containsKey(b)){$$t.$s.c.add(b,a)}},g:function(a){var b=$$t.$p.$getName(a);if(!$$t.$s.d.containsKey(b)){$$t.$s.d.add(b,a)}},$type:new $.ig.Type("Fdc3Util",$.ig.$ot)},true);$$t.$o.c=new $$6.s(0);$$t.$s.c=null;$$t.$s.d=null;if($$t.$s.staticInit&&!$$t.$s.fdc3UtilStaticInitCalled){$$t.$s.staticInit();$$t.$s.fdc3UtilStaticInitCalled=true}});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});