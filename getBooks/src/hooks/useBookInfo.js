async function useBookInfo() {
    try {
        const url = await fetch(`https://api.freeapi.app/api/v1/public/books?page=1&limit=5&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`);

        const response = await url.formData
    } catch (error) {
        
    }
} 