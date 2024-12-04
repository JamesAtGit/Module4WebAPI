
document.addEventListener('DOMContentLoaded', function () {
  const postsContainer = document.querySelector('#posts-container');
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  if (posts.length === 0) {
    postsContainer.innerHTML = '<p>No blog posts yet.</p>';
    return;
  }

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p><strong>Author:</strong> ${post.username}</p>
    `;

    postsContainer.appendChild(postElement);
  });
});

document.querySelector('#toggle-theme').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

document.querySelector('#back-button').addEventListener('click', function () {
  window.location.href = 'index.html';
});
