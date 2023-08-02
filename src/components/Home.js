import React from 'react'
import Header from './Header'
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div class="bd-example">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://dicc.in/blog/wp-content/uploads/2022/01/image-6-min-6-1140x600.png"
                  class="d-block w-100 imgg"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="cont">Read the blogs here</h5>
                  <p class="cont">You will get tech related blogs .</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://img.freepik.com/premium-photo/javascript-smart-screen-system-with-with-elements-program-code-3d_327483-818.jpg"
                  class="d-block w-100 imgg"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="cont">Read some amazing Javascript blogs</h5>
                  <p class="cont">
                    To all amazing properties you will get so much here!!!
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://sitegalleria.com/wp-content/uploads/2019/08/web-development-company-bangalore.jpg"
                  class="d-block w-100 imgg"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="cont">WeB development is the new key !!</h5>
                  <p class="cont">
                    From Mern Stack to Django you will get here so much.
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
        <div class="cblog">
          <div class="cbimg">
            <img src="https://blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiKQBhcVtj--7thQ1JzOgtxMAjmy2cg09uEwEj62zYpgTwvLBCJSAvhmxuvL1DZrtOQ9409UIX0dyxPEY3ofOYElLwjGkEiLoVJk7tZfb-in_OymeFMdLREF0TETdMIKQBd6_9DuUGUnP-Nn28MNUwum8PJ_AdDwJy7Ook/w1200" />
          </div>
          <div class="cbcont">
            Create a beautiful blog that fits your style. Choose from a
            selection of templates – all with flexible layouts and hundreds of
            background images – or design something new.
          </div>
        </div>
        <div class="cblog">
          <div class="cbimg">
            <img src="https://blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhy9r8vyLfwnrBV2wBe_8yh4eCCMJtO8VNiNucSp35Amu05tih3a8xYXQxRxoUkQDHdCw7nW8D31w-xBqya757bcQ7tErWAxrTj9EFSteCHgxGebiCnCAX83DBcNX67kWNZGIBWSj7OMMl1HDtYhiuajGSNS7_O4XHMhKSOufUDUw/w768" />
          </div>
          <div class="cbcont">
            <div class="cbhead ">KNOW YOUR AUDIENCE</div>
            <p id="aud">
              Find out which posts are a hit with Blogger’s built-in analytics.
              You’ll see where your audience is coming from and what they’re
              interested in.You can even connect your blog directly to Google
              Analytics for a more detailed look.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="cblog">
          <div class="cbcont">
            <div class="cbhead ">Join millions of others</div>
            <p class="final" id="aud">
              Whether sharing your expertise, breaking news, or whatever’s on
              your mind, you’re in good company on Blogger. Join us to discover
              why millions people have published their ideas here.
            </p>
          </div>
          <div class="cbimg">
            <img
              id="join"
              src="https://cdn.w600.comps.canstockphoto.com/word-writing-text-join-us-business-drawings_csp77480094.jpg"
            />
          </div>
        </div>

        <div class="blank"></div>
        <div class="container my-4 ">
          <div class="hding "> Why Choose us ?</div>
        </div>

        <div class=" container cardcs">
          <div class="card">
            <div class="imagee">
              <img
                class="imgcard"
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
            <div class="cardcont">Top Content Blogs</div>
          </div>
          <div class="card">
            <div class="imagee">
              <img
                class="imgcard"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN1OGnsOXnJs7PbiBsm71vg1ysqv88DsnkR2qkmVgt_pbSFCyEFQ46xWdjW9nfHg63YY&usqp=CAU"
              />
            </div>
            <div class="cardcont">Innovative Ideas</div>
          </div>
          <div class="card">
            <div class="imagee">
              <img
                class="imgcard"
                src="https://media.istockphoto.com/vectors/financial329-vector-id1398333202?s=612x612"
              />
            </div>
            <div class="cardcont">Crypto Currency</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home