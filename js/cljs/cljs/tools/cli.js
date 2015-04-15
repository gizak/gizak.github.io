// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.tools.cli');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string.format');
goog.require('goog.string');
/**
 * Reduce arguments sequence into [opt-type opt ?optarg?] vectors and a vector
 * of remaining arguments. Returns as [option-tokens remaining-args].
 * 
 * Expands clumped short options like "-abc" into:
 * [[:short-opt "-a"] [:short-opt "-b"] [:short-opt "-c"]]
 * 
 * If "-b" were in the set of options that require arguments, "-abc" would
 * then be interpreted as: [[:short-opt "-a"] [:short-opt "-b" "c"]]
 * 
 * Long options with `=` are always parsed as option + optarg, even if nothing
 * follows the `=` sign.
 * 
 * If the :in-order flag is true, the first non-option, non-optarg argument
 * stops options processing. This is useful for handling subcommand options.
 */
cljs.tools.cli.tokenize_args = (function cljs$tools$cli$tokenize_args(){
var argseq__5153__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return cljs.tools.cli.tokenize_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5153__auto__);
});

cljs.tools.cli.tokenize_args.cljs$core$IFn$_invoke$arity$variadic = (function (required_set,args,options){
var map__19836 = options;
var map__19836__$1 = ((cljs.core.seq_QMARK_(map__19836))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19836):map__19836);
var in_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19836__$1,cljs.core.constant$keyword$in_DASH_order);
var opts = cljs.core.PersistentVector.EMPTY;
var argv = cljs.core.PersistentVector.EMPTY;
var G__19838 = args;
var vec__19839 = G__19838;
var car = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19839,(0),null);
var cdr = cljs.core.nthnext(vec__19839,(1));
var opts__$1 = opts;
var argv__$1 = argv;
var G__19838__$1 = G__19838;
while(true){
var opts__$2 = opts__$1;
var argv__$2 = argv__$1;
var vec__19840 = G__19838__$1;
var car__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19840,(0),null);
var cdr__$1 = cljs.core.nthnext(vec__19840,(1));
if(cljs.core.truth_(car__$1)){
var pred__19841 = cljs.core.re_seq;
var expr__19842 = car__$1;
if(cljs.core.truth_((function (){var G__19844 = /^--$/;
var G__19845 = expr__19842;
return (pred__19841.cljs$core$IFn$_invoke$arity$2 ? pred__19841.cljs$core$IFn$_invoke$arity$2(G__19844,G__19845) : pred__19841.call(null,G__19844,G__19845));
})())){
var G__19858 = opts__$2;
var G__19859 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(argv__$2,cdr__$1);
var G__19860 = cljs.core.PersistentVector.EMPTY;
opts__$1 = G__19858;
argv__$1 = G__19859;
G__19838__$1 = G__19860;
continue;
} else {
if(cljs.core.truth_((function (){var G__19846 = /^--\S+=/;
var G__19847 = expr__19842;
return (pred__19841.cljs$core$IFn$_invoke$arity$2 ? pred__19841.cljs$core$IFn$_invoke$arity$2(G__19846,G__19847) : pred__19841.call(null,G__19846,G__19847));
})())){
var G__19861 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(opts__$2,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$long_DASH_opt], null),clojure.string.split.cljs$core$IFn$_invoke$arity$3(car__$1,/=/,(2))));
var G__19862 = argv__$2;
var G__19863 = cdr__$1;
opts__$1 = G__19861;
argv__$1 = G__19862;
G__19838__$1 = G__19863;
continue;
} else {
if(cljs.core.truth_((function (){var G__19848 = /^--/;
var G__19849 = expr__19842;
return (pred__19841.cljs$core$IFn$_invoke$arity$2 ? pred__19841.cljs$core$IFn$_invoke$arity$2(G__19848,G__19849) : pred__19841.call(null,G__19848,G__19849));
})())){
var vec__19850 = ((cljs.core.contains_QMARK_(required_set,car__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cdr__$1),cljs.core.rest(cdr__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cdr__$1], null));
var optarg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19850,(0),null);
var cdr__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19850,(1),null);
var G__19864 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(opts__$2,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$long_DASH_opt,car__$1], null),(cljs.core.truth_(optarg)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [optarg], null):cljs.core.PersistentVector.EMPTY)));
var G__19865 = argv__$2;
var G__19866 = cdr__$2;
opts__$1 = G__19864;
argv__$1 = G__19865;
G__19838__$1 = G__19866;
continue;
} else {
if(cljs.core.truth_((function (){var G__19851 = /^-./;
var G__19852 = expr__19842;
return (pred__19841.cljs$core$IFn$_invoke$arity$2 ? pred__19841.cljs$core$IFn$_invoke$arity$2(G__19851,G__19852) : pred__19841.call(null,G__19851,G__19852));
})())){
var vec__19853 = (function (){var os = cljs.core.PersistentVector.EMPTY;
var G__19855 = cljs.core.rest(car__$1);
var vec__19856 = G__19855;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19856,(0),null);
var cs = cljs.core.nthnext(vec__19856,(1));
var os__$1 = os;
var G__19855__$1 = G__19855;
while(true){
var os__$2 = os__$1;
var vec__19857 = G__19855__$1;
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19857,(0),null);
var cs__$1 = cljs.core.nthnext(vec__19857,(1));
var o = [cljs.core.str("-"),cljs.core.str(c__$1)].join('');
if(cljs.core.contains_QMARK_(required_set,o)){
if(cljs.core.seq(cs__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(os__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$short_DASH_opt,o,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cs__$1)], null)),cdr__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(os__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$short_DASH_opt,o,cljs.core.first(cdr__$1)], null)),cljs.core.rest(cdr__$1)], null);
}
} else {
if(cljs.core.seq(cs__$1)){
var G__19867 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(os__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$short_DASH_opt,o], null));
var G__19868 = cs__$1;
os__$1 = G__19867;
G__19855__$1 = G__19868;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(os__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$short_DASH_opt,o], null)),cdr__$1], null);
}
}
break;
}
})();
var os = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19853,(0),null);
var cdr__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19853,(1),null);
var G__19869 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(opts__$2,os);
var G__19870 = argv__$2;
var G__19871 = cdr__$2;
opts__$1 = G__19869;
argv__$1 = G__19870;
G__19838__$1 = G__19871;
continue;
} else {
if(cljs.core.truth_(in_order)){
var G__19872 = opts__$2;
var G__19873 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(argv__$2,cljs.core.cons(car__$1,cdr__$1));
var G__19874 = cljs.core.PersistentVector.EMPTY;
opts__$1 = G__19872;
argv__$1 = G__19873;
G__19838__$1 = G__19874;
continue;
} else {
var G__19875 = opts__$2;
var G__19876 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(argv__$2,car__$1);
var G__19877 = cdr__$1;
opts__$1 = G__19875;
argv__$1 = G__19876;
G__19838__$1 = G__19877;
continue;
}
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts__$2,argv__$2], null);
}
break;
}
});

