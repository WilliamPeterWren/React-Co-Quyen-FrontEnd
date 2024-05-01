import React,{useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Cookies from 'js-cookie';

import apiOrderDetail from '../../../api/apiOrderDetail';

import UserOrderDetailItem from './UserOrderDetailItem';


function UserOrderDetail() {
    const [orderDetail, setOrderDetail] = useState();

  const userId = Cookies.get('authId');
//   console.log(userId);
  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(()=>{
    if(!userId){
      navigate('/login');
    }
    else{
                
        apiOrderDetail.getOrderDetailByOrderId(id).then(res => {
            // console.log(res.data);
            const formOrderDetail = res.data.map(item => {
                return {
                    id: item.id,
                    order_id: parseInt(item.attributes.order_id),
                    product_id: parseInt(item.attributes.product_id),
                    quantity: parseInt(item.attributes.quantity),
                    price: item.attributes.price,
                }
            })

            setOrderDetail(formOrderDetail);
            // console.log(formOrderDetail);
        })



        
    }
  },[userId, id, navigate])

  var totalPrice = 0;




  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-9">
            <div className="card">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" width={120}>Quantity</th>
                    <th scope="col" width={120}>Price</th>
                    
                  </tr>
                </thead>
                <tbody>              
                  {
                    orderDetail && orderDetail.map((item,index) => {
                        totalPrice += item.quantity * item.price;
                        return <UserOrderDetailItem key={index} item={item} />
                    })
                  }
                </tbody>
              </table>

              

              <div >
              <Link to="/products" className="btn btn-light"> <i className="fa fa-chevron-left" /> Continue shopping </Link>
              
              {
                
              }

              </div>
              
            </div> 

            <div className="alert alert-success mt-3">
              <p className="icontext"><i className="icon text-success fa fa-truck" /> Free Delivery within 1-2 weeks</p>
            </div>

          </main> 

          <aside className="col-md-3">           
            

            {/* TOTAL PRICE */}
            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right">${}</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-right">${}</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right h5"><strong>${totalPrice}</strong></dd>
                </dl>
                <hr />
                <p className="text-center mb-3">
                  <img src={require("../../assets/images/misc/payments.png")} height={26} alt="" />
                </p>
              </div> 
            </div> 
          </aside> 

        </div>
      </div> 
    </section>

  )
}

export default UserOrderDetail