import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = ({ contactRef }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    try {
      const response = await emailjs.sendForm(
        "service_ps07xla",
        "template_q3ktgeg",
        "#myForm",
        "2c81LkoMoFZ1S081G"
      );
      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again later.", {
        position: "top-center",
      });
      console.log(error);
      return { Error: error };
    }
    reset();
  };

  return (
    <section 
      ref={contactRef} className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-10 sm:mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-4 text-center">
        Contact <span className="text-blue-500">Us</span>
      </h2>
      <p className="text-gray-300 text-center mb-6 text-sm sm:text-base">
        We'd love to hear from you. Send us a message and we’ll respond shortly.
      </p>

      <div className="border border-white/25 rounded-xl max-w-4xl mx-auto flex flex-col lg:flex-row overflow-hidden bg-transparent backdrop-blur-3xl">
        {/* Form Section */}
        <div className="w-full lg:w-[55%] p-5 sm:p-6 md:p-8">
          <p className="text-gray-400 text-center mb-5 text-sm sm:text-base">
            Got a question or feedback? Just fill out the form.
          </p>

          <form
            id="myForm"
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3"
          >
            <input
              type="text"
              placeholder="Full name"
              {...register("name", { required: true })}
              className="w-full rounded-md border-white/20 focus:outline-0 shadow-sm focus:border-blue-500 focus:ring-blue-800 px-3 p-2 border-2 bg-transparent text-white"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">Name is required</p>
            )}

            <input
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
              className="w-full rounded-md border-white/20 focus:outline-0 shadow-sm focus:border-blue-500 focus:ring-blue-800 px-3 p-2 border-2 bg-transparent text-white"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">Email is required</p>
            )}

            <input
              type="text"
              placeholder="Enter Subject"
              {...register("title")}
              className="w-full rounded-md border-white/20 focus:outline-0 shadow-sm focus:border-blue-500 focus:ring-blue-800 px-3 p-2 border-2 bg-transparent text-white"
            />

            <textarea
              rows="3"
              placeholder="Your message"
              {...register("message", { required: true })}
              className="w-full rounded-md border-white/20 focus:outline-0 shadow-sm focus:border-blue-500 focus:ring-blue-800 px-3 p-2 border-2 bg-transparent text-white"
            />
            {errors.message && (
              <p className="text-red-600 text-sm">Message is required</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-[45%] bg-blue-500 text-white p-5 sm:p-6 flex flex-col justify-center space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-xl mt-1" />
            <div>
              <p className="font-semibold">SMR HALL, JUST</p>
              <p>7406 Shorok, Jashore</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-xl mt-1" />
            <div>
              <p className="font-semibold">(+880) 1865-815125</p>
              <p>Mon–Fri, 9am–5pm</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-xl" />
            <div>
              <a
                href="mailto:parthokumarmondal@gmail.com"
                className="font-semibold hover:underline"
              >
                parthokumarmondal@gmail.com
              </a>
              <p>I usually respond within a day</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4 text-white">
            <a
              href="https://github.com/partho-31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-200"
            >
              <FaGithub className="text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/partho-kumar-mondal-873525337/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-200"
            >
              <FaLinkedin className="text-2xl" />
            </a>

            <a
              href="https://www.facebook.com/parthoemperors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-200"
            >
              <FaFacebook className="text-2xl" />
            </a>

            <a
              href="https://discord.com/users/1351566992217346118"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="hover:text-gray-200"
            >
              <FaDiscord className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
