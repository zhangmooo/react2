import './styles.css';
import React from 'react';

const PageHeaderContent: React.FC<{ headerText: string; icon: string }> = (
  props,
) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
