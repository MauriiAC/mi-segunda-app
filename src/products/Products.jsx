import { Link } from 'react-router-dom'
// import product_list from './../assets/mock_data.json'
import { useState } from 'react'


export const Products = () => {

  const [products, setProducts] = useState([])

  fetch('src/assets/mock_data.json')
  .then( response => response.json() )
  .then( data => {
    setTimeout( () => {
      setProducts(data)
    }, 5000)
  })

  return (
    <>
    <h1>Productos</h1>
    <ul>
      {
        products.map( product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))
      }
    </ul>
    </>
  )
}
