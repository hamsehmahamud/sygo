# Contributing to Sygo

Thank you for your interest in contributing to the Sygo platform! We welcome community contributions, bug fixes, and feature enhancements that help empower Somali youth growth initiatives.

Please take a moment to review this document before submitting your work to ensure a smooth integration process.

## How to Contribute

### 1. Report Bugs or Request Features
If you find a bug or have an idea for an enhancement, please open an Issue in the GitHub repository. Provide as much context as possible, including:
* A clear description of the issue or feature request.
* Steps to reproduce the bug (if applicable).
* Details about your local development environment (Node version, OS, browser).

### 2. Working on Code Changes
To contribute code to the repository, please follow these sequential steps:
1. **Fork the Repository:** Create your own fork of the `hamsehmahamud/sygo` repository.
2. **Clone Locally:** Clone your fork to your local machine and navigate into the folder:
   ```bash
   git clone https://github.com
   cd sygo
   ```
3. **Create a Feature Branch:** Branch off from the `main` branch. Use a punchy, descriptive name:
   ```bash
   git checkout -b feature/your-feature-name
   # OR
   git checkout -b fix/bug-description
   ```
4. **Implement and Test:** Make your modifications. Ensure the TypeScript compiler passes cleanly:
   ```bash
   npm run build
   ```
5. **Commit Your Code:** Write clear, concise commit messages following semantic guidelines:
   ```bash
   git commit -m "feat: implement real-time metric tracking for donations"
   ```
6. **Push Changes:** Push your newly created branch up to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request:** Navigate to the original upstream repository and open a Pull Request (PR). Clearly describe your changes, references to any linked issues, and why the changes are necessary.

## Development Coding Standards
* **TypeScript Precision:** Avoid using `any` types. Enforce strict static typing across your component state, layout interfaces, and functions.
* **Component Architecture:** Maintain UI modules neatly organized within the `components/` directory. Keep components modular, isolated, and highly reusable.
* **Clean Code:** Write semantic elements and clear variable definitions. Clean up any terminal logs or testing artifacts (`test_root.txt` etc.) before committing.
