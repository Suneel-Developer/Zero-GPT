'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

interface NavLink {
    name: string
    href: string
    dropdown?: NavLink[]
    title?: string
    icon?: string
}

const navLinks: NavLink[] = [
    { name: 'ABOUT', href: '/about-us' },
    {
        name: 'SERVICES',
        href: '/services',
        dropdown: [
            { name: 'AI Content Detector', href: '/ai-content-detector', title: "Scan for potential AI text in any doc", icon: "/assets/aiDetectorIcon.webp" },
            { name: 'Chat GPT Detector', href: '/chat-gpt-detector', title: "Scan for potential AI text in any doc", icon: "/assets/advancedScanIcon.webp" }
        ]
    },
    { name: 'PRICING', href: '/pricing' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact-us' },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setHasScrolled(scrollPosition > 20)
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name)
    }

    return (
        <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="w-full px-3.5 xl:max-w-[1000px] 2xl:max-w-[1180px] mx-auto sm:px-5 transition-all duration-300">
                <div className={`flex items-center justify-between ${hasScrolled ? 'py-5' : 'py-5 sm:py-8'}`} >
                    {/* Logo */}
                    <Link href="/">
                        <Image src='/assets/logo.svg' alt='logo' width={190} height={36.37} className='sm:w-[190px] sm:h-[36px] w-[170px]' />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden space-x-[27px] lg:flex" ref={dropdownRef}>
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative">
                                {link.dropdown ? (
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className="mt-[3px] text-sm font-medium text-secondary flex items-center"
                                    >
                                        {link.name}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-secondary"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="absolute -left-[140px] mt-2 w-[350px] rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="px-8 py-6" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <h2 className='text-lg text-charcoal/80 font-medium'>Services</h2>
                                            {link.dropdown.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="flex items-center gap-2 mt-6 text-sm text-gray-700 scale-100 hover:scale-105 transition-all duration-300"
                                                    role="menuitem"
                                                >
                                                    <Image src={subLink.icon ?? '/default-icon-path.webp'} alt='aiDetectorIcon' width={34} height={34} />
                                                    <div className='flex flex-col items-start'>
                                                        <h2 className='font-medium mb-0.5'>
                                                            {subLink.name}
                                                        </h2>
                                                        <h3>
                                                            {subLink.title}
                                                        </h3>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden space-x-4 lg:flex items-center">
                        <LanguageSwitcher />
                        <Link
                            href="/signup"
                            className="rounded-[500px] bg-white px-[22px] py-[15px] text-sm font-semibold text-dark-blue hover:shadow-inner  transition-all duration-300 ease-in-out shadow-lg">
                            SIGN UP
                        </Link>
                        <Link
                            href="/login"
                            className="rounded-[500px] bg-dark-blue px-[25px] py-[15px] text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-inner border hover:text-dark-blue hover:bg-white">
                            LOGIN
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden flex gap-2 sm:gap-5 items-center'>
                        <LanguageSwitcher />
                        <button onClick={toggleMenu} className='lg:hidden block'>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-x-0 top-0 transform overflow-hidden bg-white transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
                    <div className="space-y-1 px-3.5 pb-3 pt-2">
                        <div className='lg:hidden flex py-3 items-center justify-between w-full'>
                            <Link href="/">
                                <Image src='/assets/logo.svg' alt='logo' width={190} height={36.37} className='sm:w-[190px] sm:h-[36px] w-[170px]' />
                            </Link>
                            <button onClick={toggleMenu} className='lg:hidden block'>
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>

                        {navLinks.map((link, index) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(link.name)}
                                            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                                }`}
                                            style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                            {link.name}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        <div className="pl-6 pointer-events-auto">
                                            {link.dropdown.map((subLink, subIndex) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className={`block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                                        }`}
                                                    style={{ transitionDelay: `${(index * 100) + ((subIndex + 1) * 50)}ms` }}
                                                    onClick={() => {
                                                        setIsMenuOpen(false)
                                                        setActiveDropdown(null)
                                                    }}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`block transform rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                            }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="mt-4 space-y-2 px-3">
                            <Link
                                href="/signup"
                                className={`block w-full transform rounded-full border bg-white px-6 py-2 text-center text-sm font-medium text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                SIGN UP
                            </Link>
                            <Link
                                href="/login"
                                className={`block w-full transform rounded-full bg-dark-blue px-6 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                LOGIN
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

