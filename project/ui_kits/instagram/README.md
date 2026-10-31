# UI kit — Instagram serenis.it

Rebuilt from the reference screenshots in `uploads/` (profile, grid, three posts). Profile with bio, highlights (Chi siamo, Come funziona, Agevolazioni, Test gratis, Consiglia), 3:4 grid with pinned/reel/carousel badges. Tap a tile to open the post feed from that post: swipe or use the arrows across slides, double-tap or ♡ to like, bookmark to save.

- `posts.jsx` — `POSTS` (headline copy from the screenshots), `PostSlide`, `ReelFrame`
- `Profile.jsx` — header, highlights, tabs, grid; shared `Ic` (Lucide), `Avatar`, `Verified`
- `PostViewer.jsx` — `FeedScreen` / `FeedPost`

Gaps: reel videos and photos aren't available (dark placeholder fields). Carousel slides beyond the cover are marked "contenuto non disponibile". Platform icons are Lucide substitutes. Stats and captions are only shown where they were visible in the screenshots.
