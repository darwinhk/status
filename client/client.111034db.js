function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,m=!1;function p(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:p(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function w(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:k(t,r,e[r])}function P(t){return Array.from(t.childNodes)}function L(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,r,s=!1){L(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function C(t,e,n){return I(t,e,n,_)}function H(t,e,n){return I(t,e,n,y)}function O(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return O(t," ")}function M(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function D(t){const e=M(t,"HTML_TAG_START",0),n=M(t,"HTML_TAG_END",e);if(e===n)return new K;L(t);const r=t.splice(e,n+1);v(r[0]),v(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(s)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function B(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),v(n)}}function z(t,e=document.body){return Array.from(e.querySelectorAll(t))}class K extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=_(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)w(this.t,this.n[e],t)}}function W(t){h=t}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function V(t){J().$$.on_mount.push(t)}function Y(t){J().$$.after_update.push(t)}function F(t){J().$$.on_destroy.push(t)}const X=[],Q=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function rt(t){Z.push(t)}let st=!1;const ot=new Set;function it(){if(!st){st=!0;do{for(let t=0;t<X.length;t+=1){const e=X[t];W(e),at(e.$$)}for(W(null),X.length=0;Q.length;)Q.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];ot.has(e)||(ot.add(e),e())}Z.length=0}while(X.length);for(;tt.length;)tt.pop()();nt=!1,st=!1,ot.clear()}}function at(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}const ct=new Set;let lt;function ut(){lt={r:0,c:[],p:lt}}function dt(){lt.r||s(lt.c),lt=lt.p}function ft(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function ht(t,e,n,r){if(t&&t.o){if(ct.has(t))return;ct.add(t),lt.c.push((()=>{ct.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function mt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function pt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function wt(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||rt((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(rt)}function vt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(X.push(t),nt||(nt=!0,et.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _t(e,n,o,i,a,c,l,u=[-1]){const d=h;W(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&$t(e,t)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){m=!0;const t=P(n.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&ft(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),m=!1,it()}W(d)}class yt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!Et.length;for(const t of s)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const xt={};var Tt={owner:"darwinhk",repo:"status",sites:[{name:"#网站# 达尔文主页(亚洲/Asia)",url:"https://www.darwin.hk"},{name:"#网站# 达尔文主页(美国/U.S)",url:"https://darwin.hk"},{name:"#网站# 授权用户控制台",url:"https://dash.darwin.hk"},{name:"#服务# 数字许可权利管理",url:"https://account.darwin.hk"},{name:"#服务# 云雷达数据中转 CNSH-1",url:"$SITE_CLOUDRADAR_CNSH1"},{name:"#订阅# CS:GO Premium",url:"https://prd-status-csgo-premium.check.darwin.hk"},{name:"#订阅# CS:GO CloudRadar",url:"https://prd-status-csgo-cloudradar.check.darwin.hk"},{name:"#订阅# PUBG Premium",url:"https://prd-status-pubg-premium.check.darwin.hk"}],"status-website":{cname:"status.darwin.hk",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"达尔文服务实时状态",introTitle:"**服务状态**",introMessage:"**达尔文DARWIN** 线上服务实时状态",navbar:[{title:"控制台",href:"https://dash.darwin.hk/"},{title:"立即购买",href:"https://www.darwin.hk/pay.html"}]},notification:[{type:"telegram"}],i18n:{activeIncidents:"活跃事件",allSystemsOperational:"全部服务都在线",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"事件 $NUMBER 详情",incidentDetails:"事件详情",incidentFixed:"修复",incidentOngoing:"不间断",incidentOpenedAt:"已经打开于",incidentClosedAt:"已经关闭于",incidentSubscribe:"订阅此更新",incidentViewOnGitHub:"查看",incidentCommentSummary:"发布于 $DATE ,发布者: $AUTHOR",incidentBack:"← 返回所有详情",pastIncidents:"历史事件",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"实时状态",overallUptime:"总体正常运行时间: $UPTIME",overallUptimeTitle:"总体正常运行",averageResponseTime:"平均响应时间: $TIMEms",averageResponseTimeTitle:"平均响应",sevelDayResponseTime:"最近一周的响应时间",responseTimeMs:"响应时间 (毫秒)",up:"正常",down:"离线",degraded:"异常",ms:"毫秒",loading:"加载中",navGitHub:"GitHub",footer:"[达尔文DARWIN](https://www.darwin.hk)实时服务状态, 可能存在1-5分钟的数据延迟。",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"},rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"返回主页",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"已经开始于",startsAt:"开始于",duration:"持续",durationMin:"$DURATION 分钟",incidentCompleted:"已完成",incidentScheduled:"已计划",path:"https://status.darwin.hk"};function At(t,e,n){const r=t.slice();return r[1]=e[n],r}function kt(e){let n,r,s,o=Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=_("img"),this.h()},l(t){n=C(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){k(n,"alt",""),c(n.src,r=Tt["status-website"].logoUrl)||k(n,"src",r),k(n,"class","svelte-a08hsz")},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}(),i=Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&function(e){let n,r,s=Tt["status-website"].name+"";return{c(){n=_("div"),r=E(s)},l(t){n=C(t,"DIV",{});var e=P(n);r=O(e,s),e.forEach(v)},m(t,e){w(t,n,e),g(n,r)},p:t,d(t){t&&v(n)}}}();return{c(){n=_("div"),r=_("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(t){n=C(t,"DIV",{});var e=P(n);r=C(e,"A",{href:!0,class:!0});var a=P(r);o&&o.l(a),s=U(a),i&&i.l(a),a.forEach(v),e.forEach(v),this.h()},h(){k(r,"href",Tt["status-website"].logoHref||Tt.path),k(r,"class","logo svelte-a08hsz")},m(t,e){w(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(t,e){Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&o.p(t,e),Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&v(n),o&&o.d(),i&&i.d()}}}function Nt(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=_("li"),n=_("a"),r=E(a),i=S(),this.h()},l(t){e=C(t,"LI",{});var s=P(e);n=C(s,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);r=O(o,a),o.forEach(v),i=U(s),s.forEach(v),this.h()},h(){k(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),k(n,"href",o=t[1].href.replace("$OWNER",Tt.owner).replace("$REPO",Tt.repo)),k(n,"class","svelte-a08hsz")},m(t,s){w(t,e,s),g(e,n),g(n,r),g(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&k(n,"aria-current",s)},d(t){t&&v(e)}}}function Pt(e){let n,r,s,o,i,a=Tt["status-website"]&&Tt["status-website"].logoUrl&&kt(),c=Tt["status-website"]&&Tt["status-website"].navbar&&function(t){let e,n=Tt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Nt(At(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);w(t,e,n)},p(t,s){if(1&s){let o;for(n=Tt["status-website"].navbar,o=0;o<n.length;o+=1){const i=At(t,n,o);r[o]?r[o].p(i,s):(r[o]=Nt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&v(e)}}}(e),l=Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&function(e){let n,r,s,o=Tt.i18n.navGitHub+"";return{c(){n=_("li"),r=_("a"),s=E(o),this.h()},l(t){n=C(t,"LI",{});var e=P(n);r=C(e,"A",{href:!0,class:!0});var i=P(r);s=O(i,o),i.forEach(v),e.forEach(v),this.h()},h(){k(r,"href",`https://github.com/${Tt.owner}/${Tt.repo}`),k(r,"class","svelte-a08hsz")},m(t,e){w(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&v(n)}}}();return{c(){n=_("nav"),r=_("div"),a&&a.c(),s=S(),o=_("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=C(t,"NAV",{class:!0});var e=P(n);r=C(e,"DIV",{class:!0});var u=P(r);a&&a.l(u),s=U(u),o=C(u,"UL",{class:!0});var d=P(o);c&&c.l(d),i=U(d),l&&l.l(d),d.forEach(v),u.forEach(v),e.forEach(v),this.h()},h(){k(o,"class","svelte-a08hsz"),k(r,"class","container svelte-a08hsz"),k(n,"class","svelte-a08hsz")},m(t,e){w(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Tt["status-website"]&&Tt["status-website"].logoUrl&&a.p(t,e),Tt["status-website"]&&Tt["status-website"].navbar&&c.p(t,e),Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&v(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Lt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Rt extends yt{constructor(t){super(),_t(this,t,Lt,Pt,i,{segment:0})}}var It={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ct(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ht(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ot(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function f(t){var e=It[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=f(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ct(Ht(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ot(Ct(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ht(s[8])+'" alt="'+Ht(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ht(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ot(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ht(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ut(t,e,n){const r=t.slice();return r[3]=e[n],r}function Mt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Dt(t,e,n){const r=t.slice();return r[8]=e[n],r}function jt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",`${Tt.path}/themes/${(Tt["status-website"]||{}).theme||"light"}.css`)},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function Gt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",(Tt["status-website"]||{}).themeUrl)},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function qt(e){let n,r;return{c(){n=_("script"),this.h()},l(t){n=C(t,"SCRIPT",{src:!0}),P(n).forEach(v),this.h()},h(){c(n.src,r=e[8].src)||k(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function Bt(e){let n;return{c(){n=_("link"),this.h()},l(t){n=C(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){k(n,"rel",e[3].rel),k(n,"href",e[3].href),k(n,"media",e[3].media)},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function zt(e){let n;return{c(){n=_("meta"),this.h()},l(t){n=C(t,"META",{name:!0,content:!0}),this.h()},h(){k(n,"name",e[3].name),k(n,"content",e[3].content)},m(t,e){w(t,n,e)},p:t,d(t){t&&v(n)}}}function Kt(e){let n,r,s,o,i,a,c,u,d,f,h,m,p,b,y,E,T,A,N=Ot(Tt.i18n.footer.replace(/\$REPO/,`https://github.com/${Tt.owner}/${Tt.repo}`))+"",L=(Tt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(Tt["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,r=x(),this.h()},l(t){n=D(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),w(t,r,e)},p:t,d(t){t&&v(r),t&&n.d()}}}();let R=((Tt["status-website"]||{}).themeUrl?Gt:jt)(e),I=(Tt["status-website"]||{}).scripts&&function(t){let e,n=(Tt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Dt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);w(t,e,n)},p(t,s){if(0&s){let o;for(n=(Tt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Dt(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&v(e)}}}(e),H=(Tt["status-website"]||{}).links&&function(t){let e,n=(Tt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Bt(Mt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);w(t,e,n)},p(t,s){if(0&s){let o;for(n=(Tt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Mt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Bt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&v(e)}}}(e),O=(Tt["status-website"]||{}).metaTags&&function(t){let e,n=(Tt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=zt(Ut(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);w(t,e,n)},p(t,s){if(0&s){let o;for(n=(Tt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ut(t,n,o);r[o]?r[o].p(i,s):(r[o]=zt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){$(r,t),t&&v(e)}}}(e),M=Tt["status-website"].css&&function(e){let n,r,s=`<style>${Tt["status-website"].css}</style>`;return{c(){n=new K,r=x(),this.h()},l(t){n=D(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),w(t,r,e)},p:t,d(t){t&&v(r),t&&n.d()}}}(),j=Tt["status-website"].js&&function(e){let n,r,s=`<script>${Tt["status-website"].js}<\/script>`;return{c(){n=new K,r=x(),this.h()},l(t){n=D(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),w(t,r,e)},p:t,d(t){t&&v(r),t&&n.d()}}}(),G=(Tt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(Tt["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,r=x(),this.h()},l(t){n=D(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),w(t,r,e)},p:t,d(t){t&&v(r),t&&n.d()}}}();m=new Rt({props:{segment:e[0]}});const q=e[2].default,B=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(q,e,e[1],null);return{c(){L&&L.c(),n=x(),R.c(),r=_("link"),s=_("link"),o=_("link"),I&&I.c(),i=x(),H&&H.c(),a=x(),O&&O.c(),c=x(),M&&M.c(),u=x(),j&&j.c(),d=x(),f=S(),G&&G.c(),h=S(),gt(m.$$.fragment),p=S(),b=_("main"),B&&B.c(),y=S(),E=_("footer"),T=_("p"),this.h()},l(t){const e=z('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(e),n=x(),R.l(e),r=C(e,"LINK",{rel:!0,href:!0}),s=C(e,"LINK",{rel:!0,type:!0,href:!0}),o=C(e,"LINK",{rel:!0,type:!0,href:!0}),I&&I.l(e),i=x(),H&&H.l(e),a=x(),O&&O.l(e),c=x(),M&&M.l(e),u=x(),j&&j.l(e),d=x(),e.forEach(v),f=U(t),G&&G.l(t),h=U(t),bt(m.$$.fragment,t),p=U(t),b=C(t,"MAIN",{class:!0});var l=P(b);B&&B.l(l),l.forEach(v),y=U(t),E=C(t,"FOOTER",{class:!0});var g=P(E);T=C(g,"P",{}),P(T).forEach(v),g.forEach(v),this.h()},h(){k(r,"rel","stylesheet"),k(r,"href",`${Tt.path}/global.css`),k(s,"rel","icon"),k(s,"type","image/svg"),k(s,"href",(Tt["status-website"]||{}).faviconSvg||(Tt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),k(o,"rel","icon"),k(o,"type","image/png"),k(o,"href",(Tt["status-website"]||{}).favicon||"/logo-192.png"),k(b,"class","container"),k(E,"class","svelte-jbr799")},m(t,e){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),I&&I.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),w(t,f,e),G&&G.m(t,e),w(t,h,e),wt(m,t,e),w(t,p,e),w(t,b,e),B&&B.m(b,null),w(t,y,e),w(t,E,e),g(E,T),T.innerHTML=N,A=!0},p(t,[e]){(Tt["status-website"]||{}).customHeadHtml&&L.p(t,e),R.p(t,e),(Tt["status-website"]||{}).scripts&&I.p(t,e),(Tt["status-website"]||{}).links&&H.p(t,e),(Tt["status-website"]||{}).metaTags&&O.p(t,e),Tt["status-website"].css&&M.p(t,e),Tt["status-website"].js&&j.p(t,e),(Tt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),B&&B.p&&(!A||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(B,q,t,t[1],A?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(q,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(ft(m.$$.fragment,t),ft(B,t),A=!0)},o(t){ht(m.$$.fragment,t),ht(B,t),A=!1},d(t){L&&L.d(t),v(n),R.d(t),v(r),v(s),v(o),I&&I.d(t),v(i),H&&H.d(t),v(a),O&&O.d(t),v(c),M&&M.d(t),v(u),j&&j.d(t),v(d),t&&v(f),G&&G.d(t),t&&v(h),vt(m,t),t&&v(p),t&&v(b),B&&B.d(t),t&&v(y),t&&v(E)}}}function Wt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Jt extends yt{constructor(t){super(),_t(this,t,Wt,Kt,i,{segment:0})}}function Vt(t){let e,n,r=t[1].stack+"";return{c(){e=_("pre"),n=E(r)},l(t){e=C(t,"PRE",{});var s=P(e);n=O(s,r),s.forEach(v)},m(t,r){w(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&j(n,r)},d(t){t&&v(e)}}}function Yt(e){let n,r,s,o,i,a,c,l,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Vt(e);return{c(){r=S(),s=_("h1"),o=E(e[0]),i=S(),a=_("p"),c=E(d),l=S(),f&&f.c(),u=x(),this.h()},l(t){z('[data-svelte="svelte-1moakz"]',document.head).forEach(v),r=U(t),s=C(t,"H1",{class:!0});var n=P(s);o=O(n,e[0]),n.forEach(v),i=U(t),a=C(t,"P",{class:!0});var h=P(a);c=O(h,d),h.forEach(v),l=U(t),f&&f.l(t),u=x(),this.h()},h(){k(s,"class","svelte-17w3omn"),k(a,"class","svelte-17w3omn")},m(t,e){w(t,r,e),w(t,s,e),g(s,o),w(t,i,e),w(t,a,e),g(a,c),w(t,l,e),f&&f.m(t,e),w(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&j(o,t[0]),2&e&&d!==(d=t[1].message+"")&&j(c,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Vt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&v(r),t&&v(s),t&&v(i),t&&v(a),t&&v(l),f&&f.d(t),t&&v(u)}}}function Ft(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Xt extends yt{constructor(t){super(),_t(this,t,Ft,Yt,i,{status:0,error:1})}}function Qt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&gt(n.$$.fragment),r=x()},l(t){n&&bt(n.$$.fragment,t),r=x()},m(t,e){n&&wt(n,t,e),w(t,r,e),s=!0},p(t,e){const s=16&e?mt(o,[pt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{vt(t,1)})),dt()}i?(n=new i(a()),gt(n.$$.fragment),ft(n.$$.fragment,1),wt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&ft(n.$$.fragment,t),s=!0)},o(t){n&&ht(n.$$.fragment,t),s=!1},d(t){t&&v(r),n&&vt(n,t)}}}function Zt(t){let e,n;return e=new Xt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,r){wt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){vt(e,t)}}}function te(t){let e,n,r,s;const o=[Zt,Qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){i[e].m(t,n),w(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ut(),ht(i[c],1,1,(()=>{i[c]=null})),dt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),ft(n,1),n.m(r.parentNode,r))},i(t){s||(ft(n),s=!0)},o(t){ht(n),s=!1},d(t){i[e].d(t),t&&v(r)}}}function ee(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Jt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){wt(n,t,e),r=!0},p(t,[e]){const r=12&e?mt(s,[4&e&&{segment:t[2][0]},8&e&&pt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ft(n.$$.fragment,t),r=!0)},o(t){ht(n.$$.fragment,t),r=!1},d(t){vt(n,t)}}}function ne(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return Y(l),u=xt,d=r,J().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class re extends yt{constructor(t){super(),_t(this,t,ne,ee,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const se=[],oe=[{js:()=>Promise.all([import("./index.595b8e82.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.67941223.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].ad5e75dc.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].1c10a6ff.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.ca775f67.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ae=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ae(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ae(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ae;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ce(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function le(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,de=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let me,pe;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(me))return null;let e=t.pathname.slice(me.length);if(""===e&&(e="/"),!se.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const r=ie[n],s=r.pattern.exec(e);if(s){const n=ge(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=le(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=be(s);if(o){_e(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),fe.pushState({id:ue},"",s.href)}}function ve(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(he[ue]=ve(),t.state){const e=be(new URL(location.href));e?_e(e,t.state.id):location.href=location.href}else!function(t){de=t}(de+1),function(t){ue=t}(de),fe.replaceState({id:ue},"",location.href)}function _e(t,e,n,r){return ce(this,void 0,void 0,(function*(){const s=!!e;if(s)ue=e;else{const t=ve();he[ue]=t,ue=e=++de,he[ue]=n?t:{x:0,y:0}}if(yield pe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ye(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function xe(t){const e=le(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,ye(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:qe(e)}),Se.promise}(e.href)}function Te(t){clearTimeout(Ee),Ee=setTimeout((()=>{xe(t)}),20)}function Ae(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,ye(document)));if(n){const r=_e(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),r}return location.href=t,new Promise((()=>{}))}const ke="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ne,Pe,Le,Re=!1,Ie=[],Ce="{}";const He={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:St(null),session:St(ke&&ke.session)};let Oe,Ue,Me;function De(t,e){const{error:n}=t;return Object.assign({error:n},e)}function je(t){return ce(this,void 0,void 0,(function*(){Ne&&He.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:qe(t)}(t),n=Pe={},r=yield e,{redirect:s}=r;if(n===Pe)if(s)yield Ae(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ge(n,e,De(e,t.page))}}))}function Ge(t,e,n){return ce(this,void 0,void 0,(function*(){He.page.set(n),He.preloading.set(!1),Ne?Ne.$set(e):(e.stores={page:{subscribe:He.page.subscribe},preloading:{subscribe:He.preloading.subscribe},session:He.session},e.level0={props:yield Le},e.notify=He.page.notify,Ne=new re({target:Me,props:e,hydrate:!0})),Ie=t,Ce=JSON.stringify(n.query),Re=!0,Ue=!1}))}function qe(t){return ce(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Le){const t=()=>({});Le=ke.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Oe)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ce(this,void 0,void 0,(function*(){const d=r[a];if(function(t,e,n,r){if(r!==Ce)return!0;const s=Ie[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:d};const f=c++;let h;if(Ue||u||!Ie[a]||Ie[a].part!==e.i){u=!1;const{default:r,preload:s}=yield oe[e.i].js();let o;o=Re||!ke.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Oe):{}:ke.preloaded[a+1],h={component:r,props:o,segment:d,match:l,part:e.i}}else h=Ie[a];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Be,ze,Ke;He.session.subscribe((t=>ce(void 0,void 0,void 0,(function*(){if(Oe=t,!Re)return;Ue=!0;const e=be(new URL(location.href)),n=Pe={},{redirect:r,props:s,branch:o}=yield qe(e);n===Pe&&(r?yield Ae(r.location,{replaceState:!0}):yield Ge(o,s,De(s,e.page)))})))),Be={target:document.querySelector("#sapper")},ze=Be.target,Me=ze,Ke=ke.baseUrl,me=Ke,pe=je,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",we),addEventListener("popstate",$e),addEventListener("touchstart",xe),addEventListener("mousemove",Te),ke.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=ke;Le||(Le=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Le},level1:{props:{status:o,error:i},component:Xt},segments:s},c=ge(n);Ge([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:de},"",e);const n=be(new URL(location.href));if(n)return _e(n,de,!0,t)}));export{vt as A,T as B,s as C,Q as D,D as E,c as F,d as G,K as H,z as I,Ot as J,y as K,H as L,Ae as M,G as N,A as O,e as P,N as Q,mt as R,yt as S,Y as T,F as U,u as V,pt as W,rt as X,B as Y,P as a,O as b,C as c,v as d,_ as e,k as f,w as g,g as h,_t as i,S as j,U as k,ut as l,ht as m,t as n,dt as o,ft as p,V as q,Tt as r,i as s,E as t,j as u,x as v,$ as w,gt as x,bt as y,wt as z};

import __inject_styles from './inject_styles.803b7e80.js';