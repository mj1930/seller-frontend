!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{cLqD:function(e,i,c){"use strict";c.r(i),c.d(i,"InventoryModule",(function(){return C}));var b=c("ofXK"),o=c("dbUT"),r=c("3Pt+"),l=c("tk/3"),u=c("tyNb"),a=c("ZNij"),d=c("fXoL"),s=c("8/IB"),p=c("6fg7"),S=c("J0GB");function R(t,e){if(1&t){var n=d.Tb();d.Sb(0,"tr",26),d.Sb(1,"td"),d.Bc(2),d.Rb(),d.Sb(3,"td"),d.Ob(4,"img",27),d.Rb(),d.Sb(5,"td"),d.Bc(6),d.Rb(),d.Sb(7,"td"),d.Bc(8),d.Rb(),d.Sb(9,"td"),d.Bc(10),d.cc(11,"date"),d.Rb(),d.Sb(12,"td",28),d.Sb(13,"input",29),d.Zb("ngModelChange",(function(t){return d.tc(n),e.$implicit.availableUnits=t}))("blur",(function(){d.tc(n);var t=e.$implicit;return d.bc().updatePrice(t)})),d.Rb(),d.Rb(),d.Sb(14,"td"),d.Bc(15),d.Rb(),d.Sb(16,"td"),d.Bc(17),d.Rb(),d.Sb(18,"td",28),d.Ob(19,"i",30),d.Sb(20,"input",29),d.Zb("ngModelChange",(function(t){return d.tc(n),e.$implicit.productPrice=t}))("blur",(function(){d.tc(n);var t=e.$implicit;return d.bc().updatePrice(t)})),d.Rb(),d.Rb(),d.Sb(21,"td"),d.Bc(22),d.Rb(),d.Sb(23,"td",31),d.Sb(24,"span",32),d.Zb("click",(function(){d.tc(n);var t=e.$implicit;return d.bc().editProduct(t)})),d.Ob(25,"i",33),d.Rb(),d.Sb(26,"span",32),d.Zb("click",(function(){d.tc(n);var t=e.$implicit;return d.bc().goToProdDescPage(t._id)})),d.Ob(27,"i",34),d.Rb(),d.Rb(),d.Rb()}if(2&t){var i=e.$implicit;d.zb(2),d.Cc(null!=i&&i.isApproved?"Approved":"Disapproved"),d.zb(2),d.hc("src",(null==i?null:i.productImg.length)>0?null==i?null:i.productImg[0]:"https://images-na.ssl-images-amazon.com/images/I/61pZoOB87SL.jpg",d.uc),d.zb(2),d.Cc(null==i?null:i.sku),d.zb(2),d.Cc(null==i?null:i.itemName),d.zb(2),d.Cc(d.dc(11,10,null==i?null:i.updatedAt,"medium")),d.zb(3),d.hc("ngModel",i.availableUnits),d.zb(2),d.Cc(null==i?null:i.soldUnit),d.zb(2),d.Cc(null==i?null:i.commission),d.zb(3),d.hc("ngModel",i.productPrice),d.zb(2),d.Dc(" ",null==i?null:i.vin,"")}}var f,h,v,g,m=[{path:"",component:(h=function(){function e(n,i,c){t(this,e),this.productService=n,this.router=i,this.toastService=c,this.products=[],this.showSubMenu=!1,this.userName=""}return n(e,[{key:"ngOnInit",value:function(){this.getProducts(),this.userName=JSON.parse(localStorage.getItem("user")).name}},{key:"getProducts",value:function(){var t=this;this.productService.getProducts({skip:0,limit:100}).subscribe((function(e){t.products=e.data,console.log(e)}),(function(t){console.log(t)}))}},{key:"goToProdDescPage",value:function(t){this.router.navigate(["/inventory/product-description",t])}},{key:"editProduct",value:function(t){localStorage.setItem("product",JSON.stringify(t)),this.router.navigate(["/product/add-products"])}},{key:"updatePrice",value:function(t){var e=this;this.productService.updateProductPrice({productPrice:t.productPrice,id:t._id,availUnits:t.availableUnits}).subscribe((function(t){e.toastService.openSnackbar("Updated successfully!!")}),(function(t){console.log(t)}))}},{key:"getFilterProducts",value:function(t){var e=this;this.productService.filterProducts({skip:0,limit:100,status:t}).subscribe((function(t){e.products=t.data}))}}]),e}(),h.\u0275fac=function(t){return new(t||h)(d.Nb(s.a),d.Nb(u.b),d.Nb(p.a))},h.\u0275cmp=d.Hb({type:h,selectors:[["app-manage-inventory"]],decls:63,vars:1,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"filer","col","p-3","rounded","my-2","elegant-color","text-white"],[1,"row","d-flex","align-items-center"],[1,"col-lg-9"],[1,"small","mr-3"],[1,"custom-control","custom-radio","custom-control-inline"],["type","radio","id","defaultInline1","name","inlineDefaultRadiosExample",1,"custom-control-input",3,"change"],["for","defaultInline1",1,"custom-control-label"],["type","radio","id","defaultInline2","name","inlineDefaultRadiosExample",1,"custom-control-input",3,"change"],["for","defaultInline2",1,"custom-control-label"],["type","radio","id","defaultInline3","name","inlineDefaultRadiosExample",1,"custom-control-input",3,"change"],["for","defaultInline3",1,"custom-control-label"],["type","radio","id","defaultInline4","name","inlineDefaultRadiosExample",1,"custom-control-input",3,"change"],["for","defaultInline4",1,"custom-control-label"],[1,"table-responsive","rounded","table-striped"],[1,"table"],[1,"grey","lighten-2","small","text-uppercase"],[1,"text-nowrap"],["scope","col"],["style","cursor: pointer",4,"ngFor","ngForOf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[2,"cursor","pointer"],["alt","","width","50px","height","50px",3,"src"],[1,"d-flex"],["type","text",1,"form-control",2,"width","60px","margin-left","10px",3,"ngModel","ngModelChange","blur"],[1,"fa","fa-rupee","my-2","py-1"],[1,"action-btn"],[3,"click"],[1,"fa","fa-pencil"],[1,"fa","fa-eye"]],template:function(t,e){1&t&&(d.Sb(0,"div",0),d.Ob(1,"app-side-navigation"),d.Sb(2,"main",1),d.Sb(3,"div",2),d.Sb(4,"h2"),d.Bc(5,"Manage Inventory"),d.Rb(),d.Ob(6,"hr"),d.Sb(7,"div",3),d.Sb(8,"div",4),d.Sb(9,"div",5),d.Sb(10,"div",6),d.Sb(11,"span",7),d.Bc(12,"Listing Status"),d.Rb(),d.Sb(13,"div",8),d.Sb(14,"input",9),d.Zb("change",(function(){return e.getFilterProducts("all")})),d.Rb(),d.Sb(15,"label",10),d.Bc(16,"All"),d.Rb(),d.Rb(),d.Sb(17,"div",8),d.Sb(18,"input",11),d.Zb("change",(function(){return e.getFilterProducts("active")})),d.Rb(),d.Sb(19,"label",12),d.Bc(20,"Active"),d.Rb(),d.Rb(),d.Sb(21,"div",8),d.Sb(22,"input",13),d.Zb("change",(function(){return e.getFilterProducts("inactive")})),d.Rb(),d.Sb(23,"label",14),d.Bc(24,"Inactive"),d.Rb(),d.Rb(),d.Sb(25,"div",8),d.Sb(26,"input",15),d.Zb("change",(function(){return e.getFilterProducts("blocked")})),d.Rb(),d.Sb(27,"label",16),d.Bc(28,"Blocked"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(29,"div",17),d.Sb(30,"table",18),d.Sb(31,"thead",19),d.Sb(32,"tr",20),d.Sb(33,"th",21),d.Bc(34,"Status"),d.Rb(),d.Sb(35,"th",21),d.Bc(36,"Image"),d.Rb(),d.Sb(37,"th",21),d.Bc(38,"SKU condition"),d.Rb(),d.Sb(39,"th",21),d.Bc(40,"Product Name"),d.Rb(),d.Sb(41,"th",21),d.Bc(42,"Date Created/Updated"),d.Rb(),d.Sb(43,"th",21),d.Bc(44,"Available"),d.Rb(),d.Sb(45,"th",21),d.Bc(46,"Reserved"),d.Rb(),d.Sb(47,"th",21),d.Bc(48,"Fee Preview"),d.Rb(),d.Sb(49,"th",21),d.Bc(50,"Price + Shipping"),d.Rb(),d.Sb(51,"th",21),d.Bc(52,"VIN"),d.Rb(),d.Sb(53,"th",21),d.Bc(54,"Action"),d.Rb(),d.Rb(),d.Rb(),d.Sb(55,"tbody"),d.Ac(56,R,28,13,"tr",22),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(57,"footer",23),d.Sb(58,"div",24),d.Sb(59,"small"),d.Bc(60," \xa9 2021 made with "),d.Ob(61,"i",25),d.Bc(62," All Rights Reserved "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&t&&(d.zb(56),d.hc("ngForOf",e.products))},directives:[S.a,b.j,r.b,r.m,r.p],pipes:[b.d],styles:[".action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:4px}"]}),h),canActivate:[a.a]},{path:"product-description/:id",component:(f=function(){function e(n,i,c){t(this,e),this.sellerService=n,this.router=i,this.activatedRoute=c,this.id=""}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.params.subscribe((function(e){t.id=e.id})),this.getProductDetails()}},{key:"getProductDetails",value:function(){var t=this;this.sellerService.getProductDetails(this.id).subscribe((function(e){t.product=e.data}),(function(t){console.log(t)}))}},{key:"goToProductListingPage",value:function(){this.router.navigateByUrl("/inventory")}},{key:"editProduct",value:function(){localStorage.setItem("product",JSON.stringify(this.product)),this.router.navigate(["/product/add-products"])}}]),e}(),f.\u0275fac=function(t){return new(t||f)(d.Nb(s.a),d.Nb(u.b),d.Nb(u.a))},f.\u0275cmp=d.Hb({type:f,selectors:[["app-product-description"]],decls:116,vars:15,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"page-content","py-0"],[1,"border","rounded","border-light","p-3","my-2"],[1,"font-weight-bold","m-0"],[1,"font-weight-light","text-dark"],[1,"btn","btn-sm","btn-dark","mt-3","mr-3",3,"click"],[1,"btn","btn-sm","btn-dark","mt-3",3,"click"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"]],template:function(t,e){1&t&&(d.Sb(0,"div",0),d.Ob(1,"app-side-navigation"),d.Sb(2,"section",1),d.Sb(3,"div",2),d.Sb(4,"h2"),d.Bc(5,"Product Details"),d.Rb(),d.Ob(6,"hr"),d.Rb(),d.Rb(),d.Sb(7,"main",3),d.Sb(8,"div",2),d.Sb(9,"div",4),d.Sb(10,"h4"),d.Bc(11,"Product Description"),d.Rb(),d.Ob(12,"hr"),d.Sb(13,"div"),d.Sb(14,"p",5),d.Bc(15,"Item Name (AKA Title): "),d.Sb(16,"span",6),d.Bc(17),d.Rb(),d.Rb(),d.Rb(),d.Sb(18,"div"),d.Sb(19,"p",5),d.Bc(20,"Barcode: "),d.Sb(21,"span",6),d.Bc(22),d.Rb(),d.Rb(),d.Rb(),d.Sb(23,"div"),d.Sb(24,"p",5),d.Bc(25,"Country Of Origin: "),d.Sb(26,"span",6),d.Bc(27),d.Rb(),d.Rb(),d.Rb(),d.Sb(28,"div"),d.Sb(29,"p",5),d.Bc(30,"City: "),d.Sb(31,"span",6),d.Bc(32),d.Rb(),d.Rb(),d.Rb(),d.Sb(33,"div"),d.Sb(34,"p",5),d.Bc(35,"Manufacturer: "),d.Sb(36,"span",6),d.Bc(37),d.Rb(),d.Rb(),d.Rb(),d.Sb(38,"div"),d.Sb(39,"p",5),d.Bc(40,"Available Units: "),d.Sb(41,"span",6),d.Bc(42),d.Rb(),d.Rb(),d.Rb(),d.Sb(43,"div"),d.Sb(44,"p",5),d.Bc(45,"Product Dimensions: "),d.Sb(46,"span",6),d.Bc(47),d.Rb(),d.Rb(),d.Rb(),d.Sb(48,"div"),d.Sb(49,"p",5),d.Bc(50,"Bullet Points: "),d.Sb(51,"span",6),d.Bc(52,"NA"),d.Rb(),d.Rb(),d.Rb(),d.Sb(53,"div"),d.Sb(54,"p",5),d.Bc(55,"Product Description: "),d.Sb(56,"span",6),d.Bc(57),d.Rb(),d.Rb(),d.Rb(),d.Sb(58,"div"),d.Sb(59,"p",5),d.Bc(60,"Product Weight: "),d.Sb(61,"span",6),d.Bc(62),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(63,"div",4),d.Sb(64,"h4"),d.Bc(65,"Product Selling Information"),d.Rb(),d.Ob(66,"hr"),d.Sb(67,"div"),d.Sb(68,"p",5),d.Bc(69,"Your Price: "),d.Sb(70,"span",6),d.Bc(71),d.Rb(),d.Rb(),d.Rb(),d.Sb(72,"div"),d.Sb(73,"p",5),d.Bc(74,"Seller SKU: "),d.Sb(75,"span",6),d.Bc(76,"NA"),d.Rb(),d.Rb(),d.Rb(),d.Sb(77,"div"),d.Sb(78,"p",5),d.Bc(79,"Condition: "),d.Sb(80,"span",6),d.Bc(81,"NA"),d.Rb(),d.Rb(),d.Rb(),d.Sb(82,"div"),d.Sb(83,"p",5),d.Bc(84,"HSN Code: "),d.Sb(85,"span",6),d.Bc(86,"NA"),d.Rb(),d.Rb(),d.Rb(),d.Sb(87,"div"),d.Sb(88,"p",5),d.Bc(89,"MRP: "),d.Sb(90,"span",6),d.Bc(91),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(92,"div",4),d.Sb(93,"h4"),d.Bc(94,"Product Variations"),d.Rb(),d.Ob(95,"hr"),d.Sb(96,"div"),d.Sb(97,"p",5),d.Bc(98,"Color: "),d.Sb(99,"span",6),d.Bc(100),d.Rb(),d.Rb(),d.Rb(),d.Sb(101,"div"),d.Sb(102,"p",5),d.Bc(103,"Size: "),d.Sb(104,"span",6),d.Bc(105),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(106,"button",7),d.Zb("click",(function(){return e.goToProductListingPage()})),d.Bc(107,"Close"),d.Rb(),d.Sb(108,"button",8),d.Zb("click",(function(){return e.editProduct()})),d.Bc(109,"Edit"),d.Rb(),d.Sb(110,"footer",9),d.Sb(111,"div",10),d.Sb(112,"small"),d.Bc(113," \xa9 2021 made with "),d.Ob(114,"i",11),d.Bc(115," All Rights Reserved "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&t&&(d.zb(17),d.Cc(null==e.product?null:e.product.itemName),d.zb(5),d.Cc(null==e.product?null:e.product.barcode),d.zb(5),d.Cc(null==e.product?null:e.product.countryOfOrigin),d.zb(5),d.Cc(null==e.product?null:e.product.city),d.zb(5),d.Cc(null==e.product?null:e.product.brand),d.zb(5),d.Cc((null==e.product?null:e.product.availableUnits)||"NA"),d.zb(5),d.Ec(" Length: ",(null==e.product||null==e.product.dimensions?null:e.product.dimensions.length)||"NA",", Width: ",(null==e.product||null==e.product.dimensions?null:e.product.dimensions.width)||"NA",", Height: ",(null==e.product||null==e.product.dimensions?null:e.product.dimensions.height)||"NA"," "),d.zb(10),d.Cc(null==e.product?null:e.product.description),d.zb(5),d.Cc(null==e.product?null:e.product.weight),d.zb(9),d.Dc("INR ",null==e.product?null:e.product.productPrice,""),d.zb(20),d.Dc("INR ",null==e.product?null:e.product.mrp,""),d.zb(9),d.Cc(null==e.product?null:e.product.color.join(",")),d.zb(5),d.Cc(null==e.product?null:e.product.size.join(",")))},directives:[S.a],styles:[""]}),f),canActivate:[a.a]}],B=((v=function e(){t(this,e)}).\u0275mod=d.Lb({type:v}),v.\u0275inj=d.Kb({factory:function(t){return new(t||v)},imports:[[u.e.forChild(m)],u.e]}),v),P=c("WeEj"),y=c("PCNd"),C=((g=function e(){t(this,e)}).\u0275mod=d.Lb({type:g}),g.\u0275inj=d.Kb({factory:function(t){return new(t||g)},providers:[P.a],imports:[[b.b,B,o.a,r.h,r.t,l.c,y.a]]}),g)}}])}();