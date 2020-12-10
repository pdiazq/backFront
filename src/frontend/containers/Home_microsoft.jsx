import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Search from '../components/Search';
import '../assets/styles/Home.scss';


const Home = ({ myList, trends, originals }) => {


  var aPageStart = (new Date()).getTime();

  var ue_t0=ue_t0||+new Date();
  
  
  (function(a){var b=a.performance;a.ue_mark=b&&"function"===typeof b.mark?function(a){b.mark(a)}:function(){}})(window);
  
      ue_mark('csm:ho:ob');
  
  
  window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
  
  if (window.ue_ihb === 1) {
  
      var ue_csm = window,
          ue_hob = +new Date();
  (function(d){var e=d.ue=d.ue||{},f=Date.now||function(){return+new Date};e.d=function(b){return f()-(b?0:d.ue_t0)};e.stub=function(b,a){if(!b[a]){var c=[];b[a]=function(){c.push([c.slice.call(arguments),e.d(),d.ue_id])};b[a].replay=function(b){for(var a;a=c.shift();)b(a[0],a[1],a[2])};b[a].isStub=1}};e.exec=function(b,a){return function(){try{return b.apply(this,arguments)}catch(c){ueLogError(c,{attribution:a||"undefined",logLevel:"WARN"})}}}})(ue_csm);
  
  
          var ue_err_chan = 'jserr-rw';
  (function(d,e){function h(f,b){if(!(a.ec>a.mxe)&&f){a.ter.push(f);b=b||{};var c=f.logLevel||b.logLevel;c&&c!==k&&c!==m&&c!==n&&c!==p||a.ec++;c&&c!=k||a.ecf++;b.pageURL=""+(e.location?e.location.href:"");b.logLevel=c;b.attribution=f.attribution||b.attribution;a.erl.push({ex:f,info:b})}}function l(a,b,c,e,g){d.ueLogError({m:a,f:b,l:c,c:""+e,err:g,fromOnError:1,args:arguments},g?{attribution:g.attribution,logLevel:g.logLevel}:void 0);return!1}var k="FATAL",m="ERROR",n="WARN",p="DOWNGRADED",a={ec:0,ecf:0,
  pec:0,ts:0,erl:[],ter:[],mxe:50,startTimer:function(){a.ts++;setInterval(function(){d.ue&&a.pec<a.ec&&d.uex("at");a.pec=a.ec},1E4)}};l.skipTrace=1;h.skipTrace=1;h.isStub=1;d.ueLogError=h;d.ue_err=a;e.onerror=l})(ue_csm,window);
  
  
      var ue_id = '1AJW44ZF301222PBP63J',
          ue_url = '/gp/uedata',
          ue_navtiming = 1,
          ue_mid = 'ATVPDKIKX0DER',
          ue_sid = '130-4633468-0244106',
          ue_sn = 'www.amazon.com',
          ue_furl = 'fls-na.amazon.com',
          ue_surl = 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
          ue_int = 0,
          ue_fcsn = 1,
          ue_urt = 3,
          ue_rpl_ns = 'cel-rpl',
          ue_ddq = 1,
          ue_fpf = '//fls-na.amazon.com/1/batch/1/OP/ATVPDKIKX0DER:130-4633468-0244106:1AJW44ZF301222PBP63J$uedata=s:',
          ue_sbuimp = 1,
      
          ue_swi = 1;
  
  }
  ue_mark('csm:ho:eb');
  
  
  
      
          if(1===window.ue_ihb){var ue_viz=function(){(function(c,e,h){function w(h){if(c.ue.viz.length<f&&!n){var g=h.type;h=h.originalEvent;/^focus./.test(g)&&h&&(h.toElement||h.fromElement||h.relatedTarget)||(g=e[x]||("blur"==g||"focusout"==g?"hidden":"visible"),c.ue.viz.push(g+":"+(+new Date-c.ue.t0)),"visible"==g&&(ue.isl&&uex("at"),n=1))}}for(var n=0,g,t,x,E=["","webkit","o","ms","moz"],u=0,f=20,y=0;y<E.length&&!u;y++)if(h=E[y],g=(h?h+"H":"h")+"idden",u="boolean"==typeof e[g])t=h+"visibilitychange",x=
  (h?h+"V":"v")+"isibilityState";w({});u&&e.addEventListener(t,w,0);c.ue&&u&&(c.ue.pageViz={event:t,propHid:g})})(ue_csm,document,window)};(function(c,e,h){function w(a){return a&&a.replace&&a.replace(/^\s+|\s+$/g,"")}function n(a){return"undefined"===typeof a}function g(a,b){for(var d in b)b[B](d)&&(a[d]=b[d])}function t(a){try{var b=h.cookie.match(RegExp("(^| )"+a+"\x3d([^;]+)"));if(b)return b[2].trim()}catch(d){}}function x(r,b,d){r&&(c.ue_id=a.id=a.rid=r,C=C.replace(/((.*?:){2})(\w+)/,function(a,
  b){return b+r}));b&&(C=C.replace(/(.*?:)(\w|-)+/,function(a,d){return d+b}),c.ue_sid=b);d&&a.tag("page-source:"+d);c.ue_fpf=C}function E(){var a={};return function(b){b&&(a[b]=1);b=[];for(var d in a)a[B](d)&&b.push(d);return b}}function u(c,b,d,l){var h=l||+new H,k,g,q=e.csa;if(b||n(d)){if(c){k=b?f("t",b)||f("t",b,{}):a.t;k[c]=h;for(g in d)d[B](g)&&f(g,b,d[g]);!b&&1!==e.ue_csa_ajax&&q&&q("PageTiming")("mark",P[c]||c,l)}return h}}function f(c,b,d){var e=b&&b!=a.id?a.sc[b]:a;e||(e=a.sc[b]={});"id"===
  c&&d&&(Q=1);return e[c]=d||e[c]}function y(c,b,d,e,h){d="on"+d;var f=b[d];"function"===typeof f?c&&(a.h[c]=f):f=function(){};b[d]=function(a){h?(e(a),f(a)):(f(a),e(a))};b[d]&&(b[d].isUeh=1)}function O(r,b,d,l){function z(b,d){b=[b];var c=0,e={},h,g;d?(b.push("m\x3d1"),e[d]=1):e=a.sc;for(g in e)if(e[B](g)){var l=f("wb",g),k=f("t",g)||{},m=f("t0",g)||a.t0,z;if(d||2==l){l=l?c++:"";b.push("sc"+l+"\x3d"+g);for(z in k)3>=z.length&&!n(k[z])&&null!==k[z]&&b.push(z+l+"\x3d"+(k[z]-m));b.push("t"+l+"\x3d"+k[r]);
  if(f("ctb",g)||f("wb",g))h=1}}!y&&h&&b.push("ctb\x3d1");return b.join("\x26")}function t(b,d,g,h){if(b){var f=c.ue_err;c.ue_url&&!h&&b&&0<b.length&&(h=new Image,a.iel.push(h),h.src=b,a.count&&a.count("postbackImageSize",b.length));if(C){var l=e.encodeURIComponent;l&&b&&(h=new Image,b=""+c.ue_fpf+l(b)+":"+(+new H-c.ue_t0),a.iel.push(h),h.src=b)}else a.log&&(a.log(b,"uedata",{n:1}),a.ielf.push(b));f&&!f.ts&&f.startTimer();a.b&&(f=a.b,a.b="",t(f,d,g,1))}}function x(b){var d=F?F.type:I,c=2==d||a.isBFonMshop,
  e=a.bfini;Q||(e&&1<e&&(b+="\x26bfform\x3d1",d&&!c||(a.isBFT=e-1)),c&&(b+="\x26bfnt\x3d1",a.isBFT=a.isBFT||1),a.ssw&&a.isBFT&&(a.isBFonMshop&&(a.isNRBF=0),n(a.isNRBF)&&(c=a.ssw(a.oid),c.e||n(c.val)||(a.isNRBF=1<c.val?0:1)),n(a.isNRBF)||(b+="\x26nrbf\x3d"+a.isNRBF)),a.isBFT&&!a.isNRBF&&(b+="\x26bft\x3d"+a.isBFT));return b}if(!a.paused&&(b||n(d))){for(var q in d)d[B](q)&&f(q,b,d[q]);a.isBFonMshop||u("pc",b,d);q=f("id",b)||a.id;var A=f("id2",b),m=a.url+"?"+r+"\x26v\x3d"+a.v+"\x26id\x3d"+q,y=f("ctb",b)||
  f("wb",b),D;y&&(m+="\x26ctb\x3d"+y);A&&(m+="\x26id2\x3d"+A);1<c.ueinit&&(m+="\x26ic\x3d"+c.ueinit);if(!("ld"!=r&&"ul"!=r||b&&b!=q)){if("ld"==r){try{e[K]&&e[K].isUeh&&(e[K]=null)}catch(ca){}if(e.chrome)for(A=0;A<L.length;A++)R(J,L[A]);(A=h.ue_backdetect)&&A.ue_back&&A.ue_back.value++;c._uess&&(D=c._uess());a.isl=1}a._bf&&(m+="\x26bf\x3d"+a._bf());c.ue_navtiming&&k&&(f("ctb",q,"1"),a.isBFonMshop||u("tc",I,I,M));!G||a.isBFonMshop||S||(k&&g(a.t,{na_:k.navigationStart,ul_:k.unloadEventStart,_ul:k.unloadEventEnd,
  rd_:k.redirectStart,_rd:k.redirectEnd,fe_:k.fetchStart,lk_:k.domainLookupStart,_lk:k.domainLookupEnd,co_:k.connectStart,_co:k.connectEnd,sc_:k.secureConnectionStart,rq_:k.requestStart,rs_:k.responseStart,_rs:k.responseEnd,dl_:k.domLoading,di_:k.domInteractive,de_:k.domContentLoadedEventStart,_de:k.domContentLoadedEventEnd,_dc:k.domComplete,ld_:k.loadEventStart,_ld:k.loadEventEnd,ntd:("function"!==typeof G.now||n(M)?0:new H(M+G.now())-new H)+a.t0}),F&&g(a.t,{ty:F.type+a.t0,rc:F.redirectCount+a.t0}),
  S=1);a.isBFonMshop||g(a.t,{hob:c.ue_hob,hoe:c.ue_hoe});a.ifr&&(m+="\x26ifr\x3d1")}u(r,b,d,l);d="ld"==r&&b&&f("wb",b);var v,p;d||b&&b!==q||aa(b);d||q==a.oid||ba(q,(f("t",b)||{}).tc||+f("t0",b),+f("t0",b));(l=c.ue_mbl)&&l.cnt&&!d&&(m+=l.cnt());d?f("wb",b,2):"ld"==r&&(a.lid=w(q));for(v in a.sc)if(1==f("wb",v))break;if(d){if(a.s)return;m=z(m,null)}else l=z(m,null),l!=m&&(l=x(l),a.b=l),D&&(m+=D),m=z(m,b||a.id);m=x(m);if(a.b||d)for(v in a.sc)2==f("wb",v)&&delete a.sc[v];D=0;a._rt&&(m+="\x26rt\x3d"+a._rt());
  l=e.csa;if(!d&&1===e.ue_csa_ajax&&l)for(p in v=f("t",b)||{},l=l("PageTiming"),v)v[B](p)&&l("mark",P[p]||p,v[p]);d||(a.s=0,(p=c.ue_err)&&0<p.ec&&p.pec<p.ec&&(p.pec=p.ec,m+="\x26ec\x3d"+p.ec+"\x26ecf\x3d"+p.ecf),D=f("ctb",b),"ld"!==r||b||a.markers||(a.markers={},g(a.markers,f("t",b))),f("t",b,{}));a.tag&&a.tag().length&&(m+="\x26csmtags\x3d"+a.tag().join("|"),a.tag=E());p=a.viz||[];(v=p.length)&&(m+="\x26viz\x3d"+p.splice(0,v).join("|"));n(c.ue_pty)||(m+="\x26pty\x3d"+c.ue_pty+"\x26spty\x3d"+c.ue_spty+
  "\x26pti\x3d"+c.ue_pti);a.tabid&&(m+="\x26tid\x3d"+a.tabid);a.aftb&&(m+="\x26aftb\x3d1");!a._ui||b&&b!=q||(m+=a._ui());a.a=m;t(m,r,D,d)}}function aa(a){var b=e.ue_csm_markers||{},d;for(d in b)b[B](d)&&u(d,a,I,b[d])}function N(a,b,d){d=d||e;if(d[T])d[T](a,b,!1);else if(d[U])d[U]("on"+a,b)}function R(a,b,d){d=d||e;if(d[V])d[V](a,b,!1);else if(d[W])d[W]("on"+a,b)}function X(){function a(){c.onUl()}function b(a){return function(){d[a]||(d[a]=1,O(a))}}var d={},h,f;c.onLd=b("ld");c.onLdEnd=b("ld");c.onUl=
  b("ul");h={stop:b("os")};e.chrome?(N(J,a),L.push(a)):h[J]=c.onUl;for(f in h)h[B](f)&&y(0,e,f,h[f]);c.ue_viz&&ue_viz();N("load",c.onLd);u("ue")}function ba(h,b,d){var f=c.ue_mbl,g=e.csa,k=g&&g("SPA"),g=g&&g("PageTiming");f&&f.ajax&&f.ajax(b,d);k&&g&&(k("newPage",{requestId:h,transitionType:"soft"}),g("mark","transitionStart",b));a.tag("ajax-transition")}c.ueinit=(c.ueinit||0)+1;var a=c.ue=c.ue||{};a.t0=e.aPageStart||c.ue_t0;a.id=c.ue_id;a.url=c.ue_url;a.rid=c.ue_id;a.a="";a.b="";a.h={};a.s=1;a.t={};
  a.sc={};a.iel=[];a.ielf=[];a.viz=[];a.v="0.213507.0";a.paused=!1;var B="hasOwnProperty",J="beforeunload",K="on"+J,T="addEventListener",V="removeEventListener",U="attachEvent",W="detachEvent",P={cf:"criticalFeature",af:"aboveTheFold",fn:"functional",fp:"firstPaint",fcp:"firstContentfulPaint",bb:"bodyBegin",be:"bodyEnd",ld:"loaded"},H=e.Date,G=e.performance||e.webkitPerformance,k=(G||{}).timing,F=(G||{}).navigation,M=(k||{}).navigationStart,C=c.ue_fpf,Q=0,S=0,L=[],I;a.oid=w(a.id);a.lid=w(a.id);a._t0=
  a.t0;a.tag=E();a.ifr=e.top!==e.self||e.frameElement?1:0;a.markers=null;a.attach=N;a.detach=R;if("000-0000000-8675309"===c.ue_sid){var Y=t("cdn-rid"),Z=t("session-id");Y&&Z&&x(Y,Z,"cdn")}c.uei=X;c.ueh=y;c.ues=f;c.uet=u;c.uex=O;a.reset=x;a.pause=function(c){a.paused=c};X()})(ue_csm,window,ue_csm.document);ue.stub(ue,"event");ue.stub(ue,"onSushiUnload");ue.stub(ue,"onSushiFlush");ue.stub(ue,"log");ue.stub(ue,"onunload");ue.stub(ue,"onflush");(function(c){var e=c.ue;e.cv={};e.cv.scopes={};e.count=function(c,
  w,n){var g={},t=e.cv,x=n&&0===n.c;g.counter=c;g.value=w;g.t=e.d();n&&n.scope&&(t=e.cv.scopes[n.scope]=e.cv.scopes[n.scope]||{},g.scope=n.scope);if(void 0===w)return t[c];t[c]=w;c=0;n&&n.bf&&(c=1);ue_csm.ue_sclog||!e.clog||0!==c||x?e.log&&e.log(g,"csmcount",{c:1,bf:c}):e.clog(g,"csmcount",{bf:c})};e.count("baselineCounter2",1);e&&e.event&&(e.event({requestId:c.ue_id||"rid",server:c.ue_sn||"sn",obfuscatedMarketplaceId:c.ue_mid||"mid"},"csm","csm.CSMBaselineEvent.4"),e.count("nexusBaselineCounter",1,
  {bf:1}))})(ue_csm);var ue_hoe=+new Date}window.ueinit=window.ue_ihb;
      
  ue_mark('csm:ho:ee')
  
  
  ue_mark('csm:ho:oe');
  
  
  (function(f,h,Q,F){function A(a){w&&w.tag&&w.tag(q(":","aui",a))}function u(a,b){w&&w.count&&w.count("aui:"+a,0===b?0:b||(w.count("aui:"+a)||0)+1)}function p(a){try{return a.test(navigator.userAgent)}catch(b){return!1}}function y(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function q(a,b,c,e){b=b&&c?b+a+c:b||c;return e?q(a,b,e):b}function G(a,b,c){try{Object.defineProperty(a,b,{value:c,writable:!1})}catch(e){a[b]=c}return c}function va(a,b){var c=a.length,
  e=c,g=function(){e--||(R.push(b),S||(setTimeout(ca,0),S=!0))};for(g();c--;)da[a[c]]?g():(B[a[c]]=B[a[c]]||[]).push(g)}function wa(a,b,c,e,g){var d=h.createElement(a?"script":"link");y(d,"error",e);g&&y(d,"load",g);a?(d.type="text/javascript",d.async=!0,c&&/AUIClients|images[/]I/.test(b)&&d.setAttribute("crossorigin","anonymous"),d.src=b):(d.rel="stylesheet",d.href=b);h.getElementsByTagName("head")[0].appendChild(d)}function ea(a,b){return function(c,e){function g(){wa(b,c,d,function(b){T?u("resource_unload"):
  d?(d=!1,u("resource_retry"),g()):(u("resource_error"),a.log("Asset failed to load: "+c));b&&b.stopPropagation?b.stopPropagation():f.event&&(f.event.cancelBubble=!0)},e)}if(fa[c])return!1;fa[c]=!0;u("resource_count");var d=!0;return!g()}}function xa(a,b,c){for(var e={name:a,guard:function(c){return b.guardFatal(a,c)},logError:function(c,d,e){b.logError(c,d,e,a)}},g=[],d=0;d<c.length;d++)H.hasOwnProperty(c[d])&&(g[d]=U.hasOwnProperty(c[d])?U[c[d]](H[c[d]],e):H[c[d]]);return g}function C(a,b,c,e,g){return function(d,
  h){function n(){var a=null;e?a=h:"function"===typeof h&&(p.start=D(),a=h.apply(f,xa(d,k,l)),p.end=D());if(b){H[d]=a;a=d;for(da[a]=!0;(B[a]||[]).length;)B[a].shift()();delete B[a]}p.done=!0}var k=g||this;"function"===typeof d&&(h=d,d=F);b&&(d=d?d.replace(ha,""):"__NONAME__",V.hasOwnProperty(d)&&k.error(q(", reregistered by ",q(" by ",d+" already registered",V[d]),k.attribution),d),V[d]=k.attribution);for(var l=[],m=0;m<a.length;m++)l[m]=a[m].replace(ha,"");var p=ia[d||"anon"+ ++ya]={depend:l,registered:D(),
  namespace:k.namespace};c?n():va(l,k.guardFatal(d,n));return{decorate:function(a){U[d]=k.guardFatal(d,a)}}}}function ja(a){return function(){var b=Array.prototype.slice.call(arguments);return{execute:C(b,!1,a,!1,this),register:C(b,!0,a,!1,this)}}}function W(a,b){return function(c,e){e||(e=c,c=F);var g=this.attribution;return function(){z.push(b||{attribution:g,name:c,logLevel:a});var d=e.apply(this,arguments);z.pop();return d}}}function I(a,b){this.load={js:ea(this,!0),css:ea(this)};G(this,"namespace",
  b);G(this,"attribution",a)}function ka(){h.body?r.trigger("a-bodyBegin"):setTimeout(ka,20)}function E(a,b){a.className=X(a,b)+" "+b}function X(a,b){return(" "+a.className+" ").split(" "+b+" ").join(" ").replace(/^ | $/g,"")}function la(a){try{return a()}catch(b){return!1}}function J(){if(K){var a={w:f.innerWidth||n.clientWidth,h:f.innerHeight||n.clientHeight};5<Math.abs(a.w-Y.w)||50<a.h-Y.h?(Y=a,L=4,(a=k.mobile||k.tablet?450<a.w&&a.w>a.h:1250<=a.w)?E(n,"a-ws"):n.className=X(n,"a-ws")):0<L&&(L--,ma=
  setTimeout(J,16))}}function za(a){(K=a===F?!K:!!a)&&J()}function Aa(){return K}function v(a,b){return"sw:"+(b||"")+":"+a+":"}function na(){oa.forEach(function(a){A(a)})}function t(a){oa.push(a)}function pa(a,b,c,e){if(c){b=p(/Chrome/i)&&!p(/Edge/i)&&!p(/OPR/i)&&!a.capabilities.isAmazonApp&&!p(new RegExp(Z+"bwv"+Z+"b"));var g=v(e,"browser"),d=v(e,"prod_mshop"),f=v(e,"beta_mshop");!a.capabilities.isAmazonApp&&c.browser&&b&&(t(g+"supported"),c.browser.action(g,e));!b&&c.browser&&t(g+"unsupported");c.prodMshop&&
  t(d+"unsupported");c.betaMshop&&t(f+"unsupported")}}"use strict";var M=Q.now=Q.now||function(){return+new Q},D=function(a){return a&&a.now?a.now.bind(a):M}(f.performance),N=D(),l=f.AmazonUIPageJS||f.P;if(l&&l.when&&l.register){N=[];for(var m=h.currentScript;m;m=m.parentElement)m.id&&N.push(m.id);return l.log("A copy of P has already been loaded on this page.","FATAL",N.join(" "))}var w=f.ue;A();A("aui_build_date:3.20.5-2020-07-28");var R=[],S=!1;var ca=function(){for(var a=setTimeout(ca,0),b=M();R.length;)if(R.shift()(),
  50<M()-b)return;clearTimeout(a);S=!1};var da={},B={},fa={},T=!1;y(f,"beforeunload",function(){T=!0;setTimeout(function(){T=!1},1E4)});var ha=/^prv:/,V={},H={},U={},ia={},ya=0,Z=String.fromCharCode(92),z=[],qa=f.onerror;f.onerror=function(a,b,c,e,g){g&&"object"===typeof g||(g=Error(a,b,c),g.columnNumber=e,g.stack=b||c||e?q(Z,g.message,"at "+q(":",b,c,e)):F);var d=z.pop()||{};g.attribution=q(":",g.attribution||d.attribution,d.name);g.logLevel=d.logLevel;g.attribution&&console&&console.log&&console.log([g.logLevel||
  "ERROR",a,"thrown by",g.attribution].join(" "));z=[];qa&&(d=[].slice.call(arguments),d[4]=g,qa.apply(f,d))};I.prototype={logError:function(a,b,c,e){b={message:b,logLevel:c||"ERROR",attribution:q(":",this.attribution,e)};if(f.ueLogError)return f.ueLogError(a||b,a?b:null),!0;console&&console.error&&(console.log(b),console.error(a));return!1},error:function(a,b,c,e){a=Error(q(":",e,a,c));a.attribution=q(":",this.attribution,b);throw a;},guardError:W(),guardFatal:W("FATAL"),guardCurrent:function(a){var b=
  z[z.length-1];return b?W(b.logLevel,b).call(this,a):a},log:function(a,b,c){return this.logError(null,a,b,c)},declare:C([],!0,!0,!0),register:C([],!0),execute:C([]),AUI_BUILD_DATE:"3.20.5-2020-07-28",when:ja(),now:ja(!0),trigger:function(a,b,c){var e=M();this.declare(a,{data:b,pageElapsedTime:e-(f.aPageStart||NaN),triggerTime:e});c&&c.instrument&&O.when("prv:a-logTrigger").execute(function(b){b(a)})},handleTriggers:function(){this.log("handleTriggers deprecated")},attributeErrors:function(a){return new I(a)},
  _namespace:function(a,b){return new I(a,b)}};var r=G(f,"AmazonUIPageJS",new I);var O=r._namespace("PageJS","AmazonUI");O.declare("prv:p-debug",ia);r.declare("p-recorder-events",[]);r.declare("p-recorder-stop",function(){});G(f,"P",r);ka();if(h.addEventListener){var ra;h.addEventListener("DOMContentLoaded",ra=function(){r.trigger("a-domready");h.removeEventListener("DOMContentLoaded",ra,!1)},!1)}var n=h.documentElement,aa=function(){var a=["O","ms","Moz","Webkit"],b=h.createElement("div");return{testGradients:function(){b.style.cssText=
  "background-image:-webkit-gradient(linear,left top,right bottom,from(#1E4),to(white));background-image:-webkit-linear-gradient(left top,#1E4,white);background-image:linear-gradient(left top,#1E4,white);";return~b.style.backgroundImage.indexOf("gradient")},test:function(c){var e=c.charAt(0).toUpperCase()+c.substr(1);c=(a.join(e+" ")+e+" "+c).split(" ");for(e=c.length;e--;)if(""===b.style[c[e]])return!0;return!1},testTransform3d:function(){var a=!1;f.matchMedia&&(a=f.matchMedia("(-webkit-transform-3d)").matches);
  return a}}}();l=n.className;var sa=/(^| )a-mobile( |$)/.test(l),ta=/(^| )a-tablet( |$)/.test(l),k={audio:function(){return!!h.createElement("audio").canPlayType},video:function(){return!!h.createElement("video").canPlayType},canvas:function(){return!!h.createElement("canvas").getContext},svg:function(){return!!h.createElementNS&&!!h.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect},offline:function(){return navigator.hasOwnProperty&&navigator.hasOwnProperty("onLine")&&navigator.onLine},
  dragDrop:function(){return"draggable"in h.createElement("span")},geolocation:function(){return!!navigator.geolocation},history:function(){return!(!f.history||!f.history.pushState)},webworker:function(){return!!f.Worker},autofocus:function(){return"autofocus"in h.createElement("input")},inputPlaceholder:function(){return"placeholder"in h.createElement("input")},textareaPlaceholder:function(){return"placeholder"in h.createElement("textarea")},localStorage:function(){return"localStorage"in f&&null!==
  f.localStorage},orientation:function(){return"orientation"in f},touch:function(){return"ontouchend"in h},gradients:function(){return aa.testGradients()},hires:function(){var a=f.devicePixelRatio&&1.5<=f.devicePixelRatio||f.matchMedia&&f.matchMedia("(min-resolution:144dpi)").matches;u("hiRes"+(sa?"Mobile":ta?"Tablet":"Desktop"),a?1:0);return a},transform3d:function(){return aa.testTransform3d()},touchScrolling:function(){return p(/Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|Chrome|Silk|Firefox|Trident.+?; Touch/i)},
  ios:function(){return p(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i)&&!p(/trident|Edge/i)},android:function(){return p(/android.([1-9]|[L-Z])/i)&&!p(/trident|Edge/i)},mobile:function(){return sa},tablet:function(){return ta},rtl:function(){return"rtl"===n.dir}};for(m in k)k.hasOwnProperty(m)&&(k[m]=la(k[m]));for(var ba="textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "),P=0;P<ba.length;P++)k[ba[P]]=la(function(){return aa.test(ba[P])});var K=!0,ma=0,Y=
  {w:0,h:0},L=4;J();y(f,"resize",function(){clearTimeout(ma);L=4;J()});var ua={getItem:function(a){try{return f.localStorage.getItem(a)}catch(b){}},setItem:function(a,b){try{return f.localStorage.setItem(a,b)}catch(c){}}};n.className=X(n,"a-no-js");E(n,"a-js");!p(/OS [1-8](_[0-9]*)+ like Mac OS X/i)||f.navigator.standalone||p(/safari/i)||E(n,"a-ember");l=[];for(m in k)k.hasOwnProperty(m)&&k[m]&&l.push("a-"+m.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()}));E(n,l.join(" "));n.setAttribute("data-aui-build-date",
  "3.20.5-2020-07-28");r.register("p-detect",function(){return{capabilities:k,localStorage:k.localStorage&&ua,toggleResponsiveGrid:za,responsiveGridEnabled:Aa}});p(/UCBrowser/i)||k.localStorage&&E(n,ua.getItem("a-font-class"));r.declare("a-event-revised-handling",!1);try{var x=navigator.serviceWorker}catch(a){A("sw:nav_err")}x&&(y(x,"message",function(a){a&&a.data&&u(a.data.k,a.data.v)}),x.controller&&x.controller.postMessage("MSG-RDY"));var oa=[];l={reg:{},unreg:{}};l.unreg.browser={action:function(a,
  b){try{x.getRegistrations().then(function(c){c.forEach(function(c){c.unregister().then(function(){u(a+"success")}).catch(function(c){r.logError(c,"[AUI SW] Failed to "+b+" service worker: ");u(a+"failure")})})})}catch(c){A("sw:api_error")}}};(function(a){var b=a.reg,c=a.unreg;x&&x.getRegistrations?(O.when("A","a-util").execute(function(a,b){pa(a,b,c,"unregister")}),y(f,"load",function(){O.when("A","a-util").execute(function(a,c){pa(a,c,b,"register");na()})})):(b&&(b.browser&&t(v("register","browser")+
  "unsupported"),b.prodMshop&&t(v("register","prod_mshop")+"unsupported"),b.betaMshop&&t(v("register","beta_mshop")+"unsupported")),c&&(c.browser&&t(v("unregister","browser")+"unsupported"),c.prodMshop&&t(v("unregister","prod_mshop")+"unsupported"),c.betaMshop&&t(v("unregister","beta_mshop")+"unsupported")),na())})(l);r.declare("a-fix-event-off",!1);u("pagejs:pkgExecTime",D()-N)})(window,document,Date);
  (function(b){function q(a,h,k){function r(a,d,c){var b=Array(h.length);~l&&(b[l]={});~m&&(b[m]=c);for(c=0;c<n.length;c++){var e=n[c],f=a[c];b[e]=f}for(c=0;c<p.length;c++)e=p[c],f=d[c],b[e]=f;a=k.apply(null,b);return~l?b[l]:a}"string"!==typeof a&&b.P.error("C001");if(!t[a]){t[a]=!0;k||(k=h,h=[]);a=a.split(":",2);var d=a[1]?a[0]:void 0,g=(a[1]||a[0]).replace(/@capability\//,"@c/"),f=d?b.P._namespace(d):b.P,u=!g.lastIndexOf("@c/",0),n=[];a=[];for(var p=[],v=[],m=-1,l=-1,d=0;d<h.length;d++){var e=h[d];
  "module"===e&&f.error("C002");"exports"===e?l=d:"require"===e?m=d:e.lastIndexOf("@p/",0)?e.lastIndexOf("@c/",0)?(n.push(d),a.push("mix:"+e)):(p.push(d),v.push(e)):(n.push(d),a.push(e.substr(3)))}f.when.apply(f,a).register("mix:"+g,function(){var a=[].slice.call(arguments);return u||~m||p.length?{capabilities:v,cardModuleFactory:function(b,c){b=r(a,b,c);b.P=f;return b},require:~m?q:void 0}:r(a,[],function(){})});u&&f.when("mix:@amzn/mix.client-runtime","mix:"+g).execute(function(a,b){a.registerCapabilityModule(g,
  b)});f.when("mix:"+g).register("xcp:"+g,function(a){return a});var q=function(a,b,c){try{f.when("mix:"+a[0]).execute(function(a){b(a)})}catch(d){c(d)}}}}"use strict";var t={};b.mix_d||((b.Promise?P:P.when("3p-promise")).register("@p/promise-is-ready",function(a){b.Promise=b.Promise||a}),b.mix_d=function(a,b,k){P.when("@p/promise-is-ready").execute("@p/mix-d-deps",function(){q(a,b,k)})},b.xcp_d=b.mix_d,P.when("mix:@amzn/mix.client-runtime").execute(function(a){P.declare("xcp:@xcp/runtime",a)}))})(window);
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/61-6nKPKyWL.js?AUIClients/AmazonUIjQuery');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/11Y+5x+kkTL._RC|61Usf6ZKPoL.js,212PEt8u8bL.js,012FVc3131L.js,11KoZmq92cL.js,51TNaPzHULL.js,11AHlQhPRjL.js,01-Ag-OPDsL.js,11SvFon9IkL.js,11p81T3qWFL.js,21ssiLNIZvL.js,0190vxtlzcL.js,61Q9fGuaicL.js,01ezj5Rkz1L.js,11EemQQsS-L.js,31pOTH2ZMRL.js,01rpauTep4L.js,01iyxuSGj4L.js,01CRyJpOGrL.js_.js?AUIClients/AmazonUI#page_type-Gateway.279057-T1.276706-T1');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/51MmgaRti3L.js?AUIClients/CardJsRuntimeBuzzCopyBuild');
  });
  
  
  
  
  var GWI=function(b){var a={},g={},f=function(){},h=function(){function c(e,c){for(var d=[],k=0;k<e.length;k++)d.push({id:e[k],occured:!1});this.notify=function(e){for(var l=0;l<d.length;l++){var k=d[l];k.id===e&&(k.occured=!0)}e=!0;for(l=0;l<d.length;l++)e=e&&d[l].occured;e&&c()}}function b(e,d){function k(){c.occured&&(c.time=(new Date).getTime())}var c=this,a=[];c.time=0;c.occured=d;k();c.notifySubscribers=function(){c.occured=!0;k();for(var d=0;d<a.length;d++)a[d].notify(e)};c.registerSubscriber=
  function(d){null!==d&&void 0!==d&&a.push(d);c.occured&&d.notify(e)}}var d=this,k={},e=[];d.registerEvent=function(d,a){if(void 0===k[d])for(k[d]=new b(d,a),a=0;a<e.length;a++){var f=new c([d],e[a]);k[d].registerSubscriber(f)}};d.registerSubscriber=function(e,a){a=new c(e,a);for(var b=0;b<e.length;b++){var f=e[b];d.registerEvent(f,!1);k[f].registerSubscriber(a)}return a};d.notifySubscribers=function(e){k[e].notifySubscribers()};d.getUnoccuredEvents=function(e){var d=[],c;for(c=0;c<e.length;c++){var a=
  e[c];(void 0===k[a]||k[a]&&!k[a].occured)&&d.push(a)}return d};d.getMaxTime=function(e){var d=0,c;for(c=0;c<e.length;c++){var a=e[c];k[a]&&k[a].time>d&&(d=k[a].time)}return d};d.addGlobalHanlder=function(d){"function"===typeof d&&e.push(d)};return d}();a.whenAll=function(c,a){return h.registerSubscriber(c,a)};a.whenAny=function(c,b){for(var d=[],k=0;k<c.length;k++)d.push(a.whenAll([c[k]],b));return d};a.onEvent=h.addGlobalHanlder;a.register=function(c){h.registerEvent(c,!0);h.notifySubscribers(c)};
  a.recordLatency=function(c){g[c]||(g[c]=!0,b.uet&&uet("cf",c,{wb:1}),b.uex&&uex("ld",c,{wb:1}))};a.registerX1Once=function(c){c&&c.register("x1");a.registerX1Once=f};a.fireX2Once=function(c,g){b.uet&&uet("x2",void 0,void 0,g);a.registerX2Once(c);a.fireX2Once=f};a.registerX2Once=function(c){a.registerX2Once=f;c&&c.register("x2");a.register("x2")};a.regGwAtfReadyOnce=function(c){c&&c.register("gwAtfReady");a.register("gwAtfReady");a.regGwAtfReadyOnce=f};a.getUnoccuredEvents=h.getUnoccuredEvents;a.getMaxTime=
  h.getMaxTime;return a}(window);"use strict";GWI.preload=function(b,a){if(b){var g=new Image;g.onload=function(){a&&a()};g.src=b;return g.complete}};"use strict";GWI.instrumentImages=function(b,a){var g={};if(b&&a)for(g.imgArray=a.split(" "),g.totalImgs=g.imgArray.length,g.scope=b+"-visible",g.imgReady=function(){g.totalImgs--;0===g.totalImgs&&(GWI.recordLatency(g.scope),GWI.register(g.scope))},b=0;b<g.imgArray.length;b++)GWI.preload(g.imgArray[b],g.imgReady);return g};"use strict";
  GWI.util=function(){return{logScope:function(b){var a=window.GWI;b&&a&&(a.recordLatency(b),a.register(b))},getParent:function(b){return(b=document.getElementById(b))&&b.parentElement},gwiData:function(b){var a;if(a=b)b=b.getAttribute("data-gwi"),a=window.JSON&&JSON.parse&&JSON.parse(b);return a||{}}}}();"use strict";
  GWI.BillboardWidget=function(b,a){if(window.GWI&&window.GWI.util){var g=function(){for(var a=0;a<c.length;++a)if(!c[a].complete)return;f.logScope(h.visible);f.logScope(h.active)};a=a||[];var f=window.GWI.util;b=f.getParent(b);var h=f.gwiData(b),c=[];for(b=0;b<a.length;++b)(function(b){var d=new Image;d.onload=g;d.src=a[b];c[b]=d})(b);g()}};"use strict";
  GWI.AssetUtil=function(){var b={image:function(a){a&&(window.GwInstrumentation&&window.GwInstrumentation.CF(a),a=window.ue,"object"===typeof a&&"function"===typeof a.count&&a.count("gw-preload-img",(a.count("gw-preload-img")||0)+1))}};return{load:function(a){a=a||[];for(var g=0;g<a.length;g++){var f=a[g];if(f&&f.src&&f.type&&"function"===typeof b[f.type])b[f.type](f.src)}}}}();"use strict";
  GWI.Card=function(b,a){function g(a){"object"==typeof ue&&"function"==typeof ue.count&&ue.count(a,(ue.count(a)||0)+1)}function f(a){for(var b=0;b<h.length;b++)if(-1<(" "+a.className+" ").indexOf(" "+h[b]+" "))return!0;return!1}var h=["image-map","scalable-image-map","scalable-image-link","product-shoveler"];return{autoInstVisible:function(c){if(b.GWI&&GWI.util){var h=function(){for(q=0;q<n.length;++q)if(!n[q].complete)return;d.logScope(p+"-visible")},d=GWI.util,k=d.getParent(c),e=a.getElementById(c),
  l=e.getElementsByTagName("img"),q,p=k.id,n=[];if(!f(e))if(0===p.length||p===c)g("gatewayCardInstrumentationFail");else{for(c=0;c<l.length;c++)k=l[c],k.onload=h,n[c]=k;h()}}},autoInstActive:function(c){if(b.GWI&&GWI.util){var h=GWI.util,d=h.getParent(c),k=a.getElementById(c),d=d.id;f(k)||(0===d.length||d===c?g("gatewayCardInstrumentationFail"):h.logScope(d+"-active"))}}}}(window,document);"use strict";
  P.register("atfWidgetComponent",function(){function b(d){var c=Array.prototype.slice.call(m("#gw-card-layout .gw-col")),e,b=[],g=(e=document.getElementById("gw-card-layout"))&&e.dataset&&e.dataset.gridBreakpoint?e.dataset.gridBreakpoint:"ws",p="xs"===g?2:"sm"===g?3:4,n="data-order-"+g,t=0,r=0,u=0;for(e=0;e<c.length;e++)u+=f(c[e],g);for(e=d;0<=e;e--)if(u>=e*p){t=e*p;r=d-e;break}c.sort(function(e,d){return parseInt(e.getAttribute(n))-parseInt(d.getAttribute(n))});for(e=d=0;d<t;)d+=f(c[e],g),Array.prototype.push.apply(b,
  a(c[e])),e++;if(0<r)if((c=h())&&c.length>=r)for(e=0;e<r;e++)Array.prototype.push.apply(b,c[e]);else b.push("gw-never-event");return b}function a(d){for(var a=d.querySelectorAll(".gw-row"),e=[],b=0;b<a.length;b++)g(a[b])||e.push(a[b].id);c(d,"celwidget")&&!g(d)&&e.push(d.id);return e}function g(d){return 0<d.getElementsByClassName("text/x-dacx-safeframe").length||0<d.getElementsByClassName("text/x-APE-lightAds").length||0<d.getElementsByTagName("iframe").length}function f(d,a){d=parseInt(d.getAttribute("data-col-span-"+
  a));return 1<d?d:1}function h(){var a=[],b=m("#gw-content-grid .gwi-row"),e;for(e=0;e<b.length;e++){var f=[],g=b[e];c(g,"desktop-row")&&f.push(g.id);if(c(g,"billboardRowWrapper")){var g=g.querySelectorAll(".billboard"),h;for(h=0;h<g.length;h++)f.push(g[h].id)}a.push(f)}return a}function c(a,c){return-1<(" "+a.className+" ").indexOf(" "+c+" ")}function m(a){if("function"!==typeof document.querySelectorAll&&"object"!==typeof document.querySelectorAll){var c=[];if(document.createStyleSheet&&document.all){var e=
  document.createStyleSheet(""),b=document.all,g=b.length;if(e&&e.addRule&&e.removeRule){e.addRule(a,"gwTemp:forQS");for(a=0;a<g;a+=1)"forQS"===b[a].currentStyle.gwTemp&&c.push(b[a]);e.removeRule(0)}}return c}return document.querySelectorAll(a)}return{getWidgets:function(){return b(2)}}});"use strict";
  (function(){var b=Array.prototype.slice;try{b.call(document.documentElement)}catch(a){Array.prototype.slice=function(a,f){f="undefined"!==typeof f?f:this.length;if("[object Array]"===Object.prototype.toString.call(this))return b.call(this,a,f);var h=[],c;c=this.length;a=a||0;a=0<=a?a:Math.max(0,c+a);var m="number"==typeof f?Math.min(f,c):c;0>f&&(m=c+f);c=m-a;if(0<c)if(h=Array(c),this.charAt)for(f=0;f<c;f++)h[f]=this.charAt(a+f);else for(f=0;f<c;f++)h[f]=this[a+f];return h}}})();
  GWI.duff=function(b,a){function g(a){g=h;b.uet&&(uet("af",void 0,void 0,a),uet("fn",void 0,void 0,a),b.P&&P.register("fn"));f()}function f(){f=h;try{b.P&&P.register("af"),b.P&&P.register("gwAtfReady"),GWI.register("af"),GWI.register("gwAtfReady"),b.P&&P.register("sp.load.js"),b.uet&&uet("cf","spLoadJs",{wb:1}),b.uex&&uex("ld","spLoadJs",{wb:1})}catch(a){}}var h=function(){},c=!1;GWI.onEvent(function(){P.when("atfWidgetComponent").execute("fire-atf",function(a){if(!c){a=a.getWidgets();var b=[],f;for(f=
  0;f<a.length;f++)b.push(a[f]+"-visible");atfEvents=b;atfEvents=atfEvents.concat(["cf"]);b=atfEvents;a=GWI.getUnoccuredEvents(b);b=GWI.getMaxTime(b);a.length?c=!1:(g(b),c=!0)}})})}(window,document);"use strict";
  var GwInstrumentation=function(b){function a(){c&&0===h&&(b.uet&&uet("cf"),b.P&&P.register("cf"),b.GWI&&GWI.register("cf"),b.ue&&ue.tag&&b.ue.tag(m?"gwCFImgCache":"gwCFImgNoCache"))}function g(a){P.when("gwAjax").execute(function(e){e(a.uri,{cache:!1,type:"post",data:a.data,id:"ajaxATF"})})}var f={},h=0,c=!1,m=1,d={};f.markAF=function(){};f.markH1Af=function(d){c=!0;b.uet&&uet("cf","h1Af",{wb:1});b.uex&&uex("ld","h1Af",{wb:1});b.P&&P.register("h1Af");a();d&&g(d)};f.preload=function(a,e){if(a){var b=
  new Image;b.onload=function(){e&&e()};b.src=a;return b.complete}};f.CF=function(b){var e,c=!1;if("string"===typeof b)d[b]||(e=new f.CF,d[b]=e,b=f.preload(b,function(){e.ready()}),m&=b);else{if(this.constructor===f.CF)return e={},h++,e.ready=function(){c||(c=!0,h--,a())},e;throw Error("Incorrect invocation of GwInstrumentation.CF(...)");}};return f}(window);"use strict";
  P.register("LinkDecorator",function(){var b=["pf_rd_p","pd_rd_r","pd_rd_w","pd_rd_wg","ref_"],a=function(a,b){var c=document.getElementById(b);a&&a.split(" ").forEach(function(a){c&&c.addEventListener?c.addEventListener(a,g):c&&c.attachEvent&&c.attachEvent("on"+a,g)})},g=function(a){a=a||window.event;var b=a.which||a.keyCode;if("keydown"!=a.type||13===b)for(a=a.target||a.srcElement;a&&a.parentNode;){b=a.tagName&&a.tagName.toLowerCase();if("a"==b||"area"==b){f(a);break}else if(a.id&&"gw-quick-look-btn"==
  a.id){a=a.parentNode;a=a.getElementsByTagName&&a.getElementsByTagName("a");for(b=0;b<a.length;b++){var c=a&&a[b];c&&f(c)}break}a=a.parentNode}},f=function(a){var b=a.href,c=window.ue&&window.ue.rid,d;if(d=b&&c&&a.baseURI)d=a.baseURI,d=b.substring(0,d.length+1)!==d+"#"&&b!==d;d&&0>b.indexOf("pf_rd_r\x3d"+c)&&h(c,a)},h=function(a,f){var g=c(f.href),h=g.queryParams;if(h.pf_rd_r)a&&a!==h.pf_rd_r&&(h.pf_rd_r=a);else{a&&(h.pf_rd_r=a);var n=d(f);n&&k(b,function(a){var b=n.getAttribute("data-"+a);b&&(h[a]=
  b)})}f.href=g.urlPath+"?"+m(h)},c=function(a){var b=a.indexOf("?");if(0>b)return{urlPath:a,queryParams:{}};var c={},d=a.substring(b+1).split("\x26");k(d,function(a){a=a.split("\x3d",2);2==a.length&&!c[a[0]]&&(c[a[0]]=a[1])});return{urlPath:a.substring(0,b),queryParams:c}},m=function(a){var b=[],c;for(c in a)b.push(c+"\x3d"+a[c]);return b.join("\x26")},d=function(a){for(;a&&a.parentNode;){if(a.className&&0<=a.className.indexOf("celwidget"))return a;a=a.parentNode}},k=function(a,b){for(var c=0;c<a.length;c++)b(a[c])};
  return function(b){a("mousedown touchstart keydown",b)}});
  (function(b){var a=window.AmazonUIPageJS||window.P,d=a._namespace||a.attributeErrors,c=d?d("AmazonGatewayHackAssets",""):a;c.guardFatal?c.guardFatal(b)(c,window):c.execute(function(){b(c,window)})})(function(b,a,d){a.P&&b.when("A","ready").execute(function(c){c.on("packard:glow:destinationChangeAll",function(){a.location.reload()})});a.P&&b.when("p-detect").execute(function(){var a=document;!/(^|\s+)a-touch(\s+|$)/.test(a.documentElement.className)&&("ontouchend"in a||0<navigator.maxTouchPoints||
  0<navigator.msMaxTouchPoints)&&(a.documentElement.className+=" a-touch")});(function(a){a.P&&b.when("A").execute(function(b){a.GWI&&a.GWI.recordLatency("gwAUIReady")})})(a);a.P&&b.when("jQuery").execute(function(c){a.GWI&&a.GWI.recordLatency("jQueryReady");c(document).ready(function(){a.GWI&&a.GWI.recordLatency("jQueryDomReady")});c(a).load(function(){a.GWI&&a.GWI.recordLatency("jQueryWindowLoad");try{b.register("af"),b.register("sp.load.js"),b.register("gwAtfReady")}catch(c){}})});a.P&&b.when("af").execute(function(){b.register("x1");
  b.register("x2")});a.P&&b.when("ready","af").execute(function(){b.register("gwLayoutReady");a.GWI&&a.GWI.recordLatency("gwLayoutReady")});a.P&&b.when("navCF").execute(function(){a.GWI&&a.GWI.recordLatency("navCF")});a.P&&b.when("A","gwLayoutReady").execute(function(b){b.capabilities.hires&&b.$(a).trigger("resize")});document.documentElement.setAttribute("data-useragent",navigator.userAgent);document.documentElement.setAttribute("data-platform",navigator.platform)});
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/01rGP6HIADL.js?AUIClients/GenericObservableJS');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/41yyRnzn0bL.js?AUIClients/AmazonGatewayAuiAssets#224544-T1');
  (function(e){var g=window.AmazonUIPageJS||window.P,k=g._namespace||g.attributeErrors,b=k?k("AmazonGatewayCardGridAssets",""):g;b.guardFatal?b.guardFatal(e)(b,window):b.execute(function(){e(b,window)})})(function(e,g,k){e.when("jQuery").register("GwGridLogic",function(b){function g(a){a=a||b("html").width();return n&&1239>=a?"sm":"ws"}function k(a,b){a.attr("data-hide-at-"+b,!0)}function h(a,b,c){if(!a.length)throw Error("No grid layout found with selector");this.$grid=a;this.selector=b;this.context=
  c;this.sorted={}}function l(a,d){var c=b(a,d);if(!c.length)throw Error("No grid found with selector: "+a);this.gridDom=new h(c,a,d)}var p={xs:2,sm:3,ws:4},n=!1;b("html").hasClass("a-lt-ie9")||(n=!0);h.prototype.setBreakpoint=function(a){this.$grid.attr("data-grid-breakpoint",a)};h.prototype.sortFor=function(a){if(this.sorted[a])return this.sorted[a];var d=b(this.selector+"\x3e [data-order-"+a+"]",this.context).sort(function(c,f){c=b(c).data("order-"+a);f=b(f).data("order-"+a);return c<f?-1:c>f?1:
  0});return this.sorted[a]=d};h.prototype.updateSourceOrder=function(a){};h.prototype.dropIncompleteRows=function(a){if(!this.$grid.data("init-"+a)){var d=this.sortFor(a),c=[],f=0,g=d.length,e=[];d.each(function(d,h){var m=b(h),l=m.hasClass("card-flow-row-break"),m=m.data("col-span-"+a)||1;l||(f+=m);f>p[a]?(k(b(c),a),c=[h],f=m):c.push(h);if(l||d===g-1)f<p[a]?k(b(c),a):e=e.concat(c),c=[],f=0});b([e[0],e.pop()]).each(function(c,d){c=b(d);c.hasClass("card-flow-row-break")&&k(c,a)});this.$grid.data("init-"+
  a,!0)}};l.prototype.init=function(){if(this.gridDom.$grid){this.breakpoint=g();this.update();var a=this;e.when("A").execute("RegisterResizeListener",function(b){b.on("resize",function(c,b){if(b.width||b.orientation)c=g(c.width),c!==a.breakpoint&&(a.breakpoint=c,a.update())})});return this}};l.prototype.update=function(){this.gridDom&&(this.gridDom.setBreakpoint(this.breakpoint),this.gridDom.dropIncompleteRows(this.breakpoint),this.gridDom.updateSourceOrder(this.breakpoint))};return function(a,b){return new l(a,
  b)}})});
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('h1Af').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/31qubZ+1HFL.js?AUIClients/AmazonGatewayHerotatorJS');
  });
  
  
      window.GWI && GWI.AssetUtil && GWI.AssetUtil.load(
    [{"type":"image","src":"https://images-na.ssl-images-amazon.com/images/G/01/slsm/es/slsm_gw-hero-desktop_01_3000x1200_1x_v4_ES._CB428778290_.jpg"}]
  );
      window.P && P.register('preload');
  
  
  
  
  
    window.P && P.when('A','ready').execute(function(A) {
      var $ = A.$;
      $('.feed-carousel').first().addClass('first-carousel');
      P.register('gw-first-carousel');
      if($('#desktop-ad-atf').height() === 0) {
        $('.gw-ad-row .a-fixed-right-grid-inner').css('padding-right','0px');
      }
    });
  
  ue_mark('csm:hc:ob');ue_mark('csm:hc:eb');
  
              
                  window.ue_ihe=(window.ue_ihe||0)+1;
  1===window.ue_ihe&&(function(e,k,f){function m(a){q||(q=n[a.type].id,"undefined"===typeof a.clientX?(h=a.pageX,l=a.pageY):(h=a.clientX,l=a.clientY),2!=q||d&&(d!=h||c!=l)?(p(),g.isl&&k.setTimeout(function(){b("at",g.id)},0)):(d=h,c=l,q=0))}function p(){for(var a in n)n.hasOwnProperty(a)&&g.detach(a,m,n[a].parent)}function t(){for(var a in n)n.hasOwnProperty(a)&&g.attach(a,m,n[a].parent)}function r(){var b="";!a&&q&&(a=1,b+="\x26ui\x3d"+q);return b}var g=e.ue,b=e.uex,a=0,q=0,d,c,h,l,n={click:{id:1,
  parent:f},mousemove:{id:2,parent:f},scroll:{id:3,parent:k},keydown:{id:4,parent:f}};g&&b&&(t(),g._ui=r)}(ue_csm,window,document),function(e,k){function f(a,b,d){d=d||new Date(+new Date+t);d="expires\x3d"+d.toUTCString();r.cookie=a+"\x3d"+b+";"+d+";path\x3d/"}function m(a){a+="\x3d";for(var b=r.cookie.split(";"),d=0;d<b.length;d++){for(var c=b[d];" "==c.charAt(0);)c=c.substring(1);if(0===c.indexOf(a))return decodeURIComponent(c.substring(a.length,c.length))}return""}function p(a,b,d){if(!b)return a;
  -1<a.indexOf("{")&&(a="");for(var c=a.split("\x26"),h,g=!1,e=!1,f=0;f<c.length;f++)h=c[f].split(":"),h[0]==b?(!d||g?c.splice(f,1):(h[1]=d,c[f]=h.join(":")),e=g=!0):2>h.length&&(c.splice(f,1),e=!0);e&&(a=c.join("\x26"));!g&&d&&(0<a.length&&(a+="\x26"),a+=b+":"+d);return a}e=e.ue||{};var t=3024E7,r=ue_csm.document||k.document,g=null,b;a:{try{b=k.localStorage;break a}catch(a){}b=void 0}e.count&&e.count("csm.cookieSize",document.cookie.length);e.cookie={get:m,set:f,updateCsmHit:function(a,e,d){try{var c;
  if(!(c=g)){var h;a:{try{if(b&&b.getItem){h=b.getItem("csm-hit");break a}}catch(l){}h=void 0}c=h||m("csm-hit")||"{}"}c=p(c,a,e);g=c=p(c,"t",+new Date);try{b&&b.setItem&&b.setItem("csm-hit",c)}catch(l){}f("csm-hit",c,d)}catch(l){"function"==typeof k.ueLogError&&ueLogError(Error("Cookie manager: "+l.message),{logLevel:"WARN"})}}}}(ue_csm,window),function(e,k){function f(a){a="";var e=b.isBFT?"b":"s",d=""+b.oid,c=""+b.lid,f=d;d!=c&&20==c.length&&(e+="a",f+="-"+c);b.tabid&&(a=b.tabid+"+");a+=e+"-"+f;a!=
  g&&100>a.length&&(g=a,b.cookie?b.cookie.updateCsmHit(r,a+("|"+ +new Date)):document.cookie="csm-hit\x3d"+a+("|"+ +new Date)+t+"; path\x3d/")}function m(){g=0}function p(a){!0===k[b.pageViz.propHid]?g=0:!1===k[b.pageViz.propHid]&&f({type:"visible"})}var t="; expires\x3d"+(new Date(+new Date+6048E5)).toGMTString(),r="tb",g,b=e.ue||{};e=b.pageViz&&b.pageViz.event&&b.pageViz.propHid;b.attach&&(b.attach("click",f),b.attach("keyup",f),e||(b.attach("focus",f),b.attach("blur",m)),e&&(b.attach(b.pageViz.event,
  p,k),p({})));b.aftb=1}(ue_csm,document),ue_csm.ue.stub(ue,"impression"),ue.stub(ue,"trigger"));
              
  
  
  ue_mark('csm:hc:ee');
  if (window.ue_ihe === 1) {
  
  
      if(window.ue&&uet) { uet('bb'); }
  }
  
  ue_mark('csm:hc:oe');
  
  
  window.P && P.register('bb');
  if (typeof ues === 'function') {
    ues('t0', 'portal-bb', new Date());
    ues('ctb', 'portal-bb', 1);
  }
  
  
  
  
      
          !function(){function n(n,t){var r=i(n);return t&&(r=r("instance",t)),r}var r=[],c=0,i=function(t){return function(){var n=c++;return r.push([t,[].slice.call(arguments,0),n,{time:Date.now()}]),i(n)}};n._s=r,this.csa=n}();;
  csa('Config', {});
          if (window.csa) {
              csa("Config", {
                  'Application': 'Retail:Prod:www.amazon.com',
                  'Events.Namespace': 'csa',
                  'ObfuscatedMarketplaceId': 'ATVPDKIKX0DER',
                  'Events.SushiEndpoint': 'https://unagi.amazon.com/1/events/com.amazon.csm.csa.prod',
                  'CacheDetection.RequestID': "1AJW44ZF301222PBP63J",
                  'CacheDetection.Callback': window.ue && ue.reset
              });
  
              csa("Events")("setEntity", {
                  page: {requestId: "1AJW44ZF301222PBP63J", meaningful: "interactive"},
                  session: {id: "130-4633468-0244106"}
              });
          }
          !function(n){var e,o,r="splice",i=n.csa,t={},u={},f=n.csa._s,c=0,a={},s={},g=setTimeout,l=Object.keys;function h(n,t){return i(n,t)}function d(n,t){var i=u[n]||{};O(i,t),u[n]=i,g(y,0)}function p(n,t){a[n]||(a[n]=[]),a[n].push(t)}function v(n,t){if(n in s)t(s[n]);else{p(n,function(n){return t(n),!1})}}function m(n){if(t.DEBUG)throw n}function w(){return Math.abs(4294967295*Math.random()|0).toString(36)}function b(n,t){return function(){try{n.apply(this,arguments)}catch(n){m(n.message||n)}}}function y(){for(var n=0;n<f.length;){var t=f[n],i=t[0]in u;if(!i&&!o)return void(c=t.length);i?(f[r](c=n,1),S(t)):n++}}
          function S(n){var arguments,t=u[n[0]],i=(arguments=n[1])[0];if(!t||!t[i])return m("Undefined function: "+t+"/"+i);e=n[3],u[n[2]]=t[i].apply(t,arguments.slice(1))||{},e=0}function D(){o=1,y()}function O(t,i){l(i).forEach(function(n){t[n]=i[n]})}v("$beforeunload",D),d("Config",{instance:function(n){O(t,n)}}),i.plugin=b(function(n){n(h)}),h.config=t,h.register=d,h.on=p,h.removeListener=function(n,t){var i=a[n];i&&i[r](i.indexOf(t),1)},h.once=v,h.emit=function(n,t){for(var i=a[n]||[],e=0;e<i.length;)!1===i[e](t)?i[r](e,1):e++;s[n]=t||{}},h.UUID=function(){return[w(),w(),w(),w()].join("-")},h.time=function(n){var t=e?new Date(e.time):new Date;return"ISO"===n?t.toISOString():t.getTime()},h.error=m,h.exec=b,(h.global=n).csa._s.push=function(n){n[0]in u&&(!f.length||o)?S(n):f[r](c++,0,n)},y(),g(function(){g(D,t.SkipMissingPluginsTimeout||5e3)},1)}("undefined"!=typeof window?window:global);csa.plugin(function(t){var e;function n(){if(!e)try{e=t.global.localStorage||{}}catch(t){e={}}}t.store=function(t,c){try{if(n(),!t)return Object.keys(e);if(!c)return e[t];e[t]=c}catch(t){}},t.deleteStored=function(t){try{n(),delete e[t]}catch(t){}}});csa.plugin(function(t){var r,e=t.global,o=t("Events"),i=e.location,d=e.document,a=((e.performance||{}).navigation||{}).type,n=e.addEventListener,f=t.emit;function l(a){var e=!!r;e&&(f("$beforePageTransition"),f("$pageTransition"),o("removeEntity","page"));var n={schemaId:"<ns>.PageEntity.1",id:r=t.UUID(),url:i.href,server:i.hostname,path:i.pathname,referrer:d.referrer,title:d.title};Object.keys(a||{}).forEach(function(e){n[e]=a[e]}),o("setEntity",{page:n}),e&&f("$afterPageTransition")}function s(){f("$load"),f("$ready"),f("$afterload")}function c(){f("$ready"),f("$beforeunload"),f("$unload"),f("$afterunload")}i&&d&&(n&&(n("beforeunload",c),n("pagehide",c),"complete"===d.readyState?s():n("load",s)),t.register("SPA",{newPage:l}),l({transitionType:{0:"hard",1:"refresh",2:"back-button"}[a]||"unknown"}))});csa.plugin(function(c){var n="Events",e="UNKNOWN",a="id",u="all",t="messageId",i="timestamp",f="producerId",o="application",r="obfuscatedMarketplaceId",s="entities",d="schemaId",l="version",p="attributes",v="<ns>",g=c.config,h=(c.global.location||{}).host,m=g[n+".Namespace"]||"csa_other",I=g.Application||"Other"+(h?":"+h:""),b=c("Transport"),O={},y=function(n,e){Object.keys(n).forEach(e)};function E(t,i,o){y(i,function(n){var e=o===u||(o||{})[n];n in t||(t[n]={version:1,id:i[n][a]||c.UUID()}),U(t[n],i[n],e)})}function U(e,t,i){y(t,function(n){!0!==i&&1!==i&&!function(n,e){return n===a||!!~(e||[]).indexOf(n)}(n,i)||(e[n]=t[n])})}function N(o,n,r){y(n,function(n){var e=o[n];if(e[d]){var t={},i={};t[a]=e[a],t[f]=e[f]||r,t[d]=e[d],t[l]=e[l]++,t[p]=i,k(t),U(i,e,1),D(i),b("log",t)}})}function k(n){n[i]=function(n){return"number"==typeof n&&(n=new Date(n).toISOString()),n||c.time("ISO")}(n[i]),n[t]=c.UUID(),n[o]=I,n[r]=g.ObfuscatedMarketplaceId||e,n[d]=n[d].replace(v,m)}function D(n){delete n[l],delete n[d],delete n[f]}function S(o){var r={};this.log=function(n,e){var t={},i=(e||{}).ent;return n?"string"!=typeof n[d]?c.error("A valid schema id is required for the event"):(k(n),E(t,O,i),E(t,r,i),E(t,n[s]||{},i),y(t,function(n){D(t[n])}),n[f]=o[f],n[s]=t,void b("log",n)):c.error("The event cannot be undefined")},this.setEntity=function(n){E(r,n,u),N(r,n,o[f])}}c.register(n,{setEntity:function(n){E(O,n,u),N(O,n,"csa")},removeEntity:function(n){delete O[n]},instance:function(n){return new S(n)}})});csa.plugin(function(s){var c,l="Transport",d="post",u="preflight",r="csa.cajun.",i="store",a="deleteStored",n="addEventListener",f="sendBeacon",t=0,e=s.config[l+".BufferSize"]||2e3,g=s.config[l+".RetryDelay"]||1500,o=[],h=0,p=[],v=s.global,y=v.document,m=s.config[l+".FlushInterval"]||5e3,E=0;function T(n){if(864e5<s.time()-+new Date(n.timestamp))return s.error("Event is too old: "+n);h<e&&(o.push(n),h++,!E&&t&&(E=setTimeout(R,m)))}function R(){p.forEach(function(t){var e=[];o.forEach(function(n){t.accepts(n)&&e.push(n)}),e.length&&(t.chunks?t.chunks(e).forEach(function(n){S(t,n)}):S(t,e))}),o=[],E=0}function S(t,e){function o(){s[a](r+n)}var n=s.UUID();s[i](r+n,JSON.stringify(e)),[function(n,t,e){var o=v.navigator||{},r=v.cordova||{};if(!o[f]||!n[d])return 0;n[u]&&r&&"ios"===r.platformId&&!c&&((new Image).src=n[u]().url,c=1);var i=n[d](t);if(!i.type&&o[f](i.url,i.body))return e(),1},function(n,t,e){if(!n[d])return 0;var o=n[d](t),r=o.url,i=o.body,c=o.type,u=new XMLHttpRequest,a=0;function f(n,t,e){u.open("POST",n),e&&u.setRequestHeader("Content-Type",e),u.send(t)}return u.onload=function(){u.status<299?e():s.config[l+".XHRRetries"]&&a<3&&setTimeout(function(){f(r,i,c)},++a*g)},f(r,i,c),1}].some(function(n){try{return n(t,e,o)}catch(n){}})}s.once("$afterload",function(){t=1,function(e){(s[i]()||[]).forEach(function(n){if(!n.indexOf(r))try{var t=s[i](n);s[a](n),JSON.parse(t).forEach(e)}catch(n){s.error(n)}})}(T),y&&y[n]&&y[n]("visibilitychange",R,!1),R()}),s.once("$afterunload",function(){t=1,R()}),s.on("$afterPageTransition",function(){h=0}),s.register(l,{log:T,register:function(n){p.push(n)}})});csa.plugin(function(n){var r=n.config["Events.SushiEndpoint"];n("Transport")("register",{accepts:function(n){return n.schemaId},post:function(n){var t=n.map(function(n){return{data:n}});return{url:r,body:JSON.stringify({events:t})}},preflight:function(){var n,t=/\/\/(.*?)\//.exec(r);return t&&t[1]&&(n="https://"+t[1]+"/ping"),{url:n}},chunks:function(n){for(var t=[];500<n.length;)t.push(n.splice(0,500));return t.push(n),t}})});csa.plugin(function(i){var t,a,o,r,d=i.config["PageViews.ImpressionMinimumTime"]||1e3,e="addEventListener",n="hidden",s="innerHeight",c="innerWidth",g="renderedTo",f=g+"Viewed",m=g+"Meaningful",u=g+"Impressed",l=1,v=2,h=3,p=4,P=5,T="loaded",y=7,I=8,w=i.global,E=i("Events",{producerId:"csa"}),V=w.document,$={},b={},M=P;if(!V||!V[e]||void 0===V[n])return C("PageStateChange.2",{state:"ignored"});function S(e){if(!$[y]){var n;if($[e]=i.time(),e!==h&&e!==T||(t=t||$[e]),t&&M===p)a=a||$[e],(n={})[m]=t-o,n[f]=a-o,C("PageView.4",n),r=r||setTimeout(L,d);if(e!==P&&e!==l&&e!==v||(clearTimeout(r),r=0),e!==l&&e!==v||C("PageRender.3",{transitionType:e===l?"hard":"soft"}),e===y)(n={})[m]=t-o,n[f]=a-o,n[u]=$[e]-o,C("PageImpressed.2",n)}}function C(e,n){b[e]||(n.schemaId="<ns>."+e,E("log",n,{ent:"all"}),b[e]=1)}function H(){0===w[s]&&0===w[c]?(M=I,i("Events")("setEntity",{page:{viewport:"hidden-iframe"}})):M=V[n]?P:p,S(M)}function L(){S(y),r=0}function R(){var e=o?v:l;$={},b={},a=t=0,o=i.time(),S(e),H()}function W(){var e=V.readyState;"interactive"===e&&S(h),"complete"===e&&S(T)}R(),V[e]("visibilitychange",H,!1),V[e]("readystatechange",W,!1),i.on("$afterPageTransition",R),i.once("$load",W),i.on("$timing:loaded",W)});csa.plugin(function(r){var n=r.global,e=n.setTimeout,t=r.config["Interactions.AsyncClicks"],i="click";function c(n){if(n.id)return"//*[@id='"+n.id+"']";var t=function(n){var t,e=1;for(t=n.previousSibling;t;t=t.previousSibling)t.nodeName===n.nodeName&&(e+=1);return e}(n),e=n.nodeName;return 1!==t&&(e+="["+t+"]"),n.parentNode&&(e=c(n.parentNode)+"/"+e),e}function o(n){!function(n,t){t?e(n,0):n()}(r.exec(function(){!function(n,t,e){var i=r("Content",{target:e}),o={schemaId:"csa.ContentInteraction.1",interaction:n,interactionData:t},a=c(e);a&&(o.attribution=a),i("log",o)}(i,{interactionX:""+n.pageX,interactionY:""+n.pageY},n.target)}),t)}(n.document||{}).body.addEventListener(i,o,{capture:!1,passive:!0})});

      
  ue_mark('csm:bo:oe');
  
  
  (function(d){document.createElement("header");function b(e){return[].slice.call(e)}function c(f,e){return{m:f,a:b(e)}}var a=function(f){var g={};g._sourceName=f;g._replay=[];g.getNow=function(i,h){return h};function e(i,h,j){i[j]=function(){g._replay.push(h.concat(c(j,arguments)))}}g.when=function(){var i=[c("when",arguments)];var h={};e(h,i,"run");e(h,i,"declare");e(h,i,"publish");e(h,i,"build");return h};e(g,[],"declare");e(g,[],"build");e(g,[],"publish");e(g,[],"importEvent");a._shims.push(g);return g};a._shims=[];if(!d.$Nav){d.$Nav=a("rcx-nav")}if(!d.$Nav.make){d.$Nav.make=a}}(window));
  $Nav.importEvent('navbarJS-beaconbelt');
  $Nav.declare('img.sprite', {
    'png8': 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/global-sprite_bluebeacon-v1._CB485918456_.png',
    'png32': 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized_layout1._CB468670774_.png',
    'png32-2x': 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global_bluebeacon-2x_optimized_layout1._CB468670774_.png'
  });
  $Nav.declare('img.timeline', {
    'timeline-icon-2x': 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/timeline_sprite_2x._CB443581191_.png'
  });
  window._navbarSpriteUrl = 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized_layout1._CB468670774_.png';
  $Nav.declare('img.pixel', 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._CB485935036_.gif');
  
  
  
 // data-a-state="{&quot;key&quot;:&quot;a-wlab-states&quot;}">{"AUI_LINK_REL_NOREFERRER_NOOPENER_274172":"C","AUI_TNR_V2_180836":"C","AUI_UX_145937":"C","AUI_DROPDOWN_274033":"C","AUI_PRELOAD_261698":"C","AUI_72554":"C","AUI_CONTROL_GROUP_273125":"C","AUI_PCI_RISK_BANNER_210084":"C","AUI_PERF_130093":"C"}typeof uex === 'function' && uex('ld', 'portal-bb', {wb: 1})ue_mark('csm:bo:ob');
  
  
  
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('navCF').execute(function() {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/41sybmk8W5L._RC|71cFZoIveoL.js,61b7nFf9AiL.js,41W9ohA0e+L.js,11vrNkbdcvL.js,21qaguVEGfL.js,41g5X89rw2L.js,51wilTzvmEL.js,31SHuHnJQqL.js_.js?AUIClients/NavDesktopUberAsset#desktop');
  });
  
  
  
      if(window.navmet===undefined) {
        window.navmet=[];
        if (window.performance && window.performance.timing && window.ue_t0) {
          var t = window.performance.timing;
          var now = + new Date();
          window.navmet.basic = {
            'networkLatency': (t.responseStart - t.fetchStart),
            'navFirstPaint': (now - t.responseStart),
            'NavStart': (now - window.ue_t0)
          };
        }
      }
  
  
  
  
  
  window.navmet.tmp=+new Date();
  
      window.uet && uet('ns');
      window._navbar = (function (o) {
        o.componentLoaded = o.loading = function(){};
        o.browsepromos = {};
        o.issPromos = [];
        return o;
      }(window._navbar || {}));
      window._navbar.declareOnLoad = function () { window.$Nav && $Nav.declare('page.load'); };
      if (window.addEventListener) {
        window.addEventListener("load", window._navbar.declareOnLoad, false);
      } else if (window.attachEvent) {
        window.attachEvent("onload", window._navbar.declareOnLoad);
      } else if (window.$Nav) {
        $Nav.when('page.domReady').run("OnloadFallbackSetup", function () {
          window._navbar.declareOnLoad();
        });
      }
      window.$Nav && $Nav.declare('logEvent.enabled',
        'false');
  
      window.$Nav && $Nav.declare('config.lightningDeals', {"activeItems":[],"marketplaceID":"ATVPDKIKX0DER","customerID":"A1XAGXT52CI5U9"});
    
  
  
  
        try {
          if(window.navmet===undefined)window.navmet=[]; if(window.$Nav) { $Nav.when('$', 'config', 'flyout.accountList', 'SignInRedirect', 'dataPanel').run('accountListRedirectFix', function ($, config, flyout, SignInRedirect, dataPanel) { if (!config.accountList) { return; } flyout.getPanel().onData(function (data) { if (SignInRedirect) { var $anchors = $('[data-nav-role=signin]', flyout.elem()); $.each($anchors, function(i, anchorEl) {SignInRedirect.setRedirectUrl($(anchorEl), null, null);});}});}); $Nav.when('$').run('defineIsArray', function(jQuery) { if(jQuery.isArray===undefined) { jQuery.isArray=function(param) { if(param.length===undefined) { return false; } return true; }; } }); $Nav.declare('config.cartFlyoutDisabled', 'true'); $Nav.when('$','$F','config','logEvent','panels','phoneHome','dataPanel','flyouts.renderPromo','flyouts.sloppyTrigger','flyouts.accessibility','util.mouseOut','util.onKey','debug.param').build('flyouts.buildSubPanels',function($,$F,config,logEvent,panels,phoneHome,dataPanel,renderPromo,createSloppyTrigger,a11yHandler,mouseOutUtility,onKey,debugParam){var flyoutDebug=debugParam('navFlyoutClick');return function(flyout,event){var linkKeys=[];$('.nav-item',flyout.elem()).each(function(){var $item=$(this);linkKeys.push({link:$item,panelKey:$item.attr('data-nav-panelkey')});});if(linkKeys.length===0){return;} var visible=false;var $parent=$('<div class=\'nav-subcats\'></div>').appendTo(flyout.elem());var panelGroup=flyout.getName()+'SubCats';var hideTimeout=null;var sloppyTrigger=createSloppyTrigger($parent);var showParent=function(){if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;} if(visible){return;} var height=$('#nav-flyout-shopAll').height(); $parent.css({'height': height});$parent.animate({width:'show'},{duration:200,complete:function(){$parent.css({overflow:'visible'});}});visible=true;};var hideParentNow=function(){$parent.stop().css({overflow:'hidden',display:'none',width:'auto',height:'auto'});panels.hideAll({group:panelGroup});visible=false;if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;}};var hideParent=function(){if(!visible){return;} if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;} hideTimeout=setTimeout(hideParentNow,10);};flyout.onHide(function(){sloppyTrigger.disable();hideParentNow();this.elem().hide();});var addPanel=function($link,panelKey){var panel=dataPanel({className:'nav-subcat',dataKey:panelKey,groups:[panelGroup],spinner:false,visible:false});if(!flyoutDebug){var mouseout=mouseOutUtility();mouseout.add(flyout.elem());mouseout.action(function(){panel.hide();});mouseout.enable();} var a11y=a11yHandler({link:$link,onEscape:function(){panel.hide();$link.focus();}});var logPanelInteraction=function(promoID,wlTriggers){var logNow=$F.once().on(function(){var panelEvent=$.extend({},event,{id:promoID});if(config.browsePromos&&!!config.browsePromos[promoID]){panelEvent.bp=1;} logEvent(panelEvent);phoneHome.trigger(wlTriggers);});if(panel.isVisible()&&panel.hasInteracted()){logNow();}else{panel.onInteract(logNow);}};panel.onData(function(data){renderPromo(data.promoID,panel.elem());logPanelInteraction(data.promoID,data.wlTriggers);});panel.onShow(function(){var columnCount=$('.nav-column',panel.elem()).length;panel.elem().addClass('nav-colcount-'+columnCount);showParent();var $subCatLinks=$('.nav-subcat-links > a',panel.elem());var length=$subCatLinks.length;if(length>0){var firstElementLeftPos=$subCatLinks.eq(0).offset().left;for(var i=1;i<length;i++){if(firstElementLeftPos===$subCatLinks.eq(i).offset().left){$subCatLinks.eq(i).addClass('nav_linestart');}} if($('span.nav-title.nav-item',panel.elem()).length===0){var catTitle=$.trim($link.html());catTitle=catTitle.replace(/ref=sa_menu_top/g,'ref=sa_menu');var $subPanelTitle=$('<span class=\'nav-title nav-item\'>'+ catTitle+'</span>');panel.elem().prepend($subPanelTitle);}} $link.addClass('nav-active');});panel.onHide(function(){$link.removeClass('nav-active');hideParent();a11y.disable();sloppyTrigger.disable();});panel.onShow(function(){a11y.elems($('a, area',panel.elem()));});sloppyTrigger.register($link,panel);if(flyoutDebug){$link.click(function(){if(panel.isVisible()){panel.hide();}else{panel.show();}});} var panelKeyHandler=onKey($link,function(){if(this.isEnter()||this.isSpace()){panel.show();}},'keydown',false);$link.focus(function(){panelKeyHandler.bind();}).blur(function(){panelKeyHandler.unbind();});panel.elem().appendTo($parent);};var hideParentAndResetTrigger=function(){hideParent();sloppyTrigger.disable();};for(var i=0;i<linkKeys.length;i++){var item=linkKeys[i];if(item.panelKey){addPanel(item.link,item.panelKey);}else{item.link.mouseover(hideParentAndResetTrigger);}}};});};
        } catch ( err ) {
          if ( window.$Nav ) {
            window.$Nav.when('metrics', 'logUeError').run(function(metrics, log) {
              metrics.increment('NavJS:AboveNavInjection:error');
              log(err.toString(), {
                'attribution': 'rcx-nav',
                'logLevel': 'FATAL'
              });
            });
          }
        }
      
  
  window.navmet.push({key:'PreNav',end:+new Date(),begin:window.navmet.tmp});
  
  
  window.navmet.tmp=+new Date();
  
  
  window.navmet.push({key:'UpNav',end:+new Date(),begin:window.navmet.tmp});
  
  
  window.navmet.main=+new Date();
  
  
  window.navmet.tmp=+new Date();
  
  
    var hmenu = document.getElementById("nav-hamburger-menu");
    hmenu.setAttribute("href", "javascript: void(0)");
    window.navHamburgerMetricLogger = function() {
      if (window.ue && window.ue.count) {
        var metricName = "Nav:Hmenu:IconClickActionPending";
        window.ue.count(metricName, (ue.count(metricName) || 0) + 1);
      }
      window.$Nav && $Nav.declare("navHMenuIconClicked",!0);
    };
    hmenu.addEventListener("click", window.navHamburgerMetricLogger);
    window.$Nav && $Nav.declare('hamburgerMenuIconAvailableOnLoad', false);
    window.$Nav && $Nav.declare('hamburgerMenuWeblabTreatment', 'T1');
    
  window.navmet.push({key:'HamburgerMenuIcon',end:+new Date(),begin:window.navmet.tmp});
          window.navmet.tmp=+new Date();
  
  
  window.navmet.push({key:'Logo',end:+new Date(),begin:window.navmet.tmp});
  
  window.navmet.tmp=+new Date();
  
  
  window.navmet.push({key:'Search',end:+new Date(),begin:window.navmet.tmp});
  
  window.navmet.tmp=+new Date();
  
  window.navmet.push({key:'Tools',end:+new Date(),begin:window.navmet.tmp});
  
  
  window.navmet.tmp=+new Date();
  
  window.navmet.push({key:'CrossShop',end:+new Date(),begin:window.navmet.tmp});
  
  window.navmet.tmp=+new Date();
  
  window.navmet.push({key:'SWM',end:+new Date(),begin:window.navmet.tmp});
  
  window.navmet.push({key:'NavBar',end:+new Date(),begin:window.navmet.main});
  
 
      
      window.$Nav && $Nav.when("data").run(function(data) { data({"freshTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<style>#nav-flyout-fresh{width:269px;padding:0;}#nav-flyout-fresh .nav-flyout-content{padding:0;}</style><a href='/-/es/amazonfresh'><img src='https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/yoda/flyout_72dpi._V270255989_.png' /></a>"}}}},"cartTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Cart","url":"/gp/cart/view.html?ref_=nav_err_cart_timeout"},"title":"Oops!","paragraph":"Unable to retrieve your cart."}}}},"primeTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<a href='/-/es/gp/prime'><img src='https://images-na.ssl-images-amazon.com/images/G/01/prime/piv/YourPrimePIV_fallback_CTA._V327346943_.jpg' /></a>"}}}},"ewcTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Cart","url":"/gp/cart/view.html?ref_=nav_err_ewc_timeout"},"title":"Oops!","paragraph":"There's a problem loading your cart right now."}}}},"errorWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Wishlist","url":"/gp/registry/wishlist/?ref_=nav_err_wishlist"},"title":"Oops!","paragraph":"Unable to retrieve your wishlist"}}}},"emptyWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Wishlist","url":"/gp/registry/wishlist/?ref_=nav_err_empty_wishlist"},"title":"Oops!","paragraph":"Your list is empty"}}}},"yourAccountContent":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Account","url":"/gp/css/homepage.html?ref_=nav_err_youraccount"},"title":"Oops!","paragraph":"Unable to retrieve your account"}}}},"shopAllTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"Unable to retrieve departments, please try again later"}}}},"kindleTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"Unable to retrieve list, please try again later"}}}}}); });
  window.$Nav && $Nav.when("util.templates").run("FlyoutErrorTemplate", function(templates) {
        templates.add("flyoutError", "<# if(error.title) { #><span class='nav-title'><#=error.title #></span><# } #><# if(error.paragraph) { #><p class='nav-paragraph'><#=error.paragraph #></p><# } #><# if(error.button) { #><a href='<#=error.button.url #>' class='nav-action-button' ><span class='nav-action-inner'><#=error.button.text #></span></a><# } #>");
      });
  window.$Nav && $Nav.when("data").run(function(data) { data({"timelineTimeout":{"html":"<div id='nav-timeline'><div id='nav-timeline-error-content'><span class='nav-title'>There’s a problem showing your shopping history right now</span><p class='nav-paragraph'>Please check your network connection or come back in a few minutes.</p></div></div>"}}); });
      if (typeof uet == 'function') {
      uet('bb', 'iss-init-pc', {wb: 1});
    }
    if (!window.$SearchJS && window.$Nav) {
      window.$SearchJS = $Nav.make('sx');
    }
  
    var opts = {
      host: "completion.amazon.com/search/complete"
    , marketId: "1"
    , obfuscatedMarketId: "ATVPDKIKX0DER"
    , searchAliases: ["aps","amazon-custom-products","amazon-devices","amazonbasics","amazonfresh","wholefoods","allthebestpets","bartelldrugs","bristolfarms","freshthyme","kegnbottle","missionwinespirits","petfoodexpress","sousaswineliquors","surdyksliquorcheeseshop","unionsquarewine","vintagegrape","westsidemarket","stripbooks","popular","apparel","electronics","sporting","sports-and-fitness","outdoor-recreation","fan-shop","garden","videogames","toys-and-games","jewelry","digital-text","digital-music","prime-digital-music","watches","grocery","hpc","instant-video","handmade","handmade-jewelry","handmade-home-and-kitchen","prime-instant-video","shop-instant-video","baby-products","office-products","software","smart-home","magazines","tools","automotive","misc","industrial","mi","pet-supplies","digital-music-track","digital-music-album","mobile","mobile-apps","movies-tv","music-artist","music-album","music-song","stripbooks-spanish","electronics-accessories","pantry","photo","audio-video","computers","furniture","kitchen","audible","audiobooks","beauty","shoes","arts-crafts","appliances","gift-cards","pets","outdoor","lawngarden","collectibles","replacement-parts","financial","fine-art","fashion","fashion-womens","fashion-womens-clothing","fashion-womens-jewelry","fashion-womens-shoes","fashion-womens-watches","fashion-womens-handbags","fashion-mens","fashion-mens-clothing","fashion-mens-jewelry","fashion-mens-shoes","fashion-mens-watches","fashion-girls","fashion-girls-clothing","fashion-girls-jewelry","fashion-girls-shoes","fashion-girls-watches","fashion-boys","fashion-boys-clothing","fashion-boys-jewelry","fashion-boys-shoes","fashion-boys-watches","fashion-baby","fashion-baby-boys","fashion-baby-girls","fashion-luggage","3d-printing","tradein-aps","todays-deals","live-explorations","local-services","vehicles","video-shorts","warehouse-deals","luxury-beauty","banjo-apps","black-friday","cyber-monday","alexa-skills","subscribe-with-amazon","courses","edu-alt-content","amazon-global-store","prime-wardrobe","under-ten-dollars","tempo"]
    , filterAliases: []
    , pageType: "Gateway"
    , requestId: "1AJW44ZF301222PBP63J"
    , sessionId: "130-4633468-0244106"
    , language: "es_US"
    , customerId: "A1XAGXT52CI5U9"
    , b2b: 0
    , fresh: 0
    , isJpOrCn: 0
    , isUseAuiIss: 1
  };
  
  var issOpts = {
      fallbackFlag: 1
    , isDigitalFeaturesEnabled: 0
    , isWayfindingEnabled: 1
    , dropdown: "select.searchSelect"
    , departmentText: "en {department}"
    , suggestionText: "Sugerencias de búsqueda"
    , recentSearchesTreatment: "C"
    , authorSuggestionText: "Explorar libros por XXAUTHXX"
    , translatedStringsMap: {"sx-recent-searches":"Búsquedas recientes","sx-your-recent-search":"Inspirado en tu búsqueda reciente"}
    , biaTitleText: ""
    , biaPurchasedText: ""
    , biaViewAllText: ""
    , biaViewAllManageText: ""
    , biaAndText: ""
    , biaManageText: ""
    , biaWeblabTreatment: ""
    , issNavConfig: {}
    , np: 0
    , issCorpus: []
    , cf: 1
    , removeDeepNodeISS: ""
    , trendingTreatment: "C"
    , useAPIV2: ""
    , opfSwitch: ""
    , isISSDesktopRefactorEnabled: "1"
    , useServiceHighlighting: "true"
    , isInternal: 0
    , isAPICachingDisabled: true
    , isBrowseNodeScopingEnabled: false
    , isStorefrontTemplateEnabled: false
    , disableAutocompleteOnFocus: ""
  };
  
    if (opts.isUseAuiIss === 1 && window.$Nav) {
    window.$Nav.when('sx.iss').run('iss-mason-init', function(iss){
      var issInitObj = buildIssInitObject(opts, issOpts, true);
  
      new iss.IssParentCoordinator(issInitObj);
  
      $SearchJS.declare('canCreateAutocomplete', issInitObj);
    });
  } else if (window.$SearchJS) {
    var iss;
  
    // BEGIN Deprecated globals
    var issHost = opts.host
      , issMktid = opts.marketId
      , issSearchAliases = opts.searchAliases
      , updateISSCompletion = function() { iss.updateAutoCompletion(); };
    // END deprecated globals
  
  
    $SearchJS.when('jQuery', 'search-js-autocomplete-lib').run('autocomplete-init', initializeAutocomplete);
    $SearchJS.when('canCreateAutocomplete').run('createAutocomplete', createAutocomplete);
  
  } // END conditional for window.$SearchJS
    function initializeAutocomplete(jQuery) {
    var issInitObj = buildIssInitObject(opts, issOpts);
    $SearchJS.declare("canCreateAutocomplete", issInitObj);
  } // END initializeAutocomplete
    function initSearchCsl(searchCSL, issInitObject) {
    searchCSL.init(
      opts.pageType,
      (window.ue && window.ue.rid) || opts.requestId
    );
    $SearchJS.declare("canCreateAutocomplete", issInitObject);
  } // END initSearchCsl
    function createAutocomplete(issObject) {
    iss = new AutoComplete(issObject);
  
    $SearchJS.publish("search-js-autocomplete", iss);
  
    logMetrics();
  } // END createAutocomplete
    function buildIssInitObject(opts, issOpts, isNewIss) {
      var issInitObj = {
          src: opts.host
        , sessionId: opts.sessionId
        , requestId: opts.requestId
        , mkt: opts.marketId
        , obfMkt: opts.obfuscatedMarketId
        , pageType: opts.pageType
        , language: opts.language
        , customerId: opts.customerId
        , fresh: opts.fresh
        , b2b: opts.b2b
        , aliases: opts.searchAliases
        , fb: issOpts.fallbackFlag
        , isDigitalFeaturesEnabled: issOpts.isDigitalFeaturesEnabled
        , isWayfindingEnabled: issOpts.isWayfindingEnabled
        , issPrimeEligible: issOpts.issPrimeEligible
        , deptText: issOpts.departmentText
        , sugText: issOpts.suggestionText
        , filterAliases: opts.filterAliases
        , biaWidgetUrl: opts.biaWidgetUrl
        , recentSearchesTreatment: issOpts.recentSearchesTreatment
        , authorSuggestionText: issOpts.authorSuggestionText
        , translatedStringsMap: issOpts.translatedStringsMap
        , biaTitleText: ""
        , biaPurchasedText: ""
        , biaViewAllText: ""
        , biaViewAllManageText: ""
        , biaAndText: ""
        , biaManageText: ""
        , biaWeblabTreatment: ""
        , issNavConfig: issOpts.issNavConfig
        , cf: issOpts.cf
        , ime: opts.isJpOrCn
        , mktid: opts.marketId
        , qs: opts.isJpOrCn
        , issCorpus: issOpts.issCorpus
        , deepNodeISS: {
            searchAliasAccessor: function($) {
              return (window.SearchPageAccess && window.SearchPageAccess.searchAlias()) ||
                     $('select.searchSelect').children().attr('data-root-alias');
            },
            searchAliasDisplayNameAccessor: function() {
              return (window.SearchPageAccess && window.SearchPageAccess.searchAliasDisplayName());
            }
          }
        , removeDeepNodeISS: issOpts.removeDeepNodeISS
        , trendingTreatment: issOpts.trendingTreatment
        , useAPIV2: issOpts.useAPIV2
        , opfSwitch: issOpts.opfSwitch
        , isISSDesktopRefactorEnabled: issOpts.isISSDesktopRefactorEnabled
        , useServiceHighlighting: issOpts.useServiceHighlighting
        , isInternal: issOpts.isInternal
        , isAPICachingDisabled: issOpts.isAPICachingDisabled
        , isBrowseNodeScopingEnabled: issOpts.isBrowseNodeScopingEnabled
        , isStorefrontTemplateEnabled: issOpts.isStorefrontTemplateEnabled
        , disableAutocompleteOnFocus: issOpts.disableAutocompleteOnFocus
      };
    
      // If we aren't using the new ISS then we need to add these properties
      
      if (!isNewIss) {
        issInitObj.dd = issOpts.dropdown; // The element with id searchDropdownBox doesn't exist in C.
        issInitObj.imeSpacing = issOpts.imeSpacing;
        issInitObj.isNavInline = 1;
        issInitObj.triggerISSOnClick = 0;
        issInitObj.sc = 1;
        issInitObj.np = issOpts.np;
      }
    
      return issInitObj;
    } // END buildIssInitObject
    function logMetrics() {
    if (typeof uet == 'function' && typeof uex == 'function') {
        uet('be', 'iss-init-pc',
            {
                wb: 1
            });
        uex('ld', 'iss-init-pc',
            {
                wb: 1
            });
    }
  } // END logMetrics
    
      
  window.$Nav && $Nav.declare('config.navDeviceType','desktop');
  
  window.$Nav && $Nav.declare('config.navDebugHighres',false);
  
  window.$Nav && $Nav.declare('config.pageType','Gateway');
  window.$Nav && $Nav.declare('config.subPageType','null');
  
  window.$Nav && $Nav.declare('config.dynamicMenuUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdynamic\x2Dmenu.html');
  
  window.$Nav && $Nav.declare('config.dismissNotificationUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdismissnotification.html');
  
  window.$Nav && $Nav.declare('config.enableDynamicMenus',true);
  
  window.$Nav && $Nav.declare('config.isInternal',false);
  
  window.$Nav && $Nav.declare('config.isBackup',false);
  
  window.$Nav && $Nav.declare('config.isRecognized',true);
  
  window.$Nav && $Nav.declare('config.transientFlyoutTrigger','\x23nav\x2Dtransient\x2Dflyout\x2Dtrigger');
  
  window.$Nav && $Nav.declare('config.subnavFlyoutUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fsubnav\x2Dflyout');
  
  window.$Nav && $Nav.declare('config.recordEvUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Frecordevent.html');
  window.$Nav && $Nav.declare('config.recordEvInterval',15000);
  window.$Nav && $Nav.declare('config.sessionId','130\x2D4633468\x2D0244106');
  window.$Nav && $Nav.declare('config.requestId','1AJW44ZF301222PBP63J');
  
  window.$Nav && $Nav.declare('config.alexaListEnabled',true);
  
  window.$Nav && $Nav.declare('config.readyOnATF',true);
  
  window.$Nav && $Nav.declare('config.dynamicMenuArgs',{"rid":"1AJW44ZF301222PBP63J","isFullWidthPrime":0,"isPrime":0,"dynamicRequest":1,"weblabs":"","isFreshRegionAndCustomer":"","primeMenuWidth":310});
  
  window.$Nav && $Nav.declare('config.customerName','Pedro');
  
  window.$Nav && $Nav.declare('config.yourAccountPrimeURL','https\x3A\x2F\x2Fwww.amazon.com\x2Fgp\x2Fcss\x2Forder\x2Dhistory\x2Futils\x2Ffirst\x2Dorder\x2Dfor\x2Dcustomer.html\x2Fref\x3Dya_prefetch_beacon\x3Fie\x3DUTF8\x26s\x3D130\x2D4633468\x2D0244106');
  
  window.$Nav && $Nav.declare('config.yourAccountPrimeHover',true);
  
  window.$Nav && $Nav.declare('config.searchBackState',{});
  
  window.$Nav && $Nav.declare('nav.inline');
  
  (function (i) {
  i.onload = function() {window.uet && uet('ne')};
  i.src = window._navbarSpriteUrl;
  }(new Image()));
  
  window.$Nav && $Nav.declare('config.autoFocus',false);
  
  window.$Nav && $Nav.declare('config.responsiveTouchAgents',["ieTouch"]);
  
  window.$Nav && $Nav.declare('config.responsiveGW',true);
  
  window.$Nav && $Nav.declare('config.pageHideEnabled',false);
  
  window.$Nav && $Nav.declare('config.sslTriggerType','pageReady');
  window.$Nav && $Nav.declare('config.sslTriggerRetry',0);
  
  window.$Nav && $Nav.declare('config.doubleCart',false);
  
  window.$Nav && $Nav.declare('config.signInOverride',false);
  
  window.$Nav && $Nav.declare('config.signInTooltip',false);
  
  window.$Nav && $Nav.declare('config.isPrimeMember',false);
  
  window.$Nav && $Nav.declare('config.packardGlowTooltip',false);
  
  window.$Nav && $Nav.declare('config.packardGlowFlyout',false);
  
  window.$Nav && $Nav.declare('config.rightMarginAlignEnabled',true);
  
  window.$Nav && $Nav.declare('config.flyoutAnimation',false);
  
  window.$Nav && $Nav.declare('config.campusActivation','null');
  
  window.$Nav && $Nav.declare('config.primeTooltip',false);
  
  window.$Nav && $Nav.declare('config.primeDay',false);
  
  window.$Nav && $Nav.declare('config.disableBuyItAgain',false);
  
  window.$Nav && $Nav.declare('config.enableCrossShopBiaFlyout',false);
  
  window.$Nav && $Nav.declare('config.pseudoPrimeFirstBrowse',null);
  
  window.$Nav && $Nav.declare('config.sdaYourAccount',{"url":"/ma/api/notification"});
  
  window.$Nav && $Nav.declare('config.csYourAccount',{"url":"/gp/youraccount/navigation/sidepanel"});
  
  window.$Nav && $Nav.declare('config.cartFlyoutDisabled',true);
  
  window.$Nav && $Nav.declare('config.isTabletBrowser',false);
  
  window.$Nav && $Nav.declare('config.HmenuProximityArea',[200,200,200,200]);
  
  window.$Nav && $Nav.declare('config.HMenuIsProximity',true);
  
  window.$Nav && $Nav.declare('config.desktopHMenuRefactor',true);
  
  window.$Nav && $Nav.declare('config.isPureAjaxALF',false);
  
  window.$Nav && $Nav.declare('config.accountListFlyoutRedesign',false);
  
  window.$Nav && $Nav.declare('config.navfresh',false);
  
  window.$Nav && $Nav.declare('config.isFreshRegion',false);
  
  if (window.ue && ue.tag) { ue.tag('navbar'); };
  
  window.$Nav && $Nav.declare('config.blackbelt',true);
  
  window.$Nav && $Nav.declare('config.beaconbelt',true);
  
  window.$Nav && $Nav.declare('config.beaconbeltCover',true);
  
  window.$Nav && $Nav.declare('config.accountList',true);
  
  window.$Nav && $Nav.declare('config.iPadTablet',false);
  
  window.$Nav && $Nav.declare('config.searchapiEndpoint',false);
  
  window.$Nav && $Nav.declare('config.timeline',true);
  
  window.$Nav && $Nav.declare('config.timelineAsinPriceEnabled',false);
  
  window.$Nav && $Nav.declare('config.timelineDeleteEnabled',true);
  
  window.$Nav && $Nav.declare('config.dynamicTimelineDeleteArgs','0');
  
  window.$Nav && $Nav.declare('config.extendedFlyout',false);
  
  window.$Nav && $Nav.declare('config.flyoutCloseDelay',600);
  
  window.$Nav && $Nav.declare('config.flyoutClickState','C');
  
  window.$Nav && $Nav.declare('config.pssFlag',0);
  
  window.$Nav && $Nav.declare('config.isShortAccountList',false);
  
  window.$Nav && $Nav.declare('config.isPrimeTooltipMigrated',false);
  
  window.$Nav && $Nav.declare('config.isDesktopHeaderFlex',true);
  
  window.$Nav && $Nav.declare('config.hashCustomerAndSessionId','aaf5d5843f7b43c1a50632b49cc5aafb2aad130c');
  
  window.$Nav && $Nav.declare('config.isExportMode',false);
  
  window.$Nav && $Nav.declare('config.languageCode','es_US');
  
  
  
  if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
    window.P.now('packardGlowIngressJsEnabled').execute(function(glowEnabled) {
      if (!glowEnabled) {
        window.P.declare('packardGlowIngressJsEnabled', true);
      }
    });
    window.P.now('packardGlowStoreName').execute(function(storeName) {
      if (!storeName) {
        window.P.declare('packardGlowStoreName','generic');
      }
    });
  }
  
  window.$Nav && $Nav.declare('configComplete');
 
  
  
  
  
  window.navmet.MainEnd = new Date();

  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {myList.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de e-oganic">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );

}


const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);
