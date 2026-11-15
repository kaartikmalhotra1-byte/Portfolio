import type { WritingPost } from "./types";

export const writingPosts: WritingPost[] = [
  {
    slug: "agentic-experiences-designed-around-correcting",
    publishedAt: "2026-11-14",
    company: "Monotype",
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
    company: "Monotype",
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
    company: "Monotype",
    title: "Earning the right to suggest: Autonomy as a ladder.",
    subheading: "Autonomy as a ladder, and why it should fall as subjectivity rises.",
    topic: "HAI",
    sections: [
      {
        heading: "The night before critique",
        body: "A few years ago, at a large consumer tech company, I watched a designer finish a launch poster for a quick-commerce service. The promise was simple: delivery in under 15 minutes. The poster had a green fast-forward icon to make the point.\n\nBefore the stakeholder review, and before our Friday group critique, the designer quietly ran the poster past an AI model. It was a rehearsal, not a replacement. They wanted to walk in prepared.\n\nThe feedback was useful. It covered layout, visual hierarchy, and whether the message of speed came through. The designer went into both meetings sharper for it.\n\nBut it said nothing about the type.\n\nIn the Friday critique, someone spotted it. The icon said fast, but the word “Quick” was set in the brand typeface at regular width, like every other word on the poster. We changed it to a condensed italic. The letters started to move. A human caught the gap between what the poster was saying and how its letters were saying it. The AI hadn't.\n\nSince then I've seen the same habit everywhere. Designers share their work with ChatGPT, Claude and Gemini before a review. They want critique on their own terms, before facing other people. And typography, the part of a design that carries the most emotion, gets almost no specific feedback.\n\nI carried that Friday critique with me when I moved to Monotype. The fourth layer of our plugin, a typographic critic, is my answer to it. But before a system can offer taste, it has to earn the right.",
      },
      {
        heading: "Four layers, one question",
        body: "At Monotype, our Adobe plugin works across four layers of a designer's workflow:\n\n1. Font auto-activation: making sure the fonts in a document are installed and ready.\n2. Licensing: surfacing risks such as expired, expiring or overused fonts, or fonts not marked for production.\n3. Brand Type Fidelity (BTF): checking type against brand guidelines.\n4. Creative advice: a typographic critic and design partner. This one is still a concept.\n\nTo be clear, not all of this is agentic. The first two layers are deterministic automation. BTF runs an agentic workflow, and creative advice would be a truly agentic experience. So I'm using “ladder” in the traditional sense, the levels of automation that Sheridan and Verplank described in 1978, running from LOA 1 (the human does everything) to LOA 10 (the system acts alone).\n\nEvery layer has to answer the same question: how much should the system do before a human says so?\n\nThe answer isn't the same for each layer. And the pattern is the opposite of what most AI roadmaps assume.",
      },
      {
        heading: "Layer 1: Certainty buys autonomy",
        body: "When a document uses a Monotype font with a FontSense ID, the system knows exactly which font it is. So it acts. It activates the font, the document opens ready, and nobody is asked. That's LOA 9 to 10.\n\nWithout a FontSense ID, we only have the PostScript name. If that name maps to one font in our inventory, we still activate it automatically. But that's only about 1–2% of cases. Usually a PostScript name maps to several versions in several formats, so the system drops to LOA 3: it narrows the options down and the designer picks.\n\nSame feature, a seven-level drop, decided only by how strong the evidence is.\n\nAutonomy isn't a property of a feature. It's earned case by case, and certainty is what earns it.",
      },
      {
        heading: "Layer 2: The person with the context isn't the person with the stake",
        body: "Licensing is deterministic, and the checks are reliable. By the logic of layer one, it should just run all the time. It doesn't, on purpose.\n\nThe problem is who it belongs to. An admin responsible for 50 designers, each working on five documents, can't possibly track which fonts have expired or haven't been marked for production. Admins told us the same thing over and over: this is not my headache, I just need to know we're compliant. Designers say the same thing about licensing, for the opposite reason.\n\nThe admin is accountable but can't see anything. The designer can see everything but doesn't care. And we can't tell where a designer is in their process. They could be exploring, or about to ship.\n\nSo we only interrupt at moments of commitment. Scans run when a document opens, when the designer saves, or when they ask for one, never on a timer. Production-marking nudges show up when a designer exports a file or outlines a font, the moments when a design becomes real.\n\nThe designer doesn't have to fix anything either. From the breach card, one tap notifies the admin that a font is expired, expiring, overused or needs marking for production. Admins also get their own rolled-up views: imported fonts with every document they appear in, and license management showing usage across each Monotype font style.\n\nExploring is protected. Committing gets checked. The system routes the problem to whoever owns it.",
      },
      {
        heading: "Layer 3: A ceiling that accuracy can't break",
        body: "BTF is where real judgment starts. It checks whether text follows the brand guidelines, and whether each style is being used in the right role.\n\nEven at high confidence, BTF never fixes anything on its own. It flags, suggests a fix, and lets the designer preview it before committing. On Sheridan's scale, that's LOA 4 to 5.\n\nThat ceiling is deliberate, and better models won't raise it. The full context of a document, the brief, the client, the reason a rule was broken, lives in the designer's head. There's a gap between what the designer knows and what the system can work out, and only the designer can close it.\n\nWhen the missing piece is context rather than accuracy, a more confident model doesn't earn more autonomy.",
      },
      {
        heading: "Layer 4: The critic who only speaks when asked",
        body: "This is the layer that began with that poster. The concept was born in that Friday critique, before I ever joined Monotype.\n\nThe creative-advice concept is simple: select a text layer and ask for typographic critique. It would help a designer choose the right font and use it well, in a way that fits the document and the brand guidelines BTF already holds.\n\nThis is where the title comes from. A typographic critic with no grounding is just another opinion. This one would stand on everything below it: the fonts the system already knows, the licenses it has checked, the brand rules it has learned. It doesn't earn the right to suggest by being clever. It inherits that right from the layers underneath.\n\nIt will also always be user-initiated, never proactive. Taste is the most subjective call in the workflow, and unasked-for taste is where trust breaks fastest. The designers I watched already showed what they wanted: critique they ask for, privately, before facing other people.\n\nOn the poster, that's the moment the night before. Select “Quick”, ask, and hear: your icon says speed, but your letters don't. Try a condensed italic.",
      },
      {
        heading: "The inverse ladder",
        body: "Put the four layers together and a pattern shows up:\n\n- Auto-activation — a factual-identity call, started by the system, roughly LOA 9–10, falling to 3 as certainty drops.\n- Licensing — a compliance call, started at moments of commitment, the system detects and routes.\n- BTF — a brand-interpretation call, the system flags and the human decides, roughly LOA 4–5.\n- Creative advice — a taste call, started by the human, always; the system only advises.\n\nIn a creative workflow, the autonomy should not rise as models keep improving.\n\nAutonomy should fall as subjectivity rises. Facts can be automated. Compliance can be routed. Interpretation should be suggested. And taste should only be offered when someone asks.",
      },
      {
        heading: "What I'd want a reader to take away",
        body: "1. Earn autonomy case by case, based on how certain the system is, not feature by feature.\n2. Interrupt at moments of commitment, not during exploration.\n3. When the person with the context isn't the person with the stake, route the problem; don't push it onto the person in front of you.\n4. Some limits on autonomy are about missing context, and no amount of model accuracy will lift them.\n5. Let higher layers inherit their standing from the grounded work below them.\n6. Offer opinions on taste only when asked.\n\nLayer four isn't built yet. Its bar is set by that poster: the critic we build has to catch what the AI missed on the night before critique, the moment where the words say fast and the type doesn't.",
      },
    ],
  },
  {
    slug: "the-loop-layer",
    publishedAt: "2026-11-14",
    company: "Monotype",
    title: "The loop layer: IML as a compounding surface.",
    topic: "HAI",
    sections: [],
  },
  {
    slug: "making-acting-cheaper-than-ignoring",
    publishedAt: "2026-11-14",
    company: "Monotype",
    title: "Making acting cheaper than ignoring.",
    topic: "HAI",
    sections: [],
  },
  {
    slug: "ai-belongs-in-the-canvas",
    publishedAt: "2026-11-14",
    company: "Monotype",
    title: "AI belongs in the canvas, not in a chat destination.",
    topic: "HAI",
    sections: [],
  },
  {
    slug: "mocks-lie",
    publishedAt: "2026-11-14",
    company: "Monotype",
    title: "Mocks lie: You can't design an AI feature in Figma.",
    topic: "PROTOTYPING",
    sections: [],
  },
  {
    slug: "the-best-input-field",
    publishedAt: "2026-11-14",
    company: "Monotype",
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
