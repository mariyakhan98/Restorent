// function profileData(data){
//     console.log(data);
//     alert("he,lo")

// }
// export default profileData;
const storedUsers = JSON.parse(localStorage.getItem('loginData')) || [];
console.log(storedUsers)
document.getElementById("name").innerHTML=`${storedUsers[0].name}`
document.getElementById("email").innerHTML=`${storedUsers[0].email}`
document.getElementById("number").innerHTML=`${storedUsers[0].number}`
const order = JSON.parse(localStorage.getItem('booking')) || [];
console.log(order)
const {date,time}=order;
console.log(date)
document.getElementById("date").innerHTML=`${date}`