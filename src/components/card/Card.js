import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (
        <div>
            <div className="card" style={{width: '300px'}}>
                <img src="https://openshop.uz/public/storage/uploads/products/photos/202210/1lQkRxaLO2o2MBXhxWC6aWO6o8Rxgr4LQpaBOYRS.jpg" alt="..." />
                    <div className="card-body">
                        <h5>Ipone 14 pro max</h5>
                        <p>
                        Название модели iPhone 14 Pro Max
                        Операционная система iOS 16
                        Сотовая технология 5G
                        Объем памяти 256 ГБ
                        Цвет Gold
                        </p>
                        <Link to={'/product'} ><a href="#" className="btn btn-primary">Buy</a></Link>
                    </div>
            </div>
        </div>
    )
}

export default Cards