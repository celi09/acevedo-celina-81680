import React from 'react'
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemList = ({ data }) => {
    return (
        <Container className="py-3">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {data.map((prod) => (
                    <Col key={prod.id}>
                        <Item prod={prod} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ItemList