// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$plumbing$core_SLASH_missing;
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * 
 * WARNING As of Clojure 1.7 this function exists in clojure.core and
 * will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(){
var G__18709 = arguments.length;
switch (G__18709) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,5),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5165__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__18710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18710) : f.call(null,G__18710));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__18711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__18712 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18711,G__18712) : f.call(null,G__18711,G__18712));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__18713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__18714 = x1;
var G__18715 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18713,G__18714,G__18715) : f.call(null,G__18713,G__18714,G__18715));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq18702){
var G__18703 = cljs.core.first(seq18702);
var seq18702__$1 = cljs.core.next(seq18702);
var G__18704 = cljs.core.first(seq18702__$1);
var seq18702__$2 = cljs.core.next(seq18702__$1);
var G__18705 = cljs.core.first(seq18702__$2);
var seq18702__$3 = cljs.core.next(seq18702__$2);
var G__18706 = cljs.core.first(seq18702__$3);
var seq18702__$4 = cljs.core.next(seq18702__$3);
var G__18707 = cljs.core.first(seq18702__$4);
var seq18702__$5 = cljs.core.next(seq18702__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__18703,G__18704,G__18705,G__18706,G__18707,seq18702__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = 5;
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__18736 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18736) : f.call(null,G__18736));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__18737 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18737) : f.call(null,G__18737));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__15861__auto__ = (function (){var G__18739 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18739) : cljs.core.atom.call(null,G__18739));
})();
var seq__18740_18755 = cljs.core.seq(m);
var chunk__18741_18756 = null;
var count__18742_18757 = (0);
var i__18743_18758 = (0);
while(true){
if((i__18743_18758 < count__18742_18757)){
var vec__18744_18759 = chunk__18741_18756.cljs$core$IIndexed$_nth$arity$2(null,i__18743_18758);
var k_18760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18744_18759,(0),null);
var v_18761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18744_18759,(1),null);
var m18738_18762 = (function (){var G__18745 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18745) : cljs.core.deref.call(null,G__18745));
})();
var G__18746_18763 = m_atom__15861__auto__;
var G__18747_18764 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18738_18762,k_18760,(function (){var G__18748 = v_18761;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18748) : f.call(null,G__18748));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18746_18763,G__18747_18764) : cljs.core.reset_BANG_.call(null,G__18746_18763,G__18747_18764));

var G__18765 = seq__18740_18755;
var G__18766 = chunk__18741_18756;
var G__18767 = count__18742_18757;
var G__18768 = (i__18743_18758 + (1));
seq__18740_18755 = G__18765;
chunk__18741_18756 = G__18766;
count__18742_18757 = G__18767;
i__18743_18758 = G__18768;
continue;
} else {
var temp__4404__auto___18769 = cljs.core.seq(seq__18740_18755);
if(temp__4404__auto___18769){
var seq__18740_18770__$1 = temp__4404__auto___18769;
if(cljs.core.chunked_seq_QMARK_(seq__18740_18770__$1)){
var c__4902__auto___18771 = cljs.core.chunk_first(seq__18740_18770__$1);
var G__18772 = cljs.core.chunk_rest(seq__18740_18770__$1);
var G__18773 = c__4902__auto___18771;
var G__18774 = cljs.core.count(c__4902__auto___18771);
var G__18775 = (0);
seq__18740_18755 = G__18772;
chunk__18741_18756 = G__18773;
count__18742_18757 = G__18774;
i__18743_18758 = G__18775;
continue;
} else {
var vec__18749_18776 = cljs.core.first(seq__18740_18770__$1);
var k_18777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18749_18776,(0),null);
var v_18778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18749_18776,(1),null);
var m18738_18779 = (function (){var G__18750 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18750) : cljs.core.deref.call(null,G__18750));
})();
var G__18751_18780 = m_atom__15861__auto__;
var G__18752_18781 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18738_18779,k_18777,(function (){var G__18753 = v_18778;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18753) : f.call(null,G__18753));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18751_18780,G__18752_18781) : cljs.core.reset_BANG_.call(null,G__18751_18780,G__18752_18781));

var G__18782 = cljs.core.next(seq__18740_18770__$1);
var G__18783 = null;
var G__18784 = (0);
var G__18785 = (0);
seq__18740_18755 = G__18782;
chunk__18741_18756 = G__18783;
count__18742_18757 = G__18784;
i__18743_18758 = G__18785;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__18754 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18754) : cljs.core.deref.call(null,G__18754));
})());

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__18804 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18804) : f.call(null,G__18804));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__15861__auto__ = (function (){var G__18806 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18806) : cljs.core.atom.call(null,G__18806));
})();
var seq__18807_18822 = cljs.core.seq(m);
var chunk__18808_18823 = null;
var count__18809_18824 = (0);
var i__18810_18825 = (0);
while(true){
if((i__18810_18825 < count__18809_18824)){
var vec__18811_18826 = chunk__18808_18823.cljs$core$IIndexed$_nth$arity$2(null,i__18810_18825);
var k_18827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18811_18826,(0),null);
var v_18828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18811_18826,(1),null);
var m18805_18829 = (function (){var G__18812 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18812) : cljs.core.deref.call(null,G__18812));
})();
var G__18813_18830 = m_atom__15861__auto__;
var G__18814_18831 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18805_18829,(function (){var G__18815 = k_18827;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18815) : f.call(null,G__18815));
})(),v_18828);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18813_18830,G__18814_18831) : cljs.core.reset_BANG_.call(null,G__18813_18830,G__18814_18831));

var G__18832 = seq__18807_18822;
var G__18833 = chunk__18808_18823;
var G__18834 = count__18809_18824;
var G__18835 = (i__18810_18825 + (1));
seq__18807_18822 = G__18832;
chunk__18808_18823 = G__18833;
count__18809_18824 = G__18834;
i__18810_18825 = G__18835;
continue;
} else {
var temp__4404__auto___18836 = cljs.core.seq(seq__18807_18822);
if(temp__4404__auto___18836){
var seq__18807_18837__$1 = temp__4404__auto___18836;
if(cljs.core.chunked_seq_QMARK_(seq__18807_18837__$1)){
var c__4902__auto___18838 = cljs.core.chunk_first(seq__18807_18837__$1);
var G__18839 = cljs.core.chunk_rest(seq__18807_18837__$1);
var G__18840 = c__4902__auto___18838;
var G__18841 = cljs.core.count(c__4902__auto___18838);
var G__18842 = (0);
seq__18807_18822 = G__18839;
chunk__18808_18823 = G__18840;
count__18809_18824 = G__18841;
i__18810_18825 = G__18842;
continue;
} else {
var vec__18816_18843 = cljs.core.first(seq__18807_18837__$1);
var k_18844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18816_18843,(0),null);
var v_18845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18816_18843,(1),null);
var m18805_18846 = (function (){var G__18817 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18817) : cljs.core.deref.call(null,G__18817));
})();
var G__18818_18847 = m_atom__15861__auto__;
var G__18819_18848 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18805_18846,(function (){var G__18820 = k_18844;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18820) : f.call(null,G__18820));
})(),v_18845);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18818_18847,G__18819_18848) : cljs.core.reset_BANG_.call(null,G__18818_18847,G__18819_18848));

var G__18849 = cljs.core.next(seq__18807_18837__$1);
var G__18850 = null;
var G__18851 = (0);
var G__18852 = (0);
seq__18807_18822 = G__18849;
chunk__18808_18823 = G__18850;
count__18809_18824 = G__18851;
i__18810_18825 = G__18852;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__18821 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18821) : cljs.core.deref.call(null,G__18821));
})());
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__15861__auto__ = (function (){var G__18869 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18869) : cljs.core.atom.call(null,G__18869));
})();
var seq__18870_18883 = cljs.core.seq(ks);
var chunk__18871_18884 = null;
var count__18872_18885 = (0);
var i__18873_18886 = (0);
while(true){
if((i__18873_18886 < count__18872_18885)){
var k_18887 = chunk__18871_18884.cljs$core$IIndexed$_nth$arity$2(null,i__18873_18886);
var m18868_18888 = (function (){var G__18874 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18874) : cljs.core.deref.call(null,G__18874));
})();
var G__18875_18889 = m_atom__15861__auto__;
var G__18876_18890 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18868_18888,k_18887,(function (){var G__18877 = k_18887;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18877) : f.call(null,G__18877));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18875_18889,G__18876_18890) : cljs.core.reset_BANG_.call(null,G__18875_18889,G__18876_18890));

