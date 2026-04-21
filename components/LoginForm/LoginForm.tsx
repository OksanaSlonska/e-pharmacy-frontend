"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/utils/authSchema";
import { clientApi } from "@/lib/api/clientApi";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await clientApi.post("/user/login", data);
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed");
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
