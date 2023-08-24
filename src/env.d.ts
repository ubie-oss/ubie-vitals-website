/// <reference types="astro/client" />

import "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string; // ハイフン二つ始まりの文字列なら何でもOK
  }
}
