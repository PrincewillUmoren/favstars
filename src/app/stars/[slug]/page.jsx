import { data } from "@/app/page"
import Image from "next/image"


export default function page({params}) {

    const star = data.find(pro => pro.id === params.slug)

  return (
    <section>
       <h1>{star.name}</h1> 
       <Image src={star.image} alt={star.name} width={400} height={400}/>
       <h2>Nationality: {star.nationality}</h2>
       <p>Profession: {star.profession}</p>
       <p>Date of Birth: {star.date_of_birth}</p>
       <p>Net worth: {star.net_worth}</p>
       <p>Description: {star.description}</p>
    </section>
  )
}
