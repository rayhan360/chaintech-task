import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://chain-tech-backend.vercel.app/users?email=${user?.email}`
      );
      return res.data;
    },
    onError: (error) => {
      console.error("Error fetching user data:", error);
    },
  });

  return [users, refetch];
};

export default useUser;