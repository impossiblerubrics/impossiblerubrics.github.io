# ImpossibleRubrics

Project page for **ImpossibleRubrics: Stress-Testing Generated Rubrics as Reward Signals**.

**[Project page](https://impossiblerubrics.github.io/)** ·
**[Paper PDF](https://impossiblerubrics.github.io/assets/impossiblerubrics.pdf)** ·
**[Code & data](https://github.com/impossiblerubrics/impossible_rubrics)**

Bowen Qin, Yi Xie, Yesheng Liu, and Xi Yang.

Bowen Qin's [personal homepage](https://eyuansu62.github.io/) is linked from the
author list. The downloadable PDF includes keywords, links to the project page,
benchmark Releases and evaluation repository, plus the correspondence address
`qin.bowen@u.nus.edu` on its first page.

## Website

This repository contains the static project page and its preprint PDF.
It is the website source, not the experimental code or dataset release.
The opening overview condenses the paper's question, method and headline result;
the full abstract remains in the linked PDF.
The worked climate-sensitivity example is excerpted from Figures 1–2: the
rubric gives the honest response 25/100 and the attacker response
`3` 100/100. The homepage spelling of Yi Xie follows the latest author correction.
Paper Figure 2 also uses paired answer cards with aligned rubric scores,
proportional bars and separate certificate verdicts. It highlights the 75-point
reward advantage of the evidence-violating answer.
The example follows four stages: the unsupported task demand, model-generated
rubric, rubric-targeted attack against a fixed honest baseline, and separate
reward/evidence checks. Stages 3–4 are grouped into paired cards, each containing
the answer, its rubric score and its certificate verdict. Rubric criteria stay
visible. The conclusion uses the
benchmark's actual conjunction: reward at least equal to the baseline plus a
certificate violation. Full source and protocol details can be expanded.
The example's opening model-role blocks follow the author's latest correction:
Opus 5 is the rubric generator, attacker and oracle; Haiku 4.5 is the judge.
These clarified identities supersede the earlier homepage labels.

Edit `index.html`, `styles.css`, or `main.js` and push to `main` to update
GitHub Pages. Replace `assets/impossiblerubrics.pdf` when updating the paper.
GitHub Pages serves the root of `main` with `.nojekyll`; there is no build step.

For a local preview:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

The website uses no external fonts, analytics, or third-party JavaScript.
