let newdata = JSON.parse(localStorage.getItem("video"))

let func = ({ title, videoId }) => {

    let div = document.createElement("div")
    let container = document.getElementById("container")


    let iframe = document.createElement("iframe")

    iframe.src = `https://www.youtube.com/embed/${videoId}`

    iframe.width = "100%"
    iframe.height = "500%"
    iframe.allow = "fullscreen"

    let name = document.createElement("h5")

    name.innerText = title;

    div.append(iframe, name)

    
    container.append(div);
}
func(newdata)