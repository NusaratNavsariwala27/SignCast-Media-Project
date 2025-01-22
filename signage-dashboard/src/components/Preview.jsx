import React from "react";
import { fabric } from "fabric";

const Preview = ({ contentJSON }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = new fabric.StaticCanvas(canvasRef.current);
    if (contentJSON) {
      canvas.loadFromJSON(contentJSON);
    }
    return () => canvas.dispose();
  }, [contentJSON]);

  return <canvas ref={canvasRef} width={600} height={400} />;
};

export default Preview;
