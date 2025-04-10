"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  authorRole: string
  authorImage: string
  image: string
  slug: string
}

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  author,
  authorRole,
  authorImage,
  image,
  slug,
}: BlogCardProps) {
  return (
    <motion.div
      className="group bg-white border border-neutral-200 rounded-lg overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={340}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-neutral-800">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-black mb-2 line-clamp-2 group-hover:text-neutral-700 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 line-clamp-2">{excerpt}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
              <Image
                src={authorImage || "/placeholder.svg"}
                alt={author}
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-black">{author}</p>
              <p className="text-xs text-neutral-500">{date}</p>
            </div>
          </div>

          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-sm font-medium text-black hover:text-neutral-700 transition-colors"
          >
            Leer
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
