import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import faqOne from "../assets/faq1.svg";
import faqTwo from "../assets/faq2.svg";

const Questions: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="questions" id="questions">
      <div className="question-title-container">
        <div className="section-title-bar"></div>
        <h1 className="question-title">FAQs</h1>
      </div>
      <div className="section question-center">
        {/* Map through questions */}
        {faqData.map((question, index) => (
          <article
            key={index}
            className={`question ${index === activeQuestion ? "active" : ""}`}
          >
            <div
              className="question-header"
              onClick={() => toggleQuestion(index)}
            >
              <h2 className="question-header-title">{question.title}</h2>
              <button className="question-icon">
                <FontAwesomeIcon
                  icon={index === activeQuestion ? faMinus : faPlus}
                  className={`fa-lg ${
                    index === activeQuestion ? "minus" : "plus"
                  }`}
                />
              </button>
            </div>
            <p className="question-body">{question.body}</p>
          </article>
        ))}
      </div>

      <div className="faq-bg-left faq-bg">
        <img src={faqOne} alt="Faq One" className="faq-one-img" />
      </div>
      <div className="faq-bg-right faq-bg">
        <img src={faqTwo} alt="Faq Two" className="faq-two-img" />
      </div>
    </section>
  );
};

export default Questions;

// Example data for FAQ
const faqData = [
  {
    title: "How does URL shortening work?",
    body: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },
  {
    title:
      "Is it necessary to create an account to use the URL shortening service?",
    body: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },
  {
    title: "Are the shortened links permanent? Will they expire?",
    body: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination",
  },
  {
    title: "Are there any limitations on the number of URLs I can shorten",
    body: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination",
  },
  {
    title: "Can I customize the shortened URLs to reflect my brand or content?",
    body: "Yes, you can do so.",
  },
  {
    title: "Can I track the performance of my shortened URLs?",
    body: "Yes, you can do so.",
  },
  {
    title:
      "How secure is the URL shortening service? Are the links protectected against malicious activity?",
    body: "The URL shortening is very secure and the links are 100% protected against spam or malicious activity.",
  },
  {
    title: "What is QR code and what can it do",
    body: "QR codes (or Quick Response codes) are two-dimensional codes that you can scan with a smartphone. The code contains information, usually a site address, and once you scan it, the code connects you with a resource on the web.",
  },
  {
    title:
      "Is there an API available for integrating the URL shortening service into my applications or websites?",
    body: "Yes, there is.",
  },
  // Add more questions as needed
];
