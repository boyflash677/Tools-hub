import React from "react";

const courseData = [
  {
    category: "📱 Android Hacking Ka Full Course Plan (No PC Required)",
    subcategories: [
      {
        title: "🔹 Basic Requirements",
        items: [
          "Rooted/Non-rooted Phone Difference",
          "Android Architecture (APK, Services, Activities)",
          "Permissions & Exploits",
          "Termux + Android Emulator Use",
          "Ethical Hacking vs Illegal Hacking",
        ],
      },
      {
        title: "🛠️ Tools Setup (On Phone)",
        items: [
          "Termux - CLI hacking ke liye",
          "NetHunter Lite - Android pe Kali OS jaisa environment",
          "Modded RAT APK - Remote access ke liye",
          "AndroRAT / AhMyth - Android devices ka control lena",
          "Apktool + Java Decompiler - APK edit aur mod ke liye",
          "Msfconsole (Metasploit via Termux) - Payload creation aur reverse shell ke liye",
          "Zphisher - Phishing pages banane ke liye",
          "Ngrok / LocalHostRun - Payloads ko online accessible banana",
        ],
      },
      {
        title: "🧠 Full Topics to Cover",
        items: [
          "🐍 Basic Hacking Tools (Termux)",
          " - Phone info gathering (IP, MAC, etc.)",
          " - Link grabbers (IP logger)",
          " - Basic payloads banana",
          " - Port forwarding methods (Ngrok, Serveo)",
          "🤖 RAT & Remote Control",
          " - APK payload banake bind karna",
          " - Spy APK banana (Camera, SMS, Location)",
          " - Live screen & mic access",
          " - Android ke system settings ka access lena",
          "🎭 Phishing & Cloning",
          " - Facebook/Instagram login pages banana",
          " - WhatsApp Chat Clone scam ka demo",
          " - OTP verification page banana",
          " - Fake Job/Loan site phishing",
          "🎤 Call & SMS Spy",
          " - Call recorder setup via Spy APK",
          " - SMS forwarder tools",
          " - Real-time SMS log panel setup",
          "🔐 Social Engineering",
          " - Kaise scammers baat karte hain (Scripts + Voice Demo)",
          " - Fake Telegram chats + Proofs banana",
          " - “Hack Any Account” scam ka expose + trap setup",
          "🧨 Payload Binding & Crypters",
          " - Clean APK ke sath payload bind karna",
          " - VirusTotal undetected banana",
          " - Recompile, sign & install",
          "🕵️‍♂️ Anonymity",
          " - VPNs + TOR + MAC Spoofing",
          " - Android pe Secure Browsing",
          " - Telegram Safe ID Use",
        ],
      },
    ],
  },
  {
    category: "🎭 Scam Awareness & Scam Trap Content",
    subcategories: [
      {
        title: "🔥 Real-World Scam Topics to Cover",
        items: [
          "Loan Approval Scam - Ultra fast loan + fake website + ID fraud",
          "WhatsApp Chat Unlock Tool - Fake proof + file + payment trap",
          "Insta Account Hack Tool - Demo + 'check logs' scam trap",
          "Telegram Chat Recovery - SecretChat tool scam",
          "Job Scam (Work From Home) - Telegram + fake HR scam",
          "UPI Screenshot Scam - Payment without transfer trick",
        ],
      },
      {
        title: "🎬 Scam Series Content Plan",
        items: [
          "“Yeh App Aapko Ullu Banayega” — scammy hacking apps ka review",
          "“Yeh Kaise Kiya?” Series — real Telegram scam breakdown",
          "“Scammer Vs Victim Voice Call” — dramatized scripts",
          "“How They Trap You” — phishing, urgency, manipulation psychology",
        ],
      },
    ],
  },
  {
    category: "🔧 ToolsBurst Content Format Suggestion",
    subcategories: [
      {
        title: "Content Format",
        items: [
          "📂 Tools - Zip with README.txt",
          "🎥 Video Course - MP4 or YouTube Private Links",
          "📘 PDFs - Hindi + English Explainers",
          "🎁 Bonus - Fake Panels, Script Files, Templates",
        ],
      },
      {
        title: "Final Tips",
        items: [
          "Har tool ke saath ek detailed video demo hona chahiye",
          "Hindi explanation + visual example = best selling combo",
          "Jo scam sikha raha ho, uska counter bhi sikha: “bachav kaise karein”",
          "Tu apne ToolsBurst ko India ka no.1 Android Hacking School bana sakta hai agar tu educate karta hai, real examples deta hai, aur paid + free content rakhta hai",
        ],
      },
    ],
  },
];

export default function FullCourseList() {
  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20, fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>ToolsBurst Android Hacking & Scam Awareness Course</h1>

      {courseData.map(({ category, subcategories }) => (
        <section key={category} style={{ marginBottom: 40 }}>
          <h2 style={{ color: "#2ecc71" }}>{category}</h2>

          {subcategories.map(({ title, items }) => (
            <div key={title} style={{ marginLeft: 20, marginBottom: 20 }}>
              <h3>{title}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i} style={{ marginBottom: 5 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
