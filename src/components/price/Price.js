import React from 'react'
import Navbar from '../navbar/Navbar'

const Price = () => {
    return (
        <div>
            <Navbar />
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Avatar</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>10000$</td>
                        <button className='btn text-dark w-25 btn-primary'>Buy</button>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>1900$</td>
                        <button className='btn text-dark w-25 btn-primary'>Buy</button>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>1900$</td>
                        <button className='btn text-dark w-25 btn-primary'>Buy</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Price