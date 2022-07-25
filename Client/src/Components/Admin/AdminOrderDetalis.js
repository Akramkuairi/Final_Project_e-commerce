import React from 'react'
import { Row,Col } from 'react-bootstrap'
import CartItem from '../Cart/CartItem'

const AdminOrderDetails = () => {
    return (
        <div>
            <div className='admin-content-text'> order details  Nr: #55</div>
            <CartItem />
            <CartItem />
            <CartItem />

            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2"> details customer</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        name:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                         user1
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                         Tele Nr: 123456789
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        0021313432423
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        email:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        user@emial.com
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                      total 500 $
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="val"> Order status</option>
                        <option value="val2">Underway </option>
                        <option value="val2"> Been completed</option>
                        <option value="val2">Cancellation</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">save </button>
                </div>
            </Row>
        </div>
    )
}

export default AdminOrderDetails
