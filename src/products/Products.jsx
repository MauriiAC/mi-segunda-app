import { Link } from 'react-router-dom'
// import product_list from './../assets/mock_data.json'
import { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useForm } from '../hooks/useForm'

export const Products = () => {

  const db = getFirestore()
  const [products, setProducts] = useState([])
  const {form, handleInputChange} = useForm({
    minPrice: ''
  })

  useEffect(() => {
    const productsDB = collection(db, 'Items')
  
    getDocs(productsDB)
    .then( products => {
      setProducts(products.docs.map( doc => ({id: doc.id ,...doc.data()} ) ))
    } )

  }, [db])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const q = query(collection(db, 'Items'), where("price", ">=", parseFloat(form.minPrice)))

    getDocs(q)
    .then( products => {
      setProducts(products.docs.map( doc => ({id: doc.id ,...doc.data()} ) ))
    } )

  }


  return (
    <>
    {
    products.length
    ?
    <>
    <h1>Productos</h1>
    <form onSubmit={handleSubmit}>
      <input
        placeholder='precio minimo...'
        name='minPrice'
        onChange={handleInputChange}
        type='number'
        step="0.01"
      />
      <button type='submit'>Filtrar</button>
    </form>
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
    :
    <h3>Loading...</h3>
    }
    </>
  )
}