cljs.tools.cli.tokenize_args.cljs$lang$maxFixedArity = (2);

cljs.tools.cli.tokenize_args.cljs$lang$applyTo = (function (seq19833){
var G__19834 = cljs.core.first(seq19833);
var seq19833__$1 = cljs.core.next(seq19833);
var G__19835 = cljs.core.first(seq19833__$1);
var seq19833__$2 = cljs.core.next(seq19833__$1);
return cljs.tools.cli.tokenize_args.cljs$core$IFn$_invoke$arity$variadic(G__19834,G__19835,seq19833__$2);
});
cljs.tools.cli.spec_keys = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$id,cljs.core.constant$keyword$short_DASH_opt,cljs.core.constant$keyword$long_DASH_opt,cljs.core.constant$keyword$required,cljs.core.constant$keyword$desc,cljs.core.constant$keyword$default,cljs.core.constant$keyword$default_DASH_desc,cljs.core.constant$keyword$parse_DASH_fn,cljs.core.constant$keyword$assoc_DASH_fn,cljs.core.constant$keyword$validate_DASH_fn,cljs.core.constant$keyword$validate_DASH_msg], null);
cljs.tools.cli.compile_spec = (function cljs$tools$cli$compile_spec(spec){
var sopt_lopt_desc = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__19878_SHARP_){
return (typeof p1__19878_SHARP_ === 'string') || ((p1__19878_SHARP_ == null));
}),spec);
var spec_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sopt_lopt_desc),spec));
var vec__19882 = sopt_lopt_desc;
var short_opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19882,(0),null);
var long_opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19882,(1),null);
var desc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19882,(2),null);
var long_opt__$1 = (function (){var or__4117__auto__ = long_opt;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.constant$keyword$long_DASH_opt.cljs$core$IFn$_invoke$arity$1(spec_map);
}
})();
var vec__19883 = (cljs.core.truth_(long_opt__$1)?cljs.core.rest(cljs.core.re_find(/^(--[^ =]+)(?:[ =](.*))?/,long_opt__$1)):null);
var long_opt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(0),null);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(1),null);
var id = (cljs.core.truth_(long_opt__$2)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(long_opt__$2,(2))):null);
var vec__19884 = cljs.core.constant$keyword$validate.cljs$core$IFn$_invoke$arity$1(spec_map);
var validate_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19884,(0),null);
var validate_msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19884,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$id,id,cljs.core.constant$keyword$short_DASH_opt,short_opt,cljs.core.constant$keyword$long_DASH_opt,long_opt__$2,cljs.core.constant$keyword$required,req,cljs.core.constant$keyword$desc,desc,cljs.core.constant$keyword$validate_DASH_fn,validate_fn,cljs.core.constant$keyword$validate_DASH_msg,validate_msg], null),cljs.core.select_keys(spec_map,cljs.tools.cli.spec_keys)], 0));
});
cljs.tools.cli.distinct_QMARK__STAR_ = (function cljs$tools$cli$distinct_QMARK__STAR_(coll){
if(cljs.core.seq(coll)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
} else {
return true;
}
});
/**
 * Map a sequence of option specification vectors to a sequence of:
 * 
 * {:id           Keyword  ; :server
 * :short-opt    String   ; "-s"
 * :long-opt     String   ; "--server"
 * :required     String   ; "HOSTNAME"
 * :desc         String   ; "Remote server"
 * :default      Object   ; #<Inet4Address example.com/93.184.216.119>
 * :default-desc String   ; "example.com"
 * :parse-fn     IFn      ; #(InetAddress/getByName %)
 * :assoc-fn     IFn      ; assoc
 * :validate-fn  IFn      ; (partial instance? Inet4Address)
 * :validate-msg String   ; "Must be an IPv4 host"
 * }
 * 
 * :id defaults to the keywordized name of long-opt without leading dashes, but
 * may be overridden in the option spec.
 * 
 * The option spec entry `:validate [fn msg]` desugars into the two entries
 * :validate-fn and :validate-msg.
 * 
 * A :default entry will not be included in the compiled spec unless specified.
 * 
 * An option spec may also be passed as a map containing the entries above,
 * in which case that subset of the map is transferred directly to the result
 * vector.
 * 
 * An assertion error is thrown if any :id values are unset, or if there exist
 * any duplicate :id, :short-opt, or :long-opt values.
 */
