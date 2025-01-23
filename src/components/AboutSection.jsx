// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
      <h1>About Golden Horizon Yoga</h1>
        <p>
          Welcome to Golden Horizon Yoga! Our mission is to guide you on a journey of self-discovery, inner peace, and holistic well-being. We offer a wide range of yoga practices, from dynamic flows to restorative sessions, ensuring there’s something for everyone, regardless of experience level.
        </p>
        <p>
          At Golden Horizon Yoga, we believe in creating a serene and supportive environment where you can connect with your mind, body, and spirit. Join us and embrace the transformative power of yoga to achieve balance, flexibility, and mindfulness in your daily life.
        </p>
        <div className="about-image">
          <img src="/public/about.jpg" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About;
