import React from "react";
import { LoginForm } from "../components/LoginForm";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import { api } from "../services/api";
import { useNavigate } from '@tanstack/react-router'


export const LoginScreen:React.FC = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  
  const loginMutation = useMutation({
    mutationFn: async (data: {username: string, password: string}) => {
      const response = await api.post("/auth/login", {
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      })

      return response.data;
    },

    onSuccess: (data) => {
      console.log("SUCESSO! Resposta da API:", data);
      login(data.accessToken);
      // Redireciona para o Dashboard protegido
      navigate({ to: '/' });
    },

    onError: (error: any) => {
      const message = error.response?.data?.message || "Erro ao fazer login";
      console.error("FALHA AO LOGAR:", error);
      alert(message);
    }
  })

  return (
    <LoginForm 
      onSubmit={async (data) => await loginMutation.mutateAsync(data) } 
      onForgotPassword={() => alert("Link de recuperação enviado!")}
    />
  );
}
