import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            SUSTAINABLE FASHION • CLOTHING EXCHANGE
          </p>

          <h1>
            Give Your Clothes
            <br />
            <span>A Second Life.</span>
          </h1>

          <p className="hero-description">
            Exchange clothes with people instead of buying new ones.
            Save money, reduce textile waste, and discover something
            new for your wardrobe.
          </p>

          <div className="hero-buttons">

            <Link to="/listings" className="primary-btn">
              Browse Clothes →
            </Link>

            <Link to="/register" className="secondary-btn">
              Start Swapping
            </Link>

          </div>

        </div>

        <div className="hero-visual">

          <div className="clothing-circle">
            👗
          </div>

          <div className="swap-badge">
            <strong>1,250+</strong>
            <span>Successful Swaps</span>
          </div>

        </div>

      </section>


      {/* CATEGORIES */}
      <section className="categories">

        <div className="section-title">

          <p>EXPLORE</p>

          <h2>
            Find Your Next Favorite
          </h2>

          <span>
            Browse clothes available for exchange.
          </span>

        </div>


        <div className="category-grid">

          <div className="category-card">
            <div className="category-icon">👗</div>
            <h3>Dresses</h3>
            <p>Find beautiful dresses</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👕</div>
            <h3>Tops</h3>
            <p>Explore stylish tops</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🧥</div>
            <h3>Jackets</h3>
            <p>Discover jackets</p>
          </div>

          <div className="category-card">
            <div className="category-icon">👖</div>
            <h3>Jeans</h3>
            <p>Browse jeans</p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-it-works">

        <div className="section-title">

          <p>HOW IT WORKS</p>

          <h2>
            Swap. Reuse. Repeat.
          </h2>

          <span>
            Exchange clothes in three simple steps.
          </span>

        </div>


        <div className="steps">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <h3>
              List Your Clothes
            </h3>

            <p>
              Upload photos and add details such as size,
              brand, condition and swap value.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <h3>
              Find a Match
            </h3>

            <p>
              Browse available clothes and find something
              that matches your style and location.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <h3>
              Make the Swap
            </h3>

            <p>
              Send a swap request, negotiate and complete
              your clothing exchange.
            </p>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section className="about">

        <div className="about-content">

          <p>
            WHY SWAPSTYLE?
          </p>

          <h2>
            Fashion should be
            <br />
            <span>circular, not disposable.</span>
          </h2>

          <p>
            Our platform connects people who want to exchange
            clothes instead of continuously buying new ones.
            Give unused clothes a second life while reducing
            textile waste.
          </p>

          <Link
            to="/register"
            className="primary-btn"
          >
            Join the Community →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;