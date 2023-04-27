
export const Select = ({opciones, tipo}) => {
  
  if (tipo === 'desplegable'){
    return (
      <select>
        {
          opciones.map( (opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))
        }
      </select>
    )
  }  
  else if (tipo === 'grupo'){
    return (
      <div>
        {
          opciones.map( opcion => (
            <label key={opcion}>
              <input type="radio" name="opcion" value={opcion}/> {opcion}
            </label>
          ))
        }
      </div>
    )
  }
  
}
