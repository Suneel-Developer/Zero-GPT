import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#F2F5F8]">
            <div className="w-full max-w-[580px] bg-white rounded-2xl py-10 sm:py-[56px] px-4 sm:px-8 mx-4 my-4" style={{ boxShadow: "0px 2px 7px 0px #2525250A" }}>
                <div className="flex justify-center mb-10 sm:mb-[60px]">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/logo.svg"
                            alt="Logo"
                            width={190}
                            height={36}
                        />
                    </div>
                </div>

                <h1 className="text-charcoal text-center text-[23px] tracking-[0.016em] font-semibold mb-[35px]">
                    Login to your Account
                </h1>

                <form className="max-w-[396px] mx-auto w-full">
                    <div className='space-y-4 '>
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
                    </div>

                    <div className="mt-[13px] mb-[25px] flex items-center justify-between">
                        <label className="flex items-center gap-1">
                            <input
                                type="checkbox"
                                className="w-4 h-4 border-gray-300 rounded text-[#405BDD] focus:ring-[#405BDD]"
                            />
                            <span className="text-sm font-medium text-[#848484]">Remember me</span>
                        </label>
                        <Link
                            href="/forgot-password"
                            className="text-sm font-medium text-[#405BDD] hover:text-[#405BDD] underline underline-offset-2"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <Link href='/'
                        type="submit"
                        className="w-full bg-main-clr hover:bg-white hover:border hover:shadow-inner scale-100 hover:scale-95 transition-all duration-300 text-white hover:text-charcoal h-[50px] text-[17px] font-extrabold rounded-[10px] flex items-center justify-center gap-2"
                    >
                        Login
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
                    </Link>
                </form>

                <div className="mt-4 text-center text-sm text-[#848484]">
                    Don&apos;t have a account?{' '}
                    <Link
                        href="/signup"
                        className="text-[#405BDD] hover:text-[#405BDD] font-semibold font-outfit"
                    >
                        Create new account
                    </Link>
                </div>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#C9C9C9]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-[#848484] font-semibold font-outfit">
                                Or Sign Up with
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

