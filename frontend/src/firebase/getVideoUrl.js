import {ref,getDownloadURL} from "firebase/storage";
import {storage} from './firebase.js'


const getVideoUrl = async (videoPath) => {
    try {
        const videoRef = ref(storage, `program_video/${videoPath}`);

        const url = await getDownloadURL(videoRef);
        return url;
    } catch (error) {
        console.error("Error fetching video URL:",error);
        return null;
    }
}

export {getVideoUrl};