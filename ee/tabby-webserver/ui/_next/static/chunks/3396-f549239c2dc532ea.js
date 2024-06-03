"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3396],{80605:function(e,n,r){r.d(n,{UA:function(){return c},Uw:function(){return l},c7:function(){return u},jJ:function(){return d},xG:function(){return s}});var t=r(40055),o=r(43240);let i=(0,o.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n"),a=()=>{let[{data:e}]=(0,t.aM)({query:i});return null==e?void 0:e.serverInfo},s=()=>{var e;return null===(e=a())||void 0===e?void 0:e.isChatEnabled},u=()=>{var e;return null===(e=a())||void 0===e?void 0:e.isAdminInitialized},l=()=>{var e;return null===(e=a())||void 0===e?void 0:e.isEmailConfigured},d=()=>{var e;return null===(e=a())||void 0===e?void 0:e.allowSelfSignup},c=()=>{var e;return null===(e=a())||void 0===e?void 0:e.isDemoMode}},91302:function(e,n,r){r.d(n,{Dp:function(){return k},Ho:function(){return y},QJ:function(){return w},av:function(){return b},kP:function(){return E},zq:function(){return S}});var t,o,i=r(36164),a=r(3546),s=r(11978),u=r(24426),l=r.n(u),d=r(43240),c=r(80605),v=r(11634),f=r(66794);function h(e,n){var r,t;let i=function(e,n){switch(n.type){case o.SignIn:case o.Refresh:return{status:"authenticated",data:n.data};case o.SignOut:return{status:"unauthenticated",data:void 0}}}(0,n);return e.status==i.status&&(r=e.data,t=i.data,(null==r?void 0:r.accessToken)===(null==t?void 0:t.accessToken)&&(null==r?void 0:r.refreshToken)===(null==t?void 0:t.refreshToken))?e:i}(t=o||(o={}))[t.SignIn=0]="SignIn",t[t.SignOut=1]="SignOut",t[t.Refresh=2]="Refresh";let g=a.createContext({}),k=(0,d.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),p=(0,d.BX)("\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n"),y=e=>{let{children:n}=e,[r,t]=a.useState(!1),[s]=l()(f.nd,void 0),[u,d]=a.useReducer(h,{status:"loading",data:void 0});a.useEffect(()=>{(null==s?void 0:s.accessToken)&&(null==s?void 0:s.refreshToken)?d({type:o.SignIn,data:s}):d({type:o.SignOut}),t(!0)},[]),a.useEffect(()=>{!r||((null==s?void 0:s.accessToken)&&(null==s?void 0:s.refreshToken)?d({type:o.Refresh,data:s}):(null==s?void 0:s.accessToken)||(null==s?void 0:s.refreshToken)||d({type:o.SignOut}))},[s]);let c=a.useMemo(()=>{var e;return(null==u?void 0:u.status)=="authenticated"?{data:{accessToken:u.data.accessToken},status:u.status}:{status:null!==(e=null==u?void 0:u.status)&&void 0!==e?e:"loading",data:null}},[u]);return(0,i.jsx)(g.Provider,{value:{authState:u,dispatch:d,session:c},children:n})};class T extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function m(){let e=a.useContext(g);if(!e)throw new T;return e}function S(){let{dispatch:e}=m(),[n,r]=l()(f.nd,void 0);return async n=>(r({accessToken:n.accessToken,refreshToken:n.refreshToken}),e({type:o.SignIn,data:n}),!0)}function w(){let e=(0,v.D)(p),{dispatch:n}=m(),[r,t]=l()(f.nd,void 0);return async()=>{await e(),t(void 0),n({type:o.SignOut})}}function E(){let{session:e}=m();return e}let A=["/auth/signin","/auth/signup","/auth/reset-password"];function b(){let e=(0,c.c7)(),n=(0,s.useRouter)(),r=(0,s.usePathname)(),t=(0,s.useSearchParams)(),{data:o,status:i}=E();return a.useEffect(()=>{if("loading"===i||"authenticated"===i||void 0===e)return;let o="/auth/signup"===r&&"true"===t.get("isAdmin");if(!o&&!e)return n.replace("/auth/signup?isAdmin=true");A.includes(r)||n.replace("/auth/signin")},[e,i]),o}},11634:function(e,n,r){r.d(n,{D:function(){return f},L:function(){return h}});var t=r(22365),o=r(28552),i=r(81013),a=r(79716),s=r(74630),u=r(40055),l=r(44745),d=r(91302),c=r(70410),v=r(66794);function f(e,n){var r;let[t,o]=(0,u.Db)(e),i=(null==n?void 0:n.form)?(r=n.form,e=>{let{graphQLErrors:n=[]}=e;for(let e of n)if(e.extensions&&e.extensions["validation-errors"]){let n=e.extensions["validation-errors"];for(let e of n.errors)r.setError(e.path,e)}else(null==e?void 0:e.originalError)&&r.setError("root",e.originalError)}):void 0,a=async e=>{let r;try{if(null==(r=await o(e))?void 0:r.error)i&&i(r.error),(null==n?void 0:n.onError)&&n.onError(r.error);else if(!(0,s.Z)(null==r?void 0:r.data)){var t;null==n||null===(t=n.onCompleted)||void 0===t||t.call(n,r.data)}}catch(e){(null==n?void 0:n.onError)&&n.onError(e);return}return r};return a}let h=new l.KU({url:"/graphql",requestPolicy:"cache-and-network",exchanges:[(0,o.HG)({keys:{CompletionStats:()=>null,ServerInfo:()=>null,RepositorySearch:()=>null,RepositoryList:()=>null},resolvers:{Query:{invitations:(0,i.N)(),repositories:(0,i.N)()}},updates:{Mutation:{deleteInvitation(e,n,r,t){e.deleteInvitation&&r.inspectFields("Query").filter(e=>"invitations"===e.fieldName).forEach(e=>{r.updateQuery({query:c.lE,variables:e.arguments},e=>{var r;return(null==e?void 0:null===(r=e.invitations)||void 0===r?void 0:r.edges)&&(e.invitations.edges=e.invitations.edges.filter(e=>e.node.id!==n.id)),e})})},deleteGitRepository(e,n,r,t){e.deleteGitRepository&&r.inspectFields("Query").filter(e=>"gitRepositories"===e.fieldName).forEach(e=>{r.updateQuery({query:c.S1,variables:e.arguments},e=>{var r;return(null==e?void 0:null===(r=e.gitRepositories)||void 0===r?void 0:r.edges)&&(e.gitRepositories.edges=e.gitRepositories.edges.filter(e=>e.node.id!==n.id)),e})})}}}}),(0,t.M)(async e=>{let n=(0,v.bW)(),r=null==n?void 0:n.accessToken,t=null==n?void 0:n.refreshToken;return{addAuthToOperation(n){let o=(0,v.bW)();return(r=null==o?void 0:o.accessToken,t=null==o?void 0:o.refreshToken,r)?e.appendHeaders(n,{Authorization:"Bearer ".concat(r)}):n},didAuthError(e,n){let r=e.graphQLErrors.some(e=>{var n;return(null==e?void 0:null===(n=e.extensions)||void 0===n?void 0:n.code)==="UNAUTHORIZED"});return r&&v.gN.clearAccessToken(),r},willAuthError(e){let n=(0,v.bW)();if(r=null==n?void 0:n.accessToken,t=null==n?void 0:n.refreshToken,"query"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["GetServerInfo"].includes(e.name.value)})||"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["tokenAuth","register"].includes(e.name.value)})||t&&"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.value)==="refreshToken"}))return!1;if(!r)return v.gN.clearAccessToken(),!0;try{let{exp:e}=(0,a.o)(r);return(0,v.pw)(e)}catch(e){return!0}},refreshAuth:async()=>v.gN.refreshToken(async()=>{var n;let r=null===(n=(0,v.bW)())||void 0===n?void 0:n.refreshToken;if(r)return e.mutate(d.Dp,{refreshToken:r}).then(e=>{var n;return null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.refreshToken})})}}),(0,l.Dk)({onError(e){e.message.startsWith("[GraphQL]")&&(e.message=e.message.replace("[GraphQL]","").trim())}}),l.Ek]})},66794:function(e,n,r){r.d(n,{bW:function(){return s},gN:function(){return v},nd:function(){return a},pw:function(){return d}});var t=r(79716),o=r(74630),i=r(74248);let a="_tabby_auth",s=()=>{if((0,i.S_)()){let e=localStorage.getItem(a);if(e)try{return JSON.parse(e)}catch(e){}}},u=e=>{localStorage.setItem(a,JSON.stringify(e))},l=()=>{localStorage.removeItem(a),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:a}))},d=e=>!!(0,o.Z)(e)||Date.now()>1e3*e,c=e=>!(0,o.Z)(e)&&Date.now()-1e3*e<6e4,v=new class{clearAccessToken(){let e=s();e&&u({...e,accessToken:""})}async refreshToken(e){try{var n;if(void 0===(null===(n=navigator)||void 0===n?void 0:n.locks))throw console.error("The Web Locks API is not supported in your browser. Please upgrade to a newer browser version."),Error();await navigator.locks.request("_tabby_auth_lock",async()=>{let n;let r=s(),o=null==r?void 0:r.accessToken,i=null==r?void 0:r.refreshToken;if(o){let{iat:i}=(0,t.o)(o);n=c(i)?r:await e()}else i&&(n=await e());n?u(n):l()})}catch(e){l()}}}}}]);