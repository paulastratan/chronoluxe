import './ProductSection.css';

function ProductSection() {
  return (
<div class="container">
   <div class="product-section">
       <div class="product-section-text">
            <h3>Where Timeless <span className="special-h3">Elegance </span>Meets Modern <span className="special-h3"> Precision</span></h3>
            <p class="top-product-name">TISSOT CLASSIC DREAM 40MM</p>
            <p>This model stands out through its refined craftsmanship and timeless design. Every detail — from its carefully shaped case to the precision of its movement — highlights the elegance and character that define this piece. A watch created to elevate your style and accompany you with distinction in every moment.</p>
       </div>
       <div class="produc-section-photo">
           <img src="/images/man-photo.svg" alt="Arrow" />
       </div>
       <button class="circle-button">
          <p>SEE PRODUCT PAGE</p>
       </button>
   </div>
</div>
  );
}

export default ProductSection;