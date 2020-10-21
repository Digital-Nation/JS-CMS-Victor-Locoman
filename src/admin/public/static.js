<<<<<<< HEAD

let delBtn = document.getElementById('delete-post');
let editBtn = document.getElementById('edit-post');
let newPostBtn = document.getElementById('new-post-btn');
let containerPost = document.getElementById('container-post');
let arr=[]

function removeElement() {
		if(confirm('This will delete your post. Are you sure?')){
			this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
		}
}

function addElement(){}



function addInput(){
	let newInput = document.createElement('textarea');
		document.body.appendChild(newInput);
		newInput.classList.add('container-post');

	let submitBtn = document.createElement('div');
		document.body.appendChild(submitBtn);
		submitBtn.innerHTML = 'Submit';
		submitBtn.classList.add('container-post', 'edit-post');
		submitBtn.setAttribute("id", "submit-btn")

	submitBtn.addEventListener("click", addElement);

function addElement() {
		
		let div = document.createElement('div');
			document.body.appendChild(div);
			div.classList.add('container-post');
				let i=0;
				arr.push(i);
			div.setAttribute("id", arr.length);

		
		let post = document.createElement('div');
			post.innerHTML = newInput.value;
			div.appendChild(post);
			post.classList.add('post');
			
			console.log('arr length:', arr.length);

		let editAndDeleteContainer = document.createElement('div');
			div.appendChild(editAndDeleteContainer);
			editAndDeleteContainer.classList.add('edit-and-delete-container');

		let editPost = document.createElement('div');
			editAndDeleteContainer.appendChild(editPost);
			editPost.innerHTML = 'Edit';
			editPost.classList.add('edit-post');
			editPost.setAttribute("id", arr.length);

		let deletePost = document.createElement('div');
			editAndDeleteContainer.appendChild(deletePost);
			deletePost.innerHTML = 'Delete';
			deletePost.classList.add('delete-post');

		newInput.remove();
		submitBtn.remove();

	deletePost.addEventListener("click", removeElement);
	editPost.addEventListener("click", editElement);
	}
}

function editElement() {
		let newInput = document.createElement('textarea');
		document.body.appendChild(newInput);
		newInput.classList.add('container-post');
		
		let postId =this.id;
		console.log(postId);
		let editedPost = document.getElementById (postId)
		let text = editedPost.textContent
		console.log(text)
		newInput.innerHTML = text;

		let submitBtn = document.createElement('div');
		document.body.appendChild(submitBtn);
		submitBtn.innerHTML = 'Submit';
		submitBtn.classList.add('container-post', 'edit-post');
		submitBtn.setAttribute("id", "submit-btn");
		editedPost.remove();
		
		submitBtn.addEventListener("click", addElement);
		


	function addElement() {
		
		let div = document.createElement('div');
			document.body.appendChild(div);
			div.classList.add('container-post');
				let i=0;
				arr.push(i);
			div.setAttribute("id", arr.length);

		
		let post = document.createElement('div');
			post.innerHTML = newInput.value;
			div.appendChild(post);
			post.classList.add('post');
			
			console.log('arr length:', arr.length);

		let editAndDeleteContainer = document.createElement('div');
			div.appendChild(editAndDeleteContainer);
			editAndDeleteContainer.classList.add('edit-and-delete-container');

		let editPost = document.createElement('div');
			editAndDeleteContainer.appendChild(editPost);
			editPost.innerHTML = 'Edit';
			editPost.classList.add('edit-post');
			editPost.setAttribute("id", arr.length);

		let deletePost = document.createElement('div');
			editAndDeleteContainer.appendChild(deletePost);
			deletePost.innerHTML = 'Delete';
			deletePost.classList.add('delete-post');

		newInput.remove();
		submitBtn.remove();

	deletePost.addEventListener("click", removeElement);
	editPost.addEventListener("click", editElement);
	}

}

delBtn.addEventListener("click", removeElement);
editBtn.addEventListener("click", editElement);
newPostBtn.addEventListener("click", addInput);


=======
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
>>>>>>> acb948e66331317a3d2ef953e01b8ce46f476e3a
