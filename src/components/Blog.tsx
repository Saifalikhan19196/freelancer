import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight, HiCalendar, HiClock } from 'react-icons/hi'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogs = [
    {
      id: 1,
      title: 'Building Modern SPFx Web Parts with React Hooks',
      excerpt: 'Learn how to leverage React Hooks in your SharePoint Framework development for cleaner, more maintainable code.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
      category: 'SPFx',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      featured: true,
    },
    {
      id: 2,
      title: 'Advanced React Patterns for Enterprise Apps',
      excerpt: 'Discover advanced React patterns that will take your enterprise applications to the next level.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
      category: 'React',
      date: 'Dec 10, 2024',
      readTime: '12 min read',
      featured: false,
    },
    {
      id: 3,
      title: 'TypeScript Best Practices in 2024',
      excerpt: 'A comprehensive guide to TypeScript best practices that every developer should know.',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop',
      category: 'TypeScript',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      featured: false,
    },
  ]

  return (
    <section 
      id="blog" 
      className="relative py-32 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">Blog</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
              Latest <span className="gradient-text">Articles</span>
            </h2>
          </div>
          
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 mt-6 md:mt-0 text-violet-600 dark:text-violet-400 font-semibold hover:underline"
          >
            View All Posts
            <HiArrowRight />
          </motion.a>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ y: -10 }}
            className="lg:col-span-2 lg:row-span-2 group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-all duration-500"
          >
            <div className="relative h-80 lg:h-full overflow-hidden">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-1 bg-violet-500 text-white text-sm font-semibold rounded-full mb-4">
                  {blogs[0].category}
                </span>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                  {blogs[0].title}
                </h3>
                
                <p className="text-slate-300 mb-6 hidden lg:block">
                  {blogs[0].excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <span className="flex items-center gap-1">
                    <HiCalendar />
                    {blogs[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiClock />
                    {blogs[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Other Posts */}
          {blogs.slice(1).map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (index + 1) * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-violet-500 text-white text-xs font-semibold rounded-full">
                  {blog.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-violet-500 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-slate-500 text-xs">
                  <span className="flex items-center gap-1">
                    <HiCalendar />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiClock />
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog