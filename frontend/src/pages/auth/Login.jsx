import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/authSchema";
import { useState } from "react";

export default function Login() {
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login data:", data);

    setSuccessMsg("Login validated! (Backend coming next…)");

    setTimeout(() => {
      window.location.href = "/patient/dashboard";
    }, 1200);
  };

  return (
    <div style={{ width: "350px", margin: "40px auto" }}>
      <h2>Login</h2>

      {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        <input type="email" placeholder="Email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <input type="password" placeholder="Password" {...register("password")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

