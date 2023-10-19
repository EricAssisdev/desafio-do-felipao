//Desafio 1 - Classificador de nivel de heroi
let nome = "Ericjkl";
let xp = "8003";
let nivel;

//Foi utilizado  a função parseInt() para converter o valor que seja adicionada em forma de string para valor numerico
if(parseInt(xp) < 1000 )
    nivel = "Ferro"
 else if (parseInt(xp) >= 1001 && parseInt(xp) <= 2000)
    nivel = "Bronze"
 else if (parseInt(xp) >= 2001 && parseInt(xp) <= 3000) 
    nivel = "Ouro";
   else if (parseInt(xp) >= 3001 && parseInt(xp) <= 4000) 
    nivel = "Platina";
   else if (parseInt(xp) >= 4001 && parseInt(xp) <= 5000) 
    nivel = "Diamante";
   else if (parseInt(xp) >= 5001 && parseInt(xp) <= 6000) 
    nivel = "Mestre";
   else if (parseInt(xp) >= 6001 && parseInt(xp) <= 7000) 
    nivel = "Grão-Mestre";
   else if (parseInt(xp) >= 7001 && parseInt(xp) <= 8000) 
    nivel = "Ascendente";
   else if (parseInt(xp) >= 8001 && parseInt(xp) <= 9000) 
    nivel = "Imortal";
   else if (parseInt(xp) >= 9001 && parseInt(xp) <= 10000) 
    nivel = "Radiante";
  
  console.log(`O herói de nome ${nome} está no nível ${nivel}.`);
