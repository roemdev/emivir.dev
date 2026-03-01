## 2024-05-24 - Missing `rel="noopener noreferrer"` on `target="_blank"` links
**Vulnerability:** External links opening in a new tab (`target="_blank"`) without `rel="noopener noreferrer"` were found in the codebase.
**Learning:** This can expose the site to reverse tabnabbing, a phishing attack where the newly opened tab can gain a reference to the original window (via `window.opener`) and potentially redirect it to a malicious site. It's a common security gap in modern web apps using external links.
**Prevention:** Always add `rel="noopener noreferrer"` to any anchor tag (`<a>`) that uses `target="_blank"` to open an external link.
