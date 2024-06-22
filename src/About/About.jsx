import React from "react";
import "./About.css";
import about from "../assets/about.png";
import man from '../assets/man.png'
export default function About() {
  return (
    <div className="about-section">
      <h1>About </h1>
      <div className="about-1">
        <div className="about1-left">
          <h1>Welcome to ALL STUDY HUB (SMC-Private) Limited</h1>
          <h2>ASH Software House</h2>
          <p>
            ASH is a team of passionate and skilled IT professionals bringing
            innovative, quality, and sustainable technology solutions. We build
            customized business solutions by closely interacting with our
            customers to deliver maximum customer satisfaction. After all, it’s
            all about customers
          </p>
          <h2>ASH Institute</h2>
          <p>
            We Provide Online Courses all over Pakistan Monthly, Three Months,
            and Six Months. Courses include Graphics Designing, Website
            Development, Freelancing, Digital Marketing, Search Engine
            Optimization, MS Office, English Language Courses, Photography
            Courses, and many more. We have the best faculty who have the best
            expertise in every field and experience over the years. We offer
            24/7 Support, at a low cost which can be easily affordable in
            present circumstances.
          </p>
        </div>
        <div className="about1-right">
          <img src={about}></img>
        </div>
      </div>
      <div className="message">
        <div className="message-left">
            <img src={man}></img>
        </div>
        <div className="message-right">
          <h1>Message from CEO</h1>
          <p>
            At ASH, we are fostering this sense of belonging and culture of
            kindness. We believe that everyone in the society should be a role
            model to others, right from the youngest members of our community.
            Attainment and progress are of course critical in a youngster’s
            education and by ensuring they are given the skills and tools to
            learn , we know we will get results the right way. We have a very
            strong culture of reflections and shared leadership. We acknowledge
            achievements and celebrate success in all aspects of learning. We
            then carefully plan our next development steps that will ensure
            greater success in the future. ASH, Alhamdulillah, has earned the
            standing and trust of community in a very short time. Our students,
            teachers colleagues are what makes our journey special. I feel very
            privileged to lead such a wonderful institute, along with our
            dedicated team of learning and teaching professionals, so that we
            can continue to develop and inspire our young learners who will of
            course be our leaders of tomorrow. I look forward to welcoming you
            to ASH!
          </p>
        </div>
      </div>
    </div>
  );
}
