export default function Card({game, addToCart}) {

    const { id, imagen, descripcion, titulo, precio} = game

  return (
    <div key={titulo} className="card">
         <div className="">
             <img src={imagen} alt={'imagen ' + titulo} />
         </div>
         <div className="text-container">
             <h3 className="text-uppercase">{titulo}</h3>
             <p className="text-description">{descripcion}</p>
             <p className="text-price">${precio}</p>
         <button 
             type="button"
             className="btn btn-dark w-100"
             onClick={() => addToCart(game)}
         >Agregar al Carrito</button>
         </div>
     </div>
  )
}