cljs.tools.cli.compile_option_specs = (function cljs$tools$cli$compile_option_specs(specs){
var _PERCENT_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (spec){
if(cljs.core.map_QMARK_(spec)){
return cljs.core.select_keys(spec,cljs.tools.cli.spec_keys);
} else {
return cljs.tools.cli.compile_spec(spec);
}
}),specs);




return _PERCENT_;
});
cljs.tools.cli.default_option_map = (function cljs$tools$cli$default_option_map(specs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,s){
if(cljs.core.contains_QMARK_(s,cljs.core.constant$keyword$default)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$id.cljs$core$IFn$_invoke$arity$1(s),cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(s));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,specs);
});
cljs.tools.cli.find_spec = (function cljs$tools$cli$find_spec(specs,opt_type,opt){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19885_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,(function (){var G__19887 = p1__19885_SHARP_;
return (opt_type.cljs$core$IFn$_invoke$arity$1 ? opt_type.cljs$core$IFn$_invoke$arity$1(G__19887) : opt_type.call(null,G__19887));
})());
}),specs));
});
cljs.tools.cli.pr_join = (function cljs$tools$cli$pr_join(){
var argseq__5153__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic(argseq__5153__auto__);
});

cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xs)], 0));
});

cljs.tools.cli.pr_join.cljs$lang$maxFixedArity = (0);

