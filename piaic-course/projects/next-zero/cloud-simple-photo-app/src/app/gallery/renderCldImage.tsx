'use client'

import { CldImage } from "next-cloudinary"

//render each image
export function RenderCldImage(props: any) {
    return <CldImage {...props} />
}