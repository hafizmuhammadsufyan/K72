import React, { useRef } from 'react'

const FullScreenNav = () => {

    const navOverlayRef = useRef(null)

    const fullScreenNavData = [
        {
            "linkName": "Work",
            "linkDesc": "See Everything",
            "linkImg": ["workimg1.png", "workimg2.jpg"]
        },
        {
            "linkName": "Agency",
            "linkDesc": "Know Us",
            "linkImg": ["img1.jpg", "img4.jpg"]
        },
        {
            "linkName": "Contact",
            "linkDesc": "Send Us a fax",
            "linkImg": ["workimg1", "workimg2"]
        },
        {
            "linkName": "Blog",
            "linkDesc": "Read Article",
            "linkImg": ["blogimg1.jpg", "blogimg2.png"]
        }

    ]


    return (
        <div className='h-screen w-full py-40 bg-black'>
            {fullScreenNavData.map((links, idx) => {
                return (
                    <div key={idx} className='navBar relative cursor-pointer'>
                        <div className='w-full'>
                            <h1 className='text-white border-y leading-[0.8] pt-4 font-[font500] text-[8vw] uppercase text-center '>{links.linkName}</h1>
                        </div>
                        <div >
                            <div className='moveNav bg-[#D3FD50] hidden pt-4 absolute top-0 h-0 w-full'>
                                <div className='navOverlay flex items-center'>
                                    <h2 className='text-[8vw] uppercase whitespace-nowrap font-[font500]'>{links.linkDesc}</h2>
                                    <img className='w-[13vw] shrink-0 object-top-right object-cover h-28 rounded-full' src={links.linkImg[0]} alt="" />
                                    <h2 className='text-[8vw] uppercase whitespace-nowrap font-[font500]'>{links.linkDesc}</h2>
                                    <img className='w-[13vw] shrink-0 object-top-right object-cover h-28 rounded-full' src={links.linkImg[1]} alt="" />
                                </div>
                                <div className='navOverlay flex items-center'>
                                    <h2 className='text-[8vw] uppercase whitespace-nowrap font-[font500]'>{links.linkDesc}</h2>
                                    <img className='w-[13vw] shrink-0 object-cover h-28 rounded-full' src={links.linkImg[0]} alt="" />
                                    <h2 className='text-[8vw] uppercase whitespace-nowrap font-[font500]'>{links.linkDesc}</h2>
                                    <img className='w-[13vw] shrink-0 object-cover h-28 rounded-full' src={links.linkImg[1]} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FullScreenNav