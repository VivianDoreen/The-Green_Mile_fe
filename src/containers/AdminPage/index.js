//react
import React from "react";

//third party libraries
import { connect } from "react-redux";

//scss
import "../../styles/components/generalLayout.scss";

//selectors
import * as selectors from "../Packages/store/selectors";

//actions
import {
  fetchPackagesRequest,
  addPackageTypeRequest
} from "../Packages/store/actions";
import { fetchTokenRequest } from "../../containers/UserLogin/store/actions";

class AdminPage extends React.Component {
  state = {
    showPopup: false,
    disabled: true
  };

  componentDidMount() {
    this.props.fetchTokenRequest();
    this.props.fetchPackagesRequest();
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { package_type_name } = this.state;
    const data = {
      package_type_name
    };
    this.props.addPackageTypeRequest(data);
    this.setState({ package_type_name: "" });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div id="childThree">
        <div>
          <p
            style={{
              marginTop: "5px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#2E8B57",
              fontSize: "18px",
              textDecoration: "underline"
            }}
          >
            Packages
          </p>
          <p>
            <b style={{ fontWeight: "bold", fontSize: "15px" }}>Delivered : 10</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Pending: 20</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Total:  {this.props.packages.length}</b> 
           
          </p>
        </div>
        <div>
        <p
            style={{
              marginTop: "5px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#2E8B57",
              fontSize: "18px",
              textDecoration: "underline"
            }}
          >
            Users
          </p>
          <p>
            <b style={{ fontWeight: "bold", fontSize: "15px" }}>Recipients : 10</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Suppliers: 20</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Loaders: 30</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Total:60</b> 
           
          </p>
        </div>
        <div>
        <p
            style={{
              marginTop: "5px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#2E8B57",
              fontSize: "18px",
              textDecoration: "underline"
            }}
          >
            Available Hubs
          </p>
          <p>
            <b style={{ fontWeight: "bold", fontSize: "15px" }}>Kampala : 15</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Jinja: 10</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Masaka: 10</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Total :35</b> 

           
          </p>
        </div>
        <div>
        <p
            style={{
              marginTop: "5px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#2E8B57",
              fontSize: "18px",
              textDecoration: "underline"
            }}
          >
            Deliveries
          </p>
          <p>
            <b style={{ fontWeight: "bold", fontSize: "15px" }}>Successful : 80</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Unsuccessful: 10</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Pending: 20</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Total : 100</b>   
          </p>
        </div>
        <div>
        <p
            style={{
              marginTop: "5px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#2E8B57",
              fontSize: "18px",
              textDecoration: "underline"
            }}
          >
           Available Loading Types
          </p>
          <p>
            <b style={{ fontWeight: "bold", fontSize: "15px" }}>Pallets: 15</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Boxes: 30</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>Total : 45</b>   
          </p>
        </div>
        <div>
        <p
          style={{
              marginTop: "5px",
              textTransform: "uppercase",
              textAlign: "center",
              color: "#2E8B57",
              fontSize: "18px",
              textDecoration: "underline"
            }}
          >
           Recent Entries
          </p>
          <p>
            <p style={{ fontWeight: "bold", fontSize: "15px"  }}> Package numbers </p>
            <b style={{ fontWeight: "bold", fontSize: "15px" }}>05050385839284822</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>079675763453330</b>
            <br />
            <b style={{ fontWeight: "bold", fontSize: "15px"  }}>06435456467664</b>   
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    packageTypes: selectors.fetchPackageType(state),
    packages: selectors.fetchPackages(state)
  };
};

const mapDispatchToProps = {
  fetchPackagesRequest,
  addPackageTypeRequest,
  fetchTokenRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
