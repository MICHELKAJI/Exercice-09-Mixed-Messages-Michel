//code write he
function message(message){
    const blague =["vous avez un gros nez","vous avez une salle tête","vous devrez consulter un psy","vous avez des grosses joux"];
    const astrologique =["Tu seras de bonne humeur aujourd'hui","cette journnée tu vas ganger à loto","vous allez trouver le grand amour","vous allez décroché un bon boulot","l'avenire sera bon pour vous"];
    const motivation = ["un gagneur ne lâche","un homme prudent voit le mal de loin et s'est cache","la sagesse n'a pas d'âge","un homme patient monge le fruit mur","l'humilité precede la gloire","reste toi"];
    
    if(message === 'blague'){
        const nb = Math.floor(Math.random()*blague.length);
        const messageRodom = blague[nb]
        console.log(message +" :" + messageRodom);

    };
    if(message === 'astrologique'){
        const nb = Math.floor(Math.random()*astrologique.length);
        const messageRodom = astrologique[nb]
        console.log(message +" : " + messageRodom);

    };
    if(message === 'motivation'){
        const nb = Math.floor(Math.random()*motivation.length);
        const messageRodom = motivation[nb]
        console.log(message  +" : " + messageRodom);

    };
        
    
   
      
}
message('blague');



