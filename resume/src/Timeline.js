import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaClipboardList,FaLaptopCode,FaDatabase} from 'react-icons/fa';
import experiences from './assets/experiences.json';


// Icon Mapping
const iconMap = {
  FaClipboardList: <FaClipboardList />,
  FaLaptopCode: <FaLaptopCode />,
  FaDatabase: <FaDatabase />
};

const styles = {
    PM: {
      borderLeft: '4px solid #B56576', // Muted mauve
      backgroundColor: '#F7ECEC', // A light blush to complement mauve
      iconColor: '#B56576',
    },
    SWE: {
      borderLeft: '4px solid #6D6875', // Desaturated purple-gray
      backgroundColor: '#EDEDF2', // Soft lavender-gray for contrast
      iconColor : '#6D6875',
   
    },
    DATA: {
      borderLeft: '4px solid #E56B6F', // Soft coral
      backgroundColor: '#FDF3F0', // Light peach tone for a subtle pop
      iconColor: '#E56B6F',
    }
  };
  
  function Timeline() {
    const containerStyle = {
        backgroundColor: '#D4C9BE', 
        margin: '20px auto', 
        maxWidth: '80%',   
        borderRadius: '12px', 
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
         
      };
    return (
        <div className='timeline'>
            <h2 style={{padding:'40px'}}>Work Experiences 💼</h2>
        <VerticalTimeline>
          {experiences.map((item, index) => (
            <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={{ background: styles[item.type]['iconColor'], color: '#fff' }}
            icon={iconMap[item.icon]}
            contentStyle={styles[item.type]}
          >
            {/* Company Name */}
            <h4><strong>{item.company}</strong>, {item.role}</h4>
            
            {/* Skills (Clickable) */}
            <p className="skills">
              {/* Skills:  */}
              {item.skills.map((skill, idx) => (
                <a
                //   href={`/skills/${skill}`} 
                  key={idx}
                  style={{backgroundColor: styles[item.type]['iconColor']}}
                >
                  #{skill}
                </a>
              ))}
            </p>
          
            {/* Location */}
            {/* <p><strong>Location:</strong> {item.location}</p> */}

          </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }

export default Timeline;