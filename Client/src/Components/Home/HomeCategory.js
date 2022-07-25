import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import laptop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const HomeCategory = () => {
    return (
        <Container>
            <SubTiltle title="categories" btntitle="more" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard  title="clothes" img={clothe} background="#F4DBA4"/>
        <CategoryCard  title="clothes" img={cat2} background="#F4DBA4"/>
        <CategoryCard  title="clothes" img={laptop} background="#F4DBA4"/>
        <CategoryCard  title="clothes" img={sale} background="#F4DBA4"/>
        <CategoryCard  title="clothes" img={pic} background="#F4DBA4"/>
        <CategoryCard  title="clothes" img={clothe} background="#F4DBA4"/>
            </Row>
        </Container>
    )
}

export default HomeCategory
