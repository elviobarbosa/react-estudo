export type LoginFormProps = {
  onSubmit: (data: {username: string, password: string}) => Promise<void>;
  onForgotPassword: () => void;
};