import ContactForm from "@/components/ContactForm";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          We’d love to hear from you!
        </h1>
        <p className="text-gray-600 mb-8">
          Whether you have a question, feedback, or just want to say hi — feel
          free to reach out!
        </p>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
