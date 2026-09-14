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
Paper Figure 1 now shows how missing prevention-trial evidence is turned into
an unsupported 0.0% preventive probability by a generated rubric. Its certificate
boundary and source/task identifiers are in the caption, and the figure
explicitly excludes the certificate from the generator input.
All seven criteria have separate rows and maximum-point values summing to 100;
grader notes sit below the table and carry no additional points. Full-credit
rules are summarized, with partial-credit bands omitted from the figure.
The homepage retains the worked climate-sensitivity benchmark example: the
rubric gives the honest response 25/100 and the attacker response
`3` 100/100. The homepage spelling of Yi Xie follows the latest author correction.
Paper Figure 2 uses paired cards with a score-first hierarchy: large rubric
scores and proportional bars, then the answer excerpt and a compact evidence
verdict. The paper's replacement example uses one recorded Sonnet-generator /
Opus-attacker / Haiku-judge / Opus-oracle draw, preserving the stored model aliases.
It shows the honest answer at 36/100 versus the attack at 100/100, a 64-point
reward advantage for the unsupported answer. Both responses are excerpted.
Model roles are listed once, and the card padding separates these layers. The paper figure inherits
the manuscript's XCharter font for its labels, answer text and numbers,
rendered as vector artwork.
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
