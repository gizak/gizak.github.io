// Compiled by ClojureScript 0.0-3196 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj16805 = {};
return obj16805;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.display_name[(function (){var G__16809 = x__4753__auto__;
return goog.typeOf(G__16809);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.display_name["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj16811 = {};
return obj16811;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.init_state[(function (){var G__16815 = x__4753__auto__;
return goog.typeOf(G__16815);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.init_state["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj16817 = {};
return obj16817;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.should_update[(function (){var G__16821 = x__4753__auto__;
return goog.typeOf(G__16821);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.should_update["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj16823 = {};
return obj16823;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.will_mount[(function (){var G__16827 = x__4753__auto__;
return goog.typeOf(G__16827);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.will_mount["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj16829 = {};
return obj16829;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.did_mount[(function (){var G__16833 = x__4753__auto__;
return goog.typeOf(G__16833);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.did_mount["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj16835 = {};
return obj16835;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.will_unmount[(function (){var G__16839 = x__4753__auto__;
return goog.typeOf(G__16839);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.will_unmount["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj16841 = {};
return obj16841;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.will_update[(function (){var G__16845 = x__4753__auto__;
return goog.typeOf(G__16845);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.will_update["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj16847 = {};
return obj16847;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.did_update[(function (){var G__16851 = x__4753__auto__;
return goog.typeOf(G__16851);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.did_update["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj16853 = {};
return obj16853;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.will_receive_props[(function (){var G__16857 = x__4753__auto__;
return goog.typeOf(G__16857);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj16859 = {};
return obj16859;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.render[(function (){var G__16863 = x__4753__auto__;
return goog.typeOf(G__16863);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.render["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj16865 = {};
return obj16865;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.render_props[(function (){var G__16869 = x__4753__auto__;
return goog.typeOf(G__16869);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.render_props["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj16871 = {};
return obj16871;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core.render_state[(function (){var G__16875 = x__4753__auto__;
return goog.typeOf(G__16875);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core.render_state["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj16877 = {};
return obj16877;
})();


om.core.IOmSwap = (function (){var obj16879 = {};
return obj16879;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._om_swap_BANG_[(function (){var G__16883 = x__4753__auto__;
return goog.typeOf(G__16883);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj16885 = {};
return obj16885;
})();

om.core._get_state = (function om$core$_get_state(){
var G__16887 = arguments.length;
switch (G__16887) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._get_state[(function (){var G__16889 = x__4753__auto__;
return goog.typeOf(G__16889);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._get_state["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._get_state[(function (){var G__16891 = x__4753__auto__;
return goog.typeOf(G__16891);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._get_state["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = (function (){var obj16894 = {};
return obj16894;
})();

om.core._get_render_state = (function om$core$_get_render_state(){
var G__16896 = arguments.length;
switch (G__16896) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._get_render_state[(function (){var G__16898 = x__4753__auto__;
return goog.typeOf(G__16898);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._get_render_state["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._get_render_state[(function (){var G__16900 = x__4753__auto__;
return goog.typeOf(G__16900);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._get_render_state["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = (function (){var obj16903 = {};
return obj16903;
})();

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var G__16905 = arguments.length;
switch (G__16905) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._set_state_BANG_[(function (){var G__16907 = x__4753__auto__;
return goog.typeOf(G__16907);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._set_state_BANG_[(function (){var G__16909 = x__4753__auto__;
return goog.typeOf(G__16909);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = (function (){var obj16912 = {};
return obj16912;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._get_queue[(function (){var G__16916 = x__4753__auto__;
return goog.typeOf(G__16916);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._get_queue["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._queue_render_BANG_[(function (){var G__16920 = x__4753__auto__;
return goog.typeOf(G__16920);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._empty_queue_BANG_[(function (){var G__16924 = x__4753__auto__;
return goog.typeOf(G__16924);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj16926 = {};
return obj16926;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4105__auto__ = x;
if(and__4105__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4105__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4753__auto__ = (((x == null))?null:x);
return (function (){var or__4117__auto__ = (om.core._value[(function (){var G__16930 = x__4753__auto__;
return goog.typeOf(G__16930);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._value["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj16932 = {};
return obj16932;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4105__auto__ = cursor;
if(and__4105__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4105__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4753__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4117__auto__ = (om.core._path[(function (){var G__16936 = x__4753__auto__;
return goog.typeOf(G__16936);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._path["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4105__auto__ = cursor;
if(and__4105__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4105__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4753__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4117__auto__ = (om.core._state[(function (){var G__16940 = x__4753__auto__;
return goog.typeOf(G__16940);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._state["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj16942 = {};
return obj16942;
})();

om.core._to_cursor = (function om$core$_to_cursor(){
var G__16944 = arguments.length;
switch (G__16944) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((function (){var and__4105__auto__ = value;
if(and__4105__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4105__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4753__auto__ = (((value == null))?null:value);
return (function (){var or__4117__auto__ = (om.core._to_cursor[(function (){var G__16946 = x__4753__auto__;
return goog.typeOf(G__16946);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._to_cursor["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((function (){var and__4105__auto__ = value;
if(and__4105__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4105__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4753__auto__ = (((value == null))?null:value);
return (function (){var or__4117__auto__ = (om.core._to_cursor[(function (){var G__16948 = x__4753__auto__;
return goog.typeOf(G__16948);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._to_cursor["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = (function (){var obj16951 = {};
return obj16951;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4105__auto__ = cursor;
if(and__4105__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4105__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4753__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4117__auto__ = (om.core._derive[(function (){var G__16955 = x__4753__auto__;
return goog.typeOf(G__16955);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._derive["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__16956 = derived;
var G__16957 = state;
var G__16958 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__16956,G__16957,G__16958) : om.core.to_cursor.call(null,G__16956,G__16957,G__16958));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj16960 = {};
return obj16960;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4105__auto__ = cursor;
if(and__4105__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4105__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4753__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4117__auto__ = (om.core._transact_BANG_[(function (){var G__16964 = x__4753__auto__;
return goog.typeOf(G__16964);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj16966 = {};
return obj16966;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4105__auto__ = x;
if(and__4105__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4105__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4753__auto__ = (((x == null))?null:x);
return (function (){var or__4117__auto__ = (om.core._listen_BANG_[(function (){var G__16970 = x__4753__auto__;
return goog.typeOf(G__16970);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4105__auto__ = x;
if(and__4105__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4105__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4753__auto__ = (((x == null))?null:x);
return (function (){var or__4117__auto__ = (om.core._unlisten_BANG_[(function (){var G__16974 = x__4753__auto__;
return goog.typeOf(G__16974);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4105__auto__ = x;
if(and__4105__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4105__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4753__auto__ = (((x == null))?null:x);
return (function (){var or__4117__auto__ = (om.core._notify_BANG_[(function (){var G__16978 = x__4753__auto__;
return goog.typeOf(G__16978);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj16980 = {};
return obj16980;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._set_property_BANG_[(function (){var G__16984 = x__4753__auto__;
return goog.typeOf(G__16984);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._remove_property_BANG_[(function (){var G__16988 = x__4753__auto__;
return goog.typeOf(G__16988);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._remove_properties_BANG_[(function (){var G__16992 = x__4753__auto__;
return goog.typeOf(G__16992);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._get_property[(function (){var G__16996 = x__4753__auto__;
return goog.typeOf(G__16996);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._get_property["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj16998 = {};
return obj16998;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4105__auto__ = cursor;
if(and__4105__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4105__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4753__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4117__auto__ = (om.core._root_key[(function (){var G__17002 = x__4753__auto__;
return goog.typeOf(G__17002);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._root_key["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj17004 = {};
return obj17004;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._adapt[(function (){var G__17008 = x__4753__auto__;
return goog.typeOf(G__17008);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._adapt["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj17010 = {};
return obj17010;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._add_dep_BANG_[(function (){var G__17014 = x__4753__auto__;
return goog.typeOf(G__17014);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._remove_dep_BANG_[(function (){var G__17018 = x__4753__auto__;
return goog.typeOf(G__17018);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__17022 = x__4753__auto__;
return goog.typeOf(G__17022);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4105__auto__ = this$;
if(and__4105__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4105__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4753__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4117__auto__ = (om.core._get_deps[(function (){var G__17026 = x__4753__auto__;
return goog.typeOf(G__17026);
})()]);
if(or__4117__auto__){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = (om.core._get_deps["_"]);
if(or__4117__auto____$1){
return or__4117__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__17036 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17036) : cljs.core.deref.call(null,G__17036));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__17037 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17037) : om.core.path.call(null,G__17037));
})(),korks);
var ret = (((function (){var G__17038 = state;
if(G__17038){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17038.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__17038.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__17038);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__17038);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$path,path,cljs.core.constant$keyword$old_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$new_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17039 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17039) : cljs.core.deref.call(null,G__17039));
})(),path),cljs.core.constant$keyword$old_DASH_state,old_state,cljs.core.constant$keyword$new_DASH_state,(function (){var G__17040 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17040) : cljs.core.deref.call(null,G__17040));
})()], null);
if(!((tag == null))){
var G__17041 = cursor;
var G__17042 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__17041,G__17042) : om.core.notify_STAR_.call(null,G__17041,G__17042));
} else {
var G__17043 = cursor;
var G__17044 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__17043,G__17044) : om.core.notify_STAR_.call(null,G__17043,G__17044));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__17046 = x;
if(G__17046){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17046.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__17046.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__17046);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__17046);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__17048 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__17048) : c.call(null,G__17048));
})();
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var G__17050 = arguments.length;
switch (G__17050) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__17051 = (x.props["__om_cursor"]);
var G__17051__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__17051,korks__$1):G__17051);
return G__17051__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var G__17054 = arguments.length;
switch (G__17054) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var G__17057 = arguments.length;
switch (G__17057) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4404__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4404__auto__)){
var pending_state = temp__4404__auto__;
var G__17060 = state;
(G__17060["__om_prev_state"] = (state["__om_state"]));

(G__17060["__om_state"] = pending_state);

(G__17060["__om_pending_state"] = null);

return G__17060;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var G__17062 = arguments.length;
switch (G__17062) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__4117__auto__ = props;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return owner.props;
}
})();
var temp__4404__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4404__auto__)){
var props_state = temp__4404__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4117__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17066 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17066) : cljs.core.deref.call(null,G__17066));
})(),(function (){var G__17067 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17067) : om.core.path.call(null,G__17067));
})(),cljs.core.constant$keyword$om$core_SLASH_not_DASH_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__17073 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17073) : om.core.path.call(null,G__17073));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17074 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17074) : cljs.core.deref.call(null,G__17074));
})(),ref_path,cljs.core.constant$keyword$om$core_SLASH_not_DASH_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$om$core_SLASH_not_DASH_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__17075 = ref_val_SINGLEQUOTE_;
var G__17076 = ref_state;
var G__17077 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__17075,G__17076,G__17077) : om.core.to_cursor.call(null,G__17075,G__17076,G__17077));
})());
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$componentDidUpdate,cljs.core.constant$keyword$isOmComponent,cljs.core.constant$keyword$componentWillUnmount,cljs.core.constant$keyword$componentWillReceiveProps,cljs.core.constant$keyword$shouldComponentUpdate,cljs.core.constant$keyword$render,cljs.core.constant$keyword$componentWillUpdate,cljs.core.constant$keyword$getInitialState,cljs.core.constant$keyword$componentDidMount,cljs.core.constant$keyword$getDisplayName,cljs.core.constant$keyword$componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__17079 = c;
if(G__17079){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17079.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__17079.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__17079);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__17079);
}
})()){
var state_17104 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__4117__auto__ = (state_17104["__om_prev_state"]);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return (state_17104["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__17080 = c;
if(G__17080){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17080.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__17080.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__17080);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__17080);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4404__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4404__auto__){
var refs = temp__4404__auto__;
var seq__17081 = cljs.core.seq(refs);
var chunk__17082 = null;
var count__17083 = (0);
var i__17084 = (0);
while(true){
if((i__17084 < count__17083)){
var ref = chunk__17082.cljs$core$IIndexed$_nth$arity$2(null,i__17084);
var G__17085_17105 = this$;
var G__17086_17106 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__17085_17105,G__17086_17106) : om.core.unobserve.call(null,G__17085_17105,G__17086_17106));

var G__17107 = seq__17081;
var G__17108 = chunk__17082;
var G__17109 = count__17083;
var G__17110 = (i__17084 + (1));
seq__17081 = G__17107;
chunk__17082 = G__17108;
count__17083 = G__17109;
i__17084 = G__17110;
continue;
} else {
var temp__4404__auto____$1 = cljs.core.seq(seq__17081);
if(temp__4404__auto____$1){
var seq__17081__$1 = temp__4404__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17081__$1)){
var c__4902__auto__ = cljs.core.chunk_first(seq__17081__$1);
var G__17111 = cljs.core.chunk_rest(seq__17081__$1);
var G__17112 = c__4902__auto__;
var G__17113 = cljs.core.count(c__4902__auto__);
var G__17114 = (0);
seq__17081 = G__17111;
chunk__17082 = G__17112;
count__17083 = G__17113;
i__17084 = G__17114;
continue;
} else {
var ref = cljs.core.first(seq__17081__$1);
var G__17087_17115 = this$;
var G__17088_17116 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__17087_17115,G__17088_17116) : om.core.unobserve.call(null,G__17087_17115,G__17088_17116));

var G__17117 = cljs.core.next(seq__17081__$1);
var G__17118 = null;
var G__17119 = (0);
var G__17120 = (0);
seq__17081 = G__17117;
chunk__17082 = G__17118;
count__17083 = G__17119;
i__17084 = G__17120;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__17089 = c;
if(G__17089){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17089.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__17089.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__17089);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__17089);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__17090 = c;
if(G__17090){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17090.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__17090.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__17090);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__17090);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4105__auto__ = om.core.cursor_QMARK_(cursor);
if(cljs.core.truth_(and__4105__auto__)){
var and__4105__auto____$1 = om.core.cursor_QMARK_(next_cursor);
if(cljs.core.truth_(and__4105__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor));
} else {
return and__4105__auto____$1;
}
} else {
return and__4105__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__4105__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__4105__auto__){
return cljs.core.some(((function (and__4105__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__17078_SHARP_){
return om.core.ref_changed_QMARK_(p1__17078_SHARP_);
});})(and__4105__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4105__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_17091 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_17092 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_17093 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_17094 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_17095 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__17096 = c;
if(G__17096){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17096.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__17096.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__17096);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__17096);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__17097 = c;
if(G__17097){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17097.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__17097.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__17097);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__17097);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__17098 = c;
if(G__17098){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17098.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__17098.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__17098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__17098);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_17095;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_17094;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_17093;

om.core._STAR_state_STAR_ = _STAR_state_STAR_17092;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_17091;
}}),(function (next_props,next_state){
var this$ = this;
var c_17121 = om.core.children(this$);
if((function (){var G__17099 = c_17121;
if(G__17099){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17099.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__17099.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__17099);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__17099);
}
})()){
var state_17122 = this$.state;
om.core.will_update(c_17121,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4117__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4117__auto__ = id;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__17100 = c;
if(G__17100){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17100.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__17100.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__17100);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__17100);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$om$core_SLASH_id)], 0))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__17101 = c;
if(G__17101){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17101.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__17101.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__17101);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__17101);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__17102 = c;
if(G__17102){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17102.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__17102.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__17102);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__17102);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_17123 = om.core.children(this$);
if((function (){var G__17103 = c_17123;
if(G__17103){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17103.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__17103.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__17103);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__17103);
}
})()){
om.core.will_mount(c_17123);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x17125 = obj;
x17125.om$core$ISetState$ = true;

x17125.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x17125){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4105__auto__ = !((app_state == null));
if(and__4105__auto__){
return render;
} else {
return and__4105__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x17125))
;

x17125.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x17125){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__4105__auto__ = !((app_state == null));
if(and__4105__auto__){
return render;
} else {
return and__4105__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x17125))
;

x17125.om$core$IGetRenderState$ = true;

x17125.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x17125){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x17125))
;

x17125.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x17125){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17125))
;

x17125.om$core$IGetState$ = true;

x17125.om$core$IGetState$_get_state$arity$1 = ((function (x17125){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4117__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return (state["__om_state"]);
}
});})(x17125))
;

x17125.om$core$IGetState$_get_state$arity$2 = ((function (x17125){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17125))
;

return x17125;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state_DASH_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17127 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17127) : cljs.core.deref.call(null,G__17127));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$previous_DASH_state,cljs.core.constant$keyword$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$render_DASH_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$pending_DASH_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4117__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4117__auto__ = cljs.core.constant$keyword$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$om$core_SLASH_id),(((function (){var G__17128 = c;
if(G__17128){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17128.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__17128.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__17128);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__17128);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state_DASH_map,om.core.react_id(this$),cljs.core.constant$keyword$render_DASH_state], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_17142 = om.core.children(this$);
if((function (){var G__17129 = c_17142;
if(G__17129){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17129.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__17129.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__17129);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__17129);
}
})()){
om.core.will_mount(c_17142);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__17130 = c;
if(G__17130){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17130.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__17130.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__17130);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__17130);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state_DASH_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4404__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4404__auto__){
var refs = temp__4404__auto__;
var seq__17131 = cljs.core.seq(refs);
var chunk__17132 = null;
var count__17133 = (0);
var i__17134 = (0);
while(true){
if((i__17134 < count__17133)){
var ref = chunk__17132.cljs$core$IIndexed$_nth$arity$2(null,i__17134);
var G__17135_17143 = this$;
var G__17136_17144 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__17135_17143,G__17136_17144) : om.core.unobserve.call(null,G__17135_17143,G__17136_17144));

var G__17145 = seq__17131;
var G__17146 = chunk__17132;
var G__17147 = count__17133;
var G__17148 = (i__17134 + (1));
seq__17131 = G__17145;
chunk__17132 = G__17146;
count__17133 = G__17147;
i__17134 = G__17148;
continue;
} else {
var temp__4404__auto____$1 = cljs.core.seq(seq__17131);
if(temp__4404__auto____$1){
var seq__17131__$1 = temp__4404__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17131__$1)){
var c__4902__auto__ = cljs.core.chunk_first(seq__17131__$1);
var G__17149 = cljs.core.chunk_rest(seq__17131__$1);
var G__17150 = c__4902__auto__;
var G__17151 = cljs.core.count(c__4902__auto__);
var G__17152 = (0);
seq__17131 = G__17149;
chunk__17132 = G__17150;
count__17133 = G__17151;
i__17134 = G__17152;
continue;
} else {
var ref = cljs.core.first(seq__17131__$1);
var G__17137_17153 = this$;
var G__17138_17154 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__17137_17153,G__17138_17154) : om.core.unobserve.call(null,G__17137_17153,G__17138_17154));

var G__17155 = cljs.core.next(seq__17131__$1);
var G__17156 = null;
var G__17157 = (0);
var G__17158 = (0);
seq__17131 = G__17155;
chunk__17132 = G__17156;
count__17133 = G__17157;
i__17134 = G__17158;
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
}),cljs.core.constant$keyword$componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_17159 = this$.props;
var c_17160 = om.core.children(this$);
if((function (){var G__17139 = c_17160;
if(G__17139){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17139.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__17139.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__17139);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__17139);
}
})()){
var state_17161 = this$.state;
om.core.will_update(c_17160,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17140 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17140) : cljs.core.deref.call(null,G__17140));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state_DASH_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state_DASH_map,om.core.react_id(this$)], null);
if((function (){var G__17141 = c;
if(G__17141){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17141.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__17141.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__17141);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__17141);
}
})()){
var state_17162 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__4117__auto__ = cljs.core.constant$keyword$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.constant$keyword$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$previous_DASH_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x17166 = cljs.core.clj__GT_js(methods$);
x17166.om$core$ISetState$ = true;

x17166.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x17166){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state_DASH_map,om.core.react_id(this$__$1),cljs.core.constant$keyword$pending_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4105__auto__ = !((gstate == null));
if(and__4105__auto__){
return render;
} else {
return and__4105__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x17166))
;

x17166.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x17166){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x17166))
;

x17166.om$core$IGetRenderState$ = true;

x17166.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x17166){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state_DASH_map,om.core.react_id(this$__$1),cljs.core.constant$keyword$render_DASH_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17167 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17167) : cljs.core.deref.call(null,G__17167));
})(),spath);
});})(x17166))
;

x17166.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x17166){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17166))
;

x17166.om$core$IGetState$ = true;

x17166.om$core$IGetState$_get_state$arity$1 = ((function (x17166){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state_DASH_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17168 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17168) : cljs.core.deref.call(null,G__17168));
})(),spath);
var or__4117__auto__ = cljs.core.constant$keyword$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.constant$keyword$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x17166))
;

x17166.om$core$IGetState$_get_state$arity$2 = ((function (x17166){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x17166))
;

return x17166;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__17171 = x;
if(G__17171){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17171.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__17171.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__17171);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__17171);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__17172 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17172) : cljs.core.deref.call(null,G__17172));
})(),cljs.core.constant$keyword$om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$om$core_SLASH_not_DASH_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$om$core_SLASH_not_DASH_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__17174){
var vec__17175 = p__17174;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17175,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__17177 = null;
var G__17177__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__17177__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__17177 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17177__2.call(this,self__,k);
case 3:
return G__17177__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17177.cljs$core$IFn$_invoke$arity$2 = G__17177__2;
G__17177.cljs$core$IFn$_invoke$arity$3 = G__17177__3;
return G__17177;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args17173){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17173)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17176 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17176) : cljs.core.deref.call(null,G__17176));
})(),self__.path,cljs.core.constant$keyword$om$core_SLASH_invalid);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4696__auto__,writer__4697__auto__,opt__4698__auto__){
return cljs.core._write(writer__4697__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__17180 = null;
var G__17180__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__17180__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__17180 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17180__2.call(this,self__,k);
case 3:
return G__17180__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17180.cljs$core$IFn$_invoke$arity$2 = G__17180__2;
G__17180.cljs$core$IFn$_invoke$arity$3 = G__17180__3;
return G__17180;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args17178){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17178)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17179 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17179) : cljs.core.deref.call(null,G__17179));
})(),self__.path,cljs.core.constant$keyword$om$core_SLASH_invalid);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4696__auto__,writer__4697__auto__,opt__4698__auto__){
return cljs.core._write(writer__4697__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x17183 = cljs.core.clone(val);
x17183.cljs$core$IDeref$ = true;

x17183.cljs$core$IDeref$_deref$arity$1 = ((function (x17183){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__17184 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17184) : cljs.core.deref.call(null,G__17184));
})(),path,cljs.core.constant$keyword$om$core_SLASH_invalid);
});})(x17183))
;

x17183.om$core$ICursor$ = true;

x17183.om$core$ICursor$_path$arity$1 = ((function (x17183){
return (function (_){
var ___$1 = this;
return path;
});})(x17183))
;

x17183.om$core$ICursor$_state$arity$1 = ((function (x17183){
return (function (_){
var ___$1 = this;
return state;
});})(x17183))
;

x17183.om$core$ITransact$ = true;

x17183.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17183){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x17183))
;

x17183.cljs$core$IEquiv$ = true;

x17183.cljs$core$IEquiv$_equiv$arity$2 = ((function (x17183){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x17183))
;

return x17183;
});
om.core.to_cursor = (function om$core$to_cursor(){
var G__17186 = arguments.length;
switch (G__17186) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_(val))){
return val;
} else {
if((function (){var G__17187 = val;
if(G__17187){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17187.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__17187.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__17187);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__17187);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__17188 = val;
if(G__17188){
var bit__4791__auto__ = (G__17188.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4791__auto__) || (G__17188.cljs$core$ICloneable$)){
return true;
} else {
if((!G__17188.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__17188);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__17188);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__17191 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17191) : cljs.core.deref.call(null,G__17191));
})(),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__17193 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17193) : cljs.core.deref.call(null,G__17193));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__17194 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17194) : cljs.core.atom.call(null,G__17194));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x17203 = cljs.core.clone(x);
x17203.cljs$core$ICloneable$ = true;

x17203.cljs$core$ICloneable$_clone$arity$1 = ((function (x17203){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x17203))
;

x17203.om$core$IAdapt$ = true;

x17203.om$core$IAdapt$_adapt$arity$2 = ((function (x17203){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x17203))
;

x17203.om$core$ICursorDerive$ = true;

x17203.om$core$ICursorDerive$_derive$arity$4 = ((function (x17203){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x17203))
;

x17203.om$core$ITransact$ = true;

x17203.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17203){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__17204_17207 = cursor__$1;
var G__17205_17208 = korks;
var G__17206_17209 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__17204_17207,G__17205_17208,G__17206_17209) : om.core.commit_BANG_.call(null,G__17204_17207,G__17205_17208,G__17206_17209));

return om.core._refresh_deps_BANG_(parent);
});})(x17203))
;

return x17203;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){

if((function (){var G__17225 = cursor;
if(G__17225){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17225.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__17225.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__17225);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__17225);
}
})()){
return cursor;
} else {
var path = (function (){var G__17226 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17226) : om.core.path.call(null,G__17226));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__17227 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17227) : cljs.core.atom.call(null,G__17227));
})())),path);
var x17228 = cljs.core.clone(cursor);
x17228.om$core$ICursorDerive$ = true;

x17228.om$core$ICursorDerive$_derive$arity$4 = ((function (x17228,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x17228,path,storage))
;

x17228.om$core$IOmRef$ = true;

x17228.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x17228,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__17229 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__17229) : om.core.id.call(null,G__17229));
})(),c);
});})(x17228,path,storage))
;

x17228.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x17228,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__17230 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__17230) : om.core.id.call(null,G__17230));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x17228,path,storage))
;

x17228.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x17228,path,storage){
return (function (_){
var ___$1 = this;
var seq__17231 = cljs.core.seq(cljs.core.vals((function (){var G__17235 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17235) : cljs.core.deref.call(null,G__17235));
})()));
var chunk__17232 = null;
var count__17233 = (0);
var i__17234 = (0);
while(true){
if((i__17234 < count__17233)){
var c = chunk__17232.cljs$core$IIndexed$_nth$arity$2(null,i__17234);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__17240 = seq__17231;
var G__17241 = chunk__17232;
var G__17242 = count__17233;
var G__17243 = (i__17234 + (1));
seq__17231 = G__17240;
chunk__17232 = G__17241;
count__17233 = G__17242;
i__17234 = G__17243;
continue;
} else {
var temp__4404__auto__ = cljs.core.seq(seq__17231);
if(temp__4404__auto__){
var seq__17231__$1 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17231__$1)){
var c__4902__auto__ = cljs.core.chunk_first(seq__17231__$1);
var G__17244 = cljs.core.chunk_rest(seq__17231__$1);
var G__17245 = c__4902__auto__;
var G__17246 = cljs.core.count(c__4902__auto__);
var G__17247 = (0);
seq__17231 = G__17244;
chunk__17232 = G__17245;
count__17233 = G__17246;
i__17234 = G__17247;
continue;
} else {
var c = cljs.core.first(seq__17231__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__17248 = cljs.core.next(seq__17231__$1);
var G__17249 = null;
var G__17250 = (0);
var G__17251 = (0);
seq__17231 = G__17248;
chunk__17232 = G__17249;
count__17233 = G__17250;
i__17234 = G__17251;
continue;
}
} else {
return null;
}
}
break;
}
});})(x17228,path,storage))
;

x17228.om$core$IOmRef$_get_deps$arity$1 = ((function (x17228,path,storage){
return (function (_){
var ___$1 = this;
var G__17236 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17236) : cljs.core.deref.call(null,G__17236));
});})(x17228,path,storage))
;

x17228.om$core$ITransact$ = true;

x17228.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17228,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__17237_17252 = cursor__$2;
var G__17238_17253 = korks;
var G__17239_17254 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__17237_17252,G__17238_17253,G__17239_17254) : om.core.commit_BANG_.call(null,G__17237_17252,G__17238_17253,G__17239_17254));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x17228,path,storage))
;

return x17228;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4117__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){


om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__17255 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17255) : cljs.core.atom.call(null,G__17255));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__4117__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var G__17257 = arguments.length;
switch (G__17257) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__17258_17264 = cljs.core.seq((function (){var G__17262 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17262) : cljs.core.deref.call(null,G__17262));
})());
var chunk__17259_17265 = null;
var count__17260_17266 = (0);
var i__17261_17267 = (0);
while(true){
if((i__17261_17267 < count__17260_17266)){
var f_17268 = chunk__17259_17265.cljs$core$IIndexed$_nth$arity$2(null,i__17261_17267);
(f_17268.cljs$core$IFn$_invoke$arity$0 ? f_17268.cljs$core$IFn$_invoke$arity$0() : f_17268.call(null));

var G__17269 = seq__17258_17264;
var G__17270 = chunk__17259_17265;
var G__17271 = count__17260_17266;
var G__17272 = (i__17261_17267 + (1));
seq__17258_17264 = G__17269;
chunk__17259_17265 = G__17270;
count__17260_17266 = G__17271;
i__17261_17267 = G__17272;
continue;
} else {
var temp__4404__auto___17273 = cljs.core.seq(seq__17258_17264);
if(temp__4404__auto___17273){
var seq__17258_17274__$1 = temp__4404__auto___17273;
if(cljs.core.chunked_seq_QMARK_(seq__17258_17274__$1)){
var c__4902__auto___17275 = cljs.core.chunk_first(seq__17258_17274__$1);
var G__17276 = cljs.core.chunk_rest(seq__17258_17274__$1);
var G__17277 = c__4902__auto___17275;
var G__17278 = cljs.core.count(c__4902__auto___17275);
var G__17279 = (0);
seq__17258_17264 = G__17276;
chunk__17259_17265 = G__17277;
count__17260_17266 = G__17278;
i__17261_17267 = G__17279;
continue;
} else {
var f_17280 = cljs.core.first(seq__17258_17274__$1);
(f_17280.cljs$core$IFn$_invoke$arity$0 ? f_17280.cljs$core$IFn$_invoke$arity$0() : f_17280.call(null));

var G__17281 = cljs.core.next(seq__17258_17274__$1);
var G__17282 = null;
var G__17283 = (0);
var G__17284 = (0);
seq__17258_17264 = G__17281;
chunk__17259_17265 = G__17282;
count__17260_17266 = G__17283;
i__17261_17267 = G__17284;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = (function (){var G__17285 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17285) : cljs.core.atom.call(null,G__17285));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
return null;
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$descriptor,null,cljs.core.constant$keyword$fn,null,cljs.core.constant$keyword$instrument,null,cljs.core.constant$keyword$react_DASH_key,null,cljs.core.constant$keyword$key,null,cljs.core.constant$keyword$init_DASH_state,null,cljs.core.constant$keyword$state,null,cljs.core.constant$keyword$key_DASH_fn,null,cljs.core.constant$keyword$opts,null,cljs.core.constant$keyword$om$core_SLASH_index,null,cljs.core.constant$keyword$shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var G__17287 = arguments.length;
switch (G__17287) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__17288 = (function (){var G__17289 = (function (){var or__4117__auto__ = descriptor;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
var or__4117__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4117__auto____$1)){
return or__4117__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__17289);
})();
return React.createFactory(G__17288);
})());
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var G__17292 = arguments.length;
switch (G__17292) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var G__17295 = arguments.length;
switch (G__17295) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){



if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__17296 = {"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__17297 = cursor;
var G__17298 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17297,G__17298) : f.call(null,G__17297,G__17298));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__17296) : ctor.call(null,G__17296));
} else {
var map__17299 = m;
var map__17299__$1 = ((cljs.core.seq_QMARK_(map__17299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17299):map__17299);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17299__$1,cljs.core.constant$keyword$key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17299__$1,cljs.core.constant$keyword$key_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17299__$1,cljs.core.constant$keyword$state);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17299__$1,cljs.core.constant$keyword$init_DASH_state);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17299__$1,cljs.core.constant$keyword$opts);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4402__auto__ = cljs.core.constant$keyword$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4402__auto__)){
var i = temp__4402__auto__;
var G__17300 = cursor;
var G__17301 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__17300,G__17301) : dataf.call(null,G__17300,G__17301));
} else {
var G__17302 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__17302) : dataf.call(null,G__17302));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__17303 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__17303) : key_fn.call(null,G__17303));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$react_DASH_key)
));
var shared = (function (){var or__4117__auto__ = cljs.core.constant$keyword$shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__17304 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__17299,map__17299__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__17305 = cursor_SINGLEQUOTE_;
var G__17306 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17305,G__17306) : f.call(null,G__17305,G__17306));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__17299,map__17299__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__17299,map__17299__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__17307 = cursor_SINGLEQUOTE_;
var G__17308 = this$;
var G__17309 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17307,G__17308,G__17309) : f.call(null,G__17307,G__17308,G__17309));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__17299,map__17299__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4117__auto__ = rkey;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__17304) : ctor.call(null,G__17304));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var G__17312 = arguments.length;
switch (G__17312) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){


if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__17313 = f;
var G__17314 = x;
var G__17315 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__17313,G__17314,G__17315) : om.core._STAR_instrument_STAR_.call(null,G__17313,G__17314,G__17315));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var G__17318 = arguments.length;
switch (G__17318) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){


return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__17339 = state;
if(G__17339){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17339.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__17339.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__17339);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__17339);
}
})()){
} else {
var properties_17358 = (function (){var G__17340 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17340) : cljs.core.atom.call(null,G__17340));
})();
var listeners_17359 = (function (){var G__17341 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17341) : cljs.core.atom.call(null,G__17341));
})();
var render_queue_17360 = (function (){var G__17342 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17342) : cljs.core.atom.call(null,G__17342));
})();
var x17343_17361 = state;
x17343_17361.om$core$IRootProperties$ = true;

