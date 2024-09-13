import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import AboutUs from "@/components/AboutUs/AboutUs";
import OurServices from "@/components/OurServices/OurServices"

const Home = () => {
  return (
    <main style={{ marginTop: '-56px' }}>


      <div className="hero overlay">
        <div className="img-bg rellax">
          <Image src="/images/magical-kenya-3.jpg" alt="Image" className="img-fluid object-fit-fill" width={1800} height={800} />
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-5">
              <h1 className="headings" data-aos="fade-up">It is a Big World Out There, Go Explore</h1>
              <p className="mb-5" data-aos="fade-up">Welcome to CAWA Tours and Travels, your gateway to discovering the enchanting beauty of Kenya. Based in the heart of East Africa, we specialize in offering exceptional hotel booking services tailored for international tourists.</p>

              {/* <div data-aos="fade-up">
                <Link href="https://www.youtube.com/watch?v=5n-e6lOhVq0" className="play-button align-items-center d-flex glightbox3">
                  <span className="icon-button me-3">
                    <span className="icon-play"></span>
                  </span>
                  <span className="caption">Watch Video</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1 */}

        <div className="section section-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
              <div className="image-stack mb-5 mb-lg-0">
                <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                  <Image src="/images/moran.jpeg" alt="Image" className="img-fluid rellax" width={600} height={400} />
                </div>
                <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100" data-rellax-percentage="0.5">
                  <Image src="/images/img_v_2.jpeg" alt="Image" className="img-fluid" width={600} height={400} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <div>
                <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">Explore Kenya with CAWA Kenya Tours & Travels</h2>
                
                <p data-aos="fade-up" data-aos-delay="200">At CAWA Kenya Tours, we offer exceptional travel experiences throughout Kenya, including exciting Maasai Mara safaris and luxurious safari packages. Our tailored travel options range from wildlife tours to relaxing beach holidays, ensuring memorable adventures with expert guidance.</p>
                <p data-aos="fade-up" data-aos-delay="300">Explore the best of Kenya, from national parks and cultural tours to thrilling adventure experiences. Trust CAWA Kenya Tours to deliver an unforgettable journey blending culture, adventure, and relaxation.</p>


                <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                  {/* <Link href="/about" className="btn btn-primarys">Read more</Link> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* SECTION 2 */}

      {/* <OurServices /> */}
      
      {/* SECTION 3 */}

      {/* <div className="section section-3" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-lg-5" data-aos="fade-up">
              <h2 className="heading mb-3">Discover Hundred of Travel Destinations</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            <div className="col-lg-5 text-md-end" data-aos="fade-up" data-aos-delay="100">
              <div id="destination-controls">
                <span className="prev me-3" data-controls="prev">
                  <span className="icon-chevron-left"></span>
                </span>
                <span className="next" data-controls="next">
                  <span className="icon-chevron-right"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="destination-slider-wrap">
          <div className="destination-slider">
            <div className="destination">
              <div className="thumb">
                <Image src="/images/img-1.jpg" alt="Image" className="img-fluid" width={600} height={400} />
                <div className="price">$430</div>
              </div>
              <div className="mt-4">
                <h3><a href="#">Paradise Beach, Palawan Island</a></h3>
                <span className="meta">Maldives, Repbulic Maldives</span>
              </div>
            </div>

            <div className="destination">
              <div className="thumb">
                <Image src="/images/img-2.jpg" alt="Image" className="img-fluid" width={600} height={400} />
                <div className="price">$430</div>
              </div>
              <div className="mt-4">
                <h3><a href="#">Bora Bora</a></h3>
                <span className="meta">Bora Bora, Maldives</span>
              </div>
            </div>

            <div className="destination">
              <div className="thumb">
                <Image src="/images/img-3.jpg" alt="Image" className="img-fluid" width={600} height={400} />
                <div className="price">$430</div>
              </div>
              <div className="mt-4">
                <h3><a href="#">Maui</a></h3>
                <span className="meta">Bora Bora, Maldives</span>
              </div>
            </div>

            <div className="destination">
              <div className="thumb">
                <Image src="/images/img-4.jpg" alt="Image" className="img-fluid" width={600} height={400} />
                <div className="price">$430</div>
              </div>
              <div className="mt-4">
                <h3><a href="#">San Juan</a></h3>
                <span className="meta">Bora Bora, Maldives</span>
              </div>
            </div>

            <div className="destination">
              <div className="thumb">
                <Image src="/images/img-5.jpg" alt="Image" className="img-fluid" width={600} height={400} />
                <div className="price">$430</div>
              </div>
              <div className="mt-4">
                <h3><a href="#">James Bond Island</a></h3>
                <span className="meta">Bora Bora, Maldives</span>
              </div>
            </div>

            <div className="destination">
              <div className="thumb">
                <Image src="/images/img-6.jpg" alt="Image" className="img-fluid" width={600} height={400} />
                <div className="price">$430</div>
              </div>
              <div className="mt-4">
                <h3><a href="#">Phi Phi Island</a></h3>
                <span className="meta">Bora Bora, Maldives</span>
              </div>
            </div>

          </div>
        </div>

      </div> */}

      {/* SECTION 4 */}

      <div class="section">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5 mb-4 mb-lg-0 order-lg-2" data-aos="fade-up">
              <Image src="/images/beach.jpeg" alt="Image" class="img-fluid" width={600} height={400} />
            </div>
            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <h2 class="heading mb-4">Sweet Memories Come To Life Again</h2>
              <p>At CAWA Tours and Travels, we believe that where you stay is just as important as your destination. That is why we partner with the finest hotels and lodges across Kenya, from the bustling capital of Nairobi to the serene beaches of Mombasa and the breathtaking savannas of the Maasai Mara.</p>
              <p>Our curated selection of accommodations ensures that you can enjoy world-class amenities, exceptional service, and a true taste of Kenyan hospitality. </p>
              {/* <p class="my-4" data-aos="fade-up" data-aos-delay="200"><a href="/services" class="btn btn-primarys">Read more</a></p> */}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 */}


      <div class="section bg-light">




        <h2 class="heading mb-5 text-center">Testimonials</h2>

        <div class="text-center mb-5">
          {/* <div id="prevnext-testimonial">
				   <span class="prev me-3" data-controls="prev">
					   <span class="icon-chevron-left"></span>

				     </span>
				     <span class="next" data-controls="next">
					   <span class="icon-chevron-right"></span>

				    </span>
			  </div> */}
        </div>

        <div class="wide-slider-testimonial-wrap">
          <div class="wide-slider-testimonial">
            <div class="item">
              <blockquote class="block-testimonial">
                <div class="author">
                  <Image src="/images/person_1.jpg" alt="Free template by TemplateUX" width={600} height={400} />
                  <h4 className="highlighted-name">John Doe</h4>
                  <p class="position mb-5">CEO, Founder</p>
                </div>
                <div class="quote">&ldquo;</div>
                <p>&ldquo;We had the most amazing time exploring Kenya with CAWA Kenya Tours and Travels. The attention to detail and personalized service were outstanding. From the moment we arrived until our departure, everything was perfectly organized. Highly recommend for anyone looking to explore Kenya!&rdquo;</p>

              </blockquote>
            </div>

            {/* <div class="item">
              <blockquote class="block-testimonial">
                <div class="author">
                  <Image src="/images/person_2.jpg" alt="Free template by TemplateUX" width={600} height={400} />
                  <h4 className="highlighted-name">James Woodland</h4>
                  <p class="position mb-5">Designer at Facebook</p>
                </div>
                <div class="quote">&ldquo;</div>
                <p>&ldquo;What a fantastic adventure! CAWA Kenya Tours and Travels provided us with an authentic and enriching experience. The accommodations were top-notch, and the staff was friendly and professional. We cannot wait to book our next trip!&rdquo;</p>

              </blockquote>
            </div> */}



            {/* <div class="item">
              <blockquote class="block-testimonial">
                <div class="author">
                  <Image src="/images/person_3.jpg" alt="Free template by TemplateUX" width={600} height={400} />
                  <h4 className="highlighted-name">Rob Smith</h4>
                  <p class="position mb-5">Product Designer at Twitter</p>
                </div>
                <div class="quote">&ldquo;</div>
                <p>&ldquo;CAWA Kenya Tours and Travels exceeded all our expectations. The itinerary was well-planned and tailored to our interests. We felt safe and well taken care of throughout our journey. Thank you for making our trip to Kenya so special!&rdquo;</p>

              </blockquote>
            </div> */}

            <div class="item">
              <blockquote class="block-testimonial">
                <div class="author">
                  <Image src="/images/person_sq_1.jpg" alt="Free template by TemplateUX" width={600} height={400} />
                  <h4 className="highlighted-name">Jane White</h4>
                  <p class="position mb-5">CEO, Founder</p>
                </div>
                <div class="quote">&ldquo;</div>
                <p>&ldquo;Our safari with CAWA Kenya Tours and Travels was a dream come true! The guides were incredibly knowledgeable and made sure we had an unforgettable experience. From the breathtaking landscapes to the amazing wildlife, every moment was perfect. Highly recommend!&rdquo;</p>

              </blockquote>
            </div>

            {/* <div class="item">
					<blockquote class="block-testimonial">
						<div class="author">
							<Image src="/images/person_2.jpg" alt="Free template by TemplateUX" width={600} height={400}/>
							<h3>James Woodland</h3>
							<p class="position mb-5">Designer at Facebook</p>
						</div>
						<div class="quote">&ldquo;</div>
                 <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
  
					</blockquote>
				</div> */}

            {/* <div class="item">
					<blockquote class="block-testimonial">
						<div class="author">
							<Image src="/images/person_3.jpg" alt="Free template by TemplateUX" width={600} height={400}/>
							<h3>Rob Smith</h3>
							<p class="position mb-5">Product Designer at Twitter</p>
						</div>
						<div class="quote">&ldquo;</div>
                 <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
  
          </blockquote>
				</div> */}
          </div>
        </div>





      </div>


    </main>
  );
}

export default Home;
