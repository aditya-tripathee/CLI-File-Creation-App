import fs from "fs";
import readline from "readline";


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const fileCreation = () =>{
    rl.question("Enter your filename : ",(filename)=>{
      rl.question("Enter the contents of your file: ",(content)=>{
        fs.writeFile(`${filename}.txt`,content,(err)=>{
            if(err){
                console.error(`Error occurring during the writing the file`);
            }      
            else{
                console.log(`File "${filename}.txt" created successfully!`)
            }
            rl.close();
        });
      })
    })
}
fileCreation ();

