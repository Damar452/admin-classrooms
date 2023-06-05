"use strict";(self.webpackChunkadmin_classrooms=self.webpackChunkadmin_classrooms||[]).push([[789],{6789:(w,m,i)=>{i.r(m),i.d(m,{AuthModule:()=>F});var a=i(6895),c=i(2214),l=i(433),g=i(3963),o=i(8256),u=i(1776),d=i(8826),p=i(2962),f=i(6290);let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-footer"]],decls:4,vars:0,consts:[[1,"footer"],[1,"footer__content"],[1,"footer__content__text"]],template:function(n,r){1&n&&(o.TgZ(0,"footer",0)(1,"div",1)(2,"p",2),o._uU(3,"\xa9 2023 Admin Classrooms. All rights reserved."),o.qZA()()())},styles:["[_ngcontent-%COMP%]:root{--main-color: #22BAA0;--color-dark: #34425A;--color-white: white;--color-grey: grey;--color-grey-soft: rgb(181, 180, 180);--color-blue: #11a8c3;--color-red: rgb(237, 51, 51);--soft-background: #f1f4f9;--text-grey: #74767d}.footer[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:20px;position:fixed;right:0;bottom:0;width:100%}.footer__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}@media (max-width: 768px){.footer[_ngcontent-%COMP%]{padding:10px}.footer__content[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}"]}),t})();function x(t,e){1&t&&o.GkF(0)}function h(t,e){1&t&&o.GkF(0)}const b=function(){return{control:"email"}},C=function(){return{control:"password"}};function v(t,e){if(1&t){const n=o.EpF();o.TgZ(0,"form",8),o.NdJ("ngSubmit",function(){o.CHM(n);const s=o.oxw();return o.KtG(s.onLogin(s.loginForm.value))}),o.TgZ(1,"div",9)(2,"label",10),o._uU(3,"Email"),o.qZA(),o._UZ(4,"input",11),o.YNc(5,x,1,0,"ng-container",12),o.qZA(),o.TgZ(6,"div",9)(7,"label",13),o._uU(8,"Password"),o.qZA(),o._UZ(9,"input",14),o.YNc(10,h,1,0,"ng-container",12),o.qZA(),o.TgZ(11,"div",15)(12,"button",16),o._uU(13,"Cancel"),o.qZA(),o.TgZ(14,"button",17),o._uU(15,"Login"),o.qZA()()()}if(2&t){const n=o.oxw(),r=o.MAs(10);o.Q6J("formGroup",n.loginForm),o.xp6(5),o.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",o.DdM(6,b)),o.xp6(5),o.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",o.DdM(7,C)),o.xp6(4),o.Q6J("disabled",n.loginForm.invalid)}}function y(t,e){if(1&t&&(o.TgZ(0,"small",19),o._uU(1),o.ALo(2,"titlecase"),o.qZA()),2&t){const n=o.oxw().control;o.xp6(1),o.hij("The ",o.lcZ(2,1,n)," field is required")}}function A(t,e){if(1&t&&o.YNc(0,y,3,3,"small",18),2&t){const n=e.control,r=o.oxw();o.Q6J("ngIf",r.getValidation(n,"required"))}}const Z=[{path:"",component:(()=>{class t{constructor(n,r,s,O,L){this.alertService=n,this.formBuild=r,this.authService=s,this.localStorageService=O,this.router=L}ngOnInit(){this.setForm()}onLogin(n){this.authService.loginUser(n).subscribe(r=>{r?(this.localStorageService.setData(g.M6,r),this.router.navigate(["/"])):this.alertService.notifyAlert("\xa1Email or password was not correct!","warning")})}getValidation(n,r){const s=this.loginForm.get(n);return s?.touched&&s.hasError(r)}setForm(){this.loginForm=this.formBuild.group({email:["",[l.kI.required]],password:["",[l.kI.required]]})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(u.m),o.Y36(l.qu),o.Y36(d.e),o.Y36(p.n),o.Y36(c.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:12,vars:2,consts:[[3,"isLogged"],[1,"container"],[1,"body"],[1,"body__title-box"],[1,"body__title-box__title"],[1,"body__title-box__subtitle"],[3,"formGroup","ngSubmit",4,"ngIf"],["errorMessage",""],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username",1,"form-group__label"],["type","text","id","username","formControlName","email",1,"red-input"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["for","password",1,"form-group__label"],["type","password","id","password","formControlName","password",1,"red-input"],[1,"form-group","form-group--buttons"],["type","reset",1,"btn","btn-secondary"],[1,"btn","btn-primary",3,"disabled"],["class","text-error",4,"ngIf"],[1,"text-error"]],template:function(n,r){1&n&&(o._UZ(0,"app-header",0),o.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),o._uU(5,"Log in"),o.qZA(),o.TgZ(6,"h4",5),o._uU(7,"Please enter username and password"),o.qZA()(),o.YNc(8,v,16,8,"form",6),o.qZA()(),o.YNc(9,A,1,1,"ng-template",null,7,o.W1O),o._UZ(11,"app-footer")),2&n&&(o.Q6J("isLogged",!1),o.xp6(8),o.Q6J("ngIf",r.loginForm))},dependencies:[a.O5,a.tP,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,f.G,_,a.rS],styles:[".container[_ngcontent-%COMP%]{display:flex;margin-top:150px;align-items:center;flex-direction:column;height:70vh}.body[_ngcontent-%COMP%]{border:1px solid rgb(226,225,225);box-shadow:0 2px 50px #0000001a;width:25%;padding:30px;border-radius:3px}.body__title-box[_ngcontent-%COMP%]{text-align:center}.body__title-box__title[_ngcontent-%COMP%]{margin-bottom:15px;color:var(--main-color)}.body__title-box__subtitle[_ngcontent-%COMP%]{margin-bottom:20px;color:var(--color-grey)}@media (max-width: 768px){.body[_ngcontent-%COMP%]{width:80%}}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(Z),c.Bz]}),t})();var T=i(1677);let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[a.ez,M,l.UX,T.K]}),t})()}}]);