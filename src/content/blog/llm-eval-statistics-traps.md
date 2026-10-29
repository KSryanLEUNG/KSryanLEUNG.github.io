---
title: "Five runs of one question are not five new questions: six statistical traps in LLM evaluation"
description: "Your new prompt scores 3 points higher. Can you ship it? Six places where LLM and agent evaluations go wrong: repeated runs, pass^k, joint success, coverage, zero variance and cost denominators."
pubDate: 2026-10-29
lang: en
tags: [LLM evaluation, Statistics, Agentic AI]
translationKey: llm-eval-statistics-traps
draft: false
---

You change a prompt, rerun the regression suite, and the average score (out of 100) goes up by 3 points. Can you ship it?

Before asking how much better the new version is, ask how the score was calculated. How many times did each question run? What happened to failures and missing results? What is the denominator? LLM outputs are random, and an evaluation often combines repeated runs, multiple checks and cost tracking. Get the unit or the denominator wrong at any step and a version that is no better can look like an improvement.

The six traps below each come with a small made-up example.

## 1. Repeated runs are not new questions

Say the suite has 18 questions and each one runs 5 times, giving 90 scores. It is tempting to treat them as 90 independent questions when estimating the margin of error. But those 90 scores mix at least two layers of variation:

- **Between questions:** some questions are hard, some are easy.
- **Within a question:** the same input produces a slightly different output each time.

Under fixed settings, the 5 runs of one question can be independent of each other, yet they are not 5 freshly drawn questions. You have 18 questions and 90 observations. The repeats tell you more about within-question variation; they do not widen the set of questions you covered.

Start by deciding what you want to generalise to. If the question is "would version B beat version A on new questions of this kind?", average each version's repeats within each question, take the per-question difference, and bootstrap over questions. Keep the pairing: when a question is resampled, its A and B results go together. If several questions share a source document, they form a cluster, and you should resample clusters instead.

If questions share a writable environment, so that one question's writes change the next one's answer, that is a design problem. Reset or isolate the environment; a corrected standard error will not fix it.

With only a handful of questions the bootstrap interval can itself be unstable, and drawing more bootstrap samples adds no information about questions you did not test. If you only want to know how these same 18 questions would perform on another run, you need a design that measures within-question variation.

## 2. pass^k is not the pass rate to the power of k

When an agent goes live, users care less about the average chance of a right answer than about whether it gets the same task right every time. `pass^k` measures that: **run each question k times and count the share of questions that pass all k runs.**

A common shortcut is to take the overall pass rate p and compute `p^k`. Here are 4 questions, each run 3 times. Two pass every time and two fail every time.

| Metric | How | Value |
|---|---|---:|
| Overall pass rate p | 6 of 12 runs pass | 50% |
| p cubed | 0.5³ | 12.5% |
| pass^3 | 2 of 4 questions pass all three runs | 50% |

Computing `p^k` quietly assumes every question is equally hard. In this example, two questions always pass and two always fail, yet `p^k` treats every question as if it had a 50% chance of success.

In terms of probabilities: let p<sub>i</sub> be the true single-run success probability of question i, and p the average of the p<sub>i</sub>. If runs of the same question are independent and identically distributed, the true `pass^k` is E[p<sub>i</sub><sup>k</sup>], and Jensen's inequality gives E[p<sub>i</sub><sup>k</sup>] ≥ (E[p<sub>i</sub>])<sup>k</sup> = p<sup>k</sup>. That is a statement about population probabilities. The 50% and 12.5% in the table are observed proportions from one batch, and estimates from a finite number of runs are not guaranteed to satisfy the same inequality.

So count `pass^k` per question rather than deriving it from the pass rate. (For simplicity, this assumes each question runs exactly k times. If each question gets a fixed number n of independent attempts under the same conditions, with c successes and n ≥ k, τ-bench estimates the chance that k attempts all succeed as C(c, k) / C(n, k) and averages that across questions.) Watch the notation too: `pass@k` means **at least one** of k attempts succeeds. It asks whether retrying eventually finds a right answer, which is a different question from whether every attempt succeeds.

## 3. Joint success must come from the same output

A usable answer often has to meet several conditions at once, for example "it answers the question" **and** "its numbers are supported by evidence". Both have to hold in the **same output**.

| Run | Answered | Numbers supported | Both |
|---|:---:|:---:|:---:|
| 1 | No | Not applicable | No |
| 2 | Yes | No | No |

Neither run meets both conditions. A common implementation bug is to drop the "not applicable" or missing results and then merge the checks by list position. The rows shift, and run 2's check ends up attached to run 1. By the same mechanism, if one run passed one condition and another run passed the other, stitching results across runs produces a success that never happened.

