import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

function Card(props) {

    const data = props.data
    let dispatch = useDispatchCart()
    let cartData = useCart();
    let options = data.options[0]
    let priceOption = Object.keys(options)
    const priceRef = useRef()

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState('')

    let food = [];
    for (const item of cartData) {
        if (item.id === data._id) {
            food = item
            break
        }
    }

    const handleAddToCart = async () => {

        if (food != []) {
            if (food.size === size) {
                await dispatch({
                    type: "UPDATE",
                    id: data._id,
                    price: finalPrice,
                    qty: qty
                })
                return
            }
            else if(food.size !== size){
                await dispatch({
                    type: "ADD",
                    id: data._id,
                    name: data.name,
                    image: data.img,
                    price: finalPrice,
                    qty: qty,
                    size: size
                })
                console.log(cartData)
                return
            }
            return
        }
        await dispatch({
            type: "ADD",
            id: data._id,
            name: data.name,
            image: data.img,
            price: finalPrice,
            qty: qty,
            size: size
        })   
    }
    let finalPrice = qty * parseInt(options[size])

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (

        <div className="card mt-3 justify-center d-flex" style={{ "width": "18rem", "maxHeight": "fitContent" }}>
            <img src={data.img} className="card-img-top" alt="..." style={{ "height": "200px" }} />
            <div className="card-body">
                <h2 className="card-title text-success">{data.name}</h2>
                <p className="card-text">{data.description}</p>
                <hr />
                <div className='d-flex'>
                    <select className='m-1 h-100 w-50 bg-success' ref={priceRef} onChange={(e) => setQty(e.target.value)} >
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select className='m-1 h-100 w-50 bg-success' ref={priceRef} onChange={(e) => setSize(e.target.value)} >
                        {
                            priceOption.map((price) => {
                                return (
                                    <option key={price} value={price}>{price.toUpperCase()}</option>
                                )

                            })
                        }
                    </select>
                </div>
                <h4 className='d-flex m-1 '>
                    Total Price : {finalPrice ? finalPrice : 0}/-
                </h4>
            </div>
            <button
                className='btn btn-success justify-center m-1 fs-4 fw-bold text-white'
                onClick={handleAddToCart}>
                Add To Cart
            </button>
        </div>

    )
}

export default Card