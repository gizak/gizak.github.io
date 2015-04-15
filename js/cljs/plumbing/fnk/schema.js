// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$proto_DASH_sym,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$proto_DASH_pred,(function (p1__14643__14644__auto__){
var G__18013 = p1__14643__14644__auto__;
if(G__18013){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__18013.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__18013.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__18013);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__18013);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18014_SHARP_){
return (cljs.core.val(p1__18014_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__18016 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18016,(1),null);
var p = vec__18016;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$error,cljs.core.constant$keyword$missing_DASH_key,cljs.core.constant$keyword$key,k,cljs.core.constant$keyword$map,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var output_schema18017_18021 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema18018_18022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (output_schema18017_18021,input_schema18018_18022){
return (function plumbing$fnk$schema$unwrap_schema_form_key(k){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
});})(output_schema18017_18021,input_schema18018_18022))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema18017_18021,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18018_18022], null)));
var output_schema18023_18027 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema18024_18028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (output_schema18023_18027,input_schema18024_18028){
return (function plumbing$fnk$schema$explicit_schema_key_map(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
});})(output_schema18023_18027,input_schema18024_18028))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema18023_18027,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18024_18028], null)));
var output_schema18029_18033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema18030_18034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (output_schema18029_18033,input_schema18030_18034){
return (function plumbing$fnk$schema$split_schema_keys(s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
});})(output_schema18029_18033,input_schema18030_18034))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema18029_18033,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18030_18034], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var argseq__5153__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5153__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__18039){
var vec__18040 = p__18039;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18040,(1),null);
var pk = (function (){var G__18041 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__18041) : key_project.call(null,G__18041));
})();
var temp__4402__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4402__auto__)){
var vec__18042 = temp__4402__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18042,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18042,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18043 = ok;
var G__18044 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__18043,G__18044) : key_combine.call(null,G__18043,G__18044));
})(),(function (){var G__18045 = ov;
var G__18046 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__18045,G__18046) : val_combine.call(null,G__18045,G__18046));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq18035){
var G__18036 = cljs.core.first(seq18035);
var seq18035__$1 = cljs.core.next(seq18035);
var G__18037 = cljs.core.first(seq18035__$1);
var seq18035__$2 = cljs.core.next(seq18035__$1);
var G__18038 = cljs.core.first(seq18035__$2);
var seq18035__$3 = cljs.core.next(seq18035__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__18036,G__18037,G__18038,seq18035__$3);
});
var output_schema18048_18054 = plumbing.fnk.schema.InputSchema;
var input_schema18049_18055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (output_schema18048_18054,input_schema18049_18055){
return (function plumbing$fnk$schema$union_input_schemata(i1,i2){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (output_schema18048_18054,input_schema18049_18055){
return (function (p1__18047_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__18047_SHARP_))){
return schema.core.explicit_schema_key(p1__18047_SHARP_);
} else {
return cljs.core.constant$keyword$extra;
}
});})(output_schema18048_18054,input_schema18049_18055))
,((function (output_schema18048_18054,input_schema18049_18055){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_(k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(k1))){

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(output_schema18048_18054,input_schema18049_18055))
,((function (output_schema18048_18054,input_schema18049_18055){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__4105__auto__ = plumbing.fnk.schema.map_schema_QMARK_(s1);
if(cljs.core.truth_(and__4105__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_(s2);
} else {
return and__4105__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(output_schema18048_18054,input_schema18049_18055))
,cljs.core.array_seq([i1,i2], 0));
});})(output_schema18048_18054,input_schema18049_18055))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema18048_18054,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18049_18055], null)));
var output_schema18056_18060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema18057_18061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (output_schema18056_18060,input_schema18057_18061){
return (function plumbing$fnk$schema$required_toplevel_keys(input_schema){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (output_schema18056_18060,input_schema18057_18061){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(output_schema18056_18060,input_schema18057_18061))
,cljs.core.keys(input_schema));
});})(output_schema18056_18060,input_schema18057_18061))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema18056_18060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18057_18061], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4871__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__18076(s__18077){
return (new cljs.core.LazySeq(null,(function (){
var s__18077__$1 = s__18077;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18077__$1);
if(temp__4404__auto__){
var s__18077__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18077__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18077__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18079 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18078 = (0);
while(true){
if((i__18078 < size__4870__auto__)){
var vec__18084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18078);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18084,(1),null);
cljs.core.chunk_append(b__18079,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__18086 = (i__18078 + (1));
i__18078 = G__18086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18079),plumbing$fnk$schema$guess_expr_output_schema_$_iter__18076(cljs.core.chunk_rest(s__18077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18079),null);
}
} else {
var vec__18085 = cljs.core.first(s__18077__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18085,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__18076(cljs.core.rest(s__18077__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4871__auto__(expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.__GT_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4871__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__18105(s__18106){
return (new cljs.core.LazySeq(null,(function (){
var s__18106__$1 = s__18106;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18106__$1);
if(temp__4404__auto__){
var s__18106__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18106__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18106__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18108 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18107 = (0);
while(true){
if((i__18107 < size__4870__auto__)){
var vec__18113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18107);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18113,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18113,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4117__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__18108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__18115 = (i__18107 + (1));
i__18107 = G__18115;
continue;
} else {
var G__18116 = (i__18107 + (1));
i__18107 = G__18116;
continue;
}
} else {
var G__18117 = (i__18107 + (1));
i__18107 = G__18117;
continue;
}
} else {
var G__18118 = (i__18107 + (1));
i__18107 = G__18118;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18108),plumbing$fnk$schema$schema_diff_$_iter__18105(cljs.core.chunk_rest(s__18106__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18108),null);
}
} else {
var vec__18114 = cljs.core.first(s__18106__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4117__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__18105(cljs.core.rest(s__18106__$2)));
} else {
var G__18119 = cljs.core.rest(s__18106__$2);
s__18106__$1 = G__18119;
continue;
}
} else {
var G__18120 = cljs.core.rest(s__18106__$2);
s__18106__$1 = G__18120;
continue;
}
} else {
var G__18121 = cljs.core.rest(s__18106__$2);
s__18106__$1 = G__18121;
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
return iter__4871__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$error,cljs.core.constant$keyword$does_DASH_not_DASH_satisfy_DASH_schema,cljs.core.constant$keyword$failures,fails], null));
} else {
return null;
}
});
var ufv___18148 = schema.utils.use_fn_validation;
var output_schema18122_18149 = schema.core.Any;
var input_schema18123_18150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker18124_18151 = schema.core.checker(input_schema18123_18150);
var output_checker18125_18152 = schema.core.checker(output_schema18122_18149);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___18148,output_schema18122_18149,input_schema18123_18150,input_checker18124_18151,output_checker18125_18152){
return (function plumbing$fnk$schema$compose_schemata(G__18126,G__18127){
var validate__13917__auto__ = true;
if(validate__13917__auto__){
var args__13918__auto___18153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18126,G__18127], null);
var temp__4404__auto___18154 = (function (){var G__18138 = args__13918__auto___18153;
return (input_checker18124_18151.cljs$core$IFn$_invoke$arity$1 ? input_checker18124_18151.cljs$core$IFn$_invoke$arity$1(G__18138) : input_checker18124_18151.call(null,G__18138));
})();
if(cljs.core.truth_(temp__4404__auto___18154)){
var error__13919__auto___18155 = temp__4404__auto___18154;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13919__auto___18155], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema18123_18150,cljs.core.constant$keyword$value,args__13918__auto___18153,cljs.core.constant$keyword$error,error__13919__auto___18155], null));
} else {
}
} else {
}

