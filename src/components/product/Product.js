import React from 'react'
import Navbar from '../navbar/Navbar'

const Product = () => {
    return (
        <div>
            <div className='container'>
            <Navbar />
                <div>
                    <img src="https://openshop.uz/public/storage/uploads/products/photos/202210/1lQkRxaLO2o2MBXhxWC6aWO6o8Rxgr4LQpaBOYRS.jpg" alt="" />
                </div>
                <div>
                    <p>Бренд Apple Название модели iPhone 14 Pro Max Оператор беспроводной связи разблокирован для всех операторов Операционная система iOS 16 Сотовая технология 5G Объем памяти 256 ГБ Цвет Gold Размер экрана 6,7 дюйма Тип разъема Lightning Форм-фактор Смартфон</p>
                    <button className='btn btn-primary'>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Product