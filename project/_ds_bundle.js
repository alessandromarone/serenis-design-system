/* @ds-bundle: {"format":4,"namespace":"SerenisDesignSystem_452571","components":[{"name":"ILLUSTRATIONS","sourcePath":"components/brand/Illustration.jsx"},{"name":"Illustration","sourcePath":"components/brand/Illustration.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Wave","sourcePath":"components/brand/Wave.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ChoiceOption","sourcePath":"components/forms/ChoiceOption.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"SocialSlide","sourcePath":"components/social/SocialSlide.jsx"},{"name":"Statement","sourcePath":"components/social/Statement.jsx"}],"sourceHashes":{"components/brand/Illustration.jsx":"d357cb37f687","components/brand/Logo.jsx":"ca78d4e498f6","components/brand/Wave.jsx":"35d5f407aad8","components/core/Button.jsx":"da0725cc80bf","components/core/Card.jsx":"6d9f44042ceb","components/core/Tag.jsx":"a5a466451108","components/forms/ChoiceOption.jsx":"ee53b398f012","components/forms/TextField.jsx":"77b5a70f4059","components/social/SocialSlide.jsx":"a50df7cf04f6","components/social/Statement.jsx":"923eea0e083d","ui_kits/instagram/PostViewer.jsx":"6b11c41273b9","ui_kits/instagram/Profile.jsx":"3516dc5c14d9","ui_kits/instagram/posts.jsx":"a7f67662c0a8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SerenisDesignSystem_452571 = window.SerenisDesignSystem_452571 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Illustration.jsx
try { (() => {
const BASE = typeof window !== 'undefined' && window.SERENIS_ASSET_BASE || '';
const ILLUSTRATIONS = {
  'omino-zoom': 'omino-zoom.png',
  'omino-zoom-1': 'omino-zoom-1.png',
  'omino-1': 'omino-1.png',
  'omino-2': 'omino-2.png',
  'omino-annoiato': 'omino-annoiato.png',
  'omino-appoggiato': 'omino-appoggiato.png',
  'omino-appoggiato-2': 'omino-appoggiato-2.png',
  'omino-cade': 'omino-cade.png',
  'omino-caffe': 'omino-caffe.png',
  'omino-cucu': 'omino-cucu.png',
  'omino-centro': 'omino-centro.svg',
  'omino-bici': 'omino-bici.svg',
  'livello-1-10': 'livello-1-10.png',
  'batti-8': 'batti-8.png',
  'batti-pasta': 'batti-pasta.png',
  'mani-e-piedi': 'mani-e-piedi.png',
  'mano-16': 'mano-16.png',
  'mano-17': 'mano-17.png',
  'mano-18': 'mano-18.png',
  'mano-19': 'mano-19.png',
  'mano-20': 'mano-20.png',
  'mano-21': 'mano-21.png',
  'mano-22': 'mano-22.png',
  'mano-23': 'mano-23.png',
  'mano-alt': 'mano-alt.png',
  'mano-alt-1': 'mano-alt-1.png',
  'mano-alt-2': 'mano-alt-2.png',
  'mano-gratis': 'mano-gratis.png',
  'mano-sconto': 'mano-sconto.png'
};
function Illustration({
  name = 'omino-zoom',
  width,
  height,
  fit = 'contain',
  base = BASE + 'assets/illustrations/',
  style,
  alt = ''
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: base + (ILLUSTRATIONS[name] || name),
    alt: alt,
    style: {
      width,
      height,
      objectFit: fit,
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { ILLUSTRATIONS, Illustration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Illustration.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const LOGO_BASE = typeof window !== 'undefined' && window.SERENIS_ASSET_BASE || '';
const FILES = {
  logo: {
    violet: 'serenis-logo-violet.svg',
    black: 'serenis-logo-black.svg',
    white: 'serenis-logo-white.svg'
  },
  payoff: {
    violet: 'serenis-logo-payoff-default.svg',
    black: 'serenis-logo-payoff-black.svg',
    white: 'serenis-logo-payoff-white.svg'
  },
  mark: {
    violet: 'serenis-pittogramma-default.svg',
    black: 'serenis-pittogramma-black.svg',
    white: 'serenis-pittogramma-white.svg'
  }
};
const COLOR = {
  violet: 'var(--violet-500)',
  black: 'var(--ink)',
  white: '#fff'
};
function Logo({
  variant = 'logo',
  color = 'violet',
  vertical,
  layout = 'horizontal',
  height = 32,
  base = LOGO_BASE + 'assets/logo/',
  style
}) {
  const src = base + FILES[variant === 'vertical' ? 'mark' : variant][color];
  if (!vertical) return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Serenis",
    style: {
      height,
      display: 'block',
      ...style
    }
  });
  const label = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: height * 0.62,
      lineHeight: 1,
      color: COLOR[color],
      letterSpacing: '-0.01em'
    }
  }, vertical);
  if (layout === 'compact') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: height * 0.18,
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: base + FILES.logo[color],
      alt: "Serenis",
      style: {
        height,
        display: 'block'
      }
    }), label);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: height * 0.35,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + FILES.logo[color],
    alt: "Serenis",
    style: {
      height,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: Math.max(1.5, height * 0.05),
      alignSelf: 'stretch',
      background: COLOR[color],
      opacity: 0.9
    }
  }), label);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wave.jsx
try { (() => {
const PATHS = {
  soft: 'M0 60 C 150 10, 300 110, 450 60 S 750 10, 900 60 S 1200 110, 1200 60 V 120 H 0 Z',
  deep: 'M0 70 C 200 -10, 400 150, 600 70 S 1000 -10, 1200 70 V 120 H 0 Z'
};

/** Undulating edge used to frame/crop photos. Approximation — replace with the official shape file when available. */
function Wave({
  color = 'white',
  shape = 'soft',
  flip = false,
  height = 80,
  style
}) {
  const fill = color === 'violet' ? 'var(--violet-500)' : color === 'lavender' ? 'var(--violet-100)' : '#fff';
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 120",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: '100%',
      height,
      transform: flip ? 'scaleY(-1)' : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: PATHS[shape],
    fill: fill
  }));
}
Object.assign(__ds_scope, { Wave });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wave.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  s: {
    h: 36,
    px: 16,
    fs: 14
  },
  m: {
    h: 48,
    px: 24,
    fs: 16
  },
  l: {
    h: 60,
    px: 32,
    fs: 18
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--violet-500)',
    fg: '#fff',
    bd: 'var(--violet-500)',
    hover: 'var(--violet-600)'
  },
  secondary: {
    bg: 'var(--violet-100)',
    fg: 'var(--violet-800)',
    bd: 'var(--violet-100)',
    hover: 'var(--violet-200)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--violet-500)',
    bd: 'var(--violet-500)',
    hover: 'var(--violet-50)'
  },
  inverse: {
    bg: '#fff',
    fg: 'var(--violet-600)',
    bd: '#fff',
    hover: 'var(--violet-100)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--violet-600)',
    bd: 'transparent',
    hover: 'var(--violet-50)'
  }
};
function Button({
  variant = 'primary',
  size = 'm',
  disabled,
  fullWidth,
  iconRight,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant],
    s = SIZES[size];
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      height: s.h,
      padding: `0 ${s.px}px`,
      fontSize: s.fs,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      borderRadius: 'var(--radius-pill)',
      border: `1.5px solid ${v.bd}`,
      background: hover && !disabled ? v.hover : v.bg,
      color: v.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : undefined,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: press && !disabled ? 'scale(0.97)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
      ...style
    }
  }, children, iconRight && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const TONES = {
  white: {
    bg: '#fff',
    fg: 'var(--ink)',
    bd: 'var(--line)'
  },
  tint: {
    bg: 'var(--violet-100)',
    fg: 'var(--violet-900)',
    bd: 'var(--violet-100)'
  },
  brand: {
    bg: 'var(--violet-500)',
    fg: '#fff',
    bd: 'var(--violet-500)'
  },
  dark: {
    bg: 'var(--violet-900)',
    fg: '#fff',
    bd: 'var(--violet-900)'
  }
};
function Card({
  tone = 'white',
  eyebrow,
  title,
  children,
  media,
  padding = 24,
  radius = 'var(--radius-l)',
  elevated,
  style
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: radius,
      overflow: 'hidden',
      boxShadow: elevated ? 'var(--shadow-soft)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, media, /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      opacity: 0.75
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      textWrap: 'pretty'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.45,
      textWrap: 'pretty'
    }
  }, children)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const TONES = {
  brand: {
    bg: 'var(--violet-500)',
    fg: '#fff'
  },
  soft: {
    bg: 'var(--violet-100)',
    fg: 'var(--violet-800)'
  },
  white: {
    bg: '#fff',
    fg: 'var(--violet-600)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--violet-600)',
    bd: 'var(--violet-500)'
  },
  dark: {
    bg: 'var(--violet-900)',
    fg: '#fff'
  }
};
function Tag({
  tone = 'soft',
  size = 'm',
  children,
  style
}) {
  const t = TONES[tone];
  const s = size === 's' ? {
    h: 24,
    px: 10,
    fs: 12
  } : size === 'l' ? {
    h: 44,
    px: 20,
    fs: 18
  } : {
    h: 32,
    px: 14,
    fs: 14
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: `1.5px solid ${t.bd || t.bg}`,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: s.fs,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceOption.jsx
try { (() => {
/** Answer option used in the entry questionnaire (single or multi choice). */
function ChoiceOption({
  label,
  selected,
  multi,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      minHeight: 56,
      padding: '14px 18px',
      textAlign: 'left',
      borderRadius: 'var(--radius-m)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.3,
      border: `1.5px solid ${selected ? 'var(--violet-500)' : hover ? 'var(--violet-300)' : 'var(--line)'}`,
      background: selected ? 'var(--violet-100)' : '#fff',
      color: 'var(--ink)',
      fontWeight: selected ? 700 : 400,
      transition: 'border-color var(--dur-fast), background var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: multi ? 6 : '50%',
      boxSizing: 'border-box',
      border: `2px solid ${selected ? 'var(--violet-500)' : 'var(--ink-3)'}`,
      background: selected ? 'var(--violet-500)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: multi ? 10 : 8,
      height: multi ? 10 : 8,
      borderRadius: multi ? 2 : '50%',
      background: '#fff'
    }
  })), label);
}
Object.assign(__ds_scope, { ChoiceOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceOption.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  placeholder,
  value,
  onChange,
  hint,
  error,
  type = 'text',
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const bd = error ? 'var(--danger)' : focus ? 'var(--violet-500)' : 'var(--line)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 52,
      padding: '0 16px',
      borderRadius: 'var(--radius-m)',
      border: `1.5px solid ${bd}`,
      outline: 'none',
      boxShadow: focus ? '0 0 0 4px var(--violet-100)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ink)',
      background: '#fff',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--ink-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/social/SocialSlide.jsx
try { (() => {
const TONES = {
  white: {
    bg: '#fff',
    fg: 'var(--navy)',
    logo: 'black'
  },
  tint: {
    bg: 'var(--violet-200)',
    fg: 'var(--navy)',
    logo: 'black'
  },
  lilac: {
    bg: 'var(--violet-300)',
    fg: 'var(--navy)',
    logo: 'black'
  },
  violet: {
    bg: 'var(--violet-500)',
    fg: '#fff',
    logo: 'white'
  },
  dark: {
    bg: 'var(--navy)',
    fg: '#fff',
    logo: 'white'
  }
};
const BASE = typeof window !== 'undefined' && window.SERENIS_ASSET_BASE || '';

/** Instagram post/carousel slide on the native 1080-wide canvas, scaled with `scale`. */
function SocialSlide({
  tone = 'white',
  format = 'portrait',
  showLogo = true,
  align = 'left',
  scale = 1,
  base = BASE + 'assets/logo/',
  children,
  style
}) {
  const t = TONES[tone] || TONES.white;
  const H = format === 'square' ? 1080 : format === 'story' ? 1920 : 1350;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080 * scale,
      height: H * scale,
      overflow: 'hidden',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: H,
      transform: `scale(${scale})`,
      transformOrigin: '0 0',
      background: t.bg,
      color: t.fg,
      position: 'relative',
      boxSizing: 'border-box',
      padding: '250px 100px 100px',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'stretch'
    }
  }, showLogo && /*#__PURE__*/React.createElement("img", {
    src: base + (t.logo === 'white' ? 'serenis-logo-white.svg' : 'serenis-logo-black.svg'),
    alt: "Serenis",
    style: {
      position: 'absolute',
      left: 100,
      top: 80,
      height: 56
    }
  }), children));
}
Object.assign(__ds_scope, { SocialSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialSlide.jsx", error: String((e && e.message) || e) }); }

// components/social/Statement.jsx
try { (() => {
/** Big headline block for social slides, optional supporting line and hand-marker label. */
function Statement({
  marker,
  children,
  sub,
  size = 'l',
  style
}) {
  const fs = size === 'xl' ? 110 : size === 'm' ? 72 : 88;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 48,
      ...style
    }
  }, marker && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      background: '#fff',
      color: 'var(--violet-500)',
      borderRadius: '44px 36px 48px 40px',
      padding: '26px 48px',
      margin: '0 -40px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 96,
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, marker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      textWrap: 'pretty'
    }
  }, children), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: size === 'xl' ? 52 : 40,
      lineHeight: 1.3
    }
  }, sub));
}
Object.assign(__ds_scope, { Statement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/Statement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/PostViewer.jsx
try { (() => {
function FeedPost({
  post
}) {
  const W = 390,
    H = W * 1.25;
  const n = post.kind === 'reel' ? 1 : post.count || post.slides.length;
  const [i, setI] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const x0 = React.useRef(null);
  const go = d => setI(v => Math.max(0, Math.min(n - 1, v + d)));
  const fmt = v => v == null ? '' : v + (liked && v === post.likes ? 1 : 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    s: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 13,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontWeight: 700
    }
  }, "serenis.it ", /*#__PURE__*/React.createElement(Verified, {
    s: 13
  }), post.collab && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "\xA0e ", post.collab)), post.music && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "music",
    s: 12
  }), post.music)), /*#__PURE__*/React.createElement(Ic, {
    n: "menu",
    s: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: W,
      height: H,
      overflow: 'hidden',
      touchAction: 'pan-y',
      userSelect: 'none'
    },
    onPointerDown: e => x0.current = e.clientX,
    onPointerUp: e => {
      if (x0.current == null) return;
      const dx = e.clientX - x0.current;
      if (Math.abs(dx) > 30) go(dx < 0 ? 1 : -1);
      x0.current = null;
    },
    onDoubleClick: () => setLiked(true)
  }, post.kind === 'reel' ? /*#__PURE__*/React.createElement(ReelFrame, {
    post: post,
    w: W,
    h: H
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      transform: `translateX(${-i * W}px)`,
      transition: 'transform var(--dur-slow) var(--ease-soft)'
    }
  }, Array.from({
    length: n
  }, (_, k) => /*#__PURE__*/React.createElement(PostSlide, {
    key: k,
    post: post,
    i: k,
    scale: W / 1080
  }))), n > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      background: 'rgba(20,20,20,.7)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 700,
      padding: '4px 9px',
      borderRadius: 14
    }
  }, i + 1, "/", n), post.music && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      bottom: 14,
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'rgba(20,20,20,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "volume-2",
    s: 14,
    style: {
      filter: 'invert(1)'
    }
  })), i > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    style: navBtn('left')
  }, "\u2039"), i < n - 1 && /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    style: navBtn('right')
  }, "\u203A")), n > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 4,
      paddingTop: 10
    }
  }, Array.from({
    length: Math.min(n, 5)
  }, (_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: k === Math.min(i, 4) ? '#4A5DF9' : '#DBDBDB'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '10px 14px 6px',
      fontSize: 14,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(l => !l),
    style: actBtn
  }, liked ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FF3040',
      fontSize: 25,
      lineHeight: '24px'
    }
  }, "\u2665") : /*#__PURE__*/React.createElement(Ic, {
    n: "heart"
  }), fmt(post.likes)), /*#__PURE__*/React.createElement("span", {
    style: actBtn
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "message-circle"
  }), post.comments), /*#__PURE__*/React.createElement("span", {
    style: actBtn
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "repeat-2"
  }), post.reposts), /*#__PURE__*/React.createElement("span", {
    style: actBtn
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "send"
  }), post.shares), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSaved(s => !s),
    style: {
      ...actBtn,
      marginLeft: 'auto',
      opacity: saved ? 1 : 0.9
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "bookmark",
    style: {
      filter: saved ? 'none' : undefined,
      background: saved ? 'transparent' : undefined
    }
  }), saved && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "Salvato"))), post.caption && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '2px 14px',
      fontSize: 13,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("b", null, "serenis.it"), " ", post.caption, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#737373'
    }
  }, "altro")), post.date && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 14px',
      fontSize: 11,
      color: '#737373'
    }
  }, post.date));
}
const navBtn = side => ({
  position: 'absolute',
  top: '50%',
  [side]: 8,
  transform: 'translateY(-50%)',
  width: 26,
  height: 26,
  borderRadius: '50%',
  border: 0,
  background: 'rgba(255,255,255,.85)',
  color: '#000',
  fontSize: 18,
  lineHeight: '24px',
  cursor: 'pointer',
  padding: 0
});
const actBtn = {
  border: 0,
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  fontSize: 14,
  fontWeight: 700,
  color: '#000',
  fontFamily: 'inherit'
};
function FeedScreen({
  start,
  onBack
}) {
  const idx = POSTS.findIndex(p => p.id === start.id);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid #DBDBDB',
      background: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "chevron-left",
    s: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Post"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12
    }
  }, "serenis.it")), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 40,
      padding: '0 18px',
      borderRadius: 20,
      border: '1px solid #DBDBDB',
      background: '#fff',
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, "Segui")), /*#__PURE__*/React.createElement("div", {
    className: "noscroll",
    style: {
      overflowY: 'auto',
      flex: 1,
      scrollbarWidth: 'none'
    }
  }, POSTS.slice(idx).map(p => /*#__PURE__*/React.createElement(FeedPost, {
    key: p.id,
    post: p
  }))));
}
Object.assign(window, {
  FeedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/PostViewer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/Profile.jsx
try { (() => {
const {
  Logo,
  Illustration: HLIllu
} = window.SerenisDesignSystem_452571;
const Ic = ({
  n,
  s = 24,
  style
}) => /*#__PURE__*/React.createElement("img", {
  src: `https://unpkg.com/lucide-static@0.454.0/icons/${n}.svg`,
  width: s,
  height: s,
  alt: "",
  style: {
    display: 'block',
    ...style
  }
});
const Verified = ({
  s = 16
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    width: s,
    height: s,
    borderRadius: '50%',
    background: '#2F8CF0',
    color: '#fff',
    fontSize: s * 0.62,
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'none'
  }
}, "\u2713");
const Avatar = ({
  s = 40,
  ring = true
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: s,
    height: s,
    borderRadius: '50%',
    padding: ring ? s * 0.06 : 0,
    border: ring ? `${Math.max(2, s * 0.035)}px solid var(--violet-500)` : 0,
    boxSizing: 'border-box',
    flex: 'none'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'var(--violet-500)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Logo, {
  variant: "mark",
  color: "white",
  height: s * 0.42
})));
const igS = {
  phone: {
    width: 390,
    height: 844,
    borderRadius: 48,
    background: '#fff',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 0 0 10px #141414, 0 30px 80px rgba(36,24,87,.25)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'var(--font-body)',
    color: '#000'
  },
  status: {
    height: 44,
    flex: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '0 30px',
    fontWeight: 700,
    fontSize: 15
  }
};
const HIGHLIGHTS = [['Chi siamo', 'mano-16', 'var(--violet-500)'], ['Come funziona', 'mano-alt', 'var(--navy)'], ['Agevolazioni', 'mano-sconto', 'var(--violet-500)'], ['Test gratis', 'mano-gratis', 'var(--navy)'], ['Consiglia', 'batti-8', 'var(--violet-500)']];
function ProfileHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 14px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    s: 88
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "Serenis"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      lineHeight: 1.15
    }
  }, [['1837', 'post'], ['646 mila', 'follower'], ['213', 'seguiti']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, n), l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#737373'
    }
  }, "Centro medico"), /*#__PURE__*/React.createElement("div", null, "\uD83C\uDFE5 Centro medico online. Per le persone e per le aziende."), /*#__PURE__*/React.createElement("div", null, "\uD83D\uDC9C Seguici su ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#3B56C4'
    }
  }, "@serenis.nutrizione"), " e ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#3B56C4'
    }
  }, "@serenis.adhd")), /*#__PURE__*/React.createElement("div", null, "\uD83D\uDC47 Inizia da qui"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: '#3B56C4',
      fontWeight: 700,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "link",
    s: 14
  }), "linktr.ee/serenis")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, [['Segui', '#4A5DF9', '#fff'], ['Messaggio', '#EFEFF2', '#000']].map(([l, bg, fg]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    style: {
      flex: 1,
      height: 32,
      border: 0,
      borderRadius: 8,
      background: bg,
      color: fg,
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, l)), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 34,
      height: 32,
      border: 0,
      borderRadius: 8,
      background: '#EFEFF2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "user-plus",
    s: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "noscroll",
    style: {
      display: 'flex',
      gap: 14,
      overflowX: 'auto',
      padding: '6px 0 10px',
      scrollbarWidth: 'none'
    }
  }, HIGHLIGHTS.map(([l, ill, bg]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      flex: 'none',
      width: 66
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      border: '1.5px solid #DBDBDB',
      padding: 3,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(HLIllu, {
    name: ill,
    width: 44,
    height: 44
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      whiteSpace: 'nowrap'
    }
  }, l)))));
}
function GridTile({
  post,
  onOpen
}) {
  const w = (390 - 4) / 3,
    h = w * 4 / 3;
  const sc = h / 1350,
    sw = 1080 * sc;
  const badge = post.pinned ? 'pin' : post.kind === 'reel' ? 'play' : (post.count || 1) > 1 ? 'copy' : null;
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(post),
    style: {
      border: 0,
      padding: 0,
      cursor: 'pointer',
      position: 'relative',
      width: '100%',
      height: h,
      overflow: 'hidden',
      background: '#eee'
    }
  }, post.kind === 'reel' ? /*#__PURE__*/React.createElement(ReelFrame, {
    post: post,
    w: w,
    h: h
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: (w - sw) / 2
    }
  }, /*#__PURE__*/React.createElement(PostSlide, {
    post: post,
    scale: sc
  })), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 7,
      right: 7,
      filter: 'invert(1) drop-shadow(0 0 1px rgba(0,0,0,.6))'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: badge,
    s: 16
  })));
}
function ProfileScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 14px'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: "chevron-left",
    s: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 19,
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, "serenis.it ", /*#__PURE__*/React.createElement(Verified, null)), /*#__PURE__*/React.createElement(Ic, {
    n: "ellipsis",
    s: 22,
    style: {
      marginLeft: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "noscroll",
    style: {
      overflowY: 'auto',
      flex: 1,
      scrollbarWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement(ProfileHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['grid-3x3', 'square-play', 'repeat-2', 'square-user'].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      padding: '10px 0',
      borderBottom: i === 0 ? '1.5px solid #000' : '1px solid #DBDBDB',
      opacity: i === 0 ? 1 : 0.45
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    n: n,
    s: 22
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 2
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement(GridTile, {
    key: p.id,
    post: p,
    onOpen: onOpen
  })))));
}
Object.assign(window, {
  igS,
  Ic,
  Verified,
  Avatar,
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/posts.jsx
try { (() => {
// Posts from the serenis.it profile (copy as seen in the reference screenshots).
const {
  SocialSlide,
  Statement,
  Illustration
} = window.SerenisDesignSystem_452571;
const ANSIA_LINE = 'CONTROLLO LE NOTIFICHE PER CALMARE L’ANSIA MA L’ANSIA AUMENTA PERCHÉ ';
const Missing = ({
  n,
  of
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    margin: 'auto',
    fontSize: 34,
    opacity: 0.5,
    textAlign: 'center'
  }
}, "Slide ", n, " di ", of, /*#__PURE__*/React.createElement("br", null), "contenuto non disponibile");
const POSTS = [{
  id: 'depressione',
  kind: 'post',
  pinned: true,
  tone: 'tint',
  count: 1,
  slides: [() => /*#__PURE__*/React.createElement(Statement, null, "Soffrire di depressione non significa solamente stare tutto il giorno al buio a piangere.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "La depressione pu\xF2 avere molte facce:")]
}, {
  id: 'routine',
  kind: 'reel',
  pinned: true,
  top: 'Come trasformare la routine in qualcosa di straordinario',
  bottom: 'la colazione in una degustazione'
}, {
  id: 'frasi-chimica',
  kind: 'post',
  pinned: true,
  tone: 'lilac',
  slides: [() => /*#__PURE__*/React.createElement(Statement, {
    sub: "Le abbiamo chieste a voi \uD83D\uDC9C"
  }, "Frasi della mia terapeuta che hanno alterato la chimica del mio cervello:")]
}, {
  id: 'carico',
  kind: 'reel',
  dark: true,
  top: 'Questa scena di "Ti lascio, ti odio, ti..." ci spiega il peso del carico mentale quando in una coppia la fatica non condivisa si trasforma in rabbia e stanchezza emotiva.',
  bottom: '- Ho passato mezza giornata'
}, {
  id: 'frasi-buio',
  kind: 'post',
  tone: 'white',
  count: 3,
  slides: [() => /*#__PURE__*/React.createElement(Statement, {
    sub: "Le abbiamo chieste a voi \uD83E\uDEC2"
  }, "Frasi della mia terapeuta che mi hanno acceso il cervello dopo mesi di buio:")]
}, {
  id: 'notifiche',
  kind: 'post',
  tone: 'violet',
  count: 2,
  slides: [() => /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -20,
      fontWeight: 700,
      fontSize: 19.5,
      lineHeight: 1.12,
      letterSpacing: '0.01em',
      textAlign: 'justify',
      textAlignLast: 'justify'
    }
  }, Array.from({
    length: 34
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, ANSIA_LINE + ANSIA_LINE.split(' ').slice(0, 2).join(' '))))]
}, {
  id: 'ansia-donne',
  kind: 'post',
  tone: 'white',
  count: 6,
  slides: [() => /*#__PURE__*/React.createElement(Statement, null, "L\u2019ansia non si presenta sempre con gli attacchi di panico.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Nelle donne si manifesta spesso attraverso segnali silenziosi che finiamo per scambiare per semplice stanchezza:")]
}, {
  id: 'fuori-posto',
  kind: 'reel',
  top: 'Risposte per chi si sente fuori posto, come una scatoletta di tonno tra le marmellate 💜'
}, {
  id: 'rabbia',
  kind: 'post',
  tone: 'dark',
  count: 8,
  music: 'Michael Jackson · They Don’t Care About Us (Remastered Ver…',
  likes: 1130,
  comments: 228,
  reposts: 108,
  shares: 156,
  date: '5 giorni fa',
  caption: 'Negli ultimi giorni le proteste hanno riempito le città e le autostrade, sfociando in alcuni casi in episodi di violenza e vandalismo…',
  slides: [() => /*#__PURE__*/React.createElement(Statement, {
    marker: "Ascoltare la rabbia",
    style: {
      marginTop: 160
    }
  }, "significa riconoscere", /*#__PURE__*/React.createElement("br", null), "che dietro una", /*#__PURE__*/React.createElement("br", null), "vetrina rotta pu\xF2", /*#__PURE__*/React.createElement("br", null), "nascondersi", /*#__PURE__*/React.createElement("br", null), "un disagio che", /*#__PURE__*/React.createElement("br", null), "\xE8 stato ignorato.")]
}, {
  id: 'appuntamento',
  kind: 'post',
  tone: 'tint',
  align: 'center',
  count: 5,
  music: 'Glorify, ChillØut · Lovely Moment',
  likes: 3750,
  comments: 19,
  reposts: 51,
  shares: 2133,
  date: '5 giorni fa',
  caption: 'Cercare nuove idee appuntamento diverse dalla solita cena al ristorante aiuta a spezzare la monotonia e a ritrovare entusiasmo 💜…',
  slides: [() => /*#__PURE__*/React.createElement(Statement, {
    size: "xl",
    sub: "(Per rendere speciale la routine)",
    style: {
      marginTop: 160
    }
  }, "35 idee di appuntamento che non sono una cena fuori \uD83D\uDC9C")]
}, {
  id: 'anno-terapia',
  kind: 'reel',
  top: '5 cose che puoi imparare in un anno di terapia',
  bottom: '5'
}, {
  id: 'arca',
  kind: 'post',
  tone: 'white',
  align: 'center',
  count: 5,
  collab: 'progettoarca',
  music: 'Helder Boutens · the kindness in her eyes',
  likes: 4832,
  comments: 44,
  reposts: 244,
  shares: 168,
  date: '17 ottobre',
  caption: 'Prima di giudicare la lentezza di qualcuno in coda, un’esitazione, una strada sbagliata o una scelta che non capiamo, bisognerebbe chiedersi quale storia c’è dietro 🫂…',
  slides: [() => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Statement, {
    size: "m"
  }, "Quella persona che rifiuta l'invito ad andare in una struttura per la notte\u2026"), /*#__PURE__*/React.createElement(Illustration, {
    name: "omino-centro",
    width: 760,
    style: {
      margin: '40px auto'
    }
  }), /*#__PURE__*/React.createElement(Statement, {
    size: "m"
  }, "forse non vuole abbandonare il suo cane, che \xE8 l\u2019unica famiglia che gli \xE8 rimasta."))]
}];
function PostSlide({
  post,
  i = 0,
  scale = 0.3
}) {
  const n = post.count || post.slides.length;
  const render = post.slides[i];
  return /*#__PURE__*/React.createElement(SocialSlide, {
    tone: post.tone,
    align: post.align,
    scale: scale
  }, render ? render() : /*#__PURE__*/React.createElement(Missing, {
    n: i + 1,
    of: n
  }));
}

// Reels: video frame not available — dark field + on-screen caption styling.
function ReelFrame({
  post,
  w,
  h
}) {
  const s = w / 390;
  const cap = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontStyle: 'italic',
    color: 'var(--violet-400)',
    textAlign: 'center',
    lineHeight: 1.15,
    textShadow: '0 0 1px #fff,0 0 1px #fff,0 0 2px #fff'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      background: post.dark ? '#000' : '#3B3848',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `${14 * s}px ${16 * s}px ${30 * s}px`,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cap,
      fontSize: (post.dark ? 15 : 19) * s
    }
  }, post.top), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,.35)',
      fontSize: 12 * s,
      fontFamily: 'var(--font-body)'
    }
  }, "video"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cap,
      color: '#fff',
      fontStyle: 'normal',
      fontWeight: 400,
      textShadow: 'none',
      fontSize: 16 * s
    }
  }, post.bottom || ''));
}
Object.assign(window, {
  POSTS,
  PostSlide,
  ReelFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/posts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ILLUSTRATIONS = __ds_scope.ILLUSTRATIONS;

__ds_ns.Illustration = __ds_scope.Illustration;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Wave = __ds_scope.Wave;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ChoiceOption = __ds_scope.ChoiceOption;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.SocialSlide = __ds_scope.SocialSlide;

__ds_ns.Statement = __ds_scope.Statement;

})();
