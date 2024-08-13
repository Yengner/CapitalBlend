import AuthForm from '@/components/auth/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation';

const SignIn = async () => {
  const user = await getLoggedInUser();
  if (user) redirect("/");
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn