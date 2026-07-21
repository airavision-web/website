const https = require('https');
const fs = require('fs');
const path = require('path');

const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NzFlMzI2OTZkODIwN2M0ZDQwNDY1MGZlODc2EgsSBxC_zNPIrRQYAZIBIwoKcHJvamVjdF9pZBIVQhM3ODcyODQxNTk4NjY0MDA1NjM0&filename=&opi=89354086";

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        // We have the raw HTML
        // Extract the main content (skip nav and footer)
        
        let bodyContent = data.substring(data.indexOf('<body>'), data.indexOf('</body>') + 7);
        
        // Very rough extraction of <main> or the core sections
        let mainContent = "";
        const mainMatch = data.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
        if (mainMatch) {
            mainContent = mainMatch[0];
        } else {
            // Find sections
            const sections = data.match(/<section[^>]*>([\s\S]*?)<\/section>/ig);
            if (sections) {
                // Skip the first one if it looks like a hero that we might want to replace, but let's just grab all for now
                mainContent = sections.join('\n');
            } else {
                mainContent = bodyContent;
            }
        }

        // Convert HTML to JSX
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
                // naive style object conversion
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
            
        // Clean up unclosed tags or weird syntax if needed, but Next.js compiler will yell if it's too broken
        // Let's write the raw JSX to a temp file and I will manually inspect it.

        fs.writeFileSync('temp_interior_jsx.txt', jsx);
        console.log("Extracted JSX successfully.");
    });
});
