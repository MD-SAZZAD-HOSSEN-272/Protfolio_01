import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <section className=" rounded-2xl  bg-gradient-to-br from-[#0f0f23] via-[#0a0a23] to-[#0f0f23] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto z-50  grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-purple-400">Get in Touch</h2>
          <p className="text-gray-400">Feel free to reach out for any inquiries or feedback!</p>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-400 text-xl" />
            <span className="text-gray-300">md.sazzadhosen325@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-purple-400 text-xl" />
            <span className="text-gray-300">+880 178 2831 968</span>
          </div>

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-purple-400 text-2xl" />
            <span className="text-gray-300">Chat on WhatsApp</span>
          </div>
        </div>

        {/* Right - Message Form */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-purple-400">Leave a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-blue-500 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-blue-500 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-transparent border border-blue-500 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-transparent border border-blue-500 rounded-md hover:bg-bue-700 hover:text-white transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Contact;
