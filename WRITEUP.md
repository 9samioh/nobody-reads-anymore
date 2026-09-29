# Sami's Writeup!

## 1. How did you split this page into components? Which are server components and which are client components, and why? What would change if a designer asked you to add three more sections next quarter?

- I split the page into individual content sections so that each part could be developed and maintained independently. The unique sections like Marquee and Carousel were made into their own components, since these had their own functionality. The content blocks were separated out for organization, but share global typography/styles where possible.
- I made the Marquee and Carousel client components because they need to respond to user interaction and require React state/event handlers. The rest of the page was left as server components since it’s primarily static content.
- I also separated the marquee and carousel data from the components so the content isn't hardcoded into the components. It makes it easier to edit the content in the future, and also accounts for it eventually being backend-driven.
- If three more sections were added, I’d continue with the same pattern. I'd create a component for each distinct section and keep the content/data separate from the presentation. If it was purely static content with the same styles, i'd continue making Blocks within the Content folder.

## 2. What performance optimizations did you include? What performance metrics did you keep in mind?

- I used Next.js Image for the large marquee images so it can handle image optimization and sizing rather than loading the original assets directly.
- I set the fetch priority to high for the first three images because they are immediately visible on the page. All other images could be lazy loaded.
- I also tried to avoid unnecessary client-side rendering. Only the interactive pieces that actually need client-side behavior are client components.
- For metrics, I though about overall page load time and how smoothly the marquee/carousel interactions perform. I made sure the marquee was smooth for other browsers like Safari as well. I also paid attention to avoiding layout shift by providing explicit image dimensions.

## 3. What did you do for keyboard navigation, screen readers, motion sensitivity, and color contrast on the knockout sections? What is still imperfect?

- I used semantic HTML and tried to use appropriate heading hierarchy so screen readers can understand the structure of the page. For example, making sure to use ul/li elements so that screen readers can click through these as lists. I would have made additional changes to heading hierarchy (for example not skipping h2 and h4s), but I wanted to maintain the guidlines from the spec.
- I made sure all images have descriptive alt text.
- I used the existing design colors and checked that the text was readable against the backgrounds, although I wanted to follow the spec so I didn't make any design edits. One thing I would edit in the future, would be the gradient background on the marquee tiles. I would make this darker and extend farther up, so that the names and titles could be more readable.
- The biggest area I'd improve is thorough keyboard navigation to make sure every interactive control can be reached and operated without a mouse.

## 4. If we gave you 24 more hours, what would you do, in priority order, and why?

1.  Accessibility pass

I'd prioritize a full keyboard-navigation and screen-reader pass, and make sure it atleast passes WCAG standards. I would prioritize this because it makes the site usable to a wider range of users, while also being lower effort on the list. It could be a quick item to complete that would have a large impact on some people.

2.  Improve responsive design

I'd test the page across more screen sizes and browsers, particularly Safari, and improve the marquee/carousel behavior and typography at more screen sizes.

3.  Backend-ready data structure

Since the marquee and carousel data could eventually come from a backend, I'd make sure the data structure is consistent and handles cases where content is missing or formatted differently.

4.  Make the content renderer more flexible

For this page, I just created a quick content renderer that allowed me to render the italicized text. With more time I'd build a more flexible text renderer that supports things like italics, bold text, and links without needing to manually structure every piece of content. This may not be an actual need, so I put it as a lower priority.

5. Quick dark mode design!

## 5. Name one thing you considered doing and decided against. What changed your mind?

- I considered building a more advanced text renderer where the content data could contain JSX or a richer structure for formatting things like italics, links, and other inline elements. I think my mind initially went down that route because I've recently been working with a lot of CMS data.
- I ultimately decided against it because the page didn't need that level of flexibility for the current content, and it would have added complexity that didn't seem necessary for this project.
- Instead, I created a simple text formatter that handles just the italics.
- If the content became backend-driven, I would revisit that decision and take the time to build this renderer out.

## 6. Sketch the spec you would have wanted before starting this build (1 page, \~30 minutes). Cover component breakdown with proposed file paths, data/copy contracts (assume the carousel and marquee data are eventually backend-driven), feature-flag and rollout thinking, accessibility acceptance criteria, and any open questions you'd send back to design or product.

### Proposed file paths

Page Structure
├── Hero
├── Marquee
├── Content Block 1
├── Content Block 2
├── Timeline Carousel
├── Content Block 3
├── Content Block 4
└── Logo Block

### Data contracts

type MarqueeTile {
image: string;
name: string;
title: FormattedText[];
}

type FormattedText = {
text: string;
italic?: boolean;
};

type TimelineItem = {
year: number;
title: string;
quote: string;
author: string;
source: string;
};

### Rollout thinking

- Test the page internally first
- Gradually roll it out to a percentage of users.
- Use feature flags to easily disable the new experience if there's a production issue.
- Eventually remove the flag once the new page is fully adopted.

### Accessibility acceptance criteria

Before considering the page finished:

- Correct heading hierarchy.
- All meaningful images have useful alt text.
- All interactive controls are keyboard accessible.
- Visible focus states.
- Carousel controls have accessible labels.
- Timeline items have an accessible active state.
- Sufficient color contrast.
- No functionality depends exclusively on hover.

### Questions I'd send back to design/product

- Should the marquee also respond to user interaction?
- Should the carousel loop from the first item to the last?
- Which content fields are required vs. optional when this becomes backend-driven?
- Will editors be able to add formatting such as links, bold, and italics?
- What should happen if an image is missing or has a different aspect ratio?

## If you used AI tools (Cursor, Codex, Copilot, Claude, etc.), disclose what you used them for in one or two sentences. We expect candidates to use AI tools; we want to see how you direct them.

I used AI tools (Cursor, ChatGPT, Claude) during the initial project setup and for repetitive tasks, such as generating the marquee data structure and converting the provided content into HTML. I also used AI to help think through the marquee animation and interaction logic. When using generated code, I added complexity in stages so I could understand and test each part rather than adding code I didn't fully understand. I also compared approaches between ChatGPT and Claude, since some of the suggested solutions were more complex than what the project needed.
