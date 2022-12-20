window.onload = function () {
    //--------time load
    let time = performance.timing;

    let pageloadtime = time.loadEventStart - time.navigationStart;
    console.log(pageloadtime);
    let text = document.getElementById("time-load");
    console.log(text)
    text.innerHTML = pageloadtime;

    //------------ time load
    //-----add post
   //localStorage.setItem("posts", JSON.stringify([]));

    let allPosts =JSON.parse(localStorage.getItem("posts"));

    renderPost = (post) =>{
        let wall = document.getElementById("wall");

        let post_div = document.createElement("div");
        post_div.classList.add("post", "col-lg-10")

        let img = document.createElement("img");
        img.src = post.imgUrl;

        let description_div = document.createElement("div");
        description_div.classList.add("post-description");

        let title = document.createElement("h2");
        title.innerHTML = post.title;
        let description = document.createElement("p");
        description.innerHTML = post.description;

        description_div.appendChild(title);
        description_div.appendChild(description);
        post_div.appendChild(img);
        post_div.appendChild(description_div)
        wall.prepend(post_div);

    }

    addPost = ( post ) =>{
        renderPost(post);
        allPosts.push(post);
        localStorage.setItem("posts", JSON.stringify(allPosts));

    }
    if ( allPosts == null){
        let posts =[];
        localStorage.setItem("posts", JSON.stringify(post));
    }else{
        if(allPosts.length > 0 )
        allPosts.map( post =>{
            renderPost(post);
        })
    }
    document.getElementById("btn-add-post").onclick = function () {
        console.log("post")
        let form = document.getElementById("form");
        form.classList.add("form-constructor-active")
    }

    document.getElementById("btn-close").onclick = function () {
        let form = document.getElementById("form");
        form.classList.remove("form-constructor-active")
    }


document.getElementById("add-post").onclick = () =>{
        let title = document.getElementById("title-input").value; //i nput
        let imgUrl = document.getElementById("imgUrl-input").value; //input
        let description = document.getElementById("description-input").value; //input

    addPost({"title": title, "imgUrl": imgUrl, "description": description});
}




// let storedPosts = JSON.parse(localStorage.getItem("posts"));
// console.log(storedPosts)
// storedPosts.forEach(item =>{
//     addPost(item)
//
//     console.log(item.title)
// })
};
