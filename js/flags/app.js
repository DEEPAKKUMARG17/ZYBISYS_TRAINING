let input = document.getElementById("data_input");
let container=document.getElementById("main-content");
let btn=document.getElementById("data_submit");
let closing_tag=document.getElementById("closeIcon");
let selectedopt=document.getElementById("selectoption");


var arr = [];
function fun(name, src, location,population,capital,region) {
    var obj = {
        name,
        src,
        location,
        population,
        capital,
        region
    }
    arr.push(obj)
}
// console.log(arr)
function ascending(arr)
{
    let b=arr.sort((a, b) => a.name.localeCompare(b.name));
    displaycards(b);
    adddisplay();
    //console.log(b)
}

function descending(arr)
{
    let b=arr.sort((a, b) => b.name.localeCompare(a.name));
    displaycards(b)
    adddisplay();
   // console.log(b)
}

function ascending_populaton(arr)
{
    let b=arr.sort((a, b) => a.population-b.population);
    displaycards(b);
    adddisplay();

    //console.log(b)
}

function decending_population(arr)
{
    let b=arr.sort((a, b) => b.population-a.population);
    displaycards(b)
    adddisplay();
    //console.log(b)
}





btn.addEventListener("click",(event)=>
{
    let url = `https://restcountries.com/v3.1/all`;
    fetch(url).then((response) => response.json()).then((response) => {
     console.log(response)


        for (i = 0;i<250; i++) 
        {
           let large_container=document.createElement("div");
          let small_container=document.createElement("div");
          small_container.setAttribute("id","scontainer");
           large_container.setAttribute("id","lcontainer");
            let flag_images=document.createElement("img");
           let country_name=document.createElement("p"); 
           let country_captial=document.createElement("p"); 
           let country_region=document.createElement("p"); 
           let country_population=document.createElement("p"); 
           flag_images.setAttribute("id","flag_img");
           let flag=response[i].flags.svg
           //console.log(flag)
           flag_images.setAttribute("src", flag)
           country_name.innerHTML=`Name:${response[i].name.common}`;
           country_captial.innerHTML=  `Capital:${response[i].capital}`;
           country_region.innerHTML=`Region  :${response[i].region}`;
           country_population.innerHTML= `Population :${response[i].population}`
              
           let name = response[i].flags.alt;
           fun(response[i].name.common, response[i].flags.svg, response[i].flags.alt,response[i].population,response[i].capital,response[i].region);
           small_container.appendChild(flag_images);
           large_container.appendChild(small_container);
           large_container.appendChild(country_name);
           large_container.appendChild(country_captial)
           large_container.appendChild(country_population)
            large_container.appendChild(country_region)
             container.appendChild(large_container);
            // console.log(flag_images)

             function showdetails() {
                let image_getting = document.getElementById("image_1");
                image_getting.src = flag;

               
                let para_getting = document.getElementById("para_1");
                para_getting.innerHTML = name;

                // console.log(arr.sort((a, b) => a.name.common.localeCompare(b.name.common)));

                openpopup();
            }

            flag_images.onclick = () => {
                //console.log(image_creation.src);
                showdetails()
            }
           
        }


//arr.sort((a,b)=>a.name.localeCompare(b.name));
 //console.log(arr)
    
      
       


})
})



//console.log(arr)
function openpopup() {
    popup.style.display = "block";
    popupbackground.style.display = "block";
}
closing_tag.addEventListener("click", () => {
    popup.style.display = "none";
    popupbackground.style.display = "none";
})
function adddisplay()
    {
        container.innerHTML="";
        var search_data = input.value;
      //  console.log("search_data", search_data)
        var searcharr = arr.filter((element) => {
            if (element.name.toLowerCase().includes(search_data.toLowerCase())) {
                return true
            }
        })
        console.log("data1",searcharr);
        displaycards(searcharr)
    }
input.addEventListener("input",()=>
{
   adddisplay(); 

})
function displaycards(datas)
{
    container.innerHTML="";
    console.log("data", datas)
    for(let data of datas)
    {
        let large_container=document.createElement("div");
        let small_container=document.createElement("div");
        small_container.setAttribute("id","scontainer");
         large_container.setAttribute("id","lcontainer");
        let flag_images=document.createElement("img");
         let country_name=document.createElement("p"); 
         let country_captial=document.createElement("p"); 
         let country_region=document.createElement("p"); 
         let country_population=document.createElement("p"); 
         flag_images.setAttribute("id","flag_img");
         let flag=data.src
         //console.log(flag)
         flag_images.setAttribute("src", flag)
         country_name.innerHTML=`Name:${data.name}`;
         country_captial.innerHTML=  `Capital:${data.capital}`;
         country_region.innerHTML=`Region  :${data.region}`;
         country_population.innerHTML= `Population :${data.population}`
            
         let name = data.location;
        //  fun(response[i].name.common, response[i].flags.svg, response[i].flags.alt,response[i].population,response[i].capital,response[i].region);
         small_container.appendChild(flag_images);
         large_container.appendChild(small_container);
         large_container.appendChild(country_name);
         large_container.appendChild(country_captial)
         large_container.appendChild(country_population)
          large_container.appendChild(country_region)
           container.appendChild(large_container);
          // console.log(flag_images)

           function showdetails() {
              let image_getting = document.getElementById("image_1");
              image_getting.src = flag;

             
              let para_getting = document.getElementById("para_1");
              para_getting.innerHTML = name;


              openpopup();
          }

          flag_images.onclick = () => {
              //console.log(image_creation.src);
              showdetails()
          }
    }
}

    document.querySelector("#selectoption").addEventListener("change",()=>
    {

        let selectedopt=document.getElementById("selectoption").value;
        switch(selectedopt)
        {
            case 'Name_Asscending':
                ascending(arr);
                break;
            case 'Name_Descinding':
                    descending(arr);
                    break;
            case 'Population_Asscending':
                        ascending_populaton(arr);
                        break;
            case 'Population_Descending':
                        decending_population(arr);
                        break;
        }
    })
