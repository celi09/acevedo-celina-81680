import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ detail }) => {
    if (!detail) return null

    const containerStyle = {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '2rem 1rem',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    }

    const imageWrapStyle = {
        flex: '1 1 320px',
        maxWidth: 480,
    }

    const imageStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: 500,
        objectFit: 'contain',
        display: 'block',
    }

    const detailsStyle = {
        flex: '1 1 320px',
        minWidth: 280,
    }

    const titleStyle = { marginBottom: '0.5rem', fontSize: '1.75rem' }
    const priceStyle = { marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }
    const textStyle = { marginBottom: '0.5rem', color: '#333' }
    const stockStyle = { marginBottom: '1rem', fontSize: '0.95rem' }

    return (
        <div style={containerStyle}>
            <div style={imageWrapStyle}>
                <img src={detail.img} alt={detail.name} style={imageStyle} />
            </div>
            <div style={detailsStyle}>
                <h1 style={titleStyle}>{detail.name}</h1>
                <p style={priceStyle}>UYU {detail.price}</p>
                <p style={stockStyle}>Stock: {detail.stock}</p>
                <ItemCount stock={detail.stock} />
                <p style={{ ...textStyle, marginTop: '1.5rem' }}>{detail.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail