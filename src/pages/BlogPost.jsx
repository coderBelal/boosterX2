"use client"

import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa"
import blogData from "../Data/blogData"
 
const BlogPost = () => {
  const { id } = useParams()
  const post = blogData.find((post) => post.id === Number.parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/" className="mt-4 inline-flex items-center text-sky-600 font-semibold">
          <FaArrowLeft className="mr-2" /> Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl mt-22">
      <Link
        to="/blog"
        className="inline-flex items-center text-sky-600 font-semibold mb-8 hover:text-sky-800 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to blog
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="h-80 overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex items-center text-gray-500 mb-6 space-x-4">
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>{post.date}</span>
            </div>
          </div>

          <div className="w-24 h-1 bg-sky-500 mb-8"></div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
