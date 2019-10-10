import fs from 'fs'

exports.addUser = (req,res) =>{
   let newUser = {
       "name":req.body.name,
       "email":req.body.email
   }
   fs.readFile('src/usersDetails.json', (err, data) => {
    var json = JSON.parse(data) //converting contents of usersDetails to json objects
    json.push(newUser)
  
    fs.writeFile("src/usersDetails.json", JSON.stringify(json,null, 2),(err)=>{
      if (err) throw err;
      res.status(200).send('The data to append was appended to file!');
    })
  })
}


