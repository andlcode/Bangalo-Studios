import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{

    --bg-0:#fafbf7;
    --bg-1:#f3f6f2;
    --ink:#1f2937;       
    --muted:#6b7280;        
    --primary:#0ea5a4;    
    --primary-10:rgba(14,165,164,.12);
    --primary-20:rgba(14,165,164,.22);
    --danger:#dc2626;

    --card:#ffffff;
    --line:#e6e9ef;
    --field:#f8fafc;

    --shadow:0 22px 46px rgba(2,6,23,.07), 0 2px 8px rgba(2,6,23,.05);
    --radius-xl:22px;
    --radius-lg:16px;
    --radius-md:12px;

    --fs-1: clamp(1.2rem, 2.6vw, 1.8rem);
    --fs-2: clamp(1rem, 1.8vw, 1.1rem);
    --fs-3: .95rem;
  }

  *{box-sizing:border-box}
  html, body, #root{height:100%}
  body{
    margin:0;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    color:var(--ink);
    background:
      radial-gradient(1200px 700px at 12% -10%, #c8fff633, transparent 58%),
      radial-gradient(900px 480px at 110% 0%, #b7d4ff33, transparent 55%),
      linear-gradient(180deg, var(--bg-0), var(--bg-1));
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  :focus-visible{outline:3px solid var(--primary); outline-offset:2px}
  @media (prefers-reduced-motion: reduce){ *{animation:none!important; transition:none!important} }
`;
