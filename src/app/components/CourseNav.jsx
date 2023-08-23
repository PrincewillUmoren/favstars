import Link from 'next/link'
import React from 'react'

export default function CourseNav() {
  return (
    <aside>
        <ul>
            <Link href='/course/frontend'>
            <li>Frontend</li>
            </Link>
            <Link href='/course/backend'> 
            <li>Backend</li>
            </Link>
            <Link href='/course/project'>
            <li>Project</li>
            </Link>
        </ul>
    </aside>
  )
}
