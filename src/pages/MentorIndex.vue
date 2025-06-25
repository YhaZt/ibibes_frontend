<template>
  <div class="q-pa-md">
    <!-- Top Cards -->
    <div class="row justify-center q-gutter-md q-mb-md">
      <q-card class="text-center col-12 col-sm-6 col-md-4" style="max-width: 350px; width: 100%">
        <q-card-section class="text-h6">
          TWELVE (12) Mentors
          <q-separator class="my-5" />
          For our 15 Incubatees
        </q-card-section>
      </q-card>
    </div>

    <!-- Remove scale to fix extra space -->
    <div class="q-pt-lg main-scale-wrapper">
      <q-card-section class="row justify-center q-col-gutter-xs q-gutter-lg desktop-only">
        <q-card
          clickable
          v-ripple
          @click="goToMentor(1)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/gen.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/1.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  Sole Proprietor at Papercat Office Supplies and Equipment Trading<br />
                  Incorporator, Operations Manager at Stellar Biomedical Distribution Inc.<br />
                  Incorporator, Operations Officer at Yamang Ani Agri Ventures Inc.<br />
                  Incorporator, Authorized Managing Officer at Connorstone Construction Development
                  and Supplies Corp.
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img src="~assets/industry/paper.png" />
                <q-img src="~assets/industry/stel.png" />
                <q-img src="~assets/industry/connor.png" />
                <q-img src="~assets/industry/yama.png" />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">
                  MARY FRANCES DOMINIQUE DG. CASTRO
                </div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Entrepreneurship, Generic Mentorship in Business Development and Marketing
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">All fifteen chosen ventures</div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(2)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/gen.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/2.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  President - E3Hub Philippines <br />
                  President - UPGRADE Innolab Incorporated <br />
                  National Expert of World Summit Awards for the Philippines <br />
                  Senior Consultant at MIMAROPA Innovation Ventures Network <br />
                  Senior Consultant at IDEAS Davao Consortium <br />
                  Portfolio Manager of UP System Acceleration Program <br />
                  Account Strategist - Bits Circle
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/up.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">Richard R. Day</div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Startup Community Consultant, Generic Mentorship in Business Development and
                  Marketing
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">All fifteen chosen ventures</div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(3)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/gen.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/3.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  DOST MIMAROPA Supervising Science Research Specialist<br />
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/dost.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">
                  Engr. Zaldie C. Gawad
                </div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Generic Mentorship in Intellectual Property Management and Application
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">All fifteen chosen ventures</div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(4)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/iot.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/4.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  CEO, Co-Founder, IT-ERA TECHNOLOGY SOLUTIONS Product Development Consultant,
                  IT-ERA TECHNOLOGY SOLUTIONS
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/ite.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">
                  Fheter John B. Calanday
                </div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Technopreneurship/Startup Founder Technical Mentorship in IoT for Sustainable
                  Community
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">
                  Alapaw, DoroShop, UPA, VicPubMart, Promdifarm, Wanderbridge
                </div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(5)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/inno.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/5.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  Licensed Chemical Technician Science Research Specialist I at DOST MIMAROPA
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/dost.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">
                  Engr. Maria Christine M. Caringal
                </div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Food Engineering and Innovation, Technical Mentorship in Food Innovation
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">
                  Bilimbites, Cuni Deli, Golden Island Spirit, Vanamei Food Products
                </div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(6)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/bio.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/6.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  Owner of Gabutero Organic Farm Lecturer on Organic Agriculture
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/gab.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">
                  Nelson B. Gabutero
                </div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Organic Farming, Technical Mentorship in Biowaste to New Products, Raw Materials,
                  or Bioenergy
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">C.R.E.A.M., IGA Farm</div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(7)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/smart.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/7.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  PRIME MOVER & LEAD AGRITECT - AGRITEKTURA FOUNDING CORE & LIFE COACH - Tentmaker
                  Community Winner - TOP 10 UNDER 40 WORLD HATCHERY EXPERT - HATCHERY INTERNATIONAL
                  DEPARTMENT OF AGRICULTURE REGIONAL GAWAD SAKA AWARD Excellence in Sustainable
                  Tourism and Most Outstanding Farm Tourism Operator - LOCAL TOURISM STAKEHOLDERS
                  EXCELLENCE AWARD
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/agri.jpg"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">
                  Ar. Francis Neil B. Quijano
                </div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Technical Mentorship in Smart Agriculture and Fisheries
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">Aqua Cray Tech, Cray King</div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(8)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/smart.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/8.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  Owner, Guiua Aquaculture Aquaculturist II, Office of the Provincial Agriculturist,
                  Occidental Mindoro Consultant - One Expert in Fisheries, DOST Region 3, & Shrimps
                  and Crabs Aquaculture
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/gui.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">
                  Nicholas Dela Cruz Guiua
                </div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Expert in Fisheries, Shrimps and Crabs Aquaculture, Technical Mentorship in
                  Fisheries Production
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">Aqua Cray Tech, Cray King</div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(9)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/inno.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/9.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  Production Manager, Cedonya's Processed Food Manufacturing
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/cedo.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">
                  Dr. Delfin C. Sumunistrado
                </div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Agricultural Engineering, Technical Mentorship in Food Innovation
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">Golden Island Spirit</div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(10)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/smart.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/10.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  International Mentor from Wadhwani Foundation
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/wad.webp"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">Nikhil Paul Antao</div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Technical Mentorship in Smart Agriculture and Fisheries
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">DaloyIQ</div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(11)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/iot.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/11.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  Chief Information Officer, Fligno
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/flig.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
                <q-img
                  src="~assets/industry/fligno.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">Gabrielle Luna</div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Web Developing, Technical Mentorship in IoT for Sustainable Community
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">
                  Alapaw, DoroShop, UPA, VicPubMart, Promdifarm, Wanderbridge
                </div>
              </div>
            </div>
          </div>
        </q-card>

        <q-card
          clickable
          v-ripple
          @click="goToMentor(12)"
          class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
        >
          <q-badge
            floating
            style="
              top: -50px;
              left: -20px;
              position: absolute;
              background: transparent;
              box-shadow: none;
            "
            rounded
          >
            <q-avatar size="88px">
              <img src="~assets/iot.png" alt="badge" />
            </q-avatar>
          </q-badge>
          <div class="custom-quasar-grid q-pa-sm">
            <div class="cell a">
              <q-img
                src="~assets/mentor/12.png"
                style="width: 100%; max-width: 180px; border-radius: 8px"
                spinner-color="primary"
                alt="Mentor"
              />
            </div>
            <div class="cell b">
              <div class="inner">
                <div class="text-body2 leading-tight break-words">
                  CEO, Wilvalue Digital Marketing Company International Mentor from Wadhwani
                  Foundation
                </div>
              </div>
            </div>
            <div class="cell c">
              <div class="thumbnail-row">
                <q-img
                  src="~assets/industry/wil.png"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
                <q-img
                  src="~assets/industry/wad.webp"
                  style="width: 100%; max-width: 180px; border-radius: 8px"
                />
              </div>
            </div>
            <div class="cell d">
              <div class="inner">
                <div class="text-bold text-h6 leading-tight break-words text-center">Wilmark Econar</div>
                <div class="text-subtitle2 text-warning">Mentor</div>
              </div>
            </div>
            <div class="cell e">
              <div class="inner">
                <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                <div class="text-body2 leading-tight break-words">
                  Entrepreneurship, Digital Marketing, and Web Designing, Technical Mentorship in
                  IoT for Sustainable Community
                </div>
              </div>
            </div>
            <div class="cell f">
              <div class="inner">
                <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                <div class="text-body2 leading-tight break-words">
                  UPA, DoroShop, VicPubMart, Wanderbridge
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-card-section>

      <!-- Mobile -->
      <div class="q-carousel-mobile-only mobile-only">
        <q-carousel
          v-model="mobileSlide"
          swipeable
          animated
          autoplay
          infinite
          control-color="primary"
          height="93vh"
          :arrows="false"
        >
          <q-carousel-slide name="mentor1" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(1)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/gen.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/1.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      Sole Proprietor at Papercat Office Supplies and Equipment Trading<br />
                      Incorporator, Operations Manager at Stellar Biomedical Distribution Inc.<br />
                      Incorporator, Operations Officer at Yamang Ani Agri Ventures Inc.<br />
                      Incorporator, Authorized Managing Officer at Connorstone Construction
                      Development and Supplies Corp.
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img src="~assets/industry/paper.png" />
                    <q-img src="~assets/industry/stel.png" />
                    <q-img src="~assets/industry/connor.png" />
                    <q-img src="~assets/industry/yama.png" />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      MARY FRANCES DOMINIQUE DG. CASTRO
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Entrepreneurship, Generic Mentorship in Business Development and Marketing
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      All fifteen chosen ventures
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor2" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(2)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/gen.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/2.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      President - E3Hub Philippines <br />
                      President - UPGRADE Innolab Incorporated <br />
                      National Expert of World Summit Awards for the Philippines <br />
                      Senior Consultant at MIMAROPA Innovation Ventures Network <br />
                      Senior Consultant at IDEAS Davao Consortium <br />
                      Portfolio Manager of UP System Acceleration Program <br />
                      Account Strategist - Bits Circle
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/up.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Richard R. Day
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Startup Community Consultant, Generic Mentorship in Business Development and
                      Marketing
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      All fifteen chosen ventures
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor3" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(3)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/gen.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/3.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      DOST MIMAROPA Supervising Science Research Specialist<br />
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/dost.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Engr. Zaldie C. Gawad
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Generic Mentorship in Intellectual Property Management and Application
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      All fifteen chosen ventures
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor4" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(4)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/iot.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/4.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      CEO, Co-Founder, IT-ERA TECHNOLOGY SOLUTIONS Product Development Consultant,
                      IT-ERA TECHNOLOGY SOLUTIONS
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/ite.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Fheter John B. Calanday
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Technopreneurship/Startup Founder Technical Mentorship in IoT for Sustainable
                      Community
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      Alapaw, DoroShop, UPA, VicPubMart, Promdifarm, Wanderbridge
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor5" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(5)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/inno.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/5.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      Licensed Chemical Technician Science Research Specialist I at DOST MIMAROPA
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/dost.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Engr. Maria Christine M. Caringal
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Food Engineering and Innovation, Technical Mentorship in Food Innovation
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      Bilimbites, Cuni Deli, Golden Island Spirit, Vanamei Food Products
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor6" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(6)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/bio.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/6.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      Owner of Gabutero Organic Farm Lecturer on Organic Agriculture
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/gab.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Nelson B. Gabutero
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Organic Farming, Technical Mentorship in Biowaste to New Products, Raw
                      Materials, or Bioenergy
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">C.R.E.A.M., IGA Farm</div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor7" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(7)"
              class="custom-card col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/smart.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/7.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      PRIME MOVER & LEAD AGRITECT - AGRITEKTURA FOUNDING CORE & LIFE COACH -
                      Tentmaker Community Winner - TOP 10 UNDER 40 WORLD HATCHERY EXPERT - HATCHERY
                      INTERNATIONAL DEPARTMENT OF AGRICULTURE REGIONAL GAWAD SAKA AWARD Excellence
                      in Sustainable Tourism and Most Outstanding Farm Tourism Operator - LOCAL
                      TOURISM STAKEHOLDERS EXCELLENCE AWARD
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/agri.jpg"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Ar. Francis Neil B. Quijano
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Technical Mentorship in Smart Agriculture and Fisheries
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      Aqua Cray Tech, Cray King
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor8" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(8)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/smart.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/8.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      Owner, Guiua Aquaculture Aquaculturist II, Office of the Provincial
                      Agriculturist, Occidental Mindoro Consultant - One Expert in Fisheries, DOST
                      Region 3, & Shrimps and Crabs Aquaculture
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/gui.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Nicholas Dela Cruz Guiua
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Expert in Fisheries, Shrimps and Crabs Aquaculture, Technical Mentorship in
                      Fisheries Production
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      Aqua Cray Tech, Cray King
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor9" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(9)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/inno.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/9.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      Production Manager, Cedonya's Processed Food Manufacturing
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/cedo.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Dr. Delfin C. Sumunistrado
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Agricultural Engineering, Technical Mentorship in Food Innovation
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">Golden Island Spirit</div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor10" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(10)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/smart.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/10.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      International Mentor from Wadhwani Foundation
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/wad.webp"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Nikhil Paul Antao
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Technical Mentorship in Smart Agriculture and Fisheries
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">DaloyIQ</div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor11" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(11)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/iot.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/11.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      Chief Information Officer, Fligno
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/flig.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                    <q-img
                      src="~assets/industry/fligno.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Gabrielle Luna
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Web Developing, Technical Mentorship in IoT for Sustainable Community
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      Alapaw, DoroShop, UPA, VicPubMart, Promdifarm, Wanderbridge
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="mentor12" class="flex flex-center">
            <q-card
              clickable
              v-ripple
              @click="goToMentor(12)"
              class="custom-card col-12 col-sm-6 col-md-4 col-lg-4 q-mb-lg cursor-pointer"
            >
              <q-badge
                floating
                style="
                  top: -20px;
                  left: -20px;
                  position: absolute;
                  background: transparent;
                  box-shadow: none;
                "
                rounded
              >
                <q-avatar size="60px">
                  <img src="~assets/iot.png" alt="badge" />
                </q-avatar>
              </q-badge>
              <div class="custom-quasar-grid q-pa-sm">
                <div class="cell a">
                  <q-img
                    src="~assets/mentor/12.png"
                    style="width: 100%; max-width: 180px; border-radius: 8px"
                    spinner-color="primary"
                    alt="Mentor"
                  />
                </div>
                <div class="cell b">
                  <div class="inner">
                    <div class="text-body2 leading-tight break-words">
                      CEO, Wilvalue Digital Marketing Company International Mentor from Wadhwani
                      Foundation
                    </div>
                  </div>
                </div>
                <div class="cell c">
                  <div class="thumbnail-row">
                    <q-img
                      src="~assets/industry/wil.png"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                    <q-img
                      src="~assets/industry/wad.webp"
                      style="width: 100%; max-width: 180px; border-radius: 8px"
                    />
                  </div>
                </div>
                <div class="cell d">
                  <div class="inner">
                    <div class="text-bold text-h6 leading-tight break-words text-center">
                      Wilmark Econar
                    </div>
                    <div class="text-subtitle2 text-warning">Mentor</div>
                  </div>
                </div>
                <div class="cell e">
                  <div class="inner">
                    <div class="text-caption text-grey-8">FIELD OF EXPERTISE</div>
                    <div class="text-body2 leading-tight break-words">
                      Entrepreneurship, Digital Marketing, and Web Designing, Technical Mentorship
                      in IoT for Sustainable Community
                    </div>
                  </div>
                </div>
                <div class="cell f">
                  <div class="inner">
                    <div class="text-caption text-grey-8">TARGET INCUBATEES/VENTURES</div>
                    <div class="text-body2 leading-tight break-words">
                      UPA, DoroShop, VicPubMart, Wanderbridge
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar, QSpinnerFacebook } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const mobileSlide = ref('mentor1');
const $q = useQuasar();
const router = useRouter();

