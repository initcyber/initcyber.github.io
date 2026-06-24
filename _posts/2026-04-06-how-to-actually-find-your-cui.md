---
title: "How to Actually Find Your CUI"
date: 2026-04-06
image: "images/posts/04-06-2026/how-to-actually-find-your-cui.png"
categories: ["CMMC", "NIST"]
excerpt: "You probably think you know where your CUI is. Most contractors do. Most of them are wrong."
---

You probably think you know where your CUI is. Most contractors do. Most of them are wrong.

CUI doesn’t sit neatly in one folder with a label on it. It spreads. It ends up in email threads, chat logs, SharePoint sites that three people set up three years ago, and subcontractor portals nobody’s audited since the contract started. By the time you’re standing in front of an assessor, the question isn’t whether CUI exists in your environment. The question is whether you’ve found all of it.

**Start With the Contract, Not the Network**

Before you touch a single system, go back to your contract. Look for references to CUI categories, handling requirements, and data flow language. Your prime’s security requirements attachment will often tell you exactly what type of CUI you’re handling. That’s your starting point.

If you’re unsure what qualifies as CUI, the National Archives CUI Registry is the authoritative source. When in doubt, treat it as CUI until you can prove otherwise.

**Follow the Data, Not the Org Chart**

CUI scoping is a data flow exercise, not an IT exercise. Start with the question: where does this information enter my organization?

Usually the answer is email. From there, trace it. Does it get downloaded and saved locally? Moved to a shared drive? Pasted into a proposal document? Forwarded to a subcontractor? Every hop is a potential expansion of your CUI boundary, and every one of those systems is now potentially in scope for your assessment.

Common places contractors find CUI they weren’t tracking:

- Email archives, including sent folders

- Personal OneDrive or SharePoint sites used for convenience

- Local desktop folders on endpoints that sync to personal cloud storage

- Proposal files shared with teaming partners outside a secure environment

- Old project folders on file servers that were never cleaned up

**Document What You Find**

A CUI inventory isn’t optional. You need to know what you have, where it lives, who can access it, and how it moves. That documentation becomes part of your SSP and is exactly what an assessor will ask to see.

At minimum, your inventory should capture: the CUI category, the system or location where it resides, who has access, and what controls are in place. If you can’t answer those four questions for every place your CUI lives, your scope isn’t defined yet.

**Shrink It Where You Can**

Once you’ve mapped where CUI lives, look hard at whether it needs to be there. Every system that touches CUI is in your assessment scope. Every system in scope is a control you have to implement, document, and defend.

If CUI is showing up in your general business email because that’s where your contracts come in, that’s a process problem with a technical solution. Route that traffic to your compliant enclave. Pull it out of shared drives and into controlled storage. The goal is the smallest defensible boundary you can draw while still operating normally.

The time to do this work is before you build your GCC High environment, not after.

**If you’re not sure where to start with scoping, that’s the first conversation we have with every client. Reach out at [info@initcyber.com](mailto:info@initcyber.com) or book a call: **[our calendar](https://cal.com/initcyber/cmmc-consultation)**.**
