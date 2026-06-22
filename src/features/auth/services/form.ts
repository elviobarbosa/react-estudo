import { useForm } from "@tanstack/react-form";
import { z } from 'zod';

export const ZodSchema = z.object({
    username: z
      .string()
      .min(3, 'You must have a length of at least 3'),
    password: z.string().min(6, 'You must have a length of at least 6'),
  })

export const useLoginForm = (
  onSubmitCallback: (data: {username: string, password: string}) => Promise<void>
) => {
  
  return useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      await onSubmitCallback(value)
    }
  })
}