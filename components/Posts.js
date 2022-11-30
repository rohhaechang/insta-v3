import React from 'react'
import Post from './Post'

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'codewithsahand',
      userImg:
        'https://w.namu.la/s/126588db9d20e18ebae80ad547e784ffc25c2e2a62d41e2e0d6bc0ec45bf77c4e0dc3f757cd2ea5e1690ace9288f424edb6f0c5bfd5da345f4b4c254e6d129603aae552d36278efb1382b484ef37d46bcf4552ff44eca993b8fcc745def00f6bea496d0b7bcd85c7506c2d17c62fda33',
      img: 'https://images.unsplash.com/photo-1669629711675-5acbd087a9ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      caption: 'Nice picture',
    },
    {
      id: '2',
      username: 'ghavidesahand',
      userImg:
        'https://w.namu.la/s/126588db9d20e18ebae80ad547e784ffc25c2e2a62d41e2e0d6bc0ec45bf77c4e0dc3f757cd2ea5e1690ace9288f424edb6f0c5bfd5da345f4b4c254e6d129603aae552d36278efb1382b484ef37d46bcf4552ff44eca993b8fcc745def00f6bea496d0b7bcd85c7506c2d17c62fda33',
      img: 'https://images.unsplash.com/photo-1669555464529-000effa46bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      caption: 'Nice picture',
    },
  ]
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
