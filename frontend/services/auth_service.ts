import api from "@/lib/api";

export interface RegisterPayload {
  email: string;
  password: string;
}

// call backend url
export const loginApi = async (data: RegisterPayload) => {
  console.log("in login api");
  const response = await api.post("/accounts/login/", data);
  console.log(response.data);
  return response.data;
};
