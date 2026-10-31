"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, MapPin, Building2, Image as ImageIcon, Save, CheckCircle2, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

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

export default function ProfileSettingsPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const availableDistricts = state ? INDIAN_STATES_DISTRICTS[state] || [] : [];

  useEffect(() => {
    const stored = localStorage.getItem("odlix_user");
    if (stored) {
      try {
        const u = JSON.parse(stored);
        setName(u.name || "");
        setEmail(u.email || "");
        setPhone(u.phone || "");
        setState(u.state || "");
        setDistrict(u.district || "");
        setImage(u.image || "");
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, phone, state, district, image }),
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Failed to update profile");
        return;
      }

      localStorage.setItem("odlix_user", JSON.stringify(data.user));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Network error");
    }
  }

  return (
    <main className="min-h-screen bg-[#050b14] text-white px-4 py-24 selection:bg-cyan-400 selection:text-slate-950">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/elearning/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-400">
            <ShieldCheck className="h-4 w-4" /> Secure Profile Settings
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <h1 className="text-3xl font-black tracking-tight text-white mb-2">Profile Settings</h1>
          <p className="text-sm text-slate-400 mb-8">Update your personal details, contact info, location, and profile photo.</p>

          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Full Name</label>
              <div className="relative mt-2">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Email Address (Read-only)</label>
              <div className="relative mt-2">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  id="email"
                  type="email"
                  disabled
                  value={email}
                  className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/40 px-4 py-3.5 pl-12 text-sm text-slate-400 cursor-not-allowed outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Phone Number</label>
              <div className="relative mt-2">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="block text-xs font-bold uppercase tracking-widest text-slate-300">State</label>
                <div className="relative mt-2">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
                  <select
                    id="state"
                    required
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      setDistrict("");
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
                <div className="relative mt-2">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none" />
                  <select
                    id="district"
                    required
                    disabled={!state}
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
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

            <div>
              <label htmlFor="image" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Profile Photo URL</label>
              <div className="relative mt-2">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  id="image"
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            {error ? (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            ) : null}

            {success ? (
              <div className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-sm text-cyan-300">
                <CheckCircle2 className="h-5 w-5" /> Profile updated successfully!
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                "Saving Changes..."
              ) : (
                <>
                  <Save className="h-4 w-4" /> Save Profile Settings
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
