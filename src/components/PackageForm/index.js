//react components
import React from "react";

import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

const PackageForm = ({ handleSubmit, handleChange }) => {
  return (
    <React.Fragment>
      <div className="form-style">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add Package</legend>
            <input
              type="text"
              name="package_name"
              onChange={handleChange}
              placeholder="package name *"
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
              <option value="boxing">Boxing</option>
              <option value="debate">Debate</option>
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
              <option value="boxing">Boxing</option>
              <option value="debate">Debate</option>
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
            </select>
            <br />
            <input
              type="text"
              name="recipient_name"
              onChange={handleChange}
              placeholder="recipientName*"
              required
            />
            <br />
            <input
              type="text"
              name="recipient_address"
              onChange={handleChange}
              placeholder="recipientAddress*"
              required
            />
            <br />
            <input
              type="date"
              name="delivery_date"
              onChange={handleChange}
              required
            />
            <br />
            <textarea
              rows="5"
              cols="33"
              name="delivery_description"
              placeholder="delivery description"
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <button>Submit</button>
          </fieldset>
        </form>
      </div>

      {/* <div className="package_form">
        <Form>
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="First name"
            placeholder="First name"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            control={Select}
            options={genderOptions}
            label={{
              children: "Gender",
              htmlFor: "form-select-control-gender"
            }}
            placeholder="Gender"
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label="Label with htmlFor"
          />
        </Form>
      </div> */}
    </React.Fragment>
  );
};

export default PackageForm;
