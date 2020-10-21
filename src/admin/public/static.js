
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


