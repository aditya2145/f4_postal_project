import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, setError, setLoading, setPincode, setPostOffices, setView } from '../features/PincodeLookup/pincodeSlice';

const Landing = () => {
    const dispatch = useDispatch();
    const {pincode} = useSelector((state) => state.pincodeLookup);
    const handleLookup = () => {
        if(pincode.length !== 6 || isNaN(pincode)) {
            alert("Please enter a valid 6-digit postal code.");
            return;
        }
        dispatch(fetchData(`https://api.postalpincode.in/pincode/${pincode}`))
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1.3rem'}}>
        <h2>Enter Pincode</h2>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.3rem'}}>
            <input onChange={(e) => dispatch(setPincode(e.target.value))} type="text" placeholder='Pincode' style=
            {
                {
                    width: '100%', 
                    height: '2.1rem', 
                    padding: '0.7rem', 
                    border: '2px solid black',
                    borderRadius: '4px',
                    fontSize: 'medium'
                }
            } />
            <button onClick={handleLookup} style=
            {
                {
                    width: '8rem',
                    fontSize: '0.9rem',
                    height: '2rem',
                    backgroundColor: 'black',
                    border: 'none',
                    color: 'white',
                    borderRadius: '4px'
                }
            }>Lookup</button>
        </div>
    </div>
  )
}

export default Landing