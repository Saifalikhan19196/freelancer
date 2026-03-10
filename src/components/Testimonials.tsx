import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      content: 'Saif delivered an exceptional SharePoint solution that transformed our team collaboration. His expertise in SPFx and attention to detail exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Working with Saif was a fantastic experience. He built our React application from scratch with clean, maintainable code. The project was delivered on time and within budget.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'IT Director, GlobalTech',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Saif\'s expertise in both SharePoint and modern web development made him the perfect choice for our enterprise project. His solutions are innovative and scalable.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder, StartupXYZ',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'From concept to deployment, Saif demonstrated exceptional skill and professionalism. Our e-commerce platform exceeded all performance benchmarks.',
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="relative py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-10 md:p-16 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-violet-500/20">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">"</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-violet-600 dark:text-violet-400 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-violet-500 hover:text-violet-500 transition-colors"
            >
              <HiChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-violet-500 to-indigo-500 w-8'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-violet-500 hover:text-violet-500 transition-colors"
            >
              <HiChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials