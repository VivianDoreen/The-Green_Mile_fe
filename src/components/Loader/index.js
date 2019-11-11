//react
import React from "react";

//scss
import "../../styles/components/loader.scss";
// export const Loader = () => <div className="lds-dual-ring" />;
export const Loader = () => {
  const utils = {
    //create an array of numbers between min and max (edges included)
    range: (min, max) =>
      Array.from({ length: max - min + 1 }, (_, i) => min + i)
  };
  const tableData = (
    <td className="loading" key={tableData}>
      <div className="bar"></div>
    </td>
  );
  const tableRow = 10;

  return (
    <React.Fragment>
      <div className="headline">
        <h1>Table Skeleton Loader</h1>
      </div>
      <div className="tableWrapper">
        <table className="table">
          <thead>
            <tr>
              <th className="loading"></th>
              <th className="loading"></th>
              <th className="loading"></th>
            </tr>
          </thead>
          <tbody>
            {utils.range(0, tableRow).map(tableData => (
              <tr key={tableData}>
                <td className="loading">
                  <div className="bar"></div>
                </td>
                <td className="loading">
                  <div className="bar"></div>
                </td>
                <td className="loading">
                  <div className="bar"></div>
                </td>
                <td className="loading">
                  <div className="bar"></div>
                </td>
                <td className="loading">
                  <div className="bar"></div>
                </td>
                <td className="loading">
                  <div className="bar"></div>
                </td>
                <td className="loading">
                  <div className="bar"></div>
                </td>
                <td className="loading">
                  <div className="bar"></div>
                </td>
                <td className="loading">
                  <div className="bar"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default Loader;
