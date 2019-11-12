//react
import React from "react";

//third party libraries
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


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
      <div style={{ float: "right", marginBottom: "15px" }}>
        <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
          <p>
            <Skeleton width={100} height={25} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Skeleton width={100} height={25} />
          </p>
        </SkeletonTheme>
      </div>

      <table>
        <tbody>
          {utils.range(0, tableRow).map(tableData => (
            <tr>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
              <td style={{ border: "1px solid #ccc" }}>
                <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
                  <p>
                    <Skeleton width={107} height={25} />
                  </p>
                </SkeletonTheme>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginLeft: "400px", marginTop: "10px" }}>
        <SkeletonTheme color="#cccccc" highlightColor="#e0e0e0">
          <p>
            <Skeleton width={300} height={25} />
          </p>
        </SkeletonTheme>
      </div>
    </React.Fragment>
  );
};
export default Loader;
