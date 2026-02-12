import React from 'react'
import {Button, Card} from 'react-bootstrap';

const Item = ({prod}) => {
    console.log(prod)
    
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.img}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>UYU {prod.price}</Card.Subtitle>
                <Card.Text>{prod.description}</Card.Text>
                <Button variant="outline-dark">Ver más</Button>
            </Card.Body>
        </Card>
    )
}


export default Item