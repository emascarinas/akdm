webpackJsonp([1],{700:function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e(711);e.d(r,"BarrelModule",function(){return o.a})},705:function(n,r,e){"use strict";var o=e(0);e.d(r,"a",function(){return t}),console.log("`Barrel` component loaded asynchronously");var t=function(){function n(){}return n.prototype.ngOnInit=function(){console.log("hello `Barrel` component")},n}();t=__decorate([e.i(o._2)({selector:"barrel",template:"\n    <h1>Hello from Barrel</h1>\n    <span>\n      <a [routerLink]=\" ['./child-barrel'] \">\n        Child Barrel\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],t)},711:function(n,r,e){"use strict";var o=e(113),t=e(412),a=e(0),l=e(251),u=e(712),c=e(705);e.d(r,"a",function(){return i}),console.log("`Barrel` bundle loaded asynchronously");var i=function(){function n(){}return n}();i.routes=u.a,i=__decorate([e.i(a.i)({declarations:[c.a],imports:[o.b,t.a,l.a.forChild(u.a)]})],i)},712:function(n,r,e){"use strict";var o=e(705);e.d(r,"a",function(){return t});var t=[{path:"",children:[{path:"",component:o.a},{path:"child-barrel",loadChildren:function(){return e.e(6).then(e.bind(null,710)).then(function(n){return n.ChildBarrelModule})}}]}]}});