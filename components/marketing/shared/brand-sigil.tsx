export function BrandSigil() {
  return (
    <div aria-hidden="true" className="brand-sigil-layer">
      <svg
        id="brand-prisms"
        preserveAspectRatio="none"
        viewBox="0 0 460 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon className="brand-prism" points="22,78 76,42 128,76 80,106" />
        <polygon className="brand-prism alt" points="144,26 206,12 236,52 166,68" />
        <polygon className="brand-prism" points="266,66 328,40 378,78 306,102" />
        <polygon className="brand-prism alt" points="344,18 408,32 434,68 358,58" />
        <path className="brand-line" d="M34 82L182 42L308 78L422 54" />
        <path className="brand-line" d="M74 100L190 54L322 94" />
        <circle className="brand-node" cx="82" cy="76" r="3" />
        <circle className="brand-node dark" cx="168" cy="50" r="2.6" />
        <circle className="brand-node" cx="314" cy="78" r="3.1" />
        <circle className="brand-node dark" cx="364" cy="58" r="2.4" />
      </svg>
    </div>
  );
}
