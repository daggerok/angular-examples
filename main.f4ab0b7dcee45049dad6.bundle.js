webpackJsonp([2],{0:function(l,n,e){l.exports=e("cDNt")},cDNt:function(l,n,e){"use strict";function u(l,n){var e=l.todos,u={lastUpdate:new Date};switch(console.log("action",n),console.dir(l),n.type){case b:var t=n.by;return t.id=P.next(),x({},l,{todos:e.concat([t])},u);case y:var o=e.find(function(l){return l.id===n.by}),d=e.indexOf(o);return x({},l,{todos:e.slice(0,d).concat([x({},o,{isCompleted:!o.isCompleted})],e.slice(d+1))},u);case R:return x({},e.filter(function(l){return l.id!==n.by}),u);case C:return P.reset(),x({},h,u);default:return l}}function t(l){return g["\u0275vid"](0,[g["\u0275pid"](0,k.d,[g.LOCALE_ID]),(l()(),g["\u0275eld"](0,null,null,17,"div",[["class","card card-outline-primary text-xs-center"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,14,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,11,"blockquote",[["class","card-blockquote"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,2,"p",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n        Total items: ","\n      "])),g["\u0275pid"](131072,k.a,[g.ChangeDetectorRef]),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,4,"footer",[],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.removeTodos()&&u}return u},null,null)),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,1,"a",[["class","card-link"],["href","#"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n          Remove TODOs\n        "])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275ted"](null,["\n"])),(l()(),g["\u0275ted"](null,["\n\n"])),(l()(),g["\u0275eld"](0,null,null,6,"div",[["class","card-footer text-muted text-xs-center"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,3,"span",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Last Update: ",""])),g["\u0275pid"](131072,k.a,[g.ChangeDetectorRef]),g["\u0275ppd"](2),(l()(),g["\u0275ted"](null,["\n"])),(l()(),g["\u0275ted"](null,["\n"]))],null,function(l,n){var e=n.component;l(n,8,0,g["\u0275unv"](n,8,0,g["\u0275nov"](n,9).transform(e.todos)).length),l(n,23,0,g["\u0275unv"](n,23,0,l(n,25,0,g["\u0275nov"](n,0),g["\u0275unv"](n,23,0,g["\u0275nov"](n,24).transform(e.lastUpdate)),"mediumTime")))})}function o(l){return g["\u0275vid"](0,[(l()(),g["\u0275eld"](0,null,null,1,"app-todo-overview",[],null,null,null,t,F)),g["\u0275did"](114688,null,0,S,[L.NgRedux,w],null,null)],function(l,n){l(n,1,0)},null)}function d(l){return g["\u0275vid"](0,[(l()(),g["\u0275eld"](0,null,null,73,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var u=!0,t=l.component;if("submit"===n){u=!1!==g["\u0275nov"](l,2).onSubmit(e)&&u}if("reset"===n){u=!1!==g["\u0275nov"](l,2).onReset()&&u}if("submit"===n){u=!1!==t.addTodo()&&u}return u},null,null)),g["\u0275did"](16384,null,0,_.o,[],null,null),g["\u0275did"](16384,[["todoForm",4]],0,_.j,[[8,null],[8,null]],null,null),g["\u0275prd"](2048,null,_.c,null,[_.j]),g["\u0275did"](16384,null,0,_.i,[_.c],null,null),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,66,"fieldset",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"legend",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Add TODO"])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,5,"input",[["class","form-control"],["id","description"],["name","description"],["placeholder","Enter description"],["requiredtype","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var u=!0,t=l.component;if("input"===n){u=!1!==g["\u0275nov"](l,14)._handleInput(e.target.value)&&u}if("blur"===n){u=!1!==g["\u0275nov"](l,14).onTouched()&&u}if("compositionstart"===n){u=!1!==g["\u0275nov"](l,14)._compositionStart()&&u}if("compositionend"===n){u=!1!==g["\u0275nov"](l,14)._compositionEnd(e.target.value)&&u}if("ngModelChange"===n){u=!1!==(t.model.description=e)&&u}return u},null,null)),g["\u0275did"](16384,null,0,_.d,[g.Renderer2,g.ElementRef,[2,_.a]],null,null),g["\u0275prd"](1024,null,_.f,function(l){return[l]},[_.d]),g["\u0275did"](671744,[["description",4]],0,_.k,[[2,_.c],[8,null],[8,null],[2,_.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),g["\u0275prd"](2048,null,_.g,null,[_.k]),g["\u0275did"](16384,null,0,_.h,[_.g],null,null),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275ted"](null,["\n\n    "])),(l()(),g["\u0275eld"](0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,5,"input",[["class","form-control"],["id","responsible"],["name","responsible"],["placeholder","Enter responsible"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,e){var u=!0,t=l.component;if("input"===n){u=!1!==g["\u0275nov"](l,24)._handleInput(e.target.value)&&u}if("blur"===n){u=!1!==g["\u0275nov"](l,24).onTouched()&&u}if("compositionstart"===n){u=!1!==g["\u0275nov"](l,24)._compositionStart()&&u}if("compositionend"===n){u=!1!==g["\u0275nov"](l,24)._compositionEnd(e.target.value)&&u}if("ngModelChange"===n){u=!1!==(t.model.responsible=e)&&u}return u},null,null)),g["\u0275did"](16384,null,0,_.d,[g.Renderer2,g.ElementRef,[2,_.a]],null,null),g["\u0275prd"](1024,null,_.f,function(l){return[l]},[_.d]),g["\u0275did"](671744,[["responsible",4]],0,_.k,[[2,_.c],[8,null],[8,null],[2,_.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),g["\u0275prd"](2048,null,_.g,null,[_.k]),g["\u0275did"](16384,null,0,_.h,[_.g],null,null),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275ted"](null,["\n\n    "])),(l()(),g["\u0275eld"](0,null,null,24,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,21,"select",[["class","form-control"],["id","priority"],["name","priority"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,t=l.component;if("change"===n){u=!1!==g["\u0275nov"](l,34).onChange(e.target.value)&&u}if("blur"===n){u=!1!==g["\u0275nov"](l,34).onTouched()&&u}if("ngModelChange"===n){u=!1!==(t.model.priority=e)&&u}return u},null,null)),g["\u0275did"](16384,null,0,_.m,[g.Renderer2,g.ElementRef],null,null),g["\u0275prd"](1024,null,_.f,function(l){return[l]},[_.m]),g["\u0275did"](671744,[["priority",4]],0,_.k,[[2,_.c],[8,null],[8,null],[2,_.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),g["\u0275prd"](2048,null,_.g,null,[_.k]),g["\u0275did"](16384,null,0,_.h,[_.g],null,null),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,3,"option",[["value","low"]],null,null,null,null,null)),g["\u0275did"](147456,null,0,_.l,[g.ElementRef,g.Renderer2,[2,_.m]],{value:[0,"value"]},null),g["\u0275did"](147456,null,0,_.q,[g.ElementRef,g.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),g["\u0275ted"](null,["Low"])),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,3,"option",[["value","normal"]],null,null,null,null,null)),g["\u0275did"](147456,null,0,_.l,[g.ElementRef,g.Renderer2,[2,_.m]],{value:[0,"value"]},null),g["\u0275did"](147456,null,0,_.q,[g.ElementRef,g.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),g["\u0275ted"](null,["Normal"])),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,3,"option",[["value","height"]],null,null,null,null,null)),g["\u0275did"](147456,null,0,_.l,[g.ElementRef,g.Renderer2,[2,_.m]],{value:[0,"value"]},null),g["\u0275did"](147456,null,0,_.q,[g.ElementRef,g.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),g["\u0275ted"](null,["Height"])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275ted"](null,["\n\n    "])),(l()(),g["\u0275eld"](0,null,null,11,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,8,"label",[["class","form-check-label"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,5,"input",[["class","form-check-input"],["id","isCompleted"],["name","isCompleted"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,t=l.component;if("change"===n){u=!1!==g["\u0275nov"](l,62).onChange(e.target.checked)&&u}if("blur"===n){u=!1!==g["\u0275nov"](l,62).onTouched()&&u}if("ngModelChange"===n){u=!1!==(t.model.isCompleted=e)&&u}return u},null,null)),g["\u0275did"](16384,null,0,_.b,[g.Renderer2,g.ElementRef],null,null),g["\u0275prd"](1024,null,_.f,function(l){return[l]},[_.b]),g["\u0275did"](671744,[["isCompleted",4]],0,_.k,[[2,_.c],[8,null],[8,null],[2,_.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),g["\u0275prd"](2048,null,_.g,null,[_.k]),g["\u0275did"](16384,null,0,_.h,[_.g],null,null),(l()(),g["\u0275ted"](null,["completed"])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275ted"](null,["\n\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Submit"])),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275ted"](null,["\n"])),(l()(),g["\u0275ted"](null,["\n"]))],function(l,n){var e=n.component;l(n,16,0,"description",e.model.description);l(n,26,0,"responsible",e.model.responsible);l(n,36,0,"priority",e.model.priority);l(n,41,0,"low");l(n,42,0,"low");l(n,46,0,"normal");l(n,47,0,"normal");l(n,51,0,"height");l(n,52,0,"height");l(n,64,0,"isCompleted",e.model.isCompleted)},function(l,n){l(n,0,0,g["\u0275nov"](n,4).ngClassUntouched,g["\u0275nov"](n,4).ngClassTouched,g["\u0275nov"](n,4).ngClassPristine,g["\u0275nov"](n,4).ngClassDirty,g["\u0275nov"](n,4).ngClassValid,g["\u0275nov"](n,4).ngClassInvalid,g["\u0275nov"](n,4).ngClassPending),l(n,13,0,g["\u0275nov"](n,18).ngClassUntouched,g["\u0275nov"](n,18).ngClassTouched,g["\u0275nov"](n,18).ngClassPristine,g["\u0275nov"](n,18).ngClassDirty,g["\u0275nov"](n,18).ngClassValid,g["\u0275nov"](n,18).ngClassInvalid,g["\u0275nov"](n,18).ngClassPending),l(n,23,0,g["\u0275nov"](n,28).ngClassUntouched,g["\u0275nov"](n,28).ngClassTouched,g["\u0275nov"](n,28).ngClassPristine,g["\u0275nov"](n,28).ngClassDirty,g["\u0275nov"](n,28).ngClassValid,g["\u0275nov"](n,28).ngClassInvalid,g["\u0275nov"](n,28).ngClassPending),l(n,33,0,g["\u0275nov"](n,38).ngClassUntouched,g["\u0275nov"](n,38).ngClassTouched,g["\u0275nov"](n,38).ngClassPristine,g["\u0275nov"](n,38).ngClassDirty,g["\u0275nov"](n,38).ngClassValid,g["\u0275nov"](n,38).ngClassInvalid,g["\u0275nov"](n,38).ngClassPending),l(n,61,0,g["\u0275nov"](n,66).ngClassUntouched,g["\u0275nov"](n,66).ngClassTouched,g["\u0275nov"](n,66).ngClassPristine,g["\u0275nov"](n,66).ngClassDirty,g["\u0275nov"](n,66).ngClassValid,g["\u0275nov"](n,66).ngClassInvalid,g["\u0275nov"](n,66).ngClassPending)})}function i(l){return g["\u0275vid"](0,[(l()(),g["\u0275eld"](0,null,null,1,"app-add-todo",[],null,null,null,d,Y)),g["\u0275did"](114688,null,0,$,[w],null,null)],function(l,n){l(n,1,0)},null)}function r(l){return g["\u0275vid"](0,[(l()(),g["\u0275eld"](0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["",""])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["",""])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["",""])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["",""])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"td",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["",""])),(l()(),g["\u0275ted"](null,["\n  "]))],null,function(l,n){l(n,3,0,n.context.$implicit.id),l(n,6,0,n.context.$implicit.description),l(n,9,0,n.context.$implicit.responsible),l(n,12,0,n.context.$implicit.priority),l(n,15,0,n.context.$implicit.isCompleted)})}function a(l){return g["\u0275vid"](0,[(l()(),g["\u0275eld"](0,null,null,29,"table",[["class","table table-striped table-hover table-bordered"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n\n  "])),(l()(),g["\u0275eld"](0,null,null,19,"thead",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["#"])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Description"])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Responsible"])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Priority"])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"th",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Done"])),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275ted"](null,["\n\n  "])),(l()(),g["\u0275eld"](0,null,null,5,"tbody",[],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275and"](16777216,null,null,2,null,r)),g["\u0275did"](802816,null,0,k.e,[g.ViewContainerRef,g.TemplateRef,g.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),g["\u0275pid"](131072,k.a,[g.ChangeDetectorRef]),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275ted"](null,["\n"]))],function(l,n){var e=n.component;l(n,26,0,g["\u0275unv"](n,26,0,g["\u0275nov"](n,27).transform(e.todos)))},null)}function s(l){return g["\u0275vid"](0,[(l()(),g["\u0275and"](16777216,null,null,2,null,a)),g["\u0275did"](16384,null,0,k.f,[g.ViewContainerRef,g.TemplateRef],{ngIf:[0,"ngIf"]},null),g["\u0275pid"](131072,k.a,[g.ChangeDetectorRef]),(l()(),g["\u0275ted"](null,["\n"]))],function(l,n){var e=n.component;l(n,1,0,g["\u0275unv"](n,1,0,g["\u0275nov"](n,2).transform(e.todos)).length>0)},null)}function c(l){return g["\u0275vid"](0,[(l()(),g["\u0275eld"](0,null,null,1,"app-todo-list",[],null,null,null,s,Q)),g["\u0275did"](114688,null,0,B,[w],null,null)],function(l,n){l(n,1,0)},null)}function p(l){return g["\u0275vid"](0,[(l()(),g["\u0275eld"](0,null,null,53,"nav",[["class","navbar navbar-toggleable-md navbar-light bg-inverse"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,3,"button",[["aria-controls","navbarColor01"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler navbar-toggler-right"],["data-target","#navbarColor01"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Navbar"])),(l()(),g["\u0275ted"](null,["\n\n  "])),(l()(),g["\u0275eld"](0,null,null,42,"div",[["class","collapse navbar-collapse"],["id","navbarColor01"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,27,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,6,"li",[["class","nav-item active"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,3,"a",[["class","nav-link"],["href","#"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Home "])),(l()(),g["\u0275eld"](0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["(current)"])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,1,"a",[["class","nav-link"],["href","#"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Features"])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,1,"a",[["class","nav-link"],["href","#"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Pricing"])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n        "])),(l()(),g["\u0275eld"](0,null,null,1,"a",[["class","nav-link"],["href","#"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["About"])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,10,"form",[["class","form-inline"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var u=!0;if("submit"===n){u=!1!==g["\u0275nov"](l,43).onSubmit(e)&&u}if("reset"===n){u=!1!==g["\u0275nov"](l,43).onReset()&&u}return u},null,null)),g["\u0275did"](16384,null,0,_.o,[],null,null),g["\u0275did"](16384,null,0,_.j,[[8,null],[8,null]],null,null),g["\u0275prd"](2048,null,_.c,null,[_.j]),g["\u0275did"](16384,null,0,_.i,[_.c],null,null),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,0,"input",[["class","form-control mr-sm-2"],["placeholder","Search"],["type","text"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,1,"button",[["class","btn btn-secondary my-2 my-sm-0"],["type","submit"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Search"])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275ted"](null,["\n"])),(l()(),g["\u0275ted"](null,["\n\n"])),(l()(),g["\u0275eld"](0,null,null,25,"div",[["class","container"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275eld"](0,null,null,1,"h3",[["class","card-header"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["",""])),(l()(),g["\u0275ted"](null,["\n\n    "])),(l()(),g["\u0275eld"](0,null,null,7,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Angular 2"])),(l()(),g["\u0275ted"](null,["\n      "])),(l()(),g["\u0275eld"](0,null,null,1,"h6",[["class","card-subtitle text-muted"]],null,null,null,null,null)),(l()(),g["\u0275ted"](null,["Redux Store"])),(l()(),g["\u0275ted"](null,["\n    "])),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,1,"app-todo-overview",[],null,null,null,t,F)),g["\u0275did"](114688,null,0,S,[L.NgRedux,w],null,null),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,1,"app-add-todo",[],null,null,null,d,Y)),g["\u0275did"](114688,null,0,$,[w],null,null),(l()(),g["\u0275ted"](null,["\n  "])),(l()(),g["\u0275eld"](0,null,null,1,"app-todo-list",[],null,null,null,s,Q)),g["\u0275did"](114688,null,0,B,[w],null,null),(l()(),g["\u0275ted"](null,["\n"])),(l()(),g["\u0275ted"](null,["\n"]))],function(l,n){l(n,73,0),l(n,76,0),l(n,79,0)},function(l,n){var e=n.component;l(n,41,0,g["\u0275nov"](n,45).ngClassUntouched,g["\u0275nov"](n,45).ngClassTouched,g["\u0275nov"](n,45).ngClassPristine,g["\u0275nov"](n,45).ngClassDirty,g["\u0275nov"](n,45).ngClassValid,g["\u0275nov"](n,45).ngClassInvalid,g["\u0275nov"](n,45).ngClassPending),l(n,60,0,e.title)})}function f(l){return g["\u0275vid"](0,[(l()(),g["\u0275eld"](0,null,null,1,"app-root",[],null,null,null,p,X)),g["\u0275did"](49152,null,0,T,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var g=e("/oeL"),m={production:!0},v=e("kKZY"),h={todos:[],lastUpdate:null},b="ADD_TODO",y="TOGGLE_TODO",R="REMOVE_TODO",C="REMOVE_TODOS",O=function(){function l(){this.id=this.reset()}return l.prototype.reset=function(l){return void 0===l&&(l=1),this.id=l},l.prototype.next=function(){return this.id++},l}(),x=this&&this.__assign||Object.assign||function(l){for(var n,e=1,u=arguments.length;e<u;e++){n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t])}return l},P=new O,j=function(){function l(l){this.ngRedux=l,this.ngRedux.configureStore(u,h)}return l.ctorParameters=function(){return[{type:v.NgRedux}]},l}(),T=function(){function l(){this.title="TODO App using Angular 4 Redux"}return l}(),D=[""],_=e("bm2B"),I=[""],k=e("qbdv"),E=this&&this.__decorate||function(l,n,e,u){var t,o=arguments.length,d=o<3?n:null===u?u=Object.getOwnPropertyDescriptor(n,e):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(l,n,e,u);else for(var i=l.length-1;i>=0;i--)(t=l[i])&&(d=(o<3?t(d):o>3?t(n,e,d):t(n,e))||d);return o>3&&d&&Object.defineProperty(n,e,d),d},M=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},w=function(){function l(l){this.ngRedux=l}return l.prototype.addTodo=function(l){this.ngRedux.dispatch({type:b,by:l})},l.prototype.toggleTodo=function(l){this.ngRedux.dispatch({type:y,by:l})},l.prototype.removeTodo=function(l){this.ngRedux.dispatch({type:R,by:l})},l.prototype.removeTodos=function(){this.ngRedux.dispatch({type:C})},l.ctorParameters=function(){return[{type:v.NgRedux}]},l}();E([Object(v.select)("todos"),M("design:type",Object)],w.prototype,"todos",void 0),E([Object(v.select)("lastUpdate"),M("design:type",Object)],w.prototype,"lastUpdate",void 0);var A=this&&this.__decorate||function(l,n,e,u){var t,o=arguments.length,d=o<3?n:null===u?u=Object.getOwnPropertyDescriptor(n,e):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(l,n,e,u);else for(var i=l.length-1;i>=0;i--)(t=l[i])&&(d=(o<3?t(d):o>3?t(n,e,d):t(n,e))||d);return o>3&&d&&Object.defineProperty(n,e,d),d},N=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},S=function(){function l(l,n){this.ngRedux=l,this.todoService=n}return l.prototype.ngOnInit=function(){},l.prototype.removeTodos=function(){this.todoService.removeTodos()},l.ctorParameters=function(){return[{type:v.NgRedux},{type:w}]},l}();A([Object(v.select)("todos"),N("design:type",Object)],S.prototype,"todos",void 0),A([Object(v.select)("lastUpdate"),N("design:type",Object)],S.prototype,"lastUpdate",void 0);var L=e("mkgw"),U=[I],F=g["\u0275crt"]({encapsulation:0,styles:U,data:{}}),V=(g["\u0275ccf"]("app-todo-overview",S,o,{},{},[]),[""]),q=this&&this.__decorate||function(l,n,e,u){var t,o=arguments.length,d=o<3?n:null===u?u=Object.getOwnPropertyDescriptor(n,e):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(l,n,e,u);else for(var i=l.length-1;i>=0;i--)(t=l[i])&&(d=(o<3?t(d):o>3?t(n,e,d):t(n,e))||d);return o>3&&d&&Object.defineProperty(n,e,d),d},Z=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},$=function(){function l(l){this.todoService=l,this.defaultPrio="normal"}return l.prototype.ngOnInit=function(){this.resetModel()},l.prototype.addTodo=function(){this.todoService.addTodo(this.model),this.resetModel()},l.prototype.resetModel=function(){this.model&&(this.defaultPrio=this.model.priority),this.model={id:-1,description:"",responsible:"",priority:this.defaultPrio,isCompleted:!1}},l.ctorParameters=function(){return[{type:w}]},l}();q([Object(v.select)("todos"),Z("design:type",Object)],$.prototype,"todos",void 0);var H=[V],Y=g["\u0275crt"]({encapsulation:0,styles:H,data:{}}),G=(g["\u0275ccf"]("app-add-todo",$,i,{},{},[]),[""]),K=this&&this.__decorate||function(l,n,e,u){var t,o=arguments.length,d=o<3?n:null===u?u=Object.getOwnPropertyDescriptor(n,e):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(l,n,e,u);else for(var i=l.length-1;i>=0;i--)(t=l[i])&&(d=(o<3?t(d):o>3?t(n,e,d):t(n,e))||d);return o>3&&d&&Object.defineProperty(n,e,d),d},z=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},B=function(){function l(l){this.todoServiceService=l}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:w}]},l}();K([Object(v.select)(),z("design:type",Object)],B.prototype,"todos",void 0);var J=[G],Q=g["\u0275crt"]({encapsulation:0,styles:J,data:{}}),W=(g["\u0275ccf"]("app-todo-list",B,c,{},{},[]),[D]),X=g["\u0275crt"]({encapsulation:0,styles:W,data:{}}),ll=g["\u0275ccf"]("app-root",T,f,{},{},[]),nl=e("5ySN"),el=e("fc+i"),ul=e("CPp0"),tl=e("ALdi"),ol=g["\u0275cmf"](j,[T],function(l){return g["\u0275mod"]([g["\u0275mpd"](512,g.ComponentFactoryResolver,g["\u0275CodegenComponentFactoryResolver"],[[8,[ll]],[3,g.ComponentFactoryResolver],g.NgModuleRef]),g["\u0275mpd"](4608,nl.DevToolsExtension,nl.DevToolsExtension,[g.ApplicationRef,L.NgRedux]),g["\u0275mpd"](5120,g.LOCALE_ID,g["\u0275m"],[[3,g.LOCALE_ID]]),g["\u0275mpd"](4608,k.h,k.g,[g.LOCALE_ID]),g["\u0275mpd"](4608,g.Compiler,g.Compiler,[]),g["\u0275mpd"](5120,g.APP_ID,g["\u0275f"],[]),g["\u0275mpd"](5120,g.IterableDiffers,g["\u0275k"],[]),g["\u0275mpd"](5120,g.KeyValueDiffers,g["\u0275l"],[]),g["\u0275mpd"](4608,el.b,el.s,[k.c]),g["\u0275mpd"](6144,g.Sanitizer,null,[el.b]),g["\u0275mpd"](4608,el.e,el.f,[]),g["\u0275mpd"](5120,el.c,function(l,n,e,u){return[new el.k(l),new el.o(n),new el.n(e,u)]},[k.c,k.c,k.c,el.e]),g["\u0275mpd"](4608,el.d,el.d,[el.c,g.NgZone]),g["\u0275mpd"](135680,el.m,el.m,[k.c]),g["\u0275mpd"](4608,el.l,el.l,[el.d,el.m]),g["\u0275mpd"](6144,g.RendererFactory2,null,[el.l]),g["\u0275mpd"](6144,el.p,null,[el.m]),g["\u0275mpd"](4608,g.Testability,g.Testability,[g.NgZone]),g["\u0275mpd"](4608,el.g,el.g,[k.c]),g["\u0275mpd"](4608,el.i,el.i,[k.c]),g["\u0275mpd"](4608,_.p,_.p,[]),g["\u0275mpd"](4608,ul.c,ul.c,[]),g["\u0275mpd"](4608,ul.g,ul.b,[]),g["\u0275mpd"](5120,ul.i,ul.j,[]),g["\u0275mpd"](4608,ul.h,ul.h,[ul.c,ul.g,ul.i]),g["\u0275mpd"](4608,ul.f,ul.a,[]),g["\u0275mpd"](5120,ul.d,ul.k,[ul.h,ul.f]),g["\u0275mpd"](4608,w,w,[L.NgRedux]),g["\u0275mpd"](512,tl.NgReduxModule,tl.NgReduxModule,[]),g["\u0275mpd"](512,k.b,k.b,[]),g["\u0275mpd"](1024,g.ErrorHandler,el.q,[]),g["\u0275mpd"](1024,g.APP_INITIALIZER,function(l,n){return[el.r(l,n)]},[[2,el.h],[2,g.NgProbeToken]]),g["\u0275mpd"](512,g.ApplicationInitStatus,g.ApplicationInitStatus,[[2,g.APP_INITIALIZER]]),g["\u0275mpd"](131584,g["\u0275e"],g["\u0275e"],[g.NgZone,g["\u0275Console"],g.Injector,g.ErrorHandler,g.ComponentFactoryResolver,g.ApplicationInitStatus]),g["\u0275mpd"](2048,g.ApplicationRef,null,[g["\u0275e"]]),g["\u0275mpd"](512,g.ApplicationModule,g.ApplicationModule,[g.ApplicationRef]),g["\u0275mpd"](512,el.a,el.a,[[3,el.a]]),g["\u0275mpd"](512,_.n,_.n,[]),g["\u0275mpd"](512,_.e,_.e,[]),g["\u0275mpd"](512,ul.e,ul.e,[]),g["\u0275mpd"](1024,L.NgRedux,tl._ngReduxFactory,[g.NgZone]),g["\u0275mpd"](512,j,j,[L.NgRedux])])});m.production&&Object(g.enableProdMode)(),Object(el.j)().bootstrapModuleFactory(ol)},gFIY:function(l,n){function e(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}e.keys=function(){return[]},e.resolve=e,l.exports=e,e.id="gFIY"}},[0]);