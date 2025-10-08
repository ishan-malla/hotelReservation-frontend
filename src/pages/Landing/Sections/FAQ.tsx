import FAQItem from "@/components/FAQItem";
import { useGetFaqListQuery } from "@/api/hotelSlice";

export default function FAQSection() {
  const { data: faqs = [], isLoading, isError } = useGetFaqListQuery(undefined);

  if (isLoading) {
    return <p className="text-center py-10 text-gray-500">Loading FAQs...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">Failed to load FAQs.</p>
    );
  }
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">FAQs</h2>
      <p className="text-center text-gray-600 mb-6">
        Answers to common questions from our users.
      </p>

      {faqs.length > 0 ? (
        faqs.map((faq) => (
          <FAQItem
            key={faq.faq_id}
            question={faq.faq_questions}
            answer={faq.faq_answers}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">
          No FAQs available right now.
        </p>
      )}
    </section>
  );
}
