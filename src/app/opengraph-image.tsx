import { ImageResponse } from "next/og";

export const alt = "Farros Asadudin Milzam — 3D Artist & Informatics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SANS = "Inter Tight";
const SERIF = "Instrument Serif";

/** UA lama supaya Google Fonts mengirim TTF (satori tidak menerima woff2). */
const LEGACY_UA =
  "Mozilla/5.0 (Windows NT 6.1; rv:12.0) Gecko/20100101 Firefox/12.0";

async function loadFont(family: string, weight: number, italic = false) {
  try {
    const fam = family.replace(/ /g, "+");
    const spec = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${fam}:${spec}&display=swap`,
      { headers: { "User-Agent": LEGACY_UA } }
    ).then((r) => r.text());

    const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
    if (!url) return null;

    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [sansRegular, sansSemibold, serifItalic] = await Promise.all([
    loadFont(SANS, 400),
    loadFont(SANS, 600),
    loadFont(SERIF, 400, true),
  ]);

  // Font yang gagal diambil cukup dilewati; satori memakai font bawaan.
  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 600;
    style: "normal" | "italic";
  }[] = [];
  if (sansRegular)
    fonts.push({ name: SANS, data: sansRegular, weight: 400, style: "normal" });
  if (sansSemibold)
    fonts.push({ name: SANS, data: sansSemibold, weight: 600, style: "normal" });
  if (serifItalic)
    fonts.push({ name: SERIF, data: serifItalic, weight: 400, style: "italic" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f1eee5",
          color: "#17160f",
          padding: "64px 72px",
          fontFamily: SANS,
        }}
      >
        {/* baris atas */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#726d5e",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                border: "1px solid rgba(23,22,15,0.34)",
                fontSize: 18,
                letterSpacing: 1,
                color: "#17160f",
              }}
            >
              FA
            </div>
            <div style={{ display: "flex" }}>Portofolio — 2026</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                display: "flex",
                width: 8,
                height: 8,
                borderRadius: 8,
                backgroundColor: "#cf4f14",
              }}
            />
            <div style={{ display: "flex" }}>Malang, ID</div>
          </div>
        </div>

        {/* nama */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 126,
              fontWeight: 600,
              letterSpacing: -5,
              lineHeight: 0.96,
            }}
          >
            Farros Asadudin
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 140,
              fontWeight: 400,
              fontStyle: "italic",
              fontFamily: SERIF,
              letterSpacing: -2,
              lineHeight: 1,
              color: "#cf4f14",
            }}
          >
            Milzam
          </div>
        </div>

        {/* garis + meta */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              height: 1,
              backgroundColor: "rgba(23,22,15,0.34)",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              fontSize: 26,
              letterSpacing: 0.5,
            }}
          >
            <div style={{ display: "flex", gap: 18, color: "#17160f" }}>
              3D Visualization · Data &amp; Machine Learning · Web
            </div>
            <div style={{ display: "flex", fontSize: 22, color: "#726d5e" }}>
              farros-portfolio.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, ...(fonts.length ? { fonts } : {}) }
  );
}
