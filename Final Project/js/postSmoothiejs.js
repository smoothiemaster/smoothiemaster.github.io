var smoothieInfo = [];



function load (){
//document.getElementById("list").style.visibility = "hidden";
}

function postSmoothie(){ 

smoothieInfo = [];
//document.getElementById("list").style.visibility=" visible";

var smoothie= document.getElementById("smoothie");
var ingredient1= document.getElementById("ingredient1");
var ingredient2= document.getElementById("ingredient2");
var ingredient3= document.getElementById("ingredient3");
var ingredient4= document.getElementById("ingredient4");
var ingredient5= document.getElementById("ingredient5");

smoothieInfo.push(smoothie.value);
smoothieInfo.push (ingredient1.value);
smoothieInfo.push (ingredient2.value);
smoothieInfo.push (ingredient3.value);
smoothieInfo.push (ingredient4.value);
smoothieInfo.push (ingredient5.value);
console.log(smoothieInfo);


add()


/*document.getElementById("smoothie_name").innerHTML = smoothie.value;
document.getElementById("ingredient1_name").innerHTML = ingredient1.value;
document.getElementById("ingredient2_name").innerHTML = ingredient2.value;
document.getElementById("ingredient3_name").innerHTML = ingredient3.value;
document.getElementById("ingredient4_name").innerHTML = ingredient4.value;
document.getElementById("ingredient5_name").innerHTML = ingredient5.value;*/
}


function ClearFields(){
document.getElementById("smoothie").value="";
document.getElementById("ingredient1").value="";
document.getElementById("ingredient2").value="";
document.getElementById("ingredient3").value="";
document.getElementById("ingredient4").value="";
document.getElementById("ingredient5").value="";

}


function add (){
var table = document.getElementById("smoothie_list");
for (i = 0; i < smoothieInfo.length; i++){
if (smoothieInfo[i] != ""){
var row = table.insertRow();
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
if(i == 0){
cell1.innerHTML = "Smoothie Name";
cell2.innerHTML = smoothieInfo[i];
}else{
cell1.innerHTML = i;
cell2.innerHTML = smoothieInfo[i];
}
}
}


}
