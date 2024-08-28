import React, { useState } from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "What is the main goal of Donation10Foundation?",
      answer: "Our main goal is to support and empower Muslim girls and Islamic scholars by providing financial assistance for marriage and educational needs.",
    },
    {
      question: "How can I get involved with Donation10Foundation?",
      answer: "You can get involved by donating, volunteering, or spreading the word about our mission and programs. Visit our 'Get Involved' page for more details.",
    },
    {
      question: "Where does the funding for your programs come from?",
      answer: "Funding comes from generous donors, community fundraising events, and partnerships with other organizations.",
    },
    {
      question: "How can I contact Donation10Foundation for more information?",
      answer: "You can contact us through our 'Contact Us' page, or email us at info@donation10foundation.org. We will be happy to assist you.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="about-section">
        <div className="about-intro">
          <h2 className="about-title">About Donation10Foundation</h2>
          <p className="about-subtitle">Empowering Communities Through Generosity</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/aboutUs.png.jpg" alt="Donation10Foundation" />
          </div>
          <div className="about-text">
            <div className="about-mission">
              <h3 className="section-title">Our Mission</h3>
              <p>
                At Donation10Foundation, we support Muslim girls in their journey to marriage and empower Islamic scholars in their noble pursuits. We aim to create a better future through generosity, education, and strong community support.
              </p>
            </div>

            <div className="about-vision">
              <h3 className="section-title">Our Vision</h3>
              <p>
                We envision a world where financial barriers do not prevent anyone from living a fulfilling life or achieving their dreams. Our foundation is committed to making a positive, lasting impact by helping those in need and uplifting communities.
              </p>
            </div>

            <div className="about-programs">
              <h3 className="section-title">Our Programs</h3>
              <ul className="program-list">
                <li><strong>Ijtemai Shadi:</strong> Assisting with mass weddings for those who cannot afford it.</li>
                <li><strong>Education for Muslims:</strong> Supporting education initiatives for underprivileged students.</li>
                <li><strong>Save for Ambiya ke Waris:</strong> Helping Islamic scholars continue their vital work.</li>
              </ul>
            </div>

            <div className="about-impact">
              <h3 className="section-title">Our Impact</h3>
              <p>
                Through your support, we have helped numerous individuals and families overcome financial challenges. Our work has made a significant difference in the lives of many, and with your continued support, we will reach even more people in need.
              </p>
            </div>

            <div className="about-faq">
              <h3 className="section-title">Frequently Asked Questions</h3>
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleFAQToggle(index)}
                  >
                    {item.question}
                  </button>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
