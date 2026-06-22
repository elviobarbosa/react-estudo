import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LoginFormProps } from "../services/entities";
import { useLoginForm, ZodSchema } from "../services/form"; 
import z from "zod";
import { FieldError } from "@/components/ui/field-error";

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onForgotPassword }) => {
  const form = useLoginForm(onSubmit);

  return(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="flex flex-col grap-6"
    >
    <div className="text-center">
      <h1 className="text-2xl font-bold">Bem-vindo(a)</h1>
      <p className="text-sm text-muted-foreground mt-2">Entre com sua conta do DummyJSON</p>
    </div>

    <div className="flex flex-col gap-4">

    <form.Field
      name="username"
      validators={{
        onChange: ZodSchema.shape.username,
      }}
    
      children={(field) => (
        <div className="flex flex-col gap-2">
          <Label htmlFor={field.name}>Usuário</Label>
          <Input 
            id={field.name}
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            placeholder="Ex: emilys"
          />

          <FieldError errors={field.state.meta.errors} />
        </div>
      )}
    />

    <form.Field
          name="password"
          validators={{
            onChange: z.string().min(1, "A senha é obrigatória"),
          }}
          children={(field) => (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor={field.name}>Senha</Label>
                <Button
                  variant="link"
                  type="button"
                  onClick={onForgotPassword}
                  className="px-0 h-auto font-normal text-xs"
                >
                  Esqueceu a senha?
                </Button>
              </div>
              <Input
                id={field.name}
                name={field.name}
                type="password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            <FieldError errors={field.state.meta.errors} />
            </div>
          )}
        />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" className="w-full" disabled={!canSubmit || isSubmitting}>
            {isSubmitting ? "Autenticando..." : "Entrar"}
          </Button>
        )}
      />
      </div>
    </form>
  )
};
