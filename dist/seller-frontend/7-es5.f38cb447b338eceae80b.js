!function(){function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{OpKh:function(t,r,n){"use strict";n.r(r),n.d(r,"AuthenticationModule",(function(){return z}));var a=n("ofXK"),l=n("tyNb"),i=n("3Pt+"),s=n("fXoL"),c=n("W4xs"),m=n("6fg7");function b(e,o){1&e&&(s.Qb(0,"p",24),s.zc(1," Please provide a email! "),s.Pb())}function u(e,o){1&e&&(s.Qb(0,"p",24),s.zc(1," Please provide a valid email! "),s.Pb())}function g(e,o){1&e&&(s.Qb(0,"p",24),s.zc(1," Please provide a password! "),s.Pb())}function d(e,o){if(1&e&&(s.Qb(0,"span"),s.zc(1),s.Pb()),2&e){var t=s.Zb();s.zb(1),s.Ac(t.loginError)}}var f,p,h,v=((f=function(){function t(o,r,n,a){e(this,t),this.fb=o,this.authService=r,this.router=n,this.toastService=a,this.loginError=null}var r,n,a;return r=t,(n=[{key:"ngOnInit",value:function(){this.loginForm=this.fb.group({email:["",[i.w.email,i.w.required]],password:["",[i.w.required]],rememberMe:[!1]}),JSON.parse(localStorage.getItem("remember"))&&(this.loginForm.controls.rememberMe.setValue(!0),this.loginForm.controls.email.setValue(localStorage.getItem("email")),this.loginForm.controls.password.setValue(localStorage.getItem("password")))}},{key:"login",value:function(e){var o=this;this.loginAttempt=!0,e&&this.authService.login({email:this.loginForm.controls.email.value,password:this.loginForm.controls.password.value}).subscribe((function(e){if(400!==e.code)if(200===e.code){console.log(e),sessionStorage.setItem("token",e.accessToken),localStorage.setItem("user",JSON.stringify(e.data)),o.loginForm.controls.rememberMe.value?(localStorage.setItem("remember",JSON.stringify(!0)),localStorage.setItem("email",o.loginForm.controls.email.value),localStorage.setItem("password",o.loginForm.controls.password.value)):(localStorage.setItem("remember",JSON.stringify(!1)),localStorage.setItem("email",""),localStorage.setItem("password",""));var t=JSON.parse(localStorage.getItem("user"));o.router.navigateByUrl(t&&t.accountNumber?"/seller/active-dashboard":"/seller")}else o.loginError=e.messgae;else console.log("Error",e.message),o.toastService.openSnackbar(e.message?e.message:"Unknown Error Occured!")}),(function(e){console.log(e)}))}}])&&o(r.prototype,n),a&&o(r,a),t}()).\u0275fac=function(e){return new(e||f)(s.Nb(i.d),s.Nb(c.a),s.Nb(l.b),s.Nb(m.a))},f.\u0275cmp=s.Hb({type:f,selectors:[["app-login"]],decls:44,vars:5,consts:[[1,"container-fluid"],[1,"row","d-flex","justify-content-center"],[1,"col-md-5","col-lg-4","col-sm-8"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"text-left",3,"formGroup","ngSubmit"],["for","",1,"m-0","small","mt-4"],["formControlName","email","type","email","id","defaultLoginFormEmail","placeholder","E-mail",1,"form-control"],["class","deep-orange-text small m-0",4,"ngIf"],["formControlName","password","type","password","id","defaultLoginFormPassword","placeholder","Password",1,"form-control"],[4,"ngIf"],[1,"d-md-flex","d-block","mt-3","justify-content-between"],[1,"custom-control","custom-checkbox"],["name","rememberMe","formControlName","rememberMe","type","checkbox","id","defaultLoginFormRemember",1,"custom-control-input"],["for","defaultLoginFormRemember",1,"custom-control-label"],["href","",1,"small"],["type","submit",1,"btn","elegant-color","text-white","btn-sm","btn-block","my-4","rounded"],[1,"small"],["href",""],[1,"my-4"],[1,"d-flex","justify-content-center"],[1,"mx-auto","bg-white","small","d-inline-block","px-2","text-black-50",2,"margin-top","-36px"],["href","","role","button",1,"btn-block","unique-color","text-white","btn","btn-sm","rounded"],[1,"deep-orange-text","small","m-0"]],template:function(e,o){1&e&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Qb(3,"div",3),s.Qb(4,"div",4),s.Qb(5,"h4",5),s.Qb(6,"b"),s.zc(7,"Sign In"),s.Pb(),s.Pb(),s.Qb(8,"form",6),s.Xb("ngSubmit",(function(){return o.login(o.loginForm.valid)})),s.Qb(9,"label",7),s.zc(10,"Email"),s.Pb(),s.Ob(11,"input",8),s.yc(12,b,2,0,"p",9),s.yc(13,u,2,0,"p",9),s.Qb(14,"label",7),s.zc(15,"Password"),s.Pb(),s.Ob(16,"input",10),s.yc(17,g,2,0,"p",9),s.yc(18,d,2,1,"span",11),s.Qb(19,"div",12),s.Qb(20,"div"),s.Qb(21,"div",13),s.Ob(22,"input",14),s.Qb(23,"label",15),s.zc(24,"Remember me"),s.Pb(),s.Pb(),s.Pb(),s.Qb(25,"div"),s.Qb(26,"a",16),s.zc(27,"Forgot password?"),s.Pb(),s.Pb(),s.Pb(),s.Qb(28,"button",17),s.zc(29,"Sign in"),s.Pb(),s.Qb(30,"p",18),s.zc(31,"By continuing, you agree to our "),s.Qb(32,"a",19),s.zc(33,"Terms of Use"),s.Pb(),s.zc(34," and "),s.Qb(35,"a",19),s.zc(36,"Privacy Policy"),s.Pb(),s.zc(37,"."),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Ob(38,"hr",20),s.Qb(39,"div",21),s.Qb(40,"p",22),s.zc(41,"New Member ?"),s.Pb(),s.Pb(),s.Qb(42,"a",23),s.zc(43,"Create your account"),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&e&&(s.zb(8),s.fc("formGroup",o.loginForm),s.zb(4),s.fc("ngIf",!o.loginForm.get("email").valid&&o.loginAttempt&&o.loginForm.get("email").hasError("required")),s.zb(1),s.fc("ngIf",o.loginForm.get("email").hasError("email")),s.zb(4),s.fc("ngIf",!o.loginForm.get("password").valid&&o.loginAttempt&&o.loginForm.get("password").hasError("required")),s.zb(1),s.fc("ngIf",o.loginError))},directives:[i.y,i.n,i.f,i.b,i.m,i.e,a.k,i.a],styles:[""]}),f),w=[{path:"register",component:n("zzch").a},{path:"login",component:v}],y=((p=function o(){e(this,o)}).\u0275mod=s.Lb({type:p}),p.\u0275inj=s.Kb({factory:function(e){return new(e||p)},imports:[[l.e.forChild(w)],l.e]}),p),P=n("dbUT"),Q=n("tk/3"),S=n("WeEj"),z=((h=function o(){e(this,o)}).\u0275mod=s.Lb({type:h}),h.\u0275inj=s.Kb({factory:function(e){return new(e||h)},providers:[c.a,S.a],imports:[[a.b,y,P.a,i.h,i.t,Q.c]]}),h)}}])}();