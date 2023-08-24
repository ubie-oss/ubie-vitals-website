/**
 * main要素からh2, h3要素を抽出し、目次を生成
 * @param target 見出しを生成する要素のセレクター
 * @returns void
 */
export const initToc = (target: string) => {
  const headings = document.querySelectorAll("article h2, article h3");

  const toc = document.querySelector(target);

  if (!toc) {
    return;
  }

  let currentH2: HTMLLIElement | null = null;
  headings.forEach((heading) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    li.appendChild(a);

    if (heading.tagName === "H2") {
      currentH2 = li;
      toc.appendChild(li);
    } else if (heading.tagName === "H3" && currentH2) {
      const ul = document.createElement("ul");
      ul.appendChild(li);
      currentH2.appendChild(ul);
    }
  });
};

export type Heading = {
  id: string;
  label: string;
  children?: Heading[];
};

// 見出し情報をmain要素以下から抽出
export const extractHeadingsFromMain = (): Heading[] => {
  document.querySelectorAll("article h2, article h3");

  const headings: Heading[] = [];
  let currentH2: Heading | null = null;
  document.querySelectorAll("article h2, article h3").forEach((heading) => {
    const item: Heading = {
      id: heading.id,
      label: heading.textContent || "",
    };

    if (heading.tagName === "H2") {
      currentH2 = item;
      headings.push(item);
    } else if (heading.tagName === "H3" && currentH2) {
      if (!currentH2.children) {
        currentH2.children = [];
      }
      currentH2.children.push(item);
    }
  });
  return headings;
};
