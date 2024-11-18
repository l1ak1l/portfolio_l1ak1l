import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Socials from '@/components/Socials'

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="about">
        <About />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="socials">
        <Socials  />
      </section>
    </main>
  )
}