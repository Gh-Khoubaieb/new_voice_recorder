"use strict";(self.webpackChunkPrototype1=self.webpackChunkPrototype1||[]).push([[491],{5027:(I,T,n)=>{n.d(T,{F:()=>e});var l=n(3075),i=n(5e3),b=n(2290),t=n(7408),x=n(8966),C=n(9808);function y(u,M){1&u&&(i.TgZ(0,"div"),i._uU(1," category name is required. "),i.qZA())}function v(u,M){if(1&u&&(i.TgZ(0,"div",8),i.YNc(1,y,2,0,"div",9),i.qZA()),2&u){const p=i.oxw();i.xp6(1),i.Q6J("ngIf",null==p.name||null==p.name.errors?null:p.name.errors.required)}}let e=(()=>{class u{constructor(p,g){this.toastr=p,this.categoryService=g,this.categoryGroup=new l.cw({name:new l.NI("",[l.kI.required])})}ngOnInit(){}onSubmit(){var p;if(this.categoryGroup.markAllAsTouched(),this.categoryGroup.valid){var g={id:0,name:null===(p=this.name)||void 0===p?void 0:p.value};this.categoryService.createCategory(g).subscribe(U=>{this.toastr.success("Create category","Sucess")})}}get name(){return this.categoryGroup.get("name")}}return u.\u0275fac=function(p){return new(p||u)(i.Y36(b._W),i.Y36(t.H))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-add-category"]],decls:11,vars:3,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"form-group","row","p-5"],[3,"formGroup","ngSubmit"],["for","first-name"],["id","first-name","type","text","formControlName","name",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","submit","value","save",1,"btn","btn-primary","mt-2",3,"mat-dialog-close","click"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(p,g){1&p&&(i.TgZ(0,"h2",0),i._uU(1,"Add category"),i.qZA(),i.TgZ(2,"mat-dialog-content",1)(3,"div",2)(4,"form",3),i.NdJ("ngSubmit",function(){return g.onSubmit()}),i.TgZ(5,"label",4),i._uU(6,"Product Name: "),i.qZA(),i._UZ(7,"input",5),i.YNc(8,v,2,1,"div",6),i.qZA()()(),i.TgZ(9,"mat-dialog-actions")(10,"input",7),i.NdJ("click",function(){return g.onSubmit()}),i.qZA()()),2&p&&(i.xp6(4),i.Q6J("formGroup",g.categoryGroup),i.xp6(4),i.Q6J("ngIf",(null==g.name?null:g.name.invalid)&&((null==g.name?null:g.name.dirty)||(null==g.name?null:g.name.touched))),i.xp6(2),i.Q6J("mat-dialog-close",!0))},directives:[x.uh,x.xY,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,C.O5,x.H8,x.ZT],styles:["[_nghost-%COMP%]{height:100%}"]}),u})()},7138:(I,T,n)=>{n.d(T,{e:()=>Y});var l=n(3075),i=n(5027),b=n(5753),t=n(5e3),x=n(2290),C=n(7408),y=n(773),v=n(8966),e=n(1083),u=n(7322),M=n(7531),p=n(5245),g=n(9808),U=n(4107),Z=n(508);function D(d,h){1&d&&(t.TgZ(0,"mat-error"),t._uU(1," product name is required. "),t.qZA())}function E(d,h){1&d&&(t.TgZ(0,"mat-error"),t._uU(1," price is required. "),t.qZA())}function q(d,h){if(1&d&&(t.TgZ(0,"mat-option",40),t._uU(1),t.qZA()),2&d){const s=h.$implicit;t.Q6J("value",null==s?null:s.id),t.xp6(1),t.Oqu(null==s?null:s.name)}}function L(d,h){1&d&&(t.TgZ(0,"mat-error"),t._uU(1," category is required."),t.qZA())}function w(d,h){if(1&d&&(t.TgZ(0,"mat-option",40),t._uU(1),t.qZA()),2&d){const s=h.$implicit;t.Q6J("value",s.value),t.xp6(1),t.hij(" ",s.viewValue," ")}}function k(d,h){1&d&&(t.TgZ(0,"div",29)(1,"div",15),t._UZ(2,"input",41),t.TgZ(3,"label",22),t._uU(4,"is 1"),t.qZA()(),t.TgZ(5,"div",15),t._UZ(6,"input",41),t.TgZ(7,"label",22),t._uU(8,"is 2"),t.qZA()()())}function R(d,h){1&d&&(t.TgZ(0,"div",29)(1,"div",15),t._UZ(2,"input",41),t.TgZ(3,"label",22),t._uU(4,"is 1"),t.qZA()(),t.TgZ(5,"div",15),t._UZ(6,"input",41),t.TgZ(7,"label",22),t._uU(8,"is 2"),t.qZA()()())}function J(d,h){1&d&&(t.TgZ(0,"div",29)(1,"div",15),t._UZ(2,"input",41),t.TgZ(3,"label",22),t._uU(4,"is 1"),t.qZA()(),t.TgZ(5,"div",15),t._UZ(6,"input",41),t.TgZ(7,"label",22),t._uU(8,"is 2"),t.qZA()()())}function B(d,h){1&d&&(t.TgZ(0,"div",29)(1,"div",15),t._UZ(2,"input",41),t.TgZ(3,"label",22),t._uU(4,"is 1"),t.qZA()(),t.TgZ(5,"div",15),t._UZ(6,"input",41),t.TgZ(7,"label",22),t._uU(8,"is 2"),t.qZA()()())}let Y=(()=>{class d{constructor(s,a,_,m,P,A){this.toastr=s,this.categoryService=a,this.productService=_,this.dialog=m,this.activatedroute=P,this.dialogRef=A,this.TypeProduct=[{value:b.e.PEXCEPTIONNELS_NUM,viewValue:b.e.PEXCEPTIONNELS},{value:b.e.PEXPLOITATION_NUM,viewValue:b.e.PEXPLOITATION},{value:b.e.PFINANCIERS_NUM,viewValue:b.e.PFINANCIERS}],this.id=0,this.productGroup=new l.cw({productName:new l.NI("",[l.kI.required]),price:new l.NI("",[l.kI.required]),category:new l.NI("",[l.kI.required]),isVisible:new l.NI("",[l.kI.required])})}onNoClick(){this.dialogRef.close()}openDialog(){this.dialog.open(i.F).afterClosed().subscribe(a=>{this.getAllCategories()})}getAllCategories(){this.categoryService.getAllCategories().subscribe(s=>{this.categories=[...s]})}getProduct(s){this.productService.getEditProduct(s).subscribe(a=>{var _,m,P,A;this.productDto=a,null===(_=this.productName)||void 0===_||_.setValue(a.productName),null===(m=this.price)||void 0===m||m.setValue(a.price),null===(P=this.category)||void 0===P||P.setValue(a.categoryId,{onlySelf:!0}),null===(A=this.isVisible)||void 0===A||A.setValue(a.isVisible)})}ngOnInit(){this.getAllCategories(),this.activatedroute.paramMap.subscribe(s=>{this.id=Number(s.get("id")),this.getProduct(this.id)})}onSubmit(){var s,a,_,m,P,A,N,O;if(this.productGroup.markAllAsTouched(),this.productGroup.valid)if(this.id>0){var S={id:this.id,productName:null===(s=this.productGroup.get("productName"))||void 0===s?void 0:s.value,price:null===(a=this.productGroup.get("price"))||void 0===a?void 0:a.value,categoryId:null===(_=this.productGroup.get("category"))||void 0===_?void 0:_.value,isVisible:null===(m=this.productGroup.get("isVisible"))||void 0===m?void 0:m.value};this.productService.updateProduct(S).subscribe(Q=>{this.toastr.success("Create product","Sucess")})}else S={id:this.id,productName:null===(P=this.productGroup.get("productName"))||void 0===P?void 0:P.value,price:null===(A=this.productGroup.get("price"))||void 0===A?void 0:A.value,categoryId:null===(N=this.productGroup.get("category"))||void 0===N?void 0:N.value,isVisible:null===(O=this.productGroup.get("isVisible"))||void 0===O?void 0:O.value},this.productService.createProduct(S).subscribe(z=>{this.toastr.success("Create product","Sucess")})}get category(){return this.productGroup.get("category")}get price(){return this.productGroup.get("price")}get productName(){return this.productGroup.get("productName")}get isVisible(){return this.productGroup.get("isVisible")}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(x._W),t.Y36(C.H),t.Y36(y.M),t.Y36(v.uw),t.Y36(e.gz),t.Y36(v.so))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-add-product"]],decls:152,vars:14,consts:[[1,"pt-0"],[1,"form-group","example-container"],[1,"form-title"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"example-full-width"],["matInput","","placeholder","Placeholder"],["matSuffix",""],["matInput","","placeholder","Product Name","formControlName","productName"],[4,"ngIf"],[1,"d-flex","justify-content-between"],["appearance","outline",1,"example-full-width","me-2"],["appearance","outline",1,"example-full-width","ms-2"],["matInput","","placeholder","Product Name"],["appearance","outline",1,"example-full-width","ms-2","me-2"],["matInput","","placeholder","Price","formControlName","price"],[1,"d-flex"],["appearance","outline"],["matNativeControl","","formControlName","category"],[3,"value",4,"ngFor","ngForOf"],[1,"btn","btn-primary","ps-4","ms-4","btn-add",3,"click"],["matNativeControl","","formControlName","type"],["type","checkbox","formControlName","isVisible",1,"example-margin",3,"ngModel","ngModelChange"],["for",""],["class","all-check",4,"ngIf"],["type","submit","value","Save changes",1,"btn-save","mt-2"],["type","submit","value","Annuler",1,"btn-save","mt-2",3,"click"],["action","/action_page.php"],["type","radio","id","html","name","fav_language1","value","HTML"],["for","html"],[1,"all-check"],["type","radio","id","html","name","fav_language11","value","HTML"],["type","radio","id","html","name","fav_language12","value","HTML"],["type","radio","id","css","name","fav_language2","value","CSS"],["for","css"],["type","radio","id","html","name","fav_language21","value","HTML"],["type","radio","id","html","name","fav_language22","value","HTML"],["type","radio","id","javascript","name","fav_language3","value","JavaScript"],["for","javascript"],["type","radio","id","html","name","fav_language31","value","HTML"],["type","radio","id","html","name","fav_language32","value","HTML"],[3,"value"],["type","checkbox","formControlName","isVisible","checked","false",1,"example-margin"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),t._uU(3,"Form"),t.qZA(),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(5,"mat-form-field",4)(6,"mat-label"),t._uU(7,"Outline form field"),t.qZA(),t._UZ(8,"input",5),t.TgZ(9,"mat-icon",6),t._uU(10,"sentiment_very_satisfied"),t.qZA()(),t.TgZ(11,"mat-form-field",4)(12,"mat-label"),t._uU(13,"Product Name:"),t.qZA(),t._UZ(14,"input",7),t.YNc(15,D,2,0,"mat-error",8),t.qZA(),t.TgZ(16,"div",9)(17,"mat-form-field",10)(18,"mat-label"),t._uU(19,"Outline form field"),t.qZA(),t._UZ(20,"input",5),t.TgZ(21,"mat-icon",6),t._uU(22,"sentiment_very_satisfied"),t.qZA()(),t.TgZ(23,"mat-form-field",11)(24,"mat-label"),t._uU(25,"Product Name:"),t.qZA(),t._UZ(26,"input",12),t.qZA()(),t.TgZ(27,"div",9)(28,"mat-form-field",10)(29,"mat-label"),t._uU(30,"Outline form field"),t.qZA(),t._UZ(31,"input",5),t.TgZ(32,"mat-icon",6),t._uU(33,"sentiment_very_satisfied"),t.qZA()(),t.TgZ(34,"mat-form-field",13)(35,"mat-label"),t._uU(36,"Product Name:"),t.qZA(),t._UZ(37,"input",12),t.qZA(),t.TgZ(38,"mat-form-field",11)(39,"mat-label"),t._uU(40,"Product Name:"),t.qZA(),t._UZ(41,"input",12),t.qZA()(),t.TgZ(42,"div",9)(43,"mat-form-field",10)(44,"mat-label"),t._uU(45,"Outline form field"),t.qZA(),t._UZ(46,"input",5),t.TgZ(47,"mat-icon",6),t._uU(48,"sentiment_very_satisfied"),t.qZA()(),t.TgZ(49,"mat-form-field",13)(50,"mat-label"),t._uU(51,"Product Name:"),t.qZA(),t._UZ(52,"input",12),t.qZA(),t.TgZ(53,"mat-form-field",13)(54,"mat-label"),t._uU(55,"Product Name:"),t.qZA(),t._UZ(56,"input",12),t.qZA(),t.TgZ(57,"mat-form-field",13)(58,"mat-label"),t._uU(59,"Product Name:"),t.qZA(),t._UZ(60,"input",12),t.qZA(),t.TgZ(61,"mat-form-field",13)(62,"mat-label"),t._uU(63,"Product Name:"),t.qZA(),t._UZ(64,"input",12),t.qZA(),t.TgZ(65,"mat-form-field",11)(66,"mat-label"),t._uU(67,"Product Name:"),t.qZA(),t._UZ(68,"input",12),t.qZA()(),t.TgZ(69,"mat-form-field",4)(70,"mat-label"),t._uU(71,"Price"),t.qZA(),t._UZ(72,"input",14),t.YNc(73,E,2,0,"mat-error",8),t.qZA(),t.TgZ(74,"div",15)(75,"mat-form-field",16)(76,"mat-label"),t._uU(77,"Category:"),t.qZA(),t.TgZ(78,"mat-select",17),t.YNc(79,q,2,2,"mat-option",18),t.qZA(),t.YNc(80,L,2,0,"mat-error",8),t.qZA(),t.TgZ(81,"a",19),t.NdJ("click",function(){return a.openDialog()}),t._uU(82,"Add"),t.qZA()(),t.TgZ(83,"div",15)(84,"mat-form-field",16)(85,"mat-label"),t._uU(86,"Type:"),t.qZA(),t.TgZ(87,"mat-select",20),t.YNc(88,w,2,2,"mat-option",18),t.qZA()()(),t.TgZ(89,"div",15)(90,"input",21),t.NdJ("ngModelChange",function(m){return a.isChecked1=m}),t.qZA(),t.TgZ(91,"label",22),t._uU(92,"is Visible 1"),t.qZA()(),t.YNc(93,k,9,0,"div",23),t.TgZ(94,"div",15)(95,"input",21),t.NdJ("ngModelChange",function(m){return a.isChecked2=m}),t.qZA(),t.TgZ(96,"label",22),t._uU(97,"is Visible 2"),t.qZA()(),t.YNc(98,R,9,0,"div",23),t.TgZ(99,"div",15)(100,"input",21),t.NdJ("ngModelChange",function(m){return a.isChecked3=m}),t.qZA(),t.TgZ(101,"label",22),t._uU(102,"is Visible 3"),t.qZA()(),t.YNc(103,J,9,0,"div",23),t.TgZ(104,"div",15)(105,"input",21),t.NdJ("ngModelChange",function(m){return a.isChecked4=m}),t.qZA(),t.TgZ(106,"label",22),t._uU(107,"is Visible 3"),t.qZA()(),t.YNc(108,B,9,0,"div",23),t._UZ(109,"input",24),t.TgZ(110,"input",25),t.NdJ("click",function(){return a.onNoClick()}),t.qZA()(),t.TgZ(111,"form",26),t._uU(112," \xa0 "),t._UZ(113,"input",27),t._uU(114," \xa0 "),t.TgZ(115,"label",28),t._uU(116,"is Visible 1"),t.qZA(),t._UZ(117,"br"),t.TgZ(118,"div",29),t._UZ(119,"input",30),t.TgZ(120,"label",28),t._uU(121,"is 1"),t.qZA(),t._UZ(122,"br")(123,"input",31),t.TgZ(124,"label",28),t._uU(125,"is 2"),t.qZA(),t._UZ(126,"br"),t.qZA(),t._UZ(127,"input",32),t.TgZ(128,"label",33),t._uU(129,"is Visible 2"),t.qZA(),t._UZ(130,"br"),t.TgZ(131,"div",29),t._UZ(132,"input",34),t.TgZ(133,"label",28),t._uU(134,"is 1"),t.qZA(),t._UZ(135,"br")(136,"input",35),t.TgZ(137,"label",28),t._uU(138,"is 2"),t.qZA(),t._UZ(139,"br"),t.qZA(),t._UZ(140,"input",36),t.TgZ(141,"label",37),t._uU(142,"is Visible 3"),t.qZA(),t.TgZ(143,"div",29),t._UZ(144,"input",38),t.TgZ(145,"label",28),t._uU(146,"is 1"),t.qZA(),t._UZ(147,"br")(148,"input",39),t.TgZ(149,"label",28),t._uU(150,"is 2"),t.qZA(),t._UZ(151,"br"),t.qZA()()()()),2&s&&(t.xp6(4),t.Q6J("formGroup",a.productGroup),t.xp6(11),t.Q6J("ngIf",(null==a.productName?null:a.productName.invalid)&&((null==a.productName?null:a.productName.dirty)||(null==a.productName?null:a.productName.touched))),t.xp6(58),t.Q6J("ngIf",null==a.price||null==a.price.errors?null:a.price.errors.required),t.xp6(6),t.Q6J("ngForOf",a.categories),t.xp6(1),t.Q6J("ngIf",null==a.category||null==a.category.errors?null:a.category.errors.required),t.xp6(8),t.Q6J("ngForOf",a.TypeProduct),t.xp6(2),t.Q6J("ngModel",a.isChecked1),t.xp6(3),t.Q6J("ngIf",!0===a.isChecked1),t.xp6(2),t.Q6J("ngModel",a.isChecked2),t.xp6(3),t.Q6J("ngIf",!0===a.isChecked2),t.xp6(2),t.Q6J("ngModel",a.isChecked3),t.xp6(3),t.Q6J("ngIf",!0===a.isChecked3),t.xp6(2),t.Q6J("ngModel",a.isChecked4),t.xp6(3),t.Q6J("ngIf",!0===a.isChecked4))},directives:[l._Y,l.JL,l.sg,u.KE,u.hX,M.Nt,p.Hw,u.R9,l.Fj,l.JJ,l.u,g.O5,u.TO,U.gD,g.sg,Z.ey,l.Wl],styles:['[_nghost-%COMP%]{height:100%}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px}.form-title[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:500;line-height:1.25;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;margin-bottom:.35rem}.btn-add[_ngcontent-%COMP%]{margin-top:0!important;width:calc(3.5rem + 2px);height:calc(3.5rem + 2px)}.btn-save[_ngcontent-%COMP%], .btn-add[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;outline:0px;border:0px;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;appearance:none;text-decoration:none;text-transform:none;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-weight:500;font-size:.8125rem;line-height:1.75;min-width:64px;padding:6px 16px;border-radius:4px;transition:background-color .25s cubic-bezier(.4,0,.2,1) 0ms,box-shadow .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;color:#fff;background-color:#376fd0;margin:10px}.btn-add[_ngcontent-%COMP%]:hover, .btn-save[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#264d91}.css-1qrqq5h[_ngcontent-%COMP%]{font-size:13px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-weight:400;line-height:1.4375em;color:#000000de;box-sizing:border-box;cursor:text;display:inline-flex;align-items:center;width:100%;position:relative;border-radius:4px}.css-1x5jdmq[_ngcontent-%COMP%]{font:inherit;letter-spacing:inherit;color:currentcolor;border:0px;box-sizing:content-box;background:none;height:1.4375em;margin:0;-webkit-tap-highlight-color:transparent;display:block;min-width:0px;width:100%;animation-name:mui-auto-fill-cancel;animation-duration:10ms;padding:16.5px 14px}.css-1u7qnk5[_ngcontent-%COMP%]{color:#0009;font-size:13px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-weight:400;line-height:1.4375em;padding:0;display:block;transform-origin:left top;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:calc(133% - 24px);position:absolute;left:0px;top:0px;transform:translate(14px,-9px) scale(.75);transition:color .2s cubic-bezier(0,0,.2,1) 0ms,transform .2s cubic-bezier(0,0,.2,1) 0ms,max-width .2s cubic-bezier(0,0,.2,1) 0ms;z-index:1;pointer-events:auto;-webkit-user-select:none;user-select:none}.css-1crp1ei[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;position:relative;min-width:0px;padding:0;margin:8px 0;border:0px;vertical-align:top;width:100%}.mat-form-field[_ngcontent-%COMP%]{width:100%}.example-container[_ngcontent-%COMP%]{position:relative;background-color:#fff;color:#000000de;transition:box-shadow .3s cubic-bezier(.4,0,.2,1) 0ms;overflow:hidden;border-radius:6px;background-image:none}.example-full-width[_ngcontent-%COMP%]{margin:0}  .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:0!important}mat-error[_ngcontent-%COMP%]{padding-bottom:5px}.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{color:#264d91!important}.example-margin[_ngcontent-%COMP%]{margin-right:5px}.all-check[_ngcontent-%COMP%]{margin-left:15px}']}),d})()},9491:(I,T,n)=>{n.r(T),n.d(T,{ProductModule:()=>F});var l=n(9808),i=n(3075),b=n(9182),t=n(3148),x=n(7408),C=n(773),y=n(1083),v=n(7138),e=n(5e3),u=n(3251);function M(o,c){1&o&&e._uU(0,"Details")}function p(o,c){1&o&&e._uU(0,"Categories")}let g=(()=>{class o{constructor(){this.productName="test product",this.price=21,this.category="category"}ngOnInit(){}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-detail-product"]],inputs:{productName:"productName",price:"price",category:"category"},decls:15,vars:3,consts:[[1,"p-5","pt-0"],[1,"example-container"],["label","First"],["mat-tab-label",""],[1,"p-3"],[1,"mt-2"],["label","Second"]],template:function(r,f){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-tab-group")(3,"mat-tab",2),e.YNc(4,M,1,0,"ng-template",3),e.TgZ(5,"div",4)(6,"div",5),e._uU(7),e.qZA(),e.TgZ(8,"div",5),e._uU(9),e.qZA(),e.TgZ(10,"div",5),e._uU(11),e.qZA()()(),e.TgZ(12,"mat-tab",6),e.YNc(13,p,1,0,"ng-template",3),e._uU(14," Categories "),e.qZA()()()()),2&r&&(e.xp6(7),e.hij("Product name:",f.productName,""),e.xp6(2),e.hij("Price:",f.price,""),e.xp6(2),e.hij("Category:",f.category,""))},directives:[u.SP,u.uX,u.uD],styles:["[_nghost-%COMP%]{height:100%}.example-container[_ngcontent-%COMP%]{position:relative;background-color:#fff;color:#000000de;transition:box-shadow .3s cubic-bezier(.4,0,.2,1) 0ms;overflow:hidden;border-radius:6px;box-shadow:#32325d05 0 2px 5px -1px,#0000000d 0 1px 3px -1px;background-image:none;margin-bottom:24px}"]}),o})();var U=n(801),Z=n(8279),D=n(4847),E=n(9444),q=n(7423),L=n(6087);function w(o,c){1&o&&(e.TgZ(0,"th",19),e._uU(1,"is visible"),e.qZA())}function k(o,c){if(1&o&&e._UZ(0,"fa-icon",23),2&o){const r=e.oxw(2);e.Q6J("icon",r.faCheckDouble)}}function R(o,c){if(1&o&&e._UZ(0,"fa-icon",24),2&o){const r=e.oxw(2);e.Q6J("icon",r.faCheckCircle)}}function J(o,c){if(1&o&&(e.TgZ(0,"td",20),e.YNc(1,k,1,1,"fa-icon",21),e.YNc(2,R,1,1,"fa-icon",22),e.qZA()),2&o){const r=c.$implicit;e.xp6(1),e.Q6J("ngIf",r.isVisible),e.xp6(1),e.Q6J("ngIf",!r.isVisible)}}function B(o,c){1&o&&(e.TgZ(0,"th",19),e._uU(1,"produt name"),e.qZA())}function Y(o,c){if(1&o&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&o){const r=c.$implicit;e.xp6(1),e.Oqu(r.productName)}}function d(o,c){1&o&&(e.TgZ(0,"th",19),e._uU(1,"price"),e.qZA())}function h(o,c){if(1&o&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&o){const r=c.$implicit;e.xp6(1),e.Oqu(r.price)}}function s(o,c){1&o&&(e.TgZ(0,"th",19),e._uU(1,"category"),e.qZA())}function a(o,c){if(1&o&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&o){const r=c.$implicit;e.xp6(1),e.Oqu(r.category)}}function _(o,c){1&o&&(e.TgZ(0,"th",25),e._uU(1,"actions"),e.qZA())}const m=function(o){return[o]};function P(o,c){if(1&o){const r=e.EpF();e.TgZ(0,"td",26)(1,"button",27),e.NdJ("click",function(){const V=e.CHM(r).$implicit;return e.oxw().delete(V)}),e._UZ(2,"fa-icon",28),e.qZA(),e.TgZ(3,"button",29),e._UZ(4,"fa-icon",28),e.qZA()()}if(2&o){const r=c.$implicit,f=e.oxw();e.xp6(2),e.Q6J("icon",f.faTrashAlt),e.xp6(1),e.Q6J("routerLink",e.VKq(3,m,"/products/"+r.id)),e.xp6(1),e.Q6J("icon",f.faEdit)}}function A(o,c){1&o&&e._UZ(0,"tr",30)}function N(o,c){1&o&&e._UZ(0,"tr",31)}const O=function(){return["/products/add"]},Q=[{path:"",component:(()=>{class o{constructor(r){this.productService=r,this.products=[],this.resultsLength=0,this.isLoadingResults=!0,this.isRateLimitReached=!1,this.displayedColumns=["isVisible","productName","price","category","actions"],this.faCoffee=U.SvR,this.faTrashAlt=U.I7k,this.faEdit=U.IwR,this.faCheckDouble=U.FFp,this.faCheckCircle=U.f8k}ngOnInit(){this.getAllProducts()}getProduct(){this.productService.getProduct(1).subscribe(r=>this.product=Object.assign({},r))}getAllProducts(){this.productService.getAllProducts().subscribe(r=>{var f;this.products=[...r],this.resultsLength=null===(f=this.products)||void 0===f?void 0:f.length})}delete(r){console.log(r.id)}edit(r){console.log(r.id)}addProduct(){}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(C.M))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-product"]],decls:27,vars:7,consts:[[1,"p-5","pt-0"],[1,"example-container"],[1,"header-content"],[1,"list-title"],[1,"btn","btn-primary","mb-3","mt-2","btn-add",3,"routerLink"],[1,"example-table-container"],["mat-table","","matSort","","matSortActive","productName","matSortDisableClear","","matSortDirection","desc",1,"example-table",3,"dataSource"],["matColumnDef","isVisible"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","productName"],["matColumnDef","price"],["matColumnDef","category"],["matColumnDef","actions"],["mat-header-cell","","class","text-end action-title",4,"matHeaderCellDef"],["mat-cell","","class","text-end",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of GitHub search results",3,"length","pageSize"],["mat-header-cell",""],["mat-cell",""],["class","active",3,"icon",4,"ngIf"],["class","inactive",3,"icon",4,"ngIf"],[1,"active",3,"icon"],[1,"inactive",3,"icon"],["mat-header-cell","",1,"text-end","action-title"],["mat-cell","",1,"text-end"],["mat-icon-button","","mat-button","",1,"action-button",3,"click"],[3,"icon"],["mat-icon-button","","mat-button","",1,"action-button",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(r,f){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4,"Formik"),e.qZA(),e.TgZ(5,"button",4),e._uU(6,"Add Product"),e.qZA()(),e.TgZ(7,"div",5)(8,"table",6),e.ynx(9,7),e.YNc(10,w,2,0,"th",8),e.YNc(11,J,3,2,"td",9),e.BQk(),e.ynx(12,10),e.YNc(13,B,2,0,"th",8),e.YNc(14,Y,2,1,"td",9),e.BQk(),e.ynx(15,11),e.YNc(16,d,2,0,"th",8),e.YNc(17,h,2,1,"td",9),e.BQk(),e.ynx(18,12),e.YNc(19,s,2,0,"th",8),e.YNc(20,a,2,1,"td",9),e.BQk(),e.ynx(21,13),e.YNc(22,_,2,0,"th",14),e.YNc(23,P,5,5,"td",15),e.BQk(),e.YNc(24,A,1,0,"tr",16),e.YNc(25,N,1,0,"tr",17),e.qZA()(),e._UZ(26,"mat-paginator",18),e.qZA()()),2&r&&(e.xp6(5),e.Q6J("routerLink",e.DdM(6,O)),e.xp6(3),e.Q6J("dataSource",f.products),e.xp6(16),e.Q6J("matHeaderRowDef",f.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",f.displayedColumns),e.xp6(1),e.Q6J("length",f.resultsLength)("pageSize",30))},directives:[y.rH,Z.BZ,D.YE,Z.w1,Z.fO,Z.ge,Z.Dz,Z.ev,l.O5,E.BN,q.lW,Z.as,Z.XQ,Z.nj,Z.Gk,L.NW],styles:['[_nghost-%COMP%]{height:100%}.container[_ngcontent-%COMP%]{width:80%;margin:auto}.example-container[_ngcontent-%COMP%]{position:relative;background-color:#fff;color:#000000de;transition:box-shadow .3s cubic-bezier(.4,0,.2,1) 0ms;overflow:hidden;border-radius:6px;box-shadow:#32325d05 0 2px 5px -1px,#0000000d 0 1px 3px -1px;background-image:none;margin-bottom:24px}.example-table-container[_ngcontent-%COMP%]{position:relative;min-height:200px;max-height:400px;overflow:auto}table[_ngcontent-%COMP%]{width:100%}.example-loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}.example-rate-limit-reached[_ngcontent-%COMP%]{max-width:360px;text-align:center}.cdk-column-price[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%]{max-width:64px}.mat-column-created[_ngcontent-%COMP%]{max-width:124px}fa-icon.ng-fa-icon[_ngcontent-%COMP%]{font-size:16px;padding:5px;cursor:pointer}.btn-add[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;outline:0px;border:0px;margin:12px 0 0;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;appearance:none;text-decoration:none;text-transform:none;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-weight:500;font-size:.8125rem;line-height:1.75;min-width:64px;padding:6px 16px;border-radius:4px;transition:background-color .25s cubic-bezier(.4,0,.2,1) 0ms,box-shadow .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;color:#fff;background-color:#376fd0;width:150px}.btn-add[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#264d91}.list-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#000000de}.header-content[_ngcontent-%COMP%]{padding:16px 0 0 16px;display:flex;flex-direction:column;background:white;border-radius:6px}.mat-header-cell[_ngcontent-%COMP%]{font-size:13px;color:#000000de;font-family:Inter;font-weight:500}.mat-cell[_ngcontent-%COMP%]{font-size:13px;color:#000000de;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-weight:400}.active[_ngcontent-%COMP%]{color:green}.inactive[_ngcontent-%COMP%]{color:red}.action-button[_ngcontent-%COMP%]{color:gray}.action-title[_ngcontent-%COMP%]{padding-right:36px!important}']}),o})()},{path:"add",component:v.e},{path:"edit/:id",component:v.e},{path:":id",component:g}];let z=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[y.Bz.forChild(Q)],y.Bz]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[C.M,x.H],imports:[[l.ez,i.UX,z,t.q,b.IJ,E.uH]]}),o})()},5753:(I,T,n)=>{n.d(T,{e:()=>l});var l=(()=>{return(i=l||(l={})).PEXPLOITATION="les produits d'exploitation",i.PFINANCIERS="les produits financiers ",i.PEXCEPTIONNELS="les produits exceptionnels",i[i.PEXCEPTIONNELS_NUM=1]="PEXCEPTIONNELS_NUM",i[i.PEXPLOITATION_NUM=2]="PEXPLOITATION_NUM",i[i.PFINANCIERS_NUM=3]="PFINANCIERS_NUM",l;var i})()},7408:(I,T,n)=>{n.d(T,{H:()=>x});var l=n(2340),i=n(379),b=n(5e3),t=n(520);let x=(()=>{class C{constructor(v){this.http=v,this.categoryUrl=l.N.base_url+i.g.GetCategoryUrl,this.allCategorysUrl=l.N.base_url+i.g.GetAllCategorysUrl,this.createCategorysUrl=l.N.base_url+i.g.CreateCategorysUrl}getCategory(v){return this.http.get(this.categoryUrl)}getAllCategories(){return this.http.get(this.allCategorysUrl)}createCategory(v){return this.http.post(this.createCategorysUrl,v)}}return C.\u0275fac=function(v){return new(v||C)(b.LFG(t.eN))},C.\u0275prov=b.Yz7({token:C,factory:C.\u0275fac}),C})()}}]);