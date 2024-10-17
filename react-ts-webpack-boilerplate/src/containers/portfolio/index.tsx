import React from 'react';
import PageHeaderContent from '../../components/pageHeadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image1.jpg';
import ImageThree from '../../images/image1.jpg';
import ImageFour from '../../images/image1.jpg';
import ImageFive from '../../images/image1.jpg';

const portfolioData = [
  {
    id : 2,
    name : "city",
    image : ImageOne
  },
  {
    id : 3,
    name : "rabbit",
    image : ImageTwo
  },
  {
    id : 3,
    name : "group",
    image : ImageThree
  },
  {
    id : 2,
    name : "miku",
    image : ImageFour
  },
  {
    id : 2,
    name : "fern",
    image : ImageFive
  }
]

const filterData = [
  {
    filterId : 1,
    label : 'All'
  },
  {
    filterId : 2,
    label : 'One person'
  },
  {
    filterId : 3,
    label : 'Not one person'
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='portfolio__content'>
        <ul className='portfolio__content_filter'>
          {
            filterData.map(item=>(
              <li key={item.filterId}>
                {
                  item.label
                }
              </li>
            ))
          }
        </ul>

      </div>
    </section>
  );
};

export default Portfolio;
