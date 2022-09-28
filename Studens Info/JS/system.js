let identity = document.getElementById("identity");
let yourName = document.getElementById("yourName");
let date = document.getElementById("date");
let datePlace = document.getElementById("datePlace");
let phoneNumber = document.getElementById("phoneNumber");
let roomNumber = document.getElementById("roomNumber");
let dateIntry = document.getElementById("dateIntry");
let pay = document.getElementById("pay");
let remainder = document.getElementById("remainder");
let securing = document.getElementById("securing");
let create = document.getElementById("create");
let inputSearch = document.getElementById("inputSearch");
let searchByName = document.getElementById("searchByName");
let searchByRoomNumber = document.getElementById("searchByRoomNumber");
let deleteAll = document.getElementById("deleteAll");
let update = document.getElementById("update");
let showData = document.getElementById("showData");
let mode = "create";
let two;

let arr = [];

if (localStorage.info != null) {
  arr = JSON.parse(localStorage.info);
} else {
  arr = [];
}

//Create Info
create.onclick = function () {
  let dataObj = {
    identity: identity.value,
    yourName: yourName.value,
    date: date.value,
    datePlace: datePlace.value,
    phoneNumber: phoneNumber.value,
    roomNumber: roomNumber.value,
    dateIntry: dateIntry.value,
    pay: pay.value,
    remainder: remainder.value,
    securing: securing.value,
  };
  if (mode == "create") {
    arr.push(dataObj);
  } else {
    arr[two] = dataObj;
    mode = "create";
    create.innerHTML = "Create";
  }

  localStorage.setItem("info", JSON.stringify(arr));
  // checkInput();
  clearValue();
  printData();
  
};

// Chack For Data

// function checkInput() {
//   if (
//     identity.value !== "" &&
//     yourName.value !== "" &&
//     date.value !== "" &&
//     phoneNumber.value !== "" &&
//     roomNumber.value !== "" &&
//     dateIntry.value !== "" &&
//     pay.value !== "" &&
//     remainder.value !== "" &&
//     securing.value !== ""
//   ) {
//     // test(input.value);
//     printData();

//   }
// }

// checkInput()

// Output Data
console.log(arr.length);

function printData() {
  let table = "";
  for (let i = 0; i < arr.length; i++) {
    table += `
        <tr>
        <td id="idNum">${i +1}</td>
        <td>${arr[i].identity}</td>
        <td>${arr[i].yourName}</td>
        <td>${arr[i].date}</td>
        <td>${arr[i].phoneNumber}</td>
        <td>${arr[i].roomNumber}</td>
        <td id="dateLate">${arr[i].dateIntry}</td>
        <td id="two">${arr[i].pay}</td>
        <td id="two">${arr[i].securing}</td>
        <td id="one">${arr[i].remainder}</td>
        <td><button onclick = "updateData(${i})" id="update">Update</button></td>
        <td><button onclick = "deleteData(${i})" id="deletes">Delete</button></td>
    </tr>`;
    text = arr[i].dateIntry;
    
  }
  showData.innerHTML = table;
  if (arr.length > 0) {
    deleteAll.innerHTML = `<button onclick = "deleteAllData()">Delete All</button>`;
  } else {
    deleteAll.innerHTML = "";
  }
  remainderValue();
 
 // dateDelay(text,"");

}
printData();
//###########################################
// let date = document.getElementById("date");
// let button = document.getElementById("button");

// button.onclick = function () {
//   let test = date.value;
//   let one = /\w\d{0,}/gi;
//   let two = test.match(one)[1]; // Month
//   let twoo = test.match(one)[2]; // Day
//   console.log(two);
//   console.log(twoo);
//   setInterval(() => {
//     let timeNow = new Date().getSeconds();
//     // console.log(timeNow);
//     if (timeNow - 4 == twoo) {
//       console.log("done");
//     } else if (timeNow - 3 == twoo) {
//       console.log("done");
//     } else if (timeNow - 2 == twoo) {
//       console.log("done");
//     } else if (timeNow - 1 == twoo) {
//       console.log("done");
//     } else if (timeNow == twoo) {
//       console.log("done");
//     }
//   }, 1000);
// };

