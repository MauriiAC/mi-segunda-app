import { Link } from 'react-router-dom'
import product_list from './../assets/mock_data.json'


export const Products = () => {
  return (
    <>
    <h1>Productos</h1>
    <ul>
      {
        product_list.map( product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))
      }
    </ul>
    </>
  )
}
