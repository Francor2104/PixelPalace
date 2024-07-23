
export default function Header({ cart, removeFromCart, increaseQty, decreaseQty, clearCart }) {

    const cartTotal = () => cart.reduce( (total, item)  => total + (item.cantidad * item.precio),0)
  return (
    <header className="header">
    <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
                <a className='d-inline logo' href="index.html">
                    <img className="img-fluid" src="/img/logo.png" alt="imagen logo" />
                    <h1>pixel palace</h1>
                </a>
            </div>
            <nav className="col-md-6 a d-flex align-items-start justify-content-end navbar">
                <div 
                    className="carrito"
                >
                    <img src="/img/carrito.png" alt="imagen carrito" />

                    <div id="carrito" className="bg-white p-3">
                        {cart.length === 0 ?  (
                        <p className="text-center">El carrito esta vacio</p>
                        ) : (
                            <>
                        <table className="w-100 table">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(game => (
                                    <tr key={game.id}>
                                    <td>
                                        <img className="img-fluid" src={game.imagen} alt={`imagen ${game.titulo}`} />
                                    </td>
                                    <td>{game.titulo}</td>
                                    <td className="fw-bold">
                                            ${game.precio}
                                    </td>
                                    <td className="flex align-items-start gap-4">
                                        <button
                                            type="button"
                                            className="btn btn-dark"
                                            onClick={() => decreaseQty(game.id)}
                                            >
                                                -
                                        </button>
                                            {game.cantidad}
                                        <button
                                            type="button"
                                            className="btn btn-dark"
                                            onClick={() => increaseQty(game.id)}
                                            >
                                            +
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            type="button"
                                            onClick={() => removeFromCart(game.id)}
                                            >
                                            X
                                        </button>
                                    </td>
                                </tr>
                        ))}
                            </tbody>
                        </table>

                        <p className="text-end">Total pagar: $<span className="fw-bold">{cartTotal()}</span></p>
                        <button className="btn btn-dark w-100 mt-3 p-2"
                        onClick={clearCart}>Vaciar Carrito</button>
                        </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    </div>
</header>
  )
}
