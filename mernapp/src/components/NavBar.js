import React, { useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function NavBar() {
    let data = useCart();

    const [cartView, setCartView] = useState(false);

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('authToken')
        navigate('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2" to="/">Go Food</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link btn bg-white text-success m-1 active" aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                (localStorage.getItem('authToken'))
                                    ?
                                    <li className="nav-item">
                                        <Link className="nav-link btn bg-white text-success m-1" to="/">My Orders</Link>
                                    </li>
                                    :
                                    ""
                            }
                            {
                                !(localStorage.getItem('authToken'))
                                    ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link btn bg-white text-success m-1" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link btn bg-white text-success m-1" to="/sign-up">Signup</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <div className="nav-link btn bg-white text-success m-1" onClick={handleLogout}>logout</div>
                                        </li>
                                        <li className="nav-item">
                                            <div
                                                className="nav-link btn bg-white text-success m-1"
                                                onClick={() => { setCartView(true) }}>
                                                Cart{' '}
                                                <Badge pill>{data.length}</Badge>
                                            </div>
                                            {cartView 
                                                ? 
                                                <Modal onClose={() => setCartView(false)}>
                                                    <Cart />
                                                </Modal> 
                                                : 
                                                null}
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
