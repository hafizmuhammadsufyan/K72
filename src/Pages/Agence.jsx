import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"


const Agence = ({ setNavColor }) => {
  const imgDivRef = useRef(null)
  const imgRef = useRef(null)
  const mainRef = useRef(null)
  const heroText = useRef(null)
  const hero2Text = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  let imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"]

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 22%",
        endTrigger: ".section2",
        end: "top 60%",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          let imgIndex = Math.floor(self.progress * imgArray.length)
          imgRef.current.src =
            imgArray[imgIndex] || imgArray[imgArray.length - 1]
        }
      }
    })
  }, [])

  useGSAP(() => {
    gsap.to(mainRef.current, {
      scrollTrigger: {
        trigger: '.hero1',
        start: "top 55%",
        end: "top top",
        onUpdate: (elem) => {
          if (elem.progress <= 0) {

            mainRef.current.style.backgroundColor = "white"
            mainRef.current.style.color = "black"
            heroText.current.style.opacity = 0
            setNavColor("black")

          } else {
            mainRef.current.style.backgroundColor = "black"
            mainRef.current.style.color = "white"
            heroText.current.style.opacity = 1
            setNavColor("white")
          }
        }
      }
    })
  })

  useGSAP(() => {
    gsap.to(".hero1Top", {
      xPercent: -200,
      duration: 9,
      ease: "linear",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 100)
      }
    })
  })

  useGSAP(() => {
    gsap.to(".hero1Bottom", {
      xPercent: 200,
      duration: 9,
      ease: "linear",
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(100, -100)
      }
    })
  })

  useGSAP(() => {
    gsap.to('.heroImg', {
      scrollTrigger: {
        trigger: '.heroImg',
        start: 'top top',
        pin: true,
        scrub: true
      }
    })

  })


  return (
    <div ref={mainRef} className="transition-all duration-500 ease-in-out">
      <div className="section1">
        <div ref={imgDivRef} className="h-[44vh] w-[15.2vw] overflow-hidden rounded-2xl absolute top-[22%] left-[30%] bg-red-500">
          <img ref={imgRef} className="object-cover h-full w-full" src="img1.jpg" alt="" />
        </div>
        <div className="font-[font500] relative py-1">
          <div className="mt-[56vh]">
            <h1 className="text-[20vw] leading-[17vw] text-center uppercase">Seven7y <br /> two</h1>
          </div>
          <div className="pl-[41%]">
            <p className="text-6xl">&emsp; &emsp; &emsp; &emsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen px-[14vw] py-30">
        <div className="flex">
          <div className="font-[font500] text-2xl w-[24vw]">
            <h3>Expertise</h3>
          </div>
          <div className="font-[font500] text-2xl w-[24vw]">
            <h3>Strategy</h3>
            <h3>Advertising</h3>
            <h3>Branding</h3>
            <h3>Design</h3>
            <h3>Content</h3>
          </div>
        </div>
        <div className="flex gap-44 mt-10">
          <div className="font-[font500] text-2xl">
            <h3>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</h3>
          </div>
          <div className="font-[font500] text-2xl">
            <h3>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</h3>
          </div>
          <div className="font-[font500] text-2xl">
            <h3>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</h3>
          </div>
        </div>
      </div>
      <div className="section3 w-full h-screen">
        <div className="hero1 relative h-full w-full">
          <div ref={heroText} className="opacity-0 transition-all duration-1000">
            <div className="heroText hero1Top w-full text-[#D3FD50] overflow-hidden absolute top-40 font-[font500] text-[8vw] uppercase whitespace-nowrap">
              <h3>Sebastian</h3>
            </div>
            <div className="heroText z-4 hero1Bottom text-[#D3FD50] absolute w-full bottom-40 flex items-center gap-20 font-[font500] uppercase whitespace-nowrap">
              <h3 className=" text-[8vw]">Roy</h3>
              <p className="text-[2vw] text-white">Associate Creative Director</p>
            </div>
          </div>
          <div className="heroImg h-screen w-[30vw] overflow-hidden rounded-3xl absolute top-0 left-[33vw]">
            <img className="object-cover object-center h-full w-full" src="img9.jpg" alt="" />
          </div>

        </div>
      </div>
      <div className="section4 relative w-full h-screen">
        <div className="hero2 h-full w-full">
          <div ref={hero2Text}>
            <div className="heroText hero1Top w-full text-[#D3FD50] overflow-hidden absolute top-40 font-[font500] text-[8vw] uppercase whitespace-nowrap">
              <h3>Maggie Lavoie</h3>
            </div>
            <div className="hero2Text z-4 hero1Bottom text-[#D3FD50] absolute w-full bottom-40 flex items-center gap-20 font-[font500] uppercase whitespace-nowrap">
              <h3 className=" text-[8vw]">Philippe</h3>
              <p className="text-[2vw] text-white">Accounts Director</p>
            </div>
          </div>
          <div className="heroImg h-screen w-[30vw] overflow-hidden rounded-3xl absolute top-0 left-[33vw]">
            <img className="object-cover object-center h-full w-full" src="img4.jpg" alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Agence