# agent-homelab

A lightweight guide to building your own always-on, self-hosted AI agent — the hardware, the network, and the access patterns, independent of which agent framework you pick.

**[View the deck →](index.html)** · **[Jump straight to the setup guide →](setup.html)** (open locally or serve as a static site)

## Why

A cloud chatbot answers; it doesn't act. A cloud agent sandbox acts, but inside someone else's hermetically sealed box, on their terms. A self-hosted agent runs on hardware you control, with real access to your own files, tools, and network.

## The shape

Three ingredients, nothing more required:

1. **An always-on machine** — any box you can leave powered on 24/7. A spare Mac mini, an old laptop, a NUC, a small home server.
2. **Open agent software** running on it.
3. **A way to reach it from anywhere** — a private mesh network so you're not opening ports to the public internet.

Everything else below is optional, added as needed.

## Remote access — pick your depth

| Tier | What it gives you | When you need it |
|---|---|---|
| SSH + terminal multiplexer | Command-line access that survives disconnects; reattach from any device | Always — this is the baseline |
| Remote desktop over your private network | Full GUI control | When a task needs a screen |
| Hardware KVM (keyboard/video/power) | Recovery even from a crash or a bad reboot | After you've been locked out once |

## Network

A mesh VPN (e.g. Tailscale) connects your devices directly with no forwarded ports and no public endpoint. Off the mesh, the machine doesn't exist.

## Daily access

Once the mesh is up, reach the same agent through whichever door fits the moment — a messaging-app bot on your phone, a desktop app or terminal at your desk, or an API endpoint for scripts.

## Bonus: coding agents on your own hardware

SSH into the always-on machine and run a coding agent (Claude Code, Codex, etc.) directly on it. Kick off a task, disconnect, check back later — same idea as a cloud sandbox, except it's your dotfiles, your packages, your disk.

## Local models

A second machine on the same mesh can run an open-model server (e.g. Ollama) for local inference — no API key required, nothing leaves your network. Useful as a fallback when cloud providers are down, and genuinely private for sensitive work.

## Privacy practices

- Separate email/workspace accounts per life domain (shopping, admin, health) so no single account sees everything.
- If your agent keeps long-term memory, consider running that memory layer locally so the record stays on hardware you own.

## What you actually need

**Required:** always-on machine · open agent software · private mesh network.

**Upgrades, not prerequisites:** UPS battery backup · hardware KVM · second machine for local models · terminal multiplexer.

Add each upgrade when you feel the pain it solves, not before.

## The agent I use

This guide is framework-agnostic, but for reference: [Hermes Agent](https://github.com/NousResearch/hermes-agent) ([docs](https://hermes-agent.nousresearch.com/docs/)) — open source, self-hosted, any model provider, same session across every surface.

---

Deck built with the same lightweight Swiss-design HTML/CSS system as [hermes-demo](https://github.com/magicprompt/hermes-demo). No build step — open `index.html` directly or serve the folder as static files. Press `N` on the deck for presenter/speaker-notes view.
