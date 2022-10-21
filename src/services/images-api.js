import axios from "axios";

const API_KEY = '29948630-157933f0e62faad2f834f63f1';
 
export const fetchImages = async (query, page) => {
  const { response } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};