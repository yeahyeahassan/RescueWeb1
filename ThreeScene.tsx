import { useEffect, useRef } from "react";
import { Box } from "lucide-react";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Three.js integration would go here
    // For now, we'll show a placeholder with animation
    console.log('Three.js 3D model integration placeholder');
  }, []);

  return (
    <div 
      ref={containerRef}
      className="h-96 bg-muted rounded-lg flex items-center justify-center"
      data-testid="three-scene-container"
    >
      <div className="text-center">
        <Box className="text-primary h-16 w-16 mb-4 mx-auto animate-float" />
        <p className="text-xl font-space font-semibold">3D Rover Model Viewer</p>
        <p className="text-muted-foreground mt-2">Interactive Three.js implementation coming soon</p>
      </div>
    </div>
  );
}
