"use client"
import React, { useState } from 'react';
import classes from './index.module.scss';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className={classes.about}>
      <div className={classes.title}>
        <h4>About Me</h4>
      </div>

      <div className={classes.presentation}>
        <p> My name is Maria Ncanghe, and I am a passionate aspiring artist with a diverse background in art, music,
           and design. I also develop websites mixing technology with art. Growing up between different cultures, I have always found inspiration in the intersection of traditions, emotions, and storytelling.
           I have always been fascinated by how technology can be used creatively, and I strive to combine my artistic
              vision with modern digital tools. I aim to create meaningful experiences that engage the mind and the senses, 
              while pushing the boundaries of both art and technology.
        </p>

        <button onClick={toggleShowMore} className={classes.readMoreButton}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>

        {showMore && (
          <div className={classes.additionalText}>
            <p>
            Ever since I was a child, creativity has been at the heart of who I am. Growing up, I immersed myself in the arts, drawn to their power to communicate emotions and stories that words alone could not capture. My journey began with classical music at Luís António Verney, where I spent eight transformative years majoring in violin while also studying piano and theatre. These experiences shaped me, teaching me the beauty of discipline and the magic of performance.
            This comprehensive training not only honed my technical skills but also shaped my artistic sensibility and passion for creative expression. Through years of practice and dedication, I developed a deep appreciation for the arts and cultivated a strong foundation that continues to inspire my artistic journey.
            I also have a background in administrative science, having studied at ESCAD Lusófona. This experience provided me with valuable skills in organization, communication, and problem-solving, complementing my artistic education and allowing me to approach creative projects with a structured and professional mindset.



            </p>
          </div>
        )}
      </div>

      <hr className={classes.separator} />

      <div className={classes.journey}>
        <h4>My Journey</h4>
        <div className={classes.timeline}>
          <div className={classes.square}>Violinist</div>
          <div className={classes.square}>Visual Arts</div>
          <div className={classes.square}> Art School </div>
          {/* <span className={classes.arrow}>→</span> */}
          <div className={classes.square}>Web Developer</div>
        </div>
      </div>

      <hr className={classes.separator} />

      <div className={classes.vision}>
        <h4>My Vision</h4>
        <p>
          My work focuses on themes of identity, emotion, and connection, often exploring the stories we carry and the emotions we share.
          I am inspired by everyday moments, human interactions, and the transformative power of creativity.
        </p>
      </div>
    </section>
  );
};

export default About;
