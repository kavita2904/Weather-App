  let city = document.getElementById("city");
  let type = document.getElementById("type");
  let temp = document.getElementById("temp");
  let image = document.getElementById("img");
  let input = document.getElementById("inp");
  let date = document.getElementById("date");

  let API_key ="2f10768afa101690b8eee0dd6a92d6b9"; 


   function  updateDateTime(){
    
    const now = new Date();
  const formattedDate = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  console.log(formattedDate); // Example: "18-03-2025 10:15:30"
   
  date.innerText = formattedDate;

   }
  const now = new Date();
  const formattedDate = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  console.log(formattedDate); // Example: "18-03-2025 10:15:30"

  const data = async function (search){
    // let getData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}&unit=metric')
   
    let getData= await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);

    

    console.log(getData);
     let jsonData = await getData.json();
     console.log(jsonData);
     console.log(jsonData.name);

 if  (jsonData.cod == 400){
  image.src="error1.png"
  alert("Please Enter Location")
  city.innerHTML="";
  temp.innerHTML= "";
  type.innerHTML=""; 
 }
        
 if  (jsonData.cod == 404){
  alert("Please Enter write Location")
  image.src="error2.png"
 
  city.innerHTML=jsonData.name; //  write search also 
  temp.innerHTML= "";
  type.innerHTML=""; 
 }
     city.innerHTML=jsonData.name; //  write search also 
     temp.innerHTML= Math.floor(jsonData.main.temp)+"°C";
     type.innerHTML=jsonData.weather[0].main; 
   
   

     if (type.innerHTML == "Clouds"){
      image.src="Clouds.png"
     }else if(type.innerHTML == "Clear"){
      image.src="clears.png"
     }else if(type.innerHTML == "Rain"){
      image.src="rain.png"
     }else if(type.innerHTML == "Snow  "){
      image.src="snow.jpg"
     }else if(type.innerHTML == "Haze"){
      image.src="haze.jpg"
     }else if(type.innerHTML == "Strom"){
      image.src="strom.jpg"
     }
   input.value=""
      
   
        
   updateDateTime();
setInterval(updateDateTime, 1000);

       } 
       function myFun(){
         search=input.value;
         data(search)    
       }   ;       

   