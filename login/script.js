
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     console.log(password)
    // Check if the username and password match a stored user
    const storedUsers = JSON.parse(localStorage.getItem('loginData')) || [];

console.log(storedUsers)
    // const user = await storedUsers.find(
        
    //     (row) => {return row.email === email && row.password === password});
    // console.log(user)
   
    if (storedUsers[0].email === email && storedUsers[0].password === password) {
      alert('Login successful!');
      console.log(storedUsers)
      // You can redirect to another page or perform other actions after successful login
     // window.location.href="./reservation/index.html"; // Replace with the actual path of your profile
     document.getElementById('page').classList.remove('hidden');
    //  document.getElementById('profilePage').innerHTML +=`<a target="_blank" href="../profile/index.html"><button type="button" onclick="${profileData(storedUsers)}"   id="page">Submit</button></a>`
    } else { 
      alert('Invalid username or password');
    }
  }