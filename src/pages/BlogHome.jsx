"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import blogData from "../Data/blogData"
 
const BlogHome = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl mt-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Read Our Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest SMM tips, trends, and insights on our Blog.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setHoveredCard(post.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              transform: hoveredCard === post.id ? "translateY(-8px)" : "translateY(0)",
            }}
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                style={{
                  transform: hoveredCard === post.id ? "scale(1.05)" : "scale(1)",
                }}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
              <div className="w-16 h-1 bg-sky-500 mb-4"></div>
              <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
              <Link
                to={`/post/${post.id}`}
                className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-800 transition-colors"
              >
                Read more <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogHome
