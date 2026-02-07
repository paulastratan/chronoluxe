import './TopWatches.css';

function TopWatches() {
  return (
<div class="container">
   <div class="top-watches-section">
    <div class="top-watches-text">
        <h3>
          Curated <span className="special-h3">Selections</span>
        </h3>
        <p>Our top-rated pieces, cherished for their quality, design, and enduring elegance.</p>
    </div>
    <div class="top-product-block">
          <p class="top-product-name">TISSOT PR 100 40MM</p>
          <img src="/images/tissot-pr-black.svg" alt="watch" />
    </div>
    <div class="top-product-block">
          <p class="top-product-name">TISSOT BALLADE 39MM</p>
          <img src="/images/tissot-ballade-green.svg" alt="watch" />
    </div>
    <div class="top-product-block">
          <p class="top-product-name">TISSOT CLASSIC DREAM 42MM</p>
          <img src="/images/tissot-classic-dream-pink.svg" alt="watch" />
    </div>
   </div>
</div>
  );
}

export default TopWatches;