/* ================================================================
   NIGHTERS CYBER ACADEMY — Interactive Data Matrix (Levels 1-10)
   ================================================================ */

const LESSONS = [
  // ── PHASE 1: COMPUTER & LINUX FOUNDATIONS (LEVELS 1–5) ───────
  {
    id: 1,
    title: "Introduction to Ethical Hacking",
    emoji: "📱",
    subtitle: "Rules of Engagement, Mindsets & Workstation Setup",
    type: "system",
    phase: 1,
    month: 1,
    points: 50,
    duration_mins: 60,
    intro: "Welcome to the operational gateway. This level establishes your local testing environment layout and verifies the legal structures that define professional security audits.",
    sections: [
      {
        title: "The Rules of Engagement",
        theory: "Security professionals operate strictly under explicit legal parameters. A Scope of Work (SoW) document bounds the specific IP infrastructure addresses, servers, and networks you are authorized to verify. Accessing or interacting with an asset outside these explicitly agreed boundaries violates global computer protection frameworks.",
        steps: [
          "Understand the operational separation between Red Teams (Adversarial simulation) and Blue Teams (Defensive response groups).",
          "Review your authorization and scope limits before interacting with any local terminal environment commands."
        ],
        cmd: []
      },
      {
        title: "Workstation Layout Verification",
        theory: "Your operational testing node uses a sandboxed Debian framework running directly inside your terminal app wrapper. Keeping filesystem trees organized allows cleanly tracked documentation arrays.",
        steps: [
          "Boot your local console layout view.",
          "Check your active execution path using the 'pwd' command.",
          "Generate a dedicated labs directory hierarchy map."
        ],
        cmd: [
          { t: "c", v: "Query the current absolute working directory path string" },
          { t: "cmd", v: "pwd" },
          { t: "out", v: "/home/malik" },
          { t: "c", v: "Generate academy workspace locations cleanly" },
          { t: "cmd", v: "mkdir -p labs/notes && cd labs && ls -la" },
          { t: "out", v: "total 12\ndrwxr-xr-x 3 malik root 4096 Jun 26 12:00 .\ndrwxr-xr-x 4 malik root 4096 Jun 26 12:00 ..\ndrwxr-xr-x 2 malik root 4096 Jun 26 12:00 notes" },
          { t: "ok", v: "Workstation paths verified successfully under malik@root." }
        ]
      }
    ],
    challenge: "Navigate completely into your new 'notes' folder path. Use terminal stream execution shortcuts to create a new record file named 'scope.txt' documenting your test boundaries.",
    hints: ["Use lowercase path strings to keep matching parameters simple and clean."],
    quiz: [
      { q: "What primary document limits the exact network ranges and testing parameters allowed during an assessment?", opts: ["Software License agreement", "Rules of Engagement / Scope of Work", "Privacy Statement", "Data Schema"], a: 1 },
      { q: "Which core utility prints the absolute path of your current terminal folder location?", opts: ["ls", "cd", "pwd", "cat"], a: 2 }
    ],
    assignment: {
      title: "Lab Assessment 0x01 — Scope Setup",
      tasks: ["Log your local directory tree configuration.", "Save a text summary detailing the operational definitions of Red and Blue teams."],
      submit: "Submit your terminal tracking text logs."
    },
    summary: "Level 1 successfully completed. You configured your sandboxed workstation paths.",
    preview: "Level 2 expansions cover intermediate Linux Mastery, group authorization flags, and background processes."
  },
  {
    id: 2,
    title: "Linux Mastery",
    emoji: "📁",
    subtitle: "Advanced Shell Operations, Permissions, and Background Services",
    type: "system",
    phase: 1,
    month: 1,
    points: 50,
    duration_mins: 45,
    intro: "Operating within server infrastructure requires comfortable terminal use without desktop graphical interfaces. This module tackles process arrays and access parameters.",
    sections: [
      {
        title: "File Permissions Security Audit",
        theory: "Linux access attributes use discrete read (4), write (2), and execute (1) bits split across Owner, Group, and Public roles. Securing script resources blocks other system users from tampering with your data.",
        steps: [
          "Examine file authorization markers using listing arguments.",
          "Restrict write capabilities using octal translation permissions."
        ],
        cmd: [
          { t: "c", v: "Review structural attributes on your tracking files" },
          { t: "cmd", v: "chmod 755 notes/scope.txt && ls -l notes/scope.txt" },
          { t: "out", v: "-rwxr-xr-x 1 malik root 102 Jun 26 12:15 notes/scope.txt" }
        ]
      },
      {
        title: "Process Surveillance and Logs",
        theory: "Long-running tasks run in the system background as daemons or services. Checking process tables lets you audit what services are currently using memory.",
        steps: [
          "Query active execution processes running within your runtime loop.",
          "Filter process tracks by name using stream pipe processing."
        ],
        cmd: [
          { t: "c", v: "Filter live tasks to find active shell configurations" },
          { t: "cmd", v: "ps aux | grep bash" },
          { t: "out", v: "malik        402  0.0  0.1  18232  3140 pts/0    S    12:15   0:00 /bin/bash" }
        ]
      }
    ],
    challenge: "Locate a background test process ID (PID) running within your current subsystem shell, and use terminal management flags to safely stop its thread ID.",
    hints: ["Use process tracking commands alongside text filters to find specific process IDs (PIDs) immediately."],
    quiz: [
      { q: "Which octal definition sets full permissions for the owner, but restricts other accounts to read and execute only?", opts: ["777", "644", "755", "600"], a: 2 },
      { q: "Where does a standard Debian architecture save system event audit records?", opts: ["/etc/config", "/var/log", "/opt/bin", "/root"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x02 — Subsystem Audit Logs",
      tasks: ["Capture a clean snapshot of your active background processes.", "Configure access permissions to isolate your workspace files to the owner account."],
      submit: "Submit the command sequences used during your filesystem updates."
    },
    summary: "Level 2 established baseline skills for monitoring running tasks, keeping software current, and checking internal logs.",
    preview: "Level 3 shifts focus outward to Network Frameworks, the OSI Model, and Socket mapping."
  },
  {
    id: 3,
    title: "Networking Foundations",
    emoji: "🌐",
    subtitle: "OSI Reference Models, Core Protocols, and Socket Identification",
    type: "system",
    phase: 1,
    month: 1,
    points: 60,
    duration_mins: 60,
    intro: "Network paths connect modern services. Before analyzing remote infrastructure boundaries, you must understand how protocols route packets across interfaces.",
    sections: [
      {
        title: "The OSI Model and Transport Sockets",
        theory: "Network communication relies on strict interface rules. Data maps across seven logical layers, using dedicated communication port designations (like web services on port 80/443, or management lines on port 22).",
        steps: [
          "Deconstruct data flow models across the OSI model layers.",
          "Identify common port assignments for standard network protocols."
        ],
        cmd: []
      },
      {
        title: "Socket Interrogation and Mapping",
        theory: "Running socket discovery flags checks where your machine is actively listening for incoming remote network connections.",
        steps: [
          "Query network adapter configurations to find active IP routing parameters.",
          "Audit local system port connections to find running listening services."
        ],
        cmd: [
          { t: "c", v: "List active network adapters and allocated IP ranges" },
          { t: "cmd", v: "ip addr show eth0" },
          { t: "out", v: "inet 192.168.1.45/24 brd 192.168.1.255 scope global eth0" },
          { t: "c", v: "Query all active listening sockets on your server matrix" },
          { t: "cmd", v: "ss -tlnp" },
          { t: "out", v: "State      Recv-Q Send-Q Local Address:Port\nLISTEN     0      128    0.0.0.0:22" }
        ]
      }
    ],
    challenge: "Query your system's interface settings to find your local broadcast range, and look up which network protocol default binds to port 53.",
    hints: ["Modern network tracking commands replace older, legacy utilities like netstat."],
    quiz: [
      { q: "Which OSI architectural layer routes data packets between distinct host networks?", opts: ["Layer 1 — Physical", "Layer 3 — Network", "Layer 7 — Application", "Layer 4 — Transport"], a: 1 },
      { q: "What port does the SSH secure terminal protocol default to for managing servers?", opts: ["80", "21", "22", "443"], a: 2 }
    ],
    assignment: {
      title: "Lab Assessment 0x03 — Adapter Auditing",
      tasks: ["Log your workstation's internal interface settings.", "Document all active listening ports discovered during socket diagnostics."],
      submit: "Submit your network interface lists and port data outputs."
    },
    summary: "Level 3 provided clear insight into network mapping, protocol layers, socket behaviors, and local routing rules.",
    preview: "Level 4 uses code automation scripts with Bash variables and basic Python loops to speed up system auditing."
  },
  {
    id: 4,
    title: "Programming Basics",
    emoji: "⚙️",
    subtitle: "Automation Scripts, Logical Loops, and Data Stream Handling",
    type: "system",
    phase: 1,
    month: 1,
    points: 60,
    duration_mins: 60,
    intro: "Modern system administration depends on automation. Translating repetitive manual commands into automated scripts helps you process complex system metrics quickly.",
    sections: [
      {
        title: "Bash Shell Script Automation",
        theory: "Shell scripts group multiple console actions into an executable format. Using conditional rules and loops helps automate repetitive maintenance routines.",
        steps: [
          "Write an automated shell loop script to perform system status checks.",
          "Set execution flags on scripts using permission commands."
        ],
        cmd: [
          { t: "c", v: "Build a multi-line automation loop statement from the command line" },
          { t: "cmd", v: "echo -e '#!/bin/bash\\nfor i in {1..3}; do echo \"Target-$i active\"; done' > scan.sh" },
          { t: "c", v: "Enable script permissions and run your automation loop" },
          { t: "cmd", v: "chmod +x scan.sh && ./scan.sh" },
          { t: "out", v: "Target-1 active\nTarget-2 active\nTarget-3 active" }
        ]
      },
      {
        title: "Python Foundational Logic Structures",
        theory: "Python handles complex data extraction tasks elegantly. Variables store temporary values in memory, while array lists store rows of target parameters.",
        steps: [
          "Create structured python files using terminal text tools.",
          "Run script files through your local system python runtime environment."
        ],
        cmd: [
          { t: "c", v: "Verify your local environment python setup version" },
          { t: "cmd", v: "python3 --version" },
          { t: "out", v: "Python 3.11.2" }
        ]
      }
    ],
    challenge: "Write a short script file named 'host_check.py'. Have it iterate through an array list of mock assets and print out their technical names with a status tag.",
    hints: ["Verify that the first line of your script points to the correct system interpreter path."],
    quiz: [
      { q: "What does the hashbang line '#!/bin/bash' indicate at the beginning of a script?", opts: ["It encrypts source code elements", "It specifies the target environment shell to execute the lines", "It clears system history entries", "It requires network authentication"], a: 1 },
      { q: "Which programming construct steps through a predefined list of items?", opts: ["If statement", "For loop", "Variable assignment", "Return value"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x04 — Script Deployment",
      tasks: ["Provide the source code for your automated system monitoring loop.", "Document how your scripts behave when you miss setting execution permissions flags."],
      submit: "Submit your testing automation files for verification."
    },
    summary: "Level 4 introduced core automation logic, variable assignments, array looping, and multi-language script execution.",
    preview: "Level 5 covers Web Tech architecture, browser cookies, session variables, and standard HTTP requests."
  },
  {
    id: 5,
    title: "Web Technologies",
    emoji: "🌐",
    subtitle: "HTTP Methods, DOM Architectures, and Session Cookie Variables",
    type: "system",
    phase: 1,
    month: 1,
    points: 70,
    duration_mins: 50,
    intro: "Web apps handle most corporate interface traffic. To secure web applications, you must first understand how browsers pass data to backend servers.",
    sections: [
      {
        title: "The HTTP Transaction Protocol",
        theory: "Web apps use a stateless request-and-response process model. Browsers dispatch transaction frames (like GET to read information or POST to submit form parameters) to a backend server, which replies with numerical status indicators.",
        steps: [
          "Analyze the structural data blocks inside HTTP transactions.",
          "Differentiate server success codes from client-side errors."
        ],
        cmd: []
      },
      {
        title: "Session Persistence and Analysis",
        theory: "Because HTTP is stateless, servers use temporary verification tokens called cookies to track authenticated users across page visits.",
        steps: [
          "Query local practice web apps using network interrogation utilities.",
          "Inspect returning transaction flags and cookie values."
        ],
        cmd: [
          { t: "c", v: "Inspect web endpoint data streams and cookie flags" },
          { t: "cmd", v: "curl -v http://localhost:8080" },
          { t: "out", v: "> GET / HTTP/1.1\n> Host: localhost:8080\n\n< HTTP/1.1 200 OK\n< Server: Apache/2.4.41\n< Set-Cookie: tracking_id=malik_dev_session; HttpOnly" }
        ]
      }
    ],
    challenge: "Query a local API service in your training workspace, and list the key-value elements returned in its data block.",
    hints: ["Using verbose flags with network tools reveals the full hidden header data passing back and forth."],
    quiz: [
      { q: "Which HTTP transmission type is typically used to push user input form contents to a database backend?", opts: ["GET", "POST", "OPTIONS", "HEAD"], a: 1 },
      { q: "What does an HTTP server response status code in the 400 range indicate?", opts: ["Internal server configuration faults", "Client-side request formatting errors", "Successful data synchronization", "Active database connections"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x05 — Web Infrastructure Analysis",
      tasks: ["Capture all returned transaction headers from your training page target.", "Identify the protection attributes set on your session tokens."],
      submit: "Submit your captured web header listings and descriptions."
    },
    summary: "Level 5 mapped out standard web applications infrastructure, covering HTTP states, browser parameters, and token properties.",
    preview: "Level 6 starts Phase 2 (Reconnaissance), covering passive intelligence tracking, public records, and keeping structured asset inventories."
  },

  // ── PHASE 2: RECONNAISSANCE & INFO GATHERING (LEVELS 6–10) ────
  {
    id: 6,
    title: "Passive Reconnaissance Foundations",
    emoji: "📡",
    subtitle: "OSINT Frameworks, Passive Footprints, and External Target Profiling",
    type: "web",
    phase: 2,
    month: 2,
    points: 100,
    duration_mins: 60,
    intro: "Reconnaissance gathers baseline information before testing. Passive techniques look up public internet registration files without sending direct packets to the target company's firewalls.",
    sections: [
      {
        title: "Open Source Intelligence Rules",
        theory: "Passive discovery searches for infrastructure details across external registration indexes and public file caches. Because your machine never talks directly to the target system, your audit activity leaves no traces in their network intrusion logs.",
        steps: [
          "Understand the core techniques behind open-source intelligence frameworks.",
          "Collect system asset layout data from public directories safely."
        ],
        cmd: [
          { t: "c", v: "Query a target domain's public registration records safely" },
          { t: "cmd", v: "whois sandbox.nighters.lan" },
          { t: "out", v: "Domain Name: sandbox.nighters.lan\nRegistrar: Infrastructure Solutions LLC\nName Server: ns1.nighters.lan" }
        ]
      }
    ],
    challenge: "Run a completely passive directory lookup against your assigned training sub-asset to find its public technical registration handles.",
    hints: ["Never start aggressive automated scanning scripts while running passive intelligence lookups."],
    quiz: [
      { q: "What is the defining trait of proper Passive Reconnaissance strategies?", opts: ["Modifying database fields", "Flooding targets with login attempts", "Gathering infrastructure metrics from public directory caches without direct server contact", "Running intrusive script scans"], a: 2 },
      { q: "Why should you keep structured asset logs from the start of an assessment?", opts: ["It speeds up execution times", "It creates the evidentiary basis for the eventual technical mitigation report", "It alters server response headers", "It bypasses local firewall blocks"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x06 — Target Footprinting",
      tasks: ["Build a passive information index for your mock lab network range.", "List all external name servers found during public lookups."],
      submit: "Submit your passive intelligence log sheets."
    },
    summary: "Level 6 established the core concepts of passive OSINT methodologies and built structured asset inventories.",
    preview: "Level 7 covers public code vaults, version histories, and analyzing document file metadata."
  },
  {
    id: 7,
    title: "Public Information Gathering (OSINT)",
    emoji: "🔍",
    subtitle: "Public Repositories, Leak Directories, and Archive Interrogations",
    type: "web",
    phase: 2,
    month: 2,
    points: 100,
    duration_mins: 75,
    intro: "Development errors can accidentally expose system details. This task explores auditing open code history logs to find forgotten testing parameters and notes.",
    sections: [
      {
        title: "Auditing Code Vault History",
        theory: "Developers sometimes make mistakes, like forgetting to remove testing credentials or internal server paths before updating public code vaults. Reviewing old repository change logs can reveal useful information without touching the live system.",
        steps: [
          "Audit change logs inside code repositories to find development comments.",
          "Isolate code updates that contain forgotten staging variables."
        ],
        cmd: [
          { t: "c", v: "Review recent code line modifications inside the repository" },
          { t: "cmd", v: "git log -p -n 1" },
          { t: "out", v: "commit a9c3d4e8b11\nAuthor: dev-malik <malik@nighters.lan>\n-  const DB_PASS = \"TEST_STAGING_SECRET_88\"; // Fix before production update" }
        ]
      }
    ],
    challenge: "Audit your training directory's version logs to track down any older staging settings.",
    hints: ["Using precise tracking switches displays line-by-line differences across past code modifications."],
    quiz: [
      { q: "Which strategy lets you check older, cached versions of public sites that are no longer live?", opts: ["Network port sweeps", "Internet Archive repositories / Wayback loops", "Exploitation frameworks", "Host configuration files"], a: 1 },
      { q: "What security risk happens when cleartext passwords are left inside development logs?", opts: ["Cross-Site Scripting", "Hardcoded Credentials Exposure", "System Resource Depletion", "Unrestricted upload paths"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x07 — Repository Inspections",
      tasks: ["Audit your laboratory file change logs.", "Isolate and write down any developer comments or testing paths found inside old files."],
      submit: "Submit your findings list along with cleanup guidelines."
    },
    summary: "Level 7 demonstrated how historical data, open code repositories, and public documentation metadata can accidentally reveal backend system details.",
    preview: "Level 8 covers the Domain Name System, zone listings, and analyzing mail security validation flags."
  },
  {
    id: 8,
    title: "DNS Concepts & Verification",
    emoji: "🗺️",
    subtitle: "Zone Assertions, Record Architectures, and Infrastructure Lookups",
    type: "web",
    phase: 2,
    month: 2,
    points: 110,
    duration_mins: 60,
    intro: "The Domain Name System acts as the phonebook of the web. Checking public DNS records helps security teams map out mail relays and anti-spoofing setups.",
    sections: [
      {
        title: "DNS Record Types and Extraction",
        theory: "DNS matches human-readable domain names to machine-routable IP addresses. Querying MX records shows you a company's mail handling servers, while TXT records display email validation checks like SPF rules.",
        steps: [
          "Query public name servers to map out system IP configurations.",
          "Check TXT records to evaluate active email validation rules."
        ],
        cmd: [
          { t: "c", v: "Identify authorized mail relay addresses safely" },
          { t: "cmd", v: "dig mx sandbox.nighters.lan +short" },
          { t: "out", v: "10 mail-relay.sandbox.nighters.lan." },
          { t: "c", v: "Check active email security setup rules" },
          { t: "cmd", v: "dig txt sandbox.nighters.lan +short" },
          { t: "out", v: "\"v=spf1 ip4:192.168.1.0/24 -all\"" }
        ]
      }
    ],
    challenge: "Run a diagnostic lookup to find the canonical redirection path for your local test target.",
    hints: ["Using simplification options with lookup tools keeps your screen clear of extra diagnostic text."],
    quiz: [
      { q: "Which DNS record type links a domain name straight to an IPv4 network address?", opts: ["MX record", "AAAA record", "A record", "CNAME record"], a: 2 },
      { q: "What security configuration inside a TXT record helps protect a domain against email spoofing?", opts: ["TLS encryption hooks", "SPF (Sender Policy Framework)", "HTTP strict transfer rules", "Process thread monitors"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x08 — Record Analysis",
      tasks: ["Extract and list all host and mail records for your assigned lab target domain.", "Check the domain's TXT entries to confirm if email security validation policies are active."],
      submit: "Submit your parsed domain configuration report."
    },
    summary: "Level 8 covered DNS zone auditing, record types, and using text configurations to verify email defenses.",
    preview: "Level 9 explores web connection encryption certificates, public tracking logs, and historical domain listings."
  },
  {
    id: 9,
    title: "Certificates & WHOIS Analytics",
    emoji: "📜",
    subtitle: "Public Key Certificates, Trust Matrix Reviews, and Registration Fields",
    type: "web",
    phase: 2,
    month: 2,
    points: 110,
    duration_mins: 80,
    intro: "Encryption certificates keep traffic private, but their public configurations also hold structural hints about a company's staging sites and server names.",
    sections: [
      {
        title: "Certificate Alternate Name Extraction",
        theory: "Websites use SSL/TLS certificates to run securely over HTTPS. These certificates often list multiple related web addresses in their Subject Alternative Name (SAN) fields, which can reveal staging portals or test setups.",
        steps: [
          "Connect to a practice server port to read its certificate metrics.",
          "Check the Subject Alternative Name fields to find internal testing locations."
        ],
        cmd: [
          { t: "c", v: "Pull and parse certificate parameters securely" },
          { t: "cmd", v: "openssl s_client -connect localhost:443 -showcerts < /dev/null 2>/dev/null | openssl x509 -noout -text | grep -A 1 \"Subject Alternative Name\"" },
          { t: "out", v: "X509v3 Subject Alternative Name:\n  DNS:sandbox.nighters.lan, DNS:staging-internal.nighters.lan" }
        ]
      }
    ],
    challenge: "Pull down the certificate parameters from your lab environment, and list the issuer organization details accurately.",
    hints: ["Secure connection tools pull a target's certificate data without running aggressive network port sweeps."],
    quiz: [
      { q: "Where on an SSL/TLS certificate can you find extra, linked subdomain addresses?", opts: ["Cipher Chain block settings", "Subject Alternative Name (SAN) fields", "TCP window definitions", "HTTP request paths"], a: 1 },
      { q: "What can you find by checking historical domain records during an audit?", opts: ["Live CPU use metrics", "Past registrars, technical points of contact, and configuration change handles", "Server database tables", "Active process IDs"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x09 — Cryptographic Asset Auditing",
      tasks: ["Extract all alternative domain records from your assigned testing site.", "Document the registration authority details and signature types found on the certificate."],
      submit: "Submit your certificate properties output text logs."
    },
    summary: "Level 9 focused on reading public encryption certificate logs, extracting alternative domain fields, and tracking down connected registration endpoints.",
    preview: "Level 10 wraps up Phase 2, covering advanced search engine parameters, finding exposed folders, and building inventory logs."
  },
  {
    id: 10,
    title: "Search Engine Operators & Asset Inventories",
    emoji: "📋",
    subtitle: "Advanced Directives, Directory Exposure Lookups, and Inventory Building",
    type: "web",
    phase: 2,
    month: 2,
    points: 150,
    duration_mins: 90,
    intro: "Search engines crawl public sites constantly. Using advanced search filters helps you locate misplaced backup archives and open folder listings.",
    sections: [
      {
        title: "Advanced Search Filters",
        theory: "Web crawlers index everything they find unless told otherwise by configuration rules like a robots.txt file. Using precise search filters lets you find exposed files—like open databases or logs—without interacting with the live systems.",
        steps: [
          "Use advanced search filters to find backup file names in your training datasets.",
          "Isolate exposed directory listings by filtering site text titles."
        ],
        cmd: [
          { t: "c", v: "Simulate an advanced search query strategy to locate exposed configuration backups" },
          { t: "cmd", v: "echo \"Search Directive: site:nighters.lan filetype:sql\"" },
          { t: "out", v: "Simulated Match: http://nighters.lan/uploads/backup_2026.sql" },
          { t: "c", v: "Simulate a query filter targeting exposed directory listing layouts" },
          { t: "cmd", v: "echo \"Search Directive: site:nighters.lan intitle:\\\"index of\\\"\"" },
          { t: "out", v: "Simulated Match: http://nighters.lan/development/src/" }
        ]
      }
    ],
    challenge: "Organize your discoveries from levels 6-10 into a master asset inventory list, grouping them by asset type and danger levels.",
    hints: ["The filetype filter narrows your searches down to precise extensions like log, env, or sql backups."],
    quiz: [
      { q: "Which search filter restricts your results to a single target domain address layout?", opts: ["filetype:", "site:", "intitle:", "inurl:"], a: 1 },
      { q: "What text file is placed in a site's main directory to tell web crawling bots which folders they should ignore?", opts: ["index.html", ".env", "robots.txt", "config.php"], a: 2 }
    ],
    assignment: {
      title: "Lab Assessment 0x10 — Phase 2 Review Inventory",
      tasks: ["Build a complete asset inventory list mapping all your discoveries from Phase 2.", "Document at least three sample search query strings designed to look for exposed project configuration backups."],
      submit: "Submit your final master inventory tracking sheet."
    },
    summary: "Level 10 completed Phase 2 by detailing advanced search engine filters, finding exposed directories, and organizing discoveries into a professional asset inventory tracking system.",
    preview: "Level 11 starts Phase 3 (Web Security Fundamentals), covering authentication models and login form security checks."
  }
];

// Configuration Helpers
function getLessonById(id) { return LESSONS.find(l => l.id === parseInt(id)) || null; }
function getLessonsByPhase(p) { return LESSONS.filter(l => l.phase === parseInt(p)); }
function getLessonsByMonth(m) { return LESSONS.filter(l => l.month === parseInt(m)); }
