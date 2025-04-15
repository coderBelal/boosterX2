"use client"

import { useState } from "react"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterest,
  FaWhatsapp,
  FaTelegram,
  FaClock,
  FaHeadset,
} from "react-icons/fa"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (<div className="bg-gradient-to-br from-indigo-100 via-white to-pink-100">    <div className="min-h-scree  bg-gradient-to-br from-indigo-100 via-white to-pink-100  ">
    {/* Hero Section */}
    <div className="container mx-auto mt-12 px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact With <span className="text-blue-600">SMMRX</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Get in touch with <span className="text-blue-600 font-medium">SMMRX</span> for all your social media
            marketing needs. We're here to assist you with efficient and reliable SMM panel services. Contact us today
            for queries, support, or business inquiries—your growth is our priority!
          </p>
          <button className="bg-indigo-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Sign up
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/placeholder.svg?height=400&width=400" alt="Social Media Marketing" className="w-full max-w-md" />
        </div>
      </div>
    </div>

    {/* Contact Cards */}
    <div className="container  mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card */}
        <div className="  rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border border-blue-100">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaEnvelope className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us:</h3>
            <a href="mailto:support@smmrx.com" className="text-blue-600 hover:underline">
              support@smmrx.com
            </a>
            <p className="text-gray-500 mt-2 text-sm">We usually respond within 24 hours</p>
          </div>
        </div>

        {/* Address Card */}
        <div className="  rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border border-blue-100">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Global Headquarters</h3>
            <p className="text-gray-600">20 King Dhaka Road, National University,</p>
            <p className="text-gray-600">Gazipur Sadar Gazipur</p>
            <p className="text-gray-500 mt-2 text-sm">Visit us during business hours</p>
          </div>
        </div>

        {/* Phone Card */}
        <div className="  rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border border-blue-100">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaPhone className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us:</h3>
            <a href="tel:+8801927625744" className="text-blue-600 hover:underline">
              +8801927625744
            </a>
            <p className="text-gray-500 mt-2 text-sm">Available 24/7 for urgent matters</p>
          </div>
        </div>
      </div>
    </div>

    {/* Support Hours */}
    <div className=" bg-gradient-to-br from-indigo-100 via-white to-pink-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <FaClock className="text-blue-600 text-2xl mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">Support Hours: 24/7</h2>
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Please Note: Our support team typically responds to inquiries within instant-12 hours. For urgent matters,
          please call our support line.
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-4 py-12">
<div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl border border-gray-100">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Send Us a Message
  </h2>

  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="John Doe"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="john@example.com"
          required
        />
      </div>
    </div>

    {/* Subject */}
    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
        placeholder="How can we help you?"
        required
      />
    </div>

    {/* Message */}
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
        placeholder="Write your message here..."
        required
      ></textarea>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition"
    >
      Send Message
    </button>
  </form>
</div>
</div>


    {/* Social Media Section */}
    <div className="  py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Social Media</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Stay connected with us on social media for the latest updates, promotions, and industry news:
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#"
            className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-blue-100 p-3 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-blue-100 p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition duration-300"
          >
            <FaPinterest className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-blue-100 p-3 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition duration-300"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-blue-100 p-3 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition duration-300"
          >
            <FaYoutube className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>

        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Connect With Us For Fast Updates</h3>
      </div>
    </div>

    {/* Floating Action Buttons */}
    <div className="fixed bottom-6 left-6">
      <a
        href="#"
        className="bg-[#0088cc] text-white p-4 rounded-full shadow-lg hover:bg-[#0077b5] transition duration-300"
      >
        <FaTelegram className="text-2xl" />
      </a>
    </div>

    <div className="fixed bottom-6 right-6">
      <a
        href="#"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>

    {/* Footer */}

  </div></div>

  )
}

export default ContactPage