var G__18891 = seq__18870_18883;
var G__18892 = chunk__18871_18884;
var G__18893 = count__18872_18885;
var G__18894 = (i__18873_18886 + (1));
seq__18870_18883 = G__18891;
chunk__18871_18884 = G__18892;
count__18872_18885 = G__18893;
i__18873_18886 = G__18894;
continue;
} else {
var temp__4404__auto___18895 = cljs.core.seq(seq__18870_18883);
if(temp__4404__auto___18895){
var seq__18870_18896__$1 = temp__4404__auto___18895;
if(cljs.core.chunked_seq_QMARK_(seq__18870_18896__$1)){
var c__4902__auto___18897 = cljs.core.chunk_first(seq__18870_18896__$1);
var G__18898 = cljs.core.chunk_rest(seq__18870_18896__$1);
var G__18899 = c__4902__auto___18897;
var G__18900 = cljs.core.count(c__4902__auto___18897);
var G__18901 = (0);
seq__18870_18883 = G__18898;
chunk__18871_18884 = G__18899;
count__18872_18885 = G__18900;
i__18873_18886 = G__18901;
continue;
} else {
var k_18902 = cljs.core.first(seq__18870_18896__$1);
var m18868_18903 = (function (){var G__18878 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18878) : cljs.core.deref.call(null,G__18878));
})();
var G__18879_18904 = m_atom__15861__auto__;
var G__18880_18905 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18868_18903,k_18902,(function (){var G__18881 = k_18902;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18881) : f.call(null,G__18881));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18879_18904,G__18880_18905) : cljs.core.reset_BANG_.call(null,G__18879_18904,G__18880_18905));

var G__18906 = cljs.core.next(seq__18870_18896__$1);
var G__18907 = null;
var G__18908 = (0);
var G__18909 = (0);
seq__18870_18883 = G__18906;
chunk__18871_18884 = G__18907;
count__18872_18885 = G__18908;
i__18873_18886 = G__18909;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__18882 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18882) : cljs.core.deref.call(null,G__18882));
})());
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__15861__auto__ = (function (){var G__18926 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18926) : cljs.core.atom.call(null,G__18926));
})();
var seq__18927_18940 = cljs.core.seq(vs);
var chunk__18928_18941 = null;
var count__18929_18942 = (0);
var i__18930_18943 = (0);
while(true){
if((i__18930_18943 < count__18929_18942)){
var v_18944 = chunk__18928_18941.cljs$core$IIndexed$_nth$arity$2(null,i__18930_18943);
var m18925_18945 = (function (){var G__18931 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18931) : cljs.core.deref.call(null,G__18931));
})();
var G__18932_18946 = m_atom__15861__auto__;
var G__18933_18947 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18925_18945,(function (){var G__18934 = v_18944;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18934) : f.call(null,G__18934));
})(),v_18944);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18932_18946,G__18933_18947) : cljs.core.reset_BANG_.call(null,G__18932_18946,G__18933_18947));

var G__18948 = seq__18927_18940;
var G__18949 = chunk__18928_18941;
var G__18950 = count__18929_18942;
var G__18951 = (i__18930_18943 + (1));
seq__18927_18940 = G__18948;
chunk__18928_18941 = G__18949;
count__18929_18942 = G__18950;
i__18930_18943 = G__18951;
continue;
} else {
var temp__4404__auto___18952 = cljs.core.seq(seq__18927_18940);
if(temp__4404__auto___18952){
var seq__18927_18953__$1 = temp__4404__auto___18952;
if(cljs.core.chunked_seq_QMARK_(seq__18927_18953__$1)){
var c__4902__auto___18954 = cljs.core.chunk_first(seq__18927_18953__$1);
var G__18955 = cljs.core.chunk_rest(seq__18927_18953__$1);
var G__18956 = c__4902__auto___18954;
var G__18957 = cljs.core.count(c__4902__auto___18954);
var G__18958 = (0);
seq__18927_18940 = G__18955;
chunk__18928_18941 = G__18956;
count__18929_18942 = G__18957;
i__18930_18943 = G__18958;
continue;
} else {
var v_18959 = cljs.core.first(seq__18927_18953__$1);
var m18925_18960 = (function (){var G__18935 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18935) : cljs.core.deref.call(null,G__18935));
})();
var G__18936_18961 = m_atom__15861__auto__;
var G__18937_18962 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18925_18960,(function (){var G__18938 = v_18959;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18938) : f.call(null,G__18938));
})(),v_18959);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18936_18961,G__18937_18962) : cljs.core.reset_BANG_.call(null,G__18936_18961,G__18937_18962));

