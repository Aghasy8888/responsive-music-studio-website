import React from "react";
import {
  testimonial_1,
  testimonial_2,
  testimonial_3,
} from "../../assets/index";
import Testimonial from "./Testimonial";
import styles from "./TestimonialsStyle.module.scss";

function Testimonials() {
  //ctn is container
  return (
    <section className={styles.darkGray} id="testimonials">
      <div className={styles.container}>
        <h2>What our students say?</h2>

        <div className={styles.contentCtn}>
          <Testimonial
            img={testimonial_1}
            name="Peter Adams"
            companyName="Google"
            review="This is a great course. I got to learn a lot."
          />

          <Testimonial
            img={testimonial_2}
            name="Robert Fox"
            companyName="Instagram"
            review="I got to learn a lot about Music Production with this course. Thanks :)"
          />

          <Testimonial
            img={testimonial_3}
            name="Emily Smith"
            companyName="Apple"
            review="Awesome! Great job!!"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