var o__13920__auto__ = (function (){var G__18141 = G__18126;
var vec__18143 = G__18141;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143,(1),null);
var G__18142 = G__18127;
var vec__18144 = G__18142;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18144,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18144,(1),null);
var G__18141__$1 = G__18141;
var G__18142__$1 = G__18142;
while(true){
var vec__18145 = G__18141__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18145,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18145,(1),null);
var vec__18146 = G__18142__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18146,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18146,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__13917__auto__){
var temp__4404__auto___18156 = (function (){var G__18147 = o__13920__auto__;
return (output_checker18125_18152.cljs$core$IFn$_invoke$arity$1 ? output_checker18125_18152.cljs$core$IFn$_invoke$arity$1(G__18147) : output_checker18125_18152.call(null,G__18147));
})();
if(cljs.core.truth_(temp__4404__auto___18156)){
var error__13919__auto___18157 = temp__4404__auto___18156;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__13919__auto___18157], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema18122_18149,cljs.core.constant$keyword$value,o__13920__auto__,cljs.core.constant$keyword$error,error__13919__auto___18157], null));
} else {
}
} else {
}

return o__13920__auto__;
});})(ufv___18148,output_schema18122_18149,input_schema18123_18150,input_checker18124_18151,output_checker18125_18152))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema18122_18149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18123_18150], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var output_schema18158_18254 = schema.core.Any;
var input_schema18159_18255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (output_schema18158_18254,input_schema18159_18255){
return (function plumbing$fnk$schema$split_schema(s,ks){
var ks__$1 = cljs.core.set(ks);
var iter__4871__auto__ = ((function (ks__$1,output_schema18158_18254,input_schema18159_18255){
return (function plumbing$fnk$schema$split_schema_$_iter__18208(s__18209){
return (new cljs.core.LazySeq(null,((function (ks__$1,output_schema18158_18254,input_schema18159_18255){
return (function (){
var s__18209__$1 = s__18209;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__18209__$1);
if(temp__4404__auto__){
var s__18209__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18209__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18209__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18211 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18210 = (0);
while(true){
if((i__18210 < size__4870__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18210);
cljs.core.chunk_append(b__18211,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4871__auto__ = ((function (i__18210,in_QMARK_,c__4869__auto__,size__4870__auto__,b__18211,s__18209__$2,temp__4404__auto__,ks__$1,output_schema18158_18254,input_schema18159_18255){
return (function plumbing$fnk$schema$split_schema_$_iter__18208_$_iter__18234(s__18235){
return (new cljs.core.LazySeq(null,((function (i__18210,in_QMARK_,c__4869__auto__,size__4870__auto__,b__18211,s__18209__$2,temp__4404__auto__,ks__$1,output_schema18158_18254,input_schema18159_18255){
return (function (){
var s__18235__$1 = s__18235;
while(true){
var temp__4404__auto____$1 = cljs.core.seq(s__18235__$1);
if(temp__4404__auto____$1){
var s__18235__$2 = temp__4404__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18235__$2)){
var c__4869__auto____$1 = cljs.core.chunk_first(s__18235__$2);
var size__4870__auto____$1 = cljs.core.count(c__4869__auto____$1);
var b__18237 = cljs.core.chunk_buffer(size__4870__auto____$1);
if((function (){var i__18236 = (0);
while(true){
if((i__18236 < size__4870__auto____$1)){
var vec__18242 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto____$1,i__18236);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18242,(1),null);
if(cljs.core.truth_((function (){var and__4105__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4105__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4105__auto__;
}
})())){
cljs.core.chunk_append(b__18237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18256 = (i__18236 + (1));
i__18236 = G__18256;
continue;
} else {
var G__18257 = (i__18236 + (1));
i__18236 = G__18257;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18237),plumbing$fnk$schema$split_schema_$_iter__18208_$_iter__18234(cljs.core.chunk_rest(s__18235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18237),null);
}
} else {
var vec__18243 = cljs.core.first(s__18235__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18243,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18243,(1),null);
if(cljs.core.truth_((function (){var and__4105__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4105__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4105__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__18208_$_iter__18234(cljs.core.rest(s__18235__$2)));
} else {
var G__18258 = cljs.core.rest(s__18235__$2);
s__18235__$1 = G__18258;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__18210,in_QMARK_,c__4869__auto__,size__4870__auto__,b__18211,s__18209__$2,temp__4404__auto__,ks__$1,output_schema18158_18254,input_schema18159_18255))
,null,null));
});})(i__18210,in_QMARK_,c__4869__auto__,size__4870__auto__,b__18211,s__18209__$2,temp__4404__auto__,ks__$1,output_schema18158_18254,input_schema18159_18255))
;
return iter__4871__auto__(s);
})()));

var G__18259 = (i__18210 + (1));
i__18210 = G__18259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18211),plumbing$fnk$schema$split_schema_$_iter__18208(cljs.core.chunk_rest(s__18209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18211),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__18209__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4871__auto__ = ((function (in_QMARK_,s__18209__$2,temp__4404__auto__,ks__$1,output_schema18158_18254,input_schema18159_18255){
return (function plumbing$fnk$schema$split_schema_$_iter__18208_$_iter__18244(s__18245){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__18209__$2,temp__4404__auto__,ks__$1,output_schema18158_18254,input_schema18159_18255){
return (function (){
var s__18245__$1 = s__18245;
while(true){
var temp__4404__auto____$1 = cljs.core.seq(s__18245__$1);
if(temp__4404__auto____$1){
var s__18245__$2 = temp__4404__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18245__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__18245__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__18247 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__18246 = (0);
while(true){
if((i__18246 < size__4870__auto__)){
var vec__18252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__18246);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18252,(1),null);
if(cljs.core.truth_((function (){var and__4105__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4105__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4105__auto__;
}
})())){
cljs.core.chunk_append(b__18247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__18260 = (i__18246 + (1));
i__18246 = G__18260;
continue;
} else {
var G__18261 = (i__18246 + (1));
i__18246 = G__18261;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18247),plumbing$fnk$schema$split_schema_$_iter__18208_$_iter__18244(cljs.core.chunk_rest(s__18245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18247),null);
}
} else {
var vec__18253 = cljs.core.first(s__18245__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253,(1),null);
if(cljs.core.truth_((function (){var and__4105__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4105__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4105__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__18208_$_iter__18244(cljs.core.rest(s__18245__$2)));
} else {
var G__18262 = cljs.core.rest(s__18245__$2);
s__18245__$1 = G__18262;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__18209__$2,temp__4404__auto__,ks__$1,output_schema18158_18254,input_schema18159_18255))
,null,null));
});})(in_QMARK_,s__18209__$2,temp__4404__auto__,ks__$1,output_schema18158_18254,input_schema18159_18255))
;
return iter__4871__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__18208(cljs.core.rest(s__18209__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,output_schema18158_18254,input_schema18159_18255))
,null,null));
});})(ks__$1,output_schema18158_18254,input_schema18159_18255))
;
return iter__4871__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
});})(output_schema18158_18254,input_schema18159_18255))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema18158_18254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18159_18255], null)));
var output_schema18263_18277 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema18264_18278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (output_schema18263_18277,input_schema18264_18278){
return (function plumbing$fnk$schema$sequence_schemata(p__18267,p__18268){
var vec__18273 = p__18267;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18273,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18273,(1),null);
var vec__18274 = p__18268;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18274,(0),null);
var vec__18275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18274,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18275,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18275,(1),null);
if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i1,k))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k,schema.core.explain(i2),schema.core.explain(i1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i2,k))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k,schema.core.explain(i2)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(o1,k))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k,schema.core.explain(i1)], 0))));
}

var vec__18276 = plumbing.fnk.schema.split_schema(i2,cljs.core.keys(o1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18276,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18276,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1,k,o2)], null);
});})(output_schema18263_18277,input_schema18264_18278))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema18263_18277,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18264_18278], null)));
