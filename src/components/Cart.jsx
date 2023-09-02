import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { removeFromCart } from '../redux/actions/AppActions';
import { totalAmountCart } from '../redux/actions/AppActions'
import cartImg from '../assets/cart.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Cart = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckout = (productval)=>{
       window.location.reload();
        handleClose();
    } 

    
  


    const cart = useSelector((state) => state.cartProducts.cart);
    const total = useSelector((state) => state.cartProducts.cartTotalAmount);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(totalAmountCart());
    }, [cart])

    const shippingCharge = 10;
    return (
        <div>
            {
                cart.length === 0 ? (
                    <>
                        <div className='text-center mt-5 p-5'>
                            <div className='mb-4'>
                                <img src={cartImg} alt="blank cart" className='image-fluid' height="150px" />
                            </div>
                            <h3 >Your Cart is empty</h3>
                        </div>
                    </>
                ) : (

                    <div className="container my-5 px-5">
                        <div className="row">
                            <div className="col-md-8">
                                {
                                    cart.map((product) => {
                                        return <CartItem product={product} key={product.id} />
                                    })
                                }
                            </div>
                            <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                                <div className="p-3 border rounded">
                                    <h2 className="mb-5">Total Amount</h2>
                                    <div className="d-flex justify-content-between">
                                        <p>Cart total : </p>
                                        <p>$<span id="product_total_amt">{total}</span></p>
                                    </div>
                                    <div className="price_indiv d-flex justify-content-between">
                                        <p>Shipping Charge</p>
                                        <p>$<span Sid="shipping_charge">{shippingCharge}</span></p>
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-between'>
                                        <p>Total amount : </p>
                                        <p>$<span Sid="shipping_charge">{total + shippingCharge}</span></p>
                                    </div>
                                    <div className="d-flex justify-content-end">

                                    <Button variant="primary" onClick={handleShow}>
        Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         click 'ok' to proceed to Checkout. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="success" onClick={handleCheckout}>ok</Button>
        </Modal.Footer>
      </Modal>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;