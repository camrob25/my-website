import { useState } from "react";
import "./App.css";

function App() {
  const [setting, setSetting] = useState("");
  const [services, setServices] = useState([]);
  const [snacks, setSnacks] = useState([]);

  const toggleService = (service) => {
    setServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  const toggleSnack = (snack) => {
    setSnacks((current) =>
      current.includes(snack)
        ? current.filter((item) => item !== snack)
        : [...current, snack]
    );
  };

  return (
    <div className="spa-site">

      <header>
        <div className="logo">Cheyenne's Princess Spa</div>

        <nav>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#snacks">Snacks</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">A spa experience made just for you Sweet Pea</p>

          <h1>
            Relax.
            <br />
            Unwind.
            <br />
            Feel Loved.
          </h1>

          <p className="hero-text">
            Your personalized at-home spa experience with relaxation,
            beauty, comfort, and a little extra love.
          </p>

          <a href="#experience" className="hero-button">
            Build Your Spa Experience
          </a>
        </div>
      </section>
      <section id="experience" className="section experience">
        <p className="eyebrow">Dont be Chey, Set the atmosphere</p>
        <h2>Where would you like to relax?</h2>

        <div className="choice-grid">

          <button
            className={setting === "Inside" ? "choice selected" : "choice"}
            onClick={() => setSetting("Inside")}
          >
            🏠
            <span>Inside</span>
            <small>Cozy, blankets & relaxing music</small>
          </button>

          <button
            className={setting === "Outside" ? "choice selected" : "choice"}
            onClick={() => setSetting("Outside")}
          >
            🌿
            <span>Outside</span>
            <small>Fresh air, blankets, music, reading, pool, peaceful scenery</small>
          </button>

        </div>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">Choose your treatments</p>
        <h2>Your Spa Menu</h2>

        <div className="service-grid">

          <div
            className={`service-card ${
              services.includes("Luxury Facial") ? "selected" : ""
            }`}
            onClick={() => toggleService("Luxury Facial")}
          >
            <span>✨</span>
            <h3>Luxury Facial</h3>
            <p>
              Gentle cleansing, facial massage, moisturizer and a relaxing
              face mask with the products of your choosing.
            </p>
            <strong>30-45 minutes</strong>
          </div>

          <div
            className={`service-card ${
              services.includes("Deep Tissue Massage") ? "selected" : ""
            }`}
            onClick={() => toggleService("Deep Tissue Massage")}
          >
            <span>💆</span>
            <h3>Deep Tissue Massage</h3>
            <p>
              A relaxing full-body massage focused on tension and tired
              muscles.
            </p>
            <strong>30-60 minutes</strong>
          </div>

          <div
            className={`service-card ${
              services.includes("Nail Care") ? "selected" : ""
            }`}
            onClick={() => toggleService("Nail Care")}
          >
            <span>💅</span>
            <h3>Nail Care</h3>
            <p>
              Manicure, pedicure, nail shaping, hand and foot massage
            </p>
            <strong>30–60 minutes</strong>
          </div>

          <div
            className={`service-card ${
              services.includes("Hair Removal") ? "selected" : ""
            }`}
            onClick={() => toggleService("Hair Removal")}
          >
            <span>🌸</span>
            <h3>In Grown Hair Removal</h3>
            <p>
              Choose the areas you'd like included in your personalized
              treatment.
            </p>
            <strong>Custom</strong>
          </div>

          <div
            className={`service-card ${
              services.includes("Hugs & Cuddles") ? "selected" : ""
            }`}
            onClick={() => toggleService("Hugs & Cuddles")}
          >
            <span>🤗</span>
            <h3>Hugs & Cuddles</h3>
            <p>
              Cozy relaxation time, warm hugs and affectionate cuddling.
            </p>
            <strong>As long as you want</strong>
          </div>

        </div>
      </section>

      <section id="snacks" className="section">
        <p className="eyebrow">Something delicious</p>
        <h2>Choose Your Snacks</h2>

        <div className="snack-grid">

          {[
            "🍓 Fruit",
            "🍫 Candy",
            "🍪 Desserts",
            "🍿 Popcorn",
            "🥤 Soda(not Dr Pepper)",
            "🍵 Matcha, coffee, or Tea",
            "💧 Water",
          ].map((snack) => (
            <button
              key={snack}
              className={snacks.includes(snack) ? "snack selected" : "snack"}
              onClick={() => toggleSnack(snack)}
            >
              {snack}
            </button>
          ))}

        </div>
      </section>

      <section className="summary">
        <p className="eyebrow">Your personalized experience</p>

        <h2>Your Spa Plan</h2>

        <div className="summary-box">

          <p>
            <strong>Setting:</strong>{" "}
            {setting || "Choose inside or outside"}
          </p>

          <p>
            <strong>Treatments:</strong>{" "}
            {services.length > 0
              ? services.join(", ")
              : "Choose your treatments"}
          </p>

          <p>
            <strong>Snacks:</strong>{" "}
            {snacks.length > 0
              ? snacks.join(", ")
              : "Choose your snacks"}
          </p>

          <button className="book-button">
            Bring a screenshot of this card apon arrival my love
          </button>

        </div>
      </section>

      <footer>
        <p>Very important!! Payment must be made in kisses. I dont make the rules</p>
      </footer>

    </div>
  );
}

export default App;