function listarrayitems(colors,arr2){
    for(var i=0;i<colors.length;i++){
        if(colors.length>5){
            console.log("colors are:=",i,colors[i]);
        }
        else if(colors.length<5&&colors.length<=7){
            colors.push("israr is the best boy:");
            console.log(i,colors[i]);
        }
        else{
            console.log(colors.concat(arr2));
        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
var arr2=["Emil", "Tobias", "Linus"];
listarrayitems(colors,arr2);