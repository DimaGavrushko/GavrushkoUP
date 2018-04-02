let user = null;
let _skip = 0;
let _top = 10;
let _filterconfig = {
    author: null,
    createdAt: null,
    hashtags: null
};

let modul = (function () {

    let checkUser = function () {
        document.querySelector('header').innerText = "";
        let photoPortal = document.createElement("div");

        if (user) {
            photoPortal.className = "button-in-header name-sign";
            photoPortal.innerHTML = "PhotoPortal";
            document.querySelector('header').appendChild(photoPortal);
            let addPhoto = document.createElement("div");
            addPhoto.className = "button-in-header add-new-photo";
            addPhoto.innerHTML = "Add new photo";
            let exit = document.createElement("div");
            exit.className = "button-in-header exit";
            exit.innerHTML = "Exit";

            let name = document.createElement("div");
            name.className = "button-in-header user-name";
            name.innerHTML = user;

            document.querySelector('header').appendChild(addPhoto);
            document.querySelector('header').appendChild(exit);
            document.querySelector('header').appendChild(name);

            function clickAdd() {
                download.downloadEdit();
            }

            addPhoto.addEventListener('click', clickAdd);

            function clickExit() {
                user = null;
                checkUser();
                download.downloadMainPage();
            }

            exit.addEventListener('click', clickExit);

        }
        else {
            photoPortal.className = "button-in-header name";
            photoPortal.innerHTML = "PhotoPortal";
            document.querySelector('header').appendChild(photoPortal);
            let signIn = document.createElement("div");

            function clickOnSignIn() {
                download.downloadSignIn();
            }

            signIn.className = "button-in-header exit";
            signIn.innerHTML = "Sign in";

            document.querySelector('header').appendChild(signIn);
            signIn.addEventListener('click', clickOnSignIn);
        }
    }


    let showPhotoPosts = function (post) {
        let photoTable = document.querySelector(".photos-table");
        let isUser = (user === post.author);

        let Cell = document.createElement("div");
        Cell.className = "cell";
        Cell.setAttribute('id', post.id);

        let insideCellInform = document.createElement("div");
        insideCellInform.className = "inside-cell-inform";
        insideCellInform.innerHTML = post.author + "<br>" + formatDate(new Date(post.createdAt));

        let icons = document.createElement("div");
        icons.className = "icons";
        let trash = document.createElement("img");
        let edit = document.createElement("img");

        if (post.author === user) {
            trash.src = "./styles/img/trash.png";
            trash.innerHTML = "<br>";
            edit.src = "./styles/img/edit.png";
            icons.appendChild(edit);
            icons.appendChild(trash);

            function clickEditIcon() {
                download.downloadEdit(post);
            }

            edit.addEventListener('click', clickEditIcon);

            function clickTrash() {
                removePost(post.id, _skip, _top, _filterconfig);
            }

            trash.addEventListener('click', clickTrash);
        }
        let image = document.createElement("div");
        image.className = "image";
        let mainPhoto = document.createElement("img");
        mainPhoto.setAttribute('src', post.photoLink);


        let like = document.createElement("div");
        like.className = "like icons";
        let iconOfLikes = document.createElement("img");


        if (user) {
            function handleClickOnLike() {
                if (post.likes.indexOf(user) !== -1) {
                    iconOfLikes.src = "./styles/img/not_like.png";
                    post.likes.splice(post.likes.indexOf(user), 1);
                    if (post.likes.length > 0)
                        countLikes.innerHTML = post.likes.length;
                    else
                        countLikes.innerHTML = "";
                    localStorage.setItem('array',JSON.stringify(photoPosts));
                }
                else {
                    iconOfLikes.src = "./styles/img/like.png";
                    post.likes.push(user);
                    if (post.likes.length > 0)
                        countLikes.innerHTML = post.likes.length;
                    else
                        countLikes.innerHTML = "";
                    localStorage.setItem('array',JSON.stringify(photoPosts));
                }
            }
            iconOfLikes.addEventListener('click', handleClickOnLike);

            if (post.likes.indexOf(user) !== -1)
                iconOfLikes.src = "./styles/img/like.png";
            else
                iconOfLikes.src = "./styles/img/not_like.png";

        }
        else {
            iconOfLikes.src = "./styles/img/not_like.png";
        }


        let countLikes = document.createElement("div");
        countLikes.className = "count-likes";
        if (post.likes.length != 0)
            countLikes.innerHTML = post.likes.length;

        let backUnderPhoto = document.createElement("div");
        backUnderPhoto.className = "back-under-photo";
        let insideCellDescr = document.createElement("div");
        insideCellDescr.className = "inside-cell-description";
        insideCellDescr.innerHTML = post.hashtags.join(' ') + "<br>" + post.description;


        backUnderPhoto.appendChild(insideCellDescr);
        like.appendChild(iconOfLikes);
        image.appendChild(mainPhoto);
        Cell.appendChild(insideCellInform);
        if (user === post.author)
            Cell.appendChild(icons);
        Cell.appendChild(image);
        Cell.appendChild(like);
        Cell.appendChild(countLikes);
        Cell.appendChild(backUnderPhoto);
        photoTable.appendChild(Cell);
    };


    function setHashTagInit() {
        let hashTagsSet = new Set();
        for (let i = 0; i < photoPosts.length; i++) {
            for (let j = 0; j < photoPosts[i].hashtags.length; j++) {
                hashTagsSet.add(photoPosts[i].hashtags[j]);
            }
        }
        return hashTagsSet;
    }

    function setAuthorInit() {
        let authorSet = new Set();
        for (let i = 0; i < photoPosts.length; i++) {
            authorSet.add(photoPosts[i].author);
        }
        return authorSet;
    }


    return {
        showPhotoPosts,
        checkUser,
        setHashTagInit,
        setAuthorInit
    }

}());

function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

function display(skip, top, filterConfig) {
    document.body.getElementsByClassName("photos-table")[0].innerHTML = "";
    let array = mod.getPhotoPosts(skip, top, filterConfig);
    for (let i = 0; i < array.length; i++) {
        modul.showPhotoPosts(array[i]);
    }
}

function removePost(id, skip, top, filterConfig) {
    if (mod.removePhotoPost(id.toString())) {
        display(skip, top, filterConfig);
    }
}

function addAuthorSuggestions() {
    let authorSet = modul.setAuthorInit();
    let options = '';
    for (let item of authorSet) {
        options += '<option value=' + item + '>\n';
    }
    document.getElementById('author-suggestions').innerHTML = options;
    return options;
}

function addTagsSuggestions() {
    let hashTagsSet = modul.setHashTagInit();
    let options = '';
    for (let item of hashTagsSet) {
        options += '<option value=' + item + '>\n';
    }
    document.getElementById('tag-suggestions').innerHTML = options;
    return options;
}
readFromStorage();
download.downloadMainPage();