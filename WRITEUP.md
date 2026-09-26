## 6\. Writeup

Submit a `WRITEUP.md` in the root of your repo answering these five prompts. (\~1 page total)

1. How did you split this page into components? Which are server components and which are client components, and why? What would change if a designer asked you to add three more sections next quarter?
   - made the content blocks into individual components with shared styles
   - I made Marquee a client component because it needs to respond to user interaction
2. What performance optimizations did you include? What performance metrics did you keep in mind?
   - changed to use Next images to optimize performance with these large images
   - todo: maybe lazy load images later in the array?
3. What did you do for keyboard navigation, screen readers, motion sensitivity, and color contrast on the knockout sections? What is still imperfect?
4. If we gave you 24 more hours, what would you do, in priority order, and why?
5. Name one thing you considered doing and decided against. What changed your mind?
6. Sketch the spec you would have wanted before starting this build (1 page, \~30 minutes). Cover component breakdown with proposed file paths, data/copy contracts (assume the carousel and marquee data are eventually backend-driven), feature-flag and rollout thinking, accessibility acceptance criteria, and any open questions you'd send back to design or product.

If you used AI tools (Cursor, Codex, Copilot, Claude, etc.), disclose what you used them for in one or two sentences. We expect candidates to use AI tools; we want to see how you direct them.

- used for initial setup
- used for repetetive actions like to make marquee data file, changing content from readme to html
- used to aid animation part of marquee
