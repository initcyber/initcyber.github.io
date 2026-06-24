---
title: "What GCC High Doesn’t Cover"
date: 2026-04-08
image: "images/posts/04-08-2026/what-gcc-high-doesnt-cover.png"
categories: ["CMMC", "NIST"]
excerpt: "There’s a version of this conversation that happens constantly in the DIB. A contractor buys GCC High, gets their tenant stood up, turns on some security features, and concludes they’re CMMC..."
---

There’s a version of this conversation that happens constantly in the DIB. A contractor buys GCC High, gets their tenant stood up, turns on some security features, and concludes they’re CMMC compliant. They are not.

GCC High is a platform. It gives you the technical environment to implement CMMC Level 2 controls. It does not implement them for you, and there are entire categories of requirements it cannot satisfy regardless of how you configure it.

Here’s what falls outside the platform entirely.

**Written Policies**

CMMC Level 2 requires documented policies covering access control, incident response, configuration management, media protection, personnel security, physical protection, risk assessment, security assessment, system and communications protection, and system and information integrity. That’s not an exhaustive list.

These policies have to exist in writing, be formally approved, and be communicated to your workforce. Microsoft can’t write them for you. GCC High can’t generate them. An assessor will ask for them, and “we follow Microsoft’s defaults” is not an acceptable answer.

**A Working Incident Response Plan**

You need an incident response plan that your team can actually execute, not a template downloaded from the internet with your logo on it. It needs to define roles, contact procedures, escalation paths, and how you preserve evidence. You also need to be able to demonstrate that people know it exists and what their role is if something goes wrong.

**Security Awareness Training**

AT.L2-3.2.1 and AT.L2-3.2.2 require that all personnel receive security awareness training and that individuals with significant security responsibilities receive role-based training. GCC High has nothing to do with this. You need a training program, records of completion, and evidence that the content is relevant to the threats your organization actually faces.

**Physical Security Controls**

If your people work in an office, you have physical security requirements. PE.L2-3.10.1 through 3.10.6 cover things like physical access controls, visitor management, monitoring physical access, and protecting CUI from unauthorized physical access.

GCC High is a cloud platform. It has no opinion on whether someone can walk into your server room or sit down at an unlocked workstation.
(If you don’t need an on prem solution or have every user that operates in GCCH with their own endpoint, why not just go full VDI/SaaS with W365 and inherit all the PE controls from Microsoft!)

**Risk Assessments**

You need a documented risk assessment process and evidence that you’ve actually run it. That means identifying threats, evaluating likelihood and impact, and making documented decisions about how you’re going to address identified risks. This is a management process, not a technical configuration.

**System and Services Acquisition Controls**

Before you bring new software or services into your environment, you need a process for evaluating them from a security standpoint. That process has to be documented and followed consistently.

**The Honest Version of This**

GCC High, properly configured, can satisfy a significant portion of your technical Level 2 controls. Done right, it handles a lot of the heavy lifting across AC, IA, SC, and SI domains. But it covers maybe 60 to 70 percent of what an assessor will evaluate, on a good day, and only if the configuration work was done ***correctly**.*

The rest is policy, process, training, and evidence. That work happens outside the platform and takes longer than most contractors expect.

If you’ve already got GCC High stood up and want to know what’s left to close before an assessment, that’s a conversation worth having before you’re on the clock. Reach out at [info@initcyber.com](mailto:info@initcyber.com) or book a call [Here](https://cal.com/initcyber/cmmc-consultation).
