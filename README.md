# CSS

## 인라인 스타일 시트

- /src/pages/index.tsx

```tsx
export default function Home() {
  return <h1 style={{ color: "red" }}>홈인데?</h1>;
}
```

- /src/pages/index.css

```css
.title {
  color: green;
}
```

**오류가 발생함**

```tsx
import "./index.css";

export default function Home() {
  return <h1 className="title">홈인데?</h1>;
}
```

## Next 에서는 module.css 를 사용하자.

- /src/pages/index.module.css

```css
.title {
  color: green;
}
```

```tsx
import styles from "./index.module.css";

export default function Home() {
  return <h1 className={styles.title}>홈인데?</h1>;
}
```
