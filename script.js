

let menuicon = document.querySelector("#menu-icon")
let sidebar = document.querySelector(".sidebar")

menuicon.onclick = function(){
    sidebar.classList.toggle("smallsidebar")
}

// const url ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=Us&key=AIzaSyAd3Fu2ow_QXbCdrqg12-gArFoekFBxEUU"
let popular = () => {

const url ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=IN&key=AIzaSyAd3Fu2ow_QXbCdrqg12-gArFoekFBxEUU"

fetch(url).then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res)
    append(res.items)


}).catch((err)=>{
    console.log(err)
})
}

popular()

const searchVideos = async () => {
    try {
        const q = document.getElementById("query").value

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}%202&key=AIzaSyAd3Fu2ow_QXbCdrqg12-gArFoekFBxEUU`)

        const data = await res.json();

        append(data.items)

    } catch (err) {
        console.log(err)
    }
}

const append= (videos) => {
    let show_videos = document.getElementById("show_videos")

    show_videos.innerHTML=null;

    videos.forEach(({id: {videoId},snippet: {title},snippet :{thumbnails: {medium:{url}}}}) => {
        let div = document.createElement("div")
        let image = document.createElement("img") //newline
        image.src=`${url}` //newline
        let iframe = document.createElement("iframe")

        iframe.src = `https://www.youtube.com/embed/${videoId}` 

        iframe.width = "100%"
        iframe.height ="100%"
        iframe.allow ="fullscreen"

        let name = document.createElement("h5")

        name.innerText = title;

        div.append(image,name) //newline added image in place iframe

        let data = {
            title,
            videoId
        }
        div.onclick = () => {
            showvideo(data)
        }
        show_videos.append(div);
    });

};

const showvideo = (x) => {
 window.location.href="video.html"
 localStorage.setItem("video",JSON.stringify(x));
}
// { <iframe 
// width="560"
//  height="315" 
// src="https://www.youtube.com/embed/nHMQ33LZ6oA" 
// title="YouTube video player" 
// frameborder="0"
//  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
// allowfullscreen></iframe> }