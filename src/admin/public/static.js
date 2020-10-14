// @todo: Adaugă o metodă de a adăuga articole noi
// @todo: Afișează mai multe informații despre un articol
// @todo: Adaugă opțiunea de a edita articolele
// @todo: Transformă pagina într-o operă de artă

function createDeleteButton() {
    const $deleteButton = document.createElement('button');
    $deleteButton.textContent = 'Șterge';
    $deleteButton.classList.add('delete-button');
    return $deleteButton;
}

// get and render posts
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
        $post.dataset.postId = post.id;
        $post.appendChild(createDeleteButton());
        $posts.appendChild($post);
    });
}

function initEvents() {
    const $posts = document.querySelector('#posts-list');
    $posts.addEventListener('click', event => {
        // Handle delete
        if (event.target.classList.contains('delete-button')) {
            // @todo: Șterge postarea și din baza de date
            // call DELETE /admin/api/posts/:postId
            // console.log('remove post with id', event.target.parentNode.dataset.postId);
            $posts.removeChild(event.target.parentNode);
        }

        // Handle update
        // @todo: Adaugă logica pentru update
    });
}
function init() {
    fetchPosts().then(renderPosts);
    initEvents();
}

init();
