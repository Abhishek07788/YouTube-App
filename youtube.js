
    let playVideo =() => {
        let video = JSON.parse(localStorage.getItem("playVideo"));
        console.log(video);
        let id= video.id.videoId;
        let play_video=document.getElementById("play_video");
        play_video.src=`https://www.youtube.com/embed/${id}`
        
        let details=document.getElementById("details")
        
        let title=document.createElement("h2");
        title.innerText=video.snippet.title;
                
        let date=document.createElement("h3");
        date.innerText="7,211,796 views "+video.snippet.publishTime;
        
        let div=document.createElement("div");
        div.setAttribute("id","channel")

        let chennal=document.createElement("h3");
        chennal.innerText=video.snippet.channelTitle;

        let sbcrb=document.createElement("img")
        sbcrb.src="https://i.pinimg.com/originals/a5/10/2e/a5102eada32982c1ccac65804eab67c1.png";

        div.append(chennal,sbcrb);

        let des=document.createElement("p");
        des.innerText=video.snippet.description;
        details.append(title,date,des,div);


    };


    API_KEY = "AIzaSyAjJoUesbmJscSzOSYviec9P0t8UCmp4ts";
  input=document.querySelector("#P");
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
        window.location.href="index.html";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let data=JSON.parse(localStorage.getItem("data"))
   console.log(data)



// -----------------------------------------------------
   appentright(data);


   function appentright(data){
    let container = document.getElementById("container");
    container.innerHTML = null;
data.forEach((el) => {
     let rightdiv = document.createElement("div");
     rightdiv.setAttribute("id","rightdiv");
     rightdiv.addEventListener("click",function(){
        playVideo2(el)
      })

      let imgright = document.createElement("img");
      imgright.setAttribute("id","rIMG")
      imgright.src = el.snippet.thumbnails.medium.url;

      let div=document.createElement("div")
      

      let h3right = document.createElement("p");
      h3right.innerText = el.snippet.title;
      h3right.style.color="white";

      let pright=document.createElement("p");
      pright.innerText=el.snippet.channelTitle;
      
      div.append(h3right,pright)
      rightdiv.append(imgright,div);
      container.append(rightdiv);
    });
  };

  function playVideo2(el){
    localStorage.setItem("playVideo", JSON.stringify(el));
    window.location.href="youtube.html"
  };




  // ----------------------------------------------------------------

  
  
  
  data=JSON.parse(localStorage.getItem("data"))
  
   console.log(data)




   appentBottum(data);


   function appentBottum(data){
    let container2 = document.getElementById("container2");
    container2.innerHTML = null;
data.forEach((el) => {
     let bottumdiv = document.createElement("div");
     bottumdiv.setAttribute("id","bottumdiv");
     bottumdiv.addEventListener("click",function(){
        playVideo3(el)
      })

      let imgbottum = document.createElement("img");
      imgbottum.setAttribute("id","rIMG")
      imgbottum.src = el.snippet.thumbnails.high.url;
      let imgLogo =document.createElement("img");
      imgLogo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhlb5IzhQeReQ8A8tKG_XawIRf6QorSjgyCqPTizlIVKEkpKcbcNjKC5i5J71of-tXzM&usqp=CAU"
      imgLogo.setAttribute("id","playLogo")
      imgLogo.style.width="70px"
      imgLogo.style.height="70px"

      

      let h3bottum = document.createElement("h2");
      h3bottum.innerText = el.snippet.title;
      h3bottum.style.color="white";

      let pbottum=document.createElement("h3");
      pbottum.innerText=el.snippet.channelTitle;
      
      bottumdiv.append(imgbottum,h3bottum,pbottum,imgLogo);
      container2.append(bottumdiv);
    });
  };

  function playVideo3(el){
    localStorage.setItem("playVideo", JSON.stringify(el));
    window.location.href="youtube.html"
  };


 

