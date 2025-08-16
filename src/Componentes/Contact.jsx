import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onsubmit = (data) => {
    console.log(data);

    mutate(data);
  };

  const { mutate } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/message", data);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your message has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    },
  });
// bg-gradient-to-br from-[#0f0f23] via-[#0a0a23] to-[#0f0f23]
  return (
    <Element name="contact">
      <section className=" rounded-2xl   text-white pb-20 px-4">
        <h1 className="text-purple-400 font-bold text-3xl py-10 text-center">Contact</h1>
        <div className="max-w-6xl mx-auto z-50  grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-purple-400">Get in Touch</h2>
            <p className="text-gray-400">
              Feel free to reach out for any inquiries or feedback!
            </p>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-400 text-xl" />
              <span className="text-gray-300">md.sazzadhosen325@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-purple-400 text-xl" />
              <span className="text-gray-300">+880 178 2831 968</span>
            </div>

            <Link to='https://wa.me/8801782831968' target="_blank">
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-purple-400 text-2xl" />
                <span className="text-gray-300">Chat on WhatsApp</span>
              </div>
            </Link>
          </div>

          {/* Right - Message Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              Leave a Message
            </h3>
            <form className="space-y-4" onClick={handleSubmit(onsubmit)}>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full bg-transparent border border-purple-400 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full bg-transparent border border-purple-400 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                {...register("message", { required: true })}
                className="w-full bg-transparent border border-purple-400 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 cursor-pointer bg-transparent border hover:bg-purple-800 border-purple-500 rounded-md hover:bg-bue-700 hover:text-white transition-all"
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
