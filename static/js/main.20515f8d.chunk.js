(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{23:function(t,i,n){},24:function(t,i,n){},25:function(t,i,n){},31:function(t,i,n){},32:function(t,i,n){"use strict";n.r(i);var e=n(1),c=n(0),a=n.n(c),o=n(16),s=n.n(o),r=(n(23),n(7)),j=(n(24),n(2)),l=n(8),b=n.p+"static/media/mountain.283c5b9c.png",h=n.p+"static/media/okean.04df7147.png",u=n.p+"static/media/polostrov.acfe4214.png",d=n.p+"static/media/zemlya.0c797c6f.png",m=n.p+"static/media/sahara.6d99fd82.png",O=n.p+"static/media/reka.1e158f77.png",v={birinchi:"Dunyodagi eng baland tog` ?",ikkinchi:"Eng katta Okean ?",uchinchi:"Eng katta yarim orol ?",tortinchi:"Eng katta materik ?",bechinchi:" Dunyoda eng katta cho`l ?",oltinchi:" Eng uzun daryo ? "},k={birinchi:["Himolay tog`i"," Tyanshan tog'i","Alp tog'i","Kavkaz tog'i"],ikkinchi:["Tinch okeani"," Hind okeani","Shimoli muz okeani","Atlantika okeani"],uchinchi:["Arabiston yarim oroli","Hindi yarim oroli","Kamchatka yarim oroli","Skandinaviya yarim oroli"],tortinchi:["Yevrosiyo","Afrika"," Antarktida","Janubiy Amerika"],bechinchi:["Sahroi-Kabir","Atakama","Mirzacho'l","Qizilqum"],oltinchi:["Nil","Amazonka","Kongo","Sirdaryo"]},x={birinchi:b,ikkinchi:h,uchinchi:u,tortinchi:d,bechinchi:m,oltinchi:O},f={birinchi:"Himolay tog`i",ikkinchi:"Tinch okeani",uchinchi:"Arabiston yarim oroli",tortinchi:"Yevrosiyo",bechinchi:"Sahroi-Kabir",oltinchi:"Nil"},p=(n(25),function(t){var i=[];for(var n in Object.keys(v))i.push("");var a=Object(c.useState)(0),o=Object(r.a)(a,2),s=o[0],b=o[1],h=Object(c.useState)("none"),u=Object(r.a)(h,2),d=u[0],m=u[1],O=Object(c.useState)(i),f=Object(r.a)(O,2),p=f[0],g=f[1],y=Object.keys(v).map((function(t,i){return i===s?Object(e.jsx)("span",{className:"dot active"}):Object(e.jsx)("span",{onClick:function(){b(i)},className:"dot"})})),N=function(t,i){return Math.random()-.5},S=Object.keys(v).map((function(t,n){return Object(e.jsx)("div",{style:{backgroundImage:"url(".concat(x[t],")")},className:"savollar",children:Object(e.jsxs)("div",{className:"test",children:[Object(e.jsxs)("div",{className:"numbertext",children:["".concat(n+1,"/5")," "]}),Object(e.jsx)("div",{className:"savol",children:v[t]}),Object(e.jsx)("ul",{children:k[t].sort(N).map((function(t){return Object(e.jsx)("li",{className:"variant".concat(n+1),onClick:function(){var e,c;e=n,c=t,b(4===s?0:s+1),(i=p)[e]=c,g(i)},children:t})}))})]})})}));return Object(e.jsx)("div",{children:t.start?Object(e.jsxs)("div",{children:[S[s],Object(e.jsxs)("div",{children:[Object(e.jsx)("div",{className:"zzz",children:y}),Object(e.jsxs)("div",{children:[Object(e.jsx)("span",{onClick:function(){b(0===s?4:s-1)},children:"<"}),Object(e.jsx)("span",{onClick:function(){b(4===s?0:s+1)},children:">"})]}),Object(e.jsxs)("div",{children:[Object(e.jsx)("button",{className:"showAns",onClick:function(){m("javoblar")},children:"Javoblarim"}),Object(e.jsxs)("div",{className:d,children:[Object(e.jsx)("div",{className:"close",onClick:function(){m("none")},children:"x"}),Object(e.jsx)("ul",{children:p.map((function(t){return Object(e.jsx)("li",{children:t||"javob belgilanmadi"})}))})]})]})]}),Object(e.jsx)(l.b,{to:"/natija",children:Object(e.jsx)("button",{onClick:function(){t.stopSet((new Date).getTime()),t.setJavob(p)},className:"StopButton",children:"Yakunlash"})})]}):Object(e.jsx)(j.a,{to:"/"})})}),g=(n(31),function(t){return Object(e.jsx)("div",{children:t.natija?Object(e.jsxs)("div",{className:"natija",children:[Object(e.jsxs)("ul",{children:[t.natija.map((function(t,i){return Object(e.jsx)("li",{children:t===f[Object.keys(f)[i]]?"To'g'ri ":"Notog'ri"})})),Object(e.jsx)("div",{children:" Sizning natijangiz:  ".concat(t.vaqt.hours,":").concat(t.vaqt.minut,":").concat(t.vaqt.sec,":").concat(t.vaqt.mil," ")})]}),Object(e.jsx)(l.b,{to:"/",children:Object(e.jsx)("button",{className:"pre",children:"Home"})})]}):Object(e.jsx)(j.a,{to:"/"})})});var y=function(){var t=Object(c.useState)(0),i=Object(r.a)(t,2),n=i[0],a=i[1],o=Object(c.useState)(),s=Object(r.a)(o,2),b=s[0],h=s[1],u=Object(c.useState)(),d=Object(r.a)(u,2),m=(d[0],d[1],Object(c.useState)()),O=Object(r.a)(m,2),v=O[0],k=O[1],x=function(t){var i=function(t,i){var n=i-t;return{hours:Math.floor(n/1e3/60/60),minut:Math.floor(n/1e3/60),sec:Math.floor(n/1e3),mil:Math.floor(n%1e3)}}(n,t);h(i)};return Object(e.jsx)(l.a,{children:Object(e.jsxs)("div",{className:"container",children:[Object(e.jsx)("div",{className:"navbar",children:"Geografiyadan viktorina"}),Object(e.jsxs)("div",{className:"Container",children:[Object(e.jsx)(j.b,{path:"/natija",component:function(){return Object(e.jsx)(g,{natija:v,vaqt:b,stopSet:x})}}),Object(e.jsx)(j.b,{path:"/viktorina",component:function(){return Object(e.jsx)(p,{start:n,setJavob:k,stopSet:x})}}),Object(e.jsx)(j.b,{exact:!0,path:"/",component:function(){return Object(e.jsxs)(l.b,{to:"/viktorina",children:[" ",Object(e.jsx)("button",{onClick:function(){a((new Date).getTime())},className:"StartButton",children:" Start"})]})}})]})]})})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(i){var n=i.getCLS,e=i.getFID,c=i.getFCP,a=i.getLCP,o=i.getTTFB;n(t),e(t),c(t),a(t),o(t)}))};s.a.render(Object(e.jsx)(a.a.StrictMode,{children:Object(e.jsx)(y,{})}),document.getElementById("root")),N()}},[[32,1,2]]]);
//# sourceMappingURL=main.20515f8d.chunk.js.map