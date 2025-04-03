(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{304:(e,r,a)=>{Promise.resolve().then(a.bind(a,9500))},2320:(e,r,a)=>{"use strict";a.d(r,{CartProvider:()=>n,_:()=>l});var t=a(8081),s=a(2149);let i=(0,s.createContext)(void 0);function n(e){let{children:r}=e,[a,n]=(0,s.useState)({}),l=Object.values(a).reduce((e,r)=>e+r.quantity,0),c=Object.values(a).reduce((e,r)=>e+r.price*r.quantity,0),o=(0,s.useCallback)(()=>{let e=localStorage.getItem("cart");if(e)try{n(JSON.parse(e))}catch(e){console.error("Failed to parse cart from localStorage",e),localStorage.removeItem("cart")}},[]);s.useEffect(()=>{o()},[o]);let d=e=>{n(e),localStorage.setItem("cart",JSON.stringify(e))};return(0,t.jsx)(i.Provider,{value:{cart:a,totalItems:l,totalPrice:c,addToCart:e=>{let r={...a};r[e.id]?r[e.id].quantity+=1:r[e.id]={...e,quantity:1},d(r)},removeFromCart:e=>{let r={...a};delete r[e],d(r)},increaseQuantity:e=>{if(!a[e])return;let r={...a};r[e].quantity+=1,d(r)},decreaseQuantity:e=>{if(!a[e]||a[e].quantity<=1)return;let r={...a};r[e].quantity-=1,d(r)},initializeCart:o},children:r})}function l(){let e=(0,s.useContext)(i);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},5160:(e,r,a)=>{"use strict";a.d(r,{$:()=>o});var t=a(8081),s=a(2149),i=a(7536),n=a(3484),l=a(7687);let c=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,r)=>{let{className:a,variant:s,size:n,asChild:o=!1,...d}=e,u=o?i.DX:"button";return(0,t.jsx)(u,{className:(0,l.cn)(c({variant:s,size:n,className:a})),ref:r,...d})});o.displayName="Button"},5216:(e,r,a)=>{"use strict";a.d(r,{default:()=>u});var t=a(8081),s=a(7950),i=a.n(s),n=a(9651),l=a(139),c=a(2320),o=a(5160),d=a(7687);function u(){let e=(0,n.usePathname)(),{totalItems:r}=(0,c._)();return(0,t.jsx)("header",{className:"bg-white shadow-md",children:(0,t.jsx)("div",{className:"container mx-auto px-4 py-4",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)(i(),{href:"/",className:"text-2xl font-bold text-emerald-700",children:"Paradise Nursery"}),(0,t.jsxs)("div",{className:"flex items-center space-x-4",children:["/products"!==e&&(0,t.jsx)(i(),{href:"/products",children:(0,t.jsx)(o.$,{variant:"ghost",children:"Products"})}),"/"!==e&&"/products"!==e&&(0,t.jsx)(i(),{href:"/",children:(0,t.jsx)(o.$,{variant:"ghost",children:"Home"})}),(0,t.jsx)(i(),{href:"/cart",className:"relative",children:(0,t.jsxs)(o.$,{variant:"outline",size:"icon",className:(0,d.cn)("relative","/cart"===e&&"bg-emerald-50"),children:[(0,t.jsx)(l.A,{className:"h-5 w-5"}),r>0&&(0,t.jsx)("span",{className:"absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:r})]})})]})]})})})}},7687:(e,r,a)=>{"use strict";a.d(r,{cn:()=>i,v:()=>n});var t=a(6522),s=a(4483);function i(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,s.QP)((0,t.$)(r))}function n(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}},9500:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>x});var t=a(8081),s=a(2149),i=a(2320),n=a(5216),l=a(5186),c=a(3210),o=a(5160),d=a(7687);let u=s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,d.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...s})});u.displayName="Card",s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",a),...s})}).displayName="CardHeader",s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,d.cn)("text-2xl font-semibold leading-none tracking-tight",a),...s})}).displayName="CardTitle",s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,d.cn)("text-sm text-muted-foreground",a),...s})}).displayName="CardDescription";let m=s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,d.cn)("p-6 pt-0",a),...s})});m.displayName="CardContent";let f=s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("div",{ref:r,className:(0,d.cn)("flex items-center p-6 pt-0",a),...s})});function g(e){let{plant:r}=e,{addToCart:a}=(0,i._)();return(0,t.jsxs)(u,{className:"overflow-hidden transition-all hover:shadow-lg",children:[(0,t.jsx)("div",{className:"relative h-48 bg-gray-100",children:(0,t.jsx)(l.default,{src:r.image||"/placeholder.svg",alt:r.name,fill:!0,className:"object-cover"})}),(0,t.jsxs)(m,{className:"p-4",children:[(0,t.jsx)("h3",{className:"font-semibold text-lg",children:r.name}),(0,t.jsx)("p",{className:"text-emerald-700 font-medium mt-1",children:(0,d.v)(r.price)})]}),(0,t.jsx)(f,{className:"p-4 pt-0",children:(0,t.jsxs)(o.$,{onClick:()=>a(r),className:"w-full",children:[(0,t.jsx)(c.A,{className:"h-4 w-4 mr-2"}),"Add to Cart"]})})]})}f.displayName="CardFooter";var h=function(e){return e.INDOOR="indoor",e.TROPICAL="tropical",e.SUCCULENTS="succulents",e}({});let p="/paradise-nursery",v=[{id:"monstera-deliciosa",name:"Monstera Deliciosa",price:39.99,image:"".concat(p,"/placeholder.svg"),category:"tropical"},{id:"fiddle-leaf-fig",name:"Fiddle Leaf Fig",price:49.99,image:"".concat(p,"/placeholder.svg"),category:"indoor"},{id:"snake-plant",name:"Snake Plant",price:29.99,image:"".concat(p,"/placeholder.svg"),category:"indoor"},{id:"zz-plant",name:"ZZ Plant",price:34.99,image:"".concat(p,"/placeholder.svg"),category:"indoor"},{id:"pothos",name:"Golden Pothos",price:24.99,image:"".concat(p,"/placeholder.svg"),category:"indoor"},{id:"aloe-vera",name:"Aloe Vera",price:19.99,image:"".concat(p,"/placeholder.svg"),category:"succulents"},{id:"echeveria",name:"Echeveria",price:14.99,image:"".concat(p,"/placeholder.svg"),category:"succulents"},{id:"calathea",name:"Calathea Medallion",price:44.99,image:"".concat(p,"/placeholder.svg"),category:"tropical"},{id:"bird-of-paradise",name:"Bird of Paradise",price:59.99,image:"".concat(p,"/placeholder.svg"),category:"tropical"}];function x(){let{initializeCart:e}=(0,i._)();(0,s.useEffect)(()=>{e()},[e]);let r=Object.values(h);return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,t.jsx)(n.default,{}),(0,t.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold mb-8",children:"Our Plants"}),r.map(e=>{let r=v.filter(r=>r.category===e);return 0===r.length?null:(0,t.jsxs)("div",{className:"mb-12",children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold mb-4 capitalize",children:e}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:r.map(e=>(0,t.jsx)(g,{plant:e},e.id))})]},e)})]})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[690,21,497,954,358],()=>r(304)),_N_E=e.O()}]);