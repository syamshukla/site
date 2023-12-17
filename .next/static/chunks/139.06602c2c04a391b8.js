(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[139],{7139:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var l=r(7437),n=r(2265),a=r(345);let s=n.forwardRef((e,t)=>{let{className:r,type:n,...s}=e;return(0,l.jsx)("input",{type:n,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...s})});s.displayName="Input";var i=r(6821),o=r(5271),d=r(4033);function c(){let[e,t]=(0,n.useState)(""),[r,a]=(0,n.useState)([]),[c,u]=(0,n.useState)(!1);return new Date().toISOString().split("T")[0],(0,d.useRouter)(),(0,l.jsxs)("div",{className:"flex h-screen w-full max-w-lg flex-col items-center justify-center",children:[(0,l.jsxs)("div",{className:"flex w-full  flex-col items-center gap-1.5",children:[(0,l.jsxs)(i._,{htmlFor:"email",children:["Enter Stock Ticker (",r.length,"/5)"]}),(0,l.jsx)(s,{type:"text",id:"ticker",placeholder:"AAPL",onChange:e=>t(e.target.value.toUpperCase()),value:e})]}),(0,l.jsx)("div",{className:"flex w-full flex-col items-center gap-1.5",children:(0,l.jsxs)(o.iA,{children:[(0,l.jsx)(o.xD,{children:(0,l.jsxs)(o.SC,{children:[(0,l.jsx)(o.ss,{children:"Ticker"}),(0,l.jsx)(o.ss,{children:"Name"})]})}),(0,l.jsx)(o.RM,{children:r.map((e,t)=>(0,l.jsxs)(o.SC,{children:[(0,l.jsx)(o.pj,{children:e.ticker}),(0,l.jsx)(o.pj,{children:e.name})]},t))})]})})]})}},6821:function(e,t,r){"use strict";r.d(t,{_:function(){return u}});var l=r(7437),n=r(2265),a=r(3428),s=r(9381);let i=(0,n.forwardRef)((e,t)=>(0,n.createElement)(s.WV.label,(0,a.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})));var o=r(6061),d=r(345);let c=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)(i,{ref:t,className:(0,d.cn)(c(),r),...n})});u.displayName=i.displayName},5271:function(e,t,r){"use strict";r.d(t,{RM:function(){return o},SC:function(){return c},iA:function(){return s},pj:function(){return f},ss:function(){return u},xD:function(){return i}});var l=r(7437),n=r(2265),a=r(345);let s=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)("div",{className:"relative w-full overflow-auto",children:(0,l.jsx)("table",{ref:t,className:(0,a.cn)("w-full caption-bottom text-sm",r),...n})})});s.displayName="Table";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)("thead",{ref:t,className:(0,a.cn)("[&_tr]:border-b",r),...n})});i.displayName="TableHeader";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)("tbody",{ref:t,className:(0,a.cn)("[&_tr:last-child]:border-0",r),...n})});o.displayName="TableBody";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)("tfoot",{ref:t,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...n})});d.displayName="TableFooter";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)("tr",{ref:t,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...n})});c.displayName="TableRow";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)("th",{ref:t,className:(0,a.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...n})});u.displayName="TableHead";let f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)("td",{ref:t,className:(0,a.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...n})});f.displayName="TableCell";let m=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,l.jsx)("caption",{ref:t,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",r),...n})});m.displayName="TableCaption"},345:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var l=r(7042),n=r(4769);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,l.W)(t))}},4033:function(e,t,r){e.exports=r(94)},9381:function(e,t,r){"use strict";r.d(t,{WV:function(){return i},jH:function(){return o}});var l=r(3428),n=r(2265),a=r(4887),s=r(7256);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let Node=(0,n.forwardRef)((e,r)=>{let{asChild:a,...i}=e,o=a?s.g7:t;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(o,(0,l.Z)({},i,{ref:r}))});return Node.displayName=`Primitive.${t}`,{...e,[t]:Node}},{});function o(e,t){e&&(0,a.flushSync)(()=>e.dispatchEvent(t))}}}]);