//##################################
//dateDelay
function dateDelay(dateIntry, element) {
  let idNum = document.getElementById("dateLate");
  let one = parseInt(dateIntry.slice(-2));
  let timeNow = 5;
  console.log(one);
  if(timeNow == one){
    // idNum.className = "idNum";
    console.log(idNum);
  }
  // let dateLate = document.querySelectorAll("#dateLate");
 
  // let arr = [];
// arr.push(dateLate);
// console.log(dateLate); 
// let textValue;
//   for (let i = 0; i < dateLate.length; i++) {
//      textValue = dateLate[i].textContent;
//     arr.push(textValue);
// let one = parseInt(textValue.slice(-2));
//     console.log(one);
//     setInterval(() => {
//       let timeNow = new Date().getSeconds();
//       console.log(timeNow);
//       if (timeNow == one) {
//         idNum.className = "idNum";
//         console.log(true);
//       } else {
//         idNum.removeAttribute("class");
//       }
//     }, 1000);
//   }
}

//clear value

function clearValue() {
  identity.value = "";
  yourName.value = "";
  date.value = "";
  phoneNumber.value = "";
  roomNumber.value = "";
  dateIntry.value = "";
  pay.value = "";
  remainder.value = "";
  securing.value = "";
  datePlace.value = "";
}

//Search By Room Number
searchByRoomNumber.onclick = function () {
  let table = "";
  for (let i = 0; i < arr.length; i++) {
    if (inputSearch.value == arr[i].roomNumber) {
      table += `
      <tr>
      <td>${i + 1}</td>
      <td>${arr[i].identity}</td>
      <td>${arr[i].yourName}</td>
      <td>${arr[i].date}</td>
      <td>${arr[i].phoneNumber}</td>
      <td>${arr[i].roomNumber}</td>
      <td>${arr[i].dateIntry}</td>
      <td>${arr[i].pay}</td>
      <td>${arr[i].securing}$</td>
      <td id="one">${arr[i].remainder}</td>
      <td><button onclick = "updateData(${i})" id="update">Update</button></td>
      <td><button onclick = "deleteData(${i})" id="deletes">Delete</button></td>
  </tr>
      `;
    }
  }
  showData.innerHTML = table;
  inputSearch.value = "";
};

//Search By Name
searchByName.onclick = function () {
  let table = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].yourName.includes(inputSearch.value)) {
      table += `
      <tr>
      <td>${i + 1}</td>
      <td>${arr[i].identity}</td>
      <td>${arr[i].yourName}</td>
      <td>${arr[i].date}</td>
      <td>${arr[i].phoneNumber}</td>
      <td>${arr[i].roomNumber}</td>
      <td>${arr[i].dateIntry}</td>
      <td>${arr[i].pay}</td>
      <td>${arr[i].securing}$</td>
      <td id="one">${arr[i].remainder}</td>
      <td><button onclick = "updateData(${i})" id="update">Update</button></td>
      <td><button onclick = "deleteData(${i})" id="deletes">Delete</button></td>
  </tr>
      `;
    }
  }
  showData.innerHTML = table;
  inputSearch.value = "";
};

//Update
function updateData(i) {
  identity.value = arr[i].identity;
  yourName.value = arr[i].yourName;
  date.value = arr[i].date;
  datePlace.value = arr[i].datePlace;
  phoneNumber.value = arr[i].phoneNumber;
  roomNumber.value = arr[i].roomNumber;
  dateIntry.value = arr[i].dateIntry;
  pay.value = arr[i].pay;
  remainder.value = arr[i].remainder;
  securing.value = arr[i].securing;
  create.innerHTML = "Update";
  mode = "update";
  two = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
  // dateDelay();
}

// Delete

function deleteData(i) {
  arr.splice(i, 1);
  localStorage.info = JSON.stringify(arr);
  printData();
}

//Delete All

function deleteAllData() {
  if (window.confirm("Are You Sure ?") == true) {
    arr.splice(0);
    localStorage.clear();
    printData();
  } else {
    printData();
  }
}

// The Rest If Exsit Data color Is Green Or Red

function remainderValue() {
  let one = document.querySelectorAll("#one");
  let two = document.querySelectorAll("#two");
  for (let i = 0; i < one.length; i++) {
    if (one[i].textContent == 0) {
      one[i].style.color = "green";
    } else {
      one[i].style.color = "red";
    }
  }
  for (let i = 0; i < two.length; i++) {
    if (two[i].textContent == 0) {
      two[i].style.color = "red";
    } else {
      two[i].style.color = "green";
    }
  }
}
