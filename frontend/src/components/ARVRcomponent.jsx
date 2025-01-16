import React, { useEffect, useState } from "react";

function ARVRComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading AR/VR experience
    const loadARVR = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(loadARVR);
  }, []);

  return (
    <div className="ar-vr">
      {loading ? (
        <p>Loading AR/VR experience...</p>
      ) : (
        <div>
          <h2>Immersive AR/VR Training</h2>
          <p>Interact with the virtual environment and enhance your skills.</p>
          <iframe
            src="https://your-arvr-experience.com" // Replace with your AR/VR tool's URL or integration code
            title="AR/VR Training"
            width="100%"
            height="500px"
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default ARVRComponent;
