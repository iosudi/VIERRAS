"use strict";(self.webpackChunkVIERRAS_=self.webpackChunkVIERRAS_||[]).push([[595],{9679:(m,h,e)=>{e.d(h,{F:()=>s});var n=e(8926);let s=(()=>{class _{transform(C,i){let f=localStorage.getItem("currentCurrency");if(isNaN(C)||isNaN(i))return"0";if(C&&i){let u=parseFloat((C*i).toFixed(2));return"EGP"===f?u.toLocaleString("en-US",{style:"currency",currency:"EGP",currencyDisplay:"symbol"}).replace("EGP","E\xa3"):u.toLocaleString("en-US","USD"===f?{style:"currency",currency:"USD",currencyDisplay:"symbol"}:{style:"currency",currency:"EGP",currencyDisplay:"symbol"})}return"0"}static#n=this.\u0275fac=function(i){return new(i||_)};static#t=this.\u0275pipe=n.Yjl({name:"currencyExchange",type:_,pure:!0})}return _})()},5240:(m,h,e)=>{e.d(h,{s:()=>C});var n=e(8645),s=e(5516),_=e(8926),P=e(9862);let C=(()=>{class i{constructor(o){this._HttpClient=o,this.productDetails=new n.x,this.productDetails$=this.productDetails.asObservable()}getCategories(){return this._HttpClient.get(s.N.baseURL+"api/v1/categories")}getPaginateProducts(o=1){return this._HttpClient.get(s.N.baseURL+`api/v1/products?page=${o}&limit=9`)}getAllProducts(o=1){return this._HttpClient.get(s.N.baseURL+`api/v1/products?page=${o}`)}getSpecificProduct(o){return this._HttpClient.get(s.N.baseURL+`api/v1/products/${o}`)}getSpecificCategory(o){return this._HttpClient.get(s.N.baseURL+`api/v1/categories/${o}`)}static#n=this.\u0275fac=function(u){return new(u||i)(_.LFG(P.eN))};static#t=this.\u0275prov=_.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},2417:(m,h,e)=>{e.d(h,{C:()=>M});var n=e(8926),s=e(7422),_=e(7409),P=e(3999),C=e(7798),i=e(5240),f=e(6814),o=e(101),u=e(8608),v=e(6223);let T=(()=>{class a{static#n=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275cmp=n.Xpm({type:a,selectors:[["app-phone-nav"]],decls:19,vars:0,consts:[[1,"d-flex","justify-content-start"],[1,"container-fluid","mx-0","py-2"],[1,"px-0","mb-0","d-flex","justify-content-around","align-items-center"],["role","button","routerLink","/home","routerLinkActive","active-link",1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"fa-solid","mb-1","fa-house-chimney"],[1,"fw-medium"],["role","button","routerLink","/shop","routerLinkActive","active-link",1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"fa-solid","mb-1","fa-bag-shopping"],["role","button","routerLink","/blog","routerLinkActive","active-link",1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"fa-solid","mb-1","fa-blog"],["role","button","routerLink","/contact","routerLinkActive","active-link",1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"fa-solid","mb-1","fa-headset"]],template:function(l,c){1&l&&(n.TgZ(0,"nav",0)(1,"div",1)(2,"ul",2)(3,"li",3),n._UZ(4,"i",4),n.TgZ(5,"a",5),n._uU(6,"Home"),n.qZA()(),n.TgZ(7,"li",6),n._UZ(8,"i",7),n.TgZ(9,"a",5),n._uU(10,"Shop"),n.qZA()(),n.TgZ(11,"li",8),n._UZ(12,"i",9),n.TgZ(13,"a",5),n._uU(14,"Blog"),n.qZA()(),n.TgZ(15,"li",10),n._UZ(16,"i",11),n.TgZ(17,"a",5),n._uU(18,"Contact"),n.qZA()()()()())},dependencies:[o.rH,o.Od],styles:["nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;width:100%;background:var(--blur-background);-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);border-radius:30px 30px 0 0;z-index:5}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--primary-color);font-size:18px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active-link[_ngcontent-%COMP%]{color:var(--brand-color)!important}@media (max-width: 820px){nav[_ngcontent-%COMP%]{border-radius:15px 15px 0 0}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:18px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:23px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active-link[_ngcontent-%COMP%]{color:var(--brand-color)!important}}"]})}return a})();var x=e(9679);let b=(()=>{class a{transform(t,l){return t.filter(c=>c.title.toLowerCase().includes(l.toLowerCase())).slice(0,8)}static#n=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275pipe=n.Yjl({name:"search",type:a,pure:!0})}return a})();const E=["menu"],O=["menuTrigger"],Z=["navbar"],g=function(a){return["/product-details",a]};function p(a,y){if(1&a&&(n.TgZ(0,"div",36)(1,"div",37),n._UZ(2,"img",38),n.qZA(),n.TgZ(3,"div",39)(4,"h5",40),n._uU(5),n.qZA(),n.TgZ(6,"div",41)(7,"span",42),n._uU(8),n.ALo(9,"currencyExchange"),n.qZA(),n._UZ(10,"button",43),n.qZA()()()),2&a){const t=y.$implicit,l=n.oxw();n.Q6J("routerLink",n.VKq(8,g,t.id)),n.xp6(2),n.s9C("alt",t.title),n.Q6J("src",t.images[0],n.LSH),n.xp6(3),n.hij(" ",t.title," "),n.xp6(3),n.hij(" ",n.xi3(9,5,t.price,l.exchangeRate)," ")}}function r(a,y){1&a&&(n.TgZ(0,"div",44,45)(2,"div",46)(3,"div",47)(4,"h4",48),n._uU(5),n.ALo(6,"translate"),n.qZA(),n.TgZ(7,"ul",49)(8,"li"),n._uU(9),n.ALo(10,"translate"),n.qZA(),n.TgZ(11,"li"),n._uU(12),n.ALo(13,"translate"),n.qZA(),n.TgZ(14,"li"),n._uU(15),n.ALo(16,"translate"),n.qZA(),n.TgZ(17,"li"),n._uU(18),n.ALo(19,"translate"),n.qZA()()(),n.TgZ(20,"div",47)(21,"h4",48),n._uU(22),n.ALo(23,"translate"),n.qZA(),n.TgZ(24,"ul",49)(25,"li"),n._uU(26),n.ALo(27,"translate"),n.qZA(),n.TgZ(28,"li"),n._uU(29),n.ALo(30,"translate"),n.qZA(),n.TgZ(31,"li"),n._uU(32),n.ALo(33,"translate"),n.qZA(),n.TgZ(34,"li"),n._uU(35),n.ALo(36,"translate"),n.qZA()()(),n.TgZ(37,"div",47)(38,"h4",48),n._uU(39),n.ALo(40,"translate"),n.qZA(),n.TgZ(41,"ul",49)(42,"li"),n._uU(43),n.ALo(44,"translate"),n.qZA(),n.TgZ(45,"li"),n._uU(46),n.ALo(47,"translate"),n.qZA(),n.TgZ(48,"li"),n._uU(49),n.ALo(50,"translate"),n.qZA()()()()()),2&a&&(n.xp6(5),n.hij(" ",n.lcZ(6,14,"navItems.megaMenu.menFashion")," "),n.xp6(4),n.hij(" ",n.lcZ(10,16,"navItems.megaMenu.clothing")," "),n.xp6(3),n.hij(" ",n.lcZ(13,18,"navItems.megaMenu.shoes")," "),n.xp6(3),n.hij(" ",n.lcZ(16,20,"navItems.megaMenu.accessories")," "),n.xp6(3),n.hij(" ",n.lcZ(19,22,"navItems.megaMenu.bags")," "),n.xp6(4),n.hij(" ",n.lcZ(23,24,"navItems.megaMenu.womenFashion")," "),n.xp6(4),n.hij(" ",n.lcZ(27,26,"navItems.megaMenu.clothing")," "),n.xp6(3),n.hij(" ",n.lcZ(30,28,"navItems.megaMenu.shoes")," "),n.xp6(3),n.hij(" ",n.lcZ(33,30,"navItems.megaMenu.accessories")," "),n.xp6(3),n.hij(" ",n.lcZ(36,32,"navItems.megaMenu.bags")," "),n.xp6(4),n.hij(" ",n.lcZ(40,34,"navItems.megaMenu.electronics")," "),n.xp6(4),n.hij(" ",n.lcZ(44,36,"navItems.megaMenu.laptop")," "),n.xp6(3),n.hij(" ",n.lcZ(47,38,"navItems.megaMenu.pc")," "),n.xp6(3),n.hij(" ",n.lcZ(50,40,"navItems.megaMenu.mobile")," "))}let M=(()=>{class a{constructor(t,l,c,d,A,L){this._CartService=t,this._WishlistService=l,this.translate=c,this.renderer=d,this._ExchangeRateService=A,this._ProductsService=L,this.isSearchVisible=!1,this.exchangeRate=0,this.searchTerm="",this.products=[],this.isMenuVisible=!1,this.cartItems=0,this.wishlistItems=0,this.totalCartPrice=0}ngOnInit(){this._CartService.getCart().subscribe({next:t=>{this.cartItems=t.numOfCartItems,this.totalCartPrice=t.data.totalCartPrice},error:t=>{console.log(t)}}),this._WishlistService.getWishlist().subscribe({next:t=>{this.wishlistItems=t.data.length},error:t=>{console.log(t)}}),this._CartService.cartItems.subscribe({next:t=>{this.cartItems=t}}),this._CartService.cartTotalPrice.subscribe({next:t=>{this.totalCartPrice=t}}),this._WishlistService.wishlistItems.subscribe({next:t=>{this.wishlistItems=t}}),this._ExchangeRateService.exChangeRate.subscribe({next:t=>{this.exchangeRate=t},error:t=>{console.log(t)}}),this._ProductsService.getAllProducts().subscribe({next:t=>{this.products=t.data},error:t=>{console.log(t)}})}toggleMenu(){this.isMenuVisible=!this.isMenuVisible}hideMenu(){this.isMenuVisible=!1}showSearch(){this.isSearchVisible=!0,this.renderer.addClass(document.body,"no-scroll")}hideSearch(){this.isSearchVisible=!1,this.renderer.removeClass(document.body,"no-scroll")}onDocumentClick(t){this.isMenuVisible&&!this.menu.nativeElement.contains(t.target)&&!this.menuTrigger.nativeElement.contains(t.target)&&this.hideMenu()}onWindowScroll(){window.scrollY>0?this.renderer.addClass(this.navbar.nativeElement,"fixed-top"):this.renderer.removeClass(this.navbar.nativeElement,"fixed-top")}static#n=this.\u0275fac=function(l){return new(l||a)(n.Y36(s.N),n.Y36(_.M),n.Y36(P.sK),n.Y36(n.Qsj),n.Y36(C.U),n.Y36(i.s))};static#t=this.\u0275cmp=n.Xpm({type:a,selectors:[["app-client-nav"]],viewQuery:function(l,c){if(1&l&&(n.Gf(E,5),n.Gf(O,5),n.Gf(Z,5)),2&l){let d;n.iGM(d=n.CRH())&&(c.menu=d.first),n.iGM(d=n.CRH())&&(c.menuTrigger=d.first),n.iGM(d=n.CRH())&&(c.navbar=d.first)}},hostBindings:function(l,c){1&l&&n.NdJ("click",function(A){return c.onDocumentClick(A)},!1,n.evT)("scroll",function(){return c.onWindowScroll()},!1,n.Jf7)},decls:62,vars:37,consts:[[1,"container-fluid","search__overlay","d-flex","justify-content-center","px-2"],[1,"d-flex","flex-column"],[1,"search-field","mx-auto","p-2","d-flex","justify-content-between","align-items-center","gap-2","rounded-2","mb-4"],[1,"fa-solid","fa-x","close-btn",3,"click"],["type","text","placeholder","What are you looking for?",1,"w-100",3,"ngModel","ngModelChange"],["type","submit"],[1,"fa-solid","fa-magnifying-glass"],[1,"search_container","container"],[1,"row"],[1,"col-12"],["class","product-card shadow-sm p-3 mb-2 bg-white rounded d-flex gap-2",3,"routerLink",4,"ngFor","ngForOf"],[1,"border-bottom",3,"dir"],["navbar",""],[1,"container-fluid"],[1,"nav-controllers","px-6","py-3","d-flex","justify-content-between","align-items-center","gap-5"],[1,"d-flex","justify-content-between","align-items-center","gap-5"],["routerLink","/home","role","button",1,"h2","logo","mb-0","fw-normal","headings-font","fw-bold"],[1,"nav-items","d-flex","gap-4","mb-0","p-0","nav-links"],["routerLink","/home","routerLinkActive","active_link",1,"text-uppercase","fw-medium"],["routerLink","/shop","routerLinkActive","active_link",1,"text-uppercase","fw-medium"],["role","button",1,"mb-0","fw-medium","text-uppercase","position-relative",3,"click"],["menuTrigger",""],[1,"fa-solid","fa-chevron-down"],["class","mega-menu p-4 mt-3",4,"ngIf"],["routerLink","/blog","routerLinkActive","active_link",1,"text-uppercase","fw-medium"],["routerLink","/contact","routerLinkActive","active_link",1,"text-uppercase","fw-medium"],[1,"controls","d-flex","gap-3","align-items-center"],["role","button",1,"fa-solid","fa-magnifying-glass",3,"click"],["role","button","routerLink","/account"],[1,"fa-regular","fa-user"],["role","button","routerLink","/wishlist"],["pBadge","",1,"fa-regular","fa-heart",3,"value"],[1,"d-flex","align-items-center","gap-2"],["role","button","routerLink","/cart","pBadge","",1,"fa-solid","fa-shopping-bag",3,"value"],[1,"cart-price","mx-2"],[1,"mb-0"],[1,"product-card","shadow-sm","p-3","mb-2","bg-white","rounded","d-flex","gap-2",3,"routerLink"],[1,"image"],[3,"src","alt"],[1,"card-body"],[1,"card-title","mb-0"],[1,"d-flex","justify-content-between","align-items-center","gap-1"],[1,"price"],["type","button",1,"btn","btn-sm"],[1,"mega-menu","p-4","mt-3"],["menu",""],[1,"row","g-3"],[1,"col-md-4"],[1,"h5","title"],[1,"m-0","p-0"]],template:function(l,c){1&l&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"i",3),n.NdJ("click",function(){return c.hideSearch()}),n.qZA(),n.TgZ(4,"input",4),n.NdJ("ngModelChange",function(A){return c.searchTerm=A}),n.qZA(),n.TgZ(5,"button",5),n._UZ(6,"i",6),n.qZA()(),n.TgZ(7,"div",7)(8,"div",8)(9,"div",9),n.YNc(10,p,11,10,"div",10),n.ALo(11,"search"),n.qZA()()()()(),n.TgZ(12,"main"),n._UZ(13,"app-phone-nav"),n.TgZ(14,"nav",11,12),n.ALo(16,"translate"),n.TgZ(17,"div",13)(18,"div",14)(19,"div",15)(20,"h1",16),n._uU(21," VIERRAS "),n.qZA(),n.TgZ(22,"ul",17)(23,"li")(24,"a",18),n._uU(25),n.ALo(26,"translate"),n.qZA()(),n.TgZ(27,"li")(28,"a",19),n._uU(29),n.ALo(30,"translate"),n.qZA()(),n.TgZ(31,"li")(32,"a",20,21),n.NdJ("click",function(){return c.toggleMenu()}),n._uU(34),n.ALo(35,"translate"),n._UZ(36,"i",22),n.qZA(),n.YNc(37,r,51,42,"div",23),n.qZA(),n.TgZ(38,"li")(39,"a",24),n._uU(40),n.ALo(41,"translate"),n.qZA()(),n.TgZ(42,"li")(43,"a",25),n._uU(44),n.ALo(45,"translate"),n.qZA()()()(),n.TgZ(46,"div",26)(47,"span")(48,"i",27),n.NdJ("click",function(){return c.showSearch()}),n.qZA()(),n.TgZ(49,"span",28),n._UZ(50,"i",29),n.qZA(),n.TgZ(51,"span",30),n._UZ(52,"i",31),n.qZA(),n.TgZ(53,"span",32),n._UZ(54,"i",33),n.TgZ(55,"div",34)(56,"h3",35),n._uU(57),n.ALo(58,"translate"),n.qZA(),n.TgZ(59,"p",35),n._uU(60),n.ALo(61,"currencyExchange"),n.qZA()()()()()()()()),2&l&&(n.ekj("active__search",c.isSearchVisible),n.xp6(4),n.Q6J("ngModel",c.searchTerm),n.xp6(3),n.ekj("show",""!==c.searchTerm),n.xp6(3),n.Q6J("ngForOf",n.xi3(11,17,c.products,c.searchTerm)),n.xp6(4),n.Q6J("dir",n.lcZ(16,20,"dir")),n.xp6(11),n.Oqu(n.lcZ(26,22,"navItems.HOME")),n.xp6(4),n.Oqu(n.lcZ(30,24,"navItems.SHOP")),n.xp6(5),n.hij(" ",n.lcZ(35,26,"navItems.CATEGORIES")," "),n.xp6(3),n.Q6J("ngIf",c.isMenuVisible),n.xp6(3),n.Oqu(n.lcZ(41,28,"navItems.BLOG")),n.xp6(4),n.Oqu(n.lcZ(45,30,"navItems.CONTACT")),n.xp6(8),n.Q6J("value",c.wishlistItems),n.xp6(2),n.Q6J("value",c.cartItems),n.xp6(3),n.Oqu(n.lcZ(58,32,"navItems.CART")),n.xp6(3),n.hij(" ",n.xi3(61,34,c.totalCartPrice,c.exchangeRate)," "))},dependencies:[f.sg,f.O5,o.rH,o.Od,u.lM,v.Fj,v.JJ,v.On,T,P.X$,x.F,b],styles:["nav[_ngcontent-%COMP%]{margin:0;transition:.5s}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{padding:0;margin:0}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{position:relative;transition:.5}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]{z-index:5;position:absolute;background:var(--white-color);border-radius:10px;box-shadow:0 0 15px 1px var(--shadow-color);top:100%;left:0;width:600px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:500;margin:10px 0}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:var(--brand-color)}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:var(--brand-color)}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{font-size:28px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:25px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .cart-price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .cart-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}app-phone-nav[_ngcontent-%COMP%]{display:none}.active_link[_ngcontent-%COMP%]{color:var(--brand-color)!important;font-weight:800!important}.fixed-top[_ngcontent-%COMP%]{position:fixed;top:0;z-index:10;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);margin:15px 10%;border:1px solid var(--border-color)!important;border-radius:15px}.search__overlay[_ngcontent-%COMP%]{position:fixed;top:-100%;left:0;width:100%;height:100%;background:rgba(0,0,0,.555);z-index:60;opacity:0;filter:blur(15px);-webkit-filter:blur(15px);transition:.5s}.search__overlay[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{position:relative;width:450px;margin-top:100px;background:var(--secondary-color);height:-moz-fit-content;height:fit-content}.search__overlay[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .search__overlay[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:transparent;border:0;outline:none}.search__overlay[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{position:absolute;top:-25px;left:5px;font-size:16px;color:var(--white-color);cursor:pointer;transition:.5s}.search__overlay[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover{transform:rotate(180deg)}.search__overlay[_ngcontent-%COMP%]   .search_container[_ngcontent-%COMP%]{max-height:0px;overflow-y:auto;transition:.5s}.search__overlay[_ngcontent-%COMP%]   .search_container[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]{width:450px;cursor:pointer}.search__overlay[_ngcontent-%COMP%]   .search_container[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100px;height:100px}.search__overlay[_ngcontent-%COMP%]   .search_container.show[_ngcontent-%COMP%]{max-height:500px}.search__overlay.active__search[_ngcontent-%COMP%]{top:0;opacity:1;filter:blur(0)}@media (max-width: 1356px){.fixed-top[_ngcontent-%COMP%]{margin:15px 5%!important}}@media (max-width: 1232px){nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:10px 20px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]{padding:10px 20px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]{width:550px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px 0}}@media (max-width: 1054px){.fixed-top[_ngcontent-%COMP%]{margin:15px 3%!important}}@media (max-width: 820px){nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]{padding:10px 20px}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{display:none!important}nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .cart-price[_ngcontent-%COMP%]{display:none}app-phone-nav[_ngcontent-%COMP%]{display:block}}@media (max-width: 518px){.search__overlay[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%], .search__overlay[_ngcontent-%COMP%]   .search_container[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]{width:350px}}@media (max-width: 350px){nav[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .nav-controllers[_ngcontent-%COMP%]{padding:10px 20px;flex-direction:column}.search__overlay[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%], .search__overlay[_ngcontent-%COMP%]   .search_container[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]{width:300px}}"]})}return a})()},8014:(m,h,e)=>{e.d(h,{c:()=>E});var n=e(8926),s=e(3999),_=e(7798),P=e(6814),C=e(101),i=e(7213),f=e(6223);const o=["languageSelect"],u=["currencySelect"];function v(O,Z){1&O&&(n.TgZ(0,"span",50),n._uU(1,"\u0627\u0644\u0639\u0631\u0628\u064a\u0647"),n.qZA())}function T(O,Z){1&O&&(n.TgZ(0,"span",50),n._uU(1,"English"),n.qZA())}const x=function(O,Z){return{"fa-chevron-down":O,"fa-chevron-up":Z}},b=function(){return{width:"25rem",margin:"1rem"}};let E=(()=>{class O{constructor(g,p,r){this.translate=g,this.renderer=p,this._ExchangeRateService=r,this.expandAccountMenu=!1,this.expandSocialMenu=!1,this.expandCategoryMenu=!1,this.currentCurrency=localStorage.getItem("currentCurrency")||"EGP",this.visible=!1}ngOnInit(){this.toggleMenu("category"),this.currentLanguage=localStorage.getItem("language")||"en",this.renderer.addClass(document.body,this.currentLanguage),this.getExchangeRate(this.currentCurrency)}toggleMenu(g){"social"===g?this.expandSocialMenu=!this.expandSocialMenu:"account"===g?this.expandAccountMenu=!this.expandAccountMenu:this.expandCategoryMenu=!this.expandCategoryMenu}showDialog(){this.visible=!0}hideDialog(){this.visible=!1}changeLanguage(g){this.translate.use(g),localStorage.setItem("language",g)}saveRegionalSettings(){const g=this.languageSelect.nativeElement.value,p=this.currencySelect.nativeElement.value,r=document.body;localStorage.setItem("language",g),"en"===g?(this.renderer.removeClass(r,"ar"),this.renderer.addClass(r,"en")):"ar"===g&&(this.renderer.removeClass(r,"en"),this.renderer.addClass(r,"ar")),this.getExchangeRate(p),window.location.reload()}getExchangeRate(g){localStorage.setItem("currentCurrency",g),this._ExchangeRateService.getExchangeRate().subscribe({next:p=>{this._ExchangeRateService.exChangeRate.next(p.conversion_rates[g])},error:p=>{console.error(p)}})}static#n=this.\u0275fac=function(p){return new(p||O)(n.Y36(s.sK),n.Y36(n.Qsj),n.Y36(_.U))};static#t=this.\u0275cmp=n.Xpm({type:O,selectors:[["app-footer"]],viewQuery:function(p,r){if(1&p&&(n.Gf(o,5),n.Gf(u,5)),2&p){let M;n.iGM(M=n.CRH())&&(r.languageSelect=M.first),n.iGM(M=n.CRH())&&(r.currencySelect=M.first)}},decls:142,vars:93,consts:[[1,"mt-5"],[1,"container-fluid","px-0"],[1,"footer","my-5","px-5"],[1,"row","gy-4",3,"dir"],[1,"col-lg-5"],[1,"logo-newsletter"],[1,"logo"],[1,"text-capitalize","fw-bolder","headings-font"],[1,"newsletter"],[1,"fw-normal"],[1,"form","d-flex","gap-3"],["type","text",1,"form-control",3,"placeholder"],[1,"primary-btn"],[1,"col-lg-7"],[1,"footer-links","d-flex","gap-3","justify-content-around"],[1,"footer-item"],[1,"text-capitalize","fw-bold","d-flex","justify-content-between",3,"click"],[1,"fa-solid",3,"ngClass"],[1,"px-0","mb-0","collapse-list"],[1,"py-1"],["routerLink","/home"],[1,"text-capitalize","fw-bolder","d-flex","justify-content-between",3,"click"],["routerLink","/account"],["routerLink","/cart"],["routerLink","/wishlist"],["routerLink","/shop"],[1,"footer-item","site_options","px-3","py-2","fw-bold",3,"click"],["class","language",4,"ngIf"],[1,"currency"],[1,"copyRight","d-flex","justify-content-between","px-5","py-2"],[1,"mb-0"],[1,"px-0","mb-0","d-flex","gap-4"],["href",""],["header","Regional settings",3,"modal","visible","visibleChange"],[1,"content"],[1,"select","mt-4","mb-4"],[1,"title","fw-medium"],[1,"fa-solid","fa-language"],[1,"form-select","mt-1"],["languageSelect",""],["value","en",3,"selected"],["value","ar",3,"selected"],[1,"select","mb-4"],[1,"fa-solid","fa-coins"],["currencySelect",""],["value","EGP",3,"selected"],["value","USD",3,"selected"],[1,"buttons"],[1,"btn","btn-dark","d-block","w-100","my-2",3,"click"],[1,"btn","btn-light","d-block","w-100",3,"click"],[1,"language"]],template:function(p,r){1&p&&(n.TgZ(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3),n.ALo(4,"translate"),n.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"h2",7),n._uU(9,"vierras"),n.qZA()(),n.TgZ(10,"div",8)(11,"p",9),n._uU(12),n.ALo(13,"translate"),n.qZA(),n.TgZ(14,"div",10),n._UZ(15,"input",11),n.ALo(16,"translate"),n.TgZ(17,"button",12),n._uU(18),n.ALo(19,"translate"),n.qZA()()()()(),n.TgZ(20,"div",13)(21,"div",14)(22,"div",15)(23,"h6",16),n.NdJ("click",function(){return r.toggleMenu("category")}),n._uU(24),n.ALo(25,"translate"),n._UZ(26,"i",17),n.qZA(),n.TgZ(27,"ul",18)(28,"li",19)(29,"a",20),n._uU(30),n.ALo(31,"translate"),n.qZA()(),n.TgZ(32,"li",19)(33,"a",20),n._uU(34),n.ALo(35,"translate"),n.qZA()(),n.TgZ(36,"li",19)(37,"a",20),n._uU(38),n.ALo(39,"translate"),n.qZA()(),n.TgZ(40,"li",19)(41,"a",20),n._uU(42),n.ALo(43,"translate"),n.qZA()(),n.TgZ(44,"li",19)(45,"a",20),n._uU(46),n.ALo(47,"translate"),n.qZA()()()(),n.TgZ(48,"div",15)(49,"h6",21),n.NdJ("click",function(){return r.toggleMenu("account")}),n._uU(50),n.ALo(51,"translate"),n._UZ(52,"i",17),n.qZA(),n.TgZ(53,"ul",18)(54,"li",19)(55,"a",22),n._uU(56),n.ALo(57,"translate"),n.qZA()(),n.TgZ(58,"li",19)(59,"a",20),n._uU(60),n.ALo(61,"translate"),n.qZA()(),n.TgZ(62,"li",19)(63,"a",23),n._uU(64),n.ALo(65,"translate"),n.qZA()(),n.TgZ(66,"li",19)(67,"a",24),n._uU(68),n.ALo(69,"translate"),n.qZA()(),n.TgZ(70,"li",19)(71,"a",25),n._uU(72),n.ALo(73,"translate"),n.qZA()()()(),n.TgZ(74,"div",15)(75,"h6",21),n.NdJ("click",function(){return r.toggleMenu("social")}),n._uU(76),n.ALo(77,"translate"),n._UZ(78,"i",17),n.qZA(),n.TgZ(79,"ul",18)(80,"li",19)(81,"a",20),n._uU(82),n.ALo(83,"translate"),n.qZA()(),n.TgZ(84,"li",19)(85,"a",20),n._uU(86),n.ALo(87,"translate"),n.qZA()(),n.TgZ(88,"li",19)(89,"a",20),n._uU(90),n.ALo(91,"translate"),n.qZA()(),n.TgZ(92,"li",19)(93,"a",20),n._uU(94),n.ALo(95,"translate"),n.qZA()()()(),n.TgZ(96,"div",26),n.NdJ("click",function(){return r.showDialog()}),n.YNc(97,v,2,0,"span",27),n.YNc(98,T,2,0,"span",27),n._uU(99," - "),n.TgZ(100,"span",28),n._uU(101),n.qZA()()()()()(),n.TgZ(102,"div",29)(103,"p",30),n._uU(104,"\xa92024 iosudi Development"),n.qZA(),n.TgZ(105,"ul",31)(106,"li")(107,"a",32),n._uU(108,"Terms & Conditions"),n.qZA()(),n.TgZ(109,"li")(110,"a",32),n._uU(111,"Privacy Policy"),n.qZA()(),n.TgZ(112,"li")(113,"a",32),n._uU(114,"Cookie Policy"),n.qZA()()()()()(),n.TgZ(115,"p-dialog",33),n.NdJ("visibleChange",function(a){return r.visible=a}),n.TgZ(116,"div",34)(117,"div",35)(118,"div",36),n._UZ(119,"i",37),n._uU(120," Language "),n.qZA(),n.TgZ(121,"select",38,39)(123,"option",40),n._uU(124,"English"),n.qZA(),n.TgZ(125,"option",41),n._uU(126," \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 "),n.qZA()()(),n.TgZ(127,"div",42)(128,"div",36),n._UZ(129,"i",43),n._uU(130," Currency "),n.qZA(),n.TgZ(131,"select",38,44)(133,"option",45),n._uU(134,"EGP"),n.qZA(),n.TgZ(135,"option",46),n._uU(136,"USD"),n.qZA()()(),n.TgZ(137,"div",47)(138,"button",48),n.NdJ("click",function(){return r.saveRegionalSettings()}),n._uU(139," Save "),n.qZA(),n.TgZ(140,"button",49),n.NdJ("click",function(){return r.hideDialog()}),n._uU(141," Cancel "),n.qZA()()()()),2&p&&(n.xp6(3),n.Q6J("dir",n.lcZ(4,41,"dir")),n.xp6(9),n.hij(" ",n.lcZ(13,43,"FOOTER.NEWSLETTER.PARAGRAPH")," "),n.xp6(3),n.Q6J("placeholder",n.lcZ(16,45,"PLACEHOLDERS.UR_EMAIL")),n.xp6(3),n.hij(" ",n.lcZ(19,47,"BUTTONS.SUBSCRIBE")," "),n.xp6(6),n.hij(" ",n.lcZ(25,49,"FOOTER.CATEGORY_HEADING")," "),n.xp6(2),n.Q6J("ngClass",n.WLB(83,x,!r.expandCategoryMenu,r.expandCategoryMenu)),n.xp6(1),n.ekj("expanded",r.expandCategoryMenu),n.xp6(3),n.hij(" ",n.lcZ(31,51,"FOOTER.CATEGORY_ITEMS.MEN")," "),n.xp6(4),n.hij(" ",n.lcZ(35,53,"FOOTER.CATEGORY_ITEMS.WOMEN")," "),n.xp6(4),n.hij(" ",n.lcZ(39,55,"FOOTER.CATEGORY_ITEMS.KIDS")," "),n.xp6(4),n.hij(" ",n.lcZ(43,57,"FOOTER.CATEGORY_ITEMS.SKINCARE")," "),n.xp6(4),n.hij(" ",n.lcZ(47,59,"FOOTER.CATEGORY_ITEMS.ELECTRONICS")," "),n.xp6(4),n.hij(" ",n.lcZ(51,61,"FOOTER.ACCOUNT_HEADING")," "),n.xp6(2),n.Q6J("ngClass",n.WLB(86,x,!r.expandAccountMenu,r.expandAccountMenu)),n.xp6(1),n.ekj("expanded",r.expandAccountMenu),n.xp6(3),n.hij(" ",n.lcZ(57,63,"FOOTER.ACCOUNT_ITEMS.MY_ACCOUNT")," "),n.xp6(4),n.hij(" ",n.lcZ(61,65,"FOOTER.ACCOUNT_ITEMS.LOGIN_REGISTER")," "),n.xp6(4),n.hij(" ",n.lcZ(65,67,"FOOTER.ACCOUNT_ITEMS.CART")," "),n.xp6(4),n.hij(" ",n.lcZ(69,69,"FOOTER.ACCOUNT_ITEMS.WISHLIST")," "),n.xp6(4),n.hij(" ",n.lcZ(73,71,"FOOTER.ACCOUNT_ITEMS.SHOP")," "),n.xp6(4),n.hij(" ",n.lcZ(77,73,"FOOTER.SOCIAL_MEDIA_HEADING")," "),n.xp6(2),n.Q6J("ngClass",n.WLB(89,x,!r.expandSocialMenu,r.expandSocialMenu)),n.xp6(1),n.ekj("expanded",r.expandSocialMenu),n.xp6(3),n.hij(" ",n.lcZ(83,75,"FOOTER.SOCIAL_MEDIA_ITEMS.INSTAGRAM")," "),n.xp6(4),n.hij(" ",n.lcZ(87,77,"FOOTER.SOCIAL_MEDIA_ITEMS.FACEBOOK")," "),n.xp6(4),n.hij(" ",n.lcZ(91,79,"FOOTER.SOCIAL_MEDIA_ITEMS.YOUTUBE")," "),n.xp6(4),n.hij(" ",n.lcZ(95,81,"FOOTER.SOCIAL_MEDIA_ITEMS.TWITTER")," "),n.xp6(3),n.Q6J("ngIf","ar"===r.currentLanguage),n.xp6(1),n.Q6J("ngIf","en"===r.currentLanguage),n.xp6(3),n.Oqu(r.currentCurrency),n.xp6(14),n.Akn(n.DdM(92,b)),n.Q6J("modal",!0)("visible",r.visible),n.xp6(8),n.Q6J("selected","en"==r.currentLanguage),n.xp6(2),n.Q6J("selected","ar"==r.currentLanguage),n.xp6(8),n.Q6J("selected","EGP"==r.currentCurrency),n.xp6(2),n.Q6J("selected","USD"==r.currentCurrency))},dependencies:[P.mk,P.O5,C.rH,i.V,f.YN,f.Kr,s.X$],styles:["footer[_ngcontent-%COMP%]{border-top:1px solid var(--darken-background)}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:80px;color:var(--brand-color)}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--paragraph-color);font-size:18px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:400px;height:50px;border-radius:30px;border:none;outline:none;padding:0 10px;font-size:18px;border:1px solid var(--border-color);background:transparent}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:var(--paragraph-color)}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem var(--input-shadow)}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%]{border-radius:30px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:22px;color:var(--primary-color)}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:none}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--paragraph-color);font-size:16px;font-weight:500;border:0;outline:0;transition:.3s}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--brand-color);text-decoration:underline}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .site_options[_ngcontent-%COMP%]{background:rgba(202,202,202,.7921568627);height:-moz-fit-content;height:fit-content;border-radius:8px;cursor:pointer}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]{background:#222;color:#fff}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}@media (max-width: 1130px){footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:70px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px;height:40px;border-radius:25px;font-size:18px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:20px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:15px}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 991px){footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:70px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px;height:40px;border-radius:25px;font-size:18px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]{justify-content:space-between!important}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:20px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:15px}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 549px){footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding:0 20px!important}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:70px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{flex-direction:column}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .logo-newsletter[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px;height:40px;border-radius:25px;font-size:18px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]{justify-content:space-between!important;flex-direction:column}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:20px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:15px}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul.collapse-list[_ngcontent-%COMP%]{max-height:0;overflow:hidden;transition:.5s}footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul.collapse-list.expanded[_ngcontent-%COMP%]{max-height:250px}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]{flex-direction:column}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}footer[_ngcontent-%COMP%]   .copyRight[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}}"]})}return O})()},7422:(m,h,e)=>{e.d(h,{N:()=>C});var n=e(5619),s=e(5516),_=e(8926),P=e(9862);let C=(()=>{class i{constructor(o){this._HttpClient=o,this.cartItems=new n.X(0),this.cartTotalPrice=new n.X(0),this.headers={token:localStorage.getItem("token")}}getCart(){return this._HttpClient.get(s.N.baseURL+"api/v1/cart",{headers:this.headers})}addToCart(o){return this._HttpClient.post(s.N.baseURL+"api/v1/cart",{productId:o},{headers:this.headers})}updateCartQuantity(o,u){return this._HttpClient.put(s.N.baseURL+`api/v1/cart/${o}`,{count:u},{headers:this.headers})}removeProductFromCart(o){return this._HttpClient.delete(s.N.baseURL+`api/v1/cart/${o}`,{headers:this.headers})}checkout(o,u){return this._HttpClient.post(s.N.baseURL+`api/v1/orders/checkout-session/${o}?url=https://iosudi.github.io/VIERRAS_`,{shippingAddress:u},{headers:this.headers})}static#n=this.\u0275fac=function(u){return new(u||i)(_.LFG(P.eN))};static#t=this.\u0275prov=_.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},7409:(m,h,e)=>{e.d(h,{M:()=>C});var n=e(5619),s=e(5516),_=e(8926),P=e(9862);let C=(()=>{class i{constructor(o){this._HttpClient=o,this.wishlistItems=new n.X(0),this.headers={token:localStorage.getItem("token")}}addToWishlist(o){return this._HttpClient.post(s.N.baseURL+"api/v1/wishlist",{productId:o},{headers:this.headers})}getWishlist(){return this._HttpClient.get(s.N.baseURL+"api/v1/wishlist",{headers:this.headers})}removeFromWishlist(o){return this._HttpClient.delete(s.N.baseURL+`api/v1/wishlist/${o}`,{headers:this.headers})}static#n=this.\u0275fac=function(u){return new(u||i)(_.LFG(P.eN))};static#t=this.\u0275prov=_.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);