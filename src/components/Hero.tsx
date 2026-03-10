import { motion } from 'framer-motion'
import { 
  HiArrowDown, 
  HiDownload
} from 'react-icons/hi'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDribbble 
} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaDribbble, href: '#', label: 'Dribbble' },
  ]

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
  ]

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl blob" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl blob" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Floating Shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-violet-400 text-sm font-medium">Available for freelance work</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">Saif Developer</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl md:text-2xl text-slate-400 font-medium"
            >
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'React Developer',
                  2000,
                  'SPFx Expert',
                  2000,
                  'SharePoint Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-violet-400 font-semibold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg text-slate-400 max-w-lg mx-auto lg:mx-0"
            >
              I craft exceptional digital experiences with modern technologies. 
              Specializing in React, SharePoint, and enterprise solutions that 
              drive business success.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Hire Me
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-full hover:border-violet-500 hover:text-violet-400 transition-all duration-300 flex items-center gap-2"
              >
                <HiDownload />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full blur-3xl opacity-30 scale-90" />
              
              {/* Profile Image Container */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Hexagon Shape with Image */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Rotating Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 border-r-indigo-500"
                  />
                  
                  {/* Image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-violet-500 to-indigo-500 p-1">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                      <img
                        src="https://avatars.githubusercontent.com/u/141383317?v=4"
                        alt="Saif Developer"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Floating Tech Icons */}
                  {[
                    { icon: '⚛️', position: 'top-0 left-10', delay: 0 },
                    { icon: '🔷', position: 'top-20 -right-4', delay: 1 },
                    { icon: '📊', position: 'bottom-20 -left-4', delay: 2 },
                    { icon: '🚀', position: '-bottom-2 right-10', delay: 3 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: item.delay * 0.5 
                      }}
                      className={`absolute ${item.position} w-14 h-14 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 flex items-center justify-center text-2xl shadow-xl`}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="mt-2 text-sm text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <HiArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero