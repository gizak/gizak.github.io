// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('gio.core');
goog.require('cljs.core');
goog.require('gio.command');
goog.require('goog.string');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('om.core');
gio.core.app_state = (function (){var G__16619 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$headline,"PLACEHODLER",cljs.core.constant$keyword$commands,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$log,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$prompt,"\u03BB > ",cljs.core.constant$keyword$history,cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16619) : cljs.core.atom.call(null,G__16619));
})();
gio.core.log = (function gio$core$log(o){
return console.log(o);
});
gio.core.open_link = (function gio$core$open_link(url){
return window.open(url,"_blank");
});
gio.core.focus = (function gio$core$focus(){
return document.getElementById("input-box").focus();
});
gio.command.bind_data(gio.core.app_state);
gio.command.register(cljs.core.constant$keyword$about,"a bit about me",(function (opts){
return gio.command.output("Let's start with obvious, I am not good at writing...");
}));
gio.command.register(cljs.core.constant$keyword$github,"goto my github page",(function (opts){
return gio.core.open_link("https://github.com/gizak");
}));
gio.command.register(cljs.core.constant$keyword$source,"view this page's source code",(function (opts){
return gio.core.open_link("https://github.com/gizak/gizak.github.io/blob/source/src/gio/core.cljs");
}));
gio.command.register(cljs.core.constant$keyword$clear,"clear all history",(function (opts){
gio.command.clear();

return true;
}));
gio.command.register(cljs.core.constant$keyword$echo,"cat input pipe",(function (opts){
gio.command.output(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.constant$keyword$arguments.cljs$core$IFn$_invoke$arity$1(opts)));

return true;
}));
gio.command.register(cljs.core.constant$keyword$bg,"set background color, provided value as css color format",(function (opts){
var G__16620 = cljs.core.first(cljs.core.constant$keyword$arguments.cljs$core$IFn$_invoke$arity$1(opts));
return (gio.core.set_bg.cljs$core$IFn$_invoke$arity$1 ? gio.core.set_bg.cljs$core$IFn$_invoke$arity$1(G__16620) : gio.core.set_bg.call(null,G__16620));
}));
gio.command.register(cljs.core.constant$keyword$copyright,"dump my info",(function (opts){
gio.command.output("@copyright gizak, Jan 23 2015");

gio.command.output_raw("<br>");

gio.command.output("This is supposed to be an index page. It appears as a terminal simulator because the author, gizak, has absolutely no idea how to present a landing page without boredom.");

gio.command.output_raw("<br>");

gio.command.output("For more information, enter command `help` to list all available commands, type `about` to know a little bit about me and hit `source` if you are interested in this page.");

return gio.command.output_raw("<br>");
}));
gio.command.register(cljs.core.constant$keyword$help,"commands summary",(function (opts){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$arguments.cljs$core$IFn$_invoke$arity$1(opts))){
var seq__16621 = cljs.core.seq(cljs.core.vals(gio.command.all_commands()));
var chunk__16622 = null;
var count__16623 = (0);
var i__16624 = (0);
while(true){
if((i__16624 < count__16623)){
var v = chunk__16622.cljs$core$IIndexed$_nth$arity$2(null,i__16624);
gio.command.output_raw(clojure.string.replace((function (){var G__16625 = "%-12s %s";
var G__16626 = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(v);
var G__16627 = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(v);
return goog.string.format(G__16625,G__16626,G__16627);
})()," ","&nbsp;"));

var G__16631 = seq__16621;
var G__16632 = chunk__16622;
var G__16633 = count__16623;
var G__16634 = (i__16624 + (1));
seq__16621 = G__16631;
chunk__16622 = G__16632;
count__16623 = G__16633;
i__16624 = G__16634;
continue;
} else {
var temp__4404__auto__ = cljs.core.seq(seq__16621);
if(temp__4404__auto__){
var seq__16621__$1 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16621__$1)){
var c__4902__auto__ = cljs.core.chunk_first(seq__16621__$1);
var G__16635 = cljs.core.chunk_rest(seq__16621__$1);
var G__16636 = c__4902__auto__;
var G__16637 = cljs.core.count(c__4902__auto__);
var G__16638 = (0);
seq__16621 = G__16635;
chunk__16622 = G__16636;
count__16623 = G__16637;
i__16624 = G__16638;
continue;
} else {
var v = cljs.core.first(seq__16621__$1);
gio.command.output_raw(clojure.string.replace((function (){var G__16628 = "%-12s %s";
var G__16629 = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(v);
var G__16630 = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(v);
return goog.string.format(G__16628,G__16629,G__16630);
})()," ","&nbsp;"));

var G__16639 = cljs.core.next(seq__16621__$1);
var G__16640 = null;
var G__16641 = (0);
var G__16642 = (0);
seq__16621 = G__16639;
chunk__16622 = G__16640;
count__16623 = G__16641;
i__16624 = G__16642;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
gio.core.set_bg = (function gio$core$set_bg(clr){
return document.body.style.backgroundColor = clr;
});

var output_schema16644_16754 = schema.core.Any;
var input_schema16645_16755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
/**
 * Inputs: [data owner]
 */
gio.core.viewport = ((function (output_schema16644_16754,input_schema16645_16755){
return (function gio$core$viewport(data,owner){
if(typeof gio.core.t16700 !== 'undefined'){
} else {

/**
* @constructor
*/
gio.core.t16700 = (function (output_schema16644,input_schema16645,viewport,data,owner,meta16701){
this.output_schema16644 = output_schema16644;
this.input_schema16645 = input_schema16645;
this.viewport = viewport;
this.data = data;
this.owner = owner;
this.meta16701 = meta16701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
gio.core.t16700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (output_schema16644_16754,input_schema16645_16755){
return (function (_16702,meta16701__$1){
var self__ = this;
var _16702__$1 = this;
return (new gio.core.t16700(self__.output_schema16644,self__.input_schema16645,self__.viewport,self__.data,self__.owner,meta16701__$1));
});})(output_schema16644_16754,input_schema16645_16755))
;

gio.core.t16700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (output_schema16644_16754,input_schema16645_16755){
return (function (_16702){
var self__ = this;
var _16702__$1 = this;
return self__.meta16701;
});})(output_schema16644_16754,input_schema16645_16755))
;

gio.core.t16700.prototype.om$core$IDisplayName$ = true;

gio.core.t16700.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (output_schema16644_16754,input_schema16645_16755){
return (function (_){
var self__ = this;
var ___$1 = this;
return "viewport";
});})(output_schema16644_16754,input_schema16645_16755))
;

gio.core.t16700.prototype.om$core$IInitState$ = true;

gio.core.t16700.prototype.om$core$IInitState$init_state$arity$1 = ((function (output_schema16644_16754,input_schema16645_16755){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$inputing_QMARK_,true,cljs.core.constant$keyword$line,""], null);
});})(output_schema16644_16754,input_schema16645_16755))
;

gio.core.t16700.prototype.om$core$IWillMount$ = true;

gio.core.t16700.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (output_schema16644_16754,input_schema16645_16755){
return (function (_){
var self__ = this;
var ___$1 = this;
return null;
});})(output_schema16644_16754,input_schema16645_16755))
;

