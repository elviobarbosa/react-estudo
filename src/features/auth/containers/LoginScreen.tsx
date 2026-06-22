import React from "react";
import { LoginForm } from "../components/LoginForm";
import { useMutation } from "@tanstack/react-query";


export const LoginScreen:React.FC = () => {
    const loginMutation = useMutation({
      mutationFn: async (data: {username: string, password: string}) => {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            username: data.username,
            password: data.password,
            expiresInMins: 30, 
          })
        })

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Erro ao fazer login");
        }

        return await response.json();
      },

      onSuccess: (data) => {
        console.log("SUCESSO! Resposta da API:", data);
        alert(`Bem vindo, ${data.firstName}! (Olhe o console para ver o Token JWT)`);
      },

      onError: (error) => {
        console.error("FALHA AO LOGAR:", error);
        alert(error.message);
      }
    })

    return (
      <LoginForm 
        onSubmit={async (data) => await loginMutation.mutateAsync(data) } 
        onForgotPassword={() => alert("Link de recuperação enviado!")}
      />
    );
  }
