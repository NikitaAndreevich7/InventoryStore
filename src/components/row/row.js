import React from 'react';
import PropTypes from 'prop-types';
import './row.css'
const Row = ({ left, right }) => {
  return (
    <div className="row-wrap">
      <div className="left q">
        {left}
      </div>
      <div className="right q">
        {right}
      </div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
