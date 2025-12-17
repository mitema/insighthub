import api from "@/lib/api";

export interface RegisterPayload {
  email: string;
  password: string;
}

// call backend url
export const registerApi = async (data: RegisterPayload) => {
  console.log("in register api");
  const response = await api.post("/accounts/register/", data);
  console.log(response.data);
  return response.data;
};
