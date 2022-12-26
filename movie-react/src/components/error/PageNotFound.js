import React from 'react';
import notFound from '../../images/404.jpg';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-error">
      <img src={notFound} alt="404" />
    </div>
  );
};

export default PageNotFound;
