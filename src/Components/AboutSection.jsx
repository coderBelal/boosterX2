import { Link } from "react-router-dom"

const AboutSection = () => {
    return (
        <div className=" bg-gradient-to-br from-indigo-100 via-white to-pink-100  ">      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About SMMRX</h1>
            <p className="text-lg text-gray-700 mb-4">
              SMMRX founded in 2020, is one of the best platforms for getting SMM panels in Bangladesh. We offer Cheap SMM
              panels so that you can get the best outcome from social media for your business. We have all types of social
              media marketing (SMM) panels to meet your business's unique needs. From Facebook and YouTube to Linkedin and
              TikTok, we provide the best SMM Panel Bangladesh.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We are proud of being the Cheapest SMM Reseller Panel in Bangladesh. To ensure a strong social media
              presence for your brand, there is no alternative to choosing the best SMM Panel BD. Hence, SMMRX should be
              your 1st choice! Affordability and commitment to quality are our prime concerns that you also should
              experience with us.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg">
             <Link to="/signup">Sign up</Link> 
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TnF5ZPgQkNFG8kMZ04U3iMKpngvF9r.png"
              alt="Social Media Marketing Illustration"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div></div>

    )
  }
  
  export default AboutSection
  