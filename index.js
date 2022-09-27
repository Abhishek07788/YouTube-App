
 API_KEY = "AIzaSyAjJoUesbmJscSzOSYviec9P0t8UCmp4ts";
  input=document.querySelector("#P").innerHTML;

  function button() {

    let input = document.getElementById("input").value;
    
    console.log(input)
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${API_KEY}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        //console.log(res.items);
        
        localStorage.setItem("data",JSON.stringify(res.items))
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

   let data=JSON.parse(localStorage.getItem("data"))
   console.log(data)
   appent(data);
   let refresh=document.getElementById("refresh")
   refresh.style.display="none";


  function appent(data){

    let container = document.getElementById("container");
    container.innerHTML = null;
    data.forEach((el) => {
      let div = document.createElement("div");
      div.addEventListener("click",function(){
        playVideo(el)
      })

      let img = document.createElement("img");
      img.src = el.snippet.thumbnails.medium.url;

      let h3 = document.createElement("h3");
      h3.innerText = el.snippet.title;

      let p=document.createElement("p");
      p.innerText=el.snippet.channelTitle;

      let p2=document.createElement("p");
      p2.innerText=el.snippet.publishTime;
      
      div.append(img, h3,p,p2);
      container.append(div);
    });
  };


 
  function playVideo(el){
    localStorage.setItem("playVideo", JSON.stringify(el));
    window.location.href="youtube.html"
  };

  function show(){
    let filter=document.getElementById("fltr");
    filter.style.display="block";
  }

  function hide(){
  let filter=document.getElementById("fltr");
  filter.style.display="none";
  }


  data=JSON.parse(localStorage.getItem("data"))


 let filter=document.getElementById("fltr");
  data=JSON.parse(localStorage.getItem("data"))

  
  function latest(){

    data.sort(function(a,b){
    if(a.snippet.publishTime>b.snippet.publishTime) return -1
    if(a.snippet.publishTime<b.snippet.publishTime) return  1
    return 0;
  });
  filter.style.display="none";
  appent(data);
}


function oldest(){

  data.sort(function(a,b){
  if(a.snippet.publishTime>b.snippet.publishTime) return  1
  if(a.snippet.publishTime<b.snippet.publishTime) return  -1
  return 0;
});
filter.style.display="none";
appent(data);
}


function ascending(){

  data.sort(function(a,b){
  if(a.snippet.title>b.snippet.title) return  1
  if(a.snippet.title<b.snippet.title) return -1
  return 0;
});
filter.style.display="none";
appent(data);
}


function descending(){

  data.sort(function(a,b){
  if(a.snippet.title>b.snippet.title) return -1
  if(a.snippet.title<b.snippet.title) return  1
  return 0;
});
filter.style.display="none";
appent(data);
}


