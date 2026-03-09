import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

const Item = ({ prod }) => {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>UYU {prod.price}</Card.Subtitle>
                <Card.Text>{prod.description}</Card.Text>
                <Button as={Link} to={`/item/${prod.id}`} variant="outline-dark">Ver más</Button>
            </Card.Body>
        </Card>
    )
}


export default Item