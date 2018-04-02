let download = (function () {
    function deletePage() {
        while (document.body.children.length > 5) {
            document.body.removeChild(document.body.children[1]);
        }
    }

    let downloadSignIn = function () {
        deletePage();
        document.body.className = 'back-signin';
        let footer = document.getElementsByTagName('footer')[0];
        footer.className = "foot";

        let main_cell_signin = document.createElement('div');
        main_cell_signin.className = 'main-cell-signin';

        let incorrect_log_or_pass = document.createElement('div');
        incorrect_log_or_pass.className = 'incorrect-log-or-pass';

        let inside_main_cell = document.createElement('div');
        inside_main_cell.className = 'inside-main-cell';
        incorrect_log_or_pass.innerHTML = '';

        inside_main_cell.innerHTML = '<div class="label-signin">Sign in</div>\n' +
            '        <input type="text" class="text-box-signin" placeholder = "Login">\n' +
            '        <input type="password" class="text-box-signin" placeholder = "Password">\n' +
            '        <div class="button-signin">Sign in</div>\n' +
            '    </div>';

        main_cell_signin.appendChild(inside_main_cell);
        document.body.insertBefore(main_cell_signin, document.body.children[1]);
        inside_main_cell.insertBefore(incorrect_log_or_pass, inside_main_cell.children[3]);

        function clickSignIn() {
            let log = document.getElementsByClassName('text-box-signin')[0];
            let pas = document.getElementsByClassName('text-box-signin')[1];
            if (log.value === 'exymore' && pas.value !== "") {
                user = log.value;
                modul.checkUser();
                downloadMainPage();
            }
            else {
                incorrect_log_or_pass.innerHTML = 'Incorrect login or password';
            }

        }

        let button_signIn = document.getElementsByClassName('button-signin')[0];
        button_signIn.addEventListener('click', clickSignIn);

    };

    let downloadEdit = function (post = null) {
        let new_post = {
            id: null,
            description: null,
            createdAt: null,
            author: null,
            photoLink: null,
            hashtags: null,
            likes: null
        }

        deletePage();
        document.body.className = 'back-edit';
        let footer = document.getElementsByTagName('footer')[0];
        footer.className = 'footer-in-edit';

        let edit_photo = document.createElement('div');
        edit_photo.className = 'edit-photo';
        let date;
        if (post)
            edit_photo.innerHTML = post.author + '<br>' + formatDate(post.createdAt);
        else {
            date = new Date();
            edit_photo.innerHTML = user + '<br>' + formatDate(date);
        }

        let icon_down = document.createElement('div');
        icon_down.className = 'icon-download';

        let dropArea = document.createElement('div');
        dropArea.className = 'drag-drop';
        dropArea.innerHTML = '<p>Select the file and drag it to this area.</p>';

        let imgDropArea = document.createElement('img');
        if (post)
            imgDropArea.setAttribute('src', post.photoLink);

        icon_down.appendChild(dropArea);
        icon_down.appendChild(imgDropArea);
        edit_photo.appendChild(icon_down);

        let incorrect_photo = document.createElement('div');
        incorrect_photo.className = 'incorrect-inform';
        icon_down.appendChild(incorrect_photo);

        let incorrect_inform = document.createElement('div');
        incorrect_inform.className = 'incorrect-inform';

        dropArea.addEventListener("dragover", function (event) {
            event.preventDefault();
        }, false);

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

        let edit_inform = document.createElement('div');
        edit_inform.className = 'edit-inform';

        let edit_descr = document.createElement('div');
        edit_descr.className = 'edit-descr';

        let edit_hash = document.createElement('div');
        edit_hash.className = 'edit-hash';
        if (post) {
            edit_hash.innerHTML = ' Hash-tags\n' + '<textarea class="description" id = "hash">' + post.hashtags.join(' ') + '</textarea>';
            edit_descr.innerHTML = 'Description\n' + '<textarea class="description" id = "descr">' + post.description + '</textarea>';

        }
        else {
            edit_hash.innerHTML = ' Hash-tags\n' + '<textarea class="description" id = "hash"></textarea>';
            edit_descr.innerHTML = 'Description\n' + '<textarea class="description" id = "descr"></textarea>';
        }

        let button_done = document.createElement('div');
        button_done.className = 'button-done';
        button_done.innerHTML = 'Done';

        edit_inform.appendChild(edit_descr);
        edit_inform.appendChild(edit_hash);
        edit_inform.appendChild(button_done);
        edit_inform.appendChild(incorrect_inform);
        document.body.insertBefore(edit_photo, document.body.children[1]);
        document.body.insertBefore(edit_inform, document.body.children[2]);

        descr = document.getElementById('descr');
        hash_tags = document.getElementById('hash');

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
                    downloadMainPage();
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
                    downloadMainPage();
                }
                else {
                    incorrect_inform.innerHTML = 'Incorrect description or hash-tags';
                }
            }
        }

        button_done.addEventListener('click', clickDone);
    };

    let downloadMainPage = function () {
        _skip = 0;
        _top = 10;
        _filterconfig = {
            author: null,
            createdAt: null,
            hashtags: null
        };
        deletePage();
        document.body.className = 'back';
        let footer = document.getElementsByTagName('footer')[0];
        footer.className = '';
        let searchLine = document.createElement("div");
        searchLine.className = "search-line";
        searchLine.innerHTML = 'Filtered by:\n' +
            '    <div class="checkbox"><input type="checkbox" id = "checkboxAuthor">Author\n' +
            '        <input type="text" class="text-box" list="author-suggestions" id = "textAuthor"><datalist id="author-suggestions"></datalist>\n' +
            '    </div>\n' +
            '    <div class="checkbox"><input type="checkbox" id = "checkboxDate">Date\n' +
            '        <input type="text" class="text-box" id = "textDate" placeholder = "yyyy-mm-dd"></div>\n' +
            '    <div class="checkbox"><input type="checkbox" id = "checkboxHash">Hash-Tags\n' +
            '        <input type="text" class="text-box" list="tag-suggestions" id = "textHash"><datalist id="tag-suggestions"></datalist>\n' +
            '    </div>\n' +
            '    <div class="checkbox" id = "buttonSearch"><img src="./styles/img/search.png" height="25" width="25" align="center">Search...</div>\n' +
            '\n' +
            '</div>';

        document.body.insertBefore(searchLine, document.body.children[1]);
        let checkboxAuthor = document.getElementById('checkboxAuthor');
        let textAuthor = document.getElementById('textAuthor');
        let checkboxDate = document.getElementById('checkboxDate');
        let textDate = document.getElementById('textDate');
        let checkboxHash = document.getElementById('checkboxHash');
        let textHash = document.getElementById('textHash');

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

        let buttonSearch = document.getElementById('buttonSearch');
        buttonSearch.addEventListener('click', clickSearch);

        let photoTable = document.createElement("div");
        photoTable.className = "photos-table";


        let buttonLoad = document.createElement("div");
        buttonLoad.className = "button-load";
        buttonLoad.innerHTML = 'Load more';


        document.body.insertBefore(photoTable, document.body.children[2]);
        document.body.insertBefore(buttonLoad, document.body.children[3]);

        function clickLoad() {
            _top += 10;
            display(_skip, _top, _filterconfig);
        }

        buttonLoad.addEventListener('click', clickLoad);
        modul.checkUser();
        addTagsSuggestions();
        addAuthorSuggestions();
        display(_skip, _top, _filterconfig);
    };

    return{
        downloadSignIn,
        downloadEdit,
        downloadMainPage
    }

}());