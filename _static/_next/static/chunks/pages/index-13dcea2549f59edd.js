(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5901)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let a=r(8754),n=r(1757),o=n._(r(7294)),i=a._(r(2636)),s=r(7757),l=r(3735),c=r(3341);r(4210);let d=a._(r(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function m(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,a,n,o,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;a.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,r]=o.version.split("."),a=parseInt(t,10),n=parseInt(r,10);return a>18||18===a&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:a,widthInt:n,qualityInt:i,className:s,imgStyle:l,blurStyle:c,isLazy:d,fetchPriority:u,fill:f,placeholder:m,loading:h,srcString:b,config:x,unoptimized:v,loader:w,onLoadRef:y,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:k,onLoad:N,onError:E,...S}=e;return h=d?"lazy":h,o.default.createElement("img",{...S,...g(u),loading:h,width:n,height:a,decoding:"async","data-nimg":f?"fill":"1",className:s,style:{...l,...c},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,b,m,y,_,j,v))},[b,m,y,_,j,E,v,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,m,y,_,j,v)},onError:e=>{k(!0),"blur"===m&&j(!0),E&&E(e)}})}),b=(0,o.forwardRef)((e,t)=>{var r;let a,n,{src:p,sizes:b,unoptimized:x=!1,priority:v=!1,loading:w,className:y,quality:_,width:j,height:k,fill:N,style:E,onLoad:S,onLoadingComplete:C,placeholder:z="empty",blurDataURL:P,fetchPriority:I,layout:O,objectFit:R,objectPosition:M,lazyBoundary:A,lazyRoot:D,...F}=e,L=(0,o.useContext)(c.ImageConfigContext),T=(0,o.useMemo)(()=>{let e=u||L||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[L]),B=F.loader||d.default;delete F.loader;let W="__next_img_default"in B;if(W){if("custom"===T.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...a}=t;return e(a)}}if(O){"fill"===O&&(N=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!b&&(b=t)}let G="",V=m(j),q=m(k);if("object"==typeof(r=p)&&(f(r)||void 0!==r.src)){let e=f(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,n=e.blurHeight,P=P||e.blurDataURL,G=e.src,!N){if(V||q){if(V&&!q){let t=V/e.width;q=Math.round(e.height*t)}else if(!V&&q){let t=q/e.height;V=Math.round(e.width*t)}}else V=e.width,q=e.height}}let U=!v&&("lazy"===w||void 0===w);(!(p="string"==typeof p?p:G)||p.startsWith("data:")||p.startsWith("blob:"))&&(x=!0,U=!1),T.unoptimized&&(x=!0),W&&p.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(x=!0),v&&(I="high");let[J,X]=(0,o.useState)(!1),[Y,H]=(0,o.useState)(!1),$=m(_),K=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:M}:{},Y?{}:{color:"transparent"},E),Q="blur"===z&&P&&!J?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:V,heightInt:q,blurWidth:a,blurHeight:n,blurDataURL:P,objectFit:K.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:o,sizes:i,loader:s}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,i),d=l.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:l.map((e,a)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:a+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:l[d]})}}({config:T,src:p,unoptimized:x,width:V,quality:$,sizes:b,loader:B}),ee=p,et=(0,o.useRef)(S);(0,o.useEffect)(()=>{et.current=S},[S]);let er=(0,o.useRef)(C);(0,o.useEffect)(()=>{er.current=C},[C]);let ea={isLazy:U,imgAttributes:Z,heightInt:q,widthInt:V,qualityInt:$,className:y,imgStyle:K,blurStyle:Q,loading:w,config:T,fetchPriority:I,fill:N,unoptimized:x,placeholder:z,loader:B,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:X,setShowAltText:H,...F};return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...ea,ref:t}),v?o.default.createElement(i.default,null,o.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:F.crossOrigin,referrerPolicy:F.referrerPolicy,...g(I)})):null)}),x=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:o,objectFit:i}=e,s=a||t,l=n||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+s+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(a&&n?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},5901:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r(5893),n=r(9198),o=r.n(n),i=r(5675),s=r.n(i);function l(){return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24 ".concat(o().className),children:[(0,a.jsxs)("div",{className:"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex",children:[(0,a.jsxs)("p",{className:"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:["Get started by editing\xa0",(0,a.jsx)("code",{className:"font-mono font-bold",children:"src/pages/index.js"})]}),(0,a.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,a.jsxs)("a",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,a.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",className:"dark:invert",width:100,height:24,priority:!0})]})})]}),(0,a.jsx)("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]",children:(0,a.jsx)(s(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,a.jsxs)("div",{className:"mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left",children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Docs"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Find in-depth information about Next.js features and API."})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Learn"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,a.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Templates"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Deploy"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Instantly deploy your Next.js site to a shareable URL with Vercel."})]})]})]})}},9198:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);