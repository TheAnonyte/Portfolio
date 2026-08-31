const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const svgs = [
  {
    name: 'pathwise-ai.png',
    svg: `
    <svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a14"/>
          <stop offset="50%" stop-color="#0f0f1c"/>
          <stop offset="100%" stop-color="#05050a"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg)"/>
      <rect x="40" y="40" width="1200" height="640" rx="16" fill="#121220" stroke="#f4d03f" stroke-opacity="0.3" stroke-width="2"/>
      <rect x="40" y="40" width="1200" height="50" rx="16" fill="#18182a"/>
      <circle cx="70" cy="65" r="7" fill="#e63946"/>
      <circle cx="95" cy="65" r="7" fill="#f4d03f"/>
      <circle cx="120" cy="65" r="7" fill="#2ecc71"/>
      <text x="160" y="70" fill="#8888aa" font-family="monospace" font-size="14">https://pathwise-ai-three.vercel.app // AI_RESUME_ANALYZER</text>
      
      <rect x="80" y="130" width="520" height="500" rx="12" fill="#151526" stroke="#ffffff" stroke-opacity="0.08"/>
      <text x="110" y="180" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="28">PathWise AI</text>
      <text x="110" y="215" fill="#f4d03f" font-family="monospace" font-size="15">> Target Role: Full-Stack Engineer</text>
      
      <rect x="110" y="250" width="460" height="140" rx="8" fill="#1a1a30" stroke="#f4d03f" stroke-opacity="0.4"/>
      <text x="135" y="290" fill="#ffffff" font-family="sans-serif" font-size="16">RESUME MATCH SCORE</text>
      <text x="135" y="355" fill="#2ecc71" font-family="monospace" font-weight="bold" font-size="48">88.5%</text>
      <text x="320" y="325" fill="#8888aa" font-family="monospace" font-size="13">STATUS: INTERVIEW READY</text>
      <text x="320" y="348" fill="#f4d03f" font-family="monospace" font-size="13">GEMINI 1.5 PRO PIPELINE</text>

      <text x="110" y="430" fill="#8888aa" font-family="monospace" font-size="13">IDENTIFIED SKILL GAPS:</text>
      <rect x="110" y="445" width="220" height="36" rx="6" fill="#e63946" fill-opacity="0.15" stroke="#e63946" stroke-opacity="0.4"/>
      <text x="125" y="468" fill="#e63946" font-family="monospace" font-size="12">! Async Message Queues</text>
      <rect x="340" y="445" width="200" height="36" rx="6" fill="#f4d03f" fill-opacity="0.15" stroke="#f4d03f" stroke-opacity="0.4"/>
      <text x="355" y="468" fill="#f4d03f" font-family="monospace" font-size="12">~ Redis Cache Layer</text>

      <rect x="640" y="130" width="560" height="500" rx="12" fill="#151526" stroke="#ffffff" stroke-opacity="0.08"/>
      <text x="670" y="180" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="20">AI Mock Interview Simulator</text>
      <rect x="670" y="210" width="500" height="80" rx="8" fill="#1c1c34"/>
      <text x="690" y="245" fill="#8888aa" font-family="monospace" font-size="13">AI INTERVIEWER:</text>
      <text x="690" y="270" fill="#ffffff" font-family="sans-serif" font-size="14">"How do you handle race conditions in 50+ concurrent async tasks?"</text>

      <rect x="670" y="310" width="500" height="80" rx="8" fill="#241b30" stroke="#f4d03f" stroke-opacity="0.3"/>
      <text x="690" y="345" fill="#f4d03f" font-family="monospace" font-size="13">USER RESPONSE:</text>
      <text x="690" y="370" fill="#ffffff" font-family="sans-serif" font-size="14">"Using asyncio.Lock primitives and Redis distributed locks for idempotency."</text>

      <rect x="670" y="410" width="500" height="180" rx="8" fill="#182822" stroke="#2ecc71" stroke-opacity="0.4"/>
      <text x="690" y="445" fill="#2ecc71" font-family="monospace" font-weight="bold" font-size="14">✓ EVALUATION: 9.2/10 (STRONG)</text>
      <text x="690" y="475" fill="#a0a0b5" font-family="monospace" font-size="13">• Accurate architecture knowledge</text>
      <text x="690" y="500" fill="#a0a0b5" font-family="monospace" font-size="13">• Distributed concurrency principles identified</text>
      <text x="690" y="525" fill="#a0a0b5" font-family="monospace" font-size="13">• Production readiness confirmed</text>
    </svg>
    `
  },
  {
    name: 'telegram-saas.png',
    svg: `
    <svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a14"/>
          <stop offset="50%" stop-color="#140a0e"/>
          <stop offset="100%" stop-color="#05050a"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg2)"/>
      <rect x="40" y="40" width="1200" height="640" rx="16" fill="#120c12" stroke="#e63946" stroke-opacity="0.4" stroke-width="2"/>
      
      <rect x="40" y="40" width="1200" height="50" rx="16" fill="#1c0f16"/>
      <circle cx="70" cy="65" r="7" fill="#e63946"/>
      <circle cx="95" cy="65" r="7" fill="#f4d03f"/>
      <circle cx="120" cy="65" r="7" fill="#2ecc71"/>
      <text x="160" y="70" fill="#e63946" font-family="monospace" font-size="14">root@rocky-vps:~# pyrogram_daemon_manager.py --sessions 50</text>

      <rect x="80" y="120" width="260" height="110" rx="10" fill="#1c1218" stroke="#e63946" stroke-opacity="0.3"/>
      <text x="100" y="150" fill="#8888aa" font-family="monospace" font-size="12">ACTIVE DAEMONS</text>
      <text x="100" y="200" fill="#e63946" font-family="monospace" font-weight="bold" font-size="36">52 / 52</text>

      <rect x="370" y="120" width="260" height="110" rx="10" fill="#1c1218" stroke="#2ecc71" stroke-opacity="0.3"/>
      <text x="390" y="150" fill="#8888aa" font-family="monospace" font-size="12">HOST UPTIME</text>
      <text x="390" y="200" fill="#2ecc71" font-family="monospace" font-weight="bold" font-size="36">99.98%</text>

      <rect x="660" y="120" width="260" height="110" rx="10" fill="#1c1218" stroke="#f4d03f" stroke-opacity="0.3"/>
      <text x="680" y="150" fill="#8888aa" font-family="monospace" font-size="12">RAM ALLOCATION</text>
      <text x="680" y="200" fill="#f4d03f" font-family="monospace" font-weight="bold" font-size="36">3.8 / 16 GB</text>

      <rect x="950" y="120" width="250" height="110" rx="10" fill="#1c1218" stroke="#ffffff" stroke-opacity="0.2"/>
      <text x="970" y="150" fill="#8888aa" font-family="monospace" font-size="12">EVENT DISPATCH RATE</text>
      <text x="970" y="200" fill="#ffffff" font-family="monospace" font-weight="bold" font-size="36">840/min</text>

      <rect x="80" y="260" width="1120" height="370" rx="12" fill="#0c070c" stroke="#ffffff" stroke-opacity="0.08"/>
      <text x="110" y="300" fill="#2ecc71" font-family="monospace" font-size="14">> [CLUSTER 01] SESSION #1..#15: RUNNING | Auto-reactions: ENABLED | Proxy: ROTATING</text>
      <text x="110" y="335" fill="#2ecc71" font-family="monospace" font-size="14">> [CLUSTER 02] SESSION #16..#30: RUNNING | Voice Chat Worker: ACTIVE | Audio: STREAMING</text>
      <text x="110" y="370" fill="#2ecc71" font-family="monospace" font-size="14">> [CLUSTER 03] SESSION #31..#45: RUNNING | Post Broadcast: 12,400 Users Reached</text>
      <text x="110" y="405" fill="#2ecc71" font-family="monospace" font-size="14">> [CLUSTER 04] SESSION #46..#52: RUNNING | Health Check: 0 ERRORS | Latency: 22ms</text>
      <text x="110" y="450" fill="#e63946" font-family="monospace" font-size="14">--- [SYSTEM LOGS] Rocky Linux 9.4 64-bit | Pyrogram AsyncIO Event Loop Active ---</text>
      <text x="110" y="485" fill="#8888aa" font-family="monospace" font-size="13">[2024-11-28 14:22:01] Auth Handshake Verified via StringSession MTProto</text>
      <text x="110" y="515" fill="#8888aa" font-family="monospace" font-size="13">[2024-11-28 14:22:04] PostgreSQL Subscription Table Sync: 24 active commercial users</text>
      <text x="110" y="545" fill="#8888aa" font-family="monospace" font-size="13">[2024-11-28 14:22:07] Rotating SOCKS5 proxy pool (50 nodes verified)</text>
      <text x="110" y="585" fill="#f4d03f" font-family="monospace" font-size="14">root@rocky-vps:~# _</text>
    </svg>
    `
  },
  {
    name: 'craft-my-pass.png',
    svg: `
    <svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050a08"/>
          <stop offset="50%" stop-color="#08140e"/>
          <stop offset="100%" stop-color="#050508"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#bg3)"/>
      <rect x="40" y="40" width="1200" height="640" rx="16" fill="#0a120e" stroke="#2ecc71" stroke-opacity="0.35" stroke-width="2"/>
      
      <rect x="40" y="40" width="1200" height="50" rx="16" fill="#0d1c15"/>
      <circle cx="70" cy="65" r="7" fill="#e63946"/>
      <circle cx="95" cy="65" r="7" fill="#f4d03f"/>
      <circle cx="120" cy="65" r="7" fill="#2ecc71"/>
      <text x="160" y="70" fill="#2ecc71" font-family="monospace" font-size="14">https://craftmypass.vercel.app // HIBP_PWN_AUDITOR</text>

      <rect x="240" y="120" width="800" height="510" rx="14" fill="#08100c" stroke="#2ecc71" stroke-opacity="0.2"/>
      <text x="280" y="175" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="28">Craft-My-Pass</text>
      <text x="280" y="205" fill="#2ecc71" font-family="monospace" font-size="14">> Zero-Knowledge Breach Auditor</text>

      <rect x="280" y="235" width="720" height="90" rx="10" fill="#0e1e17" stroke="#2ecc71" stroke-opacity="0.5"/>
      <text x="310" y="292" fill="#2ecc71" font-family="monospace" font-weight="bold" font-size="28">k9#X!mQ8$vL2@wZ9&amp;p</text>
      <rect x="880" y="255" width="100" height="50" rx="8" fill="#2ecc71"/>
      <text x="910" y="286" fill="#000000" font-family="monospace" font-weight="bold" font-size="14">COPY</text>

      <rect x="280" y="350" width="345" height="130" rx="8" fill="#12241b" stroke="#2ecc71" stroke-opacity="0.3"/>
      <text x="305" y="385" fill="#8888aa" font-family="monospace" font-size="12">HIBP BREACH VERIFICATION</text>
      <text x="305" y="425" fill="#2ecc71" font-family="sans-serif" font-weight="bold" font-size="22">0 BREACHES FOUND</text>
      <text x="305" y="455" fill="#8888aa" font-family="monospace" font-size="12">Verified via SHA-1 k-Anonymity</text>

      <rect x="655" y="350" width="345" height="130" rx="8" fill="#12241b" stroke="#2ecc71" stroke-opacity="0.3"/>
      <text x="680" y="385" fill="#8888aa" font-family="monospace" font-size="12">ENTROPY RATING</text>
      <text x="680" y="425" fill="#f4d03f" font-family="sans-serif" font-weight="bold" font-size="22">128 BITS (VERY STRONG)</text>
      <text x="680" y="455" fill="#8888aa" font-family="monospace" font-size="12">Crack Time: ~4.2 Million Centuries</text>

      <text x="280" y="530" fill="#8888aa" font-family="monospace" font-size="13">Built for HackManthan Hackathon // TypeScript + React + TailwindCSS</text>
    </svg>
    `
  }
];

async function run() {
  for (const s of svgs) {
    const p = path.join(dir, s.name);
    await sharp(Buffer.from(s.svg)).png().toFile(p);
    console.log('Created mockup for:', s.name);
  }
}

run();
