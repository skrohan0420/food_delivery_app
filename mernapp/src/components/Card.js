import React from 'react'

function Card() {
    return (

        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "fitContent" }}>
            <img src="https://source.unsplash.com/random/100×100/?burger" className="card-img-top" alt="..." style={{"height":"200px"}}/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='container w-100 d-flex'>
                    <select className='m-1 h-100 w-50 bg-success'>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select className='m-1 h-100 w-50 bg-success'>
                        {
                            Array.from(Array(2), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <div className='d-inline h-100'>
                        Price
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card