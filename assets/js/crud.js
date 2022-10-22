var email=document.getElementById("email");
var password=document.getElementById("password");
var name=document.getElementById("name");
var birthDay=document.getElementById("birthDay");
var phoneNumber=document.getElementById("phoneNumber");
var pay=document.getElementById("pay");
var account=document.getElementById("account");
var emails=document.getElementById("emails");
var passwords=document.getElementById("passwords");
var login=document.getElementById("login");

var data=document.getElementById("data");
var nameAlert=document.getElementById("nameAlert");
var currentIndex;

if (localStorage.getItem("accountList")==null){
    var accounts = [];
}
else {
    var accounts = JSON.parse(localStorage.getItem("accountList"));
    readAccounts();
}

account.onclick = function() {
    //add
    addAccounts();
    //read
    // readAccounts();
    //clear
    clearAfterAdd();
}

function addAccounts (){
    var product = {
        email:email.value,
        password:password.value,
        name:name.value,
        birthDay:birthDay.value,
        phoneNumber:phoneNumber.value,
        pay:pay.value
    };

    accounts.push(product);

    localStorage.setItem("accountList",JSON.stringify(accounts));
}

// function readAccounts (){
//     var result = "";
//     for (var i=0; i<accounts.length; i++){
//         result += `<tr>
//             <td>${i}</td>
//             <td>${accounts[i].name}</td>
//             <td>${accounts[i].category}</td>
//             <td>${accounts[i].price}</td>
//             <td>${accounts[i].description}</td>
//             <td>
//                 <button onclick="getProductData(${i})" class="btn btn-outline-info">update</button>
//                 <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button>
//             </td>
//         </tr>`
//     }
//     data.innerHTML = result;
// }

function clearAfterAdd (){
    email.value = "";
    password.value = "";
    name.value = "";
    birthDay.value = "";
    phoneNumber.value = "";
    pay.value = "";
}

// function deleteProduct (index){
//     accounts.splice(index,1),
//     localStorage.setItem("accountList",JSON.stringify(products)),
//     readAccounts()
// }

// deleteBtn.onclick = function (){
//     localStorage.removeItem("accountList");
//     accounts = [];
//     data.innerHTML="";
// }

// function search (srch){
//     var result = "";
//     for (var i=0; i<accounts.length; i++){
//         if (accounts[i].name.toLowerCase().includes(srch.toLowerCase())){
//             result += `<tr>
//                 <td>${i}</td>
//                 <td>${accounts[i].name}</td>
//                 <td>${accounts[i].category}</td>
//                 <td>${accounts[i].price}</td>
//                 <td>${accounts[i].description}</td>
//                 <td>
//                     <button class="btn btn-outline-info">update</button>
//                     <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button>
//                 </td>
//             </tr>`
//         }
//     }
//     data.innerHTML = result;
// }

function getProductData (index){
    var product = accounts[index];
    email.value = product.email;
    password.value = product.password;
    name.value = product.name;
    birthDay.value = product.birthDay;
    phoneNumber.value = product.phoneNumber;
    pay.value = product.pay;
    account.innerHTML="Update accounts";
    currentIndex = index;
}

// function updateProduct (){
//     var product = {
//         name:email.value,
//         category:password.value,
//         price:name.value,
//         description:birthDay.value,
//         description:phoneNumber.value,
//         description:pay.value
//     };
//     accounts[currentIndex].name=product.name;
//     accounts[currentIndex].category=product.category;
//     accounts[currentIndex].price=product.price;
//     accounts[currentIndex].description=product.description;

//     localStorage.setItem("accountList",JSON.stringify(accounts));
// }

email.onkeyup=function(){
    var pattern = /^[A-Z][a-z]{2,8}$/;
    if (pattern.test(premailoductName.value)){
        console.log('hh');

        account.removeAttribute("disabled");
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        nameAlert.classList.add("d-none");
    }
    else {
        account.setAttribute("disabled","disabled");
        email.classList.replace("is-valid","is-invalid");
        nameAlert.classList.add("d-block");
        nameAlert.classList.remove("d-none");
    }
}

account.onclick = function() {
    if (emails==email && passwords==password){
        login.innerHTML='<a class="login" href="movie.html">Log in</a>';
    }
    else{
        alert('hh')
    }
}