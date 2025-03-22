/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(ele =>{
    if(ele.profession==="developer"){
      console.log(ele);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(ele=>{
    if(ele.profession === "developer"){
      console.log(ele);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newPerson = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newPerson);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(ele=> ele.profession !=="admin");
  console.log(arr);
  
}

function concatenateArray() {
  //Write your code here, just console.log
  let newPeople = [
    { id: 5, name: "neha", age: "25", profession: "developer" },
    { id: 6, name: "ankur", age: "26", profession: "developer" },
    { id: 7, name: "anu", age: "21", profession: "intern" }
  ];
  let concatenatedArray = arr.concat(newPeople);
  console.log(concatenatedArray);
}
