// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(){
var argseq__5153__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5153__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4117__auto__ = m;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4871__auto__ = (function schema$utils$iter__18283(s__18284){
return (new cljs.core.LazySeq(null,(function (){
var s__18284__$1 = s__18284;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18284__$1);
if(temp__4404__auto__){
var s__18284__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18284__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18284__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18286 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18285 = (0);
while(true){
if((i__18285 < size__4870__auto__)){
var vec__18291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18285);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18291,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18291,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__18286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18293 = (i__18285 + (1));
i__18285 = G__18293;
continue;
} else {
var G__18294 = (i__18285 + (1));
i__18285 = G__18294;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18286),schema$utils$iter__18283(cljs.core.chunk_rest(s__18284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18286),null);
}
} else {
var vec__18292 = cljs.core.first(s__18284__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18292,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__18283(cljs.core.rest(s__18284__$2)));
} else {
var G__18295 = cljs.core.rest(s__18284__$2);
s__18284__$1 = G__18295;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4871__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq18281){
var G__18282 = cljs.core.first(seq18281);
var seq18281__$1 = cljs.core.next(seq18281);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__18282,seq18281__$1);
});
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(){
var argseq__5153__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5153__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq18296){
var G__18297 = cljs.core.first(seq18296);
var seq18296__$1 = cljs.core.next(seq18296);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__18297,seq18296__$1);
});
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * Identity version of memoize, because many schemas are records, and records
 * don't cache their hash codes (at least in Clojure 1.5.1).
 * Not thread safe, and doesn't cache falsey values.
 */
schema.utils.memoize_id = (function schema$utils$memoize_id(f){
return cljs.core.memoize(f);
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
var G__18299 = x;
if(G__18299){
var bit__4791__auto__ = (G__18299.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__4791__auto__) || (G__18299.cljs$core$IRecord$)){
return true;
} else {
if((!G__18299.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__18299);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__18299);
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((function (){var G__18300 = this$__$1;
return (schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(G__18300) : schema.utils.validation_error_explain.call(null,G__18300));
})(),writer,opts);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__4696__auto__,writer__4697__auto__,opt__4698__auto__){
return cljs.core._write(writer__4697__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__18302 = err.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18302) : cljs.core.deref.call(null,G__18302));
})()),(function (){var or__4117__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((function (){var G__18303 = this$__$1;
return (schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(G__18303) : schema.utils.named_error_explain.call(null,G__18303));
})(),writer,opts);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__4696__auto__,writer__4697__auto__,opt__4698__auto__){
return cljs.core._write(writer__4697__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18305,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18307 = (((k18305 instanceof cljs.core.Keyword))?k18305.fqn:null);
switch (G__18307) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18305,else__4715__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
var self__ = this;
var this__4707__auto____$1 = this;
var h__4533__auto__ = self__.__hash;
if(!((h__4533__auto__ == null))){
return h__4533__auto__;
} else {
var h__4533__auto____$1 = cljs.core.hash_imap(this__4707__auto____$1);
self__.__hash = h__4533__auto____$1;

return h__4533__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
var self__ = this;
var this__4708__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4105__auto__ = other__4709__auto__;
if(cljs.core.truth_(and__4105__auto__)){
var and__4105__auto____$1 = (this__4708__auto____$1.constructor === other__4709__auto__.constructor);
if(and__4105__auto____$1){
return cljs.core.equiv_map(this__4708__auto____$1,other__4709__auto__);
} else {
return and__4105__auto____$1;
}
} else {
return and__4105__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$error,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18304){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18308 = cljs.core.keyword_identical_QMARK_;
var expr__18309 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18311 = cljs.core.constant$keyword$error;
var G__18312 = expr__18309;
return (pred__18308.cljs$core$IFn$_invoke$arity$2 ? pred__18308.cljs$core$IFn$_invoke$arity$2(G__18311,G__18312) : pred__18308.call(null,G__18311,G__18312));
})())){
return (new schema.utils.ErrorContainer(G__18304,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18304),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18304){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__18304,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__18306){
return (new schema.utils.ErrorContainer(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(G__18306),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18306,cljs.core.constant$keyword$error),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_(x))){
return x.error;
} else {
return null;
}
});
/**
 * If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
 */
schema.utils.wrap_error_name = (function schema$utils$wrap_error_name(name,maybe_error){
var temp__4402__auto__ = schema.utils.error_val(maybe_error);
if(cljs.core.truth_(temp__4402__auto__)){
var e = temp__4402__auto__;
return schema.utils.error(schema.utils.__GT_NamedError(name,e));
} else {
return maybe_error;
}
});
/**
 * Build up a result by conjing values, producing an error if at least one
 * sub-value returns an error.
 */
schema.utils.result_builder = (function schema$utils$result_builder(lift_to_error){
return (function schema$utils$result_builder_$_conjer(m,e){
var temp__4402__auto__ = schema.utils.error_val(e);
if(cljs.core.truth_(temp__4402__auto__)){
var err = temp__4402__auto__;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4117__auto__ = schema.utils.error_val(m);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
var G__18317 = m;
return (lift_to_error.cljs$core$IFn$_invoke$arity$1 ? lift_to_error.cljs$core$IFn$_invoke$arity$1(G__18317) : lift_to_error.call(null,G__18317));
}
})(),err));
} else {
var temp__4402__auto____$1 = schema.utils.error_val(m);
if(cljs.core.truth_(temp__4402__auto____$1)){
var merr = temp__4402__auto____$1;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(merr,null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

schema.utils.PSimpleCell = (function (){var obj18319 = {};
return obj18319;
})();

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (schema.utils.get_cell[(function (){var G__18323 = x__4753__auto__;
return goog.typeOf(G__18323);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (schema.utils.get_cell["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (schema.utils.set_cell[(function (){var G__18327 = x__4753__auto__;
return goog.typeOf(G__18327);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (schema.utils.set_cell["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});


/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__4696__auto__,writer__4697__auto__,opt__4698__auto__){
return cljs.core._write(writer__4697__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.set_cell,schema.utils.use_fn_validation);
