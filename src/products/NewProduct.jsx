import { addDoc, collection } from "firebase/firestore"
import { useForm } from "../hooks/useForm"
import { db } from "../services/db"

export const NewProduct = () => {
  
  const {form, handleInputChange, reset} = useForm({
    name: '',
    price: '',
    stock: ''
  })

  const handleSubmit = (e) => {

    e.preventDefault()

    const productsCollection = collection(db, 'Items')

    const newProductObj = {
      name: form.name,
      price: parseFloat(form.price),
      stock: parseInt(form.stock)
    }

    addDoc(productsCollection, newProductObj)
    .then( ({id}) => console.log(id))
    .catch( error => console.error(error))

    reset()

  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='nombre del producto..'
        name='name'
        onChange={handleInputChange}
        type='text'
      />
      <input
        placeholder='nombre del producto..'
        name='price'
        onChange={handleInputChange}
        type='number'
        step="0.01"
      />
      <input
        placeholder='nombre del producto..'
        name='stock'
        onChange={handleInputChange}
        type='number'
      />
      <button type='submit'>Cargar</button>
    </form>
  )
}
