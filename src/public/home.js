import {data} from '../db'

let test = document.getElementById('test');
test.innerHTML = 'test';
let $ =document.querySelectorAll;

$( `#scrollTo${post.id}` ).click(function() {
    $( `#${post.id}` ).scroll();
  });

//   <a href="/posts/<%= post.slug %>">