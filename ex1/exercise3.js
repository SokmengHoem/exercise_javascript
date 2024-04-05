
let avg = 65.7;
let grade = "";

if (avg < 0  ) {
    console.log("Invalid score");
    process.exit(1);
}else{
    if(avg<50){
       grade = "F";
    }else if(avg < 60){
        grade = "E";
    }else if(avg <70){
        grade = "D";
    }else if(avg < 80){
        grade = "C";
    }else if(avg < 90){
        grade = "B";
    }else if(avg <= 100){
        grade = "A";
    }else{
        console.log("average can't be less than 100");
        process.exit(1);
    }
    console.log(`Average is : ${avg} and Grade is : ${grade}`);
}