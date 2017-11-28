let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// the variable 'topping' is used instead of an index
for(let i of students){
    // when we log 'topping', we notice it's a key
  //  console.log(i);
    console.log("Name: ",i.name, "Cohort: ", i.cohort);
    // when we pass the key to the 'sandwich' object, we can pull values
    // console.log(students[name]);
}


//employees list 

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(let i in users){
     console.log(i.toUpperCase());
     //j=inside employee and managers=== 
     for(var j =0; j < users[i].length; j++){
        console.log(j+ "- "+users[i][j].last_name+","+users[i][j].first_name, "-", (users[i][j].last_name.length+users[i][j].first_name.length));
     }
    
}