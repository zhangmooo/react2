import React from 'react';
import PageHeaderContent from '../../components/pageHeadercontent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { skillsData } from './utils';
import './styles.css';
import {Line} from 'rc-progress';
const Skills = () => {
  return(
    <section id="skills" className="skills">
      <PageHeaderContent
      headerText="My Skills"
      icon={<BsInfoCircleFill size={40} />}
      />
      <div className='skills__content-wrapper'>
        {
          skillsData.map((item ,i)=>(
            <div key={i} className='skills__content-wrapper__inner-content'>
              <Animate
              play duration={1}
              delay={0.3}
              start={{
                transform : 'translateX(-200px)'
              }}
              end={{
                transform : 'translateX(0px)'
              }}
              >
                <h3 className="skill__content-wrapper__inner-content__category-text">{item.label}</h3>
                <div>
                  {
                    item.data.map((skill: Data , j: number) => (
                      <AnimateKeyframes
                      play duration={1}
                      keyframes={["opacity: 1" , "opacity: 0"]}
                      iterationCount="1"
                      >
                        <div className='progressbar-wrapper' key={j}>
                          <p>{skill.skillName}</p>
                          <Line
                          percent={skill.percentage}
                          strokeWidth="2"
                          strokeColor="var(--yellow-theme-main-color)"
                          />
                        </div>
                      </AnimateKeyframes>
                     ))
                 }
                </div>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
  )
};
export default Skills;
