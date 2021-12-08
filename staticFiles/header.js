class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!----- header starting-------------------------------------------------------------------------------------->

      <!-- -----------------------mobile view---------------------------------------  -->
  
      <header class="header-white header-black">
          <div class=mobile-nav>
            <div class=toggle-nav>
              <div class=line-bar>
                <div id=nav-icon1>
                  <span></span>
                  <span style="opacity: 0;display:none;"></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div class=nav-menu>
              <div class=nav-menu-header>
                <div class="nav-menu-header-inr d-flex align-items-center justify-content-between">
                  <div class=logo-icon>
                    <a href="../index.html"><img src="../assets/images/logo.png" alt=logo></a>
                  </div>
                </div>
              </div>
              <div class=nav-inner-wrap>
                <div class="nav-inner mobile-nav">
                  <!-- mobile-menu -->
                  <nav class="mobile-menu">
                    <ul id="menu-header-menu" class="main-menu">
                      <li class="dropdown-parent-li"><a class="mobile-dropdown" href="#">Services</a> <span class="mobile-dropdown-arrow"></span>
                        <ul class="mobile-dropdown-list">
                          <li><a class="mobile-dropdown-item" href="../services/digital-marketing/index.html">Digital Marketing</a></li>
                          <!-- <li><a class="mobile-dropdown-item" href="how-we-work">How we work</a></li> -->
                          <li><a class="mobile-dropdown-item" href="../web development/index.html">Web Devlopment and Design</a></li>
                          <li><a class="mobile-dropdown-item" href="#">Data Research and Analysis</a></li>
                          <li><a class="mobile-dropdown-item" href="#">Cloud Transformation and services</a></li>
                          <li><a class="mobile-dropdown-item" href="#">Automation</a></li>
                          <li><a class="mobile-dropdown-item" href="#">IT Infrastructure</a></li>
                          <li><a class="mobile-dropdown-item" href="#">Advisory and Consultancy</a></li>
                          <li><a class="mobile-dropdown-item" href="../trainingAndDevelopment/index.html">Training and Devlopment</a></li>
                    
                        </ul>
                      </li>
                      <li class="dropdown-parent-li"><a href="#">How we work</a></li>
                      <li class="dropdown-parent-li"><a class="mobile-dropdown" href="#">Portfolio</a> <span class="mobile-dropdown-arrow"></span>
                        <ul class="mobile-dropdown-list">
                          <li><a class="mobile-dropdown-item" href="#">Projects</a></li>
                          <li><a class="mobile-dropdown-item" href="#">UI/UX Gallery</a></li>
                        </ul>
                      </li>
                     <li class="dropdown-parent-li"><a href="../about/index.html">Company</a></li>
                      
                    </ul>
                  </nav>

                  <!-- mobile-menu -->
                  
                </div>
                <div class=mobile-menu-endsec>
                  <div class=nav-menu-bottom>
                    <div class=social-icon-list>
                      <ul>
                        <li>
                          <a href="https://twitter.com/DigitroopsL" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 13">
                              <path fill-rule=evenodd d="M16.272 1.67a6.975 6.975 0 0 1-1.627 1.677c.01.14.01.281.01.422 0 4.289-3.264 9.231-9.23 9.231a9.168 9.168 0 0 1-4.983-1.456c.261.03.512.04.783.04a6.498 6.498 0 0 0 4.028-1.386 3.25 3.25 0 0 1-3.033-2.25c.2.03.402.05.613.05.29 0 .582-.04.853-.11a3.245 3.245 0 0 1-2.601-3.185v-.04c.432.241.934.392 1.466.412a3.242 3.242 0 0 1-1.446-2.702c0-.603.16-1.155.442-1.638a9.222 9.222 0 0 0 6.69 3.396 3.662 3.662 0 0 1-.08-.744A3.243 3.243 0 0 1 11.4.143c.934 0 1.778.392 2.37 1.024a6.387 6.387 0 0 0 2.06-.783 3.236 3.236 0 0 1-1.427 1.788 6.505 6.505 0 0 0 1.868-.502z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/digitroopsltd/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 17">
                              <path fill="#89A7BF" fill-rule=nonzero d="M5.323 5.57V4.106c0-.22.01-.39.031-.511a.986.986 0 0 1 .14-.356.574.574 0 0 1 .355-.242c.163-.045.38-.068.651-.068h1.48V0H5.614C4.247 0 3.264.321 2.667.964s-.896 1.59-.896 2.842V5.57H0V8.5h1.77V17h3.553V8.5h2.364L8 5.57H5.323z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/digitroopsservices/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15">
                              <path fill="#89A7BF" fill-rule=evenodd d="M3.625 4.85v9.954H.31V4.849h3.315zm.211-3.074c.01.954-.713 1.717-1.868 1.717h-.02C.833 3.493.12 2.73.12 1.776.12.8.863.058 1.988.058c1.135 0 1.838.743 1.848 1.718zm4.922 4.488c.436-.682 1.223-1.646 2.983-1.646 2.18 0 3.807 1.427 3.807 4.48v5.706h-3.305V9.48c0-1.336-.482-2.25-1.677-2.25-.914 0-1.456.613-1.698 1.205-.08.221-.11.513-.11.814v5.555H5.453c.04-9.02 0-9.955 0-9.955h3.305v1.415z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/digitroops/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                              <path fill="#89A7BF" fill-rule=evenodd d="M10.334 7.715a2.576 2.576 0 0 0-2.572-2.572 2.576 2.576 0 0 0-2.571 2.572 2.576 2.576 0 0 0 2.571 2.571 2.576 2.576 0 0 0 2.572-2.571zm1.386 0a3.952 3.952 0 0 1-3.958 3.958 3.952 3.952 0 0 1-3.957-3.958 3.952 3.952 0 0 1 3.957-3.958 3.952 3.952 0 0 1 3.958 3.958zm1.085-4.118a.922.922 0 0 1-.924.924.922.922 0 0 1-.924-.924c0-.513.411-.924.924-.924.512 0 .924.411.924.924zm-5.043-2.21c-1.125 0-3.535-.09-4.55.311-.351.14-.613.312-.884.583a2.466 2.466 0 0 0-.582.884c-.402 1.014-.312 3.425-.312 4.55s-.09 3.536.312 4.55c.14.352.311.613.582.884.271.271.533.442.884.583 1.015.401 3.425.311 4.55.311s3.536.09 4.55-.311c.352-.141.613-.312.885-.583.27-.271.442-.532.582-.884.402-1.014.312-3.425.312-4.55s.09-3.536-.312-4.55a2.466 2.466 0 0 0-.582-.884 2.466 2.466 0 0 0-.884-.583c-1.015-.402-3.426-.311-4.55-.311zm7.715 6.328c0 1.065.01 2.12-.05 3.184-.06 1.236-.342 2.33-1.246 3.234-.904.904-1.999 1.186-3.234 1.246-1.065.06-2.12.05-3.185.05-1.064 0-2.119.01-3.184-.05-1.235-.06-2.33-.342-3.234-1.246C.44 13.23.159 12.135.098 10.9c-.06-1.065-.05-2.12-.05-3.184 0-1.065-.01-2.12.05-3.184.06-1.236.342-2.33 1.246-3.235C2.248.392 3.343.111 4.578.051 5.643-.01 6.698 0 7.762 0c1.065 0 2.12-.01 3.185.05 1.235.06 2.33.341 3.234 1.245.904.904 1.185 2 1.245 3.235.06 1.065.05 2.12.05 3.184z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          
                      </ul>
                    </div>
                  </div>
                  <div class="mobile-menu-bottom text-center mt-3">
                    <div class="site-menu-block row align-items-center">
                      <div class=col-md-12>
                        <a href="../terms-conditions/index.html">Terms &amp; Conditions </a> <span class=gapNew> | </span><a href="https://goo.gl/maps/Yh2j1xYevWTxYAtn7" target="_blank" >Sitemap</a>
                        <div class="copyright-sec pb-0  text-center">
                          <p>Copyright 2021 DIGITROOPS Inc. All rights reserved.</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=nav-overlay></div>
          </div>
  
  
  
          <!-- -----------------------PC view------------------------------------------------------------>
  
  
          <nav class="navbar navbar-expand-lg main-navbar desktop-nav fixed-navbar">
            <div class="container-fluid quote-wrap">
              <a class="navbar-brand logo-light" href="../index.html">
                <img class="logo" src="../assets/images/logo.png" alt="DIGITROOPS Logo White"  >
              </a>
              <a class="navbar-brand logo-dark" href="../index.html">
                <img class="logo" src="../assets/images/logo.png" alt="DIGITROOPS Logo Dark"  >
              </a>
              <div class="ml-auto main-navbar-content">
                <div class="collapse navbar-collapse main-bottom-navbar" id=navbarTogglerDemo01>
        
                  <!-- navbar-nav -->
                  <ul id="menu-header-menu-1" class="navbar-nav ml-auto justify-content-end">
                      <li class="nav-item has-uipl-sub-menu"><a class="nav-link dropdown-toggle" href="#">Services <div class="uipl-sub-menu-arrow"><span></span></div></a>
                          <!-- uipl-sub-menu-wraper -->
                          <div class="uipl-sub-menu-wraper">
                            <div class="uipl-sub-menu-container">
                              <!-- uipl-sub-menu-close -->
                              <div class="uipl-sub-menu-close">
                                <img src="../assets/images/home/UIPL-Mega-Menu-Close-Icon.svg" alt="Mega Menu Close" width="40" height="40">
                              </div>
                              <!-- uipl-sub-menu-close -->
                              <!-- uipl-sub-menu-section -->
                              <div class="uipl-sub-menu-section">
                                <ul class="menu">
                                  <li><a href="../services/digital-marketing/index.html">Digital Marketing</a></li>
                                  <!-- <li><a href="how-we-work">How we work</a></li> -->
                                  <li><a href="../web development/index.html">Web Devlopment and Design</a></li>
                                  <li><a href="#">Data Research and Analysis</a></li>
                                  <li><a href="#">Cloud Transformation and services</a></li>
                                  <li><a href="#">Software-Devlopment and Testing</a></li>
                                  <li><a href="#">Automation</a></li>
                                   <li><a href="#">It Infrastructure Services</a></li>
                                  <li><a href="#">Advisory and Consultancy</a></li>
                                  <li><a href="../trainingAndDevelopment/index.html">Training and Devlopment</a></li>
        
                                </ul>
                              </div>
                              <!-- uipl-sub-menu-section -->
                            </div>
                          </div>
                          <!-- uipl-sub-menu-wraper -->
                          
                      <li class="nav-item"><a href="#" class="nav-link">How we work</a></li>
                      <li class="nav-item has-uipl-sub-menu"><a class="nav-link dropdown-toggle" href="#">Portfolio <div class="uipl-sub-menu-arrow"><span></span></div></a>
                        <!-- uipl-sub-menu-wraper -->
                        <div class="uipl-sub-menu-wraper">
                          <div class="uipl-sub-menu-container">
                            <!-- uipl-sub-menu-close -->
                            <div class="uipl-sub-menu-close">
                              <img src="assets/images/home/UIPL-Mega-Menu-Close-Icon.svg" alt="Mega Menu Close" width="40" height="40">
                            </div>
                            <!-- uipl-sub-menu-close -->
                            <!-- uipl-sub-menu-section -->
                            <div class="uipl-sub-menu-section">
                              <ul class="menu">
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">UI/UX Gallery</a></li>
                              </ul>
                            </div>
                            <!-- uipl-sub-menu-section -->
                          </div>
                        </div>
                        <!-- uipl-sub-menu-wraper -->
                        <div class="dropdown-menu dropdown-menu-right animate slideIn d-none">
                          <a class="dropdown-item" href="#">Projects</a>
                          <a class="dropdown-item" href="#">UI/UX Gallery</a>
                        </div>
                      </li>
                      <!-- <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#">Company</a> -->
                        <li class="nav-item"><a href="../about/index.html" class="nav-link">Company</a></li>
                      </ul>
                      <!-- navbar-nav -->
        
                    </div>
                  </div>
                  <div class="get-quote-wrap">
                    <a class="button-5 responsive-hide" href="../about/contact.html#formContact">
                      <div class=eff-5></div>
                      <span>CONTACT US</span>
                    </a>
                  </div>
                </div>
              </nav>
            </header>
  
  
  
  <!-- header ending----------------------------------------------------------------------------------------- -->
  
      `;
    }
}

customElements.define('main-header', Header);