const goToMentor = (id: number) => {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: 'yellow',
    spinnerSize: 140,
    message: 'Loading Mentor...',
    messageColor: 'yellow',
  });

  setTimeout(() => {
    $q.loading.hide();
    const encodedId = btoa(String(id));
    void router.push({ path: '/mentorPage', query: { id: encodedId } });
  }, 2000);
};
</script>

<style scoped>
/* Remove scale and use a wrapper to avoid extra space */
.main-scale-wrapper {
  width: 100%;
  margin: 0 auto;
  /* Remove overflow: hidden if you want to allow card shadows to show */
}

.custom-quasar-grid {
  display: grid;
  grid-template-columns: 3fr 3.1fr 3fr;
  grid-template-rows: 1.5fr 0.5fr 0.5fr;
  gap: 6px;
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
}

.inner {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 6px;
}

/* Cell Colors */
.a {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background: #ffe082;
  order: 1;
}
.b {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  background: #ffcc80;
  order: 3;
}
.c {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background: #b3e5fc;
  padding: 6px 12px;
  order: 4;
}
.d {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  background: #c8e6c9;
  order: 2;
}
.e {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  background: #f8bbd0;
  order: 5;
}
.f {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  background: #d1c4e9;
  order: 6;
}

.thumbnail-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Responsive Grid Adjustments */
@media (max-width: 1024px) {
  .custom-quasar-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  .a {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .b {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  .c {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  .d {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
  .e {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
  .f {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
}
.q-carousel-mobile-only {
  display: block;
}
@media (max-width: 768px) {
    .q-carousel-mobile-only {
    min-width: 280px;
    min-height: 90vh;
    max-height: 150vh;
    height: 100%;
    background: linear-gradient(90deg, #ffde59, #ff914d);
    display: flex;
    align-items: center;
    justify-content: center;
  }
.custom-card {
  overflow: visible !important;
  height: auto;
  max-height: none;
}

  .main-scale-wrapper {
    width: 100%;
    margin: 0 auto;
  }
  .custom-quasar-grid {
    display: flex;
    flex-direction: column;
  }
  .cell {
    order: unset;
    width: 100%;
    min-width: 0;
    font-size: 0.95em;
    padding: 8px;
  }
  .a {
    order: 1;
  }
  .d {
    order: 2;
  }
  .b {
    order: 3;
  }
  .c {
    order: 4;
  }
  .e {
    order: 5;
  }
  .f {
    order: 6;
  }
}


</style>
