fetch('http://www.omdbapi.com/?t=Guardians+of+the+galaxy&apikey=78950d19')
.then(res =>.json())
.then(data => console.log(data))



getMovie();
const apiUrl ='http://www.omdbapi.com/?t=Guardians+of+the+galaxy&apikey=78950d19';
async function getMovie(){
  const response = awat fetch(apiUrl);
  cont data = awat response.json();
  console.log(data);
}



  )
}
<script>
let url = 'http://www.omdbapi.com/?t=Guardians+of+the+galaxy&apikey=78950d19';
console.log('fetchthe image');
  fetch('url')
  .then(response =>{
    console.log(response);
    return response.json();
  }).then(data=>{
    data.forEach(movie=>{})
    console.log(response);
  });

</script>

<script>

const apiUrl ='http://www.omdbapi.com/?t=Guardians+of+the+galaxy&apikey=78950d19';
async function getMovie(){

  const response = await fetch(apiUrl);
  const data = await response.json();
  const {Title} = data;


  document.getElementById('title').textContent = Title;
  console.log(data.Title);
  console.log(data);


}


getMovie();

</script>
