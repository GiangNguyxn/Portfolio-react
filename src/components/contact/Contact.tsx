import React from "react";
import "../contact/Contact.css";
type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="contact__container contact">
      <div className="contact__content">
        <div className="content-item">
          <p>Don't be shy, say hello!</p>
          <p>nhogiang03tg@gmail.com</p>
        </div>
        <div className="content-item">
          <p>See more work</p>
          <p>nhogiang03tg@gmail.com</p>
        </div>
        <div className="content-item">
          <p>Let's connect</p>
          <ul className="list-connect">
            <li>FaceBook</li>
            <li>Instagram</li>
            <li>Gmail</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
