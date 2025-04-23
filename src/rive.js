import { Rive, StateMachineInputType } from "@rive-app/canvas";

      const riveCanvas = document.getElementById("canvas");

      const riveInstance = new Rive({
      artboard: 'Jeep', 
      src: "https://cdn.rive.app/animations/vehicles.riv",
      canvas: riveCanvas,
      autoplay: true,
      stateMachines: 'weather',
      onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();
        
        const input = riveInstance.stateMachineInputs('weather');
        const triggere = input.find(i => i.name === 'Raining');
        riveCanvas.onclick = () => {
            if (triggere.value === false){
                triggere.value = true;
            }
            else if (triggere.value === true){
                triggere.value = false;
            }}
        
      }
    });

  window.addEventListener(
    "resize",
    () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
    },
    false
  );