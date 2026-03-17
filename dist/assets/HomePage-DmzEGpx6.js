var Fc=r=>{throw TypeError(r)};var Za=(r,t,e)=>t.has(r)||Fc("Cannot "+e);var ie=(r,t,e)=>(Za(r,t,"read from private field"),e?e.call(r):t.get(r)),tn=(r,t,e)=>t.has(r)?Fc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),ze=(r,t,e,n)=>(Za(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e),ge=(r,t,e)=>(Za(r,t,"access private method"),e);import{d as Kl,u as ni,o as jl,a as Zl,b as te,c as ee,n as kr,r as lh,w as Oc,e as ud,f as $l,g as Z,h as hd,i as Ca,j as Ui,k as fd,l as dd,m as en,p as Ut,t as Gt,q as kn,s as ma,v as Oo,F as si,x as ai,y as _a}from"./index-Bl_evw5F.js";function ei(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ch(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vr={duration:.5,overwrite:!1,delay:0},Jl,Fe,xe,Rn=1e8,pe=1/Rn,Bo=Math.PI*2,pd=Bo/4,md=0,uh=Math.sqrt,_d=Math.cos,gd=Math.sin,Ue=function(t){return typeof t=="string"},be=function(t){return typeof t=="function"},ui=function(t){return typeof t=="number"},Ql=function(t){return typeof t>"u"},Xn=function(t){return typeof t=="object"},nn=function(t){return t!==!1},tc=function(){return typeof window<"u"},Gs=function(t){return be(t)||Ue(t)},hh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,vd=/random\([^)]+\)/g,xd=/,\s*/g,Bc=/(?:-?\.?\d|\.)+/gi,fh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$a=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dh=/[+-]=-?[.\d]+/,Md=/[^,'"\[\]\s]+/gi,Sd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,On,zo,ec,Sn={},Pa={},ph,mh=function(t){return(Pa=Hr(t,Sn))&&on},nc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ts=function(t,e){return!e&&console.warn(t)},_h=function(t,e){return t&&(Sn[t]=e)&&Pa&&(Pa[t]=e)||Sn},bs=function(){return 0},yd={suppressEvents:!0,isStart:!0,kill:!1},ga={suppressEvents:!0,kill:!1},Ed={suppressEvents:!0},ic={},bi=[],ko={},gh,fn={},Ja={},zc=30,va=[],rc="",sc=function(t){var e=t[0],n,i;if(Xn(e)||be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=va.length;i--&&!va[i].targetTest(e););n=va[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Vh(t[i],n)))||t.splice(i,1);return t},er=function(t){return t._gsap||sc(Cn(t))[0]._gsap},vh=function(t,e,n){return(n=t[e])&&be(n)?t[e]():Ql(n)&&t.getAttribute&&t.getAttribute(e)||n},rn=function(t,e){return(t=t.split(",")).forEach(e)||t},we=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Ir=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Td=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Da=function(){var t=bi.length,e=bi.slice(0),n,i;for(ko={},bi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ac=function(t){return!!(t._initted||t._startAt||t.add)},xh=function(t,e,n,i){bi.length&&!Fe&&Da(),t.render(e,n,!!(Fe&&e<0&&ac(t))),bi.length&&!Fe&&Da()},Mh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Md).length<2?e:Ue(t)?t.trim():t},Sh=function(t){return t},yn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},bd=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Hr=function(t,e){for(var n in e)t[n]=e[n];return t},kc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Xn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},La=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ms=function(t){var e=t.parent||ye,n=t.keyframes?bd(Ge(t.keyframes)):yn;if(nn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ad=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},yh=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ha=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ci=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},nr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},wd=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Vo=function(t,e,n,i){return t._startAt&&(Fe?t._startAt.revert(ga):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Rd=function r(t){return!t||t._ts&&r(t.parent)},Vc=function(t){return t._repeat?Gr(t._tTime,t=t.duration()+t._rDelay)*t:0},Gr=function(t,e){var n=Math.floor(t=Se(t/e));return t&&n===t?n-1:n},Ia=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ga=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||pe)||0))},Wa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Se(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ga(t),n._dirty||nr(n,t)),t},Eh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ia(t.rawTime(),e),(!e._dur||Fs(0,e.totalDuration(),n)-e._tTime>pe)&&e.render(n,!0)),nr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-pe}},zn=function(t,e,n,i){return e.parent&&Ci(e),e._start=Se((ui(n)?n:n||t!==ye?An(t,n,e):t._time)+e._delay),e._end=Se(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),yh(t,e,"_first","_last",t._sort?"_start":0),Ho(e)||(t._recent=e),i||Eh(t,e),t._ts<0&&Wa(t,t._tTime),t},Th=function(t,e){return(Sn.ScrollTrigger||nc("scrollTrigger",e))&&Sn.ScrollTrigger.create(e,t)},bh=function(t,e,n,i,s){if(lc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Fe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&gh!==mn.frame)return bi.push(t),t._lazy=[s,i],1},Cd=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Ho=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Pd=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Cd(t)&&!(!t._initted&&Ho(t))||(t._ts<0||t._dp._ts<0)&&!Ho(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=Fs(0,t._tDur,e),u=Gr(l,o),t._yoyo&&u&1&&(a=1-a),u!==Gr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Fe||i||t._zTime===pe||!e&&t._zTime){if(!t._initted&&bh(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?pe:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Vo(t,e,n,!0),t._onUpdate&&!n&&gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ci(t,1),!n&&!Fe&&(gn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Dd=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Wr=function(t,e,n,i){var s=t._repeat,a=Se(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Se(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Wa(t,t._tTime=t._tDur*o),t.parent&&Ga(t),n||nr(t.parent,t),t},Hc=function(t){return t instanceof Ze?nr(t):Wr(t,t._dur)},Ld={_start:0,endTime:bs,totalDuration:bs},An=function r(t,e,n){var i=t.labels,s=t._recent||Ld,a=t.duration()>=Rn?s.endTime(!1):t._dur,o,l,c;return Ue(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ge(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},_s=function(t,e,n){var i=ui(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=nn(l.vars.inherit)&&l.parent;a.immediateRender=nn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ce(e[0],a,e[s+1])},Ni=function(t,e){return t||t===0?e(t):e},Fs=function(t,e,n){return n<t?t:n>e?e:n},He=function(t,e){return!Ue(t)||!(e=Sd.exec(t))?"":e[1]},Id=function(t,e,n){return Ni(n,function(i){return Fs(t,e,i)})},Go=[].slice,Ah=function(t,e){return t&&Xn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Xn(t[0]))&&!t.nodeType&&t!==On},Ud=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ue(i)&&!e||Ah(i,1)?(s=n).push.apply(s,Cn(i)):n.push(i)})||n},Cn=function(t,e,n){return xe&&!e&&xe.selector?xe.selector(t):Ue(t)&&!n&&(zo||!Xr())?Go.call((e||ec).querySelectorAll(t),0):Ge(t)?Ud(t,n):Ah(t)?Go.call(t,0):t?[t]:[]},Wo=function(t){return t=Cn(t)[0]||Ts("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Cn(e,n.querySelectorAll?n:n===t?Ts("Invalid scope")||ec.createElement("div"):t)}},wh=function(t){return t.sort(function(){return .5-Math.random()})},Rh=function(t){if(be(t))return t;var e=Xn(t)?t:{each:t},n=ir(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Ue(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||e).length,m=a[_],d,b,E,M,C,T,A,P,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Rn])[1],!v){for(A=-Rn;A<(A=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],d=l?Math.min(v,_)*u-.5:i%v,b=v===Rn?0:l?_*h/v-.5:i/v|0,A=0,P=Rn,T=0;T<_;T++)E=T%v-d,M=b-(T/v|0),m[T]=C=c?Math.abs(c==="y"?M:E):uh(E*E+M*M),C>A&&(A=C),C<P&&(P=C);i==="random"&&wh(m),m.max=A-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=He(e.amount||e.each)||0,n=n&&_<0?Bh(n):n}return _=(m[f]-m.min)/m.max||0,Se(m.b+(n?n(_):_)*m.v)+m.u}},Xo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Se(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ui(n)?0:He(n))}},Ch=function(t,e){var n=Ge(t),i,s;return!n&&Xn(t)&&(i=n=t.radius||Rn,t.values?(t=Cn(t.values),(s=!ui(t[0]))&&(i*=i)):t=Xo(t.increment)),Ni(e,n?be(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Rn,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-o,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||ui(a)?u:u+He(a)}:Xo(t))},Ph=function(t,e,n,i){return Ni(Ge(t)?!e:n===!0?!!(n=0):!i,function(){return Ge(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Nd=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Fd=function(t,e){return function(n){return t(parseFloat(n))+(e||He(n))}},Od=function(t,e,n){return Lh(t,e,0,1,n)},Dh=function(t,e,n){return Ni(n,function(i){return t[~~e(i)]})},Bd=function r(t,e,n){var i=e-t;return Ge(t)?Dh(t,r(0,t.length),e):Ni(n,function(s){return(i+(s-t)%i)%i+t})},zd=function r(t,e,n){var i=e-t,s=i*2;return Ge(t)?Dh(t,r(0,t.length-1),e):Ni(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},As=function(t){return t.replace(vd,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(xd);return Ph(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Lh=function(t,e,n,i,s){var a=e-t,o=i-n;return Ni(s,function(l){return n+((l-t)/a*o||0)})},kd=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Ue(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ge(t)&&!Ge(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=Hr(Ge(t)?[]:{},t));if(!u){for(l in e)oc.call(o,t,l,"get",e[l]);s=function(g){return hc(g,o)||(a?t.p:t)}}}return Ni(n,s)},Gc=function(t,e,n){var i=t.labels,s=Rn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},gn=function(t,e,n){var i=t.vars,s=i[e],a=xe,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&bi.length&&Da(),o&&(xe=o),u=l?s.apply(c,l):s.call(c),xe=a,u},fs=function(t){return Ci(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fe),t.progress()<1&&gn(t,"onInterrupt"),t},Pr,Ih=[],Uh=function(t){if(t)if(t=!t.name&&t.default||t,tc()||t.headless){var e=t.name,n=be(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:bs,render:hc,add:oc,kill:np,modifier:ep,rawVars:0},a={targetTest:0,get:0,getSetter:uc,aliases:{},register:0};if(Xr(),t!==i){if(fn[e])return;yn(i,yn(La(t,s),a)),Hr(i.prototype,Hr(s,La(t,a))),fn[i.prop=e]=i,t.targetTest&&(va.push(i),ic[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}_h(e,i),t.register&&t.register(on,i,sn)}else Ih.push(t)},de=255,ds={aqua:[0,de,de],lime:[0,de,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,de],navy:[0,0,128],white:[de,de,de],olive:[128,128,0],yellow:[de,de,0],orange:[de,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[de,0,0],pink:[de,192,203],cyan:[0,de,de],transparent:[de,de,de,0]},Qa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*de+.5|0},Nh=function(t,e,n){var i=t?ui(t)?[t>>16,t>>8&de,t&de]:0:ds.black,s,a,o,l,c,u,h,f,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ds[t])i=ds[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&de,i&de,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&de,t&de]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Bc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Qa(l+1/3,s,a),i[1]=Qa(l,s,a),i[2]=Qa(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(fh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Bc)||ds.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/de,a=i[1]/de,o=i[2]/de,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Fh=function(t){var e=[],n=[],i=-1;return t.split(Ai).forEach(function(s){var a=s.match(Cr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Wc=function(t,e,n){var i="",s=(t+i).match(Ai),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Nh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Fh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Ai,"1").split(Cr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Ai),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Ai=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ds)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Vd=/hsl[a]?\(/,Oh=function(t){var e=t.join(" "),n;if(Ai.lastIndex=0,Ai.test(e))return n=Vd.test(e),t[1]=Wc(t[1],n),t[0]=Wc(t[0],n,Fh(t[1])),!0},ws,mn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,p,g=function _(m){var d=r()-i,b=m===!0,E,M,C,T;if((d>t||d<0)&&(n+=d-e),i+=d,C=i-n,E=C-a,(E>0||b)&&(T=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,a+=E+(E>=s?4:s-E),M=1),b||(l=c(_)),M)for(p=0;p<o.length;p++)o[p](C,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ph&&(!zo&&tc()&&(On=zo=window,ec=On.document||{},Sn.gsap=on,(On.gsapVersions||(On.gsapVersions=[])).push(on.version),mh(Pa||On.GreenSockGlobals||!On.gsap&&On||{}),Ih.forEach(Uh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ws=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ws=0,c=bs},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,b){var E=d?function(M,C,T,A){m(M,C,T,A),h.remove(E)}:m;return h.remove(m),o[b?"unshift":"push"](E),Xr(),E},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),Xr=function(){return!ws&&mn.wake()},ne={},Hd=/^[\d.\-M][\d.\-,\s]/,Gd=/["']/g,Wd=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Gd,"").trim():+c,i=l.substr(o+1).trim();return e},Xd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Yd=function(t){var e=(t+"").split("("),n=ne[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Wd(e[1])]:Xd(t).split(",").map(Mh)):ne._CE&&Hd.test(t)?ne._CE("",t):n},Bh=function(t){return function(e){return 1-t(1-e)}},zh=function r(t,e){for(var n=t._first,i;n;)n instanceof Ze?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ir=function(t,e){return t&&(be(t)?t:ne[t]||Yd(t))||e},or=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return rn(t,function(o){ne[o]=Sn[o]=s,ne[a=o.toLowerCase()]=n;for(var l in s)ne[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ne[o+"."+l]=s[l]}),s},kh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},to=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Bo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*gd((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:kh(o);return s=Bo/s,l.config=function(c,u){return r(t,c,u)},l},eo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:kh(n);return i.config=function(s){return r(t,s)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;or(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ne.Linear.easeNone=ne.none=ne.Linear.easeIn;or("Elastic",to("in"),to("out"),to());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};or("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);or("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});or("Circ",function(r){return-(uh(1-r*r)-1)});or("Sine",function(r){return r===1?1:-_d(r*pd)+1});or("Back",eo("in"),eo("out"),eo());ne.SteppedEase=ne.steps=Sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-pe;return function(o){return((i*Fs(0,a,o)|0)+s)*n}}};Vr.ease=ne["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return rc+=r+","+r+"Params,"});var Vh=function(t,e){this.id=md++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:vh,this.set=e?e.getSetter:uc},Rs=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Wr(this,+e.duration,1,1),this.data=e.data,xe&&(this._ctx=xe,xe.data.push(this)),ws||mn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Xr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wa(this,n),!s._dp||s.parent||Eh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-pe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ia(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pe?0:this._rts,this.totalTime(Fs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ga(this),wd(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pe&&(this._tTime-=pe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Se(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ia(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ed);var i=Fe;return Fe=n,ac(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Fe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(An(this,n),nn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,nn(i)),this._dur||(this._zTime=-pe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-pe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-pe)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=be(n)?n:Sh,l=function(){var u=i.then;i.then=null,s&&s(),be(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){fs(this)},r}();yn(Rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pe,_prom:0,_ps:!1,_rts:1});var Ze=function(r){ch(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=nn(n.sortChildren),ye&&zn(n.parent||ye,ei(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Th(ei(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return _s(0,arguments,this),this},e.from=function(i,s,a){return _s(1,arguments,this),this},e.fromTo=function(i,s,a,o){return _s(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ms(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ce(i,s,An(this,a),1),this},e.call=function(i,s,a){return zn(this,Ce.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ce(i,a,An(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ms(a).immediateRender=nn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ms(o).immediateRender=nn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Se(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,m,d,b,E,M,C,T,A;if(this!==ye&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,E=this._ts,d=!E,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Se(u%m),u===l?(_=this._repeat,f=c):(C=Se(u/m),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=Gr(this._tTime,m),!o&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),T&&_&1&&(f=c-f,A=1),_!==C&&!this._lock){var P=T&&C&1,v=P===(T&&_&1);if(_<C&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Se(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&gn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,C=_),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;zh(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Dd(this,Se(o),Se(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!C&&(gn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){b=0,g&&(u+=this._zTime=-pe);break}}p=g}else{p=this._last;for(var S=i<0?i:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,a||Fe&&ac(p)),f!==this._time||!this._ts&&!d){b=0,g&&(u+=this._zTime=S?-pe:pe);break}}p=g}}if(b&&!s&&(this.pause(),b.render(f>=o?0:-pe)._zTime=f>=o?1:-1,this._ts))return this._start=M,Ga(this),this.render(i,s,a);this._onUpdate&&!s&&gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ci(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(ui(s)||(s=An(this,s,i)),!(i instanceof Rs)){if(Ge(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ue(i))return this.addLabel(i,s);if(be(i))i=Ce.delayedCall(0,i);else return this}return this!==i?zn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Rn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ce?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ue(i)?this.removeLabel(i):be(i)?this.killTweensOf(i):(i.parent===this&&Ha(this,i),i===this._recent&&(this._recent=this._last),nr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=An(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ce.delayedCall(0,s||bs,a);return o.data="isPause",this._hasPause=1,zn(this,o,An(this,i))},e.removePause=function(i){var s=this._first;for(i=An(this,i);s;)s._start===i&&s.data==="isPause"&&Ci(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Mi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Cn(i),l=this._first,c=ui(s),u;l;)l instanceof Ce?Td(l._targets,o)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=An(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Ce.to(a,yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||pe,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Wr(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,yn({startAt:{time:An(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Gc(this,An(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Gc(this,An(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pe)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Se(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return nr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),nr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Rn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,zn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Se(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Wr(a,a===ye&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ye._ts&&(xh(ye,Ia(i,ye)),gh=mn.frame),mn.frame>=zc){zc+=xn.autoSleep||120;var s=ye._first;if((!s||!s._ts)&&xn.autoSleep&&mn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mn.sleep()}}},t}(Rs);yn(Ze.prototype,{_lock:0,_hasPause:0,_forcing:0});var qd=function(t,e,n,i,s,a,o){var l=new sn(this._pt,t,e,0,1,qh,null,s),c=0,u=0,h,f,p,g,_,m,d,b;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=As(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),f=n.match($a)||[];h=$a.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ir(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=$a.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(dh.test(i)||d)&&(l.e=0),this._pt=l,l},oc=function(t,e,n,i,s,a,o,l,c,u){be(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:be(h)?c?t[e.indexOf("set")||!be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=be(h)?c?Jd:Xh:cc,g;if(Ue(i)&&(~i.indexOf("random(")&&(i=As(i)),i.charAt(1)==="="&&(g=Ir(f,i)+(He(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Yo)return!isNaN(f*i)&&i!==""?(g=new sn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?tp:Yh,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&nc(e,i),qd.call(this,t,e,f,i,p,l||xn.stringFilter,c))},Kd=function(t,e,n,i,s){if(be(t)&&(t=gs(t,s,e,n,i)),!Xn(t)||t.style&&t.nodeType||Ge(t)||hh(t))return Ue(t)?gs(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=gs(t[o],s,e,n,i);return a},Hh=function(t,e,n,i,s,a){var o,l,c,u;if(fn[t]&&(o=new fn[t]).init(s,o.rawVars?e[t]:Kd(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new sn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Pr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Mi,Yo,lc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,b=d&&d.data==="nested"?d.vars.targets:m,E=t._overwrite==="auto"&&!Jl,M=t.timeline,C,T,A,P,v,S,D,k,U,N,$,H,Q;if(M&&(!f||!s)&&(s="none"),t._ease=ir(s,Vr.ease),t._yEase=h?Bh(ir(h===!0?s:h,Vr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(k=m[0]?er(m[0]).harness:0,H=k&&i[k.prop],C=La(i,ic),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?ga:yd),_._lazy=0),a){if(Ci(t._startAt=Ce.set(m,yn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&nn(l),startAt:null,delay:0,onUpdate:c&&function(){return gn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe||!o&&!p)&&t._startAt.revert(ga),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),A=yn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&nn(l),immediateRender:o,stagger:0,parent:d},C),H&&(A[k.prop]=H),Ci(t._startAt=Ce.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe?t._startAt.revert(ga):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,pe,pe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&nn(l)||l&&!g,T=0;T<m.length;T++){if(v=m[T],D=v._gsap||sc(m)[T]._gsap,t._ptLookup[T]=N={},ko[D.id]&&bi.length&&Da(),$=b===m?T:b.indexOf(v),k&&(U=new k).init(v,H||C,t,$,b)!==!1&&(t._pt=P=new sn(t._pt,v,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(V){N[V]=P}),U.priority&&(S=1)),!k||H)for(A in C)fn[A]&&(U=Hh(A,C,t,$,v,b))?U.priority&&(S=1):N[A]=P=oc.call(t,v,A,"get",C[A],$,b,0,i.stringFilter);t._op&&t._op[T]&&t.kill(v,t._op[T]),E&&t._pt&&(Mi=t,ye.killTweensOf(v,N,t.globalTime(e)),Q=!t.parent,Mi=0),t._pt&&l&&(ko[D.id]=1)}S&&Kh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,f&&e<=0&&M.render(Rn,!0,!0)},jd=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(u=f[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Yo=1,t.vars[e]="+=0",lc(t,o),Yo=0,l?Ts(e+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=we(n)+He(h.e)),h.b&&(h.b=u.s+He(h.b))},Zd=function(t,e){var n=t[0]?er(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Hr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},$d=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ge(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},gs=function(t,e,n,i,s){return be(t)?t.call(e,n,i,s):Ue(t)&&~t.indexOf("random(")?As(t):t},Gh=rc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wh={};rn(Gh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Wh[r]=1});var Ce=function(r){ch(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ms(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,b=i.parent||ye,E=(Ge(n)||hh(n)?ui(n[0]):"length"in i)?[n]:Cn(n),M,C,T,A,P,v,S,D;if(o._targets=E.length?sc(E):Ts("GSAP target "+n+" not found. https://gsap.com",!xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Gs(c)||Gs(u)){if(i=o.vars,M=o.timeline=new Ze({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:E}),M.kill(),M.parent=M._dp=ei(o),M._start=0,f||Gs(c)||Gs(u)){if(A=E.length,S=f&&Rh(f),Xn(f))for(P in f)~Gh.indexOf(P)&&(D||(D={}),D[P]=f[P]);for(C=0;C<A;C++)T=La(i,Wh),T.stagger=0,d&&(T.yoyoEase=d),D&&Hr(T,D),v=E[C],T.duration=+gs(c,ei(o),C,v,E),T.delay=(+gs(u,ei(o),C,v,E)||0)-o._delay,!f&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),M.to(v,T,S?S(C,v,E):0),M._ease=ne.none;M.duration()?c=u=0:o.timeline=0}else if(g){ms(yn(M.vars.defaults,{ease:"none"})),M._ease=ir(g.ease||i.ease||"none");var k=0,U,N,$;if(Ge(g))g.forEach(function(H){return M.to(E,H,">")}),M.duration();else{T={};for(P in g)P==="ease"||P==="easeEach"||$d(P,g[P],T,g.easeEach);for(P in T)for(U=T[P].sort(function(H,Q){return H.t-Q.t}),k=0,C=0;C<U.length;C++)N=U[C],$={ease:N.e,duration:(N.t-(C?U[C-1].t:0))/100*c},$[P]=N.v,M.to(E,$,k),k+=$.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return p===!0&&!Jl&&(Mi=ei(o),ye.killTweensOf(E),Mi=0),zn(b,ei(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Se(b._time)&&nn(h)&&Rd(ei(o))&&b.data!=="nested")&&(o._tTime=-pe,o.render(Math.max(0,-u)||0)),m&&Th(ei(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-pe&&!u?l:i<pe?0:i,f,p,g,_,m,d,b,E,M;if(!c)Pd(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=Se(h%_),h===l?(g=this._repeat,f=c):(m=Se(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,f=c-f),m=Gr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(E&&this._yEase&&zh(E,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Se(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(bh(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(M||this._ease)(f/c),this._from&&(this.ratio=b=1-b),!o&&h&&!s&&!m&&(gn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;E&&E.render(i<0?i:E._dur*E._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Vo(this,i,s,a),gn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Vo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ci(this,1),!s&&!(u&&!o)&&(h||o||d)&&(gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){ws||mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||lc(this,c),u=this._ease(c/this._dur),jd(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Wa(this,0),this.parent||yh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mi&&Mi.vars.overwrite!==!0)._first||fs(this),this.parent&&a!==this.timeline.totalDuration()&&Wr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Cn(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&Ad(o,l))return s==="all"&&(this._pt=0),fs(this);for(h=this._op=this._op||[],s!=="all"&&(Ue(s)&&(_={},rn(s,function(b){return _[b]=1}),s=_),s=Zd(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ha(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&fs(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return _s(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return _s(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ye.killTweensOf(i,s,a)},t}(Rs);yn(Ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(r){Ce[r]=function(){var t=new Ze,e=Go.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var cc=function(t,e,n){return t[e]=n},Xh=function(t,e,n){return t[e](n)},Jd=function(t,e,n,i){return t[e](i.fp,n)},Qd=function(t,e,n){return t.setAttribute(e,n)},uc=function(t,e){return be(t[e])?Xh:Ql(t[e])&&t.setAttribute?Qd:cc},Yh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},tp=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},qh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},hc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ep=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},np=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ha(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ip=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Kh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},sn=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Yh,this.d=l||this,this.set=c||cc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ip,this.m=n,this.mt=s,this.tween=i},r}();rn(rc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ic[r]=1});Sn.TweenMax=Sn.TweenLite=Ce;Sn.TimelineLite=Sn.TimelineMax=Ze;ye=new Ze({sortChildren:!1,defaults:Vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xn.stringFilter=Oh;var rr=[],xa={},rp=[],Xc=0,sp=0,no=function(t){return(xa[t]||rp).map(function(e){return e()})},qo=function(){var t=Date.now(),e=[];t-Xc>2&&(no("matchMediaInit"),rr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=On.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),no("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Xc=t,no("matchMedia"))},jh=function(){function r(e,n){this.selector=n&&Wo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sp++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){be(n)&&(s=i,i=n,n=be);var a=this,o=function(){var c=xe,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wo(s)),xe=a,h=i.apply(a,arguments),be(h)&&a._r.push(h),xe=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===be?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=xe;xe=null,n(this),xe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ce&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ze?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ce)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=rr.length;a--;)rr[a].id===this.id&&rr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),ap=function(){function r(e){this.contexts=[],this.scope=e,xe&&xe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Xn(n)||(n={matches:n});var a=new jh(0,s||this.scope),o=a.conditions={},l,c,u;xe&&!a.selector&&(a.selector=xe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=On.matchMedia(n[c]),l&&(rr.indexOf(a)<0&&rr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(qo):l.addEventListener("change",qo)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ua={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Uh(i)})},timeline:function(t){return new Ze(t)},getTweensOf:function(t,e){return ye.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ue(t)&&(t=Cn(t)[0]);var s=er(t||{}).get,a=n?Sh:Mh;return n==="native"&&(n=""),t&&(e?a((fn[e]&&fn[e].get||s)(t,e,n,i)):function(o,l,c){return a((fn[o]&&fn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Cn(t),t.length>1){var i=t.map(function(u){return on.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=fn[e],o=er(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Pr._pt=0,h.init(t,n?u+n:u,Pr,0,[t]),h.render(1,h),Pr._pt&&hc(1,Pr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=on.to(t,yn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ir(t.ease,Vr.ease)),kc(Vr,t||{})},config:function(t){return kc(xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!fn[o]&&!Sn[o]&&Ts(e+" effect requires "+o+" plugin.")}),Ja[e]=function(o,l,c){return n(Cn(o),yn(l||{},s),c)},a&&(Ze.prototype[e]=function(o,l,c){return this.add(Ja[e](o,Xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ne[t]=ir(e)},parseEase:function(t,e){return arguments.length?ir(t,e):ne},getById:function(t){return ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ze(t),i,s;for(n.smoothChildTiming=nn(t.smoothChildTiming),ye.remove(n),n._dp=0,n._time=n._tTime=ye._time,i=ye._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ce&&i.vars.onComplete===i._targets[0]))&&zn(n,i,i._start-i._delay),i=s;return zn(ye,n,0),n},context:function(t,e){return t?new jh(t,e):xe},matchMedia:function(t){return new ap(t)},matchMediaRefresh:function(){return rr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||qo()},addEventListener:function(t,e){var n=xa[t]||(xa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=xa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Bd,wrapYoyo:zd,distribute:Rh,random:Ph,snap:Ch,normalize:Od,getUnit:He,clamp:Id,splitColor:Nh,toArray:Cn,selector:Wo,mapRange:Lh,pipe:Nd,unitize:Fd,interpolate:kd,shuffle:wh},install:mh,effects:Ja,ticker:mn,updateRoot:Ze.updateRoot,plugins:fn,globalTimeline:ye,core:{PropTween:sn,globals:_h,Tween:Ce,Timeline:Ze,Animation:Rs,getCache:er,_removeLinkedListItem:Ha,reverting:function(){return Fe},context:function(t){return t&&xe&&(xe.data.push(t),t._ctx=xe),xe},suppressOverwrites:function(t){return Jl=t}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ua[r]=Ce[r]});mn.add(Ze.updateRoot);Pr=Ua.to({},{duration:0});var op=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},lp=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=op(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},io=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ue(s)&&(l={},rn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}lp(o,s)}}}},on=Ua.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Fe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},io("roundProps",Xo),io("modifiers"),io("snap",Ch))||Ua;Ce.version=Ze.version=on.version="3.14.2";ph=1;tc()&&Xr();ne.Power0;ne.Power1;ne.Power2;ne.Power3;ne.Power4;ne.Linear;ne.Quad;ne.Cubic;ne.Quart;ne.Quint;ne.Strong;ne.Elastic;ne.Back;ne.SteppedEase;ne.Bounce;ne.Sine;ne.Expo;ne.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yc,Si,Ur,fc,Ji,qc,dc,cp=function(){return typeof window<"u"},hi={},qi=180/Math.PI,Nr=Math.PI/180,ur=Math.atan2,Kc=1e8,pc=/([A-Z])/g,up=/(left|right|width|margin|padding|x)/i,hp=/[\s,\(]\S/,Vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ko=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},fp=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dp=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},pp=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},mp=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Zh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},$h=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},_p=function(t,e,n){return t.style[e]=n},gp=function(t,e,n){return t.style.setProperty(e,n)},vp=function(t,e,n){return t._gsap[e]=n},xp=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Mp=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Sp=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ee="transform",an=Ee+"Origin",yp=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in hi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Vn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ii(i,o)}):this.tfm[t]=a.x?a[t]:ii(i,t),t===an&&(this.tfm.zOrigin=a.zOrigin);else return Vn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ee)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(an,e,"")),t=Ee}(s||e)&&this.props.push(t,e,s[t])},Jh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ep=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(pc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=dc(),(!s||!s.isStart)&&!n[Ee]&&(Jh(n),i.zOrigin&&n[an]&&(n[an]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qh=function(t,e){var n={target:t,props:[],revert:Ep,save:yp};return t._gsap||on.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},tf,jo=function(t,e){var n=Si.createElementNS?Si.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Si.createElement(t);return n&&n.style?n:Si.createElement(t)},vn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(pc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Yr(e)||e,1)||""},jc="O,Moz,ms,Ms,Webkit".split(","),Yr=function(t,e,n){var i=e||Ji,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(jc[a]+t in s););return a<0?null:(a===3?"ms":a>=0?jc[a]:"")+t},Zo=function(){cp()&&window.document&&(Yc=window,Si=Yc.document,Ur=Si.documentElement,Ji=jo("div")||{style:{}},jo("div"),Ee=Yr(Ee),an=Ee+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tf=!!Yr("perspective"),dc=on.core.reverting,fc=1)},Zc=function(t){var e=t.ownerSVGElement,n=jo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ur.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ur.removeChild(n),s},$c=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ef=function(t){var e,n;try{e=t.getBBox()}catch{e=Zc(t),n=1}return e&&(e.width||e.height)||n||(e=Zc(t)),e&&!e.width&&!e.x&&!e.y?{x:+$c(t,["x","cx","x1"])||0,y:+$c(t,["y","cy","y1"])||0,width:0,height:0}:e},nf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ef(t))},Pi=function(t,e){if(e){var n=t.style,i;e in hi&&e!==an&&(e=Ee),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(pc,"-$1").toLowerCase())):n.removeAttribute(e)}},yi=function(t,e,n,i,s,a){var o=new sn(t._pt,e,n,0,1,a?$h:Zh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Jc={deg:1,rad:1,turn:1},Tp={grid:1,flex:1},Di=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ji.style,l=up.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,m,d;if(i===a||!s||Jc[i]||Jc[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&nf(t),(p||a==="%")&&(hi[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[u],we(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Si||!_.appendChild)&&(_=Si.body),m=_._gsap,m&&p&&m.width&&l&&m.time===mn.time&&!m.uncache)return we(s/m.width*h);if(p&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=h+i,g=t[u],b?t.style[e]=b:Pi(t,e)}else(p||a==="%")&&!Tp[vn(_,"display")]&&(o.position=vn(t,"position")),_===t&&(o.position="static"),_.appendChild(Ji),g=Ji[u],_.removeChild(Ji),o.position="absolute";return l&&p&&(m=er(_),m.time=mn.time,m.width=_[u]),we(f?g*s/h:g&&s?h/g*s:0)},ii=function(t,e,n,i){var s;return fc||Zo(),e in Vn&&e!=="transform"&&(e=Vn[e],~e.indexOf(",")&&(e=e.split(",")[0])),hi[e]&&e!=="transform"?(s=Ps(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Fa(vn(t,an))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Na[e]&&Na[e](t,e,n)||vn(t,e)||vh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Di(t,e,s,n)+n:s},bp=function(t,e,n,i){if(!n||n==="none"){var s=Yr(e,t,1),a=s&&vn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=vn(t,"borderTopColor"))}var o=new sn(this._pt,t.style,e,0,1,qh),l=0,c=0,u,h,f,p,g,_,m,d,b,E,M,C;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=vn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=vn(t,e)||i,_?t.style[e]=_:Pi(t,e)),u=[n,i],Oh(u),n=u[0],i=u[1],f=n.match(Cr)||[],C=i.match(Cr)||[],C.length){for(;h=Cr.exec(i);)m=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,M=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ir(p,m)+M),d=parseFloat(m),E=m.substr((d+"").length),l=Cr.lastIndex-E.length,E||(E=E||xn.units[e]||M,l===i.length&&(i+=E,o.e+=E)),M!==E&&(p=Di(t,e,_,E)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?$h:Zh;return dh.test(i)&&(o.e=0),this._pt=o,o},Qc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ap=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Qc[n]||n,e[1]=Qc[i]||i,e.join(" ")},wp=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],hi[o]&&(l=1,o=o==="transformOrigin"?an:Ee),Pi(n,o);l&&(Pi(n,Ee),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ps(n,1),a.uncache=1,Jh(i)))}},Na={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new sn(t._pt,e,n,0,0,wp);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Cs=[1,0,0,1,0,0],rf={},sf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},tu=function(t){var e=vn(t,Ee);return sf(e)?Cs:e.substr(7).match(fh).map(we)},mc=function(t,e){var n=t._gsap||er(t),i=t.style,s=tu(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Cs:s):(s===Cs&&!t.offsetParent&&t!==Ur&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ur.appendChild(t)),s=tu(t),l?i.display=l:Pi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ur.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$o=function(t,e,n,i,s,a){var o=t._gsap,l=s||mc(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],b=l[5],E=e.split(" "),M=parseFloat(E[0])||0,C=parseFloat(E[1])||0,T,A,P,v;n?l!==Cs&&(A=p*m-g*_)&&(P=M*(m/A)+C*(-_/A)+(_*b-m*d)/A,v=M*(-g/A)+C*(p/A)-(p*b-g*d)/A,M=P,C=v):(T=ef(t),M=T.x+(~E[0].indexOf("%")?M/100*T.width:M),C=T.y+(~(E[1]||E[0]).indexOf("%")?C/100*T.height:C)),i||i!==!1&&o.smooth?(d=M-c,b=C-u,o.xOffset=h+(d*p+b*_)-d,o.yOffset=f+(d*g+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=C,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[an]="0px 0px",a&&(yi(a,o,"xOrigin",c,M),yi(a,o,"yOrigin",u,C),yi(a,o,"xOffset",h,o.xOffset),yi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+C)},Ps=function(t,e){var n=t._gsap||new Vh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=vn(t,an)||"0",u,h,f,p,g,_,m,d,b,E,M,C,T,A,P,v,S,D,k,U,N,$,H,Q,V,ot,ut,At,Bt,re,K,it;return u=h=f=_=m=d=b=E=M=0,p=g=1,n.svg=!!(t.getCTM&&nf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ee]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ee]!=="none"?l[Ee]:"")),i.scale=i.rotate=i.translate="none"),A=mc(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Q=""):Q=!e&&t.getAttribute("data-svg-origin"),$o(t,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,T=n.yOrigin||0,A!==Cs&&(D=A[0],k=A[1],U=A[2],N=A[3],u=$=A[4],h=H=A[5],A.length===6?(p=Math.sqrt(D*D+k*k),g=Math.sqrt(N*N+U*U),_=D||k?ur(k,D)*qi:0,b=U||N?ur(U,N)*qi+_:0,b&&(g*=Math.abs(Math.cos(b*Nr))),n.svg&&(u-=C-(C*D+T*U),h-=T-(C*k+T*N))):(it=A[6],re=A[7],ut=A[8],At=A[9],Bt=A[10],K=A[11],u=A[12],h=A[13],f=A[14],P=ur(it,Bt),m=P*qi,P&&(v=Math.cos(-P),S=Math.sin(-P),Q=$*v+ut*S,V=H*v+At*S,ot=it*v+Bt*S,ut=$*-S+ut*v,At=H*-S+At*v,Bt=it*-S+Bt*v,K=re*-S+K*v,$=Q,H=V,it=ot),P=ur(-U,Bt),d=P*qi,P&&(v=Math.cos(-P),S=Math.sin(-P),Q=D*v-ut*S,V=k*v-At*S,ot=U*v-Bt*S,K=N*S+K*v,D=Q,k=V,U=ot),P=ur(k,D),_=P*qi,P&&(v=Math.cos(P),S=Math.sin(P),Q=D*v+k*S,V=$*v+H*S,k=k*v-D*S,H=H*v-$*S,D=Q,$=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=we(Math.sqrt(D*D+k*k+U*U)),g=we(Math.sqrt(H*H+it*it)),P=ur($,H),b=Math.abs(P)>2e-4?P*qi:0,M=K?1/(K<0?-K:K):0),n.svg&&(Q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!sf(vn(t,Ee)),Q&&t.setAttribute("transform",Q))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=we(p),n.scaleY=we(g),n.rotation=we(_)+o,n.rotationX=we(m)+o,n.rotationY=we(d)+o,n.skewX=b+o,n.skewY=E+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[an]=Fa(c)),n.xOffset=n.yOffset=0,n.force3D=xn.force3D,n.renderTransform=n.svg?Cp:tf?af:Rp,n.uncache=0,n},Fa=function(t){return(t=t.split(" "))[0]+" "+t[1]},ro=function(t,e,n){var i=He(e);return we(parseFloat(e)+parseFloat(Di(t,"x",n+"px",i)))+i},Rp=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,af(t,e)},zi="0deg",is="0px",ki=") ",af=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,b=n.target,E=n.zOrigin,M="",C=d==="auto"&&t&&t!==1||d===!0;if(E&&(h!==zi||u!==zi)){var T=parseFloat(u)*Nr,A=Math.sin(T),P=Math.cos(T),v;T=parseFloat(h)*Nr,v=Math.cos(T),a=ro(b,a,A*v*-E),o=ro(b,o,-Math.sin(T)*-E),l=ro(b,l,P*v*-E+E)}m!==is&&(M+="perspective("+m+ki),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(C||a!==is||o!==is||l!==is)&&(M+=l!==is||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ki),c!==zi&&(M+="rotate("+c+ki),u!==zi&&(M+="rotateY("+u+ki),h!==zi&&(M+="rotateX("+h+ki),(f!==zi||p!==zi)&&(M+="skew("+f+", "+p+ki),(g!==1||_!==1)&&(M+="scale("+g+", "+_+ki),b.style[Ee]=M||"translate(0, 0)"},Cp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,b=n.forceCSS,E=parseFloat(a),M=parseFloat(o),C,T,A,P,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Nr,c*=Nr,C=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Nr,v=Math.tan(c-u),v=Math.sqrt(1+v*v),A*=v,P*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),C*=v,T*=v)),C=we(C),T=we(T),A=we(A),P=we(P)):(C=h,P=f,T=A=0),(E&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(E=Di(p,"x",a,"px"),M=Di(p,"y",o,"px")),(g||_||m||d)&&(E=we(E+g-(g*C+_*A)+m),M=we(M+_-(g*T+_*P)+d)),(i||s)&&(v=p.getBBox(),E=we(E+i/100*v.width),M=we(M+s/100*v.height)),v="matrix("+C+","+T+","+A+","+P+","+E+","+M+")",p.setAttribute("transform",v),b&&(p.style[Ee]=v)},Pp=function(t,e,n,i,s){var a=360,o=Ue(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?qi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Kc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Kc)%a-~~(c/a)*a)),t._pt=f=new sn(t._pt,e,n,i,c,fp),f.e=u,f.u="deg",t._props.push(n),f},eu=function(t,e){for(var n in e)t[n]=e[n];return t},Dp=function(t,e,n){var i=eu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ee]=e,o=Ps(n,1),Pi(n,Ee),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ee],a[Ee]=e,o=Ps(n,1),a[Ee]=c);for(l in hi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=He(c),g=He(u),h=p!==g?Di(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new sn(t._pt,o,l,h,f-h,Ko),t._pt.u=g||0,t._props.push(l));eu(o,i)};rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Na[t>1?"border"+r:r]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return ii(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var of={name:"css",register:Zo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,p,g,_,m,d,b,E,M,C,T,A,P,v;fc||Zo(),this.styles=this.styles||Qh(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(fn[_]&&Hh(_,e,n,i,t,s)))){if(p=typeof u,g=Na[_],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=As(u)),g)g(this,t,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ai.lastIndex=0,Ai.test(c)||(m=He(c),d=He(u),d?m!==d&&(c=Di(t,_,c,d)+d):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ue(c)&&~c.indexOf("random(")&&(c=As(c)),He(c+"")||c==="auto"||(c+=xn.units[_]||He(ii(t,_))||""),(c+"").charAt(1)==="="&&(c=ii(t,_))):c=ii(t,_),f=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),_ in Vn&&(_==="autoAlpha"&&(f===1&&ii(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),yi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Vn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in hi,E){if(this.styles.save(_),v=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=vn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=u,u=vn(t,"perspective"),S?t.style.perspective=S:Pi(t,"perspective")}h=parseFloat(u)}if(M||(C=t._gsap,C.renderTransform&&!e.parseTransform||Ps(t,e.parseTransform),T=e.smoothOrigin!==!1&&C.smooth,M=this._pt=new sn(this._pt,o,Ee,0,1,C.renderTransform,C,0,-1),M.dep=1),_==="scale")this._pt=new sn(this._pt,C,"scaleY",C.scaleY,(b?Ir(C.scaleY,b+h):h)-C.scaleY||0,Ko),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(an,0,o[an]),u=Ap(u),C.svg?$o(t,u,0,T,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==C.zOrigin&&yi(this,C,"zOrigin",C.zOrigin,d),yi(this,o,_,Fa(c),Fa(u)));continue}else if(_==="svgOrigin"){$o(t,u,1,T,0,this);continue}else if(_ in rf){Pp(this,C,_,f,b?Ir(f,b+u):u);continue}else if(_==="smoothOrigin"){yi(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){Dp(this,u,t);continue}}else _ in o||(_=Yr(_)||_);if(E||(h||h===0)&&(f||f===0)&&!hp.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),d=He(u)||(_ in xn.units?xn.units[_]:m),m!==d&&(f=Di(t,_,c,d)),this._pt=new sn(this._pt,E?C:o,_,f,(b?Ir(f,b+h):h)-f,!E&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?mp:Ko),this._pt.u=d||0,E&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=pp):m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=dp);else if(_ in o)bp.call(this,t,_,c,b?b+u:u);else if(_ in t)this.add(t,_,c||t[_],b?b+u:u,i,s);else if(_!=="parseTransform"){nc(_,u);continue}E||(_ in o?P.push(_,0,o[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),a.push(_)}}A&&Kh(this)},render:function(t,e){if(e.tween._time||!dc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ii,aliases:Vn,getSetter:function(t,e,n){var i=Vn[e];return i&&i.indexOf(",")<0&&(e=i),e in hi&&e!==an&&(t._gsap.x||ii(t,"x"))?n&&qc===n?e==="scale"?xp:vp:(qc=n||{})&&(e==="scale"?Mp:Sp):t.style&&!Ql(t.style[e])?_p:~e.indexOf("-")?gp:uc(t,e)},core:{_removeProperty:Pi,_getMatrix:mc}};on.utils.checkPrefix=Yr;on.core.getStyleSaver=Qh;(function(r,t,e,n){var i=rn(r+","+t+","+e,function(s){hi[s]=1});rn(t,function(s){xn.units[s]="deg",rf[s]=1}),Vn[i[13]]=r+","+t,rn(n,function(s){var a=s.split(":");Vn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){xn.units[r]="px"});on.registerPlugin(of);var lf=on.registerPlugin(of)||on;lf.core.Tween;function Lp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ip(r,t,e){return t&&Lp(r.prototype,t),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ne,Ma,_n,Ei,Ti,Fr,cf,Ki,vs,uf,oi,In,hf,ff=function(){return Ne||typeof window<"u"&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},df=1,Dr=[],wn=[],xs=[],Ms=Date.now,Jo=function(t,e){return e},Up=function(){var t=vs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,wn),i.push.apply(i,xs),wn=n,xs=i,Jo=function(a,o){return e[a](o)}},Np=function(t,e){return~xs.indexOf(t)&&xs[xs.indexOf(t)+1][e]},Ss=function(t){return!!~uf.indexOf(t)},qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Ye=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ws="scrollLeft",Xs="scrollTop",Qo=function(){return oi&&oi.isPressed||wn.cache++},Oa=function(t,e){var n=function i(s){if(s||s===0){df&&(_n.history.scrollRestoration="manual");var a=oi&&oi.isPressed;s=i.v=Math.round(s)||(oi&&oi.iOS?1:0),t(s),i.cacheID=wn.cache,a&&Jo("ss",s)}else(e||wn.cache!==i.cacheID||Jo("ref"))&&(i.cacheID=wn.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Ba={s:Ws,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Oa(function(r){return arguments.length?_n.scrollTo(r,Xa.sc()):_n.pageXOffset||Ei[Ws]||Ti[Ws]||Fr[Ws]||0})},Xa={s:Xs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ba,sc:Oa(function(r){return arguments.length?_n.scrollTo(Ba.sc(),r):_n.pageYOffset||Ei[Xs]||Ti[Xs]||Fr[Xs]||0})},Fp=function(t,e){return(e&&e._ctx&&e._ctx.selector||Ne.utils.toArray)(t)[0]||(typeof t=="string"&&Ne.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Op=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},nu=function(t,e){var n=e.s,i=e.sc;Ss(t)&&(t=Ei.scrollingElement||Ti);var s=wn.indexOf(t),a=i===Xa.sc?1:2;!~s&&(s=wn.push(t)-1),wn[s+a]||qe(t,"scroll",Qo);var o=wn[s+a],l=o||(wn[s+a]=Oa(Np(t,n),!0)||(Ss(t)?i:Oa(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Ne.getProperty(t,"scrollBehavior")==="smooth"),l},iu=function(t,e,n){var i=t,s=t,a=Ms(),o=a,l=e,c=Math.max(500,l*3),u=function(g,_){var m=Ms();_||m-a>l?(s=i,i=g,o=a,a=m):i+=g},h=function(){s=i=0,o=a=0},f=function(g){var _=o,m=s,d=Ms();return(g||g===0)&&g!==i&&u(g),a===o||d-o>c?0:(i+m)/(d-_)*1e3};return{update:u,reset:h,getVelocity:f}},rs=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},ru=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},pf=function(){vs=Ne.core.globals().ScrollTrigger,vs&&vs.core&&Up()},mf=function(t){return Ne=t||ff(),!Ma&&Ne&&typeof document<"u"&&document.body&&(_n=window,Ei=document,Ti=Ei.documentElement,Fr=Ei.body,uf=[_n,Ei,Ti,Fr],Ne.utils.clamp,hf=Ne.core.context||function(){},Ki="onpointerenter"in Fr?"pointer":"mouse",cf=Yn.isTouch=_n.matchMedia&&_n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,In=Yn.eventTypes=("ontouchstart"in Ti?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ti?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return df=0},500),pf(),Ma=1),Ma};Ba.op=Xa;wn.cache=0;var Yn=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Ma||mf(Ne)||console.warn("Please gsap.registerPlugin(Observer)"),vs||pf();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,d=n.onDragEnd,b=n.onDrag,E=n.onPress,M=n.onRelease,C=n.onRight,T=n.onLeft,A=n.onUp,P=n.onDown,v=n.onChangeX,S=n.onChangeY,D=n.onChange,k=n.onToggleX,U=n.onToggleY,N=n.onHover,$=n.onHoverEnd,H=n.onMove,Q=n.ignoreCheck,V=n.isNormalizer,ot=n.onGestureStart,ut=n.onGestureEnd,At=n.onWheel,Bt=n.onEnable,re=n.onDisable,K=n.onClick,it=n.scrollSpeed,wt=n.capture,mt=n.allowClicks,Pt=n.lockAxis,qt=n.onLockAxis;this.target=o=Fp(o)||Ti,this.vars=n,p&&(p=Ne.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,it=it||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(_n.getComputedStyle(Fr).lineHeight)||22);var Nt,$t,se,ht,w,q,st,I=this,lt=0,Lt=0,_t=n.passive||!u&&n.passive!==!1,vt=nu(o,Ba),Wt=nu(o,Xa),R=vt(),x=Wt(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&In[0]==="pointerdown",j=Ss(o),Y=o.ownerDocument||Ei,X=[0,0,0],xt=[0,0,0],at=0,St=function(){return at=Ms()},yt=function(Ct,Kt){return(I.event=Ct)&&p&&Op(Ct.target,p)||Kt&&B&&Ct.pointerType!=="touch"||Q&&Q(Ct,Kt)},tt=function(){I._vx.reset(),I._vy.reset(),$t.pause(),h&&h(I)},pt=function(){var Ct=I.deltaX=ru(X),Kt=I.deltaY=ru(xt),Ae=Math.abs(Ct)>=i,Oe=Math.abs(Kt)>=i;D&&(Ae||Oe)&&D(I,Ct,Kt,X,xt),Ae&&(C&&I.deltaX>0&&C(I),T&&I.deltaX<0&&T(I),v&&v(I),k&&I.deltaX<0!=lt<0&&k(I),lt=I.deltaX,X[0]=X[1]=X[2]=0),Oe&&(P&&I.deltaY>0&&P(I),A&&I.deltaY<0&&A(I),S&&S(I),U&&I.deltaY<0!=Lt<0&&U(I),Lt=I.deltaY,xt[0]=xt[1]=xt[2]=0),(ht||se)&&(H&&H(I),se&&(m&&se===1&&m(I),b&&b(I),se=0),ht=!1),q&&!(q=!1)&&qt&&qt(I),w&&(At(I),w=!1),Nt=0},Dt=function(Ct,Kt,Ae){X[Ae]+=Ct,xt[Ae]+=Kt,I._vx.update(Ct),I._vy.update(Kt),c?Nt||(Nt=requestAnimationFrame(pt)):pt()},It=function(Ct,Kt){Pt&&!st&&(I.axis=st=Math.abs(Ct)>Math.abs(Kt)?"x":"y",q=!0),st!=="y"&&(X[2]+=Ct,I._vx.update(Ct,!0)),st!=="x"&&(xt[2]+=Kt,I._vy.update(Kt,!0)),c?Nt||(Nt=requestAnimationFrame(pt)):pt()},ct=function(Ct){if(!yt(Ct,1)){Ct=rs(Ct,u);var Kt=Ct.clientX,Ae=Ct.clientY,Oe=Kt-I.x,Be=Ae-I.y,Oi=I.isDragging;I.x=Kt,I.y=Ae,(Oi||(Oe||Be)&&(Math.abs(I.startX-Kt)>=s||Math.abs(I.startY-Ae)>=s))&&(se||(se=Oi?2:1),Oi||(I.isDragging=!0),It(Oe,Be))}},zt=I.onPress=function(Mt){yt(Mt,1)||Mt&&Mt.button||(I.axis=st=null,$t.pause(),I.isPressed=!0,Mt=rs(Mt),lt=Lt=0,I.startX=I.x=Mt.clientX,I.startY=I.y=Mt.clientY,I._vx.reset(),I._vy.reset(),qe(V?o:Y,In[1],ct,_t,!0),I.deltaX=I.deltaY=0,E&&E(I))},L=I.onRelease=function(Mt){if(!yt(Mt,1)){Ye(V?o:Y,In[1],ct,!0);var Ct=!isNaN(I.y-I.startY),Kt=I.isDragging,Ae=Kt&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Oe=rs(Mt);!Ae&&Ct&&(I._vx.reset(),I._vy.reset(),u&&mt&&Ne.delayedCall(.08,function(){if(Ms()-at>300&&!Mt.defaultPrevented){if(Mt.target.click)Mt.target.click();else if(Y.createEvent){var Be=Y.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,_n,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),Mt.target.dispatchEvent(Be)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,h&&Kt&&!V&&$t.restart(!0),se&&pt(),d&&Kt&&d(I),M&&M(I,Ae)}},ft=function(Ct){return Ct.touches&&Ct.touches.length>1&&(I.isGesturing=!0)&&ot(Ct,I.isDragging)},et=function(){return(I.isGesturing=!1)||ut(I)},Et=function(Ct){if(!yt(Ct)){var Kt=vt(),Ae=Wt();Dt((Kt-R)*it,(Ae-x)*it,1),R=Kt,x=Ae,h&&$t.restart(!0)}},nt=function(Ct){if(!yt(Ct)){Ct=rs(Ct,u),At&&(w=!0);var Kt=(Ct.deltaMode===1?l:Ct.deltaMode===2?_n.innerHeight:1)*g;Dt(Ct.deltaX*Kt,Ct.deltaY*Kt,0),h&&!V&&$t.restart(!0)}},J=function(Ct){if(!yt(Ct)){var Kt=Ct.clientX,Ae=Ct.clientY,Oe=Kt-I.x,Be=Ae-I.y;I.x=Kt,I.y=Ae,ht=!0,h&&$t.restart(!0),(Oe||Be)&&It(Oe,Be)}},bt=function(Ct){I.event=Ct,N(I)},kt=function(Ct){I.event=Ct,$(I)},le=function(Ct){return yt(Ct)||rs(Ct,u)&&K(I)};$t=I._dc=Ne.delayedCall(f||.25,tt).pause(),I.deltaX=I.deltaY=0,I._vx=iu(0,50),I._vy=iu(0,50),I.scrollX=vt,I.scrollY=Wt,I.isDragging=I.isGesturing=I.isPressed=!1,hf(this),I.enable=function(Mt){return I.isEnabled||(qe(j?Y:o,"scroll",Qo),a.indexOf("scroll")>=0&&qe(j?Y:o,"scroll",Et,_t,wt),a.indexOf("wheel")>=0&&qe(o,"wheel",nt,_t,wt),(a.indexOf("touch")>=0&&cf||a.indexOf("pointer")>=0)&&(qe(o,In[0],zt,_t,wt),qe(Y,In[2],L),qe(Y,In[3],L),mt&&qe(o,"click",St,!0,!0),K&&qe(o,"click",le),ot&&qe(Y,"gesturestart",ft),ut&&qe(Y,"gestureend",et),N&&qe(o,Ki+"enter",bt),$&&qe(o,Ki+"leave",kt),H&&qe(o,Ki+"move",J)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=ht=se=!1,I._vx.reset(),I._vy.reset(),R=vt(),x=Wt(),Mt&&Mt.type&&zt(Mt),Bt&&Bt(I)),I},I.disable=function(){I.isEnabled&&(Dr.filter(function(Mt){return Mt!==I&&Ss(Mt.target)}).length||Ye(j?Y:o,"scroll",Qo),I.isPressed&&(I._vx.reset(),I._vy.reset(),Ye(V?o:Y,In[1],ct,!0)),Ye(j?Y:o,"scroll",Et,wt),Ye(o,"wheel",nt,wt),Ye(o,In[0],zt,wt),Ye(Y,In[2],L),Ye(Y,In[3],L),Ye(o,"click",St,!0),Ye(o,"click",le),Ye(Y,"gesturestart",ft),Ye(Y,"gestureend",et),Ye(o,Ki+"enter",bt),Ye(o,Ki+"leave",kt),Ye(o,Ki+"move",J),I.isEnabled=I.isPressed=I.isDragging=!1,re&&re(I))},I.kill=I.revert=function(){I.disable();var Mt=Dr.indexOf(I);Mt>=0&&Dr.splice(Mt,1),oi===I&&(oi=0)},Dr.push(I),V&&Ss(o)&&(oi=I),I.enable(_)},Ip(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Yn.version="3.14.2";Yn.create=function(r){return new Yn(r)};Yn.register=mf;Yn.getAll=function(){return Dr.slice()};Yn.getById=function(r){return Dr.filter(function(t){return t.vars.id===r})[0]};ff()&&Ne.registerPlugin(Yn);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="178",Bp=0,su=1,zp=2,_f=1,kp=2,ti=3,Li=0,$e=1,ri=2,wi=0,Or=1,au=2,ou=3,lu=4,Vp=5,Zi=100,Hp=101,Gp=102,Wp=103,Xp=104,Yp=200,qp=201,Kp=202,jp=203,tl=204,el=205,Zp=206,$p=207,Jp=208,Qp=209,tm=210,em=211,nm=212,im=213,rm=214,nl=0,il=1,rl=2,qr=3,sl=4,al=5,ol=6,ll=7,gf=0,sm=1,am=2,Ri=0,om=1,lm=2,cm=3,vf=4,um=5,hm=6,fm=7,xf=300,Kr=301,jr=302,cl=303,ul=304,Ya=306,hl=1e3,Qi=1001,fl=1002,Mn=1003,dm=1004,Ys=1005,Hn=1006,so=1007,tr=1008,qn=1009,Mf=1010,Sf=1011,Ds=1012,gc=1013,sr=1014,Gn=1015,Os=1016,vc=1017,xc=1018,Ls=1020,yf=35902,Ef=1021,Tf=1022,Nn=1023,Is=1026,Us=1027,Mc=1028,Sc=1029,bf=1030,yc=1031,Ec=1033,Sa=33776,ya=33777,Ea=33778,Ta=33779,dl=35840,pl=35841,ml=35842,_l=35843,gl=36196,vl=37492,xl=37496,Ml=37808,Sl=37809,yl=37810,El=37811,Tl=37812,bl=37813,Al=37814,wl=37815,Rl=37816,Cl=37817,Pl=37818,Dl=37819,Ll=37820,Il=37821,ba=36492,Ul=36494,Nl=36495,Af=36283,Fl=36284,Ol=36285,Bl=36286,pm=3200,mm=3201,wf=0,_m=1,xi="",dn="srgb",Zr="srgb-linear",za="linear",ue="srgb",hr=7680,cu=519,gm=512,vm=513,xm=514,Rf=515,Mm=516,Sm=517,ym=518,Em=519,uu=35044,hu="300 es",li=2e3,ka=2001;class Jr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fu=1234567;const ys=Math.PI/180,Ns=180/Math.PI;function Qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function jt(r,t,e){return Math.max(t,Math.min(e,r))}function Tc(r,t){return(r%t+t)%t}function Tm(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function bm(r,t,e){return r!==t?(e-r)/(t-r):0}function Es(r,t,e){return(1-e)*r+e*t}function Am(r,t,e,n){return Es(r,t,1-Math.exp(-e*n))}function wm(r,t=1){return t-Math.abs(Tc(r,t*2)-t)}function Rm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Cm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Pm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Dm(r,t){return r+Math.random()*(t-r)}function Lm(r){return r*(.5-Math.random())}function Im(r){r!==void 0&&(fu=r);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Um(r){return r*ys}function Nm(r){return r*Ns}function Fm(r){return(r&r-1)===0&&r!==0}function Om(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zm(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fr={DEG2RAD:ys,RAD2DEG:Ns,generateUUID:Qr,clamp:jt,euclideanModulo:Tc,mapLinear:Tm,inverseLerp:bm,lerp:Es,damp:Am,pingpong:wm,smoothstep:Rm,smootherstep:Cm,randInt:Pm,randFloat:Dm,randFloatSpread:Lm,seededRandom:Im,degToRad:Um,radToDeg:Nm,isPowerOfTwo:Fm,ceilPowerOfTwo:Om,floorPowerOfTwo:Bm,setQuaternionFromProperEuler:zm,normalize:Ke,denormalize:Rr};class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,b=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const C=Math.sqrt(E),T=Math.atan2(C,d*b);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const M=o*b;if(l=l*m+f*M,c=c*m+p*M,u=u*m+g*M,h=h*m+_*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new O,du=new Bs;class Yt{constructor(t,e,n,i,s,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],b=i[1],E=i[4],M=i[7],C=i[2],T=i[5],A=i[8];return s[0]=a*_+o*b+l*C,s[3]=a*m+o*E+l*T,s[6]=a*d+o*M+l*A,s[1]=c*_+u*b+h*C,s[4]=c*m+u*E+h*T,s[7]=c*d+u*M+h*A,s[2]=f*_+p*b+g*C,s[5]=f*m+p*E+g*T,s[8]=f*d+p*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=e*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new Yt;function Cf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function km(){const r=Va("canvas");return r.style.display="block",r}const pu={};function Br(r){r in pu||(pu[r]=!0,console.warn(r))}function Vm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Hm(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gm(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const mu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ue&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(i.r=zr(i.r),i.g=zr(i.g),i.b=zr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:n,transfer:za,toXYZ:mu,fromXYZ:_u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:mu,fromXYZ:_u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),r}const oe=Wm();function ci(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let dr;class Xm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{dr===void 0&&(dr=Va("canvas")),dr.width=t.width,dr.height=t.height;const i=dr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=dr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Va("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ym=0;class bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(lo(i[a].image)):s.push(lo(i[a]))}else s=lo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function lo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;const co=new O;class Je extends Jr{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Qi,i=Qi,s=Hn,a=tr,o=Nn,l=qn,c=Je.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Qr(),this.name="",this.source=new bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=xf;Je.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(p+1)/2,C=(d+1)/2,T=(u+f)/4,A=(h+_)/4,P=(g+m)/4;return E>M&&E>C?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=T/n,s=A/n):M>C?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=P/s),this.set(n,i,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Km extends Jr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Je(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new bc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends Km{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pf extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jm extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Ks.subVectors(this.max,ss),pr.subVectors(t.a,ss),mr.subVectors(t.b,ss),_r.subVectors(t.c,ss),fi.subVectors(mr,pr),di.subVectors(_r,mr),Vi.subVectors(pr,_r);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Vi.z,Vi.y,fi.z,0,-fi.x,di.z,0,-di.x,Vi.z,0,-Vi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Vi.y,Vi.x,0];return!uo(e,pr,mr,_r,Ks)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,pr,mr,_r,Ks))?!1:(js.crossVectors(fi,di),e=[js.x,js.y,js.z],uo(e,pr,mr,_r,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const jn=[new O,new O,new O,new O,new O,new O,new O,new O],Pn=new O,qs=new lr,pr=new O,mr=new O,_r=new O,fi=new O,di=new O,Vi=new O,ss=new O,Ks=new O,js=new O,Hi=new O;function uo(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Hi.fromArray(r,s);const o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),u=n.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zm=new lr,as=new O,ho=new O;class zs{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(ho)),this.expandByPoint(as.copy(t.center).sub(ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zn=new O,fo=new O,Zs=new O,pi=new O,po=new O,$s=new O,mo=new O;class Df{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fo.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(fo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=pi.dot(this.direction),l=-pi.dot(Zs),c=pi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(fo).addScaledVector(Zs,f),p}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,i,s){po.subVectors(e,t),$s.subVectors(n,t),mo.crossVectors(po,$s);let a=this.direction.dot(mo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);const l=o*this.direction.dot($s.crossVectors(pi,$s));if(l<0)return null;const c=o*this.direction.dot(po.cross(pi));if(c<0||l+c>a)return null;const u=-o*pi.dot(mo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,s,a,o,l,c,u,h,f,p,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,p,g,_,m)}set(t,e,n,i,s,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/gr.setFromMatrixColumn(t,0).length(),s=1/gr.setFromMatrixColumn(t,1).length(),a=1/gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($m,t,Jm)}lookAt(t,e,n){const i=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),mi.crossVectors(n,un),mi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),mi.crossVectors(n,un)),mi.normalize(),Js.crossVectors(un,mi),i[0]=mi.x,i[4]=Js.x,i[8]=un.x,i[1]=mi.y,i[5]=Js.y,i[9]=un.y,i[2]=mi.z,i[6]=Js.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],b=n[3],E=n[7],M=n[11],C=n[15],T=i[0],A=i[4],P=i[8],v=i[12],S=i[1],D=i[5],k=i[9],U=i[13],N=i[2],$=i[6],H=i[10],Q=i[14],V=i[3],ot=i[7],ut=i[11],At=i[15];return s[0]=a*T+o*S+l*N+c*V,s[4]=a*A+o*D+l*$+c*ot,s[8]=a*P+o*k+l*H+c*ut,s[12]=a*v+o*U+l*Q+c*At,s[1]=u*T+h*S+f*N+p*V,s[5]=u*A+h*D+f*$+p*ot,s[9]=u*P+h*k+f*H+p*ut,s[13]=u*v+h*U+f*Q+p*At,s[2]=g*T+_*S+m*N+d*V,s[6]=g*A+_*D+m*$+d*ot,s[10]=g*P+_*k+m*H+d*ut,s[14]=g*v+_*U+m*Q+d*At,s[3]=b*T+E*S+M*N+C*V,s[7]=b*A+E*D+M*$+C*ot,s[11]=b*P+E*k+M*H+C*ut,s[15]=b*v+E*U+M*Q+C*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*p-n*l*p)+_*(+e*l*p-e*c*f+s*a*f-i*a*p+i*c*u-s*l*u)+m*(+e*c*h-e*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],b=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,E=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,M=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,C=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,T=e*b+n*E+i*M+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=b*A,t[1]=(_*f*s-h*m*s-_*i*p+n*m*p+h*i*d-n*f*d)*A,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*d+n*l*d)*A,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*p-n*l*p)*A,t[4]=E*A,t[5]=(u*m*s-g*f*s+g*i*p-e*m*p-u*i*d+e*f*d)*A,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*d-e*l*d)*A,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*p+e*l*p)*A,t[8]=M*A,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*d-e*h*d)*A,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*p-e*o*p)*A,t[12]=C*A,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*A,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,b=l*c,E=l*u,M=l*h,C=n.x,T=n.y,A=n.z;return i[0]=(1-(_+d))*C,i[1]=(p+M)*C,i[2]=(g-E)*C,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(f+d))*T,i[6]=(m+b)*T,i[7]=0,i[8]=(g+E)*A,i[9]=(m-b)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=gr.set(i[0],i[1],i[2]).length();const a=gr.set(i[4],i[5],i[6]).length(),o=gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Dn.copy(this);const c=1/s,u=1/a,h=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,e.setFromRotationMatrix(Dn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=li){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(o===li)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ka)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=li){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,p=(n+i)*u;let g,_;if(o===li)g=(a+s)*h,_=-2*h;else if(o===ka)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gr=new O,Dn=new me,$m=new O(0,0,0),Jm=new O(1,1,1),mi=new O,Js=new O,un=new O,gu=new me,vu=new Bs;class Kn{constructor(t=0,e=0,n=0,i=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qm=0;const xu=new O,vr=new Bs,$n=new me,Qs=new O,os=new O,t_=new O,e_=new Bs,Mu=new O(1,0,0),Su=new O(0,1,0),yu=new O(0,0,1),Eu={type:"added"},n_={type:"removed"},xr={type:"childadded",child:null},_o={type:"childremoved",child:null};class We extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new O,e=new Kn,n=new Bs,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Yt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(yu,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(os,Qs,this.up):$n.lookAt(Qs,os,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),vr.setFromRotationMatrix($n),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eu),xr.child=t,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n_),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eu),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,t_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}We.DEFAULT_UP=new O(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new O,Jn=new O,go=new O,Qn=new O,Mr=new O,Sr=new O,Tu=new O,vo=new O,xo=new O,Mo=new O,So=new he,yo=new he,Eo=new he;class Un{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ln.subVectors(i,e),Jn.subVectors(n,e),go.subVectors(t,e);const a=Ln.dot(Ln),o=Ln.dot(Jn),l=Ln.dot(go),c=Jn.dot(Jn),u=Jn.dot(go),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return So.setScalar(0),yo.setScalar(0),Eo.setScalar(0),So.fromBufferAttribute(t,e),yo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(So,s.x),a.addScaledVector(yo,s.y),a.addScaledVector(Eo,s.z),a}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),Jn.subVectors(t,e),Ln.cross(Jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Ln.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Mr.subVectors(i,n),Sr.subVectors(s,n),vo.subVectors(t,n);const l=Mr.dot(vo),c=Sr.dot(vo);if(l<=0&&c<=0)return e.copy(n);xo.subVectors(t,i);const u=Mr.dot(xo),h=Sr.dot(xo);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Mr,a);Mo.subVectors(t,s);const p=Mr.dot(Mo),g=Sr.dot(Mo);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Sr,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Tu.subVectors(s,i),o=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(Tu,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Mr,a).addScaledVector(Sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ta={h:0,s:0,l:0};function To(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Tc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=To(a,s,t+1/3),this.g=To(a,s,t),this.b=To(a,s,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=Lf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return oe.workingToColorSpace(Ve.copy(this),t),Math.round(jt(Ve.r*255,0,255))*65536+Math.round(jt(Ve.g*255,0,255))*256+Math.round(jt(Ve.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,s=Ve.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=dn){oe.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(ta);const n=Es(_i.h,ta.h,e),i=Es(_i.s,ta.s,e),s=Es(_i.l,ta.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Zt;Zt.NAMES=Lf;let i_=0;class ks extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=Or,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tl&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wc extends ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new O,ea=new Qt;let r_=0;class Fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uu&&(t.usage=this.usage),t}}class If extends Fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Uf extends Fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wn extends Fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let s_=0;const bn=new me,bo=new We,yr=new O,hn=new lr,ls=new lr,Le=new O;class Fi extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cf(t)?Uf:If)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wn(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(hn.min,ls.min),hn.expandByPoint(Le),Le.addVectors(hn.max,ls.max),hn.expandByPoint(Le)):(hn.expandByPoint(ls.min),hn.expandByPoint(ls.max))}hn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Le.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(t,c),Le.add(yr)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new O,l[P]=new O;const c=new O,u=new O,h=new O,f=new Qt,p=new Qt,g=new Qt,_=new O,m=new O;function d(P,v,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[P].add(_),o[v].add(_),o[S].add(_),l[P].add(m),l[v].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,v=b.length;P<v;++P){const S=b[P],D=S.start,k=S.count;for(let U=D,N=D+k;U<N;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new O,M=new O,C=new O,T=new O;function A(P){C.fromBufferAttribute(i,P),T.copy(C);const v=o[P];E.copy(v),E.sub(C.multiplyScalar(C.dot(v))).normalize(),M.crossVectors(T,v);const D=M.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,D)}for(let P=0,v=b.length;P<v;++P){const S=b[P],D=S.start,k=S.count;for(let U=D,N=D+k;U<N;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Fn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new me,Gi=new Df,na=new zs,Au=new O,ia=new O,ra=new O,sa=new O,Ao=new O,aa=new O,wu=new O,oa=new O;class Ie extends We{constructor(t=new Fi,e=new wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ao.fromBufferAttribute(h,t),a?aa.addScaledVector(Ao,u):aa.addScaledVector(Ao.sub(e),u))}e.add(aa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),Gi.copy(t.ray).recast(t.near),!(na.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(na,Au)===null||Gi.origin.distanceToSquared(Au)>(t.far-t.near)**2))&&(bu.copy(s).invert(),Gi.copy(t.ray).applyMatrix4(bu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,C=E;M<C;M+=3){const T=o.getX(M),A=o.getX(M+1),P=o.getX(M+2);i=la(this,d,t,n,c,u,h,T,A,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);i=la(this,a,t,n,c,u,h,b,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,C=E;M<C;M+=3){const T=M,A=M+1,P=M+2;i=la(this,d,t,n,c,u,h,T,A,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=m,E=m+1,M=m+2;i=la(this,a,t,n,c,u,h,b,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function a_(r,t,e,n,i,s,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Li,o),l===null)return null;oa.copy(o),oa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(oa);return c<e.near||c>e.far?null:{distance:c,point:oa.clone(),object:r}}function la(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ia),r.getVertexPosition(l,ra),r.getVertexPosition(c,sa);const u=a_(r,t,e,n,ia,ra,sa,wu);if(u){const h=new O;Un.getBarycoord(wu,ia,ra,sa,h),i&&(u.uv=Un.getInterpolatedAttribute(i,o,l,c,h,new Qt)),s&&(u.uv1=Un.getInterpolatedAttribute(s,o,l,c,h,new Qt)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Un.getNormal(ia,ra,sa,f.normal),u.face=f,u.barycoord=h}return u}class ts extends Fi{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(h,2));function g(_,m,d,b,E,M,C,T,A,P,v){const S=M/A,D=C/P,k=M/2,U=C/2,N=T/2,$=A+1,H=P+1;let Q=0,V=0;const ot=new O;for(let ut=0;ut<H;ut++){const At=ut*D-U;for(let Bt=0;Bt<$;Bt++){const re=Bt*S-k;ot[_]=re*b,ot[m]=At*E,ot[d]=N,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[d]=T>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Bt/A),h.push(1-ut/P),Q+=1}}for(let ut=0;ut<P;ut++)for(let At=0;At<A;At++){const Bt=f+At+$*ut,re=f+At+$*(ut+1),K=f+(At+1)+$*(ut+1),it=f+(At+1)+$*ut;l.push(Bt,re,it),l.push(re,K,it),V+=6}o.addGroup(p,V,v),p+=V,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $r(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function je(r){const t={};for(let e=0;e<r.length;e++){const n=$r(r[e]);for(const i in n)t[i]=n[i]}return t}function o_(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Nf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const l_={clone:$r,merge:je};var c_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$r(t.uniforms),this.uniformsGroups=o_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ff extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new O,Ru=new Qt,Cu=new Qt;class pn extends Ff{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Cu),e.subVectors(Cu,Ru)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Er=-90,Tr=1;class h_ extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(Er,Tr,t,e);i.layers=this.layers,this.add(i);const s=new pn(Er,Tr,t,e);s.layers=this.layers,this.add(s);const a=new pn(Er,Tr,t,e);a.layers=this.layers,this.add(a);const o=new pn(Er,Tr,t,e);o.layers=this.layers,this.add(o);const l=new pn(Er,Tr,t,e);l.layers=this.layers,this.add(l);const c=new pn(Er,Tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Of extends Je{constructor(t=[],e=Kr,n,i,s,a,o,l,c,u){super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class f_ extends ar{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Of(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ts(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:wi});s.uniforms.tEquirect.value=e;const a=new Ie(i,s),o=e.minFilter;return e.minFilter===tr&&(e.minFilter=Hn),new h_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class ca extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ca;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Bf extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class p_ extends Je{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Mn,u=Mn,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pu extends Fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const br=new me,Du=new me,ua=[],Lu=new lr,m_=new me,cs=new Ie,us=new zs;class zf extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new lr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,br),Lu.copy(t.boundingBox).applyMatrix4(br),this.boundingBox.union(Lu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,br),us.copy(t.boundingSphere).applyMatrix4(br),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,br),Du.multiplyMatrices(n,br),cs.matrixWorld=Du,cs.raycast(t,ua);for(let a=0,o=ua.length;a<o;a++){const l=ua[a];l.instanceId=s,l.object=this,e.push(l)}ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new p_(new Float32Array(i*this.count),i,this.count,Mc,Gn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ro=new O,__=new O,g_=new Yt;class vi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ro.subVectors(n,e).cross(__.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||g_.getNormalMatrix(t),i=this.coplanarPoint(Ro).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new zs,v_=new Qt(.5,.5),ha=new O;class Rc{constructor(t=new vi,e=new vi,n=new vi,i=new vi,s=new vi,a=new vi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],b=i[13],E=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,m-p,M-d).normalize(),n[1].setComponents(l+s,f+c,m+p,M+d).normalize(),n[2].setComponents(l+a,f+u,m+g,M+b).normalize(),n[3].setComponents(l-a,f-u,m-g,M-b).normalize(),n[4].setComponents(l-o,f-h,m-_,M-E).normalize(),e===li)n[5].setComponents(l+o,f+h,m+_,M+E).normalize();else if(e===ka)n[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);const e=v_.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ha.x=i.normal.x>0?t.max.x:t.min.x,ha.y=i.normal.y>0?t.max.y:t.min.y,ha.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kf extends Je{constructor(t,e,n=sr,i,s,a,o=Mn,l=Mn,c,u=Is,h=1){if(u!==Is&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qa extends Fi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const b=d*f-a;for(let E=0;E<c;E++){const M=E*h-s;g.push(M,-b,0),_.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const E=b+c*d,M=b+c*(d+1),C=b+1+c*(d+1),T=b+1+c*d;p.push(E,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new Wn(g,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cc extends Fi{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new O,f=new O,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const b=[],E=d/n;let M=0;d===0&&a===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const T=C/e;h.x=-t*Math.cos(i+T*s)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(i+T*s)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-E),b.push(c++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const E=u[d][b+1],M=u[d][b],C=u[d+1][b],T=u[d+1][b+1];(d!==0||a>0)&&p.push(E,M,T),(d!==n-1||l<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new Wn(g,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zl extends ks{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class x_ extends zl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class M_ extends ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class S_ extends ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Vf extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Co=new me,Iu=new O,Uu=new O;class y_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),Co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nu=new me,hs=new O,Po=new O;class E_ extends y_{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(hs),Po.copy(n.position),Po.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Po),n.updateMatrixWorld(),i.makeTranslation(-hs.x,-hs.y,-hs.z),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}}class Hf extends Vf{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new E_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class T_ extends Ff{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class b_ extends Vf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class A_ extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class w_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Fu=new me;class R_{constructor(t,e,n=0,i=1/0){this.ray=new Df(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(t,e=!0,n=[]){return kl(t,this,n,e),n.sort(Ou),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)kl(t[i],this,n,e);return n.sort(Ou),n}}function Ou(r,t){return r.distance-t.distance}function kl(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)kl(s[a],t,e,!0)}}function Bu(r,t,e,n){const i=C_(n);switch(e){case Ef:return r*t;case Mc:return r*t/i.components*i.byteLength;case Sc:return r*t/i.components*i.byteLength;case bf:return r*t*2/i.components*i.byteLength;case yc:return r*t*2/i.components*i.byteLength;case Tf:return r*t*3/i.components*i.byteLength;case Nn:return r*t*4/i.components*i.byteLength;case Ec:return r*t*4/i.components*i.byteLength;case Sa:case ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Ta:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pl:case _l:return Math.max(r,16)*Math.max(t,8)/4;case dl:case ml:return Math.max(r,8)*Math.max(t,8)/2;case gl:case vl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ba:case Ul:case Nl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Af:case Fl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ol:case Bl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C_(r){switch(r){case qn:case Mf:return{byteLength:1,components:1};case Ds:case Sf:case Os:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case sr:case gc:case Gn:return{byteLength:4,components:1};case yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gf(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function P_(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var D_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ng=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ev=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:D_,alphahash_pars_fragment:L_,alphamap_fragment:I_,alphamap_pars_fragment:U_,alphatest_fragment:N_,alphatest_pars_fragment:F_,aomap_fragment:O_,aomap_pars_fragment:B_,batching_pars_vertex:z_,batching_vertex:k_,begin_vertex:V_,beginnormal_vertex:H_,bsdfs:G_,iridescence_fragment:W_,bumpmap_pars_fragment:X_,clipping_planes_fragment:Y_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:K_,clipping_planes_vertex:j_,color_fragment:Z_,color_pars_fragment:$_,color_pars_vertex:J_,color_vertex:Q_,common:tg,cube_uv_reflection_fragment:eg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:rg,emissivemap_fragment:sg,emissivemap_pars_fragment:ag,colorspace_fragment:og,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:ug,envmap_pars_fragment:hg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:Eg,envmap_vertex:dg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:_g,fog_pars_fragment:gg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:xg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Sg,lights_pars_begin:yg,lights_toon_fragment:Tg,lights_toon_pars_fragment:bg,lights_phong_fragment:Ag,lights_phong_pars_fragment:wg,lights_physical_fragment:Rg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Pg,lights_fragment_maps:Dg,lights_fragment_end:Lg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:zg,map_particle_pars_fragment:kg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Gg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:Yg,morphtarget_vertex:qg,normal_fragment_begin:Kg,normal_fragment_maps:jg,normal_pars_fragment:Zg,normal_pars_vertex:$g,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:r0,packing:s0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:_0,skinning_pars_vertex:g0,skinning_vertex:v0,skinnormal_vertex:x0,specularmap_fragment:M0,specularmap_pars_fragment:S0,tonemapping_fragment:y0,tonemapping_pars_fragment:E0,transmission_fragment:T0,transmission_pars_fragment:b0,uv_pars_fragment:A0,uv_pars_vertex:w0,uv_vertex:R0,worldpos_vertex:C0,background_vert:P0,background_frag:D0,backgroundCube_vert:L0,backgroundCube_frag:I0,cube_vert:U0,cube_frag:N0,depth_vert:F0,depth_frag:O0,distanceRGBA_vert:B0,distanceRGBA_frag:z0,equirect_vert:k0,equirect_frag:V0,linedashed_vert:H0,linedashed_frag:G0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:Y0,meshlambert_frag:q0,meshmatcap_vert:K0,meshmatcap_frag:j0,meshnormal_vert:Z0,meshnormal_frag:$0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:tv,meshphysical_frag:ev,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:rv,points_frag:sv,shadow_vert:av,shadow_frag:ov,sprite_vert:lv,sprite_frag:cv},dt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Bn={basic:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:je([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:je([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:je([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:je([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:je([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:je([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:je([dt.common,dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:je([dt.lights,dt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Bn.physical={uniforms:je([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const fa={r:0,b:0,g:0},Xi=new Kn,uv=new me;function hv(r,t,e,n,i,s,a){const o=new Zt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const C=g(E);C===null?d(o,l):C&&C.isColor&&(d(C,1),M=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===Ya)?(u===void 0&&(u=new Ie(new ts(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:$r(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Xi.copy(M.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(Xi)),u.material.toneMapped=oe.getTransfer(C.colorSpace)!==ue,(h!==C||f!==C.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,p=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ie(new qa(2,2),new Ii({name:"BackgroundMaterial",uniforms:$r(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=oe.getTransfer(C.colorSpace)!==ue,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,p=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,M){E.getRGB(fa,Nf(r)),n.buffers.color.setClear(fa.r,fa.g,fa.b,M,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:_,addToRenderList:m,dispose:b}}function fv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(S,D,k,U,N){let $=!1;const H=h(U,k,D);s!==H&&(s=H,c(s.object)),$=p(S,U,k,N),$&&g(S,U,k,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(S,D,k,U),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,D,k){const U=k.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let $=N[D.id];$===void 0&&($={},N[D.id]=$);let H=$[U];return H===void 0&&(H=f(l()),$[U]=H),H}function f(S){const D=[],k=[],U=[];for(let N=0;N<e;N++)D[N]=0,k[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,D,k,U){const N=s.attributes,$=D.attributes;let H=0;const Q=k.getAttributes();for(const V in Q)if(Q[V].location>=0){const ut=N[V];let At=$[V];if(At===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),ut===void 0||ut.attribute!==At||At&&ut.data!==At.data)return!0;H++}return s.attributesNum!==H||s.index!==U}function g(S,D,k,U){const N={},$=D.attributes;let H=0;const Q=k.getAttributes();for(const V in Q)if(Q[V].location>=0){let ut=$[V];ut===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));const At={};At.attribute=ut,ut&&ut.data&&(At.data=ut.data),N[V]=At,H++}s.attributes=N,s.attributesNum=H,s.index=U}function _(){const S=s.newAttributes;for(let D=0,k=S.length;D<k;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const k=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;k[S]=1,U[S]===0&&(r.enableVertexAttribArray(S),U[S]=1),N[S]!==D&&(r.vertexAttribDivisor(S,D),N[S]=D)}function b(){const S=s.newAttributes,D=s.enabledAttributes;for(let k=0,U=D.length;k<U;k++)D[k]!==S[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function E(S,D,k,U,N,$,H){H===!0?r.vertexAttribIPointer(S,D,k,N,$):r.vertexAttribPointer(S,D,k,U,N,$)}function M(S,D,k,U){_();const N=U.attributes,$=k.getAttributes(),H=D.defaultAttributeValues;for(const Q in $){const V=$[Q];if(V.location>=0){let ot=N[Q];if(ot===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const ut=ot.normalized,At=ot.itemSize,Bt=t.get(ot);if(Bt===void 0)continue;const re=Bt.buffer,K=Bt.type,it=Bt.bytesPerElement,wt=K===r.INT||K===r.UNSIGNED_INT||ot.gpuType===gc;if(ot.isInterleavedBufferAttribute){const mt=ot.data,Pt=mt.stride,qt=ot.offset;if(mt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<V.locationSize;Nt++)d(V.location+Nt,mt.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Nt=0;Nt<V.locationSize;Nt++)m(V.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,re);for(let Nt=0;Nt<V.locationSize;Nt++)E(V.location+Nt,At/V.locationSize,K,ut,Pt*it,(qt+At/V.locationSize*Nt)*it,wt)}else{if(ot.isInstancedBufferAttribute){for(let mt=0;mt<V.locationSize;mt++)d(V.location+mt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let mt=0;mt<V.locationSize;mt++)m(V.location+mt);r.bindBuffer(r.ARRAY_BUFFER,re);for(let mt=0;mt<V.locationSize;mt++)E(V.location+mt,At/V.locationSize,K,ut,At*it,At/V.locationSize*mt*it,wt)}}else if(H!==void 0){const ut=H[Q];if(ut!==void 0)switch(ut.length){case 2:r.vertexAttrib2fv(V.location,ut);break;case 3:r.vertexAttrib3fv(V.location,ut);break;case 4:r.vertexAttrib4fv(V.location,ut);break;default:r.vertexAttrib1fv(V.location,ut)}}}}b()}function C(){P();for(const S in n){const D=n[S];for(const k in D){const U=D[k];for(const N in U)u(U[N].object),delete U[N];delete D[k]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const k in D){const U=D[k];for(const N in U)u(U[N].object),delete U[N];delete D[k]}delete n[S.id]}function A(S){for(const D in n){const k=n[D];if(k[S.id]===void 0)continue;const U=k[S.id];for(const N in U)u(U[N].object),delete U[N];delete k[S.id]}}function P(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function dv(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Nn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==qn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!P)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function mv(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new vi,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,E=b*4;let M=d.clippingState||null;l.value=M,M=u(g,f,E,p);for(let C=0;C!==E;++C)M[C]=e[C];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,M=p;E!==_;++E,M+=4)a.copy(h[E]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _v(r){let t=new WeakMap;function e(a,o){return o===cl?a.mapping=Kr:o===ul&&(a.mapping=jr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cl||o===ul)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new f_(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Lr=4,zu=[.125,.215,.35,.446,.526,.582],$i=20,Do=new T_,ku=new Zt;let Lo=null,Io=0,Uo=0,No=!1;const ji=(1+Math.sqrt(5))/2,Ar=1/ji,Vu=[new O(-ji,Ar,0),new O(ji,Ar,0),new O(-Ar,0,ji),new O(Ar,0,ji),new O(0,ji,-Ar),new O(0,ji,Ar),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],gv=new O;class Vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=gv}=s;Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Io,Uo),this._renderer.xr.enabled=No,t.scissorTest=!1,da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kr||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Os,format:Nn,colorSpace:Zr,depthBuffer:!1},i=Hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(s)),this._blurMaterial=xv(s,t,e)}return i}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,n,i,s){const l=new pn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ku),h.toneMapping=Ri,h.autoClear=!1;const g=new wc({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),_=new Ie(new ts,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(ku),m=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const M=this._cubeSize;da(i,E*M,b>2?M:0,M,M),h.setRenderTarget(i),m&&h.render(_,l),h.render(t,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Kr||t.mapping===jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;da(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Do)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vu[(i-s-1)%Vu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ie(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$i-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):$i;m>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const d=[];let b=0;for(let A=0;A<$i;++A){const P=A/_,v=Math.exp(-P*P/2);d.push(v),A===0?b+=v:A<m&&(b+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const M=this._sizeLods[i],C=3*M*(i>E-Lr?i-E+Lr:0),T=4*(this._cubeSize-M);da(e,C,T,3*M,2*M),l.setRenderTarget(e),l.render(h,Do)}}function vv(r){const t=[],e=[],n=[];let i=r;const s=r-Lr+1+zu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Lr?l=zu[a-r+Lr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),E=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,v=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(v,_*g*T),E.set(f,m*g*T);const S=[T,T,T,T,T,T];M.set(S,d*g*T)}const C=new Fi;C.setAttribute("position",new Fn(b,_)),C.setAttribute("uv",new Fn(E,m)),C.setAttribute("faceIndex",new Fn(M,d)),t.push(C),i>Lr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hu(r,t,e){const n=new ar(r,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function xv(r,t,e){const n=new Float32Array($i),i=new O(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Gu(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Wu(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mv(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cl||l===ul,u=l===Kr||l===jr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Vl(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new Vl(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yv(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],r.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let E=0,M=b.length;E<M;E+=3){const C=b[E+0],T=b[E+1],A=b[E+2];f.push(C,T,T,A,A,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,M=b.length/3-1;E<M;E+=3){const C=E+0,T=E+1,A=E+2;f.push(C,T,T,A,A,C)}}else return;const m=new(Cf(f)?Uf:If)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ev(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){r.drawElements(n,p,s,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*_[b];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bv(r,t,e){const n=new WeakMap,i=new he;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let M=o.attributes.position.count*E,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const T=new Float32Array(M*C*4*h),A=new Pf(T,M,C,h);A.type=Gn,A.needsUpdate=!0;const P=E*4;for(let S=0;S<h;S++){const D=m[S],k=d[S],U=b[S],N=M*C*4*S;for(let $=0;$<D.count;$++){const H=$*P;p===!0&&(i.fromBufferAttribute(D,$),T[N+H+0]=i.x,T[N+H+1]=i.y,T[N+H+2]=i.z,T[N+H+3]=0),g===!0&&(i.fromBufferAttribute(k,$),T[N+H+4]=i.x,T[N+H+5]=i.y,T[N+H+6]=i.z,T[N+H+7]=0),_===!0&&(i.fromBufferAttribute(U,$),T[N+H+8]=i.x,T[N+H+9]=i.y,T[N+H+10]=i.z,T[N+H+11]=U.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new Qt(M,C)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Av(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Wf=new Je,Xu=new kf(1,1),Xf=new Pf,Yf=new jm,qf=new Of,Yu=[],qu=[],Ku=new Float32Array(16),ju=new Float32Array(9),Zu=new Float32Array(4);function es(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Yu[i];if(s===void 0&&(s=new Float32Array(i),Yu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Pe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function De(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ka(r,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function wv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Rv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2fv(this.addr,t),De(e,t)}}function Cv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;r.uniform3fv(this.addr,t),De(e,t)}}function Pv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4fv(this.addr,t),De(e,t)}}function Dv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;Zu.set(n),r.uniformMatrix2fv(this.addr,!1,Zu),De(e,n)}}function Lv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;ju.set(n),r.uniformMatrix3fv(this.addr,!1,ju),De(e,n)}}function Iv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;Ku.set(n),r.uniformMatrix4fv(this.addr,!1,Ku),De(e,n)}}function Uv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Nv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2iv(this.addr,t),De(e,t)}}function Fv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3iv(this.addr,t),De(e,t)}}function Ov(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4iv(this.addr,t),De(e,t)}}function Bv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function zv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2uiv(this.addr,t),De(e,t)}}function kv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3uiv(this.addr,t),De(e,t)}}function Vv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4uiv(this.addr,t),De(e,t)}}function Hv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Xu.compareFunction=Rf,s=Xu):s=Wf,e.setTexture2D(t||s,i)}function Gv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yf,i)}function Wv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qf,i)}function Xv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xf,i)}function Yv(r){switch(r){case 5126:return wv;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Dv;case 35675:return Lv;case 35676:return Iv;case 5124:case 35670:return Uv;case 35667:case 35671:return Nv;case 35668:case 35672:return Fv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return zv;case 36295:return kv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function qv(r,t){r.uniform1fv(this.addr,t)}function Kv(r,t){const e=es(t,this.size,2);r.uniform2fv(this.addr,e)}function jv(r,t){const e=es(t,this.size,3);r.uniform3fv(this.addr,e)}function Zv(r,t){const e=es(t,this.size,4);r.uniform4fv(this.addr,e)}function $v(r,t){const e=es(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Jv(r,t){const e=es(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Qv(r,t){const e=es(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function tx(r,t){r.uniform1iv(this.addr,t)}function ex(r,t){r.uniform2iv(this.addr,t)}function nx(r,t){r.uniform3iv(this.addr,t)}function ix(r,t){r.uniform4iv(this.addr,t)}function rx(r,t){r.uniform1uiv(this.addr,t)}function sx(r,t){r.uniform2uiv(this.addr,t)}function ax(r,t){r.uniform3uiv(this.addr,t)}function ox(r,t){r.uniform4uiv(this.addr,t)}function lx(r,t,e){const n=this.cache,i=t.length,s=Ka(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Wf,s[a])}function cx(r,t,e){const n=this.cache,i=t.length,s=Ka(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Yf,s[a])}function ux(r,t,e){const n=this.cache,i=t.length,s=Ka(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||qf,s[a])}function hx(r,t,e){const n=this.cache,i=t.length,s=Ka(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),De(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Xf,s[a])}function fx(r){switch(r){case 5126:return qv;case 35664:return Kv;case 35665:return jv;case 35666:return Zv;case 35674:return $v;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return hx}}class dx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yv(e.type)}}class px{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fx(e.type)}}class mx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function $u(r,t){r.seq.push(t),r.map[t.id]=t}function _x(r,t,e){const n=r.name,i=n.length;for(Fo.lastIndex=0;;){const s=Fo.exec(n),a=Fo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$u(e,c===void 0?new dx(o,r,t):new px(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new mx(o),$u(e,h)),e=h}}}class Aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);_x(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ju(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const gx=37297;let vx=0;function xx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Qu=new Yt;function Mx(r){oe._getMatrix(Qu,oe.workingColorSpace,r);const t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(r)){case za:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function th(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+xx(r.getShaderSource(t),a)}else return i}function Sx(r,t){const e=Mx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yx(r,t){let e;switch(t){case om:e="Linear";break;case lm:e="Reinhard";break;case cm:e="Cineon";break;case vf:e="ACESFilmic";break;case hm:e="AgX";break;case fm:e="Neutral";break;case um:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pa=new O;function Ex(){oe.getLuminanceCoefficients(pa);const r=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function bx(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ax(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ps(r){return r!==""}function eh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(r){return r.replace(wx,Cx)}const Rx=new Map;function Cx(r,t){let e=Xt[t];if(e===void 0){const n=Rx.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(r){return r.replace(Px,Dx)}function Dx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_f?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===kp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Ix(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Kr:case jr:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ux(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jr:t="ENVMAP_MODE_REFRACTION";break}return t}function Nx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gf:t="ENVMAP_BLENDING_MULTIPLY";break;case sm:t="ENVMAP_BLENDING_MIX";break;case am:t="ENVMAP_BLENDING_ADD";break}return t}function Fx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ox(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Lx(e),c=Ix(e),u=Ux(e),h=Nx(e),f=Fx(e),p=Tx(e),g=bx(s),_=i.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),d.length>0&&(d+=`
`)):(m=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),d=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Sx("linearToOutputTexel",e.outputColorSpace),Ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=Hl(a),a=eh(a,e),a=nh(a,e),o=Hl(o),o=eh(o,e),o=nh(o,e),a=ih(a),o=ih(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=b+m+a,M=b+d+o,C=Ju(i,i.VERTEX_SHADER,E),T=Ju(i,i.FRAGMENT_SHADER,M);i.attachShader(_,C),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(D){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(C).trim(),N=i.getShaderInfoLog(T).trim();let $=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,T);else{const Q=th(i,C,"vertex"),V=th(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+Q+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(U===""||N==="")&&(H=!1);H&&(D.diagnostics={runnable:$,programLog:k,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:d}})}i.deleteShader(C),i.deleteShader(T),P=new Aa(i,_),v=Ax(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,gx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let Bx=0;class zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kx(t),e.set(t,n)),n}}class kx{constructor(t){this.id=Bx++,this.code=t,this.usedTimes=0}}function Vx(r,t,e,n,i,s,a){const o=new Ac,l=new zx,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,D,k,U){const N=k.fog,$=U.geometry,H=v.isMeshStandardMaterial?k.environment:null,Q=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),V=Q&&Q.mapping===Ya?Q.image.height:null,ot=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,At=ut!==void 0?ut.length:0;let Bt=0;$.morphAttributes.position!==void 0&&(Bt=1),$.morphAttributes.normal!==void 0&&(Bt=2),$.morphAttributes.color!==void 0&&(Bt=3);let re,K,it,wt;if(ot){const Mt=Bn[ot];re=Mt.vertexShader,K=Mt.fragmentShader}else re=v.vertexShader,K=v.fragmentShader,l.update(v),it=l.getVertexShaderID(v),wt=l.getFragmentShaderID(v);const mt=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),qt=U.isInstancedMesh===!0,Nt=U.isBatchedMesh===!0,$t=!!v.map,se=!!v.matcap,ht=!!Q,w=!!v.aoMap,q=!!v.lightMap,st=!!v.bumpMap,I=!!v.normalMap,lt=!!v.displacementMap,Lt=!!v.emissiveMap,_t=!!v.metalnessMap,vt=!!v.roughnessMap,Wt=v.anisotropy>0,R=v.clearcoat>0,x=v.dispersion>0,B=v.iridescence>0,j=v.sheen>0,Y=v.transmission>0,X=Wt&&!!v.anisotropyMap,xt=R&&!!v.clearcoatMap,at=R&&!!v.clearcoatNormalMap,St=R&&!!v.clearcoatRoughnessMap,yt=B&&!!v.iridescenceMap,tt=B&&!!v.iridescenceThicknessMap,pt=j&&!!v.sheenColorMap,Dt=j&&!!v.sheenRoughnessMap,It=!!v.specularMap,ct=!!v.specularColorMap,zt=!!v.specularIntensityMap,L=Y&&!!v.transmissionMap,ft=Y&&!!v.thicknessMap,et=!!v.gradientMap,Et=!!v.alphaMap,nt=v.alphaTest>0,J=!!v.alphaHash,bt=!!v.extensions;let kt=Ri;v.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(kt=r.toneMapping);const le={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:re,fragmentShader:K,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:wt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&U._colorsTexture!==null,instancing:qt,instancingColor:qt&&U.instanceColor!==null,instancingMorph:qt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?r.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Zr,alphaToCoverage:!!v.alphaToCoverage,map:$t,matcap:se,envMap:ht,envMapMode:ht&&Q.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:q,bumpMap:st,normalMap:I,displacementMap:f&&lt,emissiveMap:Lt,normalMapObjectSpace:I&&v.normalMapType===_m,normalMapTangentSpace:I&&v.normalMapType===wf,metalnessMap:_t,roughnessMap:vt,anisotropy:Wt,anisotropyMap:X,clearcoat:R,clearcoatMap:xt,clearcoatNormalMap:at,clearcoatRoughnessMap:St,dispersion:x,iridescence:B,iridescenceMap:yt,iridescenceThicknessMap:tt,sheen:j,sheenColorMap:pt,sheenRoughnessMap:Dt,specularMap:It,specularColorMap:ct,specularIntensityMap:zt,transmission:Y,transmissionMap:L,thicknessMap:ft,gradientMap:et,opaque:v.transparent===!1&&v.blending===Or&&v.alphaToCoverage===!1,alphaMap:Et,alphaTest:nt,alphaHash:J,combine:v.combine,mapUv:$t&&_(v.map.channel),aoMapUv:w&&_(v.aoMap.channel),lightMapUv:q&&_(v.lightMap.channel),bumpMapUv:st&&_(v.bumpMap.channel),normalMapUv:I&&_(v.normalMap.channel),displacementMapUv:lt&&_(v.displacementMap.channel),emissiveMapUv:Lt&&_(v.emissiveMap.channel),metalnessMapUv:_t&&_(v.metalnessMap.channel),roughnessMapUv:vt&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:xt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(v.sheenRoughnessMap.channel),specularMapUv:It&&_(v.specularMap.channel),specularColorMapUv:ct&&_(v.specularColorMap.channel),specularIntensityMapUv:zt&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:ft&&_(v.thicknessMap.channel),alphaMapUv:Et&&_(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(I||Wt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&($t||Et),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pt,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:kt,decodeVideoTexture:$t&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&oe.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ri,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:bt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&v.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function d(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(b(S,v),E(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function b(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const S=g[v.type];let D;if(S){const k=Bn[S];D=l_.clone(k.uniforms)}else D=v.uniforms;return D}function C(v,S){let D;for(let k=0,U=u.length;k<U;k++){const N=u[k];if(N.cacheKey===S){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Ox(r,S,v,s),u.push(D)),D}function T(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function A(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:P}}function Hx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Gx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function sh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ah(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Gx),n.length>1&&n.sort(f||sh),i.length>1&&i.sort(f||sh)}function u(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Wx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new ah,r.set(n,[a])):i>=s.length?(a=new ah,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Xx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function Yx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let qx=0;function Kx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function jx(r){const t=new Xx,e=Yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new me,a=new me;function o(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,b=0,E=0,M=0,C=0,T=0,A=0;c.sort(Kx);for(let v=0,S=c.length;v<S;v++){const D=c[v],k=D.color,U=D.intensity,N=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*U,h+=k.g*U,f+=k.b*U;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],U);A++}else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,V=e.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=H,p++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(k).multiplyScalar(U),H.distance=N,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[_]=H;const Q=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,Q.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,D.castShadow){const V=e.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=$,M++}_++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(k).multiplyScalar(U),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const Q=D.shadow,V=e.get(D);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=D.shadow.matrix,E++}n.point[g]=H,g++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(U),H.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[d]=H,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=A,n.version=qx++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const E=c[d];if(E.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(E.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function oh(r){const t=new jx(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Zx(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new oh(r),t.set(i,[o])):s>=a.length?(o=new oh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qx(r,t,e){let n=new Rc;const i=new Qt,s=new Qt,a=new he,o=new M_({depthPacking:mm}),l=new S_,c={},u=e.maxTextureSize,h={[Li]:$e,[$e]:Li,[ri]:ri},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:$x,fragmentShader:Jx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fi;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let d=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const v=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),k=r.state;k.setBlending(wi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const U=d!==ti&&this.type===ti,N=d===ti&&this.type!==ti;for(let $=0,H=T.length;$<H;$++){const Q=T[$],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ot=V.getFrameExtents();if(i.multiply(ot),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ot.x),i.x=s.x*ot.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ot.y),i.y=s.y*ot.y,V.mapSize.y=s.y)),V.map===null||U===!0||N===!0){const At=this.type!==ti?{minFilter:Mn,magFilter:Mn}:{};V.map!==null&&V.map.dispose(),V.map=new ar(i.x,i.y,At),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const ut=V.getViewportCount();for(let At=0;At<ut;At++){const Bt=V.getViewport(At);a.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),k.viewport(a),V.updateMatrices(Q,At),n=V.getFrustum(),M(A,P,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&b(V,P),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(v,S,D)};function b(T,A){const P=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ar(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,P,p,_,null)}function E(T,A,P,v){let S=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=S.uuid,U=A.uuid;let N=c[k];N===void 0&&(N={},c[k]=N);let $=N[U];$===void 0&&($=S.clone(),N[U]=$,A.addEventListener("dispose",C)),S=$}if(S.visible=A.visible,S.wireframe=A.wireframe,v===ti?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=r.properties.get(S);k.light=P}return S}function M(T,A,P,v,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ti)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const U=t.update(T),N=T.material;if(Array.isArray(N)){const $=U.groups;for(let H=0,Q=$.length;H<Q;H++){const V=$[H],ot=N[V.materialIndex];if(ot&&ot.visible){const ut=E(T,ot,v,S);T.onBeforeShadow(r,T,A,P,U,ut,V),r.renderBufferDirect(P,null,U,ut,T,V),T.onAfterShadow(r,T,A,P,U,ut,V)}}}else if(N.visible){const $=E(T,N,v,S);T.onBeforeShadow(r,T,A,P,U,$,null),r.renderBufferDirect(P,null,U,$,T,null),T.onAfterShadow(r,T,A,P,U,$,null)}}const k=T.children;for(let U=0,N=k.length;U<N;U++)M(k[U],A,P,v,S)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const v=c[P],S=T.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const tM={[nl]:il,[rl]:ol,[sl]:ll,[qr]:al,[il]:nl,[ol]:rl,[ll]:sl,[al]:qr};function eM(r,t){function e(){let L=!1;const ft=new he;let et=null;const Et=new he(0,0,0,0);return{setMask:function(nt){et!==nt&&!L&&(r.colorMask(nt,nt,nt,nt),et=nt)},setLocked:function(nt){L=nt},setClear:function(nt,J,bt,kt,le){le===!0&&(nt*=kt,J*=kt,bt*=kt),ft.set(nt,J,bt,kt),Et.equals(ft)===!1&&(r.clearColor(nt,J,bt,kt),Et.copy(ft))},reset:function(){L=!1,et=null,Et.set(-1,0,0,0)}}}function n(){let L=!1,ft=!1,et=null,Et=null,nt=null;return{setReversed:function(J){if(ft!==J){const bt=t.get("EXT_clip_control");J?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ft=J;const kt=nt;nt=null,this.setClear(kt)}},getReversed:function(){return ft},setTest:function(J){J?mt(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(J){et!==J&&!L&&(r.depthMask(J),et=J)},setFunc:function(J){if(ft&&(J=tM[J]),Et!==J){switch(J){case nl:r.depthFunc(r.NEVER);break;case il:r.depthFunc(r.ALWAYS);break;case rl:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case sl:r.depthFunc(r.EQUAL);break;case al:r.depthFunc(r.GEQUAL);break;case ol:r.depthFunc(r.GREATER);break;case ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Et=J}},setLocked:function(J){L=J},setClear:function(J){nt!==J&&(ft&&(J=1-J),r.clearDepth(J),nt=J)},reset:function(){L=!1,et=null,Et=null,nt=null,ft=!1}}}function i(){let L=!1,ft=null,et=null,Et=null,nt=null,J=null,bt=null,kt=null,le=null;return{setTest:function(Mt){L||(Mt?mt(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(Mt){ft!==Mt&&!L&&(r.stencilMask(Mt),ft=Mt)},setFunc:function(Mt,Ct,Kt){(et!==Mt||Et!==Ct||nt!==Kt)&&(r.stencilFunc(Mt,Ct,Kt),et=Mt,Et=Ct,nt=Kt)},setOp:function(Mt,Ct,Kt){(J!==Mt||bt!==Ct||kt!==Kt)&&(r.stencilOp(Mt,Ct,Kt),J=Mt,bt=Ct,kt=Kt)},setLocked:function(Mt){L=Mt},setClear:function(Mt){le!==Mt&&(r.clearStencil(Mt),le=Mt)},reset:function(){L=!1,ft=null,et=null,Et=null,nt=null,J=null,bt=null,kt=null,le=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,E=null,M=null,C=null,T=null,A=new Zt(0,0,0),P=0,v=!1,S=null,D=null,k=null,U=null,N=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=Q>=2);let ot=null,ut={};const At=r.getParameter(r.SCISSOR_BOX),Bt=r.getParameter(r.VIEWPORT),re=new he().fromArray(At),K=new he().fromArray(Bt);function it(L,ft,et,Et){const nt=new Uint8Array(4),J=r.createTexture();r.bindTexture(L,J),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<et;bt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,Et,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(ft+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return J}const wt={};wt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),wt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),wt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(r.DEPTH_TEST),a.setFunc(qr),st(!1),I(su),mt(r.CULL_FACE),w(wi);function mt(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Pt(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function qt(L,ft){return h[L]!==ft?(r.bindFramebuffer(L,ft),h[L]=ft,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ft),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function Nt(L,ft){let et=p,Et=!1;if(L){et=f.get(ft),et===void 0&&(et=[],f.set(ft,et));const nt=L.textures;if(et.length!==nt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let J=0,bt=nt.length;J<bt;J++)et[J]=r.COLOR_ATTACHMENT0+J;et.length=nt.length,Et=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,Et=!0);Et&&r.drawBuffers(et)}function $t(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const se={[Zi]:r.FUNC_ADD,[Hp]:r.FUNC_SUBTRACT,[Gp]:r.FUNC_REVERSE_SUBTRACT};se[Wp]=r.MIN,se[Xp]=r.MAX;const ht={[Yp]:r.ZERO,[qp]:r.ONE,[Kp]:r.SRC_COLOR,[tl]:r.SRC_ALPHA,[tm]:r.SRC_ALPHA_SATURATE,[Jp]:r.DST_COLOR,[Zp]:r.DST_ALPHA,[jp]:r.ONE_MINUS_SRC_COLOR,[el]:r.ONE_MINUS_SRC_ALPHA,[Qp]:r.ONE_MINUS_DST_COLOR,[$p]:r.ONE_MINUS_DST_ALPHA,[em]:r.CONSTANT_COLOR,[nm]:r.ONE_MINUS_CONSTANT_COLOR,[im]:r.CONSTANT_ALPHA,[rm]:r.ONE_MINUS_CONSTANT_ALPHA};function w(L,ft,et,Et,nt,J,bt,kt,le,Mt){if(L===wi){_===!0&&(Pt(r.BLEND),_=!1);return}if(_===!1&&(mt(r.BLEND),_=!0),L!==Vp){if(L!==m||Mt!==v){if((d!==Zi||M!==Zi)&&(r.blendEquation(r.FUNC_ADD),d=Zi,M=Zi),Mt)switch(L){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case au:r.blendFunc(r.ONE,r.ONE);break;case ou:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case au:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ou:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,E=null,C=null,T=null,A.set(0,0,0),P=0,m=L,v=Mt}return}nt=nt||ft,J=J||et,bt=bt||Et,(ft!==d||nt!==M)&&(r.blendEquationSeparate(se[ft],se[nt]),d=ft,M=nt),(et!==b||Et!==E||J!==C||bt!==T)&&(r.blendFuncSeparate(ht[et],ht[Et],ht[J],ht[bt]),b=et,E=Et,C=J,T=bt),(kt.equals(A)===!1||le!==P)&&(r.blendColor(kt.r,kt.g,kt.b,le),A.copy(kt),P=le),m=L,v=!1}function q(L,ft){L.side===ri?Pt(r.CULL_FACE):mt(r.CULL_FACE);let et=L.side===$e;ft&&(et=!et),st(et),L.blending===Or&&L.transparent===!1?w(wi):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const Et=L.stencilWrite;o.setTest(Et),Et&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(L){S!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),S=L)}function I(L){L!==Bp?(mt(r.CULL_FACE),L!==D&&(L===su?r.cullFace(r.BACK):L===zp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),D=L}function lt(L){L!==k&&(H&&r.lineWidth(L),k=L)}function Lt(L,ft,et){L?(mt(r.POLYGON_OFFSET_FILL),(U!==ft||N!==et)&&(r.polygonOffset(ft,et),U=ft,N=et)):Pt(r.POLYGON_OFFSET_FILL)}function _t(L){L?mt(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function vt(L){L===void 0&&(L=r.TEXTURE0+$-1),ot!==L&&(r.activeTexture(L),ot=L)}function Wt(L,ft,et){et===void 0&&(ot===null?et=r.TEXTURE0+$-1:et=ot);let Et=ut[et];Et===void 0&&(Et={type:void 0,texture:void 0},ut[et]=Et),(Et.type!==L||Et.texture!==ft)&&(ot!==et&&(r.activeTexture(et),ot=et),r.bindTexture(L,ft||wt[L]),Et.type=L,Et.texture=ft)}function R(){const L=ut[ot];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(L){re.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function Dt(L){K.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function It(L,ft){let et=c.get(ft);et===void 0&&(et=new WeakMap,c.set(ft,et));let Et=et.get(L);Et===void 0&&(Et=r.getUniformBlockIndex(ft,L.name),et.set(L,Et))}function ct(L,ft){const Et=c.get(ft).get(L);l.get(ft)!==Et&&(r.uniformBlockBinding(ft,Et,L.__bindingPointIndex),l.set(ft,Et))}function zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ot=null,ut={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,E=null,M=null,C=null,T=null,A=new Zt(0,0,0),P=0,v=!1,S=null,D=null,k=null,U=null,N=null,re.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:mt,disable:Pt,bindFramebuffer:qt,drawBuffers:Nt,useProgram:$t,setBlending:w,setMaterial:q,setFlipSided:st,setCullFace:I,setLineWidth:lt,setPolygonOffset:Lt,setScissorTest:_t,activeTexture:vt,bindTexture:Wt,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:yt,texImage3D:tt,updateUBOMapping:It,uniformBlockBinding:ct,texStorage2D:at,texStorage3D:St,texSubImage2D:j,texSubImage3D:Y,compressedTexSubImage2D:X,compressedTexSubImage3D:xt,scissor:pt,viewport:Dt,reset:zt}}function nM(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return p?new OffscreenCanvas(R,x):Va("canvas")}function _(R,x,B){let j=1;const Y=Wt(R);if((Y.width>B||Y.height>B)&&(j=B/Math.max(Y.width,Y.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(j*Y.width),xt=Math.floor(j*Y.height);h===void 0&&(h=g(X,xt));const at=x?g(X,xt):h;return at.width=X,at.height=xt,at.getContext("2d").drawImage(R,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+xt+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){r.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,x,B,j,Y=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=x;if(x===r.RED&&(B===r.FLOAT&&(X=r.R32F),B===r.HALF_FLOAT&&(X=r.R16F),B===r.UNSIGNED_BYTE&&(X=r.R8)),x===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.R8UI),B===r.UNSIGNED_SHORT&&(X=r.R16UI),B===r.UNSIGNED_INT&&(X=r.R32UI),B===r.BYTE&&(X=r.R8I),B===r.SHORT&&(X=r.R16I),B===r.INT&&(X=r.R32I)),x===r.RG&&(B===r.FLOAT&&(X=r.RG32F),B===r.HALF_FLOAT&&(X=r.RG16F),B===r.UNSIGNED_BYTE&&(X=r.RG8)),x===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RG8UI),B===r.UNSIGNED_SHORT&&(X=r.RG16UI),B===r.UNSIGNED_INT&&(X=r.RG32UI),B===r.BYTE&&(X=r.RG8I),B===r.SHORT&&(X=r.RG16I),B===r.INT&&(X=r.RG32I)),x===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RGB8UI),B===r.UNSIGNED_SHORT&&(X=r.RGB16UI),B===r.UNSIGNED_INT&&(X=r.RGB32UI),B===r.BYTE&&(X=r.RGB8I),B===r.SHORT&&(X=r.RGB16I),B===r.INT&&(X=r.RGB32I)),x===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),B===r.UNSIGNED_INT&&(X=r.RGBA32UI),B===r.BYTE&&(X=r.RGBA8I),B===r.SHORT&&(X=r.RGBA16I),B===r.INT&&(X=r.RGBA32I)),x===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),x===r.RGBA){const xt=Y?za:oe.getTransfer(j);B===r.FLOAT&&(X=r.RGBA32F),B===r.HALF_FLOAT&&(X=r.RGBA16F),B===r.UNSIGNED_BYTE&&(X=xt===ue?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(R,x){let B;return R?x===null||x===sr||x===Ls?B=r.DEPTH24_STENCIL8:x===Gn?B=r.DEPTH32F_STENCIL8:x===Ds&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===sr||x===Ls?B=r.DEPTH_COMPONENT24:x===Gn?B=r.DEPTH_COMPONENT32F:x===Ds&&(B=r.DEPTH_COMPONENT16),B}function C(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==Hn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function T(R){const x=R.target;x.removeEventListener("dispose",T),P(x),x.isVideoTexture&&u.delete(x)}function A(R){const x=R.target;x.removeEventListener("dispose",A),S(x)}function P(R){const x=n.get(R);if(x.__webglInit===void 0)return;const B=R.source,j=f.get(B);if(j){const Y=j[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(R),Object.keys(j).length===0&&f.delete(B)}n.remove(R)}function v(R){const x=n.get(R);r.deleteTexture(x.__webglTexture);const B=R.source,j=f.get(B);delete j[x.__cacheKey],a.memory.textures--}function S(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Y=0;Y<x.__webglFramebuffer[j].length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[j][Y]);else r.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)r.deleteFramebuffer(x.__webglFramebuffer[j]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=R.textures;for(let j=0,Y=B.length;j<Y;j++){const X=n.get(B[j]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(B[j])}n.remove(R)}let D=0;function k(){D=0}function U(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function N(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function $(R,x){const B=n.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(B,R,x);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+x)}function H(R,x){const B=n.get(R);if(R.version>0&&B.__version!==R.version){wt(B,R,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+x)}function Q(R,x){const B=n.get(R);if(R.version>0&&B.__version!==R.version){wt(B,R,x);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+x)}function V(R,x){const B=n.get(R);if(R.version>0&&B.__version!==R.version){mt(B,R,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+x)}const ot={[hl]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[fl]:r.MIRRORED_REPEAT},ut={[Mn]:r.NEAREST,[dm]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[so]:r.LINEAR_MIPMAP_NEAREST,[tr]:r.LINEAR_MIPMAP_LINEAR},At={[gm]:r.NEVER,[Em]:r.ALWAYS,[vm]:r.LESS,[Rf]:r.LEQUAL,[xm]:r.EQUAL,[ym]:r.GEQUAL,[Mm]:r.GREATER,[Sm]:r.NOTEQUAL};function Bt(R,x){if(x.type===Gn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Hn||x.magFilter===so||x.magFilter===Ys||x.magFilter===tr||x.minFilter===Hn||x.minFilter===so||x.minFilter===Ys||x.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ot[x.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ot[x.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ot[x.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ut[x.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,At[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Mn||x.minFilter!==Ys&&x.minFilter!==tr||x.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(R,x){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",T));const j=x.source;let Y=f.get(j);Y===void 0&&(Y={},f.set(j,Y));const X=N(x);if(X!==R.__cacheKey){Y[X]===void 0&&(Y[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[X].usedTimes++;const xt=Y[R.__cacheKey];xt!==void 0&&(Y[R.__cacheKey].usedTimes--,xt.usedTimes===0&&v(x)),R.__cacheKey=X,R.__webglTexture=Y[X].texture}return B}function K(R,x,B){return Math.floor(Math.floor(R/B)/x)}function it(R,x,B,j){const X=R.updateRanges;if(X.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,B,j,x.data);else{X.sort((tt,pt)=>tt.start-pt.start);let xt=0;for(let tt=1;tt<X.length;tt++){const pt=X[xt],Dt=X[tt],It=pt.start+pt.count,ct=K(Dt.start,x.width,4),zt=K(pt.start,x.width,4);Dt.start<=It+1&&ct===zt&&K(Dt.start+Dt.count-1,x.width,4)===ct?pt.count=Math.max(pt.count,Dt.start+Dt.count-pt.start):(++xt,X[xt]=Dt)}X.length=xt+1;const at=r.getParameter(r.UNPACK_ROW_LENGTH),St=r.getParameter(r.UNPACK_SKIP_PIXELS),yt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let tt=0,pt=X.length;tt<pt;tt++){const Dt=X[tt],It=Math.floor(Dt.start/4),ct=Math.ceil(Dt.count/4),zt=It%x.width,L=Math.floor(It/x.width),ft=ct,et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,zt,L,ft,et,B,j,x.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,at),r.pixelStorei(r.UNPACK_SKIP_PIXELS,St),r.pixelStorei(r.UNPACK_SKIP_ROWS,yt)}}function wt(R,x,B){let j=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=r.TEXTURE_3D);const Y=re(R,x),X=x.source;e.bindTexture(j,R.__webglTexture,r.TEXTURE0+B);const xt=n.get(X);if(X.version!==xt.__version||Y===!0){e.activeTexture(r.TEXTURE0+B);const at=oe.getPrimaries(oe.workingColorSpace),St=x.colorSpace===xi?null:oe.getPrimaries(x.colorSpace),yt=x.colorSpace===xi||at===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let tt=_(x.image,!1,i.maxTextureSize);tt=vt(x,tt);const pt=s.convert(x.format,x.colorSpace),Dt=s.convert(x.type);let It=E(x.internalFormat,pt,Dt,x.colorSpace,x.isVideoTexture);Bt(j,x);let ct;const zt=x.mipmaps,L=x.isVideoTexture!==!0,ft=xt.__version===void 0||Y===!0,et=X.dataReady,Et=C(x,tt);if(x.isDepthTexture)It=M(x.format===Us,x.type),ft&&(L?e.texStorage2D(r.TEXTURE_2D,1,It,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,It,tt.width,tt.height,0,pt,Dt,null));else if(x.isDataTexture)if(zt.length>0){L&&ft&&e.texStorage2D(r.TEXTURE_2D,Et,It,zt[0].width,zt[0].height);for(let nt=0,J=zt.length;nt<J;nt++)ct=zt[nt],L?et&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,pt,Dt,ct.data):e.texImage2D(r.TEXTURE_2D,nt,It,ct.width,ct.height,0,pt,Dt,ct.data);x.generateMipmaps=!1}else L?(ft&&e.texStorage2D(r.TEXTURE_2D,Et,It,tt.width,tt.height),et&&it(x,tt,pt,Dt)):e.texImage2D(r.TEXTURE_2D,0,It,tt.width,tt.height,0,pt,Dt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,It,zt[0].width,zt[0].height,tt.depth);for(let nt=0,J=zt.length;nt<J;nt++)if(ct=zt[nt],x.format!==Nn)if(pt!==null)if(L){if(et)if(x.layerUpdates.size>0){const bt=Bu(ct.width,ct.height,x.format,x.type);for(const kt of x.layerUpdates){const le=ct.data.subarray(kt*bt/ct.data.BYTES_PER_ELEMENT,(kt+1)*bt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,kt,ct.width,ct.height,1,pt,le)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,tt.depth,pt,ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,It,ct.width,ct.height,tt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?et&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,tt.depth,pt,Dt,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,It,ct.width,ct.height,tt.depth,0,pt,Dt,ct.data)}else{L&&ft&&e.texStorage2D(r.TEXTURE_2D,Et,It,zt[0].width,zt[0].height);for(let nt=0,J=zt.length;nt<J;nt++)ct=zt[nt],x.format!==Nn?pt!==null?L?et&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,pt,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,It,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?et&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,pt,Dt,ct.data):e.texImage2D(r.TEXTURE_2D,nt,It,ct.width,ct.height,0,pt,Dt,ct.data)}else if(x.isDataArrayTexture)if(L){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,It,tt.width,tt.height,tt.depth),et)if(x.layerUpdates.size>0){const nt=Bu(tt.width,tt.height,x.format,x.type);for(const J of x.layerUpdates){const bt=tt.data.subarray(J*nt/tt.data.BYTES_PER_ELEMENT,(J+1)*nt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,pt,Dt,bt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Dt,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,tt.width,tt.height,tt.depth,0,pt,Dt,tt.data);else if(x.isData3DTexture)L?(ft&&e.texStorage3D(r.TEXTURE_3D,Et,It,tt.width,tt.height,tt.depth),et&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Dt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,It,tt.width,tt.height,tt.depth,0,pt,Dt,tt.data);else if(x.isFramebufferTexture){if(ft)if(L)e.texStorage2D(r.TEXTURE_2D,Et,It,tt.width,tt.height);else{let nt=tt.width,J=tt.height;for(let bt=0;bt<Et;bt++)e.texImage2D(r.TEXTURE_2D,bt,It,nt,J,0,pt,Dt,null),nt>>=1,J>>=1}}else if(zt.length>0){if(L&&ft){const nt=Wt(zt[0]);e.texStorage2D(r.TEXTURE_2D,Et,It,nt.width,nt.height)}for(let nt=0,J=zt.length;nt<J;nt++)ct=zt[nt],L?et&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,pt,Dt,ct):e.texImage2D(r.TEXTURE_2D,nt,It,pt,Dt,ct);x.generateMipmaps=!1}else if(L){if(ft){const nt=Wt(tt);e.texStorage2D(r.TEXTURE_2D,Et,It,nt.width,nt.height)}et&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Dt,tt)}else e.texImage2D(r.TEXTURE_2D,0,It,pt,Dt,tt);m(x)&&d(j),xt.__version=X.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function mt(R,x,B){if(x.image.length!==6)return;const j=re(R,x),Y=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const X=n.get(Y);if(Y.version!==X.__version||j===!0){e.activeTexture(r.TEXTURE0+B);const xt=oe.getPrimaries(oe.workingColorSpace),at=x.colorSpace===xi?null:oe.getPrimaries(x.colorSpace),St=x.colorSpace===xi||xt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!yt&&!tt?pt[J]=_(x.image[J],!0,i.maxCubemapSize):pt[J]=tt?x.image[J].image:x.image[J],pt[J]=vt(x,pt[J]);const Dt=pt[0],It=s.convert(x.format,x.colorSpace),ct=s.convert(x.type),zt=E(x.internalFormat,It,ct,x.colorSpace),L=x.isVideoTexture!==!0,ft=X.__version===void 0||j===!0,et=Y.dataReady;let Et=C(x,Dt);Bt(r.TEXTURE_CUBE_MAP,x);let nt;if(yt){L&&ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,zt,Dt.width,Dt.height);for(let J=0;J<6;J++){nt=pt[J].mipmaps;for(let bt=0;bt<nt.length;bt++){const kt=nt[bt];x.format!==Nn?It!==null?L?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,0,0,kt.width,kt.height,It,kt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,zt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,0,0,kt.width,kt.height,It,ct,kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,zt,kt.width,kt.height,0,It,ct,kt.data)}}}else{if(nt=x.mipmaps,L&&ft){nt.length>0&&Et++;const J=Wt(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Et,zt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,It,ct,pt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,pt[J].width,pt[J].height,0,It,ct,pt[J].data);for(let bt=0;bt<nt.length;bt++){const le=nt[bt].image[J].image;L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,0,0,le.width,le.height,It,ct,le.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,zt,le.width,le.height,0,It,ct,le.data)}}else{L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,ct,pt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,It,ct,pt[J]);for(let bt=0;bt<nt.length;bt++){const kt=nt[bt];L?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,0,0,It,ct,kt.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,zt,It,ct,kt.image[J])}}}m(x)&&d(r.TEXTURE_CUBE_MAP),X.__version=Y.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Pt(R,x,B,j,Y,X){const xt=s.convert(B.format,B.colorSpace),at=s.convert(B.type),St=E(B.internalFormat,xt,at,B.colorSpace),yt=n.get(x),tt=n.get(B);if(tt.__renderTarget=x,!yt.__hasExternalTextures){const pt=Math.max(1,x.width>>X),Dt=Math.max(1,x.height>>X);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?e.texImage3D(Y,X,St,pt,Dt,x.depth,0,xt,at,null):e.texImage2D(Y,X,St,pt,Dt,0,xt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Lt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Y,tt.__webglTexture,0,lt(x)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Y,tt.__webglTexture,X),e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(R,x,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),x.depthBuffer){const j=x.depthTexture,Y=j&&j.isDepthTexture?j.type:null,X=M(x.stencilBuffer,Y),xt=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=lt(x);Lt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,X,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,X,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,X,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,R)}else{const j=x.textures;for(let Y=0;Y<j.length;Y++){const X=j[Y],xt=s.convert(X.format,X.colorSpace),at=s.convert(X.type),St=E(X.internalFormat,xt,at,X.colorSpace),yt=lt(x);B&&Lt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,St,x.width,x.height):Lt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,yt,St,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,St,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const Y=j.__webglTexture,X=lt(x);if(x.depthTexture.format===Is)Lt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else if(x.depthTexture.format===Us)Lt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function $t(R){const x=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Y)};j.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=j}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?Nt(x.__webglFramebuffer[0],R):Nt(x.__webglFramebuffer,R)}else if(B){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=r.createRenderbuffer(),qt(x.__webglDepthbuffer[j],R,!1);else{const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,X)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),qt(x.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,X)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function se(R,x,B){const j=n.get(R);x!==void 0&&Pt(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&$t(R)}function ht(R){const x=R.texture,B=n.get(R),j=n.get(x);R.addEventListener("dispose",A);const Y=R.textures,X=R.isWebGLCubeRenderTarget===!0,xt=Y.length>1;if(xt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=x.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let St=0;St<x.mipmaps.length;St++)B.__webglFramebuffer[at][St]=r.createFramebuffer()}else B.__webglFramebuffer[at]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)B.__webglFramebuffer[at]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(xt)for(let at=0,St=Y.length;at<St;at++){const yt=n.get(Y[at]);yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Lt(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<Y.length;at++){const St=Y[at];B.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const yt=s.convert(St.format,St.colorSpace),tt=s.convert(St.type),pt=E(St.internalFormat,yt,tt,St.colorSpace,R.isXRRenderTarget===!0),Dt=lt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,pt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,B.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)Pt(B.__webglFramebuffer[at][St],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,St);else Pt(B.__webglFramebuffer[at],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let at=0,St=Y.length;at<St;at++){const yt=Y[at],tt=n.get(yt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),Bt(r.TEXTURE_2D,yt),Pt(B.__webglFramebuffer,R,yt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),m(yt)&&d(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Bt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)Pt(B.__webglFramebuffer[St],R,x,r.COLOR_ATTACHMENT0,at,St);else Pt(B.__webglFramebuffer,R,x,r.COLOR_ATTACHMENT0,at,0);m(x)&&d(at),e.unbindTexture()}R.depthBuffer&&$t(R)}function w(R){const x=R.textures;for(let B=0,j=x.length;B<j;B++){const Y=x[B];if(m(Y)){const X=b(R),xt=n.get(Y).__webglTexture;e.bindTexture(X,xt),d(X),e.unbindTexture()}}}const q=[],st=[];function I(R){if(R.samples>0){if(Lt(R)===!1){const x=R.textures,B=R.width,j=R.height;let Y=r.COLOR_BUFFER_BIT;const X=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(R),at=x.length>1;if(at)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const St=R.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);const tt=n.get(x[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,B,j,0,0,B,j,Y,r.NEAREST),l===!0&&(q.length=0,st.length=0,q.push(r.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(q.push(X),st.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);const tt=n.get(x[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,tt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function lt(R){return Math.min(i.maxSamples,R.samples)}function Lt(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _t(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function vt(R,x){const B=R.colorSpace,j=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Zr&&B!==xi&&(oe.getTransfer(B)===ue?(j!==Nn||Y!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=se,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Lt}function iM(r,t){function e(n,i=xi){let s;const a=oe.getTransfer(i);if(n===qn)return r.UNSIGNED_BYTE;if(n===vc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===yf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Mf)return r.BYTE;if(n===Sf)return r.SHORT;if(n===Ds)return r.UNSIGNED_SHORT;if(n===gc)return r.INT;if(n===sr)return r.UNSIGNED_INT;if(n===Gn)return r.FLOAT;if(n===Os)return r.HALF_FLOAT;if(n===Ef)return r.ALPHA;if(n===Tf)return r.RGB;if(n===Nn)return r.RGBA;if(n===Is)return r.DEPTH_COMPONENT;if(n===Us)return r.DEPTH_STENCIL;if(n===Mc)return r.RED;if(n===Sc)return r.RED_INTEGER;if(n===bf)return r.RG;if(n===yc)return r.RG_INTEGER;if(n===Ec)return r.RGBA_INTEGER;if(n===Sa||n===ya||n===Ea||n===Ta)if(a===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===pl||n===ml||n===_l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===vl||n===xl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gl||n===vl)return a===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ml||n===Sl||n===yl||n===El||n===Tl||n===bl||n===Al||n===wl||n===Rl||n===Cl||n===Pl||n===Dl||n===Ll||n===Il)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ml)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Ul||n===Nl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ba)return a===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Af||n===Fl||n===Ol||n===Bl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Je,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ii({vertexShader:rM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new qa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends Jr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new aM,m=e.getContextAttributes();let d=null,b=null;const E=[],M=[],C=new Qt;let T=null;const A=new pn;A.viewport=new he;const P=new pn;P.viewport=new he;const v=[A,P],S=new A_;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=E[K];return it===void 0&&(it=new wo,E[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=E[K];return it===void 0&&(it=new wo,E[K]=it),it.getGripSpace()},this.getHand=function(K){let it=E[K];return it===void 0&&(it=new wo,E[K]=it),it.getHandSpace()};function U(K){const it=M.indexOf(K.inputSource);if(it===-1)return;const wt=E[it];wt!==void 0&&(wt.update(K.inputSource,K.frame,c||a),wt.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",$);for(let K=0;K<E.length;K++){const it=M[K];it!==null&&(M[K]=null,E[K].disconnect(it))}D=null,k=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,i=null,b=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,mt=null,Pt=null;m.depth&&(Pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=m.stencil?Us:Is,mt=m.stencil?Ls:sr);const qt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(qt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ar(f.textureWidth,f.textureHeight,{format:Nn,type:qn,depthTexture:new kf(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const wt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,wt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ar(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(K){for(let it=0;it<K.removed.length;it++){const wt=K.removed[it],mt=M.indexOf(wt);mt>=0&&(M[mt]=null,E[mt].disconnect(wt))}for(let it=0;it<K.added.length;it++){const wt=K.added[it];let mt=M.indexOf(wt);if(mt===-1){for(let qt=0;qt<E.length;qt++)if(qt>=M.length){M.push(wt),mt=qt;break}else if(M[qt]===null){M[qt]=wt,mt=qt;break}if(mt===-1)break}const Pt=E[mt];Pt&&Pt.connect(wt)}}const H=new O,Q=new O;function V(K,it,wt){H.setFromMatrixPosition(it.matrixWorld),Q.setFromMatrixPosition(wt.matrixWorld);const mt=H.distanceTo(Q),Pt=it.projectionMatrix.elements,qt=wt.projectionMatrix.elements,Nt=Pt[14]/(Pt[10]-1),$t=Pt[14]/(Pt[10]+1),se=(Pt[9]+1)/Pt[5],ht=(Pt[9]-1)/Pt[5],w=(Pt[8]-1)/Pt[0],q=(qt[8]+1)/qt[0],st=Nt*w,I=Nt*q,lt=mt/(-w+q),Lt=lt*-w;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Lt),K.translateZ(lt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const _t=Nt+lt,vt=$t+lt,Wt=st-Lt,R=I+(mt-Lt),x=se*$t/vt*_t,B=ht*$t/vt*_t;K.projectionMatrix.makePerspective(Wt,R,x,B,_t,vt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ot(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let it=K.near,wt=K.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),S.near=P.near=A.near=it,S.far=P.far=A.far=wt,(D!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,k=S.far),A.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,S.layers.mask=A.layers.mask|P.layers.mask;const mt=K.parent,Pt=S.cameras;ot(S,mt);for(let qt=0;qt<Pt.length;qt++)ot(Pt[qt],mt);Pt.length===2?V(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),ut(K,S,mt)};function ut(K,it,wt){wt===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(wt.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ns*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let At=null;function Bt(K,it){if(u=it.getViewerPose(c||a),g=it,u!==null){const wt=u.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let mt=!1;wt.length!==S.cameras.length&&(S.cameras.length=0,mt=!0);for(let Nt=0;Nt<wt.length;Nt++){const $t=wt[Nt];let se=null;if(p!==null)se=p.getViewport($t);else{const w=h.getViewSubImage(f,$t);se=w.viewport,Nt===0&&(t.setRenderTargetTextures(b,w.colorTexture,w.depthStencilTexture),t.setRenderTarget(b))}let ht=v[Nt];ht===void 0&&(ht=new pn,ht.layers.enable(Nt),ht.viewport=new he,v[Nt]=ht),ht.matrix.fromArray($t.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray($t.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(se.x,se.y,se.width,se.height),Nt===0&&(S.matrix.copy(ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),mt===!0&&S.cameras.push(ht)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Nt=h.getDepthInformation(wt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,i.renderState)}}for(let wt=0;wt<E.length;wt++){const mt=M[wt],Pt=E[wt];mt!==null&&Pt!==void 0&&Pt.update(mt,it,c||a)}At&&At(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const re=new Gf;re.setAnimationLoop(Bt),this.setAnimationLoop=function(K){At=K},this.dispose=function(){}}}const Yi=new Kn,lM=new me;function cM(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Nf(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,b,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$e&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$e&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),E=b.envMap,M=b.envMapRotation;E&&(m.envMap.value=E,Yi.copy(M),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(Yi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$e&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uM(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const M=E.program;n.uniformBlockBinding(b,M)}function c(b,E){let M=i[b.id];M===void 0&&(g(b),M=u(b),i[b.id]=M,b.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(b,C);const T=t.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function u(b){const E=h();b.__bindingPointIndex=E;const M=r.createBuffer(),C=b.__size,T=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,M),M}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=i[b.id],M=b.uniforms,C=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let T=0,A=M.length;T<A;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,S=P.length;v<S;v++){const D=P[v];if(p(D,T,v,C)===!0){const k=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let $=0;$<U.length;$++){const H=U[$],Q=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,k+N,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,N),N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(b,E,M,C){const T=b.value,A=E+"_"+M;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(b){const E=b.uniforms;let M=0;const C=16;for(let A=0,P=E.length;A<P;A++){const v=Array.isArray(E[A])?E[A]:[E[A]];for(let S=0,D=v.length;S<D;S++){const k=v[S],U=Array.isArray(k.value)?k.value:[k.value];for(let N=0,$=U.length;N<$;N++){const H=U[N],Q=_(H),V=M%C,ot=V%Q.boundary,ut=V+ot;M+=ot,ut!==0&&C-ut<Q.storage&&(M+=C-ut),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Q.storage}}}const T=M%C;return T>0&&(M+=C-T),b.__size=M,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function d(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class hM{constructor(t={}){const{canvas:e=km(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=dn;let T=0,A=0,P=null,v=-1,S=null;const D=new he,k=new he;let U=null;const N=new Zt(0);let $=0,H=e.width,Q=e.height,V=1,ot=null,ut=null;const At=new he(0,0,H,Q),Bt=new he(0,0,H,Q);let re=!1;const K=new Rc;let it=!1,wt=!1;const mt=new me,Pt=new me,qt=new O,Nt=new he,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ht(){return P===null?V:1}let w=n;function q(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_c}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",J,!1),w===null){const F="webgl2";if(w=q(F,y),w===null)throw q(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let st,I,lt,Lt,_t,vt,Wt,R,x,B,j,Y,X,xt,at,St,yt,tt,pt,Dt,It,ct,zt,L;function ft(){st=new Sv(w),st.init(),ct=new iM(w,st),I=new pv(w,st,t,ct),lt=new eM(w,st),I.reverseDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Lt=new Tv(w),_t=new Hx,vt=new nM(w,st,lt,_t,I,ct,Lt),Wt=new _v(M),R=new Mv(M),x=new P_(w),zt=new fv(w,x),B=new yv(w,x,Lt,zt),j=new Av(w,B,x,Lt),pt=new bv(w,I,vt),St=new mv(_t),Y=new Vx(M,Wt,R,st,I,zt,St),X=new cM(M,_t),xt=new Wx,at=new Zx(st),tt=new hv(M,Wt,R,lt,j,p,l),yt=new Qx(M,j,I),L=new uM(w,Lt,I,lt),Dt=new dv(w,st,Lt),It=new Ev(w,st,Lt),Lt.programs=Y.programs,M.capabilities=I,M.extensions=st,M.properties=_t,M.renderLists=xt,M.shadowMap=yt,M.state=lt,M.info=Lt}ft();const et=new oM(M,w);this.xr=et,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(H,Q,!1))},this.getSize=function(y){return y.set(H,Q)},this.setSize=function(y,F,G=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=y,Q=F,e.width=Math.floor(y*V),e.height=Math.floor(F*V),G===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(H*V,Q*V).floor()},this.setDrawingBufferSize=function(y,F,G){H=y,Q=F,V=G,e.width=Math.floor(y*G),e.height=Math.floor(F*G),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(At)},this.setViewport=function(y,F,G,W){y.isVector4?At.set(y.x,y.y,y.z,y.w):At.set(y,F,G,W),lt.viewport(D.copy(At).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Bt)},this.setScissor=function(y,F,G,W){y.isVector4?Bt.set(y.x,y.y,y.z,y.w):Bt.set(y,F,G,W),lt.scissor(k.copy(Bt).multiplyScalar(V).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(y){lt.setScissorTest(re=y)},this.setOpaqueSort=function(y){ot=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,G=!0){let W=0;if(y){let z=!1;if(P!==null){const rt=P.texture.format;z=rt===Ec||rt===yc||rt===Sc}if(z){const rt=P.texture.type,gt=rt===qn||rt===sr||rt===Ds||rt===Ls||rt===vc||rt===xc,Rt=tt.getClearColor(),Tt=tt.getClearAlpha(),Vt=Rt.r,Ht=Rt.g,Ft=Rt.b;gt?(g[0]=Vt,g[1]=Ht,g[2]=Ft,g[3]=Tt,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=Vt,_[1]=Ht,_[2]=Ft,_[3]=Tt,w.clearBufferiv(w.COLOR,0,_))}else W|=w.COLOR_BUFFER_BIT}F&&(W|=w.DEPTH_BUFFER_BIT),G&&(W|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),tt.dispose(),xt.dispose(),at.dispose(),_t.dispose(),Wt.dispose(),R.dispose(),j.dispose(),zt.dispose(),L.dispose(),Y.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ae),et.removeEventListener("sessionend",Oe),Be.stop()};function Et(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=Lt.autoReset,F=yt.enabled,G=yt.autoUpdate,W=yt.needsUpdate,z=yt.type;ft(),Lt.autoReset=y,yt.enabled=F,yt.autoUpdate=G,yt.needsUpdate=W,yt.type=z}function J(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function bt(y){const F=y.target;F.removeEventListener("dispose",bt),kt(F)}function kt(y){le(y),_t.remove(y)}function le(y){const F=_t.get(y).programs;F!==void 0&&(F.forEach(function(G){Y.releaseProgram(G)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,G,W,z,rt){F===null&&(F=$t);const gt=z.isMesh&&z.matrixWorld.determinant()<0,Rt=rd(y,F,G,W,z);lt.setMaterial(W,gt);let Tt=G.index,Vt=1;if(W.wireframe===!0){if(Tt=B.getWireframeAttribute(G),Tt===void 0)return;Vt=2}const Ht=G.drawRange,Ft=G.attributes.position;let Jt=Ht.start*Vt,ce=(Ht.start+Ht.count)*Vt;rt!==null&&(Jt=Math.max(Jt,rt.start*Vt),ce=Math.min(ce,(rt.start+rt.count)*Vt)),Tt!==null?(Jt=Math.max(Jt,0),ce=Math.min(ce,Tt.count)):Ft!=null&&(Jt=Math.max(Jt,0),ce=Math.min(ce,Ft.count));const Te=ce-Jt;if(Te<0||Te===1/0)return;zt.setup(z,W,Rt,G,Tt);let _e,fe=Dt;if(Tt!==null&&(_e=x.get(Tt),fe=It,fe.setIndex(_e)),z.isMesh)W.wireframe===!0?(lt.setLineWidth(W.wireframeLinewidth*ht()),fe.setMode(w.LINES)):fe.setMode(w.TRIANGLES);else if(z.isLine){let Ot=W.linewidth;Ot===void 0&&(Ot=1),lt.setLineWidth(Ot*ht()),z.isLineSegments?fe.setMode(w.LINES):z.isLineLoop?fe.setMode(w.LINE_LOOP):fe.setMode(w.LINE_STRIP)}else z.isPoints?fe.setMode(w.POINTS):z.isSprite&&fe.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ot=z._multiDrawStarts,Me=z._multiDrawCounts,ae=z._multiDrawCount,ln=Tt?x.get(Tt).bytesPerElement:1,cr=_t.get(W).currentProgram.getUniforms();for(let cn=0;cn<ae;cn++)cr.setValue(w,"_gl_DrawID",cn),fe.render(Ot[cn]/ln,Me[cn])}else if(z.isInstancedMesh)fe.renderInstances(Jt,Te,z.count);else if(G.isInstancedBufferGeometry){const Ot=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Me=Math.min(G.instanceCount,Ot);fe.renderInstances(Jt,Te,Me)}else fe.render(Jt,Te)};function Mt(y,F,G){y.transparent===!0&&y.side===ri&&y.forceSinglePass===!1?(y.side=$e,y.needsUpdate=!0,Hs(y,F,G),y.side=Li,y.needsUpdate=!0,Hs(y,F,G),y.side=ri):Hs(y,F,G)}this.compile=function(y,F,G=null){G===null&&(G=y),d=at.get(G),d.init(F),E.push(d),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),y!==G&&y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const W=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){const Rt=rt[gt];Mt(Rt,G,z),W.add(Rt)}else Mt(rt,G,z),W.add(rt)}),d=E.pop(),W},this.compileAsync=function(y,F,G=null){const W=this.compile(y,F,G);return new Promise(z=>{function rt(){if(W.forEach(function(gt){_t.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){z(y);return}setTimeout(rt,10)}st.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ct=null;function Kt(y){Ct&&Ct(y)}function Ae(){Be.stop()}function Oe(){Be.start()}const Be=new Gf;Be.setAnimationLoop(Kt),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(y){Ct=y,et.setAnimationLoop(y),y===null?Be.stop():Be.start()},et.addEventListener("sessionstart",Ae),et.addEventListener("sessionend",Oe),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(F),F=et.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,F,P),d=at.get(y,E.length),d.init(F),E.push(d),Pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Pt),wt=this.localClippingEnabled,it=St.init(this.clippingPlanes,wt),m=xt.get(y,b.length),m.init(),b.push(m),et.enabled===!0&&et.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&Oi(rt,F,-1/0,M.sortObjects)}Oi(y,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ot,ut),se=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,se&&tt.addToRenderList(m,y),this.info.render.frame++,it===!0&&St.beginShadows();const G=d.state.shadowsArray;yt.render(G,y,F),it===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,z=m.transmissive;if(d.setupLights(),F.isArrayCamera){const rt=F.cameras;if(z.length>0)for(let gt=0,Rt=rt.length;gt<Rt;gt++){const Tt=rt[gt];Lc(W,z,y,Tt)}se&&tt.render(y);for(let gt=0,Rt=rt.length;gt<Rt;gt++){const Tt=rt[gt];Dc(m,y,Tt,Tt.viewport)}}else z.length>0&&Lc(W,z,y,F),se&&tt.render(y),Dc(m,y,F);P!==null&&A===0&&(vt.updateMultisampleRenderTarget(P),vt.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(M,y,F),zt.resetDefaultState(),v=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],it===!0&&St.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Oi(y,F,G,W){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){W&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);const gt=j.update(y),Rt=y.material;Rt.visible&&m.push(y,gt,Rt,G,Nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const gt=j.update(y),Rt=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Nt.copy(gt.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),Array.isArray(Rt)){const Tt=gt.groups;for(let Vt=0,Ht=Tt.length;Vt<Ht;Vt++){const Ft=Tt[Vt],Jt=Rt[Ft.materialIndex];Jt&&Jt.visible&&m.push(y,gt,Jt,G,Nt.z,Ft)}}else Rt.visible&&m.push(y,gt,Rt,G,Nt.z,null)}}const rt=y.children;for(let gt=0,Rt=rt.length;gt<Rt;gt++)Oi(rt[gt],F,G,W)}function Dc(y,F,G,W){const z=y.opaque,rt=y.transmissive,gt=y.transparent;d.setupLightsView(G),it===!0&&St.setGlobalState(M.clippingPlanes,G),W&&lt.viewport(D.copy(W)),z.length>0&&Vs(z,F,G),rt.length>0&&Vs(rt,F,G),gt.length>0&&Vs(gt,F,G),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Lc(y,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new ar(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Os:qn,minFilter:tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const rt=d.state.transmissionRenderTarget[W.id],gt=W.viewport||D;rt.setSize(gt.z*M.transmissionResolutionScale,gt.w*M.transmissionResolutionScale);const Rt=M.getRenderTarget(),Tt=M.getActiveCubeFace(),Vt=M.getActiveMipmapLevel();M.setRenderTarget(rt),M.getClearColor(N),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),se&&tt.render(G);const Ht=M.toneMapping;M.toneMapping=Ri;const Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),it===!0&&St.setGlobalState(M.clippingPlanes,W),Vs(y,G,W),vt.updateMultisampleRenderTarget(rt),vt.updateRenderTargetMipmap(rt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ce=0,Te=F.length;ce<Te;ce++){const _e=F[ce],fe=_e.object,Ot=_e.geometry,Me=_e.material,ae=_e.group;if(Me.side===ri&&fe.layers.test(W.layers)){const ln=Me.side;Me.side=$e,Me.needsUpdate=!0,Ic(fe,G,W,Ot,Me,ae),Me.side=ln,Me.needsUpdate=!0,Jt=!0}}Jt===!0&&(vt.updateMultisampleRenderTarget(rt),vt.updateRenderTargetMipmap(rt))}M.setRenderTarget(Rt,Tt,Vt),M.setClearColor(N,$),Ft!==void 0&&(W.viewport=Ft),M.toneMapping=Ht}function Vs(y,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,rt=y.length;z<rt;z++){const gt=y[z],Rt=gt.object,Tt=gt.geometry,Vt=gt.group;let Ht=gt.material;Ht.allowOverride===!0&&W!==null&&(Ht=W),Rt.layers.test(G.layers)&&Ic(Rt,F,G,Tt,Ht,Vt)}}function Ic(y,F,G,W,z,rt){y.onBeforeRender(M,F,G,W,z,rt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(M,F,G,W,y,rt),z.transparent===!0&&z.side===ri&&z.forceSinglePass===!1?(z.side=$e,z.needsUpdate=!0,M.renderBufferDirect(G,F,W,z,y,rt),z.side=Li,z.needsUpdate=!0,M.renderBufferDirect(G,F,W,z,y,rt),z.side=ri):M.renderBufferDirect(G,F,W,z,y,rt),y.onAfterRender(M,F,G,W,z,rt)}function Hs(y,F,G){F.isScene!==!0&&(F=$t);const W=_t.get(y),z=d.state.lights,rt=d.state.shadowsArray,gt=z.state.version,Rt=Y.getParameters(y,z.state,rt,F,G),Tt=Y.getProgramCacheKey(Rt);let Vt=W.programs;W.environment=y.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(y.isMeshStandardMaterial?R:Wt).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Vt===void 0&&(y.addEventListener("dispose",bt),Vt=new Map,W.programs=Vt);let Ht=Vt.get(Tt);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===gt)return Nc(y,Rt),Ht}else Rt.uniforms=Y.getUniforms(y),y.onBeforeCompile(Rt,M),Ht=Y.acquireProgram(Rt,Tt),Vt.set(Tt,Ht),W.uniforms=Rt.uniforms;const Ft=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ft.clippingPlanes=St.uniform),Nc(y,Rt),W.needsLights=ad(y),W.lightsStateVersion=gt,W.needsLights&&(Ft.ambientLightColor.value=z.state.ambient,Ft.lightProbe.value=z.state.probe,Ft.directionalLights.value=z.state.directional,Ft.directionalLightShadows.value=z.state.directionalShadow,Ft.spotLights.value=z.state.spot,Ft.spotLightShadows.value=z.state.spotShadow,Ft.rectAreaLights.value=z.state.rectArea,Ft.ltc_1.value=z.state.rectAreaLTC1,Ft.ltc_2.value=z.state.rectAreaLTC2,Ft.pointLights.value=z.state.point,Ft.pointLightShadows.value=z.state.pointShadow,Ft.hemisphereLights.value=z.state.hemi,Ft.directionalShadowMap.value=z.state.directionalShadowMap,Ft.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ft.spotShadowMap.value=z.state.spotShadowMap,Ft.spotLightMatrix.value=z.state.spotLightMatrix,Ft.spotLightMap.value=z.state.spotLightMap,Ft.pointShadowMap.value=z.state.pointShadowMap,Ft.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function Uc(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Aa.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Nc(y,F){const G=_t.get(y);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function rd(y,F,G,W,z){F.isScene!==!0&&(F=$t),vt.resetTextureUnits();const rt=F.fog,gt=W.isMeshStandardMaterial?F.environment:null,Rt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zr,Tt=(W.isMeshStandardMaterial?R:Wt).get(W.envMap||gt),Vt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ht=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ft=!!G.morphAttributes.position,Jt=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let Te=Ri;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Te=M.toneMapping);const _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,fe=_e!==void 0?_e.length:0,Ot=_t.get(W),Me=d.state.lights;if(it===!0&&(wt===!0||y!==S)){const Xe=y===S&&W.id===v;St.setState(W,y,Xe)}let ae=!1;W.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Me.state.version||Ot.outputColorSpace!==Rt||z.isBatchedMesh&&Ot.batching===!1||!z.isBatchedMesh&&Ot.batching===!0||z.isBatchedMesh&&Ot.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ot.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ot.instancing===!1||!z.isInstancedMesh&&Ot.instancing===!0||z.isSkinnedMesh&&Ot.skinning===!1||!z.isSkinnedMesh&&Ot.skinning===!0||z.isInstancedMesh&&Ot.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ot.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ot.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ot.instancingMorph===!1&&z.morphTexture!==null||Ot.envMap!==Tt||W.fog===!0&&Ot.fog!==rt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==St.numPlanes||Ot.numIntersection!==St.numIntersection)||Ot.vertexAlphas!==Vt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ft||Ot.morphNormals!==Jt||Ot.morphColors!==ce||Ot.toneMapping!==Te||Ot.morphTargetsCount!==fe)&&(ae=!0):(ae=!0,Ot.__version=W.version);let ln=Ot.currentProgram;ae===!0&&(ln=Hs(W,F,z));let cr=!1,cn=!1,ns=!1;const ve=ln.getUniforms(),En=Ot.uniforms;if(lt.useProgram(ln.program)&&(cr=!0,cn=!0,ns=!0),W.id!==v&&(v=W.id,cn=!0),cr||S!==y){lt.buffers.depth.getReversed()?(mt.copy(y.projectionMatrix),Hm(mt),Gm(mt),ve.setValue(w,"projectionMatrix",mt)):ve.setValue(w,"projectionMatrix",y.projectionMatrix),ve.setValue(w,"viewMatrix",y.matrixWorldInverse);const Qe=ve.map.cameraPosition;Qe!==void 0&&Qe.setValue(w,qt.setFromMatrixPosition(y.matrixWorld)),I.logarithmicDepthBuffer&&ve.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,cn=!0,ns=!0)}if(z.isSkinnedMesh){ve.setOptional(w,z,"bindMatrix"),ve.setOptional(w,z,"bindMatrixInverse");const Xe=z.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ve.setValue(w,"boneTexture",Xe.boneTexture,vt))}z.isBatchedMesh&&(ve.setOptional(w,z,"batchingTexture"),ve.setValue(w,"batchingTexture",z._matricesTexture,vt),ve.setOptional(w,z,"batchingIdTexture"),ve.setValue(w,"batchingIdTexture",z._indirectTexture,vt),ve.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&ve.setValue(w,"batchingColorTexture",z._colorsTexture,vt));const Tn=G.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&pt.update(z,G,ln),(cn||Ot.receiveShadow!==z.receiveShadow)&&(Ot.receiveShadow=z.receiveShadow,ve.setValue(w,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(En.envMap.value=Tt,En.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(En.envMapIntensity.value=F.environmentIntensity),cn&&(ve.setValue(w,"toneMappingExposure",M.toneMappingExposure),Ot.needsLights&&sd(En,ns),rt&&W.fog===!0&&X.refreshFogUniforms(En,rt),X.refreshMaterialUniforms(En,W,V,Q,d.state.transmissionRenderTarget[y.id]),Aa.upload(w,Uc(Ot),En,vt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Aa.upload(w,Uc(Ot),En,vt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(w,"center",z.center),ve.setValue(w,"modelViewMatrix",z.modelViewMatrix),ve.setValue(w,"normalMatrix",z.normalMatrix),ve.setValue(w,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xe=W.uniformsGroups;for(let Qe=0,ja=Xe.length;Qe<ja;Qe++){const Bi=Xe[Qe];L.update(Bi,ln),L.bind(Bi,ln)}}return ln}function sd(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function ad(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,F,G){const W=_t.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),_t.get(y.texture).__webglTexture=F,_t.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const G=_t.get(y);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const od=w.createFramebuffer();this.setRenderTarget=function(y,F=0,G=0){P=y,T=F,A=G;let W=!0,z=null,rt=!1,gt=!1;if(y){const Tt=_t.get(y);if(Tt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(w.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)vt.setupRenderTarget(y);else if(Tt.__hasExternalTextures)vt.rebindTextures(y,_t.get(y.texture).__webglTexture,_t.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ft=y.depthTexture;if(Tt.__boundDepthTexture!==Ft){if(Ft!==null&&_t.has(Ft)&&(y.width!==Ft.image.width||y.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(y)}}const Vt=y.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(gt=!0);const Ht=_t.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?z=Ht[F][G]:z=Ht[F],rt=!0):y.samples>0&&vt.useMultisampledRTT(y)===!1?z=_t.get(y).__webglMultisampledFramebuffer:Array.isArray(Ht)?z=Ht[G]:z=Ht,D.copy(y.viewport),k.copy(y.scissor),U=y.scissorTest}else D.copy(At).multiplyScalar(V).floor(),k.copy(Bt).multiplyScalar(V).floor(),U=re;if(G!==0&&(z=od),lt.bindFramebuffer(w.FRAMEBUFFER,z)&&W&&lt.drawBuffers(y,z),lt.viewport(D),lt.scissor(k),lt.setScissorTest(U),rt){const Tt=_t.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+F,Tt.__webglTexture,G)}else if(gt){const Tt=_t.get(y.texture),Vt=F;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tt.__webglTexture,G,Vt)}else if(y!==null&&G!==0){const Tt=_t.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Tt.__webglTexture,G)}v=-1},this.readRenderTargetPixels=function(y,F,G,W,z,rt,gt,Rt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=_t.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){lt.bindFramebuffer(w.FRAMEBUFFER,Tt);try{const Vt=y.textures[Rt],Ht=Vt.format,Ft=Vt.type;if(!I.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-W&&G>=0&&G<=y.height-z&&(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Rt),w.readPixels(F,G,W,z,ct.convert(Ht),ct.convert(Ft),rt))}finally{const Vt=P!==null?_t.get(P).__webglFramebuffer:null;lt.bindFramebuffer(w.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(y,F,G,W,z,rt,gt,Rt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=_t.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt)if(F>=0&&F<=y.width-W&&G>=0&&G<=y.height-z){lt.bindFramebuffer(w.FRAMEBUFFER,Tt);const Vt=y.textures[Rt],Ht=Vt.format,Ft=Vt.type;if(!I.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Jt),w.bufferData(w.PIXEL_PACK_BUFFER,rt.byteLength,w.STREAM_READ),y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Rt),w.readPixels(F,G,W,z,ct.convert(Ht),ct.convert(Ft),0);const ce=P!==null?_t.get(P).__webglFramebuffer:null;lt.bindFramebuffer(w.FRAMEBUFFER,ce);const Te=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Vm(w,Te,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Jt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,rt),w.deleteBuffer(Jt),w.deleteSync(Te),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,G=0){const W=Math.pow(2,-G),z=Math.floor(y.image.width*W),rt=Math.floor(y.image.height*W),gt=F!==null?F.x:0,Rt=F!==null?F.y:0;vt.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,gt,Rt,z,rt),lt.unbindTexture()};const ld=w.createFramebuffer(),cd=w.createFramebuffer();this.copyTextureToTexture=function(y,F,G=null,W=null,z=0,rt=null){rt===null&&(z!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=z,z=0):rt=0);let gt,Rt,Tt,Vt,Ht,Ft,Jt,ce,Te;const _e=y.isCompressedTexture?y.mipmaps[rt]:y.image;if(G!==null)gt=G.max.x-G.min.x,Rt=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,Vt=G.min.x,Ht=G.min.y,Ft=G.isBox3?G.min.z:0;else{const Tn=Math.pow(2,-z);gt=Math.floor(_e.width*Tn),Rt=Math.floor(_e.height*Tn),y.isDataArrayTexture?Tt=_e.depth:y.isData3DTexture?Tt=Math.floor(_e.depth*Tn):Tt=1,Vt=0,Ht=0,Ft=0}W!==null?(Jt=W.x,ce=W.y,Te=W.z):(Jt=0,ce=0,Te=0);const fe=ct.convert(F.format),Ot=ct.convert(F.type);let Me;F.isData3DTexture?(vt.setTexture3D(F,0),Me=w.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(vt.setTexture2DArray(F,0),Me=w.TEXTURE_2D_ARRAY):(vt.setTexture2D(F,0),Me=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const ae=w.getParameter(w.UNPACK_ROW_LENGTH),ln=w.getParameter(w.UNPACK_IMAGE_HEIGHT),cr=w.getParameter(w.UNPACK_SKIP_PIXELS),cn=w.getParameter(w.UNPACK_SKIP_ROWS),ns=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Vt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ht),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ft);const ve=y.isDataArrayTexture||y.isData3DTexture,En=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const Tn=_t.get(y),Xe=_t.get(F),Qe=_t.get(Tn.__renderTarget),ja=_t.get(Xe.__renderTarget);lt.bindFramebuffer(w.READ_FRAMEBUFFER,Qe.__webglFramebuffer),lt.bindFramebuffer(w.DRAW_FRAMEBUFFER,ja.__webglFramebuffer);for(let Bi=0;Bi<Tt;Bi++)ve&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.get(y).__webglTexture,z,Ft+Bi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_t.get(F).__webglTexture,rt,Te+Bi)),w.blitFramebuffer(Vt,Ht,gt,Rt,Jt,ce,gt,Rt,w.DEPTH_BUFFER_BIT,w.NEAREST);lt.bindFramebuffer(w.READ_FRAMEBUFFER,null),lt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||_t.has(y)){const Tn=_t.get(y),Xe=_t.get(F);lt.bindFramebuffer(w.READ_FRAMEBUFFER,ld),lt.bindFramebuffer(w.DRAW_FRAMEBUFFER,cd);for(let Qe=0;Qe<Tt;Qe++)ve?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tn.__webglTexture,z,Ft+Qe):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Tn.__webglTexture,z),En?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Xe.__webglTexture,rt,Te+Qe):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Xe.__webglTexture,rt),z!==0?w.blitFramebuffer(Vt,Ht,gt,Rt,Jt,ce,gt,Rt,w.COLOR_BUFFER_BIT,w.NEAREST):En?w.copyTexSubImage3D(Me,rt,Jt,ce,Te+Qe,Vt,Ht,gt,Rt):w.copyTexSubImage2D(Me,rt,Jt,ce,Vt,Ht,gt,Rt);lt.bindFramebuffer(w.READ_FRAMEBUFFER,null),lt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else En?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(Me,rt,Jt,ce,Te,gt,Rt,Tt,fe,Ot,_e.data):F.isCompressedArrayTexture?w.compressedTexSubImage3D(Me,rt,Jt,ce,Te,gt,Rt,Tt,fe,_e.data):w.texSubImage3D(Me,rt,Jt,ce,Te,gt,Rt,Tt,fe,Ot,_e):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,rt,Jt,ce,gt,Rt,fe,Ot,_e.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,rt,Jt,ce,_e.width,_e.height,fe,_e.data):w.texSubImage2D(w.TEXTURE_2D,rt,Jt,ce,gt,Rt,fe,Ot,_e);w.pixelStorei(w.UNPACK_ROW_LENGTH,ae),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ln),w.pixelStorei(w.UNPACK_SKIP_PIXELS,cr),w.pixelStorei(w.UNPACK_SKIP_ROWS,cn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ns),rt===0&&F.generateMipmaps&&w.generateMipmap(Me),lt.unbindTexture()},this.copyTextureToTexture3D=function(y,F,G=null,W=null,z=0){return Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,G,W,z)},this.initRenderTarget=function(y){_t.get(y).__webglFramebuffer===void 0&&vt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?vt.setTextureCube(y,0):y.isData3DTexture?vt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?vt.setTexture2DArray(y,0):vt.setTexture2D(y,0),lt.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class fM extends Bf{constructor(){super();const t=new ts;t.deleteAttribute("uv");const e=new zl({side:$e}),n=new zl,i=new Hf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Ie(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new zf(t,n,6),o=new We;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Ie(t,wr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ie(t,wr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new Ie(t,wr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new Ie(t,wr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new Ie(t,wr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new Ie(t,wr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function wr(r){const t=new wc;return t.color.setScalar(r),t}const dM=Kl({__name:"Ballpit",props:{className:{default:""},followCursor:{type:Boolean,default:!0},count:{default:200},colors:{default:()=>[0,0,0]},ambientColor:{default:16777215},ambientIntensity:{default:1},lightIntensity:{default:200},materialParams:{default:()=>({metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15})},minSize:{default:.5},maxSize:{default:1},size0:{default:1},gravity:{default:.5},friction:{default:.9975},wallBounce:{default:.95},maxVelocity:{default:.15},maxX:{default:5},maxY:{default:5},maxZ:{default:2},controlSphere0:{type:Boolean,default:!1}},setup(r){var M,C,T,A,P,v,S,D,k,U,N,Kf,jf,Zf,$f,wa,Jf,Gl,Qf,td,Wl,Xl,Ra,Yl,ed,qt,nd,$t,id;lf.registerPlugin(Yn);const t=r,e=ni("canvasRef"),n=lh(null);class i{constructor(w){tn(this,N);tn(this,M);tn(this,C);tn(this,T);tn(this,A);tn(this,P);tn(this,v);tn(this,S);tn(this,D);tn(this,k);tn(this,U);ze(this,C,null),ze(this,v,0),ze(this,S,new w_),ze(this,D,{elapsed:0,delta:0}),ze(this,k,!1),ze(this,U,!1),this.size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0},this.render=ge(this,N,Yl).bind(this),this.onBeforeRender=()=>{},this.onAfterRender=()=>{},this.onAfterResize=()=>{},this.isDisposed=!1,ze(this,M,{...w}),ge(this,N,Kf).call(this),ge(this,N,jf).call(this),ge(this,N,Zf).call(this),this.resize(),ge(this,N,$f).call(this)}resize(){let w,q;ie(this,M).size instanceof Object?(w=ie(this,M).size.width,q=ie(this,M).size.height):ie(this,M).size==="parent"&&this.canvas.parentNode?(w=this.canvas.parentNode.offsetWidth,q=this.canvas.parentNode.offsetHeight):(w=window.innerWidth,q=window.innerHeight),this.size.width=w,this.size.height=q,this.size.ratio=w/q,ge(this,N,Jf).call(this),ge(this,N,Qf).call(this),this.onAfterResize(this.size)}updateWorldSize(){if(this.camera.isPerspectiveCamera){const w=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(w/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else{const w=this.camera;w.isOrthographicCamera&&(this.size.wHeight=w.top-w.bottom,this.size.wWidth=w.right-w.left)}}get postprocessing(){return ie(this,C)}set postprocessing(w){ze(this,C,w),w?this.render=w.render.bind(w):this.render=ge(this,N,Yl).bind(this)}clear(){this.scene.traverse(w=>{const q=w;q.isMesh&&q.material&&q.geometry&&typeof q.material=="object"&&q.material!==null&&(Object.keys(q.material).forEach(st=>{const I=q.material[st];if(I&&typeof I=="object"&&I!==null){const lt=I;typeof lt.dispose=="function"&&lt.dispose()}}),q.material.dispose(),q.geometry.dispose())}),this.scene.clear()}dispose(){var w;ge(this,N,ed).call(this),ge(this,N,Ra).call(this),this.clear(),(w=ie(this,C))==null||w.dispose(),this.renderer.dispose(),this.isDisposed=!0}}M=new WeakMap,C=new WeakMap,T=new WeakMap,A=new WeakMap,P=new WeakMap,v=new WeakMap,S=new WeakMap,D=new WeakMap,k=new WeakMap,U=new WeakMap,N=new WeakSet,Kf=function(){this.camera=new pn,this.cameraFov=this.camera.fov},jf=function(){this.scene=new Bf},Zf=function(){if(ie(this,M).canvas)this.canvas=ie(this,M).canvas;else if(ie(this,M).id){const q=document.getElementById(ie(this,M).id);q instanceof HTMLCanvasElement?this.canvas=q:console.error("Three: Missing canvas or id parameter")}else console.error("Three: Missing canvas or id parameter");this.canvas.style.display="block";const w={canvas:this.canvas,powerPreference:"high-performance",...ie(this,M).rendererOptions??{}};this.renderer=new hM(w),this.renderer.outputColorSpace=dn},$f=function(){ie(this,M).size instanceof Object||(window.addEventListener("resize",ge(this,N,wa).bind(this)),ie(this,M).size==="parent"&&this.canvas.parentNode&&(ze(this,T,new ResizeObserver(ge(this,N,wa).bind(this))),ie(this,T).observe(this.canvas.parentNode))),ze(this,A,new IntersectionObserver(ge(this,N,td).bind(this),{root:null,rootMargin:"0px",threshold:0})),ie(this,A).observe(this.canvas),document.addEventListener("visibilitychange",ge(this,N,Wl).bind(this))},wa=function(){ie(this,P)&&clearTimeout(ie(this,P)),ze(this,P,window.setTimeout(this.resize.bind(this),100))},Jf=function(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?ge(this,N,Gl).call(this,this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?ge(this,N,Gl).call(this,this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()},Gl=function(w){const st=Math.tan(fr.degToRad(this.cameraFov/2))/(this.camera.aspect/w);this.camera.fov=2*fr.radToDeg(Math.atan(st))},Qf=function(){var q;this.renderer.setSize(this.size.width,this.size.height),(q=ie(this,C))==null||q.setSize(this.size.width,this.size.height);let w=window.devicePixelRatio;this.maxPixelRatio&&w>this.maxPixelRatio?w=this.maxPixelRatio:this.minPixelRatio&&w<this.minPixelRatio&&(w=this.minPixelRatio),this.renderer.setPixelRatio(w),this.size.pixelRatio=w},td=function(w){ze(this,k,w[0].isIntersecting),ie(this,k)?ge(this,N,Xl).call(this):ge(this,N,Ra).call(this)},Wl=function(){ie(this,k)&&(document.hidden?ge(this,N,Ra).call(this):ge(this,N,Xl).call(this))},Xl=function(){if(ie(this,U))return;const w=()=>{ze(this,v,requestAnimationFrame(w)),ie(this,D).delta=ie(this,S).getDelta(),ie(this,D).elapsed+=ie(this,D).delta,this.onBeforeRender(ie(this,D)),this.render(),this.onAfterRender(ie(this,D))};ze(this,U,!0),ie(this,S).start(),w()},Ra=function(){ie(this,U)&&(cancelAnimationFrame(ie(this,v)),ze(this,U,!1),ie(this,S).stop())},Yl=function(){this.renderer.render(this.scene,this.camera)},ed=function(){var w,q;window.removeEventListener("resize",ge(this,N,wa).bind(this)),(w=ie(this,T))==null||w.disconnect(),(q=ie(this,A))==null||q.disconnect(),document.removeEventListener("visibilitychange",ge(this,N,Wl).bind(this))};class s{constructor(w){tn(this,qt);this.center=new O,this.config=w,this.positionData=new Float32Array(3*w.count).fill(0),this.velocityData=new Float32Array(3*w.count).fill(0),this.sizeData=new Float32Array(w.count).fill(1),this.center=new O,ge(this,qt,nd).call(this),this.setSizes()}setSizes(){const{config:w,sizeData:q}=this;q[0]=w.size0;for(let st=1;st<w.count;st++)q[st]=fr.randFloat(w.minSize,w.maxSize)}update(w){const{config:q,center:st,positionData:I,sizeData:lt,velocityData:Lt}=this;let _t=0;q.controlSphere0&&(_t=1,new O().fromArray(I,0).lerp(st,.1).toArray(I,0),new O(0,0,0).toArray(Lt,0));for(let vt=_t;vt<q.count;vt++){const Wt=3*vt,R=new O().fromArray(I,Wt),x=new O().fromArray(Lt,Wt);x.y-=w.delta*q.gravity*lt[vt],x.multiplyScalar(q.friction),x.clampLength(0,q.maxVelocity),R.add(x),R.toArray(I,Wt),x.toArray(Lt,Wt)}for(let vt=_t;vt<q.count;vt++){const Wt=3*vt,R=new O().fromArray(I,Wt),x=new O().fromArray(Lt,Wt),B=lt[vt];for(let Y=vt+1;Y<q.count;Y++){const X=3*Y,xt=new O().fromArray(I,X),at=new O().fromArray(Lt,X),St=new O().copy(xt).sub(R),yt=St.length(),tt=B+lt[Y];if(yt<tt){const pt=tt-yt,Dt=St.normalize().multiplyScalar(.5*pt),It=Dt.clone().multiplyScalar(Math.max(x.length(),1));R.sub(Dt),x.sub(It),R.toArray(I,Wt),x.toArray(Lt,Wt),xt.add(Dt),at.add(Dt.clone().multiplyScalar(Math.max(at.length(),1))),xt.toArray(I,X),at.toArray(Lt,X)}}if(q.controlSphere0){const Y=new O().copy(new O().fromArray(I,0)).sub(R),X=Y.length(),xt=B+lt[0];if(X<xt){const at=Y.normalize().multiplyScalar(xt-X),St=at.clone().multiplyScalar(Math.max(x.length(),2));R.sub(at),x.sub(St)}}Math.abs(R.x)+B>q.maxX&&(R.x=Math.sign(R.x)*(q.maxX-B),x.x=-x.x*q.wallBounce),q.gravity===0?Math.abs(R.y)+B>q.maxY&&(R.y=Math.sign(R.y)*(q.maxY-B),x.y=-x.y*q.wallBounce):R.y-B<-q.maxY&&(R.y=-q.maxY+B,x.y=-x.y*q.wallBounce);const j=Math.max(q.maxZ,q.maxSize);Math.abs(R.z)+B>j&&(R.z=Math.sign(R.z)*(q.maxZ-B),x.z=-x.z*q.wallBounce),R.toArray(I,Wt),x.toArray(Lt,Wt)}}}qt=new WeakSet,nd=function(){const{config:w,positionData:q}=this;this.center.toArray(q,0);for(let st=1;st<w.count;st++){const I=3*st;q[I]=fr.randFloatSpread(2*w.maxX),q[I+1]=fr.randFloatSpread(2*w.maxY),q[I+2]=fr.randFloatSpread(2*w.maxZ)}};class a extends x_{constructor(w){super(w),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines={USE_UV:""},this.onBeforeCompile=q=>{Object.assign(q.uniforms,this.uniforms),q.fragmentShader=`
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
        `+q.fragmentShader,q.fragmentShader=q.fragmentShader.replace("void main() {",`
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
        `);const st=Xt.lights_fragment_begin.replace(/RE_Direct\( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight \);/g,`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);q.fragmentShader=q.fragmentShader.replace("#include <lights_fragment_begin>",st),this.onBeforeCompile2&&this.onBeforeCompile2(q)}}}const o={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},l=new We;let c=!1;const u=new Qt,h=new Map;function f(ht){const w={position:new Qt,nPosition:new Qt,hover:!1,onEnter:()=>{},onMove:()=>{},onClick:()=>{},onLeave:()=>{},...ht};return h.has(ht.domElement)||(h.set(ht.domElement,w),c||(document.body.addEventListener("pointermove",p),document.body.addEventListener("pointerleave",_),document.body.addEventListener("click",g),c=!0)),w.dispose=()=>{h.delete(ht.domElement),h.size===0&&(document.body.removeEventListener("pointermove",p),document.body.removeEventListener("pointerleave",_),document.body.removeEventListener("click",g),c=!1)},w}function p(ht){u.set(ht.clientX,ht.clientY);for(const[w,q]of h){const st=w.getBoundingClientRect();d(st)?(m(q,st),q.hover||(q.hover=!0,q.onEnter(q)),q.onMove(q)):q.hover&&(q.hover=!1,q.onLeave(q))}}function g(ht){u.set(ht.clientX,ht.clientY);for(const[w,q]of h){const st=w.getBoundingClientRect();m(q,st),d(st)&&q.onClick(q)}}function _(){for(const ht of h.values())ht.hover&&(ht.hover=!1,ht.onLeave(ht))}function m(ht,w){ht.position.set(u.x-w.left,u.y-w.top),ht.nPosition.set(ht.position.x/w.width*2-1,-ht.position.y/w.height*2+1)}function d(ht){return u.x>=ht.left&&u.x<=ht.left+ht.width&&u.y>=ht.top&&u.y<=ht.top+ht.height}class b extends zf{constructor(q,st={}){const I={...o,...st},lt=new fM,_t=new Vl(q).fromScene(lt).texture,vt=new Cc,Wt=new a({envMap:_t,...I.materialParams});Wt.envMapRotation.x=-Math.PI/2;super(vt,Wt,I.count);tn(this,$t);this.config=I,this.physics=new s(I),ge(this,$t,id).call(this),this.setColors(I.colors)}setColors(q){if(Array.isArray(q)&&q.length>1){const st=function(I){let lt=I,Lt=[];return lt.forEach(_t=>{Lt.push(new Zt(_t))}),{setColors:_t=>{lt=_t,Lt=[],lt.forEach(vt=>{Lt.push(new Zt(vt))})},getColorAt:(_t,vt=new Zt)=>{const R=Math.max(0,Math.min(1,_t))*(lt.length-1),x=Math.floor(R),B=Lt[x];if(x>=lt.length-1)return B.clone();const j=R-x,Y=Lt[x+1];return vt.r=B.r+j*(Y.r-B.r),vt.g=B.g+j*(Y.g-B.g),vt.b=B.b+j*(Y.b-B.b),vt}}}(q);for(let I=0;I<this.count;I++)this.setColorAt(I,st.getColorAt(I/this.count)),I===0&&this.light.color.copy(st.getColorAt(I/this.count));if(!this.instanceColor)return;this.instanceColor.needsUpdate=!0}}update(q){this.physics.update(q);for(let st=0;st<this.count;st++)l.position.fromArray(this.physics.positionData,3*st),st===0&&this.config.followCursor===!1?l.scale.setScalar(0):l.scale.setScalar(this.physics.sizeData[st]),l.updateMatrix(),this.setMatrixAt(st,l.matrix),st===0&&this.light.position.copy(l.position);this.instanceMatrix.needsUpdate=!0}}$t=new WeakSet,id=function(){this.ambientLight=new b_(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new Hf(this.config.colors[0],this.config.lightIntensity),this.add(this.light)};function E(ht,w={}){const q=new i({canvas:ht,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let st;q.renderer.toneMapping=vf,q.camera.position.set(0,0,20),q.camera.lookAt(0,0,0),q.cameraMaxAspect=1.5,q.resize(),Wt(w);const I=new R_,lt=new vi(new O(0,0,1),0),Lt=new O;let _t=!1;const vt=f({domElement:ht,onMove(){I.setFromCamera(vt.nPosition,q.camera),q.camera.getWorldDirection(lt.normal),I.ray.intersectPlane(lt,Lt),st.physics.center.copy(Lt),st.config.controlSphere0=!0},onLeave(){st.config.controlSphere0=!1}});function Wt(R){st&&(q.clear(),q.scene.remove(st)),st=new b(q.renderer,R),q.scene.add(st)}return q.onBeforeRender=R=>{_t||st.update(R)},q.onAfterResize=R=>{st.config.maxX=R.wWidth/2,st.config.maxY=R.wHeight/2},{three:q,get spheres(){return st},setCount(R){Wt({...st.config,count:R})},togglePause(){_t=!_t},dispose(){var R;(R=vt.dispose)==null||R.call(vt),q.dispose()}}}return jl(()=>{const ht=e.value;if(!ht)return;const{followCursor:w,...q}=t,st={metalness:t.materialParams.metalness??.5,roughness:t.materialParams.roughness??.5,clearcoat:t.materialParams.clearcoat??1,clearcoatRoughness:t.materialParams.clearcoatRoughness??.15};n.value=E(ht,{...q,followCursor:w,materialParams:st})}),Zl(()=>{n.value&&n.value.dispose()}),(ht,w)=>(te(),ee("canvas",{ref_key:"canvasRef",ref:e,class:kr(["w-full","h-full",t.className])},null,2))}}),pM={class:"w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10",xmlns:"http://www.w3.org/2000/svg"},mM={class:"w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10"},_M="relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out",ql=Kl({__name:"GlassSurface",props:{width:{default:"200px"},height:{default:"200px"},borderRadius:{default:20},borderWidth:{default:.07},brightness:{default:70},opacity:{default:.93},blur:{default:11},displace:{default:.5},backgroundOpacity:{default:0},saturation:{default:1},distortionScale:{default:-180},redOffset:{default:0},greenOffset:{default:10},blueOffset:{default:20},xChannel:{default:"R"},yChannel:{default:"G"},mixBlendMode:{default:"difference"},className:{default:""},style:{default:()=>({})}},setup(r){const t=r,e=lh(!1),n=()=>{if(typeof window>"u")return;const P=window.matchMedia("(prefers-color-scheme: dark)");e.value=P.matches;const v=S=>{e.value=S.matches};return P.addEventListener("change",v),()=>P.removeEventListener("change",v)},s=Math.random().toString(36).substring(2,15),a=`glass-filter-${s}`,o=`red-grad-${s}`,l=`blue-grad-${s}`,c=ni("containerRef"),u=ni("feImageRef"),h=ni("redChannelRef"),f=ni("greenChannelRef"),p=ni("blueChannelRef"),g=ni("gaussianBlurRef");let _=null;const m=()=>{var U;const P=(U=c.value)==null?void 0:U.getBoundingClientRect(),v=(P==null?void 0:P.width)||400,S=(P==null?void 0:P.height)||200,D=Math.min(v,S)*(t.borderWidth*.5),k=`
      <svg viewBox="0 0 ${v} ${S}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${o}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${l}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${v}" height="${S}" fill="black"></rect>
        <rect x="0" y="0" width="${v}" height="${S}" rx="${t.borderRadius}" fill="url(#${o})" />
        <rect x="0" y="0" width="${v}" height="${S}" rx="${t.borderRadius}" fill="url(#${l})" style="mix-blend-mode: ${t.mixBlendMode}" />
        <rect x="${D}" y="${D}" width="${v-D*2}" height="${S-D*2}" rx="${t.borderRadius}" fill="hsl(0 0% ${t.brightness}% / ${t.opacity})" style="filter:blur(${t.blur}px)" />
      </svg>
    `;return`data:image/svg+xml,${encodeURIComponent(k)}`},d=()=>{u.value&&u.value.setAttribute("href",m())},b=()=>{if(typeof window>"u"||typeof navigator>"u")return!1;const P=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),v=/Firefox/.test(navigator.userAgent);if(P||v)return!1;const S=document.createElement("div");return S.style.backdropFilter=`url(#${a})`,S.style.backdropFilter!==""},E=()=>typeof window>"u"?!1:CSS.supports("backdrop-filter","blur(10px)"),M=Ca(()=>{const P={...t.style,width:typeof t.width=="number"?`${t.width}px`:t.width,height:typeof t.height=="number"?`${t.height}px`:t.height,borderRadius:`${t.borderRadius}px`,"--glass-frost":t.backgroundOpacity,"--glass-saturation":t.saturation},v=b(),S=E();return v?{...P,background:e.value?`hsl(0 0% 0% / ${t.backgroundOpacity})`:`hsl(0 0% 100% / ${t.backgroundOpacity})`,backdropFilter:`url(#${a}) saturate(${t.saturation})`,boxShadow:e.value?`0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
           0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
           0px 4px 16px rgba(17, 17, 26, 0.05),
           0px 8px 24px rgba(17, 17, 26, 0.05),
           0px 16px 56px rgba(17, 17, 26, 0.05),
           0px 4px 16px rgba(17, 17, 26, 0.05) inset,
           0px 8px 24px rgba(17, 17, 26, 0.05) inset,
           0px 16px 56px rgba(17, 17, 26, 0.05) inset`:`0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
           0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
           0px 4px 16px rgba(17, 17, 26, 0.05),
           0px 8px 24px rgba(17, 17, 26, 0.05),
           0px 16px 56px rgba(17, 17, 26, 0.05),
           0px 4px 16px rgba(17, 17, 26, 0.05) inset,
           0px 8px 24px rgba(17, 17, 26, 0.05) inset,
           0px 16px 56px rgba(17, 17, 26, 0.05) inset`}:e.value?S?{...P,background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(12px) saturate(1.8) brightness(1.2)",WebkitBackdropFilter:"blur(12px) saturate(1.8) brightness(1.2)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`}:{...P,background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`}:S?{...P,background:"rgba(255, 255, 255, 0.25)",backdropFilter:"blur(12px) saturate(1.8) brightness(1.1)",WebkitBackdropFilter:"blur(12px) saturate(1.8) brightness(1.1)",border:"1px solid rgba(255, 255, 255, 0.3)",boxShadow:`0 8px 32px 0 rgba(31, 38, 135, 0.2),
                      0 2px 16px 0 rgba(31, 38, 135, 0.1),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                      inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)`}:{...P,background:"rgba(255, 255, 255, 0.4)",border:"1px solid rgba(255, 255, 255, 0.3)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                      inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)`}}),C=Ca(()=>e.value?"focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2":"focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2"),T=()=>{[{ref:h,offset:t.redOffset},{ref:f,offset:t.greenOffset},{ref:p,offset:t.blueOffset}].forEach(({ref:v,offset:S})=>{v.value&&(v.value.setAttribute("scale",(t.distortionScale+S).toString()),v.value.setAttribute("xChannelSelector",t.xChannel),v.value.setAttribute("yChannelSelector",t.yChannel))}),g.value&&g.value.setAttribute("stdDeviation",t.displace.toString())},A=()=>{!c.value||typeof ResizeObserver>"u"||(_=new ResizeObserver(()=>{setTimeout(d,0)}),_.observe(c.value))};return Oc([()=>t.width,()=>t.height,()=>t.borderRadius,()=>t.borderWidth,()=>t.brightness,()=>t.opacity,()=>t.blur,()=>t.displace,()=>t.distortionScale,()=>t.redOffset,()=>t.greenOffset,()=>t.blueOffset,()=>t.xChannel,()=>t.yChannel,()=>t.mixBlendMode],()=>{d(),T()}),Oc([()=>t.width,()=>t.height],()=>{setTimeout(d,0)}),jl(()=>{const P=n();ud(()=>{d(),T(),A()}),Zl(()=>{P&&P(),_&&_.disconnect()})}),(P,v)=>(te(),ee("div",{ref_key:"containerRef",ref:c,class:kr([_M,C.value,r.className]),style:$l(M.value)},[(te(),ee("svg",pM,[Z("defs",null,[Z("filter",{id:a,"color-interpolation-filters":"sRGB",x:"0%",y:"0%",width:"100%",height:"100%"},[Z("feImage",{ref_key:"feImageRef",ref:u,x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none",result:"map"},null,512),Z("feDisplacementMap",{ref_key:"redChannelRef",ref:h,in:"SourceGraphic",in2:"map",id:"redchannel",result:"dispRed"},null,512),v[0]||(v[0]=Z("feColorMatrix",{in:"dispRed",type:"matrix",values:`1 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0`,result:"red"},null,-1)),Z("feDisplacementMap",{ref_key:"greenChannelRef",ref:f,in:"SourceGraphic",in2:"map",id:"greenchannel",result:"dispGreen"},null,512),v[1]||(v[1]=Z("feColorMatrix",{in:"dispGreen",type:"matrix",values:`0 0 0 0 0
                    0 1 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0`,result:"green"},null,-1)),Z("feDisplacementMap",{ref_key:"blueChannelRef",ref:p,in:"SourceGraphic",in2:"map",id:"bluechannel",result:"dispBlue"},null,512),v[2]||(v[2]=Z("feColorMatrix",{in:"dispBlue",type:"matrix",values:`0 0 0 0 0
                    0 0 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0`,result:"blue"},null,-1)),v[3]||(v[3]=Z("feBlend",{in:"red",in2:"green",mode:"screen",result:"rg"},null,-1)),v[4]||(v[4]=Z("feBlend",{in:"rg",in2:"blue",mode:"screen",result:"output"},null,-1)),Z("feGaussianBlur",{ref_key:"gaussianBlurRef",ref:g,in:"output",stdDeviation:"0.7"},null,512)])])])),Z("div",mM,[hd(P.$slots,"default")])],6))}}),gM={class:"relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-24 pb-16 sm:pt-32 sm:pb-24 dark:from-neutral-950 dark:via-neutral-950 dark:to-primary-950/20"},vM={class:"absolute inset-0 z-0","aria-hidden":"true"},xM={class:"section-container relative z-10"},MM={class:"flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16"},SM={class:"flex-1 text-center lg:text-left"},yM={class:"mb-3 text-sm font-semibold uppercase tracking-widest text-primary-600 animate-fade-in"},EM={class:"font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-slide-up dark:text-white"},TM={class:"mt-6 max-w-xl text-lg leading-relaxed text-gray-600 animate-slide-up dark:text-gray-400",style:{"animation-delay":"0.1s"}},bM={class:"mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start animate-slide-up",style:{"animation-delay":"0.2s"}},AM={href:"/cv.pdf",download:"",class:"flex items-center gap-2 px-4 py-2 font-semibold text-gray-700 dark:text-gray-300"},wM={class:"flex-shrink-0 animate-fade-in"},RM={class:"relative"},CM=["src","alt"],PM={__name:"HeroSection",setup(r){const{t}=Ui(),e=fd(),n=Ca(()=>e.isDark?[3900150,6514417,9133302]:[3900150,6333946,9684477]);return(i,s)=>{const a=dd("router-link");return te(),ee("section",gM,[Z("div",vM,[en(dM,{count:80,colors:n.value,"ambient-color":Ut(e).isDark?1120295:16777215,"ambient-intensity":.5,"light-intensity":100,"min-size":.4,"max-size":1.2,gravity:.3,friction:.99,"wall-bounce":.9,"max-velocity":.1,"follow-cursor":!1,"material-params":{metalness:.3,roughness:.6,clearcoat:1,clearcoatRoughness:.1},class:"h-full w-full opacity-40 dark:opacity-30"},null,8,["colors","ambient-color"])]),Z("div",xM,[Z("div",MM,[Z("div",SM,[Z("p",yM,Gt(Ut(t)("hero.role")),1),Z("h1",EM,Gt(Ut(kn).name),1),Z("p",TM,Gt(Ut(t)("hero.shortBio")),1),Z("div",bM,[en(ql,{width:"auto",height:"auto","border-radius":40,brightness:80,opacity:.9,blur:14,"background-opacity":.05,class:"inline-flex cursor-pointer transition-transform hover:scale-105"},{default:ma(()=>[en(a,{to:"/projects",class:"flex items-center gap-2 px-4 py-2 font-semibold text-primary-700 dark:text-primary-300"},{default:ma(()=>[Oo(Gt(Ut(t)("hero.viewProjects"))+" ",1),s[0]||(s[0]=Z("svg",{class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})],-1))]),_:1})]),_:1}),en(ql,{width:"auto",height:"auto","border-radius":40,brightness:80,opacity:.9,blur:14,"background-opacity":.05,class:"inline-flex cursor-pointer transition-transform hover:scale-105"},{default:ma(()=>[Z("a",AM,[s[1]||(s[1]=Z("svg",{class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})],-1)),Oo(" "+Gt(Ut(t)("hero.downloadCv")),1)])]),_:1})])]),Z("div",wM,[Z("div",RM,[s[2]||(s[2]=Z("div",{class:"absolute -inset-1 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-2xl"},null,-1)),Z("img",{src:Ut(kn).photo,alt:`Photo of ${Ut(kn).name}`,class:"relative h-56 w-56 rounded-full border-4 border-white object-cover shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80 dark:border-neutral-800",loading:"eager"},null,8,CM)])])])])])}}},DM={id:"about",class:"py-20"},LM={class:"section-container"},IM={class:"mx-auto max-w-3xl text-center"},UM={class:"section-title"},NM={class:"mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400"},FM={__name:"AboutSection",setup(r){const{t}=Ui();return(e,n)=>(te(),ee("section",DM,[Z("div",LM,[Z("div",IM,[Z("h2",UM,Gt(Ut(t)("about.title")),1),Z("p",NM,Gt(Ut(t)("about.bio")),1)])])]))}},OM={id:"interests",class:"bg-gray-50/50 py-20 dark:bg-neutral-900/50"},BM={class:"section-container"},zM={class:"text-center"},kM={class:"section-title"},VM={class:"section-subtitle"},HM={class:"mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"},GM={class:"mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/30"},WM=["innerHTML"],XM={class:"mt-4 font-display text-lg font-semibold text-gray-900 dark:text-white"},YM={class:"mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400"},qM={__name:"InterestsSection",setup(r){const{t}=Ui(),e={strategy:'<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />',transform:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />',agile:'<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />',data:'<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />'};return(n,i)=>(te(),ee("section",OM,[Z("div",BM,[Z("div",zM,[Z("h2",kM,Gt(Ut(t)("interests.title")),1),Z("p",VM,Gt(Ut(t)("interests.subtitle")),1)]),Z("div",HM,[(te(!0),ee(si,null,ai(Ut(kn).interestIds,s=>(te(),ee("div",{key:s,class:"card group text-center"},[Z("div",GM,[(te(),ee("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",innerHTML:e[s]},null,8,WM))]),Z("h3",XM,Gt(Ut(t)(`interests.items.${s}.title`)),1),Z("p",YM,Gt(Ut(t)(`interests.items.${s}.description`)),1)]))),128))])])]))}},KM={id:"education",class:"py-20"},jM={class:"section-container"},ZM={class:"text-center"},$M={class:"section-title"},JM={class:"mx-auto mt-12 max-w-2xl"},QM={class:"font-display text-lg font-semibold text-gray-900 dark:text-white"},tS={class:"mt-1 font-medium text-primary-600 dark:text-primary-400"},eS={class:"mt-1 text-sm text-gray-400"},nS={class:"mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400"},iS={__name:"EducationSection",setup(r){const{t}=Ui();return(e,n)=>(te(),ee("section",KM,[Z("div",jM,[Z("div",ZM,[Z("h2",$M,Gt(Ut(t)("education.title")),1)]),Z("div",JM,[(te(!0),ee(si,null,ai(Ut(kn).educationIds,i=>(te(),ee("div",{key:i,class:"card flex items-start gap-5"},[n[0]||(n[0]=Z("div",{class:"flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30"},[Z("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"})])],-1)),Z("div",null,[Z("h3",QM,Gt(Ut(t)(`education.items.${i}.degree`)),1),Z("p",tS,Gt(Ut(t)(`education.items.${i}.institution`)),1),Z("p",eS,Gt(Ut(kn).educationPeriods[i]),1),Z("p",nS,Gt(Ut(t)(`education.items.${i}.description`)),1)])]))),128))])])]))}},rS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX+ERv////+AAD8///7AAD7t7f3lpj+DRj4AAD+AxP/AAD43t37AAn4y8j+AAf9//32ra7+9fb7Ji77+fj3Mzf6f4D85+j2SE34wsT8Nz320ND6+vf72tj6ICb3T1H6R0z2oaP2aWv2c3fyrq72goX4jpD1YGb56+v3vr31kZX6fHz4QEb3aGn4iYv2en/1m532bHL3ur/8nKL0W130paj37ejyJS3xion2r6v4Iij4YWD8ysz22dz45+L43tnykY/tQDJtAAAL3klEQVR4nO2be1/iOhPHSyaaREq5FMtl5Q6idgE9Kns4umff/7s6kzZpC7S4u0/Vc57PfP9QacM0vySdZCbRcQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIP6vcVkhar+kUHFZT4m3jArlRUXdU0UL7AmPeb8nJR91vzkvYPM1K9HlIvy6Go/H59Nhi5+06fHBcL0Zjzerycjh+dUVHhejibG3czMVGqyepm7ud34P9lCBImYsKXYhJ2cBlqxUdPHmuFiiYO70ZRmV1EWX3bXDjjuSyclDkDyoucEnxYXE4HvwCjeyPIX8rFJIwyp05TyAzA2YuI6QPG8Ecnm7PDDT3MiDBnHlaq8QXGOnxfZYoz49+xPuy+vFn1Ao2FfTJ5YAhy+vjtVRNRSfNqF+aAf8abY1BLs/sFfFFpDVjYv2+Kt/vX6Bc3Zo+h0VKtWA/evwgzlqCFAdHvbN4AZyLUFDJhKVc/hIWHBHPUKl2uEOf/AXsz7cfWAfqtbr4XV/K6LvwZf7vab2wiBfIBZ9cY1Ed1s9bLBmSwh+ow1PuGj7AQR/v+mty1OoBoevVQUeuCNavv4L1ple5J0vRQK1xLgX3e3ysBDM0F7bj7zYlKv2WW0sVFF9S1conH2XEPnHoXLYIq4nTJNe5MMvmXL4okFUPrn0pBtDYIPV9+zhjxHaOzf27rlgLNeH/c8K/eohwYYJ+ZLVF/Qbfzx1a1z7GXPJ75jmVu1M50CzP14sxt3sgISJhw64n70S1BqbcfcGu9ANbDXCErtvX2FNuodg0/6wFapX4GbocL0GQYHuddI9QTz6hLyyVwCC+Y7Ha5pOAxLfuhwItknl1R+GTlQIe8y9T4RXS5wKDxTm+GcVpl693+MiGTzePLkO8ezPNumVlfRsScXbV+k4ZWHag7U2T1dr3rf0xm15E8XbClk36Zax3Bs97PE56d220mM06cFgdJEtqXgXbK+pl6TUhu/Z449Ne0t76o9SqJImh/PDZRoLm7bRtcvldiKE79uDqUy4/fhOd9hJOmpxZG9kJcYu6WMU8pkVeHbs3byhrRFOZyq0Jf3tkadQW2wMuAl5NOfFjXIsgj/a5sT3tSx1keETCoVvnylznnlh3zycFLld9sAkb7DP63/uGL51vin1Pdfek9U/LTV6OqHQndhWnea9/OlUWePCOvtu/gjb6jHAp0kz5K7JkrXFTam+JqMww4UOeNjYVGiZX+3E9S/FyNb9MX82i7qMN2z5AntjM+sHb4fYv0CicNnIMGu0cOl5dfrVVyM7rNpm8oCTk5k0q4TKpsBe8maX6k3zV21Q72E7mnU0PBYs9GVge872zvjE+EpH9bCgo11boOiBv0W+wrqPClvGf6Pagu/WTKOvH0xb3J3wEaJn5pf6sbs19vrm8esyXU2xQtUzrrS5Kxg0zHrQhZnJ4euJxlehsbccFJRgD+bxi3+dwvOaGa7XpxSOEoVF9mxdSozwT47StqnRl6IXn9mFzMqs7k6PUtuHfqvAHreBzOqDFNr5Scdv+d+1IdS9MXIyvSJ21pEUBUjczqol5qEKI2BUmApYXeR+FV2RKd05NyX7p5aU1vUWORKxtfaKmvS3sArhub9HW6SRRUG9valtj8FjpmEKkeZtzQ1jtL218Ve+8y7zYU3yLPgMb2VuQTu33olzf5U7u4LdnBimbGHt5buuJP7vv9eq7fCWSAKGh7xHukkwMObcdo+/K+5ENbKZ8LO8QcGu7eP++CiFybINl8o5VZI2LwND5d3Zki8n1m3Jiw1/5QSj7rO1UepreFrh2vZSMzx0DiKNefE1xRWZ/TQuTpSxudXw3DuyJ20qoFL7uAgYu8ncrDyH+7eVTHww3GNt2W2SaHmShV0gk7zAsrcvQ0nbYPWTy4bf4KRCb21VgJ+N6QQbWC+j/Yy+kjYG9Le8IPzhSQIL/OzWnbjY9pOc18kZp2yFqXvDIFHqPU2Nywdpj1Ugnr9Tv6OT2KErWV5PJG+2zkLqaELbk3xwnibqChz3eylUNh6owIKhc52MeuHj/MZP89Zgk398nJEI1ZvbaU5Nk9V3pTLn+Cm21/XT5Dh8KzmZ+IZCh9tUbV1gSPyAo9VPhegKda3vFG5t/041zyAzmYy676K9bgWa+/YqNyWP0TcVov+La4BTmBhEmyd7Feqnb5zNGlqFV7kGzYYH/IlDYldHv5L9Ctpzy02W/oTC2DvUo92T28oh/WzSTMiXbH3zFTp8FbWTXveO4dDeS14S7r0VOmzSjOc8ebg7CLP9Cgm+ybyLBQpx4Pu6adCNPR+Yg0apm072eW8qdNj2BS49x/16ILA5PXpn+PA1cb5FCh3e7sPUdbz7Q3uT9xCYxtXFCh3FJxi07m204cB9cnOCIMXXgdltKlSIhb5imM+zry26sLEsNRGc8BN9iLjRujlToeB8UOD0uLw+i2b/XF9qQP+kDwKkBtFe2bOEhTX8psZ/y02L1rTRry6by+C1uxrKi+IB5XK3M100NqdnbrQ30/aawdUN2ss5c1MSYmB56xHCZVxhOYdz761lh/IYf2t1KVwe2ROcH54vKxdh+enCZT+8RHsE8d8GA6P4hVAWe1mlJXQRoTIIJ/2RsXT03U9HMNkbhoorRzidYUxPT8CiNex04tye2OHFgRDtToaegz9aAn9sE1s9/CT0tC7DYc/5dzgStm0sffCbDzpVYU99+tUJj1KYzSgJL3gDL/7BMqdKdFJmh6HdpXwFsMkV4eKHLndYb/aMgREGV+81k/88AqMHk4rVZ2OCpPr4ybtMFA70XtvSuUjP/CCN3ZdK5ZJf4p8mF+xe4zf/cvltbHPqLss+H/PrxJXxdSgKlZkMMHZ9qfX7S6jDHUsUslVcYzbv12o1XJY18Vd/3tIKPYnfNYdR9e5KIPlYt1C9uZRrgBMHij8E9xqlNDdhK5zr5eQ3VHgXHcXqA+gKGoUm19nnrs6I30DlJUqNtyOFFw1soih2FTtsiEUUyT9/C1tbiYE/HMcgH4p3pdOhTAnFdlWAJ1Q414v86JTTFsdfpFB18JPex4j2b1kX4qxmtAN36UVHi+a6EzFCBHAUGgnaaFOIHo764FPdTXQ84DEeYV74pDeIYoVCn6Z5vDN9qHdpAulH2YdjhXrTBfRR5igjesbvcVh04ljI6xSeLvkg0DfCqx1FCiMGq9DDfoHQvIf6wCzcshlA0xE5CvkUu+5ROR4OTxjqYyVJ1pPhOM05AvVx6Ah4lt0fxFG1xhdM7jBar0ujkJ/ji9b2Otg3Wv6RQkdn9c+4IzGqfdX7NJBsQl2MAV4+052iQmjsK6xHESNExyVjhUJvbna50GH5Fc9TqE/7+C13FDWB9qdja1MfDnv5zD7UTXyVrUBg84UAfW4U6hQNXHPG76OdphyF2i/Bgj+hY4oPPyUpA17b+9eUj0f/FwAMM54gmfGbY+GYGV/XMpDTs8ZZfO48Z5TqkTnVmxc4L7r32EphbNMN6/Uy/z/k1xEKJ7rvuzTKxj6cTfU+QlUqo9CNOshuw/u4jD1WiN28jI7mhSo6rl75e6CjW+b8Xfpxyl/FneidoPnO7p2jwkumk7X6nw5ihfoIH8jkpOKK5Sh0+POYo3OKfKge3KD3qgdrfZR4/cmLmjj1nKytsKfQXUYHum6ZF8348SQ3vLy7u5uirwl4nkL2YxSazUR99hbgkn+Ptk1hVvbZ9F9GTwXab8af4vlQ6d9wHXmagZ7Ah0p5iN5sh+GeQrg0eU59pHhpli/8aelM4v91++xlqYaFD3WzctYHCKMpz21/wUlcH6v0B68VeDX6hfqO05veoIiGo+iBWSDoJamfWWXzLe/rIKw7/PTQQqMwAu6Z9zAcjaKltrsdjUa93WgUOvhHy3oi1cZPqoe34vIjU1wr7Iw66aE8IdzeqCffN1H4KyRpiCQjEWUtokzEcZIiyXlk74m9cv+uLAZBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEMR/hH8AkaTOZsbPT2IAAAAASUVORK5CYII=",sS="/assets/cmpl-Bg5Vbfhj.png",aS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX///+twybf3iirwh2nvwDtZQDtZgDubR3ubBjubiCqwRSpwArtahLi4CilvgC/0GXynXXd3AD6+/KxxjLi6b3y9d+5y0396+P0o33+9O739/f09+XsXQDwgkTxiVL6+/HT2CfE1HH1sZH85Njp6enW3rTCzybX2ifZ46bP24/97eb50L3vdSne3t6ctADt8taxwWe6x37d5MKFnQCzwXG5yia1yUHM2Yff57Xp7s3m7cf62cr1r4/3wKf4xrDxhUqqqquWlpd+fn9tbm9aW13FxsafoKGsv0i7zl3h6KupvE3k407p52yhtzHv7ZP187vEz5LM1aPM1lPo53zv76jl5GGpuVebrjPh4EKVrADO24vyk2K/v8BRUlOJiYgqKi6zcF0dAAAI9ElEQVR4nO2bC1viSBZAKySBvIjybAMo8hABxQgoDxUaRWinZ8bWXVfX0XX//7/YeytAo7bi9KpY/d1jE0Iq+NXpW3VvBSJjBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ8yFaKrXS8+7EW/JFKRRMuzTvbrwh24YvuL4QX5h3P96QL4Wgz1c8ycy7H29HcgsUQ7/Ff2HFta1ViGI03px3R96Oqunz+UJRSeR0E36++esuBNHXlgVWTD7fnMapGPS17eL7dOf1CcdmnFDDqRj8vW233qU/r09sliHbMWCYBv+I2u579Of1cWcasj9xKoZOi/bsUz8iLzCs4VT0hb5lzBlZ6WPitmEzY3V9ZqxjzdhbiIio6K6xmYbsi+zDuRhrxN+jS69M7Aw24RklI8bHadAXUwRc3IS3cduecVbVWOUJ1RWxLH7Fzdqss/7k4zR0+pu99/ZdemUuMZnONPTyKSTUpiJczTg/h00SFZ9NlNvyqpdt/iGLllDdS9zy2fhsSvXGadCXLAiXUK9RbA2XZM8uy869cRr8Z6wgWkLdwXrBZqfUK2mdZ5uLCzP6Hv16PdbquK1iSayln5mN51v8UtEXSv6hzKifH4xwvQbbJK8akHXCT83G2Jbk41PxXywkvV/3XoMdL9egZwxyavIJxdq1N0x9ofa3gliX/LE6zr/wNe6fw/hzfzxQt7dGhhBEny3WOL28wm21itsdeKz9SPHsWvJGKSiyi4JYHzDW+ExkdVytJDGpnj06xf0Kgqsjw1DYDRnv3Mf/kysexBofpzXUO7sfxdol+O2uB8eG6XBIsMVbrY5LN3aJQ5RVcX9nSrF2dS1LkjT2wxiCoWAr8K91zBzpOl+Bb+N2Z7TASZ9fbUmciWHw38wNiVb13TqvGLU697pCxSoOw1j1ekv2BKXVySD9xk59wn3ytlPn2aXKY8m2vZK45g1P6b5i6JTFQrvKHDv7U4SveSZll9XxkdjZNQzP3d0pxQJcWoSCFywZXDfEqhbIef1q6lX4HMO3W5j2A+SC74Kx09CqHJlbR3+e72u1cG0Hw1d45Kc0iowVV1d37bhoV8HToB6EDzwe+UVZuGQYsh0R9SsMiN7aSM+3Kj30y7jMzSgGFxWV2vY15s7CevChn6FkkmwvrshC+7HqNabLVV9w/dH4bKaTpQj6ncz6YPUjU9vi5SDoKzwMYDMZPYHhaZgZsdaiD9mWsaQ/GqBSpJSRTQhfpCj63VFf5F0QvBdA2Wg0YCtD+E4Enn5jMnIhGJyagSCWiRYjmGYaRZHL34SWWfguKBvGQkaKGIahSE3R1thPETZ3x3PQUOIttyRLsqlkRE6eD2kao9oQKSahtpuKmRF37fJjInipZGTcdFGybTMj2EX8Swg3oKg3i3Hblkq/0uCcptVQbOWkJdZnoX+T8C9RFwiCIAjip9mLRqNtXg7TsGCLjRdtbddrAvhKINyOCnqp37RNE1bbf4GDYpfS9ugOtpZtu0VsgkYFrvL/MmBNHhfygmpBlgzTkMwTllTkhbQieXcjNGSlzZvA0E6zjAK7sqyI+InGgmwUo0VDUlppMEQz/OCircgN3rTHR2kUBIvRE1kW7r4ohoZ4l0zblE+4YcvkFhnZbI2amPcSrzoikmB3KnBAAzJI2JDj3JBJEmilTRysC3BRVSrhhzVx2Ux75wo4Ez3D9MSwaBglVjKMJp+ismEoJTSEg3CSJOJEfGgIucZIQyBdbgiJFP+kJA45J7IALeJ9fTgZpfLYkEE+wX+8yWy5/M8W4vhBB/iK+PXhOIbmxLCtgAtPqF4TgjGUJEOse77GcI1wBibayBB1oFSw+4YyFBRZzL+bhckWiRgQtXRyZNgyR9HiTUATc2nYhWnYmG9ff44Fg39DYbRZ0ja8IJmjOug1ybKdjBuQRF1DFu5eE6TdgCg1mlgFMhFPoBXx1qZug4cwkmF7EbwDOink384QhAA4B93J/ka2U/b2cp3sPj4nOvzpU8fBp/2sd5S3Z7MHG/wXwLs+vWOH/zaLampspfotK3UAe86yalmqnmNsSU2hm6Z+Bs1NPLqJZy+lLCQFvl3+rsU5GsxiUVO9CDh+XfP7dRUCs6wF/H5N95exFQ31wDJzAgFo1wKbjGVV3Q+oVpltqLoF7/IvzdfiOSaGHUtbZBsWuHT8gZWys2hZS9OGWWh3nBvN32G6ru0zx8GWTd3fcXKbupqbq8VzTAyX+M6mrrGbgB8PbUK4pgyXAxqeZmk3zAqsjN5dVjWMXteyOnPp/Uv4geFKwI9anwM6tFqdbreDhigMBAKfQdZa6nYxz+T8VhaeNrynj8mUoX+/7EwZLnNDHVOKrt8z3FcDmmX5YagKZqj7VVV/ZAgH1QeGLLcMRy1ddT4JZqhhtB4Y+nOOU34wSgHIMweWlS2rQhh69XBJ05YOso8MJ5nGO1rGjOvhYJZRAzewm7X83Sd+//xZ1LSDTqfTxUxTvpdpHhhC5dvsdqAuQJnfQOC0DrvRrJuNA0vXnHmLPMkiH5xWquPl0oBufTfUxoYBMGQrfsg6unqDSxos+AFNT7CcBasDLaB+3BBCaDz2uykrwdhNaoUdpJaxZQl2Oyk++VZSWPWyFqQXrHvZFH/LDco7N5B0lvfnaDATp4xAZz/xgZYbPca7zmQX1uG5cQsyHpdO7kMvvIlfgUpi9Mgzlq/AA38GFWxKeC8TicogwV9UKhXe7p1YmXfXX8Zhr89uD/tscHiUT/QPb9kx/BwOB9jWPxzAi35+cHSbyGPb7X8GrM/uEpWju0GifzeYd+dfRP/2mA3Bste7y1duE4dg0GfDPnY+0e/1oO2QDY6HbNDL38HZjB2xw8Qt/Bfk+8PbeXf+RRzDABz2jlmvf8TyR8c9ONBnh7c4Arlh4r8VNriDxxANjxm7g/bbfp8JY4i9HCQGMBVhb9CDeTbMs8qwx/jxCj8hPxzm8xU4CV8khhWYs4NEYiDKRCQIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIQmj+B+IO9J2XJhE1AAAAAElFTkSuQmCC",oS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADgCAMAAAApBkruAAAAhFBMVEX///8AAAD+/v4VFRWvr6/Y2NjAwMCZmZmAgIDJycmRkZH7+/vT09PR0dGWlpaOjo7s7Oz19fXf39/n5+e4uLifn5+GhoYpKSnq6up2dnZwcHBRUVGrq6t8fHylpaUbGxtCQkJJSUlfX18PDw8wMDBoaGhZWVkhISE2NjZFRUU7OztVVVVUQJkKAAANfklEQVR4nO1caXviug52XAgEE7JBWvaWZdpp////u17iRHIcCCXz3PNB7zmdKfESv7YsS7IYxggEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKB4IBzxv9Ft/+gz/8U5Lz9d0iqwQw/Gs7+jWz8DkKIfzAaITj/73AMy+H7FIeQieG7fQz1ZuGbIP3FMt5ukV822XCywXk2Hxuov+dz+b8Xto6uFWdakORPGgRLs3P0kN7iCrDlvHqi/hwXGbcsqw3HnQExNgq+x0MRVG85BA7eT9NkMXGwekd1xnaEuyCQM67PDvU5rhquTqDyZqUeyZJZufl5CYLjn3IZp8LIgqs81QfZeDEYRSn3I8xvNE5920B8w1pTq0vFJgguYz0ufEIum8ovIegny0PN/vU0y4WdZYdi8RkE28H2oux/1wzmUhbVY0d4mEggwz9vdmBzOZogYZYhr5uPWhT1kukKxf5TF3yMivaulHV02/lQFBmk+DE2w2htdM7mX5DiyIiprKil/N1uLNuwg6KWZtW7WJ5N0TYSziqq7X1VRavhDo2a4stO+DSdGRncWsEfQ0fIyq/6QdRu2KaIEG+rwtOYVWJea6FId7ot2FBno6X4eWC+Ps0cR5DhMTTEZeWxeTJpN7xJUVaOzlZ0QoZEh7OFGY88GgfiWFE8Rh0WtXpN8QdSTCqZlAVlNcyitX1vU1Sq2HIMtPQ0DNNKsa2ryRiK4svK7zRw/XAFGZ5zZnV9+reSgOWDglrvON16p9arLoutsAx2+huKiZAWk1cu5KP8FVJcWdubNyfDtTXfdwRV1p43NUJQkk3t0+UwBKV2UxQvac2nNRwuFpDh9s2abow1C1G4ze6somrdnLQ/4PAoPuzT6VAGvjqFjqNOqRdWw1lEdt9wnjZPR49R1AAH8qbuFDSsTIrnoVbxlN5S0NcA4IfVBjgDpt86cxr1oDh+aerkNZsNnLfhKC5bCrEG5yFkCGc2A4flV+y060ExBXq6tPZaBl72/iw3y2EXHNMbXnaKTv1EH/gG8zMomDjN7lPkbN/UkTu81S74lZvmeZGkuOmMJMhnE/jOFwbsg9UWlHw4ktpjFWHX9tjJ1j+g04HcDUmxQztzdSRnn5DirirRNNfI5hlb16g/RbhiibEUxwlQQsHJ3eG/g9i9tjR+RUTZoSWksRFNGQsPDDpYC2zh9hFUOEVXIx2reAwN/mggij9pB0X5zjk6MOK6RP4kOVSpwZ8U6aw+qxjD5mavbNIMKvDpEAw5P+w7lSlncLspq9GeF1Kk5MmcXwARbMT1oTgGfW+1TMYL5EwHwSCnhth1bWqORSm4zBsS0ng7yArgEAv2DwqqQ1HvgVLav8URPO5q+gi4GB26itjbX0jxgDjs1WkNz8yXlIEKfSgCKzW4qpbFVXUAzhK1+5/3qMSoZXxVDK3nVuE1awIX0jQvVVAKHtRyxh9cRbgXtQwsdyp8ugRWzyV/PjDORdiptgpI4GUJIknSvzK2KlS4G/HgKgIZkFay7G6jdXsBFcCq2/DqzzHrOHy4mIJXBdcU+a06kIUl9Ttnj2hUFN/RcdN0rR+LGex0AIqiUxCQalNHO4yvzMySQjtTeZIPUETWzUxpm0VsOoVqKJg/K6esy4uST5Gu2aAwGVtUw+Zwxj8etG4aKT+rkGK2rpx/8QE6XQzl+7v8ZLcoSv6Rowppac2FHNbKH9qLzSF/TqxkGJGCdvFH8a84sgIt4goHp8OD/YxmfPUQxaK2/07a619EVUiTxcCmOg9jxLUZcraGDN8ztOmzRROrhmbztjEFe1CsVdVXqrWMvY3iUmRBp6d/s4qOAJ53WK3le1E/mAMjLmgc4x4ULY/vWB/v0qyvfRXog5yHcTccyHmEplmwF1h173bNzApojKzr53co8ubU/TFRFVEWzTVVCq3/3dDsTABxCQ1F7dM0NzKCJWPAGAU+6n46KeqVUlNW6VOpuLRI5FNoOcBQg1a0A16Mm3nM0C3NlHF0toxnWe1zyAWHM167G3ei4ZyZq65rbEPUu1Gla/QgQmDEvc6BXTUYSahDjOXRGDZMLEeN3HKGFNPahki6KFbNMh1g/zvSakxbH1P4FpZDfT4Zcg2rt7hXbc38aotmD8JGHAv157itMNxVFNl49xW8/E2iugvpfs5EIyvyAfQAvsSQBM0LkHF60ffcXNQUY3VHLJplzT9A7UM144DieRJHDcLRbPPxdVrEb4ae2Wb8EDJIEXuqQxhxkB92ctQlGOhfDWcS4QYC3uq8VjIMKe4PqxqLcrP9uvw97SfLPG1UWFG60RWYWzAbNg3HOXh1sgIqTssCP0CurTLiuveiXC6RpfmylDvh/HU6xJZilGAb2Kojg5+3QXcjx8Zp4F7H8whGhfWLBYx9JuymuqmQRVetM7eTQhOaOZIhNydQ1DfuXH4FgdJPpm7nYuYmGsgBggbbtHMVjXlW7bh0ZILpW2XuZuWb0ylDkbj1kAy5QOHvLQ4dSuT4deaqEGrg5d1DoyI5rnzNbciWO/wSJZbQXT0WzzvGpl+tH1GCzZJBu6aKvDnNGDb3rn0EVfdp7eDjbhK3S1M4joFy4oxXj4zTH7eGjgO25xMZcVrm+rjELLI2zHvm2WxwJJthbHEtc9jDcHw1dUW/901nAW8+9BVJD4ryuKl198EjhiguNEhOnD6DM3TVtsDl6o9dO3NBAUmqmvEe4SmTJFjBvbyTSGEkbjaIwuFORC0IMkezKD0nPBtf7lBw13gZ96KoOdZ66ty6O8JH40A5cVJy4K2oE/7WFeLEN5ucvcEZVzlxvfYiB1Gaa/vyCMVxh8iJ4+6pX+dm2HJVoSuSAo/Gd+bLgfO8EAYyj55bThhQWDVJr89gju5LI0cklSW+DSMv4gNu2WsVsbW9bXcK3QF1Vf40Qe4cGE4QWee8/awmrWxck2MLZ2fSZxW561CUsusFwGRRgk4/Q/a0oeromq/YtWuU99tx28pw7HNb/GIVA88NGfK2B3D98YFRCuAIVyNSl2Pcp1E5FvLPZa9VZJji2s2WwkbcZ/bcKqp9hq/aWuul8miX9a/CXWDkgl37alRI8cOTYwyHFD5lp6q2KdI17atjWWed21+zEFlUHOtQOeO/oHiZO4UMX6fuvSnBD5DEuRmeU0rKaZNd4PjFehnhmbr8BcVziBmoeY8ck+KZZXSS+UJfb5Oojq287QvUWgGlWoBDpC9Fnafm1EBG3DM5cWpvfaBF9HWWrpswXH56w+2d4X4DCXuEIipUb4Nxoe/nKKID47WVz67vi+qrPs7mfxFFXfAGZukI4qC3rJsISbenAvJ8OnKg+gEFCtXRjbSX+VhGzefRxXNConjBXYomXtDywlwMlhOHDoyjG/DScsgbt5Sz6aeHIprx+6uopi2+tYoaUFKfyYnL4ZvOOyt6zVhULGUEvmnw/dqKJ3GGcuLuU+ROYMtPcQw7/f11Kv660Clt2zXyv2nBbEicjX2mAb5OvUtRi8YPDPd5KaK40O9z4uA9kPnuDG9pm3Ep6mi8mHkoMoZy4nqsomBRAgn4KDpZzVUA7yHo20v0TRPPxbO6Uxwd7J7U90YeigLnxN1fRc72BTRfll4LLYXzH8Iv5vSl6JhewZcvEMR1zhuzRnjps2FbaYF3V5HlGyTb/lVs5cQ9vow4IUspZp8nMZ5l1bfW5CIeuygis/keRenzj1AakS/yJZ+guFD+G0FFeWzBxfv9j/o6SpUVylLzqhunr9sUTc6bAAejP7jHCng0rh53NzjO/wx2PqdMXUeZQI760TQurUND+1c4gnebIiv2DHm9HhtV25Y4J+4hhrzl56mvlHhnKZzZBpmxYbwaVfaGNNdNiowlynsKmxmuM5Mcy+qJnDhNMfx0O/B1oS/H9JsXn7coogvsOxTTjVp38D2QNVrF+leefYDefLriFkfuXLWVHQyLJDUzkts176DI3vpTDCd6tM2d9BHQAsPgOCfurT9FE5VEGZlfudN7PZoq5y2q59NHUbXDTtlNikmk1DMXjZ9pPQmgDvQphXLiHkgX1xRzlJthrtra+RFZojNiYzB8L0XVsG3EdVDM1ubfA2BFLap7sBfhV0KcnLhH4JjB310SkJdyILsTNDMwRdAQJ7Q4FKHtuxzZZ/Wd96fNvZFGRARPL2icvAB3494Bwl33Z5WPfZjPy+sahT0kjinqScpDVTtu69SD7UenaGSx+bQJzd+yo2LT9KoNjGxSqmR7YTtFnvOiHthd30o5SPtpg3I2S2YtJBLT6R5WlNjPYPfahrVty6mD0pQks3Js8k8S2eksMY+ThbqSzRbV0WG+Hz66jvQ3IrJVYjCr36v7q1DejwIMlufRuyOvCW123W5TSfjn1/bguzT29nevvPqKtM2t89rwemeYLVSnUrY4wa/lc+EWMQ6rcatMKrelDq+LPA6Xo2UY5RmzpfXQmjc2uYC9/m0j3vroa1L9IyisOU9aXhsi3/la7ozL/s6ZM1hec+J1RTtDYHaHTW8kEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIhP8H/gdRjppuV7ZM8gAAAABJRU5ErkJggg==",lS=[{id:"foco-criativo",logo:rS,positions:[{id:"product-manager",period:"Nov 2025 – Present",skills:["Product Management","Product Strategy","Wireframing","Jira","UX Design","Generative AI","AI","Backlog Management","Prototyping","UI Design","Design Thinking","Git","Product Road Mapping","Cross-functional Collaborations","User Stories","Product Ownership","Stakeholder Management","Scrum","User Research"]},{id:"product-owner",period:"Nov 2024 – Nov 2025",skills:["Product Strategy","Wireframing","Jira","UX Design","Generative AI","AI","Backlog Management","Prototyping","UI Design","Design Thinking","Git","Product Road Mapping","Cross-functional Collaborations","User Stories","Product Ownership","Stakeholder Management","Scrum","User Research"]},{id:"software-engineer",period:"Jun 2024 – Nov 2024",skills:["CSS","UX Design","UI Design","Front-End Development","HTML5","React Native","JavaScript","Scrum"]},{id:"intern",period:"Jan 2024 – Jun 2024"}]},{id:"cmpl-lifeguard",logo:sS,positions:[{id:"lifeguard-cmpl",period:"Jun 2023 – Sep 2023"}]},{id:"diver-lifeguard",logo:aS,positions:[{id:"lifeguard-diver",period:"Jul 2022 – Sep 2022"}]},{id:"zara",logo:oS,positions:[{id:"cashier",period:"Jun 2022 – Jul 2022"}]}],cS={id:"experience",class:"bg-gray-50/50 py-20 dark:bg-neutral-900/50"},uS={class:"section-container"},hS={class:"text-center"},fS={class:"section-title"},dS={class:"section-subtitle"},pS={class:"mx-auto mt-12 max-w-3xl space-y-6"},mS={class:"flex items-center gap-4 border-b border-gray-100 px-6 py-4 dark:border-neutral-800"},_S=["src","alt"],gS={class:"font-display text-lg font-semibold text-gray-900 dark:text-white"},vS={class:"text-sm text-gray-400"},xS={class:"px-6 py-5"},MS={key:0,class:"absolute -left-[calc(1.75rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-primary-500 bg-white dark:bg-neutral-900"},SS={class:"font-display text-base font-semibold text-gray-900 dark:text-white"},yS={class:"mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"},ES={class:"font-medium text-primary-600 dark:text-primary-400"},TS={class:"text-gray-400"},bS={key:1,class:"mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400"},AS={key:2,class:"mt-3 flex flex-wrap gap-1.5"},wS={__name:"ExperienceSection",setup(r){const{t,te:e}=Ui();return(n,i)=>(te(),ee("section",cS,[Z("div",uS,[Z("div",hS,[Z("h2",fS,Gt(Ut(t)("experience.title")),1),Z("p",dS,Gt(Ut(t)("experience.subtitle")),1)]),Z("div",pS,[(te(!0),ee(si,null,ai(Ut(lS),s=>(te(),ee("div",{key:s.id,class:"card overflow-hidden p-0"},[Z("div",mS,[Z("img",{src:s.logo,alt:Ut(t)(`experience.companies.${s.id}.name`),class:"h-11 w-11 flex-shrink-0 rounded-xl object-cover"},null,8,_S),Z("div",null,[Z("h3",gS,Gt(Ut(t)(`experience.companies.${s.id}.name`)),1),Z("p",vS,Gt(Ut(t)(`experience.companies.${s.id}.location`)),1)])]),Z("div",xS,[Z("div",{class:kr(["relative",s.positions.length>1?"border-l-2 border-primary-100 pl-7 dark:border-primary-800":""])},[(te(!0),ee(si,null,ai(s.positions,(a,o)=>(te(),ee("div",{key:a.id,class:kr(["relative",o<s.positions.length-1?"mb-7 pb-7 border-b border-gray-50 dark:border-neutral-800/50":""])},[s.positions.length>1?(te(),ee("div",MS)):_a("",!0),Z("h4",SS,Gt(Ut(t)(`experience.positions.${a.id}.title`)),1),Z("div",yS,[Z("span",ES,Gt(Ut(t)(`experience.positions.${a.id}.type`)),1),i[0]||(i[0]=Z("span",{class:"text-gray-300 dark:text-neutral-600"},"·",-1)),Z("span",TS,Gt(a.period),1)]),Ut(e)(`experience.positions.${a.id}.description`)?(te(),ee("p",bS,Gt(Ut(t)(`experience.positions.${a.id}.description`)),1)):_a("",!0),a.skills&&a.skills.length?(te(),ee("div",AS,[(te(!0),ee(si,null,ai(a.skills,l=>(te(),ee("span",{key:l,class:"badge text-[11px]"},Gt(l),1))),128))])):_a("",!0)],2))),128))],2)])]))),128))])])]))}},RS=[{id:"productStrategy",rating:5},{id:"agileScrum",rating:4},{id:"dataAnalysis",rating:4},{id:"stakeholderManagement",rating:5},{id:"userResearch",rating:4}],CS=["roadmapPlanning","abTesting","sql","jiraConfluence","figma","wireframing","marketAnalysis","okrsKpis","apiDesign","businessModeling","presentationDesign","crossFunctionalLeadership"],PS=[{id:"portuguese",percentage:100},{id:"english",percentage:90}],DS={id:"skills",class:"bg-gray-50/50 py-20 dark:bg-neutral-900/50"},LS={class:"section-container"},IS={class:"text-center"},US={class:"section-title"},NS={class:"section-subtitle"},FS={class:"mx-auto mt-12 max-w-4xl"},OS={class:"font-display text-xl font-semibold text-gray-900 dark:text-white"},BS={class:"mt-6 space-y-5"},zS={class:"w-48 text-sm font-medium text-gray-700 sm:w-56 dark:text-gray-300"},kS=["aria-label"],VS={class:"mt-12"},HS={class:"font-display text-xl font-semibold text-gray-900 dark:text-white"},GS={class:"mt-4 flex flex-wrap gap-2"},WS={class:"mt-12"},XS={class:"font-display text-xl font-semibold text-gray-900 dark:text-white"},YS={class:"mt-6 space-y-4"},qS={class:"mb-1.5 flex items-baseline justify-between"},KS={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},jS={class:"text-xs text-gray-400"},ZS={class:"h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700"},$S=["aria-valuenow"],JS={__name:"SkillsSection",setup(r){const{t}=Ui();return(e,n)=>(te(),ee("section",DS,[Z("div",LS,[Z("div",IS,[Z("h2",US,Gt(Ut(t)("skills.title")),1),Z("p",NS,Gt(Ut(t)("skills.subtitle")),1)]),Z("div",FS,[Z("div",null,[Z("h3",OS,Gt(Ut(t)("skills.topTitle")),1),Z("div",BS,[(te(!0),ee(si,null,ai(Ut(RS),i=>(te(),ee("div",{key:i.id,class:"flex items-center gap-4"},[Z("span",zS,Gt(Ut(t)(`skills.top.${i.id}`)),1),Z("div",{class:"flex gap-1.5","aria-label":`${Ut(t)(`skills.top.${i.id}`)}: ${i.rating} / 5`},[(te(),ee(si,null,ai(5,s=>Z("span",{key:s,class:kr(["h-3 w-3 rounded-full transition-colors",s<=i.rating?"bg-primary-500":"bg-gray-200 dark:bg-neutral-700"])},null,2)),64))],8,kS)]))),128))])]),Z("div",VS,[Z("h3",HS,Gt(Ut(t)("skills.otherTitle")),1),Z("div",GS,[(te(!0),ee(si,null,ai(Ut(CS),i=>(te(),ee("span",{key:i,class:"badge"},Gt(Ut(t)(`skills.other.${i}`)),1))),128))])]),Z("div",WS,[Z("h3",XS,Gt(Ut(t)("skills.langTitle")),1),Z("div",YS,[(te(!0),ee(si,null,ai(Ut(PS),i=>(te(),ee("div",{key:i.id},[Z("div",qS,[Z("span",KS,Gt(Ut(t)(`skills.languages.${i.id}.name`)),1),Z("span",jS,Gt(Ut(t)(`skills.languages.${i.id}.level`)),1)]),Z("div",ZS,[Z("div",{class:"h-full rounded-full bg-primary-500 transition-all duration-700",style:$l({width:i.percentage+"%"}),role:"progressbar","aria-valuenow":i.percentage,"aria-valuemin":"0","aria-valuemax":"100"},null,12,$S)])]))),128))])])])])]))}},QS={id:"cv",class:"bg-gradient-to-r from-primary-600 to-primary-700 py-16 dark:from-primary-800 dark:to-primary-900"},ty={class:"section-container text-center"},ey={class:"font-display text-3xl font-bold text-white sm:text-4xl"},ny={class:"mt-3 text-lg text-primary-100"},iy={href:"/cv.pdf",download:"",class:"flex items-center gap-2 px-6 py-2 font-semibold text-white"},ry={__name:"CvSection",setup(r){const{t}=Ui();return(e,n)=>(te(),ee("section",QS,[Z("div",ty,[Z("h2",ey,Gt(Ut(t)("cv.title")),1),Z("p",ny,Gt(Ut(t)("cv.subtitle")),1),en(ql,{width:"auto",height:"auto","border-radius":40,brightness:80,opacity:.9,blur:14,"background-opacity":.05,class:"mt-6 inline-flex cursor-pointer transition-transform hover:scale-105"},{default:ma(()=>[Z("a",iy,[n[0]||(n[0]=Z("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})],-1)),Oo(" "+Gt(Ut(t)("cv.button")),1)])]),_:1})])]))}},sy={class:"pc-inside"},ay={class:"pc-content pc-avatar-content"},oy=["src","alt"],ly={key:0,class:"pc-user-info"},cy={class:"pc-user-details"},uy={class:"pc-mini-avatar"},hy=["src","alt"],fy={class:"pc-user-text"},dy={class:"pc-handle"},py={class:"pc-status"},my=["aria-label"],_y={class:"pc-content"},gy={class:"pc-details"},vy="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)",xy="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",My=Kl({__name:"ProfileCard",props:{avatarUrl:{default:"<Placeholder for avatar URL>"},iconUrl:{default:"<Placeholder for icon URL>"},grainUrl:{default:"<Placeholder for grain URL>"},behindGradient:{default:void 0},innerGradient:{default:void 0},showBehindGradient:{type:Boolean,default:!0},className:{default:""},enableTilt:{type:Boolean,default:!0},miniAvatarUrl:{default:void 0},name:{default:"Javi A. Torres"},title:{default:"Software Engineer"},handle:{default:"javicodes"},status:{default:"Online"},contactText:{default:"Contact"},showUserInfo:{type:Boolean,default:!0}},emits:["contactClick"],setup(r,{emit:t}){const e=r,n=t,i=ni("wrapRef"),s=ni("cardRef"),a={SMOOTH_DURATION:600,INITIAL_DURATION:1500,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60},o=(T,A=0,P=100)=>Math.min(Math.max(T,A),P),l=(T,A=3)=>parseFloat(T.toFixed(A)),c=(T,A,P,v,S)=>l(v+(S-v)*(T-A)/(P-A)),u=T=>T<.5?4*T*T*T:1-Math.pow(-2*T+2,3)/2;let h=null;const f=(T,A,P,v)=>{const S=P.clientWidth,D=P.clientHeight,k=o(100/S*T),U=o(100/D*A),N=k-50,$=U-50,H={"--pointer-x":`${k}%`,"--pointer-y":`${U}%`,"--background-x":`${c(k,0,100,35,65)}%`,"--background-y":`${c(U,0,100,35,65)}%`,"--pointer-from-center":`${o(Math.hypot(U-50,k-50)/50,0,1)}`,"--pointer-from-top":`${U/100}`,"--pointer-from-left":`${k/100}`,"--rotate-x":`${l(-(N/5))}deg`,"--rotate-y":`${l($/4)}deg`};Object.entries(H).forEach(([Q,V])=>{v.style.setProperty(Q,V)})},p=(T,A,P,v,S)=>{const D=performance.now(),k=S.clientWidth/2,U=S.clientHeight/2,N=$=>{const H=$-D,Q=o(H/T),V=u(Q),ot=c(V,0,1,A,k),ut=c(V,0,1,P,U);f(ot,ut,v,S),Q<1&&(h=requestAnimationFrame(N))};h=requestAnimationFrame(N)},g=()=>{h&&(cancelAnimationFrame(h),h=null)},_=T=>{const A=s.value,P=i.value;if(!A||!P||!e.enableTilt)return;const v=A.getBoundingClientRect();f(T.clientX-v.left,T.clientY-v.top,A,P)},m=()=>{const T=s.value,A=i.value;!T||!A||!e.enableTilt||(g(),A.classList.add("active"),T.classList.add("active"))},d=T=>{const A=s.value,P=i.value;!A||!P||!e.enableTilt||(p(a.SMOOTH_DURATION,T.offsetX,T.offsetY,A,P),P.classList.remove("active"),A.classList.remove("active"))},b=Ca(()=>({"--icon":e.iconUrl?`url(${e.iconUrl})`:"none","--grain":e.grainUrl?`url(${e.grainUrl})`:"none","--behind-gradient":e.showBehindGradient?e.behindGradient??vy:"none","--inner-gradient":e.innerGradient??xy})),E=()=>{n("contactClick")},M=T=>{const A=T.target;A.style.display="none"},C=T=>{const A=T.target;A.style.opacity="0.5",A.src=e.avatarUrl};return jl(()=>{if(!e.enableTilt)return;const T=s.value,A=i.value;if(!T||!A)return;T.addEventListener("pointerenter",m),T.addEventListener("pointermove",_),T.addEventListener("pointerleave",d);const P=A.clientWidth-a.INITIAL_X_OFFSET,v=a.INITIAL_Y_OFFSET;f(P,v,T,A),p(a.INITIAL_DURATION,P,v,T,A)}),Zl(()=>{const T=s.value;T&&(T.removeEventListener("pointerenter",m),T.removeEventListener("pointermove",_),T.removeEventListener("pointerleave",d)),g()}),(T,A)=>(te(),ee("div",{ref_key:"wrapRef",ref:i,class:kr(`pc-card-wrapper ${r.className}`.trim()),style:$l(b.value)},[Z("section",{ref_key:"cardRef",ref:s,class:"pc-card"},[Z("div",sy,[A[0]||(A[0]=Z("div",{class:"pc-shine"},null,-1)),A[1]||(A[1]=Z("div",{class:"pc-glare"},null,-1)),Z("div",ay,[Z("img",{class:"avatar",src:r.avatarUrl,alt:`${r.name||"User"} avatar`,loading:"lazy",onError:M},null,40,oy),r.showUserInfo?(te(),ee("div",ly,[Z("div",cy,[Z("div",uy,[Z("img",{src:r.miniAvatarUrl||r.avatarUrl,alt:`${r.name||"User"} mini avatar`,loading:"lazy",onError:C},null,40,hy)]),Z("div",fy,[Z("div",dy,"@"+Gt(r.handle),1),Z("div",py,Gt(r.status),1)])]),Z("button",{class:"pc-contact-btn",onClick:E,style:{"pointer-events":"auto"},type:"button","aria-label":`Contact ${r.name||"user"}`},Gt(r.contactText),9,my)])):_a("",!0)]),Z("div",_y,[Z("div",gy,[Z("h3",null,Gt(r.name),1),Z("p",null,Gt(r.title),1)])])])],512)],6))}}),Sy=(r,t)=>{const e=r.__vccOpts||r;for(const[n,i]of t)e[n]=i;return e},yy=Sy(My,[["__scopeId","data-v-1bb625a6"]]),Ey={id:"contact",class:"py-20 bg-gray-50/50 dark:bg-neutral-900/50"},Ty={class:"section-container"},by={class:"text-center"},Ay={class:"section-title"},wy={class:"section-subtitle"},Ry={class:"mx-auto mt-12 flex justify-center"},Cy={__name:"ContactSection",setup(r){const{t}=Ui(),e=()=>{window.location.href=`mailto:${kn.email}`};return(n,i)=>(te(),ee("section",Ey,[Z("div",Ty,[Z("div",by,[Z("h2",Ay,Gt(Ut(t)("contact.title")),1),Z("p",wy,Gt(Ut(t)("contact.subtitle")),1)]),Z("div",Ry,[en(yy,{"avatar-url":Ut(kn).photo,"mini-avatar-url":Ut(kn).photo,name:Ut(kn).name,title:Ut(t)("hero.role"),handle:"nunoamorim99",status:Ut(t)("contact.status"),"contact-text":Ut(t)("contact.button"),"show-user-info":!0,"enable-tilt":!0,onContactClick:e},null,8,["avatar-url","mini-avatar-url","name","title","status","contact-text"])])])]))}},Ly={__name:"HomePage",setup(r){return(t,e)=>(te(),ee("div",null,[en(PM),en(FM),en(qM),en(iS),en(wS),en(JS),en(ry),en(Cy)]))}};export{Ly as default};
