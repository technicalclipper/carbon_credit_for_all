import React from "react";
import Header from "../components/header";
import HomePost from "../components/homepost";

function Home() {
  const posts = [
    { username: "Niki", uid: "nk124345", desc: "Planted this tree today!" },
    { username: "John", uid: "jn456789", desc: "Started a garden!" },
    { username: "Emma", uid: "em789101", desc: "Planted a fruit tree!" },
  ];

  return (
    <>
      <Header />
      <div className="right-panel">
        <div className="content">
          <h1>Plant a Tree today!</h1>
          <p>
            "Planting a tree today is a step toward a better future. Trees clean
            the air, combat climate change, and create habitats for wildlife.
            They stand as symbols of hope, offering beauty and shade while
            fostering life for generations to come."
          </p>
        </div>
        <div className="content">
          <h1>About Us!</h1>
          <p>
            "We are a platform that turns tree planting into an exciting and
            rewarding experience. By gamifying environmental action, we let
            users earn points for every tree planted, which can later be
            converted into carbon credits. Together, we make sustainability fun,
            impactful, and rewarding for everyone!"
          </p>
        </div>
      </div>
      <div className="home-right">
        <h2>Posts</h2>
        <div className="Post-container">
          {posts.map((post, index) => (
            <HomePost
              key={index}
              username={post.username}
              uid={post.uid}
              desc={post.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
