import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { connect } from 'react-redux'

const AllUsers = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const userId = useSelector(state => state.auth.id);

  return (
    <div>
      <main>
        <div className='WelcomeContainer'>
          <div className="WelcomeTitleContaienr">
            <div className='WelcomeTitle'>
               <h1>Welcome {username} - {userId} </h1>
               </div>
               <button>Edit My Account</button>
               <button>View Previous Orders</button>
          </div>
        </div>
      </main>
    </div>
  )

}

export default AllUsers;
