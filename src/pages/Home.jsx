import React from "react";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Swap. Style. Sustain.</h1>

          <p>
            Give your clothes a second life by exchanging them with people
            around you.
          </p>

          <div className="hero-buttons">
            <button>Browse Clothes</button>
            <button className="secondary-btn">List an Item</button>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>How Clothing Swap Works</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>👕 List Your Clothes</h3>
            <p>
              Upload your unused clothes with images, size, condition and
              description.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔍 Find Clothes</h3>
            <p>
              Browse clothes listed by other users based on your preferences.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔄 Request a Swap</h3>
            <p>
              Send a swap request and exchange clothes with another user.
            </p>
          </div>

          <div className="feature-card">
            <h3>🌱 Reduce Waste</h3>
            <p>
              Reuse fashion and reduce textile waste while discovering new
              styles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;