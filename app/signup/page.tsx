"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, KeyRound, ArrowRight, Sparkles, RefreshCw, User, Phone, MapPin, Building2 } from "lucide-react";

const INDIAN_STATES_DISTRICTS: Record<string, string[]> = {
  "Bihar": ["Patna", "Bhagalpur", "Gaya", "Muzaffarpur", "Purnia", "Darbhanga", "Begusarai", "Nalanda", "Rohtas", "Saran"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Ghaziabad", "Meerut", "Prayagraj", "Noida", "Bareilly", "Aligarh"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi", "Shahdara"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi", "Kalaburagi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Darjeeling"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar"]
};

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"details" | "otp">("details");
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const availableDistricts = state ? INDIAN_STATES_DISTRICTS[state] || [] : [];

  async function handleSendOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Failed to send OTP");
        return;
      }

      setSuccessMsg("OTP sent to your email! (If Supabase keys are not set, enter any 6-digit code like 123456)");
      setStep("otp");
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Network error");
    }
  }

  async function handleVerifyOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: otp, name, phone, state, district }),
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Invalid OTP");
        return;
      }

      localStorage.setItem("odlix_user", JSON.stringify(data.user));
      router.push("/elearning/dashboard");
      router.refresh();
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Verification failed");
    }
  }

  return (
    <main className="min-h-screen bg-[#050b14] text-white flex items-center justify-center px-4 py-20 selection:bg-cyan-400 selection:text-slate-950">
      <section className="w-full max-w-lg rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-inner">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Profile & OTP Signup</span>
            <h1 className="text-2xl font-black tracking-tight text-white">
              {step === "details" ? "Create Account" : "Enter Verification OTP"}
            </h1>
          </div>
        </div>
        <p className="text-sm text-slate-400">
          {step === "details"
            ? "Enter your profile details and email to receive your verification OTP."
            : `Enter the 6-digit code sent to ${email}.`}
        </p>

        {step === "details" ? (
          <form onSubmit={handleSendOtp} className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Full Name</label>
              <div className="relative mt-1.5">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Email Address</label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Phone Number</label>
              <div className="relative mt-1.5">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="block text-xs font-bold uppercase tracking-widest text-slate-300">State</label>
                <div className="relative mt-1.5">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
                  <select
                    id="state"
                    required
                    value={state}
                    onChange={(event) => {
                      setState(event.target.value);
                      setDistrict(""); // reset district on state change
                    }}
                    className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select State</option>
                    {Object.keys(INDIAN_STATES_DISTRICTS).map((s) => (
                      <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="district" className="block text-xs font-bold uppercase tracking-widest text-slate-300">District / City</label>
                <div className="relative mt-1.5">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
                  <select
                    id="district"
                    required
                    disabled={!state}
                    value={district}
                    onChange={(event) => setDistrict(event.target.value)}
                    className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled>{state ? "Select District" : "Select State First"}</option>
                    {availableDistricts.map((d) => (
                      <option key={d} value={d} className="bg-slate-900 text-white">{d}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {error ? (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            ) : null}

            {successMsg ? (
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-sm text-cyan-300">
                {successMsg}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60 mt-2"
            >
              {loading ? (
                "Sending OTP..."
              ) : (
                <>
                  Send Verification OTP <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="mt-8 space-y-5">
            <div>
              <label htmlFor="otp" className="block text-xs font-bold uppercase tracking-widest text-slate-300">6-Digit OTP</label>
              <div className="relative mt-2">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  id="otp"
                  type="text"
                  maxLength={6}
                  required
                  placeholder="123456"
                  value={otp}
                  onChange={(event) => setOtp(event.target.value)}
                  className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-lg font-mono tracking-widest text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            {error ? (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                "Verifying..."
              ) : (
                <>
                  Verify & Register <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setStep("details")}
              className="flex w-full items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Edit details / Resend OTP
            </button>
          </form>
        )}

        <div className="mt-8 text-center border-t border-cyan-500/10 pt-6">
          <p className="text-sm text-slate-400">
            Already registered?{" "}
            <Link href="/login" className="font-bold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
