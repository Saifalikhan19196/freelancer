import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaFigma,
  FaServer
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiMongodb, 
  SiGraphql,
  SiJavascript,
  SiHtml5
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 95, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, level: 90, color: '#3178C6' },
        { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000' },
        { name: 'Tailwind', icon: SiTailwindcss, level: 95, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
        { name: 'GraphQL', icon: SiGraphql, level: 75, color: '#E10098' },
        { name: 'SharePoint', icon: FaServer, level: 90, color: '#0078D4' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
        { name: 'Figma', icon: FaFigma, level: 80, color: '#F24E1E' },
        { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
        { name: 'HTML/CSS', icon: SiHtml5, level: 95, color: '#E34F26' },
      ],
    },
  ]

  return (
    <section 
      id="skills" 
      className="relative py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-violet-500/5 via-transparent to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <span className="text-violet-600 dark:text-violet-400 text-sm font-medium">My Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            A showcase of the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <skill.icon 
                            size={20} 
                            style={{ color: skill.color }}
                          />
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(to right, ${skill.color}80, ${skill.color})` 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <p className="text-center text-slate-500 dark:text-slate-400 mb-8">
            Technologies I work with
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {skillCategories.flatMap(cat => cat.skills).map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 hover:border-violet-500/50 transition-colors cursor-pointer"
                title={skill.name}
              >
                <skill.icon size={28} style={{ color: skill.color }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills