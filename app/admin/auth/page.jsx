"use client";
import { loginUser, registerUser } from "@/app/actions";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

const Page = () => {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session) {
      router.push("/admin");
    }
  }, [session]);
  const [pending, setPending] = useState(false);

  const {
    register,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm({});
  const clientAction = async function (formData) {
    trigger();
    if (!isValid) return;
    setPending(true);
    const res = await loginUser(getValues());
    setPending(false);
    if (!res.success) {
      return toast.error(res.message, {
        position: "top-left",
        classNames: {
          title: "text-md font-normal",
        },
      });
    }
    console.log(res);
  };
  return (
    <main className="px-10 mx-auto pb-16 min-h-screen flex items-center justify-center bg-blue-200 ">
      <Toaster richColors />
      <div className="rounded-2xl p-6 w-full bg-white max-w-[550px] px-0 my-10 min-h-[650px] shadow-md">
        <h3 className="heading-5 pb-3 border-b border-b-bordergray px-6 flex gap-x-2 items-center mb-2 justify-center">
          {/* <img src="../logo.png" alt="" className="w-[50px] block" /> */}
          <Logo />
        </h3>
        <form action={clientAction} className="px-10">
          <div className="py-3">
            <h1 className="text-2xl mb-2"> Admin Login</h1>
            <div className="space-y-6">
              <div className="space-y-2">
                <label> Email</label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[a-z]+[a-z,0-9]+@[a-z]+\.[a-z]{2,}$/, message: "Please provide a valid email address" },
                  })}
                  className="border border-bordergray w-full rounded-lg py-3 px-2"
                  placeholder="Boss@gmail.com"
                  type="email"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label> Password</label>
                  </div>
                  <Input
                    {...register("password", {
                      required: "Password is needed",
                    })}
                    className="border border-bordergray w-full rounded-lg py-3 px-2"
                    placeholder="*****"
                    type="password"
                  />
                  {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                </div>
                <button
                  disabled={pending}
                  className="text-center rounded-lg h-[51px] block w-full mt-5 disabled:cursor-not-allowed bg-main hover:bg-main/80 text-white disabled:bg-primary/60"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
