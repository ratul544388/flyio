import React from 'react'
import { Metadata } from 'next'
import { RegisterForm } from '@/features/auth/components/register-form'

export const generateMetadata = (): Metadata => ({
  title: "Register",
})

const RegisterPage = () => {
  return <RegisterForm/>
}

export default RegisterPage
