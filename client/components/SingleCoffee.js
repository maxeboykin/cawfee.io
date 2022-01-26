import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { connect } from 'react-redux'
import { fetchCoffee, clearCoffee } from '../store/singleCoffee';
import { me } from '../store/auth';



const SingleCoffee = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const userId = useSelector(state => state.auth.id);
  const targetCoffee = useSelector(state => state.coffee);

  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState("");
  //const [targetCoffee, setTargetCoffee] = useState({});

  //const cart = useSelector(state = state.cart);

  //componentDidMount
  useEffect(() => {
    dispatch(fetchCoffee(parseInt(props.match.params.coffeeId)))
  },[])
  console.log('props', props);

//componentDidUnmount
  // useEffect(() => {
  //   return async () => {
  //     dispatch(clearCoffee());
  //     setQty(1);
  //     setMainImage("");
  //   }
  // }, targetCoffee.name);

  const handleChange = (event) => {
    const qtyForm = parseInt(event.target.value);
    setQty(qtyForm);
  }

  const pictureSwap = (event) => {
    const newImageUrl = event.target.src;
    setMainImage(newImageUrl);
  }

  const handleAddToCart = () => {
  }

  return (
    <div>
      {targetCoffee.length < 1 ? <h1>Loading ...</h1> :
      <div className="single-plant-container">
        <div className="secondary-image-container">
          <img src={targetCoffee.imageUrl} onClick={pictureSwap}/>
          <img src={targetCoffee.imageUrlSeconday} onClick ={pictureSwap} />
        </div>
        <div className="main-image-container">
          <img className="SingleItemPic" src={mainImage} />
      </div>
      <div className="single-flower-info">
        <h2>{targetCoffee.name}</h2>
        <h1>${targetCoffee.price / 100 }</h1>
        <p>{targetCoffee.description}</p>
      </div>
      </div>
      }
    </div>
  )

}

export default SingleCoffee;


