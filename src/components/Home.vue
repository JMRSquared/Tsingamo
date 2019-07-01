<template>
  <div class="page-wrapper home-page page-load">

    <!-- <div class="preloader">
          			<div id="ajaxloader3">
          				<div class="outer"></div>
          				<div class="inner"></div>
          			</div>
          		</div> -->

    <!--Header Section-->
    <header id="header-1" class="header">
      <div class="main-nav">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <nav class="navbar navbar-default">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                    <li v-for="(navItem,i) in navItemsID" :key="i">
                      <a role="button" class="" v-on:click="goto(navItem)">{{ navItems[i] }}</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--Slider Section-->
    <section id="slider">
      <div class="slider-item" :id="navItemsID[0]">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
             <div class="item active">
              <img src="static/withOldMan.jpg" alt="...">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-sm-12 m-t-20">
                    <div class="carousel-caption">
                      <span class="title-tag">TSINGAMO management consultant</span>
                      <span>AND People Development</span>
                      <p>is a 100% black owned company officially established in 2011.
                      </p>
                      <p>
                        It was established out of passion for people development and a desire to improve the quality of Education Training and Development (ETD) practice in South Africa.
                      </p>
                      <a class="btn btn-primary margin-top-30" v-on:click='goto(navItemsID[7])'>Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="request-quote bg-white">
          <div class="quote-title color-white">
            <h4 class="color-white">Accredited with Service SETA</h4>
            <p>Accreditation No: 12243</p>
          </div>
          <form class="quote-form" method="post" action="#">
            <div class="form-group">
              <h5>Qualifications</h5>
            </div>
            <div class="form-group">
              <p>1. National Certificate: New Venture Creation</p>
            </div>
            <div class="form-group">
              <p>2. National Certificate: Labour Relations Practice</p>
            </div>
            <div class="form-group">
              <p>3. Further Education and Training Certificate: Project Management</p>
            </div>
             <div class="form-group">
              <p>4.Conduct a Disciplinary Hearing NQF 5</p>
            </div>
             <div class="form-group">
              <p>5.Project Management NQF 4</p>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Strategic plan Section-->
    <section :id="navItemsID[1]" class="full-row">
      <div class="container">
        <div class="row">
                    <div class="col-sm-6 col-md-4">
              <img class="img-responsive img-fluid wow zoomIn" src="static/logo.png" alt="">
            </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title-area wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
              <h2 class="section-title color-black">
                <span class="title-tag">
                      Vision, Mission and Objectives
                    </span> {{ navItems[1] }}
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6" v-for="(plan,i) in strategicPlans" :key="i">
            <div class="welcome-item image-rotate wow fadeInDown" data-wow-delay="300ms" data-wow-duration="500ms">
              <a class="overflow-hidden text-center">
                <i :class="plan.icon"></i>
              </a>
              <a class="text-center">
                <h4 class="thumb-title">
                  {{ plan.title }}
                </h4>
              </a>
              <p>
                {{ plan.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Our Service Section-->
    <section :id="navItemsID[2]" class="full-row background-1 overlay-1">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title-area wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
              <h2 class="section-title color-white"><span class="title-tag"></span>{{ navItems[2] }}</h2>
              <span class="sub-title color-white">
                    Our services include Training,Learnership support services,ETQA related services and Skills Development/ SMME Consulting.
                  </span>
            </div>
          </div>    
        </div>
     </div>
     <div class="row " style="padding-left:20px;padding-right:20px">
           <div class="col-md-3 col-sm-6" v-for="services in servicesText" > 
              <div class="quote-title" style="padding-right:15px; margin-left-15;margin-bottom:10px">
              <center>
                <p class="color-white">
                  {{ services }}
                </p>
                </center>
            </div>
          </div>
          </div>
    </section>

    <!-- Expertise -->
    <section :id="navItemsID[3]" class="bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title-area wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
              <h2 class="section-title"><span class="title-tag">What We Offer</span>{{ navItems[3] }}</h2>
              <span class="sub-title">
                    We offer training that are tailored to provide solutions to help increase productivity,
      performance and profitability of the municipalities, public and private services, transport,
      manufacturing, banking, trading, hospitality, oil & gas, insurance, property and service related
      organizations. We believe in customizing and developing specific solutions through a
      collaborative process designed to identify a client’s needs, requirements and objectives.
      The unique approach combined with our exquisite faculty of experts, competent trainers and
      assessors, multilingual facilitators puts our lab in the position to spur the progress of the
      establishment
                  </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 row">
            <div class="offset-md-3 col-md-6">
              <h4>
                KEY FOCUSES :
              </h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6" v-for="expertise in expertises">
            <div class="service-item wow fadeInRight" data-wow-delay="100ms" data-wow-duration="500ms">
              <span :class="expertise.icon"></span>
              <div class="service-caption margin-left-15">
                <a>
                  <h4 class="service-title">{{ expertise.header }}</h4>
                </a>
                <p>
                  {{ expertise.text }}
                </p>
                <a class="btn-link" target="_blank" :href="'https://google.com/search?q=' + expertise.header">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Qualification-->
    <section :id="navItemsID[4]">
      <div class="full-row background-2 overlay-1 padding-70-0">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="section-title-area wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
                <h2 class="section-title color-orange">{{ navItems[4] }}</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="achivment-caption text-center margin-top-50 wow fadeInDown" data-wow-delay="300ms" data-wow-duration="100ms">
                <h3 class="banner-title color-white">Maladze has been registered as a Constituent Assessor with Services SETA for the following qualifications below which I believe they will be beneficial to industry.</h3>
                <p>The number represents the <strong class="color-orange">NQF LEVEL</strong> and the label is the <strong>Qualification Name</strong></p>
              </div>
            </div>
            <div v-if="showLessQualifications" class="fact-counter color-white">
              <div class="col-md-3 col-sm-3" v-if="i < 4" v-for="(qualification,i) in qualifications">
                <div class="achivement text-center count wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
                  <strong class="count-num color-orange" data-speed="300" :data-stop="qualification.count">{{ qualification.count }}</strong>
                  <span class="subject color-white">{{ qualification.text }}</span>
                </div>
              </div>
            </div>
            <div v-if="!showLessQualifications" class="col-md-12 col-sm-12">
              <table class="bg-white">
                <tr>
                  <th>
                    Qualification ID
                  </th>
                  <th>
                    Qualification Name
                  </th>
                  <th>
                    NQF Level
                  </th>
                </tr>
                <tr v-for="qualification in qualifications">
                  <td class="nqfId">
                    {{ qualification.id }}
                  </td>
                  <td class="nqfLabel">
                    {{ qualification.text }}
                  </td>
                  <td class="nqfLevel">
                    {{ qualification.count }}
                  </td>
                </tr>
              </table>
            </div>
            <div class="col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
              <center>
                <a role="button" v-on:click="showLessQualifications = !showLessQualifications" class="btn btn-primary center text-center margin-top-50">
                  <span v-if="showLessQualifications">
                        View All
                      </span>
                  <span v-else>
                        View Less
                      </span>
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Our Team -->
    <section :id="navItemsID[5]" class="full-row">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title-area wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
              <h2 class="section-title"><span class="title-tag">Learn more about us</span>{{ navItems[5] }}</h2>
            </div>
          </div>
        </div>
        <div class="row" style="padding-bottom:20px">
          <div v-for="(member,i) in team" class="col-md-3 col-sm-4">
            <div role="button" v-on:click="selectedMember = i" :class="{'tab-selected':i == selectedMember}" class="tab">
              <div class="blog-text tab-item">
                {{ member.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="item">
              <div class="row">
                <div class="col-md-4 col-sm-12">
                  <div class="blog-item image-rotate wow zoomIn" data-wow-delay="300ms" data-wow-duration="500ms">
                    <div class="full-row overflow-hidden">
                      <img :src="team[selectedMember].img" style="width:100%;height:100%;border-radius:0px" alt="">
                    </div>
                    <div class="blog-text">
                      <a>
                        <h3 class="thumb-title">
                          {{ team[selectedMember].name }}
                        </h3>
                      </a>
                      <p>
                        <p>
                          <strong>Cell</strong>
                        </p>
                        <p v-for="cell in team[selectedMember].cell"><a :href="'tel:' + cell">{{ cell }}</a></p>

                        <p>
                          <strong>Email</strong>
                        </p>
                        <p><a :href="'mailto:' + team[selectedMember].email">{{ team[selectedMember].email }}</a></p>
                    </div>
                  </div>

                </div>
                <div class="col-md-4 col-sm-12">
                  <p>
                    {{ team[selectedMember].history }}
                  </p>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="btn-group btn-group-justified" role="group" aria-label="...">
                    <a class="btn" role="button" v-on:click="selectedOption = !selectedOption" :class="{'btn-primary':selectedOption,'color-orange':!selectedOption}">Education</a>
                    <a class="btn" role="button" v-on:click="selectedOption = !selectedOption" :class="{'btn-primary':!selectedOption,'color-orange':selectedOption}">Experience</a>
                  </div>
                  <div class="row bg-orange">
                    <form class="quote-form" method="post" action="#">
                      <div class="form-group">
                        <ul class="ul">
                          <li v-if="selectedOption" v-for="edu in team[selectedMember].education">
                            {{ edu }}
                          </li>
                          <li v-if="!selectedOption" v-for="experi in team[selectedMember].experience">
                            {{ experi }}
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
<!--About Us-->
<section  :id="navItemsID[8]">

</section> 
  </div>
      </div>
    </section>
        <section :id="navItemsID[6]" class="full-row background-1 overlay-1" >
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title-area wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
              <h2 class="section-title color-orange"><span class="title-tag"></span>{{ navItems[6] }}</h2>
              <span class="sub-title color-white">Some companies we have worked with</span>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col-md-12">
        <div class="col-md-3">   
<img data-v-c8d45506="" alt="Nkwali" src="../assets/Nkwali.png" class="img-responsive img-fluid">
        </div>
              <div class="col-md-3">   
<img data-v-c8d45506="" alt="Nkwali" src="../assets/networx.png" class="img-responsive img-fluid">
        </div>
              <div class="col-md-3">   
<img data-v-c8d45506="" alt="Nkwali" src="../assets/pakanyo.png" class="img-responsive img-fluid">
        </div>
              <div class="col-md-3">   
<img data-v-c8d45506="" alt="Nkwali" src="../assets/tbwa.png" class="img-responsive img-fluid">
        </div>
        </div>
        </div>
      </div>
   </section>
<!--About us section-->
<section :id="navItemsID[7]" class="full-row">
<div class="container-fluid">
        <div class="col-md-12 col-sm-12">
            <div class="col-md-12 col-sm-12">
              <center><h2 class="section-title"><span><h2>ABOUT US</h2></span></h2>
               </center>
             </div><br>
            <div class="row">
          <div class="col-md-8 col-md-offset-2 col-sm-12">
            <center>
              <span style="font-size:15px">
             Tsingamo Management Consultant & People Development (Pty) Ltd is a 100% Black owned establishment founded in the year 2011. The company was established out of passion for people development and with a quest to improve people’s lives in both the
            workplace and in the everyday life of unemployment.<br><br> Central to the achievement of our objectives is the ability to satisfy client needs efficiently and effectively, staff development, implementation of relevant training intervention to meet
            the skill requirements of the specified industry and the communities thereof, we strive to comply with quality and accreditation standards as stipulated in the ETQA and SAQA.<br><br> We also strive to create mutually beneficial relationships with all
            our stakeholders, in addition to the extensive industrial experience in the Human Resource Management Field we have a pool of experts in our faculty specializing in various areas. We work together with other companies as partners in providing
            hands on solutions to day to day business challenges.<br><br> We believe in a comprehensive approach becoming part of our clients business and knowing as much as possible about their operations and challenges thereof. We want to partner and support
            your organization in meeting your needs and most importantly reaching your goals in improving bottom line results and to sustain the competitive advantage.
               </span>
          </center>
        </div>
     </div>
           </div>
      </div>
</section>
    <!-- Contact us Section-->
    <section :id="navItemsID[8]" class="full-row background-1 overlay-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title-area wow fadeIn" data-wow-delay="300ms" data-wow-duration="500ms">
              <h2 class="section-title color-white"><span class="title-tag"></span>{{ navItems[8] }}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-md-offset-4 col-sm-12">
            <div class="bg-white overlay traingle">
              <div class="quote-title color-white">
                <center>
                  <h3 class="color-white">Contact Details</h3>              
                <p>
                  <strong>Company Registration : </strong> {{ contactUs.companyRegistration }}
                </p>
                <p>
                  <strong>Services SETA Accreditation No : </strong> {{ contactUs.servicesSETAAccreditationNo }}
                </p>
                <p>
                  <strong>Address : </strong> {{ contactUs.address }}
                </p>
                <p>
                  <strong>Contact Numbers : </strong> {{ contactUs.contactNo }}
                </p>
                <p>
                  <strong>Email Address : </strong> {{ contactUs.email }}
                </p>
                 </center>
              </div>
            </div>
          </div>
          <!--
          <div class="col-md-6 col-sm-12 col-md-offset-1">
            <div class="bg-white" style="padding:15px">
              <form class="quote-form" method="post" action="#">
                <div class="form-group">
                  <center>
                    <h3>Our Location</h3>
                  </center>
                </div>
                <div class="form-group">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.607224462796!2d27.923091315523408!3d-26.079089883493694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957589da28fc8d%3A0x9d5073a4bb6a880c!2sNebraska!5e0!3m2!1sen!2sza!4v1511961922278"
                    width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
              </form>
            </div>
          </div>
          -->
        </div>
      </div>
   </section>

      <!--Footer Bottom-->
      <div id="footer-bottom">
        <div class="container-fluid">
          <div class="row">

            <div class="col-md-12 col-sm-12 col-xs-12 justify-end">
              <div class="copyright">
                <span>
                        &copy; 2017 All Rights Reserved by <a href="#">Tsingamo</a>
                      </span>
                      <br>
                       <span class="color-black">
                        Website Develped by <a href="https://ovalleaf.com/">ovalleaf</a>
                      </span>
              </div>
               
            </div>
          </div>
    
        </div>
      </div>
 

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      selectedMember: 0,
      selectedOption: true,
      showLessQualifications: true,
      navItems: [
        "Home",
        "Strategic plan",
        "Services",
        "Expertise",
        "Constituent Assessor Qualifications",
        "Ourteam",
        "Our Clients",
        "About Us",
        "Contact us"
      ],
      navItemsID: [
        "Home",
        "StrategicPlan",
        "Services",
        "Expertise",
        "ConstituentAssessorQualifications",
        "OurTeam",
        "OurClients",
        "AboutUs",
        "ContactUs"
      ],
      contactUs: {
        companyRegistration: "2011/009307/07",
        servicesSETAAccreditationNo: 12243,
        address:
          "08 Nebraska, Emily Hobhouse Street, Roodepoort,Wilgeheuwel,Roodepoort, 1724",
        contactNo: "+27 (0)83 200 4414",
        email: "Mmakhoshi@tsingamo.com"
      },
      servicesText: [
            		" Workplace Learning programs",
" Management Support",
" Learnership Support Services",
" SMME’s support",
" Chairing Disciplinary Hearings",
" Representation at CCMA/Bargaining Chambers",
" Develop Human Resources Policies and procedures",
" Workplace Performance Management",
"Entrepreneurship Development."
      ],
      strategicPlans: [
        {
          icon: "flaticon-button",
          title: "Our vision",
          text:
            "We envision in DELIVERING SUSTAINABLE HUMAN CAPITAL FOR THE FUTURE"
        },
        {
          icon: "flaticon-listing-option",
          title: "mission",
          text:
            "Our mission is to provide quality education, training and development in accordance with the prescribed criteria of the South African skills development strategy."
        },
        {
          icon: "flaticon-locked-internet-security-padlock",
          title: "Objectives",
          text:
            "provide qualifications that would enable learners to gain employment, retain new career fields and to up-grade current career skills. provide  quality eduction, Training and Development in accordance with the prescribed criteria of the South African development"
        }
      ],
      expertises: [
     {
          icon: "flaticon-study-certificate",
          header: "Training & development",
          text: "SETA accredited programmes and non-accredited"
        },
        {
          icon: "flaticon-people",
          header: "Human Resources",
          text: "Human Resources and Labour Relations Consulting"
        },
        {
          icon: "flaticon-support",
          header: "Business Re-Engineering",
          text: "Business Re-Engineering & Process Improvement"
        },
        {
          icon: "flaticon-wrench",
          header: "Productivity",
          text: "Increased Production by using various measures."
        },
        {
          icon: "",
          header: "Job Creation",
          text: "Job Creation through Development of Entrepreneurs"
        }

      ],
      team: [
        {
          name: "Maladze Makhoshi",
          cell: ["083 200 4414", "083 200 8314"],
          email: "mmakhoshi@gmail.com",
          img: "static/maladze.jpg",
          education: [
            "Currently Studying MBA",
            "BA Psychology",
            "Certificate in Advance Labour Law (Post Graduate studies)",
            "Post Graduate Diploma in Business Management (Major in Human Resources Management and Strategic Management)",
            "Diploma in Commercial Law",
            "Certificate in Disciplinary Enquiries at the Workplace",
            "Assessor – Level 5 Training Experience"
          ],
          experience: [
            "•Tsingamo Management Consultants – CEO",
            "• Service SETA as an ER Specialist (Employee Relations) on fixed duration contract",
            "• Mkwali Consultant as an ER Consultant on limited duration contract FNB as an Human Resources Business Partner",
            "• ER Specialist Huawei Technologies as a Senior HR Business Partner",
            "• MTN South Africa as a HR Business Partner",
            "• Yocar Trading – Director (Human Resources and Develipment)",
            "• Engineering and Manufacturing environment (Emerson Energy Power Systems) as Human Resources Officer - Generalist",
            "• FSH Labour Consultant – Human Resources Manager",
            "• Brian Adams & Ass as a ER/ Human Resources Consulting"
          ],
          history:
            "Maladze’s HR and ER experience is centered around the development and reviewing of policies,training line managers on policies, formulating disciplinary charges, chairing disciplinary andappeal disciplinary hearings, representing organizations at CCMA, advising and guiding linemanagers and employees on HR Policies, Process and Procedures, Management of ER process,Salary and Benefits negotiation agreement, Union Recognition agreement etc."
        }
      ],
      qualifications: [
        {
          id: 48641,
          count: 5,
          text: "National Certificate: Labour Relations Practice"
        },
        {
          id: 49648,
          count: 2,
          text: "National Certificate: New Venture Creation (SMME)"
        },
        {
          id: 48888,
          count: 5,
          text: "National Diploma: Hiring Operations Management"
        },
        {
          id: 49419,
          count: 5,
          text: "National Diploma: Business Consulting Practice"
        },
        {
          id: 49076,
          count: 5,
          text:
            "National Diploma: Organisational Transformation and Change Management"
        },
        {
          id: 48889,
          count: 4,
          text: "Further Education and Training Certificate: Hiring Operations"
        },
        {
          id: 49784,
          count: 5,
          text:
            "National Diploma: Labour Relations Practice: Dispute Resolution"
        },
        {
          id: "57712 LP 58344",
          count: 4,
          text:
            "Further Education and Training Certificate: Generic Management : Administration Management"
        },
        {
          id: "57712 LP 74630",
          count: 4,
          text:
            "Further Education and Training Certificate: Generic Management: General Management"
        },
        {
          id: 58063,
          count: 4,
          text:
            "Further Education and Training Certificate: Labour Recruitment Services"
        },
        {
          id: "59201 LP 60269",
          count: 5,
          text: "National Certificate: Generic Management: General Management"
        },
        {
          id: "59201 LP 74512",
          count: 5,
          text: "National Certificate: Generic Management: Strategic Management"
        },
        {
          id: "61595 LP 59909",
          count: 4,
          text:
            "Further Education and Training Certificate: Business Administration Services"
        },
        {
          id: 61755,
          count: 1,
          text: "General Education and Training Certificate: Business Practice"
        },
        {
          id: 66249,
          count: 4,
          text:
            "Further Education and Training Certificate: New Venture Creation"
        },
        {
          id: 74570,
          count: 6,
          text: "National Certificate: Labour Relations Practice"
        },
        {
          id: 79886,
          count: 5,
          text: "National Certificate: Business Advising"
        }
      ]
    };
  },
  methods: {
    goto(value) {
      $("html, body").animate(
        {
          scrollTop: $("#" + value).offset().top
        },
        2000
      );
    }
  },
  mounted() {
    //do something after mounting vue instance
    (function($) {
      "use strict";

      //Cache jQuery Selector
      var $window = $(window),
        $header = $(".header"), // 3. Update Header Style + Scroll to Top
        $dropdown = $(".dropdown-toggle"), // 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
        $team = $(".our-team"), // 7. Our Engineers Carousel
        $gallery = $(".photo-gallery"), // 8. Photo Gallery Carousel
        $client = $(".testimonials-carousel"), // 9. Testimonials Carousel Slider
        $client2 = $(".testimonials-carousels"), // 10. Testimonials Carousel-2 Slider
        $brand = $(".partner-slider"), // 13. Our Partner Logos Slider Auto
        $contact = $("#contact-form");

      // 1. Preloader For Hide loader
      function handlePreloader() {
        if ($(".preloader").length) {
          $(".preloader")
            .delay(500)
            .fadeOut(500);
          $("body").removeClass("page-load");
        }
      }

      // 2. Update Header Style + Scroll to Top
      function headerStyle() {
        if ($header.length) {
          var windowpos = $window.scrollTop();
          if (windowpos >= 130) {
            $header.addClass("fixed-header");
          } else {
            $header.removeClass("fixed-header");
          }
        }
      }

      // 3. dropdown submenu on hover in desktopand dropdown sub menu on click in mobile
      $("#bs-example-navbar-collapse-1").each(function() {
        $dropdown.on("click", function() {
          if ($window.width() < 992) {
            if (
              $(this)
                .parent(".dropdown")
                .hasClass("visible")
            ) {
              $(this)
                .parent(".dropdown")
                .children(".dropdown-menu")
                .first()
                .stop(true, true)
                .slideUp(300);
              $(this)
                .parent(".dropdown")
                .removeClass("visible");
            } else {
              $(this)
                .parent(".dropdown")
                .children(".dropdown-menu")
                .stop(true, true)
                .slideDown(300);
              $(this)
                .parent(".dropdown")
                .addClass("visible");
            }
          }
        });

        $window.on("resize", function() {
          if ($window.width() > 991) {
            $(".dropdown-menu").removeAttr("style");
            $(".dropdown ").removeClass("visible");
          }
        });
      });

      // 3. Click Search Icon and Open Search Field
      var $srcicon = $(".search-bar a"),
        $srcfield = $("#search");
      $srcicon.on("click", function(event) {
        event.preventDefault();
        $srcfield.addClass("visible");
        event.stopPropagation();
      });

      $(".src-close").on("click", function() {
        $srcfield.removeClass("visible");
      });

      $srcfield.on("click", function(event) {
        event.stopPropagation();
      });

      $window.on("click", function(e) {
        $srcfield.removeClass("visible");
      });

      // 4. Auto active class adding with navigation
      $window.on("load", function() {
        var current = location.pathname;
        var $path = current.substring(current.lastIndexOf("/") + 1);
        $(".navbar-nav li a").each(function(e) {
          var $this = $(this);
          // if the current path is like this link, make it active
          if ($path == $this.attr("href")) {
            $this.parent("li").addClass("active");
          } else if ($path == "") {
            $(".navbar-nav li.first").addClass("active");
          }
        });
      });

      // 5. Our Engineers Carousel
      if ($team.length) {
        $team.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          smartSpeed: 500,
          autoplay: false,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1024: {
              items: 3
            },
            1200: {
              items: 4
            }
          }
        });
      }

      // 6. Photo Gallery Carousel
      if ($gallery.length) {
        $gallery.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          smartSpeed: 500,
          autoplay: false,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1024: {
              items: 3
            },
            1200: {
              items: 3
            }
          }
        });
      }

      // 7. Testimonials Carousel Slider
      if ($client.length) {
        $client.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          autoplayHoverPause: false,
          autoplay: 5000,
          smartSpeed: 700,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1
            }
          }
        });
      }

      // 8. Testimonials Carousel-2 Slider
      if ($client2.length) {
        $client2.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          autoplayHoverPause: false,
          autoplay: 5000,
          smartSpeed: 700,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            760: {
              items: 2
            },
            1024: {
              items: 3
            },
            1200: {
              items: 3
            }
          }
        });
      }

      // 9. Our Partner Logos Slider Auto
      if ($brand.length) {
        $brand.owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          smartSpeed: 500,
          autoplay: 4000,
          navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
          ],
          responsive: {
            0: {
              items: 1
            },
            480: {
              items: 2
            },
            600: {
              items: 3
            },
            800: {
              items: 4
            },
            1200: {
              items: 5
            }
          }
        });
      }

      // 10. Use for Accordion Box
      if ($(".according_area").length) {
        $(".according_title").on("click", function() {
          if ($(this).hasClass("active")) {
            $(this).addClass("active");
          }

          //if ($(this).next('.according_details').is(':visible')){
          //				$(this).removeClass('active');
          //			}
          else {
            $(".according_title").removeClass("active");
            $(".according_details").slideUp(300);
            $(this).addClass("active");
            $(this)
              .next(".according_details")
              .slideDown(300);
          }
        });
      }

      // 11. LightBox / Fancybox
      if ($(".img_view").length) {
        $(".img_view").fancybox({
          openEffect: "elastic",
          closeEffect: "elastic",
          helpers: {
            media: {}
          }
        });
      }

      // 12. Fact Counter For Achivement Counting
      function factCounter() {
        if ($(".fact-counter").length) {
          $(".fact-counter .count.animated").each(function() {
            var $t = $(this),
              n = $t.find(".count-num").attr("data-stop"),
              r = parseInt($t.find(".count-num").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
              $t.addClass("counted");
              $({
                countNum: $t.find(".count-text").text()
              }).animate(
                {
                  countNum: n
                },
                {
                  duration: r,
                  easing: "linear",
                  step: function() {
                    $t.find(".count-num").text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $t.find(".count-num").text(this.countNum);
                  }
                }
              );
            }

            //set skill building height

            var size = $(this)
              .children(".progress-bar")
              .attr("aria-valuenow");
            $(this)
              .children(".progress-bar")
              .css("width", size + "%");
          });
        }
      }

      // 13. Sortable Masonary with Filters
      function enableMasonry() {
        if ($(".sortable-masonry").length) {
          var winDow = $(window);
          // Needed variables
          var $container = $(".sortable-masonry .items-container");
          var $filter = $(".sortable-masonry .filter-btns");

          $container.isotope({
            filter: "*",
            masonry: {
              columnWidth: 1
            },
            animationOptions: {
              duration: 1000,
              easing: "linear"
            }
          });

          // Isotope Filter
          $filter.find("li").on("click", function() {
            var selector = $(this).attr("data-filter");

            try {
              $container.isotope({
                filter: selector,
                animationOptions: {
                  duration: 1000,
                  easing: "linear",
                  queue: false
                }
              });
            } catch (err) {}
            return false;
          });

          winDow.on("bind", "resize", function() {
            var selector = $filter.find("li.active").attr("data-filter");

            $container.isotope({
              filter: selector,
              animationOptions: {
                duration: 1000,
                easing: "linear",
                queue: false
              }
            });
          });

          var filterItemA = $(".sortable-masonry .filter-btns li");

          filterItemA.on("click", function() {
            var $this = $(this);
            if (!$this.hasClass("active")) {
              filterItemA.removeClass("active");
              $this.addClass("active");
            }
          });
        }
      }

      enableMasonry();

      // 14. Contact Form Validation
      if ($contact.length) {
        $contact.validate({
          //#contact-form contact form id
          rules: {
            firstname: {
              required: true // Field name here
            },
            email: {
              required: true, // Field name here
              email: true
            },
            subject: {
              required: true
            },
            message: {
              required: true
            }
          },

          messages: {
            firstname: "Please enter your First Name", //Write here your error message that you want to show in contact form
            email: "Please enter valid Email", //Write here your error message that you want to show in contact form
            subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
            message: "Please write your Message" //Write here your error message that you want to show in contact form
          },

          submitHandler: function(form) {
            $("#send").attr({
              disabled: "true",
              value: "Sending..."
            });
            $.ajax({
              type: "POST",
              url: "email.php",
              data: $(form).serialize(),
              success: function() {
                $("#send")
                  .removeAttr("disabled")
                  .attr("value", "Send");
                $("#success").slideDown("slow");
                setTimeout(function() {
                  $("#success").slideUp("slow");
                }, 5000);
                form.reset();
              },
              error: function() {
                $("#send")
                  .removeAttr("disabled")
                  .attr("value", "Send");
                $("#error").slideDown("slow");
                setTimeout(function() {
                  $("#error").slideUp("slow");
                }, 5000);
              }
            });
            return false; // required to block normal submit since you used ajax
          }
        });
      }

      // 15. Elements Animation
      if ($(".wow").length) {
        var wow = new WOW({
          boxClass: "wow", // animated element css class (default is wow)
          animateClass: "animated", // animation css class (default is animated)
          offset: 0, // distance to the element when triggering the animation (default is 0)
          mobile: false, // trigger animations on mobile devices (default is true)
          live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
      }

      // 16. Range Slider
      $(document).ready(function() {
        var rangeSlider = function() {
          var slider = $(".range-slider"),
            range = $(".range-slider__range"),
            value = $(".range-slider__value");

          slider.each(function() {
            value.each(function() {
              var value = $(this)
                .prev()
                .attr("value");
              $(this).html(value);
            });

            range.on("input", function() {
              $(this)
                .next(value)
                .html(this.value);
            });
          });
        };

        rangeSlider();
      });

      // 17. When document is Scrollig, do
      $window.on("scroll", function() {
        headerStyle();
        factCounter();
      });

      // 18. When document is Scrollig, do
      $window.on("scroll", function() {
        headerStyle();
        factCounter();
      });

      // 19. When document is loading, do
      $window.on("load", function() {
        handlePreloader();
        enableMasonry();
      });

      // 20. Youtube and Vimeo video popup control
      jQuery(function() {
        jQuery("a.video-popup").YouTubePopUp();
      });

      // 21. Youtube and Vimeo video popup control
      jQuery(function() {
        jQuery("a.video-popup").YouTubePopUp();
      });
    })(window.jQuery);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  box-shadow: 2px 2px 20px 2px #030d26;
  border: 0px;
}

