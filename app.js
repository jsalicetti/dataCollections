
let cell = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// made parentArray + removed all "/n" from cells
let parentArray = cell.split('\n')

//created Myarray to make a forloop that would create new arrays for each row of info (in the cell)
function Myarray(){

    let new_array = []

    for (let i = 0; i <= parentArray.length-1; i++){

       //removing ","
        new_array.push(parentArray[i].split(','))

    }

    return new_array  
   
}
let myarr = Myarray()

function sortArrayIntoObj(myarr) {
   
    const keys = myarr[0]
    //making empty objects that are going to be pushed into
    let obj = {};
    //making a new empty array that will hold the objects for each row
    let rArr=[]
    //making a for loop that will sort through the parent array
    for(let i = 1; i <= myarr.length-1; i++){
      
        let subArr = myarr[i]
      //a for loop that will go through each array inside of the parent array
      for(let j=0; j <= subArr.length-1; j++){
        
       
        const key = keys[j]
        const value = myarr[i][j]
        obj[key] = value

        }
        // pushing above info that is being looped through into an obj  
        rArr.push(obj)
    
        //creating empty objects to be pushed into the following
        obj = {};

        
    }
    //returning the value
    return rArr

} 


let New_array = sortArrayIntoObj(myarr)

//using .splice() to make modifications to the objects housed inside of the parent array
New_array.splice(1,0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
New_array.splice(4,4, { id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(New_array)