import './ArrivalsSection.css';

function ArrivalsSection() {
  return (
<div class="container">
    <div class="arrivals-section">
         <div class="arrivals-intro">
             <img src="/images/arrivals-photo.svg" alt="hand-photo" class="arrivals-photo" />
             <div class="arrivals-text">
            <h2>
                New <span className="special-h2">Arrivals</span>
            </h2>
            <p>
                Let time become your finest expression of style. Our watches blend heritage with modern craftsmanship, offering more than function — they offer identity. Select a piece designed to be admired for years to come.
            </p>
             </div>
         </div>
         <div class="product-case">
             <div class="product-image-case">
               <img src="/images/tissot-classic-dream-lightBlue.svg" alt="watch" />
             </div>
              <div class="product-case-description">
                  <p class="product-case-name">Tissot classic dream 40mm</p>
                  <p class="product-case-price">330.00 $</p>
              </div>
         </div>
    </div>

</div>
  );
}

export default ArrivalsSection;