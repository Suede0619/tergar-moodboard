Hey, I dropped our images into the prototype and stripped all image filters and overlays so you're seeing photos raw. Some copy and images don't match up yet — I left the copy as-is for now.

**Live:** https://suede0619.github.io/tergar-moodboard/
**Repo:** https://github.com/Suede0619/tergar-moodboard

---

**A note on the setup:** the main working repo is private, so the moodboard lives as a subfolder inside it. The public site is a separate repo that mirrors just that folder. `push.sh` handles syncing both in one step.

---

**To work on it:**

If you haven't cloned the main repo yet:

```
git clone https://github.com/Suede0619/tergar.git
```

If you already have it, just pull:

```
git pull
```

Files to edit are in:

```
marketing/brand/tergar-legacy-moodboard/
```

To preview locally just open `index.html` in a browser.

To push changes and update the live site, run from the repo root:

```
bash push.sh
```

One command pushes to both the private repo and the live site.
