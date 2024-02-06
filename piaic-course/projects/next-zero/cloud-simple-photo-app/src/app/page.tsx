'use client'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'
import { CldUploadButton } from 'next-cloudinary'
import { useState } from 'react'
export type UploadResults = {
  event: 'success',
  info: {
    public_id: string;
  }
}

export default function Home() {

  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    

    <CldUploadButton  
      onUpload = {(results: UploadResults) => {
        setImageId(results.info.public_id)
      }}
      uploadPreset="gw51wlwc"
    />
    {imageId && (
      <CldImage
        width="760"
        height="600"
        src= {imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    )}
    </main>
  )
}
