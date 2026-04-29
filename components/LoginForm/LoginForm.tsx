"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/utils/authSchema";
import { clientApi } from "@/lib/api/clientApi";
import styles from "./LoginForm.module.css";
import { useAuthStore } from "@/store/authStore";
import { LoginFormData } from "@/types";
import toast from "react-hot-toast";
import axios from "axios";

export const LoginForm = () => {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await clientApi.post("/user/login", data);

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);

        if (user) {
          setAuth(user);
        } else {
          setAuth({
            _id: "temporary-id",
            name: "User",
            email: data.email,
            role: "admin",
          });
        }
        toast.success("Welcome back!");
        router.push("/dashboard");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Invalid email or password";
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <div className={styles.inputField}>
        <input
          {...register("email")}
          placeholder="Email address"
          className={styles.input}
        />
        {errors.email && (
          <p className={styles.errorText}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.inputField}>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        {errors.password && (
          <p className={styles.errorText}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} className={styles.loginBtn}>
        {isSubmitting ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
};
