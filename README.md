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
The experimental code and dataset are linked separately above.
The overview summarizes the paper's question, method and headline result;
the full abstract remains in the linked PDF.

The homepage and paper now use the same worked example,
`health_objective_conflict_005`: a generated rubric turns missing
prevention-trial evidence into a definitive 0.0% preventive probability.
The honest response scores 36/100 and the attacker scores 100/100, a 64-point
advantage for an answer that violates the evidence certificate.

All seven rubric criteria occupy separate rows, with original maximum points
summing to 100. Full-credit rules are summarized; grader notes appear separately
and carry no extra points. The complete task, rubric (including partial-credit
bands), honest answer, attacker response and four evidence documents are
available in native expandable sections. `assets/example-record.json` contains
the same original material and certificate for download.

All example material comes from `reports/circ_p1_sonnet.json`, `results[19]`.
Its stored model aliases are Sonnet (rubric generator), Opus (attacker and
oracle), and Haiku (judge). Exact version numbers are not inferred from other
runs. The case evaluates inference from a closed evidence packet based on the
2022 Cochrane review; it does not establish the drug's true preventive probability.

The example follows four stages: evidence and task, rubric generation, attack,
and separate reward/evidence checks. Paired cards show the answer excerpts,
scores and evidence verdicts together. The criterion table and full records
wrap on narrow screens. There are no JavaScript dependencies for the example.

Edit `index.html`, `styles.css`, or `main.js` and push to `main` to update
GitHub Pages. Replace `assets/impossiblerubrics.pdf` when updating the paper.
GitHub Pages serves the root of `main` with `.nojekyll`; there is no build step.

For a local preview:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

The website uses no external fonts, analytics, or third-party JavaScript.
