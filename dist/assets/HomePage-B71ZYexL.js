var Dc=r=>{throw TypeError(r)};var qa=(r,e,t)=>e.has(r)||Dc("Cannot "+t);var tt=(r,e,t)=>(qa(r,e,"read from private field"),t?t.call(r):e.get(r)),en=(r,e,t)=>e.has(r)?Dc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),zt=(r,e,t,n)=>(qa(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),gt=(r,e,t)=>(qa(r,e,"access private method"),t);import{d as rh,u as Wi,o as sh,a as ah,b as at,c as ot,n as Es,r as oh,w as Lc,e as ud,f as lh,g as ee,h as hd,i as Fo,j as sr,k as fd,l as dd,m as In,p as ze,t as Ke,q as Lr,s as Ka,v as Oo,F as ii,x as ri,y as Za}from"./index-Cb3uc0fS.js";function ei(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ch(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kr={duration:.5,overwrite:!1,delay:0},ql,Ft,xt,wn=1e8,pt=1/wn,Bo=Math.PI*2,pd=Bo/4,md=0,uh=Math.sqrt,_d=Math.cos,gd=Math.sin,Ut=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},li=function(e){return typeof e=="number"},Kl=function(e){return typeof e>"u"},Wn=function(e){return typeof e=="object"},tn=function(e){return e!==!1},Zl=function(){return typeof window<"u"},Gs=function(e){return bt(e)||Ut(e)},hh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,vd=/random\([^)]+\)/g,xd=/,\s*/g,Ic=/(?:-?\.?\d|\.)+/gi,fh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ja=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dh=/[+-]=-?[.\d]+/,Md=/[^,'"\[\]\s]+/gi,Sd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,On,zo,jl,Mn={},wa={},ph,mh=function(e){return(wa=Vr(e,Mn))&&an},$l=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ts=function(e,t){return!t&&console.warn(e)},_h=function(e,t){return e&&(Mn[e]=t)&&wa&&(wa[e]=t)||Mn},bs=function(){return 0},yd={suppressEvents:!0,isStart:!0,kill:!1},ma={suppressEvents:!0,kill:!1},Ed={suppressEvents:!0},Jl={},Ei=[],ko={},gh,hn={},$a={},Uc=30,_a=[],Ql="",ec=function(e){var t=e[0],n,i;if(Wn(t)||bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=_a.length;i--&&!_a[i].targetTest(t););n=_a[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vh(e[i],n)))||e.splice(i,1);return e},Qi=function(e){return e._gsap||ec(Rn(e))[0]._gsap},vh=function(e,t,n){return(n=e[t])&&bt(n)?e[t]():Kl(n)&&e.getAttribute&&e.getAttribute(t)||n},nn=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},Ir=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Td=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ra=function(){var e=Ei.length,t=Ei.slice(0),n,i;for(ko={},Ei.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},tc=function(e){return!!(e._initted||e._startAt||e.add)},xh=function(e,t,n,i){Ei.length&&!Ft&&Ra(),e.render(t,n,!!(Ft&&t<0&&tc(e))),Ei.length&&!Ft&&Ra()},Mh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Md).length<2?t:Ut(e)?e.trim():e},Sh=function(e){return e},Sn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bd=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Vr=function(e,t){for(var n in t)e[n]=t[n];return e},Nc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ca=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ps=function(e){var t=e.parent||yt,n=e.keyframes?bd(Gt(e.keyframes)):Sn;if(tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ad=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},yh=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},za=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},wi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},er=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wd=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vo=function(e,t,n,i){return e._startAt&&(Ft?e._startAt.revert(ma):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Rd=function r(e){return!e||e._ts&&r(e.parent)},Fc=function(e){return e._repeat?Hr(e._tTime,e=e.duration()+e._rDelay)*e:0},Hr=function(e,t){var n=Math.floor(e=St(e/t));return e&&n===e?n-1:n},Pa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ka=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},Va=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=St(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ka(e),n._dirty||er(n,e)),e},Eh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Pa(e.rawTime(),t),(!t._dur||Fs(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),er(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},zn=function(e,t,n,i){return t.parent&&wi(t),t._start=St((li(n)?n:n||e!==yt?bn(e,n,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yh(e,t,"_first","_last",e._sort?"_start":0),Ho(t)||(e._recent=t),i||Eh(e,t),e._ts<0&&Va(e,e._tTime),e},Th=function(e,t){return(Mn.ScrollTrigger||$l("scrollTrigger",t))&&Mn.ScrollTrigger.create(t,e)},bh=function(e,t,n,i,s){if(ic(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gh!==pn.frame)return Ei.push(e),e._lazy=[s,i],1},Cd=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ho=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Pd=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Cd(e)&&!(!e._initted&&Ho(e))||(e._ts<0||e._dp._ts<0)&&!Ho(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Fs(0,e._tDur,t),u=Hr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Hr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ft||i||e._zTime===pt||!t&&e._zTime){if(!e._initted&&bh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Vo(e,t,n,!0),e._onUpdate&&!n&&_n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&_n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&wi(e,1),!n&&!Ft&&(_n(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Dd=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Gr=function(e,t,n,i){var s=e._repeat,a=St(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:St(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Va(e,e._tTime=e._tDur*o),e.parent&&ka(e),n||er(e.parent,e),e},Oc=function(e){return e instanceof jt?er(e):Gr(e,e._dur)},Ld={_start:0,endTime:bs,totalDuration:bs},bn=function r(e,t,n){var i=e.labels,s=e._recent||Ld,a=e.duration()>=wn?s.endTime(!1):e._dur,o,l,c;return Ut(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Gt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ms=function(e,t,n){var i=li(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;a.immediateRender=tn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ct(t[0],a,t[s+1])},Li=function(e,t){return e||e===0?t(e):t},Fs=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Ut(e)||!(t=Sd.exec(e))?"":t[1]},Id=function(e,t,n){return Li(n,function(i){return Fs(e,t,i)})},Go=[].slice,Ah=function(e,t){return e&&Wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wn(e[0]))&&!e.nodeType&&e!==On},Ud=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ut(i)&&!t||Ah(i,1)?(s=n).push.apply(s,Rn(i)):n.push(i)})||n},Rn=function(e,t,n){return xt&&!t&&xt.selector?xt.selector(e):Ut(e)&&!n&&(zo||!Wr())?Go.call((t||jl).querySelectorAll(e),0):Gt(e)?Ud(e,n):Ah(e)?Go.call(e,0):e?[e]:[]},Wo=function(e){return e=Rn(e)[0]||Ts("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Rn(t,n.querySelectorAll?n:n===e?Ts("Invalid scope")||jl.createElement("div"):e)}},wh=function(e){return e.sort(function(){return .5-Math.random()})},Rh=function(e){if(bt(e))return e;var t=Wn(e)?e:{each:e},n=tr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Ut(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||t).length,m=a[_],d,T,E,M,R,w,C,P,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,wn])[1],!v){for(C=-wn;C<(C=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],d=l?Math.min(v,_)*u-.5:i%v,T=v===wn?0:l?_*h/v-.5:i/v|0,C=0,P=wn,w=0;w<_;w++)E=w%v-d,M=T-(w/v|0),m[w]=R=c?Math.abs(c==="y"?M:E):uh(E*E+M*M),R>C&&(C=R),R<P&&(P=R);i==="random"&&wh(m),m.max=C-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ht(t.amount||t.each)||0,n=n&&_<0?Bh(n):n}return _=(m[f]-m.min)/m.max||0,St(m.b+(n?n(_):_)*m.v)+m.u}},Xo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=St(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(li(n)?0:Ht(n))}},Ch=function(e,t){var n=Gt(e),i,s;return!n&&Wn(e)&&(i=n=e.radius||wn,e.values?(e=Rn(e.values),(s=!li(e[0]))&&(i*=i)):e=Xo(e.increment)),Li(t,n?bt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=wn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||li(a)?u:u+Ht(a)}:Xo(e))},Ph=function(e,t,n,i){return Li(Gt(e)?!t:n===!0?!!(n=0):!i,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Nd=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Fd=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},Od=function(e,t,n){return Lh(e,t,0,1,n)},Dh=function(e,t,n){return Li(n,function(i){return e[~~t(i)]})},Bd=function r(e,t,n){var i=t-e;return Gt(e)?Dh(e,r(0,e.length),t):Li(n,function(s){return(i+(s-e)%i)%i+e})},zd=function r(e,t,n){var i=t-e,s=i*2;return Gt(e)?Dh(e,r(0,e.length-1),t):Li(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},As=function(e){return e.replace(vd,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(xd);return Ph(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Lh=function(e,t,n,i,s){var a=t-e,o=i-n;return Li(s,function(l){return n+((l-e)/a*o||0)})},kd=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Ut(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Vr(Gt(e)?[]:{},e));if(!u){for(l in t)nc.call(o,e,l,"get",t[l]);s=function(g){return ac(g,o)||(a?e.p:e)}}}return Li(n,s)},Bc=function(e,t,n){var i=e.labels,s=wn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},_n=function(e,t,n){var i=e.vars,s=i[t],a=xt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ei.length&&Ra(),o&&(xt=o),u=l?s.apply(c,l):s.call(c),xt=a,u},hs=function(e){return wi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&_n(e,"onInterrupt"),e},Cr,Ih=[],Uh=function(e){if(e)if(e=!e.name&&e.default||e,Zl()||e.headless){var t=e.name,n=bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:bs,render:ac,add:nc,kill:np,modifier:tp,rawVars:0},a={targetTest:0,get:0,getSetter:sc,aliases:{},register:0};if(Wr(),e!==i){if(hn[t])return;Sn(i,Sn(Ca(e,s),a)),Vr(i.prototype,Vr(s,Ca(e,a))),hn[i.prop=t]=i,e.targetTest&&(_a.push(i),Jl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_h(t,i),e.register&&e.register(an,i,rn)}else Ih.push(e)},dt=255,fs={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},Ja=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*dt+.5|0},Nh=function(e,t,n){var i=e?li(e)?[e>>16,e>>8&dt,e&dt]:0:fs.black,s,a,o,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fs[e])i=fs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&dt,i&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&dt,e&dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ic),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ja(l+1/3,s,a),i[1]=Ja(l,s,a),i[2]=Ja(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(fh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ic)||fs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/dt,a=i[1]/dt,o=i[2]/dt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Fh=function(e){var t=[],n=[],i=-1;return e.split(Ti).forEach(function(s){var a=s.match(Rr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},zc=function(e,t,n){var i="",s=(e+i).match(Ti),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Nh(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Fh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ti,"1").split(Rr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ti),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Ti=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Vd=/hsl[a]?\(/,Oh=function(e){var t=e.join(" "),n;if(Ti.lastIndex=0,Ti.test(t))return n=Vd.test(t),e[1]=zc(e[1],n),e[0]=zc(e[0],n,Fh(e[1])),!0},ws,pn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,p,g=function _(m){var d=r()-i,T=m===!0,E,M,R,w;if((d>e||d<0)&&(n+=d-t),i+=d,R=i-n,E=R-a,(E>0||T)&&(w=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,a+=E+(E>=s?4:s-E),M=1),T||(l=c(_)),M)for(p=0;p<o.length;p++)o[p](R,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ph&&(!zo&&Zl()&&(On=zo=window,jl=On.document||{},Mn.gsap=an,(On.gsapVersions||(On.gsapVersions=[])).push(an.version),mh(wa||On.GreenSockGlobals||!On.gsap&&On||{}),Ih.forEach(Uh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ws=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ws=0,c=bs},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,T){var E=d?function(M,R,w,C){m(M,R,w,C),h.remove(E)}:m;return h.remove(m),o[T?"unshift":"push"](E),Wr(),E},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),Wr=function(){return!ws&&pn.wake()},et={},Hd=/^[\d.\-M][\d.\-,\s]/,Gd=/["']/g,Wd=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Gd,"").trim():+c,i=l.substr(o+1).trim();return t},Xd=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Yd=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Wd(t[1])]:Xd(e).split(",").map(Mh)):et._CE&&Hd.test(e)?et._CE("",e):n},Bh=function(e){return function(t){return 1-e(1-t)}},zh=function r(e,t){for(var n=e._first,i;n;)n instanceof jt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},tr=function(e,t){return e&&(bt(e)?e:et[e]||Yd(e))||t},ar=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return nn(e,function(o){et[o]=Mn[o]=s,et[a=o.toLowerCase()]=n;for(var l in s)et[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[o+"."+l]=s[l]}),s},kh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Qa=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Bo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*gd((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kh(o);return s=Bo/s,l.config=function(c,u){return r(e,c,u)},l},eo=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kh(n);return i.config=function(s){return r(e,s)},i};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ar(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;ar("Elastic",Qa("in"),Qa("out"),Qa());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ar("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ar("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ar("Circ",function(r){return-(uh(1-r*r)-1)});ar("Sine",function(r){return r===1?1:-_d(r*pd)+1});ar("Back",eo("in"),eo("out"),eo());et.SteppedEase=et.steps=Mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-pt;return function(o){return((i*Fs(0,a,o)|0)+s)*n}}};kr.ease=et["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ql+=r+","+r+"Params,"});var Vh=function(e,t){this.id=md++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vh,this.set=t?t.getSetter:sc},Rs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Gr(this,+t.duration,1,1),this.data=t.data,xt&&(this._ctx=xt,xt.data.push(this)),ws||pn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Gr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Wr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Va(this,n),!s._dp||s.parent||Eh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Hr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Pa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(Fs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ka(this),wd(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=St(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ed);var i=Ft;return Ft=n,tc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ft=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Oc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Oc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bn(this,n),tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,tn(i)),this._dur||(this._zTime=-pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-pt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=bt(n)?n:Sh,l=function(){var u=i.then;i.then=null,s&&s(),bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){hs(this)},r}();Sn(Rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var jt=function(r){ch(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=tn(n.sortChildren),yt&&zn(n.parent||yt,ei(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Th(ei(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ms(0,arguments,this),this},t.from=function(i,s,a){return ms(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ms(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ps(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ct(i,s,bn(this,a),1),this},t.call=function(i,s,a){return zn(this,Ct.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ct(i,a,bn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ps(a).immediateRender=tn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ps(o).immediateRender=tn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:St(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,m,d,T,E,M,R,w,C;if(this!==yt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,E=this._ts,d=!E,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=St(u%m),u===l?(_=this._repeat,f=c):(R=St(u/m),_=~~R,_&&_===R&&(f=c,_--),f>c&&(f=c)),R=Hr(this._tTime,m),!o&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),w&&_&1&&(f=c-f,C=1),_!==R&&!this._lock){var P=w&&R&1,v=P===(w&&_&1);if(_<R&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(C?0:St(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,R=_),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;zh(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=Dd(this,St(o),St(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!R&&(_n(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=-pt);break}}p=g}else{p=this._last;for(var S=i<0?i:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,a||Ft&&tc(p)),f!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=S?-pt:pt);break}}p=g}}if(T&&!s&&(this.pause(),T.render(f>=o?0:-pt)._zTime=f>=o?1:-1,this._ts))return this._start=M,ka(this),this.render(i,s,a);this._onUpdate&&!s&&_n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&wi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(_n(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(li(s)||(s=bn(this,s,i)),!(i instanceof Rs)){if(Gt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ut(i))return this.addLabel(i,s);if(bt(i))i=Ct.delayedCall(0,i);else return this}return this!==i?zn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ct?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Ut(i)?this.removeLabel(i):bt(i)?this.killTweensOf(i):(i.parent===this&&za(this,i),i===this._recent&&(this._recent=this._last),er(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ct.delayedCall(0,s||bs,a);return o.data="isPause",this._hasPause=1,zn(this,o,bn(this,i))},t.removePause=function(i){var s=this._first;for(i=bn(this,i);s;)s._start===i&&s.data==="isPause"&&wi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)vi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Rn(i),l=this._first,c=li(s),u;l;)l instanceof Ct?Td(l._targets,o)&&(c?(!vi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=bn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Ct.to(a,Sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||pt,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Gr(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Sn({startAt:{time:bn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bc(this,bn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bc(this,bn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=St(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return er(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),er(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=wn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,zn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=St(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Gr(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(yt._ts&&(xh(yt,Pa(i,yt)),gh=pn.frame),pn.frame>=Uc){Uc+=vn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&vn.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},e}(Rs);Sn(jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var qd=function(e,t,n,i,s,a,o){var l=new rn(this._pt,e,t,0,1,qh,null,s),c=0,u=0,h,f,p,g,_,m,d,T;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=As(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),f=n.match(ja)||[];h=ja.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ir(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=ja.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(dh.test(i)||d)&&(l.e=0),this._pt=l,l},nc=function(e,t,n,i,s,a,o,l,c,u){bt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:bt(h)?c?e[t.indexOf("set")||!bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=bt(h)?c?Jd:Xh:rc,g;if(Ut(i)&&(~i.indexOf("random(")&&(i=As(i)),i.charAt(1)==="="&&(g=Ir(f,i)+(Ht(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Yo)return!isNaN(f*i)&&i!==""?(g=new rn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?ep:Yh,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&$l(t,i),qd.call(this,e,t,f,i,p,l||vn.stringFilter,c))},Kd=function(e,t,n,i,s){if(bt(e)&&(e=_s(e,s,t,n,i)),!Wn(e)||e.style&&e.nodeType||Gt(e)||hh(e))return Ut(e)?_s(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=_s(e[o],s,t,n,i);return a},Hh=function(e,t,n,i,s,a){var o,l,c,u;if(hn[e]&&(o=new hn[e]).init(s,o.rawVars?t[e]:Kd(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new rn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Cr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},vi,Yo,ic=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,T=d&&d.data==="nested"?d.vars.targets:m,E=e._overwrite==="auto"&&!ql,M=e.timeline,R,w,C,P,v,S,D,k,N,O,j,W,J;if(M&&(!f||!s)&&(s="none"),e._ease=tr(s,kr.ease),e._yEase=h?Bh(tr(h===!0?s:h,kr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(k=m[0]?Qi(m[0]).harness:0,W=k&&i[k.prop],R=Ca(i,Jl),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?ma:yd),_._lazy=0),a){if(wi(e._startAt=Ct.set(m,Sn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&tn(l),startAt:null,delay:0,onUpdate:c&&function(){return _n(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!o&&!p)&&e._startAt.revert(ma),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),C=Sn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&tn(l),immediateRender:o,stagger:0,parent:d},R),W&&(C[k.prop]=W),wi(e._startAt=Ct.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(ma):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&tn(l)||l&&!g,w=0;w<m.length;w++){if(v=m[w],D=v._gsap||ec(m)[w]._gsap,e._ptLookup[w]=O={},ko[D.id]&&Ei.length&&Ra(),j=T===m?w:T.indexOf(v),k&&(N=new k).init(v,W||R,e,j,T)!==!1&&(e._pt=P=new rn(e._pt,v,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(V){O[V]=P}),N.priority&&(S=1)),!k||W)for(C in R)hn[C]&&(N=Hh(C,R,e,j,v,T))?N.priority&&(S=1):O[C]=P=nc.call(e,v,C,"get",R[C],j,T,0,i.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),E&&e._pt&&(vi=e,yt.killTweensOf(v,O,e.globalTime(t)),J=!e.parent,vi=0),e._pt&&l&&(ko[D.id]=1)}S&&Kh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,f&&t<=0&&M.render(wn,!0,!0)},Zd=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Yo=1,e.vars[t]="+=0",ic(e,o),Yo=0,l?Ts(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=wt(n)+Ht(h.e)),h.b&&(h.b=u.s+Ht(h.b))},jd=function(e,t){var n=e[0]?Qi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Vr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},$d=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Gt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},_s=function(e,t,n,i,s){return bt(e)?e.call(t,n,i,s):Ut(e)&&~e.indexOf("random(")?As(e):e},Gh=Ql+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wh={};nn(Gh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Wh[r]=1});var Ct=function(r){ch(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ps(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,T=i.parent||yt,E=(Gt(n)||hh(n)?li(n[0]):"length"in i)?[n]:Rn(n),M,R,w,C,P,v,S,D;if(o._targets=E.length?ec(E):Ts("GSAP target "+n+" not found. https://gsap.com",!vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Gs(c)||Gs(u)){if(i=o.vars,M=o.timeline=new jt({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:E}),M.kill(),M.parent=M._dp=ei(o),M._start=0,f||Gs(c)||Gs(u)){if(C=E.length,S=f&&Rh(f),Wn(f))for(P in f)~Gh.indexOf(P)&&(D||(D={}),D[P]=f[P]);for(R=0;R<C;R++)w=Ca(i,Wh),w.stagger=0,d&&(w.yoyoEase=d),D&&Vr(w,D),v=E[R],w.duration=+_s(c,ei(o),R,v,E),w.delay=(+_s(u,ei(o),R,v,E)||0)-o._delay,!f&&C===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),M.to(v,w,S?S(R,v,E):0),M._ease=et.none;M.duration()?c=u=0:o.timeline=0}else if(g){ps(Sn(M.vars.defaults,{ease:"none"})),M._ease=tr(g.ease||i.ease||"none");var k=0,N,O,j;if(Gt(g))g.forEach(function(W){return M.to(E,W,">")}),M.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||$d(P,g[P],w,g.easeEach);for(P in w)for(N=w[P].sort(function(W,J){return W.t-J.t}),k=0,R=0;R<N.length;R++)O=N[R],j={ease:O.e,duration:(O.t-(R?N[R-1].t:0))/100*c},j[P]=O.v,M.to(E,j,k),k+=j.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return p===!0&&!ql&&(vi=ei(o),yt.killTweensOf(E),vi=0),zn(T,ei(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===St(T._time)&&tn(h)&&Rd(ei(o))&&T.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-u)||0)),m&&Th(ei(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-pt&&!u?l:i<pt?0:i,f,p,g,_,m,d,T,E,M;if(!c)Pd(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=St(h%_),h===l?(g=this._repeat,f=c):(m=St(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,f=c-f),m=Hr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(E&&this._yEase&&zh(E,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(St(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(bh(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(M||this._ease)(f/c),this._from&&(this.ratio=T=1-T),!o&&h&&!s&&!m&&(_n(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(T,p.d),p=p._next;E&&E.render(i<0?i:E._dur*E._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Vo(this,i,s,a),_n(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&_n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Vo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&wi(this,1),!s&&!(u&&!o)&&(h||o||d)&&(_n(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ws||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ic(this,c),u=this._ease(c/this._dur),Zd(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Va(this,0),this.parent||yh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?hs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ft),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,vi&&vi.vars.overwrite!==!0)._first||hs(this),this.parent&&a!==this.timeline.totalDuration()&&Gr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Rn(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&Ad(o,l))return s==="all"&&(this._pt=0),hs(this);for(h=this._op=this._op||[],s!=="all"&&(Ut(s)&&(_={},nn(s,function(T){return _[T]=1}),s=_),s=jd(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&za(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&hs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ms(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ms(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return yt.killTweensOf(i,s,a)},e}(Rs);Sn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(r){Ct[r]=function(){var e=new jt,t=Go.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var rc=function(e,t,n){return e[t]=n},Xh=function(e,t,n){return e[t](n)},Jd=function(e,t,n,i){return e[t](i.fp,n)},Qd=function(e,t,n){return e.setAttribute(t,n)},sc=function(e,t){return bt(e[t])?Xh:Kl(e[t])&&e.setAttribute?Qd:rc},Yh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ep=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ac=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},tp=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},np=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?za(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ip=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Kh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},rn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Yh,this.d=l||this,this.set=c||rc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ip,this.m=n,this.mt=s,this.tween=i},r}();nn(Ql+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Jl[r]=1});Mn.TweenMax=Mn.TweenLite=Ct;Mn.TimelineLite=Mn.TimelineMax=jt;yt=new jt({sortChildren:!1,defaults:kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=Oh;var nr=[],ga={},rp=[],kc=0,sp=0,to=function(e){return(ga[e]||rp).map(function(t){return t()})},qo=function(){var e=Date.now(),t=[];e-kc>2&&(to("matchMediaInit"),nr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=On.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),to("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kc=e,to("matchMedia"))},Zh=function(){function r(t,n){this.selector=n&&Wo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sp++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){bt(n)&&(s=i,i=n,n=bt);var a=this,o=function(){var c=xt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wo(s)),xt=a,h=i.apply(a,arguments),bt(h)&&a._r.push(h),xt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===bt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=xt;xt=null,n(this),xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ct&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof jt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ct)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=nr.length;a--;)nr[a].id===this.id&&nr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),ap=function(){function r(t){this.contexts=[],this.scope=t,xt&&xt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Wn(n)||(n={matches:n});var a=new Zh(0,s||this.scope),o=a.conditions={},l,c,u;xt&&!a.selector&&(a.selector=xt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=On.matchMedia(n[c]),l&&(nr.indexOf(a)<0&&nr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(qo):l.addEventListener("change",qo)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Da={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Uh(i)})},timeline:function(e){return new jt(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ut(e)&&(e=Rn(e)[0]);var s=Qi(e||{}).get,a=n?Sh:Mh;return n==="native"&&(n=""),e&&(t?a((hn[t]&&hn[t].get||s)(e,t,n,i)):function(o,l,c){return a((hn[o]&&hn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Rn(e),e.length>1){var i=e.map(function(u){return an.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=hn[t],o=Qi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Cr._pt=0,h.init(e,n?u+n:u,Cr,0,[e]),h.render(1,h),Cr._pt&&ac(1,Cr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=an.to(e,Sn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=tr(e.ease,kr.ease)),Nc(kr,e||{})},config:function(e){return Nc(vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!hn[o]&&!Mn[o]&&Ts(t+" effect requires "+o+" plugin.")}),$a[t]=function(o,l,c){return n(Rn(o),Sn(l||{},s),c)},a&&(jt.prototype[t]=function(o,l,c){return this.add($a[t](o,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=tr(t)},parseEase:function(e,t){return arguments.length?tr(e,t):et},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jt(e),i,s;for(n.smoothChildTiming=tn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ct&&i.vars.onComplete===i._targets[0]))&&zn(n,i,i._start-i._delay),i=s;return zn(yt,n,0),n},context:function(e,t){return e?new Zh(e,t):xt},matchMedia:function(e){return new ap(e)},matchMediaRefresh:function(){return nr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qo()},addEventListener:function(e,t){var n=ga[e]||(ga[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ga[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Bd,wrapYoyo:zd,distribute:Rh,random:Ph,snap:Ch,normalize:Od,getUnit:Ht,clamp:Id,splitColor:Nh,toArray:Rn,selector:Wo,mapRange:Lh,pipe:Nd,unitize:Fd,interpolate:kd,shuffle:wh},install:mh,effects:$a,ticker:pn,updateRoot:jt.updateRoot,plugins:hn,globalTimeline:yt,core:{PropTween:rn,globals:_h,Tween:Ct,Timeline:jt,Animation:Rs,getCache:Qi,_removeLinkedListItem:za,reverting:function(){return Ft},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return ql=e}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Da[r]=Ct[r]});pn.add(jt.updateRoot);Cr=Da.to({},{duration:0});var op=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},lp=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=op(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},no=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ut(s)&&(l={},nn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}lp(o,s)}}}},an=Da.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ft?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},no("roundProps",Xo),no("modifiers"),no("snap",Ch))||Da;Ct.version=jt.version=an.version="3.14.2";ph=1;Zl()&&Wr();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vc,xi,Ur,oc,ji,Hc,lc,cp=function(){return typeof window<"u"},ci={},Xi=180/Math.PI,Nr=Math.PI/180,cr=Math.atan2,Gc=1e8,cc=/([A-Z])/g,up=/(left|right|width|margin|padding|x)/i,hp=/[\s,\(]\S/,kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ko=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fp=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pp=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mp=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$h=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},_p=function(e,t,n){return e.style[t]=n},gp=function(e,t,n){return e.style.setProperty(t,n)},vp=function(e,t,n){return e._gsap[t]=n},xp=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Mp=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Sp=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Et="transform",sn=Et+"Origin",yp=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ci&&s){if(this.tfm=this.tfm||{},e!=="transform")e=kn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ti(i,o)}):this.tfm[e]=a.x?a[e]:ti(i,e),e===sn&&(this.tfm.zOrigin=a.zOrigin);else return kn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Et)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=Et}(s||t)&&this.props.push(e,t,s[e])},Jh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ep=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=lc(),(!s||!s.isStart)&&!n[Et]&&(Jh(n),i.zOrigin&&n[sn]&&(n[sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qh=function(e,t){var n={target:e,props:[],revert:Ep,save:yp};return e._gsap||an.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ef,Zo=function(e,t){var n=xi.createElementNS?xi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xi.createElement(e);return n&&n.style?n:xi.createElement(e)},gn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Xr(t)||t,1)||""},Wc="O,Moz,ms,Ms,Webkit".split(","),Xr=function(e,t,n){var i=t||ji,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Wc[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Wc[a]:"")+e},jo=function(){cp()&&window.document&&(Vc=window,xi=Vc.document,Ur=xi.documentElement,ji=Zo("div")||{style:{}},Zo("div"),Et=Xr(Et),sn=Et+"Origin",ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ef=!!Xr("perspective"),lc=an.core.reverting,oc=1)},Xc=function(e){var t=e.ownerSVGElement,n=Zo("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ur.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ur.removeChild(n),s},Yc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},tf=function(e){var t,n;try{t=e.getBBox()}catch{t=Xc(e),n=1}return t&&(t.width||t.height)||n||(t=Xc(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yc(e,["x","cx","x1"])||0,y:+Yc(e,["y","cy","y1"])||0,width:0,height:0}:t},nf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tf(e))},Ri=function(e,t){if(t){var n=e.style,i;t in ci&&t!==sn&&(t=Et),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cc,"-$1").toLowerCase())):n.removeAttribute(t)}},Mi=function(e,t,n,i,s,a){var o=new rn(e._pt,t,n,0,1,a?$h:jh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},qc={deg:1,rad:1,turn:1},Tp={grid:1,flex:1},Ci=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ji.style,l=up.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,m,d;if(i===a||!s||qc[i]||qc[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),d=e.getCTM&&nf(e),(p||a==="%")&&(ci[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[u],wt(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===xi||!_.appendChild)&&(_=xi.body),m=_._gsap,m&&p&&m.width&&l&&m.time===pn.time&&!m.uncache)return wt(s/m.width*h);if(p&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=h+i,g=e[u],T?e.style[t]=T:Ri(e,t)}else(p||a==="%")&&!Tp[gn(_,"display")]&&(o.position=gn(e,"position")),_===e&&(o.position="static"),_.appendChild(ji),g=ji[u],_.removeChild(ji),o.position="absolute";return l&&p&&(m=Qi(_),m.time=pn.time,m.width=_[u]),wt(f?g*s/h:g&&s?h/g*s:0)},ti=function(e,t,n,i){var s;return oc||jo(),t in kn&&t!=="transform"&&(t=kn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ci[t]&&t!=="transform"?(s=Ps(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ia(gn(e,sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=La[t]&&La[t](e,t,n)||gn(e,t)||vh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ci(e,t,s,n)+n:s},bp=function(e,t,n,i){if(!n||n==="none"){var s=Xr(t,e,1),a=s&&gn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=gn(e,"borderTopColor"))}var o=new rn(this._pt,e.style,t,0,1,qh),l=0,c=0,u,h,f,p,g,_,m,d,T,E,M,R;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=gn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=gn(e,t)||i,_?e.style[t]=_:Ri(e,t)),u=[n,i],Oh(u),n=u[0],i=u[1],f=n.match(Rr)||[],R=i.match(Rr)||[],R.length){for(;h=Rr.exec(i);)m=h[0],T=i.substring(l,h.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,M=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ir(p,m)+M),d=parseFloat(m),E=m.substr((d+"").length),l=Rr.lastIndex-E.length,E||(E=E||vn.units[t]||M,l===i.length&&(i+=E,o.e+=E)),M!==E&&(p=Ci(e,t,_,E)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?$h:jh;return dh.test(i)&&(o.e=0),this._pt=o,o},Kc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ap=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Kc[n]||n,t[1]=Kc[i]||i,t.join(" ")},wp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ci[o]&&(l=1,o=o==="transformOrigin"?sn:Et),Ri(n,o);l&&(Ri(n,Et),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ps(n,1),a.uncache=1,Jh(i)))}},La={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new rn(e._pt,t,n,0,0,wp);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Cs=[1,0,0,1,0,0],rf={},sf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zc=function(e){var t=gn(e,Et);return sf(t)?Cs:t.substr(7).match(fh).map(wt)},uc=function(e,t){var n=e._gsap||Qi(e),i=e.style,s=Zc(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Cs:s):(s===Cs&&!e.offsetParent&&e!==Ur&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ur.appendChild(e)),s=Zc(e),l?i.display=l:Ri(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ur.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$o=function(e,t,n,i,s,a){var o=e._gsap,l=s||uc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],T=l[5],E=t.split(" "),M=parseFloat(E[0])||0,R=parseFloat(E[1])||0,w,C,P,v;n?l!==Cs&&(C=p*m-g*_)&&(P=M*(m/C)+R*(-_/C)+(_*T-m*d)/C,v=M*(-g/C)+R*(p/C)-(p*T-g*d)/C,M=P,R=v):(w=tf(e),M=w.x+(~E[0].indexOf("%")?M/100*w.width:M),R=w.y+(~(E[1]||E[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&o.smooth?(d=M-c,T=R-u,o.xOffset=h+(d*p+T*_)-d,o.yOffset=f+(d*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=R,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[sn]="0px 0px",a&&(Mi(a,o,"xOrigin",c,M),Mi(a,o,"yOrigin",u,R),Mi(a,o,"xOffset",h,o.xOffset),Mi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+R)},Ps=function(e,t){var n=e._gsap||new Vh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=gn(e,sn)||"0",u,h,f,p,g,_,m,d,T,E,M,R,w,C,P,v,S,D,k,N,O,j,W,J,V,le,de,Ae,Oe,nt,K,ie;return u=h=f=_=m=d=T=E=M=0,p=g=1,n.svg=!!(e.getCTM&&nf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Et]!=="none"?l[Et]:"")),i.scale=i.rotate=i.translate="none"),C=uc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",J=""):J=!t&&e.getAttribute("data-svg-origin"),$o(e,J||c,!!J||n.originIsAbsolute,n.smooth!==!1,C)),R=n.xOrigin||0,w=n.yOrigin||0,C!==Cs&&(D=C[0],k=C[1],N=C[2],O=C[3],u=j=C[4],h=W=C[5],C.length===6?(p=Math.sqrt(D*D+k*k),g=Math.sqrt(O*O+N*N),_=D||k?cr(k,D)*Xi:0,T=N||O?cr(N,O)*Xi+_:0,T&&(g*=Math.abs(Math.cos(T*Nr))),n.svg&&(u-=R-(R*D+w*N),h-=w-(R*k+w*O))):(ie=C[6],nt=C[7],de=C[8],Ae=C[9],Oe=C[10],K=C[11],u=C[12],h=C[13],f=C[14],P=cr(ie,Oe),m=P*Xi,P&&(v=Math.cos(-P),S=Math.sin(-P),J=j*v+de*S,V=W*v+Ae*S,le=ie*v+Oe*S,de=j*-S+de*v,Ae=W*-S+Ae*v,Oe=ie*-S+Oe*v,K=nt*-S+K*v,j=J,W=V,ie=le),P=cr(-N,Oe),d=P*Xi,P&&(v=Math.cos(-P),S=Math.sin(-P),J=D*v-de*S,V=k*v-Ae*S,le=N*v-Oe*S,K=O*S+K*v,D=J,k=V,N=le),P=cr(k,D),_=P*Xi,P&&(v=Math.cos(P),S=Math.sin(P),J=D*v+k*S,V=j*v+W*S,k=k*v-D*S,W=W*v-j*S,D=J,j=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=wt(Math.sqrt(D*D+k*k+N*N)),g=wt(Math.sqrt(W*W+ie*ie)),P=cr(j,W),T=Math.abs(P)>2e-4?P*Xi:0,M=K?1/(K<0?-K:K):0),n.svg&&(J=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!sf(gn(e,Et)),J&&e.setAttribute("transform",J))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(p*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=wt(p),n.scaleY=wt(g),n.rotation=wt(_)+o,n.rotationX=wt(m)+o,n.rotationY=wt(d)+o,n.skewX=T+o,n.skewY=E+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[sn]=Ia(c)),n.xOffset=n.yOffset=0,n.force3D=vn.force3D,n.renderTransform=n.svg?Cp:ef?af:Rp,n.uncache=0,n},Ia=function(e){return(e=e.split(" "))[0]+" "+e[1]},io=function(e,t,n){var i=Ht(t);return wt(parseFloat(t)+parseFloat(Ci(e,"x",n+"px",i)))+i},Rp=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,af(e,t)},Fi="0deg",ns="0px",Oi=") ",af=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,T=n.target,E=n.zOrigin,M="",R=d==="auto"&&e&&e!==1||d===!0;if(E&&(h!==Fi||u!==Fi)){var w=parseFloat(u)*Nr,C=Math.sin(w),P=Math.cos(w),v;w=parseFloat(h)*Nr,v=Math.cos(w),a=io(T,a,C*v*-E),o=io(T,o,-Math.sin(w)*-E),l=io(T,l,P*v*-E+E)}m!==ns&&(M+="perspective("+m+Oi),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(R||a!==ns||o!==ns||l!==ns)&&(M+=l!==ns||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Oi),c!==Fi&&(M+="rotate("+c+Oi),u!==Fi&&(M+="rotateY("+u+Oi),h!==Fi&&(M+="rotateX("+h+Oi),(f!==Fi||p!==Fi)&&(M+="skew("+f+", "+p+Oi),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Oi),T.style[Et]=M||"translate(0, 0)"},Cp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,T=n.forceCSS,E=parseFloat(a),M=parseFloat(o),R,w,C,P,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Nr,c*=Nr,R=Math.cos(l)*h,w=Math.sin(l)*h,C=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Nr,v=Math.tan(c-u),v=Math.sqrt(1+v*v),C*=v,P*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),R*=v,w*=v)),R=wt(R),w=wt(w),C=wt(C),P=wt(P)):(R=h,P=f,w=C=0),(E&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(E=Ci(p,"x",a,"px"),M=Ci(p,"y",o,"px")),(g||_||m||d)&&(E=wt(E+g-(g*R+_*C)+m),M=wt(M+_-(g*w+_*P)+d)),(i||s)&&(v=p.getBBox(),E=wt(E+i/100*v.width),M=wt(M+s/100*v.height)),v="matrix("+R+","+w+","+C+","+P+","+E+","+M+")",p.setAttribute("transform",v),T&&(p.style[Et]=v)},Pp=function(e,t,n,i,s){var a=360,o=Ut(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Xi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Gc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Gc)%a-~~(c/a)*a)),e._pt=f=new rn(e._pt,t,n,i,c,fp),f.e=u,f.u="deg",e._props.push(n),f},jc=function(e,t){for(var n in t)e[n]=t[n];return e},Dp=function(e,t,n){var i=jc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Et]=t,o=Ps(n,1),Ri(n,Et),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Et],a[Et]=t,o=Ps(n,1),a[Et]=c);for(l in ci)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Ht(c),g=Ht(u),h=p!==g?Ci(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new rn(e._pt,o,l,h,f-h,Ko),e._pt.u=g||0,e._props.push(l));jc(o,i)};nn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});La[e>1?"border"+r:r]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return ti(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var of={name:"css",register:jo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,p,g,_,m,d,T,E,M,R,w,C,P,v;oc||jo(),this.styles=this.styles||Qh(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(hn[_]&&Hh(_,t,n,i,e,s)))){if(p=typeof u,g=La[_],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=As(u)),g)g(this,e,_,u,n)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ti.lastIndex=0,Ti.test(c)||(m=Ht(c),d=Ht(u),d?m!==d&&(c=Ci(e,_,c,d)+d):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Ut(c)&&~c.indexOf("random(")&&(c=As(c)),Ht(c+"")||c==="auto"||(c+=vn.units[_]||Ht(ti(e,_))||""),(c+"").charAt(1)==="="&&(c=ti(e,_))):c=ti(e,_),f=parseFloat(c),T=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),_ in kn&&(_==="autoAlpha"&&(f===1&&ti(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),Mi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=kn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in ci,E){if(this.styles.save(_),v=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=gn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=gn(e,"perspective"),S?e.style.perspective=S:Ri(e,"perspective")}h=parseFloat(u)}if(M||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ps(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,M=this._pt=new rn(this._pt,o,Et,0,1,R.renderTransform,R,0,-1),M.dep=1),_==="scale")this._pt=new rn(this._pt,R,"scaleY",R.scaleY,(T?Ir(R.scaleY,T+h):h)-R.scaleY||0,Ko),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(sn,0,o[sn]),u=Ap(u),R.svg?$o(e,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==R.zOrigin&&Mi(this,R,"zOrigin",R.zOrigin,d),Mi(this,o,_,Ia(c),Ia(u)));continue}else if(_==="svgOrigin"){$o(e,u,1,w,0,this);continue}else if(_ in rf){Pp(this,R,_,f,T?Ir(f,T+u):u);continue}else if(_==="smoothOrigin"){Mi(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){Dp(this,u,e);continue}}else _ in o||(_=Xr(_)||_);if(E||(h||h===0)&&(f||f===0)&&!hp.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),d=Ht(u)||(_ in vn.units?vn.units[_]:m),m!==d&&(f=Ci(e,_,c,d)),this._pt=new rn(this._pt,E?R:o,_,f,(T?Ir(f,T+h):h)-f,!E&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?mp:Ko),this._pt.u=d||0,E&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=pp):m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=dp);else if(_ in o)bp.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,i,s);else if(_!=="parseTransform"){$l(_,u);continue}E||(_ in o?P.push(_,0,o[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),a.push(_)}}C&&Kh(this)},render:function(e,t){if(t.tween._time||!lc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ti,aliases:kn,getSetter:function(e,t,n){var i=kn[t];return i&&i.indexOf(",")<0&&(t=i),t in ci&&t!==sn&&(e._gsap.x||ti(e,"x"))?n&&Hc===n?t==="scale"?xp:vp:(Hc=n||{})&&(t==="scale"?Mp:Sp):e.style&&!Kl(e.style[t])?_p:~t.indexOf("-")?gp:sc(e,t)},core:{_removeProperty:Ri,_getMatrix:uc}};an.utils.checkPrefix=Xr;an.core.getStyleSaver=Qh;(function(r,e,t,n){var i=nn(r+","+e+","+t,function(s){ci[s]=1});nn(e,function(s){vn.units[s]="deg",rf[s]=1}),kn[i[13]]=r+","+e,nn(n,function(s){var a=s.split(":");kn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){vn.units[r]="px"});an.registerPlugin(of);var lf=an.registerPlugin(of)||an;lf.core.Tween;function Lp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ip(r,e,t){return e&&Lp(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nt,va,mn,Si,yi,Fr,cf,Yi,gs,uf,si,Ln,hf,ff=function(){return Nt||typeof window<"u"&&(Nt=window.gsap)&&Nt.registerPlugin&&Nt},df=1,Pr=[],An=[],vs=[],xs=Date.now,Jo=function(e,t){return t},Up=function(){var e=gs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,An),i.push.apply(i,vs),An=n,vs=i,Jo=function(a,o){return t[a](o)}},Np=function(e,t){return~vs.indexOf(e)&&vs[vs.indexOf(e)+1][t]},Ms=function(e){return!!~uf.indexOf(e)},qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Yt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ws="scrollLeft",Xs="scrollTop",Qo=function(){return si&&si.isPressed||An.cache++},Ua=function(e,t){var n=function i(s){if(s||s===0){df&&(mn.history.scrollRestoration="manual");var a=si&&si.isPressed;s=i.v=Math.round(s)||(si&&si.iOS?1:0),e(s),i.cacheID=An.cache,a&&Jo("ss",s)}else(t||An.cache!==i.cacheID||Jo("ref"))&&(i.cacheID=An.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Na={s:Ws,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ua(function(r){return arguments.length?mn.scrollTo(r,Ha.sc()):mn.pageXOffset||Si[Ws]||yi[Ws]||Fr[Ws]||0})},Ha={s:Xs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Na,sc:Ua(function(r){return arguments.length?mn.scrollTo(Na.sc(),r):mn.pageYOffset||Si[Xs]||yi[Xs]||Fr[Xs]||0})},Fp=function(e,t){return(t&&t._ctx&&t._ctx.selector||Nt.utils.toArray)(e)[0]||(typeof e=="string"&&Nt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Op=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},$c=function(e,t){var n=t.s,i=t.sc;Ms(e)&&(e=Si.scrollingElement||yi);var s=An.indexOf(e),a=i===Ha.sc?1:2;!~s&&(s=An.push(e)-1),An[s+a]||qt(e,"scroll",Qo);var o=An[s+a],l=o||(An[s+a]=Ua(Np(e,n),!0)||(Ms(e)?i:Ua(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Nt.getProperty(e,"scrollBehavior")==="smooth"),l},Jc=function(e,t,n){var i=e,s=e,a=xs(),o=a,l=t,c=Math.max(500,l*3),u=function(g,_){var m=xs();_||m-a>l?(s=i,i=g,o=a,a=m):i+=g},h=function(){s=i=0,o=a=0},f=function(g){var _=o,m=s,d=xs();return(g||g===0)&&g!==i&&u(g),a===o||d-o>c?0:(i+m)/(d-_)*1e3};return{update:u,reset:h,getVelocity:f}},is=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Qc=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},pf=function(){gs=Nt.core.globals().ScrollTrigger,gs&&gs.core&&Up()},mf=function(e){return Nt=e||ff(),!va&&Nt&&typeof document<"u"&&document.body&&(mn=window,Si=document,yi=Si.documentElement,Fr=Si.body,uf=[mn,Si,yi,Fr],Nt.utils.clamp,hf=Nt.core.context||function(){},Yi="onpointerenter"in Fr?"pointer":"mouse",cf=Xn.isTouch=mn.matchMedia&&mn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in mn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ln=Xn.eventTypes=("ontouchstart"in yi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in yi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return df=0},500),pf(),va=1),va};Na.op=Ha;An.cache=0;var Xn=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){va||mf(Nt)||console.warn("Please gsap.registerPlugin(Observer)"),gs||pf();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,d=n.onDragEnd,T=n.onDrag,E=n.onPress,M=n.onRelease,R=n.onRight,w=n.onLeft,C=n.onUp,P=n.onDown,v=n.onChangeX,S=n.onChangeY,D=n.onChange,k=n.onToggleX,N=n.onToggleY,O=n.onHover,j=n.onHoverEnd,W=n.onMove,J=n.ignoreCheck,V=n.isNormalizer,le=n.onGestureStart,de=n.onGestureEnd,Ae=n.onWheel,Oe=n.onEnable,nt=n.onDisable,K=n.onClick,ie=n.scrollSpeed,we=n.capture,me=n.allowClicks,Pe=n.lockAxis,Ye=n.onLockAxis;this.target=o=Fp(o)||yi,this.vars=n,p&&(p=Nt.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,ie=ie||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(mn.getComputedStyle(Fr).lineHeight)||22);var Ue,$e,it,ue,b,q,se,I=this,oe=0,Le=0,_e=n.passive||!u&&n.passive!==!1,ve=$c(o,Na),Ge=$c(o,Ha),A=ve(),x=Ge(),B=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ln[0]==="pointerdown",Z=Ms(o),Y=o.ownerDocument||Si,X=[0,0,0],xe=[0,0,0],ae=0,Se=function(){return ae=xs()},ye=function(Ce,qe){return(I.event=Ce)&&p&&Op(Ce.target,p)||qe&&B&&Ce.pointerType!=="touch"||J&&J(Ce,qe)},Q=function(){I._vx.reset(),I._vy.reset(),$e.pause(),h&&h(I)},pe=function(){var Ce=I.deltaX=Qc(X),qe=I.deltaY=Qc(xe),At=Math.abs(Ce)>=i,Ot=Math.abs(qe)>=i;D&&(At||Ot)&&D(I,Ce,qe,X,xe),At&&(R&&I.deltaX>0&&R(I),w&&I.deltaX<0&&w(I),v&&v(I),k&&I.deltaX<0!=oe<0&&k(I),oe=I.deltaX,X[0]=X[1]=X[2]=0),Ot&&(P&&I.deltaY>0&&P(I),C&&I.deltaY<0&&C(I),S&&S(I),N&&I.deltaY<0!=Le<0&&N(I),Le=I.deltaY,xe[0]=xe[1]=xe[2]=0),(ue||it)&&(W&&W(I),it&&(m&&it===1&&m(I),T&&T(I),it=0),ue=!1),q&&!(q=!1)&&Ye&&Ye(I),b&&(Ae(I),b=!1),Ue=0},De=function(Ce,qe,At){X[At]+=Ce,xe[At]+=qe,I._vx.update(Ce),I._vy.update(qe),c?Ue||(Ue=requestAnimationFrame(pe)):pe()},Ie=function(Ce,qe){Pe&&!se&&(I.axis=se=Math.abs(Ce)>Math.abs(qe)?"x":"y",q=!0),se!=="y"&&(X[2]+=Ce,I._vx.update(Ce,!0)),se!=="x"&&(xe[2]+=qe,I._vy.update(qe,!0)),c?Ue||(Ue=requestAnimationFrame(pe)):pe()},ce=function(Ce){if(!ye(Ce,1)){Ce=is(Ce,u);var qe=Ce.clientX,At=Ce.clientY,Ot=qe-I.x,Bt=At-I.y,Ui=I.isDragging;I.x=qe,I.y=At,(Ui||(Ot||Bt)&&(Math.abs(I.startX-qe)>=s||Math.abs(I.startY-At)>=s))&&(it||(it=Ui?2:1),Ui||(I.isDragging=!0),Ie(Ot,Bt))}},Be=I.onPress=function(Me){ye(Me,1)||Me&&Me.button||(I.axis=se=null,$e.pause(),I.isPressed=!0,Me=is(Me),oe=Le=0,I.startX=I.x=Me.clientX,I.startY=I.y=Me.clientY,I._vx.reset(),I._vy.reset(),qt(V?o:Y,Ln[1],ce,_e,!0),I.deltaX=I.deltaY=0,E&&E(I))},L=I.onRelease=function(Me){if(!ye(Me,1)){Yt(V?o:Y,Ln[1],ce,!0);var Ce=!isNaN(I.y-I.startY),qe=I.isDragging,At=qe&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Ot=is(Me);!At&&Ce&&(I._vx.reset(),I._vy.reset(),u&&me&&Nt.delayedCall(.08,function(){if(xs()-ae>300&&!Me.defaultPrevented){if(Me.target.click)Me.target.click();else if(Y.createEvent){var Bt=Y.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,mn,1,Ot.screenX,Ot.screenY,Ot.clientX,Ot.clientY,!1,!1,!1,!1,0,null),Me.target.dispatchEvent(Bt)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,h&&qe&&!V&&$e.restart(!0),it&&pe(),d&&qe&&d(I),M&&M(I,At)}},he=function(Ce){return Ce.touches&&Ce.touches.length>1&&(I.isGesturing=!0)&&le(Ce,I.isDragging)},te=function(){return(I.isGesturing=!1)||de(I)},Ee=function(Ce){if(!ye(Ce)){var qe=ve(),At=Ge();De((qe-A)*ie,(At-x)*ie,1),A=qe,x=At,h&&$e.restart(!0)}},ne=function(Ce){if(!ye(Ce)){Ce=is(Ce,u),Ae&&(b=!0);var qe=(Ce.deltaMode===1?l:Ce.deltaMode===2?mn.innerHeight:1)*g;De(Ce.deltaX*qe,Ce.deltaY*qe,0),h&&!V&&$e.restart(!0)}},$=function(Ce){if(!ye(Ce)){var qe=Ce.clientX,At=Ce.clientY,Ot=qe-I.x,Bt=At-I.y;I.x=qe,I.y=At,ue=!0,h&&$e.restart(!0),(Ot||Bt)&&Ie(Ot,Bt)}},be=function(Ce){I.event=Ce,O(I)},ke=function(Ce){I.event=Ce,j(I)},lt=function(Ce){return ye(Ce)||is(Ce,u)&&K(I)};$e=I._dc=Nt.delayedCall(f||.25,Q).pause(),I.deltaX=I.deltaY=0,I._vx=Jc(0,50),I._vy=Jc(0,50),I.scrollX=ve,I.scrollY=Ge,I.isDragging=I.isGesturing=I.isPressed=!1,hf(this),I.enable=function(Me){return I.isEnabled||(qt(Z?Y:o,"scroll",Qo),a.indexOf("scroll")>=0&&qt(Z?Y:o,"scroll",Ee,_e,we),a.indexOf("wheel")>=0&&qt(o,"wheel",ne,_e,we),(a.indexOf("touch")>=0&&cf||a.indexOf("pointer")>=0)&&(qt(o,Ln[0],Be,_e,we),qt(Y,Ln[2],L),qt(Y,Ln[3],L),me&&qt(o,"click",Se,!0,!0),K&&qt(o,"click",lt),le&&qt(Y,"gesturestart",he),de&&qt(Y,"gestureend",te),O&&qt(o,Yi+"enter",be),j&&qt(o,Yi+"leave",ke),W&&qt(o,Yi+"move",$)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=ue=it=!1,I._vx.reset(),I._vy.reset(),A=ve(),x=Ge(),Me&&Me.type&&Be(Me),Oe&&Oe(I)),I},I.disable=function(){I.isEnabled&&(Pr.filter(function(Me){return Me!==I&&Ms(Me.target)}).length||Yt(Z?Y:o,"scroll",Qo),I.isPressed&&(I._vx.reset(),I._vy.reset(),Yt(V?o:Y,Ln[1],ce,!0)),Yt(Z?Y:o,"scroll",Ee,we),Yt(o,"wheel",ne,we),Yt(o,Ln[0],Be,we),Yt(Y,Ln[2],L),Yt(Y,Ln[3],L),Yt(o,"click",Se,!0),Yt(o,"click",lt),Yt(Y,"gesturestart",he),Yt(Y,"gestureend",te),Yt(o,Yi+"enter",be),Yt(o,Yi+"leave",ke),Yt(o,Yi+"move",$),I.isEnabled=I.isPressed=I.isDragging=!1,nt&&nt(I))},I.kill=I.revert=function(){I.disable();var Me=Pr.indexOf(I);Me>=0&&Pr.splice(Me,1),si===I&&(si=0)},Pr.push(I),V&&Ms(o)&&(si=I),I.enable(_)},Ip(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Xn.version="3.14.2";Xn.create=function(r){return new Xn(r)};Xn.register=mf;Xn.getAll=function(){return Pr.slice()};Xn.getById=function(r){return Pr.filter(function(e){return e.vars.id===r})[0]};ff()&&Nt.registerPlugin(Xn);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="178",Bp=0,eu=1,zp=2,_f=1,kp=2,Qn=3,Pi=0,$t=1,ni=2,bi=0,Or=1,tu=2,nu=3,iu=4,Vp=5,Ki=100,Hp=101,Gp=102,Wp=103,Xp=104,Yp=200,qp=201,Kp=202,Zp=203,el=204,tl=205,jp=206,$p=207,Jp=208,Qp=209,em=210,tm=211,nm=212,im=213,rm=214,nl=0,il=1,rl=2,Yr=3,sl=4,al=5,ol=6,ll=7,gf=0,sm=1,am=2,Ai=0,om=1,lm=2,cm=3,vf=4,um=5,hm=6,fm=7,xf=300,qr=301,Kr=302,cl=303,ul=304,Ga=306,hl=1e3,$i=1001,fl=1002,xn=1003,dm=1004,Ys=1005,Vn=1006,ro=1007,Ji=1008,Yn=1009,Mf=1010,Sf=1011,Ds=1012,fc=1013,ir=1014,Hn=1015,Os=1016,dc=1017,pc=1018,Ls=1020,yf=35902,Ef=1021,Tf=1022,Nn=1023,Is=1026,Us=1027,mc=1028,_c=1029,bf=1030,gc=1031,vc=1033,xa=33776,Ma=33777,Sa=33778,ya=33779,dl=35840,pl=35841,ml=35842,_l=35843,gl=36196,vl=37492,xl=37496,Ml=37808,Sl=37809,yl=37810,El=37811,Tl=37812,bl=37813,Al=37814,wl=37815,Rl=37816,Cl=37817,Pl=37818,Dl=37819,Ll=37820,Il=37821,Ea=36492,Ul=36494,Nl=36495,Af=36283,Fl=36284,Ol=36285,Bl=36286,pm=3200,mm=3201,wf=0,_m=1,gi="",fn="srgb",Zr="srgb-linear",Fa="linear",ut="srgb",ur=7680,ru=519,gm=512,vm=513,xm=514,Rf=515,Mm=516,Sm=517,ym=518,Em=519,su=35044,au="300 es",ai=2e3,Oa=2001;class $r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ou=1234567;const Ss=Math.PI/180,Ns=180/Math.PI;function Jr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[r&255]+kt[r>>8&255]+kt[r>>16&255]+kt[r>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ze(r,e,t){return Math.max(e,Math.min(t,r))}function xc(r,e){return(r%e+e)%e}function Tm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function bm(r,e,t){return r!==e?(t-r)/(e-r):0}function ys(r,e,t){return(1-t)*r+t*e}function Am(r,e,t,n){return ys(r,e,1-Math.exp(-t*n))}function wm(r,e=1){return e-Math.abs(xc(r,e*2)-e)}function Rm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Cm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Pm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Dm(r,e){return r+Math.random()*(e-r)}function Lm(r){return r*(.5-Math.random())}function Im(r){r!==void 0&&(ou=r);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Um(r){return r*Ss}function Nm(r){return r*Ns}function Fm(r){return(r&r-1)===0&&r!==0}function Om(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zm(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hr={DEG2RAD:Ss,RAD2DEG:Ns,generateUUID:Jr,clamp:Ze,euclideanModulo:xc,mapLinear:Tm,inverseLerp:bm,lerp:ys,damp:Am,pingpong:wm,smoothstep:Rm,smootherstep:Cm,randInt:Pm,randFloat:Dm,randFloatSpread:Lm,seededRandom:Im,degToRad:Um,radToDeg:Nm,isPowerOfTwo:Fm,ceilPowerOfTwo:Om,floorPowerOfTwo:Bm,setQuaternionFromProperEuler:zm,normalize:Kt,denormalize:wr};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const R=Math.sqrt(E),w=Math.atan2(R,d*T);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const M=o*T;if(l=l*m+f*M,c=c*m+p*M,u=u*m+g*M,h=h*m+_*M,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new F,lu=new Bs;class Xe{constructor(e,t,n,i,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],T=i[1],E=i[4],M=i[7],R=i[2],w=i[5],C=i[8];return s[0]=a*_+o*T+l*R,s[3]=a*m+o*E+l*w,s[6]=a*d+o*M+l*C,s[1]=c*_+u*T+h*R,s[4]=c*m+u*E+h*w,s[7]=c*d+u*M+h*C,s[2]=f*_+p*T+g*R,s[5]=f*m+p*E+g*w,s[8]=f*d+p*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Xe;function Cf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function km(){const r=Ba("canvas");return r.style.display="block",r}const cu={};function Br(r){r in cu||(cu[r]=!0,console.warn(r))}function Vm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Hm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const uu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(i.r=zr(i.r),i.g=zr(i.g),i.b=zr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Fa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zr]:{primaries:e,whitePoint:n,transfer:Fa,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),r}const st=Wm();function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fr;class Xm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Ba("canvas")),fr.width=e.width,fr.height=e.height;const i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ym=0;class Mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(oo(i[a].image)):s.push(oo(i[a]))}else s=oo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;const lo=new F;class Jt extends $r{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=$i,i=$i,s=Vn,a=Ji,o=Nn,l=Yn,c=Jt.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Jr(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hl:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hl:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=xf;Jt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(p+1)/2,R=(d+1)/2,w=(u+f)/4,C=(h+_)/4,P=(g+m)/4;return E>M&&E>R?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=C/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=C/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Km extends $r{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Jt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Mc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends Km{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pf extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zm extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Ks.subVectors(this.max,rs),dr.subVectors(e.a,rs),pr.subVectors(e.b,rs),mr.subVectors(e.c,rs),ui.subVectors(pr,dr),hi.subVectors(mr,pr),Bi.subVectors(dr,mr);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Bi.z,Bi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Bi.z,0,-Bi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Bi.y,Bi.x,0];return!co(t,dr,pr,mr,Ks)||(t=[1,0,0,0,1,0,0,0,1],!co(t,dr,pr,mr,Ks))?!1:(Zs.crossVectors(ui,hi),t=[Zs.x,Zs.y,Zs.z],co(t,dr,pr,mr,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new F,new F,new F,new F,new F,new F,new F,new F],Cn=new F,qs=new or,dr=new F,pr=new F,mr=new F,ui=new F,hi=new F,Bi=new F,rs=new F,Ks=new F,Zs=new F,zi=new F;function co(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){zi.fromArray(r,s);const o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jm=new or,ss=new F,uo=new F;class zs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(uo)),this.expandByPoint(ss.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new F,ho=new F,js=new F,fi=new F,fo=new F,$s=new F,po=new F;class Df{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ho.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(ho);const s=e.distanceTo(t)*.5,a=-this.direction.dot(js),o=fi.dot(this.direction),l=-fi.dot(js),c=fi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ho).addScaledVector(js,f),p}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,i,s){fo.subVectors(t,e),$s.subVectors(n,e),po.crossVectors(fo,$s);let a=this.direction.dot(po),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot($s.crossVectors(fi,$s));if(l<0)return null;const c=o*this.direction.dot(fo.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,i,s,a,o,l,c,u,h,f,p,g,_,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,p,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($m,e,Jm)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),di.crossVectors(n,cn),di.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),di.crossVectors(n,cn)),di.normalize(),Js.crossVectors(cn,di),i[0]=di.x,i[4]=Js.x,i[8]=cn.x,i[1]=di.y,i[5]=Js.y,i[9]=cn.y,i[2]=di.z,i[6]=Js.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],T=n[3],E=n[7],M=n[11],R=n[15],w=i[0],C=i[4],P=i[8],v=i[12],S=i[1],D=i[5],k=i[9],N=i[13],O=i[2],j=i[6],W=i[10],J=i[14],V=i[3],le=i[7],de=i[11],Ae=i[15];return s[0]=a*w+o*S+l*O+c*V,s[4]=a*C+o*D+l*j+c*le,s[8]=a*P+o*k+l*W+c*de,s[12]=a*v+o*N+l*J+c*Ae,s[1]=u*w+h*S+f*O+p*V,s[5]=u*C+h*D+f*j+p*le,s[9]=u*P+h*k+f*W+p*de,s[13]=u*v+h*N+f*J+p*Ae,s[2]=g*w+_*S+m*O+d*V,s[6]=g*C+_*D+m*j+d*le,s[10]=g*P+_*k+m*W+d*de,s[14]=g*v+_*N+m*J+d*Ae,s[3]=T*w+E*S+M*O+R*V,s[7]=T*C+E*D+M*j+R*le,s[11]=T*P+E*k+M*W+R*de,s[15]=T*v+E*N+M*J+R*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*p-n*l*p)+_*(+t*l*p-t*c*f+s*a*f-i*a*p+i*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],T=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,E=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,M=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,R=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=t*T+n*E+i*M+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=T*C,e[1]=(_*f*s-h*m*s-_*i*p+n*m*p+h*i*d-n*f*d)*C,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*d+n*l*d)*C,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*p-n*l*p)*C,e[4]=E*C,e[5]=(u*m*s-g*f*s+g*i*p-t*m*p-u*i*d+t*f*d)*C,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*d-t*l*d)*C,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*p+t*l*p)*C,e[8]=M*C,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*d-t*h*d)*C,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*d+t*o*d)*C,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*C,e[12]=R*C,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*C,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*C,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,T=l*c,E=l*u,M=l*h,R=n.x,w=n.y,C=n.z;return i[0]=(1-(_+d))*R,i[1]=(p+M)*R,i[2]=(g-E)*R,i[3]=0,i[4]=(p-M)*w,i[5]=(1-(f+d))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(g+E)*C,i[9]=(m-T)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=_r.set(i[0],i[1],i[2]).length();const a=_r.set(i[4],i[5],i[6]).length(),o=_r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);const c=1/s,u=1/a,h=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ai){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(o===ai)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Oa)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ai){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,p=(n+i)*u;let g,_;if(o===ai)g=(a+s)*h,_=-2*h;else if(o===Oa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _r=new F,Pn=new mt,$m=new F(0,0,0),Jm=new F(1,1,1),di=new F,Js=new F,cn=new F,fu=new mt,du=new Bs;class qn{constructor(e=0,t=0,n=0,i=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qm=0;const pu=new F,gr=new Bs,jn=new mt,Qs=new F,as=new F,e_=new F,t_=new Bs,mu=new F(1,0,0),_u=new F(0,1,0),gu=new F(0,0,1),vu={type:"added"},n_={type:"removed"},vr={type:"childadded",child:null},mo={type:"childremoved",child:null};class Wt extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new F,t=new qn,n=new Bs,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(as,Qs,this.up):jn.lookAt(Qs,as,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),gr.setFromRotationMatrix(jn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(n_),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,e_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wt.DEFAULT_UP=new F(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new F,$n=new F,_o=new F,Jn=new F,xr=new F,Mr=new F,xu=new F,go=new F,vo=new F,xo=new F,Mo=new ht,So=new ht,yo=new ht;class Un{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Dn.subVectors(i,t),$n.subVectors(n,t),_o.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot($n),l=Dn.dot(_o),c=$n.dot($n),u=$n.dot(_o),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Mo.setScalar(0),So.setScalar(0),yo.setScalar(0),Mo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Mo,s.x),a.addScaledVector(So,s.y),a.addScaledVector(yo,s.z),a}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),$n.subVectors(e,t),Dn.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Dn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;xr.subVectors(i,n),Mr.subVectors(s,n),go.subVectors(e,n);const l=xr.dot(go),c=Mr.dot(go);if(l<=0&&c<=0)return t.copy(n);vo.subVectors(e,i);const u=xr.dot(vo),h=Mr.dot(vo);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xr,a);xo.subVectors(e,s);const p=xr.dot(xo),g=Mr.dot(xo);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Mr,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return xu.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(xu,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(xr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Eo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=xc(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Eo(a,s,e+1/3),this.g=Eo(a,s,e),this.b=Eo(a,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=Lf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return st.workingToColorSpace(Vt.copy(this),e),Math.round(Ze(Vt.r*255,0,255))*65536+Math.round(Ze(Vt.g*255,0,255))*256+Math.round(Ze(Vt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=fn){st.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(ea);const n=ys(pi.h,ea.h,t),i=ys(pi.s,ea.s,t),s=ys(pi.l,ea.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new je;je.NAMES=Lf;let i_=0;class ks extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=Or,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yc extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new F,ta=new Qe;let r_=0;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),e}}class If extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uf extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gn extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let s_=0;const Tn=new mt,To=new Wt,Sr=new F,un=new or,os=new or,Lt=new F;class Ii extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cf(e)?Uf:If)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];os.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(un.min,os.min),un.expandByPoint(Lt),Lt.addVectors(un.max,os.max),un.expandByPoint(Lt)):(un.expandByPoint(os.min),un.expandByPoint(os.max))}un.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),Lt.add(Sr)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new F,l[P]=new F;const c=new F,u=new F,h=new F,f=new Qe,p=new Qe,g=new Qe,_=new F,m=new F;function d(P,v,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[P].add(_),o[v].add(_),o[S].add(_),l[P].add(m),l[v].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,v=T.length;P<v;++P){const S=T[P],D=S.start,k=S.count;for(let N=D,O=D+k;N<O;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new F,M=new F,R=new F,w=new F;function C(P){R.fromBufferAttribute(i,P),w.copy(R);const v=o[P];E.copy(v),E.sub(R.multiplyScalar(R.dot(v))).normalize(),M.crossVectors(w,v);const D=M.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,D)}for(let P=0,v=T.length;P<v;++P){const S=T[P],D=S.start,k=S.count;for(let N=D,O=D+k;N<O;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Fn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ii,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mu=new mt,ki=new Df,na=new zs,Su=new F,ia=new F,ra=new F,sa=new F,bo=new F,aa=new F,yu=new F,oa=new F;class It extends Wt{constructor(e=new Ii,t=new yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(bo.fromBufferAttribute(h,e),a?aa.addScaledVector(bo,u):aa.addScaledVector(bo.sub(t),u))}t.add(aa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(na.containsPoint(ki.origin)===!1&&(ki.intersectSphere(na,Su)===null||ki.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(Mu.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,R=E;M<R;M+=3){const w=o.getX(M),C=o.getX(M+1),P=o.getX(M+2);i=la(this,d,e,n,c,u,h,w,C,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);i=la(this,a,e,n,c,u,h,T,E,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,R=E;M<R;M+=3){const w=M,C=M+1,P=M+2;i=la(this,d,e,n,c,u,h,w,C,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,E=m+1,M=m+2;i=la(this,a,e,n,c,u,h,T,E,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function a_(r,e,t,n,i,s,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Pi,o),l===null)return null;oa.copy(o),oa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(oa);return c<t.near||c>t.far?null:{distance:c,point:oa.clone(),object:r}}function la(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ia),r.getVertexPosition(l,ra),r.getVertexPosition(c,sa);const u=a_(r,e,t,n,ia,ra,sa,yu);if(u){const h=new F;Un.getBarycoord(yu,ia,ra,sa,h),i&&(u.uv=Un.getInterpolatedAttribute(i,o,l,c,h,new Qe)),s&&(u.uv1=Un.getInterpolatedAttribute(s,o,l,c,h,new Qe)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Un.getNormal(ia,ra,sa,f.normal),u.face=f,u.barycoord=h}return u}class Qr extends Ii{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(h,2));function g(_,m,d,T,E,M,R,w,C,P,v){const S=M/C,D=R/P,k=M/2,N=R/2,O=w/2,j=C+1,W=P+1;let J=0,V=0;const le=new F;for(let de=0;de<W;de++){const Ae=de*D-N;for(let Oe=0;Oe<j;Oe++){const nt=Oe*S-k;le[_]=nt*T,le[m]=Ae*E,le[d]=O,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[d]=w>0?1:-1,u.push(le.x,le.y,le.z),h.push(Oe/C),h.push(1-de/P),J+=1}}for(let de=0;de<P;de++)for(let Ae=0;Ae<C;Ae++){const Oe=f+Ae+j*de,nt=f+Ae+j*(de+1),K=f+(Ae+1)+j*(de+1),ie=f+(Ae+1)+j*de;l.push(Oe,nt,ie),l.push(nt,K,ie),V+=6}o.addGroup(p,V,v),p+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(r){const e={};for(let t=0;t<r.length;t++){const n=jr(r[t]);for(const i in n)e[i]=n[i]}return e}function o_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Nf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const l_={clone:jr,merge:Zt};var c_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=o_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ff extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new F,Eu=new Qe,Tu=new Qe;class dn extends Ff{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,Tu),t.subVectors(Tu,Eu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yr=-90,Er=1;class h_ extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(yr,Er,e,t);i.layers=this.layers,this.add(i);const s=new dn(yr,Er,e,t);s.layers=this.layers,this.add(s);const a=new dn(yr,Er,e,t);a.layers=this.layers,this.add(a);const o=new dn(yr,Er,e,t);o.layers=this.layers,this.add(o);const l=new dn(yr,Er,e,t);l.layers=this.layers,this.add(l);const c=new dn(yr,Er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Of extends Jt{constructor(e=[],t=qr,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f_ extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Of(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qr(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:bi});s.uniforms.tEquirect.value=t;const a=new It(i,s),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Vn),new h_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class ca extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ca;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Bf extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class p_ extends Jt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=xn,u=xn,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu extends Fn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Tr=new mt,Au=new mt,ua=[],wu=new or,m_=new mt,ls=new It,cs=new zs;class zf extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),wu.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(wu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),cs.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),e.ray.intersectsSphere(cs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Tr),Au.multiplyMatrices(n,Tr),ls.matrixWorld=Au,ls.raycast(e,ua);for(let a=0,o=ua.length;a<o;a++){const l=ua[a];l.instanceId=s,l.object=this,t.push(l)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new p_(new Float32Array(i*this.count),i,this.count,mc,Hn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wo=new F,__=new F,g_=new Xe;class _i{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wo.subVectors(n,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||g_.getNormalMatrix(e),i=this.coplanarPoint(wo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new zs,v_=new Qe(.5,.5),ha=new F;class Ec{constructor(e=new _i,t=new _i,n=new _i,i=new _i,s=new _i,a=new _i){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],T=i[13],E=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,m-p,M-d).normalize(),n[1].setComponents(l+s,f+c,m+p,M+d).normalize(),n[2].setComponents(l+a,f+u,m+g,M+T).normalize(),n[3].setComponents(l-a,f-u,m-g,M-T).normalize(),n[4].setComponents(l-o,f-h,m-_,M-E).normalize(),t===ai)n[5].setComponents(l+o,f+h,m+_,M+E).normalize();else if(t===Oa)n[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=v_.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ha.x=i.normal.x>0?e.max.x:e.min.x,ha.y=i.normal.y>0?e.max.y:e.min.y,ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kf extends Jt{constructor(e,t,n=ir,i,s,a,o=xn,l=xn,c,u=Is,h=1){if(u!==Is&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wa extends Ii{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*f-a;for(let E=0;E<c;E++){const M=E*h-s;g.push(M,-T,0),_.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const E=T+c*d,M=T+c*(d+1),R=T+1+c*(d+1),w=T+1+c*d;p.push(E,M,w),p.push(M,R,w)}this.setIndex(p),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(_,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends Ii{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new F,f=new F,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const T=[],E=d/n;let M=0;d===0&&a===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const w=R/t;h.x=-e*Math.cos(i+w*s)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(i+w*s)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+M,1-E),T.push(c++)}u.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){const E=u[d][T+1],M=u[d][T],R=u[d+1][T],w=u[d+1][T+1];(d!==0||a>0)&&p.push(E,M,w),(d!==n-1||l<Math.PI)&&p.push(M,R,w)}this.setIndex(p),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(_,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zl extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class x_ extends zl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class M_ extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S_ extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vf extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ro=new mt,Ru=new F,Cu=new F;class y_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pu=new mt,us=new F,Co=new F;class E_ extends y_{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),Co.copy(n.position),Co.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Co),n.updateMatrixWorld(),i.makeTranslation(-us.x,-us.y,-us.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu)}}class Hf extends Vf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new E_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class T_ extends Ff{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class b_ extends Vf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class A_ extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class w_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Du=new mt;class R_{constructor(e,t,n=0,i=1/0){this.ray=new Df(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(e,t=!0,n=[]){return kl(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)kl(e[i],this,n,t);return n.sort(Lu),n}}function Lu(r,e){return r.distance-e.distance}function kl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)kl(s[a],e,t,!0)}}function Iu(r,e,t,n){const i=C_(n);switch(t){case Ef:return r*e;case mc:return r*e/i.components*i.byteLength;case _c:return r*e/i.components*i.byteLength;case bf:return r*e*2/i.components*i.byteLength;case gc:return r*e*2/i.components*i.byteLength;case Tf:return r*e*3/i.components*i.byteLength;case Nn:return r*e*4/i.components*i.byteLength;case vc:return r*e*4/i.components*i.byteLength;case xa:case Ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sa:case ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pl:case _l:return Math.max(r,16)*Math.max(e,8)/4;case dl:case ml:return Math.max(r,8)*Math.max(e,8)/2;case gl:case vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Al:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Ul:case Nl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Af:case Fl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ol:case Bl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C_(r){switch(r){case Yn:case Mf:return{byteLength:1,components:1};case Ds:case Sf:case Os:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case ir:case fc:case Hn:return{byteLength:4,components:1};case yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function P_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var D_=`#ifdef USE_ALPHAHASH
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jg=`#ifndef FLAT_SHADED
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
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
}`,Z0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,ev=`#define STANDARD
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
}`,tv=`#define STANDARD
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
}`,We={alphahash_fragment:D_,alphahash_pars_fragment:L_,alphamap_fragment:I_,alphamap_pars_fragment:U_,alphatest_fragment:N_,alphatest_pars_fragment:F_,aomap_fragment:O_,aomap_pars_fragment:B_,batching_pars_vertex:z_,batching_vertex:k_,begin_vertex:V_,beginnormal_vertex:H_,bsdfs:G_,iridescence_fragment:W_,bumpmap_pars_fragment:X_,clipping_planes_fragment:Y_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:K_,clipping_planes_vertex:Z_,color_fragment:j_,color_pars_fragment:$_,color_pars_vertex:J_,color_vertex:Q_,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:rg,emissivemap_fragment:sg,emissivemap_pars_fragment:ag,colorspace_fragment:og,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:ug,envmap_pars_fragment:hg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:Eg,envmap_vertex:dg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:_g,fog_pars_fragment:gg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:xg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Sg,lights_pars_begin:yg,lights_toon_fragment:Tg,lights_toon_pars_fragment:bg,lights_phong_fragment:Ag,lights_phong_pars_fragment:wg,lights_physical_fragment:Rg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Pg,lights_fragment_maps:Dg,lights_fragment_end:Lg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:zg,map_particle_pars_fragment:kg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Gg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:Yg,morphtarget_vertex:qg,normal_fragment_begin:Kg,normal_fragment_maps:Zg,normal_pars_fragment:jg,normal_pars_vertex:$g,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:r0,packing:s0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:_0,skinning_pars_vertex:g0,skinning_vertex:v0,skinnormal_vertex:x0,specularmap_fragment:M0,specularmap_pars_fragment:S0,tonemapping_fragment:y0,tonemapping_pars_fragment:E0,transmission_fragment:T0,transmission_pars_fragment:b0,uv_pars_fragment:A0,uv_pars_vertex:w0,uv_vertex:R0,worldpos_vertex:C0,background_vert:P0,background_frag:D0,backgroundCube_vert:L0,backgroundCube_frag:I0,cube_vert:U0,cube_frag:N0,depth_vert:F0,depth_frag:O0,distanceRGBA_vert:B0,distanceRGBA_frag:z0,equirect_vert:k0,equirect_frag:V0,linedashed_vert:H0,linedashed_frag:G0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:Y0,meshlambert_frag:q0,meshmatcap_vert:K0,meshmatcap_frag:Z0,meshnormal_vert:j0,meshnormal_frag:$0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:ev,meshphysical_frag:tv,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:rv,points_frag:sv,shadow_vert:av,shadow_frag:ov,sprite_vert:lv,sprite_frag:cv},fe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Bn={basic:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new je(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new je(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Zt([fe.points,fe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Zt([fe.common,fe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Zt([fe.sprite,fe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Zt([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Zt([fe.lights,fe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Bn.physical={uniforms:Zt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const fa={r:0,b:0,g:0},Hi=new qn,uv=new mt;function hv(r,e,t,n,i,s,a){const o=new je(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function _(E){let M=!1;const R=g(E);R===null?d(o,l):R&&R.isColor&&(d(R,1),M=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,M){const R=g(M);R&&(R.isCubeTexture||R.mapping===Ga)?(u===void 0&&(u=new It(new Qr(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:jr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Hi.copy(M.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(Hi)),u.material.toneMapped=st.getTransfer(R.colorSpace)!==ut,(h!==R||f!==R.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,p=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new It(new Wa(2,2),new Di({name:"BackgroundMaterial",uniforms:jr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(R.colorSpace)!==ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,p=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,M){E.getRGB(fa,Nf(r)),n.buffers.color.setClear(fa.r,fa.g,fa.b,M,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:_,addToRenderList:m,dispose:T}}function fv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(S,D,k,N,O){let j=!1;const W=h(N,k,D);s!==W&&(s=W,c(s.object)),j=p(S,N,k,O),j&&g(S,N,k,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(S,D,k,N),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,D,k){const N=k.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let j=O[D.id];j===void 0&&(j={},O[D.id]=j);let W=j[N];return W===void 0&&(W=f(l()),j[N]=W),W}function f(S){const D=[],k=[],N=[];for(let O=0;O<t;O++)D[O]=0,k[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,D,k,N){const O=s.attributes,j=D.attributes;let W=0;const J=k.getAttributes();for(const V in J)if(J[V].location>=0){const de=O[V];let Ae=j[V];if(Ae===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor)),de===void 0||de.attribute!==Ae||Ae&&de.data!==Ae.data)return!0;W++}return s.attributesNum!==W||s.index!==N}function g(S,D,k,N){const O={},j=D.attributes;let W=0;const J=k.getAttributes();for(const V in J)if(J[V].location>=0){let de=j[V];de===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const Ae={};Ae.attribute=de,de&&de.data&&(Ae.data=de.data),O[V]=Ae,W++}s.attributes=O,s.attributesNum=W,s.index=N}function _(){const S=s.newAttributes;for(let D=0,k=S.length;D<k;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const k=s.newAttributes,N=s.enabledAttributes,O=s.attributeDivisors;k[S]=1,N[S]===0&&(r.enableVertexAttribArray(S),N[S]=1),O[S]!==D&&(r.vertexAttribDivisor(S,D),O[S]=D)}function T(){const S=s.newAttributes,D=s.enabledAttributes;for(let k=0,N=D.length;k<N;k++)D[k]!==S[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function E(S,D,k,N,O,j,W){W===!0?r.vertexAttribIPointer(S,D,k,O,j):r.vertexAttribPointer(S,D,k,N,O,j)}function M(S,D,k,N){_();const O=N.attributes,j=k.getAttributes(),W=D.defaultAttributeValues;for(const J in j){const V=j[J];if(V.location>=0){let le=O[J];if(le===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const de=le.normalized,Ae=le.itemSize,Oe=e.get(le);if(Oe===void 0)continue;const nt=Oe.buffer,K=Oe.type,ie=Oe.bytesPerElement,we=K===r.INT||K===r.UNSIGNED_INT||le.gpuType===fc;if(le.isInterleavedBufferAttribute){const me=le.data,Pe=me.stride,Ye=le.offset;if(me.isInstancedInterleavedBuffer){for(let Ue=0;Ue<V.locationSize;Ue++)d(V.location+Ue,me.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)m(V.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let Ue=0;Ue<V.locationSize;Ue++)E(V.location+Ue,Ae/V.locationSize,K,de,Pe*ie,(Ye+Ae/V.locationSize*Ue)*ie,we)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)d(V.location+me,le.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<V.locationSize;me++)m(V.location+me);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let me=0;me<V.locationSize;me++)E(V.location+me,Ae/V.locationSize,K,de,Ae*ie,Ae/V.locationSize*me*ie,we)}}else if(W!==void 0){const de=W[J];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(V.location,de);break;case 3:r.vertexAttrib3fv(V.location,de);break;case 4:r.vertexAttrib4fv(V.location,de);break;default:r.vertexAttrib1fv(V.location,de)}}}}T()}function R(){P();for(const S in n){const D=n[S];for(const k in D){const N=D[k];for(const O in N)u(N[O].object),delete N[O];delete D[k]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const k in D){const N=D[k];for(const O in N)u(N[O].object),delete N[O];delete D[k]}delete n[S.id]}function C(S){for(const D in n){const k=n[D];if(k[S.id]===void 0)continue;const N=k[S.id];for(const O in N)u(N[O].object),delete N[O];delete k[S.id]}}function P(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function dv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Nn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Yn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hn&&!P)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:R,maxSamples:w}}function mv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new _i,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,E=T*4;let M=d.clippingState||null;l.value=M,M=u(g,f,E,p);for(let R=0;R!==E;++R)M[R]=t[R];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,M=p;E!==_;++E,M+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function _v(r){let e=new WeakMap;function t(a,o){return o===cl?a.mapping=qr:o===ul&&(a.mapping=Kr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cl||o===ul)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new f_(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Dr=4,Uu=[.125,.215,.35,.446,.526,.582],Zi=20,Po=new T_,Nu=new je;let Do=null,Lo=0,Io=0,Uo=!1;const qi=(1+Math.sqrt(5))/2,br=1/qi,Fu=[new F(-qi,br,0),new F(qi,br,0),new F(-br,0,qi),new F(br,0,qi),new F(0,qi,-br),new F(0,qi,br),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],gv=new F;class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=gv}=s;Do=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Lo,Io),this._renderer.xr.enabled=Uo,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Os,format:Nn,colorSpace:Zr,depthBuffer:!1},i=Ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(s)),this._blurMaterial=xv(s,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,i,s){const l=new dn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Nu),h.toneMapping=Ai,h.autoClear=!1;const g=new yc({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new It(new Qr,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(Nu),m=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const M=this._cubeSize;da(i,E*M,T>2?M:0,M,M),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qr||e.mapping===Kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;da(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fu[(i-s-1)%Fu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const d=[];let T=0;for(let C=0;C<Zi;++C){const P=C/_,v=Math.exp(-P*P/2);d.push(v),C===0?T+=v:C<m&&(T+=2*v)}for(let C=0;C<d.length;C++)d[C]=d[C]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const M=this._sizeLods[i],R=3*M*(i>E-Dr?i-E+Dr:0),w=4*(this._cubeSize-M);da(t,R,w,3*M,2*M),l.setRenderTarget(t),l.render(h,Po)}}function vv(r){const e=[],t=[],n=[];let i=r;const s=r-Dr+1+Uu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Dr?l=Uu[a-r+Dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),E=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,P=w>2?0:-1,v=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];T.set(v,_*g*w),E.set(f,m*g*w);const S=[w,w,w,w,w,w];M.set(S,d*g*w)}const R=new Ii;R.setAttribute("position",new Fn(T,_)),R.setAttribute("uv",new Fn(E,m)),R.setAttribute("faceIndex",new Fn(M,d)),e.push(R),i>Dr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ou(r,e,t){const n=new rr(r,e,t);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function xv(r,e,t){const n=new Float32Array(Zi),i=new F(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Bu(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function zu(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function Mv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cl||l===ul,u=l===qr||l===Kr;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Vl(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Vl(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Sv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yv(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let E=0,M=T.length;E<M;E+=3){const R=T[E+0],w=T[E+1],C=T[E+2];f.push(R,w,w,C,C,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,M=T.length/3-1;E<M;E+=3){const R=E+0,w=E+1,C=E+2;f.push(R,w,w,C,C,R)}}else return;const m=new(Cf(f)?Uf:If)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ev(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){r.drawElements(n,p,s,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];t.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bv(r,e,t){const n=new WeakMap,i=new ht;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let M=o.attributes.position.count*E,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*R*4*h),C=new Pf(w,M,R,h);C.type=Hn,C.needsUpdate=!0;const P=E*4;for(let S=0;S<h;S++){const D=m[S],k=d[S],N=T[S],O=M*R*4*S;for(let j=0;j<D.count;j++){const W=j*P;p===!0&&(i.fromBufferAttribute(D,j),w[O+W+0]=i.x,w[O+W+1]=i.y,w[O+W+2]=i.z,w[O+W+3]=0),g===!0&&(i.fromBufferAttribute(k,j),w[O+W+4]=i.x,w[O+W+5]=i.y,w[O+W+6]=i.z,w[O+W+7]=0),_===!0&&(i.fromBufferAttribute(N,j),w[O+W+8]=i.x,w[O+W+9]=i.y,w[O+W+10]=i.z,w[O+W+11]=N.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new Qe(M,R)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Av(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Wf=new Jt,ku=new kf(1,1),Xf=new Pf,Yf=new Zm,qf=new Of,Vu=[],Hu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function es(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vu[i];if(s===void 0&&(s=new Float32Array(i),Vu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xa(r,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function Cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function Pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function Dv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Xu.set(n),r.uniformMatrix2fv(this.addr,!1,Xu),Dt(t,n)}}function Lv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Wu.set(n),r.uniformMatrix3fv(this.addr,!1,Wu),Dt(t,n)}}function Iv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Gu.set(n),r.uniformMatrix4fv(this.addr,!1,Gu),Dt(t,n)}}function Uv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function Fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function Ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function Bv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function Vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function Hv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ku.compareFunction=Rf,s=ku):s=Wf,t.setTexture2D(e||s,i)}function Gv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yf,i)}function Wv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qf,i)}function Xv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xf,i)}function Yv(r){switch(r){case 5126:return wv;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Dv;case 35675:return Lv;case 35676:return Iv;case 5124:case 35670:return Uv;case 35667:case 35671:return Nv;case 35668:case 35672:return Fv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return zv;case 36295:return kv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function qv(r,e){r.uniform1fv(this.addr,e)}function Kv(r,e){const t=es(e,this.size,2);r.uniform2fv(this.addr,t)}function Zv(r,e){const t=es(e,this.size,3);r.uniform3fv(this.addr,t)}function jv(r,e){const t=es(e,this.size,4);r.uniform4fv(this.addr,t)}function $v(r,e){const t=es(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Jv(r,e){const t=es(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qv(r,e){const t=es(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ex(r,e){r.uniform1iv(this.addr,e)}function tx(r,e){r.uniform2iv(this.addr,e)}function nx(r,e){r.uniform3iv(this.addr,e)}function ix(r,e){r.uniform4iv(this.addr,e)}function rx(r,e){r.uniform1uiv(this.addr,e)}function sx(r,e){r.uniform2uiv(this.addr,e)}function ax(r,e){r.uniform3uiv(this.addr,e)}function ox(r,e){r.uniform4uiv(this.addr,e)}function lx(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wf,s[a])}function cx(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yf,s[a])}function ux(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||qf,s[a])}function hx(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xf,s[a])}function fx(r){switch(r){case 5126:return qv;case 35664:return Kv;case 35665:return Zv;case 35666:return jv;case 35674:return $v;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return rx;case 36294:return sx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return hx}}class dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yv(t.type)}}class px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fx(t.type)}}class mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const No=/(\w+)(\])?(\[|\.)?/g;function Yu(r,e){r.seq.push(e),r.map[e.id]=e}function _x(r,e,t){const n=r.name,i=n.length;for(No.lastIndex=0;;){const s=No.exec(n),a=No.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Yu(t,c===void 0?new dx(o,r,e):new px(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new mx(o),Yu(t,h)),t=h}}}class Ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);_x(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function qu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const gx=37297;let vx=0;function xx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ku=new Xe;function Mx(r){st._getMatrix(Ku,st.workingColorSpace,r);const e=`mat3( ${Ku.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case Fa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Zu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+xx(r.getShaderSource(e),a)}else return i}function Sx(r,e){const t=Mx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yx(r,e){let t;switch(e){case om:t="Linear";break;case lm:t="Reinhard";break;case cm:t="Cineon";break;case vf:t="ACESFilmic";break;case hm:t="AgX";break;case fm:t="Neutral";break;case um:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new F;function Ex(){st.getLuminanceCoefficients(pa);const r=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function bx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ax(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ds(r){return r!==""}function ju(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(r){return r.replace(wx,Cx)}const Rx=new Map;function Cx(r,e){let t=We[e];if(t===void 0){const n=Rx.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hl(t)}const Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(r){return r.replace(Px,Dx)}function Dx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qu(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ix(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qr:case Kr:e="ENVMAP_TYPE_CUBE";break;case Ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ux(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function Nx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gf:e="ENVMAP_BLENDING_MULTIPLY";break;case sm:e="ENVMAP_BLENDING_MIX";break;case am:e="ENVMAP_BLENDING_ADD";break}return e}function Fx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ox(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Lx(t),c=Ix(t),u=Ux(t),h=Nx(t),f=Fx(t),p=Tx(t),g=bx(s),_=i.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),d.length>0&&(d+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),d=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?We.tonemapping_pars_fragment:"",t.toneMapping!==Ai?yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Sx("linearToOutputTexel",t.outputColorSpace),Ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),a=Hl(a),a=ju(a,t),a=$u(a,t),o=Hl(o),o=ju(o,t),o=$u(o,t),a=Ju(a),o=Ju(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=T+m+a,M=T+d+o,R=qu(i,i.VERTEX_SHADER,E),w=qu(i,i.FRAGMENT_SHADER,M);i.attachShader(_,R),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(R).trim(),O=i.getShaderInfoLog(w).trim();let j=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,w);else{const J=Zu(i,R,"vertex"),V=Zu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+J+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||O==="")&&(W=!1);W&&(D.diagnostics={runnable:j,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:d}})}i.deleteShader(R),i.deleteShader(w),P=new Ta(i,_),v=Ax(i,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,gx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let Bx=0;class zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kx(e),t.set(e,n)),n}}class kx{constructor(e){this.id=Bx++,this.code=e,this.usedTimes=0}}function Vx(r,e,t,n,i,s,a){const o=new Sc,l=new zx,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,D,k,N){const O=k.fog,j=N.geometry,W=v.isMeshStandardMaterial?k.environment:null,J=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),V=J&&J.mapping===Ga?J.image.height:null,le=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ae=de!==void 0?de.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let nt,K,ie,we;if(le){const Me=Bn[le];nt=Me.vertexShader,K=Me.fragmentShader}else nt=v.vertexShader,K=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),we=l.getFragmentShaderID(v);const me=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),Ye=N.isInstancedMesh===!0,Ue=N.isBatchedMesh===!0,$e=!!v.map,it=!!v.matcap,ue=!!J,b=!!v.aoMap,q=!!v.lightMap,se=!!v.bumpMap,I=!!v.normalMap,oe=!!v.displacementMap,Le=!!v.emissiveMap,_e=!!v.metalnessMap,ve=!!v.roughnessMap,Ge=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,B=v.iridescence>0,Z=v.sheen>0,Y=v.transmission>0,X=Ge&&!!v.anisotropyMap,xe=A&&!!v.clearcoatMap,ae=A&&!!v.clearcoatNormalMap,Se=A&&!!v.clearcoatRoughnessMap,ye=B&&!!v.iridescenceMap,Q=B&&!!v.iridescenceThicknessMap,pe=Z&&!!v.sheenColorMap,De=Z&&!!v.sheenRoughnessMap,Ie=!!v.specularMap,ce=!!v.specularColorMap,Be=!!v.specularIntensityMap,L=Y&&!!v.transmissionMap,he=Y&&!!v.thicknessMap,te=!!v.gradientMap,Ee=!!v.alphaMap,ne=v.alphaTest>0,$=!!v.alphaHash,be=!!v.extensions;let ke=Ai;v.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ke=r.toneMapping);const lt={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:nt,fragmentShader:K,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&N._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&N.instanceColor!==null,instancingMorph:Ye&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Zr,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:it,envMap:ue,envMapMode:ue&&J.mapping,envMapCubeUVHeight:V,aoMap:b,lightMap:q,bumpMap:se,normalMap:I,displacementMap:f&&oe,emissiveMap:Le,normalMapObjectSpace:I&&v.normalMapType===_m,normalMapTangentSpace:I&&v.normalMapType===wf,metalnessMap:_e,roughnessMap:ve,anisotropy:Ge,anisotropyMap:X,clearcoat:A,clearcoatMap:xe,clearcoatNormalMap:ae,clearcoatRoughnessMap:Se,dispersion:x,iridescence:B,iridescenceMap:ye,iridescenceThicknessMap:Q,sheen:Z,sheenColorMap:pe,sheenRoughnessMap:De,specularMap:Ie,specularColorMap:ce,specularIntensityMap:Be,transmission:Y,transmissionMap:L,thicknessMap:he,gradientMap:te,opaque:v.transparent===!1&&v.blending===Or&&v.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ne,alphaHash:$,combine:v.combine,mapUv:$e&&_(v.map.channel),aoMapUv:b&&_(v.aoMap.channel),lightMapUv:q&&_(v.lightMap.channel),bumpMapUv:se&&_(v.bumpMap.channel),normalMapUv:I&&_(v.normalMap.channel),displacementMapUv:oe&&_(v.displacementMap.channel),emissiveMapUv:Le&&_(v.emissiveMap.channel),metalnessMapUv:_e&&_(v.metalnessMap.channel),roughnessMapUv:ve&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:xe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(v.sheenRoughnessMap.channel),specularMapUv:Ie&&_(v.specularMap.channel),specularColorMapUv:ce&&_(v.specularColorMap.channel),specularIntensityMapUv:Be&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:he&&_(v.thicknessMap.channel),alphaMapUv:Ee&&_(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(I||Ge),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&($e||Ee),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pe,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:Le&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ni,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function d(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(T(S,v),E(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function T(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const S=g[v.type];let D;if(S){const k=Bn[S];D=l_.clone(k.uniforms)}else D=v.uniforms;return D}function R(v,S){let D;for(let k=0,N=u.length;k<N;k++){const O=u[k];if(O.cacheKey===S){D=O,++D.usedTimes;break}}return D===void 0&&(D=new Ox(r,S,v,s),u.push(D)),D}function w(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:P}}function Hx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Gx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function eh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function th(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,g,_,m){let d=r[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Gx),n.length>1&&n.sort(f||eh),i.length>1&&i.sort(f||eh)}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Wx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new th,r.set(n,[a])):i>=s.length?(a=new th,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Xx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new je};break;case"SpotLight":t={position:new F,direction:new F,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function Yx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let qx=0;function Kx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Zx(r){const e=new Xx,t=Yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new mt,a=new mt;function o(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,E=0,M=0,R=0,w=0,C=0;c.sort(Kx);for(let v=0,S=c.length;v<S;v++){const D=c[v],k=D.color,N=D.intensity,O=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*N,h+=k.g*N,f+=k.b*N;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],N);C++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,V=t.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(k).multiplyScalar(N),W.distance=O,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;const J=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,J.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=J.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=j,M++}_++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(k).multiplyScalar(N),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const J=D.shadow,V=t.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=D.shadow.matrix,E++}n.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(N),W.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[d]=W,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=C,n.version=qx++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const E=c[d];if(E.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(E.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function nh(r){const e=new Zx(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function jx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new nh(r),e.set(i,[o])):s>=a.length?(o=new nh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const $x=`void main() {
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
}`;function Qx(r,e,t){let n=new Ec;const i=new Qe,s=new Qe,a=new ht,o=new M_({depthPacking:mm}),l=new S_,c={},u=t.maxTextureSize,h={[Pi]:$t,[$t]:Pi,[ni]:ni},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:$x,fragmentShader:Jx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ii;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let d=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const v=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),k=r.state;k.setBlending(bi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=d!==Qn&&this.type===Qn,O=d===Qn&&this.type!==Qn;for(let j=0,W=w.length;j<W;j++){const J=w[j],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const le=V.getFrameExtents();if(i.multiply(le),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/le.x),i.x=s.x*le.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/le.y),i.y=s.y*le.y,V.mapSize.y=s.y)),V.map===null||N===!0||O===!0){const Ae=this.type!==Qn?{minFilter:xn,magFilter:xn}:{};V.map!==null&&V.map.dispose(),V.map=new rr(i.x,i.y,Ae),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const de=V.getViewportCount();for(let Ae=0;Ae<de;Ae++){const Oe=V.getViewport(Ae);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),k.viewport(a),V.updateMatrices(J,Ae),n=V.getFrustum(),M(C,P,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Qn&&T(V,P),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(v,S,D)};function T(w,C){const P=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,P,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,P,p,_,null)}function E(w,C,P,v){let S=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=S.uuid,N=C.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let j=O[N];j===void 0&&(j=S.clone(),O[N]=j,C.addEventListener("dispose",R)),S=j}if(S.visible=C.visible,S.wireframe=C.wireframe,v===Qn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=r.properties.get(S);k.light=P}return S}function M(w,C,P,v,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const N=e.update(w),O=w.material;if(Array.isArray(O)){const j=N.groups;for(let W=0,J=j.length;W<J;W++){const V=j[W],le=O[V.materialIndex];if(le&&le.visible){const de=E(w,le,v,S);w.onBeforeShadow(r,w,C,P,N,de,V),r.renderBufferDirect(P,null,N,de,w,V),w.onAfterShadow(r,w,C,P,N,de,V)}}}else if(O.visible){const j=E(w,O,v,S);w.onBeforeShadow(r,w,C,P,N,j,null),r.renderBufferDirect(P,null,N,j,w,null),w.onAfterShadow(r,w,C,P,N,j,null)}}const k=w.children;for(let N=0,O=k.length;N<O;N++)M(k[N],C,P,v,S)}function R(w){w.target.removeEventListener("dispose",R);for(const P in c){const v=c[P],S=w.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const eM={[nl]:il,[rl]:ol,[sl]:ll,[Yr]:al,[il]:nl,[ol]:rl,[ll]:sl,[al]:Yr};function tM(r,e){function t(){let L=!1;const he=new ht;let te=null;const Ee=new ht(0,0,0,0);return{setMask:function(ne){te!==ne&&!L&&(r.colorMask(ne,ne,ne,ne),te=ne)},setLocked:function(ne){L=ne},setClear:function(ne,$,be,ke,lt){lt===!0&&(ne*=ke,$*=ke,be*=ke),he.set(ne,$,be,ke),Ee.equals(he)===!1&&(r.clearColor(ne,$,be,ke),Ee.copy(he))},reset:function(){L=!1,te=null,Ee.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,te=null,Ee=null,ne=null;return{setReversed:function($){if(he!==$){const be=e.get("EXT_clip_control");$?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),he=$;const ke=ne;ne=null,this.setClear(ke)}},getReversed:function(){return he},setTest:function($){$?me(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function($){te!==$&&!L&&(r.depthMask($),te=$)},setFunc:function($){if(he&&($=eM[$]),Ee!==$){switch($){case nl:r.depthFunc(r.NEVER);break;case il:r.depthFunc(r.ALWAYS);break;case rl:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case sl:r.depthFunc(r.EQUAL);break;case al:r.depthFunc(r.GEQUAL);break;case ol:r.depthFunc(r.GREATER);break;case ll:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=$}},setLocked:function($){L=$},setClear:function($){ne!==$&&(he&&($=1-$),r.clearDepth($),ne=$)},reset:function(){L=!1,te=null,Ee=null,ne=null,he=!1}}}function i(){let L=!1,he=null,te=null,Ee=null,ne=null,$=null,be=null,ke=null,lt=null;return{setTest:function(Me){L||(Me?me(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Me){he!==Me&&!L&&(r.stencilMask(Me),he=Me)},setFunc:function(Me,Ce,qe){(te!==Me||Ee!==Ce||ne!==qe)&&(r.stencilFunc(Me,Ce,qe),te=Me,Ee=Ce,ne=qe)},setOp:function(Me,Ce,qe){($!==Me||be!==Ce||ke!==qe)&&(r.stencilOp(Me,Ce,qe),$=Me,be=Ce,ke=qe)},setLocked:function(Me){L=Me},setClear:function(Me){lt!==Me&&(r.clearStencil(Me),lt=Me)},reset:function(){L=!1,he=null,te=null,Ee=null,ne=null,$=null,be=null,ke=null,lt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,E=null,M=null,R=null,w=null,C=new je(0,0,0),P=0,v=!1,S=null,D=null,k=null,N=null,O=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=J>=2);let le=null,de={};const Ae=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),nt=new ht().fromArray(Ae),K=new ht().fromArray(Oe);function ie(L,he,te,Ee){const ne=new Uint8Array(4),$=r.createTexture();r.bindTexture(L,$),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let be=0;be<te;be++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(he+be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return $}const we={};we[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(r.DEPTH_TEST),a.setFunc(Yr),se(!1),I(eu),me(r.CULL_FACE),b(bi);function me(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Pe(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Ye(L,he){return h[L]!==he?(r.bindFramebuffer(L,he),h[L]=he,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function Ue(L,he){let te=p,Ee=!1;if(L){te=f.get(he),te===void 0&&(te=[],f.set(he,te));const ne=L.textures;if(te.length!==ne.length||te[0]!==r.COLOR_ATTACHMENT0){for(let $=0,be=ne.length;$<be;$++)te[$]=r.COLOR_ATTACHMENT0+$;te.length=ne.length,Ee=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(te)}function $e(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const it={[Ki]:r.FUNC_ADD,[Hp]:r.FUNC_SUBTRACT,[Gp]:r.FUNC_REVERSE_SUBTRACT};it[Wp]=r.MIN,it[Xp]=r.MAX;const ue={[Yp]:r.ZERO,[qp]:r.ONE,[Kp]:r.SRC_COLOR,[el]:r.SRC_ALPHA,[em]:r.SRC_ALPHA_SATURATE,[Jp]:r.DST_COLOR,[jp]:r.DST_ALPHA,[Zp]:r.ONE_MINUS_SRC_COLOR,[tl]:r.ONE_MINUS_SRC_ALPHA,[Qp]:r.ONE_MINUS_DST_COLOR,[$p]:r.ONE_MINUS_DST_ALPHA,[tm]:r.CONSTANT_COLOR,[nm]:r.ONE_MINUS_CONSTANT_COLOR,[im]:r.CONSTANT_ALPHA,[rm]:r.ONE_MINUS_CONSTANT_ALPHA};function b(L,he,te,Ee,ne,$,be,ke,lt,Me){if(L===bi){_===!0&&(Pe(r.BLEND),_=!1);return}if(_===!1&&(me(r.BLEND),_=!0),L!==Vp){if(L!==m||Me!==v){if((d!==Ki||M!==Ki)&&(r.blendEquation(r.FUNC_ADD),d=Ki,M=Ki),Me)switch(L){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tu:r.blendFunc(r.ONE,r.ONE);break;case nu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,E=null,R=null,w=null,C.set(0,0,0),P=0,m=L,v=Me}return}ne=ne||he,$=$||te,be=be||Ee,(he!==d||ne!==M)&&(r.blendEquationSeparate(it[he],it[ne]),d=he,M=ne),(te!==T||Ee!==E||$!==R||be!==w)&&(r.blendFuncSeparate(ue[te],ue[Ee],ue[$],ue[be]),T=te,E=Ee,R=$,w=be),(ke.equals(C)===!1||lt!==P)&&(r.blendColor(ke.r,ke.g,ke.b,lt),C.copy(ke),P=lt),m=L,v=!1}function q(L,he){L.side===ni?Pe(r.CULL_FACE):me(r.CULL_FACE);let te=L.side===$t;he&&(te=!te),se(te),L.blending===Or&&L.transparent===!1?b(bi):b(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const Ee=L.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(L){S!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),S=L)}function I(L){L!==Bp?(me(r.CULL_FACE),L!==D&&(L===eu?r.cullFace(r.BACK):L===zp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),D=L}function oe(L){L!==k&&(W&&r.lineWidth(L),k=L)}function Le(L,he,te){L?(me(r.POLYGON_OFFSET_FILL),(N!==he||O!==te)&&(r.polygonOffset(he,te),N=he,O=te)):Pe(r.POLYGON_OFFSET_FILL)}function _e(L){L?me(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function ve(L){L===void 0&&(L=r.TEXTURE0+j-1),le!==L&&(r.activeTexture(L),le=L)}function Ge(L,he,te){te===void 0&&(le===null?te=r.TEXTURE0+j-1:te=le);let Ee=de[te];Ee===void 0&&(Ee={type:void 0,texture:void 0},de[te]=Ee),(Ee.type!==L||Ee.texture!==he)&&(le!==te&&(r.activeTexture(te),le=te),r.bindTexture(L,he||we[L]),Ee.type=L,Ee.texture=he)}function A(){const L=de[le];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){nt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function De(L){K.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Ie(L,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let Ee=te.get(L);Ee===void 0&&(Ee=r.getUniformBlockIndex(he,L.name),te.set(L,Ee))}function ce(L,he){const Ee=c.get(he).get(L);l.get(he)!==Ee&&(r.uniformBlockBinding(he,Ee,L.__bindingPointIndex),l.set(he,Ee))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},le=null,de={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,E=null,M=null,R=null,w=null,C=new je(0,0,0),P=0,v=!1,S=null,D=null,k=null,N=null,O=null,nt.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Pe,bindFramebuffer:Ye,drawBuffers:Ue,useProgram:$e,setBlending:b,setMaterial:q,setFlipSided:se,setCullFace:I,setLineWidth:oe,setPolygonOffset:Le,setScissorTest:_e,activeTexture:ve,bindTexture:Ge,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:ye,texImage3D:Q,updateUBOMapping:Ie,uniformBlockBinding:ce,texStorage2D:ae,texStorage3D:Se,texSubImage2D:Z,texSubImage3D:Y,compressedTexSubImage2D:X,compressedTexSubImage3D:xe,scissor:pe,viewport:De,reset:Be}}function nM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):Ba("canvas")}function _(A,x,B){let Z=1;const Y=Ge(A);if((Y.width>B||Y.height>B)&&(Z=B/Math.max(Y.width,Y.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Z*Y.width),xe=Math.floor(Z*Y.height);h===void 0&&(h=g(X,xe));const ae=x?g(X,xe):h;return ae.width=X,ae.height=xe,ae.getContext("2d").drawImage(A,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+xe+")."),ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(A,x,B,Z,Y=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===r.RED&&(B===r.FLOAT&&(X=r.R32F),B===r.HALF_FLOAT&&(X=r.R16F),B===r.UNSIGNED_BYTE&&(X=r.R8)),x===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.R8UI),B===r.UNSIGNED_SHORT&&(X=r.R16UI),B===r.UNSIGNED_INT&&(X=r.R32UI),B===r.BYTE&&(X=r.R8I),B===r.SHORT&&(X=r.R16I),B===r.INT&&(X=r.R32I)),x===r.RG&&(B===r.FLOAT&&(X=r.RG32F),B===r.HALF_FLOAT&&(X=r.RG16F),B===r.UNSIGNED_BYTE&&(X=r.RG8)),x===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RG8UI),B===r.UNSIGNED_SHORT&&(X=r.RG16UI),B===r.UNSIGNED_INT&&(X=r.RG32UI),B===r.BYTE&&(X=r.RG8I),B===r.SHORT&&(X=r.RG16I),B===r.INT&&(X=r.RG32I)),x===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RGB8UI),B===r.UNSIGNED_SHORT&&(X=r.RGB16UI),B===r.UNSIGNED_INT&&(X=r.RGB32UI),B===r.BYTE&&(X=r.RGB8I),B===r.SHORT&&(X=r.RGB16I),B===r.INT&&(X=r.RGB32I)),x===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),B===r.UNSIGNED_INT&&(X=r.RGBA32UI),B===r.BYTE&&(X=r.RGBA8I),B===r.SHORT&&(X=r.RGBA16I),B===r.INT&&(X=r.RGBA32I)),x===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),x===r.RGBA){const xe=Y?Fa:st.getTransfer(Z);B===r.FLOAT&&(X=r.RGBA32F),B===r.HALF_FLOAT&&(X=r.RGBA16F),B===r.UNSIGNED_BYTE&&(X=xe===ut?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(A,x){let B;return A?x===null||x===ir||x===Ls?B=r.DEPTH24_STENCIL8:x===Hn?B=r.DEPTH32F_STENCIL8:x===Ds&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ir||x===Ls?B=r.DEPTH_COMPONENT24:x===Hn?B=r.DEPTH_COMPONENT32F:x===Ds&&(B=r.DEPTH_COMPONENT16),B}function R(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==Vn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&u.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),S(x)}function P(A){const x=n.get(A);if(x.__webglInit===void 0)return;const B=A.source,Z=f.get(B);if(Z){const Y=Z[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(A),Object.keys(Z).length===0&&f.delete(B)}n.remove(A)}function v(A){const x=n.get(A);r.deleteTexture(x.__webglTexture);const B=A.source,Z=f.get(B);delete Z[x.__cacheKey],a.memory.textures--}function S(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let Y=0;Y<x.__webglFramebuffer[Z].length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[Z][Y]);else r.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)r.deleteFramebuffer(x.__webglFramebuffer[Z]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let Z=0,Y=B.length;Z<Y;Z++){const X=n.get(B[Z]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(A)}let D=0;function k(){D=0}function N(){const A=D;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function O(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function j(A,x){const B=n.get(A);if(A.isVideoTexture&&_e(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(B,A,x);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+x)}function W(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){we(B,A,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+x)}function J(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){we(B,A,x);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+x)}function V(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){me(B,A,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+x)}const le={[hl]:r.REPEAT,[$i]:r.CLAMP_TO_EDGE,[fl]:r.MIRRORED_REPEAT},de={[xn]:r.NEAREST,[dm]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[ro]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},Ae={[gm]:r.NEVER,[Em]:r.ALWAYS,[vm]:r.LESS,[Rf]:r.LEQUAL,[xm]:r.EQUAL,[ym]:r.GEQUAL,[Mm]:r.GREATER,[Sm]:r.NOTEQUAL};function Oe(A,x){if(x.type===Hn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Vn||x.magFilter===ro||x.magFilter===Ys||x.magFilter===Ji||x.minFilter===Vn||x.minFilter===ro||x.minFilter===Ys||x.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,le[x.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,le[x.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,le[x.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,de[x.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===xn||x.minFilter!==Ys&&x.minFilter!==Ji||x.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function nt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const Z=x.source;let Y=f.get(Z);Y===void 0&&(Y={},f.set(Z,Y));const X=O(x);if(X!==A.__cacheKey){Y[X]===void 0&&(Y[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[X].usedTimes++;const xe=Y[A.__cacheKey];xe!==void 0&&(Y[A.__cacheKey].usedTimes--,xe.usedTimes===0&&v(x)),A.__cacheKey=X,A.__webglTexture=Y[X].texture}return B}function K(A,x,B){return Math.floor(Math.floor(A/B)/x)}function ie(A,x,B,Z){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,B,Z,x.data);else{X.sort((Q,pe)=>Q.start-pe.start);let xe=0;for(let Q=1;Q<X.length;Q++){const pe=X[xe],De=X[Q],Ie=pe.start+pe.count,ce=K(De.start,x.width,4),Be=K(pe.start,x.width,4);De.start<=Ie+1&&ce===Be&&K(De.start+De.count-1,x.width,4)===ce?pe.count=Math.max(pe.count,De.start+De.count-pe.start):(++xe,X[xe]=De)}X.length=xe+1;const ae=r.getParameter(r.UNPACK_ROW_LENGTH),Se=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Q=0,pe=X.length;Q<pe;Q++){const De=X[Q],Ie=Math.floor(De.start/4),ce=Math.ceil(De.count/4),Be=Ie%x.width,L=Math.floor(Ie/x.width),he=ce,te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,Be,L,he,te,B,Z,x.data)}A.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function we(A,x,B){let Z=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=r.TEXTURE_3D);const Y=nt(A,x),X=x.source;t.bindTexture(Z,A.__webglTexture,r.TEXTURE0+B);const xe=n.get(X);if(X.version!==xe.__version||Y===!0){t.activeTexture(r.TEXTURE0+B);const ae=st.getPrimaries(st.workingColorSpace),Se=x.colorSpace===gi?null:st.getPrimaries(x.colorSpace),ye=x.colorSpace===gi||ae===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Q=_(x.image,!1,i.maxTextureSize);Q=ve(x,Q);const pe=s.convert(x.format,x.colorSpace),De=s.convert(x.type);let Ie=E(x.internalFormat,pe,De,x.colorSpace,x.isVideoTexture);Oe(Z,x);let ce;const Be=x.mipmaps,L=x.isVideoTexture!==!0,he=xe.__version===void 0||Y===!0,te=X.dataReady,Ee=R(x,Q);if(x.isDepthTexture)Ie=M(x.format===Us,x.type),he&&(L?t.texStorage2D(r.TEXTURE_2D,1,Ie,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Ie,Q.width,Q.height,0,pe,De,null));else if(x.isDataTexture)if(Be.length>0){L&&he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,Be[0].width,Be[0].height);for(let ne=0,$=Be.length;ne<$;ne++)ce=Be[ne],L?te&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ce.width,ce.height,pe,De,ce.data):t.texImage2D(r.TEXTURE_2D,ne,Ie,ce.width,ce.height,0,pe,De,ce.data);x.generateMipmaps=!1}else L?(he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,Q.width,Q.height),te&&ie(x,Q,pe,De)):t.texImage2D(r.TEXTURE_2D,0,Ie,Q.width,Q.height,0,pe,De,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Ie,Be[0].width,Be[0].height,Q.depth);for(let ne=0,$=Be.length;ne<$;ne++)if(ce=Be[ne],x.format!==Nn)if(pe!==null)if(L){if(te)if(x.layerUpdates.size>0){const be=Iu(ce.width,ce.height,x.format,x.type);for(const ke of x.layerUpdates){const lt=ce.data.subarray(ke*be/ce.data.BYTES_PER_ELEMENT,(ke+1)*be/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,ke,ce.width,ce.height,1,pe,lt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,Q.depth,pe,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Ie,ce.width,ce.height,Q.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,Q.depth,pe,De,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Ie,ce.width,ce.height,Q.depth,0,pe,De,ce.data)}else{L&&he&&t.texStorage2D(r.TEXTURE_2D,Ee,Ie,Be[0].width,Be[0].height);for(let ne=0,$=Be.length;ne<$;ne++)ce=Be[ne],x.format!==Nn?pe!==null?L?te&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ce.width,ce.height,pe,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Ie,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ce.width,ce.height,pe,De,ce.data):t.texImage2D(r.TEXTURE_2D,ne,Ie,ce.width,ce.height,0,pe,De,ce.data)}else if(x.isDataArrayTexture)if(L){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Ie,Q.width,Q.height,Q.depth),te)if(x.layerUpdates.size>0){const ne=Iu(Q.width,Q.height,x.format,x.type);for(const $ of x.layerUpdates){const be=Q.data.subarray($*ne/Q.data.BYTES_PER_ELEMENT,($+1)*ne/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,pe,De,be)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,De,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,Q.width,Q.height,Q.depth,0,pe,De,Q.data);else if(x.isData3DTexture)L?(he&&t.texStorage3D(r.TEXTURE_3D,Ee,Ie,Q.width,Q.height,Q.depth),te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,De,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Ie,Q.width,Q.height,Q.depth,0,pe,De,Q.data);else if(x.isFramebufferTexture){if(he)if(L)t.texStorage2D(r.TEXTURE_2D,Ee,Ie,Q.width,Q.height);else{let ne=Q.width,$=Q.height;for(let be=0;be<Ee;be++)t.texImage2D(r.TEXTURE_2D,be,Ie,ne,$,0,pe,De,null),ne>>=1,$>>=1}}else if(Be.length>0){if(L&&he){const ne=Ge(Be[0]);t.texStorage2D(r.TEXTURE_2D,Ee,Ie,ne.width,ne.height)}for(let ne=0,$=Be.length;ne<$;ne++)ce=Be[ne],L?te&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,pe,De,ce):t.texImage2D(r.TEXTURE_2D,ne,Ie,pe,De,ce);x.generateMipmaps=!1}else if(L){if(he){const ne=Ge(Q);t.texStorage2D(r.TEXTURE_2D,Ee,Ie,ne.width,ne.height)}te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,De,Q)}else t.texImage2D(r.TEXTURE_2D,0,Ie,pe,De,Q);m(x)&&d(Z),xe.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function me(A,x,B){if(x.image.length!==6)return;const Z=nt(A,x),Y=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+B);const X=n.get(Y);if(Y.version!==X.__version||Z===!0){t.activeTexture(r.TEXTURE0+B);const xe=st.getPrimaries(st.workingColorSpace),ae=x.colorSpace===gi?null:st.getPrimaries(x.colorSpace),Se=x.colorSpace===gi||xe===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!ye&&!Q?pe[$]=_(x.image[$],!0,i.maxCubemapSize):pe[$]=Q?x.image[$].image:x.image[$],pe[$]=ve(x,pe[$]);const De=pe[0],Ie=s.convert(x.format,x.colorSpace),ce=s.convert(x.type),Be=E(x.internalFormat,Ie,ce,x.colorSpace),L=x.isVideoTexture!==!0,he=X.__version===void 0||Z===!0,te=Y.dataReady;let Ee=R(x,De);Oe(r.TEXTURE_CUBE_MAP,x);let ne;if(ye){L&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Be,De.width,De.height);for(let $=0;$<6;$++){ne=pe[$].mipmaps;for(let be=0;be<ne.length;be++){const ke=ne[be];x.format!==Nn?Ie!==null?L?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,be,0,0,ke.width,ke.height,Ie,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,be,Be,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,be,0,0,ke.width,ke.height,Ie,ce,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,be,Be,ke.width,ke.height,0,Ie,ce,ke.data)}}}else{if(ne=x.mipmaps,L&&he){ne.length>0&&Ee++;const $=Ge(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,Be,$.width,$.height)}for(let $=0;$<6;$++)if(Q){L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ie,ce,pe[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,pe[$].width,pe[$].height,0,Ie,ce,pe[$].data);for(let be=0;be<ne.length;be++){const lt=ne[be].image[$].image;L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,be+1,0,0,lt.width,lt.height,Ie,ce,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,be+1,Be,lt.width,lt.height,0,Ie,ce,lt.data)}}else{L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ie,ce,pe[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,Ie,ce,pe[$]);for(let be=0;be<ne.length;be++){const ke=ne[be];L?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,be+1,0,0,Ie,ce,ke.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,be+1,Be,Ie,ce,ke.image[$])}}}m(x)&&d(r.TEXTURE_CUBE_MAP),X.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Pe(A,x,B,Z,Y,X){const xe=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),Se=E(B.internalFormat,xe,ae,B.colorSpace),ye=n.get(x),Q=n.get(B);if(Q.__renderTarget=x,!ye.__hasExternalTextures){const pe=Math.max(1,x.width>>X),De=Math.max(1,x.height>>X);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?t.texImage3D(Y,X,Se,pe,De,x.depth,0,xe,ae,null):t.texImage2D(Y,X,Se,pe,De,0,xe,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),Le(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Y,Q.__webglTexture,0,oe(x)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Y,Q.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(A,x,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),x.depthBuffer){const Z=x.depthTexture,Y=Z&&Z.isDepthTexture?Z.type:null,X=M(x.stencilBuffer,Y),xe=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=oe(x);Le(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,X,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,X,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,X,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,A)}else{const Z=x.textures;for(let Y=0;Y<Z.length;Y++){const X=Z[Y],xe=s.convert(X.format,X.colorSpace),ae=s.convert(X.type),Se=E(X.internalFormat,xe,ae,X.colorSpace),ye=oe(x);B&&Le(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,Se,x.width,x.height):Le(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,Se,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Se,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const Y=Z.__webglTexture,X=oe(x);if(x.depthTexture.format===Is)Le(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else if(x.depthTexture.format===Us)Le(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function $e(A){const x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",Y)};Z.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=Z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?Ue(x.__webglFramebuffer[0],A):Ue(x.__webglFramebuffer,A)}else if(B){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=r.createRenderbuffer(),Ye(x.__webglDepthbuffer[Z],A,!1);else{const Y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,X)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ye(x.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function it(A,x,B){const Z=n.get(A);x!==void 0&&Pe(Z.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&$e(A)}function ue(A){const x=A.texture,B=n.get(A),Z=n.get(x);A.addEventListener("dispose",C);const Y=A.textures,X=A.isWebGLCubeRenderTarget===!0,xe=Y.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=x.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let Se=0;Se<x.mipmaps.length;Se++)B.__webglFramebuffer[ae][Se]=r.createFramebuffer()}else B.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)B.__webglFramebuffer[ae]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(xe)for(let ae=0,Se=Y.length;ae<Se;ae++){const ye=n.get(Y[ae]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&Le(A)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<Y.length;ae++){const Se=Y[ae];B.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const ye=s.convert(Se.format,Se.colorSpace),Q=s.convert(Se.type),pe=E(Se.internalFormat,ye,Q,Se.colorSpace,A.isXRRenderTarget===!0),De=oe(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,pe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ye(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)Pe(B.__webglFramebuffer[ae][Se],A,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se);else Pe(B.__webglFramebuffer[ae],A,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(x)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ae=0,Se=Y.length;ae<Se;ae++){const ye=Y[ae],Q=n.get(ye);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Oe(r.TEXTURE_2D,ye),Pe(B.__webglFramebuffer,A,ye,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),m(ye)&&d(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),Oe(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)Pe(B.__webglFramebuffer[Se],A,x,r.COLOR_ATTACHMENT0,ae,Se);else Pe(B.__webglFramebuffer,A,x,r.COLOR_ATTACHMENT0,ae,0);m(x)&&d(ae),t.unbindTexture()}A.depthBuffer&&$e(A)}function b(A){const x=A.textures;for(let B=0,Z=x.length;B<Z;B++){const Y=x[B];if(m(Y)){const X=T(A),xe=n.get(Y).__webglTexture;t.bindTexture(X,xe),d(X),t.unbindTexture()}}}const q=[],se=[];function I(A){if(A.samples>0){if(Le(A)===!1){const x=A.textures,B=A.width,Z=A.height;let Y=r.COLOR_BUFFER_BIT;const X=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(A),ae=x.length>1;if(ae)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Se=A.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const Q=n.get(x[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,B,Z,0,0,B,Z,Y,r.NEAREST),l===!0&&(q.length=0,se.length=0,q.push(r.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(q.push(X),se.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const Q=n.get(x[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function oe(A){return Math.min(i.maxSamples,A.samples)}function Le(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _e(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ve(A,x){const B=A.colorSpace,Z=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Zr&&B!==gi&&(st.getTransfer(B)===ut?(Z!==Nn||Y!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=it,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Le}function iM(r,e){function t(n,i=gi){let s;const a=st.getTransfer(i);if(n===Yn)return r.UNSIGNED_BYTE;if(n===dc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===yf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Mf)return r.BYTE;if(n===Sf)return r.SHORT;if(n===Ds)return r.UNSIGNED_SHORT;if(n===fc)return r.INT;if(n===ir)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===Os)return r.HALF_FLOAT;if(n===Ef)return r.ALPHA;if(n===Tf)return r.RGB;if(n===Nn)return r.RGBA;if(n===Is)return r.DEPTH_COMPONENT;if(n===Us)return r.DEPTH_STENCIL;if(n===mc)return r.RED;if(n===_c)return r.RED_INTEGER;if(n===bf)return r.RG;if(n===gc)return r.RG_INTEGER;if(n===vc)return r.RGBA_INTEGER;if(n===xa||n===Ma||n===Sa||n===ya)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===pl||n===ml||n===_l)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===vl||n===xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gl||n===vl)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ml||n===Sl||n===yl||n===El||n===Tl||n===bl||n===Al||n===wl||n===Rl||n===Cl||n===Pl||n===Dl||n===Ll||n===Il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ml)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Ul||n===Nl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ea)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Af||n===Fl||n===Ol||n===Bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const rM=`
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

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Di({vertexShader:rM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends $r{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new aM,m=t.getContextAttributes();let d=null,T=null;const E=[],M=[],R=new Qe;let w=null;const C=new dn;C.viewport=new ht;const P=new dn;P.viewport=new ht;const v=[C,P],S=new A_;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=E[K];return ie===void 0&&(ie=new Ao,E[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=E[K];return ie===void 0&&(ie=new Ao,E[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=E[K];return ie===void 0&&(ie=new Ao,E[K]=ie),ie.getHandSpace()};function N(K){const ie=M.indexOf(K.inputSource);if(ie===-1)return;const we=E[ie];we!==void 0&&(we.update(K.inputSource,K.frame,c||a),we.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",j);for(let K=0;K<E.length;K++){const ie=M[K];ie!==null&&(M[K]=null,E[K].disconnect(ie))}D=null,k=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,i=null,T=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,me=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=m.stencil?Us:Is,me=m.stencil?Ls:ir);const Ye={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new rr(f.textureWidth,f.textureHeight,{format:Nn,type:Yn,depthTexture:new kf(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,we),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new rr(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(K){for(let ie=0;ie<K.removed.length;ie++){const we=K.removed[ie],me=M.indexOf(we);me>=0&&(M[me]=null,E[me].disconnect(we))}for(let ie=0;ie<K.added.length;ie++){const we=K.added[ie];let me=M.indexOf(we);if(me===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=M.length){M.push(we),me=Ye;break}else if(M[Ye]===null){M[Ye]=we,me=Ye;break}if(me===-1)break}const Pe=E[me];Pe&&Pe.connect(we)}}const W=new F,J=new F;function V(K,ie,we){W.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(we.matrixWorld);const me=W.distanceTo(J),Pe=ie.projectionMatrix.elements,Ye=we.projectionMatrix.elements,Ue=Pe[14]/(Pe[10]-1),$e=Pe[14]/(Pe[10]+1),it=(Pe[9]+1)/Pe[5],ue=(Pe[9]-1)/Pe[5],b=(Pe[8]-1)/Pe[0],q=(Ye[8]+1)/Ye[0],se=Ue*b,I=Ue*q,oe=me/(-b+q),Le=oe*-b;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Le),K.translateZ(oe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const _e=Ue+oe,ve=$e+oe,Ge=se-Le,A=I+(me-Le),x=it*$e/ve*_e,B=ue*$e/ve*_e;K.projectionMatrix.makePerspective(Ge,A,x,B,_e,ve),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ie=K.near,we=K.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(we=_.depthFar)),S.near=P.near=C.near=ie,S.far=P.far=C.far=we,(D!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,k=S.far),C.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;const me=K.parent,Pe=S.cameras;le(S,me);for(let Ye=0;Ye<Pe.length;Ye++)le(Pe[Ye],me);Pe.length===2?V(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),de(K,S,me)};function de(K,ie,we){we===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(we.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ns*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Ae=null;function Oe(K,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const we=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let me=!1;we.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let Ue=0;Ue<we.length;Ue++){const $e=we[Ue];let it=null;if(p!==null)it=p.getViewport($e);else{const b=h.getViewSubImage(f,$e);it=b.viewport,Ue===0&&(e.setRenderTargetTextures(T,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(T))}let ue=v[Ue];ue===void 0&&(ue=new dn,ue.layers.enable(Ue),ue.viewport=new ht,v[Ue]=ue),ue.matrix.fromArray($e.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray($e.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(it.x,it.y,it.width,it.height),Ue===0&&(S.matrix.copy(ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(ue)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ue=h.getDepthInformation(we[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,i.renderState)}}for(let we=0;we<E.length;we++){const me=M[we],Pe=E[we];me!==null&&Pe!==void 0&&Pe.update(me,ie,c||a)}Ae&&Ae(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const nt=new Gf;nt.setAnimationLoop(Oe),this.setAnimationLoop=function(K){Ae=K},this.dispose=function(){}}}const Gi=new qn,lM=new mt;function cM(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Nf(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,T,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),E=T.envMap,M=T.envMapRotation;E&&(m.envMap.value=E,Gi.copy(M),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(Gi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const M=E.program;n.uniformBlockBinding(T,M)}function c(T,E){let M=i[T.id];M===void 0&&(g(T),M=u(T),i[T.id]=M,T.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(T,R);const w=e.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function u(T){const E=h();T.__bindingPointIndex=E;const M=r.createBuffer(),R=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,M),M}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=i[T.id],M=T.uniforms,R=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,C=M.length;w<C;w++){const P=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,S=P.length;v<S;v++){const D=P[v];if(p(D,w,v,R)===!0){const k=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let O=0;for(let j=0;j<N.length;j++){const W=N[j],J=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,k+O,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,E,M,R){const w=T.value,C=E+"_"+M;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const P=R[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(T){const E=T.uniforms;let M=0;const R=16;for(let C=0,P=E.length;C<P;C++){const v=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,D=v.length;S<D;S++){const k=v[S],N=Array.isArray(k.value)?k.value:[k.value];for(let O=0,j=N.length;O<j;O++){const W=N[O],J=_(W),V=M%R,le=V%J.boundary,de=V+le;M+=le,de!==0&&R-de<J.storage&&(M+=R-de),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=J.storage}}}const w=M%R;return w>0&&(M+=R-w),T.__size=M,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function d(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class hM{constructor(e={}){const{canvas:t=km(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=fn;let w=0,C=0,P=null,v=-1,S=null;const D=new ht,k=new ht;let N=null;const O=new je(0);let j=0,W=t.width,J=t.height,V=1,le=null,de=null;const Ae=new ht(0,0,W,J),Oe=new ht(0,0,W,J);let nt=!1;const K=new Ec;let ie=!1,we=!1;const me=new mt,Pe=new mt,Ye=new F,Ue=new ht,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ue(){return P===null?V:1}let b=n;function q(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",$,!1),b===null){const U="webgl2";if(b=q(U,y),b===null)throw q(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let se,I,oe,Le,_e,ve,Ge,A,x,B,Z,Y,X,xe,ae,Se,ye,Q,pe,De,Ie,ce,Be,L;function he(){se=new Sv(b),se.init(),ce=new iM(b,se),I=new pv(b,se,e,ce),oe=new tM(b,se),I.reverseDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),Le=new Tv(b),_e=new Hx,ve=new nM(b,se,oe,_e,I,ce,Le),Ge=new _v(M),A=new Mv(M),x=new P_(b),Be=new fv(b,x),B=new yv(b,x,Le,Be),Z=new Av(b,B,x,Le),pe=new bv(b,I,ve),Se=new mv(_e),Y=new Vx(M,Ge,A,se,I,Be,Se),X=new cM(M,_e),xe=new Wx,ae=new jx(se),Q=new hv(M,Ge,A,oe,Z,p,l),ye=new Qx(M,Z,I),L=new uM(b,Le,I,oe),De=new dv(b,se,Le),Ie=new Ev(b,se,Le),Le.programs=Y.programs,M.capabilities=I,M.extensions=se,M.properties=_e,M.renderLists=xe,M.shadowMap=ye,M.state=oe,M.info=Le}he();const te=new oM(M,b);this.xr=te,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const y=se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,J,!1))},this.getSize=function(y){return y.set(W,J)},this.setSize=function(y,U,H=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,J=U,t.width=Math.floor(y*V),t.height=Math.floor(U*V),H===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(W*V,J*V).floor()},this.setDrawingBufferSize=function(y,U,H){W=y,J=U,V=H,t.width=Math.floor(y*H),t.height=Math.floor(U*H),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,U,H,G){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,U,H,G),oe.viewport(D.copy(Ae).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,U,H,G){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,U,H,G),oe.scissor(k.copy(Oe).multiplyScalar(V).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){oe.setScissorTest(nt=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,H=!0){let G=0;if(y){let z=!1;if(P!==null){const re=P.texture.format;z=re===vc||re===gc||re===_c}if(z){const re=P.texture.type,ge=re===Yn||re===ir||re===Ds||re===Ls||re===dc||re===pc,Re=Q.getClearColor(),Te=Q.getClearAlpha(),Ve=Re.r,He=Re.g,Ne=Re.b;ge?(g[0]=Ve,g[1]=He,g[2]=Ne,g[3]=Te,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Ve,_[1]=He,_[2]=Ne,_[3]=Te,b.clearBufferiv(b.COLOR,0,_))}else G|=b.COLOR_BUFFER_BIT}U&&(G|=b.DEPTH_BUFFER_BIT),H&&(G|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Q.dispose(),xe.dispose(),ae.dispose(),_e.dispose(),Ge.dispose(),A.dispose(),Z.dispose(),Be.dispose(),L.dispose(),Y.dispose(),te.dispose(),te.removeEventListener("sessionstart",At),te.removeEventListener("sessionend",Ot),Bt.stop()};function Ee(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=Le.autoReset,U=ye.enabled,H=ye.autoUpdate,G=ye.needsUpdate,z=ye.type;he(),Le.autoReset=y,ye.enabled=U,ye.autoUpdate=H,ye.needsUpdate=G,ye.type=z}function $(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function be(y){const U=y.target;U.removeEventListener("dispose",be),ke(U)}function ke(y){lt(y),_e.remove(y)}function lt(y){const U=_e.get(y).programs;U!==void 0&&(U.forEach(function(H){Y.releaseProgram(H)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,H,G,z,re){U===null&&(U=$e);const ge=z.isMesh&&z.matrixWorld.determinant()<0,Re=rd(y,U,H,G,z);oe.setMaterial(G,ge);let Te=H.index,Ve=1;if(G.wireframe===!0){if(Te=B.getWireframeAttribute(H),Te===void 0)return;Ve=2}const He=H.drawRange,Ne=H.attributes.position;let Je=He.start*Ve,ct=(He.start+He.count)*Ve;re!==null&&(Je=Math.max(Je,re.start*Ve),ct=Math.min(ct,(re.start+re.count)*Ve)),Te!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Te.count)):Ne!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,Ne.count));const Tt=ct-Je;if(Tt<0||Tt===1/0)return;Be.setup(z,G,Re,H,Te);let _t,ft=De;if(Te!==null&&(_t=x.get(Te),ft=Ie,ft.setIndex(_t)),z.isMesh)G.wireframe===!0?(oe.setLineWidth(G.wireframeLinewidth*ue()),ft.setMode(b.LINES)):ft.setMode(b.TRIANGLES);else if(z.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),oe.setLineWidth(Fe*ue()),z.isLineSegments?ft.setMode(b.LINES):z.isLineLoop?ft.setMode(b.LINE_LOOP):ft.setMode(b.LINE_STRIP)}else z.isPoints?ft.setMode(b.POINTS):z.isSprite&&ft.setMode(b.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ft.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,Mt=z._multiDrawCounts,rt=z._multiDrawCount,on=Te?x.get(Te).bytesPerElement:1,lr=_e.get(G).currentProgram.getUniforms();for(let ln=0;ln<rt;ln++)lr.setValue(b,"_gl_DrawID",ln),ft.render(Fe[ln]/on,Mt[ln])}else if(z.isInstancedMesh)ft.renderInstances(Je,Tt,z.count);else if(H.isInstancedBufferGeometry){const Fe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mt=Math.min(H.instanceCount,Fe);ft.renderInstances(Je,Tt,Mt)}else ft.render(Je,Tt)};function Me(y,U,H){y.transparent===!0&&y.side===ni&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,Hs(y,U,H),y.side=Pi,y.needsUpdate=!0,Hs(y,U,H),y.side=ni):Hs(y,U,H)}this.compile=function(y,U,H=null){H===null&&(H=y),d=ae.get(H),d.init(U),E.push(d),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),y!==H&&y.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const G=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const re=z.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){const Re=re[ge];Me(Re,H,z),G.add(Re)}else Me(re,H,z),G.add(re)}),d=E.pop(),G},this.compileAsync=function(y,U,H=null){const G=this.compile(y,U,H);return new Promise(z=>{function re(){if(G.forEach(function(ge){_e.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){z(y);return}setTimeout(re,10)}se.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ce=null;function qe(y){Ce&&Ce(y)}function At(){Bt.stop()}function Ot(){Bt.start()}const Bt=new Gf;Bt.setAnimationLoop(qe),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(y){Ce=y,te.setAnimationLoop(y),y===null?Bt.stop():Bt.start()},te.addEventListener("sessionstart",At),te.addEventListener("sessionend",Ot),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,U,P),d=ae.get(y,E.length),d.init(U),E.push(d),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Pe),we=this.localClippingEnabled,ie=Se.init(this.clippingPlanes,we),m=xe.get(y,T.length),m.init(),T.push(m),te.enabled===!0&&te.isPresenting===!0){const re=M.xr.getDepthSensingMesh();re!==null&&Ui(re,U,-1/0,M.sortObjects)}Ui(y,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(le,de),it=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,it&&Q.addToRenderList(m,y),this.info.render.frame++,ie===!0&&Se.beginShadows();const H=d.state.shadowsArray;ye.render(H,y,U),ie===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,z=m.transmissive;if(d.setupLights(),U.isArrayCamera){const re=U.cameras;if(z.length>0)for(let ge=0,Re=re.length;ge<Re;ge++){const Te=re[ge];wc(G,z,y,Te)}it&&Q.render(y);for(let ge=0,Re=re.length;ge<Re;ge++){const Te=re[ge];Ac(m,y,Te,Te.viewport)}}else z.length>0&&wc(G,z,y,U),it&&Q.render(y),Ac(m,y,U);P!==null&&C===0&&(ve.updateMultisampleRenderTarget(P),ve.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(M,y,U),Be.resetDefaultState(),v=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],ie===!0&&Se.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ui(y,U,H,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){G&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pe);const ge=Z.update(y),Re=y.material;Re.visible&&m.push(y,ge,Re,H,Ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const ge=Z.update(y),Re=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(Pe)),Array.isArray(Re)){const Te=ge.groups;for(let Ve=0,He=Te.length;Ve<He;Ve++){const Ne=Te[Ve],Je=Re[Ne.materialIndex];Je&&Je.visible&&m.push(y,ge,Je,H,Ue.z,Ne)}}else Re.visible&&m.push(y,ge,Re,H,Ue.z,null)}}const re=y.children;for(let ge=0,Re=re.length;ge<Re;ge++)Ui(re[ge],U,H,G)}function Ac(y,U,H,G){const z=y.opaque,re=y.transmissive,ge=y.transparent;d.setupLightsView(H),ie===!0&&Se.setGlobalState(M.clippingPlanes,H),G&&oe.viewport(D.copy(G)),z.length>0&&Vs(z,U,H),re.length>0&&Vs(re,U,H),ge.length>0&&Vs(ge,U,H),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function wc(y,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new rr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Os:Yn,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const re=d.state.transmissionRenderTarget[G.id],ge=G.viewport||D;re.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);const Re=M.getRenderTarget(),Te=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(re),M.getClearColor(O),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),it&&Q.render(H);const He=M.toneMapping;M.toneMapping=Ai;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),ie===!0&&Se.setGlobalState(M.clippingPlanes,G),Vs(y,H,G),ve.updateMultisampleRenderTarget(re),ve.updateRenderTargetMipmap(re),se.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ct=0,Tt=U.length;ct<Tt;ct++){const _t=U[ct],ft=_t.object,Fe=_t.geometry,Mt=_t.material,rt=_t.group;if(Mt.side===ni&&ft.layers.test(G.layers)){const on=Mt.side;Mt.side=$t,Mt.needsUpdate=!0,Rc(ft,H,G,Fe,Mt,rt),Mt.side=on,Mt.needsUpdate=!0,Je=!0}}Je===!0&&(ve.updateMultisampleRenderTarget(re),ve.updateRenderTargetMipmap(re))}M.setRenderTarget(Re,Te,Ve),M.setClearColor(O,j),Ne!==void 0&&(G.viewport=Ne),M.toneMapping=He}function Vs(y,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,re=y.length;z<re;z++){const ge=y[z],Re=ge.object,Te=ge.geometry,Ve=ge.group;let He=ge.material;He.allowOverride===!0&&G!==null&&(He=G),Re.layers.test(H.layers)&&Rc(Re,U,H,Te,He,Ve)}}function Rc(y,U,H,G,z,re){y.onBeforeRender(M,U,H,G,z,re),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(M,U,H,G,y,re),z.transparent===!0&&z.side===ni&&z.forceSinglePass===!1?(z.side=$t,z.needsUpdate=!0,M.renderBufferDirect(H,U,G,z,y,re),z.side=Pi,z.needsUpdate=!0,M.renderBufferDirect(H,U,G,z,y,re),z.side=ni):M.renderBufferDirect(H,U,G,z,y,re),y.onAfterRender(M,U,H,G,z,re)}function Hs(y,U,H){U.isScene!==!0&&(U=$e);const G=_e.get(y),z=d.state.lights,re=d.state.shadowsArray,ge=z.state.version,Re=Y.getParameters(y,z.state,re,U,H),Te=Y.getProgramCacheKey(Re);let Ve=G.programs;G.environment=y.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(y.isMeshStandardMaterial?A:Ge).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",be),Ve=new Map,G.programs=Ve);let He=Ve.get(Te);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===ge)return Pc(y,Re),He}else Re.uniforms=Y.getUniforms(y),y.onBeforeCompile(Re,M),He=Y.acquireProgram(Re,Te),Ve.set(Te,He),G.uniforms=Re.uniforms;const Ne=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ne.clippingPlanes=Se.uniform),Pc(y,Re),G.needsLights=ad(y),G.lightsStateVersion=ge,G.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.directionalShadowMap.value=z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotShadowMap.value=z.state.spotShadowMap,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMap.value=z.state.pointShadowMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Cc(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ta.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Pc(y,U){const H=_e.get(y);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function rd(y,U,H,G,z){U.isScene!==!0&&(U=$e),ve.resetTextureUnits();const re=U.fog,ge=G.isMeshStandardMaterial?U.environment:null,Re=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zr,Te=(G.isMeshStandardMaterial?A:Ge).get(G.envMap||ge),Ve=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let Tt=Ai;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Tt=M.toneMapping);const _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=_t!==void 0?_t.length:0,Fe=_e.get(G),Mt=d.state.lights;if(ie===!0&&(we===!0||y!==S)){const Xt=y===S&&G.id===v;Se.setState(G,y,Xt)}let rt=!1;G.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Mt.state.version||Fe.outputColorSpace!==Re||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Te||G.fog===!0&&Fe.fog!==re||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Se.numPlanes||Fe.numIntersection!==Se.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==He||Fe.morphTargets!==Ne||Fe.morphNormals!==Je||Fe.morphColors!==ct||Fe.toneMapping!==Tt||Fe.morphTargetsCount!==ft)&&(rt=!0):(rt=!0,Fe.__version=G.version);let on=Fe.currentProgram;rt===!0&&(on=Hs(G,U,z));let lr=!1,ln=!1,ts=!1;const vt=on.getUniforms(),yn=Fe.uniforms;if(oe.useProgram(on.program)&&(lr=!0,ln=!0,ts=!0),G.id!==v&&(v=G.id,ln=!0),lr||S!==y){oe.buffers.depth.getReversed()?(me.copy(y.projectionMatrix),Hm(me),Gm(me),vt.setValue(b,"projectionMatrix",me)):vt.setValue(b,"projectionMatrix",y.projectionMatrix),vt.setValue(b,"viewMatrix",y.matrixWorldInverse);const Qt=vt.map.cameraPosition;Qt!==void 0&&Qt.setValue(b,Ye.setFromMatrixPosition(y.matrixWorld)),I.logarithmicDepthBuffer&&vt.setValue(b,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(b,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,ln=!0,ts=!0)}if(z.isSkinnedMesh){vt.setOptional(b,z,"bindMatrix"),vt.setOptional(b,z,"bindMatrixInverse");const Xt=z.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),vt.setValue(b,"boneTexture",Xt.boneTexture,ve))}z.isBatchedMesh&&(vt.setOptional(b,z,"batchingTexture"),vt.setValue(b,"batchingTexture",z._matricesTexture,ve),vt.setOptional(b,z,"batchingIdTexture"),vt.setValue(b,"batchingIdTexture",z._indirectTexture,ve),vt.setOptional(b,z,"batchingColorTexture"),z._colorsTexture!==null&&vt.setValue(b,"batchingColorTexture",z._colorsTexture,ve));const En=H.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&pe.update(z,H,on),(ln||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,vt.setValue(b,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=Te,yn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(yn.envMapIntensity.value=U.environmentIntensity),ln&&(vt.setValue(b,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&sd(yn,ts),re&&G.fog===!0&&X.refreshFogUniforms(yn,re),X.refreshMaterialUniforms(yn,G,V,J,d.state.transmissionRenderTarget[y.id]),Ta.upload(b,Cc(Fe),yn,ve)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ta.upload(b,Cc(Fe),yn,ve),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(b,"center",z.center),vt.setValue(b,"modelViewMatrix",z.modelViewMatrix),vt.setValue(b,"normalMatrix",z.normalMatrix),vt.setValue(b,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xt=G.uniformsGroups;for(let Qt=0,Ya=Xt.length;Qt<Ya;Qt++){const Ni=Xt[Qt];L.update(Ni,on),L.bind(Ni,on)}}return on}function sd(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ad(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,U,H){const G=_e.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_e.get(y.texture).__webglTexture=U,_e.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const H=_e.get(y);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const od=b.createFramebuffer();this.setRenderTarget=function(y,U=0,H=0){P=y,w=U,C=H;let G=!0,z=null,re=!1,ge=!1;if(y){const Te=_e.get(y);if(Te.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(b.FRAMEBUFFER,null),G=!1;else if(Te.__webglFramebuffer===void 0)ve.setupRenderTarget(y);else if(Te.__hasExternalTextures)ve.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ne=y.depthTexture;if(Te.__boundDepthTexture!==Ne){if(Ne!==null&&_e.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ge=!0);const He=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(He[U])?z=He[U][H]:z=He[U],re=!0):y.samples>0&&ve.useMultisampledRTT(y)===!1?z=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[H]:z=He,D.copy(y.viewport),k.copy(y.scissor),N=y.scissorTest}else D.copy(Ae).multiplyScalar(V).floor(),k.copy(Oe).multiplyScalar(V).floor(),N=nt;if(H!==0&&(z=od),oe.bindFramebuffer(b.FRAMEBUFFER,z)&&G&&oe.drawBuffers(y,z),oe.viewport(D),oe.scissor(k),oe.setScissorTest(N),re){const Te=_e.get(y.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,H)}else if(ge){const Te=_e.get(y.texture),Ve=U;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Te.__webglTexture,H,Ve)}else if(y!==null&&H!==0){const Te=_e.get(y.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Te.__webglTexture,H)}v=-1},this.readRenderTargetPixels=function(y,U,H,G,z,re,ge,Re=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){oe.bindFramebuffer(b.FRAMEBUFFER,Te);try{const Ve=y.textures[Re],He=Ve.format,Ne=Ve.type;if(!I.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&H>=0&&H<=y.height-z&&(y.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Re),b.readPixels(U,H,G,z,ce.convert(He),ce.convert(Ne),re))}finally{const Ve=P!==null?_e.get(P).__webglFramebuffer:null;oe.bindFramebuffer(b.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(y,U,H,G,z,re,ge,Re=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te)if(U>=0&&U<=y.width-G&&H>=0&&H<=y.height-z){oe.bindFramebuffer(b.FRAMEBUFFER,Te);const Ve=y.textures[Re],He=Ve.format,Ne=Ve.type;if(!I.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Je),b.bufferData(b.PIXEL_PACK_BUFFER,re.byteLength,b.STREAM_READ),y.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Re),b.readPixels(U,H,G,z,ce.convert(He),ce.convert(Ne),0);const ct=P!==null?_e.get(P).__webglFramebuffer:null;oe.bindFramebuffer(b.FRAMEBUFFER,ct);const Tt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Vm(b,Tt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Je),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,re),b.deleteBuffer(Je),b.deleteSync(Tt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,H=0){const G=Math.pow(2,-H),z=Math.floor(y.image.width*G),re=Math.floor(y.image.height*G),ge=U!==null?U.x:0,Re=U!==null?U.y:0;ve.setTexture2D(y,0),b.copyTexSubImage2D(b.TEXTURE_2D,H,0,0,ge,Re,z,re),oe.unbindTexture()};const ld=b.createFramebuffer(),cd=b.createFramebuffer();this.copyTextureToTexture=function(y,U,H=null,G=null,z=0,re=null){re===null&&(z!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=z,z=0):re=0);let ge,Re,Te,Ve,He,Ne,Je,ct,Tt;const _t=y.isCompressedTexture?y.mipmaps[re]:y.image;if(H!==null)ge=H.max.x-H.min.x,Re=H.max.y-H.min.y,Te=H.isBox3?H.max.z-H.min.z:1,Ve=H.min.x,He=H.min.y,Ne=H.isBox3?H.min.z:0;else{const En=Math.pow(2,-z);ge=Math.floor(_t.width*En),Re=Math.floor(_t.height*En),y.isDataArrayTexture?Te=_t.depth:y.isData3DTexture?Te=Math.floor(_t.depth*En):Te=1,Ve=0,He=0,Ne=0}G!==null?(Je=G.x,ct=G.y,Tt=G.z):(Je=0,ct=0,Tt=0);const ft=ce.convert(U.format),Fe=ce.convert(U.type);let Mt;U.isData3DTexture?(ve.setTexture3D(U,0),Mt=b.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ve.setTexture2DArray(U,0),Mt=b.TEXTURE_2D_ARRAY):(ve.setTexture2D(U,0),Mt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=b.getParameter(b.UNPACK_ROW_LENGTH),on=b.getParameter(b.UNPACK_IMAGE_HEIGHT),lr=b.getParameter(b.UNPACK_SKIP_PIXELS),ln=b.getParameter(b.UNPACK_SKIP_ROWS),ts=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,_t.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,_t.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ve),b.pixelStorei(b.UNPACK_SKIP_ROWS,He),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ne);const vt=y.isDataArrayTexture||y.isData3DTexture,yn=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const En=_e.get(y),Xt=_e.get(U),Qt=_e.get(En.__renderTarget),Ya=_e.get(Xt.__renderTarget);oe.bindFramebuffer(b.READ_FRAMEBUFFER,Qt.__webglFramebuffer),oe.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let Ni=0;Ni<Te;Ni++)vt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,z,Ne+Ni),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_e.get(U).__webglTexture,re,Tt+Ni)),b.blitFramebuffer(Ve,He,ge,Re,Je,ct,ge,Re,b.DEPTH_BUFFER_BIT,b.NEAREST);oe.bindFramebuffer(b.READ_FRAMEBUFFER,null),oe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||_e.has(y)){const En=_e.get(y),Xt=_e.get(U);oe.bindFramebuffer(b.READ_FRAMEBUFFER,ld),oe.bindFramebuffer(b.DRAW_FRAMEBUFFER,cd);for(let Qt=0;Qt<Te;Qt++)vt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,En.__webglTexture,z,Ne+Qt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,En.__webglTexture,z),yn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Xt.__webglTexture,re,Tt+Qt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Xt.__webglTexture,re),z!==0?b.blitFramebuffer(Ve,He,ge,Re,Je,ct,ge,Re,b.COLOR_BUFFER_BIT,b.NEAREST):yn?b.copyTexSubImage3D(Mt,re,Je,ct,Tt+Qt,Ve,He,ge,Re):b.copyTexSubImage2D(Mt,re,Je,ct,Ve,He,ge,Re);oe.bindFramebuffer(b.READ_FRAMEBUFFER,null),oe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else yn?y.isDataTexture||y.isData3DTexture?b.texSubImage3D(Mt,re,Je,ct,Tt,ge,Re,Te,ft,Fe,_t.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(Mt,re,Je,ct,Tt,ge,Re,Te,ft,_t.data):b.texSubImage3D(Mt,re,Je,ct,Tt,ge,Re,Te,ft,Fe,_t):y.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,re,Je,ct,ge,Re,ft,Fe,_t.data):y.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,re,Je,ct,_t.width,_t.height,ft,_t.data):b.texSubImage2D(b.TEXTURE_2D,re,Je,ct,ge,Re,ft,Fe,_t);b.pixelStorei(b.UNPACK_ROW_LENGTH,rt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,on),b.pixelStorei(b.UNPACK_SKIP_PIXELS,lr),b.pixelStorei(b.UNPACK_SKIP_ROWS,ln),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ts),re===0&&U.generateMipmaps&&b.generateMipmap(Mt),oe.unbindTexture()},this.copyTextureToTexture3D=function(y,U,H=null,G=null,z=0){return Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,H,G,z)},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&ve.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ve.setTextureCube(y,0):y.isData3DTexture?ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ve.setTexture2DArray(y,0):ve.setTexture2D(y,0),oe.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,oe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class fM extends Bf{constructor(){super();const e=new Qr;e.deleteAttribute("uv");const t=new zl({side:$t}),n=new zl,i=new Hf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new It(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new zf(e,n,6),o=new Wt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new It(e,Ar(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new It(e,Ar(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new It(e,Ar(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new It(e,Ar(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new It(e,Ar(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new It(e,Ar(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ar(r){const e=new yc;return e.color.setScalar(r),e}const dM=rh({__name:"Ballpit",props:{className:{default:""},followCursor:{type:Boolean,default:!0},count:{default:200},colors:{default:()=>[0,0,0]},ambientColor:{default:16777215},ambientIntensity:{default:1},lightIntensity:{default:200},materialParams:{default:()=>({metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15})},minSize:{default:.5},maxSize:{default:1},size0:{default:1},gravity:{default:.5},friction:{default:.9975},wallBounce:{default:.95},maxVelocity:{default:.15},maxX:{default:5},maxY:{default:5},maxZ:{default:2},controlSphere0:{type:Boolean,default:!1}},setup(r){var M,R,w,C,P,v,S,D,k,N,O,Kf,Zf,jf,$f,ba,Jf,Gl,Qf,ed,Wl,Xl,Aa,Yl,td,Ye,nd,$e,id;lf.registerPlugin(Xn);const e=r,t=Wi("canvasRef"),n=oh(null);class i{constructor(b){en(this,O);en(this,M);en(this,R);en(this,w);en(this,C);en(this,P);en(this,v);en(this,S);en(this,D);en(this,k);en(this,N);zt(this,R,null),zt(this,v,0),zt(this,S,new w_),zt(this,D,{elapsed:0,delta:0}),zt(this,k,!1),zt(this,N,!1),this.size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0},this.render=gt(this,O,Yl).bind(this),this.onBeforeRender=()=>{},this.onAfterRender=()=>{},this.onAfterResize=()=>{},this.isDisposed=!1,zt(this,M,{...b}),gt(this,O,Kf).call(this),gt(this,O,Zf).call(this),gt(this,O,jf).call(this),this.resize(),gt(this,O,$f).call(this)}resize(){let b,q;tt(this,M).size instanceof Object?(b=tt(this,M).size.width,q=tt(this,M).size.height):tt(this,M).size==="parent"&&this.canvas.parentNode?(b=this.canvas.parentNode.offsetWidth,q=this.canvas.parentNode.offsetHeight):(b=window.innerWidth,q=window.innerHeight),this.size.width=b,this.size.height=q,this.size.ratio=b/q,gt(this,O,Jf).call(this),gt(this,O,Qf).call(this),this.onAfterResize(this.size)}updateWorldSize(){if(this.camera.isPerspectiveCamera){const b=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(b/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else{const b=this.camera;b.isOrthographicCamera&&(this.size.wHeight=b.top-b.bottom,this.size.wWidth=b.right-b.left)}}get postprocessing(){return tt(this,R)}set postprocessing(b){zt(this,R,b),b?this.render=b.render.bind(b):this.render=gt(this,O,Yl).bind(this)}clear(){this.scene.traverse(b=>{const q=b;q.isMesh&&q.material&&q.geometry&&typeof q.material=="object"&&q.material!==null&&(Object.keys(q.material).forEach(se=>{const I=q.material[se];if(I&&typeof I=="object"&&I!==null){const oe=I;typeof oe.dispose=="function"&&oe.dispose()}}),q.material.dispose(),q.geometry.dispose())}),this.scene.clear()}dispose(){var b;gt(this,O,td).call(this),gt(this,O,Aa).call(this),this.clear(),(b=tt(this,R))==null||b.dispose(),this.renderer.dispose(),this.isDisposed=!0}}M=new WeakMap,R=new WeakMap,w=new WeakMap,C=new WeakMap,P=new WeakMap,v=new WeakMap,S=new WeakMap,D=new WeakMap,k=new WeakMap,N=new WeakMap,O=new WeakSet,Kf=function(){this.camera=new dn,this.cameraFov=this.camera.fov},Zf=function(){this.scene=new Bf},jf=function(){if(tt(this,M).canvas)this.canvas=tt(this,M).canvas;else if(tt(this,M).id){const q=document.getElementById(tt(this,M).id);q instanceof HTMLCanvasElement?this.canvas=q:console.error("Three: Missing canvas or id parameter")}else console.error("Three: Missing canvas or id parameter");this.canvas.style.display="block";const b={canvas:this.canvas,powerPreference:"high-performance",...tt(this,M).rendererOptions??{}};this.renderer=new hM(b),this.renderer.outputColorSpace=fn},$f=function(){tt(this,M).size instanceof Object||(window.addEventListener("resize",gt(this,O,ba).bind(this)),tt(this,M).size==="parent"&&this.canvas.parentNode&&(zt(this,w,new ResizeObserver(gt(this,O,ba).bind(this))),tt(this,w).observe(this.canvas.parentNode))),zt(this,C,new IntersectionObserver(gt(this,O,ed).bind(this),{root:null,rootMargin:"0px",threshold:0})),tt(this,C).observe(this.canvas),document.addEventListener("visibilitychange",gt(this,O,Wl).bind(this))},ba=function(){tt(this,P)&&clearTimeout(tt(this,P)),zt(this,P,window.setTimeout(this.resize.bind(this),100))},Jf=function(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?gt(this,O,Gl).call(this,this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?gt(this,O,Gl).call(this,this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()},Gl=function(b){const se=Math.tan(hr.degToRad(this.cameraFov/2))/(this.camera.aspect/b);this.camera.fov=2*hr.radToDeg(Math.atan(se))},Qf=function(){var q;this.renderer.setSize(this.size.width,this.size.height),(q=tt(this,R))==null||q.setSize(this.size.width,this.size.height);let b=window.devicePixelRatio;this.maxPixelRatio&&b>this.maxPixelRatio?b=this.maxPixelRatio:this.minPixelRatio&&b<this.minPixelRatio&&(b=this.minPixelRatio),this.renderer.setPixelRatio(b),this.size.pixelRatio=b},ed=function(b){zt(this,k,b[0].isIntersecting),tt(this,k)?gt(this,O,Xl).call(this):gt(this,O,Aa).call(this)},Wl=function(){tt(this,k)&&(document.hidden?gt(this,O,Aa).call(this):gt(this,O,Xl).call(this))},Xl=function(){if(tt(this,N))return;const b=()=>{zt(this,v,requestAnimationFrame(b)),tt(this,D).delta=tt(this,S).getDelta(),tt(this,D).elapsed+=tt(this,D).delta,this.onBeforeRender(tt(this,D)),this.render(),this.onAfterRender(tt(this,D))};zt(this,N,!0),tt(this,S).start(),b()},Aa=function(){tt(this,N)&&(cancelAnimationFrame(tt(this,v)),zt(this,N,!1),tt(this,S).stop())},Yl=function(){this.renderer.render(this.scene,this.camera)},td=function(){var b,q;window.removeEventListener("resize",gt(this,O,ba).bind(this)),(b=tt(this,w))==null||b.disconnect(),(q=tt(this,C))==null||q.disconnect(),document.removeEventListener("visibilitychange",gt(this,O,Wl).bind(this))};class s{constructor(b){en(this,Ye);this.center=new F,this.config=b,this.positionData=new Float32Array(3*b.count).fill(0),this.velocityData=new Float32Array(3*b.count).fill(0),this.sizeData=new Float32Array(b.count).fill(1),this.center=new F,gt(this,Ye,nd).call(this),this.setSizes()}setSizes(){const{config:b,sizeData:q}=this;q[0]=b.size0;for(let se=1;se<b.count;se++)q[se]=hr.randFloat(b.minSize,b.maxSize)}update(b){const{config:q,center:se,positionData:I,sizeData:oe,velocityData:Le}=this;let _e=0;q.controlSphere0&&(_e=1,new F().fromArray(I,0).lerp(se,.1).toArray(I,0),new F(0,0,0).toArray(Le,0));for(let ve=_e;ve<q.count;ve++){const Ge=3*ve,A=new F().fromArray(I,Ge),x=new F().fromArray(Le,Ge);x.y-=b.delta*q.gravity*oe[ve],x.multiplyScalar(q.friction),x.clampLength(0,q.maxVelocity),A.add(x),A.toArray(I,Ge),x.toArray(Le,Ge)}for(let ve=_e;ve<q.count;ve++){const Ge=3*ve,A=new F().fromArray(I,Ge),x=new F().fromArray(Le,Ge),B=oe[ve];for(let Y=ve+1;Y<q.count;Y++){const X=3*Y,xe=new F().fromArray(I,X),ae=new F().fromArray(Le,X),Se=new F().copy(xe).sub(A),ye=Se.length(),Q=B+oe[Y];if(ye<Q){const pe=Q-ye,De=Se.normalize().multiplyScalar(.5*pe),Ie=De.clone().multiplyScalar(Math.max(x.length(),1));A.sub(De),x.sub(Ie),A.toArray(I,Ge),x.toArray(Le,Ge),xe.add(De),ae.add(De.clone().multiplyScalar(Math.max(ae.length(),1))),xe.toArray(I,X),ae.toArray(Le,X)}}if(q.controlSphere0){const Y=new F().copy(new F().fromArray(I,0)).sub(A),X=Y.length(),xe=B+oe[0];if(X<xe){const ae=Y.normalize().multiplyScalar(xe-X),Se=ae.clone().multiplyScalar(Math.max(x.length(),2));A.sub(ae),x.sub(Se)}}Math.abs(A.x)+B>q.maxX&&(A.x=Math.sign(A.x)*(q.maxX-B),x.x=-x.x*q.wallBounce),q.gravity===0?Math.abs(A.y)+B>q.maxY&&(A.y=Math.sign(A.y)*(q.maxY-B),x.y=-x.y*q.wallBounce):A.y-B<-q.maxY&&(A.y=-q.maxY+B,x.y=-x.y*q.wallBounce);const Z=Math.max(q.maxZ,q.maxSize);Math.abs(A.z)+B>Z&&(A.z=Math.sign(A.z)*(q.maxZ-B),x.z=-x.z*q.wallBounce),A.toArray(I,Ge),x.toArray(Le,Ge)}}}Ye=new WeakSet,nd=function(){const{config:b,positionData:q}=this;this.center.toArray(q,0);for(let se=1;se<b.count;se++){const I=3*se;q[I]=hr.randFloatSpread(2*b.maxX),q[I+1]=hr.randFloatSpread(2*b.maxY),q[I+2]=hr.randFloatSpread(2*b.maxZ)}};class a extends x_{constructor(b){super(b),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines={USE_UV:""},this.onBeforeCompile=q=>{Object.assign(q.uniforms,this.uniforms),q.fragmentShader=`
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
        `);const se=We.lights_fragment_begin.replace(/RE_Direct\( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight \);/g,`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);q.fragmentShader=q.fragmentShader.replace("#include <lights_fragment_begin>",se),this.onBeforeCompile2&&this.onBeforeCompile2(q)}}}const o={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},l=new Wt;let c=!1;const u=new Qe,h=new Map;function f(ue){const b={position:new Qe,nPosition:new Qe,hover:!1,onEnter:()=>{},onMove:()=>{},onClick:()=>{},onLeave:()=>{},...ue};return h.has(ue.domElement)||(h.set(ue.domElement,b),c||(document.body.addEventListener("pointermove",p),document.body.addEventListener("pointerleave",_),document.body.addEventListener("click",g),c=!0)),b.dispose=()=>{h.delete(ue.domElement),h.size===0&&(document.body.removeEventListener("pointermove",p),document.body.removeEventListener("pointerleave",_),document.body.removeEventListener("click",g),c=!1)},b}function p(ue){u.set(ue.clientX,ue.clientY);for(const[b,q]of h){const se=b.getBoundingClientRect();d(se)?(m(q,se),q.hover||(q.hover=!0,q.onEnter(q)),q.onMove(q)):q.hover&&(q.hover=!1,q.onLeave(q))}}function g(ue){u.set(ue.clientX,ue.clientY);for(const[b,q]of h){const se=b.getBoundingClientRect();m(q,se),d(se)&&q.onClick(q)}}function _(){for(const ue of h.values())ue.hover&&(ue.hover=!1,ue.onLeave(ue))}function m(ue,b){ue.position.set(u.x-b.left,u.y-b.top),ue.nPosition.set(ue.position.x/b.width*2-1,-ue.position.y/b.height*2+1)}function d(ue){return u.x>=ue.left&&u.x<=ue.left+ue.width&&u.y>=ue.top&&u.y<=ue.top+ue.height}class T extends zf{constructor(q,se={}){const I={...o,...se},oe=new fM,_e=new Vl(q).fromScene(oe).texture,ve=new Tc,Ge=new a({envMap:_e,...I.materialParams});Ge.envMapRotation.x=-Math.PI/2;super(ve,Ge,I.count);en(this,$e);this.config=I,this.physics=new s(I),gt(this,$e,id).call(this),this.setColors(I.colors)}setColors(q){if(Array.isArray(q)&&q.length>1){const se=function(I){let oe=I,Le=[];return oe.forEach(_e=>{Le.push(new je(_e))}),{setColors:_e=>{oe=_e,Le=[],oe.forEach(ve=>{Le.push(new je(ve))})},getColorAt:(_e,ve=new je)=>{const A=Math.max(0,Math.min(1,_e))*(oe.length-1),x=Math.floor(A),B=Le[x];if(x>=oe.length-1)return B.clone();const Z=A-x,Y=Le[x+1];return ve.r=B.r+Z*(Y.r-B.r),ve.g=B.g+Z*(Y.g-B.g),ve.b=B.b+Z*(Y.b-B.b),ve}}}(q);for(let I=0;I<this.count;I++)this.setColorAt(I,se.getColorAt(I/this.count)),I===0&&this.light.color.copy(se.getColorAt(I/this.count));if(!this.instanceColor)return;this.instanceColor.needsUpdate=!0}}update(q){this.physics.update(q);for(let se=0;se<this.count;se++)l.position.fromArray(this.physics.positionData,3*se),se===0&&this.config.followCursor===!1?l.scale.setScalar(0):l.scale.setScalar(this.physics.sizeData[se]),l.updateMatrix(),this.setMatrixAt(se,l.matrix),se===0&&this.light.position.copy(l.position);this.instanceMatrix.needsUpdate=!0}}$e=new WeakSet,id=function(){this.ambientLight=new b_(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new Hf(this.config.colors[0],this.config.lightIntensity),this.add(this.light)};function E(ue,b={}){const q=new i({canvas:ue,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let se;q.renderer.toneMapping=vf,q.camera.position.set(0,0,20),q.camera.lookAt(0,0,0),q.cameraMaxAspect=1.5,q.resize(),Ge(b);const I=new R_,oe=new _i(new F(0,0,1),0),Le=new F;let _e=!1;const ve=f({domElement:ue,onMove(){I.setFromCamera(ve.nPosition,q.camera),q.camera.getWorldDirection(oe.normal),I.ray.intersectPlane(oe,Le),se.physics.center.copy(Le),se.config.controlSphere0=!0},onLeave(){se.config.controlSphere0=!1}});function Ge(A){se&&(q.clear(),q.scene.remove(se)),se=new T(q.renderer,A),q.scene.add(se)}return q.onBeforeRender=A=>{_e||se.update(A)},q.onAfterResize=A=>{se.config.maxX=A.wWidth/2,se.config.maxY=A.wHeight/2},{three:q,get spheres(){return se},setCount(A){Ge({...se.config,count:A})},togglePause(){_e=!_e},dispose(){var A;(A=ve.dispose)==null||A.call(ve),q.dispose()}}}return sh(()=>{const ue=t.value;if(!ue)return;const{followCursor:b,...q}=e,se={metalness:e.materialParams.metalness??.5,roughness:e.materialParams.roughness??.5,clearcoat:e.materialParams.clearcoat??1,clearcoatRoughness:e.materialParams.clearcoatRoughness??.15};n.value=E(ue,{...q,followCursor:b,materialParams:se})}),ah(()=>{n.value&&n.value.dispose()}),(ue,b)=>(at(),ot("canvas",{ref_key:"canvasRef",ref:t,class:Es(["w-full","h-full",e.className])},null,2))}}),pM={class:"w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10",xmlns:"http://www.w3.org/2000/svg"},mM={class:"w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10"},_M="relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out",ih=rh({__name:"GlassSurface",props:{width:{default:"200px"},height:{default:"200px"},borderRadius:{default:20},borderWidth:{default:.07},brightness:{default:70},opacity:{default:.93},blur:{default:11},displace:{default:.5},backgroundOpacity:{default:0},saturation:{default:1},distortionScale:{default:-180},redOffset:{default:0},greenOffset:{default:10},blueOffset:{default:20},xChannel:{default:"R"},yChannel:{default:"G"},mixBlendMode:{default:"difference"},className:{default:""},style:{default:()=>({})}},setup(r){const e=r,t=oh(!1),n=()=>{if(typeof window>"u")return;const P=window.matchMedia("(prefers-color-scheme: dark)");t.value=P.matches;const v=S=>{t.value=S.matches};return P.addEventListener("change",v),()=>P.removeEventListener("change",v)},s=Math.random().toString(36).substring(2,15),a=`glass-filter-${s}`,o=`red-grad-${s}`,l=`blue-grad-${s}`,c=Wi("containerRef"),u=Wi("feImageRef"),h=Wi("redChannelRef"),f=Wi("greenChannelRef"),p=Wi("blueChannelRef"),g=Wi("gaussianBlurRef");let _=null;const m=()=>{var N;const P=(N=c.value)==null?void 0:N.getBoundingClientRect(),v=(P==null?void 0:P.width)||400,S=(P==null?void 0:P.height)||200,D=Math.min(v,S)*(e.borderWidth*.5),k=`
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
        <rect x="0" y="0" width="${v}" height="${S}" rx="${e.borderRadius}" fill="url(#${o})" />
        <rect x="0" y="0" width="${v}" height="${S}" rx="${e.borderRadius}" fill="url(#${l})" style="mix-blend-mode: ${e.mixBlendMode}" />
        <rect x="${D}" y="${D}" width="${v-D*2}" height="${S-D*2}" rx="${e.borderRadius}" fill="hsl(0 0% ${e.brightness}% / ${e.opacity})" style="filter:blur(${e.blur}px)" />
      </svg>
    `;return`data:image/svg+xml,${encodeURIComponent(k)}`},d=()=>{u.value&&u.value.setAttribute("href",m())},T=()=>{if(typeof window>"u"||typeof navigator>"u")return!1;const P=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),v=/Firefox/.test(navigator.userAgent);if(P||v)return!1;const S=document.createElement("div");return S.style.backdropFilter=`url(#${a})`,S.style.backdropFilter!==""},E=()=>typeof window>"u"?!1:CSS.supports("backdrop-filter","blur(10px)"),M=Fo(()=>{const P={...e.style,width:typeof e.width=="number"?`${e.width}px`:e.width,height:typeof e.height=="number"?`${e.height}px`:e.height,borderRadius:`${e.borderRadius}px`,"--glass-frost":e.backgroundOpacity,"--glass-saturation":e.saturation},v=T(),S=E();return v?{...P,background:t.value?`hsl(0 0% 0% / ${e.backgroundOpacity})`:`hsl(0 0% 100% / ${e.backgroundOpacity})`,backdropFilter:`url(#${a}) saturate(${e.saturation})`,boxShadow:t.value?`0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
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
           0px 16px 56px rgba(17, 17, 26, 0.05) inset`}:t.value?S?{...P,background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(12px) saturate(1.8) brightness(1.2)",WebkitBackdropFilter:"blur(12px) saturate(1.8) brightness(1.2)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`}:{...P,background:"rgba(0, 0, 0, 0.4)",border:"1px solid rgba(255, 255, 255, 0.2)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                      inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`}:S?{...P,background:"rgba(255, 255, 255, 0.25)",backdropFilter:"blur(12px) saturate(1.8) brightness(1.1)",WebkitBackdropFilter:"blur(12px) saturate(1.8) brightness(1.1)",border:"1px solid rgba(255, 255, 255, 0.3)",boxShadow:`0 8px 32px 0 rgba(31, 38, 135, 0.2),
                      0 2px 16px 0 rgba(31, 38, 135, 0.1),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                      inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)`}:{...P,background:"rgba(255, 255, 255, 0.4)",border:"1px solid rgba(255, 255, 255, 0.3)",boxShadow:`inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                      inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)`}}),R=Fo(()=>t.value?"focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2":"focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2"),w=()=>{[{ref:h,offset:e.redOffset},{ref:f,offset:e.greenOffset},{ref:p,offset:e.blueOffset}].forEach(({ref:v,offset:S})=>{v.value&&(v.value.setAttribute("scale",(e.distortionScale+S).toString()),v.value.setAttribute("xChannelSelector",e.xChannel),v.value.setAttribute("yChannelSelector",e.yChannel))}),g.value&&g.value.setAttribute("stdDeviation",e.displace.toString())},C=()=>{!c.value||typeof ResizeObserver>"u"||(_=new ResizeObserver(()=>{setTimeout(d,0)}),_.observe(c.value))};return Lc([()=>e.width,()=>e.height,()=>e.borderRadius,()=>e.borderWidth,()=>e.brightness,()=>e.opacity,()=>e.blur,()=>e.displace,()=>e.distortionScale,()=>e.redOffset,()=>e.greenOffset,()=>e.blueOffset,()=>e.xChannel,()=>e.yChannel,()=>e.mixBlendMode],()=>{d(),w()}),Lc([()=>e.width,()=>e.height],()=>{setTimeout(d,0)}),sh(()=>{const P=n();ud(()=>{d(),w(),C()}),ah(()=>{P&&P(),_&&_.disconnect()})}),(P,v)=>(at(),ot("div",{ref_key:"containerRef",ref:c,class:Es([_M,R.value,r.className]),style:lh(M.value)},[(at(),ot("svg",pM,[ee("defs",null,[ee("filter",{id:a,"color-interpolation-filters":"sRGB",x:"0%",y:"0%",width:"100%",height:"100%"},[ee("feImage",{ref_key:"feImageRef",ref:u,x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none",result:"map"},null,512),ee("feDisplacementMap",{ref_key:"redChannelRef",ref:h,in:"SourceGraphic",in2:"map",id:"redchannel",result:"dispRed"},null,512),v[0]||(v[0]=ee("feColorMatrix",{in:"dispRed",type:"matrix",values:`1 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0`,result:"red"},null,-1)),ee("feDisplacementMap",{ref_key:"greenChannelRef",ref:f,in:"SourceGraphic",in2:"map",id:"greenchannel",result:"dispGreen"},null,512),v[1]||(v[1]=ee("feColorMatrix",{in:"dispGreen",type:"matrix",values:`0 0 0 0 0
                    0 1 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0`,result:"green"},null,-1)),ee("feDisplacementMap",{ref_key:"blueChannelRef",ref:p,in:"SourceGraphic",in2:"map",id:"bluechannel",result:"dispBlue"},null,512),v[2]||(v[2]=ee("feColorMatrix",{in:"dispBlue",type:"matrix",values:`0 0 0 0 0
                    0 0 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0`,result:"blue"},null,-1)),v[3]||(v[3]=ee("feBlend",{in:"red",in2:"green",mode:"screen",result:"rg"},null,-1)),v[4]||(v[4]=ee("feBlend",{in:"rg",in2:"blue",mode:"screen",result:"output"},null,-1)),ee("feGaussianBlur",{ref_key:"gaussianBlurRef",ref:g,in:"output",stdDeviation:"0.7"},null,512)])])])),ee("div",mM,[hd(P.$slots,"default")])],6))}}),gM={class:"relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-24 pb-16 sm:pt-32 sm:pb-24 dark:from-neutral-950 dark:via-neutral-950 dark:to-primary-950/20"},vM={class:"absolute inset-0 z-0","aria-hidden":"true"},xM={class:"section-container relative z-10"},MM={class:"flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16"},SM={class:"flex-1 text-center lg:text-left"},yM={class:"mb-3 text-sm font-semibold uppercase tracking-widest text-primary-600 animate-fade-in"},EM={class:"font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-slide-up dark:text-white"},TM={class:"mt-6 max-w-xl text-lg leading-relaxed text-gray-600 animate-slide-up dark:text-gray-400",style:{"animation-delay":"0.1s"}},bM={class:"mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start animate-slide-up",style:{"animation-delay":"0.2s"}},AM={href:"/cv.pdf",download:"",class:"flex items-center gap-2 px-6 py-3 font-semibold text-gray-700 dark:text-gray-300"},wM={class:"flex-shrink-0 animate-fade-in"},RM={class:"relative"},CM=["src","alt"],PM={__name:"HeroSection",setup(r){const{t:e}=sr(),t=fd(),n=Fo(()=>t.isDark?[3900150,6514417,9133302]:[3900150,6333946,9684477]);return(i,s)=>{const a=dd("router-link");return at(),ot("section",gM,[ee("div",vM,[In(dM,{count:80,colors:n.value,"ambient-color":ze(t).isDark?1120295:16777215,"ambient-intensity":.5,"light-intensity":100,"min-size":.4,"max-size":1.2,gravity:.3,friction:.99,"wall-bounce":.9,"max-velocity":.1,"follow-cursor":!1,"material-params":{metalness:.3,roughness:.6,clearcoat:1,clearcoatRoughness:.1},class:"h-full w-full opacity-40 dark:opacity-30"},null,8,["colors","ambient-color"])]),ee("div",xM,[ee("div",MM,[ee("div",SM,[ee("p",yM,Ke(ze(e)("hero.role")),1),ee("h1",EM,Ke(ze(Lr).name),1),ee("p",TM,Ke(ze(e)("hero.shortBio")),1),ee("div",bM,[In(ih,{width:"auto",height:"auto","border-radius":12,brightness:80,opacity:.9,blur:14,"background-opacity":.15,class:"cursor-pointer transition-transform hover:scale-105"},{default:Ka(()=>[In(a,{to:"/projects",class:"flex items-center gap-2 px-6 py-3 font-semibold text-primary-700 dark:text-primary-300"},{default:Ka(()=>[Oo(Ke(ze(e)("hero.viewProjects"))+" ",1),s[0]||(s[0]=ee("svg",{class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})],-1))]),_:1})]),_:1}),In(ih,{width:"auto",height:"auto","border-radius":12,brightness:70,opacity:.85,blur:14,"background-opacity":.1,class:"cursor-pointer transition-transform hover:scale-105"},{default:Ka(()=>[ee("a",AM,[s[1]||(s[1]=ee("svg",{class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})],-1)),Oo(" "+Ke(ze(e)("hero.downloadCv")),1)])]),_:1})])]),ee("div",wM,[ee("div",RM,[s[2]||(s[2]=ee("div",{class:"absolute -inset-1 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-2xl"},null,-1)),ee("img",{src:ze(Lr).photo,alt:`Photo of ${ze(Lr).name}`,class:"relative h-56 w-56 rounded-full border-4 border-white object-cover shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80 dark:border-neutral-800",loading:"eager"},null,8,CM)])])])])])}}},DM={id:"about",class:"py-20"},LM={class:"section-container"},IM={class:"mx-auto max-w-3xl text-center"},UM={class:"section-title"},NM={class:"mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400"},FM={__name:"AboutSection",setup(r){const{t:e}=sr();return(t,n)=>(at(),ot("section",DM,[ee("div",LM,[ee("div",IM,[ee("h2",UM,Ke(ze(e)("about.title")),1),ee("p",NM,Ke(ze(e)("about.bio")),1)])])]))}},OM={id:"interests",class:"bg-gray-50/50 py-20 dark:bg-neutral-900/50"},BM={class:"section-container"},zM={class:"text-center"},kM={class:"section-title"},VM={class:"section-subtitle"},HM={class:"mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"},GM={class:"mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/30"},WM=["innerHTML"],XM={class:"mt-4 font-display text-lg font-semibold text-gray-900 dark:text-white"},YM={class:"mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400"},qM={__name:"InterestsSection",setup(r){const{t:e}=sr(),t={strategy:'<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />',transform:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />',agile:'<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />',data:'<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />'};return(n,i)=>(at(),ot("section",OM,[ee("div",BM,[ee("div",zM,[ee("h2",kM,Ke(ze(e)("interests.title")),1),ee("p",VM,Ke(ze(e)("interests.subtitle")),1)]),ee("div",HM,[(at(!0),ot(ii,null,ri(ze(Lr).interestIds,s=>(at(),ot("div",{key:s,class:"card group text-center"},[ee("div",GM,[(at(),ot("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",innerHTML:t[s]},null,8,WM))]),ee("h3",XM,Ke(ze(e)(`interests.items.${s}.title`)),1),ee("p",YM,Ke(ze(e)(`interests.items.${s}.description`)),1)]))),128))])])]))}},KM={id:"education",class:"py-20"},ZM={class:"section-container"},jM={class:"text-center"},$M={class:"section-title"},JM={class:"mx-auto mt-12 max-w-2xl"},QM={class:"font-display text-lg font-semibold text-gray-900 dark:text-white"},eS={class:"mt-1 font-medium text-primary-600 dark:text-primary-400"},tS={class:"mt-1 text-sm text-gray-400"},nS={class:"mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400"},iS={__name:"EducationSection",setup(r){const{t:e}=sr();return(t,n)=>(at(),ot("section",KM,[ee("div",ZM,[ee("div",jM,[ee("h2",$M,Ke(ze(e)("education.title")),1)]),ee("div",JM,[(at(!0),ot(ii,null,ri(ze(Lr).educationIds,i=>(at(),ot("div",{key:i,class:"card flex items-start gap-5"},[n[0]||(n[0]=ee("div",{class:"flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/30"},[ee("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"})])],-1)),ee("div",null,[ee("h3",QM,Ke(ze(e)(`education.items.${i}.degree`)),1),ee("p",eS,Ke(ze(e)(`education.items.${i}.institution`)),1),ee("p",tS,Ke(ze(Lr).educationPeriods[i]),1),ee("p",nS,Ke(ze(e)(`education.items.${i}.description`)),1)])]))),128))])])]))}},rS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX+ERv////+AAD8///7AAD7t7f3lpj+DRj4AAD+AxP/AAD43t37AAn4y8j+AAf9//32ra7+9fb7Ji77+fj3Mzf6f4D85+j2SE34wsT8Nz320ND6+vf72tj6ICb3T1H6R0z2oaP2aWv2c3fyrq72goX4jpD1YGb56+v3vr31kZX6fHz4QEb3aGn4iYv2en/1m532bHL3ur/8nKL0W130paj37ejyJS3xion2r6v4Iij4YWD8ysz22dz45+L43tnykY/tQDJtAAAL3klEQVR4nO2be1/iOhPHSyaaREq5FMtl5Q6idgE9Kns4umff/7s6kzZpC7S4u0/Vc57PfP9QacM0vySdZCbRcQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIP6vcVkhar+kUHFZT4m3jArlRUXdU0UL7AmPeb8nJR91vzkvYPM1K9HlIvy6Go/H59Nhi5+06fHBcL0Zjzerycjh+dUVHhejibG3czMVGqyepm7ud34P9lCBImYsKXYhJ2cBlqxUdPHmuFiiYO70ZRmV1EWX3bXDjjuSyclDkDyoucEnxYXE4HvwCjeyPIX8rFJIwyp05TyAzA2YuI6QPG8Ecnm7PDDT3MiDBnHlaq8QXGOnxfZYoz49+xPuy+vFn1Ao2FfTJ5YAhy+vjtVRNRSfNqF+aAf8abY1BLs/sFfFFpDVjYv2+Kt/vX6Bc3Zo+h0VKtWA/evwgzlqCFAdHvbN4AZyLUFDJhKVc/hIWHBHPUKl2uEOf/AXsz7cfWAfqtbr4XV/K6LvwZf7vab2wiBfIBZ9cY1Ed1s9bLBmSwh+ow1PuGj7AQR/v+mty1OoBoevVQUeuCNavv4L1ple5J0vRQK1xLgX3e3ysBDM0F7bj7zYlKv2WW0sVFF9S1conH2XEPnHoXLYIq4nTJNe5MMvmXL4okFUPrn0pBtDYIPV9+zhjxHaOzf27rlgLNeH/c8K/eohwYYJ+ZLVF/Qbfzx1a1z7GXPJ75jmVu1M50CzP14sxt3sgISJhw64n70S1BqbcfcGu9ANbDXCErtvX2FNuodg0/6wFapX4GbocL0GQYHuddI9QTz6hLyyVwCC+Y7Ha5pOAxLfuhwItknl1R+GTlQIe8y9T4RXS5wKDxTm+GcVpl693+MiGTzePLkO8ezPNumVlfRsScXbV+k4ZWHag7U2T1dr3rf0xm15E8XbClk36Zax3Bs97PE56d220mM06cFgdJEtqXgXbK+pl6TUhu/Z449Ne0t76o9SqJImh/PDZRoLm7bRtcvldiKE79uDqUy4/fhOd9hJOmpxZG9kJcYu6WMU8pkVeHbs3byhrRFOZyq0Jf3tkadQW2wMuAl5NOfFjXIsgj/a5sT3tSx1keETCoVvnylznnlh3zycFLld9sAkb7DP63/uGL51vin1Pdfek9U/LTV6OqHQndhWnea9/OlUWePCOvtu/gjb6jHAp0kz5K7JkrXFTam+JqMww4UOeNjYVGiZX+3E9S/FyNb9MX82i7qMN2z5AntjM+sHb4fYv0CicNnIMGu0cOl5dfrVVyM7rNpm8oCTk5k0q4TKpsBe8maX6k3zV21Q72E7mnU0PBYs9GVge872zvjE+EpH9bCgo11boOiBv0W+wrqPClvGf6Pagu/WTKOvH0xb3J3wEaJn5pf6sbs19vrm8esyXU2xQtUzrrS5Kxg0zHrQhZnJ4euJxlehsbccFJRgD+bxi3+dwvOaGa7XpxSOEoVF9mxdSozwT47StqnRl6IXn9mFzMqs7k6PUtuHfqvAHreBzOqDFNr5Scdv+d+1IdS9MXIyvSJ21pEUBUjczqol5qEKI2BUmApYXeR+FV2RKd05NyX7p5aU1vUWORKxtfaKmvS3sArhub9HW6SRRUG9valtj8FjpmEKkeZtzQ1jtL218Ve+8y7zYU3yLPgMb2VuQTu33olzf5U7u4LdnBimbGHt5buuJP7vv9eq7fCWSAKGh7xHukkwMObcdo+/K+5ENbKZ8LO8QcGu7eP++CiFybINl8o5VZI2LwND5d3Zki8n1m3Jiw1/5QSj7rO1UepreFrh2vZSMzx0DiKNefE1xRWZ/TQuTpSxudXw3DuyJ20qoFL7uAgYu8ncrDyH+7eVTHww3GNt2W2SaHmShV0gk7zAsrcvQ0nbYPWTy4bf4KRCb21VgJ+N6QQbWC+j/Yy+kjYG9Le8IPzhSQIL/OzWnbjY9pOc18kZp2yFqXvDIFHqPU2Nywdpj1Ugnr9Tv6OT2KErWV5PJG+2zkLqaELbk3xwnibqChz3eylUNh6owIKhc52MeuHj/MZP89Zgk398nJEI1ZvbaU5Nk9V3pTLn+Cm21/XT5Dh8KzmZ+IZCh9tUbV1gSPyAo9VPhegKda3vFG5t/041zyAzmYy676K9bgWa+/YqNyWP0TcVov+La4BTmBhEmyd7Feqnb5zNGlqFV7kGzYYH/IlDYldHv5L9Ctpzy02W/oTC2DvUo92T28oh/WzSTMiXbH3zFTp8FbWTXveO4dDeS14S7r0VOmzSjOc8ebg7CLP9Cgm+ybyLBQpx4Pu6adCNPR+Yg0apm072eW8qdNj2BS49x/16ILA5PXpn+PA1cb5FCh3e7sPUdbz7Q3uT9xCYxtXFCh3FJxi07m204cB9cnOCIMXXgdltKlSIhb5imM+zry26sLEsNRGc8BN9iLjRujlToeB8UOD0uLw+i2b/XF9qQP+kDwKkBtFe2bOEhTX8psZ/y02L1rTRry6by+C1uxrKi+IB5XK3M100NqdnbrQ30/aawdUN2ss5c1MSYmB56xHCZVxhOYdz761lh/IYf2t1KVwe2ROcH54vKxdh+enCZT+8RHsE8d8GA6P4hVAWe1mlJXQRoTIIJ/2RsXT03U9HMNkbhoorRzidYUxPT8CiNex04tye2OHFgRDtToaegz9aAn9sE1s9/CT0tC7DYc/5dzgStm0sffCbDzpVYU99+tUJj1KYzSgJL3gDL/7BMqdKdFJmh6HdpXwFsMkV4eKHLndYb/aMgREGV+81k/88AqMHk4rVZ2OCpPr4ybtMFA70XtvSuUjP/CCN3ZdK5ZJf4p8mF+xe4zf/cvltbHPqLss+H/PrxJXxdSgKlZkMMHZ9qfX7S6jDHUsUslVcYzbv12o1XJY18Vd/3tIKPYnfNYdR9e5KIPlYt1C9uZRrgBMHij8E9xqlNDdhK5zr5eQ3VHgXHcXqA+gKGoUm19nnrs6I30DlJUqNtyOFFw1soih2FTtsiEUUyT9/C1tbiYE/HMcgH4p3pdOhTAnFdlWAJ1Q414v86JTTFsdfpFB18JPex4j2b1kX4qxmtAN36UVHi+a6EzFCBHAUGgnaaFOIHo764FPdTXQ84DEeYV74pDeIYoVCn6Z5vDN9qHdpAulH2YdjhXrTBfRR5igjesbvcVh04ljI6xSeLvkg0DfCqx1FCiMGq9DDfoHQvIf6wCzcshlA0xE5CvkUu+5ROR4OTxjqYyVJ1pPhOM05AvVx6Ah4lt0fxFG1xhdM7jBar0ujkJ/ji9b2Otg3Wv6RQkdn9c+4IzGqfdX7NJBsQl2MAV4+052iQmjsK6xHESNExyVjhUJvbna50GH5Fc9TqE/7+C13FDWB9qdja1MfDnv5zD7UTXyVrUBg84UAfW4U6hQNXHPG76OdphyF2i/Bgj+hY4oPPyUpA17b+9eUj0f/FwAMM54gmfGbY+GYGV/XMpDTs8ZZfO48Z5TqkTnVmxc4L7r32EphbNMN6/Uy/z/k1xEKJ7rvuzTKxj6cTfU+QlUqo9CNOshuw/u4jD1WiN28jI7mhSo6rl75e6CjW+b8Xfpxyl/FneidoPnO7p2jwkumk7X6nw5ihfoIH8jkpOKK5Sh0+POYo3OKfKge3KD3qgdrfZR4/cmLmjj1nKytsKfQXUYHum6ZF8348SQ3vLy7u5uirwl4nkL2YxSazUR99hbgkn+Ptk1hVvbZ9F9GTwXab8af4vlQ6d9wHXmagZ7Ah0p5iN5sh+GeQrg0eU59pHhpli/8aelM4v91++xlqYaFD3WzctYHCKMpz21/wUlcH6v0B68VeDX6hfqO05veoIiGo+iBWSDoJamfWWXzLe/rIKw7/PTQQqMwAu6Z9zAcjaKltrsdjUa93WgUOvhHy3oi1cZPqoe34vIjU1wr7Iw66aE8IdzeqCffN1H4KyRpiCQjEWUtokzEcZIiyXlk74m9cv+uLAZBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEMR/hH8AkaTOZsbPT2IAAAAASUVORK5CYII=",sS="/assets/cmpl-Bg5Vbfhj.png",aS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX///+twybf3iirwh2nvwDtZQDtZgDubR3ubBjubiCqwRSpwArtahLi4CilvgC/0GXynXXd3AD6+/KxxjLi6b3y9d+5y0396+P0o33+9O739/f09+XsXQDwgkTxiVL6+/HT2CfE1HH1sZH85Njp6enW3rTCzybX2ifZ46bP24/97eb50L3vdSne3t6ctADt8taxwWe6x37d5MKFnQCzwXG5yia1yUHM2Yff57Xp7s3m7cf62cr1r4/3wKf4xrDxhUqqqquWlpd+fn9tbm9aW13FxsafoKGsv0i7zl3h6KupvE3k407p52yhtzHv7ZP187vEz5LM1aPM1lPo53zv76jl5GGpuVebrjPh4EKVrADO24vyk2K/v8BRUlOJiYgqKi6zcF0dAAAI9ElEQVR4nO2bC1viSBZAKySBvIjybAMo8hABxQgoDxUaRWinZ8bWXVfX0XX//7/YeytAo7bi9KpY/d1jE0Iq+NXpW3VvBSJjBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ8yFaKrXS8+7EW/JFKRRMuzTvbrwh24YvuL4QX5h3P96QL4Wgz1c8ycy7H29HcgsUQ7/Ff2HFta1ViGI03px3R96Oqunz+UJRSeR0E36++esuBNHXlgVWTD7fnMapGPS17eL7dOf1CcdmnFDDqRj8vW233qU/r09sliHbMWCYBv+I2u579Of1cWcasj9xKoZOi/bsUz8iLzCs4VT0hb5lzBlZ6WPitmEzY3V9ZqxjzdhbiIio6K6xmYbsi+zDuRhrxN+jS69M7Aw24RklI8bHadAXUwRc3IS3cduecVbVWOUJ1RWxLH7Fzdqss/7k4zR0+pu99/ZdemUuMZnONPTyKSTUpiJczTg/h00SFZ9NlNvyqpdt/iGLllDdS9zy2fhsSvXGadCXLAiXUK9RbA2XZM8uy869cRr8Z6wgWkLdwXrBZqfUK2mdZ5uLCzP6Hv16PdbquK1iSayln5mN51v8UtEXSv6hzKifH4xwvQbbJK8akHXCT83G2Jbk41PxXywkvV/3XoMdL9egZwxyavIJxdq1N0x9ofa3gliX/LE6zr/wNe6fw/hzfzxQt7dGhhBEny3WOL28wm21itsdeKz9SPHsWvJGKSiyi4JYHzDW+ExkdVytJDGpnj06xf0Kgqsjw1DYDRnv3Mf/kysexBofpzXUO7sfxdol+O2uB8eG6XBIsMVbrY5LN3aJQ5RVcX9nSrF2dS1LkjT2wxiCoWAr8K91zBzpOl+Bb+N2Z7TASZ9fbUmciWHw38wNiVb13TqvGLU697pCxSoOw1j1ekv2BKXVySD9xk59wn3ytlPn2aXKY8m2vZK45g1P6b5i6JTFQrvKHDv7U4SveSZll9XxkdjZNQzP3d0pxQJcWoSCFywZXDfEqhbIef1q6lX4HMO3W5j2A+SC74Kx09CqHJlbR3+e72u1cG0Hw1d45Kc0iowVV1d37bhoV8HToB6EDzwe+UVZuGQYsh0R9SsMiN7aSM+3Kj30y7jMzSgGFxWV2vY15s7CevChn6FkkmwvrshC+7HqNabLVV9w/dH4bKaTpQj6ncz6YPUjU9vi5SDoKzwMYDMZPYHhaZgZsdaiD9mWsaQ/GqBSpJSRTQhfpCj63VFf5F0QvBdA2Wg0YCtD+E4Enn5jMnIhGJyagSCWiRYjmGYaRZHL34SWWfguKBvGQkaKGIahSE3R1thPETZ3x3PQUOIttyRLsqlkRE6eD2kao9oQKSahtpuKmRF37fJjInipZGTcdFGybTMj2EX8Swg3oKg3i3Hblkq/0uCcptVQbOWkJdZnoX+T8C9RFwiCIAjip9mLRqNtXg7TsGCLjRdtbddrAvhKINyOCnqp37RNE1bbf4GDYpfS9ugOtpZtu0VsgkYFrvL/MmBNHhfygmpBlgzTkMwTllTkhbQieXcjNGSlzZvA0E6zjAK7sqyI+InGgmwUo0VDUlppMEQz/OCircgN3rTHR2kUBIvRE1kW7r4ohoZ4l0zblE+4YcvkFhnZbI2amPcSrzoikmB3KnBAAzJI2JDj3JBJEmilTRysC3BRVSrhhzVx2Ux75wo4Ez3D9MSwaBglVjKMJp+ismEoJTSEg3CSJOJEfGgIucZIQyBdbgiJFP+kJA45J7IALeJ9fTgZpfLYkEE+wX+8yWy5/M8W4vhBB/iK+PXhOIbmxLCtgAtPqF4TgjGUJEOse77GcI1wBibayBB1oFSw+4YyFBRZzL+bhckWiRgQtXRyZNgyR9HiTUATc2nYhWnYmG9ff44Fg39DYbRZ0ja8IJmjOug1ybKdjBuQRF1DFu5eE6TdgCg1mlgFMhFPoBXx1qZug4cwkmF7EbwDOink384QhAA4B93J/ka2U/b2cp3sPj4nOvzpU8fBp/2sd5S3Z7MHG/wXwLs+vWOH/zaLampspfotK3UAe86yalmqnmNsSU2hm6Z+Bs1NPLqJZy+lLCQFvl3+rsU5GsxiUVO9CDh+XfP7dRUCs6wF/H5N95exFQ31wDJzAgFo1wKbjGVV3Q+oVpltqLoF7/IvzdfiOSaGHUtbZBsWuHT8gZWys2hZS9OGWWh3nBvN32G6ru0zx8GWTd3fcXKbupqbq8VzTAyX+M6mrrGbgB8PbUK4pgyXAxqeZmk3zAqsjN5dVjWMXteyOnPp/Uv4geFKwI9anwM6tFqdbreDhigMBAKfQdZa6nYxz+T8VhaeNrynj8mUoX+/7EwZLnNDHVOKrt8z3FcDmmX5YagKZqj7VVV/ZAgH1QeGLLcMRy1ddT4JZqhhtB4Y+nOOU34wSgHIMweWlS2rQhh69XBJ05YOso8MJ5nGO1rGjOvhYJZRAzewm7X83Sd+//xZ1LSDTqfTxUxTvpdpHhhC5dvsdqAuQJnfQOC0DrvRrJuNA0vXnHmLPMkiH5xWquPl0oBufTfUxoYBMGQrfsg6unqDSxos+AFNT7CcBasDLaB+3BBCaDz2uykrwdhNaoUdpJaxZQl2Oyk++VZSWPWyFqQXrHvZFH/LDco7N5B0lvfnaDATp4xAZz/xgZYbPca7zmQX1uG5cQsyHpdO7kMvvIlfgUpi9Mgzlq/AA38GFWxKeC8TicogwV9UKhXe7p1YmXfXX8Zhr89uD/tscHiUT/QPb9kx/BwOB9jWPxzAi35+cHSbyGPb7X8GrM/uEpWju0GifzeYd+dfRP/2mA3Bste7y1duE4dg0GfDPnY+0e/1oO2QDY6HbNDL38HZjB2xw8Qt/Bfk+8PbeXf+RRzDABz2jlmvf8TyR8c9ONBnh7c4Arlh4r8VNriDxxANjxm7g/bbfp8JY4i9HCQGMBVhb9CDeTbMs8qwx/jxCj8hPxzm8xU4CV8khhWYs4NEYiDKRCQIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIQmj+B+IO9J2XJhE1AAAAAElFTkSuQmCC",oS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADgCAMAAAApBkruAAAAhFBMVEX///8AAAD+/v4VFRWvr6/Y2NjAwMCZmZmAgIDJycmRkZH7+/vT09PR0dGWlpaOjo7s7Oz19fXf39/n5+e4uLifn5+GhoYpKSnq6up2dnZwcHBRUVGrq6t8fHylpaUbGxtCQkJJSUlfX18PDw8wMDBoaGhZWVkhISE2NjZFRUU7OztVVVVUQJkKAAANfklEQVR4nO1caXviug52XAgEE7JBWvaWZdpp////u17iRHIcCCXz3PNB7zmdKfESv7YsS7IYxggEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKB4IBzxv9Ft/+gz/8U5Lz9d0iqwQw/Gs7+jWz8DkKIfzAaITj/73AMy+H7FIeQieG7fQz1ZuGbIP3FMt5ukV822XCywXk2Hxuov+dz+b8Xto6uFWdakORPGgRLs3P0kN7iCrDlvHqi/hwXGbcsqw3HnQExNgq+x0MRVG85BA7eT9NkMXGwekd1xnaEuyCQM67PDvU5rhquTqDyZqUeyZJZufl5CYLjn3IZp8LIgqs81QfZeDEYRSn3I8xvNE5920B8w1pTq0vFJgguYz0ufEIum8ovIegny0PN/vU0y4WdZYdi8RkE28H2oux/1wzmUhbVY0d4mEggwz9vdmBzOZogYZYhr5uPWhT1kukKxf5TF3yMivaulHV02/lQFBmk+DE2w2htdM7mX5DiyIiprKil/N1uLNuwg6KWZtW7WJ5N0TYSziqq7X1VRavhDo2a4stO+DSdGRncWsEfQ0fIyq/6QdRu2KaIEG+rwtOYVWJea6FId7ot2FBno6X4eWC+Ps0cR5DhMTTEZeWxeTJpN7xJUVaOzlZ0QoZEh7OFGY88GgfiWFE8Rh0WtXpN8QdSTCqZlAVlNcyitX1vU1Sq2HIMtPQ0DNNKsa2ryRiK4svK7zRw/XAFGZ5zZnV9+reSgOWDglrvON16p9arLoutsAx2+huKiZAWk1cu5KP8FVJcWdubNyfDtTXfdwRV1p43NUJQkk3t0+UwBKV2UxQvac2nNRwuFpDh9s2abow1C1G4ze6somrdnLQ/4PAoPuzT6VAGvjqFjqNOqRdWw1lEdt9wnjZPR49R1AAH8qbuFDSsTIrnoVbxlN5S0NcA4IfVBjgDpt86cxr1oDh+aerkNZsNnLfhKC5bCrEG5yFkCGc2A4flV+y060ExBXq6tPZaBl72/iw3y2EXHNMbXnaKTv1EH/gG8zMomDjN7lPkbN/UkTu81S74lZvmeZGkuOmMJMhnE/jOFwbsg9UWlHw4ktpjFWHX9tjJ1j+g04HcDUmxQztzdSRnn5DirirRNNfI5hlb16g/RbhiibEUxwlQQsHJ3eG/g9i9tjR+RUTZoSWksRFNGQsPDDpYC2zh9hFUOEVXIx2reAwN/mggij9pB0X5zjk6MOK6RP4kOVSpwZ8U6aw+qxjD5mavbNIMKvDpEAw5P+w7lSlncLspq9GeF1Kk5MmcXwARbMT1oTgGfW+1TMYL5EwHwSCnhth1bWqORSm4zBsS0ng7yArgEAv2DwqqQ1HvgVLav8URPO5q+gi4GB26itjbX0jxgDjs1WkNz8yXlIEKfSgCKzW4qpbFVXUAzhK1+5/3qMSoZXxVDK3nVuE1awIX0jQvVVAKHtRyxh9cRbgXtQwsdyp8ugRWzyV/PjDORdiptgpI4GUJIknSvzK2KlS4G/HgKgIZkFay7G6jdXsBFcCq2/DqzzHrOHy4mIJXBdcU+a06kIUl9Ttnj2hUFN/RcdN0rR+LGex0AIqiUxCQalNHO4yvzMySQjtTeZIPUETWzUxpm0VsOoVqKJg/K6esy4uST5Gu2aAwGVtUw+Zwxj8etG4aKT+rkGK2rpx/8QE6XQzl+7v8ZLcoSv6Rowppac2FHNbKH9qLzSF/TqxkGJGCdvFH8a84sgIt4goHp8OD/YxmfPUQxaK2/07a619EVUiTxcCmOg9jxLUZcraGDN8ztOmzRROrhmbztjEFe1CsVdVXqrWMvY3iUmRBp6d/s4qOAJ53WK3le1E/mAMjLmgc4x4ULY/vWB/v0qyvfRXog5yHcTccyHmEplmwF1h173bNzApojKzr53co8ubU/TFRFVEWzTVVCq3/3dDsTABxCQ1F7dM0NzKCJWPAGAU+6n46KeqVUlNW6VOpuLRI5FNoOcBQg1a0A16Mm3nM0C3NlHF0toxnWe1zyAWHM167G3ei4ZyZq65rbEPUu1Gla/QgQmDEvc6BXTUYSahDjOXRGDZMLEeN3HKGFNPahki6KFbNMh1g/zvSakxbH1P4FpZDfT4Zcg2rt7hXbc38aotmD8JGHAv157itMNxVFNl49xW8/E2iugvpfs5EIyvyAfQAvsSQBM0LkHF60ffcXNQUY3VHLJplzT9A7UM144DieRJHDcLRbPPxdVrEb4ae2Wb8EDJIEXuqQxhxkB92ctQlGOhfDWcS4QYC3uq8VjIMKe4PqxqLcrP9uvw97SfLPG1UWFG60RWYWzAbNg3HOXh1sgIqTssCP0CurTLiuveiXC6RpfmylDvh/HU6xJZilGAb2Kojg5+3QXcjx8Zp4F7H8whGhfWLBYx9JuymuqmQRVetM7eTQhOaOZIhNydQ1DfuXH4FgdJPpm7nYuYmGsgBggbbtHMVjXlW7bh0ZILpW2XuZuWb0ylDkbj1kAy5QOHvLQ4dSuT4deaqEGrg5d1DoyI5rnzNbciWO/wSJZbQXT0WzzvGpl+tH1GCzZJBu6aKvDnNGDb3rn0EVfdp7eDjbhK3S1M4joFy4oxXj4zTH7eGjgO25xMZcVrm+rjELLI2zHvm2WxwJJthbHEtc9jDcHw1dUW/901nAW8+9BVJD4ryuKl198EjhiguNEhOnD6DM3TVtsDl6o9dO3NBAUmqmvEe4SmTJFjBvbyTSGEkbjaIwuFORC0IMkezKD0nPBtf7lBw13gZ96KoOdZ66ty6O8JH40A5cVJy4K2oE/7WFeLEN5ucvcEZVzlxvfYiB1Gaa/vyCMVxh8iJ4+6pX+dm2HJVoSuSAo/Gd+bLgfO8EAYyj55bThhQWDVJr89gju5LI0cklSW+DSMv4gNu2WsVsbW9bXcK3QF1Vf40Qe4cGE4QWee8/awmrWxck2MLZ2fSZxW561CUsusFwGRRgk4/Q/a0oeromq/YtWuU99tx28pw7HNb/GIVA88NGfK2B3D98YFRCuAIVyNSl2Pcp1E5FvLPZa9VZJji2s2WwkbcZ/bcKqp9hq/aWuul8miX9a/CXWDkgl37alRI8cOTYwyHFD5lp6q2KdI17atjWWed21+zEFlUHOtQOeO/oHiZO4UMX6fuvSnBD5DEuRmeU0rKaZNd4PjFehnhmbr8BcVziBmoeY8ck+KZZXSS+UJfb5Oojq287QvUWgGlWoBDpC9Fnafm1EBG3DM5cWpvfaBF9HWWrpswXH56w+2d4X4DCXuEIipUb4Nxoe/nKKID47WVz67vi+qrPs7mfxFFXfAGZukI4qC3rJsISbenAvJ8OnKg+gEFCtXRjbSX+VhGzefRxXNConjBXYomXtDywlwMlhOHDoyjG/DScsgbt5Sz6aeHIprx+6uopi2+tYoaUFKfyYnL4ZvOOyt6zVhULGUEvmnw/dqKJ3GGcuLuU+ROYMtPcQw7/f11Kv660Clt2zXyv2nBbEicjX2mAb5OvUtRi8YPDPd5KaK40O9z4uA9kPnuDG9pm3Ep6mi8mHkoMoZy4nqsomBRAgn4KDpZzVUA7yHo20v0TRPPxbO6Uxwd7J7U90YeigLnxN1fRc72BTRfll4LLYXzH8Iv5vSl6JhewZcvEMR1zhuzRnjps2FbaYF3V5HlGyTb/lVs5cQ9vow4IUspZp8nMZ5l1bfW5CIeuygis/keRenzj1AakS/yJZ+guFD+G0FFeWzBxfv9j/o6SpUVylLzqhunr9sUTc6bAAejP7jHCng0rh53NzjO/wx2PqdMXUeZQI760TQurUND+1c4gnebIiv2DHm9HhtV25Y4J+4hhrzl56mvlHhnKZzZBpmxYbwaVfaGNNdNiowlynsKmxmuM5Mcy+qJnDhNMfx0O/B1oS/H9JsXn7coogvsOxTTjVp38D2QNVrF+leefYDefLriFkfuXLWVHQyLJDUzkts176DI3vpTDCd6tM2d9BHQAsPgOCfurT9FE5VEGZlfudN7PZoq5y2q59NHUbXDTtlNikmk1DMXjZ9pPQmgDvQphXLiHkgX1xRzlJthrtra+RFZojNiYzB8L0XVsG3EdVDM1ubfA2BFLap7sBfhV0KcnLhH4JjB310SkJdyILsTNDMwRdAQJ7Q4FKHtuxzZZ/Wd96fNvZFGRARPL2icvAB3494Bwl33Z5WPfZjPy+sahT0kjinqScpDVTtu69SD7UenaGSx+bQJzd+yo2LT9KoNjGxSqmR7YTtFnvOiHthd30o5SPtpg3I2S2YtJBLT6R5WlNjPYPfahrVty6mD0pQks3Js8k8S2eksMY+ThbqSzRbV0WG+Hz66jvQ3IrJVYjCr36v7q1DejwIMlufRuyOvCW123W5TSfjn1/bguzT29nevvPqKtM2t89rwemeYLVSnUrY4wa/lc+EWMQ6rcatMKrelDq+LPA6Xo2UY5RmzpfXQmjc2uYC9/m0j3vroa1L9IyisOU9aXhsi3/la7ozL/s6ZM1hec+J1RTtDYHaHTW8kEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIhP8H/gdRjppuV7ZM8gAAAABJRU5ErkJggg==",lS=[{id:"foco-criativo",logo:rS,positions:[{id:"product-manager",period:"Nov 2025 – Present",skills:["Product Management","Product Strategy","Wireframing","Jira","UX Design","Generative AI","AI","Backlog Management","Prototyping","UI Design","Design Thinking","Git","Product Road Mapping","Cross-functional Collaborations","User Stories","Product Ownership","Stakeholder Management","Scrum","User Research"]},{id:"product-owner",period:"Nov 2024 – Nov 2025",skills:["Product Strategy","Wireframing","Jira","UX Design","Generative AI","AI","Backlog Management","Prototyping","UI Design","Design Thinking","Git","Product Road Mapping","Cross-functional Collaborations","User Stories","Product Ownership","Stakeholder Management","Scrum","User Research"]},{id:"software-engineer",period:"Jun 2024 – Nov 2024",skills:["CSS","UX Design","UI Design","Front-End Development","HTML5","React Native","JavaScript","Scrum"]},{id:"intern",period:"Jan 2024 – Jun 2024"}]},{id:"cmpl-lifeguard",logo:sS,positions:[{id:"lifeguard-cmpl",period:"Jun 2023 – Sep 2023"}]},{id:"diver-lifeguard",logo:aS,positions:[{id:"lifeguard-diver",period:"Jul 2022 – Sep 2022"}]},{id:"zara",logo:oS,positions:[{id:"cashier",period:"Jun 2022 – Jul 2022"}]}],cS={id:"experience",class:"bg-gray-50/50 py-20 dark:bg-neutral-900/50"},uS={class:"section-container"},hS={class:"text-center"},fS={class:"section-title"},dS={class:"section-subtitle"},pS={class:"mx-auto mt-12 max-w-3xl space-y-6"},mS={class:"flex items-center gap-4 border-b border-gray-100 px-6 py-4 dark:border-neutral-800"},_S=["src","alt"],gS={class:"font-display text-lg font-semibold text-gray-900 dark:text-white"},vS={class:"text-sm text-gray-400"},xS={class:"px-6 py-5"},MS={key:0,class:"absolute -left-[calc(1.75rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-primary-500 bg-white dark:bg-neutral-900"},SS={class:"font-display text-base font-semibold text-gray-900 dark:text-white"},yS={class:"mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"},ES={class:"font-medium text-primary-600 dark:text-primary-400"},TS={class:"text-gray-400"},bS={key:1,class:"mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400"},AS={key:2,class:"mt-3 flex flex-wrap gap-1.5"},wS={__name:"ExperienceSection",setup(r){const{t:e,te:t}=sr();return(n,i)=>(at(),ot("section",cS,[ee("div",uS,[ee("div",hS,[ee("h2",fS,Ke(ze(e)("experience.title")),1),ee("p",dS,Ke(ze(e)("experience.subtitle")),1)]),ee("div",pS,[(at(!0),ot(ii,null,ri(ze(lS),s=>(at(),ot("div",{key:s.id,class:"card overflow-hidden p-0"},[ee("div",mS,[ee("img",{src:s.logo,alt:ze(e)(`experience.companies.${s.id}.name`),class:"h-11 w-11 flex-shrink-0 rounded-xl object-cover"},null,8,_S),ee("div",null,[ee("h3",gS,Ke(ze(e)(`experience.companies.${s.id}.name`)),1),ee("p",vS,Ke(ze(e)(`experience.companies.${s.id}.location`)),1)])]),ee("div",xS,[ee("div",{class:Es(["relative",s.positions.length>1?"border-l-2 border-primary-100 pl-7 dark:border-primary-800":""])},[(at(!0),ot(ii,null,ri(s.positions,(a,o)=>(at(),ot("div",{key:a.id,class:Es(["relative",o<s.positions.length-1?"mb-7 pb-7 border-b border-gray-50 dark:border-neutral-800/50":""])},[s.positions.length>1?(at(),ot("div",MS)):Za("",!0),ee("h4",SS,Ke(ze(e)(`experience.positions.${a.id}.title`)),1),ee("div",yS,[ee("span",ES,Ke(ze(e)(`experience.positions.${a.id}.type`)),1),i[0]||(i[0]=ee("span",{class:"text-gray-300 dark:text-neutral-600"},"·",-1)),ee("span",TS,Ke(a.period),1)]),ze(t)(`experience.positions.${a.id}.description`)?(at(),ot("p",bS,Ke(ze(e)(`experience.positions.${a.id}.description`)),1)):Za("",!0),a.skills&&a.skills.length?(at(),ot("div",AS,[(at(!0),ot(ii,null,ri(a.skills,l=>(at(),ot("span",{key:l,class:"badge text-[11px]"},Ke(l),1))),128))])):Za("",!0)],2))),128))],2)])]))),128))])])]))}},RS=[{id:"productStrategy",rating:5},{id:"agileScrum",rating:4},{id:"dataAnalysis",rating:4},{id:"stakeholderManagement",rating:5},{id:"userResearch",rating:4}],CS=["roadmapPlanning","abTesting","sql","jiraConfluence","figma","wireframing","marketAnalysis","okrsKpis","apiDesign","businessModeling","presentationDesign","crossFunctionalLeadership"],PS=[{id:"portuguese",percentage:100},{id:"english",percentage:90}],DS={id:"skills",class:"bg-gray-50/50 py-20 dark:bg-neutral-900/50"},LS={class:"section-container"},IS={class:"text-center"},US={class:"section-title"},NS={class:"section-subtitle"},FS={class:"mx-auto mt-12 max-w-4xl"},OS={class:"font-display text-xl font-semibold text-gray-900 dark:text-white"},BS={class:"mt-6 space-y-5"},zS={class:"w-48 text-sm font-medium text-gray-700 sm:w-56 dark:text-gray-300"},kS=["aria-label"],VS={class:"mt-12"},HS={class:"font-display text-xl font-semibold text-gray-900 dark:text-white"},GS={class:"mt-4 flex flex-wrap gap-2"},WS={class:"mt-12"},XS={class:"font-display text-xl font-semibold text-gray-900 dark:text-white"},YS={class:"mt-6 space-y-4"},qS={class:"mb-1.5 flex items-baseline justify-between"},KS={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},ZS={class:"text-xs text-gray-400"},jS={class:"h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700"},$S=["aria-valuenow"],JS={__name:"SkillsSection",setup(r){const{t:e}=sr();return(t,n)=>(at(),ot("section",DS,[ee("div",LS,[ee("div",IS,[ee("h2",US,Ke(ze(e)("skills.title")),1),ee("p",NS,Ke(ze(e)("skills.subtitle")),1)]),ee("div",FS,[ee("div",null,[ee("h3",OS,Ke(ze(e)("skills.topTitle")),1),ee("div",BS,[(at(!0),ot(ii,null,ri(ze(RS),i=>(at(),ot("div",{key:i.id,class:"flex items-center gap-4"},[ee("span",zS,Ke(ze(e)(`skills.top.${i.id}`)),1),ee("div",{class:"flex gap-1.5","aria-label":`${ze(e)(`skills.top.${i.id}`)}: ${i.rating} / 5`},[(at(),ot(ii,null,ri(5,s=>ee("span",{key:s,class:Es(["h-3 w-3 rounded-full transition-colors",s<=i.rating?"bg-primary-500":"bg-gray-200 dark:bg-neutral-700"])},null,2)),64))],8,kS)]))),128))])]),ee("div",VS,[ee("h3",HS,Ke(ze(e)("skills.otherTitle")),1),ee("div",GS,[(at(!0),ot(ii,null,ri(ze(CS),i=>(at(),ot("span",{key:i,class:"badge"},Ke(ze(e)(`skills.other.${i}`)),1))),128))])]),ee("div",WS,[ee("h3",XS,Ke(ze(e)("skills.langTitle")),1),ee("div",YS,[(at(!0),ot(ii,null,ri(ze(PS),i=>(at(),ot("div",{key:i.id},[ee("div",qS,[ee("span",KS,Ke(ze(e)(`skills.languages.${i.id}.name`)),1),ee("span",ZS,Ke(ze(e)(`skills.languages.${i.id}.level`)),1)]),ee("div",jS,[ee("div",{class:"h-full rounded-full bg-primary-500 transition-all duration-700",style:lh({width:i.percentage+"%"}),role:"progressbar","aria-valuenow":i.percentage,"aria-valuemin":"0","aria-valuemax":"100"},null,12,$S)])]))),128))])])])])]))}},QS={id:"cv",class:"bg-gradient-to-r from-primary-600 to-primary-700 py-16 dark:from-primary-800 dark:to-primary-900"},ey={class:"section-container text-center"},ty={class:"font-display text-3xl font-bold text-white sm:text-4xl"},ny={class:"mt-3 text-lg text-primary-100"},iy={href:"/cv.pdf",download:"",class:"mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"},ry={__name:"CvSection",setup(r){const{t:e}=sr();return(t,n)=>(at(),ot("section",QS,[ee("div",ey,[ee("h2",ty,Ke(ze(e)("cv.title")),1),ee("p",ny,Ke(ze(e)("cv.subtitle")),1),ee("a",iy,[n[0]||(n[0]=ee("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})],-1)),Oo(" "+Ke(ze(e)("cv.button")),1)])])]))}},oy={__name:"HomePage",setup(r){return(e,t)=>(at(),ot("div",null,[In(PM),In(FM),In(qM),In(iS),In(wS),In(JS),In(ry)]))}};export{oy as default};
