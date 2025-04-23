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
                console.log(triggere.value);
                triggere.value = true;
            }
            else if (triggere.value === true){
                console.log(triggere.value);
                triggere.value = false;
            }}
        
      }
    });

    // const input = riveInstance.stateMachineInputs('weather');
    // console.log(input)
    
    // input.forEach((i)=>{
    //     const inpName = i.name;
    //     const inpType = i.type;
    //     switch(inpType) {
    //         case riveCanvas.StateMachineInputType.Trigger:
    //             i.fire();
    //             break;
    //         case riveCanvas.StateMachineInputType.Number:
    //             i.value = 42;
    //             break;
    //         case riveCanvas.StateMachineInputType.Boolean:
    //             i.value = true;
    //             break;
    //     }
    //     }
    // )


    //ANIMATION
    // riveCanvas.onclick = () => {
    //     console.log('click');
    //     if (riveInstance.playingAnimationNames.includes('windshield_wipers')){
    //         riveInstance.pause('windshield_wipers');
    //         riveInstance.play('broken');
    //     }
    //     else {
    //         riveInstance.pause('broken');
    //         riveInstance.play('windshield_wipers');
    //     }
    // }

  window.addEventListener(
    "resize",
    () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
    },
    false
  );