cljs.tools.cli.pr_join.cljs$lang$applyTo = (function (seq19888){
return cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19888));
});
cljs.tools.cli.missing_required_error = (function cljs$tools$cli$missing_required_error(opt,example_required){
return [cljs.core.str("Missing required argument for "),cljs.core.str(cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opt,example_required], 0)))].join('');
});
cljs.tools.cli.parse_error = (function cljs$tools$cli$parse_error(opt,optarg,msg){
return [cljs.core.str("Error while parsing option "),cljs.core.str(cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opt,optarg], 0))),cljs.core.str(": "),cljs.core.str(msg)].join('');
});
cljs.tools.cli.validate_error = (function cljs$tools$cli$validate_error(opt,optarg,msg){
return [cljs.core.str("Failed to validate "),cljs.core.str(cljs.tools.cli.pr_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opt,optarg], 0))),cljs.core.str((cljs.core.truth_(msg)?[cljs.core.str(": "),cljs.core.str(msg)].join(''):""))].join('');
});
cljs.tools.cli.validate = (function cljs$tools$cli$validate(value,spec,opt,optarg){
var map__19894 = spec;
var map__19894__$1 = ((cljs.core.seq_QMARK_(map__19894))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19894):map__19894);
var validate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19894__$1,cljs.core.constant$keyword$validate_DASH_fn);
var validate_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19894__$1,cljs.core.constant$keyword$validate_DASH_msg);
if(cljs.core.truth_((function (){var or__4117__auto__ = (validate_fn == null);
if(or__4117__auto__){
return or__4117__auto__;
} else {
try{var G__19898 = value;
return (validate_fn.cljs$core$IFn$_invoke$arity$1 ? validate_fn.cljs$core$IFn$_invoke$arity$1(G__19898) : validate_fn.call(null,G__19898));
}catch (e19897){if((e19897 instanceof Error)){
var _ = e19897;
return null;
} else {
throw e19897;

}
}}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$tools$cli_SLASH_error,cljs.tools.cli.validate_error(opt,optarg,validate_msg)], null);
}
});
cljs.tools.cli.parse_value = (function cljs$tools$cli$parse_value(value,spec,opt,optarg){
var map__19903 = spec;
var map__19903__$1 = ((cljs.core.seq_QMARK_(map__19903))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19903):map__19903);
var parse_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,cljs.core.constant$keyword$parse_DASH_fn);
var vec__19904 = (cljs.core.truth_(parse_fn)?(function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19906 = value;
return (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(G__19906) : parse_fn.call(null,G__19906));
})(),null], null);
}catch (e19905){if((e19905 instanceof Error)){
var e = e19905;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.tools.cli.parse_error(opt,optarg,[cljs.core.str(e)].join(''))], null);
} else {
throw e19905;

}
}})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,null], null));
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19904,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19904,(1),null);
if(cljs.core.truth_(error)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$tools$cli_SLASH_error,error], null);
} else {
return cljs.tools.cli.validate(value__$1,spec,opt,optarg);
}
});
cljs.tools.cli.parse_optarg = (function cljs$tools$cli$parse_optarg(spec,opt,optarg){
var map__19908 = spec;
var map__19908__$1 = ((cljs.core.seq_QMARK_(map__19908))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19908):map__19908);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19908__$1,cljs.core.constant$keyword$required);
if(cljs.core.truth_((function (){var and__4105__auto__ = required;
if(cljs.core.truth_(and__4105__auto__)){
return (optarg == null);
} else {
return and__4105__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$tools$cli_SLASH_error,cljs.tools.cli.missing_required_error(opt,required)], null);
} else {
return cljs.tools.cli.parse_value((cljs.core.truth_(required)?optarg:true),spec,opt,optarg);
}
});
/**
 * Reduce sequence of [opt-type opt ?optarg?] tokens into a map of
 * {option-id value} merged over the default values in the option
 * specifications.
 * 
 * Unknown options, missing required arguments, option argument parsing
 * exceptions, and validation failures are collected into a vector of error
 * message strings.
 * 
 * Returns [option-map error-messages-vector].
 */
