

const SliderArea = () =>{
    return (<>
        {/* <!-- slider area start --> */}
        <section class="hero-slider">
            <div class="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
                {/* <!-- single slider item start --> */}
                <div class="hero-single-slide hero-overlay">
                    <div class="hero-slider-item hero-1 bg-img" data-bg="assets/img/slider/home1-slide2.jpg">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-slider-content slide-1">
                                        <h1 class="slide-title">New</h1>
                                        <h2 class="slide-subtitle">Running Sneakers <span>Men's like plex</span></h2>
                                        <a href="#" class="btn btn-large btn-bg">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single slider item start --> */}

                {/* <!-- single slider item start --> */}
                <div class="hero-single-slide hero-overlay">
                    <div class="hero-slider-item hero-1 bg-img" data-bg="assets/img/slider/home2-slide1.jpg">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hero-slider-content slide-2">
                                        <h1 class="slide-title">Sale</h1>
                                        <h2 class="slide-subtitle">Running Sneakers <span>Men's like plex</span></h2>
                                        <a href="#" class="btn btn-large btn-bg">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single slider item start --> */}
            </div>
        </section>
        {/* <!-- slider area end --> */}
    </>)
}

export default SliderArea