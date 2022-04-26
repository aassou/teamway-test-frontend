import banner from '../../assets/images/pic.jpg';

const HomePage = () => (
  <div className="body-wrap boxed-container">
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0">Personality Test</h1>
              <p className="hero-paragraph">
                Are you an Introvert or Extrovert ? Do you want to know ?! Then start the test now and find your Personality.
              </p>
              <div className="hero-cta">
                <a className="button button-primary" href="/personality-test">Take your Personality Test Now!</a>
              </div>
            </div>
            <div className="hero-media">
              <div className="hero-media-container">
                <img className="hero-media-image asset-light" src={banner} alt="Hero media" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default HomePage;
