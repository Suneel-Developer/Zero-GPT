'use client'
import AIDetectorsVSPlagiarismCheckers from '@/components/ChatGPTDetector/AIDetectorsVSPlagiarismCheckers';
import OurAIDetectorIsPerfectFor from '@/components/ChatGPTDetector/OurAIDetectorIsPerfectFor';
import WhyUseScribbrsAIDetector from '@/components/ChatGPTDetector/WhyUseScribbrsAIDetector';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions';
import StartDetectingNow from '@/components/StartDetectingNow';
import React from 'react'
import TextDetector from '@/components/Home/TextDetector';

const ChatGPTDetector = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 rounded-b-[30px]" style={{ background: "linear-gradient(270deg, #D9EEFF 0%, #A8D8FF 100%)", opacity: 0.4,}}/>

                <div className="relative z-40 h-full pt-[120px] md:pt-[180px] pb-[220px] px-3.5">
                    <div className="text-center">
                        <h1 className="text-dark-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[58px] max-w-[864px] mx-auto uppercase">
                            Chat GPT Detector
                        </h1>
                        <p className="mt-3 text-dark-blue-gray font-semibold text-lg sm:text-xl leading-[28px]">
                            Identify AI-generated content, including ChatGPT and Copilot, with Scribbr&apos;s free AI detector
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative z-40 px-4 -mt-40">
                <div className="max-w-[1100px] mx-auto">
                    <TextDetector />
                </div>
            </div>

            <WhyUseScribbrsAIDetector/>
            <OurAIDetectorIsPerfectFor/>
            <AIDetectorsVSPlagiarismCheckers/>
            <FrequentlyAskedQuestions/>
            <StartDetectingNow/>
        </>
    );
}

export default ChatGPTDetector