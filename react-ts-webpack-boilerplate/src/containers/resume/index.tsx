import React from 'react';
import PageHeaderContent from '../../components/pageHeadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { data } from './utils';
import 'react-vertical-timeline-component/style.min.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='timeline'>
        <div className='timeline__experience'>
          <h3 className='timeline__experience__header-text'>Experience</h3>
        </div>
        <VerticalTimeline
        layout={'1-column'}
        lineColor="var(--yello-theme-main-color)"
        >
          {
            data.experience.map((item,i)=>(
              <VerticalTimelineElement
              key={i}
              className='timeline__experience_vertical-timeline-element'
            >
              <div className='vertical-timeline-element-title-wrapper'>
                <h3 className='vertical-timeline-element-title'>
                  {item.title}
                </h3>

                <h4 className='vertical-timeline-element-subtitle'>
                  {item.subTitle}
                </h4>
                <p>{item.description}</p>
              </div>
              </VerticalTimelineElement>
            ))
          }
 
        </VerticalTimeline>
        <div className='timeline__education'>
          <h3 className='timeline__education__header-text'>Education</h3>
        </div>
      </div>
    </section>
  );
};

export default Resume;
