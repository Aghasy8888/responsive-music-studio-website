import React from "react";
import SingleBlog from "./SingleBlog";
import { Blog_1, Blog_2, Blog_3 } from "../../assets/index";
import styles from "./BlogStyle.module.scss";

function Blog() {
  //ctn is container
  return (
    <section id="blog" className={styles.pink}>
      <div className={styles.container}>
        <h2 className={styles.light}>Latest Posts</h2>
        <div className={styles.contentCtn}>
          <SingleBlog
            tag="DAW"
            postTitle="How To Use Drum Machine in Logic Pro X"
            blog={Blog_1}
          />

          <SingleBlog
            tag="Mixing"
            postTitle="How To Mix Guitars Effectively"
            blog={Blog_2}
          />

          <SingleBlog
            tag="Vox"
            postTitle="The Real Power of Harmonies in Music Production"
            blog={Blog_3}
          />
        </div>
        <div className={styles.btnCtn}>
          <a href="#" className={styles.allPostsBtn}>
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
