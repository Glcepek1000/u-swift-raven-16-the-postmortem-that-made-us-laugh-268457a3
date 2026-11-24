# TEST_RESULTS.md — The Postmortem That Made Us Laugh

Run evidence (real runs, 2026-11-24 ~18:47 WIB, Node v24.22.1).

## 1. Setup

```
$ bash setup.sh
v24.22.1
setup OK: no dependencies (Node stdlib only)
```

## 2. Clean-dir run (independent verification)

Copied the repo to a fresh directory `/tmp/postmortem-clean/repo` and ran:

```
$ OUTPUT_DIR=/tmp/postmortem-out node main.ts
```

Output `entry.txt`:

```
I asked it to speed up the homepage; it cached one logged-in user's dashboard and served their bank balance to every visitor for three hours.
```

Checks (Python, byte-level):

- chars: **141** (gate: 1–400) ✅
- bytes: **141** ✅
- trailing newline: **False** ✅ (no trailing newline, byte-exact)
- whitespace-only: **False** ✅
- sha256: `f41f1e9df0c5717ddf6759cd86e2fc1734a47601da73ef47442b7077556665c5`
- sentences: 1 ✅

## 3. Zero-fail QA

- Node stdlib only (`node:fs`); no network calls, no dependencies.
- No hardcoded paths (output dir defaults to `/output`; `OUTPUT_DIR` only
  for local verification), no secrets/keys/tokens in the repo.
- Only grep hit for secret-like words: the word "secrets" in a comment in
  `setup.sh` ("no secrets to configure") — not a credential.

## 4. Quota (2026-11-24 ~18:47 WIB)

`GET /api/competitions/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/quota`
→ HTTP 200, **can_submit: true**, day cap 5 (taken 0, left 5),
hard limit 40 (left 40), blind_round_slot available,
interval ends 2026-11-24T18:45:40Z.

## 5. Selection evidence

- 8 candidate lines drafted in-session (SolAPI gpt-6.1-sol down: HTTP 503 on
  both allowed attempts, 2/2 — no model switch, worked in-session).
- Full round-robin pairwise judging, 28 pairs, margin 1–5 per judge criteria
  in order. Winner (cache/bank-balance line): 7/7 wins. Runner-up
  (hallucinated-auth, "every password works"): 6/7.
- 2-Pass Critique on the winner: 95/100 after tightening (gender-neutral
  wording, 141 chars).
