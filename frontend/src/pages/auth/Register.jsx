import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation/authSchema";
import { useState } from "react";

export default function Register() {
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Registration data:", data);

    setSuccessMsg("Registration Successful! Redirecting to login...");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <div style={{ width: "350px", margin: "40px auto" }}>
      <h2>Register</h2>

      {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        <input type="text" placeholder="Full Name" {...register("name")} />
        <p style={{ color: "red" }}>{errors.name?.message}</p>

        <input type="email" placeholder="Email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <input type="password" placeholder="Password" {...register("password")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <select {...register("role")}>
          <option value="">Select Role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
          <option value="pharmacist">Pharmacist</option>
        </select>
        <p style={{ color: "red" }}>{errors.role?.message}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

