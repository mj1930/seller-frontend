!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{cLqD:function(e,i,c){"use strict";c.r(i),c.d(i,"InventoryModule",(function(){return O}));var b=c("ofXK"),o=c("dbUT"),r=c("3Pt+"),l=c("tk/3"),u=c("tyNb"),a=c("ZNij"),d=c("fXoL"),p=c("8/IB"),s=c("6fg7"),P=c("J0GB");function Q(t,e){if(1&t){var n=d.Rb();d.Qb(0,"tr",26),d.Qb(1,"td"),d.zc(2),d.Pb(),d.Qb(3,"td"),d.Ob(4,"img",27),d.Pb(),d.Qb(5,"td"),d.zc(6),d.Pb(),d.Qb(7,"td"),d.zc(8),d.Pb(),d.Qb(9,"td"),d.zc(10),d.ac(11,"date"),d.Pb(),d.Qb(12,"td",28),d.Ob(13,"i",29),d.Qb(14,"input",30),d.Xb("ngModelChange",(function(t){return d.rc(n),e.$implicit.availableUnits=t}))("blur",(function(){d.rc(n);var t=e.$implicit;return d.Zb().updatePrice(t)})),d.Pb(),d.Pb(),d.Qb(15,"td"),d.zc(16),d.Pb(),d.Qb(17,"td"),d.zc(18),d.Pb(),d.Qb(19,"td",28),d.Ob(20,"i",29),d.Qb(21,"input",30),d.Xb("ngModelChange",(function(t){return d.rc(n),e.$implicit.productPrice=t}))("blur",(function(){d.rc(n);var t=e.$implicit;return d.Zb().updatePrice(t)})),d.Pb(),d.Pb(),d.Qb(22,"td"),d.zc(23," NA"),d.Pb(),d.Qb(24,"td",31),d.Qb(25,"span",32),d.Xb("click",(function(){d.rc(n);var t=e.$implicit;return d.Zb().editProduct(t)})),d.Ob(26,"i",33),d.Pb(),d.Qb(27,"span",32),d.Xb("click",(function(){d.rc(n);var t=e.$implicit;return d.Zb().goToProdDescPage(t._id)})),d.Ob(28,"i",34),d.Pb(),d.Pb(),d.Pb()}if(2&t){var i=e.$implicit;d.zb(2),d.Ac(null!=i&&i.isApproved?"Approved":"Disapproved"),d.zb(2),d.fc("src",(null==i?null:i.productImg.length)>0?null==i?null:i.productImg[0]:"https://images-na.ssl-images-amazon.com/images/I/61pZoOB87SL.jpg",d.sc),d.zb(2),d.Ac(null==i?null:i.sku),d.zb(2),d.Ac(null==i?null:i.itemName),d.zb(2),d.Ac(d.bc(11,9,null==i?null:i.updatedAt,"medium")),d.zb(4),d.fc("ngModel",i.availableUnits),d.zb(2),d.Ac(null==i?null:i.soldUnit),d.zb(2),d.Ac(null==i?null:i.commission),d.zb(3),d.fc("ngModel",i.productPrice)}}var f,v,m,g,h=[{path:"",component:(v=function(){function e(n,i,c){t(this,e),this.productService=n,this.router=i,this.toastService=c,this.products=[],this.showSubMenu=!1,this.userName=""}return n(e,[{key:"ngOnInit",value:function(){this.getProducts(),this.userName=JSON.parse(localStorage.getItem("user")).name}},{key:"getProducts",value:function(){var t=this;this.productService.getProducts({skip:0,limit:100}).subscribe((function(e){t.products=e.data,console.log(e)}),(function(t){console.log(t)}))}},{key:"goToProdDescPage",value:function(t){this.router.navigate(["/inventory/product-description",t])}},{key:"editProduct",value:function(t){localStorage.setItem("product",JSON.stringify(t)),this.router.navigate(["/product/add-products"])}},{key:"updatePrice",value:function(t){var e=this;this.productService.updateProductPrice({productPrice:t.productPrice,id:t._id,availUnits:t.availableUnits}).subscribe((function(t){e.toastService.openSnackbar("Price Updated succeefully!!")}),(function(t){console.log(t)}))}}]),e}(),v.\u0275fac=function(t){return new(t||v)(d.Nb(p.a),d.Nb(u.b),d.Nb(s.a))},v.\u0275cmp=d.Hb({type:v,selectors:[["app-manage-inventory"]],decls:63,vars:1,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"row"],[1,"filer","col","p-3","rounded","my-2","elegant-color","text-white"],[1,"row","d-flex","align-items-center"],[1,"col-lg-9"],[1,"small","mr-3"],[1,"custom-control","custom-radio","custom-control-inline"],["type","radio","id","defaultInline1","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline1",1,"custom-control-label"],["type","radio","id","defaultInline2","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline2",1,"custom-control-label"],["type","radio","id","defaultInline3","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline3",1,"custom-control-label"],["type","radio","id","defaultInline4","name","inlineDefaultRadiosExample",1,"custom-control-input"],["for","defaultInline4",1,"custom-control-label"],[1,"table-responsive","rounded","table-striped"],[1,"table"],[1,"grey","lighten-2","small","text-uppercase"],[1,"text-nowrap"],["scope","col"],["style","cursor: pointer",4,"ngFor","ngForOf"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"],[2,"cursor","pointer"],["alt","","width","50px","height","50px",3,"src"],[1,"d-flex"],[1,"fa","fa-rupee","my-2","py-1"],["type","text",1,"form-control",2,"width","60px","margin-left","10px",3,"ngModel","ngModelChange","blur"],[1,"action-btn"],[3,"click"],[1,"fa","fa-pencil"],[1,"fa","fa-eye"]],template:function(t,e){1&t&&(d.Qb(0,"div",0),d.Ob(1,"app-side-navigation"),d.Qb(2,"main",1),d.Qb(3,"div",2),d.Qb(4,"h2"),d.zc(5,"Manage Inventory"),d.Pb(),d.Ob(6,"hr"),d.Qb(7,"div",3),d.Qb(8,"div",4),d.Qb(9,"div",5),d.Qb(10,"div",6),d.Qb(11,"span",7),d.zc(12,"Listing Status"),d.Pb(),d.Qb(13,"div",8),d.Ob(14,"input",9),d.Qb(15,"label",10),d.zc(16,"All"),d.Pb(),d.Pb(),d.Qb(17,"div",8),d.Ob(18,"input",11),d.Qb(19,"label",12),d.zc(20,"Active"),d.Pb(),d.Pb(),d.Qb(21,"div",8),d.Ob(22,"input",13),d.Qb(23,"label",14),d.zc(24,"Inactive"),d.Pb(),d.Pb(),d.Qb(25,"div",8),d.Ob(26,"input",15),d.Qb(27,"label",16),d.zc(28,"Blocked"),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(29,"div",17),d.Qb(30,"table",18),d.Qb(31,"thead",19),d.Qb(32,"tr",20),d.Qb(33,"th",21),d.zc(34,"Status"),d.Pb(),d.Qb(35,"th",21),d.zc(36,"Image"),d.Pb(),d.Qb(37,"th",21),d.zc(38,"SKU condition"),d.Pb(),d.Qb(39,"th",21),d.zc(40,"Product Name"),d.Pb(),d.Qb(41,"th",21),d.zc(42,"Date Created/Updated"),d.Pb(),d.Qb(43,"th",21),d.zc(44,"Available"),d.Pb(),d.Qb(45,"th",21),d.zc(46,"Reserved"),d.Pb(),d.Qb(47,"th",21),d.zc(48,"Fee Preview"),d.Pb(),d.Qb(49,"th",21),d.zc(50,"Price + Shipping"),d.Pb(),d.Qb(51,"th",21),d.zc(52,"Lowest Price + Shipping"),d.Pb(),d.Qb(53,"th",21),d.zc(54,"Action"),d.Pb(),d.Pb(),d.Pb(),d.Qb(55,"tbody"),d.yc(56,Q,29,12,"tr",22),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(57,"footer",23),d.Qb(58,"div",24),d.Qb(59,"small"),d.zc(60," \xa9 2021 made with "),d.Ob(61,"i",25),d.zc(62," All Rights Reserved "),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&t&&(d.zb(56),d.fc("ngForOf",e.products))},directives:[P.a,b.j,r.b,r.m,r.p],pipes:[b.d],styles:[".action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:4px}"]}),v),canActivate:[a.a]},{path:"product-description/:id",component:(f=function(){function e(n,i,c){t(this,e),this.sellerService=n,this.router=i,this.activatedRoute=c,this.id=""}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.params.subscribe((function(e){t.id=e.id})),this.getProductDetails()}},{key:"getProductDetails",value:function(){var t=this;this.sellerService.getProductDetails(this.id).subscribe((function(e){t.product=e.data}),(function(t){console.log(t)}))}},{key:"goToProductListingPage",value:function(){this.router.navigateByUrl("/inventory")}},{key:"editProduct",value:function(){localStorage.setItem("product",JSON.stringify(this.product)),this.router.navigate(["/product/add-products"])}}]),e}(),f.\u0275fac=function(t){return new(t||f)(d.Nb(p.a),d.Nb(u.b),d.Nb(u.a))},f.\u0275cmp=d.Hb({type:f,selectors:[["app-product-description"]],decls:116,vars:15,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"page-content","py-0"],[1,"border","rounded","border-light","p-3","my-2"],[1,"font-weight-bold","m-0"],[1,"font-weight-light","text-dark"],[1,"btn","btn-sm","btn-dark","mt-3","mr-3",3,"click"],[1,"btn","btn-sm","btn-dark","mt-3",3,"click"],[1,"text-center"],[1,"mb-2"],[1,"fa","fa-heart",2,"color","red"]],template:function(t,e){1&t&&(d.Qb(0,"div",0),d.Ob(1,"app-side-navigation"),d.Qb(2,"section",1),d.Qb(3,"div",2),d.Qb(4,"h2"),d.zc(5,"Product Details"),d.Pb(),d.Ob(6,"hr"),d.Pb(),d.Pb(),d.Qb(7,"main",3),d.Qb(8,"div",2),d.Qb(9,"div",4),d.Qb(10,"h4"),d.zc(11,"Product Description"),d.Pb(),d.Ob(12,"hr"),d.Qb(13,"div"),d.Qb(14,"p",5),d.zc(15,"Item Name (AKA Title): "),d.Qb(16,"span",6),d.zc(17),d.Pb(),d.Pb(),d.Pb(),d.Qb(18,"div"),d.Qb(19,"p",5),d.zc(20,"Barcode: "),d.Qb(21,"span",6),d.zc(22),d.Pb(),d.Pb(),d.Pb(),d.Qb(23,"div"),d.Qb(24,"p",5),d.zc(25,"Country Of Origin: "),d.Qb(26,"span",6),d.zc(27),d.Pb(),d.Pb(),d.Pb(),d.Qb(28,"div"),d.Qb(29,"p",5),d.zc(30,"City: "),d.Qb(31,"span",6),d.zc(32),d.Pb(),d.Pb(),d.Pb(),d.Qb(33,"div"),d.Qb(34,"p",5),d.zc(35,"Manufacturer: "),d.Qb(36,"span",6),d.zc(37),d.Pb(),d.Pb(),d.Pb(),d.Qb(38,"div"),d.Qb(39,"p",5),d.zc(40,"Available Units: "),d.Qb(41,"span",6),d.zc(42),d.Pb(),d.Pb(),d.Pb(),d.Qb(43,"div"),d.Qb(44,"p",5),d.zc(45,"Product Dimensions: "),d.Qb(46,"span",6),d.zc(47),d.Pb(),d.Pb(),d.Pb(),d.Qb(48,"div"),d.Qb(49,"p",5),d.zc(50,"Bullet Points: "),d.Qb(51,"span",6),d.zc(52,"NA"),d.Pb(),d.Pb(),d.Pb(),d.Qb(53,"div"),d.Qb(54,"p",5),d.zc(55,"Product Description: "),d.Qb(56,"span",6),d.zc(57),d.Pb(),d.Pb(),d.Pb(),d.Qb(58,"div"),d.Qb(59,"p",5),d.zc(60,"Product Weight: "),d.Qb(61,"span",6),d.zc(62),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(63,"div",4),d.Qb(64,"h4"),d.zc(65,"Product Selling Information"),d.Pb(),d.Ob(66,"hr"),d.Qb(67,"div"),d.Qb(68,"p",5),d.zc(69,"Your Price: "),d.Qb(70,"span",6),d.zc(71),d.Pb(),d.Pb(),d.Pb(),d.Qb(72,"div"),d.Qb(73,"p",5),d.zc(74,"Seller SKU: "),d.Qb(75,"span",6),d.zc(76,"NA"),d.Pb(),d.Pb(),d.Pb(),d.Qb(77,"div"),d.Qb(78,"p",5),d.zc(79,"Condition: "),d.Qb(80,"span",6),d.zc(81,"NA"),d.Pb(),d.Pb(),d.Pb(),d.Qb(82,"div"),d.Qb(83,"p",5),d.zc(84,"HSN Code: "),d.Qb(85,"span",6),d.zc(86,"NA"),d.Pb(),d.Pb(),d.Pb(),d.Qb(87,"div"),d.Qb(88,"p",5),d.zc(89,"MRP: "),d.Qb(90,"span",6),d.zc(91),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(92,"div",4),d.Qb(93,"h4"),d.zc(94,"Product Variations"),d.Pb(),d.Ob(95,"hr"),d.Qb(96,"div"),d.Qb(97,"p",5),d.zc(98,"Color: "),d.Qb(99,"span",6),d.zc(100),d.Pb(),d.Pb(),d.Pb(),d.Qb(101,"div"),d.Qb(102,"p",5),d.zc(103,"Size: "),d.Qb(104,"span",6),d.zc(105),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(106,"button",7),d.Xb("click",(function(){return e.goToProductListingPage()})),d.zc(107,"Close"),d.Pb(),d.Qb(108,"button",8),d.Xb("click",(function(){return e.editProduct()})),d.zc(109,"Edit"),d.Pb(),d.Qb(110,"footer",9),d.Qb(111,"div",10),d.Qb(112,"small"),d.zc(113," \xa9 2021 made with "),d.Ob(114,"i",11),d.zc(115," All Rights Reserved "),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&t&&(d.zb(17),d.Ac(null==e.product?null:e.product.itemName),d.zb(5),d.Ac(null==e.product?null:e.product.barcode),d.zb(5),d.Ac(null==e.product?null:e.product.countryOfOrigin),d.zb(5),d.Ac(null==e.product?null:e.product.city),d.zb(5),d.Ac(null==e.product?null:e.product.brand),d.zb(5),d.Ac((null==e.product?null:e.product.availableUnits)||"NA"),d.zb(5),d.Cc(" Length: ",(null==e.product||null==e.product.dimensions?null:e.product.dimensions.length)||"NA",", Width: ",(null==e.product||null==e.product.dimensions?null:e.product.dimensions.width)||"NA",", Height: ",(null==e.product||null==e.product.dimensions?null:e.product.dimensions.height)||"NA"," "),d.zb(10),d.Ac(null==e.product?null:e.product.description),d.zb(5),d.Ac(null==e.product?null:e.product.weight),d.zb(9),d.Bc("INR ",null==e.product?null:e.product.productPrice,""),d.zb(20),d.Bc("INR ",null==e.product?null:e.product.mrp,""),d.zb(9),d.Ac(null==e.product?null:e.product.color.join(",")),d.zb(5),d.Ac(null==e.product?null:e.product.size.join(",")))},directives:[P.a],styles:[""]}),f),canActivate:[a.a]}],z=((m=function e(){t(this,e)}).\u0275mod=d.Lb({type:m}),m.\u0275inj=d.Kb({factory:function(t){return new(t||m)},imports:[[u.e.forChild(h)],u.e]}),m),y=c("WeEj"),A=c("PCNd"),O=((g=function e(){t(this,e)}).\u0275mod=d.Lb({type:g}),g.\u0275inj=d.Kb({factory:function(t){return new(t||g)},providers:[y.a],imports:[[b.b,z,o.a,r.h,r.t,l.c,A.a]]}),g)}}])}();