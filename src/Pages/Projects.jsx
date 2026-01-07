import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef, useState } from 'react'

const Projects = () => {
  const workUpperRef = useRef(null)

  const workUpperLeft = useRef(null)
  const workUpperMiddle = useRef(null)
  const workUpperRight = useRef(null)

  // console.log(workUpperLeft.current.innerText);



  const workData = [
    {
      workImg1: "workimg1.png",
      left1: "iA Financial Group",
      middle1: "Get Ahead",
      right1: "2024",
      workImg2: "workimg2.jpg",
      left2: "Jean Chotu",
      middle2: "Everyone's Pharmacy",
      right2: "2025"
    },

    {
      workImg1: "workimg3.jpg",
      left1: "OKA",
      middle1: "OKA",
      right1: "2022",
      workImg2: "workimg4.jpg",
      left2: "Widespace",
      middle2: "Widespace",
      right2: "2022"
    },
    {
      workImg1: "workimg5.jpg",
      left1: "GardaWorld",
      middle1: "Best",
      right1: "2021",
      workImg2: "workimg6.jpg",
      left2: "Coup Fumant",
      middle2: "Coup Fumant",
      right2: "2021"
    },
    {
      workImg1: "workimg7.jpg",
      left1: "Opto_Reseau",
      middle1: "Opto_Reseau",
      right1: "2021",
      workImg2: "workimg8.jpg",
      left2: "Lassonde",
      middle2: "Fruite",
      right2: "2021"
    },
  ]

  useGSAP(() => {
    gsap.set(workUpperRef.current, {
      y: -100,
      opacity: 0,
      display: "none"
    });
  });


  function inAnimation() {
    gsap.to(workUpperRef.current, {
      y: 0,
      opacity: 1,
      display: "flex",
      duration: 0.5,
      ease: "power3.out"
    });
  }

  function outAnimation() {
    gsap.to(workUpperRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        gsap.set(workUpperRef.current, { display: "none" });
      }
    });
  }

  function colorAnimation() {
    gsap.from(workUpperLeft.current, {
      color: "#D3FD50",
      duration: 0.5,
      onComplete: () => {
        workUpperLeft.current.style.color = "black"
      }
    }),
      gsap.from(workUpperMiddle.current, {
        color: "#D3FD50",
        duration: 0.5,
        onComplete: () => {
          workUpperMiddle.current.style.color = "black"
        }
      }),
      gsap.from(workUpperRight.current, {
        color: "#D3FD50",
        duration: 0.5,
        onComplete: () => {
          workUpperRight.current.style.color = "black"
        }
      })
  }

  // gsap.registerPlugin(ScrollTrigger)

  // useGSAP(() => {
  //   gsap.from('.workDivParent', {
  //     height: 0,
  //     stagger: {
  //       amount: 0.5
  //     },
  //     scrollTrigger: {
  //       trigger: '.lol',
  //       markers: true,
  //       start: "top 100%",
  //       end: "top -100%",
  //       scrub: true
  //     },

  //   })
  // })




  return (
    <div className='pt-1'>
      <div className='h-[7.5vh] fixed top-0 left-0 w-full bg-white z-2'></div>
      <div ref={workUpperRef} className='flex text-black border-y-2 z-5 justify-between fixed w-full bg-white top-[7.5vh] px-5 py-2'>
        <div><h3 ref={workUpperLeft} className='font-[font300] font-normal text-4xl'>iA Financial Group</h3></div>
        <div><h3 ref={workUpperMiddle} className='font-[font300] font-normal text-4xl'>Get Ahead</h3></div>
        <div><h3 ref={workUpperRight} className='font-[font300] font-normal text-4xl'>2025</h3></div>
      </div>
      <div className='px-3'>
        <div className='mt-[45vh]'>
          <h1 className='text-[12vw] uppercase font-[font500]'>work</h1>
        </div>
        <div className='lol -mt-12'
          onMouseEnter={inAnimation}
          onMouseLeave={outAnimation}
        >
          <div className='workDivParent w-full bg-red-200 flex justify-around flex-wrap gap-2'>
            {workData.map((works, idx) => {
              return (
                <>
                  <div key={idx} className='workDiv w-[47.9vw] h-[40vh] relative overflow-hidden cursor-pointer'
                    onMouseEnter={() => {
                      workUpperLeft.current.innerText = works.left1
                      workUpperMiddle.current.innerText = works.middle1
                      workUpperRight.current.innerText = works.right1
                      colorAnimation()
                    }}

                  >
                    <img className='h-full w-full object-cover' src={works.workImg1} alt="" />
                    <div className='opacity-0 w-full h-full bg-black/30 absolute top-0 left-0 flex justify-center items-center'>
                      <a className='text-white transition-all border-2 rounded-full py-1 px-10 text-4xl font-[font500] uppercase' href="#">View Project</a>
                    </div>
                  </div>
                  <div key={idx} className='workDiv w-[47.9vw] h-[40vh] relative overflow-hidden cursor-pointer'
                    onMouseEnter={() => {
                      workUpperLeft.current.innerText = works.left2
                      workUpperMiddle.current.innerText = works.middle2
                      workUpperRight.current.innerText = works.right2
                      colorAnimation()
                    }}

                  >
                    <img className='h-full w-full object-cover' src={works.workImg2} alt="" />
                    <div className='opacity-0 w-full h-full bg-black/30 absolute top-0 left-0 flex justify-center items-center'>
                      <a className='text-white transition-all border-2 rounded-full py-1 px-10 text-4xl font-[font500] uppercase' href="#">View Project</a>
                    </div>
                  </div>
                </>

              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects