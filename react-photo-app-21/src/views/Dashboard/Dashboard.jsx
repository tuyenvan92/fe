import React from 'react'

function Dashboard() {


  return (
    <div>
        <div className="photo-album">
          <div className="album">
            <div className="container">
              {/* <div className="navbar">
                <div className="logo">Album</div>
                <div className="menu j-between">
                  <span className="menu-title">Blog</span>
                  <span className="menu-title">About</span>
                  <span className="menu-title">Contact</span>
                </div>
                <div className="icon-group j-between">
                  <img class="icons" src={require('../../img/youtube-brands.svg').default} alt=""/>
                  <img class="icons" src={require('../../img/facebook-brands.svg').default} alt=""/>
                  <img class="icons" src={require('../../img/twitter-brands.svg').default} alt=""/>
                </div> 
              </div>  */}

              <div className="photos-list">
                <div className="grid-container">
                  <div className="card grid-item">
                    <img src="https://placeimg.com/640/480/arch" alt="img" />
                    <div className="photo-date">10/26/2021</div>
                    <div className="photo-title">Blog Post</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="read-more red">Read More</div>
                  </div>
                  <div className="card grid-item">
                    <img src="https://placeimg.com/640/480/nature" alt="img" />
                    <div className="photo-date">10/26/2021</div>
                    <div className="photo-title">Blog Post 1</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="read-more red">Read More</div>
                  </div>
                  <div className="card grid-item">
                    <img src="https://placeimg.com/640/480/tech" alt="img" />
                    <div className="photo-date">10/26/2021</div>
                    <div className="photo-title">Blog Post 2</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="read-more red">Read More</div>
                  </div>
                  <div className="card grid-item">
                    <img src="https://placeimg.com/640/480/tech" alt="img" />
                    <div className="photo-date">10/26/2021</div>
                    <div className="photo-title">Blog Post 3</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="read-more red">Read More</div>
                  </div>
                  <div className="card grid-item">
                    <img src="https://placeimg.com/640/480/arch" alt="img" />
                    <div className="photo-date">10/26/2021</div>
                    <div className="photo-title">Blog Post 4</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="read-more red">Read More</div>
                  </div>
                  <div className="card grid-item">
                    <img src="https://placeimg.com/640/480/nature" alt="img" />
                    <div className="photo-date">10/26/2021</div>
                    <div className="photo-title">Blog Post 5</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="read-more red">Read More</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
 
          <div className="subscription a-center red">
                <div className="sub-title">Subscribe to our newsletter.</div>
                <div className="sub-intro">Sign up with your email address to receive news and updates.</div>
                <div className="email-register">
                  <input placeholder="Email Address"/>
                  <button>Sign Up</button>
                </div>
          </div>

          <div className="footer a-center">
            <div className="container">
              <div className="icon-group-bottom j-between">
                    <img class="icons" src={require('../../img/youtube-brands.svg').default} alt=""/>
                    <img class="icons" src={require('../../img/facebook-brands.svg').default} alt=""/>
                    <img class="icons" src={require('../../img/twitter-brands.svg').default} alt=""/>
                </div> 
                <div className="made-by">Made with <span className="name">KatieV</span></div>
            </div>
          </div>        
        </div>
    </div>
  )
}



export default Dashboard
