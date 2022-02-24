import React, { useState } from 'react';



function CustomerForm() {

    const name = [name, setName] = useState('')
    const address = [address, setAddress] = useState('')
    const city = [city, setCity] = useState('')
    const zip = [zip, setZip] = useState('')

    return (
        <>
            <form on onSubmit={handleSubmit}>
                <h1>Step 2: Customer Information</h1>
                <input 
                type="text"
                placeholder="name"
                value={name}
                onChange={(event) => setName(event.target.value)} />
                <input 
                type="text"
                placeholder="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)} />
                <input 
                type="text"
                placeholder="city"
                value={city}
                onChange={(event) => setCity(event.target.value)} />
                <input 
                type="text"
                placeholder="zip"
                value={zip}
                onChange={(event) => setZip(event.target.value)} />

                <input type="radio" />
                <input type="radio" />

            </form>
        </>
    )
}

export default CustomerForm

