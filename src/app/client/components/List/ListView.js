import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map, nth } from 'ramda';
import styles from './List.css';

export default class ListView extends Component {
  renderRowThroughProps(rowId) {
    if (typeof this.props.renderRow === 'function') {
      return this.props.renderRow(rowId, nth(rowId, this.props.rowsById));
    }
    return true;
  }

  renderRowById = rowId =>
    <li key={rowId}>
      {this.renderRowThroughProps(rowId)}
    </li>;

  render() {
    return (
      <ul className={styles.ListView}>
        {map(this.renderRowById, this.props.rowsIdArray)}
      </ul>
    );
  }
}

ListView.propTypes = {
  rowsIdArray: PropTypes.array.isRequired,
  rowsById: PropTypes.array,
  renderRow: PropTypes.func.isRequired,
};

ListView.defaultProps = {
  rowsById: [],
};
