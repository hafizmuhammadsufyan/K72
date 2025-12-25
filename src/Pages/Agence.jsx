import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"


const Agence = () => {
  const imgDivRef = useRef(null)
  const imgRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  let imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"]

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 22%",
        end: "bottom -168%",
        pin: true,
        scrub: true,
        onUpdate: (elem) => {
          let imgIndex = Math.floor(elem.progress * imgArray.length)
          console.log(imgRef.current.src);
          imgRef.current.src = imgArray[imgIndex] ? imgArray[imgIndex] : imgArray[imgArray.length - 1]
          
          
        },
      },

    })
  }, [])

  return (
    <div>
      <div className="section1">
        <div ref={imgDivRef} className="h-[44vh] w-[15.2vw] overflow-hidden rounded-2xl absolute top-[22%] left-[30%] bg-red-500">
          <img ref={imgRef} className="object-cover h-full w-full" src="img1.jpg" alt="" />
        </div>
        <div className="font-[font500] relative">
          <div className="mt-[56vh]">
            <h1 className="text-[20vw] leading-[17vw] text-center uppercase">Seven7y <br /> two</h1>
          </div>
          <div className="pl-[41%]">
            <p className="text-6xl">&emsp; &emsp; &emsp; &emsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  )
}

export default Agence