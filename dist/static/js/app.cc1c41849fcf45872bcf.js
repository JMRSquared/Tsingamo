webpackJsonp([1],{NHnr:function(t,e,a){"use strict";function s(t){a("OWhz")}function i(t){a("OZRV")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={name:"app"},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],c={render:r,staticRenderFns:l},d=c,u=a("VU/8"),v=s,m=u(o,d,!1,v,null,null),p=m.exports,f=a("/ocq"),h={name:"Home",data:function(){return{selectedMember:0,selectedOption:!0,showLessQualifications:!0,navItems:["Home","Strategic plan","Services","Expertise","Qualifications","Our team","Contact us"],navItemsID:["Home","StrategicPlan","Services","Expertise","Qualifications","OurTeam","ContactUs"],contactUs:{companyRegistration:"2011/009307/07",servicesSETAAccreditationNo:12243,address:"08 Nebraska, Emily Hobhouse Street, Roodepoort,Wilgeheuwel,Roodepoort, 1724",contactNo:"+27 (0)83 200 4414",email:"Mmakhoshi@tsingamo.com"},servicesText:[{header:"Training",icon:"",text:"Staff development, implementation of relevant training intervention to meet skills requirements of the industry."},{header:"ETQA related services",icon:"",text:"We strive to comply with quality and accreditation standards as stipulated in ETQAs and SAQA."},{header:"Learnership support services",icon:"",text:"We also strive to build mutually beneficial relationships with all our stakeholders."},{header:"Skills Development/ SMME Consulting",icon:"",text:"We have experts in our faculty specializing in specific areas that serve organizations of numerous industries."}],strategicPlans:[{icon:"flaticon-button",title:"Our vision",text:"We envision in DELIVERING SUSTAINABLE HUMAN CAPITAL FOR THE FUTURE"},{icon:"flaticon-listing-option",title:"mission",text:"Our mission is to provide quality education, training and development in accordance with the prescribed criteria of the South African skills development strategy."},{icon:"flaticon-locked-internet-security-padlock",title:"Objectives",text:"provide qualifications that would enable learners to gain employment, retain new career fields and to up-grade current career skills. provide  quality eduction, Training and Development in accordance with the prescribed criteria of the South African development"}],expertises:[{icon:"flaticon-study-certificate",header:"Training & development",text:"SETA accredited programmes and non-accredited"},{icon:"flaticon-people",header:"Human Resources",text:"Human Resources and Labour Relations Consulting"},{icon:"flaticon-support",header:"Process Improvement",text:"Business Re-Engineering & Process Improvement"},{icon:"flaticon-wrench",header:"Productivity",text:"Increased Production by using various measures."},{icon:"flaticon-policeman",header:"Research & Assessment",text:"Research by using a unique approach combined with the strong assessors"},{icon:"",header:"Job Creation",text:"Job Creation through Development of Entrepreneurs"}],team:[{name:"Maladze Makhoshi",cell:["083 200 4414","083 200 8314"],email:"mmakhoshi@gmail.com",img:"static/maladze.jpg",education:["Currently Studying MBA","BA Psychology","Certificate in Advance Labour Law (Post Graduate studies)","Post Graduate Diploma in Business Management (Major in Human Resources Management and Strategic Management)","Diploma in Commercial Law","Certificate in Disciplinary Enquiries at the Workplace","Assessor – Level 5 Training Experience"],experience:["•Tsingamo Management Consultants – CEO","• Service SETA as an ER Specialist (Employee Relations) on fixed duration contract","• Mkwali Consultant as an ER Consultant on limited duration contract FNB as an Human Resources Business Partner","• ER Specialist Huawei Technologies as a Senior HR Business Partner","• MTN South Africa as a HR Business Partner","• Yocar Trading – Director (Human Resources and Develipment)","• Engineering and Manufacturing environment (Emerson Energy Power Systems) as Human Resources Officer - Generalist","• FSH Labour Consultant – Human Resources Manager","• Brian Adams & Ass as a ER/ Human Resources Consulting"],history:"Maladze’s HR and ER experience is centered around the development and reviewing of policies,training line managers on policies, formulating disciplinary charges, chairing disciplinary andappeal disciplinary hearings, representing organizations at CCMA, advising and guiding linemanagers and employees on HR Policies, Process and Procedures, Management of ER process,Salary and Benefits negotiation agreement, Union Recognition agreement etc."}],qualifications:[{id:48641,count:5,text:"National Certificate: Labour Relations Practice"},{id:49648,count:2,text:"National Certificate: New Venture Creation (SMME)"},{id:48888,count:5,text:"National Diploma: Hiring Operations Management"},{id:49419,count:5,text:"National Diploma: Business Consulting Practice"},{id:49076,count:5,text:"National Diploma: Organisational Transformation and Change Management"},{id:48889,count:4,text:"Further Education and Training Certificate: Hiring Operations"},{id:49784,count:5,text:"National Diploma: Labour Relations Practice: Dispute Resolution"},{id:"57712 LP 58344",count:4,text:"Further Education and Training Certificate: Generic Management : Administration Management"},{id:"57712 LP 74630",count:4,text:"Further Education and Training Certificate: Generic Management: General Management"},{id:58063,count:4,text:"Further Education and Training Certificate: Labour Recruitment Services"},{id:"59201 LP 60269",count:5,text:"National Certificate: Generic Management: General Management"},{id:"59201 LP 74512",count:5,text:"National Certificate: Generic Management: Strategic Management"},{id:"61595 LP 59909",count:4,text:"Further Education and Training Certificate: Business Administration Services"},{id:61755,count:1,text:"General Education and Training Certificate: Business Practice"},{id:66249,count:4,text:"Further Education and Training Certificate: New Venture Creation"},{id:74570,count:6,text:"National Certificate: Labour Relations Practice"},{id:79886,count:5,text:"National Certificate: Business Advising"}]}},methods:{goto:function(t){$("html, body").animate({scrollTop:$("#"+t).offset().top},2e3)}},mounted:function(){!function(t){function e(){t(".preloader").length&&(t(".preloader").delay(500).fadeOut(500),t("body").removeClass("page-load"))}function a(){if(o.length){n.scrollTop()>=130?o.addClass("fixed-header"):o.removeClass("fixed-header")}}function s(){t(".fact-counter").length&&t(".fact-counter .count.animated").each(function(){var e=t(this),a=e.find(".count-num").attr("data-stop"),s=parseInt(e.find(".count-num").attr("data-speed"),10);e.hasClass("counted")||(e.addClass("counted"),t({countNum:e.find(".count-text").text()}).animate({countNum:a},{duration:s,easing:"linear",step:function(){e.find(".count-num").text(Math.floor(this.countNum))},complete:function(){e.find(".count-num").text(this.countNum)}}));var i=t(this).children(".progress-bar").attr("aria-valuenow");t(this).children(".progress-bar").css("width",i+"%")})}function i(){if(t(".sortable-masonry").length){var e=t(window),a=t(".sortable-masonry .items-container"),s=t(".sortable-masonry .filter-btns");a.isotope({filter:"*",masonry:{columnWidth:1},animationOptions:{duration:1e3,easing:"linear"}}),s.find("li").on("click",function(){var e=t(this).attr("data-filter");try{a.isotope({filter:e,animationOptions:{duration:1e3,easing:"linear",queue:!1}})}catch(t){}return!1}),e.on("bind","resize",function(){var t=s.find("li.active").attr("data-filter");a.isotope({filter:t,animationOptions:{duration:1e3,easing:"linear",queue:!1}})});var i=t(".sortable-masonry .filter-btns li");i.on("click",function(){var e=t(this);e.hasClass("active")||(i.removeClass("active"),e.addClass("active"))})}}var n=t(window),o=t(".header"),r=t(".dropdown-toggle"),l=t(".our-team"),c=t(".photo-gallery"),d=t(".testimonials-carousel"),u=t(".testimonials-carousels"),v=t(".partner-slider"),m=t("#contact-form");t("#bs-example-navbar-collapse-1").each(function(){r.on("click",function(){n.width()<992&&(t(this).parent(".dropdown").hasClass("visible")?(t(this).parent(".dropdown").children(".dropdown-menu").first().stop(!0,!0).slideUp(300),t(this).parent(".dropdown").removeClass("visible")):(t(this).parent(".dropdown").children(".dropdown-menu").stop(!0,!0).slideDown(300),t(this).parent(".dropdown").addClass("visible")))}),n.on("resize",function(){n.width()>991&&(t(".dropdown-menu").removeAttr("style"),t(".dropdown ").removeClass("visible"))})});var p=t(".search-bar a"),f=t("#search");if(p.on("click",function(t){t.preventDefault(),f.addClass("visible"),t.stopPropagation()}),t(".src-close").on("click",function(){f.removeClass("visible")}),f.on("click",function(t){t.stopPropagation()}),n.on("click",function(t){f.removeClass("visible")}),n.on("load",function(){var e=location.pathname,a=e.substring(e.lastIndexOf("/")+1);t(".navbar-nav li a").each(function(e){var s=t(this);a==s.attr("href")?s.parent("li").addClass("active"):""==a&&t(".navbar-nav li.first").addClass("active")})}),l.length&&l.owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},1024:{items:3},1200:{items:4}}}),c.length&&c.owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:2},1024:{items:3},1200:{items:3}}}),d.length&&d.owlCarousel({loop:!0,margin:30,nav:!0,autoplayHoverPause:!1,autoplay:5e3,smartSpeed:700,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1}}}),u.length&&u.owlCarousel({loop:!0,margin:30,nav:!0,autoplayHoverPause:!1,autoplay:5e3,smartSpeed:700,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},600:{items:1},760:{items:2},1024:{items:3},1200:{items:3}}}),v.length&&v.owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:4e3,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},480:{items:2},600:{items:3},800:{items:4},1200:{items:5}}}),t(".according_area").length&&t(".according_title").on("click",function(){t(this).hasClass("active")?t(this).addClass("active"):(t(".according_title").removeClass("active"),t(".according_details").slideUp(300),t(this).addClass("active"),t(this).next(".according_details").slideDown(300))}),t(".img_view").length&&t(".img_view").fancybox({openEffect:"elastic",closeEffect:"elastic",helpers:{media:{}}}),i(),m.length&&m.validate({rules:{firstname:{required:!0},email:{required:!0,email:!0},subject:{required:!0},message:{required:!0}},messages:{firstname:"Please enter your First Name",email:"Please enter valid Email",subject:"Please enter your Subject",message:"Please write your Message"},submitHandler:function(e){return t("#send").attr({disabled:"true",value:"Sending..."}),t.ajax({type:"POST",url:"email.php",data:t(e).serialize(),success:function(){t("#send").removeAttr("disabled").attr("value","Send"),t("#success").slideDown("slow"),setTimeout(function(){t("#success").slideUp("slow")},5e3),e.reset()},error:function(){t("#send").removeAttr("disabled").attr("value","Send"),t("#error").slideDown("slow"),setTimeout(function(){t("#error").slideUp("slow")},5e3)}}),!1}}),t(".wow").length){new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init()}t(document).ready(function(){!function(){var e=t(".range-slider"),a=t(".range-slider__range"),s=t(".range-slider__value");e.each(function(){s.each(function(){var e=t(this).prev().attr("value");t(this).html(e)}),a.on("input",function(){t(this).next(s).html(this.value)})})}()}),n.on("scroll",function(){a(),s()}),n.on("scroll",function(){a(),s()}),n.on("load",function(){e(),i()}),jQuery(function(){jQuery("a.video-popup").YouTubePopUp()}),jQuery(function(){jQuery("a.video-popup").YouTubePopUp()})}(window.jQuery)}},g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper home-page page-load"},[a("header",{staticClass:"header",attrs:{id:"header-1"}},[a("div",{staticClass:"main-nav"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("nav",{staticClass:"navbar navbar-default"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav navbar-right"},t._l(t.navItemsID,function(e,s){return a("li",{key:s},[a("a",{attrs:{role:"button"},on:{click:function(a){t.goto(e)}}},[t._v(t._s(t.navItems[s]))])])}))])])])])])])]),t._v(" "),a("section",{attrs:{id:"slider"}},[a("div",{staticClass:"slider-item",attrs:{id:t.navItemsID[0]}},[a("div",{staticClass:"carousel slide",attrs:{id:"carousel-example-generic","data-ride":"carousel"}},[t._m(1,!1,!1),t._v(" "),a("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},[a("div",{staticClass:"item active"},[a("img",{attrs:{src:"static/withOldMan.jpg",alt:"..."}}),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-sm-12 m-t-20"},[a("div",{staticClass:"carousel-caption"},[a("span",{staticClass:"title-tag"},[t._v("TSINGAMO management consultant")]),t._v(" "),a("span",[t._v("AND People Development")]),t._v(" "),a("p",[t._v("is a 100% black owned company officially established in 2011.\n                    ")]),t._v(" "),a("p",[t._v("\n                      It was established out of passion for people development and a desire to improve the quality of Education Training and Development (ETD) practice in South Africa.\n                    ")]),t._v(" "),a("a",{staticClass:"btn btn-primary margin-top-30",on:{click:function(e){t.goto(t.navItemsID[7])}}},[t._v("Contact Us")])])])])])])])]),t._v(" "),t._m(2,!1,!1)])]),t._v(" "),a("section",{staticClass:"full-row",attrs:{id:t.navItemsID[1]}},[a("div",{staticClass:"container"},[t._m(3,!1,!1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"section-title-area wow fadeIn",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("h2",{staticClass:"section-title color-black"},[a("span",{staticClass:"title-tag"},[t._v("\n                    Vision, Mission and Objectives\n                  ")]),t._v(" "+t._s(t.navItems[1])+"\n            ")])])])]),t._v(" "),a("div",{staticClass:"row"},t._l(t.strategicPlans,function(e,s){return a("div",{key:s,staticClass:"col-md-4 col-sm-6"},[a("div",{staticClass:"welcome-item image-rotate wow fadeInDown",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("a",{staticClass:"overflow-hidden text-center"},[a("i",{class:e.icon})]),t._v(" "),a("a",{staticClass:"text-center"},[a("h4",{staticClass:"thumb-title"},[t._v("\n                "+t._s(e.title)+"\n              ")])]),t._v(" "),a("p",[t._v("\n              "+t._s(e.text)+"\n            ")])])])}))])]),t._v(" "),a("section",{staticClass:"full-row background-1 overlay-1",attrs:{id:t.navItemsID[2]}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"section-title-area wow fadeIn",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("h2",{staticClass:"section-title color-white"},[a("span",{staticClass:"title-tag"}),t._v(t._s(t.navItems[2]))]),t._v(" "),a("span",{staticClass:"sub-title color-white"},[t._v("\n                  Our services include Training,Learnership support services,ETQA related services and Skills Development/ SMME Consulting.\n                ")])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"row"},t._l(t.servicesText,function(e){return a("div",{staticClass:"col-md-3 col-xs-12"},[a("div",{staticClass:"bg-white overlay traingle"},[a("div",{staticClass:"quote-title color-white"},[a("h4",{staticClass:"color-white"},[t._v(t._s(e.header))]),t._v(" "),a("p",[t._v("\n                    "+t._s(e.text)+"\n                  ")])]),t._v(" "),a("form",{staticClass:"quote-form",attrs:{method:"post",action:"#"}},[a("div",{staticClass:"form-group"},[a("h5",[a("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))])])]),t._v(" "),t._m(4,!0,!1)])])])}))])])])]),t._v(" "),a("section",{staticClass:"bg-gray",attrs:{id:t.navItemsID[3]}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"section-title-area wow fadeIn",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("h2",{staticClass:"section-title"},[a("span",{staticClass:"title-tag"},[t._v("What We Offer")]),t._v(t._s(t.navItems[3]))]),t._v(" "),a("span",{staticClass:"sub-title"},[t._v("\n                  We offer training that are tailored to provide solutions to help increase productivity,\n    performance and profitability of the municipalities, public and private services, transport,\n    manufacturing, banking, trading, hospitality, oil & gas, insurance, property and service related\n    organizations. We believe in customizing and developing specific solutions through a\n    collaborative process designed to identify a client’s needs, requirements and objectives.\n    The unique approach combined with our exquisite faculty of experts, competent trainers and\n    assessors, multilingual facilitators puts our lab in the position to spur the progress of the\n    establishment\n                ")])])])]),t._v(" "),a("div",{staticClass:"row"},[t._m(5,!1,!1),t._v(" "),t._l(t.expertises,function(e){return a("div",{staticClass:"col-md-4 col-sm-6"},[a("div",{staticClass:"service-item wow fadeInRight",attrs:{"data-wow-delay":"100ms","data-wow-duration":"500ms"}},[a("span",{class:e.icon}),t._v(" "),a("div",{staticClass:"service-caption margin-left-15"},[a("a",[a("h4",{staticClass:"service-title"},[t._v(t._s(e.header))])]),t._v(" "),a("p",[t._v("\n                "+t._s(e.text)+"\n              ")]),t._v(" "),a("a",{staticClass:"btn-link",attrs:{target:"_blank",href:"https://google.com/search?q="+e.header}},[t._v("Learn More")])])])])})],2)])]),t._v(" "),a("section",{attrs:{id:t.navItemsID[4]}},[a("div",{staticClass:"full-row background-2 overlay-1 padding-70-0"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"section-title-area wow fadeIn",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("h2",{staticClass:"section-title color-orange"},[t._v(t._s(t.navItems[4]))])])])]),t._v(" "),a("div",{staticClass:"row"},[t._m(6,!1,!1),t._v(" "),t.showLessQualifications?a("div",{staticClass:"fact-counter color-white"},t._l(t.qualifications,function(e,s){return s<4?a("div",{staticClass:"col-md-3 col-sm-3"},[a("div",{staticClass:"achivement text-center count wow fadeIn",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("strong",{staticClass:"count-num color-orange",attrs:{"data-speed":"300","data-stop":e.count}},[t._v(t._s(e.count))]),t._v(" "),a("span",{staticClass:"subject color-white"},[t._v(t._s(e.text))])])]):t._e()})):t._e(),t._v(" "),t.showLessQualifications?t._e():a("div",{staticClass:"col-md-12 col-sm-12"},[a("table",{staticClass:"bg-white"},[t._m(7,!1,!1),t._v(" "),t._l(t.qualifications,function(e){return a("tr",[a("td",{staticClass:"nqfId"},[t._v("\n                  "+t._s(e.id)+"\n                ")]),t._v(" "),a("td",{staticClass:"nqfLabel"},[t._v("\n                  "+t._s(e.text)+"\n                ")]),t._v(" "),a("td",{staticClass:"nqfLevel"},[t._v("\n                  "+t._s(e.count)+"\n                ")])])})],2)]),t._v(" "),a("div",{staticClass:"col-md-12 col-sm-12 wow fadeInUp",attrs:{"data-wow-delay":"300ms","data-wow-duration":"600ms"}},[a("center",[a("a",{staticClass:"btn btn-primary center text-center margin-top-50",attrs:{role:"button"},on:{click:function(e){t.showLessQualifications=!t.showLessQualifications}}},[t.showLessQualifications?a("span",[t._v("\n                      View All\n                    ")]):a("span",[t._v("\n                      View Less\n                    ")])])])],1)])])])]),t._v(" "),a("section",{staticClass:"full-row",attrs:{id:t.navItemsID[5]}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"section-title-area wow fadeIn",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("h2",{staticClass:"section-title"},[a("span",{staticClass:"title-tag"},[t._v("Learn more about us")]),t._v(t._s(t.navItems[5]))])])])]),t._v(" "),a("div",{staticClass:"row",staticStyle:{"padding-bottom":"20px"}},t._l(t.team,function(e,s){return a("div",{staticClass:"col-md-3 col-sm-4"},[a("div",{staticClass:"tab",class:{"tab-selected":s==t.selectedMember},attrs:{role:"button"},on:{click:function(e){t.selectedMember=s}}},[a("div",{staticClass:"blog-text tab-item"},[t._v("\n              "+t._s(e.name)+"\n            ")])])])})),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"item"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"blog-item image-rotate wow zoomIn",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("div",{staticClass:"full-row overflow-hidden"},[a("img",{staticStyle:{width:"100%",height:"100%","border-radius":"0px"},attrs:{src:t.team[t.selectedMember].img,alt:""}})]),t._v(" "),a("div",{staticClass:"blog-text"},[a("a",[a("h3",{staticClass:"thumb-title"},[t._v("\n                        "+t._s(t.team[t.selectedMember].name)+"\n                      ")])]),t._v(" "),a("p"),t._m(8,!1,!1),t._v(" "),t._l(t.team[t.selectedMember].cell,function(e){return a("p",[a("a",{attrs:{href:"tel:"+e}},[t._v(t._s(e))])])}),t._v(" "),t._m(9,!1,!1),t._v(" "),a("p",[a("a",{attrs:{href:"mailto:"+t.team[t.selectedMember].email}},[t._v(t._s(t.team[t.selectedMember].email))])])],2)])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-12"},[a("p",[t._v("\n                  "+t._s(t.team[t.selectedMember].history)+"\n                ")])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-12"},[a("div",{staticClass:"btn-group btn-group-justified",attrs:{role:"group","aria-label":"..."}},[a("a",{staticClass:"btn",class:{"btn-primary":t.selectedOption,"color-orange":!t.selectedOption},attrs:{role:"button"},on:{click:function(e){t.selectedOption=!t.selectedOption}}},[t._v("Education")]),t._v(" "),a("a",{staticClass:"btn",class:{"btn-primary":!t.selectedOption,"color-orange":t.selectedOption},attrs:{role:"button"},on:{click:function(e){t.selectedOption=!t.selectedOption}}},[t._v("Experience")])]),t._v(" "),a("div",{staticClass:"row bg-orange"},[a("form",{staticClass:"quote-form",attrs:{method:"post",action:"#"}},[a("div",{staticClass:"form-group"},[a("ul",{staticClass:"ul"},[t._l(t.team[t.selectedMember].education,function(e){return t.selectedOption?a("li",[t._v("\n                          "+t._s(e)+"\n                        ")]):t._e()}),t._v(" "),t._l(t.team[t.selectedMember].experience,function(e){return t.selectedOption?t._e():a("li",[t._v("\n                          "+t._s(e)+"\n                        ")])})],2)])])])])])])]),t._v(" "),a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("center",[a("h2",{staticClass:"section-title"},[a("span",{staticClass:"title-tag"},[a("h2",[t._v("ABOUT US")])])])])],1),a("br"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("center",[a("span",{staticClass:"sub-title"},[t._v("\n           Tsingamo Management Consultant & People Development (Pty) Ltd is a 100% Black owned establishment founded in the year 2011. The company was established out of passion for people development and with a quest to improve people’s lives in both the\n          workplace and in the everyday life of unemployment."),a("br"),t._v(" Central to the achievement of our objectives is the ability to satisfy client needs efficiently and effectively, staff development, implementation of relevant training intervention to meet\n          the skill requirements of the specified industry and the communities thereof, we strive to comply with quality and accreditation standards as stipulated in the ETQA and SAQA."),a("br"),t._v(" We also strive to create mutually beneficial relationships with all\n          our stakeholders, in addition to the extensive industrial experience in the Human Resource Management Field we have a pool of experts in our faculty specializing in various areas. We work together with other companies as partners in providing\n          hands on solutions to day to day business challenges."),a("br"),t._v(" We believe in a comprehensive approach becoming part of our clients business and knowing as much as possible about their operations and challenges thereof. We want to partner and support\n          your organization in meeting your needs and most importantly reaching your goals in improving bottom line results and to sustain the competitive advantage.\n        ")])])],1)])])])])]),t._v(" "),a("section",{staticClass:"full-row background-1 overlay-1",attrs:{id:t.navItemsID[6]}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"section-title-area wow fadeIn",attrs:{"data-wow-delay":"300ms","data-wow-duration":"500ms"}},[a("h2",{staticClass:"section-title color-white"},[a("span",{staticClass:"title-tag"}),t._v(t._s(t.navItems[6]))])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-md-offset-1 col-sm-12"},[a("div",{staticClass:"bg-white overlay traingle"},[a("div",{staticClass:"quote-title color-white"},[a("center",[a("h3",{staticClass:"color-white"},[t._v("Contact Details")])]),t._v(" "),a("p",[a("strong",[t._v("Company Registration : ")]),t._v(" "+t._s(t.contactUs.companyRegistration)+"\n              ")]),t._v(" "),a("p",[a("strong",[t._v("Services SETA Accreditation No : ")]),t._v(" "+t._s(t.contactUs.servicesSETAAccreditationNo)+"\n              ")]),t._v(" "),a("p",[a("strong",[t._v("Address : ")]),t._v(" "+t._s(t.contactUs.address)+"\n              ")]),t._v(" "),a("p",[a("strong",[t._v("Contact Numbers : ")]),t._v(" "+t._s(t.contactUs.contactNo)+"\n              ")]),t._v(" "),a("p",[a("strong",[t._v("Email Address : ")]),t._v(" "+t._s(t.contactUs.email)+"\n              ")])],1)])]),t._v(" "),a("div",{staticClass:"col-md-6 col-sm-12 col-md-offset-1"},[a("div",{staticClass:"bg-white",staticStyle:{padding:"15px"}},[a("form",{staticClass:"quote-form",attrs:{method:"post",action:"#"}},[a("div",{staticClass:"form-group"},[a("center",[a("h3",[t._v("Our Location")])])],1),t._v(" "),t._m(10,!1,!1)])])])])]),t._v(" "),t._m(11,!1,!1)])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#carousel-example-generic","data-slide-to":"0"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"request-quote bg-white"},[a("div",{staticClass:"quote-title color-white"},[a("h4",{staticClass:"color-white"},[t._v("Accredited with Service SETA")]),t._v(" "),a("p",[t._v("Accreditation No: 12243")])]),t._v(" "),a("form",{staticClass:"quote-form",attrs:{method:"post",action:"#"}},[a("div",{staticClass:"form-group"},[a("h5",[t._v("Qualifications")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("p",[t._v("1. National Certificate: New Venture Creation")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("p",[t._v("2. National Certificate: Labour Relations Practice")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("p",[t._v("3. Further Education and Training Certificate: Project Management")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-md-4"},[a("img",{staticClass:"img-responsive img-fluid wow zoomIn",attrs:{src:"static/logo.png",alt:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("p")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-12 row"},[a("div",{staticClass:"offset-md-3 col-md-6"},[a("h4",[t._v("\n              Our business focuses on Six(6) key areas :\n            ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 col-sm-12"},[a("div",{staticClass:"achivment-caption text-center margin-top-50 wow fadeInDown",attrs:{"data-wow-delay":"300ms","data-wow-duration":"100ms"}},[a("h3",{staticClass:"banner-title color-white"},[t._v("I have been registered as a Constituent Assessor with Services SETA for the following qualifications below which I believe they will be beneficial to industry.")]),t._v(" "),a("p",[t._v("The number represents the "),a("strong",{staticClass:"color-orange"},[t._v("NQF LEVEL")]),t._v(" and the label is the "),a("strong",[t._v("Qualification Name")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("\n                  Qualification ID\n                ")]),t._v(" "),a("th",[t._v("\n                  Qualification Name\n                ")]),t._v(" "),a("th",[t._v("\n                  NQF Level\n                ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Cell")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Email")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.607224462796!2d27.923091315523408!3d-26.079089883493694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957589da28fc8d%3A0x9d5073a4bb6a880c!2sNebraska!5e0!3m2!1sen!2sza!4v1511961922278",width:"100%",height:"450",frameborder:"0",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer-bottom"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-sm-12 col-xs-12"},[a("ul",{staticClass:"bottom-nav"},[a("li",[a("span",[t._v("Created by ")])]),t._v(" "),a("li",[a("a",{attrs:{target:"__blank",href:"http://jmrsquared.com/joe"}},[t._v("Sirwali Uzzie")])])])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-12 col-xs-12"},[a("ul",{staticClass:"bottom-nav"},[a("li")])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-12 col-xs-12"},[a("div",{staticClass:"copyright"},[a("span",[t._v("\n                      © 2017 All Rights Reserved by "),a("a",{attrs:{href:"#"}},[t._v("Tsingamo")])])])])])])])}],C={render:g,staticRenderFns:_},w=C,b=a("VU/8"),y=i,x=b(h,w,!1,y,"data-v-668c40b8",null),E=x.exports;n.a.use(f.a);var S=new f.a({routes:[{path:"/",name:"Home",component:E}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:S,template:"<App/>",components:{App:p}})},OWhz:function(t,e){},OZRV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cc1c41849fcf45872bcf.js.map