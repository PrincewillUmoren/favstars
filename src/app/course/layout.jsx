import React from 'react'
import CourseNav from '../components/CourseNav'

export const metadata = {
    title: 'course information',
    description: 'this is the course page',
  }
  

export default function layout({children}) {
  return (
    <div className='flex space-x-4'>
        <CourseNav />
        <section>
        {children}
        </section>
    </div>
  )
}