x17343_17361.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_17358,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_17358,cljs.core.dissoc,id,k);
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_17358,cljs.core.dissoc,id);
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$IRootProperties$_get_property$arity$3 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17344 = properties_17358;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17344) : cljs.core.deref.call(null,G__17344));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$INotify$ = true;

x17343_17361.om$core$INotify$_listen_BANG_$arity$3 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_17359,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_17359,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$INotify$_notify_BANG_$arity$3 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__17345_17362 = cljs.core.seq((function (){var G__17349 = listeners_17359;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17349) : cljs.core.deref.call(null,G__17349));
})());
var chunk__17346_17363 = null;
var count__17347_17364 = (0);
var i__17348_17365 = (0);
while(true){
if((i__17348_17365 < count__17347_17364)){
var vec__17350_17366 = chunk__17346_17363.cljs$core$IIndexed$_nth$arity$2(null,i__17348_17365);
var __17367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17350_17366,(0),null);
var f_17368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17350_17366,(1),null);
var G__17351_17369 = tx_data;
var G__17352_17370 = root_cursor;
(f_17368.cljs$core$IFn$_invoke$arity$2 ? f_17368.cljs$core$IFn$_invoke$arity$2(G__17351_17369,G__17352_17370) : f_17368.call(null,G__17351_17369,G__17352_17370));

