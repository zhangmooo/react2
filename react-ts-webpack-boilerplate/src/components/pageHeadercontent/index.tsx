import './styles.css';
import React from 'react';

const PageHeaderContent: React.FC<{
  headerText: React.ReactNode;
  icon: React.ReactNode;
}> = (props) => {
  const { headerText, icon } = props;

  console.log('11111');
  console.log(headerText);
  console.log('22222');

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
