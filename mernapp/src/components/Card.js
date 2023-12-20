import React from 'react'

function Card(props) {

    const { data } = props

    let options = data.options[0]
    let priceOption = Object.keys(options)

    return (

        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "fitContent" }}>
            <img src={data.img} className="card-img-top" alt="..." style={{ "height": "200px" }} />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.description}</p>
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
                            priceOption.map((price) => {
                                return (
                                    <option key={price} value={price}>{price}</option>
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