Record which question and which run every check belongs to, and join on that identity, not on list order. If there are retries, you need to be able to point to the exact output that was scored.

## 4. Report agreement with coverage

Suppose 100 items were in scope before the evaluation started. Only 20 were actually checked, and 19 of those matched the reference answer.

| Metric | How | Value |
|---|---|---:|
| Coverage | 20 / 100 | 20% |
| Agreement among checked items | 19 / 20 | 95% |
| Checked and matching, out of all items | 19 / 100 | 19% |

"95% agreement" describes those 20 items only. The other 80 could be right or wrong; **unchecked is not the same as passed**. And if the reference is not trustworthy ground truth, 95% is agreement, not accuracy. A scoring rule that gives the same result every time is not necessarily measuring the right thing.

Report coverage and the number of unchecked items whenever you report agreement. Exclusion rules are fine if they are set in advance and disclosed with reasons and counts. Removing the hard cases after seeing the results is not.

## 5. Zero variance does not mean zero noise

A common engineering rule compares the gap between two versions' average scores with how much the scores vary (their standard deviation), and calls it a tie when the gap is smaller. The rule has two blind spots:

- **One run per question (k = 1):** there is no way to estimate within-question variation from the results.
- **Both standard deviations are 0 but the averages differ:** say the old version is always right and the new one is always wrong. The ratio cannot be computed, but that is not a tie. A standard deviation of 0 only means this batch showed no variation, not that the true noise is zero. The averages still differ in this batch. Equal averages, likewise, only mean this batch showed no difference.

Rules like this are engineering conventions. They are not significance tests, they produce no p-value, and they cannot show that two versions are equivalent.

Another common habit is to fold accuracy and cost into one weighted score. If the new version is cheaper but consistently wrong on some questions, the combined score can still go up. My position is that quality comes first: lower cost should not offset a known regression in correctness. Report quality and cost separately and let a person make the trade-off. That is an engineering choice, not a statistical law.

## 6. The denominator decides the story

Cost needs a denominator too. Take 10 attempts: 8 succeed at a cost of 2 each, and 2 fail at a cost of 1 each (made-up cost units). Total cost is 18, and there are three ways to express the unit cost:

| Question | How | Value |
|---|---|---:|
| What does a successful answer cost on average? | 16 ÷ 8 | 2 |
| What does an attempt cost on average? | 18 ÷ 10 | 1.8 |
| What is the cost per successful delivery, including failed attempts? | 18 ÷ 8 | 2.25 |

None of these is wrong; they answer different operational questions. If the failure rate goes up, the average cost of a successful answer can go down and make the system look cheaper.

Show attempts, successes, failures and total cost side by side, and pick the denominator that matches the decision you are making, rather than whichever number is smallest.

## Two more things

**A regression suite is not real usage.** Regression questions are often collected from past failures. That makes them good at catching old bugs coming back, but even with a confidence interval they cannot estimate the failure rate real users will see, because the sample was selected (selection bias).

**A set you tuned the prompt on is no longer an independent final test set.** If you keep adjusting the prompt against the same questions, a good final score on those questions says little about new ones. The set is still useful as a regression suite. For the final evaluation, keep a held-out set that was never used to tune prompts, pick versions or set thresholds.

## Checklist

1. Am I generalising to new questions of this kind, or only to this fixed set? Is my unit the question, a cluster of questions, or a single run?
2. Is `pass^k` counted per question rather than derived from the pass rate? Have I confused it with `pass@k`?
3. Are joint conditions checked on the same output?
4. When I report agreement, do I also report coverage and the number of unchecked items?
5. With zero variance or one run per question, have I mistaken "cannot tell" for a tie? Are quality and cost reported separately?
6. Does the cost denominator match the decision?
7. Was the test set selected? Were the final evaluation questions used for prompt tuning, version selection or threshold setting?

## Further reading

- Heineman et al. (2025). *Signal and Noise: A Framework for Reducing Uncertainty in Language Model Evaluation*. [arXiv:2508.13144](https://arxiv.org/abs/2508.13144). The paper looks at how to measure signal (how well a benchmark separates better and worse models) and noise in evaluation scores. It estimates noise mainly from score fluctuation across late training checkpoints, and compares that with other sources such as initialisation and data order. I borrow the idea of measuring noise before interpreting differences in scores. This post is about repeated generations from a fixed model; it does not reproduce the paper's experiments, and the paper does not directly support any specific rule here.
- Yao et al. (2024). *τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains*. [arXiv:2406.12045](https://arxiv.org/abs/2406.12045). The source of the `pass^k` metric.
