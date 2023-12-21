import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import config from '../config';

export default function Home() {
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [search, setSearch] = useState('');

    const loadFoodCat = async () => {
        let response = await fetch(config.apiBaseUrl + '/api/food-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json()
        setFoodItem(response)
        console.log(response)

    }
    const loadFoodItem = async () => {
        let response = await fetch(config.apiBaseUrl + '/api/food-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json()
        setFoodCat(response)
        console.log(response)
    }

    useEffect(() => {
        loadFoodCat();
        loadFoodItem();
    }, [])

    return (
        <div>
            <div> <NavBar /> </div>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className='carousel-captions' style={{ "position": "relative", "top": "230px", "zIndex": "100", "width": "400px", "left": "50%", "transform": "translate(-50%)", "height": "0px" }}>
                            <form className="d-flex">
                                <input 
                                    className="form-control me-2" 
                                    style={{ 'backgroundColor': '#fff', 'color': '#000', 'border': 'none' }} 
                                    type="search" 
                                    placeholder="Search" 
                                    aria-label="Search" 
                                    value={search} onChange={e => setSearch(e.target.value)}/>
                            </form>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/300×600/?burger" className="d-block w-100" alt="..." style={{ "maxHeight": "500px" }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/300×600/?pizza" className="d-block w-100" alt="..." style={{ "maxHeight": "500px" }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/300×600/?curry" className="d-block w-100" alt="..." style={{ "maxHeight": "500px" }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='container flex justify-center'>
                {
                    foodCat
                        ?
                        foodCat.map((cat, catIndex) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={cat._id} className='fs-3 m-3'>
                                        {cat.categoryName}
                                    </div>
                                    <hr />
                                    {
                                        foodItem
                                            ?
                                            foodItem
                                                .filter((item) => (item.categoryName === cat.categoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                                .map((food) => {
                                                    return (
                                                        <div key={food._id} className='col-12 col-md-6 col-lg-3 m-2'>
                                                            <Card data={food} />
                                                        </div>
                                                    )
                                                })
                                            :
                                            ''
                                    }
                                </div>
                            )
                        })
                        :
                        ''
                }
            </div>
            <div> <Footer /> </div>
        </div>
    )
}