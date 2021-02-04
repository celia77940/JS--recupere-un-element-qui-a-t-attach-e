document.body.addEventListener('click', function(e){
    const elementHasCliked = e.target; /*Elle a cibler exactement l'element ou j'ai cliquer */
    const referenceEventElement = e.currentTarget;/*Elle recupere l'element qui ecoute le geste */
    console.log('Element cibre après propagation de l/evenement', elementHasCliked);
    console.log('Element auquel est rattaché le gestionnaire d/ecoute', referenceEventElement);
})









