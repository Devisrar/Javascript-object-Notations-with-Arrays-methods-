function listofitems(){
    var train=["student:israr","student:waqas","zara","Adeeba","Tayyba"];
   if(train[4]=="Tayyba"){
    console.log(train.length);

   }
   else if(train[0]=="student:israr"){
    console.log("Israr is the next winner:");
   }
   else if(train[1]=="student:waqas"){
    console.log("Waqas is the team member");
   }
   else{
    console.log("error");
   }
}
listofitems();