let zina = document.querySelectorAll(".zina")


let price = [1499, 869, 1199, 1299, 1399, 700 ] 

        let every = 0
        let one = 1499
        let two = 869
        let three = 1199
        let four = 1299
        let five = 1399
        let six = 700

        let first = document.querySelector(".first")

    for(let i = 0; i < zina.length; i++){
        zina[i].addEventListener('click', function(){
            if(i == 0){
              every= one+ every
            }
            else if (i == 1){
                 every= two + every 
            }
            else if (i == 2){
                 every= three + every 
            }
            else if (i == 3){
                 every= four + every 
            }
            else if (i == 4){
                 every= five + every 
            }
            else if (i == 5){
                every= six + every 
           }
           
               first.innerHTML= every
        })}
        
  
    