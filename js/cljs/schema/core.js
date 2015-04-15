// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.utils');

schema.core.Schema = (function (){var obj18331 = {};
return obj18331;
})();

/**
 * Produce a function that takes [data], and either returns a walked version of data
 * (by default, usually just data), or a utils/ErrorContainer containing value that looks
 * like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 * If this is a composite schema, should let-bind (subschema-walker sub-schema) for each
 * subschema outside the returned fn.  Within the returned fn, should break down data
 * into constituents, call the let-bound subschema walkers on each component, and then
 * reassemble the components into a walked version of the data (or an ErrorContainer
 * describing the validaiton failures).
 * 
 * Attempting to walk a value that already contains a utils/ErrorContainer produces undefined
 * behavior.
 * 
 * User code should never call `walker` directly.  Instead, it should call `start-walker`
 * below.
 */
schema.core.walker = (function schema$core$walker(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.schema$core$Schema$walker$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (schema.core.walker[(function (){var G__18335 = x__4753__auto__;
return goog.typeOf(G__18335);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (schema.core.walker["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 * also expanding class schematas at the leaves.  Example:
 * 
 * user> (s/explain {:a s/Keyword :b [s/Int]} )
 * {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.schema$core$Schema$explain$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (schema.core.explain[(function (){var G__18339 = x__4753__auto__;
return goog.typeOf(G__18339);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (schema.core.explain["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
})().call(null,this$);
}
});

/**
 * The function to call within 'walker' implementations to create walkers for subschemas.
 * Can be dynamically bound (using start-walker below) to create different walking behaviors.
 * 
 * For the curious, implemented using dynamic binding rather than making walker take a
 * subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
 * seem to require mind-bending things like fixed-point combinators that way, but are
 * simple this way.
 */
schema.core.subschema_walker = (function schema$core$subschema_walker(s){
throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
 * The entry point for creating walkers.  Binds the provided walker to subschema-walker,
 * then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
 * More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
 * that wraps walker with additional behavior.
 */
schema.core.start_walker = (function schema$core$start_walker(sub_walker,schema__$1){
var subschema_walker18341 = schema.core.subschema_walker;
schema.core.subschema_walker = sub_walker;

try{return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker18341;
}});
/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.utils.memoize_id(schema.core.walker),schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
var temp__4404__auto___18342 = schema.core.check(schema__$1,value);
if(cljs.core.truth_(temp__4404__auto___18342)){
var error_18343 = temp__4404__auto___18342;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_18343], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,schema__$1,cljs.core.constant$keyword$value,value,cljs.core.constant$keyword$error,error_18343], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4402__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4402__auto__)){
var more_schema = temp__4402__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__4117__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__4117__auto__ = (this$ === x.constructor);
if(or__4117__auto__){
return or__4117__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
var G__18344 = x;
return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__18344) : class_walker.call(null,G__18344));
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4402__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4402__auto__)){
var more_schema = temp__4402__auto__;
return schema.core.explain(more_schema);
} else {
return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18346,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18348 = (((k18346 instanceof cljs.core.Keyword))?k18346.fqn:null);
switch (G__18348) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18346,else__4715__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18345){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18349 = cljs.core.keyword_identical_QMARK_;
var expr__18350 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18352 = cljs.core.constant$keyword$_;
var G__18353 = expr__18350;
return (pred__18349.cljs$core$IFn$_invoke$arity$2 ? pred__18349.cljs$core$IFn$_invoke$arity$2(G__18352,G__18353) : pred__18349.call(null,G__18352,G__18353));
})())){
return (new schema.core.AnythingSchema(G__18345,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18345),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18345){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__18345,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.identity;
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__18347){
return (new schema.core.AnythingSchema(cljs.core.constant$keyword$_.cljs$core$IFn$_invoke$arity$1(G__18347),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18347,cljs.core.constant$keyword$_),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18356,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18358 = (((k18356 instanceof cljs.core.Keyword))?k18356.fqn:null);
switch (G__18358) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18356,else__4715__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.EqSchema{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$v,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18355){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18359 = cljs.core.keyword_identical_QMARK_;
var expr__18360 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18362 = cljs.core.constant$keyword$v;
var G__18363 = expr__18360;
return (pred__18359.cljs$core$IFn$_invoke$arity$2 ? pred__18359.cljs$core$IFn$_invoke$arity$2(G__18362,G__18363) : pred__18359.call(null,G__18362,G__18363));
})())){
return (new schema.core.EqSchema(G__18355,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18355),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18355){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__18355,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__18357){
return (new schema.core.EqSchema(cljs.core.constant$keyword$v.cljs$core$IFn$_invoke$arity$1(G__18357),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18357,cljs.core.constant$keyword$v),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
* @param {*} h
* @param {*} parent
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18366,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18368 = (((k18366 instanceof cljs.core.Keyword))?k18366.fqn:null);
switch (G__18368) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18366,else__4715__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.Isa{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$parent,null,cljs.core.constant$keyword$h,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18365){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18369 = cljs.core.keyword_identical_QMARK_;
var expr__18370 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18372 = cljs.core.constant$keyword$h;
var G__18373 = expr__18370;
return (pred__18369.cljs$core$IFn$_invoke$arity$2 ? pred__18369.cljs$core$IFn$_invoke$arity$2(G__18372,G__18373) : pred__18369.call(null,G__18372,G__18373));
})())){
return (new schema.core.Isa(G__18365,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18374 = cljs.core.constant$keyword$parent;
var G__18375 = expr__18370;
return (pred__18369.cljs$core$IFn$_invoke$arity$2 ? pred__18369.cljs$core$IFn$_invoke$arity$2(G__18374,G__18375) : pred__18369.call(null,G__18374,G__18375));
})())){
return (new schema.core.Isa(self__.h,G__18365,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18365),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18365){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__18365,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__4117__auto__ = (function (){var and__4105__auto__ = self__.h;
if(cljs.core.truth_(and__4105__auto__)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,child,self__.parent);
} else {
return and__4105__auto__;
}
})();
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),child),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__18367){
return (new schema.core.Isa(cljs.core.constant$keyword$h.cljs$core$IFn$_invoke$arity$1(G__18367),cljs.core.constant$keyword$parent.cljs$core$IFn$_invoke$arity$1(G__18367),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18367,cljs.core.constant$keyword$h,cljs.core.array_seq([cljs.core.constant$keyword$parent], 0)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(){
var G__18378 = arguments.length;
switch (G__18378) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18381,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18383 = (((k18381 instanceof cljs.core.Keyword))?k18381.fqn:null);
switch (G__18383) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18381,else__4715__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.EnumSchema{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$vs,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18380){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18384 = cljs.core.keyword_identical_QMARK_;
var expr__18385 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18387 = cljs.core.constant$keyword$vs;
var G__18388 = expr__18385;
return (pred__18384.cljs$core$IFn$_invoke$arity$2 ? pred__18384.cljs$core$IFn$_invoke$arity$2(G__18387,G__18388) : pred__18384.call(null,G__18387,G__18388));
})())){
return (new schema.core.EnumSchema(G__18380,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18380),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18380){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__18380,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.contains_QMARK_(self__.vs,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__18382){
return (new schema.core.EnumSchema(cljs.core.constant$keyword$vs.cljs$core$IFn$_invoke$arity$1(G__18382),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18382,cljs.core.constant$keyword$vs),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(){
var argseq__5153__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__5153__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq18390){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18390));
});

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18392,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18394 = (((k18392 instanceof cljs.core.Keyword))?k18392.fqn:null);
switch (G__18394) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18392,else__4715__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.Predicate{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pred_DASH_name,null,cljs.core.constant$keyword$p_QMARK_,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18391){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18395 = cljs.core.keyword_identical_QMARK_;
var expr__18396 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18398 = cljs.core.constant$keyword$p_QMARK_;
var G__18399 = expr__18396;
return (pred__18395.cljs$core$IFn$_invoke$arity$2 ? pred__18395.cljs$core$IFn$_invoke$arity$2(G__18398,G__18399) : pred__18395.call(null,G__18398,G__18399));
})())){
return (new schema.core.Predicate(G__18391,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18400 = cljs.core.constant$keyword$pred_DASH_name;
var G__18401 = expr__18396;
return (pred__18395.cljs$core$IFn$_invoke$arity$2 ? pred__18395.cljs$core$IFn$_invoke$arity$2(G__18400,G__18401) : pred__18395.call(null,G__18400,G__18401));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__18391,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18391),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18391){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__18391,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4402__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__18403 = x;
return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18403) : self__.p_QMARK_.call(null,G__18403));
})())){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e18402){if((e18402 instanceof Object)){
var e = e18402;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e18402;

}
}})();
if(cljs.core.truth_(temp__4402__auto__)){
var reason = temp__4402__auto__;
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4402__auto__,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4402__auto__,this$__$1))
,null)),reason));
} else {
return x;
}
});
;})(this$__$1))
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__18393){
return (new schema.core.Predicate(cljs.core.constant$keyword$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18393),cljs.core.constant$keyword$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__18393),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18393,cljs.core.constant$keyword$p_QMARK_,cljs.core.array_seq([cljs.core.constant$keyword$pred_DASH_name], 0)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(){
var G__18406 = arguments.length;
switch (G__18406) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.constant$keyword$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18409,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18411 = (((k18409 instanceof cljs.core.Keyword))?k18409.fqn:null);
switch (G__18411) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18409,else__4715__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.Protocol{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$p,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18408){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18412 = cljs.core.keyword_identical_QMARK_;
var expr__18413 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18415 = cljs.core.constant$keyword$p;
var G__18416 = expr__18413;
return (pred__18412.cljs$core$IFn$_invoke$arity$2 ? pred__18412.cljs$core$IFn$_invoke$arity$2(G__18415,G__18416) : pred__18412.call(null,G__18415,G__18416));
})())){
return (new schema.core.Protocol(G__18408,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18408),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18408){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__18408,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__18410){
return (new schema.core.Protocol(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__18410),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18410,cljs.core.constant$keyword$p),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not(cljs.core.re_find(this$__$1,x))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.explain(this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else {
return x;

}
}
});
;})(this$__$1))
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t18418 !== 'undefined'){
} else {

/**
* @constructor
*/
schema.core.t18418 = (function (meta18419){
this.meta18419 = meta18419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t18418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18420,meta18419__$1){
var self__ = this;
var _18420__$1 = this;
return (new schema.core.t18418(meta18419__$1));
});

schema.core.t18418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18420){
var self__ = this;
var _18420__$1 = this;
return self__.meta18419;
});

