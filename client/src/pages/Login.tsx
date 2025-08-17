import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import AuthLayout from "@/components/layout/auth-layout"
import { Eye, EyeOff, Github, Mail } from "lucide-react"
import { Button } from "../components/ui/button"

interface LoginFormData {
    email: string
    password: string
    rememberMe: boolean
}


export default function LoginPage(){
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginFormData>()


    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true)
        setError("")

        //Example API CALL, going to be use to connect to supabase backend
        setTimeout(() => {
            console.log("Login Attempt:", data)
            setIsLoading(false)
            alert("Login successful! (Demo)")
        }, 1500)
    }


    return (
        <AuthLayout title="Welcome" subtitle="Sign in to your account to continue">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {error && (
                    <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {/*Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        aria-describedby={errors.email ? "email-error" : undefined} 
                    />
                    {errors.email && (
                        <p id="email-error" className="text-sm text-red-600" role="alert">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            aria-describedBy={errors.password ? "password-error" : undefined}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 roght-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.password && (
                        <p id="password-error" className="text-sm text-red-600" role="alert">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Remember Me & Forgot Password section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                        id="rememberMe"
                        {...register("rememberMe")}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <Label htmlFor="rememberMe" className="text-sm text-gray-600">
                        Remember me
                        </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                        Forgot password?
                    </Link>
                </div>

                {/*Login button */}
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 
                    hover:to-blue-700 text-white font-medium py-2.5 rounded-lg transition-all 
                    duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed 
                    disabled:transform-none"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing in...
                        </div>
                    ) : (
                        "Sign in"
                    )}
                </Button>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        className="flex items-center justify-center py-2.5 border-gray-300 hover:bg-gray-50 transition-colors bg-transparent"
                        onClick={() => console.log("Google login clicked")}
                    >
                        <Mail size={18} className="mr-2" />
                        Google
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="flex items-center justify-center py-2.5 border-gray-300 hover:bg-gray-50 transition-colors bg-transparent"
                        onClick={() => console.log("Github login clicked")}
                    >
                        <Github size={18} className="mr-2" />
                        GitHub
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        Sign up
                    </Link>
                </p>
            </form>
        </AuthLayout>
    )
}

