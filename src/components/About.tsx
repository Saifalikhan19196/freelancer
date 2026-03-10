import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HiCode, 
  HiLightningBolt, 
  HiUsers, 
  HiAcademicCap 
} from 'react-icons/hi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: HiCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code.',
    },
    {
      icon: HiLightningBolt,
      title: 'Fast Performance',
      description: 'Optimized applications that load quickly and run smoothly.',
    },
    {
      icon: HiUsers,
      title: 'User Focused',
      description: 'Creating intuitive interfaces that users love to interact with.',
    },
    {
      icon: HiAcademicCap,
      title: 'Always Learning',
      description: 'Continuously updating skills with the latest technologies.',
    },
  ]

  return (
    <section 
      id="about" 
      className="relative py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent" />
      
      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop"
                  alt="Workspace"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">5+</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Years of</p>
                    <p className="text-lg font-bold text-slate-800 dark:text-white">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <HiCode className="text-white text-3xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Title */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
              Crafting Digital
              <span className="gradient-text"> Excellence</span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building exceptional 
              digital experiences. With over 5 years of experience, I specialize in React, 
              SharePoint (SPFx), and modern web technologies.
            </p>

            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My journey began with a curiosity for creating things that live on the internet. 
              Today, I help businesses transform their ideas into powerful digital solutions 
              that drive growth and engagement.
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-violet-500/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="text-violet-500 text-xl" />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About