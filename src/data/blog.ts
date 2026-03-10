export interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  category: string
}

export const blogs: BlogPost[] = [

  {
    id: 1,
    title: "SPFx Development Guide",
    description: "Learn how to build SharePoint Framework apps using React and TypeScript.",
    date: "10 Mar 2026",
    category: "SharePoint"
  },

  {
    id: 2,
    title: "React Performance Tips",
    description: "Best techniques to optimize React applications for speed and performance.",
    date: "05 Mar 2026",
    category: "React"
  },

  {
    id: 3,
    title: "Tailwind UI Tricks",
    description: "Create modern responsive UI quickly using Tailwind CSS.",
    date: "01 Mar 2026",
    category: "CSS"
  }

]