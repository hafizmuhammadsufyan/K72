import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = ({ children }) => {

    let locate = useLocation()

    const stairsParentDiv = useRef(null)
    const appDiv = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(stairsParentDiv.current, {
            display: 'block',
        })

        tl.from('.stairs', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stairs', {
            y: "100%",
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairsParentDiv.current, {
            display: 'none',
        })
        tl.to('.stairs', {
            y: "0%",
        })
        tl.from(appDiv.current, {
            opacity: 0,
        }, "-=1.5")
    }, [locate.pathname])


    return (
        <div>
            <div ref={stairsParentDiv} className='h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stairs w-1/5 h-screen bg-black'></div>
                    <div className='stairs w-1/5 h-screen bg-black'></div>
                    <div className='stairs w-1/5 h-screen bg-black'></div>
                    <div className='stairs w-1/5 h-screen bg-black'></div>
                    <div className='stairs w-1/5 h-screen bg-black'></div>
                </div>
            </div>

            <div ref={appDiv}>
                {children}
            </div>
        </div>
    )
}

export default Stairs