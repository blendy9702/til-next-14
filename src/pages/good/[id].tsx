import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <b>{id}번</b> 제품정보
    </div>
  );
}
