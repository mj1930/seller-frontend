(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{cLqD:function(t,b,n){"use strict";n.r(b),n.d(b,"InventoryModule",(function(){return v}));var c=n("ofXK"),e=n("dbUT"),i=n("3Pt+"),l=n("tk/3"),o=n("tyNb"),r=n("ZNij"),u=n("fXoL"),d=n("8/IB"),s=n("J0GB");function a(t,b){if(1&t&&(u.Qb(0,"td"),u.zc(1),u.Pb()),2&t){const t=u.Zb().$implicit;u.zb(1),u.Ac((null==t?null:t.feedback)||"NA")}}function p(t,b){1&t&&(u.Qb(0,"td"),u.zc(1,"NA"),u.Pb())}function P(t,b){if(1&t){const t=u.Rb();u.Qb(0,"tr",26),u.Qb(1,"td"),u.zc(2),u.Pb(),u.Qb(3,"td",27),u.Xb("click",(function(){u.rc(t);const n=b.$implicit;return u.Zb().goToProdDescPage(n._id)})),u.zc(4),u.Pb(),u.Qb(5,"td"),u.zc(6),u.Pb(),u.Qb(7,"td"),u.zc(8),u.Pb(),u.Qb(9,"td"),u.zc(10),u.Pb(),u.Qb(11,"td"),u.zc(12),u.Pb(),u.Qb(13,"td"),u.zc(14),u.Pb(),u.Qb(15,"td"),u.zc(16),u.Pb(),u.Qb(17,"td"),u.zc(18),u.Pb(),u.Qb(19,"td"),u.zc(20),u.Pb(),u.yc(21,a,2,1,"td",28),u.yc(22,p,2,0,"td",28),u.Pb()}if(2&t){const t=b.$implicit;u.zb(2),u.Ac(null==t?null:t.barcode),u.zb(2),u.Ac(null==t?null:t.itemName),u.zb(2),u.Ac(null==t?null:t.countryOfOrigin),u.zb(2),u.Ac(null==t?null:t.brand),u.zb(2),u.Ac(null==t?null:t.color),u.zb(2),u.Cc("Length: ",(null==t||null==t.dimensions?null:t.dimensions.length)||"NA",", Width: ",(null==t||null==t.dimensions?null:t.dimensions.width)||"NA",", Height: ",(null==t||null==t.dimensions?null:t.dimensions.height)||"NA",""),u.zb(2),u.Ac(null==t?null:t.unitCount),u.zb(2),u.Ac(null==t?null:t.availableUnits),u.zb(2),u.Ac(null==t?null:t.productPrice),u.zb(2),u.Ac(null!=t&&t.isApproved?"Approved":"Disapproved"),u.zb(1),u.fc("ngIf",!(null!=t&&t.isApproved)),u.zb(1),u.fc("ngIf",null==t?null:t.isApproved)}}const Q=[{path:"",component:(()=>{class t{constructor(t,b){this.productService=t,this.router=b,this.products=[],this.showSubMenu=!1,this.userName=""}ngOnInit(){this.getProducts(),this.userName=JSON.parse(localStorage.getItem("user")).name}getProducts(){this.productService.getProducts({skip:0,limit:100}).subscribe(t=>{this.products=t.data,console.log(t)},t=>{console.log(t)})}goToProdDescPage(t){this.router.navigate(["/inventory/product-description",t])}}return t.\u0275fac=function(b){return new(b||t)(u.Nb(d.a),u.Nb(o.b))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-manage-inventory"]],decls:63,vars:1,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"filer","col","p-3","rounded","my-2","elegant-color","text-white"],[1,"row","d-flex","align-items-center"],[1,"col-lg-9"],[1,"small","mr-3"],[1,"custom-control","custom-radio","custom-control-inline"],["type","radio","id","defaultInline1","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline1",1,"custom-control-label"],["type","radio","id","defaultInline2","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline2",1,"custom-control-label"],["type","radio","id","defaultInline3","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline3",1,"custom-control-label"],["type","radio","id","defaultInline4","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline4",1,"custom-control-label"],[1,"table-responsive","rounded","table-striped"],[1,"table"],[1,"grey","lighten-2","small","text-uppercase"],[1,"text-nowrap"],["scope","col"],["style","cursor: pointer",4,"ngFor","ngForOf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[2,"cursor","pointer"],[3,"click"],[4,"ngIf"]],template:function(t,b){1&t&&(u.Qb(0,"div",0),u.Ob(1,"app-side-navigation"),u.Qb(2,"main",1),u.Qb(3,"div",2),u.Qb(4,"h2"),u.zc(5,"Manage Inventory"),u.Pb(),u.Ob(6,"hr"),u.Qb(7,"div",3),u.Qb(8,"div",4),u.Qb(9,"div",5),u.Qb(10,"div",6),u.Qb(11,"span",7),u.zc(12,"Listing Status"),u.Pb(),u.Qb(13,"div",8),u.Ob(14,"input",9),u.Qb(15,"label",10),u.zc(16,"All"),u.Pb(),u.Pb(),u.Qb(17,"div",8),u.Ob(18,"input",11),u.Qb(19,"label",12),u.zc(20,"Active"),u.Pb(),u.Pb(),u.Qb(21,"div",8),u.Ob(22,"input",13),u.Qb(23,"label",14),u.zc(24,"Inactive"),u.Pb(),u.Pb(),u.Qb(25,"div",8),u.Ob(26,"input",15),u.Qb(27,"label",16),u.zc(28,"Blocked"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(29,"div",17),u.Qb(30,"table",18),u.Qb(31,"thead",19),u.Qb(32,"tr",20),u.Qb(33,"th",21),u.zc(34,"Barcode"),u.Pb(),u.Qb(35,"th",21),u.zc(36,"Item Name"),u.Pb(),u.Qb(37,"th",21),u.zc(38,"Country of Origin"),u.Pb(),u.Qb(39,"th",21),u.zc(40,"Manufacturer"),u.Pb(),u.Qb(41,"th",21),u.zc(42,"Color"),u.Pb(),u.Qb(43,"th",21),u.zc(44,"Product Dimensions"),u.Pb(),u.Qb(45,"th",21),u.zc(46,"Unit Count"),u.Pb(),u.Qb(47,"th",21),u.zc(48,"Available Units"),u.Pb(),u.Qb(49,"th",21),u.zc(50,"Pricing"),u.Pb(),u.Qb(51,"th",21),u.zc(52,"Status"),u.Pb(),u.Qb(53,"th",21),u.zc(54,"Feedback"),u.Pb(),u.Pb(),u.Pb(),u.Qb(55,"tbody"),u.yc(56,P,23,14,"tr",22),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(57,"footer",23),u.Qb(58,"div",24),u.Qb(59,"small"),u.zc(60," \xa9 2021 made with "),u.Ob(61,"i",25),u.zc(62," All Rights Reserved "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb()),2&t&&(u.zb(56),u.fc("ngForOf",b.products))},directives:[s.a,c.j,c.k],styles:[""]}),t})(),canActivate:[r.a]},{path:"product-description/:id",component:(()=>{class t{constructor(t,b,n){this.sellerService=t,this.router=b,this.activatedRoute=n,this.id=""}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.id=t.id}),this.getProductDetails()}getProductDetails(){this.sellerService.getProductDetails(this.id).subscribe(t=>{this.product=t.data},t=>{console.log(t)})}goToProductListingPage(){this.router.navigateByUrl("/inventory")}}return t.\u0275fac=function(b){return new(b||t)(u.Nb(d.a),u.Nb(o.b),u.Nb(o.a))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-product-description"]],decls:114,vars:15,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"page-content","py-0"],[1,"border","rounded","border-light","p-3","my-2"],[1,"font-weight-bold","m-0"],[1,"font-weight-light","text-dark"],[1,"btn","btn-sm","btn-dark","mt-3",3,"click"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"]],template:function(t,b){1&t&&(u.Qb(0,"div",0),u.Ob(1,"app-side-navigation"),u.Qb(2,"section",1),u.Qb(3,"div",2),u.Qb(4,"h2"),u.zc(5,"Product Details"),u.Pb(),u.Ob(6,"hr"),u.Pb(),u.Pb(),u.Qb(7,"main",3),u.Qb(8,"div",2),u.Qb(9,"div",4),u.Qb(10,"h4"),u.zc(11,"Product Description"),u.Pb(),u.Ob(12,"hr"),u.Qb(13,"div"),u.Qb(14,"p",5),u.zc(15,"Item Name (AKA Title): "),u.Qb(16,"span",6),u.zc(17),u.Pb(),u.Pb(),u.Pb(),u.Qb(18,"div"),u.Qb(19,"p",5),u.zc(20,"Barcode: "),u.Qb(21,"span",6),u.zc(22),u.Pb(),u.Pb(),u.Pb(),u.Qb(23,"div"),u.Qb(24,"p",5),u.zc(25,"Country Of Origin: "),u.Qb(26,"span",6),u.zc(27),u.Pb(),u.Pb(),u.Pb(),u.Qb(28,"div"),u.Qb(29,"p",5),u.zc(30,"City: "),u.Qb(31,"span",6),u.zc(32),u.Pb(),u.Pb(),u.Pb(),u.Qb(33,"div"),u.Qb(34,"p",5),u.zc(35,"Manufacturer: "),u.Qb(36,"span",6),u.zc(37),u.Pb(),u.Pb(),u.Pb(),u.Qb(38,"div"),u.Qb(39,"p",5),u.zc(40,"Available Units: "),u.Qb(41,"span",6),u.zc(42),u.Pb(),u.Pb(),u.Pb(),u.Qb(43,"div"),u.Qb(44,"p",5),u.zc(45,"Product Dimensions: "),u.Qb(46,"span",6),u.zc(47),u.Pb(),u.Pb(),u.Pb(),u.Qb(48,"div"),u.Qb(49,"p",5),u.zc(50,"Bullet Points: "),u.Qb(51,"span",6),u.zc(52,"NA"),u.Pb(),u.Pb(),u.Pb(),u.Qb(53,"div"),u.Qb(54,"p",5),u.zc(55,"Product Description: "),u.Qb(56,"span",6),u.zc(57),u.Pb(),u.Pb(),u.Pb(),u.Qb(58,"div"),u.Qb(59,"p",5),u.zc(60,"Product Weight: "),u.Qb(61,"span",6),u.zc(62),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(63,"div",4),u.Qb(64,"h4"),u.zc(65,"Product Selling Information"),u.Pb(),u.Ob(66,"hr"),u.Qb(67,"div"),u.Qb(68,"p",5),u.zc(69,"Your Price: "),u.Qb(70,"span",6),u.zc(71),u.Pb(),u.Pb(),u.Pb(),u.Qb(72,"div"),u.Qb(73,"p",5),u.zc(74,"Seller SKU: "),u.Qb(75,"span",6),u.zc(76,"NA"),u.Pb(),u.Pb(),u.Pb(),u.Qb(77,"div"),u.Qb(78,"p",5),u.zc(79,"Condition: "),u.Qb(80,"span",6),u.zc(81,"NA"),u.Pb(),u.Pb(),u.Pb(),u.Qb(82,"div"),u.Qb(83,"p",5),u.zc(84,"HSN Code: "),u.Qb(85,"span",6),u.zc(86,"NA"),u.Pb(),u.Pb(),u.Pb(),u.Qb(87,"div"),u.Qb(88,"p",5),u.zc(89,"MRP: "),u.Qb(90,"span",6),u.zc(91),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(92,"div",4),u.Qb(93,"h4"),u.zc(94,"Product Variations"),u.Pb(),u.Ob(95,"hr"),u.Qb(96,"div"),u.Qb(97,"p",5),u.zc(98,"Color: "),u.Qb(99,"span",6),u.zc(100),u.Pb(),u.Pb(),u.Pb(),u.Qb(101,"div"),u.Qb(102,"p",5),u.zc(103,"Size: "),u.Qb(104,"span",6),u.zc(105),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(106,"button",7),u.Xb("click",(function(){return b.goToProductListingPage()})),u.zc(107,"Close"),u.Pb(),u.Qb(108,"footer",8),u.Qb(109,"div",9),u.Qb(110,"small"),u.zc(111," \xa9 2021 made with "),u.Ob(112,"i",10),u.zc(113," All Rights Reserved "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb()),2&t&&(u.zb(17),u.Ac(null==b.product?null:b.product.itemName),u.zb(5),u.Ac(null==b.product?null:b.product.barcode),u.zb(5),u.Ac(null==b.product?null:b.product.countryOfOrigin),u.zb(5),u.Ac(null==b.product?null:b.product.city),u.zb(5),u.Ac(null==b.product?null:b.product.brand),u.zb(5),u.Ac((null==b.product?null:b.product.availableUnits)||"NA"),u.zb(5),u.Cc(" Length: ",(null==b.product||null==b.product.dimensions?null:b.product.dimensions.length)||"NA",", Width: ",(null==b.product||null==b.product.dimensions?null:b.product.dimensions.width)||"NA",", Height: ",(null==b.product||null==b.product.dimensions?null:b.product.dimensions.height)||"NA"," "),u.zb(10),u.Ac(null==b.product?null:b.product.description),u.zb(5),u.Ac(null==b.product?null:b.product.weight),u.zb(9),u.Bc("INR ",null==b.product?null:b.product.productPrice,""),u.zb(20),u.Bc("INR ",null==b.product?null:b.product.mrp,""),u.zb(9),u.Ac(null==b.product?null:b.product.color.join(",")),u.zb(5),u.Ac(null==b.product?null:b.product.size.join(",")))},directives:[s.a],styles:[""]}),t})(),canActivate:[r.a]}];let z=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(b){return new(b||t)},imports:[[o.e.forChild(Q)],o.e]}),t})();var m=n("WeEj"),h=n("PCNd");let v=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(b){return new(b||t)},providers:[m.a],imports:[[c.b,z,e.a,i.h,i.t,l.c,h.a]]}),t})()}}]);