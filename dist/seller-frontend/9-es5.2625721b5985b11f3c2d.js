!function(){function o(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function t(o,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{qvFY:function(r,n,i){"use strict";i.r(n),i.d(n,"ProductModule",(function(){return R}));var e=i("ofXK"),c=i("8/IB"),s=i("tyNb"),l=i("3Pt+"),a=i("fXoL"),u=i("6fg7"),m=i("J0GB");function d(o,t){if(1&o){var r=a.Rb();a.Qb(0,"a",12),a.Xb("click",(function(){a.rc(r);var o=a.Zb();return o.showAddProductSection=!o.showAddProductSection})),a.zc(1,"I'm adding a product not sold here"),a.Pb()}}function b(o,t){if(1&o){var r=a.Rb();a.Qb(0,"a",12),a.Xb("click",(function(){return a.rc(r),a.Zb().resetCompleteForm()})),a.zc(1,"Add new product"),a.Pb()}}function p(o,t){if(1&o){var r=a.Rb();a.Qb(0,"div",16),a.Qb(1,"div",17),a.Ob(2,"img",18),a.Qb(3,"div",19),a.Qb(4,"h5",20),a.zc(5),a.Pb(),a.Qb(6,"p",21),a.zc(7),a.Pb(),a.Qb(8,"button",22),a.Xb("click",(function(){a.rc(r);var o=t.$implicit;return a.Zb(3).setProductValues(o)})),a.Ob(9,"i",23),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&o){var n=t.$implicit;a.zb(5),a.Ac(null==n?null:n.itemName),a.zb(2),a.Ac(null==n?null:n.brand)}}function f(o,t){if(1&o&&(a.Qb(0,"div",14),a.yc(1,p,10,2,"div",15),a.Pb()),2&o){var r=a.Zb(2);a.zb(1),a.fc("ngForOf",r.searchResult)}}function g(o,t){if(1&o&&(a.Qb(0,"section",1),a.Qb(1,"div",2),a.Qb(2,"h2"),a.zc(3,"Search Results"),a.Pb(),a.Ob(4,"hr"),a.yc(5,f,2,1,"div",13),a.Pb(),a.Pb()),2&o){var r=a.Zb();a.zb(5),a.fc("ngIf",r.searchResult.length)}}function h(o,t){if(1&o&&(a.Qb(0,"option",69),a.zc(1),a.Pb()),2&o){var r=t.$implicit;a.gc("value",r._id),a.zb(1),a.Bc("",null==r?null:r.categoryName," ")}}function F(o,t){if(1&o&&(a.Qb(0,"option",69),a.zc(1),a.Pb()),2&o){var r=t.$implicit;a.gc("value",r._id),a.zb(1),a.Ac(null==r?null:r.subCategoryName)}}function P(o,t){if(1&o&&(a.Qb(0,"div",70),a.Ob(1,"img",71),a.Pb()),2&o){var r=t.$implicit;a.zb(1),a.fc("src",r,a.sc)}}var v=function(o){return{"form-controlError":o}};function I(o,t){if(1&o){var r=a.Rb();a.Qb(0,"div",72),a.Qb(1,"i",73),a.Xb("click",(function(){a.rc(r);var o=t.index;return a.Zb(2).removeColor(o)})),a.Pb(),a.Qb(2,"div",74),a.Ob(3,"input",75),a.Pb(),a.Pb()}if(2&o){var n=t.index,i=a.Zb(2);a.zb(2),a.fc("formGroupName",n),a.zb(1),a.fc("ngClass",a.ic(2,v,i.isFormSubmitted&&i.productVariationForm.get("color").controls[n].controls.color.errors))}}function z(o,t){if(1&o){var r=a.Rb();a.Qb(0,"div",76),a.Qb(1,"i",73),a.Xb("click",(function(){a.rc(r);var o=t.index;return a.Zb(2).removeSize(o)})),a.Pb(),a.Qb(2,"div",74),a.Ob(3,"input",77),a.Pb(),a.Pb()}if(2&o){var n=t.index,i=a.Zb(2);a.zb(2),a.fc("formGroupName",n),a.zb(1),a.fc("ngClass",a.ic(2,v,i.isFormSubmitted&&i.productVariationForm.get("size").controls[n].controls.size.errors))}}function y(o,t){if(1&o){var r=a.Rb();a.Qb(0,"button",78),a.Xb("click",(function(){a.rc(r);var o=a.Zb(2);return o.step=o.step-1})),a.zc(1,"Previous"),a.Pb()}}function S(o,t){if(1&o){var r=a.Rb();a.Qb(0,"button",78),a.Xb("click",(function(){a.rc(r);var o=a.Zb(2);return o.moveToNextStep(o.step)})),a.zc(1,"Next"),a.Pb()}}function C(o,t){if(1&o){var r=a.Rb();a.Qb(0,"button",78),a.Xb("click",(function(){return a.rc(r),a.Zb(2).addProduct()})),a.zc(1,"Submit"),a.Pb()}}var Q=function(){return{display:"block"}},k=function(){return{display:"none"}};function O(o,t){if(1&o){var r=a.Rb();a.Qb(0,"main",1),a.Qb(1,"div",14),a.Qb(2,"div",24),a.Qb(3,"div",25),a.Qb(4,"div",26),a.Qb(5,"div",27),a.Qb(6,"ul",28),a.Qb(7,"li",29),a.zc(8,"Product Information"),a.Pb(),a.Qb(9,"li",29),a.zc(10,"Description"),a.Pb(),a.Qb(11,"li",29),a.zc(12,"Images"),a.Pb(),a.Qb(13,"li",29),a.zc(14,"Selling Info"),a.Pb(),a.Qb(15,"li",29),a.zc(16,"Product Variations"),a.Pb(),a.Pb(),a.Qb(17,"section",30),a.Qb(18,"form",31),a.Qb(19,"label",32),a.zc(20,"Item Name (AKA Title)"),a.Pb(),a.Ob(21,"input",33),a.Qb(22,"label",32),a.zc(23,"Model Number"),a.Pb(),a.Ob(24,"input",34),a.Qb(25,"label",32),a.zc(26,"Barcode"),a.Pb(),a.Ob(27,"input",35),a.Qb(28,"label",32),a.zc(29,"HSN Number"),a.Pb(),a.Ob(30,"input",36),a.Qb(31,"label",32),a.zc(32,"Country Of Origin"),a.Pb(),a.Ob(33,"input",37),a.Qb(34,"label",32),a.zc(35,"City"),a.Pb(),a.Ob(36,"input",38),a.Qb(37,"label",32),a.zc(38,"Manufacturer"),a.Pb(),a.Ob(39,"input",39),a.Qb(40,"label",32),a.zc(41,"Available Units"),a.Pb(),a.Ob(42,"input",40),a.Qb(43,"label",32),a.zc(44,"Product Dimensions (inch/cm)"),a.Pb(),a.Qb(45,"div",41),a.Qb(46,"div",42),a.Ob(47,"input",43),a.Pb(),a.Qb(48,"div",42),a.Ob(49,"input",44),a.Pb(),a.Qb(50,"div",42),a.Ob(51,"input",45),a.Pb(),a.Pb(),a.Qb(52,"label",32),a.zc(53,"Product Weight(kg/gm)"),a.Pb(),a.Ob(54,"input",46),a.Qb(55,"label",32),a.zc(56,"Category"),a.Pb(),a.Qb(57,"select",47),a.Xb("change",(function(){return a.rc(r),a.Zb().getSubCategories()})),a.Qb(58,"option",48),a.zc(59,"Select Category"),a.Pb(),a.yc(60,h,2,2,"option",49),a.Pb(),a.Qb(61,"label",32),a.zc(62,"Sub-Category"),a.Pb(),a.Qb(63,"select",50),a.Qb(64,"option",48),a.zc(65,"Select Sub-Category"),a.Pb(),a.yc(66,F,2,2,"option",49),a.Pb(),a.Pb(),a.Pb(),a.Qb(67,"section",30),a.Qb(68,"form",31),a.Qb(69,"label",32),a.zc(70,"Product Description"),a.Pb(),a.Ob(71,"textarea",51),a.Qb(72,"label",32),a.zc(73,"Bullet Points"),a.Pb(),a.Qb(74,"textarea",52),a.zc(75,"                    "),a.Pb(),a.Pb(),a.Pb(),a.Qb(76,"section",30),a.Qb(77,"div",14),a.Qb(78,"div",53),a.Qb(79,"label",54),a.Ob(80,"img",55),a.Pb(),a.Qb(81,"input",56,57),a.Xb("click",(function(){return a.rc(r),a.oc(82).value=null}))("change",(function(o){return a.rc(r),a.Zb().uploadFiles(o)})),a.Pb(),a.Pb(),a.yc(83,P,2,1,"div",58),a.Pb(),a.Pb(),a.Qb(84,"section",30),a.Qb(85,"form",31),a.Qb(86,"label",32),a.zc(87,"Your Price"),a.Pb(),a.Ob(88,"input",59),a.Qb(89,"p",60),a.zc(90,"Note: Match the lowest price INR 2859"),a.Pb(),a.Qb(91,"label",32),a.zc(92,"Maximum Retail Price"),a.Pb(),a.Ob(93,"input",61),a.Qb(94,"label",32),a.zc(95,"SKU"),a.Pb(),a.Ob(96,"input",62),a.Pb(),a.Pb(),a.Qb(97,"section",30),a.Qb(98,"form",31),a.Qb(99,"label",4),a.zc(100,"Color"),a.Pb(),a.Qb(101,"div",63),a.yc(102,I,4,4,"div",64),a.Pb(),a.Qb(103,"button",65),a.Xb("click",(function(){return a.rc(r),a.Zb().addColor()})),a.zc(104,"Add Color"),a.Pb(),a.Qb(105,"div"),a.Qb(106,"label",4),a.zc(107,"Size"),a.Pb(),a.Pb(),a.Qb(108,"div",63),a.yc(109,z,4,4,"div",66),a.Pb(),a.Qb(110,"button",65),a.Xb("click",(function(){return a.rc(r),a.Zb().addSize()})),a.zc(111,"Add Size"),a.Pb(),a.Pb(),a.Pb(),a.Qb(112,"div",67),a.yc(113,y,2,0,"button",68),a.yc(114,S,2,0,"button",68),a.yc(115,C,2,0,"button",68),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&o){var n=a.Zb();a.zb(7),a.fc("ngClass",0==n.step?"active":""),a.zb(2),a.fc("ngClass",1==n.step?"active":""),a.zb(2),a.fc("ngClass",2==n.step?"active":""),a.zb(2),a.fc("ngClass",3==n.step?"active":""),a.zb(2),a.fc("ngClass",4==n.step?"active":""),a.zb(2),a.fc("ngStyle",0==n.step?a.hc(41,Q):a.hc(42,k)),a.zb(1),a.fc("formGroup",n.productInformationForm),a.zb(3),a.fc("ngClass",a.ic(43,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.itemName?null:n.productInformationForm.controls.itemName.errors))),a.zb(3),a.fc("ngClass",a.ic(45,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.model?null:n.productInformationForm.controls.model.errors))),a.zb(3),a.fc("ngClass",a.ic(47,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.barcode?null:n.productInformationForm.controls.barcode.errors))),a.zb(3),a.fc("ngClass",a.ic(49,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.hsn?null:n.productInformationForm.controls.hsn.errors))),a.zb(3),a.fc("ngClass",a.ic(51,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.countryOfOrigin?null:n.productInformationForm.controls.countryOfOrigin.errors))),a.zb(3),a.fc("ngClass",a.ic(53,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.city?null:n.productInformationForm.controls.city.errors))),a.zb(3),a.fc("ngClass",a.ic(55,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.brand?null:n.productInformationForm.controls.brand.errors))),a.zb(3),a.fc("ngClass",a.ic(57,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.availableUnits?null:n.productInformationForm.controls.availableUnits.errors))),a.zb(5),a.fc("ngClass",a.ic(59,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.dimensions||null==n.productInformationForm.controls.dimensions.controls||null==n.productInformationForm.controls.dimensions.controls.length?null:n.productInformationForm.controls.dimensions.controls.length.errors))),a.zb(2),a.fc("ngClass",a.ic(61,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.dimensions||null==n.productInformationForm.controls.dimensions.controls||null==n.productInformationForm.controls.dimensions.controls.width?null:n.productInformationForm.controls.dimensions.controls.width.errors))),a.zb(2),a.fc("ngClass",a.ic(63,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.dimensions||null==n.productInformationForm.controls.dimensions.controls||null==n.productInformationForm.controls.dimensions.controls.height?null:n.productInformationForm.controls.dimensions.controls.height.errors))),a.zb(3),a.fc("ngClass",a.ic(65,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.weight?null:n.productInformationForm.controls.weight.errors))),a.zb(3),a.fc("ngClass",a.ic(67,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.categoryId?null:n.productInformationForm.controls.categoryId.errors))),a.zb(3),a.fc("ngForOf",n.categories),a.zb(3),a.fc("ngClass",a.ic(69,v,n.isProductInformationFormSubmitted&&(null==n.productInformationForm||null==n.productInformationForm.controls||null==n.productInformationForm.controls.subCategoryId?null:n.productInformationForm.controls.subCategoryId.errors))),a.zb(3),a.fc("ngForOf",n.subCategories),a.zb(1),a.fc("ngStyle",1==n.step?a.hc(71,Q):a.hc(72,k)),a.zb(1),a.fc("formGroup",n.productDescriptionForm),a.zb(3),a.fc("ngClass",a.ic(73,v,n.isProductDescriptionFormSubmitted&&(null==n.productDescriptionForm||null==n.productDescriptionForm.controls||null==n.productDescriptionForm.controls.description?null:n.productDescriptionForm.controls.description.errors))),a.zb(3),a.fc("ngClass",a.ic(75,v,n.isProductDescriptionFormSubmitted&&(null==n.productDescriptionForm||null==n.productDescriptionForm.controls||null==n.productDescriptionForm.controls.heading?null:n.productDescriptionForm.controls.heading.errors))),a.zb(2),a.fc("ngStyle",2==n.step?a.hc(77,Q):a.hc(78,k)),a.zb(7),a.fc("ngForOf",n.imageAttachemts),a.zb(1),a.fc("ngStyle",3==n.step?a.hc(79,Q):a.hc(80,k)),a.zb(1),a.fc("formGroup",n.sellingInfoForm),a.zb(3),a.fc("ngClass",a.ic(81,v,n.isSellingInfoFormSubmitted&&(null==n.sellingInfoForm||null==n.sellingInfoForm.controls||null==n.sellingInfoForm.controls.productPrice?null:n.sellingInfoForm.controls.productPrice.errors))),a.zb(5),a.fc("ngClass",a.ic(83,v,n.isSellingInfoFormSubmitted&&(null==n.sellingInfoForm||null==n.sellingInfoForm.controls||null==n.sellingInfoForm.controls.mrp?null:n.sellingInfoForm.controls.mrp.errors))),a.zb(3),a.fc("ngClass",a.ic(85,v,n.isSellingInfoFormSubmitted&&(null==n.sellingInfoForm||null==n.sellingInfoForm.controls||null==n.sellingInfoForm.controls.sku?null:n.sellingInfoForm.controls.sku.errors))),a.zb(1),a.fc("ngStyle",4==n.step?a.hc(87,Q):a.hc(88,k)),a.zb(1),a.fc("formGroup",n.productVariationForm),a.zb(4),a.fc("ngForOf",n.productVariationForm.get("color").controls),a.zb(7),a.fc("ngForOf",n.productVariationForm.get("size").controls),a.zb(4),a.fc("ngIf",n.step>0),a.zb(1),a.fc("ngIf",n.step<4),a.zb(1),a.fc("ngIf",4==n.step)}}var w,x,N,A=[{path:"",pathMatch:"full",redirectTo:"/add-products"},{path:"add-products",component:(w=function(){function r(t,n,i,e){o(this,r),this.fb=t,this.productService=n,this.router=i,this.toastService=e,this.step=0,this.isFromAnotherPage=!1,this.showSubMenu=!1,this.userName="",this.categories=[],this.subCategories=[],this.searchResult=[],this.searchText="",this.showAddProductSection=!1,this.productId="",this.files=[],this.isProductInformationFormSubmitted=!1,this.isProductDescriptionFormSubmitted=!1,this.isSellingInfoFormSubmitted=!1,this.isproductVariationFormSubmitted=!1,this.isFormSubmitted=!1,this.isImageUploadFormSubmitted=!1,this.imageAttachemts=[],this.imageAttachemtsToSend=[],this.isFromEdit=!1}var n,i,e;return n=r,(i=[{key:"ngOnInit",value:function(){this.productInformationForm=this.fb.group({barcode:["",l.w.required],itemName:["",l.w.required],model:[""],hsn:["",l.w.required],city:["",l.w.required],countryOfOrigin:["",l.w.required],brand:["",l.w.required],availableUnits:["",l.w.required],dimensions:this.fb.group({length:["",l.w.required],width:["",l.w.required],height:["",l.w.required]}),weight:["",l.w.required],categoryId:["",l.w.required],subCategoryId:["",l.w.required]}),this.productDescriptionForm=this.fb.group({description:[""],heading:[""]}),this.sellingInfoForm=this.fb.group({productPrice:[""],mrp:[""],sku:[""]}),this.productVariationForm=this.fb.group({color:this.fb.array([this.fb.group({color:[""]})]),size:this.fb.array([this.fb.group({size:[""]})])}),this.getCategories(),this.userName=JSON.parse(localStorage.getItem("user")).name;var o=localStorage.getItem("product")?JSON.parse(localStorage.getItem("product")):{};o&&Object.keys(o).length&&(this.isFromEdit=!0,this.productId=o._id,this.setProductValues(o),this.isFromAnotherPage=!0)}},{key:"resetCompleteForm",value:function(){this.productDescriptionForm.reset(),this.productInformationForm.reset(),this.sellingInfoForm.reset(),this.productVariationForm.reset(),this.imageAttachemts=[],this.isFromEdit=!1}},{key:"getCategories",value:function(){var o=this;this.productService.getCategories({skip:0,limit:1e4}).subscribe((function(t){o.categories=t.data}),(function(o){console.log(o)}))}},{key:"getSubCategories",value:function(){var o=this;this.productService.getSubCategories({skip:0,limit:1e4,categoryId:this.productInformationForm.controls.categoryId.value}).subscribe((function(t){o.subCategories=t.data}),(function(o){console.log(o)}))}},{key:"addProduct",value:function(){var o=this;if(this.isFormSubmitted=!0,this.productVariationForm.valid){var t=Object.assign(this.productDescriptionForm.value,this.productInformationForm.value,this.productVariationForm.value,this.sellingInfoForm.value);this.isFromEdit&&(t.productId=this.productId);var r=[],n=[];t.color.forEach((function(o){r.push(o.color)})),t.color=r,t.size.forEach((function(o){n.push(o.size)})),t.size=n,t.productPrice=t.productPrice.toString(),t.mrp=t.mrp.toString(),t.availableUnits=Number(t.availableUnits),this.isFromEdit?this.productService.editProduct(t).subscribe((function(t){o.toastService.openSnackbar("Product updated successfully!!"),o.productId=t.data._id,o.addProductImages(),o.showAddProductSection=!1,o.step=0,o.productInformationForm.reset(),o.productDescriptionForm.reset(),o.imageAttachemts=[],o.sellingInfoForm.reset(),o.productVariationForm.reset(),o.isProductInformationFormSubmitted=!1,o.isProductDescriptionFormSubmitted=!1,o.isSellingInfoFormSubmitted=!1,o.isproductVariationFormSubmitted=!1,o.isFormSubmitted=!1,o.isImageUploadFormSubmitted=!1;var r=o.productVariationForm.controls.color;r.clear(),r.push(o.colorForm());var n=o.productVariationForm.controls.size;n.clear(),n.push(o.sizeForm()),o.isFromEdit=!1}),(function(o){console.log(o)})):this.productService.addProduct(t).subscribe((function(t){o.toastService.openSnackbar("Product added succeefully!!"),o.productId=t.data._id,o.addProductImages(),o.showAddProductSection=!1,o.step=0,o.productInformationForm.reset(),o.productDescriptionForm.reset(),o.imageAttachemts=[],o.sellingInfoForm.reset(),o.productVariationForm.reset(),o.isProductInformationFormSubmitted=!1,o.isProductDescriptionFormSubmitted=!1,o.isSellingInfoFormSubmitted=!1,o.isproductVariationFormSubmitted=!1,o.isFormSubmitted=!1,o.isImageUploadFormSubmitted=!1;var r=o.productVariationForm.controls.color;r.clear(),r.push(o.colorForm());var n=o.productVariationForm.controls.size;n.clear(),n.push(o.sizeForm())}),(function(o){console.log(o)}))}}},{key:"resetForm",value:function(){this.addProductForm.reset(),this.router.navigateByUrl("/seller/active-dashboard")}},{key:"searchProduct",value:function(){var o=this;this.productSearchSubscription&&this.productSearchSubscription.unsubscribe(),this.searchResult=[],this.searchText&&(this.productSearchSubscription=this.productService.searchProduct(this.searchText).subscribe((function(t){console.log(t),o.searchResult=t.data}),(function(o){console.log(o)})))}},{key:"setProductValues",value:function(o){this.isFromAnotherPage?this.isFromEdit=!1:(this.productId=o._id,this.isFromEdit=!0),this.showAddProductSection=!0,this.step=0,this.productVariationForm.patchValue(o),this.productInformationForm.patchValue(o),this.productDescriptionForm.patchValue(o),this.sellingInfoForm.patchValue(o),this.getSubCategories(),this.imageAttachemts=o.productImg;var t=this.productVariationForm.controls.color;t.clear();for(var r=0;r<o.color.length;r++)t.push(this.colorForm()),this.productVariationForm.controls.color.at(r).get("color").setValue(o.color[r]);var n=this.productVariationForm.controls.size;n.clear();for(var i=0;i<o.size.length;i++)n.push(this.sizeForm()),this.productVariationForm.controls.size.at(i).get("size").setValue(o.size[i]);this.searchResult=[]}},{key:"uploadFiles",value:function(o){var t=this;if(this.imageAttachemts.length<5){this.files=o.target.files,this.tempFiles=o.target.files[0];var r=o.target.files[0].name,n=r.slice(r.lastIndexOf(".")+1,r.length);if("jpg"==n||"jpeg"==n||"png"==n)if(this.tempFiles&&this.tempFiles.size/1e3/1e3<2){this.imageAttachemtsToSend.push(o.target.files[0]);var i=new FileReader;o.target.files&&o.target.files[0]&&(i.readAsDataURL(this.tempFiles),i.onload=function(){t.imageUrl=i.result,t.imageAttachemts.push(t.imageUrl)}),console.log(this.imageAttachemts)}else this.toastService.openSnackbar("Invalid File Format. Valid Format are jpg, jpeg & png");else this.toastService.openSnackbar(this.tempFiles.name+" cannot be uploaded because it exceeds max size limit of 2 MB.")}else this.toastService.openSnackbar("More than 5 images are not allowed.")}},{key:"addProductDescription",value:function(){var o=this;this.productService.addProductDescription(this.x).subscribe((function(t){console.log(t),o.toastService.openSnackbar("Description added successfully!!"),o.router.navigate(["/product/product-images",t.data._id])}),(function(o){console.log(o)}))}},{key:"addProductImages",value:function(){var o;if(null===(o=this.imageAttachemtsToSend)||void 0===o?void 0:o.length){var t=new FormData;Array.from(this.imageAttachemtsToSend).forEach((function(o){t.append("files",o)})),t.append("productId",this.productId),this.productService.addProductImages(t).subscribe((function(o){console.log(o)}),(function(o){console.log(o)}))}}},{key:"addProductSellingInfo",value:function(){var o=this;this.productService.addProductSellingInfo(this.x).subscribe((function(t){console.log(t),o.toastService.openSnackbar("Added selling info successfully"),o.router.navigate(["/product/product-variation",t.data._id])}),(function(o){console.log(o)}))}},{key:"addColor",value:function(){this.colors=this.productVariationForm.get("color"),this.colors.push(this.fb.group({color:["",l.w.required]}))}},{key:"addSize",value:function(){this.sizes=this.productVariationForm.get("size"),this.sizes.push(this.fb.group({size:["",l.w.required]}))}},{key:"removeSize",value:function(o){this.sizes=this.productVariationForm.get("size"),this.sizes.removeAt(o)}},{key:"removeColor",value:function(o){this.colors=this.productVariationForm.get("color"),this.colors.removeAt(o)}},{key:"moveToNextStep",value:function(o){console.log(this.productInformationForm.controls.dimensions),0==o&&(this.isProductInformationFormSubmitted=!0,this.productInformationForm.valid?this.step=o+1:this.toastService.openSnackbar("Please input first all the red bordered fields.")),1==o&&(this.isProductDescriptionFormSubmitted=!0,this.productDescriptionForm.valid&&(this.step=o+1)),2==o&&(this.isImageUploadFormSubmitted=!0,this.step=o+1),3==o&&(this.isSellingInfoFormSubmitted=!0,this.sellingInfoForm.valid&&(this.step=o+1))}},{key:"colorForm",value:function(){return this.fb.group({color:[null,l.w.required]})}},{key:"sizeForm",value:function(){return this.fb.group({size:[null,l.w.required]})}},{key:"ngOnDestroy",value:function(){this.isFromEdit=!1,localStorage.removeItem("product")}}])&&t(n.prototype,i),e&&t(n,e),r}(),w.\u0275fac=function(o){return new(o||w)(a.Nb(l.d),a.Nb(c.a),a.Nb(s.b),a.Nb(u.a))},w.\u0275cmp=a.Hb({type:w,selectors:[["app-add-products"]],decls:19,vars:5,consts:[[1,"page-wrapper","chiller-theme","toggled"],[1,"page-content"],[1,"container-fluid"],[1,"border","rounded","border-light","p-sm-5","p-3"],["for","",1,""],[1,"input-group"],["type","text","name","search","placeholder","Product Name, Barcode, Brand, CIN (Company Identification Number)",1,"form-control",3,"ngModel","keyup","ngModelChange"],[1,"input-group-append"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"fa","fa-search"],["class","text-primary",3,"click",4,"ngIf"],["class","page-content",4,"ngIf"],[1,"text-primary",3,"click"],["class","row",4,"ngIf"],[1,"row"],["class","col-sm-4 col-md-3 col-lg-2 my-2",4,"ngFor","ngForOf"],[1,"col-sm-4","col-md-3","col-lg-2","my-2"],[1,"card","px-2"],["src","https://rukminim1.flixcart.com/image/150/150/k0cqqvk0/bottle/4/v/c/1000-venice-fridge-water-bottles-120-cello-original-imafk5tysrejtyhj.jpeg",1,"card-img-top",2,"height","150px"],[1,"card-body","px-0"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","btn-success","btn-sm","mx-2",3,"click"],["aria-hidden","true",1,"fa","fa-check"],[1,"col-md-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],["id","wizard"],[1,"nav","nav-justified","nav-pills"],["disabled","true",3,"ngClass"],[1,"border","rounded","border-light","p-sm-5","p-3",3,"ngStyle"],[3,"formGroup"],["for","",1,"small"],["type","text","placeholder","Item Name","formControlName","itemName",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Model Name","formControlName","model",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Barcode","formControlName","barcode",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","HSN Number","formControlName","hsn",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","","formControlName","countryOfOrigin",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","City","formControlName","city",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Manufacturer","formControlName","brand",1,"form-control","mb-4",3,"ngClass"],["type","","placeholder","Available Units","formControlName","availableUnits",1,"form-control","mb-4",3,"ngClass"],["formGroupName","dimensions",1,"row","d-flex","justify-content-between","col-12"],[1,"col-md-4"],["type","text","placeholder","Length","formControlName","length",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Width","formControlName","width",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Height","formControlName","height",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","","formControlName","weight",1,"form-control","mb-4",3,"ngClass"],["name","","id","","formControlName","categoryId",1,"form-control","mb-4",3,"ngClass","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["name","","id","","formControlName","subCategoryId",1,"form-control","mb-4",3,"ngClass"],["placeholder","8-Peice luxury comforter set product includes 1 comforter, 1 bed skirt, 2 shams, 2 euro shams and 2 decorated pillows","formControlName","description",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","Embroidered design","formControlName","heading",1,"form-control","mb-4",3,"ngClass"],[1,"col-lg-2","col-md-3","col-sm-6","my-2"],["for","file-input1"],["src","https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png",2,"width","100%","cursor","pointer"],["id","file-input1","type","file","accept",".png, .jpeg, .jpg",1,"d-none",3,"click","change"],["fileInput",""],["class","col-lg-4 col-md-8 col-sm-6 my-2",4,"ngFor","ngForOf"],["type","number","placeholder","Ex. 50.00","formControlName","productPrice",1,"form-control",3,"ngClass"],[1,"mb-4","text-success","small"],["type","number","placeholder","Ex. 50.00","formControlName","mrp",1,"form-control","mb-4",3,"ngClass"],["type","text","placeholder","","formControlName","sku",1,"form-control","mb-4",3,"ngClass"],[1,"row","d-flex","col-12"],["formArrayName","color",4,"ngFor","ngForOf"],["type","button",1,"btn","mb-4","btn-sm","btn-dark",3,"click"],["formArrayName","size",4,"ngFor","ngForOf"],[1,"row","float-right","mt-3"],["type","button","class","btn btn-sm btn-primary mr-2",3,"click",4,"ngIf"],[3,"value"],[1,"col-lg-4","col-md-8","col-sm-6","my-2"],["alt","","width","100%",3,"src"],["formArrayName","color"],["aria-hidden","true",1,"fa","fa-times",3,"click"],[3,"formGroupName"],["type","text","placeholder","Color","formControlName","color",1,"form-control","mb-2","mr-2",3,"ngClass"],["formArrayName","size"],["type","text","placeholder","Size","formControlName","size",1,"form-control","mb-2","mr-2",3,"ngClass"],["type","button",1,"btn","btn-sm","btn-primary","mr-2",3,"click"]],template:function(o,t){1&o&&(a.Qb(0,"div",0),a.Ob(1,"app-side-navigation"),a.Qb(2,"section",1),a.Qb(3,"div",2),a.Qb(4,"h2"),a.zc(5,"Find Your Products"),a.Pb(),a.Ob(6,"hr"),a.Qb(7,"form",3),a.Qb(8,"label",4),a.zc(9,"Search Product"),a.Pb(),a.Qb(10,"div",5),a.Qb(11,"input",6),a.Xb("keyup",(function(){return t.searchProduct()}))("ngModelChange",(function(o){return t.searchText=o})),a.Pb(),a.Qb(12,"div",7),a.Qb(13,"button",8),a.Xb("click",(function(){return t.searchProduct()})),a.Ob(14,"i",9),a.Pb(),a.Pb(),a.Pb(),a.yc(15,d,2,0,"a",10),a.yc(16,b,2,0,"a",10),a.Pb(),a.Pb(),a.Pb(),a.yc(17,g,6,1,"section",11),a.yc(18,O,116,89,"main",11),a.Pb()),2&o&&(a.zb(11),a.fc("ngModel",t.searchText),a.zb(4),a.fc("ngIf",!t.isFromEdit),a.zb(1),a.fc("ngIf",t.isFromEdit),a.zb(1),a.fc("ngIf",t.searchResult.length),a.zb(1),a.fc("ngIf",t.showAddProductSection))},directives:[m.a,l.y,l.n,l.o,l.b,l.m,l.p,e.k,e.j,e.i,e.l,l.f,l.e,l.g,l.v,l.q,l.x,l.r,l.c],styles:[".text-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#fff!important}.upload_frame[_ngcontent-%COMP%]{width:180px;border:4px dotted #ddd;margin:0 auto}#wizard[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{padding:0}#wizard[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{width:170px;display:inline-block;font-size:inherit;background:#f2f2f2;padding:6px 15px;text-align:left;margin-right:10px;margin-bottom:10px;border-radius:3px;color:#aaa;font-weight:100}#wizard[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover{cursor:pointer}#wizard[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]{background:#007bff;color:#fff}.form-controlError[_ngcontent-%COMP%]{border:1px solid red!important}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.erroMessage[_ngcontent-%COMP%]{color:red}"]}),w)}],V=((x=function t(){o(this,t)}).\u0275mod=a.Lb({type:x}),x.\u0275inj=a.Kb({factory:function(o){return new(o||x)},imports:[[s.e.forChild(A)],s.e]}),x),M=i("dbUT"),D=i("tk/3"),_=i("WeEj"),q=i("PCNd"),R=((N=function t(){o(this,t)}).\u0275mod=a.Lb({type:N}),N.\u0275inj=a.Kb({factory:function(o){return new(o||N)},providers:[c.a,_.a],imports:[[e.b,V,M.a.forRoot(),l.t,l.h,D.c,q.a]]}),N)}}])}();