var G__18963 = cljs.core.next(seq__18927_18953__$1);
var G__18964 = null;
var G__18965 = (0);
var G__18966 = (0);
seq__18927_18940 = G__18963;
chunk__18928_18941 = G__18964;
count__18929_18942 = G__18965;
i__18930_18943 = G__18966;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__18939 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18939) : cljs.core.deref.call(null,G__18939));
})());
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__18967){
var vec__18971 = p__18967;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18971,(0),null);
var ks = cljs.core.nthnext(vec__18971,(1));
if(cljs.core.truth_(m)){
var temp__4402__auto__ = (function (){var and__4105__auto__ = ks;
if(cljs.core.truth_(and__4105__auto__)){
return plumbing$core$dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__4105__auto__;
}
})();
if(cljs.core.truth_(temp__4402__auto__)){
var res = temp__4402__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__15861__auto__ = (function (){var G__18990 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18990) : cljs.core.atom.call(null,G__18990));
})();
var seq__18991_19004 = cljs.core.seq(x);
var chunk__18992_19005 = null;
var count__18993_19006 = (0);
var i__18994_19007 = (0);
while(true){
if((i__18994_19007 < count__18993_19006)){
var vec__18995_19008 = chunk__18992_19005.cljs$core$IIndexed$_nth$arity$2(null,i__18994_19007);
var k_19009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18995_19008,(0),null);
var v_19010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18995_19008,(1),null);
var m18989_19011 = (function (){var G__18996 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18996) : cljs.core.deref.call(null,G__18996));
})();
var G__18997_19012 = m_atom__15861__auto__;
var G__18998_19013 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18989_19011,((typeof k_19009 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_19009):k_19009),plumbing$core$keywordize_map(v_19010));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18997_19012,G__18998_19013) : cljs.core.reset_BANG_.call(null,G__18997_19012,G__18998_19013));

var G__19014 = seq__18991_19004;
var G__19015 = chunk__18992_19005;
var G__19016 = count__18993_19006;
var G__19017 = (i__18994_19007 + (1));
seq__18991_19004 = G__19014;
chunk__18992_19005 = G__19015;
count__18993_19006 = G__19016;
i__18994_19007 = G__19017;
continue;
} else {
var temp__4404__auto___19018 = cljs.core.seq(seq__18991_19004);
if(temp__4404__auto___19018){
var seq__18991_19019__$1 = temp__4404__auto___19018;
if(cljs.core.chunked_seq_QMARK_(seq__18991_19019__$1)){
var c__4902__auto___19020 = cljs.core.chunk_first(seq__18991_19019__$1);
var G__19021 = cljs.core.chunk_rest(seq__18991_19019__$1);
var G__19022 = c__4902__auto___19020;
var G__19023 = cljs.core.count(c__4902__auto___19020);
var G__19024 = (0);
seq__18991_19004 = G__19021;
chunk__18992_19005 = G__19022;
count__18993_19006 = G__19023;
i__18994_19007 = G__19024;
continue;
} else {
var vec__18999_19025 = cljs.core.first(seq__18991_19019__$1);
var k_19026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999_19025,(0),null);
var v_19027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999_19025,(1),null);
var m18989_19028 = (function (){var G__19000 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19000) : cljs.core.deref.call(null,G__19000));
})();
var G__19001_19029 = m_atom__15861__auto__;
var G__19002_19030 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m18989_19028,((typeof k_19026 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_19026):k_19026),plumbing$core$keywordize_map(v_19027));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19001_19029,G__19002_19030) : cljs.core.reset_BANG_.call(null,G__19001_19029,G__19002_19030));

