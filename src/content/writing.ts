import type { WritingPost } from "./types";

export const writingPosts: WritingPost[] = [
  {
    slug: "agentic-experiences-designed-around-correcting",
    publishedAt: "2026-11-14",
    title: "Agentic experiences that are designed around correcting.",
    subheading: "What a 10x drop cap taught us about building agentic products that recover well.",
    topic: "HAI",
    sections: [
      {
        heading: "The claim",
        body: "Most agentic products are designed to get it right the first time. Accuracy is the metric, and every mistake is treated as a failure to minimise.\n\nThat's the wrong target. Agents will be wrong, and often they'll be wrong because the user was right to break the rule. An agentic product's real quality is how cheaply it recovers when it's wrong.\n\nI learned this building Brand Type Fidelity (BTF), a feature in our Adobe plugin where an agent checks every text layer against a company's typography guidelines and flags breaches in real time.",
      },
      {
        heading: "The designer who broke the rule on purpose",
        body: "A magazine designer was laying out a quarterly issue. To open a feature article, he set the first letter roughly ten times larger than the body text: a drop cap, there to give the page weight and a clear starting point.\n\nIt broke his company's type guidelines. It was also the right call.\n\nBefore BTF, that one decision cost him four or five meetings. First the creative director, then the executive creative director, and each time he explained the same choice from scratch. Nothing in the process remembered why he'd made it.\n\nThat's the human version of an agent's repeat flag: being asked to justify a deliberate decision again and again.",
      },
      {
        heading: "Error or intent?",
        body: "BTF flagged the drop cap correctly. The size was outside the guideline. But detection was never the hard part.\n\nThe hard part is that a breach can be a mistake or a decision, and the agent can't tell which. If it treats both the same, it punishes the designer for using judgment. So the most important thing a user does in an agentic product isn't accepting a fix. It's correcting the agent's read of what they meant.\n\nThe designer did exactly that. He marked the drop cap as an exception and gave a reason: creative freedom. For the first time, the system recorded not just “ignore this” but why.",
      },
      {
        heading: "When a correction is too broad",
        body: "Here's where it broke.\n\nInDesign lets one text frame hold several font metrics. A drop cap and its body copy usually sit in the same frame. Adobe only let us act on the frame ID, so the exception covered the entire frame, not just the drop cap.\n\nThe designer had also taken a few more liberties in that same frame, ones he never declared. The frame-level exception hid them all.\n\nBTF rolls up a typography status for every document, and the project admin sees the health of the whole project at a glance. This document showed healthy. It wasn't.\n\nThe tool that should have shortened the review made it worse. The admin trusted the status, the review leaned on it, and the real issues only came out in the room. They had slipped through the cracks.\n\nA correction that's too broad doesn't just fail. It makes the system confidently wrong, and that error travels upstream to people who never saw the original decision.\n\nThe same mismatch hit fixes too. Our agent could detect a breach on specific characters, but we could only fix or exempt at the frame level. Applying the fix wiped out the drop cap. Marking an exception hid real errors. Both options did damage.\n\nCorrection has to work at the same level as detection. If the agent can see precisely but the user can only act bluntly, every correction becomes a trade-off between destroying intent and hiding errors.",
      },
      {
        heading: "What we built",
        body: "1. The agent says where its precision runs out. Adobe pins annotations to a frame's top-left corner and won't let us point at specific text inside it. So the breach card says it plainly: this breach sits in a frame with multiple font metrics. It quotes the exact text causing it. And clicking the annotation makes the layer bounce, so the eye finds it.\n\n2. The human sets the scope, the agent does the work. The user selects the specific text, then chooses one of three options:\n\n- Apply the recommended fix\n- Apply a different guideline\n- Mark it as an exception\n\nThe middle option is the underrated one. It lets the user say: you were right that something's off, but wrong about the fix. That's richer feedback than yes or no.\n\n3. Preview before commit. On the breach card, click and hold to preview. The corrected metrics apply only while you hold. You see the reflow, the orphaned lines, the knock-on effect on the page, and nothing is committed. A wrong fix costs one released finger, not an undo hunt.\n\nThe cheapest recovery is the one you never need.\n\n4. Exceptions set a precedent. When a designer marks a specific metric combination as an exception (font size, line height and letter spacing together), that combination is approved anywhere it appears in the document. One decision, made once, carries forward. Precedents are scoped to the document, and the next issue starts fresh. That's deliberate for now, and it's the next thing to get right.",
      },
      {
        heading: "Back to the designer",
        body: "We shipped the text-level update in beta, built first for his company because that's where the problem surfaced.\n\nHis response: “It really understands what's going on in the document now. It doesn't just flag what's wrong, it takes my feedback at the level I'm giving it.”\n\nThat's the whole thesis, in a user's words.",
      },
      {
        heading: "How we'll know if we're wrong",
        body: "BTF is still in beta, so this is a hypothesis with instrumentation, not a victory lap. We're tracking three signals:\n\n- Override mix: how often users pick fix, alternative guideline, or exception. A healthy spread means real judgment calls are happening, not just reflexive dismissals.\n- Repeat flags: whether a precedent actually stops the same intentional choice from being flagged again.\n- Preview-to-commit ratio: how often a preview ends without applying. Every one of those is a bad fix avoided.\n\nIf exceptions dominate the mix, our detection is too strict. If repeat flags don't fall, precedent isn't working. Either way, we'll know.",
      },
      {
        heading: "The principle",
        body: "Design agents for the moment they're wrong, not just the moment they're right:\n\n1. Treat correction as a signal of intent, not a rejection.\n2. Let users correct at the same level the agent detects.\n3. Make the cost of a correction visible before it's committed.\n4. Say plainly where the agent's precision runs out.\n5. Let one correction set a precedent, so nobody defends the same decision five times.",
      },
    ],
  },
  {
    slug: "withholding-the-model",
    publishedAt: "2026-11-14",
    title: "Withholding the model: confidence-tiered escalation as a design decision.",
    subheading: "Confidence-tiered escalation as a design decision, not just an architecture.",
    topic: "HAI",
    sections: [
      {
        body: "The rules are set in stone. The usage isn't.\n\nWhen we started designing Brand Type Fidelity (BTF), an Adobe plugin that checks every text layer against a company's typography guidelines, I spent weeks looking at real documents from different industries.\n\nOne thing kept coming up. Guidelines are precise: H1 to H7, body at 16px, specific weights and spacing. But the way designers actually use those styles shows no consistent pattern. The rules are set in stone. The usage isn't.\n\nThat changes the problem. Checking whether a text layer matches a rule is easy. The hard part is knowing which rule should apply, because the role of a piece of text is often ambiguous. And every wrong guess shows up as an annotation on the designer's canvas, interrupting their work.\n\nSo the question wasn't “how do we use AI to check typography?” It was: when is the model worth calling, and when should the system say nothing at all?",
      },
      {
        heading: "The page that fools measurement",
        body: "One document made this concrete: a publisher's edition of Around the World in 80 Days.\n\nEach chapter opened with the chapter number set small and bold. The body text underneath was larger. The publisher's guidelines said headings should be big and body text at 16px.\n\nA naive checker would get this page wrong twice. It would read the small bold chapter number as misused body text, and the larger body copy as an oversized heading. Two false flags on one page, both on typography that was exactly right.\n\nYou can't measure your way out of this. You have to read the page.",
      },
      {
        heading: "Three decision makers",
        body: "BTF splits the judgment across three tiers, and each one gets more context only when the one before it can't decide.\n\n1. The rules engine. A one-to-one check: does this text layer match a style defined in the guidelines? Helvetica Regular at 16px for body, and so on. It returns pass or fail. Fast, cheap, deterministic.\n\n2. The classifier. A lightweight model that asks a different question: is this style being used in the right role? It infers the role from cheap signals, like the sizes of nearby text on the page and the artboard dimensions, and returns high or low confidence.\n\n3. The LLM. Called only when the classifier is unsure. It gets the full page as JSON: what the other text frames actually say, whether there are images, how the page is composed. It reads, rather than measures.\n\nThe principle: context should grow with ambiguity. Most layers never need more than metrics. The model is held back until a case earns it.\n\nOn the book page, that's exactly what happened. The rules engine passed, because the chapter number matched a defined style. The classifier came back with low confidence: the text sat above the body but was smaller than it. So it escalated. The LLM read the words “Chapter One”, saw the bold weight and the position, and concluded the role was correct.\n\nNo annotation appeared. The designer was never interrupted.",
      },
      {
        heading: "Show confidence, hide provenance",
        body: "I made a deliberate choice not to show the user which tier made a call.\n\nA high-confidence result from the classifier and one from the LLM look identical. The only visible difference is time: an escalated layer shows a spinner on its annotation for about four seconds while the LLM works.\n\nDesigners don't care which model decided. They care how sure the system is about what it's recommending. The architecture is our problem. The certainty is theirs.",
      },
      {
        heading: "Three kinds of not knowing",
        body: "Most products have a single “low confidence” state. I found three, and each needs a different response.\n\nAmbiguity: several answers are plausible. The LLM proposes a few possible fixes and their probabilities are close together. Guessing would be a coin flip, so the system asks the designer to confirm the role.\n\nDoubt: one answer leads, but it isn't trustworthy. The top candidate clearly wins, but the model's calibrated accuracy on cases like this is poor. The system still makes the recommendation, with a low-confidence pill.\n\nUnknown: nothing is credible. No candidate role clears a minimum confidence threshold. The system shows Role could not be determined and lets the designer assign the role manually.\n\nAcross all of these, the copy is suggestive, never declarative: this role may be breached. The system never pretends to be more certain than it is.",
      },
      {
        heading: "The designer's answer becomes the precedent",
        body: "When a designer confirms or assigns a role, that decision sets a precedent for the rest of the document. They answer once, not on every page.\n\nThose answers also become training data. Every confirmation and every manual assignment teaches the classifier, so the cheap tier gets better at the cases that used to need the expensive one.\n\nWithholding gets easier the more users correct it.",
      },
      {
        heading: "The numbers, honestly",
        body: "BTF sits between beta and global rollout, so these are early:\n\n- About 32% of layers escalate to the LLM. That's high, and it's the honest cost of how ambiguous real typography is before the classifier has learned from a wide user base. Our target after rollout is 11–12%, driven by the feedback loop above.\n- About 4 seconds of latency on an escalated layer.\n- 3–4% of escalated layers end as “role could not be determined”. That's roughly one layer in a hundred overall. The system truly gives up rarely.",
      },
      {
        heading: "The open risk",
        body: "There's a gap, and I'd rather name it than hide it.\n\nWhen the LLM decides a role is being used correctly, like the chapter number, the frame is never annotated. That call isn't recorded anywhere: not on the canvas, not in the document's typography status, not in the admin view.\n\nIn effect, the LLM chose the guideline's intent over its letter, and nobody can see that it did. A quiet canvas is the goal. A quiet audit trail is a risk. On a project where an admin trusts the document status, a cleared call that was actually wrong would be invisible.\n\nThe fix is clear in principle: quiet on the canvas, visible in the audit. Context-cleared calls should be logged where reviewers can find them, even if the designer never sees them. We haven't built it yet.",
      },
      {
        heading: "The principle",
        body: "Design the escalation, not just the model:\n\n1. Hold back the expensive model until ambiguity earns it.\n2. Let context grow with ambiguity: measure first, read only when measuring fails.\n3. Show users confidence, not provenance.\n4. Treat ambiguity, doubt and the unknown as different states with different responses.\n5. Turn the user's answers into precedent and training data, so the system needs to ask less over time.\n6. Never let a silent decision be an untraceable one.",
      },
    ],
  },
  {
    slug: "earning-the-right-to-suggest",
    publishedAt: "2026-11-14",
    title: "Earning the right to suggest: Autonomy as a ladder.",
    topic: "HAI",
    sections: [],
  },
  {
    slug: "the-loop-layer",
    publishedAt: "2026-11-14",
    title: "The loop layer: IML as a compounding surface.",
    topic: "HAI",
    sections: [],
  },
  {
    slug: "making-acting-cheaper-than-ignoring",
    publishedAt: "2026-11-14",
    title: "Making acting cheaper than ignoring.",
    topic: "HAI",
    sections: [],
  },
  {
    slug: "ai-belongs-in-the-canvas",
    publishedAt: "2026-11-14",
    title: "AI belongs in the canvas, not in a chat destination.",
    topic: "HAI",
    sections: [],
  },
  {
    slug: "mocks-lie",
    publishedAt: "2026-11-14",
    title: "Mocks lie: You can't design an AI feature in Figma.",
    topic: "PROTOTYPING",
    sections: [],
  },
  {
    slug: "the-best-input-field",
    publishedAt: "2026-11-14",
    title: "The best input field is the one you delete.",
    topic: "UX",
    sections: [],
  },
  {
    slug: "help-shouldnt-depend-on-your-phone-battery",
    publishedAt: "2026-11-14",
    title: "Help shouldn't depend on your phone battery.",
    topic: "UX",
    sections: [],
  },
  {
    slug: "redrawing-cities-in-hexagons",
    publishedAt: "2026-11-14",
    title: "Redrawing cities in hexagons.",
    topic: "DATA VISUALISATION",
    sections: [],
  },
];
