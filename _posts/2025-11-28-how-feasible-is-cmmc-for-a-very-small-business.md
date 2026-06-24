---
title: "How Feasible is CMMC for a Very Small Business?"
date: 2025-11-28
image: "images/posts/11-28-2025/how-feasible-is-cmmc-for-a-very-small-business.jpg"
categories: ["CMMC", "NIST"]
excerpt: "Many very small businesses (VSB) in the Defense Industrial Base (DIB) worry that the Cybersecurity Maturity Model Certification (CMMC) is out of reach. The CMMC is a mandatory DoD program designed to..."
---

Many very small businesses (VSB) in the Defense Industrial Base (DIB) worry that the Cybersecurity Maturity Model Certification (CMMC) is out of reach. The CMMC is a mandatory DoD program designed to enforce protection of sensitive information on contractor systems. While the rules can seem complex, the reality is that for many small firms, compliance is achievable with a clear plan. By focusing on a narrow scope and leveraging external resources, small businesses can often reach the required level without breaking the bank. This guide walks through the practical steps to get started.[](https://dodcio.defense.gov/cmmc/About/)​

## Step-by-Step Guide

### 1. Know what contracts and data are in scope

Before spending a dime, determine if you handle Federal Contract Information (FCI) or Controlled Unclassified Information (CUI).

1. **FCI** usually triggers CMMC Level 1, which is far simpler and less costly.

2. **CUI** triggers CMMC Level 2, which requires significantly more controls.

**Action:** Read your contract for DFARS clauses. Clause 252.204-7012 usually indicates you have CUI (Level 2), while FAR 52.204-21 indicates FCI (Level 1). Keep your scope small: fewer people and devices touching this data means less work.

### 2. Learn the CMMC levels in plain terms

1. **Level 1 (Foundational):** This level focuses on “basic cyber hygiene” and consists of just 15 practices. It is intended for companies that only handle FCI.

2. **Level 2 (Advanced):** This level requires 110 controls aligned with NIST SP 800-171. It is required for companies handling CUI.

3. **Level 3 (Expert):** This is for high-priority programs involving critical CUI and adds protection against advanced threats.

**Note:** Verify your level immediately. Level 1 compliance costs are estimated between $3,000 and $6,000 for small entities, whereas Level 2 can cost significantly more.

### 3. Do a gap analysis (find what’s missing)

Compare your current security posture against the requirements.

1. For **Level 1**, check if you meet the 15 basic practices (like password protection and antivirus).

2. For **Level 2**, use a spreadsheet to track your status against the 110 NIST 800-171 controls. Mark each control as “Implemented,” “Not Implemented,” or “N/A.”

**Tip:** If you are a VSB targeting Level 2, a few days with a CMMC consultant can prevent you from misinterpreting complex rules.

### 4. Make a clear remediation plan

Turn every “Not Implemented” gap into a specific task.

- Prioritize high-risk items that protect you immediately: Multi-Factor Authentication (MFA), patching, and backups.

- Assign a realistic deadline and budget to each task.

### 5. Fix basic technical controls first

Most breaches happen because basics were ignored.

1. **Access Control:** Grant access only to those who need it and immediately revoke access for former employees.

2. **MFA:** Enable Multi-Factor Authentication on all email, admin accounts, and remote access points.

3. **Patching:** Automate updates for your operating systems and applications to close security holes.

4. **Endpoint Protection:** Ensure antivirus/antimalware is running and updating automatically on all devices.

### 6. Use cloud services to reduce local burden

Leveraging secure cloud providers can “inherit” security controls, saving you work.

1. Move CUI or FCI to a cloud environment that meets FedRAMP Moderate or High standards.

**Caution:** You are still responsible for configuring these tools securely (e.g., turning on MFA and logs) under the “Shared Responsibility Model”.

### 7. Write simple policies and documentation

Documentation is often the hardest part for small firms, but it is mandatory.

1. **Level 1** requires you to document that the practices are done.

2. **Level 2** requires a System Security Plan (SSP) describing how you meet requirements and a Plan of Action and Milestones (POA&M) for fixing gaps.

**Note:** You can have a SSP that starts with Level 1 controls and build upon it to achieve Level 2 IF you foresee yourself handling CUI in future contracts. Keep policies short and readable.

### 8. Train your team

Your employees are your first line of defense.

1. Train staff on spotting phishing emails, handling CUI/FCI securely, and password hygiene.

2. Document who was trained and when; this serves as evidence during an assessment.

### 9. Collect and keep evidence

Assessors (and self-assessments) require proof, not just promises.

1. Save logs, screenshots of configurations, signed policy documents, and training rosters.

2. Organize these in a “CMMC Evidence” folder so they are ready for review.

### 10. Get outside help wisely

You don’t need a full-time Chief Information Security Officer (CISO). You can use fractional or vCISOs. Alternatively, Managed Service Providers (MSPs) can handle technical setups like firewalls and patching, or you can look for providers who specialize in the DIB and understand small business constraints (Hint: CMMC Certified Professionals/Assessors would fit the bill nicely here).

### 11. Reduce scope where possible

The most effective way to cut costs is to reduce the number of assets that need protecting.

1. Create a “data enclave”… A specific set of laptops or a virtual desktop environment where all government work happens.

2. If CUI never touches your main email server or HR computers, those systems may be out of scope.

### 12. Prepare for assessment

1. **Level 1:** You must perform a **self-assessment** annually and submit the score to the Supplier Performance Risk System (SPRS).

2. **Level 2:** Most contracts handling CUI will now require a third-party assessment by a C3PAO every three years.

**Critical:** Ensure your self-assessment is accurate; the DOJ can pursue penalties for False Claims if you misrepresent your status.

### 13. Maintain compliance

Security is a habit, not a checklist. Update your SSP whenever you add new software or hardware and review your compliance annually (required for Level 1) or when significant changes occur.

### 14. Track time and cost

1. **Level 1** is very affordable, often costing very small businesses between $3k–$6k largely in time and basic tools.

2. **Level 2** is an investment; anticipate costs for consultants, assessments, and upgrades, often ranging higher ($50k+) depending on complexity.

3. Budget for ongoing maintenance, not just the initial fix.

### 15. Use practical shortcuts

1. Use template policies provided by industry groups (like NDISAC) to save writing time.

2. Consider “enclave” solutions that provide a pre-configured, compliant environment for a monthly fee, rather than rebuilding your entire internal network.

## Conclusion

CMMC is doable for a very small business if you plan well and strictly limit your scope. For most VSBs, the journey starts with Level 1, which focuses on basic, common-sense hygiene that protects your business anyway. By fixing high-impact controls like MFA and backups first, and accurately scoping your environment, you can meet DoD requirements and continue winning contracts.
