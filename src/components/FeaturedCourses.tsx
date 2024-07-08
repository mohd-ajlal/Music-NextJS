import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";


interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
        
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-blue-800 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >{course.title}</CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >{course.description}</CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
        //   photo in course.image
            src="https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?cs=srgb&dl=pexels-thepaintedsquare-1010519.jpg&fm=jpg"
            // src={`/images/${course.slug}.jpg`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={course.title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={course.image}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Learn More →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
        {/* <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link> */}
                            </div>
                            </CardBody>
                        </CardContainer >
                    </div>
                ))}
        </div>

        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            // className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        View All Courses
      </Button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses