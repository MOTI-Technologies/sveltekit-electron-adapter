import{s as b,n as f,c as x}from"../chunks/scheduler.DKxCvFLz.js";import{S,i as j,g as u,m as h,s as q,h as d,j as v,n as g,f as l,c as y,a as c,A as E,o as $}from"../chunks/index.cm8YmClm.js";import{p as A}from"../chunks/stores.WooRKtza.js";function C(p){let a,t=p[0].status+"",r,o,n,i=p[0].error?.message+"",m;return{c(){a=u("h1"),r=h(t),o=q(),n=u("p"),m=h(i)},l(e){a=d(e,"H1",{});var s=v(a);r=g(s,t),s.forEach(l),o=y(e),n=d(e,"P",{});var _=v(n);m=g(_,i),_.forEach(l)},m(e,s){c(e,a,s),E(a,r),c(e,o,s),c(e,n,s),E(n,m)},p(e,[s]){s&1&&t!==(t=e[0].status+"")&&$(r,t),s&1&&i!==(i=e[0].error?.message+"")&&$(m,i)},i:f,o:f,d(e){e&&(l(a),l(o),l(n))}}}function H(p,a,t){let r;return x(p,A,o=>t(0,r=o)),[r]}class z extends S{constructor(a){super(),j(this,a,H,C,b,{})}}export{z as component};
