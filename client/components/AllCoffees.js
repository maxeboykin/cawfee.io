import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchCoffees } from '../store/coffee'
import { fetchCoffee} from '../store/singleCoffee';
import { Link } from "react-router-dom";
import { me } from '../store/auth';
// import ls from 'local-storage';
// import { addItem, fetchCart } from '../store/cart';
// import { addLocalItem } from '../store/LocalCart';

const AllCoffees = () => {
  const dispatch = useDispatch();
  const allCoffees = useSelector(state => state.coffees);

  useEffect(() => {
    dispatch(fetchCoffees());
    dispatch(me());
  }, []);

  const handleAddToCart = (event) =>{

  }
  console.log('allCoffees', allCoffees);

  return (
    <div>
    {(allCoffees.length < 1)  ? <h1>Loading ... </h1> :
    <div className="all-flowers-container">
      {
                        allCoffees.map(coffeeObj => {
                            return (
                                <div className='all-flower-item'key={coffeeObj.id}>
                                        <div className="imageContainer">
                                            <Link to={`/coffee/${coffeeObj.id}`} style={{textDecoration: "none"}}>
                                            <img className="all-flower-pic" src={coffeeObj.imageUrl} />
                                            <h2>{coffeeObj.name}</h2>
                                            </Link>
                                        </div>
                                        <div className='ItemInfo'>
                                            <div className="priceInfo">
                                            <h1>${coffeeObj.price / 100}</h1>
                                            <button className='AddToCartButton' name={coffeeObj.id} onClick={handleAddToCart}>Add To Cart</button>
                                            </div>
                                        </div>
                                </div>
                            )
                        })
                    }
            </div>

    }

    </div>
  );
}

export default AllCoffees;
