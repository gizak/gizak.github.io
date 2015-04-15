// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('gio.command');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.tools.cli');
goog.require('om.core');
gio.command.re_single_q = "(@djnqonfa0djq0923u103it59u4978t2i45jtor8uvna38ufq935u9tgoy24r7oqdh108rhirb)";
gio.command.re_double_q = "(@284ijgtpw99jt2pu4ght284ruqprgw89tjwp9qh94fhwufh89qufhqfhd98hfu5q0ewfu24h8)";
gio.command.w_flag_type = (function gio$command$w_flag_type(w){
if(cljs.core.truth_(cljs.core.re_find(/^\"/,w))){
return cljs.core.constant$keyword$double;
} else {
if(cljs.core.truth_(cljs.core.re_find(/\"$/,w))){
return cljs.core.constant$keyword$double;
} else {
if(cljs.core.truth_(cljs.core.re_find(/^'/,w))){
return cljs.core.constant$keyword$single;
} else {
if(cljs.core.truth_(cljs.core.re_find(/'$/,w))){
return cljs.core.constant$keyword$single;
} else {
return null;

}
}
}
}
});
gio.command.w_flag = (function gio$command$w_flag(w){
if(cljs.core.truth_(cljs.core.re_find(/^\"/,w))){
return cljs.core.constant$keyword$left_DASH_double;
} else {
if(cljs.core.truth_(cljs.core.re_find(/\"$/,w))){
return cljs.core.constant$keyword$right_DASH_double;
} else {
if(cljs.core.truth_(cljs.core.re_find(/^'/,w))){
return cljs.core.constant$keyword$left_DASH_single;
} else {
if(cljs.core.truth_(cljs.core.re_find(/'$/,w))){
return cljs.core.constant$keyword$right_DASH_single;
} else {
return null;

}
}
}
}
});
gio.command.w_clean = (function gio$command$w_clean(w){
var pred__19782 = cljs.core._EQ_;
var expr__19783 = gio.command.w_flag(w);
if(cljs.core.truth_((function (){var G__19785 = cljs.core.constant$keyword$left_DASH_double;
var G__19786 = expr__19783;
return (pred__19782.cljs$core$IFn$_invoke$arity$2 ? pred__19782.cljs$core$IFn$_invoke$arity$2(G__19785,G__19786) : pred__19782.call(null,G__19785,G__19786));
})())){
return clojure.string.replace(w,/^\"/,"");
} else {
if(cljs.core.truth_((function (){var G__19787 = cljs.core.constant$keyword$left_DASH_single;
var G__19788 = expr__19783;
return (pred__19782.cljs$core$IFn$_invoke$arity$2 ? pred__19782.cljs$core$IFn$_invoke$arity$2(G__19787,G__19788) : pred__19782.call(null,G__19787,G__19788));
})())){
return clojure.string.replace(w,/^'/,"");
} else {
if(cljs.core.truth_((function (){var G__19789 = cljs.core.constant$keyword$right_DASH_double;
var G__19790 = expr__19783;
return (pred__19782.cljs$core$IFn$_invoke$arity$2 ? pred__19782.cljs$core$IFn$_invoke$arity$2(G__19789,G__19790) : pred__19782.call(null,G__19789,G__19790));
})())){
return clojure.string.replace(w,/\"$/,"");
} else {
if(cljs.core.truth_((function (){var G__19791 = cljs.core.constant$keyword$right_DASH_single;
var G__19792 = expr__19783;
return (pred__19782.cljs$core$IFn$_invoke$arity$2 ? pred__19782.cljs$core$IFn$_invoke$arity$2(G__19791,G__19792) : pred__19782.call(null,G__19791,G__19792));
})())){
return clojure.string.replace(w,/'$/,"");
} else {
return w;
}
}
}
}
});
gio.command.w_replace = (function gio$command$w_replace(w){
return w.replace("\\'",gio.command.re_single_q).replace("\\\"",gio.command.re_double_q);
});
gio.command.w_recover = (function gio$command$w_recover(w){
return w.replace(gio.command.re_single_q,"'").replace(gio.command.re_double_q,"\"");
});
gio.command.w_trim = (function gio$command$w_trim(w){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gio.command.w_flag_type(w),cljs.core.constant$keyword$double)){
return clojure.string.replace(w,/^\"(.*)?\"$/,"$1");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gio.command.w_flag_type(w),cljs.core.constant$keyword$double)){
return clojure.string.replace(w,/^'(.*)?'$/,"$1");
} else {
return w;

}
}
});
gio.command.split_args = (function gio$command$split_args(){
var G__19794 = arguments.length;
switch (G__19794) {
case 1:
return gio.command.split_args.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

gio.command.split_args.cljs$core$IFn$_invoke$arity$1 = (function (input){
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(input),/\s/),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null);
});

gio.command.split_args.cljs$core$IFn$_invoke$arity$4 = (function (args_STAR_,args,cache,flag){
if(cljs.core.empty_QMARK_(args_STAR_)){
if(cljs.core.empty_QMARK_(cache)){
return args;
} else {
throw "could not parse args";
}
} else {
var w = gio.command.w_replace(gio.command.w_trim(cljs.core.first(args_STAR_)));
var r = cljs.core.rest(args_STAR_);
var f = gio.command.w_flag(w);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,cljs.core.constant$keyword$double)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$right_DASH_double)){
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(args,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,gio.command.w_recover(gio.command.w_clean(w))))),cljs.core.PersistentVector.EMPTY,null);
} else {
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4(r,args,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,gio.command.w_recover(w)),flag);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,cljs.core.constant$keyword$single)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$right_DASH_single)){
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(args,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,gio.command.w_recover(gio.command.w_clean(w))))),cljs.core.PersistentVector.EMPTY,null);
} else {
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4(r,args,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,gio.command.w_recover(w)),flag);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$left_DASH_double)){
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4(r,args,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,gio.command.w_recover(gio.command.w_clean(w))),cljs.core.constant$keyword$double);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.constant$keyword$left_DASH_single)){
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4(r,args,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,gio.command.w_recover(gio.command.w_clean(w))),cljs.core.constant$keyword$single);
} else {
return gio.command.split_args.cljs$core$IFn$_invoke$arity$4(r,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(args,gio.command.w_recover(w)),cache,null);

}
}

}
}
}
});

gio.command.split_args.cljs$lang$maxFixedArity = 4;
gio.command.data = (function (){var G__19796 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19796) : cljs.core.atom.call(null,G__19796));
})();
gio.command.bind_data = (function gio$command$bind_data(d){
var G__19799 = gio.command.data;
var G__19800 = d;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19799,G__19800) : cljs.core.reset_BANG_.call(null,G__19799,G__19800));
});
gio.command.register = (function gio$command$register(){
var argseq__5153__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return gio.command.register.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5153__auto__);
});

gio.command.register.cljs$core$IFn$_invoke$arity$variadic = (function (cmd,info,func,opts){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((function (){var G__19805 = gio.command.data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19805) : cljs.core.deref.call(null,G__19805));
})(),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$commands,cmd], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$handler,func,cljs.core.constant$keyword$name,cljs.core.name(cmd),cljs.core.constant$keyword$info,info,cljs.core.constant$keyword$opts,opts], null));
});

gio.command.register.cljs$lang$maxFixedArity = (3);

gio.command.register.cljs$lang$applyTo = (function (seq19801){
var G__19802 = cljs.core.first(seq19801);
var seq19801__$1 = cljs.core.next(seq19801);
var G__19803 = cljs.core.first(seq19801__$1);
var seq19801__$2 = cljs.core.next(seq19801__$1);
var G__19804 = cljs.core.first(seq19801__$2);
var seq19801__$3 = cljs.core.next(seq19801__$2);
return gio.command.register.cljs$core$IFn$_invoke$arity$variadic(G__19802,G__19803,G__19804,seq19801__$3);
});
gio.command.add_history = (function gio$command$add_history(el){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var G__19808 = gio.command.data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19808) : cljs.core.deref.call(null,G__19808));
})(),(function (p1__19806_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__19806_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$history], null),cljs.core.conj,el);
}));
});
gio.command.output_raw = (function gio$command$output_raw(line){
return gio.command.add_history(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$output_DASH_raw,cljs.core.constant$keyword$content,line], null));
});
gio.command.output = (function gio$command$output(line){
return gio.command.add_history(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$output,cljs.core.constant$keyword$content,line], null));
});
gio.command.record_input = (function gio$command$record_input(line){
return gio.command.add_history(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$input,cljs.core.constant$keyword$content,line], null));
});
gio.command.clear = (function gio$command$clear(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((function (){var G__19810 = gio.command.data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19810) : cljs.core.deref.call(null,G__19810));
})(),cljs.core.assoc,cljs.core.constant$keyword$history,cljs.core.PersistentVector.EMPTY);
});
gio.command.all_commands = (function gio$command$all_commands(){
return cljs.core.constant$keyword$commands.cljs$core$IFn$_invoke$arity$1((function (){var G__19813 = (function (){var G__19814 = gio.command.data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19814) : cljs.core.deref.call(null,G__19814));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19813) : cljs.core.deref.call(null,G__19813));
})());
});
gio.command.call = (function gio$command$call(cmd_STAR_){
var args = gio.command.split_args.cljs$core$IFn$_invoke$arity$1(cmd_STAR_);
var cmd = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
if(cljs.core.contains_QMARK_(cljs.core.constant$keyword$commands.cljs$core$IFn$_invoke$arity$1((function (){var G__19821 = (function (){var G__19822 = gio.command.data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19822) : cljs.core.deref.call(null,G__19822));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19821) : cljs.core.deref.call(null,G__19821));
})()),cmd)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19823 = (function (){var G__19824 = gio.command.data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19824) : cljs.core.deref.call(null,G__19824));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19823) : cljs.core.deref.call(null,G__19823));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$commands,cmd,cljs.core.constant$keyword$handler], null)).call(null,cljs.tools.cli.parse_opts(cljs.core.rest(args),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19825 = (function (){var G__19826 = gio.command.data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19826) : cljs.core.deref.call(null,G__19826));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19825) : cljs.core.deref.call(null,G__19825));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$commands,cmd,cljs.core.constant$keyword$otps], null))));
} else {
return gio.command.output([cljs.core.str("sh: command not found: "),cljs.core.str(cljs.core.name(cmd))].join(''));
}
});
gio.command.history = (function gio$command$history(){
return cljs.core.constant$keyword$history.cljs$core$IFn$_invoke$arity$1((function (){var G__19829 = (function (){var G__19830 = gio.command.data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19830) : cljs.core.deref.call(null,G__19830));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19829) : cljs.core.deref.call(null,G__19829));
})());
});
