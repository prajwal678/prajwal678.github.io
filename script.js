document.addEventListener("DOMContentLoaded", function() {
    const terminalBody = document.querySelector(".terminal-body");
    const terminalHeader = document.querySelector(".terminal-header");
    const terminal = document.querySelector(".terminal");

    terminal.style.backgroundColor = '#000';
    terminalHeader.style.backgroundColor = '#000';
    terminalHeader.style.color = '#0f0';
    terminalBody.style.color = '#0f0';

    const commandHistory = [];
    let themeColors = {
        textColor: '#0f0',
        headerColor: 'white',
    };

    const commands = {
        "help": () => {
            return `
                <span style="color:${themeColors.textColor};">help</span>${'&nbsp;'.repeat(9)}- List all Commands <br>
                <span style="color:${themeColors.textColor};">welcome</span>${'&nbsp;'.repeat(6)}- Introductory Section <br>
                <span style="color:${themeColors.textColor};">edu</span>${'&nbsp;'.repeat(10)}- Academics <br>
                <span style="color:${themeColors.textColor};">email</span>${'&nbsp;'.repeat(8)}- Reach out on Email <br>
                <span style="color:${themeColors.textColor};">projects</span>${'&nbsp;'.repeat(5)}- My Projects <br>
                <span style="color:${themeColors.textColor};">skills</span>${'&nbsp;'.repeat(7)}- My current Skill Set <br>
                <span style="color:${themeColors.textColor};">socials</span>${'&nbsp;'.repeat(6)}- Social Media Profiles <br>
                <span style="color:${themeColors.textColor};">cv</span>${'&nbsp;'.repeat(11)}- Check out my Resume <br>
                <span style="color:${themeColors.textColor};">themes</span>${'&nbsp;'.repeat(7)}- Website Themes <br>
                <span style="color:${themeColors.textColor};">clear</span>${'&nbsp;'.repeat(8)}- Clear the Terminal <br>
                <span style="color:${themeColors.textColor};">exit</span>${'&nbsp;'.repeat(9)}- Close Tab <br>
                <hr>
            `; // NEED TO ADD GUI COMMAND FOR PORTFOLIO
        },

        "welcome": `Hi!, I am Prajwal M, welcome to my portfolio website!, (TODO)GUI version. <br>
                    I am a computer science enthusiast, interested in Distributed Systems, Networks, Systems and more! <br>
                    Junior @ PES University, tech lead for a few clubs and currently interning @ <a href = "https://www.cognitivelab.in/" target="_blank" style = "color: #0cf;">Cognitive labs</a>.<hr>`,
        
        "edu": () => {
            return `<span style="color:${themeColors.textColor};">PES University</span> | 2022 - 2026 <br><span style="color:${themeColors.textColor};">Narayana</span> | 2020 - 2022 <br><span style="color:${themeColors.textColor};">Clarence Public School</span> | 2007 - 2020<hr>`
        },
        
        "email": () => {
            window.open("mailto:i.am.prajwal67@gmail.com");
            return 'Reach out at: i.am.prajwal67@gmail.com<hr>';
        },
        
        "projects": `Checkout my <a href = "https://github.com/prajwal678" target="_blank" style = "color: #0cf;">github</a> to see all my projects <hr> These are some highlights: <br> <a href = "https://github.com/prajwal678/YADTQ" target="_blank" style = "color: #0cf;">YADTQ</a> <br> <a href = "https://github.com/prajwal678/NoteBetter" target="_blank" style = "color: #0cf;">NoteBetter</a> <br> <a href = "https://github.com/prajwal678/WCE-Indexify" target="_blank" style = "color: #0cf;">WCE-Indexify</a><hr>`,
        
        "skills": () => {
            return `<span style="color:${themeColors.textColor};">Languages</span>: C/C++, Python, JavaScript, Rust, Bash, Flutter <br>
                    <span style="color:${themeColors.textColor};">Tools</span>: Wireshark, PostMan, Git, Cisco Packet Tracer, Nmap, Docker, Kubernetes <br>
                    <span style="color:${themeColors.textColor};">Frameworks</span>: MOpenSSL, Flask, MERN, Kafka, Redis <br>
                    <span style="color:${themeColors.textColor};">Platforms</span>: Linux, Web, Windows, Arduino, Azure, AWS <br>
                    <hr>`
        },

        "socials": `Connect with me <br>
                    1. <a href = "https://www.linkedin.com/in/prajwal-m-b83984251/" target="_blank" style = "color: #0fc;">LinkedIn</a> <br>
                    2. <a href = "https://github.com/prajwal678" target="_blank" style = "color: #0fc;">GitHub</a> <br>
                    3. <a href = "https://x.com/Prajwal41287086" target="_blank" style = "color: #0fc;">X(Twitter)</a> <br><hr>`,

        "cv": () => {
            window.open("https://drive.google.com/file/d/1G_vFQPY8dh-Y7MwOSi8w_bjgCH5zv9xL/view?usp=sharing")
            return 'May not be the lastest! xD'
        },

        "themes": `classic hacker <br> personal <br><br>type 'theme to theme-name'.<hr>`,

        "theme to classic hacker": () => {
            terminal.style.backgroundColor = '#000';
            terminalHeader.style.backgroundColor = '#000';
            terminalHeader.style.color = '#0f0';
            terminalBody.style.color = '#0f0';
            themeColors.textColor = '#0f0';
            document.querySelectorAll('a').forEach(link => {
                link.style.color = '#0cf';
            });
            return "Switched to Classic Hacker theme!";
        },

        "theme to personal": () => {
            terminal.style.backgroundColor = '#1e1e1e';
            terminalHeader.style.backgroundColor = '#252526';
            terminalHeader.style.color = '#d4d4d4';
            terminalBody.style.color = '#d4d4d4';
            themeColors.textColor = '#d4d4d4';
            document.querySelectorAll('a').forEach(link => {
                link.style.color = '#569cd6';
            });
            return "Switched to my Personal theme!";
        },

        "clear": () => {
            terminalBody.innerHTML = ''; return ''; 
        },

        // "exit": () => window.close(),
        "exit": () => {
            const msg = 'Closing session... <small>(Close manually if stuck)</small>';
            try {
                window.open('', '_self').close();
                setTimeout(() => window.close(), 100);
            }
            catch (e) {
                return `${msg}<br>Error: ${e.message}`;
            }
            return msg;
        },
    };


    function enterComm(input) {
        const [commandName, ...args] = input.toLowerCase().split(" ");
        let response;
    
        if (commands[`${commandName} ${args.join(" ")}`]) {
            response = typeof commands[`${commandName} ${args.join(" ")}`] === "function"
                       ? commands[`${commandName} ${args.join(" ")}`](args)
                       : commands[`${commandName} ${args.join(" ")}`];
        }
        else if (commands[commandName]) {
            response = typeof commands[commandName] === "function"
                       ? commands[commandName](args)
                       : commands[commandName];
        }
        else {
            response = `Command not found: ${commandName}`;
        }
    
        return response;
    }

    function appendPrompt() {
        const newPrompt = document.createElement("p");
        newPrompt.classList.add("prompt");
        newPrompt.innerHTML = `~$ <span contenteditable="true" class="user-input"></span>`;
        terminalBody.appendChild(newPrompt);

        const newUserInput = newPrompt.querySelector(".user-input");
        newUserInput.focus();

        newUserInput.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                const input = newUserInput.textContent.trim();
                if (input) {
                    commandHistory.push(input);
                    historyIndex = commandHistory.length;
                    newUserInput.setAttribute("contenteditable", "false");
                    const response = enterComm(input);
                    if (response) {
                        const responseElement = document.createElement("p");
                        responseElement.style.color = 'white'; 
                        responseElement.innerHTML = response;
                        terminalBody.appendChild(responseElement);
                    }
                    appendPrompt();
                }
            } else if (e.key === "ArrowUp") {
                if (historyIndex > 0) {
                    historyIndex--;
                    newUserInput.textContent = commandHistory[historyIndex];
                    appendCard(newUserInput);
                }
            } else if (e.key === "ArrowDown") {
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    newUserInput.textContent = commandHistory[historyIndex];
                    appendCard(newUserInput);
                } else {
                    historyIndex = commandHistory.length;
                    newUserInput.textContent = "";
                }
            }
        });
    }

    function appendCard(el) {
        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            const range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            const textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    appendPrompt();
});
