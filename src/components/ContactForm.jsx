import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-contact-bg font-poppins">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-contact-card/21 rounded-2xl p-6 md:p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="text-center mb-8 md:mb-12">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-contact-text leading-tight">
                    Contact Form
                  </h1>
                </div>

                <div className="space-y-8 md:space-y-10">
                  {/* Full Name */}
                  <div className="space-y-3 md:space-y-4">
                    <label
                      htmlFor="fullName"
                      className="block text-xl md:text-2xl lg:text-3xl font-medium text-contact-text"
                    >
                      Full Name
                    </label>
                    <div className="flex items-center border border-contact-border rounded-lg">
                      <div className="flex items-center justify-center p-3 md:p-4">
                        <FontAwesomeIcon icon={faUser} className="w-6 h-6 md:w-7 md:h-7 text-contact-border" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter name"
                        className="flex-1 p-3 md:p-4 lg:p-6 text-lg md:text-xl bg-transparent text-contact-text placeholder-contact-text/70 border-none outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-3 md:space-y-4">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xl md:text-2xl lg:text-3xl font-medium text-contact-text"
                    >
                      Phone Number
                    </label>
                    <div className="flex items-center border border-contact-border rounded-lg">
                      <div className="flex items-center justify-center p-3 md:p-4">
                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 md:w-7 md:h-7 text-contact-border" />
                      </div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="flex-1 p-3 md:p-4 lg:p-6 text-lg md:text-xl bg-transparent text-contact-text placeholder-contact-text/70 border-none outline-none"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-3 md:space-y-4">
                    <label
                      htmlFor="location"
                      className="block text-xl md:text-2xl lg:text-3xl font-medium text-contact-text"
                    >
                      Location
                    </label>
                    <div className="flex items-center border border-contact-border rounded-lg">
                      <div className="flex items-center justify-center p-3 md:p-4">
                        <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 md:w-7 md:h-7 text-contact-border" />
                      </div>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter location"
                        className="flex-1 p-3 md:p-4 lg:p-6 text-lg md:text-xl bg-transparent text-contact-text placeholder-contact-text/70 border-none outline-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-3 md:space-y-4">
                    <label
                      htmlFor="email"
                      className="block text-xl md:text-2xl lg:text-3xl font-medium text-contact-text"
                    >
                      Email
                    </label>
                    <div className="flex items-center border border-contact-border rounded-lg">
                      <div className="flex items-center justify-center p-3 md:p-4">
                        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 md:w-7 md:h-7 text-contact-border" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                        className="flex-1 p-3 md:p-4 lg:p-6 text-lg md:text-xl bg-transparent text-contact-text placeholder-contact-text/70 border-none outline-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="border border-contact-border rounded-lg">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Type message"
                        rows={6}
                        className="w-full p-4 md:p-6 lg:p-8 text-lg md:text-xl bg-transparent text-contact-text placeholder-contact-text/70 border-none outline-none resize-none rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 md:pt-8">
                  <button
                    type="submit"
                    className="w-full bg-contact-button hover:bg-contact-button/90 text-contact-bg font-bold text-2xl md:text-3xl lg:text-4xl py-6 md:py-8 lg:py-10 px-8 rounded-lg transition-colors duration-200 tracking-[-0.02em]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
