"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[941],{6941:(u,n,i)=>{i.r(n),i.d(n,{HomeModule:()=>x});var a=i(2510),d=i(9306),e=i(4650),r=i(430);let o=(()=>{class t{constructor(){this._user=d.E,this.streak=0,this.coinscount=0,this.coinscountstop=setInterval(()=>{this.coinscount++,this.coinscount==d.E.coins&&clearInterval(this.coinscountstop)},.01),this.eventscount=0,this.eventscountstop=setInterval(()=>{this.eventscount++,12==this.eventscount&&clearInterval(this.eventscountstop)},100),this.percentcount=0,this.percentcountstop=setInterval(()=>{this.percentcount++,28==this.percentcount&&clearInterval(this.percentcountstop)},50)}ngOnInit(){const s=localStorage.getItem("lastVisit");if(s){const l=new Date,h=new Date(s);l.toDateString()!==h.toDateString()?(this.streak=parseInt(localStorage.getItem("streak")||"0"),this.streak+=1):this.streak=parseInt(localStorage.getItem("streak")||"0")}else this.streak=1;if(localStorage.setItem("lastVisit",(new Date).toISOString()),localStorage.setItem("streak",this.streak.toString()),this.streak>=10){const l=document.querySelector(".streak ");l&&(l.classList.remove("ml-6"),l.classList.add("ml-10"))}}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["home"]],decls:320,vars:52,consts:[[1,"absolute","md:top-0","md:left-0","sm:-top-16","sm:left-80","xl:top-7"],["fragment","Dashboard",1,"text-4xl","sm:text-3xl","md:text-4xl","font-bold","text-slate-900","pl-15","p-15","absolute"],[1,"grid","content-center","justify-center","w-11/12","md:w-11/12","sm:max-w-8/12","lg:w-12/12","xl:max-w-full","xl:max-h-auto","md:max-h-full","md:grid-cols-3","sm:grid-cols-2","grid-cols-1","gap-3","grid-flow-row-dense","sm:pl-2","sm:ml-7","ml-4","xxl:pt-0","xl:pt-20","lg:pt-20","sm:pt-30","md:pt-20","pt-20"],[1,"bg-white","dark:bg-zinc-900","relative","rounded-2xl","sm:max-w-140","md:max-w-160","w-110","h-100","sm:h-auto","row-span-2","order-first","md:order-none"],["src","assets/images/figures/5.svg","alt","",1,"sm:mr-3","mr-0","md:hidden","block","sm:hidden","xxl:block","xl:block","lg:hidden","flex","absolute","z-0","right-0","bottom-6","xxl:w-72","xxl:h-72","xl:w-50","xl:h-50","lg:w-50","lg:h-50","md:w-30","md:h-30","sm:w-50","sm:h-50","w-max-60","h-max-60","sm:opacity-100","opacity-20","object-fit-cover","place-items-center","place-content-center","justify-center","content-center","items-center","place-self-center","self-center","md:place-items-end","md:place-content-end","md:justify-end","md:content-end","md:items-end","md:place-self-end","md:self-end"],[1,"z-0"],[1,"font-bold","sm:font-semibold","relative","z-0","dark:text-white","text-black","sm:ml-0","ml-0","md:text-xl","sm:text-2xl","xl:text-4xl","rl:text-3xl","lg:text-xl","text-3xl","p-8","sm:text-start","text-center"],[1,"sm:text-zinc-500","text-black","dark:text-white","relative","z-0","font-medium","sm:-mt-4","sm:ml-8","md:-mt-4","md:ml-8","-mt-4","md:text-md","sm:text-lg","xl:text-lg","md:text-md","lg:text-lg","text-2xl","sm:text-start","text-center"],["href","dashboards/notes"],[1,"flex","place-items-center","place-content-center","sm:place-content-start","md:place-content-start","lg:place-content-start","xl:place-content-start"],["data-te-ripple-init","","data-te-ripple-color","light",1,"z-0","justify-center","place-items-center","place-content-center","flex","text-center","rounded-xl","font-semibold","dark:text-black","text-white","dark:bg-neutral-200","bg-slate-900","md:w-30","xl:w-40","xxl:w-40","lg:w-30","lg:h-9","xxl:h-13","xl:h-13","sm:h-13","sm:w-40","md:h-9","w-40","h-13","sm:ml-8","sm:mt-4","mt-6"],["href","dashboards/home"],[1,"bg-white","dark:bg-zinc-900","relative","rounded-2xl","flex","md:max-w-160","sm:w-110","w-110","md:h-30","xl:h-40","sm:h-40","lg:h-30","h-40","md:ml-0","lg:ml-0","xl:ml-2.5","sm:ml-0"],["src","assets/images/figures/2.svg","alt","",1,"-mt-0","mr-3","dark:invisible","visible","flex","absolute","z-0","right-0","xl:w-40","xl:h-40","lg:w-30","lg:h-30","md:w-30","md:h-30","sm:w-40","sm:h-40","w-40","h-40","object-fit-cover","place-items-end","place-content-end","justify-end","content-end","items-end","place-self-end","self-end"],["src","assets/images/figures/2d.svg","alt","",1,"-mt-0","mr-3","dark:visible","invisible","flex","absolute","z-0","right-0","xl:w-40","xl:h-40","lg:w-30","lg:h-30","md:w-30","md:h-30","sm:w-40","sm:h-40","w-40","h-40","object-fit-cover","place-items-end","place-content-end","justify-end","content-end","items-end","place-self-end","self-end"],["data-ceil","143",1,"counter","p-8","z-0","text-4xl","md:text-4xl","sm:text-4xl","xl:text-4xl","sm:mt-0","xl:mt-0","md:-mt-4","lg:-mt-4","lg:text-4xl","text-black","dark:text-white","font-bold"],["src","assets/images/logo/flame-icon.svg","alt","",1,"streak","w-8","h-8","absolute","ml-6","-mt-11"],[1,"text-xl","font-semibold","dark:text-white","text-black","mt-2"],["href","dashboards/pricing"],["src","assets/images/figures/4.svg","alt","",1,"-mt-0","mr-3","flex","dark:invisible","visible","absolute","z-0","right-0","xl:w-40","xl:h-40","lg:w-30","lg:h-30","md:w-30","md:h-30","sm:w-40","sm:h-40","w-40","h-40","object-fit-cover","place-items-end","place-content-end","justify-end","content-end","items-end","place-self-end","self-end"],["src","assets/images/figures/4d.svg","alt","",1,"-mt-0","mr-3","flex","absolute","z-0","dark:visible","invisible","right-0","xl:w-40","xl:h-40","lg:w-30","lg:h-30","md:w-30","md:h-30","sm:w-40","sm:h-40","w-40","h-40","object-fit-cover","place-items-end","place-content-end","justify-end","content-end","items-end","place-self-end","self-end"],["data-ceil","980",1,"counter","p-8","text-4xl","z-0","dark:text-white","sm:mt-0","xl:mt-0","md:-mt-4","lg:-mt-4","text-black","font-bold"],[1,"flex","relative","ml-18","-mt-10"],["src","/assets/images/logo/coinsoran.svg","alt","",1,"w-7","h-7","dark:hidden","block"],["src","/assets/images/logo/coinsoran.svg","alt","",1,"w-7","h-7","dark:block","hidden"],[1,"text-xl","font-semibold","dark:text-white","text-black","mt-4"],[1,"bg-white","dark:bg-zinc-900","relative","flex","rounded-2xl","md:max-w-160","sm:w-110","w-110","md:h-30","xl:h-40","sm:h-40","lg:h-30","h-40","md:ml-0","lg:ml-0","xl:ml-2.5","sm:ml-0"],["src","assets/images/figures/1.svg","alt","",1,"-mt-0","mr-3","dark:invisible","visible","flex","absolute","z-0","right-0","xl:w-40","xl:h-40","lg:w-30","lg:h-30","md:w-30","md:h-30","sm:w-40","sm:h-40","w-40","h-40","object-fit-cover","place-items-end","place-content-end","justify-end","content-end","items-end","place-self-end","self-end"],["src","assets/images/figures/1d.svg","alt","",1,"-mt-0","mr-3","invisible","dark:visible","flex","absolute","z-0","right-0","xl:w-40","xl:h-40","lg:w-30","lg:h-30","md:w-30","md:h-30","sm:w-40","sm:h-40","w-40","h-40","object-fit-cover","place-items-end","place-content-end","justify-end","content-end","items-end","place-self-end","self-end"],["data-ceil","2",1,"counter","p-8","z-0","text-4xl","dark:text-white","sm:mt-0","xl:mt-0","md:-mt-4","lg:-mt-4","text-black","font-bold"],[1,"bg-white","dark:bg-zinc-900","relative","flex","rounded-2xl","md:max-w-160","sm:w-110","w-110","md:h-30","xl:h-40","sm:h-40","lg:h-30","h-40","md:ml-0","xl:ml-2.5","lg:ml-0","sm:ml-0"],["src","assets/images/figures/3.svg","alt","",1,"-mt-0","mr-3","flex","dark:invisible","visible","absolute","z-0","right-0","xl:w-40","xl:h-40","lg:w-30","lg:h-30","md:w-30","md:h-30","sm:w-40","sm:h-40","w-40","h-40","object-fit-cover","place-items-end","place-content-end","justify-end","content-end","items-end","place-self-end","self-end"],["src","assets/images/figures/3d.svg","alt","",1,"-mt-0","mr-3","flex","absolute","z-0","dark:visible","invisible","right-0","xl:w-40","xl:h-40","lg:w-30","lg:h-30","md:w-30","md:h-30","sm:w-40","sm:h-40","w-40","h-40","object-fit-cover","place-items-end","place-content-end","justify-end","content-end","items-end","place-self-end","self-end"],[1,"counter","p-8","text-4xl","z-0","dark:text-white","sm:mt-0","xl:mt-0","md:-mt-4","lg:-mt-4","text-black","font-bold"],[1,"lg:bg-white","xl:bg-white","md:bg-white","md:bg-white","md:dark:bg-zinc-900","lg:dark:bg-zinc-900","xl:dark:bg-zinc-900","-order-second","bg-transparent","dark:bg-transparent","sm:bg-transparent","sm:dark:bg-transparent","sm:order-none","lg:order-none","sm:order-last","xl:order-none","md:order-none","rounded-2xl","sm:max-w-200","md:max-w-160","place-items-center","w-110","sm:h-100","md:h-80","lg:h-90","xl:h-100","h-140","row-span-2","mt-3"],[1,"text-xl","p-5","text-black","dark:text-white","font-semibold","text-center","sm:text-start","sm:invisible","md:visible","lg:visible","xl:visible","invisible"],[1,"xl:gap-1","md:gap-4","lg:gap-4","sm:gap-60","gap-10","grid","grid-cols-1","sm:grid-cols-2","xl:grid-cols-2","md:grid-cols-1","lg:grid-cols-1","content-center","self-center","relative","justify-center","self-center","flex","sm:-mr-60","sm:ml-30","xxl:mr-0","xl:mr-0","lg:mr-0","md:mr-0","md:ml-auto","sm:auto","place-items-center","sm:mt-1","md:mt-1","-mt-13"],[1,"sm:h-80","rl:w-40","sm:w-56","md:w-50","xl:max-w-56","lg:w-[270px]","lg:h-32","xl:h-80","md:h-30","h-64","w-90","sm:-mt-2","mt-4","bg-purple-500","border-solid","rounded-3xl","content-end","place-content-center","grid"],[1,"content-center","items-center","place-self-center","place-items-center","flex","self-center","grid"],["fill","none","stroke","white","stroke-width","1","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg","aria-hidden","true",1,"xl:w-12","lg:w-9","md:w-9","sm:w-12","xl:h-12","lg:h-9","md:h-9","sm:h-12","w-12","h-12","flex","content-center","justify-center","self-center","items-center","flex","grid","mb-4"],["stroke-linecap","round","stroke-linejoin","round","d","M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"],[1,"text-center","md:-mt-5","sm:mt-0","lg:-mt-4","xl:mt-0","md:pb-8","sm:pb-10","xl:pb-10","lg:pb-8","pb-4"],[1,"font-semibold","text-xl","md:-mb-30","xl:mb-0","sm:mb-0","lg:-mb-22","dark:text-white","text-white"],[1,"font-medium","w-40","md:-mb-10","xl:mb-0","sm:mb-0","xl:visible","lg:invisible","sm:visible","visible","md:invisible","lg:mb-0","xl:mt-5","sm:mt-5","lg:mt-5","mt-5","dark:text-white","text-white"],[1,"place-items-center","self-center","content-center","text-center","grid"],["href","/dashboards/notes "],[1,"sm:w-50","rl:max-w-30","xl:w-50","lg:w-40","md:w-40","md:h-7","sm:h-13","transition-all","duration-120","ease-in","xl:h-13","lg:h-7","w-40","h-10","bg-gray-900/70","hover:bg-gray-800/20","font-semibold","dark:text-white","text-white","rounded-xl","mb-4"],[1,"sm:h-80","rl:w-40","sm:w-56","md:w-50","xl:max-w-56","lg:w-[270px]","lg:h-32","xl:h-80","md:h-30","h-64","w-90","sm:-mt-2","-order-1","-mt-5","bg-blue-500","border-solid","rounded-3xl","content-end","place-content-center","grid"],[1,"content-center","items-center","place-self-center","self-center","flex","grid","place-items-center"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","stroke-width","1","fill","none","stroke","white",1,"xl:w-12","lg:w-9","md:w-9","sm:w-12","xl:h-12","lg:h-9","md:h-9","sm:h-12","w-12","h-12","flex","content-center","justify-center","self-center","items-center","flex","grid","mb-4"],["d","M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"],[1,"font-semibold","md:-mb-30","xl:mb-0","sm:mb-0","lg:-mb-22","text-xl","dark:text-white","text-white"],[1,"font-medium","w-44","mt-5","xl:visible","lg:invisible","justify-center","flex","items-center","sm:visible","visible","md:invisible","dark:text-white","text-center","text-white"],[1,"md:w-40","rl:w-30","lg:w-40","lg:h-7","sm:w-50","xl:w-50","sm:h-13","md:h-7","xl:h-13","w-40","h-10","transition-all","duration-120","ease-in","bg-gray-900/70","hover:bg-gray-800/20","text-center","place-content-center","justify-center","self-center","place-items-center","font-semibold","rounded-xl","mb-4","dark:text-white","text-white"],[1,"bg-white","dark:bg-zinc-900","rounded-2xl","md:max-w-160","sm:max-w-120","w-110","sm:h-100","md:h-80","lg:h-90","xl:h-100","row-span-2","mt-3","md:ml-0","lg:ml-0","xl:ml-2.5","sm:ml-0"],[1,"flex","items-center","justify-center","px-4","py-6"],[1,"flex","items-center","justify-center","px-2","xxl:max-w-full","xl:max-w-full","sm:max-w-full","max-w-full"],[1,"xxl:w-160","xl:w-80","lg:w-4/5","sm:w-80","md:w-56","w-90"],[1,"md:p-0","md:pb-0","p-5","dark:bg-transparent","rounded-3xl"],[1,"px-4","flex","items-center","justify-between"],[1,"text-xl","dark:text-white","font-semibold","text-black"],[1,"flex","items-center","text-black","dark:text-black"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","1.5","stroke","gray","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-chevron-left"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["points","15 6 9 12 15 18"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","1.5","stroke","gray","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","ml-3","icon-tabler-chevron-right"],["points","9 6 15 12 9 18"],[1,"flex","items-center","justify-between","pb-2","xl:mt-7","lg:-mt-7","sm:mt-7","md:-mt-7","mt-7","overflow-x-auto"],[1,"w-full","mt-7"],[1,"w-full","flex","justify-center"],[1,"text-xl","font-medium","text-center","text-gray-800","dark:text-gray-400"],[1,"pt-6"],[1,"px-4","py-2","flex","w-full","justify-center"],[1,"px-4","py-2","cursor-pointer","flex","w-full","justify-center"],[1,"text-xl","text-gray-500","dark:text-white","font-medium"],[1,"text-xl","text-gray-500","dark:text-white"],[1,"w-full","h-full"],[1,"flex","items-center","justify-center","w-full","rounded-xl","cursor-pointer"],[1,"text-xl","w-8","h-8","flex","items-center","justify-center","font-medium","text-white","bg-purple-600/50","rounded-xl"],[1,"bg-white","relative","dark:bg-zinc-900","rounded-2xl","md:max-w-160","sm:max-w-120","w-110","sm:h-100","md:h-80","lg:h-90","xl:h-100","h-100","row-span-2","mt-3","md:ml-0","lg:ml-0","xl:ml-2.5","sm:ml-0"],[1,"font-semibold","text-xl","text-center","sm:text-start","md:text-start","lg:text-start","xl:text-start","dark:text-white","text-black","p-5"],[1,"list-none","ml-10","xl:font-medium","lg:text-lg","sm:text-lg","md:text-md","text-xl"],[1,"flex","items-center","mt-4"],["src","/assets/images/avatars/female-08.jpg","alt","Image 1",1,"w-10","h-10","mr-4","rounded-full"],[1,"flex","items-between","justify-between","self-between","xxl:ml-40","xl:ml-20","lg:ml-10","ml-16","md:ml-7","sm:ml-10","xxl:absolute","xl:absolute","visible","md:invisible","lg:visible","xl:visible","sm:visible","lg:absolute","md:static","sm:static","absolute","right-7","lg:right-1","xl:right-7","xxl:right-20"],["src","/assets/images/logo/coinsoran.svg","alt","",1,"w-5","h-5","ml-2","flex","items-end","justify-end","self-between"],["src","/assets/images/avatars/female-06.jpg","alt","Image 2",1,"w-10","h-10","mr-4","rounded-full"],[1,"flex","items-between","justify-between","self-between","xxl:ml-40","xl:ml-20","lg:ml-10","ml-16","md:ml-7","sm:ml-10","xxl:absolute","lg:absolute","visible","md:invisible","lg:visible","xl:visible","sm:visible","md:static","sm:static","lg:right-1","absolute","right-7","xl:absolute","xl:right-7","xxl:right-20"],["src","/assets/images/logo/coinsoran.svg","alt","",1,"w-5","h-5","ml-2","flex","items-between","justify-between","self-between"],["src","/assets/images/avatars/female-03.jpg","alt","Image 3",1,"w-10","h-10","mr-4","rounded-full"],[1,"flex","items-between","justify-between","self-between","xxl:ml-40","xl:ml-20","lg:ml-10","ml-16","md:ml-7","sm:ml-10","xxl:absolute","lg:absolute","md:static","visible","md:invisible","lg:visible","xl:visible","sm:visible","sm:static","lg:right-1","absolute","right-7","xl:absolute","xl:right-7","xxl:right-20"],[1,"flex","items-center","mt-4","md:invisible","sm:visible","lg:visible","xl:visible"],["src","/assets/images/avatars/male-06.jpg","alt","Image 4",1,"w-10","h-10","mr-4","rounded-full"],[1,"justify-center","md:top-0","relative","flex","content-center","items-center","place-self-center","self-center","content-center","grid","justify-center","lg:mt-14","xl:mt-0","md:mt-0","sm:mt-10","max-w-full"],[1,"bg-slate-900","dark:bg-neutral-300","rounded-xl","dark:text-black","text-white","font-bold","justify-center","content-center","items-center","place-self-center","self-center","content-center","justify-center","flex","grid","sm:w-30","md:-mt-12","xl:mt-5","md:w-30","md:h-8","sm:h-9","xl:h-13","lg:h-9","rl:w-50","xl:w-90","lg:w-50","w-50","h-13","mt-5","sm:-mt-0"]],template:function(s,l){1&s&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.ALo(3,"transloco"),e.qZA()(),e.TgZ(4,"div",2)(5,"div",3),e._UZ(6,"img",4),e.TgZ(7,"div",5)(8,"h1",6),e._uU(9),e.ALo(10,"transloco"),e.qZA()(),e.TgZ(11,"div",5)(12,"p",7),e._uU(13," We have new method to new "),e._UZ(14,"br"),e._uU(15," learning process. More faster, "),e._UZ(16,"br"),e._uU(17," secure and easy to use! "),e.qZA()(),e.TgZ(18,"a",8)(19,"div",9)(20,"button",10),e._uU(21),e.ALo(22,"transloco"),e.qZA()()()(),e.TgZ(23,"a",11)(24,"div",12),e._UZ(25,"img",13)(26,"img",14),e.TgZ(27,"div",15)(28,"div"),e._uU(29),e._UZ(30,"img",16),e.qZA(),e.TgZ(31,"h2",17),e._uU(32," Streak "),e.qZA()()()(),e.TgZ(33,"a",18)(34,"div",12),e._UZ(35,"img",19)(36,"img",20),e.TgZ(37,"div",21),e._uU(38),e.TgZ(39,"a",18)(40,"div",22),e._UZ(41,"img",23)(42,"img",24),e.qZA()(),e.TgZ(43,"h2",25),e._uU(44),e.ALo(45,"transloco"),e.qZA()()()(),e.TgZ(46,"a",8)(47,"div",26),e._UZ(48,"img",27)(49,"img",28),e.TgZ(50,"div",29),e._uU(51),e.TgZ(52,"h2",17),e._uU(53),e.ALo(54,"transloco"),e.qZA()()()(),e.TgZ(55,"a",11)(56,"div",30),e._UZ(57,"img",31)(58,"img",32),e.TgZ(59,"div",33),e._uU(60),e.TgZ(61,"h2",17),e._uU(62),e.ALo(63,"transloco"),e.qZA()()()(),e.TgZ(64,"div",34)(65,"h1",35),e._uU(66),e.ALo(67,"transloco"),e.qZA(),e.TgZ(68,"div",36)(69,"div",37)(70,"div",38),e.O4$(),e.TgZ(71,"svg",39),e._UZ(72,"path",40),e.qZA(),e.kcU(),e.TgZ(73,"div",41)(74,"h1",42),e._uU(75),e.ALo(76,"transloco"),e.qZA(),e.TgZ(77,"p",43),e._uU(78),e.ALo(79,"transloco"),e.qZA()(),e.TgZ(80,"div",44)(81,"a",45)(82,"button",46),e._uU(83),e.ALo(84,"transloco"),e.qZA()()()()(),e.TgZ(85,"div",47)(86,"div",48),e.O4$(),e.TgZ(87,"svg",49),e._UZ(88,"path",50),e.qZA(),e.kcU(),e.TgZ(89,"div",41)(90,"h1",51),e._uU(91),e.ALo(92,"transloco"),e.qZA(),e.TgZ(93,"p",52),e._uU(94),e.ALo(95,"transloco"),e.qZA()()(),e.TgZ(96,"div",44)(97,"a",45)(98,"button",53),e._uU(99),e.ALo(100,"transloco"),e.qZA()()()()()(),e.TgZ(101,"div",54)(102,"div",55)(103,"div",56)(104,"div",57)(105,"div",58)(106,"div",59)(107,"h1",60),e._uU(108),e.ALo(109,"transloco"),e.qZA(),e.TgZ(110,"div",61),e.O4$(),e.TgZ(111,"svg",62),e._UZ(112,"path",63)(113,"polyline",64),e.qZA(),e.TgZ(114,"svg",65),e._UZ(115,"path",63)(116,"polyline",66),e.qZA()()(),e.kcU(),e.TgZ(117,"div",67)(118,"table",68)(119,"thead")(120,"tr")(121,"th")(122,"div",69)(123,"p",70),e._uU(124," Mo "),e.qZA()()(),e.TgZ(125,"th")(126,"div",69)(127,"p",70),e._uU(128," Tu "),e.qZA()()(),e.TgZ(129,"th")(130,"div",69)(131,"p",70),e._uU(132," We "),e.qZA()()(),e.TgZ(133,"th")(134,"div",69)(135,"p",70),e._uU(136," Th "),e.qZA()()(),e.TgZ(137,"th")(138,"div",69)(139,"p",70),e._uU(140," Fr "),e.qZA()()(),e.TgZ(141,"th")(142,"div",69)(143,"p",70),e._uU(144," Sa "),e.qZA()()(),e.TgZ(145,"th")(146,"div",69)(147,"p",70),e._uU(148," Su "),e.qZA()()()()(),e.TgZ(149,"tbody")(150,"tr")(151,"td",71),e._UZ(152,"div",72),e.qZA(),e.TgZ(153,"td",71),e._UZ(154,"div",72),e.qZA(),e.TgZ(155,"td"),e._UZ(156,"div",72),e.qZA(),e.TgZ(157,"td",71)(158,"div",73)(159,"p",74),e._uU(160," 1 "),e.qZA()()(),e.TgZ(161,"td",71)(162,"div",73)(163,"p",74),e._uU(164," 2 "),e.qZA()()(),e.TgZ(165,"td",71)(166,"div",73)(167,"p",75),e._uU(168," 3 "),e.qZA()()(),e.TgZ(169,"td",71)(170,"div",73)(171,"p",75),e._uU(172," 4 "),e.qZA()()()(),e.TgZ(173,"tr")(174,"td")(175,"div",73)(176,"p",74),e._uU(177," 5 "),e.qZA()()(),e.TgZ(178,"td")(179,"div",73)(180,"p",74),e._uU(181," 6 "),e.qZA()()(),e.TgZ(182,"td")(183,"div",73)(184,"p",74),e._uU(185," 7 "),e.qZA()()(),e.TgZ(186,"td")(187,"div",76)(188,"div",77)(189,"p",78),e._uU(190," 8 "),e.qZA()()()(),e.TgZ(191,"td")(192,"div",73)(193,"p",74),e._uU(194," 9 "),e.qZA()()(),e.TgZ(195,"td")(196,"div",73)(197,"p",75),e._uU(198," 10 "),e.qZA()()(),e.TgZ(199,"td")(200,"div",73)(201,"p",75),e._uU(202," 11 "),e.qZA()()()(),e.TgZ(203,"tr")(204,"td")(205,"div",73)(206,"p",74),e._uU(207," 12 "),e.qZA()()(),e.TgZ(208,"td")(209,"div",73)(210,"p",74),e._uU(211," 13 "),e.qZA()()(),e.TgZ(212,"td")(213,"div",73)(214,"p",74),e._uU(215," 14 "),e.qZA()()(),e.TgZ(216,"td")(217,"div",73)(218,"p",74),e._uU(219," 15 "),e.qZA()()(),e.TgZ(220,"td")(221,"div",73)(222,"p",74),e._uU(223," 16 "),e.qZA()()(),e.TgZ(224,"td")(225,"div",73)(226,"p",75),e._uU(227," 17 "),e.qZA()()(),e.TgZ(228,"td")(229,"div",73)(230,"p",75),e._uU(231," 18 "),e.qZA()()()(),e.TgZ(232,"tr")(233,"td")(234,"div",73)(235,"p",74),e._uU(236," 19 "),e.qZA()()(),e.TgZ(237,"td")(238,"div",73)(239,"p",74),e._uU(240," 20 "),e.qZA()()(),e.TgZ(241,"td")(242,"div",73)(243,"p",74),e._uU(244," 21 "),e.qZA()()(),e.TgZ(245,"td")(246,"div",73)(247,"p",74),e._uU(248," 22 "),e.qZA()()(),e.TgZ(249,"td")(250,"div",73)(251,"p",74),e._uU(252," 23 "),e.qZA()()(),e.TgZ(253,"td")(254,"div",73)(255,"p",75),e._uU(256," 24 "),e.qZA()()(),e.TgZ(257,"td")(258,"div",73)(259,"p",75),e._uU(260," 25 "),e.qZA()()()(),e.TgZ(261,"tr")(262,"td")(263,"div",73)(264,"p",74),e._uU(265," 26 "),e.qZA()()(),e.TgZ(266,"td")(267,"div",73)(268,"p",74),e._uU(269," 27 "),e.qZA()()(),e.TgZ(270,"td")(271,"div",73)(272,"p",74),e._uU(273," 28 "),e.qZA()()(),e.TgZ(274,"td")(275,"div",73)(276,"p",74),e._uU(277," 29 "),e.qZA()()(),e.TgZ(278,"td")(279,"div",73)(280,"p",74),e._uU(281," 30 "),e.qZA()()()()()()()()()()()(),e.TgZ(282,"div",79)(283,"h1",80),e._uU(284),e.ALo(285,"transloco"),e.qZA(),e.TgZ(286,"ul",81)(287,"li",82),e._UZ(288,"img",83),e.TgZ(289,"span"),e._uU(290,"Hana T\xf3thov\xe1 "),e.qZA(),e.TgZ(291,"p",84),e._uU(292," 1100 "),e._UZ(293,"img",85),e.qZA()(),e.TgZ(294,"li",82),e._UZ(295,"img",86),e.TgZ(296,"span"),e._uU(297,"Danica Bottov\xe1"),e.qZA(),e.TgZ(298,"p",87),e._uU(299," 780 "),e._UZ(300,"img",88),e.qZA()(),e.TgZ(301,"li",82),e._UZ(302,"img",89),e.TgZ(303,"span"),e._uU(304,"Ivana E\u0161tokov"),e.qZA(),e.TgZ(305,"p",90),e._uU(306," 540 "),e._UZ(307,"img",88),e.qZA()(),e.TgZ(308,"li",91),e._UZ(309,"img",92),e.TgZ(310,"span"),e._uU(311,"Denis Biskup"),e.qZA(),e.TgZ(312,"p",90),e._uU(313," 390 "),e._UZ(314,"img",88),e.qZA()()(),e.TgZ(315,"a",18)(316,"div",93)(317,"button",94),e._uU(318),e.ALo(319,"transloco"),e.qZA()()()()()),2&s&&(e.xp6(2),e.hij(" ",e.lcZ(3,20,"")," "),e.xp6(7),e.hij(" ",e.lcZ(10,22,"Increase Your Knowledge By Learning!")," "),e.xp6(12),e.hij(" ",e.lcZ(22,24,"Take Me There")," "),e.xp6(8),e.hij(" ",l.streak," "),e.xp6(9),e.hij(" ",l.coinscount," "),e.xp6(6),e.hij(" ",e.lcZ(45,26,"Your Coins")," "),e.xp6(7),e.hij(" ",l.eventscount," "),e.xp6(2),e.hij(" ",e.lcZ(54,28," Notes For Sale")," "),e.xp6(7),e.hij(" ",l.percentcount,"% "),e.xp6(2),e.hij(" ",e.lcZ(63,30,"Target For Next Event")," "),e.xp6(4),e.hij(" ",e.lcZ(67,32,"Notes")," "),e.xp6(9),e.hij(" ",e.lcZ(76,34,"Your Notes")," "),e.xp6(3),e.hij(" ",e.lcZ(79,36,"Make Better Learning Possible")," "),e.xp6(5),e.hij(" ",e.lcZ(84,38,"Add")," "),e.xp6(8),e.hij(" ",e.lcZ(92,40,"Others Notes")," "),e.xp6(3),e.hij(" ",e.lcZ(95,42,"Have a Look at Others Notes")," "),e.xp6(5),e.hij(" ",e.lcZ(100,44,"Look")," "),e.xp6(9),e.hij(" ",e.lcZ(109,46,"March")," "),e.xp6(176),e.hij(" ",e.lcZ(285,48,"Leaderboard")," "),e.xp6(34),e.hij(" ",e.lcZ(319,50,"Get Coins")," "))},dependencies:[r.Ot],encapsulation:2}),t})();var c=i(6879);const g=[{path:"",component:o}];let x=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(g),c.z,r.y4]}),t})()}}]);