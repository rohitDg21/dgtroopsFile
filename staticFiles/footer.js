class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <!-- footer starting----------------------------------------------------------------------------------------- -->
         
      <script src="script/config.js"></script>


      <footer class="footer-wrap">
          <div class="container-fluid p-0">
              <div class="row flex-row-reverse m-0">
                  <div class="col-md-12 col-lg-7 p-0 address_info_right">
                      <div class=address-info-img>
                          <img class="blurry-load" data-sizes="xl, l, m, s, xs" data-srcset="
                      https://www.unifiedinfotech.net/../assets/images/footer-banner1@4x.jpg,
                      https://www.unifiedinfotech.net/../assets/images/footer-banner1@2x.jpg,
                      https://www.unifiedinfotech.net/../assets/images/footer-banner1@1.5x.jpg,
                      https://www.unifiedinfotech.net/../assets/images/footer-banner1@1x.jpg,
                      https://www.unifiedinfotech.net/../assets/images/footer-banner1@0.75x.jpg
                      " src="../assets/images/footer-banner4@1.5x.jpg" alt="Footer Banner Image">
                      </div>
                  </div>
                  <div class="col-md-12 col-lg-5 address_info_left black-bg-info">
                      <div class=address-info-wrap>
                          <div class=address-info-text>
                              <div class=responsive-hide>
                                  <h3 class="address-h1 text-white-h1">Like what you see?</h3>
                                  <h3 class="address-h1 text-white-h1">Let’s start a conversation.</h3>
  
                                  <a class="button-4" href="../about/contact.html#formContact">
                                      <div class=eff-4></div>
                                      <span>Get in Touch</span>
                                  </a>
                              </div>
                              <h4 class="address-h4 text-white-h1">Visit us at</h4>
                              <h3 class="address-h3 text-white-h1 OfficeLocationKolkata">
                                  <span class="flag">
                                      <img src="../assets/images/icon/Flag-India.svg" alt="Indian Flag">
                                  </span>
                                  #39, NGEF Lane, 2nd Floor, Suite No.1209, Indiranagar, Bangalore, Karnataka 560038, IN
                              </h3>

                          </div>
                          <div class="footer-social social-icon-list responsive-hide">
                              <ul>
                                  <li>
                                      <a href="https://twitter.com/DigitroopsL"  target="_blank"
                                          rel="noopener noreferrer">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 13">
                                              <path fill-rule=evenodd
                                                  d="M16.272 1.67a6.975 6.975 0 0 1-1.627 1.677c.01.14.01.281.01.422 0 4.289-3.264 9.231-9.23 9.231a9.168 9.168 0 0 1-4.983-1.456c.261.03.512.04.783.04a6.498 6.498 0 0 0 4.028-1.386 3.25 3.25 0 0 1-3.033-2.25c.2.03.402.05.613.05.29 0 .582-.04.853-.11a3.245 3.245 0 0 1-2.601-3.185v-.04c.432.241.934.392 1.466.412a3.242 3.242 0 0 1-1.446-2.702c0-.603.16-1.155.442-1.638a9.222 9.222 0 0 0 6.69 3.396 3.662 3.662 0 0 1-.08-.744A3.243 3.243 0 0 1 11.4.143c.934 0 1.778.392 2.37 1.024a6.387 6.387 0 0 0 2.06-.783 3.236 3.236 0 0 1-1.427 1.788 6.505 6.505 0 0 0 1.868-.502z">
                                              </path>
                                          </svg>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="https://www.facebook.com/digitroopsltd/" target="_blank"
                                          rel="noopener noreferrer">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 17">
                                              <path fill="#89A7BF" fill-rule=nonzero
                                                  d="M5.323 5.57V4.106c0-.22.01-.39.031-.511a.986.986 0 0 1 .14-.356.574.574 0 0 1 .355-.242c.163-.045.38-.068.651-.068h1.48V0H5.614C4.247 0 3.264.321 2.667.964s-.896 1.59-.896 2.842V5.57H0V8.5h1.77V17h3.553V8.5h2.364L8 5.57H5.323z">
                                              </path>
                                          </svg>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="https://www.linkedin.com/company/digitroopsservices/" target="_blank"
                                          rel="noopener noreferrer">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15">
                                              <path fill="#89A7BF" fill-rule=evenodd
                                                  d="M3.625 4.85v9.954H.31V4.849h3.315zm.211-3.074c.01.954-.713 1.717-1.868 1.717h-.02C.833 3.493.12 2.73.12 1.776.12.8.863.058 1.988.058c1.135 0 1.838.743 1.848 1.718zm4.922 4.488c.436-.682 1.223-1.646 2.983-1.646 2.18 0 3.807 1.427 3.807 4.48v5.706h-3.305V9.48c0-1.336-.482-2.25-1.677-2.25-.914 0-1.456.613-1.698 1.205-.08.221-.11.513-.11.814v5.555H5.453c.04-9.02 0-9.955 0-9.955h3.305v1.415z">
                                              </path>
                                          </svg>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="https://www.instagram.com/digitroops/" target="_blank"
                                          rel="noopener noreferrer">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                              <path fill="#89A7BF" fill-rule=evenodd
                                                  d="M10.334 7.715a2.576 2.576 0 0 0-2.572-2.572 2.576 2.576 0 0 0-2.571 2.572 2.576 2.576 0 0 0 2.571 2.571 2.576 2.576 0 0 0 2.572-2.571zm1.386 0a3.952 3.952 0 0 1-3.958 3.958 3.952 3.952 0 0 1-3.957-3.958 3.952 3.952 0 0 1 3.957-3.958 3.952 3.952 0 0 1 3.958 3.958zm1.085-4.118a.922.922 0 0 1-.924.924.922.922 0 0 1-.924-.924c0-.513.411-.924.924-.924.512 0 .924.411.924.924zm-5.043-2.21c-1.125 0-3.535-.09-4.55.311-.351.14-.613.312-.884.583a2.466 2.466 0 0 0-.582.884c-.402 1.014-.312 3.425-.312 4.55s-.09 3.536.312 4.55c.14.352.311.613.582.884.271.271.533.442.884.583 1.015.401 3.425.311 4.55.311s3.536.09 4.55-.311c.352-.141.613-.312.885-.583.27-.271.442-.532.582-.884.402-1.014.312-3.425.312-4.55s.09-3.536-.312-4.55a2.466 2.466 0 0 0-.582-.884 2.466 2.466 0 0 0-.884-.583c-1.015-.402-3.426-.311-4.55-.311zm7.715 6.328c0 1.065.01 2.12-.05 3.184-.06 1.236-.342 2.33-1.246 3.234-.904.904-1.999 1.186-3.234 1.246-1.065.06-2.12.05-3.185.05-1.064 0-2.119.01-3.184-.05-1.235-.06-2.33-.342-3.234-1.246C.44 13.23.159 12.135.098 10.9c-.06-1.065-.05-2.12-.05-3.184 0-1.065-.01-2.12.05-3.184.06-1.236.342-2.33 1.246-3.235C2.248.392 3.343.111 4.578.051 5.643-.01 6.698 0 7.762 0c1.065 0 2.12-.01 3.185.05 1.235.06 2.33.341 3.234 1.245.904.904 1.185 2 1.245 3.235.06 1.065.05 2.12.05 3.184z">
                                              </path>
                                          </svg>
                                      </a>
                                  </li>
                                  <li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <!-- wraper-footer-copyright -->

          <div class="wraper-footer-copyright responsive-hide d-none">
              <div class="container-fluid">
                  <!-- footer-copyright -->
                  <div class="footer-copyright row">
                      <!-- footer-copyright-item -->
                      <div class="footer-copyright-item col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-left">
                          <!-- footer-copyright-menu -->
                          <ul class="footer-copyright-menu">
                              <li><a href="../terms-conditions/index.html">Terms &amp; Conditions </a></li>
                              <li><a href="https://www.google.com/maps/search/%2339,+NGEF+Lane,+2nd+Floor,+Suite+No.1209,+Indiranagar,+Bangalore,+Karnataka+560038,+IN/@12.9779987,77.6374416,17z">Sitemap</a></li>
                          </ul>
                          <!-- footer-copyright-menu -->
                          <!-- footer-copyright-note -->
                          <p class="footer-copyright-note">&copy; 2021 Digitroops Pvt Ltd. All rights reserved.</p>
                          <!-- footer-copyright-note -->
                      </div>
                      <!-- footer-copyright-item -->
                      <!-- footer-copyright-item -->
                      <div class="footer-copyright-item col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center">
                          <!-- footer-copyright-rating -->
                          <div class="footer-copyright-rating">
                              <span class="rate-text">Rate Us</span>
                              <input class="rate-range" type="range" min="0" max="5" value="3" step="0.5"
                                  id="footerStarRating">
                              <span class="rate-star rateit" data-rateit-backingfld="#footerStarRating"
                                  data-rateit-readonly="false"></span>
                              <span class="rate-user" data-user-rate=""></span>
                          </div>
                          <!-- footer-copyright-rating -->
                          <!-- footer-copyright-rateinfo -->
                          <div class="footer-copyright-rateinfo">4.9 out of 5.0 - 1362 clients</div>
                          <!-- footer-copyright-rateinfo -->
                      </div>
                      <!-- footer-copyright-item -->
                      <!-- footer-copyright-item -->
                      
                      <!-- footer-copyright-item -->
                  </div>
                  <!-- footer-copyright -->
              </div>
          </div>
          <!-- wraper-footer-copyright -->
          <!-- footer-bottom -->
          <div class="footer-bottom responsive-hide">
              <div class=container-fluid>
                  <div class=row>
                      <div class=col-4>
                          <div class=terms-privacy>
                              <a href="../terms-conditions/index.html">Terms &amp; Conditions </a> <span class=gapNew> |
                              </span> <a href="https://goo.gl/maps/Yh2j1xYevWTxYAtn7">Sitemap</a>
                          </div>
                      </div>
                      <div class=col-4>
                          <div class=copy-right>
                              <p>&copy; 2021 Digitroops Pvt Ltd. All rights reserved.</p>
                          </div>
                      </div>
                     
                      <!-- footer-bottom -->
                  </div>
              </div>
          </div>
      </footer>
  
  <!-- footer ending----------------------------------------------------------------------------------------- -->
  
      <div class=mobile_float_sec>
          <div class=container>
              <div class="row align-items-center">
  
                  <a href="#" class="col-6 stiky-border">
                      <svg xmlns="http://www.w3.org/2000/svg" width=22 height=14 viewBox="0 0 22 14">
                          <g fill=none fill-rule=nonzero stroke="#FFF" transform="translate(-1)">
                              <rect width=15 height=13 x=4.5 y=.5 rx=2 />
                              <path stroke-linecap=round d="M22.5 3.5v7M1.5 3.5v7" />
                          </g>
                      </svg>
                      <h3>Case Studies</h3>
                  </a>
                  <a href="../about/contact.html#formContact" class=col-6>
                      <svg xmlns="http://www.w3.org/2000/svg" width=16 height=14 viewBox="0 0 16 14">
                          <g fill=none fill-rule=nonzero stroke="#FFF">
                              <rect width=15 height=13 x=.5 y=.5 rx=2 />
                              <path stroke-linecap=round
                                  d="M4.167 4.167C6.224 5.992 7.502 6.905 8 6.905c.498 0 1.776-.913 3.833-2.738" />
                          </g>
                      </svg>
                      <h3>Get In Touch</h3>
                  </a>
  
              </div>
          </div>
      </div>
     
      `;
    }
}


customElements.define('main-footer', Footer);