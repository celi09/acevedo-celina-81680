import { HiOutlineShoppingBag } from "react-icons/hi2";
const CartWidget = () => {
    console.log('CartWidget')
    return(
        <div>
            <span><HiOutlineShoppingBag /></span>
            <span style={{color:'black', fontWeight:'bold'}}>0</span>

        </div>
    )
}

export default CartWidget