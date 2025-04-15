"use client"

import { useState } from "react"
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaSpotify,
  FaTelegram,
  FaLinkedinIn,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const socialMediaData = [
  {
    id: "instagram",
    name: "Instagram",
    icon: <FaInstagram className="text-xl" />,
    color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
    description:
      "You can have a bulk amount of likes and shares with our Instagram SMM panel. We focus on Instagram reels (short-form videos) and stories. We work on that so that you can get more exposure and engagement. Our story highlights service lets you be visible at all times.",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <FaFacebookF className="text-xl" />,
    color: "bg-blue-600",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
    description:
      "Our Facebook SMM panel offers a wide range of services including page likes, post likes, comments, and shares. We help you increase your Facebook page engagement and reach. With our services, you can boost your brand's visibility and credibility on the largest social media platform.",
  },
  {
    id: "youtube",
    name: "Youtube",
    icon: <FaYoutube className="text-xl" />,
    color: "bg-red-600",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
    description:
      "Boost your YouTube channel with our comprehensive SMM panel services. We provide views, likes, comments, and subscribers to help your videos rank higher. Our YouTube promotion services are designed to increase your channel's visibility and engagement, helping you grow your audience organically.",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: <FaTiktok className="text-xl" />,
    color: "bg-black",
    textColor: "text-white",
    logo: "https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png",
    description:
      "Get more followers, likes, and views on your TikTok videos with our specialized SMM panel. We help you create viral content and increase your presence on this rapidly growing platform. Our TikTok services are designed to boost your engagement and help you reach a wider audience.",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: <FaTwitter className="text-xl" />,
    color: "bg-sky-500",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png",
    description:
      "Enhance your Twitter presence with our comprehensive SMM panel services. We provide followers, retweets, likes, and comments to help you build a strong Twitter profile. Our Twitter promotion services are designed to increase your visibility and engagement on this important platform.",
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: <FaSpotify className="text-xl" />,
    color: "bg-green-600",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
    description:
      "Boost your music career with our Spotify SMM panel services. We provide plays, followers, and playlist placements to help your music reach a wider audience. Our Spotify promotion services are designed to increase your visibility and help you gain more listeners.",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: <FaTelegram className="text-xl" />,
    color: "bg-blue-500",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png",
    description:
      "Grow your Telegram channel or group with our specialized SMM panel services. We provide members, post views, and engagement to help you build a strong community. Our Telegram promotion services are designed to increase your visibility and help you reach more people.",
  },
  {
    id: "linkedin",
    name: "Linkedin",
    icon: <FaLinkedinIn className="text-xl" />,
    color: "bg-blue-700",
    textColor: "text-white",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
    description:
      "Enhance your professional presence on LinkedIn with our comprehensive SMM panel services. We provide connections, endorsements, and engagement to help you build a strong professional profile. Our LinkedIn promotion services are designed to increase your visibility and credibility in your industry.",
  },
]

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(socialMediaData[0])

  const handleServiceClick = (service) => {
    setActiveService(service)
  }

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-pink-100">    <div className="container    mx-auto px-4 py-16 max-w-7xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Affordable SMM Panel Services We Offer In Bangladesh</h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto">
        As the cheapest SMM Panel provider in Bangladesh, our every service is tailored to give you the best outcome
        of social media marketing.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
      {socialMediaData.map((service) => (
        <button
          key={service.id}
          className={`flex items-center justify-center gap-2 p-3 rounded-md border transition-all duration-300 ${
            activeService.id === service.id
              ? `${service.color} ${service.textColor} border-transparent shadow-lg`
              : "bg-white hover:bg-gray-50 border-gray-200"
          }`}
          onClick={() => handleServiceClick(service)}
        >
          {service.icon}
          <span className="font-medium">{service.name}</span>
        </button>
      ))}
    </div>

    <div className="border border-blue-200 rounded-xl overflow-hidden bg-white shadow-lg">
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeService.name} SMM Panel</h3>
          <div className="w-24 h-1 bg-blue-500 mb-6"></div>
          <p className="text-lg text-gray-700 mb-6">{activeService.description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
           <Link to="/services">Our Services</Link> 
          </button>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={activeService.logo || "/placeholder.svg"}
            alt={`${activeService.name} Logo`}
            className="max-w-[200px] max-h-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  </div></div>

  )
}

export default ServicesSection