cljs.tools.cli.parse_option_tokens = (function cljs$tools$cli$parse_option_tokens(specs,tokens){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__19914,p__19915){
var vec__19916 = p__19914;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19916,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19916,(1),null);
var vec__19917 = p__19915;
var opt_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(1),null);
var optarg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(2),null);
var temp__4402__auto__ = cljs.tools.cli.find_spec(specs,opt_type,opt);
if(cljs.core.truth_(temp__4402__auto__)){
var spec = temp__4402__auto__;
var vec__19918 = cljs.tools.cli.parse_optarg(spec,opt,optarg);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19918,(1),null);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.constant$keyword$cljs$tools$cli_SLASH_error))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$assoc_DASH_fn.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.assoc).call(null,m,cljs.core.constant$keyword$id.cljs$core$IFn$_invoke$arity$1(spec),value),errors], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(errors,error)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(errors,[cljs.core.str("Unknown option: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opt], 0)))].join(''))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.cli.default_option_map(specs),cljs.core.PersistentVector.EMPTY], null),tokens);
});
cljs.tools.cli.make_summary_parts = (function cljs$tools$cli$make_summary_parts(show_defaults_QMARK_,specs){
var map__19921 = specs;
var map__19921__$1 = ((cljs.core.seq_QMARK_(map__19921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19921):map__19921);
var short_opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,cljs.core.constant$keyword$short_DASH_opt);
var long_opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,cljs.core.constant$keyword$long_DASH_opt);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,cljs.core.constant$keyword$required);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,cljs.core.constant$keyword$default);
var default_desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,cljs.core.constant$keyword$default_DASH_desc);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19921__$1,cljs.core.constant$keyword$desc);
var opt = (cljs.core.truth_((function (){var and__4105__auto__ = short_opt;
if(cljs.core.truth_(and__4105__auto__)){
return long_opt;
} else {
return and__4105__auto__;
}
})())?[cljs.core.str(short_opt),cljs.core.str(", "),cljs.core.str(long_opt)].join(''):(cljs.core.truth_(long_opt)?[cljs.core.str("    "),cljs.core.str(long_opt)].join(''):(cljs.core.truth_(short_opt)?short_opt:null)));
var vec__19922 = (cljs.core.truth_(required)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(opt),cljs.core.str(" "),cljs.core.str(required)].join(''),(function (){var or__4117__auto__ = default_desc;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
if(cljs.core.truth_(default$)){
return [cljs.core.str(default$)].join('');
} else {
return "";
}
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt,""], null));
var opt__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19922,(0),null);
var dd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19922,(1),null);
if(cljs.core.truth_(show_defaults_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt__$1,dd,(function (){var or__4117__auto__ = desc;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return "";
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt__$1,(function (){var or__4117__auto__ = desc;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return "";
}
})()], null);
}
});
cljs.tools.cli.format_lines = (function cljs$tools$cli$format_lines(lens,parts){
var fmt = (function (){var G__19925 = cljs.core.count(lens);
switch (G__19925) {
case (2):
return "  %%-%ds  %%-%ds";

break;
case (3):
return "  %%-%ds  %%-%ds  %%-%ds";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count(lens))].join('')));

}
})();
var fmt__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,lens);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fmt,fmt__$1){
return (function (p1__19923_SHARP_){
return clojure.string.trimr(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,p1__19923_SHARP_));
});})(fmt,fmt__$1))
,parts);
});
/**
 * Reduce options specs into a options summary for printing at a terminal.
 */
