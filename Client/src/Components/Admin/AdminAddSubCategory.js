import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AdminAddSubCategory = () => {
    return (
        <div>
            <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">   add new sub category</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="  name sub category"
                    />
                    <select name="languages" id="lang" className="select mt-3 px-2 ">
                    <option value="val">category 1 </option>
                        <option value="val2"> category 2</option>
                        <option value="val2">category 3</option>
                        <option value="val2">category 4 </option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 "> save change</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddSubCategory
