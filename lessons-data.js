/* ================================================================
   NIGHTERS CYBER ACADEMY — Professional Foundations Roadmap (1-10)
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
    intro: "Welcome to the operational gateway. Legitimate security engineering depends entirely on legal authorization, strict scope limits, and meticulous documentation habits.",
    objectives: [
      "Explain the fundamental difference between ethical hacking and unauthorized intrusion.",
      "Describe the core operational structures of Red, Blue, and Purple Teams.",
      "Understand why explicit written authorization and scope boundaries are essential.",
      "Initialize an isolated local workstation terminal layer via Termux and Debian."
    ],
    theory: "Ethical hacking is the practice of evaluating system security architecture with the explicit, written permission of the owner. Legitimate professionals follow the Rules of Engagement (RoE) to discover gaps before malicious actors exploit them. Red Teams simulate adversarial attacks; Blue Teams defend and monitor infrastructure; Purple Teams coordinate both sides to maximize security improvements. Testing an asset without a written contract can violate global computer misuse laws.",
    sections: [
      {
        title: "Workstation Initialization and Navigation",
        steps: [
          "Launch your Termux ecosystem wrapper on your Android device.",
          "Log into the local Debian proot simulation system layer.",
          "Create a dedicated, organized parent directory structure for all future labs."
        ],
        cmd: [
          { t: "c", v: "Verify your current workspace location" },
          { t: "cmd", v: "pwd" },
          { t: "out", v: "/home/malik" },
          { t: "c", v: "Build the primary academy testing workspace paths" },
          { t: "cmd", v: "mkdir -p labs/notes && cd labs && ls -la" },
          { t: "out", v: "total 12\ndrwxr-xr-x 3 malik root 4096 Jun 26 07:00 .\ndrwxr-xr-x 4 malik root 4096 Jun 26 07:00 ..\ndrwxr-xr-x 2 malik root 4096 Jun 26 07:00 notes" },
          { t: "ok", v: "Workstation profile environment configured successfully under malik@root." }
        ]
      }
    ],
    challenge: "Independent Challenge: Create a new directory named 'scope_verification' inside your notes folder. Inside it, use terminal shortcuts to generate a new text file named 'rules.txt'.",
    hints: [
      "Paths in Linux are strict; verify lowercase versus uppercase spelling across directory strings.",
      "Use 'mkdir -p' if you want to generate nested subfolders automatically in a single command line pass."
    ],
    quiz: [
      { q: "What is the primary document defining what a security professional can and cannot test?", opts: ["Software License", "Rules of Engagement / Scope of Work", "Privacy Policy", "Source Code Documentation"], a: 1 },
      { q: "Which Linux terminal instruction outputs the absolute path string of your active workspace?", opts: ["ls", "cd", "pwd", "cat"], a: 2 }
    ],
    assignment: {
      title: "Lab Assessment 0x01 — Scope Setup",
      tasks: [
        "Create an organized lab directory tree structure on your workstation console.",
        "Generate a text file summarizing the key differences between a Red Team and a Blue Team.",
        "Document your local shell environment settings parameters accurately."
      ],
      submit: "Submit the output text log showing your clean directory configurations."
    },
    summary: "Level 1 established the legal framework necessary for security engagements and initialized the command-line workstation matrix.",
    preview: "Next Level Preview: Level 2 deep-dives into intermediate Linux Mastery, covering bash utilities, operations control, and administrative permission bits."
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
    intro: "Operating within enterprise environments demands complete comfort working inside non-GUI terminal interfaces to manage files, monitor threads, and adjust parameters.",
    objectives: [
      "Understand and modify standard Linux file permissions using octal notation.",
      "Monitor, filter, and control active process workflows running in the system background.",
      "Inspect, manage, and verify structural system logging streams for auditing trails."
    ],
    theory: "Everything in Linux is treated as a file. Access permissions are controlled by read (4), write (2), and execute (1) parameters assigned across Owners, Groups, and Users. Long-running automation actions are handled by background processes or services. Tracking these active threads via terminal utilities ensures administrators can spot unauthorized application workflows immediately.",
    sections: [
      {
        title: "Process Control and System Auditing",
        steps: [
          "Display a comprehensive list of all active execution workflows inside the engine.",
          "Isolate specific running application instances using terminal stream filtration rules.",
          "Check system logs to verify recent terminal authentication events."
        ],
        cmd: [
          { t: "c", v: "Check running process parameters cleanly" },
          { t: "cmd", v: "ps aux | grep bash" },
          { t: "out", v: "malik        114  0.0  0.1  18232  3240 pts/0    S    07:15   0:00 /bin/bash" },
          { t: "c", v: "Inspect security configuration permissions attributes" },
          { t: "cmd", v: "chmod 755 notes/session_log.txt && ls -l notes/session_log.txt" },
          { t: "out", v: "-rwxr-xr-x 1 malik root 240 Jun 26 07:15 notes/session_log.txt" }
        ]
      }
    ],
    challenge: "Independent Challenge: Locate a background test process ID (PID) running on your local machine and use standard management utilities to terminate it cleanly without breaking adjacent system pools.",
    hints: [
      "The 'ps aux' utility displays all running system indicators; pipe it to 'grep' to filter down to a specific name.",
      "Ensure you are target-matching the precise numeric process ID (PID) column value during adjustments."
    ],
    quiz: [
      { q: "Which octal permissions configuration grants full read/write/execute properties to the owner, but only read/execute to others?", opts: ["777", "644", "755", "400"], a: 2 },
      { q: "Which standard folder path contains the core system logging records in a Debian Linux distribution?", opts: ["/etc/config", "/var/log", "/opt/bin", "/home/malik"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x02 — System Supervision Audit",
      tasks: [
        "Generate and log a complete list of running process states on your terminal workstation.",
        "Modify a tracking script file's attributes to restrict execution permissions to your profile owner explicitly.",
        "Locate and view your local terminal session history file values."
      ],
      submit: "Submit the list of terminal flags and command streams used during process management."
    },
    summary: "Level 2 delivered foundational mastery over permissions administration, process supervision variables, and filesystem diagnostics.",
    preview: "Next Level Preview: Level 3 steps outside the local terminal to map out global Network Frameworks, the OSI Model, and Socket routes."
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
    intro: "Networks handle all modern platform traffic. Before verifying structural safety boundaries, you must understand how data packets are routed across systems.",
    objectives: [
      "Deconstruct data flow models across the 7 layers of the OSI model and TCP/IP stacks.",
      "Identify core internet service protocols, including DNS, HTTP, HTTPS, and SSH channels.",
      "Map active communication connection configurations on your local adapter matrices."
    ],
    theory: "Data traffic travels over explicit numeric designations known as ports. Standard core protocols have fixed definitions (e.g., HTTP runs over port 80, HTTPS over 443, SSH over 22). By inspecting active socket parameters on a server, security analysts can verify which channels are open and listening to inbound network traffic requests.",
    sections: [
      {
        title: "Socket Management and Port Interrogation",
        steps: [
          "Query network adapter configurations to verify active IP routing parameters.",
          "Audit local system port connections to verify running listening services."
        ],
        cmd: [
          { t: "c", v: "Query localized IP address definitions across adapters" },
          { t: "cmd", v: "ip addr show" },
          { t: "out", v: "inet 127.0.0.1/8 scope host lo\ninet 192.168.1.45/24 brd 192.168.1.255 scope global eth0" },
          { t: "c", v: "Verify all listening TCP port sockets on the system" },
          { t: "cmd", v: "ss -tlnp" },
          { t: "out", v: "State      Recv-Q Send-Q Local Address:Port\nLISTEN     0      128    0.0.0.0:22" }
        ]
      }
    ],
    challenge: "Independent Challenge: Analyze your local network configuration parameters, identify your system's active default gateway route, and map out the protocol name linked to port 53.",
    hints: [
      "The 'ss' utility is the modern replacement for old, legacy 'netstat' routing diagnostics.",
      "Port 53 handles domain translation logic tasks across global web platforms."
    ],
    quiz: [
      { q: "Which OSI layer handles the framing and routing of IP packets across intermediate network nodes?", opts: ["Layer 1 — Physical", "Layer 3 — Network", "Layer 7 — Application", "Layer 4 — Transport"], a: 1 },
      { q: "What network service protocol runs on port 22 by default to support secure encrypted terminal command connections?", opts: ["FTP", "HTTP", "SSH", "DNS"], a: 2 }
    ],
    assignment: {
      title: "Lab Assessment 0x03 — Network Interface Mapping",
      tasks: [
        "Map and log the active local IP properties of your workstation adapter card parameters.",
        "List every active listening TCP port discovered during your network socket scans.",
        "Explain the key operational difference between TCP connection tracking and UDP datagram flows."
      ],
      submit: "Submit the text log containing your network interface configurations and port listings."
    },
    summary: "Level 3 provided clear insight into network mapping, protocol layers, socket behaviors, and local routing rules.",
    preview: "Next Level Preview: Level 4 builds automation scripts using Bash variables, logic constructs, and basic Python execution loops."
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
    intro: "Modern security analysis requires automation. Learning to translate manual terminal commands into script workflows allows you to easily process complex datasets.",
    objectives: [
      "Construct executable Bash automation shell scripts to automate system status checks.",
      "Develop foundational Python logic maps incorporating variables, arrays, and conditional if/else blocks.",
      "Parse structured data file assets like JSON strings via execution loop structures."
    ],
    theory: "Programming structures allow computers to handle repetitive tasks using defined rules. Variables save data parameters in memory, conditional statements evaluate true/false paths, and loop arrays iterate through records. Automating system logs parsing or port monitoring saves time and reduces manual errors during long-running administrative assessments.",
    sections: [
      {
        title: "Script Automation and Stream Parsing",
        steps: [
          "Write an automated Bash loop script to check if network targets are active.",
          "Build a basic Python interpreter routine to parse and print dataset records safely."
        ],
        cmd: [
          { t: "c", v: "Write a quick test script loop directly from your terminal workspace" },
          { t: "cmd", v: "echo -e '#!/bin/bash\\nfor i in {1..3}; do echo \"Node-$i online\"; done' > check.sh" },
          { t: "c", v: "Configure operational execution flags and test code execution loops" },
          { t: "cmd", v: "chmod +x check.sh && ./check.sh" },
          { t: "out", v: "Node-1 online\nNode-2 online\nNode-3 online" }
        ]
      }
    ],
    challenge: "Independent Challenge: Write a short, local Python script file named 'parser.py' that takes an array of placeholder domain names, runs through them using a loop, and prints each name with a custom status tag.",
    hints: [
      "Always verify that your script's first line contains the correct interpreter path hashbang directive.",
      "Indentations are critical to formatting and execution within Python coding loops."
    ],
    quiz: [
      { q: "What does the hashbang line '#!/bin/bash' tell the operating system when running a script?", opts: ["It encrypts the source code", "It designates the target terminal shell interpreter to use for execution", "It completely deletes the temporary logging lines", "It requires an active internet hook"], a: 1 },
      { q: "Which control sequence allows a code logic block to loop through a predefined list of variables?", opts: ["if statement", "for loop", "variable assignment", "return function"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x04 — Automation Assembly",
      tasks: [
        "Provide your functional Bash system monitoring loop source code parameters.",
        "Develop a Python array loop script that outputs formatted service port tracking items.",
        "Document the terminal error response messages if executable parameters are skipped."
      ],
      submit: "Upload your completed automation script structures for review."
    },
    summary: "Level 4 introduced core automation logic, variable assignments, array looping, and multi-language script execution.",
    preview: "Next Level Preview: Level 5 explores Web Architecture, focusing on browser structures, session tokens, cookies, and HTTP request methods."
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
    intro: "Web applications are a primary gateway for modern data exchange. To secure web services, you must first understand how browsers talk to backend servers.",
    objectives: [
      "Deconstruct structural components of HTTP request and response message frames.",
      "Explain the exact functional purpose of Document Object Models, HTML, and client-side JavaScript.",
      "Analyze session management mechanics, authentication cookie headers, and REST API endpoints."
    ],
    theory: "Web interaction uses a clear Request/Response model. Browsers send HTTP requests (like GET to read data, or POST to submit forms) to a web server, which replies with status codes (such as 200 OK or 404 Not Found). Sessions are kept stateless via temporary token parameters called cookies, which browsers store and send back with every request to verify user identities.",
    sections: [
      {
        title: "HTTP Stream Inspection and Tracking",
        steps: [
          "Query a local playground web server target using advanced terminal protocol tools.",
          "Analyze the structural response status values, framework headers, and cookie properties."
        ],
        cmd: [
          { t: "c", v: "Inspect web endpoint connection metadata frames explicitly" },
          { t: "cmd", v: "curl -v http://localhost:8080" },
          { t: "out", v: "> GET / HTTP/1.1\n> Host: localhost:8080\n\n< HTTP/1.1 200 OK\n< Server: Apache/2.4.41\n< Set-Cookie: session_id=malik_token_99; HttpOnly" }
        ]
      }
    ],
    challenge: "Independent Challenge: Track down an active API string response value within your local practice workspace, and break down its component attributes into a key-value format.",
    hints: [
      "The '-v' flag in curl turns on full logging outputs, showing you exactly what headers are passing back and forth.",
      "The 'HttpOnly' flag tells browsers to protect cookies by blocking client-side scripts from reading them."
    ],
    quiz: [
      { q: "Which HTTP request method is typically used when submitting profile forms or transmitting user data sets to a backend database?", opts: ["GET", "POST", "OPTIONS", "HEAD"], a: 1 },
      { q: "What does an HTTP status code return mapping in the 400-499 range typically indicate?", opts: ["Server-side internal routing faults", "Client-side input request errors", "Successful data synchronization operations", "Network connection timeouts"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x05 — Web Component Analysis",
      tasks: [
        "Capture and itemize all transaction headers returned by your mock local laboratory web page.",
        "Document the specific security attributes present on the response session cookies.",
        "Explain the structural role of a REST API configuration within multi-tier application networks."
      ],
      submit: "Submit the parsed header logs alongside your structural security descriptions."
    },
    summary: "Level 5 mapped out standard web applications infrastructure, covering HTTP states, browser parameters, and token properties.",
    preview: "Next Level Preview: Entering Phase 2: Reconnaissance. Level 6 teaches Passive Reconnaissance methodologies, public asset harvesting, and tracking footprints safely."
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
    intro: "Reconnaissance is the foundational first step of any comprehensive assessment. Passive methods gather publicly indexed internet records without interacting directly with target firewalls.",
    objectives: [
      "Understand the operational core of Open Source Intelligence (OSINT) workflows.",
      "Map out public organizational footprints safely without sending direct network packets to the host.",
      "Establish rigorous note-taking frameworks to log target information structured for future analysis."
    ],
    theory: "Passive reconnaissance collects infrastructure details from third-party caches, public search engines, and global configuration listings. Because your workstation never communicates directly with the target company's servers, the assessment profile remains completely invisible to their local boundary intrusion detection logs and firewalls.",
    sections: [
      {
        title: "OSINT Document Interrogation and Mining",
        steps: [
          "Use public internet infrastructure directories to audit historical domain details safely.",
          "Examine exposed metadata traces hidden inside publicly downloadable documentation profiles."
        ],
        cmd: [
          { t: "c", v: "Review public global WHOIS allocation records for registration data paths" },
          { t: "cmd", v: "whois sandbox.nighters.lan" },
          { t: "out", v: "Domain Name: sandbox.nighters.lan\nRegistry Domain ID: 9988112_LAN\nRegistrar: Global Assets Provisioning LLC\nName Server: ns1.nighters.lan" }
        ]
      }
    ],
    challenge: "Independent Challenge: Perform a completely passive configuration record trace against a public demonstration domain map, and chart its registered technical contact handles systematically.",
    hints: [
      "Public databases like WHOIS contain registration entries, name server paths, and administrative point contacts.",
      "Never initialize intrusive automated scanning loops when conducting passive infrastructure audits."
    ],
    quiz: [
      { q: "What is the core identifying feature of a proper Passive Reconnaissance operations phase?", opts: ["Modifying database rows", "Flooding systems with connection requests", "Collecting data from public third-party indexes without touching target host assets", "Brute-forcing access credentials"], a: 2 },
      { q: "Why is structured note-taking critical during the initial reconnaissance stages?", opts: ["It increases script execution speeds", "It forms the evidentiary foundation for the eventual technical mitigation report", "It alters server response headers", "It bypasses local firewall blocks"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x06 — Passive Target Intelligence",
      tasks: [
        "Compile a passive intelligence index mapping the public domain assets of a simulated target company.",
        "Document all external name server point-of-presence mappings discovered during public lookups.",
        "Structure a clear template sheet for tracking discovered assets across future lab assignments."
      ],
      submit: "Submit your passive intelligence index sheet for evaluation."
    },
    summary: "Level 6 established the core concepts of passive OSINT methodologies and built structured asset inventories.",
    preview: "Next Level Preview: Level 7 expands data collection into public repositories, utilizing source code archives and leak directories."
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
    intro: "Organizations often accidentally expose sensitive parameters inside historical code archives, open public code hubs, and system metadata profiles.",
    objectives: [
      "Analyze public version-control history archives to find forgotten credentials or testing routes.",
      "Query public internet infrastructure archive machines to track down decommissioned web paths.",
      "Identify corporate structure footprints, email schemas, and user identity formats using open directories."
    ],
    theory: "Developers sometimes make mistakes, like forgetting to remove testing paths or hardcoded configuration parameters before uploading tools to public code hubs. Reviewing old source history, historical directory paths, and archive backups can reveal valuable system information without running a single active scan against the live production systems.",
    sections: [
      {
        title: "Historical Repository Code Interrogation",
        steps: [
          "Audit a sample open-source development repository file history.",
          "Track down hardcoded configuration comments or exposed deployment parameters inside the code history logs."
        ],
        cmd: [
          { t: "c", v: "Review past version tracking logs to search for development comments" },
          { t: "cmd", v: "git log -p -n 1" },
          { t: "out", v: "commit f7b230198ca11\nAuthor: dev-malik <malik@nighters.lan>\n-  const DB_PASS = \"STAGING_DEV_PASSWORD_99\"; // Remove before prod" }
        ]
      }
    ],
    challenge: "Independent Challenge: Dig through a local practice repository asset file structure, analyze its configuration change logs, and isolate any old testing environment configurations.",
    hints: [
      "The command 'git log -p' shows you the exact line-by-line differences and changes made across historical system updates.",
      "Decommissioned code segments often reveal internal naming schemes and backend server IP layouts."
    ],
    quiz: [
      { q: "Which tool or strategy allows analysts to review older, cached versions of public web platforms that are no longer live?", opts: ["Nmap port sweep", "Internet Archive / Wayback Machine directories", "SQLMap engine", "Local host tables"], a: 1 },
      { q: "What security issue occurs when developers leave credentials directly inside source code history files?", opts: ["Cross-Site Scripting", "Hardcoded Secret Exposure", "Denial of Service", "Unrestricted File Upload"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x07 — Archive Configuration Audit",
      tasks: [
        "Audit the provided laboratory practice code history log files.",
        "Isolate and document all hardcoded developer notes, private parameters, and email string patterns.",
        "Draft a clear remediation guide explaining how teams can remove history items before publishing projects."
      ],
      submit: "Submit the list of discovered code findings along with your remediation guidelines."
    },
    summary: "Level 7 demonstrated how historical data, open code repositories, and public documentation metadata can accidentally reveal backend system details.",
    preview: "Next Level Preview: Level 8 dives into DNS Concepts, detailing zone records, name translation systems, and infrastructure lookup tools."
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
    intro: "The Domain Name System acts as the phonebook of the global web. Reviewing public DNS records helps security teams map out a company's mail servers and mail validation rules.",
    objectives: [
      "Deconstruct different DNS record types, including A, AAAA, MX, TXT, and CNAME mappings.",
      "Query global domain registration architectures safely using standard command-line diagnostic tools.",
      "Analyze text-based email protection rules (SPF, DKIM) to evaluate external spoofing resilience."
    ],
    theory: "DNS translates human-readable web addresses into machine-routable IP numbers. Looking at these public assignments reveals key infrastructure details: MX records point straight to email handling servers, while TXT records hold validation strings like SPF (Sender Policy Framework) rules, which tell you which servers are authorized to send emails for the company.",
    sections: [
      {
        title: "Domain Record Interrogation Queries",
        steps: [
          "Query public name servers to locate target IP address resolution lines.",
          "Pull down TXT record entries to check the active email verification settings."
        ],
        cmd: [
          { t: "c", v: "Query target mail server configurations safely" },
          { t: "cmd", v: "dig mx sandbox.nighters.lan +short" },
          { t: "out", v: "10 mail-relay.sandbox.nighters.lan." },
          { t: "c", v: "Audit email security verification configurations" },
          { t: "cmd", v: "dig txt sandbox.nighters.lan +short" },
          { t: "out", v: "\"v=spf1 ip4:192.168.1.0/24 -all\"" }
        ]
      }
    ],
    challenge: "Independent Challenge: Run a query to pull down the CNAME records for a local practice test node, and map out the canonical domain redirection paths accurately.",
    hints: [
      "Using the '+short' flag with the dig utility simplifies your console display by hiding everything except the direct answer values.",
      "The '-all' flag inside an SPF record means the company enforces a strict drop rule for unauthorized external emails."
    ],
    quiz: [
      { q: "Which DNS record entry type is responsible for routing domain names straight to target IPv4 server addresses?", opts: ["MX Record", "AAAA Record", "A Record", "CNAME Record"], a: 2 },
      { q: "What defensive strategy is configured within public TXT entries to help protect domains from email spoofing attacks?", opts: ["SSL/TLS handshakes", "SPF (Sender Policy Framework)", "HTTP secure methods", "Process thread monitoring"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x08 — Public Domain Auditing",
      tasks: [
        "Extract and catalog all A and MX records for the provided laboratory practice domain.",
        "Analyze the discovered TXT records to confirm if email validation policies are active.",
        "Create an architectural diagram showing how name changes handle routing across external addresses."
      ],
      submit: "Submit your comprehensive domain record analysis report."
    },
    summary: "Level 8 covered DNS zone auditing, record types, and using text configurations to verify email defenses.",
    preview: "Next Level Preview: Level 9 expands on infrastructure checks, exploring SSL/TLS Public Key Certificates and WHOIS data analysis."
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
    intro: "Public Key Certificates keep web connections secure, but their configuration logs also reveal valuable clues about a company's internal server names and staging endpoints.",
    objectives: [
      "Analyze public SSL/TLS certificates to find hidden internal server directories and subdomains.",
      "Inspect certificate expiration dates, registration signatures, and Issuer hierarchies.",
      "Correlate WHOIS historical registration data to locate shared networks and related infrastructure boundaries."
    ],
    theory: "To run an encrypted website (HTTPS), companies must obtain an SSL/TLS certificate. These certificates often list multiple related web addresses in their Subject Alternative Name (SAN) fields. Because these certificate parameters are logged in public databases, security professionals can audit them to discover hidden staging servers or development environments without scanning the target directly.",
    sections: [
      {
        title: "Certificate Transparency and Metadata Mining",
        steps: [
          "Query a local practice web service port to pull down its active encryption certificate parameters.",
          "Parse the Subject Alternative Name fields to identify any linked staging domain lines."
        ],
        cmd: [
          { t: "c", v: "Pull and parse public encryption certificate fields cleanly via connection streams" },
          { t: "cmd", v: "openssl s_client -connect localhost:443 -showcerts < /dev/null 2>/dev/null | openssl x509 -noout -text | grep -A 1 \"Subject Alternative Name\"" },
          { t: "out", v: "X509v3 Subject Alternative Name:\n  DNS:sandbox.nighters.lan, DNS:dev-internal.nighters.lan" }
        ]
      }
    ],
    challenge: "Independent Challenge: Extract the issuer registration authorities and alternative domain mappings from the provided laboratory encryption certificate files.",
    hints: [
      "The 'openssl s_client' command initializes an encrypted connection loop to inspect certificate details safely.",
      "The SAN parameter block often exposes unindexed development URLs that won't show up in standard search engine results."
    ],
    quiz: [
      { q: "Where can security analysts find hidden domain names or internal subdomains inside an SSL/TLS certificate configuration?", opts: ["The Cipher Block Chain parameter", "Subject Alternative Name (SAN) field parameters", "The TCP window size profile", "The HTTP request path structure"], a: 1 },
      { q: "What information can historically tracked WHOIS records provide during asset analysis?", opts: ["Real-time active CPU use statistics", "Historical registrar networks, point contacts, and administrative handle paths", "Active server database tables", "Running system process PIDs"], a: 1 }
    ],
    assignment: {
      title: "Lab Assessment 0x09 — Cryptographic Asset Auditing",
      tasks: [
        "Extract the Subject Alternative Name entries from your assigned laboratory test target.",
        "Document the certificate authority chain and signature validation types used by the host.",
        "Cross-reference corporate registration fields using available passive directory maps."
      ],
      submit: "Submit the certificate metadata listings along with your infrastructure mapping logs."
    },
    summary: "Level 9 focused on reading public encryption certificate logs, extracting alternative domain fields, and tracking down connected registration endpoints.",
    preview: "Next Level Preview: Level 10 concludes Phase 2 with Advanced Search Engine Operators, helping you locate exposed files and build asset inventories."
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
    intro: "Search engines constantly crawl global web applications. Using advanced search filters allows you to locate exposed file structures and forgotten administrative entry points.",
    objectives: [
      "Master advanced search engine filters like 'site', 'filetype', and 'intitle' to isolate exposed resources.",
      "Locate accidental directory index exposures, configuration backups, and unindexed portals.",
      "Assemble discovered assets into a structured master tracking log ready for administrative remediation reviews."
    ],
    theory: "Public web crawlers index everything they can find unless explicitly blocked by a site's policy files (like `robots.txt`). By combining specific search filters, you can query these massive public engine databases to pinpoint critical issues—such as exposed configuration sheets, forgotten database backups, or open file directories—without interacting with the live systems.",
    sections: [
      {
        title: "Advanced Engine Filter Simulation Mapping",
        steps: [
          "Use advanced search query strings to locate exposed log file backups in your training data sets.",
          "Filter out standard production routes to isolate unindexed administrative portals."
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
    challenge: "Independent Challenge: Create a structured asset directory inventory containing 5 distinct asset classes discovered across Phase 2, organizing them by risk level and configuration group.",
    hints: [
      "The 'filetype:' filter helps you zero in on specific extensions like log, sql, env, or backup configurations.",
      "Reviewing site policy files like 'robots.txt' can reveal exactly which sensitive paths administrators are trying to hide from search engines."
    ],
    quiz: [
      { q: "Which advanced search operator restricts query results exclusively to a single target domain address framework?", opts: ["filetype:", "site:", "intitle:", "inurl:"], a: 1 },
      { q: "What file is placed in a website's root folder to give crawling bots instructions on which directories to skip?", opts: ["index.html", ".env", "robots.txt", "config.php"], a: 2 }
    ],
    assignment: {
      title: "Lab Assessment 0x10 — Phase 2 Capstone Inventory",
      tasks: [
        "Build a comprehensive master asset inventory log mapping all discoveries from Levels 6 through 10.",
        "Document at least 3 simulated query strings designed to look for exposed configuration assets.",
        "Provide clear technical recommendations explaining how an organization can hide staging portals and internal documentation from public crawlers."
      ],
      submit: "Submit your final master asset inventory document to complete your Phase 2 milestone assignment."
    },
    summary: "Level 10 completed Phase 2 by detailing advanced search engine filters, finding exposed directories, and organizing discoveries into a professional asset inventory tracking system.",
    preview: "Next Level Preview: Moving to Phase 3: Web Security Fundamentals. Level 11 focuses on Authentication Architectures, session management rules, and login form security validations."
  }
];

// Helper Query Navigation Functions
function getLessonById(id) { return LESSONS.find(l => l.id === parseInt(id)) || null; }
function getLessonsByPhase(p) { return LESSONS.filter(l => l.phase === parseInt(p)); }
function getLessonsByMonth(m) { return LESSONS.filter(l => l.month === parseInt(m)); }
