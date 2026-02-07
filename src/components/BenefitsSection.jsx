import './BenefitsSection.css';

function BenefitsSection() {
  return (
<div class="container">
    <div class="benefits-section">
        <div class="benefit-first-part">
            <div class="benefit-first-text-content">
                <h2>Premium <span className="special-h2">Benefits</span></h2>
          <img src="/images/crestik.svg" alt="Decorative" class="icon"/>
          <p className="big-paragraph">
            Every watch in our collection is selected with a focus on craftsmanship, 
            precision, and refined aesthetics. We partner only with trusted creators 
            and brands that uphold the highest standards, ensuring every piece delivers 
            lasting beauty and performance.
          </p>
            </div>
            <div class="benefit-first-image-content">
                <img src="/images/watch-benefit-1.svg" alt="Watch Benefit 1" />
            </div>
        </div>
        <div class="benefit-second-part">
                        <div class="benefit-second-image">
                <img src="/images/watch-benefit-2.svg" alt="Watch Benefit 1" />
            </div>
          <div class="benefit-second-text-content">
          <p className="big-paragraph">
            Every watch in our collection is selected with a focus on craftsmanship, 
            precision, and refined aesthetics. We partner only with trusted creators 
            and brands that uphold the highest standards, ensuring every piece delivers 
            lasting beauty and performance.
          </p>
        <button className="red-btn">
          <p>SEE NEW COLLECTION</p>
          <img src="/images/btn-arrow-red.svg" alt="Arrow" />
        </button>
            </div>

        </div>
    </div>
</div>
  );
}

export default BenefitsSection;