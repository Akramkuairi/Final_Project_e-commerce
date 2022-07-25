import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
          <div className="cat-text-header ">All</div>
            <div className="cat-text-header">electronics</div>
            <div className="cat-text-header">clothes</div>
            <div className="cat-text-header"> discount</div>
            <div className="cat-text-header">discount</div>
            <div className="cat-text-header">discount</div>
            <div className="cat-text-header">discount</div>
            <div className="cat-text-header">discount</div>
            <div className="cat-text-header">discount</div>
            <div className="cat-text-header">more</div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader
