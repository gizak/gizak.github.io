// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__4117__auto__ = (cljs.core.count(attr) < (5));
if(or__4117__auto__){
return or__4117__auto__;
} else {
var G__19131 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5));
switch (G__19131) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case(attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__19134 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__19134) {
case "class":
return cljs.core.constant$keyword$className;

break;
case "for":
return cljs.core.constant$keyword$htmlFor;

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_(opt_val)){
var G__19137 = opt_val;
return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(G__19137) : om_tools.dom.format_opts.call(null,G__19137));
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_(opts)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19140){
var vec__19141 = p__19140;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19141,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__4117__auto__ = React.isValidElement;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (!(om_tools.dom.valid_element_QMARK_(x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_(opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__19143 = om_tools.dom.element_args(opts,children);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(){
var G__19147 = arguments.length;
switch (G__19147) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.a,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq19144){
var G__19145 = cljs.core.first(seq19144);
var seq19144__$1 = cljs.core.next(seq19144);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__19145,seq19144__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = 0;

om_tools.dom.abbr = (function om_tools$dom$abbr(){
var G__19151 = arguments.length;
switch (G__19151) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.abbr,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq19148){
var G__19149 = cljs.core.first(seq19148);
var seq19148__$1 = cljs.core.next(seq19148);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__19149,seq19148__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = 0;

om_tools.dom.address = (function om_tools$dom$address(){
var G__19155 = arguments.length;
switch (G__19155) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.address,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq19152){
var G__19153 = cljs.core.first(seq19152);
var seq19152__$1 = cljs.core.next(seq19152);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__19153,seq19152__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = 0;

om_tools.dom.area = (function om_tools$dom$area(){
var G__19159 = arguments.length;
switch (G__19159) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.area,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq19156){
var G__19157 = cljs.core.first(seq19156);
var seq19156__$1 = cljs.core.next(seq19156);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__19157,seq19156__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = 0;

om_tools.dom.article = (function om_tools$dom$article(){
var G__19163 = arguments.length;
switch (G__19163) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.article,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq19160){
var G__19161 = cljs.core.first(seq19160);
var seq19160__$1 = cljs.core.next(seq19160);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__19161,seq19160__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = 0;

om_tools.dom.aside = (function om_tools$dom$aside(){
var G__19167 = arguments.length;
switch (G__19167) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.aside,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq19164){
var G__19165 = cljs.core.first(seq19164);
var seq19164__$1 = cljs.core.next(seq19164);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__19165,seq19164__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = 0;

om_tools.dom.audio = (function om_tools$dom$audio(){
var G__19171 = arguments.length;
switch (G__19171) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.audio,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq19168){
var G__19169 = cljs.core.first(seq19168);
var seq19168__$1 = cljs.core.next(seq19168);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__19169,seq19168__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = 0;

om_tools.dom.b = (function om_tools$dom$b(){
var G__19175 = arguments.length;
switch (G__19175) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.b,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq19172){
var G__19173 = cljs.core.first(seq19172);
var seq19172__$1 = cljs.core.next(seq19172);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__19173,seq19172__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = 0;

om_tools.dom.base = (function om_tools$dom$base(){
var G__19179 = arguments.length;
switch (G__19179) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.base,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq19176){
var G__19177 = cljs.core.first(seq19176);
var seq19176__$1 = cljs.core.next(seq19176);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__19177,seq19176__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = 0;

om_tools.dom.bdi = (function om_tools$dom$bdi(){
var G__19183 = arguments.length;
switch (G__19183) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.bdi,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq19180){
var G__19181 = cljs.core.first(seq19180);
var seq19180__$1 = cljs.core.next(seq19180);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__19181,seq19180__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = 0;

om_tools.dom.bdo = (function om_tools$dom$bdo(){
var G__19187 = arguments.length;
switch (G__19187) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.bdo,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq19184){
var G__19185 = cljs.core.first(seq19184);
var seq19184__$1 = cljs.core.next(seq19184);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__19185,seq19184__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = 0;

om_tools.dom.big = (function om_tools$dom$big(){
var G__19191 = arguments.length;
switch (G__19191) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.big,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq19188){
var G__19189 = cljs.core.first(seq19188);
var seq19188__$1 = cljs.core.next(seq19188);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__19189,seq19188__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = 0;

om_tools.dom.blockquote = (function om_tools$dom$blockquote(){
var G__19195 = arguments.length;
switch (G__19195) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.blockquote,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq19192){
var G__19193 = cljs.core.first(seq19192);
var seq19192__$1 = cljs.core.next(seq19192);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__19193,seq19192__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = 0;

om_tools.dom.body = (function om_tools$dom$body(){
var G__19199 = arguments.length;
switch (G__19199) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.body,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq19196){
var G__19197 = cljs.core.first(seq19196);
var seq19196__$1 = cljs.core.next(seq19196);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__19197,seq19196__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = 0;

om_tools.dom.br = (function om_tools$dom$br(){
var G__19203 = arguments.length;
switch (G__19203) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.br,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq19200){
var G__19201 = cljs.core.first(seq19200);
var seq19200__$1 = cljs.core.next(seq19200);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__19201,seq19200__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = 0;

om_tools.dom.button = (function om_tools$dom$button(){
var G__19207 = arguments.length;
switch (G__19207) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.button,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq19204){
var G__19205 = cljs.core.first(seq19204);
var seq19204__$1 = cljs.core.next(seq19204);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__19205,seq19204__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = 0;

om_tools.dom.canvas = (function om_tools$dom$canvas(){
var G__19211 = arguments.length;
switch (G__19211) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.canvas,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq19208){
var G__19209 = cljs.core.first(seq19208);
var seq19208__$1 = cljs.core.next(seq19208);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__19209,seq19208__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = 0;

om_tools.dom.caption = (function om_tools$dom$caption(){
var G__19215 = arguments.length;
switch (G__19215) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.caption,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq19212){
var G__19213 = cljs.core.first(seq19212);
var seq19212__$1 = cljs.core.next(seq19212);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__19213,seq19212__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = 0;

om_tools.dom.cite = (function om_tools$dom$cite(){
var G__19219 = arguments.length;
switch (G__19219) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.cite,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq19216){
var G__19217 = cljs.core.first(seq19216);
var seq19216__$1 = cljs.core.next(seq19216);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__19217,seq19216__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = 0;

om_tools.dom.code = (function om_tools$dom$code(){
var G__19223 = arguments.length;
switch (G__19223) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.code,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq19220){
var G__19221 = cljs.core.first(seq19220);
var seq19220__$1 = cljs.core.next(seq19220);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__19221,seq19220__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = 0;

om_tools.dom.col = (function om_tools$dom$col(){
var G__19227 = arguments.length;
switch (G__19227) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.col,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq19224){
var G__19225 = cljs.core.first(seq19224);
var seq19224__$1 = cljs.core.next(seq19224);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__19225,seq19224__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = 0;

om_tools.dom.colgroup = (function om_tools$dom$colgroup(){
var G__19231 = arguments.length;
switch (G__19231) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.colgroup,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq19228){
var G__19229 = cljs.core.first(seq19228);
var seq19228__$1 = cljs.core.next(seq19228);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__19229,seq19228__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = 0;

om_tools.dom.data = (function om_tools$dom$data(){
var G__19235 = arguments.length;
switch (G__19235) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.data,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq19232){
var G__19233 = cljs.core.first(seq19232);
var seq19232__$1 = cljs.core.next(seq19232);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__19233,seq19232__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = 0;

om_tools.dom.datalist = (function om_tools$dom$datalist(){
var G__19239 = arguments.length;
switch (G__19239) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.datalist,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq19236){
var G__19237 = cljs.core.first(seq19236);
var seq19236__$1 = cljs.core.next(seq19236);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__19237,seq19236__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = 0;

om_tools.dom.dd = (function om_tools$dom$dd(){
var G__19243 = arguments.length;
switch (G__19243) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.dd,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq19240){
var G__19241 = cljs.core.first(seq19240);
var seq19240__$1 = cljs.core.next(seq19240);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__19241,seq19240__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = 0;

om_tools.dom.del = (function om_tools$dom$del(){
var G__19247 = arguments.length;
switch (G__19247) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.del,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq19244){
var G__19245 = cljs.core.first(seq19244);
var seq19244__$1 = cljs.core.next(seq19244);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__19245,seq19244__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = 0;

om_tools.dom.dfn = (function om_tools$dom$dfn(){
var G__19251 = arguments.length;
switch (G__19251) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.dfn,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq19248){
var G__19249 = cljs.core.first(seq19248);
var seq19248__$1 = cljs.core.next(seq19248);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__19249,seq19248__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = 0;

om_tools.dom.div = (function om_tools$dom$div(){
var G__19255 = arguments.length;
switch (G__19255) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.div,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq19252){
var G__19253 = cljs.core.first(seq19252);
var seq19252__$1 = cljs.core.next(seq19252);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__19253,seq19252__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = 0;

om_tools.dom.dl = (function om_tools$dom$dl(){
var G__19259 = arguments.length;
switch (G__19259) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.dl,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq19256){
var G__19257 = cljs.core.first(seq19256);
var seq19256__$1 = cljs.core.next(seq19256);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__19257,seq19256__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = 0;

om_tools.dom.dt = (function om_tools$dom$dt(){
var G__19263 = arguments.length;
switch (G__19263) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.dt,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq19260){
var G__19261 = cljs.core.first(seq19260);
var seq19260__$1 = cljs.core.next(seq19260);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__19261,seq19260__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = 0;

om_tools.dom.em = (function om_tools$dom$em(){
var G__19267 = arguments.length;
switch (G__19267) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.em,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq19264){
var G__19265 = cljs.core.first(seq19264);
var seq19264__$1 = cljs.core.next(seq19264);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__19265,seq19264__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = 0;

om_tools.dom.embed = (function om_tools$dom$embed(){
var G__19271 = arguments.length;
switch (G__19271) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.embed,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq19268){
var G__19269 = cljs.core.first(seq19268);
var seq19268__$1 = cljs.core.next(seq19268);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__19269,seq19268__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = 0;

om_tools.dom.fieldset = (function om_tools$dom$fieldset(){
var G__19279 = arguments.length;
switch (G__19279) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.fieldset,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq19276){
var G__19277 = cljs.core.first(seq19276);
var seq19276__$1 = cljs.core.next(seq19276);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__19277,seq19276__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = 0;

om_tools.dom.figcaption = (function om_tools$dom$figcaption(){
var G__19283 = arguments.length;
switch (G__19283) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.figcaption,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq19280){
var G__19281 = cljs.core.first(seq19280);
var seq19280__$1 = cljs.core.next(seq19280);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__19281,seq19280__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = 0;

om_tools.dom.figure = (function om_tools$dom$figure(){
var G__19287 = arguments.length;
switch (G__19287) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.figure,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq19284){
var G__19285 = cljs.core.first(seq19284);
var seq19284__$1 = cljs.core.next(seq19284);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__19285,seq19284__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = 0;

om_tools.dom.footer = (function om_tools$dom$footer(){
var G__19291 = arguments.length;
switch (G__19291) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.footer,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq19288){
var G__19289 = cljs.core.first(seq19288);
var seq19288__$1 = cljs.core.next(seq19288);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__19289,seq19288__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = 0;

om_tools.dom.form = (function om_tools$dom$form(){
var G__19295 = arguments.length;
switch (G__19295) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.form,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq19292){
var G__19293 = cljs.core.first(seq19292);
var seq19292__$1 = cljs.core.next(seq19292);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__19293,seq19292__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = 0;

om_tools.dom.h1 = (function om_tools$dom$h1(){
var G__19299 = arguments.length;
switch (G__19299) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.h1,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq19296){
var G__19297 = cljs.core.first(seq19296);
var seq19296__$1 = cljs.core.next(seq19296);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__19297,seq19296__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = 0;

om_tools.dom.h2 = (function om_tools$dom$h2(){
var G__19303 = arguments.length;
switch (G__19303) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.h2,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq19300){
var G__19301 = cljs.core.first(seq19300);
var seq19300__$1 = cljs.core.next(seq19300);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__19301,seq19300__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = 0;

om_tools.dom.h3 = (function om_tools$dom$h3(){
var G__19307 = arguments.length;
switch (G__19307) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.h3,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq19304){
var G__19305 = cljs.core.first(seq19304);
var seq19304__$1 = cljs.core.next(seq19304);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__19305,seq19304__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = 0;

om_tools.dom.h4 = (function om_tools$dom$h4(){
var G__19311 = arguments.length;
switch (G__19311) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.h4,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq19308){
var G__19309 = cljs.core.first(seq19308);
var seq19308__$1 = cljs.core.next(seq19308);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__19309,seq19308__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = 0;

om_tools.dom.h5 = (function om_tools$dom$h5(){
var G__19315 = arguments.length;
switch (G__19315) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.h5,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq19312){
var G__19313 = cljs.core.first(seq19312);
var seq19312__$1 = cljs.core.next(seq19312);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__19313,seq19312__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = 0;

om_tools.dom.h6 = (function om_tools$dom$h6(){
var G__19319 = arguments.length;
switch (G__19319) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.h6,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq19316){
var G__19317 = cljs.core.first(seq19316);
var seq19316__$1 = cljs.core.next(seq19316);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__19317,seq19316__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = 0;

om_tools.dom.head = (function om_tools$dom$head(){
var G__19323 = arguments.length;
switch (G__19323) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.head,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq19320){
var G__19321 = cljs.core.first(seq19320);
var seq19320__$1 = cljs.core.next(seq19320);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__19321,seq19320__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = 0;

om_tools.dom.header = (function om_tools$dom$header(){
var G__19327 = arguments.length;
switch (G__19327) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.header,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq19324){
var G__19325 = cljs.core.first(seq19324);
var seq19324__$1 = cljs.core.next(seq19324);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__19325,seq19324__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = 0;

om_tools.dom.hr = (function om_tools$dom$hr(){
var G__19331 = arguments.length;
switch (G__19331) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.hr,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq19328){
var G__19329 = cljs.core.first(seq19328);
var seq19328__$1 = cljs.core.next(seq19328);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__19329,seq19328__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = 0;

om_tools.dom.html = (function om_tools$dom$html(){
var G__19335 = arguments.length;
switch (G__19335) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.html,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq19332){
var G__19333 = cljs.core.first(seq19332);
var seq19332__$1 = cljs.core.next(seq19332);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__19333,seq19332__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = 0;

om_tools.dom.i = (function om_tools$dom$i(){
var G__19339 = arguments.length;
switch (G__19339) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.i,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq19336){
var G__19337 = cljs.core.first(seq19336);
var seq19336__$1 = cljs.core.next(seq19336);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__19337,seq19336__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = 0;

om_tools.dom.iframe = (function om_tools$dom$iframe(){
var G__19343 = arguments.length;
switch (G__19343) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.iframe,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq19340){
var G__19341 = cljs.core.first(seq19340);
var seq19340__$1 = cljs.core.next(seq19340);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__19341,seq19340__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = 0;

om_tools.dom.img = (function om_tools$dom$img(){
var G__19347 = arguments.length;
switch (G__19347) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.img,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq19344){
var G__19345 = cljs.core.first(seq19344);
var seq19344__$1 = cljs.core.next(seq19344);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__19345,seq19344__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = 0;

om_tools.dom.ins = (function om_tools$dom$ins(){
var G__19351 = arguments.length;
switch (G__19351) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.ins,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq19348){
var G__19349 = cljs.core.first(seq19348);
var seq19348__$1 = cljs.core.next(seq19348);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__19349,seq19348__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = 0;

om_tools.dom.kbd = (function om_tools$dom$kbd(){
var G__19355 = arguments.length;
switch (G__19355) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.kbd,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq19352){
var G__19353 = cljs.core.first(seq19352);
var seq19352__$1 = cljs.core.next(seq19352);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__19353,seq19352__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = 0;

om_tools.dom.keygen = (function om_tools$dom$keygen(){
var G__19359 = arguments.length;
switch (G__19359) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.keygen,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq19356){
var G__19357 = cljs.core.first(seq19356);
var seq19356__$1 = cljs.core.next(seq19356);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__19357,seq19356__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = 0;

om_tools.dom.label = (function om_tools$dom$label(){
var G__19363 = arguments.length;
switch (G__19363) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.label,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq19360){
var G__19361 = cljs.core.first(seq19360);
var seq19360__$1 = cljs.core.next(seq19360);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__19361,seq19360__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = 0;

om_tools.dom.legend = (function om_tools$dom$legend(){
var G__19367 = arguments.length;
switch (G__19367) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.legend,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq19364){
var G__19365 = cljs.core.first(seq19364);
var seq19364__$1 = cljs.core.next(seq19364);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__19365,seq19364__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = 0;

om_tools.dom.li = (function om_tools$dom$li(){
var G__19371 = arguments.length;
switch (G__19371) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.li,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq19368){
var G__19369 = cljs.core.first(seq19368);
var seq19368__$1 = cljs.core.next(seq19368);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__19369,seq19368__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = 0;

om_tools.dom.link = (function om_tools$dom$link(){
var G__19375 = arguments.length;
switch (G__19375) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.link,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq19372){
var G__19373 = cljs.core.first(seq19372);
var seq19372__$1 = cljs.core.next(seq19372);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__19373,seq19372__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = 0;

om_tools.dom.main = (function om_tools$dom$main(){
var G__19379 = arguments.length;
switch (G__19379) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.main,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq19376){
var G__19377 = cljs.core.first(seq19376);
var seq19376__$1 = cljs.core.next(seq19376);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__19377,seq19376__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = 0;

om_tools.dom.map = (function om_tools$dom$map(){
var G__19383 = arguments.length;
switch (G__19383) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.map,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq19380){
var G__19381 = cljs.core.first(seq19380);
var seq19380__$1 = cljs.core.next(seq19380);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__19381,seq19380__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = 0;

om_tools.dom.mark = (function om_tools$dom$mark(){
var G__19387 = arguments.length;
switch (G__19387) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.mark,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq19384){
var G__19385 = cljs.core.first(seq19384);
var seq19384__$1 = cljs.core.next(seq19384);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__19385,seq19384__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = 0;

om_tools.dom.marquee = (function om_tools$dom$marquee(){
var G__19391 = arguments.length;
switch (G__19391) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.marquee,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq19388){
var G__19389 = cljs.core.first(seq19388);
var seq19388__$1 = cljs.core.next(seq19388);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__19389,seq19388__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = 0;

om_tools.dom.menu = (function om_tools$dom$menu(){
var G__19395 = arguments.length;
switch (G__19395) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.menu,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq19392){
var G__19393 = cljs.core.first(seq19392);
var seq19392__$1 = cljs.core.next(seq19392);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__19393,seq19392__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = 0;

om_tools.dom.menuitem = (function om_tools$dom$menuitem(){
var G__19399 = arguments.length;
switch (G__19399) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.menuitem,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq19396){
var G__19397 = cljs.core.first(seq19396);
var seq19396__$1 = cljs.core.next(seq19396);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__19397,seq19396__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = 0;

om_tools.dom.meta = (function om_tools$dom$meta(){
var G__19403 = arguments.length;
switch (G__19403) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.meta,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq19400){
var G__19401 = cljs.core.first(seq19400);
var seq19400__$1 = cljs.core.next(seq19400);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__19401,seq19400__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = 0;

om_tools.dom.meter = (function om_tools$dom$meter(){
var G__19407 = arguments.length;
switch (G__19407) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.meter,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq19404){
var G__19405 = cljs.core.first(seq19404);
var seq19404__$1 = cljs.core.next(seq19404);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__19405,seq19404__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = 0;

om_tools.dom.nav = (function om_tools$dom$nav(){
var G__19411 = arguments.length;
switch (G__19411) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.nav,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq19408){
var G__19409 = cljs.core.first(seq19408);
var seq19408__$1 = cljs.core.next(seq19408);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__19409,seq19408__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = 0;

om_tools.dom.noscript = (function om_tools$dom$noscript(){
var G__19415 = arguments.length;
switch (G__19415) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.noscript,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq19412){
var G__19413 = cljs.core.first(seq19412);
var seq19412__$1 = cljs.core.next(seq19412);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__19413,seq19412__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = 0;

om_tools.dom.object = (function om_tools$dom$object(){
var G__19419 = arguments.length;
switch (G__19419) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.object,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq19416){
var G__19417 = cljs.core.first(seq19416);
var seq19416__$1 = cljs.core.next(seq19416);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__19417,seq19416__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = 0;

om_tools.dom.ol = (function om_tools$dom$ol(){
var G__19423 = arguments.length;
switch (G__19423) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.ol,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq19420){
var G__19421 = cljs.core.first(seq19420);
var seq19420__$1 = cljs.core.next(seq19420);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__19421,seq19420__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = 0;

om_tools.dom.optgroup = (function om_tools$dom$optgroup(){
var G__19427 = arguments.length;
switch (G__19427) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.optgroup,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq19424){
var G__19425 = cljs.core.first(seq19424);
var seq19424__$1 = cljs.core.next(seq19424);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__19425,seq19424__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = 0;

om_tools.dom.output = (function om_tools$dom$output(){
var G__19431 = arguments.length;
switch (G__19431) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.output,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq19428){
var G__19429 = cljs.core.first(seq19428);
var seq19428__$1 = cljs.core.next(seq19428);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__19429,seq19428__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = 0;

om_tools.dom.p = (function om_tools$dom$p(){
var G__19435 = arguments.length;
switch (G__19435) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.p,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq19432){
var G__19433 = cljs.core.first(seq19432);
var seq19432__$1 = cljs.core.next(seq19432);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__19433,seq19432__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = 0;

om_tools.dom.param = (function om_tools$dom$param(){
var G__19439 = arguments.length;
switch (G__19439) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.param,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq19436){
var G__19437 = cljs.core.first(seq19436);
var seq19436__$1 = cljs.core.next(seq19436);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__19437,seq19436__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = 0;

om_tools.dom.pre = (function om_tools$dom$pre(){
var G__19443 = arguments.length;
switch (G__19443) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.pre,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq19440){
var G__19441 = cljs.core.first(seq19440);
var seq19440__$1 = cljs.core.next(seq19440);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__19441,seq19440__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = 0;

om_tools.dom.progress = (function om_tools$dom$progress(){
var G__19447 = arguments.length;
switch (G__19447) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.progress,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq19444){
var G__19445 = cljs.core.first(seq19444);
var seq19444__$1 = cljs.core.next(seq19444);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__19445,seq19444__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = 0;

om_tools.dom.q = (function om_tools$dom$q(){
var G__19451 = arguments.length;
switch (G__19451) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.q,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq19448){
var G__19449 = cljs.core.first(seq19448);
var seq19448__$1 = cljs.core.next(seq19448);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__19449,seq19448__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = 0;

om_tools.dom.rp = (function om_tools$dom$rp(){
var G__19455 = arguments.length;
switch (G__19455) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.rp,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq19452){
var G__19453 = cljs.core.first(seq19452);
var seq19452__$1 = cljs.core.next(seq19452);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__19453,seq19452__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = 0;

om_tools.dom.rt = (function om_tools$dom$rt(){
var G__19459 = arguments.length;
switch (G__19459) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.rt,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq19456){
var G__19457 = cljs.core.first(seq19456);
var seq19456__$1 = cljs.core.next(seq19456);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__19457,seq19456__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = 0;

om_tools.dom.ruby = (function om_tools$dom$ruby(){
var G__19463 = arguments.length;
switch (G__19463) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.ruby,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq19460){
var G__19461 = cljs.core.first(seq19460);
var seq19460__$1 = cljs.core.next(seq19460);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__19461,seq19460__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = 0;

om_tools.dom.s = (function om_tools$dom$s(){
var G__19467 = arguments.length;
switch (G__19467) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.s,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq19464){
var G__19465 = cljs.core.first(seq19464);
var seq19464__$1 = cljs.core.next(seq19464);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__19465,seq19464__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = 0;

om_tools.dom.samp = (function om_tools$dom$samp(){
var G__19471 = arguments.length;
switch (G__19471) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.samp,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq19468){
var G__19469 = cljs.core.first(seq19468);
var seq19468__$1 = cljs.core.next(seq19468);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__19469,seq19468__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = 0;

om_tools.dom.script = (function om_tools$dom$script(){
var G__19475 = arguments.length;
switch (G__19475) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.script,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq19472){
var G__19473 = cljs.core.first(seq19472);
var seq19472__$1 = cljs.core.next(seq19472);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__19473,seq19472__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = 0;

om_tools.dom.section = (function om_tools$dom$section(){
var G__19479 = arguments.length;
switch (G__19479) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.section,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq19476){
var G__19477 = cljs.core.first(seq19476);
var seq19476__$1 = cljs.core.next(seq19476);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__19477,seq19476__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = 0;

om_tools.dom.select = (function om_tools$dom$select(){
var G__19483 = arguments.length;
switch (G__19483) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.select,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq19480){
var G__19481 = cljs.core.first(seq19480);
var seq19480__$1 = cljs.core.next(seq19480);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__19481,seq19480__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = 0;

om_tools.dom.small = (function om_tools$dom$small(){
var G__19487 = arguments.length;
switch (G__19487) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.small,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq19484){
var G__19485 = cljs.core.first(seq19484);
var seq19484__$1 = cljs.core.next(seq19484);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__19485,seq19484__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = 0;

om_tools.dom.source = (function om_tools$dom$source(){
var G__19491 = arguments.length;
switch (G__19491) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.source,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq19488){
var G__19489 = cljs.core.first(seq19488);
var seq19488__$1 = cljs.core.next(seq19488);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__19489,seq19488__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = 0;

om_tools.dom.span = (function om_tools$dom$span(){
var G__19495 = arguments.length;
switch (G__19495) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.span,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq19492){
var G__19493 = cljs.core.first(seq19492);
var seq19492__$1 = cljs.core.next(seq19492);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__19493,seq19492__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = 0;

om_tools.dom.strong = (function om_tools$dom$strong(){
var G__19499 = arguments.length;
switch (G__19499) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.strong,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq19496){
var G__19497 = cljs.core.first(seq19496);
var seq19496__$1 = cljs.core.next(seq19496);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__19497,seq19496__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = 0;

om_tools.dom.style = (function om_tools$dom$style(){
var G__19503 = arguments.length;
switch (G__19503) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.style,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq19500){
var G__19501 = cljs.core.first(seq19500);
var seq19500__$1 = cljs.core.next(seq19500);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__19501,seq19500__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = 0;

om_tools.dom.sub = (function om_tools$dom$sub(){
var G__19507 = arguments.length;
switch (G__19507) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.sub,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq19504){
var G__19505 = cljs.core.first(seq19504);
var seq19504__$1 = cljs.core.next(seq19504);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__19505,seq19504__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = 0;

om_tools.dom.summary = (function om_tools$dom$summary(){
var G__19511 = arguments.length;
switch (G__19511) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.summary,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq19508){
var G__19509 = cljs.core.first(seq19508);
var seq19508__$1 = cljs.core.next(seq19508);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__19509,seq19508__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = 0;

om_tools.dom.sup = (function om_tools$dom$sup(){
var G__19515 = arguments.length;
switch (G__19515) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.sup,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq19512){
var G__19513 = cljs.core.first(seq19512);
var seq19512__$1 = cljs.core.next(seq19512);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__19513,seq19512__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = 0;

om_tools.dom.table = (function om_tools$dom$table(){
var G__19519 = arguments.length;
switch (G__19519) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.table,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq19516){
var G__19517 = cljs.core.first(seq19516);
var seq19516__$1 = cljs.core.next(seq19516);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__19517,seq19516__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = 0;

om_tools.dom.tbody = (function om_tools$dom$tbody(){
var G__19523 = arguments.length;
switch (G__19523) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.tbody,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq19520){
var G__19521 = cljs.core.first(seq19520);
var seq19520__$1 = cljs.core.next(seq19520);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__19521,seq19520__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = 0;

om_tools.dom.td = (function om_tools$dom$td(){
var G__19527 = arguments.length;
switch (G__19527) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.td,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq19524){
var G__19525 = cljs.core.first(seq19524);
var seq19524__$1 = cljs.core.next(seq19524);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__19525,seq19524__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = 0;

om_tools.dom.tfoot = (function om_tools$dom$tfoot(){
var G__19531 = arguments.length;
switch (G__19531) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.tfoot,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq19528){
var G__19529 = cljs.core.first(seq19528);
var seq19528__$1 = cljs.core.next(seq19528);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__19529,seq19528__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = 0;

om_tools.dom.th = (function om_tools$dom$th(){
var G__19535 = arguments.length;
switch (G__19535) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.th,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq19532){
var G__19533 = cljs.core.first(seq19532);
var seq19532__$1 = cljs.core.next(seq19532);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__19533,seq19532__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = 0;

om_tools.dom.thead = (function om_tools$dom$thead(){
var G__19539 = arguments.length;
switch (G__19539) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.thead,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq19536){
var G__19537 = cljs.core.first(seq19536);
var seq19536__$1 = cljs.core.next(seq19536);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__19537,seq19536__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = 0;

om_tools.dom.time = (function om_tools$dom$time(){
var G__19543 = arguments.length;
switch (G__19543) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.time,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq19540){
var G__19541 = cljs.core.first(seq19540);
var seq19540__$1 = cljs.core.next(seq19540);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__19541,seq19540__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = 0;

om_tools.dom.title = (function om_tools$dom$title(){
var G__19547 = arguments.length;
switch (G__19547) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.title,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq19544){
var G__19545 = cljs.core.first(seq19544);
var seq19544__$1 = cljs.core.next(seq19544);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__19545,seq19544__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = 0;

om_tools.dom.tr = (function om_tools$dom$tr(){
var G__19551 = arguments.length;
switch (G__19551) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.tr,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq19548){
var G__19549 = cljs.core.first(seq19548);
var seq19548__$1 = cljs.core.next(seq19548);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__19549,seq19548__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = 0;

om_tools.dom.track = (function om_tools$dom$track(){
var G__19555 = arguments.length;
switch (G__19555) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.track,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq19552){
var G__19553 = cljs.core.first(seq19552);
var seq19552__$1 = cljs.core.next(seq19552);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__19553,seq19552__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = 0;

om_tools.dom.u = (function om_tools$dom$u(){
var G__19559 = arguments.length;
switch (G__19559) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.u,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq19556){
var G__19557 = cljs.core.first(seq19556);
var seq19556__$1 = cljs.core.next(seq19556);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__19557,seq19556__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = 0;

om_tools.dom.ul = (function om_tools$dom$ul(){
var G__19563 = arguments.length;
switch (G__19563) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.ul,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq19560){
var G__19561 = cljs.core.first(seq19560);
var seq19560__$1 = cljs.core.next(seq19560);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__19561,seq19560__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = 0;

om_tools.dom.var$ = (function om_tools$dom$var(){
var G__19567 = arguments.length;
switch (G__19567) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.var$,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq19564){
var G__19565 = cljs.core.first(seq19564);
var seq19564__$1 = cljs.core.next(seq19564);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__19565,seq19564__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = 0;

om_tools.dom.video = (function om_tools$dom$video(){
var G__19571 = arguments.length;
switch (G__19571) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.video,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq19568){
var G__19569 = cljs.core.first(seq19568);
var seq19568__$1 = cljs.core.next(seq19568);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__19569,seq19568__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = 0;

om_tools.dom.wbr = (function om_tools$dom$wbr(){
var G__19575 = arguments.length;
switch (G__19575) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.wbr,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq19572){
var G__19573 = cljs.core.first(seq19572);
var seq19572__$1 = cljs.core.next(seq19572);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__19573,seq19572__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = 0;

om_tools.dom.circle = (function om_tools$dom$circle(){
var G__19579 = arguments.length;
switch (G__19579) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.circle,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq19576){
var G__19577 = cljs.core.first(seq19576);
var seq19576__$1 = cljs.core.next(seq19576);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__19577,seq19576__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = 0;

om_tools.dom.ellipse = (function om_tools$dom$ellipse(){
var G__19583 = arguments.length;
switch (G__19583) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.ellipse,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq19580){
var G__19581 = cljs.core.first(seq19580);
var seq19580__$1 = cljs.core.next(seq19580);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__19581,seq19580__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = 0;

om_tools.dom.g = (function om_tools$dom$g(){
var G__19587 = arguments.length;
switch (G__19587) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.g,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq19584){
var G__19585 = cljs.core.first(seq19584);
var seq19584__$1 = cljs.core.next(seq19584);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__19585,seq19584__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = 0;

om_tools.dom.line = (function om_tools$dom$line(){
var G__19591 = arguments.length;
switch (G__19591) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.line,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq19588){
var G__19589 = cljs.core.first(seq19588);
var seq19588__$1 = cljs.core.next(seq19588);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__19589,seq19588__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = 0;

om_tools.dom.path = (function om_tools$dom$path(){
var G__19595 = arguments.length;
switch (G__19595) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.path,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq19592){
var G__19593 = cljs.core.first(seq19592);
var seq19592__$1 = cljs.core.next(seq19592);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__19593,seq19592__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = 0;

om_tools.dom.polyline = (function om_tools$dom$polyline(){
var G__19599 = arguments.length;
switch (G__19599) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.polyline,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq19596){
var G__19597 = cljs.core.first(seq19596);
var seq19596__$1 = cljs.core.next(seq19596);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__19597,seq19596__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = 0;

om_tools.dom.rect = (function om_tools$dom$rect(){
var G__19603 = arguments.length;
switch (G__19603) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.rect,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq19600){
var G__19601 = cljs.core.first(seq19600);
var seq19600__$1 = cljs.core.next(seq19600);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__19601,seq19600__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = 0;

om_tools.dom.svg = (function om_tools$dom$svg(){
var G__19607 = arguments.length;
switch (G__19607) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.svg,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq19604){
var G__19605 = cljs.core.first(seq19604);
var seq19604__$1 = cljs.core.next(seq19604);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__19605,seq19604__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = 0;

om_tools.dom.text = (function om_tools$dom$text(){
var G__19611 = arguments.length;
switch (G__19611) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.text,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq19608){
var G__19609 = cljs.core.first(seq19608);
var seq19608__$1 = cljs.core.next(seq19608);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__19609,seq19608__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = 0;

om_tools.dom.defs = (function om_tools$dom$defs(){
var G__19615 = arguments.length;
switch (G__19615) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.defs,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq19612){
var G__19613 = cljs.core.first(seq19612);
var seq19612__$1 = cljs.core.next(seq19612);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__19613,seq19612__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = 0;

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(){
var G__19619 = arguments.length;
switch (G__19619) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.linearGradient,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq19616){
var G__19617 = cljs.core.first(seq19616);
var seq19616__$1 = cljs.core.next(seq19616);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__19617,seq19616__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = 0;

om_tools.dom.polygon = (function om_tools$dom$polygon(){
var G__19623 = arguments.length;
switch (G__19623) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.polygon,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq19620){
var G__19621 = cljs.core.first(seq19620);
var seq19620__$1 = cljs.core.next(seq19620);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__19621,seq19620__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = 0;

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(){
var G__19627 = arguments.length;
switch (G__19627) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.radialGradient,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq19624){
var G__19625 = cljs.core.first(seq19624);
var seq19624__$1 = cljs.core.next(seq19624);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__19625,seq19624__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = 0;

om_tools.dom.stop = (function om_tools$dom$stop(){
var G__19631 = arguments.length;
switch (G__19631) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.stop,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq19628){
var G__19629 = cljs.core.first(seq19628);
var seq19628__$1 = cljs.core.next(seq19628);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__19629,seq19628__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = 0;

om_tools.dom.tspan = (function om_tools$dom$tspan(){
var G__19635 = arguments.length;
switch (G__19635) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(React.DOM.tspan,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq19632){
var G__19633 = cljs.core.first(seq19632);
var seq19632__$1 = cljs.core.next(seq19632);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__19633,seq19632__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = 0;

om_tools.dom.input = (function om_tools$dom$input(){
var G__19639 = arguments.length;
switch (G__19639) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(om.dom.input,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq19636){
var G__19637 = cljs.core.first(seq19636);
var seq19636__$1 = cljs.core.next(seq19636);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__19637,seq19636__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = 0;

om_tools.dom.textarea = (function om_tools$dom$textarea(){
var G__19643 = arguments.length;
switch (G__19643) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(om.dom.textarea,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq19640){
var G__19641 = cljs.core.first(seq19640);
var seq19640__$1 = cljs.core.next(seq19640);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__19641,seq19640__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = 0;

om_tools.dom.option = (function om_tools$dom$option(){
var G__19275 = arguments.length;
switch (G__19275) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,0),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5165__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__13154__auto__,children__13155__auto__){
return om_tools.dom.element(om.dom.option,opts__13154__auto__,children__13155__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq19272){
var G__19273 = cljs.core.first(seq19272);
var seq19272__$1 = cljs.core.next(seq19272);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__19273,seq19272__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = 0;
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4404__auto__ = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));
if(temp__4404__auto__){
var ks = temp__4404__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else {
return null;
}
});
