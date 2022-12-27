let allPosts =JSON.parse(localStorage.getItem("posts"));

window.onload = function () {



    // async function f(){
    //    const result = await fetch('https://dummyjson.com/users?limit=10');
    //    return result.json();
    // }
    // let res = f();
    // res.then(data => console.log(data));
    //
    //
    //
    //
    //
    //
    // //--------time load
    // let time = performance.timing;
    //
    // let pageloadtime = time.loadEventStart - time.navigationStart;
    // console.log(pageloadtime);
    // let text = document.getElementById("time-load");
    // console.log(text)
    // text.innerHTML = pageloadtime;

    //------------ time load
    //-----add post
   // localStorage.setItem("posts", JSON.stringify([]));


    // функция отрисовки в модальном окне
        //const newForm = getelementbyid(modal)
        // и прописать наши все дополнительные поля в этоту форму

    showPostInfo = (post) => {
        let shot = document.getElementById("shot-placeholder");
        let content = shot.children.item(0).children.item(0).children;

        // добавить активный статус этому окну
        shot.classList.add("shot-visible");
        let h2 = content.item(1);
        console.log(h2);
        let shotImg = content.item(2);
        console.log(shotImg);
        let desc = content.item(3);
        console.log(desc);
        // передать пост в функцию отрисовки в этом окне
        h2.innerHTML = post.title;
        shotImg.src = post.imgUrl;
        shotImg.alt = "shot-pic";
        desc.innerHTML = post.description;
        console.log(post)
    }
    document.getElementById("shot-btn-close").onclick = function () {
        let form = document.getElementById("shot-placeholder");
        form.classList.remove("shot-visible")
    }

    renderPost = (post) =>{
        let wall = document.getElementById("wall");

        let post_div = document.createElement("div");
        post_div.classList.add("post")

        let img = document.createElement("img");
        img.src = post.imgUrl;

        let description_div = document.createElement("div");
        description_div.classList.add("post-description");

        let title = document.createElement("h2");
        title.innerHTML = post.title;
        // let description = document.createElement("p");
        // description.innerHTML = post.description;

        // let btn_more = document.createElement("button");
        // btn_more.onclick = () => showPostInfo(post);
        // btn_more.append("more>>");

        description_div.appendChild(title);
        // description_div.appendChild(description);
        post_div.appendChild(img);
        post_div.appendChild(description_div);
        // post_div.appendChild(btn_more)
        post_div.onclick = () => showPostInfo(post);
        wall.prepend(post_div);

    }

    if ( allPosts == null){
        let posts =[];
        localStorage.setItem("posts", JSON.stringify(posts));
    }else{
        if(allPosts.length > 0 )
            allPosts.map( post =>{
                renderPost(post);
            })
    }

    addPost = ( post ) =>{
        renderPost(post);
        allPosts.push(post);
        localStorage.setItem("posts", JSON.stringify(allPosts));

    }
    
    document.getElementById("btn-add-post").onclick = function () {
        console.log("post")
        let form = document.getElementById("form");
        form.classList.add("form-constructor-active")
    }

    document.getElementById("form-btn-close").onclick = function () {
        let form = document.getElementById("form");
        form.classList.remove("form-constructor-active")
    }


document.getElementById("add-post").onclick = () =>{
        let title = document.getElementById("title-input").value; //i nput
        let imgUrl = document.getElementById("imgUrl-input").value; //input
        let description = document.getElementById("description-input").value; //input

    addPost({"title": title, "imgUrl": imgUrl, "description": description});
    let form = document.getElementById("form");
    form.classList.remove("form-constructor-active")
}




// let storedPosts = JSON.parse(localStorage.getItem("posts"));
// console.log(storedPosts)
// storedPosts.forEach(item =>{
//     addPost(item)
//
//     console.log(item.title)
// })
};
