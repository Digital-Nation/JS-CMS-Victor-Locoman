function createDeleteButton() {
    const $deleteButton = document.createElement('button');
    $deleteButton.textContent = 'Delete';
    $deleteButton.classList.add('delete-button');
    return $deleteButton;
}


//get and rander post
function fetchPosts() {
    return fetch('/admin/api/posts')
        .then(response => response.json())
        .then(posts => posts)
        .catch(error => console.error('Error for fetchPosts', error));
}


function renderPosts(posts) {
    const $posts = document.querySelector('#posts-list');
    posts.forEach(post => {
        const $post = document.createElement('li');
        $post.textContent = post.title;
        $post.dataset.postId = post._id;
        $post.appendChild(createDeleteButton());
        $posts.appendChild($post);
    });
}


function initEvents() {
    const $posts = document.querySelector('#posts-list');
    $posts.addEventListener('click', event => {
        // Handle delete
        if (event.target.classList.contains('delete-button')) {
            const postId = event.target.parentNode.dataset.postId;
            fetch(`/admin/api/posts/${postId}`, { method: 'DELETE' })
                .then(() => $posts.removeChild(event.target.parentNode))
                .catch(error => console.error('Error on delete', error));
        }


//delete post
function handleDelete() {
    const == document, querySelector('#posts-list');
    $posts.addEventListener('click', event => {
        if (event.targhet.classList.contains('delete-button')) {
            //call DELETE/admin/api/posta/:postId
            console.log('remove post witg id,', event.target.parentNode.dataset.postId);
            $posts.removeChild(event.target.parentNode);
        }
    });
}


function init() {
    fetchPost().then(renderPost);
    handleDelete();

}

init();