schema.core.t18418.prototype.schema$core$Schema$ = true;

schema.core.t18418.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if((x instanceof RegExp)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.t18418.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t18418.cljs$lang$type = true;

schema.core.t18418.cljs$lang$ctorStr = "schema.core/t18418";

schema.core.t18418.cljs$lang$ctorPrWriter = (function (this__4696__auto__,writer__4697__auto__,opt__4698__auto__){
return cljs.core._write(writer__4697__auto__,"schema.core/t18418");
});

schema.core.__GT_t18418 = (function schema$core$__GT_t18418(meta18419){
return (new schema.core.t18418(meta18419));
});

}

return (new schema.core.t18418(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18422,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18424 = (((k18422 instanceof cljs.core.Keyword))?k18422.fqn:null);
switch (G__18424) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18422,else__4715__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.Maybe{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$schema,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18421){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18425 = cljs.core.keyword_identical_QMARK_;
var expr__18426 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18428 = cljs.core.constant$keyword$schema;
var G__18429 = expr__18426;
return (pred__18425.cljs$core$IFn$_invoke$arity$2 ? pred__18425.cljs$core$IFn$_invoke$arity$2(G__18428,G__18429) : pred__18425.call(null,G__18428,G__18429));
})())){
return (new schema.core.Maybe(G__18421,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18421),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18421){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__18421,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
if((x == null)){
return null;
} else {
var G__18430 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__18430) : sub_walker.call(null,G__18430));
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__18423){
return (new schema.core.Maybe(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(G__18423),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18423,cljs.core.constant$keyword$schema),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18433,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18435 = (((k18433 instanceof cljs.core.Keyword))?k18433.fqn:null);
switch (G__18435) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18433,else__4715__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.NamedSchema{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$schema,null,cljs.core.constant$keyword$name,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18432){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18436 = cljs.core.keyword_identical_QMARK_;
var expr__18437 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18439 = cljs.core.constant$keyword$schema;
var G__18440 = expr__18437;
return (pred__18436.cljs$core$IFn$_invoke$arity$2 ? pred__18436.cljs$core$IFn$_invoke$arity$2(G__18439,G__18440) : pred__18436.call(null,G__18439,G__18440));
})())){
return (new schema.core.NamedSchema(G__18432,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18441 = cljs.core.constant$keyword$name;
var G__18442 = expr__18437;
return (pred__18436.cljs$core$IFn$_invoke$arity$2 ? pred__18436.cljs$core$IFn$_invoke$arity$2(G__18441,G__18442) : pred__18436.call(null,G__18441,G__18442));
})())){
return (new schema.core.NamedSchema(self__.schema,G__18432,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18432),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18432){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__18432,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name(self__.name,(function (){var G__18443 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__18443) : sub_walker.call(null,G__18443));
})());
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__18434){
return (new schema.core.NamedSchema(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(G__18434),cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(G__18434),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18434,cljs.core.constant$keyword$schema,cljs.core.array_seq([cljs.core.constant$keyword$name], 0)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18446,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18448 = (((k18446 instanceof cljs.core.Keyword))?k18446.fqn:null);
switch (G__18448) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18446,else__4715__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.Either{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$schemas,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18445){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18449 = cljs.core.keyword_identical_QMARK_;
var expr__18450 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18452 = cljs.core.constant$keyword$schemas;
var G__18453 = expr__18450;
return (pred__18449.cljs$core$IFn$_invoke$arity$2 ? pred__18449.cljs$core$IFn$_invoke$arity$2(G__18452,G__18453) : pred__18449.call(null,G__18452,G__18453));
})())){
return (new schema.core.Either(G__18445,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18445),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18445){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__18445,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
var sub_walkers__$1 = cljs.core.seq(sub_walkers);
while(true){
if(cljs.core.not(sub_walkers__$1)){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first(sub_walkers__$1).call(null,x);
if(cljs.core.not(schema.utils.error_QMARK_(res))){
return res;
} else {
var G__18455 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__18455;
continue;
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__18447){
return (new schema.core.Either(cljs.core.constant$keyword$schemas.cljs$core$IFn$_invoke$arity$1(G__18447),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18447,cljs.core.constant$keyword$schemas),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 */
schema.core.either = (function schema$core$either(){
var argseq__5153__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__5153__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq18456){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18456));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18458,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18460 = (((k18458 instanceof cljs.core.Keyword))?k18458.fqn:null);
switch (G__18460) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18458,else__4715__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.Both{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$schemas,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18457){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18461 = cljs.core.keyword_identical_QMARK_;
var expr__18462 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18464 = cljs.core.constant$keyword$schemas;
var G__18465 = expr__18462;
return (pred__18461.cljs$core$IFn$_invoke$arity$2 ? pred__18461.cljs$core$IFn$_invoke$arity$2(G__18464,G__18465) : pred__18461.call(null,G__18464,G__18465));
})())){
return (new schema.core.Both(G__18457,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18457),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18457){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__18457,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){
if(cljs.core.truth_(schema.utils.error_QMARK_(x__$1))){
return x__$1;
} else {
var G__18466 = x__$1;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__18466) : sub_walker.call(null,G__18466));
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__18459){
return (new schema.core.Both(cljs.core.constant$keyword$schemas.cljs$core$IFn$_invoke$arity$1(G__18459),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18459,cljs.core.constant$keyword$schemas),null));
});

/**
 * A value that must satisfy every schema in schemas.
 */
schema.core.both = (function schema$core$both(){
var argseq__5153__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__5153__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq18468){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18468));
});

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18470,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18472 = (((k18470 instanceof cljs.core.Keyword))?k18470.fqn:null);
switch (G__18472) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18470,else__4715__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$preds_DASH_and_DASH_schemas,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18469){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18473 = cljs.core.keyword_identical_QMARK_;
var expr__18474 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18476 = cljs.core.constant$keyword$preds_DASH_and_DASH_schemas;
var G__18477 = expr__18474;
return (pred__18473.cljs$core$IFn$_invoke$arity$2 ? pred__18473.cljs$core$IFn$_invoke$arity$2(G__18476,G__18477) : pred__18473.call(null,G__18476,G__18477));
})())){
return (new schema.core.ConditionalSchema(G__18469,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18469),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18469){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__18469,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__18478){
var vec__18479 = p__18478;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18479,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18479,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4402__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__18480){
var vec__18481 = p__18480;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18481,(0),null);
var G__18482 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__18482) : pred.call(null,G__18482));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4402__auto__)){
var vec__18483 = temp__4402__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18483,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18483,(1),null);
var G__18484 = x;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__18484) : match.call(null,G__18484));
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4402__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4402__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__18485){
var vec__18486 = p__18485;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18486,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18486,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__18471){
return (new schema.core.ConditionalSchema(cljs.core.constant$keyword$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__18471),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18471,cljs.core.constant$keyword$preds_DASH_and_DASH_schemas),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 */
schema.core.conditional = (function schema$core$conditional(){
var argseq__5153__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__5153__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__4871__auto__ = (function schema$core$iter__18489(s__18490){
return (new cljs.core.LazySeq(null,(function (){
var s__18490__$1 = s__18490;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18490__$1);
if(temp__4404__auto__){
var s__18490__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18490__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18490__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18492 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18491 = (0);
while(true){
if((i__18491 < size__4870__auto__)){
var vec__18497 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18491);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18497,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18497,(1),null);
cljs.core.chunk_append(b__18492,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$else))?cljs.core.constantly(true):pred),schema__$1], null));

var G__18499 = (i__18491 + (1));
i__18491 = G__18499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18492),schema$core$iter__18489(cljs.core.chunk_rest(s__18490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18492),null);
}
} else {
var vec__18498 = cljs.core.first(s__18490__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$else))?cljs.core.constantly(true):pred),schema__$1], null),schema$core$iter__18489(cljs.core.rest(s__18490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4871__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq18488){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18488));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
/**
 * A sentinel value representing missing portions of the input data.
 */