cljs.tools.cli.summarize = (function cljs$tools$cli$summarize(specs){
var show_defaults_QMARK_ = cljs.core.some((function (p1__19927_SHARP_){
var and__4105__auto__ = cljs.core.constant$keyword$required.cljs$core$IFn$_invoke$arity$1(p1__19927_SHARP_);
if(cljs.core.truth_(and__4105__auto__)){
return cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(p1__19927_SHARP_);
} else {
return and__4105__auto__;
}
}),specs);
var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.tools.cli.make_summary_parts,show_defaults_QMARK_),specs);
if(cljs.core.seq(parts)){
var lens = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,((function (show_defaults_QMARK_,parts){
return (function() { 
var G__19928__delegate = function (cols){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cols));
};
var G__19928 = function (var_args){
var cols = null;
if (arguments.length > 0) {
var G__19929__i = 0, G__19929__a = new Array(arguments.length -  0);
while (G__19929__i < G__19929__a.length) {G__19929__a[G__19929__i] = arguments[G__19929__i + 0]; ++G__19929__i;}
  cols = new cljs.core.IndexedSeq(G__19929__a,0);
} 
return G__19928__delegate.call(this,cols);};
G__19928.cljs$lang$maxFixedArity = 0;
G__19928.cljs$lang$applyTo = (function (arglist__19930){
var cols = cljs.core.seq(arglist__19930);
return G__19928__delegate(cols);
});
G__19928.cljs$core$IFn$_invoke$arity$variadic = G__19928__delegate;
return G__19928;
})()
;})(show_defaults_QMARK_,parts))
,parts);
var lines = cljs.tools.cli.format_lines(lens,parts);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines);
} else {
return "";
}
});
cljs.tools.cli.required_arguments = (function cljs$tools$cli$required_arguments(specs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__19933){
var map__19934 = p__19933;
var map__19934__$1 = ((cljs.core.seq_QMARK_(map__19934))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19934):map__19934);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19934__$1,cljs.core.constant$keyword$required);
var short_opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19934__$1,cljs.core.constant$keyword$short_DASH_opt);
var long_opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19934__$1,cljs.core.constant$keyword$long_DASH_opt);
if(cljs.core.truth_(required)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [short_opt,long_opt], null)));
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,specs);
});
/**
 * Parse arguments sequence according to given option specifications and the
 * GNU Program Argument Syntax Conventions:
 * 
 * https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html
 * 
 * Option specifications are a sequence of vectors with the following format:
 * 
 * [short-opt long-opt-with-required-description description
 * :property value]
 * 
 * The first three string parameters in an option spec are positional and
 * optional, and may be nil in order to specify a later parameter.
 * 
 * By default, options are boolean flags that are set to true when toggled, but
 * the second string parameter may be used to specify that an option requires
 * an argument.
 * 
 * e.g. ["-p" "--port PORT"] specifies that --port requires an argument,
 * of which PORT is a short description.
 * 
 * The :property value pairs are optional and take precedence over the
 * positional string arguments. The valid properties are:
 * 
 * :id           The key for this option in the resulting option map. This
 * is normally set to the keywordized name of the long option
 * without the leading dashes.
 * 
 * Must be a unique truthy value.
 * 
 * :short-opt    The short format for this option, normally set by the first
 * positional string parameter: e.g. "-p". Must be unique.
 * 
 * :long-opt     The long format for this option, normally set by the second
 * positional string parameter; e.g. "--port". Must be unique.
 * 
 * :required     A description of the required argument for this option if
 * one is required; normally set in the second positional
 * string parameter after the long option: "--port PORT".
 * 
 * The absence of this entry indicates that the option is a
 * boolean toggle that is set to true when specified on the
 * command line.
 * 
 * :desc         A optional short description of this option.
 * 
 * :default      The default value of this option. If none is specified, the
 * resulting option map will not contain an entry for this
 * option unless set on the command line.
 * 
 * :default-desc An optional description of the default value. This should be
 * used when the string representation of the default value is
 * too ugly to be printed on the command line.
 * 
 * :parse-fn     A function that receives the required option argument and
 * returns the option value.
 * 
 * If this is a boolean option, parse-fn will receive the value
 * true. This may be used to invert the logic of this option:
 * 
 * ["-q" "--quiet"
 * :id :verbose
 * :default true
 * :parse-fn not]
 * 
 * :assoc-fn     A function that receives the current option map, the current
 * option :id, and the current parsed option value, and returns
 * a new option map.
 * 
 * This may be used to create non-idempotent options, like
 * setting a verbosity level by specifying an option multiple
 * times. ("-vvv" -> 3)
 * 
 * ["-v" "--verbose"
 * :default 0
 * :assoc-fn (fn [m k _] (update-in m [k] inc))]
 * 
 * :validate     A vector of [validate-fn validate-msg].
 * 
 * :validate-fn  A function that receives the parsed option value and returns
 * a falsy value when the value is invalid.
 * 
 * :validate-msg An optional message that will be added to the :errors vector
 * on validation failure.
 * 
 * parse-opts returns a map with four entries:
 * 
 * {:options     The options map, keyed by :id, mapped to the parsed value
 * :arguments   A vector of unprocessed arguments
 * :summary     A string containing a minimal options summary
 * :errors      A possible vector of error message strings generated during
 * parsing; nil when no errors exist
 * }
 * 
 * A few function options may be specified to influence the behavior of
 * parse-opts:
 * 
 * :in-order     Stop option processing at the first unknown argument. Useful
 * for building programs with subcommands that have their own
 * option specs.
 * 
 * :summary-fn   A function that receives the sequence of compiled option specs
 * (documented at #'clojure.tools.cli/compile-option-specs), and
 * returns a custom option summary string.
 * 
 */
