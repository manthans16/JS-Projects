let nowDate = new Date()
console.log(nowDate); //2024-04-03T22:52:51.757Z
console.log(nowDate.toDateString()); //vWed Apr 03 2024
console.log(nowDate.toISOString()); //2024-04-03T22:53:58.936Z
console.log(nowDate.toLocaleString()); //4/3/2024, 10:55:11 PM
console.log(nowDate.toLocaleString()) //4/3/2024, 10:55:11 PM

let myDate1 = new Date(2024, 13, 4)
console.log(myDate.toDateString());

let myDate = new Date(2024, 2, 16, 5, 3)
console.log(myDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());



console.log(newDate.toLocaleString('default',{
    weekday: "long",
    
}));