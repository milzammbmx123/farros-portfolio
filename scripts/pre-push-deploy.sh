#!/bin/sh
# Dipanggil otomatis oleh Git setiap `git push`.
# Menjalankan deploy production ke Vercel di background, jadi push tidak tertahan.
#
# Log: .git/vercel-deploy.log
# Nonaktifkan sementara: git push --no-verify

if [ "$VERCEL_NO_AUTODEPLOY" = "1" ]; then
  exit 0
fi

if ! command -v npx >/dev/null 2>&1; then
  echo "pre-push: npx tidak ditemukan, deploy dilewati." >&2
  exit 0
fi

log="$(git rev-parse --git-dir)/vercel-deploy.log"

{
  echo "=== $(date '+%Y-%m-%d %H:%M:%S') push -> deploy ==="
} >> "$log" 2>&1

npx --yes vercel@latest deploy --prod --yes 2>&1 >> "$log" &
exit 0
