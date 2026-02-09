import { useState } from 'react';
import './Collections.css';
import productsData from '../data/products.json';

function Collections() {
  // STATE (datele care se schimbă)
  const [priceRange, setPriceRange] = useState([0, 3000]); // Range de preț
  const [selectedGender, setSelectedGender] = useState([]); // Array cu gender-uri selectate
  const [selectedMovement, setSelectedMovement] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Pagina curentă
  const [searchQuery, setSearchQuery] = useState(''); // Text din search bar
  
  const productsPerPage = 9; // Câte produse pe pagină

  // FUNCȚII DE FILTRARE
  
  // 1. Filtrează după toate criteriile
  const filteredProducts = productsData.filter(product => {
    // Filtrare după preț
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Filtrare după gender (dacă array-ul e gol, arată toate)
    const genderMatch = selectedGender.length === 0 || selectedGender.includes(product.gender);
    
    // Filtrare după movement
    const movementMatch = selectedMovement.length === 0 || selectedMovement.includes(product.movement);
    
    // Filtrare după size
    const sizeMatch = selectedSize.length === 0 || selectedSize.includes(product.size);
    
    // Filtrare după material
    const materialMatch = selectedMaterial.length === 0 || selectedMaterial.includes(product.caseMaterial);
    
    // Filtrare după search query
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Returnează doar dacă TOATE condițiile sunt îndeplinite
    return priceMatch && genderMatch && movementMatch && sizeMatch && materialMatch && searchMatch;
  });

  // 2. Calculează produsele pentru pagina curentă
  const indexOfLastProduct = currentPage * productsPerPage; // Ex: pagina 1 → 9
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // Ex: pagina 1 → 0
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // 3. Calculează numărul total de pagini
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // FUNCȚII PENTRU CHECKBOX-URI
  
  const handleCheckboxChange = (value, stateArray, setStateFunc) => {
    if (stateArray.includes(value)) {
      // Dacă e deja bifat, scoate-l
      setStateFunc(stateArray.filter(item => item !== value));
    } else {
      // Dacă nu e bifat, adaugă-l
      setStateFunc([...stateArray, value]);
    }
  };

  // FUNCȚIE PENTRU CLEAR ALL FILTERS
  const clearAllFilters = () => {
    setPriceRange([0, 3000]);
    setSelectedGender([]);
    setSelectedMovement([]);
    setSelectedSize([]);
    setSelectedMaterial([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  // FUNCȚIE PENTRU APPLY (opțional, poți să aplici automat)
  const applyFilters = () => {
    setCurrentPage(1); // Resetează la pagina 1 când aplici filtre
  };

  return (
    <div className="collections-page">
      <div className="collections-hero">
        <h1>Explore <span className="special-h1">Our Watches</span></h1>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search product..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src="/images/search.svg" alt="Search" />
        </div>
      </div>

      <div className="collections-container">
        {/* SIDEBAR CU FILTRE */}
        <aside className="filters-sidebar">
          {/* PRICE FILTER */}
          <div className="filter-group">
            <h3>Price</h3>
            <div className="price-range">
              <input 
                type="range" 
                min="0" 
                max="3000" 
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              />
              <div className="price-values">
                <span>{priceRange[0]}$</span>
                <span>{priceRange[1]}$</span>
              </div>
            </div>
          </div>

          {/* GENDER FILTER */}
          <div className="filter-group">
            <h3>Gender</h3>
            <label>
              <input 
                type="checkbox" 
                checked={selectedGender.includes('Women')}
                onChange={() => handleCheckboxChange('Women', selectedGender, setSelectedGender)}
              />
              Women
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={selectedGender.includes('Men')}
                onChange={() => handleCheckboxChange('Men', selectedGender, setSelectedGender)}
              />
              Men
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={selectedGender.includes('Unisex')}
                onChange={() => handleCheckboxChange('Unisex', selectedGender, setSelectedGender)}
              />
              Unisex
            </label>
          </div>

          {/* MOVEMENT FILTER */}
          <div className="filter-group">
            <h3>Movement</h3>
            <label>
              <input 
                type="checkbox" 
                checked={selectedMovement.includes('Quartz')}
                onChange={() => handleCheckboxChange('Quartz', selectedMovement, setSelectedMovement)}
              />
              Quartz
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={selectedMovement.includes('Solar')}
                onChange={() => handleCheckboxChange('Solar', selectedMovement, setSelectedMovement)}
              />
              Solar
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={selectedMovement.includes('Automatic')}
                onChange={() => handleCheckboxChange('Automatic', selectedMovement, setSelectedMovement)}
              />
              Automatic
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={selectedMovement.includes('Manual')}
                onChange={() => handleCheckboxChange('Manual', selectedMovement, setSelectedMovement)}
              />
              Manual
            </label>
          </div>

          {/* SIZE FILTER */}
          <div className="filter-group">
            <h3>Size</h3>
            <label>
              <input 
                type="checkbox" 
                checked={selectedSize.includes('34-35mm')}
                onChange={() => handleCheckboxChange('34-35mm', selectedSize, setSelectedSize)}
              />
              34-35mm
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={selectedSize.includes('38-39mm')}
                onChange={() => handleCheckboxChange('38-39mm', selectedSize, setSelectedSize)}
              />
              38-39mm
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={selectedSize.includes('40mm+')}
                onChange={() => handleCheckboxChange('40mm+', selectedSize, setSelectedSize)}
              />
              40mm+
            </label>
          </div>

          {/* CASE MATERIAL FILTER */}
          <div className="filter-group">
            <h3>Case material</h3>
            <label>
              <input 
                type="checkbox" 
                checked={selectedMaterial.includes('Stainless steel')}
                onChange={() => handleCheckboxChange('Stainless steel', selectedMaterial, setSelectedMaterial)}
              />
              Stainless steel
            </label>
            <label>
              <input 
                type="checkbox" 
                checked={selectedMaterial.includes('Stainless steel & PVD coating')}
                onChange={() => handleCheckboxChange('Stainless steel & PVD coating', selectedMaterial, setSelectedMaterial)}
              />
              Stainless steel & PVD coating
            </label>
          </div>

          {/* BUTTONS */}
          <button className="clear-btn" onClick={clearAllFilters}>CLEAR ALL FILTERS</button>
          <button className="apply-btn" onClick={applyFilters}>APPLY</button>
        </aside>

        {/* PRODUCTS GRID */}
        <div className="products-section">
          <div className="products-grid">
            {currentProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h4>{product.name}</h4>
                <p className="product-price">{product.price}.00 $</p>
              </div>
            ))}
          </div>

          {/* PAGINARE */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collections;