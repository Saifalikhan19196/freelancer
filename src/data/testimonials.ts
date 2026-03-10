export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
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
