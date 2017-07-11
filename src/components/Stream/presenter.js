/* eslint-disable react/no-array-index-key */
import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, key) => <div className="track" key={key}>{track.title}</div>)
      }
    </div>
  );
}

Stream.propTypes = {
  tracks: React.PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Stream;
