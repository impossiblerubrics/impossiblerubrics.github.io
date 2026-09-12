const copyButton = document.querySelector('#copy-citation');
const citation = document.querySelector('#bibtex');
const status = document.querySelector('#copy-status');

if (copyButton && citation && status) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent);
      copyButton.textContent = 'Copied';
      status.textContent = 'BibTeX copied to clipboard.';
      window.setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2000);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(citation);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Select and copy the highlighted BibTeX text.';
      copyButton.textContent = 'Text selected';
    }
  });
}