gio.core.t16700.prototype.om$core$IDidMount$ = true;

gio.core.t16700.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (output_schema16644_16754,input_schema16645_16755){
return (function (_){
var self__ = this;
var ___$1 = this;
gio.command.call("copyright");

om.core.refresh_BANG_(self__.owner);

return gio.core.focus();
});})(output_schema16644_16754,input_schema16645_16755))
;

gio.core.t16700.prototype.om$core$IRenderState$ = true;

gio.core.t16700.prototype.om$core$IRenderState$render_state$arity$2 = ((function (output_schema16644_16754,input_schema16645_16755){
return (function (_,p__16703){
var self__ = this;
var map__16704 = p__16703;
var map__16704__$1 = ((cljs.core.seq_QMARK_(map__16704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16704):map__16704);
var inputing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16704__$1,cljs.core.constant$keyword$inputing_QMARK_);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16704__$1,cljs.core.constant$keyword$line);
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,{"id": "term-box"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__4871__auto__ = ((function (___$1,map__16704,map__16704__$1,inputing_QMARK_,line,output_schema16644_16754,input_schema16645_16755){
return (function gio$core$viewport_$_iter__16705(s__16706){
return (new cljs.core.LazySeq(null,((function (___$1,map__16704,map__16704__$1,inputing_QMARK_,line,output_schema16644_16754,input_schema16645_16755){
return (function (){
var s__16706__$1 = s__16706;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__16706__$1);
if(temp__4404__auto__){
var s__16706__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16706__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__16706__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__16708 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__16707 = (0);
while(true){
if((i__16707 < size__4870__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__16707);
cljs.core.chunk_append(b__16708,(function (){var pred__16731 = cljs.core._EQ_;
var expr__16732 = cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_((function (){var G__16734 = cljs.core.constant$keyword$output;
var G__16735 = expr__16732;
return (pred__16731.cljs$core$IFn$_invoke$arity$2 ? pred__16731.cljs$core$IFn$_invoke$arity$2(G__16734,G__16735) : pred__16731.call(null,G__16734,G__16735));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,{"className": "history-output"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$content.cljs$core$IFn$_invoke$arity$1(h)],null))));
} else {
if(cljs.core.truth_((function (){var G__16736 = cljs.core.constant$keyword$output_DASH_raw;
var G__16737 = expr__16732;
return (pred__16731.cljs$core$IFn$_invoke$arity$2 ? pred__16731.cljs$core$IFn$_invoke$arity$2(G__16736,G__16737) : pred__16731.call(null,G__16736,G__16737));
})())){
var G__16738 = {"className": "history-output", "dangerouslySetInnerHTML": {"__html": om_tools.dom.format_opts(cljs.core.constant$keyword$content.cljs$core$IFn$_invoke$arity$1(h))}};
return React.DOM.p(G__16738);
} else {
if(cljs.core.truth_((function (){var G__16739 = cljs.core.constant$keyword$input;
var G__16740 = expr__16732;
return (pred__16731.cljs$core$IFn$_invoke$arity$2 ? pred__16731.cljs$core$IFn$_invoke$arity$2(G__16739,G__16740) : pred__16731.call(null,G__16739,G__16740));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,{"className": "history-input"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(cljs.core.constant$keyword$prompt.cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(cljs.core.constant$keyword$content.cljs$core$IFn$_invoke$arity$1(h))].join('')],null))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16732)].join('')));
}
}
}
})());

var G__16756 = (i__16707 + (1));
i__16707 = G__16756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16708),gio$core$viewport_$_iter__16705(cljs.core.chunk_rest(s__16706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16708),null);
}
} else {
var h = cljs.core.first(s__16706__$2);
return cljs.core.cons((function (){var pred__16741 = cljs.core._EQ_;
var expr__16742 = cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_((function (){var G__16744 = cljs.core.constant$keyword$output;
var G__16745 = expr__16742;
return (pred__16741.cljs$core$IFn$_invoke$arity$2 ? pred__16741.cljs$core$IFn$_invoke$arity$2(G__16744,G__16745) : pred__16741.call(null,G__16744,G__16745));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,{"className": "history-output"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$content.cljs$core$IFn$_invoke$arity$1(h)],null))));
} else {
if(cljs.core.truth_((function (){var G__16746 = cljs.core.constant$keyword$output_DASH_raw;
var G__16747 = expr__16742;
return (pred__16741.cljs$core$IFn$_invoke$arity$2 ? pred__16741.cljs$core$IFn$_invoke$arity$2(G__16746,G__16747) : pred__16741.call(null,G__16746,G__16747));
})())){
var G__16748 = {"className": "history-output", "dangerouslySetInnerHTML": {"__html": om_tools.dom.format_opts(cljs.core.constant$keyword$content.cljs$core$IFn$_invoke$arity$1(h))}};
return React.DOM.p(G__16748);
} else {
if(cljs.core.truth_((function (){var G__16749 = cljs.core.constant$keyword$input;
var G__16750 = expr__16742;
return (pred__16741.cljs$core$IFn$_invoke$arity$2 ? pred__16741.cljs$core$IFn$_invoke$arity$2(G__16749,G__16750) : pred__16741.call(null,G__16749,G__16750));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,{"className": "history-input"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(cljs.core.constant$keyword$prompt.cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(cljs.core.constant$keyword$content.cljs$core$IFn$_invoke$arity$1(h))].join('')],null))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16742)].join('')));
}
}
}
})(),gio$core$viewport_$_iter__16705(cljs.core.rest(s__16706__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,map__16704,map__16704__$1,inputing_QMARK_,line,output_schema16644_16754,input_schema16645_16755))
,null,null));
});})(___$1,map__16704,map__16704__$1,inputing_QMARK_,line,output_schema16644_16754,input_schema16645_16755))
;
return iter__4871__auto__(gio.command.history());
})(),(cljs.core.truth_(inputing_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,{"id": "input-table"},cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,{"id": "input-prompt"},cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prompt.cljs$core$IFn$_invoke$arity$1(self__.data)],null)))),(function (){var G__16751 = {"id": "input-box", "onChange": om_tools.dom.format_opts(((function (___$1,map__16704,map__16704__$1,inputing_QMARK_,line,output_schema16644_16754,input_schema16645_16755){
return (function (e){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$line,e.target.value);
});})(___$1,map__16704,map__16704__$1,inputing_QMARK_,line,output_schema16644_16754,input_schema16645_16755))
), "value": om_tools.dom.format_opts(line), "autoFocus": true, "onKeyPress": om_tools.dom.format_opts(((function (___$1,map__16704,map__16704__$1,inputing_QMARK_,line,output_schema16644_16754,input_schema16645_16755){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$inputing_QMARK_,false);

gio.command.record_input(line);

gio.command.call(e.target.value);

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$line,"");

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$inputing_QMARK_,true);

return gio.core.focus();
} else {
return null;
}
});})(___$1,map__16704,map__16704__$1,inputing_QMARK_,line,output_schema16644_16754,input_schema16645_16755))
)};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__16751) : om.dom.input.call(null,G__16751));
})()],null)))):null)],null))));
});})(output_schema16644_16754,input_schema16645_16755))
;

