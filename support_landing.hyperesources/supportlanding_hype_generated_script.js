//	HYPE.documents["support_landing"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="support_landing.hyperesources",c="support_landing",e="supportlanding_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("supportlanding_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_538","HYPE_dtl_538",!0==(null!=a&&10>a||false==!0)?"HYPE-538.full.min.js":"HYPE-538.thin.min.js"),false==!0&&(a=a||l("HYPE_w_538","HYPE_wdtl_538","HYPE-538.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"onScreenLoad",source:"function(hypeDocument, element, event) {    window.expand = false;\n\twindow.scene = element;\n\twindow.shortCut = false;\n\twindow.tapAble = true;\n\twindow.searchOpen = false;\n\t\n\t\n\tvar theMainSceneContainer = hypeDocument.getElementById(hypeDocument.documentId()) ;\n\tvar mainPage = hypeDocument.getElementById('page')\n\t//theMainSceneContainer.style.width = '1340px';\n\ttheMainSceneContainer.style.height = hypeDocument.getElementProperty(mainPage, 'height')+'px';\n\t\n\t$('html,body').animate({scrollTop: 0}, 0 );\n}",identifier:"22"},{name:"landing_process",source:"function(hypeDocument, element, event) {\t\n\tvar tarStr = element.id;\n\tvar w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)\n\tvar h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)\n\tvar theMainSceneContainer = hypeDocument.getElementById(hypeDocument.documentId()) ;\n\t\n\t\n\t\n\tif(tarStr == 'expandBtn' || tarStr == 'xBtn'){\n\t\n\t\tif( window.tapAble == true){\n\t \t\twindow.tapAble = false;\n\n\t  \tif(!window.expand){\n\t  \t\twindow.expand = true;\n\t   \t\texpandProduct(558);\n\t  \t}else{\n\t   \t\twindow.expand = false;\n\t  \t    expandProduct(-558);\n\t  \t}\n\t  \n\t  \t}\n\t }\n\t \n\t if(tarStr == 'searchBtn_desktop'){\n\t   if(window.tapAble){\n\t   window.tapAble = false;\n\t   searchBar_process();\n\t   }\n\t }\n\t \n\t if(tarStr == 'searchIcon'){\n\t   if(window.searchOpen){\n\t   window.open(\"support_searchPage.html\",'_self')\n\t   }\n\t }\n\t \n\t function searchBar_process(){\n\t   if(window.searchOpen){\n\t   search_transition(-605);\n\t   $(txt_1).show();\n\t   $(txt_2).hide();\n\t   window.searchOpen = false;\n\t   }else{\n\t   search_transition(605);\n\t   $(txt_1).hide();\n\t   $(txt_2).show();\n\t   window.searchOpen =true;\n\t   }\n\t \n\t }\n\t \n\t function search_transition(i){\n\t   TweenMax.to($(searchBar), 0, {height:'+='+i+'px'});\n\t   TweenMax.to($(searchBarBG), 0, {height:'+='+i+'px'});\n\t   TweenMax.to($(page), 0, {opacity:1,onComplete : function(){resetContainer('page');}});\n\t }\n\n\t \n\t \n\t\n\tfunction expandProduct(i){\n\t  \n\t  if(i>0){\n\t  $(moreProduct).show();\n\t  $('html,body').animate({scrollTop: 650}, 500 );\n\t  TweenMax.to($(moreProduct), .5, {top:'362px',opacity:1,delay:.2});\n\t  TweenMax.to($(productGroup), 0, {height:'968px',delay:.5});\n\t  }else{\n\t  TweenMax.to($(moreProduct), .25, {top:'352px',opacity:0,onComplete : function(){$(moreProduct).hide();}});\n\t  TweenMax.to($(productGroup), 0, {height:'408px'});\n\t  }\n\t  TweenMax.to($(topic), .5, {top:'+='+i+'px'});\n\t  TweenMax.to($(repairGroup), .5, {top:'+='+i+'px'});\n\t  TweenMax.to($(restContent), .5, {top:'+='+i+'px'});\n\t   TweenMax.to($(about), .5, {top:'+='+i+'px'});\n\t  TweenMax.to($(ftBg), .5, {top:'+='+i+'px'});\n\t  TweenMax.to($(page), .5, {height:'+='+i+'px',onComplete : function(){resetContainer('page');}});\n\t  //alert('a')\n\t}\n\t\n\tfunction resetContainer(str,move=0){\n\t  var clientHeight = document.getElementById(str).clientHeight;\n\t  var clientTop = hypeDocument.getElementById(str).offsetTop;\n\t  theMainSceneContainer.style.height = clientTop + clientHeight +'px';\n\t  \n\t  \tif(move!=0){\n\t  \t\t$('html,body').animate({scrollTop: move}, 500 );\n\t  \t}\n\t  TweenMax.to($(page), .5, {opacity:1,onComplete : function(){window.tapAble = true;}});\n\t }\n}",identifier:"28"},{name:"onScreenLoad_mobile",source:"function(hypeDocument, element, event) {\twindow.expand = false;\n\twindow.scene = element;\n\twindow.shortCut = false;\n\twindow.tempHeight = 0;\n\tvar theMainSceneContainer = hypeDocument.getElementById(hypeDocument.documentId()) ;\n\tvar mainPage = hypeDocument.getElementById('page_mobile')\n\ttheMainSceneContainer.style.height = hypeDocument.getElementProperty(mainPage, 'height')+'px';\n    document.getElementById(\"myTextarea\").value = \"Fifth Avenue, New York City\";\n\t//alert(document.getElementById(\"myTextarea\").value)\n}",identifier:"438"},{name:"mobile_landing",source:"function(hypeDocument, element, event) {\tvar tarStr = element.id\n\tvar w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)\n\tvar h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)\n\tvar theMainSceneContainer = hypeDocument.getElementById(hypeDocument.documentId()) ;\n\t\n\tif(tarStr == 'moreBtn' || tarStr == 'search_landing'){\n\t\n\t openMenu();\n\t}\n\tif(tarStr == 'searchBtn'){\n\t  $(search_1).hide();\n\t  $(search_2).show();\n\t}\n\t\n\tif(tarStr == 'close'){\n\t closeMenu();\n\t}\n\t\n\tif(tarStr == 'back'){\n\tbackPrev();\n\t}\n\t\n\tif(tarStr == 'intoSeries'){\n\tintoNext();\n\t}\n\t\n\tif(tarStr == 'headerMenuBtn'){\n\t openMenu();\n\t}\n\tif(tarStr == 'backLanding'){\n\t   window.open(\"support_landing.html\",'_self')\n\t}\n\t\n\tfunction resetContainer(str){\n\t  var clientHeight = document.getElementById(str).clientHeight;\n\t  var clientTop = hypeDocument.getElementById(str).offsetTop;\n\t  theMainSceneContainer.style.height = clientTop + clientHeight +'px';\n\t  TweenMax.to($(keyboard_search), 0, {top: clientHeight - 330});\n\t }\n\t \n\t\n\tfunction openMenu(){\n\t\n\twindow.tempHeight = $(window).scrollTop();\n\t\n\t$('moreProducts').css({\n            'position':'fixed',\n            'width': '100%'\n        });\n        \n     if(tarStr == 'headerMenuBtn'){\n       $(layer2).hide();\n       $(headerMenu).show();\n       $(searchPage).hide();\n     \n     }else if(tarStr == 'search_landing'){\n       $(layer2).hide();\n       $(headerMenu).hide();\n       $(searchPage).show();\n        $(search_1).show();\n\t    $(search_2).hide();\n     }else{\n       $(layer2).show();\n       $(headerMenu).hide();\n       $(searchPage).hide();\n     }\n     \n    document.getElementById('moreProducts').style.height = h + 'px';\n    document.getElementById('bg').style.height = (h-2)+ 'px';\n\n\n\t//TweenMax.to($(moreProducts), 0, {height: h});\n\t//TweenMax.to($(bg), 0, {height: h-2});\n\t//TweenMax.to($(layer1), 0, {top: (h - 365)/2+30});\n\t//TweenMax.to($(layer2), 0, {top: (h - 410)/2+30});\n\t\n\t$(moreProducts).show();\n\t//TweenMax.to($(moreProducts), 0, {top: $(window).scrollTop()});\n\tTweenMax.to($(moreProducts), .25, {autoAlpha: 1});\n\t\n\t$(back).hide();\n\tresetContainer('moreProducts');\n\t}\n\t\n\tfunction closeMenu(){\n\t$('moreProducts').css({ 'position': 'static'});\n\tTweenMax.to($(moreProducts), .25, {autoAlpha: 0 , onComplete : function(){ $(moreProducts).hide()}})\n\tresetContainer('page_mobile');\n\t$('html,body').animate({scrollTop: window.tempHeight }, 0 );\n\t}\n\t\n\t\t\n\t\n\t\n}",identifier:"461"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_538(c,e,{"25":{p:1,n:"Group%202.svg",g:"697",t:"image/svg+xml"},"18":{p:1,n:"SearchBar.svg",g:"702",t:"image/svg+xml"},"10":{p:1,n:"united-states-flag_2x.jpg",g:"615",o:true,t:"@2x"},"26":{p:1,n:"1.1%20Mobile%20landing%20page-1.jpg",g:"789",o:true,t:"@1x"},"19":{p:1,n:"htc-aero-global-opal-silver-2v-listing.png",g:"720",o:true,t:"@1x"},"11":{p:1,n:"PastedVector-22.svg",g:"677",t:"image/svg+xml"},"27":{p:1,n:"Mobile%20landing%20text.svg",g:"791",t:"image/svg+xml"},"0":{p:1,n:"PastedVector-6.svg",g:"472",t:"image/svg+xml"},"12":{p:1,n:"PastedVector.svg",g:"682",t:"image/svg+xml"},"1":{p:1,n:"PastedVector-7.svg",g:"466",t:"image/svg+xml"},"20":{p:1,n:"htc-aero-global-opal-silver-2v-listing_2x.png",g:"720",o:true,t:"@2x"},"2":{p:1,n:"PastedVector-11.svg",g:"489",t:"image/svg+xml"},"13":{p:1,n:"PastedVector-3.svg",g:"689",t:"image/svg+xml"},"3":{p:1,n:"Pasted-6.jpg",g:"549",o:true,t:"@1x"},"21":{p:1,n:"Header_background.jpg",g:"610",o:true,t:"@1x"},"14":{p:1,n:"Group.svg",g:"694",t:"image/svg+xml"},"4":{p:1,n:"about.svg",g:"580",t:"image/svg+xml"},"5":{p:1,n:"header.svg",g:"583",t:"image/svg+xml"},"15":{p:1,n:"PopularSearch.svg",g:"704",t:"image/svg+xml"},"22":{p:1,n:"Artboard.jpg",g:"778",o:true,t:"@1x"},"6":{p:1,n:"Group%206.png",g:"602",t:"@1x"},"23":{p:1,n:"Group%203.svg",g:"596",t:"image/svg+xml"},"16":{p:1,n:"Hello.svg",g:"706",t:"image/svg+xml"},"7":{p:1,n:"Group%205.svg",g:"604",t:"image/svg+xml"},"8":{p:1,n:"Pasted.png",g:"608",t:"@1x"},"24":{p:1,n:"repairGroup.svg",g:"780",t:"image/svg+xml"},"17":{p:1,n:"searchContent_fast.svg",g:"711",t:"image/svg+xml"},"9":{p:1,n:"united-states-flag.jpg",g:"615",o:true,t:"@1x"}},h,[],d,[{n:"Untitled Scene",o:"1",X:[0,1]}],[{A:{a:[{p:4,h:"438"}]},o:"435",p:"600px",x:0,cA:false,Z:2723,Y:360,c:"#DADADA",L:[],bY:1,d:360,U:{},T:{"434":{i:"434",n:"expand",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["829","828","827","825","826","824","840","839","838","837","836","835","834","833","832","831","830","807","820","817","812","822","821","819","816","815","813","811","814","810","809","818","808","806","823","805","797","804","802","800","799","801","803","798","845","843","844","842","841","796"],v:{"822":{c:273,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,w:"",N:1,A:"#ECECEC",x:"visible",j:"absolute",B:"#ECECEC",k:"div",bF:"808",C:"#ECECEC",z:12,O:1,D:"#ECECEC",P:1,a:0,b:355},"841":{k:"div",x:"hidden",c:360,d:2607,z:5,r:"inline",a:0,j:"absolute",bF:"796",b:-10},"817":{c:273,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,w:"",N:1,A:"#ECECEC",x:"visible",j:"absolute",B:"#ECECEC",k:"div",bF:"808",C:"#ECECEC",z:14,O:1,D:"#ECECEC",P:1,a:0,b:421},"836":{x:"visible",cY:"1",k:"div",c:318.137,d:407.04300000000001,z:3,i:"search_2",a:22,j:"absolute",bF:"830",b:30},"804":{c:289,d:49,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"auto",M:1,i:"syncManagerBtn",w:"",N:1,A:"#19B9E4",x:"visible",j:"absolute",O:1,k:"div",B:"#19B9E4",C:"#19B9E4",z:7,bF:"845",D:"#19B9E4",P:1,a:32,b:1336},"823":{c:360,d:512,I:"None",r:"inline",J:"None",K:"None",g:"#E9E9E9",L:"None",M:0,i:"bg",w:"",N:0,A:"#494B4E",x:"visible",j:"absolute",B:"#494B4E",k:"div",O:0,C:"#494B4E",z:2,bF:"805",D:"#494B4E",P:0,a:0,b:0},"796":{k:"div",x:"visible",c:360,d:2596,z:1,i:"page_mobile",r:"inline",a:0,j:"absolute",b:10},"842":{h:"789",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:-82,j:"absolute",bF:"841",z:1,k:"div",c:360,d:2689,r:"inline",cQ:1,cR:1},"810":{G:"#000000",aU:8,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",w:"HTC One X9",bF:"808",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:4,aS:8,aT:8,a:86,F:"center",b:186},"818":{G:"#000000",aU:8,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"bold",w:"Select product model",bF:"808",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:1,aS:8,aT:8,a:54,b:0},"837":{h:"689",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"836",c:318.137,k:"div",z:2,d:728.61500000000001,r:"inline"},"805":{x:"visible",i:"moreProducts",a:0,b:0,j:"absolute",cY:"1",c:360,k:"div",z:3,d:512,r:"inline",e:0},"824":{x:"visible",i:"close",a:312,b:5,j:"absolute",bF:"805",aA:{a:[{p:4,h:"461"}]},k:"div",c:48,d:38,z:8,aP:"pointer"},"797":{c:303,d:30,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,i:"search_landing",N:1,bF:"845",A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"461"}]},j:"absolute",O:1,k:"div",C:"#D8DDE4",z:8,B:"#D8DDE4",D:"#D8DDE4",P:1,a:27,b:160},"843":{h:"791",p:"no-repeat",x:"visible",a:20,q:"100% 100%",b:85,j:"absolute",bF:"841",z:3,k:"div",c:313,d:2415,r:"inline",cQ:1,cR:1},"811":{G:"#000000",aU:8,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",w:"HTC One M9",bF:"808",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:6,aS:8,aT:8,a:85,F:"center",b:251},"819":{c:273,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,bF:"808",A:"#ECECEC",x:"visible",j:"absolute",B:"#ECECEC",k:"div",O:1,C:"#ECECEC",z:10,P:1,D:"#ECECEC",a:0,b:171},"830":{x:"visible",cY:"1",k:"div",c:358,d:471,z:5,i:"searchPage",a:1,j:"absolute",bF:"805",b:43},"838":{x:"visible",cY:"1",k:"div",c:316.27699999999999,d:226.46100000000001,z:6,i:"headerMenu",a:16,j:"absolute",bF:"805",b:60},"806":{k:"div",x:"visible",c:323,d:480,z:4,i:"layer2",a:16,j:"absolute",bF:"805",b:43},"825":{c:46,d:36,I:"Solid",cY:"1",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,N:1,bF:"824",A:"#19B9E4",x:"visible",aA:{a:[{p:4,h:"461"}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:2,B:"#19B9E4",D:"#19B9E4",P:1,a:0,b:0},"798":{c:357,d:249,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,w:"",N:1,A:"#19B9E4",x:"visible",aA:{a:[{j:"support_contact.html",p:5,k:false}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:1,B:"#19B9E4",D:"#19B9E4",bF:"845",P:1,a:0,b:2199},"844":{c:165,d:44,I:"None",J:"None",K:"None",g:"#DADADA",L:"None",M:0,N:0,bF:"841",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:11,b:2471},"812":{c:273,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,bF:"808",A:"#ECECEC",x:"visible",j:"absolute",B:"#ECECEC",k:"div",O:1,C:"#ECECEC",z:13,P:1,D:"#ECECEC",a:0,b:297},"831":{k:"div",x:"visible",c:360,d:463,z:2,i:"search_1",a:0,j:"absolute",bF:"830",b:15},"839":{h:"489",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"838",c:316.27699999999999,k:"div",z:1,d:226.46100000000001,r:"inline"},"807":{c:286,d:32,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,w:"",N:1,A:"#19B9E4",x:"visible",aA:{a:[{j:"support_product.html",p:5,k:false}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:5,B:"#19B9E4",D:"#19B9E4",bF:"806",P:1,a:16,b:127},"826":{h:"466",p:"no-repeat",x:"visible",a:18,q:"100% 100%",b:15,j:"absolute",bF:"824",c:14.037000000000001,k:"div",z:1,d:12.913,r:"inline"},"799":{c:277,d:49,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"auto",M:1,i:"onlineShoppingBtn",w:"",N:1,A:"#19B9E4",x:"visible",j:"absolute",O:1,k:"div",B:"#19B9E4",C:"#19B9E4",z:4,bF:"845",D:"#19B9E4",P:1,a:44,b:1038},"845":{k:"div",x:"visible",c:359,d:2450,z:38,a:0,j:"absolute",bF:"796",b:-6},"813":{G:"#000000",aU:8,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",w:"HTC One E9",bF:"808",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:7,aS:8,aT:8,a:86,F:"center",b:312},"832":{k:"div",x:"hidden",c:360,d:277,z:1,i:"keyboard_search",r:"inline",a:0,j:"absolute",bF:"831",b:186},"800":{c:289,d:49,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,i:"backupTransferBtn",w:"",N:1,A:"#19B9E4",x:"visible",aA:{a:[{j:"support_backupTransfer.html",p:5,k:false}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:5,B:"#19B9E4",D:"#19B9E4",bF:"845",P:1,a:39,b:1112},"808":{k:"div",x:"visible",c:280,d:409,z:4,a:29,j:"absolute",bF:"806",b:2},"827":{x:"visible",i:"back",a:-1,b:10,j:"absolute",cY:"0",aA:{a:[{p:4,h:"461"}]},k:"div",bF:"805",d:38,z:9,c:48,aP:"pointer"},"814":{G:"#000000",aU:8,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",w:"HTC One A9",bF:"808",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:5,aS:8,aT:8,a:86,F:"center",b:120},"833":{h:"677",p:"no-repeat",x:"visible",a:-774,q:"100% 100%",b:-191,j:"absolute",bF:"832",c:1140,k:"div",z:2,d:468,r:"inline"},"801":{c:156,d:133,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,i:"moreBtn",N:1,bF:"845",A:"#19B9E4",x:"visible",aA:{a:[{p:4,h:"461"}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:3,B:"#19B9E4",D:"#19B9E4",P:1,a:27,b:377},"809":{G:"#000000",aU:8,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",w:"HTC 10",bF:"808",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:104,F:"center",b:59},"820":{G:"#000000",aU:8,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",w:"HTC One M8 Mini",bF:"808",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:15,aS:8,aT:8,a:66,F:"center",b:435},"828":{h:"472",p:"no-repeat",x:"visible",a:15,q:"100% 100%",b:10,j:"absolute",bF:"827",c:8.8810000000000002,k:"div",z:1,d:14.428000000000001,r:"inline"},"815":{G:"#000000",aU:8,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",w:"HTC One M8",bF:"808",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:8,aS:8,aT:8,a:83,F:"center",b:371},"834":{x:"hidden",i:"input",a:0,b:0,j:"absolute",cY:"0",c:360,k:"div",z:2,d:156,r:"inline",bF:"831"},"802":{c:282,d:49,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,i:"appBtn",N:1,bF:"845",A:"#19B9E4",x:"visible",aA:{a:[{j:"support_app.html",p:5,k:false}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:6,B:"#19B9E4",D:"#19B9E4",P:1,a:39,b:1186},"821":{c:273,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,bF:"808",A:"#ECECEC",x:"visible",j:"absolute",B:"#ECECEC",k:"div",O:1,C:"#ECECEC",z:11,P:1,D:"#ECECEC",a:5,b:236},"829":{c:46,d:36,I:"Solid",cY:"1",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,N:1,bF:"827",A:"#19B9E4",x:"visible",aA:{a:[{p:4,h:"461"}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:2,B:"#19B9E4",D:"#19B9E4",P:1,a:0,b:0},"840":{c:314,d:40,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,i:"backLanding",N:1,bF:"838",A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"461"}]},j:"absolute",O:1,k:"div",C:"#D8DDE4",z:2,B:"#D8DDE4",D:"#D8DDE4",P:1,a:0,b:113},"816":{c:273,d:-1,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,bF:"808",A:"#ECECEC",x:"visible",j:"absolute",B:"#ECECEC",k:"div",O:1,C:"#ECECEC",z:9,P:1,D:"#ECECEC",a:5,b:103},"835":{h:"682",p:"no-repeat",x:"visible",i:"searchBtn",q:"100% 100%",a:22,j:"absolute",b:15,aA:{a:[{p:4,h:"461"}]},k:"div",z:1,d:33.637,bF:"834",c:313.80500000000001,aP:"pointer",r:"inline"},"803":{c:42,d:49,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,i:"headerMenuBtn",N:1,bF:"845",A:"#19B9E4",x:"visible",aA:{a:[{p:4,h:"461"}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:2,B:"#19B9E4",D:"#19B9E4",P:1,a:315,b:0}}},{o:"8",A:{a:[{p:4,h:"22"}]},p:"600px",x:1,a:100,Z:3000,cA:false,Y:1600,b:100,c:"#DADADA",L:[],bY:1,d:600,U:{},T:{"453":{i:"453",n:"expand",z:0.15,b:[],a:[{f:"c",p:2,y:0.15,z:0,i:"ActionHandler",s:{a:[{b:"453",symbolOid:"7",p:7}]},o:"453"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["893","892","891","860","865","864","868","866","867","863","862","869","861","870","859","886","876","883","884","879","881","878","877","882","880","875","887","885","874","853","849","850","851","854","852","848","858","857","856","855","890","889","888","873","872","871","847","894","846"],v:{"873":{c:95,d:66,I:"Solid",r:"inline",e:0,J:"Solid",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,N:1,bF:"871",A:"#19B9E4",x:"visible",aA:{a:[{j:"support_landing.html",p:5,k:false}]},j:"absolute",O:1,k:"div",C:"#19B9E4",z:3,B:"#19B9E4",D:"#19B9E4",P:1,a:486,b:0},"849":{c:95,d:180,I:"Solid",cY:"0",e:0,J:"Solid",r:"none",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,N:1,bF:"848",A:"#19B9E4",x:"visible",aA:{a:[{j:"support_warrantyRepair.html",p:5,k:false}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:5,B:"#19B9E4",D:"#19B9E4",P:1,a:466,b:235},"860":{h:"706",p:"no-repeat",x:"visible",a:245,q:"100% 100%",b:0,j:"absolute",bF:"859",c:410,k:"div",z:4,d:86,r:"inline"},"868":{G:"#000000",aU:8,aV:8,r:"inline",cY:"1",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",i:"txt_2",w:"Transfer content from",bF:"863",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:3,aS:8,aT:8,a:13,b:6},"892":{c:1178,d:421,I:"None",J:"None",K:"None",g:"#EAEAEA",L:"None",M:0,N:0,bF:"891",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:1,b:1},"887":{h:"596",p:"no-repeat",x:"visible",a:142,q:"100% 100%",b:57,j:"absolute",bF:"874",z:3,k:"div",c:899,d:287,r:"inline",cQ:1,cR:1},"855":{Q:3,x:"visible",R:"rgba(0, 0, 0, 0.300)",i:"restContent",a:82,S:0,j:"absolute",z:6,k:"div",T:2,d:354,b:1774,bF:"847",c:1180},"874":{Q:3,x:"visible",R:"rgba(0, 0, 0, 0.305)",i:"productGroup",a:82,S:0,j:"absolute",z:14,k:"div",T:2,d:408,b:445,bF:"847",c:1180},"893":{h:"780",p:"no-repeat",x:"visible",a:246,q:"100% 100%",b:60,j:"absolute",bF:"891",z:2,k:"div",c:682,d:297,r:"inline",cQ:1,cR:1},"861":{Q:3,x:"hidden",R:"rgba(0, 0, 0, 0.300)",a:0,b:138,j:"absolute",S:0,z:2,k:"div",T:2,d:50,i:"searchBar",bF:"859",aP:"default",c:900},"869":{c:900,d:50,I:"None",J:"None",K:"None",g:"#F9F9F9",L:"None",M:0,i:"searchBarBG",N:0,bF:"861",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"880":{c:1180,d:587,I:"None",J:"None",K:"None",g:"#F4F4F4",L:"None",M:0,N:0,bF:"875",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:18},"888":{k:"div",x:"visible",c:1180,d:481,z:5,i:"about",r:"inline",a:82,j:"absolute",bF:"847",b:2217},"856":{h:"778",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"855",c:1180,k:"div",z:3,d:354,r:"inline"},"875":{x:"visible",i:"moreProduct",a:0,b:362,j:"absolute",cY:"1",c:1180,k:"div",z:4,d:606,bF:"874",r:"inline",e:0},"894":{w:"",h:"610",p:"no-repeat",x:"visible",bS:37,q:"100% 100%",a:0,j:"absolute",b:0,z:2,k:"div",c:1600,d:560,r:"inline"},"862":{h:"711",p:"no-repeat",x:"visible",a:40,q:"100% 100%",b:70,j:"absolute",bF:"861",c:820,k:"div",z:3,d:540,r:"inline"},"881":{c:128,d:147,I:"None",r:"none",J:"None",K:"None",g:"#F4F4F4",L:"None",M:0,N:0,bF:"875",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:6,P:0,D:"#D8DDE4",a:291,b:83},"889":{h:"580",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"888",c:1180,k:"div",z:1,d:481,r:"inline"},"857":{w:"&nbsp;",h:"694",p:"no-repeat",x:"visible",a:40,q:"100% 100%",b:58,j:"absolute",bF:"855",z:4,k:"div",c:979,d:245,r:"inline"},"876":{c:163,d:192,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,i:"launchBtn",N:1,bF:"875",A:"#D8DDE4",x:"visible",aA:{a:[{j:"support_product.html",p:5,k:false}]},j:"absolute",O:1,k:"div",C:"#D8DDE4",z:10,B:"#D8DDE4",D:"#D8DDE4",P:1,a:266,b:77},"863":{k:"div",x:"visible",c:900,d:50,z:4,a:0,j:"absolute",bF:"861",b:0},"882":{bR:0,c:248,d:248,I:"None",r:"inline",J:"None",f:45,K:"None",g:"#F4F4F4",L:"None",M:0,aY:0,N:0,bF:"875",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",a:60,b:53},"850":{c:95,d:180,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,w:"",N:1,A:"#19B9E4",x:"visible",aA:{a:[{j:"support_backupTransfer.html",p:5,k:false}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:4,B:"#19B9E4",D:"#19B9E4",bF:"848",P:1,a:399,b:167},"858":{c:557,d:336,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,w:"",N:1,aA:{a:[{j:"support_contact.html",p:5,k:false}]},O:1,A:"#19B9E4",x:"visible",j:"absolute",k:"div",C:"#19B9E4",Q:3,z:5,D:"#19B9E4",R:"#000000",B:"#19B9E4",bF:"855",S:0,a:607,P:1,T:2,b:12},"877":{h:"602",p:"no-repeat",x:"visible",a:131,q:"100% 100%",b:93,j:"absolute",bF:"875",c:932,k:"div",z:4,d:385,r:"inline"},"864":{c:809,d:50,I:"None",r:"inline",e:0,J:"None",K:"None",g:"#F9F9F9",L:"None",aP:"pointer",M:0,i:"searchBtn_desktop",N:0,bF:"863",A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"28"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:5,B:"#D8DDE4",D:"#D8DDE4",P:0,a:0,b:0},"883":{c:85,d:83,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,i:"xBtn",N:1,bF:"875",A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"28"}]},j:"absolute",O:1,k:"div",C:"#D8DDE4",z:9,B:"#D8DDE4",D:"#D8DDE4",P:1,a:1093,b:17},"851":{c:104,d:167,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,N:1,bF:"848",A:"#19B9E4",x:"visible",aA:{a:[{j:"support_app.html",p:5,k:false}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:3,B:"#19B9E4",D:"#19B9E4",P:1,a:556,b:167},"859":{k:"div",x:"visible",c:900,d:226,z:15,a:222,j:"absolute",bF:"847",b:142},"870":{h:"704",p:"no-repeat",x:"visible",a:235,q:"100% 100%",b:208,j:"absolute",bF:"859",c:429,k:"div",z:1,d:18,r:"inline"},"878":{h:"604",p:"no-repeat",x:"visible",a:155,q:"100% 100%",b:248,j:"absolute",bF:"875",c:900,k:"div",z:5,d:303,r:"inline"},"846":{h:"549",p:"no-repeat",x:"visible",i:"ftBg",q:"100% 100%",a:0,j:"absolute",bS:39,z:1,k:"div",b:2049,d:650,c:1600,r:"inline"},"865":{c:53,d:50,I:"None",r:"inline",e:0,J:"None",K:"None",g:"#F9F9F9",L:"None",aP:"pointer",M:0,i:"searchIcon",N:0,bF:"863",A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"28"}]},j:"absolute",O:0,k:"div",C:"#D8DDE4",z:6,B:"#D8DDE4",D:"#D8DDE4",P:0,a:847,b:0},"884":{h:"608",p:"no-repeat",x:"visible",a:1137,q:"100% 100%",b:42,j:"absolute",bF:"875",c:24,k:"div",z:8,d:24,r:"inline"},"852":{c:1180,d:378,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,bF:"848",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"871":{k:"div",x:"visible",c:1340,d:68,z:4,a:2,j:"absolute",bF:"847",b:0},"879":{h:"720",p:"no-repeat",x:"visible",a:290,q:"100% 100%",b:90,j:"absolute",bF:"875",c:130,k:"div",z:7,d:125,r:"inline"},"847":{k:"div",x:"visible",c:1340,d:2699,z:3,i:"page",a:128,j:"absolute",bS:37,b:0},"890":{h:"615",p:"no-repeat",x:"visible",a:1074,q:"100% 100%",b:441,j:"absolute",bF:"888",c:30,k:"div",z:2,d:20,r:"inline"},"866":{G:"#8E8E8E",aU:8,c:284,d:22,aV:8,r:"inline",s:"Avenir,Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",v:"normal",i:"txt_1",w:"Search support",bF:"863",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:13,b:6},"885":{c:1180,d:408,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,bF:"874",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"853":{c:95,d:180,I:"Solid",cY:"0",e:0,J:"Solid",r:"inline",bD:"auto",K:"Solid",g:"rgba(25, 185, 228, 0.100)",L:"Solid",aP:"pointer",M:1,N:1,bF:"848",A:"#19B9E4",x:"visible",aA:{a:[{j:"support_download.html",p:5,k:false}]},O:1,j:"absolute",k:"div",C:"#19B9E4",z:6,B:"#19B9E4",D:"#19B9E4",P:1,a:885,b:161},"872":{h:"583",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:24,j:"absolute",bF:"871",c:1340,k:"div",z:2,d:24,r:"inline"},"848":{Q:3,x:"visible",R:"rgba(0, 0, 0, 0.300)",i:"topic",a:82,S:0,j:"absolute",z:12,k:"div",T:2,d:378,b:893,bF:"847",c:1180},"891":{Q:3,x:"visible",R:"rgba(0, 0, 0, 0.300)",i:"repairGroup",a:82,S:0,j:"absolute",z:22,k:"div",T:2,d:423,b:1311,bF:"847",c:1180},"867":{h:"702",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"863",c:900,k:"div",z:1,d:50,r:"inline"},"886":{c:163,d:192,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,i:"expandBtn",N:1,bF:"874",A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"28"}]},j:"absolute",O:1,k:"div",C:"#D8DDE4",z:5,B:"#D8DDE4",D:"#D8DDE4",P:1,a:99,b:152},"854":{h:"697",p:"no-repeat",x:"visible",a:218,q:"100% 100%",b:58,j:"absolute",bF:"848",z:2,k:"div",c:743,d:261,r:"inline",cQ:1,cR:1}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
