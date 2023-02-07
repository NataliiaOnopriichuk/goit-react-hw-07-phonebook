import { ThreeCircles } from 'react-loader-spinner';
import React from 'react';

export const Loader = () => {
  return (
    <div style={{ padding: '20px 0' }}>
      <ThreeCircles
        height="80"
        width="80"
        color="#4fa94d"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#2f2c2c4c"
        innerCircleColor="#2f2c2c2d"
        middleCircleColor="#2f2c2c14"
        wrapperStyle={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </div>
  );
};
