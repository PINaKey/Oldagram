const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    },
];

const postsSectionEl = document.querySelector(".posts");
let postsHTML = "";

for (let i = 0; i < posts.length; i++) {
    postsHTML += `
    <div class="post">
        <div class="profile-container">
            <img class="post-avatar" src="${posts[i].avatar}" alt="Avatar of the user who shared the post." />
            <p class="name">
                ${posts[i].name}
                <span class="location">${posts[i].location}</span>
            </p>
        </div>
        <img class="post-img" src="${posts[i].post}" alt="An Oldagram post." />
        <img id="like" class="icons" src="images/icon-heart.png" />
        <img class="icons" src="images/icon-comment.png" />
        <img class="icons" src="images/icon-dm.png" />
        <p class="likes">${posts[i].likes} likes</p>
        <p class="comment">${posts[i].username} <span>${posts[i].comment}</span></p>
    </div>
    `;
}

postsSectionEl.innerHTML = postsHTML;