schema.core._PLUS_missing_PLUS_ = cljs.core.constant$keyword$schema$core_SLASH_missing;

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18501,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18503 = (((k18501 instanceof cljs.core.Keyword))?k18501.fqn:null);
switch (G__18503) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18501,else__4715__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.RequiredKey{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$k,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18500){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18504 = cljs.core.keyword_identical_QMARK_;
var expr__18505 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18507 = cljs.core.constant$keyword$k;
var G__18508 = expr__18505;
return (pred__18504.cljs$core$IFn$_invoke$arity$2 ? pred__18504.cljs$core$IFn$_invoke$arity$2(G__18507,G__18508) : pred__18504.call(null,G__18507,G__18508));
})())){
return (new schema.core.RequiredKey(G__18500,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18500),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18500){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__18500,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__18502){
return (new schema.core.RequiredKey(cljs.core.constant$keyword$k.cljs$core$IFn$_invoke$arity$1(G__18502),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18502,cljs.core.constant$keyword$k),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18511,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18513 = (((k18511 instanceof cljs.core.Keyword))?k18511.fqn:null);
switch (G__18513) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18511,else__4715__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.OptionalKey{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$k,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18510){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18514 = cljs.core.keyword_identical_QMARK_;
var expr__18515 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18517 = cljs.core.constant$keyword$k;
var G__18518 = expr__18515;
return (pred__18514.cljs$core$IFn$_invoke$arity$2 ? pred__18514.cljs$core$IFn$_invoke$arity$2(G__18517,G__18518) : pred__18514.call(null,G__18517,G__18518));
})())){
return (new schema.core.OptionalKey(G__18510,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18510),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18510){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__18510,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__18512){
return (new schema.core.OptionalKey(cljs.core.constant$keyword$k.cljs$core$IFn$_invoke$arity$1(G__18512),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18512,cljs.core.constant$keyword$k),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__4117__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain(kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap,__hash){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18521,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18523 = (((k18521 instanceof cljs.core.Keyword))?k18521.fqn:null);
switch (G__18523) {
case "kspec":
return self__.kspec;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18521,else__4715__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.MapEntry{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$kspec,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$kspec,null,cljs.core.constant$keyword$val_DASH_schema,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18520){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18524 = cljs.core.keyword_identical_QMARK_;
var expr__18525 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18527 = cljs.core.constant$keyword$kspec;
var G__18528 = expr__18525;
return (pred__18524.cljs$core$IFn$_invoke$arity$2 ? pred__18524.cljs$core$IFn$_invoke$arity$2(G__18527,G__18528) : pred__18524.call(null,G__18527,G__18528));
})())){
return (new schema.core.MapEntry(G__18520,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18529 = cljs.core.constant$keyword$val_DASH_schema;
var G__18530 = expr__18525;
return (pred__18524.cljs$core$IFn$_invoke$arity$2 ? pred__18524.cljs$core$IFn$_invoke$arity$2(G__18529,G__18530) : pred__18524.call(null,G__18529,G__18530));
})())){
return (new schema.core.MapEntry(self__.kspec,G__18520,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18520),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$kspec,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18520){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__18520,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));
if(cljs.core.truth_(schema.core.specific_key_QMARK_(self__.kspec))){
var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);
var k = schema.core.explicit_schema_key(self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(cljs.core.truth_(optional_QMARK_)){
return null;
} else {
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__18531 = x;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18531,(1),null);

var vres = (function (){var G__18532 = xv;
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__18532) : val_walker.call(null,G__18532));
})();
var temp__4402__auto__ = schema.utils.error_val(vres);
if(cljs.core.truth_(temp__4402__auto__)){
var ve = temp__4402__auto__;
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else {
var key_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.kspec) : schema.core.subschema_walker.call(null,self__.kspec));
return ((function (key_walker,val_walker,this$__$1){
return (function (x){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = (function (){var G__18533 = cljs.core.key(x);
return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__18533) : key_walker.call(null,G__18533));
})();
var out_ke = schema.utils.error_val(out_k);
var out_v = (function (){var G__18534 = cljs.core.val(x);
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__18534) : val_walker.call(null,G__18534));
})();
var out_ve = schema.utils.error_val(out_v);
if(cljs.core.truth_((function (){var or__4117__auto__ = out_ke;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4117__auto__ = out_ke;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.key(x);
}
})(),(function (){var or__4117__auto__ = out_ve;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain_kspec(self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__18522){
return (new schema.core.MapEntry(cljs.core.constant$keyword$kspec.cljs$core$IFn$_invoke$arity$1(G__18522),cljs.core.constant$keyword$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__18522),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18522,cljs.core.constant$keyword$kspec,cljs.core.array_seq([cljs.core.constant$keyword$val_DASH_schema], 0)),null));
});

schema.core.map_entry = (function schema$core$map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.preserve_map_type = (function schema$core$preserve_map_type(original,walker_result){
if(cljs.core.truth_((function (){var and__4105__auto__ = schema.utils.record_QMARK_(original);
if(cljs.core.truth_(and__4105__auto__)){
return cljs.core.not(schema.utils.error_QMARK_(walker_result));
} else {
return and__4105__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function schema$core$map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);
var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4871__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function schema$core$map_walker_$_iter__18561(s__18562){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__18562__$1 = s__18562;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18562__$1);
if(temp__4404__auto__){
var s__18562__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18562__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18562__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18564 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18563 = (0);
while(true){
if((i__18563 < size__4870__auto__)){
var vec__18569 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18563);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18569,(1),null);
cljs.core.chunk_append(b__18564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));

var G__18585 = (i__18563 + (1));
i__18563 = G__18585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18564),schema$core$map_walker_$_iter__18561(cljs.core.chunk_rest(s__18562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18564),null);
}
} else {
var vec__18570 = cljs.core.first(s__18562__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18570,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),schema$core$map_walker_$_iter__18561(cljs.core.rest(s__18562__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;
return iter__4871__auto__(explicit_schema);
})());
var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__18536_SHARP_){
return (cljs.core.count(p1__18536_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_(x))){
return schema.utils.error(schema.utils.__GT_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else {
return schema.core.preserve_map_type(x,(function (){var ok_key = cljs.core.PersistentHashSet.EMPTY;
var explicit_walkers__$1 = cljs.core.seq(explicit_walkers);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(explicit_walkers__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(extra_walker)?((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){
var G__18571 = out__$1;
var G__18572 = (function (){var G__18573 = e;
return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__18573) : extra_walker.call(null,G__18573));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__18571,G__18572) : err_conj.call(null,G__18571,G__18572));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__18574){
var vec__18575 = p__18574;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18575,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18575,(1),null);
var G__18576 = out__$1;
var G__18577 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__18576,G__18577) : err_conj.call(null,G__18576,G__18577));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__18578){
var vec__18579 = p__18578;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18579,(1),null);
var G__18580 = k;
return (ok_key.cljs$core$IFn$_invoke$arity$1 ? ok_key.cljs$core$IFn$_invoke$arity$1(G__18580) : ok_key.call(null,G__18580));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__18581 = cljs.core.first(explicit_walkers__$1);
var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18581,(0),null);
var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18581,(1),null);
var G__18586 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ok_key,wk);
var G__18587 = cljs.core.next(explicit_walkers__$1);
var G__18588 = (function (){var G__18582 = out;
var G__18583 = (function (){var G__18584 = (function (){var or__4117__auto__ = cljs.core.find(x,wk);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})();
return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__18584) : wv.call(null,G__18584));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__18582,G__18583) : err_conj.call(null,G__18582,G__18583));
})();
ok_key = G__18586;
explicit_walkers__$1 = G__18587;
out = G__18588;
continue;
}
break;
}
})());
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4871__auto__ = (function schema$core$map_explain_$_iter__18599(s__18600){
return (new cljs.core.LazySeq(null,(function (){
var s__18600__$1 = s__18600;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18600__$1);
if(temp__4404__auto__){
var s__18600__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18600__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18600__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18602 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18601 = (0);
while(true){
if((i__18601 < size__4870__auto__)){
var vec__18607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18601);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18607,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18607,(1),null);
cljs.core.chunk_append(b__18602,cljs.core.vec(cljs.core.next(schema.core.explain(schema.core.map_entry(k,v)))));

var G__18609 = (i__18601 + (1));
i__18601 = G__18609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18602),schema$core$map_explain_$_iter__18599(cljs.core.chunk_rest(s__18600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18602),null);
}
} else {
var vec__18608 = cljs.core.first(s__18600__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18608,(1),null);
return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.explain(schema.core.map_entry(k,v)))),schema$core$map_explain_$_iter__18599(cljs.core.rest(s__18600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4871__auto__(this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.first(this$__$1)) : schema.core.subschema_walker.call(null,cljs.core.first(this$__$1)));
return ((function (sub_walker,this$__$1){
return (function (x){
var or__4117__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
var vec__18610 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18610,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18610,(1),null);
if(cljs.core.seq(bad)){
return schema.utils.error(cljs.core.set(bad));
} else {
return cljs.core.set(good);
}
}
});
;})(sub_walker,this$__$1))
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18612,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18614 = (((k18612 instanceof cljs.core.Keyword))?k18612.fqn:null);
switch (G__18614) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18612,else__4715__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.One{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$schema,null,cljs.core.constant$keyword$name,null,cljs.core.constant$keyword$optional_QMARK_,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18611){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18615 = cljs.core.keyword_identical_QMARK_;
var expr__18616 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18618 = cljs.core.constant$keyword$schema;
var G__18619 = expr__18616;
return (pred__18615.cljs$core$IFn$_invoke$arity$2 ? pred__18615.cljs$core$IFn$_invoke$arity$2(G__18618,G__18619) : pred__18615.call(null,G__18618,G__18619));
})())){
return (new schema.core.One(G__18611,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18620 = cljs.core.constant$keyword$optional_QMARK_;
var G__18621 = expr__18616;
return (pred__18615.cljs$core$IFn$_invoke$arity$2 ? pred__18615.cljs$core$IFn$_invoke$arity$2(G__18620,G__18621) : pred__18615.call(null,G__18620,G__18621));
})())){
return (new schema.core.One(self__.schema,G__18611,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18622 = cljs.core.constant$keyword$name;
var G__18623 = expr__18616;
return (pred__18615.cljs$core$IFn$_invoke$arity$2 ? pred__18615.cljs$core$IFn$_invoke$arity$2(G__18622,G__18623) : pred__18615.call(null,G__18622,G__18623));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__18611,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18611),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18611){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__18611,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__18613){
return (new schema.core.One(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(G__18613),cljs.core.constant$keyword$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18613),cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(G__18613),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18613,cljs.core.constant$keyword$schema,cljs.core.array_seq([cljs.core.constant$keyword$optional_QMARK_,cljs.core.constant$keyword$name], 0)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__18630 = cljs.core.split_with((function (p1__18625_SHARP_){
return ((p1__18625_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.constant$keyword$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__18625_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18630,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18630,(1),null);
var vec__18631 = cljs.core.split_with(((function (vec__18630,required,more){
return (function (p1__18626_SHARP_){
var and__4105__auto__ = (p1__18626_SHARP_ instanceof schema.core.One);
if(and__4105__auto__){
return cljs.core.constant$keyword$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__18626_SHARP_);
} else {
return and__4105__auto__;
}
});})(vec__18630,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18631,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18631,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__18630,required,more,vec__18631,optional,more__$1){
return (function (p1__18627_SHARP_){
return !((p1__18627_SHARP_ instanceof schema.core.One));
});})(vec__18630,required,more,vec__18631,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__18632 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18632,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18632,(1),null);
var single_walkers = cljs.core.vec((function (){var iter__4871__auto__ = ((function (vec__18632,singles,multi,this$__$1){
return (function schema$core$iter__18633(s__18634){
return (new cljs.core.LazySeq(null,((function (vec__18632,singles,multi,this$__$1){
return (function (){
var s__18634__$1 = s__18634;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18634__$1);
if(temp__4404__auto__){
var s__18634__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18634__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18634__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18636 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18635 = (0);
while(true){
if((i__18635 < size__4870__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18635);
cljs.core.chunk_append(b__18636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));

var G__18664 = (i__18635 + (1));
i__18635 = G__18664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18636),schema$core$iter__18633(cljs.core.chunk_rest(s__18634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18636),null);
}
} else {
var s = cljs.core.first(s__18634__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),schema$core$iter__18633(cljs.core.rest(s__18634__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18632,singles,multi,this$__$1))
,null,null));
});})(vec__18632,singles,multi,this$__$1))
;
return iter__4871__auto__(singles);
})());
var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);
var err_conj = schema.utils.result_builder(((function (vec__18632,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__18632,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__4117__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4402__auto__ = cljs.core.first(single_walkers__$1);
if(cljs.core.truth_(temp__4402__auto__)){
var vec__18639 = temp__4402__auto__;
var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18639,(0),null);
var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18639,(1),null);
if(cljs.core.empty_QMARK_(x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
var G__18640 = out;
var G__18641 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__18640,vec__18639,first_single,single_walker,temp__4402__auto__,or__4117__auto__,vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__4871__auto__ = ((function (single_walkers__$1,x__$1,out,G__18640,vec__18639,first_single,single_walker,temp__4402__auto__,or__4117__auto__,vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function schema$core$iter__18642(s__18643){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__18640,vec__18639,first_single,single_walker,temp__4402__auto__,or__4117__auto__,vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__18643__$1 = s__18643;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18643__$1);
if(temp__4404__auto__){
var s__18643__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18643__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18643__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18645 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18644 = (0);
while(true){
if((i__18644 < size__4870__auto__)){
var vec__18650 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18644);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18650,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
cljs.core.chunk_append(b__18645,single.name);

var G__18665 = (i__18644 + (1));
i__18644 = G__18665;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18645),schema$core$iter__18642(cljs.core.chunk_rest(s__18643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18645),null);
}
} else {
var vec__18651 = cljs.core.first(s__18643__$2);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18651,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
return cljs.core.cons(single.name,schema$core$iter__18642(cljs.core.rest(s__18643__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__18640,vec__18639,first_single,single_walker,temp__4402__auto__,or__4117__auto__,vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__18640,vec__18639,first_single,single_walker,temp__4402__auto__,or__4117__auto__,vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__4871__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__18640,vec__18639,first_single,single_walker,temp__4402__auto__,or__4117__auto__,vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__18640,G__18641) : err_conj.call(null,G__18640,G__18641));
}
} else {
var G__18666 = cljs.core.next(single_walkers__$1);
var G__18667 = cljs.core.rest(x__$1);
var G__18668 = (function (){var G__18652 = out;
var G__18653 = schema.utils.wrap_error_name(first_single.name,(function (){var G__18654 = cljs.core.first(x__$1);
return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__18654) : single_walker.call(null,G__18654));
})());
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__18652,G__18653) : err_conj.call(null,G__18652,G__18653));
})();
single_walkers__$1 = G__18666;
x__$1 = G__18667;
out = G__18668;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else {
if(cljs.core.seq(x__$1)){
var G__18655 = out;
var G__18656 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__18655,temp__4402__auto__,or__4117__auto__,vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__18655,temp__4402__auto__,or__4117__auto__,vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__18655,G__18656) : err_conj.call(null,G__18655,G__18656));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__18632,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__18657 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18657,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18657,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4871__auto__ = ((function (vec__18657,singles,multi,this$__$1){
return (function schema$core$iter__18658(s__18659){
return (new cljs.core.LazySeq(null,((function (vec__18657,singles,multi,this$__$1){
return (function (){
var s__18659__$1 = s__18659;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18659__$1);
if(temp__4404__auto__){
var s__18659__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18659__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18659__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18661 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18660 = (0);
while(true){
if((i__18660 < size__4870__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18660);
cljs.core.chunk_append(b__18661,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__18669 = (i__18660 + (1));
i__18660 = G__18669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18661),schema$core$iter__18658(cljs.core.chunk_rest(s__18659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18661),null);
}
} else {
var s = cljs.core.first(s__18659__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),schema$core$iter__18658(cljs.core.rest(s__18659__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18657,singles,multi,this$__$1))
,null,null));
});})(vec__18657,singles,multi,this$__$1))
;
return iter__4871__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18671,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18673 = (((k18671 instanceof cljs.core.Keyword))?k18671.fqn:null);
switch (G__18673) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18671,else__4715__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.Record{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$schema,null,cljs.core.constant$keyword$klass,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18670){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18674 = cljs.core.keyword_identical_QMARK_;
var expr__18675 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18677 = cljs.core.constant$keyword$klass;
var G__18678 = expr__18675;
return (pred__18674.cljs$core$IFn$_invoke$arity$2 ? pred__18674.cljs$core$IFn$_invoke$arity$2(G__18677,G__18678) : pred__18674.call(null,G__18677,G__18678));
})())){
return (new schema.core.Record(G__18670,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18679 = cljs.core.constant$keyword$schema;
var G__18680 = expr__18675;
return (pred__18674.cljs$core$IFn$_invoke$arity$2 ? pred__18674.cljs$core$IFn$_invoke$arity$2(G__18679,G__18680) : pred__18674.call(null,G__18679,G__18680));
})())){
return (new schema.core.Record(self__.klass,G__18670,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18670),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18670){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__18670,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
var pred_checker = (function (){var temp__4404__auto__ = cljs.core.constant$keyword$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4404__auto__)){
var evf = temp__4404__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__4117__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
var res = (function (){var G__18681 = r;
return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__18681) : map_checker.call(null,G__18681));
})();
if(cljs.core.truth_(schema.utils.error_QMARK_(res))){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__18682 = r;
return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__18682) : pred_checker.call(null,G__18682));
})():null);
if(cljs.core.truth_(schema.utils.error_QMARK_(pred_res))){
return pred_res;
} else {
return res;
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__18672){
return (new schema.core.Record(cljs.core.constant$keyword$klass.cljs$core$IFn$_invoke$arity$1(G__18672),cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(G__18672),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18672,cljs.core.constant$keyword$klass,cljs.core.array_seq([cljs.core.constant$keyword$schema], 0)),null));
});

/**
 * A Record instance of type klass, whose elements match map schema 'schema'.
 */
schema.core.record = (function schema$core$record(klass,schema__$1){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__18687 = cljs.core.split_with((function (p1__18684_SHARP_){
return (p1__18684_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18687,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18687,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__18687,required,more){
return (function (p1__18685_SHARP_){
return schema.core.explain(p1__18685_SHARP_.schema);
});})(vec__18687,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4712__auto__,k__4713__auto__){
var self__ = this;
var this__4712__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4712__auto____$1,k__4713__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4714__auto__,k18689,else__4715__auto__){
var self__ = this;
var this__4714__auto____$1 = this;
var G__18691 = (((k18689 instanceof cljs.core.Keyword))?k18689.fqn:null);
switch (G__18691) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18689,else__4715__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4726__auto__,writer__4727__auto__,opts__4728__auto__){
var self__ = this;
var this__4726__auto____$1 = this;
var pr_pair__4729__auto__ = ((function (this__4726__auto____$1){
return (function (keyval__4730__auto__){
return cljs.core.pr_sequential_writer(writer__4727__auto__,cljs.core.pr_writer,""," ","",opts__4728__auto__,keyval__4730__auto__);
});})(this__4726__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4727__auto__,pr_pair__4729__auto__,"#schema.core.FnSchema{",", ","}",opts__4728__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4710__auto__){
var self__ = this;
var this__4710__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4706__auto__){
var self__ = this;
var this__4706__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4716__auto__){
var self__ = this;
var this__4716__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4707__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4708__auto__,other__4709__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4721__auto__,k__4722__auto__){
var self__ = this;
var this__4721__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$output_DASH_schema,null,cljs.core.constant$keyword$input_DASH_schemas,null], null), null),k__4722__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4721__auto____$1),self__.__meta),k__4722__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4722__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4719__auto__,k__4720__auto__,G__18688){
var self__ = this;
var this__4719__auto____$1 = this;
var pred__18692 = cljs.core.keyword_identical_QMARK_;
var expr__18693 = k__4720__auto__;
if(cljs.core.truth_((function (){var G__18695 = cljs.core.constant$keyword$output_DASH_schema;
var G__18696 = expr__18693;
return (pred__18692.cljs$core$IFn$_invoke$arity$2 ? pred__18692.cljs$core$IFn$_invoke$arity$2(G__18695,G__18696) : pred__18692.call(null,G__18695,G__18696));
})())){
return (new schema.core.FnSchema(G__18688,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18697 = cljs.core.constant$keyword$input_DASH_schemas;
var G__18698 = expr__18693;
return (pred__18692.cljs$core$IFn$_invoke$arity$2 ? pred__18692.cljs$core$IFn$_invoke$arity$2(G__18697,G__18698) : pred__18692.call(null,G__18697,G__18698));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__18688,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4720__auto__,G__18688),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4724__auto__){
var self__ = this;
var this__4724__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4711__auto__,G__18688){
var self__ = this;
var this__4711__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__18688,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4717__auto__,entry__4718__auto__){
var self__ = this;
var this__4717__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4718__auto__)){
return cljs.core._assoc(this__4717__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4718__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4717__auto____$1,entry__4718__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.ifn_QMARK_(x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4746__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4746__auto__,writer__4747__auto__){
return cljs.core._write(writer__4747__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__18690){
return (new schema.core.FnSchema(cljs.core.constant$keyword$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__18690),cljs.core.constant$keyword$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__18690),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18690,cljs.core.constant$keyword$output_DASH_schema,cljs.core.array_seq([cljs.core.constant$keyword$input_DASH_schemas], 0)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.constant$keyword$name,name);
});
schema.core.schema_name = (function schema$core$schema_name(schema__$1){

return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__4117__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
var m__13848__auto__ = cljs.core.meta(f);
var k__13849__auto__ = cljs.core.constant$keyword$schema;
var temp__4402__auto__ = cljs.core.find(m__13848__auto__,k__13849__auto__);
if(cljs.core.truth_(temp__4402__auto__)){
var pair__13850__auto__ = temp__4402__auto__;
return cljs.core.val(pair__13850__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__13849__auto__,m__13848__auto__], 0))));
}
}
});
