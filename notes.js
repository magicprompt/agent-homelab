// Speaker notes for the agent-homelab deck.
// Shared by index.html (deck) and presenter.html (presenter view).
// One entry per slide, in order. "vo" is the direct voiceover script.
const NOTES = [
  {
    title: "Title",
    vo: "A short, practical walkthrough: how to build your own always-on, self-hosted AI agent. Not a product pitch — a homelab guide. I'll show you the shape, then what's required versus optional."
  },
  {
    title: "Why self-host an agent",
    vo: "A cloud chatbot answers. A cloud agent sandbox runs in someone else's hermetically sealed box, on their terms. A self-hosted agent runs on hardware you control, with full access to your own files, tools, and network. More flexible, more private, and it's yours."
  },
  {
    title: "Three ingredients",
    vo: "Strip it down and there are only three things: a machine that's always on, open agent software running on it, and a way to reach it from anywhere. Everything else in this deck is detail layered on top of those three."
  },
  {
    title: "Hardware — always on",
    vo: "Pick any machine that can stay powered on 24/7 — a spare Mac mini, an old laptop, a NUC, a small home server. The only hard requirement is 'always on.' If it's off, the agent doesn't exist. A battery backup is a cheap, optional way to ride out power blips so it doesn't go down mid-task."
  },
  {
    title: "Remote access — pick your depth",
    vo: "Three tiers, each more robust than the last. SSH plus a terminal multiplexer gets you remote command-line access that survives disconnects. A remote-desktop tool over your private network adds full screen control when something needs a GUI. A hardware KVM is the deepest tier — physical keyboard, video and power control, so even a kernel panic or a bad reboot can't lock you out. Most people only need tier one or two."
  },
  {
    title: "Network — private mesh",
    vo: "A mesh VPN like Tailscale connects your devices directly, with no ports opened to the public internet and no cloud middleman relaying your traffic. From outside the mesh, the machine doesn't exist. This is the backbone that makes every other piece — SSH, remote desktop, APIs — reachable from anywhere, safely."
  },
  {
    title: "Daily access — your doors",
    vo: "Once the mesh is up, you choose how you talk to the agent day to day: a messaging app like Telegram for quick asks from your phone, a desktop app or terminal at your desk, or an API endpoint for scripts and other tools. Same agent, same memory, whichever door you use."
  },
  {
    title: "Bonus: run coding agents on your own box",
    vo: "Once you're SSH'd into always-on hardware, you're not limited to chatting with your home agent — you can run Claude Code, Codex, or any coding agent directly on that machine. Kick off a long task, disconnect, check back later from your phone. Same idea as a cloud sandbox, except it's your environment: your dotfiles, your packages, your disk, nothing hermetically sealed."
  },
  {
    title: "Local models",
    vo: "A second machine on the same mesh — an old laptop is plenty — can run Ollama and serve open models locally. No API key, no data leaving your network, useful as a fallback when cloud providers are down, and genuinely private for anything sensitive."
  },
  {
    title: "Privacy practices",
    vo: "A few habits that cost nothing: separate email and workspace accounts for different life domains — shopping, admin, health — so no single account sees everything. And if your agent keeps long-term memory, consider running that memory layer locally too, so the record of your conversations stays on hardware you own instead of a third-party's server."
  },
  {
    title: "Why I picked Hermes",
    vo: "Quick aside, not the point of this deck: I run Hermes Agent for mine. It's open source, self-hosted, works with any model provider, and meets me on whatever surface I'm using. Swap in whatever agent framework fits you — the homelab principles are the same either way."
  },
  {
    title: "What you actually need",
    vo: "Boiled down to a checklist. Required: an always-on machine, open agent software, and a private network to reach it. Everything else — battery backup, hardware KVM, a second machine for local models, a terminal multiplexer — is an upgrade you add when you feel the pain it solves, not before."
  },
  {
    title: "Start here",
    vo: "That's the whole shape. Pick a machine you already own, put an open agent on it, connect it to a mesh network, and start talking to it from your phone. Everything else is optional polish."
  }
];
