import { BASE_URL } from "./base";

const POST_URL = `${BASE_URL}/posts`

export const getPost = async (id) => {
  const response = await fetch(`${POST_URL}/${id}`, {
    method: "GET"
  })
  const data = await response.json()

  return data
}

