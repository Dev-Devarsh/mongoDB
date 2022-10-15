// start code read from mongodb.js

const dbConnection = require('./mongodb');  

const listname = ['dev', 'test']
async function deleteDatabase() {
    let data = await dbConnection();
    // delete feild one by one using for loop

    for (let i = 0; i < listname.length; i++) {

        let result = await data.deleteOne({name: `devarsh ${listname[i]}`});//delete only one feild in database
// if deleted count is greater than zero and acknowledged is true it means data delted scuccess fully from database
/* if data isn't exist in database for that acknowledged will be true but 
   deleted count will be zero */
        if(result.deletedCount != 0 && result.acknowledged){
            console.warn(result);    
        }
    }
    //delete all feilds in databases
    let result1 = await data.deleteMany({name: 'devarsh primus'});
}

deleteDatabase()