import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com'

class ImageService  {
    fetchTopics = async () => {
        const res = await axios.get(`topics?per_page=10&order_by=oldest&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        return res.data.map(topic => topic.slug)
    }

     fetchImagesByTopic = async (topic, pageSize) => {
        const res = await axios.get(`topics/${topic}/photos?per_page=${pageSize}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        return res.data;
    }
    
}

export default new ImageService()