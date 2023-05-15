import { useParams, useNavigate } from "react-router-dom"
import './ProductDetail.css'
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../services/db"

export const ProductDetail = ( ) => {
  
  const params = useParams()

  const navigate = useNavigate()

  const {productId} = params

  const onBack = () => {
    navigate(-1)
  }

  const [product, setProduct] = useState(null)
  
  useEffect(() => {

      const itemDB = doc(db, 'Items', productId)

      getDoc(itemDB)
      .then( (product) => {
        if (product.exists()){
          setProduct({id: product.id ,...product.data()})
        }
      })
    }
    ,[productId]
  )

  return (
    <>
    {
      product
      ?
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}</p>
          <p className="card-text">{product.stock}</p>
        </div>
        <button onClick={onBack}> Volver </button>
      </div>
      :
      <h3>Loading...</h3>
    }
    </>

  )
}
