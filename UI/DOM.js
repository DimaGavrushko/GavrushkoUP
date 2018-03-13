let modul = (function () {
    let user = null;


    let showPhotoPosts = function (post) {
        let photoTable = document.querySelector(".photos-table");
        let isUser = (user === post.author);

        let Cell = document.createElement("div");
        Cell.className = "cell";
        Cell.setAttribute('id',post.id);


        let insideCellInform = document.createElement("div");
        insideCellInform.className = "inside-cell-inform";
        insideCellInform.innerHTML = post.author + "<br>" + formatDate(post.createdAt);

        let icons = document.createElement("div");
        icons.className = "icons";
        let trash = document.createElement("img");
        trash.setAttribute('src', "img/trash.png");
        trash.innerHTML = "<br>";
        let edit = document.createElement("img");
        edit.setAttribute('src', "img/edit.png");

        let image = document.createElement("div");
        image.className = "image";
        let mainPhoto = document.createElement("img");
        mainPhoto.setAttribute('src', post.photoLink);

        let like = document.createElement("div");
        like.className = "like icons";
        let iconOfLikes = document.createElement("img");
        iconOfLikes.src = 'img/not_like.png';

        let countLikes = document.createElement("div");
        countLikes.className = "count-likes";
        if(post.likes.length != 0)
            countLikes.innerHTML = post.likes.length;

        let backUnderPhoto = document.createElement("div");
        backUnderPhoto.className = "back-under-photo";
        let insideCellDescr = document.createElement("div");
        insideCellDescr.className = "inside-cell-description";
        insideCellDescr.innerHTML = post.hashtags.join(' ') + "<br>" + post.description;


        backUnderPhoto.appendChild(insideCellDescr);
        like.appendChild(iconOfLikes);
        image.appendChild(mainPhoto);
        icons.appendChild(edit);
        icons.appendChild(trash);
        Cell.appendChild(insideCellInform);
        Cell.appendChild(icons);
        Cell.appendChild(image);
        Cell.appendChild(like);
        Cell.appendChild(countLikes);
        Cell.appendChild(backUnderPhoto);
        photoTable.appendChild(Cell);
    };


    function formatDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    return {
        showPhotoPosts
    }

}());


function display(skip, top, filterConfig) {
    document.body.getElementsByClassName("photos-table")[0].innerHTML="";
    let array = mod.getPhotoPosts(skip, top, filterConfig);
    for (let i = 0; i < array.length; i++) {
        modul.showPhotoPosts(array[i]);
    }
}

function addPost(post,skip, top, filterConfig) {
    if(mod.addPhotoPost(post)){
        mod.addPhotoPost(post);
        display(skip, top, filterConfig);
    }
}

function removePost(id,skip, top, filterConfig) {
    if(mod.removePhotoPost(id.toString())){
        mod.removePhotoPost(id.toString());
        display(skip, top, filterConfig);
    }
}

function editPost(id,post,skip,top,filterConfig) {
    if(mod.editPhotoPost(id.toString(),post)){
        mod.editPhotoPost(id.toString(),post);
        display(skip,top,filterConfig);
    }
}
