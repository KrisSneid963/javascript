function askForCoin() {
    let coins = 0;  
    
    while (true) {
      
        let answer = prompt("Ar norėtumėt monetos? (Taip/Ne)").toLowerCase();

        if (answer === "taip") {
            coins++;  
            alert(`Jūs turite ${coins} monetą/as.`);  
        } 
     
        else if (answer === "ne") {
            alert("Baigiame darbą. Turite " + coins + " monetų.");
            break;  
        } 
        
        else {
            alert("Prašome atsakyti 'Taip' arba 'Ne'.");
        }
    }
}

