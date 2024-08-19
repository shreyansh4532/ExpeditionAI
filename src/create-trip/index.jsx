import { AddressAutofill } from "@mapbox/search-js-react";

function CreateTrip() {
  return (
    <div className="mt-10 px-5">
      <h2 className="font-bold text-3xl">Tell up your travel preference</h2>
      <p className="text-gray-500 text-xl mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        hendrerit ipsum quis rhoncus
      </p>

      <div className="mt-7">
        <div>
          <h2>Enter destination</h2>
          <AddressAutofill accessToken="pk.eyJ1Ijoic20yMDAyIiwiYSI6ImNseThhOXJzazBjOTIya3NkbnhnYnlsNjcifQ.zN7XYZ7HXwtREUJIxSK2UA">
            <input type="text" name="address-1" autoComplete="address-lin-1"/>
          </AddressAutofill>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
