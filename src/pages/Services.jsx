 
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Services  = () => {
  const servicesData = [
    {
      id: 924,
      name: "Facebook - Profile/Page Follower",

      origin:"Facebook",
      type: "Bot Quality",
      speed: "500k/Day",
      non_drop: true,
      complete_time: "12Hrs",
      refill_days: 365,
      rate_per_1000: 0.5396,
      min_order: 5000,
      max_order: 500000,
      average_time: "18 hours and 19 minutes",
      start_time: "6 to 12Hrs",
      max_wait: "12Hrs",
      drop_ratio: "Non Drop",
      quality: ["Vietnamese", "Pakistani", "Indian", "Bangladeshi"],
      note: "Link Must Be Public. Don't Order With Wrong/Broken/Change Link Or Category. Don't Place Multiple Order At Same Time With Same Link.",
      example_link: "Copy Link From Facebook Lite",
    },
    {
      id: 698,
      name: "Facebook - Profile/Page Follower",

      origin:"Facebook",
      type: "Bot Quality",
      speed: "100k/Day",
      non_drop: true,
      complete_time: null,
      refill_days: 30,
      rate_per_1000: 0.548,
      min_order: 1000,
      max_order: 500000,
      average_time: "2 hours and 32 minutes",
      drop_ratio: "Non Drop Stable",
      quality: null,
      note: null,
      example_link: null,
    },
    {
      id: 712,
      name: "Facebook - Profile/Page Follower | 300k/Day | Non Drop | 30 Days Refill | 𝐄𝐚𝐫𝐥𝐲 𝐒𝐭𝐚𝐫𝐭🚀",

      origin:"Facebook",
      type: "Bot Quality",
      speed: "100k/Day",
      non_drop: true,
      complete_time: null,
      refill_days: 30,
      rate_per_1000: 0.77714,
      min_order: 1000,
      max_order: 500000,
      average_time: "46 hours and 41 minutes ",
      drop_ratio: "Non Drop Stable",
      quality: null,
      note: "Link Must Be Public Dont Order With Wrong/Broken/Change Link Or category. Dont Place Multiple Order At Same Time With Same Link",
      example_link: null,
    },
  ]

  const premiumsubs = [
    {
      id: 17,
      name: " Canva - Premium | Paid Unlock [3 Months Guarantee]",

      origin:"Canva",
      type: "Bot Quality",
      speed: "500k/Day",
      non_drop: true,
      complete_time: "12Hrs",
      refill_days: 365,
      rate_per_1000: 0.5396,
      min_order: 5000,
      max_order: 500000,
      average_time: "18 hours and 19 minutes",
      start_time: "6 to 12Hrs",
      max_wait: "12Hrs",
      drop_ratio: "Non Drop",
      quality: ["Vietnamese", "Pakistani", "Indian", "Bangladeshi"],
      note: "Link Must Be Public. Don't Order With Wrong/Broken/Change Link Or Category. Don't Place Multiple Order At Same Time With Same Link.",
      example_link: "Copy Link From Facebook Lite",
    },
    {
      id: 18,
      name: " YouTube - Premium | One Month Validity",

      origin:"Youtube",
      type: "Bot Quality",
      speed: "100k/Day",
      non_drop: true,
      complete_time: null,
      refill_days: 30,
      rate_per_1000: 0.548,
      min_order: 1000,
      max_order: 500000,
      average_time: "2 hours and 32 minutes",
      drop_ratio: "Non Drop Stable",
      quality: null,
      note: null,
      example_link: null,
    },
  ]

  const [activeTab, setActiveTab] = useState("services")
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const [selectedService, setSelectedService] = useState(null)
  const navigate = useNavigate()

  const socialMediaPlatforms = [
    { name: "Instagram", icon: "📸" },
    { name: "Facebook", icon: "ⓕ" },
    { name: "Youtube", icon: "▶️" },
    { name: "Twitter", icon: "🐦" },
    { name: "Spotify", icon: "🎵" },
    { name: "Tiktok", icon: "🎬" },
    { name: "Linkedin", icon: "ℹ️" },
    { name: "SoundCloud", icon: "🔊" },
    { name: "Telegram", icon: "✈️" },
    { name: "Canva", icon: "🌐" },
    { name: "Snapchat", icon: "👻" },
    { name: "Discord", icon: "💬" },
  ]

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const handleViewClick = (service) => {
    setSelectedService(service)
    setShowModal(true)
  }

  const handleBuyNow = () => {
    navigate("/purchase", { state: { service: selectedService } })
    setShowModal(false)
  }

  const displayData = activeTab === "services" ? servicesData : premiumsubs
  // const filteredData = displayData.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const filteredData = displayData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform ? item?.origin?.toLowerCase() === selectedPlatform.toLowerCase() : true;
    return matchesSearch && matchesPlatform;
  });
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-indigo-200 p-4 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">The Services We Offer</h1>
          <p className="text-lg">
            <span className="text-indigo-600 font-bold">SMMRX</span> The Best & Cheapest SMM Panel Service Provider in BD.
            Cheak and Enoy Our Services
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative  ">
              <input
                type="text"
                placeholder="Search...."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-1 rounded">
                🔍
              </button>
            </div>
            <div className="flex gap-4  bgin">
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg flex items-center">
                <span className="mr-2">🔍</span> Filter <span className="ml-2">▼</span>
              </button>
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg flex items-center">
                USD $ <span className="ml-2">▼</span>
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Platforms */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
  {socialMediaPlatforms.map((platform, index) => (
    <div
      key={index}
      className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50 ${
        selectedPlatform === platform?.name ? "border-2 border-indigo-500" : ""
      }`}
      onClick={() => setSelectedPlatform(platform?.name)}
    >
      <span className="mr-2 text-xl">{platform.icon}</span>
      <span>{platform.name}</span>
    </div>
  ))}
</div>


        {/* Tabs */}
        <div className="flex mb-4">
          <button
            className={`px-6 py-2 rounded-t-lg ${activeTab === "services" ? "bg-indigo-500 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab("services")}
          >
            Facebook Services
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg ml-2 ${activeTab === "premium" ? "bg-indigo-500 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab("premium")}
          >
            Premium Subscriptions
          </button>
        </div>

        {/* Banner */}
        <div className="bg-indigo-500 text-white text-center py-4 rounded-t-lg">
          <h2 className="text-xl font-bold">❤️ Best service for Fiverr & Upwork🔥 🔥</h2>
        </div>

        {/* Table */}
        <div className="bg-white rounded-b-lg shadow-md overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Service</th>
                <th className="py-3 px-4 text-center">Rate per 1000</th>
                <th className="py-3 px-4 text-center">Min order</th>
                <th className="py-3 px-4 text-center">Max order</th>
                <th className="py-3 px-4 text-center">Average time ℹ️</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((service, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-4 px-4">
                    <div className="bg-indigo-100 text-indigo-600 rounded-lg px-3 py-1 text-center font-medium">
                      {service.id}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium">{service.name}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {service.non_drop && <span className="font-bold">100% Non Drop</span>} | {service.speed} |{" "}
                      {service.refill_days} Days Refill
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="bg-indigo-50 text-indigo-600 rounded-lg px-3 py-1 inline-block font-medium">
                      ${service.rate_per_1000.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="bg-gray-800 text-white rounded-lg px-3 py-1 inline-block">
                      {formatNumber(service.min_order)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="bg-gray-800 text-white rounded-lg px-3 py-1 inline-block">
                      {formatNumber(service.max_order)}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">{service.average_time}</td>
                  <td className="py-4 px-4 text-center">
                    <button
                      className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-6 py-2"
                      onClick={() => handleViewClick(service)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0    backdrop-blur-sm   bg-white/50    bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Service Details</h2>
                <button className="text-gray-500 hover:text-gray-700 text-2xl" onClick={() => setShowModal(false)}>
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-indigo-100 text-indigo-600 rounded-lg px-3 py-1 text-center font-medium mr-3">
                    ID: {selectedService.id}
                  </div>
                  <h3 className="text-xl font-semibold">{selectedService.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="text-gray-600 mb-1">Type:</p>
                    <p className="font-medium">{selectedService.type}</p>
                  </div>
                  <dPaneliv>
                    <p className="text-gray-600 mb-1">Speed:</p>
                    <p className="font-medium">{selectedService.speed}</p>
                  </dPaneliv>
                  <div>
                    <p className="text-gray-600 mb-1">Drop Ratio:</p>
                    <p className="font-medium">{selectedService.drop_ratio || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Refill Days:</p>
                    <p className="font-medium">{selectedService.refill_days} Days</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Start Time:</p>
                    <p className="font-medium">{selectedService.start_time || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Complete Time:</p>
                    <p className="font-medium">{selectedService.complete_time || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Average Time:</p>
                    <p className="font-medium">{selectedService.average_time}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Max Wait:</p>
                    <p className="font-medium">{selectedService.max_wait || "N/A"}</p>
                  </div>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pricing</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-600 mb-1">Rate per 1000:</p>
                      <p className="font-medium text-indigo-600">${selectedService.rate_per_1000.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Min Order:</p>
                      <p className="font-medium">{formatNumber(selectedService.min_order)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Max Order:</p>
                      <p className="font-medium">{formatNumber(selectedService.max_order)}</p>
                    </div>
                  </div>
                </div>

                {selectedService.quality && (
                  <div>
                    <h4 className="font-semibold mb-2">Quality:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.quality.map((q, i) => (
                        <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService.note && (
                  <div>
                    <h4 className="font-semibold mb-2">Note:</h4>
                    <p className="text-gray-700 bg-yellow-50 p-3 rounded-lg">{selectedService.note}</p>
                  </div>
                )}

                {selectedService.example_link && (
                  <div>
                    <h4 className="font-semibold mb-2">Example Link:</h4>
                    <p className="text-indigo-600 underline">{selectedService.example_link}</p>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services 
