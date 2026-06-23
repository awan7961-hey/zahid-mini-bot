const { cmd } = require('../zaidi');

cmd({
    pattern: "ping",
    alias: ["pong", "speed"],
    desc: "⚡ Check bot speed instantly",
    category: "main",
    react: "⚡",
    filename: __filename
}, async (conn, mek, m, { from }) => {

    try {
        const startTime = Date.now();
        const ping = Date.now() - startTime; // Calculate instant delay

        // Direct single reply with no edits or loops
        await conn.sendMessage(from, { 
            text: `*𝛧𝜟𝛪𝐷𝛪 𝛭𝐷 𝛲𝛪𝜨𝐺:* \`${ping} ms\`` 
        }, { quoted: m });

    } catch (e) {
        console.error("Ping Error:", e);
    }
});
