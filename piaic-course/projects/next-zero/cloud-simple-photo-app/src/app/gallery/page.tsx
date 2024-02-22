import UploadButton from "./uploadButton"

export default async function Gallery() {
    return(
        <section>
            <div className="flex justify-between pt-5">
            <h1 className="text-4xl font-bold">Gallery</h1>
            <UploadButton />
            </div>
        </section>
    )
}