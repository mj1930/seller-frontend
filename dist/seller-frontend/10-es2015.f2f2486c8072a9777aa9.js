(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{qvFY:function(o,t,r){"use strict";r.r(t),r.d(t,"ProductModule",(function(){return _}));var n=r("ofXK"),i=r("8/IB"),e=r("tyNb"),c=r("3Pt+"),s=r("fXoL"),l=r("6fg7"),a=r("J0GB");function m(o,t){if(1&o){const o=s.Tb();s.Sb(0,"a",12),s.Zb("click",(function(){s.uc(o);const t=s.bc();return t.showAddProductSection=!t.showAddProductSection})),s.Cc(1,"I'm adding a product not sold here"),s.Rb()}}function u(o,t){if(1&o){const o=s.Tb();s.Sb(0,"a",12),s.Zb("click",(function(){return s.uc(o),s.bc().resetCompleteForm()})),s.Cc(1,"Add new product"),s.Rb()}}function d(o,t){if(1&o){const o=s.Tb();s.Sb(0,"div",16),s.Sb(1,"div",17),s.Ob(2,"img",18),s.Sb(3,"div",19),s.Sb(4,"h5",20),s.Cc(5),s.Rb(),s.Sb(6,"p",21),s.Cc(7),s.Rb(),s.Sb(8,"button",22),s.Zb("click",(function(){s.uc(o);const r=t.$implicit;return s.bc(3).setProductValues(r)})),s.Ob(9,"i",23),s.Rb(),s.Rb(),s.Rb(),s.Rb()}if(2&o){const o=t.$implicit;s.zb(2),s.hc("src",null==o?null:o.productImg[0],s.vc),s.zb(3),s.Dc(null==o?null:o.itemName),s.zb(2),s.Dc(null==o?null:o.brand)}}function b(o,t){if(1&o&&(s.Sb(0,"div",14),s.Bc(1,d,10,3,"div",15),s.Rb()),2&o){const o=s.bc(2);s.zb(1),s.hc("ngForOf",o.searchResult)}}function p(o,t){if(1&o&&(s.Sb(0,"section",1),s.Sb(1,"div",2),s.Sb(2,"h2"),s.Cc(3,"Search Results"),s.Rb(),s.Ob(4,"hr"),s.Bc(5,b,2,1,"div",13),s.Rb(),s.Rb()),2&o){const o=s.bc();s.zb(5),s.hc("ngIf",o.searchResult.length)}}function h(o,t){if(1&o&&(s.Sb(0,"option",70),s.Cc(1),s.Rb()),2&o){const o=t.$implicit;s.ic("value",o._id),s.zb(1),s.Ec("",null==o?null:o.categoryName," ")}}function f(o,t){if(1&o&&(s.Sb(0,"option",70),s.Cc(1),s.Rb()),2&o){const o=t.$implicit;s.ic("value",o._id),s.zb(1),s.Dc(null==o?null:o.subCategoryName)}}function g(o,t){if(1&o){const o=s.Tb();s.Sb(0,"div",72),s.Ob(1,"img",73),s.Sb(2,"span",74),s.Zb("click",(function(){s.uc(o);const r=t.index;return s.bc(3).removeImg(r)})),s.Cc(3,"\xd7"),s.Rb(),s.Rb()}if(2&o){const o=t.$implicit;s.zb(1),s.hc("src",o,s.vc)}}function S(o,t){if(1&o&&(s.Qb(0),s.Bc(1,g,4,1,"div",71),s.Pb()),2&o){const o=s.bc(2);s.zb(1),s.hc("ngForOf",o.imageAttachemts)}}function F(o,t){if(1&o&&(s.Sb(0,"div",72),s.Ob(1,"img",73),s.Rb()),2&o){const o=t.$implicit;s.zb(1),s.hc("src",o,s.vc)}}function I(o,t){if(1&o&&(s.Qb(0),s.Bc(1,F,2,1,"div",71),s.Pb()),2&o){const o=s.bc(2);s.zb(1),s.hc("ngForOf",o.addedimageAttachemts)}}const C=function(o){return{"form-controlError":o}};function v(o,t){if(1&o){const o=s.Tb();s.Sb(0,"div",75),s.Sb(1,"i",76),s.Zb("click",(function(){s.uc(o);const r=t.index;return s.bc(2).removeColor(r)})),s.Rb(),s.Sb(2,"div",77),s.Ob(3,"input",78),s.Rb(),s.Rb()}if(2&o){const o=t.index,r=s.bc(2);s.zb(2),s.hc("formGroupName",o),s.zb(1),s.hc("ngClass",s.lc(2,C,r.isFormSubmitted&&r.productVariationForm.get("color").controls[o].controls.color.errors))}}function z(o,t){if(1&o){const o=s.Tb();s.Sb(0,"div",79),s.Sb(1,"i",76),s.Zb("click",(function(){s.uc(o);const r=t.index;return s.bc(2).removeSize(r)})),s.Rb(),s.Sb(2,"div",77),s.Ob(3,"input",80),s.Rb(),s.Rb()}if(2&o){const o=t.index,r=s.bc(2);s.zb(2),s.hc("formGroupName",o),s.zb(1),s.hc("ngClass",s.lc(2,C,r.isFormSubmitted&&r.productVariationForm.get("size").controls[o].controls.size.errors))}}function R(o,t){if(1&o){const o=s.Tb();s.Sb(0,"button",81),s.Zb("click",(function(){s.uc(o);const t=s.bc(2);return t.step=t.step-1})),s.Cc(1,"Previous"),s.Rb()}}function y(o,t){if(1&o){const o=s.Tb();s.Sb(0,"button",81),s.Zb("click",(function(){s.uc(o);const t=s.bc(2);return t.moveToNextStep(t.step)})),s.Cc(1,"Next"),s.Rb()}}function P(o,t){if(1&o){const o=s.Tb();s.Sb(0,"button",81),s.Zb("click",(function(){return s.uc(o),s.bc(2).addProduct()})),s.Cc(1,"Submit"),s.Rb()}}const O=function(){return{display:"block"}},w=function(){return{display:"none"}};function N(o,t){if(1&o){const o=s.Tb();s.Sb(0,"main",1),s.Sb(1,"div",14),s.Sb(2,"div",24),s.Sb(3,"div",25),s.Sb(4,"div",26),s.Sb(5,"div",27),s.Sb(6,"ul",28),s.Sb(7,"li",29),s.Cc(8,"Product Information"),s.Rb(),s.Sb(9,"li",29),s.Cc(10,"Description"),s.Rb(),s.Sb(11,"li",29),s.Cc(12,"Images"),s.Rb(),s.Sb(13,"li",29),s.Cc(14,"Selling Info"),s.Rb(),s.Sb(15,"li",29),s.Cc(16,"Product Variations"),s.Rb(),s.Rb(),s.Sb(17,"section",30),s.Sb(18,"form",31),s.Sb(19,"label",32),s.Cc(20,"Item Name (AKA Title)"),s.Rb(),s.Ob(21,"input",33),s.Sb(22,"label",32),s.Cc(23,"Model Number"),s.Rb(),s.Ob(24,"input",34),s.Sb(25,"label",32),s.Cc(26,"Barcode"),s.Rb(),s.Ob(27,"input",35),s.Sb(28,"label",32),s.Cc(29,"HSN Number"),s.Rb(),s.Ob(30,"input",36),s.Sb(31,"label",32),s.Cc(32,"Country Of Origin"),s.Rb(),s.Ob(33,"input",37),s.Sb(34,"label",32),s.Cc(35,"City"),s.Rb(),s.Ob(36,"input",38),s.Sb(37,"label",32),s.Cc(38,"Manufacturer"),s.Rb(),s.Ob(39,"input",39),s.Sb(40,"label",32),s.Cc(41,"VIN"),s.Rb(),s.Ob(42,"input",40),s.Sb(43,"label",32),s.Cc(44,"Available Units"),s.Rb(),s.Ob(45,"input",41),s.Sb(46,"label",32),s.Cc(47,"Product Dimensions (inch/cm)"),s.Rb(),s.Sb(48,"div",42),s.Sb(49,"div",43),s.Ob(50,"input",44),s.Rb(),s.Sb(51,"div",43),s.Ob(52,"input",45),s.Rb(),s.Sb(53,"div",43),s.Ob(54,"input",46),s.Rb(),s.Rb(),s.Sb(55,"label",32),s.Cc(56,"Product Weight(kg/gm)"),s.Rb(),s.Ob(57,"input",47),s.Sb(58,"label",32),s.Cc(59,"Category"),s.Rb(),s.Sb(60,"select",48),s.Zb("change",(function(){return s.uc(o),s.bc().getSubCategories()})),s.Sb(61,"option",49),s.Cc(62,"Select Category"),s.Rb(),s.Bc(63,h,2,2,"option",50),s.Rb(),s.Sb(64,"label",32),s.Cc(65,"Sub-Category"),s.Rb(),s.Sb(66,"select",51),s.Sb(67,"option",49),s.Cc(68,"Select Sub-Category"),s.Rb(),s.Bc(69,f,2,2,"option",50),s.Rb(),s.Rb(),s.Rb(),s.Sb(70,"section",30),s.Sb(71,"form",31),s.Sb(72,"label",32),s.Cc(73,"Product Description"),s.Rb(),s.Ob(74,"textarea",52),s.Sb(75,"label",32),s.Cc(76,"Bullet Points"),s.Rb(),s.Sb(77,"textarea",53),s.Cc(78,"                    "),s.Rb(),s.Rb(),s.Rb(),s.Sb(79,"section",30),s.Sb(80,"div",14),s.Sb(81,"div",54),s.Sb(82,"label",55),s.Ob(83,"img",56),s.Rb(),s.Sb(84,"input",57,58),s.Zb("click",(function(){return s.uc(o),s.rc(85).value=null}))("change",(function(t){return s.uc(o),s.bc().uploadFiles(t)})),s.Rb(),s.Rb(),s.Bc(86,S,2,1,"ng-container",59),s.Bc(87,I,2,1,"ng-container",59),s.Rb(),s.Rb(),s.Sb(88,"section",30),s.Sb(89,"form",31),s.Sb(90,"label",32),s.Cc(91,"Your Price"),s.Rb(),s.Ob(92,"input",60),s.Sb(93,"p",61),s.Cc(94,"Note: Match the lowest price"),s.Rb(),s.Sb(95,"label",32),s.Cc(96,"Maximum Retail Price"),s.Rb(),s.Ob(97,"input",62),s.Sb(98,"label",32),s.Cc(99,"SKU"),s.Rb(),s.Ob(100,"input",63),s.Rb(),s.Rb(),s.Sb(101,"section",30),s.Sb(102,"form",31),s.Sb(103,"label",4),s.Cc(104,"Color"),s.Rb(),s.Sb(105,"div",64),s.Bc(106,v,4,4,"div",65),s.Rb(),s.Sb(107,"button",66),s.Zb("click",(function(){return s.uc(o),s.bc().addColor()})),s.Cc(108,"Add Color"),s.Rb(),s.Sb(109,"div"),s.Sb(110,"label",4),s.Cc(111,"Size"),s.Rb(),s.Rb(),s.Sb(112,"div",64),s.Bc(113,z,4,4,"div",67),s.Rb(),s.Sb(114,"button",66),s.Zb("click",(function(){return s.uc(o),s.bc().addSize()})),s.Cc(115,"Add Size"),s.Rb(),s.Rb(),s.Rb(),s.Sb(116,"div",68),s.Bc(117,R,2,0,"button",69),s.Bc(118,y,2,0,"button",69),s.Bc(119,P,2,0,"button",69),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()}if(2&o){const o=s.bc();s.zb(7),s.hc("ngClass",0==o.step?"active":""),s.zb(2),s.hc("ngClass",1==o.step?"active":""),s.zb(2),s.hc("ngClass",2==o.step?"active":""),s.zb(2),s.hc("ngClass",3==o.step?"active":""),s.zb(2),s.hc("ngClass",4==o.step?"active":""),s.zb(2),s.hc("ngStyle",0==o.step?s.kc(42,O):s.kc(43,w)),s.zb(1),s.hc("formGroup",o.productInformationForm),s.zb(3),s.hc("ngClass",s.lc(44,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.itemName?null:o.productInformationForm.controls.itemName.errors))),s.zb(3),s.hc("ngClass",s.lc(46,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.model?null:o.productInformationForm.controls.model.errors))),s.zb(3),s.hc("ngClass",s.lc(48,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.barcode?null:o.productInformationForm.controls.barcode.errors))),s.zb(3),s.hc("ngClass",s.lc(50,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.hsn?null:o.productInformationForm.controls.hsn.errors))),s.zb(3),s.hc("ngClass",s.lc(52,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.countryOfOrigin?null:o.productInformationForm.controls.countryOfOrigin.errors))),s.zb(3),s.hc("ngClass",s.lc(54,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.city?null:o.productInformationForm.controls.city.errors))),s.zb(3),s.hc("ngClass",s.lc(56,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.brand?null:o.productInformationForm.controls.brand.errors))),s.zb(6),s.hc("ngClass",s.lc(58,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.availableUnits?null:o.productInformationForm.controls.availableUnits.errors))),s.zb(5),s.hc("ngClass",s.lc(60,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.dimensions||null==o.productInformationForm.controls.dimensions.controls||null==o.productInformationForm.controls.dimensions.controls.length?null:o.productInformationForm.controls.dimensions.controls.length.errors))),s.zb(2),s.hc("ngClass",s.lc(62,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.dimensions||null==o.productInformationForm.controls.dimensions.controls||null==o.productInformationForm.controls.dimensions.controls.width?null:o.productInformationForm.controls.dimensions.controls.width.errors))),s.zb(2),s.hc("ngClass",s.lc(64,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.dimensions||null==o.productInformationForm.controls.dimensions.controls||null==o.productInformationForm.controls.dimensions.controls.height?null:o.productInformationForm.controls.dimensions.controls.height.errors))),s.zb(3),s.hc("ngClass",s.lc(66,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.weight?null:o.productInformationForm.controls.weight.errors))),s.zb(3),s.hc("ngClass",s.lc(68,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.categoryId?null:o.productInformationForm.controls.categoryId.errors))),s.zb(3),s.hc("ngForOf",o.categories),s.zb(3),s.hc("ngClass",s.lc(70,C,o.isProductInformationFormSubmitted&&(null==o.productInformationForm||null==o.productInformationForm.controls||null==o.productInformationForm.controls.subCategoryId?null:o.productInformationForm.controls.subCategoryId.errors))),s.zb(3),s.hc("ngForOf",o.subCategories),s.zb(1),s.hc("ngStyle",1==o.step?s.kc(72,O):s.kc(73,w)),s.zb(1),s.hc("formGroup",o.productDescriptionForm),s.zb(3),s.hc("ngClass",s.lc(74,C,o.isProductDescriptionFormSubmitted&&(null==o.productDescriptionForm||null==o.productDescriptionForm.controls||null==o.productDescriptionForm.controls.description?null:o.productDescriptionForm.controls.description.errors))),s.zb(3),s.hc("ngClass",s.lc(76,C,o.isProductDescriptionFormSubmitted&&(null==o.productDescriptionForm||null==o.productDescriptionForm.controls||null==o.productDescriptionForm.controls.heading?null:o.productDescriptionForm.controls.heading.errors))),s.zb(2),s.hc("ngStyle",2==o.step?s.kc(78,O):s.kc(79,w)),s.zb(7),s.hc("ngIf",o.imageAttachemts.length>0),s.zb(1),s.hc("ngIf",o.addedimageAttachemts.length>0),s.zb(1),s.hc("ngStyle",3==o.step?s.kc(80,O):s.kc(81,w)),s.zb(1),s.hc("formGroup",o.sellingInfoForm),s.zb(3),s.hc("ngClass",s.lc(82,C,o.isSellingInfoFormSubmitted&&(null==o.sellingInfoForm||null==o.sellingInfoForm.controls||null==o.sellingInfoForm.controls.productPrice?null:o.sellingInfoForm.controls.productPrice.errors))),s.zb(5),s.hc("ngClass",s.lc(84,C,o.isSellingInfoFormSubmitted&&(null==o.sellingInfoForm||null==o.sellingInfoForm.controls||null==o.sellingInfoForm.controls.mrp?null:o.sellingInfoForm.controls.mrp.errors))),s.zb(3),s.hc("ngClass",s.lc(86,C,o.isSellingInfoFormSubmitted&&(null==o.sellingInfoForm||null==o.sellingInfoForm.controls||null==o.sellingInfoForm.controls.sku?null:o.sellingInfoForm.controls.sku.errors))),s.zb(1),s.hc("ngStyle",4==o.step?s.kc(88,O):s.kc(89,w)),s.zb(1),s.hc("formGroup",o.productVariationForm),s.zb(4),s.hc("ngForOf",o.productVariationForm.get("color").controls),s.zb(7),s.hc("ngForOf",o.productVariationForm.get("size").controls),s.zb(4),s.hc("ngIf",o.step>0),s.zb(1),s.hc("ngIf",o.step<4),s.zb(1),s.hc("ngIf",4==o.step)}}const x=[{path:"",pathMatch:"full",redirectTo:"/add-products"},{path:"add-products",component:(()=>{class o{constructor(o,t,r,n){this.fb=o,this.productService=t,this.router=r,this.toastService=n,this.step=0,this.productStatus=!1,this.showSubMenu=!1,this.userName="",this.categories=[],this.subCategories=[],this.searchResult=[],this.searchText="",this.showAddProductSection=!1,this.productId="",this.files=[],this.isProductInformationFormSubmitted=!1,this.isProductDescriptionFormSubmitted=!1,this.isSellingInfoFormSubmitted=!1,this.isproductVariationFormSubmitted=!1,this.isFormSubmitted=!1,this.isImageUploadFormSubmitted=!1,this.imageAttachemts=[],this.imageAttachemtsToSend=[],this.addedimageAttachemts=[],this.isFromEdit=!1}ngOnInit(){let o=Math.random().toString(36).slice(2);this.productInformationForm=this.fb.group({barcode:["",c.w.required],itemName:["",c.w.required],model:[""],vin:[o],hsn:["",c.w.required],city:["",c.w.required],countryOfOrigin:["",c.w.required],brand:["",c.w.required],availableUnits:["",c.w.required],dimensions:this.fb.group({length:["",c.w.required],width:["",c.w.required],height:["",c.w.required]}),weight:["",c.w.required],categoryId:["",c.w.required],subCategoryId:["",c.w.required]}),this.productDescriptionForm=this.fb.group({description:[""],heading:[""]}),this.sellingInfoForm=this.fb.group({productPrice:[""],mrp:[""],sku:[""]}),this.productVariationForm=this.fb.group({color:this.fb.array([this.fb.group({color:[""]})]),size:this.fb.array([this.fb.group({size:[""]})])}),this.getCategories(),this.userName=JSON.parse(localStorage.getItem("user")).name;let t=localStorage.getItem("product")?JSON.parse(localStorage.getItem("product")):{};t&&Object.keys(t).length&&(this.isFromEdit=!0,this.productId=t._id,this.setProductValues(t))}resetCompleteForm(){this.productDescriptionForm.reset(),this.productInformationForm.reset(),this.sellingInfoForm.reset(),this.productVariationForm.reset(),this.imageAttachemts=[],this.isFromEdit=!1}getCategories(){this.productService.getCategories({skip:0,limit:1e4}).subscribe(o=>{this.categories=o.data},o=>{console.log(o)})}getSubCategories(){this.productService.getSubCategories({skip:0,limit:1e4,categoryId:this.productInformationForm.controls.categoryId.value}).subscribe(o=>{this.subCategories=o.data},o=>{console.log(o)})}addProduct(){var o;if(this.isFormSubmitted=!0,!this.productVariationForm.valid)return;let t=Object.assign(this.productDescriptionForm.value,this.productInformationForm.value,this.productVariationForm.value,this.sellingInfoForm.value);this.isFromEdit&&(t.productId=this.productId);let r=[],n=[];t.sellerName=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")).name:"",t.color.forEach(o=>{r.push(o.color)}),t.color=r,t.size.forEach(o=>{n.push(o.size)}),(null===(o=this.addedimageAttachemts)||void 0===o?void 0:o.length)&&(t.productImg=this.addedimageAttachemts),t.size=n,this.isFromEdit||(t.isApproved=this.productStatus),t.productPrice=t.productPrice.toString(),t.mrp=t.mrp.toString(),t.availableUnits=Number(t.availableUnits),this.isFromEdit?this.productService.editProduct(t).subscribe(o=>{this.toastService.openSnackbar(o.message),this.productId=o.data._id,this.addProductImages(),this.showAddProductSection=!1,this.step=0,this.productInformationForm.reset(),this.productDescriptionForm.reset(),this.imageAttachemts=[],this.sellingInfoForm.reset(),this.productVariationForm.reset(),this.isProductInformationFormSubmitted=!1,this.isProductDescriptionFormSubmitted=!1,this.isSellingInfoFormSubmitted=!1,this.isproductVariationFormSubmitted=!1,this.isFormSubmitted=!1,this.isImageUploadFormSubmitted=!1;const t=this.productVariationForm.controls.color;t.clear(),t.push(this.colorForm());const r=this.productVariationForm.controls.size;r.clear(),r.push(this.sizeForm()),this.isFromEdit=!1},o=>{console.log(o)}):this.productService.addProduct(t).subscribe(o=>{this.toastService.openSnackbar(o.message),this.productId=o.data._id,this.addProductImages(),this.showAddProductSection=!1,this.step=0,this.productInformationForm.reset(),this.productDescriptionForm.reset(),this.imageAttachemts=[],this.sellingInfoForm.reset(),this.productVariationForm.reset(),this.isProductInformationFormSubmitted=!1,this.isProductDescriptionFormSubmitted=!1,this.isSellingInfoFormSubmitted=!1,this.isproductVariationFormSubmitted=!1,this.isFormSubmitted=!1,this.isImageUploadFormSubmitted=!1;const t=this.productVariationForm.controls.color;t.clear(),t.push(this.colorForm());const r=this.productVariationForm.controls.size;r.clear(),r.push(this.sizeForm())},o=>{console.log(o)})}removeImg(o){this.imageAttachemts.splice(o,1),this.imageAttachemtsToSend.splice(o,1)}resetForm(){this.addProductForm.reset(),this.router.navigateByUrl("/seller/active-dashboard")}searchProduct(){this.productSearchSubscription&&this.productSearchSubscription.unsubscribe(),this.searchResult=[],this.searchText&&(this.productSearchSubscription=this.productService.searchProduct(this.searchText).subscribe(o=>{console.log(o),this.searchResult=o.data},o=>{console.log(o)}))}setProductValues(o){this.showAddProductSection=!0,this.step=0,this.productStatus=o.isApproved,this.productVariationForm.patchValue(o),this.productInformationForm.patchValue(o),this.productDescriptionForm.patchValue(o),this.sellingInfoForm.patchValue(o),this.getSubCategories(),this.addedimageAttachemts=o.productImg;const t=this.productVariationForm.controls.color;t.clear();for(let n=0;n<o.color.length;n++)t.push(this.colorForm()),this.productVariationForm.controls.color.at(n).get("color").setValue(o.color[n]);const r=this.productVariationForm.controls.size;r.clear();for(let n=0;n<o.size.length;n++)r.push(this.sizeForm()),this.productVariationForm.controls.size.at(n).get("size").setValue(o.size[n]);this.searchResult=[],this.searchText=""}uploadFiles(o){if(this.imageAttachemts.length<5){this.files=o.target.files,this.tempFiles=o.target.files[0];const t=o.target.files[0].name,r=t.slice(t.lastIndexOf(".")+1,t.length);if("jpg"==r||"jpeg"==r||"png"==r)if(this.tempFiles&&this.tempFiles.size/1e3/1e3<2){this.imageAttachemtsToSend.push(o.target.files[0]);let t=new FileReader;o.target.files&&o.target.files[0]&&(t.readAsDataURL(this.tempFiles),t.onload=()=>{this.imageUrl=t.result,this.imageAttachemts.push(this.imageUrl)})}else this.toastService.openSnackbar("Invalid File Format. Valid Format are jpg, jpeg & png");else this.toastService.openSnackbar(this.tempFiles.name+" cannot be uploaded because it exceeds max size limit of 2 MB.")}else this.toastService.openSnackbar("More than 5 images are not allowed.")}addProductDescription(){this.productService.addProductDescription(this.x).subscribe(o=>{console.log(o),this.toastService.openSnackbar("Description added successfully!!"),this.router.navigate(["/product/product-images",o.data._id])},o=>{console.log(o)})}addProductImages(){var o;if(null===(o=this.imageAttachemtsToSend)||void 0===o?void 0:o.length){let o=new FormData;Array.from(this.imageAttachemtsToSend).forEach(t=>{o.append("files",t)}),o.append("productId",this.productId),this.productService.addProductImages(o).subscribe(o=>{console.log(o)},o=>{console.log(o)})}}addProductSellingInfo(){this.productService.addProductSellingInfo(this.x).subscribe(o=>{console.log(o),this.toastService.openSnackbar("Added selling info successfully"),this.router.navigate(["/product/product-variation",o.data._id])},o=>{console.log(o)})}addColor(){this.colors=this.productVariationForm.get("color"),this.colors.push(this.fb.group({color:["",c.w.required]}))}addSize(){this.sizes=this.productVariationForm.get("size"),this.sizes.push(this.fb.group({size:["",c.w.required]}))}removeSize(o){this.sizes=this.productVariationForm.get("size"),this.sizes.removeAt(o)}removeColor(o){this.colors=this.productVariationForm.get("color"),this.colors.removeAt(o)}moveToNextStep(o){console.log(this.productInformationForm.controls.dimensions),0==o&&(this.isProductInformationFormSubmitted=!0,this.productInformationForm.valid?this.step=o+1:this.toastService.openSnackbar("Please input first all the red bordered fields.")),1==o&&(this.isProductDescriptionFormSubmitted=!0,this.productDescriptionForm.valid&&(this.step=o+1)),2==o&&(this.isImageUploadFormSubmitted=!0,this.step=o+1),3==o&&(this.isSellingInfoFormSubmitted=!0,this.sellingInfoForm.valid&&(this.step=o+1))}colorForm(){return this.fb.group({color:[null,c.w.required]})}sizeForm(){return this.fb.group({size:[null,c.w.required]})}ngOnDestroy(){this.isFromEdit=!1,localStorage.removeItem("product")}}return o.\u0275fac=function(t){return new(t||o)(s.Nb(c.d),s.Nb(i.a),s.Nb(e.b),s.Nb(l.a))},o.\u0275cmp=s.Hb({type:o,selectors:[["app-add-products"]],decls:19,vars:5,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"border","rounded","border-light","p-sm-5","p-3"],["for","",1,""],[1,"input-group"],["type","text","name","search","placeholder","Product Name, Barcode, Brand, CIN (Company Identification Number)",1,"form-control",3,"ngModel","keyup","ngModelChange"],[1,"input-group-append"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"fa","fa-search"],["class","text-primary",3,"click",4,"ngIf"],["class","page-content",4,"ngIf"],[1,"text-primary",3,"click"],["class","row",4,"ngIf"],[1,"row"],["class","col-sm-4 col-md-3 col-lg-2 my-2",4,"ngFor","ngForOf"],[1,"col-sm-4","col-md-3","col-lg-2","my-2"],[1,"card","px-2"],[1,"card-img-top",2,"height","150px",3,"src"],[1,"card-body","px-0"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-success","btn-sm","mx-2",3,"click"],["aria-hidden","true",1,"fa","fa-check"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],["id","wizard"],[1,"nav","nav-justified","nav-pills"],["disabled","true",3,"ngClass"],[1,"border","rounded","border-light","p-sm-5","p-3",3,"ngStyle"],[3,"formGroup"],["for","",1,"small"],["type","text","placeholder","Item Name","formControlName","itemName",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Model Name","formControlName","model",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Barcode","formControlName","barcode",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","HSN Number","formControlName","hsn",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","","formControlName","countryOfOrigin",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","City","formControlName","city",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Manufacturer","formControlName","brand",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","VIN","formControlName","vin","disabled","",1,"form-control","mb-4"],["type","","placeholder","Available Units","formControlName","availableUnits",1,"form-control","mb-4",3,"ngClass"],["formGroupName","dimensions",1,"row","d-flex","justify-content-between","col-12"],[1,"col-md-4"],["type","text","placeholder","Length","formControlName","length",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Width","formControlName","width",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Height","formControlName","height",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","","formControlName","weight",1,"form-control","mb-4",3,"ngClass"],["name","","id","","formControlName","categoryId",1,"form-control","mb-4",3,"ngClass","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["name","","id","","formControlName","subCategoryId",1,"form-control","mb-4",3,"ngClass"],["placeholder","8-Peice luxury comforter set product includes 1 comforter, 1 bed skirt, 2 shams, 2 euro shams and 2 decorated pillows","formControlName","description",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Embroidered design","formControlName","heading",1,"form-control","mb-4",3,"ngClass"],[1,"col-lg-2","col-md-3","col-sm-6","my-2"],["for","file-input1"],["src","https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png",2,"width","100%","cursor","pointer"],["id","file-input1","type","file","accept",".png, .jpeg, .jpg",1,"d-none",3,"click","change"],["fileInput",""],[4,"ngIf"],["type","number","placeholder","Ex. 50.00","formControlName","productPrice",1,"form-control",3,"ngClass"],[1,"mb-4","text-success","small"],["type","number","placeholder","Ex. 50.00","formControlName","mrp",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","","formControlName","sku",1,"form-control","mb-4",3,"ngClass"],[1,"row","d-flex","col-12"],["formArrayName","color",4,"ngFor","ngForOf"],["type","button",1,"btn","mb-4","btn-sm","btn-dark",3,"click"],["formArrayName","size",4,"ngFor","ngForOf"],[1,"row","float-right","mt-3"],["type","button","class","btn btn-sm btn-primary mr-2",3,"click",4,"ngIf"],[3,"value"],["class","col-lg-4 col-md-8 col-sm-6 my-2",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-8","col-sm-6","my-2"],["alt","","width","100%",3,"src"],[2,"position","absolute","font-size","20px","cursor","pointer",3,"click"],["formArrayName","color"],["aria-hidden","true",1,"fa","fa-times",3,"click"],[3,"formGroupName"],["type","text","placeholder","Color","formControlName","color",1,"form-control","mb-2","mr-2",3,"ngClass"],["formArrayName","size"],["type","text","placeholder","Size","formControlName","size",1,"form-control","mb-2","mr-2",3,"ngClass"],["type","button",1,"btn","btn-sm","btn-primary","mr-2",3,"click"]],template:function(o,t){1&o&&(s.Sb(0,"div",0),s.Ob(1,"app-side-navigation"),s.Sb(2,"section",1),s.Sb(3,"div",2),s.Sb(4,"h2"),s.Cc(5,"Find Your Products"),s.Rb(),s.Ob(6,"hr"),s.Sb(7,"form",3),s.Sb(8,"label",4),s.Cc(9,"Search Product"),s.Rb(),s.Sb(10,"div",5),s.Sb(11,"input",6),s.Zb("keyup",(function(){return t.searchProduct()}))("ngModelChange",(function(o){return t.searchText=o})),s.Rb(),s.Sb(12,"div",7),s.Sb(13,"button",8),s.Zb("click",(function(){return t.searchProduct()})),s.Ob(14,"i",9),s.Rb(),s.Rb(),s.Rb(),s.Bc(15,m,2,0,"a",10),s.Bc(16,u,2,0,"a",10),s.Rb(),s.Rb(),s.Rb(),s.Bc(17,p,6,1,"section",11),s.Bc(18,N,120,90,"main",11),s.Rb()),2&o&&(s.zb(11),s.hc("ngModel",t.searchText),s.zb(4),s.hc("ngIf",!t.isFromEdit),s.zb(1),s.hc("ngIf",t.isFromEdit),s.zb(1),s.hc("ngIf",t.searchResult.length),s.zb(1),s.hc("ngIf",t.showAddProductSection))},directives:[a.a,c.y,c.n,c.o,c.b,c.m,c.p,n.k,n.j,n.i,n.l,c.f,c.e,c.g,c.v,c.q,c.x,c.r,c.c],styles:[".text-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff!important}.upload_frame[_ngcontent-%COMP%]{width:180px;border:4px dotted #ddd;margin:0 auto}#wizard[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{padding:0}#wizard[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{width:170px;display:inline-block;font-size:inherit;background:#f2f2f2;padding:6px 15px;text-align:left;margin-right:10px;margin-bottom:10px;border-radius:3px;color:#aaa;font-weight:100}#wizard[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover{cursor:pointer}#wizard[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]{background:#007bff;color:#fff}.form-controlError[_ngcontent-%COMP%]{border:1px solid red!important}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.erroMessage[_ngcontent-%COMP%]{color:red}"]}),o})()}];let k=(()=>{class o{}return o.\u0275mod=s.Lb({type:o}),o.\u0275inj=s.Kb({factory:function(t){return new(t||o)},imports:[[e.f.forChild(x)],e.f]}),o})();var A=r("dbUT"),V=r("tk/3"),M=r("WeEj"),D=r("PCNd");let _=(()=>{class o{}return o.\u0275mod=s.Lb({type:o}),o.\u0275inj=s.Kb({factory:function(t){return new(t||o)},providers:[i.a,M.a],imports:[[n.b,k,A.a.forRoot(),c.t,c.h,V.c,D.a]]}),o})()}}]);