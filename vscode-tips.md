# VScode Tips and Tricks

## Auto format on save

**1. Enable "Format On Save"**

You can do this through the visual settings menu or by editing your configuration file.

  **Via Settings Menu:**
        Open **Settings** by pressing Ctrl + , (Windows/Linux) or Cmd + , (macOS).
        Search for format on save in the search bar.
        Check the box for **Editor: Format On Save.**

  **Via settings.json:**
        Open the **Command Palette**(Ctrl + Shift + P or Cmd + Shift + P).
        Type `Open User Settings (JSON)` and press Enter.
        Add or update the following line:

```json
editor.formatOnSave": true
```

**2. Set a Default Formatter**
If you have multiple formatters installed (like Prettier, Black, or the built-in language tools), VS Code needs to know which one to use automatically.

1. Open any code file.
2. Press `Shift + Alt + F`(Windows) or `Shift + Option + F` (macOS) to trigger a manual format.
3. If prompted, click Configure... and select your preferred formatter (e.g., [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)).

## Add HTML tag to highlighted text

**The Standard Method (Built-in)**

1. **Highlight** the text you want to wrap.
2. Open the **Command Palette**:

    - **Windows/Linux:** Ctrl + Shift + P
    - **macOS:** Cmd + Shift + P

3. Type "**Wrap with Abbreviation**" and press Enter.
4. Type the tag you want (e.g., div, p, span) in the input box that appears at the top.

    **Pro Tip:** You can add classes or IDs immediately. For example, typing span.highlight will wrap your text in

```html
    <span class="highlight">...</span>
```

**Using Extensions**

If you prefer a dedicated "one-click" style experience, you can install extensions from the VS Code Marketplace:

- [htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap): This is a popular choice. Once installed, you can simply press Alt + W to wrap selected text in a tag automatically.
- [Surround with Tag](https://marketplace.visualstudio.com/items?itemName=BalduinLandolt.surround-with-tag): Provides a similar functionality with a dedicated prompt for the tag name.

**Quick Tips for HTML Tags**

- Multi-line Wrap: If you select multiple lines and use the Emmet Wrap command with `ul>li*`, Emmet will intelligently wrap each line in its own `<li> tag inside a <ul>`.

- Auto-Close: VS Code has [built-in support](https://code.visualstudio.com/docs/languages/html) for auto-closing tags. If you manually type `<p>`, it will automatically create `</p>`for you, though wrapping is usually faster for existing text.

## Remove HTML tag pair

1. **Place your cursor** anywhere inside the opening or closing tag you want to delete.
2. Open the **Command Palette**:

    - **Windows/Linux:** Ctrl + Shift + P
    - **macOS:** Cmd + Shift + P

3. Type "**Emmet: Remove Tag**" and press Enter.

# Extension for your consideration

- Markdown converter pdf, word
- Mermaid Text to Diagram