var G__17371 = seq__17345_17362;
var G__17372 = chunk__17346_17363;
var G__17373 = count__17347_17364;
var G__17374 = (i__17348_17365 + (1));
seq__17345_17362 = G__17371;
chunk__17346_17363 = G__17372;
count__17347_17364 = G__17373;
i__17348_17365 = G__17374;
continue;
} else {
var temp__4404__auto___17375 = cljs.core.seq(seq__17345_17362);
if(temp__4404__auto___17375){
var seq__17345_17376__$1 = temp__4404__auto___17375;
if(cljs.core.chunked_seq_QMARK_(seq__17345_17376__$1)){
var c__4902__auto___17377 = cljs.core.chunk_first(seq__17345_17376__$1);
var G__17378 = cljs.core.chunk_rest(seq__17345_17376__$1);
var G__17379 = c__4902__auto___17377;
var G__17380 = cljs.core.count(c__4902__auto___17377);
var G__17381 = (0);
seq__17345_17362 = G__17378;
chunk__17346_17363 = G__17379;
count__17347_17364 = G__17380;
i__17348_17365 = G__17381;
continue;
} else {
var vec__17353_17382 = cljs.core.first(seq__17345_17376__$1);
var __17383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17353_17382,(0),null);
var f_17384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17353_17382,(1),null);
var G__17354_17385 = tx_data;
var G__17355_17386 = root_cursor;
(f_17384.cljs$core$IFn$_invoke$arity$2 ? f_17384.cljs$core$IFn$_invoke$arity$2(G__17354_17385,G__17355_17386) : f_17384.call(null,G__17354_17385,G__17355_17386));

var G__17387 = cljs.core.next(seq__17345_17376__$1);
var G__17388 = null;
var G__17389 = (0);
var G__17390 = (0);
seq__17345_17362 = G__17387;
chunk__17346_17363 = G__17388;
count__17347_17364 = G__17389;
i__17348_17365 = G__17390;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$IRenderQueue$ = true;

x17343_17361.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (this$){
var this$__$1 = this;
var G__17356 = render_queue_17360;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17356) : cljs.core.deref.call(null,G__17356));
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__17357 = render_queue_17360;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17357) : cljs.core.deref.call(null,G__17357));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_17360,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

x17343_17361.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x17343_17361,properties_17358,listeners_17359,render_queue_17360){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_17360,cljs.core.empty);
});})(x17343_17361,properties_17358,listeners_17359,render_queue_17360))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
var x17396 = cljs.core.clone(cursor);
x17396.cljs$core$ICloneable$ = true;

x17396.cljs$core$ICloneable$_clone$arity$1 = ((function (x17396){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x17396))
;

x17396.om$core$IAdapt$ = true;

x17396.om$core$IAdapt$_adapt$arity$2 = ((function (x17396){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x17396))
;

x17396.om$core$IRootKey$ = true;

x17396.om$core$IRootKey$_root_key$arity$1 = ((function (x17396){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x17396))
;

return x17396;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__17397){
var map__17486 = p__17397;
var map__17486__$1 = ((cljs.core.seq_QMARK_(map__17486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17486):map__17486);
var options = map__17486__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,cljs.core.constant$keyword$target);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,cljs.core.constant$keyword$tx_DASH_listen);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,cljs.core.constant$keyword$path);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,cljs.core.constant$keyword$instrument);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,cljs.core.constant$keyword$descriptor);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,cljs.core.constant$keyword$adapt);
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17486__$1,cljs.core.constant$keyword$raf);


var roots_SINGLEQUOTE__17574 = (function (){var G__17487 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17487) : cljs.core.deref.call(null,G__17487));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__17574,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__17574,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__17488 = value;
if(G__17488){
var bit__4791__auto__ = (G__17488.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4791__auto__) || (G__17488.cljs$core$IAtom$)){
return true;
} else {
if((!G__17488.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__17488);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__17488);
}
})())?value:(function (){var G__17489 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17489) : cljs.core.atom.call(null,G__17489));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4117__auto__ = adapt;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$target,cljs.core.array_seq([cljs.core.constant$keyword$tx_DASH_listen,cljs.core.constant$keyword$path,cljs.core.constant$keyword$adapt,cljs.core.constant$keyword$raf], 0));
var ret = (function (){var G__17490 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17490) : cljs.core.atom.call(null,G__17490));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (function (){var G__17530 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17530) : cljs.core.deref.call(null,G__17530));
})();
var cursor = (function (){var G__17531 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__17531) : adapt__$1.call(null,G__17531));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$skip_DASH_render_DASH_root))){
} else {
var c_17575 = om.dom.render((function (){var _STAR_descriptor_STAR_17532 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_17533 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_17534 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_17535 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_17535;

om.core._STAR_state_STAR_ = _STAR_state_STAR_17534;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_17533;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_17532;
}})(),target);
if(((function (){var G__17536 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17536) : cljs.core.deref.call(null,G__17536));
})() == null)){
var G__17537_17576 = ret;
var G__17538_17577 = c_17575;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17537_17576,G__17538_17577) : cljs.core.reset_BANG_.call(null,G__17537_17576,G__17538_17577));
} else {
}
}

var queue_17578 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_17578)){
} else {
var seq__17539_17579 = cljs.core.seq(queue_17578);
var chunk__17540_17580 = null;
var count__17541_17581 = (0);
var i__17542_17582 = (0);
while(true){
if((i__17542_17582 < count__17541_17581)){
var c_17583 = chunk__17540_17580.cljs$core$IIndexed$_nth$arity$2(null,i__17542_17582);
if(cljs.core.truth_(c_17583.isMounted())){
var temp__4404__auto___17584 = (c_17583.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4404__auto___17584)){
var next_props_17585 = temp__4404__auto___17584;
(c_17583.props["__om_cursor"] = next_props_17585);

(c_17583.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4117__auto__ = !((function (){var G__17544 = om.core.children(c_17583);
if(G__17544){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17544.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__17544.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__17544);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__17544);
}
})());
if(or__4117__auto__){
return or__4117__auto__;
} else {
return c_17583.shouldComponentUpdate(c_17583.props,c_17583.state);
}
})())){
c_17583.forceUpdate();
} else {
}
} else {
}

var G__17586 = seq__17539_17579;
var G__17587 = chunk__17540_17580;
var G__17588 = count__17541_17581;
var G__17589 = (i__17542_17582 + (1));
seq__17539_17579 = G__17586;
chunk__17540_17580 = G__17587;
count__17541_17581 = G__17588;
i__17542_17582 = G__17589;
continue;
} else {
var temp__4404__auto___17590 = cljs.core.seq(seq__17539_17579);
if(temp__4404__auto___17590){
var seq__17539_17591__$1 = temp__4404__auto___17590;
if(cljs.core.chunked_seq_QMARK_(seq__17539_17591__$1)){
var c__4902__auto___17592 = cljs.core.chunk_first(seq__17539_17591__$1);
var G__17593 = cljs.core.chunk_rest(seq__17539_17591__$1);
var G__17594 = c__4902__auto___17592;
var G__17595 = cljs.core.count(c__4902__auto___17592);
var G__17596 = (0);
seq__17539_17579 = G__17593;
chunk__17540_17580 = G__17594;
count__17541_17581 = G__17595;
i__17542_17582 = G__17596;
continue;
} else {
var c_17597 = cljs.core.first(seq__17539_17591__$1);
if(cljs.core.truth_(c_17597.isMounted())){
var temp__4404__auto___17598__$1 = (c_17597.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4404__auto___17598__$1)){
var next_props_17599 = temp__4404__auto___17598__$1;
(c_17597.props["__om_cursor"] = next_props_17599);

(c_17597.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4117__auto__ = !((function (){var G__17546 = om.core.children(c_17597);
if(G__17546){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17546.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__17546.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__17546);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__17546);
}
})());
if(or__4117__auto__){
return or__4117__auto__;
} else {
return c_17597.shouldComponentUpdate(c_17597.props,c_17597.state);
}
})())){
c_17597.forceUpdate();
} else {
}
} else {
}