var G__19031 = cljs.core.next(seq__18991_19019__$1);
var G__19032 = null;
var G__19033 = (0);
var G__19034 = (0);
seq__18991_19004 = G__19031;
chunk__18992_19005 = G__19032;
count__18993_19006 = G__19033;
i__18994_19007 = G__19034;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__19003 = m_atom__15861__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19003) : cljs.core.deref.call(null,G__19003));
})());
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4402__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4402__auto__)){
var pair__15942__auto__ = temp__4402__auto__;
return cljs.core.val(pair__15942__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__19035 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__19036 = cljs.core.next(ks);
m = G__19035;
ks = G__19036;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(){
var argseq__5153__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5153__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4117__auto__ = m;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4871__auto__ = (function plumbing$core$iter__19039(s__19040){
return (new cljs.core.LazySeq(null,(function (){
var s__19040__$1 = s__19040;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__19040__$1);
if(temp__4404__auto__){
var s__19040__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19040__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__19040__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__19042 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__19041 = (0);
while(true){
if((i__19041 < size__4870__auto__)){
var vec__19047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__19041);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__19042,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19049 = (i__19041 + (1));
i__19041 = G__19049;
continue;
} else {
var G__19050 = (i__19041 + (1));
i__19041 = G__19050;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19042),plumbing$core$iter__19039(cljs.core.chunk_rest(s__19040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19042),null);
}
} else {
var vec__19048 = cljs.core.first(s__19040__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19048,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__19039(cljs.core.rest(s__19040__$2)));
} else {
var G__19051 = cljs.core.rest(s__19040__$2);
s__19040__$1 = G__19051;
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

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq19037){
var G__19038 = cljs.core.first(seq19037);
var seq19037__$1 = cljs.core.next(seq19037);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__19038,seq19037__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var argseq__5153__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5153__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq19052){
var G__19053 = cljs.core.first(seq19052);
var seq19052__$1 = cljs.core.next(seq19052);
var G__19054 = cljs.core.first(seq19052__$1);
var seq19052__$2 = cljs.core.next(seq19052__$1);
var G__19055 = cljs.core.first(seq19052__$2);
var seq19052__$3 = cljs.core.next(seq19052__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__19053,G__19054,G__19055,seq19052__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__19058 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19058) : key_fn.call(null,G__19058));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__19059 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__19059) : map_fn.call(null,G__19059));
})()));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4404__auto__ = cljs.core.next(s);
if(temp__4404__auto__){
var n = temp__4404__auto__;
return plumbing$core$aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(){
var G__19063 = arguments.length;
switch (G__19063) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4404__auto__ = cljs.core.seq(xs);
if(temp__4404__auto__){
var xs__$1 = temp__4404__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((function (){var G__19066 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19066) : f.call(null,G__19066));
})())){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = (function (){var G__19082 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19082) : cljs.core.atom.call(null,G__19082));
})();
var iter__4871__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__19083(s__19084){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__19084__$1 = s__19084;
while(true){
var temp__4404__auto__ = cljs.core.seq(s__19084__$1);
if(temp__4404__auto__){
var s__19084__$2 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19084__$2)){
var c__4869__auto__ = cljs.core.chunk_first(s__19084__$2);
var size__4870__auto__ = cljs.core.count(c__4869__auto__);
var b__19086 = cljs.core.chunk_buffer(size__4870__auto__);
if((function (){var i__19085 = (0);
while(true){
if((i__19085 < size__4870__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4869__auto__,i__19085);
var id = (function (){var G__19093 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19093) : f.call(null,G__19093));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__19094 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19094) : cljs.core.deref.call(null,G__19094));
})(),id))){
cljs.core.chunk_append(b__19086,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__19097 = (i__19085 + (1));
i__19085 = G__19097;
continue;
} else {
var G__19098 = (i__19085 + (1));
i__19085 = G__19098;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19086),plumbing$core$distinct_by_$_iter__19083(cljs.core.chunk_rest(s__19084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19086),null);
}
} else {
var x = cljs.core.first(s__19084__$2);
var id = (function (){var G__19095 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19095) : f.call(null,G__19095));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__19096 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19096) : cljs.core.deref.call(null,G__19096));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__19083(cljs.core.rest(s__19084__$2)));
} else {
var G__19099 = cljs.core.rest(s__19084__$2);
s__19084__$1 = G__19099;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4871__auto__(xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var argseq__5153__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5153__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq19100){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19100));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(){
var G__19106 = arguments.length;
switch (G__19106) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5165__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__19108 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__19109 = cljs.core.first(xs);
var G__19110 = cljs.core.next(xs);
coll = G__19108;
x = G__19109;
xs = G__19110;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq19102){
var G__19103 = cljs.core.first(seq19102);
var seq19102__$1 = cljs.core.next(seq19102);
var G__19104 = cljs.core.first(seq19102__$1);
var seq19102__$2 = cljs.core.next(seq19102__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__19103,G__19104,seq19102__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = 2;
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(){
var G__19116 = arguments.length;
switch (G__19116) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5165__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = (function (){var G__19117 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19117) : cljs.core.deref.call(null,G__19117));
})();
var new_val = (function (){var G__19118 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19118) : f.call(null,G__19118));
})();
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__19111_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__19111_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq19112){
var G__19113 = cljs.core.first(seq19112);
var seq19112__$1 = cljs.core.next(seq19112);
var G__19114 = cljs.core.first(seq19112__$1);
var seq19112__$2 = cljs.core.next(seq19112__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19113,G__19114,seq19112__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(){
var G__19124 = arguments.length;
switch (G__19124) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5165__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,2),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5165__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq19120){
var G__19121 = cljs.core.first(seq19120);
var seq19120__$1 = cljs.core.next(seq19120);
var G__19122 = cljs.core.first(seq19120__$1);
var seq19120__$2 = cljs.core.next(seq19120__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__19121,G__19122,seq19120__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = 2;
