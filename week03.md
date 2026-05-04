
# Challenge Me

The following diagram is created with [Mermarid](https://mermaid.ai/open-source/ecosystem/tutorials.html) text to diagram aka diagram-as-code.

## Sequence diagram of practical

```mermaid
sequenceDiagram
actor user
user->>browser:Run without Debug
browser->>storyForm.html: open html page
storyForm.html->>browser: HTML content
user->>storyForm.html: Input form data
user->>storyForm.html: Click Submit
storyForm.html->>FormProcessor.html: Method:Get: Submit
FormProcessor.html->>storyForm.html: generte HTML of data with javascript 
storyForm.html->>browser: HTML content
user->>browser:validate data 

```

## Questions

1. What's the character limit for input text field?
2. How do you do email validation?
3. How to you ensure only numbers input and length limit in contact number?
4. Suggest improvement for URL link input?
5. What sort of age validation would you incorpportate?
6. What sort of encoding being used for URL in 'get' method?
7. Why is the URL encoded in 'get' method?
8. When you 'Run without debug', the url in browser shows <http://127.0.0.1>, what does this means?

## improve development experience in vscode

- [VSCode Tips](vscode-tips.md)
