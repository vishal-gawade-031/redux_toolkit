import axios from "axios";
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
// const VITE_TENOR_KEY = import.meta.env.VITE_TENOR_KEY
const VITE_PEXLS_KEY = import.meta.VITE_PEXLS_KEY

const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const PEXLS_API_URL="GET https://api.pexels.com/videos/search";

export async function fetchPhotos(query, page = 1, perPage = 20) {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}

export async function featchVideo(query, per_page = 15) {
  try {
    const res = await axios.get(
      'https://api.pexels.com/videos/search',
      {
        params: {
          query: query,
          per_page: per_page
        },
        headers: {
          Authorization: VITE_PEXLS_KEY
        }
      }
    );

    return res.data.videos; // return data
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}
