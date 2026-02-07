import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Where <span className="special-h1">Time Becomes Art</span>
        </h1>
        <button className="red-btn">
          <p>SEE NEW COLLECTION</p>
          <img src="/images/btn-arrow-red.svg" alt="Arrow" />
        </button>
      </div>

      {/* ← CERCUL CA IMAGINE SVG */}
      <div className="hero-circle">
        <img src="/images/hero-circle.svg" alt="" />
      </div>

      <div className="hero-image">
        <img src="/images/heroImage.svg" alt="Hero Watch" />
      </div>
        <div className="hero-line">
        <img src="/images/hero-line.svg" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;