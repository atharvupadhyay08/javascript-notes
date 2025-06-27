//singleton ki madad se object kaise banate h
// const tinderUser =new Object() //singleton object 
const tinderUser ={} // non singleton object

tinderUser.id ="008abc"
tinderUser.name="radhe"
tinderUser.isLoggedIn ="false"
// console.log(tinderUser);
const regularUser ={
      email: "upadhyayatharv@gmail.com",
      fullname:{
            
            userfullname :{
              firstname:"atharv",
              lastname:"upadhyay"
            } 

      }
}

//console.log(regularUser.fullname.userfullname.firstname);//a lot of nesting can be done

const obj1 = { 1:"a" ,2:"b"}
const obj2 = {3: "a" ,4:"b"}

//const obj3 = {obj1 ,obj2} //ek hi object m sab print hoga  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 =Object.assign({},obj1,obj2) //ek object m print krne k liye { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 ={...obj1,...obj2} //spreading 
//console.log(obj3);

const users =[  // array of objects having comma sepearated values
      {
            id :1,
            email : "h@gamil.com"
      },
      {
            id:2,
            email : "h@gamil.com"
      },
      {},
]

 //users.map
 users[1].email
// console.log(tinderUser); // returns this { id: '008abc', name: 'radhe', isLoggedIn: 'false' }

// console.log(Object.keys(tinderUser)); //gives array of all the object keys [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // gives arry of all values [ '008abc', 'radhe', 'false' ]
// console.log(Object.entries(tinderUser)); //gives entries arrays [ [ 'id', '008abc' ], [ 'name', 'radhe' ], [ 'isLoggedIn', 'false' ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if anything is part of object or nah

// destructuring of objects
const course ={
      coursename:"js in hindi",
      price:"999",
      courseInstructor : "atharv"
}

//instead of writing console.log(course.cour)
const{courseInstructor :instructor} = course //this can also bewrittern in diff way with the new name
console.log(instructor);

// api ->backend se kuch values aati thi and pehle it used to be in XML form now it comes in JSON
// JSON -> javascript Object Notation , used in API not js but everywhere
// {
//       "name" :"atharv",
//       "coursename":"jhoot bolne k 101 tarike",
//       "price":"free"
// }

// [
//       {},
//       {},
//       {}
// ] // also another way in of writing api in json

