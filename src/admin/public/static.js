function fetchPosts() {
    return fetch('/admin/api/posts')
        .then(response => response.json())
        .then(posts => posts)
        .catch(error => console.log("Error for fetchPosts", error));
}

function createDltBtn() {
    const $deleteButton = document.createElement('button');
    $deleteButton.textContent = "Delete";
    $deleteButton.classList.add('delete-button');
    return $deleteButton;
}

function renderPosts(posts) {
    const $posts = document.querySelector("#postsList");
    posts.forEach(post => {
        const $post = document.createElement('li');
        $post.textContent = post.title;
        $post.dataset.postId = post.id;

        $posts.appendChild($post);
        $post.appendChild(createDltBtn());
    })

    $posts.addEventListener("click", event => {
        if (event.target.classList.contains("delete-button")) {
            $posts.removeChild(event.target.parentNode)
        }
    })
}



function init() {
    fetchPosts().then(renderPosts);
}

init();