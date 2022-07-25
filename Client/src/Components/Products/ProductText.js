import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ProductText = () => {
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">electronics :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">Iphone </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">description  :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde velit quisquam quod reprehenderit rem,
     inventore praesentium, voluptatem nulla voluptas eaque, quos ipsam tenetur? Cumque aliquam hic iste 
     obcaecati praesentium ipsam distinctio corrupti iusto corporis officiis fugiat quam, 
    vero aut quis voluptas, dignissimos, sequi amet possimus nobis. Quas aperiam omnis eos.
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">500$ </div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">add to card </div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
