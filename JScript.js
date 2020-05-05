
//#movie 1
{
  //Here we fetch the API's url.The example is Guardians of the galaxy
function fetchData(){
fetch("http://www.omdbapi.com/?t=Guardians+of+the+galaxy&apikey=78950d19")
.then(response => {
  //The data returns a promise, which we can see in the log if inspecting the page. Besides that, we returns
  // This prmise
  console.log(response);
  //Here we create a little log for debugging,
  if (!response.ok){
    throw Error("Oopsie daisy");
    //Basicaly it will return Oopsie daisy in the console if theres an error. We say that if the
    //Response is NOT okay, then we will throw the errorm otherwise we will continue
  }
  // Here we continue with a response. By looking into the console we would be able to read more into the data that have been send.
  return response.json();
  console.log(data);
}).then(data =>{
  //In the console we would be able to see all the data from the api. In the log we cctually see all the data and the specific data from
  //imdbRating.
  console.log(data, data.imdbRating);
  //Creating the data element for use
  const {Title, imdbRating, Plot, Year} = data;
  //Creating the different data we wanted to fetch to later be put into the html
  document.getElementById('Title').textContent= Title;
  document.getElementById('imdbRating').textContent= imdbRating;
  document.getElementById('Plot').textContent= Plot;
  document.getElementById('Year').textContent= Year;
}).catch(error =>{
  console.log(error);
  //Another step for debugging
});
}
fetchData();
}
//#movie 2
{
function fetchData(){
fetch("http://www.omdbapi.com/?t=Avengers&apikey=78950d19")
.then(response => {
  console.log(response);
  if (!response.ok){
    throw Error("Oopsie daisy");
  }
  return response.json();
  console.log(data);
}).then(data =>{
  console.log(data, data.imdbRating);
  const {Title, imdbRating, Plot, Year} = data;
  document.getElementById('Title3').textContent= Title;
  document.getElementById('Year3').textContent= Year;
  document.getElementById('imdbRating3').textContent= imdbRating;
  document.getElementById('plot3').textContent= Plot;
}).catch(error =>{
  console.log(error);
});
}
fetchData();
}
//#movie 3
{
function fetchData(){
fetch("http://www.omdbapi.com/?t=Planet&Of&The&Apes&apikey=78950d19")
.then(response => {
  console.log(response);
  if (!response.ok){
    throw Error("Oopsie daisy");
  }
  return response.json();
  console.log(data);
}).then(data =>{
  console.log(data, data.imdbRating);
  const {Title, imdbRating, Plot, Year} = data;
  document.getElementById('Title2').textContent= Title;
  document.getElementById('Year2').textContent= Year;
  document.getElementById('imdbRating2').textContent= imdbRating;
  document.getElementById('plot2').textContent= Plot;
}).catch(error =>{
  console.log(error);
});
}
fetchData();
}
//#movie 4
{
function fetchData(){
fetch("http://www.omdbapi.com/?t=Donnie&Darko&apikey=78950d19")
.then(response => {
  console.log(response);
  if (!response.ok){
    throw Error("Oopsie daisy");
  }
  return response.json();
  console.log(data);
}).then(data =>{
  console.log(data, data.imdbRating);
  const {Title, imdbRating, Plot, Year} = data;
  document.getElementById('Title4').textContent= Title;
  document.getElementById('Year4').textContent= Year;
  document.getElementById('imdbRating4').textContent= imdbRating;
  document.getElementById('plot4').textContent= Plot;
}).catch(error =>{
  console.log(error);
});
}
fetchData();
}
//#movie 5
{
function fetchData(){
fetch("http://www.omdbapi.com/?t=Star&Wars&apikey=78950d19")
.then(response => {
  console.log(response);
  if (!response.ok){
    throw Error("Oopsie daisy");
  }
  return response.json();
  console.log(data);
}).then(data =>{
  console.log(data, data.imdbRating);
  const {Title, imdbRating, Plot, Year} = data;
  document.getElementById('Title5').textContent= Title;
  document.getElementById('Year5').textContent= Year;
  document.getElementById('imdbRating5').textContent= imdbRating;
  document.getElementById('plot5').textContent= Plot;
}).catch(error =>{
  console.log(error);
});
}
fetchData();
}
