import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HiCode, 
  HiDeviceMobile, 
  HiTemplate, 
  HiDatabase, 
  HiCloud, 
  HiCog 
} from 'react-icons/hi'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: HiCode,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using React, Next.js, and modern frameworks.',
      features: ['React/Next.js', 'Responsive Design', 'Performance Optimization'],
      color: 'from-violet-200 to-purple-200',
    },
    {
      icon: HiTemplate,
      title: 'SPFx Development',
      description: 'Creating custom SharePoint solutions with SPFx for enterprise collaboration needs.',
      features: ['Web Parts', 'Extensions', 'Custom Solutions'],
      color: 'from-blue-200 to-cyan-200',
    },
    {
      icon: HiDatabase,
      title: 'SharePoint Solutions',
      description: 'Full SharePoint development including lists, libraries, workflows, and integrations.',
      features: ['Power Automate', 'Power Apps', 'Integrations'],
      color: 'from-indigo-200 to-blue-200',
    },
    {
      icon: HiDeviceMobile,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces that provide exceptional user experiences.',
      features: ['Figma Design', 'Prototyping', 'User Research'],
      color: 'from-pink-200 to-rose-200',
    },
    {
      icon: HiCloud,
      title: 'API Development',
      description: 'Building robust RESTful APIs and backend services for scalable applications.',
      features: ['Node.js', 'Express', 'MongoDB'],
      color: 'from-emerald-200 to-teal-200',
    },
    {
      icon: HiCog,
      title: 'Consulting',
      description: 'Providing technical consulting for architecture decisions and technology stack selection.',
      features: ['Code Review', 'Architecture', 'Mentoring'],
      color: 'from-amber-200 to-orange-200',
    },
  ]

  return (
    <section 
      id="services" 
      className="relative py-32 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">What I Do</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Comprehensive development services tailored to bring your vision to life 
            with cutting-edge technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-violet-400/60 dark:hover:border-violet-500/60 hover:shadow-[0_20px_60px_-10px_rgba(139,92,246,0.3)] dark:hover:shadow-[0_20px_60px_-10px_rgba(139,92,246,0.4)] transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-t-3xl`} />

              {/* Background glow wash */}
              <div className="absolute inset-0 bg-linear-to-br from-violet-500/0 via-transparent to-indigo-500/0 group-hover:from-violet-500/5 group-hover:to-indigo-500/8 dark:group-hover:from-violet-500/10 dark:group-hover:to-indigo-500/15 transition-all duration-500 rounded-3xl" />

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl bg-linear-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-300`}>
                <service.icon className="text-white text-2xl" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="relative text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300"
                  >
                    <span className={`w-2 h-2 rounded-full bg-linear-to-r ${service.color} group-hover:scale-125 transition-transform duration-300`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow badge */}
              <div className="absolute bottom-7 right-7 w-10 h-10 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 shadow-lg shadow-violet-500/40 transition-all duration-300">
                <span className="text-white text-sm font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services