import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const signInFormSchema = z.object({
  email: z.string().email("Email inválido"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(signInFormSchema),
  });

  async function handleSignIn(data: SignInFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Login realizado com sucesso!", {
      action: {
        label: "Acessar painel",
        onClick: () => (window.location.href = "/dashboard"),
        actionButtonStyle: {
          color: "#fff",
          fontWeight: "bold",
          backgroundColor: "#4CAF50",
        },
      },
      description: "Você será redirecionado para o painel do parceiro.",
      duration: 2000,
    });
    console.log(data);
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={"ghost"} asChild className="absolute right-8 top-4">
          <Link to="/sign-up"> Novo estabelecimento</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full cursor-pointer"
              type="submit"
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
