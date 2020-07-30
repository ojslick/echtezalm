import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

import './pagination.css';

class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.activePage,
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.props.itemsCountPerPage}
          totalItemsCount={this.props.totalItemsCount}
          pageRangeDisplayed={this.props.pageRangeDisplayed}
          onChange={this.handlePageChange.bind(this)}
          innerClass="pagination-align"
          itemClass="pagination-item"
          linkClass="pagination-link"
        />
      </div>
    );
  }
}

export default Paginate;
