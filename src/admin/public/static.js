let counter = 0;
fetch("http://localhost:3000/admin/api/posts")
  .then((response) => response.json())
  .then((data) => {
    data.posts.map((post) => {
      const div = document.querySelector(".posts");
      div.innerHTML += `
    <div class="post">
    <h3>${post.title} </h3>
    <p>${post.content} </p>
    <div class="editDeleteForm">
    <form class="formDelete" method="post" action="/admin/api/delete">
    <input type='submit' name='submit' value='Delete' id='${post.id}' class="buttonDelete">
    </form>
    <button class="buttonEdit">Edit</button>
    </div>
    <form id='${post.id}' class="editPost" method="post" action="/admin/api/edit" onsubmit="return false">
    <label for="title">Edit title</label>
    <input type="text" name="title2">
    <label for="content">Edit content</label>
    <input type="text" name="content2">
    <label></label>
    <input type="submit" value="Change" class="editSubmitButton">
    </form>
    </div>
    `;
    });
  });



let form = document.querySelector(".addNewPost");
form.style.display = "none";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const content = e.target.content.value;

  fetch(`/admin/api/submit?title=${title}&content=${content}`)
    .then((response) => response.text())
    .then((response) => {
      console.log(response);
    });
  form.reset();
});

window.addEventListener("load", (event) => {
  //delete post
  const formDelete = document.querySelectorAll(".formDelete");
  const buttonDelete = document.querySelectorAll(".buttonDelete");
  for (but of buttonDelete) {
    let id = but.getAttribute("id");
    but.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
     
      fetch(`/admin/api/delete:id=${id}`, { method: "DELETE" })
        .then((response) => response.text())
        .then((response) => {
          console.log(response);
        });
    });
  }

  //edit/update post
  const buttonEdit = document.querySelectorAll(".buttonEdit");
  const editPost = document.querySelectorAll(".editPost");
  for(let post of editPost){
    post.style.display = "none";
  }
  //toggle - hide and show the form
  for (var i = 0; i < buttonEdit.length; i++) {
    buttonEdit[i].addEventListener("click", function (e) {
      if (this.parentNode.nextElementSibling.style.display === 'none') {
        this.parentNode.nextElementSibling.style.display = 'block';
      } else {
        this.parentNode.nextElementSibling.style.display = 'none';
      }
    });
  }

  document.querySelectorAll('.editPost').forEach(post => {
    let id = post.getAttribute("id");
    post.addEventListener('submit', function(e){
      e.preventDefault;
     
      const title = e.target.title2.value;
      const content = e.target.content2.value;
      if(title.length == 0 || content.length == 0){
        console.log('ups');
        return false;
      }else{
        fetch(`/admin/api/edit:id=${id}?title=${title}&content=${content}`, { method: "PUT" })
        .then((response) => response.text())
        .then((response) => {
          console.log(response);
        });
      }
 
    })
  })
});

const buttonNewPost = document.querySelector(".buttonNewPost");
buttonNewPost.addEventListener("click", function () {
  //toggle - hide and show the form
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
