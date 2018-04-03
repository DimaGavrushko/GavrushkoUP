var tmpPosts = [
    {
        id: '1',
        description: 'Морозный Петербург с высоты птичьего полёта.',
        createdAt: new Date('2018-03-13'),
        author: 'novostispb',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/c41039ee640e3c99d5af6fe861585fa7/5B35662A/t51.2885-15/s1080x1080/e35/28753987_190312381577199_47125016826871808_n.jpg',
        hashtags: ['#arcitecture', '#city','#buildings'],
        likes: ['unknown', 'unknown']
    },
    {
        id: '2',
        description: 'Москва стала самым популярным регионом России среди иностранцев',
        createdAt: new Date('2018-03-12'),
        author: 'i_love_msk',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/a4504d5d2ed8b1cbae14e3aa7990525c/5B37B5C6/t51.2885-15/e35/28434498_611800972489341_7036478275752820736_n.jpg',
        hashtags: ['#moscowcity', '#моястолица'],
        likes: ['unknown', 'unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown']
    },
    {
        id: '3',
        description: 'В начале апреля на территории Парка Победы заработает танцплощадка под открытым небом, на которой профессиональные танцоры будут проводить занятия для всех желающих.',
        createdAt: new Date('2018-03-10'),
        author: 'i_love_msk',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/fc5db7c16c3f3d30f62603f2ea5b5778/5B444502/t51.2885-15/e35/28433266_790657854451334_6607685259364401152_n.jpg',
        hashtags: ['#msk', '#moscow','#russia'],
        likes: ['unknown', 'unknown']
    },
    {
        id: '4',
        description: 'Москва заняла 1 е место в рейтинге российских регионов по качеству жизни.',
        createdAt: new Date('2018-03-07'),
        author: 'i_love_msk',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/fe3394ab30605a6a9ba5dc82fe293cb5/5B2D2768/t51.2885-15/e35/28435079_151218782218501_8228867278519664640_n.jpg',
        hashtags: ['#msk', '#moskva','#moskow'],
        likes: ['unknown', 'unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown']
    },
    {
        id: '5',
        description: 'Lookin up',
        createdAt: new Date('2018-03-12'),
        author: 'snoopdogg',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/2ee7aa75818b6838d41daad3bd3db319/5B2F5389/t51.2885-15/e35/28432715_345740675935898_6393319902567989248_n.jpg',
        hashtags: ['#kushy', '#runnynose'],
        likes: ['unknown', 'unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown']
    },
    {
        id: '6',
        description: 'With Ilon',
        createdAt: new Date('2018-03-11'),
        author: 'snoopdogg',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/63c0aa60bf66ae2e19fa291e2e343265/5B314923/t51.2885-15/e35/29087592_228397564388037_2297689473363738624_n.jpg',
        hashtags: ['#change', '#the','#future'],
        likes: ['unknown', 'unknown','unknown','unknown','unknown','unknown','unknown','unknown']
    },
    {
        id: '7',
        description: 'Father’s first',
        createdAt: new Date('2018-03-02'),
        author: 'snoopdogg',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/b81f5228c3dcbc193e54c7b8322ddbfd/5B4304EA/t51.2885-15/e35/28151075_158019448232423_3715546920387608576_n.jpg',
        hashtags: ['#Fatherfirst', '#snoopdogg'],
        likes: ['unknown', 'unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown']
    },
    {
        id: '8',
        description: 'EEEEEEEEEEEEeeeeeeeeeeeeeeeeee!',
        createdAt: new Date('2018-03-04'),
        author: 'snoopdogg',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/4895c44756bfcb9d68d294af11b68f2c/5B488986/t51.2885-15/e35/28751147_752083074997759_326382287174238208_n.jpg',
        hashtags: ['#snoop'],
        likes: ['unknown', 'unknown']
    },
    {
        id: '9',
        description: 'Photo by @kutovakika. A tiny forest springs out of Veronika’s (@kutovakika) hand. “Sometimes it’s the small landscapes we see every day that are the most beloved,” she writes. ',
        createdAt: new Date('2018-03-06'),
        author: 'instagram',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/d01303326627bb38101f231ae895dd37/5B327218/t51.2885-15/e35/28156491_297632824101208_7765735861160771584_n.jpg',
        hashtags: ['#WHPlandscape'],
        likes: []
    },
    {
        id: '10',
        description: 'Featured photo by @zrodyr. Get outside and explore for our Weekend Hashtag Project: #WHPlandscape.\n' +
        'Inject energy into an otherwise quiet moment. Capture a friend leaping in the air, or get low to include a patch of flowers in the foreground.',
        createdAt: new Date('2018-03-03'),
        author: 'instagram',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/4ccec7ee5c8732cf34032e50c59dae9a/5B325C77/t51.2885-15/e35/28151737_154910251887212_5250968772038098944_n.jpg',
        hashtags: ['#WHPlandscape'],
        likes: ['unknown', 'unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown']
    },
    {
        id: '11',
        description: 'Featured photo by @mambo926\n' +
        'Weekend Hashtag Project: #WHPtwinning\n' +
        'Ever looked up to realize you’re coincidentally wearing the same outfit as your BFF or co-worker? This weekend, the goal is to capture moments of shared likeness that make you smile.',
        createdAt: new Date('2018-02-24'),
        author: 'instagram',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/ac44937ff67194d708dd752691272864/5B44725C/t51.2885-15/e35/27892932_583607872031361_2532875212408487936_n.jpg',
        hashtags: ['#likeforlike', '#followme'],
        likes: ['unknown', 'unknown']
    },
    {
        id: '12',
        description: 'Photo by @tessledeux\n' +
        'Sixteen-year-old Tess Ledeux (@tessledeux) still remembers her first backcountry ski experience in her hometown in the French Alps.',
        createdAt: new Date('2018-02-25'),
        author: 'instagram',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/ec966471c80dcc0908067f82f02b0749/5B2A78B7/t51.2885-15/e35/28157684_565061453855993_4607174365736337408_n.jpg',
        hashtags: ['#likeforlike', '#followme'],
        likes: ['unknown', 'unknown']
    },
    {
        id: '13',
        description: 'Photo by @simona_br_photography\n' +
        'Looks like we’ve found the end of the 🌈. This welcome surprise pierced through the sky for #WHPlandscape.\n' +
        'Follow along as we feature some of our favorite submissions to last weekend’s hashtag project.',
        createdAt: new Date('2018-03-06'),
        author: 'instagram',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/df313fdb6a9df246b1dd6995c8487aea/5B298852/t51.2885-15/e35/28434547_1113614052108663_1973801956598087680_n.jpg',
        hashtags: ['#WHPlandscape'],
        likes: ['unknown', 'unknown','unknown','unknown','unknown']
    },
    {
        id: '14',
        description: 'Photo by @smilewithjeryl\n' +
        'A happy coincidence of #WHPtwinning in a Tokyo intersection.\n' +
        'Follow along to see more of our favorites from last weekend’s hashtag project.',
        createdAt: new Date('2018-02-27'),
        author: 'instagram',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/a23e7d7a2f5506ebcdde27b52033a89f/5B30F49E/t51.2885-15/e35/27894188_150088839019069_1461789297400086528_n.jpg',
        hashtags: ['#WHPtwinning'],
        likes: ['unknown', 'unknown']
    },
    {
        id: '15',
        description: 'great feed!',
        createdAt: new Date('2018-03-15'),
        author: 'exymore',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/6b0aad647d537d6bb5a7f59a53a41466/5B45E196/t51.2885-15/e35/23279797_1658279954223851_8744033156677500928_n.jpg',
        hashtags: ['#vscorussia', '#bestvscobelarus', '#instagramrussia', '#instasng'],
        likes: ['unknown', 'unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown','unknown']
    },
    {
        id: '16',
        description: 'Самое концептуальное фото',
        createdAt: new Date('2018-03-02'),
        author: 'exymore',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/32b9529ac0a442da6c7857d05bdd03bf/5B467532/t51.2885-15/e35/25038638_948632385288149_6085445857832861696_n.jpg',
        hashtags: ['#like', '#followme'],
        likes: ['unknown', 'unknown']
    },
    {
        id: '17',
        description: 'howdy yal',
        createdAt: new Date('2018-04-07'),
        author: 'exymore',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/a9aca956f9392f11f3463f10bd3c5ee7/5B2DAD26/t51.2885-15/e35/28433235_2012800552266665_5152045191196049408_n.jpg',
        hashtags: ['#vscorussia', '#bestvscobelarus', '#instagramrussia', '#instasng'],
        likes: ['unknown', 'unknown','exymore']
    },
    {
        id: '18',
        description: 'Смотри: впереди над тобою смеясь\n' +
        'гордо годы твои идут!',
        createdAt: new Date('2018-02-28'),
        author: 'exymore',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/ac86b6e083837dd467b46b88c01ba40c/5B4C491A/t51.2885-15/e35/23099003_1917895798531610_2104949848133337088_n.jpg',
        hashtags: ['#likeforlike', '#followme'],
        likes: ['unknown', 'unknown','exymore']
    },
    {
        id: '19',
        description: 'howdy yal',
        createdAt: new Date('2018-02-22'),
        author: 'exymore',
        photoLink: 'https://instagram.fbud2-1.fna.fbcdn.net/vp/493fe73e5930865f6dda62f9aff6e686/5B42B6FB/t51.2885-15/e35/21690614_1262363057196785_6024307835892924416_n.jpg',
        hashtags: ['#minsk', '#belarus'],
        likes: ['unknown', 'unknown','unknown,','unknown','unknown','unknown','unknown','unknown','exymore']
    },
    {
        id: '20',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23'),
        author: 'Иванов',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#like', '#followme'],
        likes: ['unknown', 'unknown','exymore']
    },
    {
        id: '21',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23'),
        author: 'Иванов',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#like', '#followme'],
        likes: ['unknown', 'unknown','exymore']
    }

];

