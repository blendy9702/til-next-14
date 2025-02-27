import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { keyword } = router.query;
  return (
    <div>
      <div>
        검색 <b>{keyword}</b> 페이지
      </div>
    </div>
  );
}