gio.core.t16700.cljs$lang$type = true;

gio.core.t16700.cljs$lang$ctorStr = "gio.core/t16700";

gio.core.t16700.cljs$lang$ctorPrWriter = ((function (output_schema16644_16754,input_schema16645_16755){
return (function (this__4696__auto__,writer__4697__auto__,opt__4698__auto__){
return cljs.core._write(writer__4697__auto__,"gio.core/t16700");
});})(output_schema16644_16754,input_schema16645_16755))
;

gio.core.__GT_t16700 = ((function (output_schema16644_16754,input_schema16645_16755){
return (function gio$core$viewport_$___GT_t16700(output_schema16644__$1,input_schema16645__$1,viewport__$1,data__$1,owner__$1,meta16701){
return (new gio.core.t16700(output_schema16644__$1,input_schema16645__$1,viewport__$1,data__$1,owner__$1,meta16701));
});})(output_schema16644_16754,input_schema16645_16755))
;

}

return (new gio.core.t16700(output_schema16644_16754,input_schema16645_16755,gio$core$viewport,data,owner,null));
});})(output_schema16644_16754,input_schema16645_16755))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(gio.core.viewport),schema.core.make_fn_schema(output_schema16644_16754,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16645_16755], null)));

gio.core.__GT_viewport = (function gio$core$__GT_viewport(){
var G__16753 = arguments.length;
switch (G__16753) {
case 1:
return gio.core.__GT_viewport.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gio.core.__GT_viewport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gio.core.__GT_viewport.cljs$core$IFn$_invoke$arity$1 = (function (cursor__16439__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(gio.core.viewport,cursor__16439__auto__);
});

gio.core.__GT_viewport.cljs$core$IFn$_invoke$arity$2 = (function (cursor__16439__auto__,m16643){
return om.core.build.cljs$core$IFn$_invoke$arity$3(gio.core.viewport,cursor__16439__auto__,m16643);
});

gio.core.__GT_viewport.cljs$lang$maxFixedArity = 2;
om.core.root(gio.core.viewport,gio.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$target,document.getElementById("app")], null));
