let events = (function () {

    let clickAddButton = function (addPhoto) {
        function clickAdd() {
            download.downloadEdit();
        }
        addPhoto.addEventListener('click', clickAdd);
    };

    let clickExitButton = function (exit) {
        function clickExit() {
            user = null;
            modul.checkUser();
            download.downloadMainPage();
        }
        exit.addEventListener('click', clickExit);
    };

    let clickSignInButton = function (signIn) {
        function clickOnSignIn() {
            download.downloadSignIn();
        }
        signIn.addEventListener('click', clickOnSignIn);
    };

    let clickEditIcon = function (edit,post) {
        function clickEditIcon() {
            download.downloadEdit(post);
        }
        edit.addEventListener('click', clickEditIcon);
    };

    let clickTrashIcon = function (trash,post) {
        function clickTrash() {
            removePost(post.id, _skip, _top, _filterconfig);
        }
        trash.addEventListener('click', clickTrash);
    };

    let clickLikeButton = function (iconOfLikes,post,countLikes) {
        function handleClickOnLike() {
            if (post.likes.indexOf(user) !== -1) {
                iconOfLikes.src = "./styles/img/not_like.png";
                post.likes.splice(post.likes.indexOf(user), 1);
                if (post.likes.length > 0)
                    countLikes.innerHTML = post.likes.length;
                else
                    countLikes.innerHTML = "";
                localStorage.setItem('array', JSON.stringify(photoPosts));
            }
            else {
                iconOfLikes.src = "./styles/img/like.png";
                post.likes.push(user);
                if (post.likes.length > 0)
                    countLikes.innerHTML = post.likes.length;
                else
                    countLikes.innerHTML = "";
                localStorage.setItem('array', JSON.stringify(photoPosts));
            }
        }

        iconOfLikes.addEventListener('click', handleClickOnLike);

    };

    let clickLogIn = function (button_signIn,incorrect_log_or_pass) {
        function clickSignIn() {
            let log = document.getElementsByClassName('text-box-signin')[0];
            let pas = document.getElementsByClassName('text-box-signin')[1];
            if (log.value === 'exymore' && pas.value !== "") {
                user = log.value;
                modul.checkUser();
                download.downloadMainPage();
            }
            else {
                incorrect_log_or_pass.innerHTML = 'Incorrect login or password';
            }

        }
        button_signIn.addEventListener('click', clickSignIn);
    };

    let dragAndDrop = function (dropArea,incorrect_photo,imgDropArea) {
        function validFileType(file) {
            let fileTypes = [
                'image/jpeg',
                'image/img',
                'image/png',
                'image/jpg'
            ];

            for (let i = 0; i < fileTypes.length; i++) {
                if (file.type === fileTypes[i]) {
                    return true;
                }
            }
            return false;
        }

        dropArea.addEventListener("dragover", function (event) {
            event.preventDefault();
        }, false);

        dropArea.addEventListener("drop", function (event) {
            event.preventDefault();
            let files = event.dataTransfer.files;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onloadend = function () {
                if (validFileType(files[0])) {
                    incorrect_photo.innerHTML = '';
                    imgDropArea.setAttribute('src', reader.result);
                }
                else
                    incorrect_photo.innerHTML = 'Incorrect type of photo';

            };
        }, false);

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false)
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false)
        })

        function highlight(e) {
            dropArea.classList.add('highlight')
        }

        function unhighlight(e) {
            dropArea.classList.remove('highlight')
        }
    };

    let clickDoneButton = function (post,new_post,imgDropArea,incorrect_inform,date,button_done) {
        function generateUniqId() {
            let ID = 1;
            for (let i = 0; i < photoPosts.length; i++) {
                for (let j = 0; j < photoPosts.length; j++) {
                    if (photoPosts[j].id == ID) {
                        ID++;
                        break;
                    }

                }
            }
            return ID.toString();
        }

        function clickDone() {
            if (post !== null) {
                new_post.description = descr.value;
                if (hash_tags.value !== '') {
                    let tmp = hash_tags.value.split(' ');
                    new_post.hashtags = tmp;
                }
                else
                    new_post.hashtags = [];

                new_post.photoLink = imgDropArea.getAttribute('src');
                new_post.likes = post.likes;
                if (mod.editPhotoPost(post.id.toString(), new_post)) {
                    localStorage.setItem('array',JSON.stringify(photoPosts));
                    download.downloadMainPage();
                }
                else {
                    incorrect_inform.innerHTML = 'Incorrect description or hash-tags';
                }
            }
            else {
                new_post.id = generateUniqId();
                new_post.author = user;
                new_post.createdAt = date;
                new_post.photoLink = imgDropArea.getAttribute('src');
                new_post.description = descr.value;
                if (hash_tags.value !== '') {
                    let tmp = hash_tags.value.split(' ');
                    new_post.hashtags = tmp;
                }
                else
                    new_post.hashtags = [];

                new_post.likes = [];
                if (mod.addPhotoPost(new_post)) {
                    localStorage.setItem('array',JSON.stringify(photoPosts));
                    download.downloadMainPage();
                }
                else {
                    incorrect_inform.innerHTML = 'Incorrect description or hash-tags';
                }
            }
        }

        button_done.addEventListener('click', clickDone);
    };

    let clickSearchButton = function (checkboxAuthor,textAuthor,checkboxDate,textDate,checkboxHash,textHash,buttonSearch) {
        function clickSearch() {
            _filterconfig = {
                author: null,
                createdAt: null,
                hashtags: null
            };

            if (checkboxAuthor.checked === true && textAuthor.value !== "") {
                _filterconfig.author = textAuthor.value;
                _top = 10;
            }

            if (checkboxDate.checked === true && textDate.value !== "") {
                _filterconfig.createdAt = new Date(textDate.value);
                _top = 10;
            }

            if (checkboxHash.checked === true && textHash.value !== "") {
                let tmp = textHash.value.split(' ');
                _filterconfig.hashtags = tmp;
                _top = 10;
            }

            display(_skip, _top, _filterconfig);
        }
        buttonSearch.addEventListener('click', clickSearch);
    };

    let clickLoadButton = function (buttonLoad) {
        function clickLoad() {
            _top += 10;
            display(_skip, _top, _filterconfig);
        }
        buttonLoad.addEventListener('click', clickLoad);
    };

    return {
        clickAddButton,
        clickExitButton,
        clickSignInButton,
        clickEditIcon,
        clickTrashIcon,
        clickLikeButton,
        clickLogIn,
        dragAndDrop,
        clickDoneButton,
        clickSearchButton,
        clickLoadButton
    }

}());