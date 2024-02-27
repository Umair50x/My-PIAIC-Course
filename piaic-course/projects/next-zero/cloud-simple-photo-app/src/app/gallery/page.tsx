import { RenderCldImage } from "./renderCldImage";
import UploadButton from "./uploadButton"
import cloudinary from "cloudinary"

type searchResult= {
    public_id: string;
}

export default async function Gallery() {

    const results = await (cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('public_id','desc')
    .max_results(10)
    .execute()) as {resources: searchResult[]};

    // console.log(results);

    return(
        <section>
            <div className="flex justify-between pt-5">
                <h1 className="text-4xl font-bold">Gallery</h1>
                <UploadButton />
                <div className="grid grid-cols-4 gap-4">
                    {results.resources.map((result) => (
                        <div key={result.public_id}>
                            <RenderCldImage 
                                width="760"
                                height="600"
                                src= {result.public_id}
                                sizes="50vw"
                                alt="Sample Description of my image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}