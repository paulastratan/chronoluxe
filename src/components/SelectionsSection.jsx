import './SelectionsSection.css';

function SelectionsSection() {
  return (
<div class="container">
    <div class="selections-section">
        <div class="selections-text-content">
        <p>Explore a curated selection of timepieces crafted to complement every style. Each watch in our collection reflects precision, character, and refined aesthetics — thoughtfully chosen to offer you pieces that elevate every moment.</p>
        <button className="red-btn">
          <p>SEE NEW COLLECTION</p>
          <img src="/images/btn-arrow-red.svg" alt="Arrow" />
        </button>
        </div>
        <div class="selection-products-content">
        <div class="product-case">
             <div class="product-image-case">
               <img src="/images/tissot-heritage-silver.svg" alt="watch" />
             </div>
              <div class="product-case-description">
                  <p class="product-case-name">Tissot classic dream 40mm</p>
                  <p class="product-case-price">389.00 $</p>
              </div>
         </div>
        <div class="product-case">
             <div class="product-image-case">
               <img src="/images/tissot-royale-black.svg" alt="watch" />
             </div>
              <div class="product-case-description">
                  <p class="product-case-name">Tissot classic dream 40mm</p>
                  <p class="product-case-price">320.00 $</p>
              </div>
         </div>
<div class="product-case">
             <div class="product-image-case">
               <img src="/images/tissot-chrono-blue-prestige.svg" alt="watch" />
             </div>
              <div class="product-case-description">
                  <p class="product-case-name">Tissot classic dream 40mm</p>
                  <p class="product-case-price">420.00 $</p>
              </div>
         </div>
        </div>
    </div>
</div>
  );
}

export default SelectionsSection;