var G__17600 = cljs.core.next(seq__17539_17591__$1);
var G__17601 = null;
var G__17602 = (0);
var G__17603 = (0);
seq__17539_17579 = G__17600;
chunk__17540_17580 = G__17601;
count__17541_17581 = G__17602;
i__17542_17582 = G__17603;
continue;
}
} else {
}
}
break;
}
}

var _refs_17604 = (function (){var G__17547 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17547) : cljs.core.deref.call(null,G__17547));
})();
if(cljs.core.empty_QMARK_(_refs_17604)){
} else {
var seq__17548_17605 = cljs.core.seq(_refs_17604);
var chunk__17549_17606 = null;
var count__17550_17607 = (0);
var i__17551_17608 = (0);
while(true){
if((i__17551_17608 < count__17550_17607)){
var vec__17552_17609 = chunk__17549_17606.cljs$core$IIndexed$_nth$arity$2(null,i__17551_17608);
var path_17610__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17552_17609,(0),null);
var cs_17611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17552_17609,(1),null);
var cs_17612__$1 = (function (){var G__17553 = cs_17611;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17553) : cljs.core.deref.call(null,G__17553));
})();
var seq__17554_17613 = cljs.core.seq(cs_17612__$1);
var chunk__17555_17614 = null;
var count__17556_17615 = (0);
var i__17557_17616 = (0);
while(true){
if((i__17557_17616 < count__17556_17615)){
var vec__17558_17617 = chunk__17555_17614.cljs$core$IIndexed$_nth$arity$2(null,i__17557_17616);
var id_17618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17558_17617,(0),null);
var c_17619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17558_17617,(1),null);
if(cljs.core.truth_(c_17619.shouldComponentUpdate(c_17619.props,c_17619.state))){
c_17619.forceUpdate();
} else {
}

var G__17620 = seq__17554_17613;
var G__17621 = chunk__17555_17614;
var G__17622 = count__17556_17615;
var G__17623 = (i__17557_17616 + (1));
seq__17554_17613 = G__17620;
chunk__17555_17614 = G__17621;
count__17556_17615 = G__17622;
i__17557_17616 = G__17623;
continue;
} else {
var temp__4404__auto___17624 = cljs.core.seq(seq__17554_17613);
if(temp__4404__auto___17624){
var seq__17554_17625__$1 = temp__4404__auto___17624;
if(cljs.core.chunked_seq_QMARK_(seq__17554_17625__$1)){
var c__4902__auto___17626 = cljs.core.chunk_first(seq__17554_17625__$1);
var G__17627 = cljs.core.chunk_rest(seq__17554_17625__$1);
var G__17628 = c__4902__auto___17626;
var G__17629 = cljs.core.count(c__4902__auto___17626);
var G__17630 = (0);
seq__17554_17613 = G__17627;
chunk__17555_17614 = G__17628;
count__17556_17615 = G__17629;
i__17557_17616 = G__17630;
continue;
} else {
var vec__17559_17631 = cljs.core.first(seq__17554_17625__$1);
var id_17632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559_17631,(0),null);
var c_17633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559_17631,(1),null);
if(cljs.core.truth_(c_17633.shouldComponentUpdate(c_17633.props,c_17633.state))){
c_17633.forceUpdate();
} else {
}

var G__17634 = cljs.core.next(seq__17554_17625__$1);
var G__17635 = null;
var G__17636 = (0);
var G__17637 = (0);
seq__17554_17613 = G__17634;
chunk__17555_17614 = G__17635;
count__17556_17615 = G__17636;
i__17557_17616 = G__17637;
continue;
}
} else {
}
}
break;
}

