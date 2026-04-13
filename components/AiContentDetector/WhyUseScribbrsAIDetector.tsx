import Image from 'next/image'
import React from 'react'

interface Feature {
    id: number;
    imageSrc: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        id: 1,
        imageSrc: '/assets/scribbrs-3.svg',
        title: 'Authority on AI and plagiarism',
        description: 'Our AI checker is built using advanced algorithms for detecting AI-generated content. It’s also been enhanced to distinguish between human-written.'
    },
    {
        id: 2,
        imageSrc: '/assets/scribbrs-2.svg',
        title: 'Advanced algorithms',
        description: 'Our AI checker is built using advanced algorithms for detecting AI-generated content. It’s also been enhanced to distinguish between human-written.'
    },
    {
        id: 3,
        imageSrc: '/assets/scribbrs-1.svg',
        title: 'Unlimited free AI checks',
        description: 'Perform an unlimited number of AI checks for free, with a limit of up to 1,200 words per submission, ensuring all of your work is authentic.'
    },
    {
        id: 4,
        imageSrc: '/assets/scribbrs-2.svg',
        title: 'No sign-up required',
        description: 'Start detecting AI-generated content instantly with our free AI Detector, without having to create an account.'
    },
    {
        id: 5,
        imageSrc: '/assets/scribbrs-4.svg',
        title: 'Confidentiality guaranteed',
        description: 'Rest easy knowing your submissions remain private; we do not store or share your data.'
    },
    {
        id: 6,
        imageSrc: '/assets/scribbrs-3.svg',
        title: 'Paraphrasing detection',
        description: 'Scribbr’s AI Detector provides insight into whether a piece of writing is fully AI-generated, AI-refined, or completely human-written.'
    },
    {
        id: 7,
        imageSrc: '/assets/scribbrs-1.svg',
        title: 'Multilingual support',
        description: 'Our AI Detector supports multiple languages, including German, French, and Spanish. We check and analyze your content at a high level.'
    },
    {
        id: 8,
        imageSrc: '/assets/scribbrs-3.svg',
        title: 'Paragraph level feedback',
        description: 'Our AI Checker identifies specific areas in your text that are likely AI-generated or AI-refined toprovide a detailed analysis of the content.'
    }
]

const WhyUseScribbrsAIDetector = () => {
    return (
        <div className='w-full mx-auto py-14 sm:py-20 max-w-[1000px] px-3.5 sm:px-5'>
            <h2 className='text-[#202F66] text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-center'>Why use Scribbr’s AI Detector</h2>
            <div className='mt-8 sm:mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-5'>
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className='bg-[#EBF8FD] rounded-xl px-3.5 py-5 sm:p-5 flex items-start gap-4' 
                        style={{boxShadow: "0px 4px 15px 0px #1F80E826"}}
                    >
                        <Image src={feature.imageSrc} alt={feature.title} width={34} height={34} />
                        <div>
                            <h2 className='text-[#333333] font-bold text-lg sm:text-xl'>{feature.title}</h2>
                            <p className='mt-1 text-[#333333] text-sm sm:text-base font-normal leading-[24px] sm:leading-[28px]'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyUseScribbrsAIDetector
