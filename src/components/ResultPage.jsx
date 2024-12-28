import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ResultPage = () => {
    const { postOffices, pincode } = useSelector((state) => state.pincodeLookup);
    const [filterTerm, setFilterTerm] = useState('');

    const displayedOffices = filterTerm?
        postOffices.filter(office => office.Name.toLowerCase().includes(filterTerm.toLowerCase())) : 
        postOffices;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2>Pincode: {pincode}</h2>
            <p style={{ fontSize: 'large' }}><span style={{ fontWeight: 'bold' }}>Message: </span>Number of Pincode(s) found:{postOffices.length}</p>
            {postOffices.length > 0 ?
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <input onChange={(e) => setFilterTerm(e.target.value)} type="text" placeholder='Filter' style={{
                        width: '100%',
                        height: '2.1rem',
                        padding: '0.7rem',
                        border: '2px solid black',
                        borderRadius: '4px',
                        fontSize: 'medium'
                    }} />
                    <div className='postalResult' style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                        {   
                            displayedOffices.length !== 0 ?
                            (displayedOffices.map((office, index) => (
                                <div key={index} style={{ border: '2px solid black', borderRadius: '4px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <span><strong>Name :</strong> {office.Name}</span>
                                    <span><strong>Branch Type :</strong> {office.BranchType}</span>
                                    <span><strong>Delivery Status :</strong> {office.DeliveryStatus}</span>
                                    <span><strong>District :</strong> {office.District}</span>
                                    <span><strong>Division :</strong> {office.Division}</span>
                                </div>
                            ))) 
                            : 
                            <h3 style={{color: 'red'}}>
                                Couldn't find the postal data you're looking for…
                            </h3>
                        }
                    </div>
                </div>
                : 
                <h3 style={{color: 'red'}}>
                    Couldn't find the postal data you're looking for…
                </h3>
            }
        </div>
    )
}

export default ResultPage