table th {
  border: 2px solid #030d26;
  padding: 10px;
  text-align: center;
}

.ul {
  padding-top: 15px;
}

.ul li {
  padding: 5px;
  color: #030d26;
  border-bottom: 1px solid black;
  cursor: pointer;
}

.ul li:hover {
  border-bottom: 1px solid white;
  color: white;
}

.tab {
  cursor: pointer;
}

.tab:hover {
  color: #fb9d5b;
}

.tab-selected {
  border-bottom: 2px solid #fb9d5b;
}

.color-orange {
  color: #fb9d5b;
}

.bg-orange {
  background-color: #fb9d5b;
}

.nqfLevel {
  font-weight: bold;
  text-align: center;
}

table tr td {
  border: 1px solid #030d26;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
}

.card {
  will-change: transform;
  margin: 8px;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
  background-color: #fafafa;
  height: 35%;
  width: 344px;
  -webkit-transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}

.card:hover {
  cursor: pointer;
}

.card__image {
  position: absolute;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repat;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
  opacity: 0;
  -webkit-transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card__image:after {
  content: "";
  display: block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
  -webkit-transition: all 500ms;
  transition: all 500ms;
  bottom: 0;
}

.card__title {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 24px;
  color: #fff;
  margin: 0;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 16px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card__subtitle {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
  left: 88px;
  right: 0;
  top: 45px;
  position: absolute;
  padding: 0 16px;
  opacity: 0;
  -webkit-transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card__text {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  display: block;
  left: 0;
  right: 0;
  top: 100px;
  padding: 16px;
  margin: 0;
  line-height: 1.6;
  position: absolute;
  color: #000;
  overflow: hidden;
  -webkit-transition: width 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: width 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  -webkit-transition: delay 0.1s;
  transition: delay 0.1s;
}

.card__action-bar {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 0;
  top: auto;
  left: 0;
  right: 0;
  padding: 0 8px;
  border-top: 1px solid #e0e0e0;
  boz-sizing: border-box;
  height: 52px;
  -webkit-transition: left 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: left 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card__button {
  outline: none;
  position: relative;
  display: inline-block;
  line-height: 52px;
  padding: 0 16px;
  color: #ff1744;
}

.card--big {
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
  height: 304px;
  min-height: 304px;
}

.card--big .card__image {
  border-radius: 1px 1px 0 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 1;
  max-height: 176px;
}

.card--big .card__title {
  top: 135px;
}

.card--big .card__text {
  top: 176px;
}

.card--big .card__action-bar {
  left: 0;
}

.card--medium {
  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);
  height: 208px;
  min-height: 208px;
}

.card--medium .card__image {
  border-radius: 1px 1px 0 0;
  left: -100%;
  right: 0;
  top: 0;
  max-height: 0;
  opacity: 0;
}

.card--medium .card__title {
  color: #ff1744;
  top: 16px;
}

.card--medium .card__text {
  font-size: 16px;
  top: 50px;
}

.card--medium .card__action-bar {
  left: 0;
}

.card--small {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  height: 136px;
  min-height: 136px;
}

.card--small .card__image {
  border-radius: 1px 0 0 1px;
  left: 0;
  top: 0;
  width: 88px;
  opacity: 1;
  max-height: 136px;
}

.card--small .card__image:after {
  opacity: 0;
}

.card--small .card__title {
  color: #000;
  left: 88px;
  top: 8px;
}

.card--small .card__subtitle {
  opacity: 1;
  left: 88px;
}

.card--small .card__text {
  top: 30px;
  opacity: 0;
}

.card--small .card__action-bar {
  left: 88px;
}
</style>
