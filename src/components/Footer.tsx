import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDribbble, 
  FaHeart 
} from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Resume', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaDribbble, href: '#', label: 'Dribbble' },
  ]

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="text-3xl font-bold font-['Space_Grotesk']">
                <span className="gradient-text">Saif</span>
                <span className="text-white">.dev</span>
              </span>
            </a>
            
            <p className="text-slate-400 max-w-md mb-8">
              Passionate developer crafting exceptional digital experiences. 
              Specializing in React, SharePoint, and modern web technologies 
              that drive business success.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-r hover:from-violet-500 hover:to-indigo-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-1">
            © 2024 Saif Developer. Made with 
            <FaHeart className="text-red-500 mx-1" /> 
            All rights reserved.
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
          >
            <HiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer