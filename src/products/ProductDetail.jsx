import { useParams, useNavigate } from "react-router-dom"
import data from './../assets/mock_data.json'
import './ProductDetail.css'
export const ProductDetail = ( ) => {
  
  const params = useParams()

  const navigate = useNavigate()

  const {productId} = params

  const onBack = () => {
    navigate(-1)
  }

  const product = data.find( product => product.id == productId)
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <p className="card-text">{product.stock}</p>
      </div>
      <button onClick={onBack}> Volver </button>
    </div>
  )
}
