function dropFunction(){
    var position = $(`#dropDown`);
    
    position.offset({});
    document.getElementById("dropDown").classList.toggle("show");

}



const products = [
  {
    img:`castile-liquid-soap-peppermint.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `Peppermint`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `peppermint`
  },{
    img:`castile-liquid-soap-baby.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `baby`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `baby`
  },{
    img:`castile-liquid-soap-lavender.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `Lavender`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `lavender`
  },{
    img:`castile-liquid-soap-almond.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `Almond`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `almond` 
  },{
    img:`castile-liquid-soap-almond.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `Almond`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `almond`   
  },{
    img:`castile-liquid-soap-citrus.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `Citrus`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `citrus`     
  },{
    img:`castile-liquid-soap-teatree.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `Tea Tree`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `teatree`  
  },{
    img:`castile-liquid-soap-rose.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `Rose`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `rose`    
  },{
    img:`castile-liquid-soap-eucalyptus.jpg`,
    name: `PURE-CASTILE LIQUID SOAP`,
    scent: `Eucalyptus`,
    cost: 18,
    size: `32 oz`,
    type:`Liquid soap`,
    category: `eucalyptus`  
  },{
    img:`castile-bar-soap-peppermint.jpg`,
    name: `PURE-CASTILE BAR SOAP`,
    scent: `Peppermint`,
    cost: 5,
    size: `5 oz`,
    type:`bar soap`,
    category: `peppermint` 
  },{
    img:`castile-bar-soap-baby.jpg`,
    name: `PURE-CASTILE BAR SOAP`,
    scent: `Baby unscented`,
    cost: 5,
    size: `5 oz`,
    type:`bar soap`,
    category: `baby` 
  },{
    img:`castile-bar-soap-lavender.jpg`,
    name: `PURE-CASTILE BAR SOAP`,
    scent: `Lavender`,
    cost: 5,
    size: `5 oz`,
    type:`bar soap`,
    category: `lavender` 
  },{
    img:`castile-bar-soap-almond.jpg`,
    name: `PURE-CASTILE BAR SOAP`,
    scent: `Almond`,
    cost: 5,
    size: `5 oz`,
    type:`bar soap`,
    category: `almond` 
  },{
    img:`castile-bar-soap-citrus.jpg`,
    name: `PURE-CASTILE BAR SOAP`,
    scent: `Citrus`,
    cost: 5,
    size: `5 oz`,
    type:`bar soap`,
    category: `citrust` 
  },{
    img:`castile-bar-soap-teatree.jpg`,
    name: `PURE-CASTILE BAR SOAP`,
    scent: `Tea Tree`,
    cost: 5,
    size: `5 oz`,
    type:`bar soap`,
    category: `teatree` 
  },{
    img:`castile-bar-soap-rose.jpg`,
    name: `PURE-CASTILE BAR SOAP`,
    scent: `Rose`,
    cost: 5,
    size: `5 oz`,
    type:`bar soap`,
    category: `rose` 
  },{
    img:`castile-bar-soap-eucalyptus.jpg`,
    name: `PURE-CASTILE BAR SOAP`,
    scent: `Eucalyptus`,
    cost: 5,
    size: `5 oz`,
    type:`bar soap`,
    category: `eucalyptus` 
  },{
    img:`organic-sugar-soap-peppermint.jpg`,
    name: `ORGANIC SUGAR SOAPS`,
    scent: `Peppermint`,
    cost: 20,
    size: `24 oz`,
    type:`sugar soap`,
    category: `peppermint` 
  },{
    img:`organic-sugar-soap-baby.jpg`,
    name: `ORGANIC SUGAR SOAPS`,
    scent: `Baby unscented`,
    cost: 20,
    size: `24 oz`,
    type:`sugar soap`,
    category: `baby` 
  },{
    img:`organic-sugar-soap-lavender.jpg`,
    name: `ORGANIC SUGAR SOAPS`,
    scent: `Lavender`,
    cost: 20,
    size: `24 oz`,
    type:`sugar soap`,
    category: `Lavender` 
  },{
    img:`organic-sugar-soap-lemongrass.jpg`,
    name: `ORGANIC SUGAR SOAPS`,
    scent: `Lemongrass`,
    cost: 20,
    size: `24 oz`,
    type:`sugar soap`,
    category: `lemongrass` 
  },{
    img:`organic-sugar-soap-teatree.jpg`,
    name: `ORGANIC SUGAR SOAPS`,
    scent: `Tea Tree`,
    cost: 20,
    size: `24 oz`,
    type:`sugar soap`,
    category: `teatree` 
  }
]






function isInThisCategory(prod) {

  if (this == 'all') {
    return true;
  } else if (prod.category == this) {
    return true;
  } else {
    return false;
  }
}


function getProductAsHtmlString(product) {


  return `<article class="product wrapper">
            <img src="img/${product.img}"></img>
            <h2>${product.name}</h2>
            <ul>
              <li>Scent: ${product.scent}</li>
              <li>Type: ${product.type}</li>
              <li>Size: ${product.size}</li>
            </ul>
            <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
            <div class="product-cost">${product.cost}</div>
          </article>`;
}

function renderProducts(arrToRender) {
  const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString);
  const strOfHtmlProducts = arrOfHtmlProducts.join(`\n`);

  document.getElementById('products').innerHTML = strOfHtmlProducts;  
}


function toggleProductLayout(event) {
  document.getElementById('products').classList.toggle('grid-view');
}

function loadProductCategory(event) {
  const categoryImSearchingFor = event.target.value; 
  renderProducts(products.filter(isInThisCategory, categoryImSearchingFor)); 
}





renderProducts(products); 

document.getElementById('toggleView').addEventListener('click', toggleProductLayout);
document.getElementById('productCategory').addEventListener('change', loadProductCategory);


function isMatchingName(prodName){
  if(prodName.name.toUpperCase().includes(this.trim().toUpperCase())){
    return true;
  } else {
    return false;
  }
}

function loadProductByName(event){
  const nameImSearchingFor = event.target.value;
  renderProducts(products.filter(isMatchingName, nameImSearchingFor));
}


document.getElementById(`find`).addEventListener('input', loadProductByName);

