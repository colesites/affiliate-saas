import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const NavBar = () => {
  return (
    <header className="w-full fixed px-4 md:px-6 mt-2 min-md:mt-10 z-50">
      <nav className="w-full z-50 rounded-2xl border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-secondary shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <span className="text-xl font-bold">AffiliateHub</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Button asChild>
              <Link href="/dashboard/admin">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
