import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className='flex w-full h-screen items-center justify-center'>
        <SignIn />
    </main>
  )
}

export default SignInPage