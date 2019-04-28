(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){},38:function(e,t,n){e.exports=n(76)},47:function(e,t,n){},48:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),s=n.n(l),o=n(22),c=n(15),u=n(14),i=n(34),p=(n(47),n(5)),d=n(6),h=n(8),m=n(7),E=n(9),f=n(13),y=(n(48),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"Content"},this.props.children)}}]),t}(a.Component)),b=(n(27),function(e){return r.a.createElement("div",{className:"Lease",onClick:e.clicked},r.a.createElement("p",null,"ID: ",e.id),r.a.createElement("p",null,"Tenant: ",r.a.createElement("strong",null,e.tenant)))}),S=n(35),v=n.n(S).a.create({baseURL:"https://hiring-task-api.herokuapp.com/v1/leases"}),O=(n(68),n(69),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),j=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),_=function(e,t){return function(n){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(h.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(E.a)(a,n),Object(d.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},g=function(){return{type:"FETCH_LEASE_START"}},C=function(e){return{type:"FETCH_LEASE_SUCCESS",lease:e}},k=function(e){return{type:"FETCH_LEASE_FAIL",error:e}},L=(n(70),function(){return r.a.createElement("div",{className:"Loader"},"Loading...")}),T=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).leaseSelectedHandler=function(e){n.props.history.push("/leases/"+e)},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchLeases()}},{key:"render",value:function(){var e=this,t=r.a.createElement(L,null);return this.props.loading||(t=this.props.leases.map(function(t){return r.a.createElement(b,{key:t.id,id:t.id,tenant:t.tenant,clicked:function(){return e.leaseSelectedHandler(t.id)}})})),r.a.createElement("div",null,t)}}]),t}(a.Component),w=Object(c.b)(function(e){return{leases:e.lease.leases,loading:e.lease.loading}},function(e){return{onFetchLeases:function(){return e(function(e){e({type:"FETCH_LEASES_START"}),v.get("").then(function(t){e({type:"FETCH_LEASES_SUCCESS",leases:t.data})}).catch(function(t){e({type:"FETCH_LEASES_FAIL",error:t})})})}}})(_(T,v)),A=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).backHandler=function(){n.props.history.push("/")},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchLease(this.props.match.params.id)}},{key:"addDays",value:function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}},{key:"render",value:function(){var e=r.a.createElement(L,null);if(!this.props.loading&&this.props.lease.id){var t=new Date(this.props.lease.start_date),n=new Date(this.props.lease.end_date),a=t.getDay(),l=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].indexOf(this.props.lease.payment_day)-a,s=this.props.lease.frequency,o="weekly"===s?7:"fortnightly"===s?14:28;l=l<0?o+l:l;var c=this.addDays(t,l),u=[];for(l>0&&(u.push({from:t,to:c,days:l,amount:this.props.lease.rent/o*l}),c=this.addDays(c,o));c<=n;)u.push({from:this.addDays(c,-(o-1)),to:c,days:o,amount:this.props.lease.rent}),c=this.addDays(c,o);var i=(c-n)/864e5;if(i<o){var p=o-i;u.push({from:this.addDays(n,1-p),to:n,days:p,amount:this.props.lease.rent/o*p})}var d=u.map(function(e){return r.a.createElement("tr",{key:e.from.getTime()},r.a.createElement("td",null,e.from.toLocaleDateString()),r.a.createElement("td",null,e.to.toLocaleDateString()),r.a.createElement("td",null,e.days),r.a.createElement("td",null,parseFloat(Math.round(100*e.amount)/100).toFixed(2)))});e=r.a.createElement("div",{className:"Lease"},r.a.createElement("button",{className:"LeaseButton",onClick:this.backHandler}," Back "),r.a.createElement("p",null,"ID: ",this.props.lease.id),r.a.createElement("p",null,"Start Date: ",r.a.createElement("strong",null,this.props.lease.start_date)),r.a.createElement("p",null,"End Date: ",r.a.createElement("strong",null,this.props.lease.end_date)),r.a.createElement("p",null,"Rent: ",r.a.createElement("strong",null,this.props.lease.rent)),r.a.createElement("p",null,"Frequency: ",r.a.createElement("strong",null,this.props.lease.frequency)),r.a.createElement("p",null,"Payment Day: ",r.a.createElement("strong",null,this.props.lease.payment_day)),r.a.createElement("br",null),r.a.createElement("table",{className:"LeaseTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"From"),r.a.createElement("th",null,"To"),r.a.createElement("th",null,"Days"),r.a.createElement("th",null,"Amount"))),r.a.createElement("tbody",null,d)),r.a.createElement("br",null))}return r.a.createElement("div",null,e)}}]),t}(a.Component),D=Object(c.b)(function(e){return{lease:e.lease.data,loading:e.lease.loading}},function(e){return{onFetchLease:function(t){return e(function(e){return function(t){t(g()),v.get(e).then(function(e){t(C(e.data))}).catch(function(e){t(k(e))})}}(t))}}})(_(A,v)),F=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/leases/:id",component:D}),r.a.createElement(f.a,{path:"/leases",component:w}),r.a.createElement(f.a,{path:"/",exact:!0,component:w}))))}}]),t}(a.Component),H=n(37),I=function(e,t){return Object(H.a)({},e,t)},N={leases:[],data:{},loading:!1,purchased:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LEASES_START":return function(e,t){return I(e,{loading:!0})}(e);case"FETCH_LEASES_SUCCESS":return function(e,t){return I(e,{leases:t.leases,loading:!1})}(e,t);case"FETCH_LEASES_FAIL":return function(e,t){return I(e,{loading:!1})}(e);case"FETCH_LEASE_START":return function(e,t){return I(e,{loading:!0})}(e);case"FETCH_LEASE_SUCCESS":return function(e,t){return I(e,{data:t.lease,loading:!1})}(e,t);case"FETCH_LEASE_FAIL":return function(e,t){return I(e,{loading:!1})}(e);default:return e}},q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,R=Object(u.c)({lease:U}),M=Object(u.e)(R,q(Object(u.a)(i.a))),x=r.a.createElement(c.a,{store:M},r.a.createElement(o.a,null,r.a.createElement(F,null)));s.a.render(x,document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.b487fdf2.chunk.js.map