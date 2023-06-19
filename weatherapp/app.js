
//import { inertrow } from "./modules/tableinsert.js"
import { removepopup } from "./modules/removepopup.js"
//import { loader } from "./modules/loader.js"

export var arr=[];
var i;
function Data(name,temp,hum)
{
var obj={
    name,
    temp,
    hum
}
arr.push(obj);
}
let weatherformContainer=document.getElementById("weather-form")
let weatherpoupContainer=document.getElementById("weather-popup")
let weathertableContainer=document.getElementById("weather-table")


fetch("./components/form.html").then((response)=>response.text())
.then((response)=>
{
    weatherformContainer.innerHTML=response;
})

fetch("./components/popup.html").then((response)=>response.text())
.then((response)=>
{
    //console.log(response);
    weatherpoupContainer.innerHTML=response;
})

fetch("./components/table.html").then((response)=>response.text())
.then((response)=>
{
    document.body.appendChild(weathertableContainer);
    weathertableContainer.innerHTML=response;
})
console.log(weathertableContainer);

let press=document.getElementById("weather-form");
press.addEventListener("submit",(event)=>
{
    event.preventDefault();
 let locationName=document.getElementById("location").value;
//console.log(locationName)
let API_KEY=`c7a9299a3d8da1d910da08bcffb48a3b`;
let url=`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`
loader(true)

fetch(url).then((response)=>response.json()).then((response)=>
{
    loader(false)
    if(response.cod==200)
    {
       
             if(arr.lenght==0)
                {
                    inertrow( response.name,
                     response.main.temp,
                    response.main.humidity);
                    Data(response.name,
                    response.main.temp,
                    response.main.humidity);     
                }
                else 
                {
                    let bool=arr.some((element)=>
                    {
                        return element.name==response.name;
                    })

                    if(bool==true)
                    {
                        alert("duplicate data")
                    }
                    else
                {
                    inertrow( response.name,
                        response.main.temp,
                       response.main.humidity);
                       Data(response.name,
                       response.main.temp,
                       response.main.humidity); 
                }
                  
                }
                
             
     
        
    }
    else if(response.cod==404)
    {
        alert("enter the proper city name");
    }
}).catch((error)=>
{
    alert(`API Error: ${error.message}`);
})
})


let closepointer=document.getElementById("weather-popup");
closepointer.addEventListener("click", function() {
    removepopup();
 })


 
 export const loader = (isLoading) => {

    let loaderData = document.getElementById("loader");

    if(isLoading) {
        loaderData.style.display = "block";
    }else{
        loaderData.style.display = "none";
    }
}
let val=1;
 function inertrow(name,temp,hum)
{
  let API_KEYs=`c7a9299a3d8da1d910da08bcffb48a3b`;
  let urls=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEYs}`
  fetch(urls).then((response)=>response.json()).then((response)=>
{
   // loader(false)
    if(response.cod==200)
    {
         if(name==response.name)
         {
          let table=document.getElementById("table");
          let row=table.insertRow(-1);
          let cell1=row.insertCell(0)
          let cell2=row.insertCell(1);
          let cell3=row.insertCell(2);
          let cell4=row.insertCell(3);
          let cell5=row.insertCell(4);
          let cell6=row.insertCell(5);
          cell1.innerHTML=val;
          cell2.innerHTML=response.name;
          cell3.innerHTML=response.main.temp;
          cell4.innerHTML=response.main.humidity;
          cell5.innerHTML='<input type="button" value="delete"/>'+"";
          cell6.innerHTML='<input type="button" value="show" />'

          //console.log(row.length);
          cell5.addEventListener("click", function() {
            row.remove(cell1)
            
            for( i=1;i<table.rows.length;i++)
            {
                table.rows[i].cells[0].innerHTML=i;
                
            }
            val--;
            let value=arr.findIndex((lem)=>
            {
              return name==lem.name
            })
            console.log(name);
            console.log(value);
            arr.splice(value,1);
            console.log(arr);

          })
          cell6.addEventListener("click", function() {
            loader(true)
        let loc=document.getElementById("popup");
         let heading=document.getElementById("locationplace");
         let tempt=document.getElementById("locationtemperature");
        let hum=document.getElementById("locationthumidity");
        heading.innerHTML=response.name;
        tempt.innerHTML=response.main.temp;;
        hum.innerHTML=response.main.humidity;
        loc.appendChild(heading);
        loc.appendChild(tempt);
        loc.appendChild(hum);
        loader(false)
        popup.style.display ="block";
     popupbg.style.display="block";
     //displaypopup();

       
        })
        val++;
         }
         else{
          alert("invalid data")
         }
        
    }
    else if(response.cod==404)
    {
        alert("enter the proper city name");
    }
}).catch((error)=>
{
    alert(`API Error: ${error.message}`);
})

 
    

}
console.log(arr);



