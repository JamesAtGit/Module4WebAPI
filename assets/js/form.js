document.querySelector('#blog-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (!username || !title || !content) {
    alert('All fields are required.');
    return;
  }

  const newPost = { username, title, content };
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  posts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(posts));

  window.location.href = 'blog.html';
});
