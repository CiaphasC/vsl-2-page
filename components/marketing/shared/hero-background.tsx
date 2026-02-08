export function HeroBackground() {
  return (
    <>
      <div className="smoke-effect">
        <svg
          className="absolute h-full w-full"
          id="cloud-bg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="cloud-shape" cx="10%" cy="20%" r="150" />
          <circle className="cloud-shape" cx="85%" cy="15%" r="200" />
          <circle className="cloud-shape" cx="50%" cy="50%" r="180" />
          <circle className="cloud-shape" cx="20%" cy="80%" r="160" />
          <circle className="cloud-shape" cx="90%" cy="70%" r="190" />
        </svg>
      </div>

      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div aria-hidden="true" className="hero-svg-layer">
        <svg
          id="hero-orbits"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hero-beam-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g className="hero-ring-group">
            <circle className="orbit-ring" cx="720" cy="420" r="180" />
            <circle className="orbit-ring alt" cx="720" cy="420" r="255" />
            <circle className="orbit-ring mobile-hide" cx="720" cy="420" r="340" />
            <circle className="orbit-ring alt mobile-hide" cx="720" cy="420" r="430" />
          </g>

          <g className="hero-prism-group">
            <polygon className="prism-facet" points="268,178 410,132 460,250 310,292" />
            <polygon className="prism-facet alt" points="952,152 1116,200 1060,324 894,286" />
            <polygon className="prism-facet mobile-hide" points="564,508 742,458 818,604 630,664" />
            <polygon className="prism-facet alt mobile-hide" points="132,476 278,438 332,578 182,624" />
            <polygon className="prism-facet mobile-hide" points="1064,494 1260,446 1328,612 1114,666" />
            <path className="prism-link mobile-hide" d="M342 208L696 392L1018 242" />
            <path className="prism-link mobile-hide" d="M248 548L694 392L1204 560" />
            <path className="prism-link" d="M332 244L742 560L1108 514" />
          </g>

          <g className="hero-beam-group">
            <path className="orbit-beam" d="M160 455C420 410 680 370 920 398C1090 420 1240 465 1360 520" />
            <path className="orbit-beam" d="M90 355C310 305 560 288 790 318C1010 345 1180 390 1330 460" />
            <path className="orbit-beam mobile-hide" d="M220 585C490 520 760 500 980 528C1140 548 1260 585 1370 635" />
          </g>

          <g className="hero-dot-group">
            <circle className="orbit-dot" cx="270" cy="208" r="4" />
            <circle className="orbit-dot dark" cx="360" cy="292" r="3" />
            <circle className="orbit-dot" cx="1140" cy="240" r="4" />
            <circle className="orbit-dot dark" cx="1220" cy="326" r="3" />
            <circle className="orbit-dot" cx="430" cy="640" r="4" />
            <circle className="orbit-dot dark" cx="585" cy="685" r="3" />
            <circle className="orbit-dot" cx="998" cy="620" r="4" />
            <circle className="orbit-dot dark" cx="1110" cy="672" r="3" />
            <circle className="orbit-dot mobile-hide" cx="150" cy="500" r="5" />
            <circle className="orbit-dot dark mobile-hide" cx="1298" cy="540" r="4" />
          </g>
        </svg>
      </div>
    </>
  );
}
