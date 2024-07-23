import { useEffect, useState } from 'react';
import data from './assets/data.json';
import Header from './Components/Header';
import Card from './Components/Card';

function App() {
    
    const initialCart = () => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    }
    const [cart, setCart] = useState(initialCart);

    const MAX = 5;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item) {
        const ifExists = cart.findIndex((game) => game.id === item.id)
        if (ifExists >= 0) {
            const clonedCart = [...cart];
            clonedCart[ifExists].cantidad++
            setCart(clonedCart);
            return;
        } else {
            item.cantidad = 1
            setCart(prevCart => [...prevCart, item])
        }
    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }


    function increaseQty(id) {
        const cartUpdated = cart.map( item => {
            if (item.id === id && item.cantidad < MAX) {
                return {
                    ...item,
                    cantidad: item.cantidad + 1
                } 
            }
            return item
        })
        setCart(cartUpdated)
    }

    function decreaseQty(id) {
        const cartUpdated = cart.map( item => {
            if (item.id === id && item.cantidad > 1) {
                return {
                    ...item,
                    cantidad: item.cantidad - 1
                }
            }
            return item
        })
        setCart(cartUpdated)
    }

    function clearCart() {
        setCart([])
    }
    
    
    

  return (
    <>
     <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        clearCart={clearCart}
     />

    <main className="deck-container container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className=" deck mt-5">
            {data.map((game) => (
                <Card
                    key={game.id}
                    game={game}
                    setCart={setCart}
                    addToCart={addToCart}
                />
            ))}
        </div>
    </main>
    </>
  )
}

export default App
