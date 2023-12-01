const getProducts = async () => {
    const result = await fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
  
  
    const products = await result.json()
    return products
  }
  
  getProducts()
    .then(products => {
      const container = document.querySelector('#container')
  
      products.forEach((product, i) => {
        const divFlex = document.createElement('div')
        divFlex.setAttribute('class', 'container-div-flex')
  
        const h1 = document.createElement('h1')
        h1.textContent = i + 1
  
        const p = document.createElement('p')
        p.setAttribute('class', 'container-p')
        p.textContent = product.title
  
        divFlex.appendChild(h1)
        divFlex.appendChild(p)
  
        const img = document.createElement('img')
        img.setAttribute('class', 'container-img')
        img.src = product.image
  
        const tooltipDiv = document.createElement('div')
        tooltipDiv.setAttribute('class', 'tooltip')
        const tooltipSpan = document.createElement('span')
        tooltipSpan.textContent = product.description
        tooltipSpan.setAttribute('class', 'tooltiptext')
  
        const productDescription = document.createElement('p')
  
        if(product.description.length > 300) {
          productDescription.textContent = `${product.description.slice(0, 300)} ...`
        } else {
          productDescription.textContent = product.description
        }
  
        productDescription.style.fontSize = '10px'
  
        tooltipDiv.appendChild(productDescription)
        tooltipDiv.appendChild(tooltipSpan)
  
        const categoryText = document.createElement('p')
        categoryText.setAttribute('class', 'container-category-text')
        categoryText.textContent = product.category
  
        const categoryDiv = document.createElement('div')
        categoryDiv.setAttribute('class', 'container-category-div')
        categoryDiv.appendChild(categoryText)
  
        const priceText = document.createElement('p')
        priceText.textContent = `$${product.price}`
        priceText.setAttribute('class', 'container-price-text')
  
        const div = document.createElement('div')
  
        div.style.position = 'relative'
        div.setAttribute('class', 'container-product')
  
        div.appendChild(divFlex)
        div.appendChild(img)
        div.appendChild(tooltipDiv)
        div.appendChild(categoryDiv)
        div.appendChild(priceText)
        container?.appendChild(div)
      })
    })
    .catch(error => console.log(error))
  
