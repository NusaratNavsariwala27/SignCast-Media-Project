import React, { useEffect, useRef } from "react";
import { Canvas, FabricText, Rect, Circle, Gradient, Shadow } from "fabric";

const ContentCreator = ({ onSave }) => {
  //Creating different styles content using fabric
  const canvasRef = useRef(null);

  //Some gradient effects
  useEffect(() => {
    const canvas = new Canvas(canvasRef.current);

    const gradient = new Gradient({
      type: "linear",
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        { offset: 0, color: "skyblue" },
        { offset: 1, color: "white" },
      ],
    });

    canvas.background = gradient;
    canvas.renderAll();

    //Added Rectangle
    const rectangle = new Rect({
      left: 100,
      top: 100,
      width: 150,
      height: 80,
      fill: "#ff9500",
      shadow: new Shadow({
        color: "rgba(0, 0, 0, 0.6)",
        blur: 10,
        offsetX: 5,
        offsetY: 5,
      }),
    });
    canvas.add(rectangle);

    // Interactive Text with Hover Effect
    const text = new FabricText("SignCast Media", {
      left: 50,
      top: 50,
      fontFamily: "Arial",
      fontSize: 30,
      fill: "black",
      hoverCursor: "pointer",
    });

    text.on("mouseover", () => {
      text.set({ fill: "darkblue" });
      canvas.renderAll();
    });

    text.on("mouseout", () => {
      text.set({ fill: "black" });
      canvas.renderAll();
    });

    canvas.add(text);

    // Circle that changes color on click
    const circle = new Circle({
      left: 300,
      top: 200,
      radius: 40,
      fill: "black",
      selectable: true,
    });

    circle.on("mousedown", () => {
      const newColor = circle.fill === "black" ? "orange" : "black";
      circle.set({ fill: newColor });
      canvas.renderAll();
    });

    canvas.add(circle);

    onSave(canvas);

    //clearing all
    return () => {
      canvas.dispose();
    };
  }, [onSave]);

  return <canvas ref={canvasRef} width={600} height={400} />;
};

export default ContentCreator;
