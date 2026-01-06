import React, { useRef } from 'react'

const FullScreenNav = () => {

    const navLinkRef = useRef(null)

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
            "linkImg": ["contactimg.png", "contactimg.png"]
        },
        {
            "linkName": "Blog",
            "linkDesc": "Read Article",
            "linkImg": ["blogimg1.jpg", "blogimg2.png"]
        }

    ]


    return (
        <div className='h-screen w-full py-22 bg-black'>
            {fullScreenNavData.map((links, idx) => {
                return (
                    <div key={idx} className='navBar relative cursor-pointer'>
                        <div ref={navLinkRef} className='w-full'>
                            <h1 className='text-white border-y py-4 leading-[0.8] font-[font500] text-[8vw] uppercase text-center '>{links.linkName}</h1>
                        </div>
                        <div >
                            <div className='moveNav bg-[#D3FD50] flex pt-4 absolute top-0 h-0 opacity-0 w-full'>
                                <div className='navOverlay flex items-center'>
                                    <h2 className='text-[8vw] uppercase whitespace-nowrap font-[font500]'>{links.linkDesc}</h2>
                                    <img className='w-[17vw] shrink-0 object-top object-cover h-[15vh] mb-4 rounded-full' src={links.linkImg[0]} alt="" />
                                    <h2 className='text-[8vw] uppercase whitespace-nowrap font-[font500]'>{links.linkDesc}</h2>
                                    <img className='w-[17vw] shrink-0 object-top object-cover h-[15vh] mb-4 rounded-full' src={links.linkImg[1]} alt="" />
                                </div>
                                <div className='navOverlay flex items-center'>
                                    <h2 className='text-[8vw] uppercase whitespace-nowrap font-[font500]'>{links.linkDesc}</h2>
                                    <img className='w-[17vw] shrink-0 object-top object-cover h-[15vh] mb-4 rounded-full' src={links.linkImg[0]} alt="" />
                                    <h2 className='text-[8vw] uppercase whitespace-nowrap font-[font500]'>{links.linkDesc}</h2>
                                    <img className='w-[17vw] shrink-0 object-top object-cover h-[15vh] mb-4 rounded-full' src={links.linkImg[1]} alt="" />
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