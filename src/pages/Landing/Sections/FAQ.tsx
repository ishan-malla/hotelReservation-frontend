import FAQItem from "@/components/FAQItem";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I book a room?",
      answer:
        "You can book directly through our website by selecting your dates, choosing a room type, and completing the secure checkout process.",
    },
    {
      question: "What time is check-in and check-out?",
      answer:
        "Check-in begins at 3 PM and check-out is by 11 AM. Early check-in or late check-out may be available upon request.",
    },
    {
      question: "Is breakfast included?",
      answer:
        "Yes, a complimentary breakfast is included with every stay. We offer a variety of hot and cold options served daily from 7–10 AM.",
    },
    {
      question: "Do you offer free Wi-Fi?",
      answer:
        "Yes, high-speed Wi-Fi is available throughout the hotel and is free for all guests.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes, we offer free on-site parking for guests. Valet service is also available for an additional fee.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "Yes, we are a pet-friendly hotel. A small cleaning fee may apply. Please contact us in advance for specific pet policies.",
    },
    {
      question: "Can I cancel or modify my reservation?",
      answer:
        "Yes, cancellations and modifications are allowed based on the rate plan you selected. Please review the cancellation policy when booking or contact us for assistance.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">FAQs</h2>
      <p className="text-center text-gray-600 mb-6">
        Answers to common questions from our users.
      </p>

      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
}
