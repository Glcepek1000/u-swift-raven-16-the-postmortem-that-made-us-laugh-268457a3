#!/usr/bin/env bash
# One-shot setup: this entry needs nothing beyond Node 22+.
# No dependencies to install, no secrets to configure.
set -euo pipefail
node --version
echo "setup OK: no dependencies (Node stdlib only)"
