export default function CustomerCard(props:any) {
    return (
        <div className="bg-custom-light-gray p-4 m-1 max-w-lg rounded-md">
            <h1 className="font-bold">{props.target_customer.first_name} {props.target_customer.last_name}</h1>
            <span>
                <label htmlFor="streetAddressInput">Street Address:</label>
                <input type="text" id="streetAddressInput" value={props.target_customer.street_address}/>
            </span>
            <span>
                <label htmlFor="cityInput">City:</label>
                <input type="text" id="cityInput" value={props.target_customer.city}/>
            </span>
            <span>
                <label htmlFor="stateInput">State:</label>
                <input type="text" id="stateInput" value={props.target_customer.state_abbrev}/>
            </span>
            <span>
                <label htmlFor="zipInput">Zip Code:</label>
                <input type="text" id="zipInput" value={props.target_customer.zip_code}/>
            </span>
        </div>
    );
}