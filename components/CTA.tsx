import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of vendors and affiliates already using our platform
          </p>
          <Button size="lg" asChild>
            <Link href="/dashboard/admin">
              Create Your Account <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
  )
}

export default CTA