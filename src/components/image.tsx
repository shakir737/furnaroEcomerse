 import Image from "next/image";

const WithDynamicImage = async({image} : any) => {

return (
    <Image src={image}
      alt="Picture of the author"
    />
)

}

// export async function getServerSideProps({
//   params,
// } : any) {
//   const image = await getImages() // fetch your data;
//   const imageDynamic = image[params.id] //pass the prop from the url

//   return { props: { image : imageDynamic || null } };
// }

export default WithDynamicImage;