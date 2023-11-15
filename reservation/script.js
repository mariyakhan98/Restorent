const resevation = []
const resevation2 = []///samelet obkect {value:1}
 async function confirmResevation(){
   const date = document.getElementById("date").value
  const time =   document.getElementById("time").value
  
 await resevation.push(date)
 await resevation2.push(time)
}
console.log(resevation)
console.log(resevation2)


async function checkAvailability(){
    
    const date = document.getElementById("date").value
  const time =   document.getElementById("time").value

//   let result =
//   resevation.length === resevation2.length &&
//   resevation.every(function (element) {
//     return resevation2.indexOf(element) !== -1;
//   });
//   console.log(result) object.property //value

if(resevation.includes(date)&&resevation2.includes(time)){
  console.log("dont book")
}
else{
  console.log("book")
  const res={date,time}
  await localStorage.setItem('booking', JSON.stringify(res));
   
}
 
    
   


  
}