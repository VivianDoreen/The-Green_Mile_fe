import React, { PureComponent } from "react";
import { Pagination } from "semantic-ui-react";

export default class CustomPagination extends PureComponent {
  constructor(props) {
    super(props);

    const { totalItems, perPage, activePage } = props;
    const totalPages = Math.ceil(totalItems / perPage);
    this.state = {
      activePage,
      boundaryRange: 1,
      siblingRange: 1,
      showEllipsis: true,
      showFirstAndLastNav: true,
      showPreviousAndNextNav: true,
      totalPages
    };
  }

  componentWillReceiveProps(newProps) {
    const { activePage } = newProps;
    this.setState({ activePage });
  }

  handlePaginationChange = (e, { activePage }) => {
    const { onPaginationChange } = this.props;
    this.setState({ activePage }, () => onPaginationChange(activePage));
  };

  render() {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages
    } = this.state;

    if (totalPages < 1) {
      return null;
    }

    return (
      <div
        style={{
          width: "30%",
          margin: "0px auto"
        }}
      >
        <Pagination
          activePage={activePage}
          boundaryRange={boundaryRange}
          onPageChange={this.handlePaginationChange}
          size="mini"
          siblingRange={siblingRange}
          totalPages={totalPages}
          ellipsisItem={showEllipsis ? undefined : null}
          firstItem={showFirstAndLastNav ? undefined : null}
          lastItem={showFirstAndLastNav ? undefined : null}
          prevItem={showPreviousAndNextNav ? undefined : null}
          nextItem={showPreviousAndNextNav ? undefined : null}
        />
      </div>
    );
  }
}
