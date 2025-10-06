import FAQItem from "@/components/FAQItem";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I list my place?",
      answer:
        "Sign up, click 'List Your Space,' and follow the steps to upload photos, add details, and set pricing. You can manage everything from your dashboard.",
    },
    {
      question: "Is payment secure?",
      answer:
        "Yes. All transactions use bank-grade encryption and fraud protection for safe payments between hosts and renters.",
    },
    {
      question: "How are users verified?",
      answer:
        "We verify users through ID checks and rental history to ensure trust and safety for everyone.",
    },
    {
      question: "What if there’s a problem?",
      answer:
        "Our support team is available 24/7 to help solve issues or disputes quickly and fairly.",
    },
    {
      question: "Can I edit my listing?",
      answer:
        "Yes, you can update photos, pricing, or availability anytime. Changes show up instantly.",
    },
    {
      question: "What if someone cancels?",
      answer:
        "Refunds depend on your chosen policy. You can pick a flexible, moderate, or strict option while listing.",
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
