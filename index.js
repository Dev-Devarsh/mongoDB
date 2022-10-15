// start code read from mongodb.js

const dbConnection = require('./mongodb');  
const listname = ['dev', 'test', 'test 2' ,'khgsfbgiuy']
async function updateDatabase() {
    let data = await dbConnection();
// update feild one by one using for loop 
    for (let i = 0; i < 4; i++) {
        let result = await data.updateOne(
            {name: `devarsh ${i}`},{
                $set : {name: `devarsh ${i}` , age : 685981}
            }
        );//update only one feild in database
     console.warn(result);

    }
    let result1 = await data.updateMany(
        {name: 'devarsh primus'},{
            $set : {name: 'devarsh primus' , age : 685981}
        }
    );//update all feilds in databases
}

updateDatabase();