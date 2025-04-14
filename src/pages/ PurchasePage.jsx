"use client"

import { useLocation, useNavigate } from "react-router-dom"

const PurchasePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { service } = location.state || {}

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">No Service Selected</h2>
          <p className="text-gray-600 mb-6">Please select a service from the services page.</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => navigate("/")}
          >
            Back to Services
          </button>
        </div>
      </div>
    )
  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4 mt-14">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Purchase Service</h1>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              onClick={() => navigate("/services")}
            >
              Back to Services
            </button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 rounded-lg px-3 py-1 text-center font-medium mr-3">
                ID: {service.id}
              </div>
              <h2 className="text-xl font-semibold">{service.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-gray-600 mb-1">Rate per 1000:</p>
                <p className="font-medium text-blue-600">${service.rate_per_1000.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Min Order:</p>
                <p className="font-medium">{formatNumber(service.min_order)}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Max Order:</p>
                <p className="font-medium">{formatNumber(service.max_order)}</p>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">⏱️</span>
              <p>Average completion time: {service.average_time}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Link</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={service.example_link || "Enter your link here"}
              />
              {service.example_link && <p className="text-sm text-gray-500 mt-1">Example: {service.example_link}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Quantity</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Min: ${service.min_order}`}
                  min={service.min_order}
                  max={service.max_order}
                  defaultValue={service.min_order}
                />
                <div className="ml-4 bg-gray-100 px-3 py-2 rounded-lg">
                  <p className="text-sm text-gray-600">Min: {formatNumber(service.min_order)}</p>
                  <p className="text-sm text-gray-600">Max: {formatNumber(service.max_order)}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span>{service.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span>{formatNumber(service.min_order)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rate per 1000:</span>
                  <span>${service.rate_per_1000.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total Price:</span>
                  <span>${((service.min_order / 1000) * service.rate_per_1000).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {service.note && (
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Important Note:</h3>
                <p className="text-gray-700">{service.note}</p>
              </div>
            )}

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchasePage
