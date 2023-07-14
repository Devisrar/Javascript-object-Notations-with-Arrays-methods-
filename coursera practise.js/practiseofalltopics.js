function array1(arr1,arr2){
     var arr1=["israr","sarim","address"];
     var arr2=["israr","sarim","address"];
     var obj1={
        israr:"male",
        sarim:"male",
        address:true,
     }
     var obj2={
        israr:"male",
        sarim:"male",
        address:true,

     }
     for( var i=0;i<arr1.length&&i<arr2.length;i++){
        try{
               if(arr1[i]==arr2[i]){
                throw new ReferenceError("Carry on....");
                console.log("All the data is correct");
                console.log(obj1[arr1[i]],obj2[arr2[i]]);
               }
               else if(arr1[i]!==arr2[i]){
                   arr1.pop(index[3]);
                   console.log(arr1[i]);
               }
               else{
                var i=10;
                console("chooose any number...");
                switch(i){
                    case 1:
                        console.log("wrong:::");
                        break;
                        case 8:
                            console.log("try again****");
                            break;
                            case 10:
                                console.log("congratulations...");
                                break;
                                default:
                                    console.log("Error");
                }
               }
        }
        catch(err){
             console.log("Exception throws=>>>>>");
        }
     }

    
}
var arr1=["israr","sarim","address"];
var arr2=["israr","sarim","address"];
array1(arr1,arr2);