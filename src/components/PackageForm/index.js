//react components
import React from "react";

const PackageForm = ({
  handleSubmit,
  handleChange,
  handleDate,
  packageResult
}) => {
  return (
    <React.Fragment>
      <div className="form-style">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add Package</legend>
            <p style={{ textTransform: "lowercase" }}>
              {packageResult.message}
            </p>
            <input
              type="text"
              name="package_name"
              onChange={handleChange}
              placeholder="package name *"
              required
            />
            <br />
            <input
              type="text"
              name="recipient_name"
              onChange={handleChange}
              placeholder="recipient name *"
              required
            />
            <br />
            <select
              id="packageType"
              name="package_type"
              onChange={handleChange}
              required
            >
              <option>package type *</option>
              <option value="Cereals">Cereals</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Belts">Belts</option>
              <option value="Shoes">Shoes</option>
              <option value="laptops">laptops</option>
              <option value="Computer">Computer</option>
            </select>
            <br />
            <select
              id="loadingType"
              name="loading_type_name"
              onChange={handleChange}
              required
            >
              <option>loading type *</option>
              <option value="pallet">pallet</option>
              <option value="roll">roll</option>
              <option value="container">container</option>
              <option value="box">box</option>
            </select>
            <br />
            <select
              id="hubAddress"
              name="hub_address"
              onChange={handleChange}
              required
            >
              <option>hub address</option>
              <option value="bugolobi">Bugolobi</option>
              <option value="kibuli">Kibuli</option>
              <option value="namugogo">Namugogo</option>
              <option value="kisubi">Kisubi</option>
              <option value="nakasero">Nakasero</option>
              <option value="wandegeya">Wandegeya</option>
            </select>
            <br />

            <select
              id="recipientName"
              name="delivery_status"
              onChange={handleChange}
              required
            >
              <option>delivery status</option>
              <option value="prepared for shipment">
                prepared for shipment
              </option>
              <option value="shipped">shipped</option>
              <option value="delivered">delivered</option>
            </select>
            <br />
            <input
              type="text"
              name="recipient_email"
              onChange={handleChange}
              placeholder="recipient email*"
              required
            />
            <br />
            <input
              type="text"
              name="recipient_address"
              onChange={handleChange}
              placeholder="recipient address*"
              required
            />
            <br />
            <input
              type="text"
              name="delivery_date"
              onChange={handleChange}
              onFocus={handleDate}
              placeholder="delivery date"
              required
            />
            <br />
            <textarea
              rows="5"
              cols="33"
              name="delivery_description"
              placeholder="Description"
              onChange={handleChange}
            ></textarea>
            <br />
            <button style={{ cursor: "pointer" }}>Submit</button>
          </fieldset>
        </form>
      </div>
    </React.Fragment>
  );
};

export default PackageForm;