var G__17638 = seq__17548_17605;
var G__17639 = chunk__17549_17606;
var G__17640 = count__17550_17607;
var G__17641 = (i__17551_17608 + (1));
seq__17548_17605 = G__17638;
chunk__17549_17606 = G__17639;
count__17550_17607 = G__17640;
i__17551_17608 = G__17641;
continue;
} else {
var temp__4404__auto___17642 = cljs.core.seq(seq__17548_17605);
if(temp__4404__auto___17642){
var seq__17548_17643__$1 = temp__4404__auto___17642;
if(cljs.core.chunked_seq_QMARK_(seq__17548_17643__$1)){
var c__4902__auto___17644 = cljs.core.chunk_first(seq__17548_17643__$1);
var G__17645 = cljs.core.chunk_rest(seq__17548_17643__$1);
var G__17646 = c__4902__auto___17644;
var G__17647 = cljs.core.count(c__4902__auto___17644);
var G__17648 = (0);
seq__17548_17605 = G__17645;
chunk__17549_17606 = G__17646;
count__17550_17607 = G__17647;
i__17551_17608 = G__17648;
continue;
} else {
var vec__17560_17649 = cljs.core.first(seq__17548_17643__$1);
var path_17650__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17560_17649,(0),null);
var cs_17651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17560_17649,(1),null);
var cs_17652__$1 = (function (){var G__17561 = cs_17651;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17561) : cljs.core.deref.call(null,G__17561));
})();
var seq__17562_17653 = cljs.core.seq(cs_17652__$1);
var chunk__17563_17654 = null;
var count__17564_17655 = (0);
var i__17565_17656 = (0);
while(true){
if((i__17565_17656 < count__17564_17655)){
var vec__17566_17657 = chunk__17563_17654.cljs$core$IIndexed$_nth$arity$2(null,i__17565_17656);
var id_17658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17566_17657,(0),null);
var c_17659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17566_17657,(1),null);
if(cljs.core.truth_(c_17659.shouldComponentUpdate(c_17659.props,c_17659.state))){
c_17659.forceUpdate();
} else {
}

var G__17660 = seq__17562_17653;
var G__17661 = chunk__17563_17654;
var G__17662 = count__17564_17655;
var G__17663 = (i__17565_17656 + (1));
seq__17562_17653 = G__17660;
chunk__17563_17654 = G__17661;
count__17564_17655 = G__17662;
i__17565_17656 = G__17663;
continue;
} else {
var temp__4404__auto___17664__$1 = cljs.core.seq(seq__17562_17653);
if(temp__4404__auto___17664__$1){
var seq__17562_17665__$1 = temp__4404__auto___17664__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17562_17665__$1)){
var c__4902__auto___17666 = cljs.core.chunk_first(seq__17562_17665__$1);
var G__17667 = cljs.core.chunk_rest(seq__17562_17665__$1);
var G__17668 = c__4902__auto___17666;
var G__17669 = cljs.core.count(c__4902__auto___17666);
var G__17670 = (0);
seq__17562_17653 = G__17667;
chunk__17563_17654 = G__17668;
count__17564_17655 = G__17669;
i__17565_17656 = G__17670;
continue;
} else {
var vec__17567_17671 = cljs.core.first(seq__17562_17665__$1);
var id_17672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17567_17671,(0),null);
var c_17673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17567_17671,(1),null);
if(cljs.core.truth_(c_17673.shouldComponentUpdate(c_17673.props,c_17673.state))){
c_17673.forceUpdate();
} else {
}

var G__17674 = cljs.core.next(seq__17562_17665__$1);
var G__17675 = null;
var G__17676 = (0);
var G__17677 = (0);
seq__17562_17653 = G__17674;
chunk__17563_17654 = G__17675;
count__17564_17655 = G__17676;
i__17565_17656 = G__17677;
continue;
}
} else {
}
}
break;
}

var G__17678 = cljs.core.next(seq__17548_17643__$1);
var G__17679 = null;
var G__17680 = (0);
var G__17681 = (0);
seq__17548_17605 = G__17678;
chunk__17549_17606 = G__17679;
count__17550_17607 = G__17680;
i__17551_17608 = G__17681;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$skip_DASH_render_DASH_root,true);

var G__17568 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17568) : cljs.core.deref.call(null,G__17568));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$skip_DASH_render_DASH_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$ignore,false);

if(cljs.core.contains_QMARK_((function (){var G__17569 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17569) : cljs.core.deref.call(null,G__17569));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__17570 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
var G__17571 = (16);
return setTimeout(G__17570,G__17571);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__17572 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
return requestAnimationFrame(G__17572);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__17573 = target;
return React.unmountComponentAtNode(G__17573);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17486,map__17486__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){

var temp__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17683 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17683) : cljs.core.deref.call(null,G__17683));
})(),target);
if(cljs.core.truth_(temp__4404__auto__)){
var f = temp__4404__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__17685 = x;
if(G__17685){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17685.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__17685.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__17685);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__17685);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var G__17687 = arguments.length;
switch (G__17687) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){


var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var G__17690 = arguments.length;
switch (G__17690) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){


var key = (((function (){var G__17694 = cursor;
if(G__17694){
var bit__4791__auto__ = null;
if(cljs.core.truth_((function (){var or__4117__auto__ = bit__4791__auto__;
if(cljs.core.truth_(or__4117__auto__)){
return or__4117__auto__;
} else {
return G__17694.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__17694.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__17694);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__17694);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__17695 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__17695) : om.core.path.call(null,G__17695));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var G__17697 = arguments.length;
switch (G__17697) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){

var temp__4404__auto__ = owner.refs;
if(cljs.core.truth_(temp__4404__auto__)){
var refs = temp__4404__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var G__17700 = arguments.length;
switch (G__17700) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var G__17703 = arguments.length;
switch (G__17703) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var G__17706 = arguments.length;
switch (G__17706) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){


return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__17707 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17707) : f.call(null,G__17707));
})());
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){


return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__17708 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17708) : f.call(null,G__17708));
})());
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var G__17711 = arguments.length;
switch (G__17711) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){


return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__17712 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17712) : f.call(null,G__17712));
})());
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){


return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__17713 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17713) : f.call(null,G__17713));
})());
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var G__17716 = arguments.length;
switch (G__17716) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
