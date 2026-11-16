# Deploy

Situs: <https://farros-portfolio.vercel.app>
Repo: <https://github.com/milzammbmx123/farros-portfolio>
Project Vercel: <https://vercel.com/milzam/farros-portfolio>

## Cara deploy

| Cara | Perintah |
| --- | --- |
| Otomatis | `git push` (hook `pre-push` menjalankan deploy di background) |
| Manual | `npm run deploy` |
| Lewati auto-deploy sekali | `git push --no-verify` |

Log auto-deploy: `.git/vercel-deploy.log`

## Catatan penting

- **Jangan** menjalankan `npm run build` saat `npm run dev` aktif — keduanya memakai folder
  `.next` yang sama dan membuat asset dev 404. Build production dikerjakan di server Vercel.
- Hook `pre-push` hanya ada di clone ini (isi `.git/hooks/` tidak ikut ter-commit). Untuk mesin
  lain: `cp scripts/pre-push-deploy.sh .git/hooks/pre-push`.
- Nonaktifkan sementara auto-deploy: set `VERCEL_NO_AUTODEPLOY=1`.

## Kenapa tidak pakai integrasi Git Vercel

Akun GitHub `milzammbmx123` sedang **flagged** oleh GitHub, sehingga tidak bisa mengotorisasi
aplikasi pihak ketiga (Vercel GitHub App). Karena itu auto-deploy dijalankan lewat hook lokal,
bukan lewat GitHub App.

Setelah flag dicabut (ajukan di <https://support.github.com/contact/reinstatement>), integrasi
resmi bisa dipasang dan hook lokal ini boleh dihapus:

1. <https://vercel.com/account/login-connections> → Connect GitHub
2. Project → Settings → Git → Connect Git Repository → `farros-portfolio`
3. `rm .git/hooks/pre-push`

Setelah terhubung, setiap push ke `main` otomatis jadi production deployment, dan branch lain
mendapat preview URL.

## Domain sendiri (opsional)

Vercel → Project → Settings → Domains → Add. Lalu di DNS registrar:

- `A` → `76.76.21.21`, atau
- `CNAME` → `cname.vercel-dns.com`

Setelah domain aktif, set env `NEXT_PUBLIC_SITE_URL=https://domainkamu.com` di Vercel
(Settings → Environment Variables) supaya `og:url` dan canonical ikut berubah.

## Preview tautan (OG image)

`/opengraph-image` dibuat dinamis (1200×630). Kalau preview WhatsApp/LinkedIn belum berubah,
segarkan cache di:

- <https://developers.facebook.com/tools/debug/>
- <https://www.linkedin.com/post-inspector/>
