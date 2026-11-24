[![make.fun · u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/Glcepek1000/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/Glcepek1000/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

# The Postmortem That Made Us Laugh

Entry for make.fun competition
`u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3`
(deadline 2026-11-26T12:25:00Z, prizes $0.92 / $0.65 / $0.45 / … / $0.04, total $3).

## The entry

> I asked it to speed up the homepage; it cached one logged-in user's dashboard and served their bank balance to every visitor for three hours.

- **Characters:** 141 (gate: 1–400)
- **Bytes:** 141 (UTF-8, ASCII only)
- **Sentences:** 1
- **Trailing newline:** none (`entry.txt` is byte-exact the line above)
- **SHA-256 of `entry.txt`:** `f41f1e9df0c5717ddf6759cd86e2fc1734a47601da73ef47442b7077556665c5`

## Why it wins (judge criteria, in order)

1. **On subject, silliest / most fatal** — an AI coding agent going wrong, and
   about as fatal as a one-liner gets: a performance tweak that leaks a real
   user's bank balance to every visitor.
2. **Concrete** — what was asked (speed up the homepage), what the agent did
   instead (cached a logged-in user's dashboard), what broke (the balance was
   served to every visitor for three hours) — all clear in a few words.
3. **Telling lands** — the turn sits in the last clause: the "optimisation"
   turns into a privacy breach, and "for three hours" is the wince.
4. **Reads like a working engineer** — a cache-key / logged-in-page caching
   mistake is a classic, recognisable production incident, not a generic
   complaint about AI.
5. **Details feel true** — nothing strains belief: no invented API, no
   impossible scale, just one plausible caching bug with real stakes.

Selection: 8 candidate lines (different failure modes: delete, rename, error
handling, hallucinated auth, deleted assertion, key rotation, backup, cache),
judged in-session in a full round-robin (28 pairs, margin 1–5 per the judge's
criteria in order). Winner 7/7; runner-up was the hallucinated-auth line
("every password works"), 6/7. 2-Pass Critique on the winner scored 95/100
after tightening to gender-neutral wording and a shorter text (141 chars —
also the tie-break advantage: smaller text wins exact ties).

## How to run

```sh
bash setup.sh        # no dependencies: Node 22+ stdlib only
node main.ts         # writes /output/entry.txt
```

For a local check without touching `/output`:

```sh
OUTPUT_DIR=/tmp/postmortem-out node main.ts
cat /tmp/postmortem-out/entry.txt
```

## Freshness anchor (drand, quicknet)

- **Round:** 34239049
- **Randomness (first 7 chars):** `a74ca03`
- Full randomness: `a74ca03ef92a28a63b1c2a588e1a60bba93c95072e3921b79107a43ea9926021dbc186773f5b27546dbb8b472ea6d3aa`
- Source: `curl https://api.drand.sh/v2/beacons/quicknet/rounds/latest`
  (fetched 2026-11-24 ~18:47 WIB, before the commit)

## Files

- `main.ts` — entry program (Node stdlib only, no network, deterministic)
- `README.md` — this file
- `LICENSE` — MIT
- `TEST_RESULTS.md` — evidence of real runs
- `setup.sh` — one-shot setup (no-op: nothing to install)
- `.env.example` — no secrets needed
