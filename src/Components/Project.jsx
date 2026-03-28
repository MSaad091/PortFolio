import React from 'react';
import { useSelector } from 'react-redux';
import '../Stylesheets/Project.css';
import FullStack from './FullStack';

function Project() {
  const data = useSelector((state) => state.projectdata.products);

  return (
   <>
   <h1>React Js Project</h1>
   <hr/>

    <div className="project-container">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="project-card" key={item.id}>

            <img
              src={item.img}
              alt={item.name}
              className="project-image"
            />

            <h3 className="project-title">{item.name}</h3>

            {/* <p className="project-desc">
              {item.projectlink}
            </p> */}
            <li className="project-desc">
                <a href={item.projectlink} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </li>

            <p className="project-price">
              Technology: {item.technology}
            </p>

            <p className="project-price">
              Info: {item.info}
            </p>

          </div>
        ))
      ) : (
        <p>No projects available</p>
      )}
    </div>
    <FullStack/>
   </>
  );
}

export default Project;