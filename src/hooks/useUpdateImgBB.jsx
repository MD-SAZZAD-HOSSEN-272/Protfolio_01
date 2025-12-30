
import axios from 'axios';
import Swal from 'sweetalert2';

const useUpdateImgBB = async(imageData) => {
    const imageFormData = new FormData()
    imageFormData.append('image', imageData)
    if (!imageData.lastModified) {
          console.log("No image to upload");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Image Not Found!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
    const {data:imageURL} = await axios.post(`https://api.imgbb.com/1/upload?key=3dbb027b498e0121c63b27ae7810d0c7`, imageFormData)
    

    const imageUrl =await imageURL.data.display_url
    return imageUrl
}
export default useUpdateImgBB;