import React from 'react';
import Button from './Button';

function Banner({ title, subtitle }) {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <Button text="View Projects" type="primary" />
      <Button text="Contact Me" type="secondary" />
    </div>
  );
}

export default Banner;
