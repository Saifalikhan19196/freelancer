import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'React', 'SPFx', 'SharePoint', 'Full Stack']

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Node.js, and MongoDB. Includes payment integration, admin dashboard, and real-time inventory.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'SharePoint Intranet',
      description: 'Modern SharePoint intranet with custom SPFx web parts, Power Automate workflows, and seamless Microsoft 365 integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['SPFx', 'SharePoint', 'React'],
      category: 'SPFx',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind'],
      category: 'React',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Document Management System',
      description: 'Enterprise document management solution built on SharePoint with custom approval workflows and metadata tagging.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      tags: ['SharePoint', 'Power Automate'],
      category: 'SharePoint',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description: 'Interactive analytics dashboard with real-time data visualization, custom charts, and export functionality.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'D3.js', 'Node.js'],
      category: 'Full Stack',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'SPFx News Web Part',
      description: 'Custom SharePoint news web part with modern UI, filtering, and personalized content recommendations.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      tags: ['SPFx', 'React', 'TypeScript'],
      category: 'SPFx',
      github: '#',
      live: '#',
      featured: false,
    },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.tags.includes(activeFilter))

  return (
    <section 
      id="projects" 
      className="relative py-32 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/50'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-violet-500 hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-violet-500 hover:text-white transition-colors"
                    >
                      <HiExternalLink size={20} />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-violet-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-violet-500 text-violet-600 dark:text-violet-400 font-semibold rounded-full hover:bg-violet-500 hover:text-white transition-all duration-300"
          >
            View All Projects
            <HiExternalLink />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects