---
title: "CUI Identification: How to Find It, Label It, and Document It"
date: 2026-04-22
image: "images/posts/04-22-2026/cui-identification-find-label-document.png"
categories: ["Technical Implementation"]
excerpt: "*You cannot protect what you have not identified. CUI identification is the foundational step before any other CMMC work makes sense. If you do not know where your CUI is, your SSP boundary is a..."
---

*You cannot protect what you have not identified. CUI identification is the foundational step before any other CMMC work makes sense. If you do not know where your CUI is, your SSP boundary is a guess and your gap assessment is measuring the wrong thing.*

## What Counts as CUI

Controlled Unclassified Information is defined by the National Archives CUI Registry – not by common sense. The Registry lists specific categories with their handling requirements. For defense contractors, the most common categories are Controlled Technical Information (CTI), export-controlled information under ITAR or EAR, privacy data, procurement-sensitive information, and law enforcement sensitive data.

Your contracting officer or prime should be able to tell you which CUI categories apply to your contract. If they cannot, look at the contract itself for DFARS 252.204-7012 and any Data Management Plans or Contract Data Requirements Lists (CDRLs) attached to it.

## Where CUI Typically Lives in a Small Defense Contractor

Email is the most common location. Engineers and project managers routinely receive CUI in email attachments from their prime – controlled drawings, specifications, contract performance data – sitting in an unprotected commercial inbox. File shares are the second most common location, followed by engineering workstations, laptops used for remote access, and cloud storage set up for convenience rather than compliance.

The CUI scoping process maps every place data enters, is stored, is processed, and exits your environment. This is your CUI data flow, and it defines your assessment boundary.

## How to Label CUI

The National Archives CUI Program requires that CUI be marked with at minimum the CUI designation banner. Documents should be marked ‘CUI’ at the top and bottom. Email containing CUI should include the designation in the subject line or body. The specific marking format depends on the CUI category – some categories require additional designators.

Implementing consistent labeling in Microsoft 365 requires information protection labels configured in the compliance center, with policies that apply labels based on content classification rules or user application. This is one area where M365 GCC or GCC High configuration makes a measurable difference in your ability to track and protect CUI at scale.

## Documenting Your CUI Boundary for CMMC

Your SSP must describe the boundary of your system that processes, stores, or transmits CUI. The documentation needs to include: a narrative description of what CUI you handle and why, a data flow diagram showing how it enters and moves through your environment, a list of all assets that touch CUI, and the users who have access.

This documentation is not one-time work. Every time your environment changes – a new cloud service, a new employee with access, a new contract with different CUI categories – the boundary documentation needs to be updated.

*Init Cyber’s CUI Scoping Workshop produces a complete data flow diagram, asset inventory, and boundary narrative ready for SSP insertion. Fixed-fee or hourly.*
