import Image from 'next/image'
import Link from 'next/link'

export default function Signup() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-[580px] bg-white rounded-2xl py-10 sm:py-[56px] px-4 sm:px-8 mx-4 my-4" style={{ boxShadow: "0px 2px 7px 0px #2525250A" }}>
                <div className="flex justify-center mb-10 sm:mb-[56px]">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/logo.svg"
                            alt="Logo"
                            width={190}
                            height={36}
                        />
                    </div>
                </div>

                <h1 className="text-charcoal text-center text-[23px] tracking-[0.016em] font-semibold mb-[24px]">
                    Create your Account
                </h1>

                <form className="max-w-[396px] mx-auto w-full">
                    <div className='space-y-4 '>
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                            Full Name
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your Full Name"
                                className="w-full px-3 h-[46px] placeholder:text-[#8F8F8F] text-[15px] border border-[#DDDDDD] rounded-lg focus:outline-none focus:ring-1 focus:ring-charcoal focus:border-transparent"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="w-full px-3 h-[46px] placeholder:text-[#8F8F8F] text-[15px] border border-[#DDDDDD] rounded-lg focus:outline-none focus:ring-1 focus:ring-charcoal focus:border-transparent"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-sm font-medium text-charcoal">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-3 h-[46px] placeholder:text-[#8F8F8F] text-[15px] border border-[#DDDDDD] rounded-lg focus:outline-none focus:ring-1 focus:ring-charcoal focus:border-transparent"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-sm font-medium text-charcoal">
                                Password Confirm
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your Confirm Password"
                                className="w-full px-3 h-[46px] placeholder:text-[#8F8F8F] text-[15px] border border-[#DDDDDD] rounded-lg focus:outline-none focus:ring-1 focus:ring-charcoal focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-main-clr hover:bg-white hover:border hover:shadow-inner scale-100 hover:scale-95 transition-all duration-300 text-white hover:text-charcoal h-[50px] text-[17px] font-extrabold rounded-[10px] flex items-center justify-center gap-2"
                    >
                        Sign up
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </form>

                <div className="mt-4 text-center text-sm text-[#848484]">
                    If you are already a member, please
                    <Link href="/login" className="text-[#405BDD] hover:text-[#405BDD] font-semibold font-outfit"> Login</Link>
                </div>

                <h3 className='text-center text-[#656565] mt-1 font-semibold text-[14px]'>Or</h3>

                <div className="mt-2">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#C9C9C9]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-[#848484] font-semibold font-outfit">
                                Quick sign up with your favorite social Profile
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Link href='/google' className='bg-white rounded-full w-10 h-10 flex items-center justify-center hover:border transition-all duration-300' style={{ boxShadow: "0px 2px 8px 0px #826DFF17" }}>
                            <Image src='/assets/google.svg' alt='google' width={24} height={24} />
                        </Link>
                        <Link href='/facebook' className='bg-white rounded-full w-10 h-10 flex items-center justify-center hover:border transition-all duration-300' style={{ boxShadow: "0px 2px 8px 0px #826DFF17" }}>
                            <Image src='/assets/facebook-ion.svg' alt='facebook' width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}