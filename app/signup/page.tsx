"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, KeyRound, ArrowRight, Sparkles, RefreshCw, User, Phone, MapPin, Building2, ShieldCheck, CheckCircle2, X } from "lucide-react";

const INDIAN_STATES_DISTRICTS: Record<string, string[]> = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Kakinada", "Rajahmundry", "Kadapa", "Anantapur", "Vizianagaram", "Eluru", "Ongole", "Nandyal", "Machilipatnam"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Naharlagun", "Pasighat", "Namsai", "Ziro", "Bomdila", "Tezu", "Changlang", "Aalo"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Diphu", "North Lakhimpur", "Karimganj", "Sivasagar"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Ara", "Begusarai", "Katihar", "Munger", "Chhapra", "Danapur", "Bettiah", "Saharsa", "Sasaram", "Hajipur", "Dehri", "Siwan", "Motihari", "Nawada", "Bagaha", "Buxar", "Kishanganj", "Sitamarhi", "Jamui", "Jehanabad", "Aurangabad", "Madhubani"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon", "Jagdalpur", "Raigarh", "Ambikapur", "Dhamtari"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Sanguem"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Navsari", "Morbi", "Nadiad", "Surendranagar", "Bharuch", "Mehsana", "Bhuj", "Porbandar", "Valsad", "Vapi"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat", "Panchkula", "Sirsa", "Bhiwani", "Jind", "Thanesar", "Kaithal", "Rewari", "Palwal"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan", "Mandi", "Kullu", "Bilaspur", "Chamba", "Hamirpur", "Nahan", "Una", "Dalhousie"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh", "Giridih", "Ramgarh", "Medininagar", "Jhumri Tilaiya", "Chaibasa", "Pakur"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi", "Kalaburagi", "Davanagere", "Ballari", "Vijayapura", "Shivamogga", "Tumakuru", "Raichur", "Bidar", "Udupi", "Kolar"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Alappuzha", "Palakkad", "Manjeri", "Thalassery", "Ponnani", "Vatakara", "Kanhangad", "Taliparamba"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa", "Murwara", "Singrauli", "Burhanpur", "Khandwa", "Bhind", "Chhindwara", "Guna", "Shivpuri", "Vidisha"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Pimpri-Chinchwad", "Nashik", "Kalyan-Dombivli", "Vasai-Virar", "Aurangabad", "Navi Mumbai", "Solapur", "Mira-Bhayandar", "Bhiwandi-Nizampur", "Amravati", "Nanded", "Kolhapur", "Akola", "Panvel", "Jalgaon", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani", "Ichalkaranji", "Jalna", "Ambajogai", "Bhusawal", "Ratnagiri", "Sindhudurg", "Satara", "Sangli", "Osmanabad", "Beed", "Washim", "Hingoli", "Wardha", "Bhandara", "Gondia", "Gadchiroli"],
  "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Senapati", "Ukhrul", "Kakching", "Tamenglong"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongstoin", "Williamnagar", "Baghmara", "Resubelpara"],
  "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Mamit"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Mon", "Phek", "Kiphire", "Longleng", "Noney"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda", "Jeypore", "Kendrapara", "Angul", "Dhenkanal"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Mohali", "Batala", "Pathankot", "Moga", "Abohar", "Malerkotla", "Khanna", "Phagwara", "Kapurthala"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar", "Pali", "Sri Ganganagar", "Kishangarh", "Baran", "Dhaulpur", "Tonk", "Beawar", "Hanumangarh"],
  "Sikkim": ["Gangtok", "Namchi", "Mangan", "Geyzing", "Singtam", "Rangpo"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul", "Thanjavur", "Ranipet", "Sivakasi", "Karur", "Udhagamandalam", "Hosur", "Nagercoil", "Kancheepuram", "Kumarapalayam", "Karaikudi"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet", "Siddipet", "Miryalaguda", "Jagtial"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia", "Khowai", "Ambassa", "Bishalgarh"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Prayagraj", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Noida", "Firozabad", "Jhansi", "Muzaffarnagar", "Mathura", "Rampur", "Shahjahanpur", "Farrukhabad", "Mau", "Hapur", "Etawah", "Mirzapur", "Bulandshahr", "Sambhal", "Amroha", "Hardoi", "Fatehpur", "Raebareli", "Orai", "Sitapur", "Bahraich", "Modinagar", "Unnao", "Jaunpur", "Lakhimpur", "Hathras", "Banda", "Pilibhit", "Barabanki", "Kheri", "Sultanpur", "Azamgarh"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Nainital", "Pauri", "Almora", "Pithoragarh", "Tehri"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman", "Malda", "Baharampur", "Habra", "Kharagpur", "Shantipur", "Dhulian", "Ranaghat", "Haldia", "Raiganj", "Krishnanagar", "Nabadwip", "Medinipur", "Jalpaiguri", "Balurghat", "Basirhat", "Bankura", "Chakdaha", "Darjeeling", "Alipurduar", "Purulia", "Jangipur", "Bangaon", "Cooch Behar"],
  "Andaman and Nicobar Islands": ["Port Blair", "Car Nicobar", "Mayabunder", "Diglipur", "Rangat"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur", "Sopore", "Kathua", "Poonch", "Kupwara", "Rajouri", "Pulwama"],
  "Ladakh": ["Leh", "Kargil"],
  "Lakshadweep": ["Kavaratti", "Minicoy", "Agatti", "Andrott", "Amini"],
  "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"]
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

      setSuccessMsg("6-digit verification code sent to your email!");
      setStep("otp");
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Network error");
    }
  }

  async function verifyOtpCode(tokenToVerify: string) {
    if (tokenToVerify.length !== 6) return;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: tokenToVerify, name, phone, state, district }),
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Invalid OTP code");
        return;
      }

      localStorage.setItem("odlix_user", JSON.stringify(data.user));
      setSuccessMsg("🎉 Signup Successful! Redirecting...");

      const redirectUrl = data.user?.role === "ADMIN" ? "/admin/dashboard" : "/elearning/dashboard";
      setTimeout(() => {
        router.push(redirectUrl);
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Verification failed");
    }
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-4 py-12 selection:bg-cyan-400 selection:text-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-lg rounded-[2.5rem] border border-slate-700/80 bg-slate-900/95 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl relative z-10 mx-4 text-white">
        {/* Close button */}
        <Link href="/" className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition">
          <X className="h-4 w-4" />
        </Link>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-cyan-400 shadow-inner mb-4">
            <Sparkles className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white mb-2">
            {step === "details" ? "Create your Odlix account" : "Enter Verification OTP"}
          </h1>
          <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
            {step === "details"
              ? "Fill in your profile details and location to get started for free."
              : `Enter the 6-digit code sent to ${email}.`}
          </p>
        </div>

        {step === "details" ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="Anand Raj"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 pl-11 text-xs text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 pl-11 text-xs text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="tel"
                  required
                  placeholder="+91 7372891228"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 pl-11 text-xs text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">State</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                  <select
                    required
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      setDistrict("");
                    }}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 pl-11 text-xs text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-500">Select State</option>
                    {Object.keys(INDIAN_STATES_DISTRICTS).sort().map((s) => (
                      <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">District / City</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                  <select
                    required
                    disabled={!state}
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 pl-11 text-xs text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled className="bg-slate-900 text-slate-500">{state ? "Select District" : "Select State First"}</option>
                    {availableDistricts.sort().map((d) => (
                      <option key={d} value={d} className="bg-slate-900 text-white">{d}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {error ? (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400 font-medium">
                {error}
              </div>
            ) : null}

            {successMsg ? (
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-xs text-cyan-300 font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0" /> {successMsg}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 text-slate-950 py-4 text-xs font-black uppercase tracking-widest shadow-lg transition hover:opacity-90 disabled:opacity-50 mt-2"
            >
              {loading ? "Sending OTP..." : "Send Email / OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); verifyOtpCode(otp); }} className="space-y-4">
            {successMsg ? (
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-xs text-cyan-300 font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0" /> {successMsg}
              </div>
            ) : null}

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Enter 6-Digit OTP (Auto-Verifies)</label>
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  maxLength={6}
                  required
                  autoFocus
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setOtp(val);
                    if (val.length === 6) verifyOtpCode(val);
                  }}
                  className="w-full rounded-2xl border border-cyan-500/40 bg-slate-950/90 px-4 py-3.5 pl-11 text-base font-mono tracking-[0.3em] text-cyan-300 placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            {error ? (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400 font-medium">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 text-slate-950 py-4 text-xs font-black uppercase tracking-widest shadow-lg transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify & Complete Signup"}
            </button>

            <button
              type="button"
              onClick={() => setStep("details")}
              className="flex w-full items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition pt-1"
            >
              <RefreshCw className="h-3 w-3" /> Edit details / Resend OTP
            </button>
          </form>
        )}

        <div className="mt-6 text-center border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-400">
            Already registered?{" "}
            <Link href="/login" className="font-bold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
