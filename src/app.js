console.log("connected");
/*function getPkmn(){
    fetch('https://pockeapi.co/api/v2/pockemon/mudkip')
     .then((result) => {
         return result.json();
    })
    .then((data) => {
        console.log(data);
    });
}
getPkmn();*/

const pkmn = "mewtwo";
async function getPkmn(){
    try {
        const result = await fetch ( 'https://pockeapi.co/api/v2/pockemon/${pkmn}');
        const data = await result.json();
        console.log(data);
    }catch (error){
        console.log(error);
        alert ("did you spell that correctly");
    }
}
getPkmn();