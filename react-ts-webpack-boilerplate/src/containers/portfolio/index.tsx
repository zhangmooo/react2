import React from 'react';
import PageHeaderContent from '../../components/pageHeadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';

const Portfolio = () => {
  console.log('3333');
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Portfolio;
