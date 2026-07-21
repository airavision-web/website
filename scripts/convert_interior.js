const https = require('https');
const fs = require('fs');
const path = require('path');

const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NzFlYjUwY2Y1OGUwMzgzOTNmZWEwMWVhY2Q0EgsSBxC_zNPIrRQYAZIBIwoKcHJvamVjdF9pZBIVQhM3ODcyODQxNTk4NjY0MDA1NjM0&filename=&opi=89354086";

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        let bodyContent = data.substring(data.indexOf('<body>'), data.indexOf('</body>') + 7);
        let mainContent = "";
        const mainMatch = data.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
        if (mainMatch) {
            mainContent = mainMatch[0];
        } else {
            const sections = data.match(/<section[^>]*>([\s\S]*?)<\/section>/ig);
            if (sections) {
                mainContent = sections.join('\n');
            } else {
                mainContent = bodyContent;
            }
        }

        let jsx = mainContent
            .replace(/class=/g, 'className=')
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/<img([^>]+)>/g, (match, p1) => {
                if (p1.endsWith('/')) return match;
                return `<img${p1} />`;
            })
            .replace(/<br>/g, '<br />')
            .replace(/<hr>/g, '<hr />')
            .replace(/<input([^>]+)>/g, (match, p1) => {
                if (p1.endsWith('/')) return match;
                return `<input${p1} />`;
            })
            .replace(/style="([^"]*)"/g, (match, styleStr) => {
                const styles = styleStr.split(';').filter(s => s.trim());
                let styleObj = "{";
                styles.forEach(s => {
                    let [key, val] = s.split(':');
                    if (key && val) {
                        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                        val = val.trim().replace(/'/g, "\\'");
                        styleObj += `${key}: '${val}', `;
                    }
                });
                styleObj += "}";
                return `style={${styleObj}}`;
            });

        fs.writeFileSync('temp_certifications_jsx.txt', jsx);
        console.log("Extracted JSX successfully.");
    });
});
