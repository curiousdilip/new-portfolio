"use client";
import Image from "next/image";
import Header from "./components/Header";
import "./home.css"
import Accordion from "./components/Accordion";
import { servicesData, toolsData } from "./data/home";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function Home() {
  return (

    <main>
      <Header />
      <section id="hero">
        <div className="container">
          <div className="content">

            <h1>I’m Arnau Ros, a graphic designer & content creator based in Barcelona.  for freelance & collaborations.
            </h1>
          </div>
          <Image
            src="/hero-img.jpg"
            width={606}
            height={564}
            alt="Hero Image"
          />
        </div>
      </section>
      <section id="projects">
        <div className="container">
          <div className="heading">
            <h2>Projects</h2>
          </div>
          <div className="slider">
            <div className="pr-one">
              <a href="#">01 Example</a>
              <Image
                src="/rectangle-1.jpg"
                width={370}
                height={558}
                alt="Hero Image"
              />
            </div>
            <div className="pr-one">
              <a href="#">03 Example</a>
              <Image
                src="/rectangle-2.jpg"
                width={370}
                height={558}
                alt="Hero Image"
              />
            </div>
            <div className="pr-one">
              <a href="#">03 Example</a>
              <Image
                src="/rectangle-3.jpg"
                width={370}
                height={558}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="container">
          <div className="heading">
            <h2>Content Creation</h2>
          </div>
          <div className="content">
            <div className="text">
              <p>Join my YouTube channel where I show my design thinking, my process, and my personality. The channel has helped over 200K designers become more proficient in the tools I use everyday, Figma, Webflow & more. Join the journey!</p><p>
                Get in contact about a sponsorship </p>
            </div>
            <Image
              src="/YouTube.jpg"
              width={674}
              height={376}
              alt="CTA Image"
            />
          </div>
        </div>
      </section>

      <section id="about-me">
        <div className="container">
          <div className="heading">
            <h2>About Me</h2>
          </div>
          <div className="content">
            <div className="text">
              <p>I'm a product designer working on various projects on a wide range of clients. My skillset lies on creating branding packages & websites to deliver the full online experience for new and also veteran businesses.
              </p>
              <p>You can often find me creating videos about design over on YouTube, or sharing my thoughts on my podcast, Dialogue With Designers . I'm passionate about giving back and teaching what I know to the next generation of designers.</p>
            </div>
            <div className="services">
              <p>Your one stop shop for:</p>
              <div className="accordion">
                {servicesData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tools">
        <div className="container">
          <Swiper
            loop={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 10,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="tools-slider"
          >
            {toolsData.map((item, index) => (
              <SwiperSlide key={index}>
                <p>{item.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section id="clients">
        <div className="container">
          <div className="heading">
            <h2>What Clients Say</h2>
          </div>
        </div>
      </section>
    </main>
  )
}