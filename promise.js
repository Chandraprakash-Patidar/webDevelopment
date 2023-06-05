
 const posts = [{ title: "Post1", createdAt: new Date() }, { title: "Post2", createdAt: new Date() }];
const user = {
  userName: "yash",
  lastActivityTime: new Date(),
};

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date().getTime();
      resolve(user.lastActivityTime);
    }, 1000);
  });
}

function createPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: 'Post3', createdAt: new Date() });
      posts.push({ title: 'Post4', createdAt: new Date() });
      resolve();
    }, 3000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        resolve(posts.pop());
      } else {
        reject("No posts to delete.");
      }
    }, 1000);
  });
}

Promise.all([createPost(), updateLastUserActivityTime()])
  .then(() => {
    console.log("Posts:", posts);
    console.log("Last Activity Time:", user.lastActivityTime);
    return deletePost();
  })
  .then(deletedPost => {
    console.log("Deleted Post:", deletedPost);
    console.log("Updated Posts:", posts);
  })
  .catch(error => {
    console.log("Error:", error);
  });