function serializable() {
    let serialObj;
    localStorage.setItem('array',JSON.stringify(photoPosts));
}

let photoPosts = [];
function readFromStorage() {
    photoPosts = JSON.parse(localStorage.getItem('array'));
    if(photoPosts === null)
        photoPosts = tmpPosts;
}

let mod = (function () {

    function compareByDate(a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
    };

    let getPhotoPosts = function (skip = 0, top = 10, filterConfig) {

        photoPosts.sort(compareByDate);
        let posts = photoPosts;

        if (typeof (skip) !== 'number' || typeof (top) !== 'number')
            return [];


        if (filterConfig) {
            if (filterConfig.author && (typeof(filterConfig.author) !== 'string' || filterConfig.author.length === 0) ||
                (filterConfig.createdAt && filterConfig.createdAt == 'Invalid Date') ||
                (filterConfig.hashtags && filterConfig.hashtags.every(item => item[0] !== '#')))
                return [];

            if (filterConfig.author)
                posts = posts.filter(item => item.author === filterConfig.author);


            if (filterConfig.createdAt)
                posts = posts.filter(posts => Date.parse(posts.createdAt) === Date.parse(filterConfig.createdAt));


            if (filterConfig.hashtags) {
                posts = posts.filter(function (post) {
                    if (typeof(post.hashtags) === 'undefined') {
                        return false;
                    }
                    return filterConfig.hashtags.every(function (item) {
                        return post.hashtags.includes(item);
                    })
                })
            }
        }


        posts = posts.slice(skip, skip + top);
        return posts;
    };

    let getPhotoPost = function (id) {
        return photoPosts[photoPosts.findIndex(post => post.id === id)];
    };


    let validatePhotoPost = function (post,flag = false) {
        if(!flag) {
            if (post.id && photoPosts.findIndex(photoPost => photoPost.id === post.id) === -1 && typeof(post.id) === 'string')
                if (post.description && typeof(post.description) === 'string' && post.description.length > 0 && post.description.length < 200)
                    if (post.createdAt && post.createdAt instanceof Date)
                        if (post.author && typeof(post.author) === 'string' && post.author.length !== 0)
                            if (post.photoLink && typeof(post.photoLink) === 'string' && post.photoLink.length !== 0)
                                if (post.hashtags === []|| (post.hashtags && post.hashtags.every(item => item[0] === '#')))
                                    if (post.likes === [] || (post.likes && post.likes.every(item => typeof(item) === 'string'))) {
                                        return true;
                                    }

        }
        else{
           if((post.description && typeof(post.description) === 'string' && post.description.length > 0 && post.description.length < 200))
                if((post.photoLink && typeof(post.photoLink) === 'string' && post.photoLink.length !== 0))
                    if (post.hashtags === [] || (post.hashtags && post.hashtags.every(item => item[0] === '#')))
                        if (post.likes === [] || (post.likes && post.likes.every(item => typeof(item) === 'string'))) {
                            return true;
                        }
        }
        return false;
    };

    let addPhotoPost = function (post) {
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            photoPosts.sort(compareByDate);
            return true;
        }
        return false;
    };

    let editPhotoPost = function (id, post) {
        let changedPost = getPhotoPost(id.toString());
        if(changedPost && !post.id && !post.author && !post.createdAt) {
            if (validatePhotoPost(post, true)) {
                if (post.description)
                    changedPost.description = post.description;
                if (post.photoLink)
                    changedPost.photoLink = post.photoLink;
                if (post.hashtags)
                    changedPost.hashtags = post.hashtags;

                photoPosts[photoPosts.findIndex(post => post.id === id)] = changedPost;
                return true;
            }
        }
        return false;
    };


    let removePhotoPost = function (id) {
        let index = photoPosts.findIndex(item => item.id === id);
        if (index !== -1) {
            photoPosts.splice(index, 1);
            return true;
        }
        return false;
    };

    return {
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    }
}());

