import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default axios.create({
  baseURL: BASE_URL,
})

export const authJsonHeader = (token: string, file?: boolean) => {
  const contentType = file ? "multipart/form-data" : "Application/json"
  return {
    "Content-Type": contentType,
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  }
}
