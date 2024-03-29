import { useState, useEffect } from 'react';
import Head from 'next/head';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลโพสต์
    fetch('https://api.service-ads.com/api')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  // ฟังก์ชันเพิ่มโพสต์
  async function addPost(e) {
    e.preventDefault();
    const form = e.target;
    const postData = {
      title: form.title.value,
      h_line: form.h_line.value,
      img: form.img.value,
      ppp: form.ppp.value,
    };

    await fetch('https://api.service-ads.com/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });

    // รีเฟรชข้อมูลโพสต์
    form.reset();
    fetch('/api/posts')
      .then((res) => res.json())
      .then(setPosts);
  }

  // ฟังก์ชันลบโพสต์
  async function deletePost(id) {
    await fetch(`https://api.service-ads.com/delete/${id}`, {
      method: 'DELETE',
    });

    // รีเฟรชข้อมูลโพสต์
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div>
      <Head>
        <title>Posts Manager</title>
      </Head>
      <h1>Add New Post</h1>
      <form onSubmit={addPost}>
        <input name="title" placeholder="Title" required />
        <input name="h_line" placeholder="Head Line" required />
        <input name="img" placeholder="Image URL" required />
        <input name="ppp" placeholder="PPP" required />
        <button type="submit">Add Post</button>
      </form>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
           
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
