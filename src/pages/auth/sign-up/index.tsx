import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

const signInFormSchema = z.object({
  email: z.string().email("Email inválido"),
  restaurantName: z
    .string()
    .min(3, "Nome do restaurante deve ter pelo menos 3 caracteres"),
  managerName: z
    .string()
    .min(3, "Nome do gerente deve ter pelo menos 3 caracteres"),
  phone: z.string().min(10, "Número de telefone inválido"),
});

type SignUpFormData = z.infer<typeof signInFormSchema>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(signInFormSchema),
  });

  async function handleSignUp(data: SignUpFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Cadastro Realizado com sucesso!", {
      description: "Confirme seu email para ativar sua conta.",
      duration: 5000,
      action: {
        label: "Login",
        onClick: () => (navigate("/sign-in")),
        actionButtonStyle: {
          color: "#fff",
          fontWeight: "bold",
          backgroundColor: "#4CAF50",
        },
      },
    });
    console.log(data);
 
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant={"ghost"} asChild className="absolute right-8 top-4">
          <Link to="/sign-in"> Fazer Login </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do restaurante</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full cursor-pointer"
              type="submit"
            >
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground"> Ao continuar, você concorda com nossos <a className="underline underline-offset-4" href="">termos de serviços</a>  e {' '}  <a className="underline underline-offset-4" href="">politíca de privacidade</a></p>
          </form>
        </div>
      </div>
    </>
  );
}
