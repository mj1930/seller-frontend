!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{cLqD:function(n,i,c){"use strict";c.r(i),c.d(i,"InventoryModule",(function(){return N}));var b=c("ofXK"),o=c("dbUT"),r=c("3Pt+"),l=c("tk/3"),u=c("tyNb"),d=c("ZNij"),a=c("fXoL"),p=c("8/IB"),s=c("6fg7"),P=c("J0GB");function Q(t,n){if(1&t){var e=a.Rb();a.Qb(0,"tr",26),a.Qb(1,"td"),a.zc(2),a.Pb(),a.Qb(3,"td"),a.zc(4),a.Pb(),a.Qb(5,"td"),a.zc(6),a.Pb(),a.Qb(7,"td"),a.zc(8),a.Pb(),a.Qb(9,"td"),a.zc(10),a.ac(11,"date"),a.Pb(),a.Qb(12,"td"),a.zc(13),a.Pb(),a.Qb(14,"td"),a.zc(15),a.Pb(),a.Qb(16,"td"),a.zc(17),a.Pb(),a.Qb(18,"td",27),a.Ob(19,"i",28),a.Qb(20,"input",29),a.Xb("ngModelChange",(function(t){return a.rc(e),n.$implicit.productPrice=t}))("blur",(function(){a.rc(e);var t=n.$implicit;return a.Zb().updatePrice(t)})),a.Pb(),a.Pb(),a.Qb(21,"td"),a.zc(22," NA"),a.Pb(),a.Qb(23,"td",30),a.Qb(24,"span",31),a.Xb("click",(function(){a.rc(e);var t=n.$implicit;return a.Zb().editProduct(t)})),a.Ob(25,"i",32),a.Pb(),a.Qb(26,"span",31),a.Xb("click",(function(){a.rc(e);var t=n.$implicit;return a.Zb().goToProdDescPage(t._id)})),a.Ob(27,"i",33),a.Pb(),a.Pb(),a.Pb()}if(2&t){var i=n.$implicit;a.zb(2),a.Ac(null!=i&&i.isApproved?"Approved":"Disapproved"),a.zb(2),a.Ac(null==i?null:i.productImg[0]),a.zb(2),a.Ac(null==i?null:i.sku),a.zb(2),a.Ac(null==i?null:i.itemName),a.zb(2),a.Ac(a.bc(11,9,null==i?null:i.updatedAt,"medium")),a.zb(3),a.Bc(" ",(null==i?null:i.availableUnits)-((null==i?null:i.soldUnit)>=0?null==i?null:i.soldUnit:0),""),a.zb(2),a.Ac(null==i?null:i.soldUnit),a.zb(2),a.Ac(null==i?null:i.commission),a.zb(3),a.fc("ngModel",i.productPrice)}}var f,v,z,m,h=[{path:"",component:(v=function(){function n(e,i,c){t(this,n),this.productService=e,this.router=i,this.toastService=c,this.products=[],this.showSubMenu=!1,this.userName=""}return e(n,[{key:"ngOnInit",value:function(){this.getProducts(),this.userName=JSON.parse(localStorage.getItem("user")).name}},{key:"getProducts",value:function(){var t=this;this.productService.getProducts({skip:0,limit:100}).subscribe((function(n){t.products=n.data,console.log(n)}),(function(t){console.log(t)}))}},{key:"goToProdDescPage",value:function(t){this.router.navigate(["/inventory/product-description",t])}},{key:"editProduct",value:function(t){localStorage.setItem("product",JSON.stringify(t)),this.router.navigate(["/product/add-products"])}},{key:"updatePrice",value:function(t){var n=this;this.productService.updateProductPrice({productPrice:t.productPrice,id:t._id}).subscribe((function(t){n.toastService.openSnackbar("Price Updated succeefully!!")}),(function(t){console.log(t)}))}}]),n}(),v.\u0275fac=function(t){return new(t||v)(a.Nb(p.a),a.Nb(u.b),a.Nb(s.a))},v.\u0275cmp=a.Hb({type:v,selectors:[["app-manage-inventory"]],decls:63,vars:1,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"filer","col","p-3","rounded","my-2","elegant-color","text-white"],[1,"row","d-flex","align-items-center"],[1,"col-lg-9"],[1,"small","mr-3"],[1,"custom-control","custom-radio","custom-control-inline"],["type","radio","id","defaultInline1","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline1",1,"custom-control-label"],["type","radio","id","defaultInline2","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline2",1,"custom-control-label"],["type","radio","id","defaultInline3","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline3",1,"custom-control-label"],["type","radio","id","defaultInline4","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline4",1,"custom-control-label"],[1,"table-responsive","rounded","table-striped"],[1,"table"],[1,"grey","lighten-2","small","text-uppercase"],[1,"text-nowrap"],["scope","col"],["style","cursor: pointer",4,"ngFor","ngForOf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[2,"cursor","pointer"],[1,"d-flex"],[1,"fa","fa-rupee","my-2","py-1"],["type","text",1,"form-control",2,"width","60px","margin-left","10px",3,"ngModel","ngModelChange","blur"],[1,"action-btn"],[3,"click"],[1,"fa","fa-pencil"],[1,"fa","fa-eye"]],template:function(t,n){1&t&&(a.Qb(0,"div",0),a.Ob(1,"app-side-navigation"),a.Qb(2,"main",1),a.Qb(3,"div",2),a.Qb(4,"h2"),a.zc(5,"Manage Inventory"),a.Pb(),a.Ob(6,"hr"),a.Qb(7,"div",3),a.Qb(8,"div",4),a.Qb(9,"div",5),a.Qb(10,"div",6),a.Qb(11,"span",7),a.zc(12,"Listing Status"),a.Pb(),a.Qb(13,"div",8),a.Ob(14,"input",9),a.Qb(15,"label",10),a.zc(16,"All"),a.Pb(),a.Pb(),a.Qb(17,"div",8),a.Ob(18,"input",11),a.Qb(19,"label",12),a.zc(20,"Active"),a.Pb(),a.Pb(),a.Qb(21,"div",8),a.Ob(22,"input",13),a.Qb(23,"label",14),a.zc(24,"Inactive"),a.Pb(),a.Pb(),a.Qb(25,"div",8),a.Ob(26,"input",15),a.Qb(27,"label",16),a.zc(28,"Blocked"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(29,"div",17),a.Qb(30,"table",18),a.Qb(31,"thead",19),a.Qb(32,"tr",20),a.Qb(33,"th",21),a.zc(34,"Status"),a.Pb(),a.Qb(35,"th",21),a.zc(36,"Image"),a.Pb(),a.Qb(37,"th",21),a.zc(38,"SKU condition"),a.Pb(),a.Qb(39,"th",21),a.zc(40,"Product Name"),a.Pb(),a.Qb(41,"th",21),a.zc(42,"Date Created/Updated"),a.Pb(),a.Qb(43,"th",21),a.zc(44,"Available"),a.Pb(),a.Qb(45,"th",21),a.zc(46,"Reserved"),a.Pb(),a.Qb(47,"th",21),a.zc(48,"Fee Preview"),a.Pb(),a.Qb(49,"th",21),a.zc(50,"Price + Shipping"),a.Pb(),a.Qb(51,"th",21),a.zc(52,"Lowest Price + Shipping"),a.Pb(),a.Qb(53,"th",21),a.zc(54,"Action"),a.Pb(),a.Pb(),a.Pb(),a.Qb(55,"tbody"),a.yc(56,Q,28,12,"tr",22),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(57,"footer",23),a.Qb(58,"div",24),a.Qb(59,"small"),a.zc(60," \xa9 2021 made with "),a.Ob(61,"i",25),a.zc(62," All Rights Reserved "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.zb(56),a.fc("ngForOf",n.products))},directives:[P.a,b.j,r.b,r.m,r.p],pipes:[b.d],styles:[".action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:4px}"]}),v),canActivate:[d.a]},{path:"product-description/:id",component:(f=function(){function n(e,i,c){t(this,n),this.sellerService=e,this.router=i,this.activatedRoute=c,this.id=""}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.params.subscribe((function(n){t.id=n.id})),this.getProductDetails()}},{key:"getProductDetails",value:function(){var t=this;this.sellerService.getProductDetails(this.id).subscribe((function(n){t.product=n.data}),(function(t){console.log(t)}))}},{key:"goToProductListingPage",value:function(){this.router.navigateByUrl("/inventory")}},{key:"editProduct",value:function(){localStorage.setItem("product",JSON.stringify(this.product)),this.router.navigate(["/product/add-products"])}}]),n}(),f.\u0275fac=function(t){return new(t||f)(a.Nb(p.a),a.Nb(u.b),a.Nb(u.a))},f.\u0275cmp=a.Hb({type:f,selectors:[["app-product-description"]],decls:116,vars:15,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"page-content","py-0"],[1,"border","rounded","border-light","p-3","my-2"],[1,"font-weight-bold","m-0"],[1,"font-weight-light","text-dark"],[1,"btn","btn-sm","btn-dark","mt-3","mr-3",3,"click"],[1,"btn","btn-sm","btn-dark","mt-3",3,"click"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"]],template:function(t,n){1&t&&(a.Qb(0,"div",0),a.Ob(1,"app-side-navigation"),a.Qb(2,"section",1),a.Qb(3,"div",2),a.Qb(4,"h2"),a.zc(5,"Product Details"),a.Pb(),a.Ob(6,"hr"),a.Pb(),a.Pb(),a.Qb(7,"main",3),a.Qb(8,"div",2),a.Qb(9,"div",4),a.Qb(10,"h4"),a.zc(11,"Product Description"),a.Pb(),a.Ob(12,"hr"),a.Qb(13,"div"),a.Qb(14,"p",5),a.zc(15,"Item Name (AKA Title): "),a.Qb(16,"span",6),a.zc(17),a.Pb(),a.Pb(),a.Pb(),a.Qb(18,"div"),a.Qb(19,"p",5),a.zc(20,"Barcode: "),a.Qb(21,"span",6),a.zc(22),a.Pb(),a.Pb(),a.Pb(),a.Qb(23,"div"),a.Qb(24,"p",5),a.zc(25,"Country Of Origin: "),a.Qb(26,"span",6),a.zc(27),a.Pb(),a.Pb(),a.Pb(),a.Qb(28,"div"),a.Qb(29,"p",5),a.zc(30,"City: "),a.Qb(31,"span",6),a.zc(32),a.Pb(),a.Pb(),a.Pb(),a.Qb(33,"div"),a.Qb(34,"p",5),a.zc(35,"Manufacturer: "),a.Qb(36,"span",6),a.zc(37),a.Pb(),a.Pb(),a.Pb(),a.Qb(38,"div"),a.Qb(39,"p",5),a.zc(40,"Available Units: "),a.Qb(41,"span",6),a.zc(42),a.Pb(),a.Pb(),a.Pb(),a.Qb(43,"div"),a.Qb(44,"p",5),a.zc(45,"Product Dimensions: "),a.Qb(46,"span",6),a.zc(47),a.Pb(),a.Pb(),a.Pb(),a.Qb(48,"div"),a.Qb(49,"p",5),a.zc(50,"Bullet Points: "),a.Qb(51,"span",6),a.zc(52,"NA"),a.Pb(),a.Pb(),a.Pb(),a.Qb(53,"div"),a.Qb(54,"p",5),a.zc(55,"Product Description: "),a.Qb(56,"span",6),a.zc(57),a.Pb(),a.Pb(),a.Pb(),a.Qb(58,"div"),a.Qb(59,"p",5),a.zc(60,"Product Weight: "),a.Qb(61,"span",6),a.zc(62),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(63,"div",4),a.Qb(64,"h4"),a.zc(65,"Product Selling Information"),a.Pb(),a.Ob(66,"hr"),a.Qb(67,"div"),a.Qb(68,"p",5),a.zc(69,"Your Price: "),a.Qb(70,"span",6),a.zc(71),a.Pb(),a.Pb(),a.Pb(),a.Qb(72,"div"),a.Qb(73,"p",5),a.zc(74,"Seller SKU: "),a.Qb(75,"span",6),a.zc(76,"NA"),a.Pb(),a.Pb(),a.Pb(),a.Qb(77,"div"),a.Qb(78,"p",5),a.zc(79,"Condition: "),a.Qb(80,"span",6),a.zc(81,"NA"),a.Pb(),a.Pb(),a.Pb(),a.Qb(82,"div"),a.Qb(83,"p",5),a.zc(84,"HSN Code: "),a.Qb(85,"span",6),a.zc(86,"NA"),a.Pb(),a.Pb(),a.Pb(),a.Qb(87,"div"),a.Qb(88,"p",5),a.zc(89,"MRP: "),a.Qb(90,"span",6),a.zc(91),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(92,"div",4),a.Qb(93,"h4"),a.zc(94,"Product Variations"),a.Pb(),a.Ob(95,"hr"),a.Qb(96,"div"),a.Qb(97,"p",5),a.zc(98,"Color: "),a.Qb(99,"span",6),a.zc(100),a.Pb(),a.Pb(),a.Pb(),a.Qb(101,"div"),a.Qb(102,"p",5),a.zc(103,"Size: "),a.Qb(104,"span",6),a.zc(105),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(106,"button",7),a.Xb("click",(function(){return n.goToProductListingPage()})),a.zc(107,"Close"),a.Pb(),a.Qb(108,"button",8),a.Xb("click",(function(){return n.editProduct()})),a.zc(109,"Edit"),a.Pb(),a.Qb(110,"footer",9),a.Qb(111,"div",10),a.Qb(112,"small"),a.zc(113," \xa9 2021 made with "),a.Ob(114,"i",11),a.zc(115," All Rights Reserved "),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.zb(17),a.Ac(null==n.product?null:n.product.itemName),a.zb(5),a.Ac(null==n.product?null:n.product.barcode),a.zb(5),a.Ac(null==n.product?null:n.product.countryOfOrigin),a.zb(5),a.Ac(null==n.product?null:n.product.city),a.zb(5),a.Ac(null==n.product?null:n.product.brand),a.zb(5),a.Ac((null==n.product?null:n.product.availableUnits)||"NA"),a.zb(5),a.Cc(" Length: ",(null==n.product||null==n.product.dimensions?null:n.product.dimensions.length)||"NA",", Width: ",(null==n.product||null==n.product.dimensions?null:n.product.dimensions.width)||"NA",", Height: ",(null==n.product||null==n.product.dimensions?null:n.product.dimensions.height)||"NA"," "),a.zb(10),a.Ac(null==n.product?null:n.product.description),a.zb(5),a.Ac(null==n.product?null:n.product.weight),a.zb(9),a.Bc("INR ",null==n.product?null:n.product.productPrice,""),a.zb(20),a.Bc("INR ",null==n.product?null:n.product.mrp,""),a.zb(9),a.Ac(null==n.product?null:n.product.color.join(",")),a.zb(5),a.Ac(null==n.product?null:n.product.size.join(",")))},directives:[P.a],styles:[""]}),f),canActivate:[d.a]}],g=((z=function n(){t(this,n)}).\u0275mod=a.Lb({type:z}),z.\u0275inj=a.Kb({factory:function(t){return new(t||z)},imports:[[u.e.forChild(h)],u.e]}),z),y=c("WeEj"),A=c("PCNd"),N=((m=function n(){t(this,n)}).\u0275mod=a.Lb({type:m}),m.\u0275inj=a.Kb({factory:function(t){return new(t||m)},providers:[y.a],imports:[[b.b,g,o.a,r.h,r.t,l.c,A.a]]}),m)}}])}();