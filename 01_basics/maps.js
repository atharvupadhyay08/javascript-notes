//maps objects holds key value pairs and remenbers the original insertion order of the keys 
//any value [both objects and primitive values ] maybe used as either a key or a value 
//unique values hoti h
//maps are not iteratable through for in
const map = new Map()
map.set('IN',"India")
map.set('USA',"Unites States of America")
map.set('FR',"france")
map.set('IN',"India")

//console.log(map);

// Map(3) {
//   'IN' => 'India',
//   'USA' => 'Unites States of America',
//   'FR' => 'france'
// }

// for (const key of map) {
//       console.log(key);
// }

// [ 'IN', 'India' ]
// [ 'USA', 'Unites States of America' ]
// [ 'FR', 'france' ]

for (const [key,value] of map) {
      console.log(key,':-',value);
}