cljs.tools.cli.parse_opts = (function cljs$tools$cli$parse_opts(){
var argseq__5153__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return cljs.tools.cli.parse_opts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5153__auto__);
});

cljs.tools.cli.parse_opts.cljs$core$IFn$_invoke$arity$variadic = (function (args,option_specs,options){
var map__19938 = options;
var map__19938__$1 = ((cljs.core.seq_QMARK_(map__19938))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19938):map__19938);
var in_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19938__$1,cljs.core.constant$keyword$in_DASH_order);
var summary_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19938__$1,cljs.core.constant$keyword$summary_DASH_fn);
var specs = cljs.tools.cli.compile_option_specs(option_specs);
var req = cljs.tools.cli.required_arguments(specs);
var vec__19939 = cljs.tools.cli.tokenize_args.cljs$core$IFn$_invoke$arity$variadic(req,args,cljs.core.array_seq([cljs.core.constant$keyword$in_DASH_order,in_order], 0));
var tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(0),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939,(1),null);
var vec__19940 = cljs.tools.cli.parse_option_tokens(specs,tokens);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19940,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19940,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$options,opts,cljs.core.constant$keyword$arguments,rest_args,cljs.core.constant$keyword$summary,(function (){var or__4117__auto__ = summary_fn;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.tools.cli.summarize;
}
})().call(null,specs),cljs.core.constant$keyword$errors,((cljs.core.seq(errors))?errors:null)], null);
});

cljs.tools.cli.parse_opts.cljs$lang$maxFixedArity = (2);

cljs.tools.cli.parse_opts.cljs$lang$applyTo = (function (seq19935){
var G__19936 = cljs.core.first(seq19935);
var seq19935__$1 = cljs.core.next(seq19935);
var G__19937 = cljs.core.first(seq19935__$1);
var seq19935__$2 = cljs.core.next(seq19935__$1);
return cljs.tools.cli.parse_opts.cljs$core$IFn$_invoke$arity$variadic(G__19936,G__19937,seq19935__$2);
});
