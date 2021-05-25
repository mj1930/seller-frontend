!function(){function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var r=0;r<o.length;r++){var t=o[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{OpKh:function(r,t,n){"use strict";n.r(t),n.d(t,"AuthenticationModule",(function(){return F}));var i=n("ofXK"),l=n("tyNb"),a=n("3Pt+"),s=n("fXoL"),c=n("W4xs"),m=n("6fg7");function b(e,o){1&e&&(s.Sb(0,"p",24),s.Cc(1," Please provide a email! "),s.Rb())}function u(e,o){1&e&&(s.Sb(0,"p",24),s.Cc(1," Please provide a valid email! "),s.Rb())}function d(e,o){1&e&&(s.Sb(0,"p",24),s.Cc(1," Please provide a password! "),s.Rb())}function g(e,o){if(1&e&&(s.Sb(0,"span"),s.Cc(1),s.Rb()),2&e){var r=s.bc();s.zb(1),s.Dc(r.loginError)}}var f,p,S,h=((f=function(){function r(o,t,n,i){e(this,r),this.fb=o,this.authService=t,this.router=n,this.toastService=i,this.isSellerVerified=!1,this.loginError=null}var t,n,i;return t=r,(n=[{key:"ngOnInit",value:function(){this.loginForm=this.fb.group({email:["",[a.w.email,a.w.required]],password:["",[a.w.required]],rememberMe:[!1]}),JSON.parse(localStorage.getItem("remember"))&&(this.loginForm.controls.rememberMe.setValue(!0),this.loginForm.controls.email.setValue(localStorage.getItem("email")),this.loginForm.controls.password.setValue(localStorage.getItem("password")))}},{key:"login",value:function(e){var o=this;this.loginAttempt=!0,e&&this.authService.login({email:this.loginForm.controls.email.value,password:this.loginForm.controls.password.value}).subscribe((function(e){if(400!==e.code)if(200===e.code){sessionStorage.setItem("token",e.accessToken),localStorage.setItem("user",JSON.stringify(e.data)),o.loginForm.controls.rememberMe.value?(localStorage.setItem("remember",JSON.stringify(!0)),localStorage.setItem("email",o.loginForm.controls.email.value),localStorage.setItem("password",o.loginForm.controls.password.value)):(localStorage.setItem("remember",JSON.stringify(!1)),localStorage.setItem("email",""),localStorage.setItem("password",""));var r=JSON.parse(localStorage.getItem("user"));o.isSellerVerified=r.isVerified,o.router.navigateByUrl(r?o.isSellerVerified&&!r.accountNumber?"/seller":o.isSellerVerified&&r.accountNumber?"/seller/active-dashboard":"/seller/unverified-seller":"/seller")}else o.loginError=e.messgae;else console.log("Error",e.message),o.toastService.openSnackbar(e.message?e.message:"Unknown Error Occured!")}),(function(e){console.log(e)}))}}])&&o(t.prototype,n),i&&o(t,i),r}()).\u0275fac=function(e){return new(e||f)(s.Nb(a.d),s.Nb(c.a),s.Nb(l.b),s.Nb(m.a))},f.\u0275cmp=s.Hb({type:f,selectors:[["app-login"]],decls:44,vars:5,consts:[[1,"container-fluid"],[1,"row","d-flex","justify-content-center"],[1,"col-md-5","col-lg-4","col-sm-8"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"text-left",3,"formGroup","ngSubmit"],["for","",1,"m-0","small","mt-4"],["formControlName","email","type","email","id","defaultLoginFormEmail","placeholder","E-mail",1,"form-control"],["class","deep-orange-text small m-0",4,"ngIf"],["formControlName","password","type","password","id","defaultLoginFormPassword","placeholder","Password",1,"form-control"],[4,"ngIf"],[1,"d-md-flex","d-block","mt-3","justify-content-between"],[1,"custom-control","custom-checkbox"],["name","rememberMe","formControlName","rememberMe","type","checkbox","id","defaultLoginFormRemember",1,"custom-control-input"],["for","defaultLoginFormRemember",1,"custom-control-label"],["href","",1,"small"],["type","submit",1,"btn","elegant-color","text-white","btn-sm","btn-block","my-4","rounded"],[1,"small"],["href",""],[1,"my-4"],[1,"d-flex","justify-content-center"],[1,"mx-auto","bg-white","small","d-inline-block","px-2","text-black-50",2,"margin-top","-36px"],["href","","role","button",1,"btn-block","unique-color","text-white","btn","btn-sm","rounded"],[1,"deep-orange-text","small","m-0"]],template:function(e,o){1&e&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"div",2),s.Sb(3,"div",3),s.Sb(4,"div",4),s.Sb(5,"h4",5),s.Sb(6,"b"),s.Cc(7,"Sign In"),s.Rb(),s.Rb(),s.Sb(8,"form",6),s.Zb("ngSubmit",(function(){return o.login(o.loginForm.valid)})),s.Sb(9,"label",7),s.Cc(10,"Email"),s.Rb(),s.Ob(11,"input",8),s.Bc(12,b,2,0,"p",9),s.Bc(13,u,2,0,"p",9),s.Sb(14,"label",7),s.Cc(15,"Password"),s.Rb(),s.Ob(16,"input",10),s.Bc(17,d,2,0,"p",9),s.Bc(18,g,2,1,"span",11),s.Sb(19,"div",12),s.Sb(20,"div"),s.Sb(21,"div",13),s.Ob(22,"input",14),s.Sb(23,"label",15),s.Cc(24,"Remember me"),s.Rb(),s.Rb(),s.Rb(),s.Sb(25,"div"),s.Sb(26,"a",16),s.Cc(27,"Forgot password?"),s.Rb(),s.Rb(),s.Rb(),s.Sb(28,"button",17),s.Cc(29,"Sign in"),s.Rb(),s.Sb(30,"p",18),s.Cc(31,"By continuing, you agree to our "),s.Sb(32,"a",19),s.Cc(33,"Terms of Use"),s.Rb(),s.Cc(34," and "),s.Sb(35,"a",19),s.Cc(36,"Privacy Policy"),s.Rb(),s.Cc(37,"."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Ob(38,"hr",20),s.Sb(39,"div",21),s.Sb(40,"p",22),s.Cc(41,"New Member ?"),s.Rb(),s.Rb(),s.Sb(42,"a",23),s.Cc(43,"Create your account"),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&e&&(s.zb(8),s.hc("formGroup",o.loginForm),s.zb(4),s.hc("ngIf",!o.loginForm.get("email").valid&&o.loginAttempt&&o.loginForm.get("email").hasError("required")),s.zb(1),s.hc("ngIf",o.loginForm.get("email").hasError("email")),s.zb(4),s.hc("ngIf",!o.loginForm.get("password").valid&&o.loginAttempt&&o.loginForm.get("password").hasError("required")),s.zb(1),s.hc("ngIf",o.loginError))},directives:[a.y,a.n,a.f,a.b,a.m,a.e,i.k,a.a],styles:[""]}),f),v=[{path:"register",component:n("zzch").a},{path:"login",component:h}],w=((p=function o(){e(this,o)}).\u0275mod=s.Lb({type:p}),p.\u0275inj=s.Kb({factory:function(e){return new(e||p)},imports:[[l.f.forChild(v)],l.f]}),p),y=n("dbUT"),R=n("tk/3"),C=n("WeEj"),F=((S=function o(){e(this,o)}).\u0275mod=s.Lb({type:S}),S.\u0275inj=s.Kb({factory:function(e){return new(e||S)},providers:[c.a,C.a],imports:[[i.b,w,y.a,a.h,a.t,R.c]]}),S)}}])}();