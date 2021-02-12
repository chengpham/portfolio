import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(){
    super()
  }
  render(){
      return (
        <div class='body container-fluid'>
          <div class='headbox'>
              <div><h1>CHENG PHAM</h1><h2>WEB DEVELOPER</h2></div>
              <ul class='topnav'>
                  <li><a href="#">ABOUT</a></li>
                  <li><a href="#">SKILLS</a></li>
                  <li><a href="#">EXPERIENCE</a></li>
                  <li><a href="#">EDUCATION</a></li>
                  <li><a href="#">CONTACT</a></li>
              </ul>
          </div>
          <div class='mainbox'>
              <div class='about-container'>
                  <div class='about-me'>
                      <div class='contact' id='contact'>CONTACT</div>
                      <div class='media'>
                          <a href='tel:+1604-783-0000'><img src={'./cell_logo.png'} width='40px' alt='cell phone number'/></a>
                          <a href='mailto:chengpham@gmail.com?subject=Resume Portfolio'><img src={'./email_logo.png'} width='40px' alt='email address'/></a><br/>
                          <a href='http://chengpham.com'><img src={'./website_logo.png'} width='40px' alt='website protfolio'/></a>
                          <a href='https://www.google.com/maps/place/New+Westminster+V3M+5X2' target='_blank'><img src={'./map_logo.png'} width='40px' alt='map location'/></a><br/>
                          <a href='https://linkedin.com/in/chengpham' target='_blank'><img src={'./linkedin_logo.png'} width='40px' alt='linkedin profile'/></a>
                          <a href='https://github.com/chengpham' target='_blank'><img src={'./github_logo.png'} width='40px' alt='github profile'/></a>
                      </div>
                      <div class='contact'>SKILLS</div>
                  </div>
                  <div class='about-content'><hr/>
                      <div>
                          <img id='profile' src={"./profile.png"} alt="picture of me"/>
                          <p id='me-content'>Motivated young professional with a passion for technology. 
                              Consistantly improving to better myself. 
                              Self-taught and bootcamp trained to handle todays market challenages.
                              Skilled professionalist to collaborate on time sensitive projects.
                              Problem solving ninjia.  
                          </p>
                      </div><br/><hr/>
                  </div>
              </div>
              <div class='skills_container'>
                  <div class="circle-border percent-ninety">
                      <div class="circle">90% Javascript</div>
                  </div>
                  <div class="circle-border percent-seventy">
                      <div class="circle">70% Python</div>
                  </div>
                  <div class="circle-border percent-seventy">
                      <div class="circle">70% Node Express</div>
                  </div>
                  <div class="circle-border percent-eighty">
                      <div class="circle">80% React</div>
                  </div>
                  <div class="circle-border percent-ninety">
                      <div class="circle">90% HTML CSS</div>
                  </div>
              </div>
          </div>
          <div class='footerbox'><h2>Portfolios</h2>
            <div class='portfolios'><a href='/timer'><img src={'./timer.png'}/></a></div>
            <div class='portfolios'><a href='/cal'><img src={'./cal.png'}/></a></div>
            <div class='portfolios'><a href='/drum'><img src={'./drum.png'}/></a></div>
            <div class='portfolios'><a href='/trisha'><img src={'./trisha.png'}/></a></div>
          </div>
      </div>
    )
  }
}
ReactDOM.render( <App />, document.getElementById('root') );

