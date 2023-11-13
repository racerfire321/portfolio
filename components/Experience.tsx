"use client"
import { useSectionInView } from '@/lib/hooks'
import React from 'react'

export default function Experience ()  {
 const {ref} = useSectionInView("Experience")

  return (
  <section ref={ref} id='Experience'>
 <div>experirnece</div>
  </section>
  )
}

