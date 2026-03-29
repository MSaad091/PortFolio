// import React from 'react';
// import { useSelector } from 'react-redux';
// import '../Stylesheets/FullStack.css'; // You can create this CSS file

// function FullStack() {
//   const data = useSelector((state) => state.fullstackdata.products);
//   console.log(data);

//   return (
//     <>
//       <h1>MERN Stack Projects</h1>
//       <hr />

//       <div className="project-container"> {/* Using same class name for consistency */}
//         {data && data.length > 0 ? (
//           data.map((item) => (
//             <div className="project-card" key={item.id}>
              
//               {/* Image with fallback if no image URL */}
//               <img
//                 src={item.img || "https://via.placeholder.com/350x200?text=Project+Image"}
//                 alt={item.name}
//                 className="project-image"
//               />

//               <h3 className="project-title">{item.name}</h3>
              
//               {/* Owner/User Panel Info */}
//               <p className="project-owner">{item.owner}</p>

//               {/* Project Link */}
//               <li className="project-desc">
//                 <a href={item.link} target="_blank" rel="noopener noreferrer">
//                   View Project
//                 </a>
//               </li>

//               {/* Short Info */}
//               <p className="project-price">
//                 <strong>Info:</strong> {item.info}
//               </p>

//               {/* Description */}
//               <p className="project-description">
//                 <strong>Description:</strong> {item.desc}
//               </p>

//             </div>
//           ))
//         ) : (
//           <p>No projects available</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default FullStack;
import React from 'react';
import { useSelector } from 'react-redux';
import '../Stylesheets/FullStack.css';

function FullStack() {
  const data = useSelector((state) => state.fullstackdata.products);
  console.log(data);

  return (
    <>
      <h1>MERN Stack Projects</h1>
      <hr />

      <div className="project-container">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="project-card" key={item.id}>
              
              {/* Image with fallback if no image URL */}
              <img
                src={item.img || "https://via.placeholder.com/350x200?text=Project+Image"}
                alt={item.name}
                className="project-image"
              />

              <h3 className="project-title">{item.name}</h3>
              
              {/* Owner/User Panel Info */}
              <p className="project-owner">{item.owner}</p>

              {/* Project Link */}
              <li className="project-desc">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </li>

              {/* Short Info */}
              <p className="project-price">
                <strong>Info:</strong> {item.info}
              </p>

              {/* Description */}
              <p className="project-description">
                <strong>Description:</strong> {item.desc}
              </p>

              {/* Email and Password Section - NEW */}
              <div className="project-credentials">
                <p className="credential-item">
                  <strong>📧 Email:</strong> {item.Mail || "Not provided"}
                </p>
                <p className="credential-item">
                  <strong>🔑 Password:</strong> {item.pass || "Not provided"}
                </p>
                {item.message && (
                  <p className="credential-message">
                    <strong>💡 Note:</strong> {item.message}
                  </p>
                )}
              </div>

            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </>
  );
}

export default FullStack;