(self.webpackChunkny_times=self.webpackChunkny_times||[]).push([[906],{6906:function(t,e,i){"use strict";i.r(e),i.d(e,{HomePageModule:function(){return D}});var a=i(8583),n=i(216),o=i(7716),r=i(4069);function c(t,e){if(1&t&&o._UZ(0,"img",9),2&t){const t=o.oxw();o.s9C("src",t.imageDisplayed.url,o.LSH),o.s9C("alt",t.imageDisplayed.copyright)}}function s(t,e){1&t&&o._UZ(0,"img",10)}function l(t,e){1&t&&o._UZ(0,"img",11)}function m(t,e){1&t&&o._UZ(0,"img",12)}function d(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",4),o.NdJ("click",function(){return o.CHM(t),o.oxw().showDetails()}),o.TgZ(1,"h3"),o._uU(2),o.qZA(),o.TgZ(3,"h5"),o._uU(4,"More details: "),o.TgZ(5,"a",13),o._uU(6),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=o.oxw();o.xp6(2),o.Oqu(t.articleAbstract),o.xp6(3),o.s9C("href",t.articleUrl,o.LSH),o.xp6(1),o.Oqu(t.articleUrl)}}let g=(()=>{class t{constructor(){this.image=[],this.bookmarked=!1,this.bookmarkClicked=new o.vpe,this.showDetailsClicked=!1}ngOnInit(){this.imageDisplayed=this.image?this.image.find(t=>"Standard Thumbnail"==t.format):null}toggleBookmark(){this.bookmarked=!this.bookmarked,this.bookmarkClicked.emit(this.index)}showDetails(){this.showDetailsClicked=!this.showDetailsClicked}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-article"]],inputs:{image:"image",title:"title",publicationDate:"publicationDate",index:"index",articleAbstract:"articleAbstract",articleUrl:"articleUrl",bookmarked:"bookmarked"},outputs:{bookmarkClicked:"bookmarkClicked"},decls:16,vars:12,consts:[[1,"list-item-container"],[1,"image-container"],[3,"src","alt",4,"ngIf","ngIfElse"],["noImage",""],[1,"article-info-container",3,"click"],[1,"bookmarkIcon",3,"click"],["src","../assets/Icons/icons8-bookmark.svg",4,"ngIf","ngIfElse"],["filled",""],["class","article-info-container",3,"click",4,"ngIf"],[3,"src","alt"],["src","../assets/Icons/noimage.png"],["src","../assets/Icons/icons8-bookmark.svg"],["src","../assets/Icons/icons8-bookmark-filled.svg"],["target","_blank",3,"href"]],template:function(t,e){if(1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.YNc(2,c,1,2,"img",2),o.YNc(3,s,1,0,"ng-template",null,3,o.W1O),o.qZA(),o.TgZ(5,"div",4),o.NdJ("click",function(){return e.showDetails()}),o.TgZ(6,"h2"),o._uU(7),o.qZA(),o.TgZ(8,"h4"),o._uU(9),o.ALo(10,"date"),o.qZA(),o.qZA(),o.TgZ(11,"div",5),o.NdJ("click",function(){return e.toggleBookmark()}),o.YNc(12,l,1,0,"img",6),o.YNc(13,m,1,0,"ng-template",null,7,o.W1O),o.qZA(),o.YNc(15,d,7,3,"div",8),o.qZA()),2&t){const t=o.MAs(4),i=o.MAs(14);o.ekj("list-item-container-opened",e.showDetailsClicked),o.xp6(2),o.Q6J("ngIf",e.imageDisplayed)("ngIfElse",t),o.xp6(5),o.Oqu(e.title),o.xp6(2),o.Oqu(o.xi3(10,9,e.publicationDate,"EEEE, MMMM d, y AT h:mm a")),o.xp6(3),o.Q6J("ngIf",!e.bookmarked)("ngIfElse",i),o.xp6(3),o.Q6J("ngIf",e.showDetailsClicked)}},directives:[a.O5],pipes:[a.uU],styles:[".list-item-container[_ngcontent-%COMP%]{width:calc(100% - 40px);border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,.1);height:125px;margin-left:20px;margin-right:20px;padding:25px 20px;position:relative}.list-item-container[_ngcontent-%COMP%]   .bookmarkIcon[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;cursor:pointer}.list-item-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:75px;width:75px;overflow:hidden;display:inline-block;vertical-align:middle}.list-item-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 rgba(0,0,0,.5);border-radius:10px}.list-item-container[_ngcontent-%COMP%]   .article-info-container[_ngcontent-%COMP%]{width:calc(100% - 130px);display:inline-block;padding:0 15px;vertical-align:top}.list-item-container[_ngcontent-%COMP%]:not(:first-child){margin-top:20px}.list-item-container[_ngcontent-%COMP%]:last-child{margin-bottom:20px}.list-item-container-opened[_ngcontent-%COMP%]{height:auto;box-shadow:0 4px 12px rgba(0,0,0,.2)}"]}),t})();function p(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"app-article",4),o.NdJ("bookmarkClicked",function(e){return o.CHM(t),o.oxw(2).bookmarkArticle(e)}),o.qZA()}if(2&t){const t=e.$implicit,i=e.index;o.Q6J("image",null==t?null:t.multimedia)("title",null==t?null:t.title)("publicationDate",null==t?null:t.published_date)("index",i)("articleAbstract",t.abstract)("articleUrl",t.short_url)("bookmarked",t.bookmarked)}}function h(t,e){if(1&t&&(o.TgZ(0,"div",2),o.YNc(1,p,1,7,"app-article",3),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.listOfArticles)}}function u(t,e){1&t&&(o.TgZ(0,"div",5),o.TgZ(1,"div",6),o._UZ(2,"img",7),o.qZA(),o.TgZ(3,"div",8),o._uU(4," Empty List "),o.qZA(),o.qZA())}let k=(()=>{class t{constructor(t){this.NyTimesService=t,this.listOfArticles=[],this.Articles=[],this.bookmarkedList=[],this.savedBookmarksArray=[],this.savedBookmarksString=[]}ngOnInit(){let t=this;this.NyTimesService.bookmarks.subscribe(t=>{this.bookmarkedList=t||[]}),this.NyTimesService.articles.subscribe(e=>{e&&(t.Articles=e.results,this.bookMarkArticles(t.Articles))})}bookMarkArticles(t){this.bookmarkedList&&this.bookmarkedList.length>0?(t.forEach(t=>{let e=this.bookmarkedList.find(e=>t.title==e.title);t.bookmarked=!!e}),this.listOfArticles=t):this.listOfArticles=t}bookmarkArticle(t){if(this.bookmarkedList.find(e=>this.Articles[t].title==e.title)){let t=this.bookmarkedList.findIndex(t=>{});this.bookmarkedList.splice(t,1)}else this.bookmarkedList.push(this.Articles[t])}ngOnDestroy(){this.NyTimesService.bookmarks.next(this.bookmarkedList),this.NyTimesService.articles.next(void 0)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.Z))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-articles-list"]],decls:3,vars:2,consts:[["class","main-container",4,"ngIf","ngIfElse"],["emptyState",""],[1,"main-container"],[3,"image","title","publicationDate","index","articleAbstract","articleUrl","bookmarked","bookmarkClicked",4,"ngFor","ngForOf"],[3,"image","title","publicationDate","index","articleAbstract","articleUrl","bookmarked","bookmarkClicked"],[1,"empty-state-container"],[1,"empty-state-img"],["src","../assets/Icons/empty-state.jpeg"],[1,"empty-state-desc"]],template:function(t,e){if(1&t&&(o.YNc(0,h,2,1,"div",0),o.YNc(1,u,5,0,"ng-template",null,1,o.W1O)),2&t){const t=o.MAs(2);o.Q6J("ngIf",e.listOfArticles.length>0)("ngIfElse",t)}},directives:[a.O5,a.sg,g],styles:[".main-container{width:100%;height:100%;overflow-y:scroll;padding-top:82px}.empty-state-container{text-align:center;padding-top:35vh;width:100%;height:100%}.empty-state-container .empty-state-img{margin-bottom:10px}.empty-state-container .empty-state-img img{width:200px;height:200px;border-radius:70px}.empty-state-container .empty-state-desc{color:#a9a9a9;margin-bottom:10px}"],encapsulation:2}),t})();var b=i(6066),f=i(9992),x=i(665),v=i(667);function Z(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"mat-list-option",17),o.NdJ("click",function(){o.CHM(t);const e=o.oxw();return o.MAs(2).close(),e.goToArticles()}),o._uU(1),o.qZA()}if(2&t){const t=e.$implicit;o.Q6J("value",t),o.xp6(1),o.hij(" ",t," ")}}const A=function(){return["/homePage/bookmarked"]};let y=(()=>{class t{constructor(t,e,i){this.NyTimesService=t,this.router=e,this.location=i,this.sectionsList=["arts","automobiles","books","business","fashion","food","health","home","insider","magazine","movies","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","t-magazine","travel","upshot","us","world"],this.selectedTitle="Home"}ngOnInit(){this.NyTimesService.getTopStories(),this.route=this.location.path(),this.headerTitleValue(),this.router.events.subscribe(t=>{this.route=this.location.path(),this.headerTitleValue()})}goToArticles(){"/homePage/articles"!=this.route&&(this.router.navigate(["/homePage/articles"]),this.NyTimesService.getTopStories(this.selectedItem))}headerTitleValue(){"/homePage/bookmarked"==this.route?this.selectedTitle="Bookmarked Articles":"/homePage/articles"==this.route&&(this.selectedTitle=this.selectedItem?this.selectedItem:"Home")}selectItem(t){"/homePage/articles"!=this.route&&this.router.navigate(["/homePage/articles"]),this.selectedTitle=t[0],this.NyTimesService.getTopStories(this.selectedTitle)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.Z),o.Y36(n.F0),o.Y36(a.Ye))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home-page"]],decls:25,vars:10,consts:[[1,"nytimes-container",3,"hasBackdrop","backdropClick"],[3,"mode","position"],["drawer",""],[3,"multiple","ngModel","ngModelChange"],["sectionsSelection",""],[3,"value","click",4,"ngFor","ngForOf"],["SideClass","navbar navbar-expand-lg navbar-dark bg-primary",3,"containerInside"],["href","#",1,"navbar-brand"],[1,"title"],[1,"navbar-nav","ml-auto"],[1,"nav-item","active"],["mdbWavesEffect","",1,"nav-link","waves-light","mr-20",3,"click"],["src","./assets/Icons/icons8-home.svg",1,"nav-link-icon"],["mdbWavesEffect","",1,"nav-link","waves-light","mr-20",3,"routerLink"],["src","./assets/Icons/icons8-bookmark.svg",1,"nav-link-icon"],["mdbWavesEffect","",1,"nav-link","waves-light",3,"click"],["src","./assets/Icons/icons8-menu.svg"],[3,"value","click"]],template:function(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"mat-drawer-container",0),o.NdJ("backdropClick",function(){return o.CHM(t),o.MAs(2).close()}),o.TgZ(1,"mat-drawer",1,2),o.TgZ(3,"mat-selection-list",3,4),o.NdJ("ngModelChange",function(t){return e.selectedItem=t})("ngModelChange",function(t){return e.selectItem(t)}),o.YNc(5,Z,2,2,"mat-list-option",5),o.qZA(),o.qZA(),o.TgZ(6,"mat-drawer-content"),o.TgZ(7,"mdb-navbar",6),o.TgZ(8,"mdb-navbar-brand"),o.TgZ(9,"a",7),o._uU(10,"NY TIMES / "),o.TgZ(11,"span",8),o._uU(12),o.qZA(),o.qZA(),o.qZA(),o.TgZ(13,"links"),o.TgZ(14,"ul",9),o.TgZ(15,"li",10),o.TgZ(16,"a",11),o.NdJ("click",function(){return e.goToArticles()}),o._UZ(17,"img",12),o.qZA(),o.qZA(),o.TgZ(18,"li",10),o.TgZ(19,"a",13),o._UZ(20,"img",14),o.qZA(),o.qZA(),o.TgZ(21,"li",10),o.TgZ(22,"a",15),o.NdJ("click",function(){return o.CHM(t),o.MAs(2).toggle()}),o._UZ(23,"img",16),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(24,"router-outlet"),o.qZA(),o.qZA()}2&t&&(o.Q6J("hasBackdrop",!0),o.xp6(1),o.Q6J("mode","push")("position","end"),o.xp6(2),o.Q6J("multiple",!1)("ngModel",e.selectedItem),o.xp6(2),o.Q6J("ngForOf",e.sectionsList),o.xp6(2),o.Q6J("containerInside",!1),o.xp6(5),o.Oqu(e.selectedTitle),o.xp6(7),o.Q6J("routerLink",o.DdM(9,A)))},directives:[b.kh,b.jA,f.Ub,x.JJ,x.On,a.sg,b.LW,v.SB,v.R_,v.ZR,v.b6,n.yS,n.lC,f.vS],styles:[".navbar{position:fixed!important;z-index:999999}.title{text-transform:capitalize}.nav-link{cursor:pointer}.nav-link .nav-link-icon{width:26px;height:26px}.nytimes-container{width:100vw;height:100vh}mat-drawer-content{display:flex;flex-direction:column;align-items:flex-start}.mr-20{margin-right:20px}.mat-drawer{width:300px}.mat-drawer .mat-selection-list{background-color:#0d6efd}.mat-drawer .mat-selection-list .list-item-selected{background:rgba(0,0,0,.2)!important}.mat-drawer .mat-selection-list .mat-list-item .mat-list-item-content .mat-list-text{color:#fff}.mat-drawer .mat-selection-list .mat-list-item .mat-list-item-content .mat-pseudo-checkbox{display:none!important}"],encapsulation:2}),t})();var C=i(6237),_=i(2458);const w=["*",[["mat-card-footer"]]],M=["*","mat-card-footer"];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.lG2({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.lG2({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),t})(),P=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(C.Qb,8))},t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:M,decls:2,vars:0,template:function(t,e){1&t&&(o.F$t(w),o.Hsn(0),o.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[_.BQ],_.BQ]}),t})();function I(t,e){if(1&t&&(o.TgZ(0,"div",5),o.TgZ(1,"mat-card",6),o._UZ(2,"img",7),o.TgZ(3,"mat-card-content"),o.TgZ(4,"h2"),o._uU(5),o.qZA(),o.TgZ(6,"h4"),o._uU(7),o.ALo(8,"date"),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t){const t=e.$implicit,i=o.oxw(2);o.xp6(2),o.Q6J("src",i.getimageSource(t),o.LSH)("alt",i.getimageCopyRight(t)),o.xp6(3),o.Oqu(t.title),o.xp6(2),o.Oqu(o.xi3(8,4,t.published_date,"EEEE, MMMM d, y AT h:mm a"))}}function N(t,e){if(1&t&&(o.TgZ(0,"div",2),o.TgZ(1,"div",3),o.YNc(2,I,9,7,"div",4),o.qZA(),o.qZA()),2&t){const t=o.oxw();o.xp6(2),o.Q6J("ngForOf",t.bookmarkedArticles)}}function S(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",8),o.TgZ(1,"div",9),o._UZ(2,"img",10),o.qZA(),o.TgZ(3,"div",11),o._uU(4," Nothing bookmarked yet "),o.qZA(),o.TgZ(5,"div",12),o.TgZ(6,"button",13),o.NdJ("click",function(){return o.CHM(t),o.oxw().goBackToArticles()}),o._uU(7,"Home"),o.qZA(),o.qZA(),o.qZA()}}const U=[{path:"",component:y,children:[{path:"",pathMatch:"full",redirectTo:"articles"},{path:"articles",component:k},{path:"bookmarked",component:(()=>{class t{constructor(t,e){this.NyTimesService=t,this.router=e,this.bookmarkedArticles=[]}ngOnInit(){this.NyTimesService.bookmarks.subscribe(t=>{this.bookmarkedArticles=t||void 0})}getimageSource(t){return t.multimedia.find(t=>"Normal"==t.format).url}getimageCopyRight(t){return t.multimedia.find(t=>"Normal"==t.format).copyright}goBackToArticles(){this.router.navigate(["/homePage/articles"])}ngOnDestroy(){this.bookmarkedArticles&&this.NyTimesService.bookmarks.next(this.bookmarkedArticles)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.Z),o.Y36(n.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-bookmark-page"]],decls:3,vars:2,consts:[["class","bookmark-container",4,"ngIf","ngIfElse"],["emptyState",""],[1,"bookmark-container"],[1,"row","sub-container"],["class","col-4 bookmarked-article",4,"ngFor","ngForOf"],[1,"col-4","bookmarked-article"],[1,"article-card"],["mat-card-image","",3,"src","alt"],[1,"empty-state-container"],[1,"empty-state-img"],["src","../assets/Icons/empty-state.jpeg"],[1,"empty-state-desc"],[1,"go-back-button"],[1,"go-back-style",3,"click"]],template:function(t,e){if(1&t&&(o.YNc(0,N,3,1,"div",0),o.YNc(1,S,8,0,"ng-template",null,1,o.W1O)),2&t){const t=o.MAs(2);o.Q6J("ngIf",e.bookmarkedArticles&&e.bookmarkedArticles.length>0)("ngIfElse",t)}},directives:[a.O5,a.sg,P,O,T],pipes:[a.uU],styles:[".bookmark-container[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:scroll;padding-top:82px}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]{margin:0 10px}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .bookmarked-article[_ngcontent-%COMP%]{padding:5px;margin:0;height:400px}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .bookmarked-article[_ngcontent-%COMP%]   .article-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%;border:16px solid rgba(0,0,0,.14);max-height:200px;-o-object-fit:fill;object-fit:fill;box-sizing:content-box}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .bookmarked-article[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{height:100%}.bookmark-container[_ngcontent-%COMP%]   .sub-container[_ngcontent-%COMP%]   .bookmarked-article[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]{height:100px}.empty-state-container[_ngcontent-%COMP%]{text-align:center;padding-top:35vh}.empty-state-container[_ngcontent-%COMP%]   .empty-state-img[_ngcontent-%COMP%]{margin-bottom:10px}.empty-state-container[_ngcontent-%COMP%]   .empty-state-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:70px}.empty-state-container[_ngcontent-%COMP%]   .empty-state-desc[_ngcontent-%COMP%]{color:#a9a9a9;margin-bottom:10px}.empty-state-container[_ngcontent-%COMP%]   .go-back-button[_ngcontent-%COMP%]   .go-back-style[_ngcontent-%COMP%]{width:150px;height:40px;background-color:grey;color:#fff;font-size:20px;border:none;border-radius:5px;box-shadow:0 4px 12px rgba(0,0,0,.5)}"]}),t})()}]}];let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[n.Bz.forChild(U)],n.Bz]}),t})();var E=i(9344);let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t,bootstrap:[y]}),t.\u0275inj=o.cJS({providers:[r.Z,{provide:E._W,useClass:E._W}],imports:[[a.ez,n.Bz,v.W4,v.x3,v.Fq,v.yi.forRoot(),E.Rh.forRoot({positionClass:"toast-bottom-right"}),b.SJ,f.ie,x.u5,J,q]]}),t})()}}]);