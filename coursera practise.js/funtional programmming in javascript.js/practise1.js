var a=2;
var b="zaramajeeed";
var c=0;

function multiplication(val1,val2){
    try{ 
         if(typeof(val1)=="number"&&typeof(val2)=="number"){
            
            console.log("length is::=",val1.length,val2.length);
                 return val1*val2;
                 
         }
         
         
         else if(typeof(val1)=="symbol"&&typeof(val2)=="symbol"){
            val1&&val2.multiplication;
            console.log(val1,val2);
         }
         else{
            
            var arr=["age","Name","favdish","location","fathername","Education","birthdaydate"];
var arr1=["age","Name","favdish","location","fathername","Education","birthdaydate"];
var isrardata={
    age:24,
    Name:"Muhammad israr",
    favdish:"Biryani:",
    location:90288338+"latitude",
    fathername:"Muhammad Arif",
    Education:"Software Enginner:::::::",
    birthdaydate:"24-Decemember-1999",

}
var sarimdata={
    age:22,
    Name:"sarim",
    favdish:"Biryani:",
    location:90288338+"latitude",
    fathername:"Muhammad Arif",
    Education:"Software Enginner:::::::",
    birthdaydate:"24-Decemember-2000",
}
console.log("Loading.....");
for(var i=0;i<arr.length&&i<arr1.length;i++){
   
      console.log("Israr your all bio Data is =", isrardata[arr[i]],"And","\n","Sarim your data is here:=",sarimdata[arr1[i]]);
     
      
     
}
         }
    }
    catch(err){
             console.log(err);
    }
}
var c=multiplication(a,b);
console.log(c);
//this code is the example of functional programming 